// Chạy middleware Cloudflare Pages thật (functions/_middleware.js) trên bản build dist/,
// với ASSETS và next() giả lập cách Pages phục vụ file tĩnh (bỏ .html ở URL).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { onRequest } from '../functions/_middleware.js';

const dist = new URL('../dist/', import.meta.url).pathname;
const TYPES = { '.html': 'text/html; charset=utf-8', '.json': 'application/json', '.md': 'text/plain; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };
function serve(pathname) {
  const p = decodeURIComponent(pathname).replace(/\/+$/, '') || '/index';
  for (const f of [p, `${p}.html`, `${p}/index.html`]) {
    const full = path.join(dist, f);
    if (fs.existsSync(full) && fs.statSync(full).isFile()) {
      return new Response(fs.readFileSync(full), { headers: { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', Vary: 'accept-encoding' } });
    }
  }
  return new Response('<!doctype html><h1>Không tìm thấy</h1>', { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
const call = (pathname, init = {}) => {
  const request = new Request('https://gionom.test' + pathname, init);
  return onRequest({ request, env: { ASSETS: { fetch: (u) => Promise.resolve(serve(new URL(u).pathname)) } }, next: () => Promise.resolve(serve(new URL(request.url).pathname)) });
};

const PAGES = ['/', '/tour/', '/tour/ba-na-cau-vang/', '/tour/hoi-an-chieu-toi/', '/tour/cu-lao-cham/', '/tour/my-son-sang-som/', '/tour/hai-van-hue-2n1d/', '/lich-khoi-hanh/', '/lien-he/'];

for (const p of PAGES) {
  test(`${p}: Accept text/markdown → Markdown + Vary: Accept; Accept text/html → HTML + Vary: Accept`, async () => {
    const md = await call(p, { headers: { Accept: 'text/markdown' } });
    assert.equal(md.status, 200);
    assert.equal(md.headers.get('Content-Type'), 'text/markdown; charset=utf-8');
    assert.match(md.headers.get('Vary'), /\bAccept\b/);
    const body = await md.text();
    assert.match(body, /^# \S/);

    const html = await call(p, { headers: { Accept: 'text/html' } });
    assert.equal(html.status, 200);
    assert.match(html.headers.get('Content-Type'), /^text\/html/);
    assert.match(html.headers.get('Vary'), /\bAccept\b/);
    assert.match(await html.text(), /<h1[\s>]/);
  });
}

test('endpoint API trả JSON 200', async () => {
  for (const p of ['/api/tours.json', '/api/lich.json', '/api/cong-ty.json', '/api/tours/ba-na-cau-vang.json', '/openapi.json']) {
    const res = await call(p, { headers: { Accept: 'application/json' } });
    assert.equal(res.status, 200, p);
    assert.match(res.headers.get('Content-Type'), /application\/json/, p);
    JSON.parse(await res.text());
  }
});

test('API không tồn tại → 404 problem+json; sai phương thức → 405', async () => {
  const nf = await call('/api/tours/khong-co.json');
  assert.equal(nf.status, 404);
  assert.equal(nf.headers.get('Content-Type'), 'application/problem+json; charset=utf-8');
  assert.equal((await nf.json()).code, 'not_found');
  const na = await call('/api/tours.json', { method: 'DELETE' });
  assert.equal(na.status, 405);
  assert.equal((await na.json()).code, 'method_not_allowed');
});
