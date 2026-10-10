import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseAccept, prefersMarkdown, prefersJson, markdownPathFor, appendVary, handle } from '../agent/negotiate.js';

test('parseAccept đọc kiểu và q', () => {
  assert.deepEqual(parseAccept('text/markdown, text/html;q=0.8, */*;q=0'), [
    { type: 'text/markdown', q: 1 },
    { type: 'text/html', q: 0.8 },
    { type: '*/*', q: 0 },
  ]);
  assert.deepEqual(parseAccept(''), []);
});

test('prefersMarkdown chỉ đúng khi client gọi tên text/markdown và không xếp nó dưới HTML', () => {
  assert.equal(prefersMarkdown('text/markdown'), true);
  assert.equal(prefersMarkdown('text/markdown, text/html;q=0.9'), true);
  assert.equal(prefersMarkdown('text/markdown;q=0.5, text/html'), false);
  assert.equal(prefersMarkdown('text/html,application/xhtml+xml,*/*;q=0.8'), false);
  assert.equal(prefersMarkdown('*/*'), false);
  assert.equal(prefersMarkdown('text/*'), false);
  assert.equal(prefersMarkdown('text/markdown;q=0'), false);
  assert.equal(prefersMarkdown(undefined), false);
});

test('prefersJson', () => {
  assert.equal(prefersJson('application/json'), true);
  assert.equal(prefersJson('application/problem+json'), true);
  assert.equal(prefersJson('text/html, application/json;q=0.5'), false);
  assert.equal(prefersJson('*/*'), false);
});

test('markdownPathFor ánh xạ trang sang file .md, bỏ qua asset và api', () => {
  assert.equal(markdownPathFor('/'), '/index.md');
  assert.equal(markdownPathFor('/index.html'), '/index.md');
  assert.equal(markdownPathFor('/tour/'), '/tour.md');
  assert.equal(markdownPathFor('/tour'), '/tour.md');
  assert.equal(markdownPathFor('/tour.html'), '/tour.md');
  assert.equal(markdownPathFor('/tour/ba-na-cau-vang/'), '/tour/ba-na-cau-vang.md');
  assert.equal(markdownPathFor('/tour/ba-na-cau-vang.html'), '/tour/ba-na-cau-vang.md');
  assert.equal(markdownPathFor('/assets/motion.js'), null);
  assert.equal(markdownPathFor('/og.png'), null);
  assert.equal(markdownPathFor('/openapi.json'), null);
  assert.equal(markdownPathFor('/api/tours.json'), null);
});

test('appendVary không lặp giá trị', () => {
  const h = new Headers({ Vary: 'accept-encoding' });
  appendVary(h, 'Accept');
  assert.equal(h.get('Vary'), 'accept-encoding, Accept');
  appendVary(h, 'Accept');
  assert.equal(h.get('Vary'), 'accept-encoding, Accept');
  const h2 = new Headers();
  appendVary(h2, 'Accept');
  assert.equal(h2.get('Vary'), 'Accept');
});

// Host giả: file .md có sẵn, trang HTML có sẵn, còn lại 404
const md = { '/index.md': '# Đà Nẵng lúc còn vắng\n\nNội dung.' };
const deps = {
  fetchAsset: async (p) => (md[p] ? new Response(md[p]) : new Response('', { status: 404 })),
  next: async () => new Response('<!doctype html><h1>x</h1>', { headers: { 'Content-Type': 'text/html; charset=utf-8', Vary: 'accept-encoding' } }),
};
const notFound = { ...deps, next: async () => new Response('<h1>404</h1>', { status: 404, headers: { 'Content-Type': 'text/html' } }) };
const req = (path, init = {}) => new Request('https://gionom.test' + path, init);

test('Accept: text/markdown → Markdown, Content-Type text/markdown, Vary: Accept', async () => {
  const res = await handle(req('/', { headers: { Accept: 'text/markdown' } }), deps);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('Content-Type'), 'text/markdown; charset=utf-8');
  assert.match(res.headers.get('Vary'), /\bAccept\b/);
  assert.match(await res.text(), /^# Đà Nẵng lúc còn vắng/);
});

test('HEAD với Accept: text/markdown → header Markdown, không body', async () => {
  const res = await handle(req('/', { method: 'HEAD', headers: { Accept: 'text/markdown' } }), deps);
  assert.equal(res.headers.get('Content-Type'), 'text/markdown; charset=utf-8');
  assert.equal(await res.text(), '');
});

test('Accept: text/html → HTML gốc, thêm Vary: Accept', async () => {
  const res = await handle(req('/', { headers: { Accept: 'text/html' } }), deps);
  assert.equal(res.headers.get('Content-Type'), 'text/html; charset=utf-8');
  assert.equal(res.headers.get('Vary'), 'accept-encoding, Accept');
  assert.match(await res.text(), /<h1>/);
});

test('Trang chưa có bản Markdown → rơi về HTML', async () => {
  const res = await handle(req('/khong-co/', { headers: { Accept: 'text/markdown' } }), deps);
  assert.match(res.headers.get('Content-Type'), /text\/html/);
});

test('/api/* không tồn tại → 404 application/problem+json (RFC 9457)', async () => {
  const res = await handle(req('/api/tours/khong-co.json'), notFound);
  assert.equal(res.status, 404);
  assert.equal(res.headers.get('Content-Type'), 'application/problem+json; charset=utf-8');
  const body = await res.json();
  assert.equal(body.status, 404);
  assert.equal(body.code, 'not_found');
  assert.equal(body.instance, '/api/tours/khong-co.json');
  assert.ok(body.title && body.detail && body.hint && body.type);
});

test('POST /api/* → 405 JSON kèm Allow', async () => {
  const res = await handle(req('/api/tours.json', { method: 'POST', body: '{}' }), deps);
  assert.equal(res.status, 405);
  assert.equal(res.headers.get('Allow'), 'GET, HEAD');
  assert.equal((await res.json()).code, 'method_not_allowed');
});

test('Trang 404 ngoài /api: JSON khi client muốn JSON, HTML khi không', async () => {
  const j = await handle(req('/khong-co/', { headers: { Accept: 'application/json' } }), notFound);
  assert.equal(j.headers.get('Content-Type'), 'application/problem+json; charset=utf-8');
  const h = await handle(req('/khong-co/', { headers: { Accept: 'text/html' } }), notFound);
  assert.equal(h.status, 404);
  assert.match(h.headers.get('Content-Type'), /text\/html/);
});
