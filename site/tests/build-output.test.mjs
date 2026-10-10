// Kiểm bản build (chạy sau `npm run build`): nội dung đọc được không cần JS, robots.txt,
// OpenAPI hợp lệ và khớp file JSON, bản Markdown từng trang, llms.txt.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';

const dist = new URL('../dist/', import.meta.url).pathname;
const read = (rel) => fs.readFileSync(path.join(dist, rel), 'utf8');
const PAGES = ['index.html', 'tour.html', 'lich-khoi-hanh.html', 'lien-he.html', ...fs.readdirSync(path.join(dist, 'tour')).filter((f) => f.endsWith('.html')).map((f) => `tour/${f}`)];

// Chữ người đọc thấy trong HTML gốc (không chạy JS): bỏ script, style, svg, thẻ
const visibleText = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
  .replace(/<head[\s\S]*?<\/head>/i, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z#0-9]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

test('có đủ 9 trang công khai', () => assert.equal(PAGES.length, 9));

for (const page of PAGES) {
  test(`${page}: ≥ 500 ký tự nội dung trong HTML gốc, đúng 1 H1, cấp tiêu đề không nhảy`, () => {
    const html = read(page);
    assert.ok(visibleText(html).length >= 500, `chỉ có ${visibleText(html).length} ký tự`);
    const levels = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
    assert.equal(levels.filter((l) => l === 1).length, 1, 'cần đúng một <h1>');
    assert.equal(levels[0], 1, 'tiêu đề đầu tiên phải là h1');
    for (let i = 1; i < levels.length; i++) {
      assert.ok(levels[i] <= levels[i - 1] + 1, `nhảy từ h${levels[i - 1]} xuống h${levels[i]} (vị trí ${i})`);
    }
  });
}

test('robots.txt cho phép các agent AI lớn và không chặn gốc', () => {
  const txt = read('robots.txt');
  const groups = txt.split(/\n\s*\n/).map((g) => g.trim()).filter((g) => /^User-agent:/im.test(g));
  const rulesFor = (ua) => groups.find((g) => g.split('\n').some((l) => l.trim().toLowerCase() === `user-agent: ${ua.toLowerCase()}`));
  for (const ua of ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', '*']) {
    const g = rulesFor(ua);
    assert.ok(g, `thiếu nhóm cho ${ua}`);
    assert.match(g, /^Allow: \/$/m, `${ua} chưa có Allow: /`);
    assert.doesNotMatch(g, /^Disallow: \/\s*$/m, `${ua} đang bị Disallow: /`);
  }
});

test('openapi.json hợp lệ theo OpenAPI 3.1 và mọi endpoint có file JSON thật', async () => {
  const spec = JSON.parse(read('openapi.json'));
  assert.equal(spec.openapi, '3.1.0');
  await SwaggerParser.validate(structuredClone(spec));
  const slugs = spec.paths['/api/tours/{slug}.json'].get.parameters[0].schema.enum;
  const files = Object.keys(spec.paths).flatMap((p) => (p.includes('{slug}') ? slugs.map((s) => p.replace('{slug}', s)) : [p]));
  for (const f of files) {
    const data = JSON.parse(read(f.slice(1)));
    assert.ok(data && typeof data === 'object', f);
  }
  const list = JSON.parse(read('api/tours.json'));
  assert.equal(list.tours.length, slugs.length);
  for (const t of list.tours) assert.ok(fs.existsSync(path.join(dist, t.api.slice(1))), t.api);
});

test('JSON công khai không lộ nhãn nội bộ [CẦN XÁC NHẬN]', () => {
  for (const f of ['api/tours.json', 'api/lich.json', 'api/cong-ty.json', ...fs.readdirSync(path.join(dist, 'api/tours')).map((x) => `api/tours/${x}`)]) {
    assert.doesNotMatch(read(f), /CẦN XÁC NHẬN/, f);
  }
});

test('Markdown và API không lặp lại câu đã sửa trong COPY-CHANGES (ghế cạnh cửa sổ)', () => {
  for (const f of ['index.md', 'api/cong-ty.json']) assert.doesNotMatch(read(f), /cạnh cửa sổ/, f);
  assert.match(read('index.md'), /không ai ngồi ghế phụ/);
});

test('mỗi trang có bản Markdown không rỗng, bắt đầu bằng H1', () => {
  for (const page of PAGES) {
    const md = read(page.replace(/\.html$/, '.md'));
    assert.match(md, /^# \S/, page);
    assert.ok(md.length > 300, `${page}: Markdown quá ngắn`);
  }
});

test('llms.txt đúng định dạng llmstxt.org và link trỏ tới file có thật', () => {
  const txt = read('llms.txt');
  const lines = txt.split('\n');
  assert.match(lines[0], /^# \S/, 'dòng đầu là H1 tên dự án');
  assert.match(txt, /^> \S/m, 'có đoạn tóm tắt dạng blockquote');
  assert.match(txt, /^## \S/m, 'có mục H2');
  const links = [...txt.matchAll(/\]\((\/[^)]+)\)/g)].map((m) => m[1]);
  assert.ok(links.length >= 10);
  for (const l of links) assert.ok(fs.existsSync(path.join(dist, l.slice(1))), `link hỏng: ${l}`);
});
