// Đóng gói bản build cho Artifact (web nhiều file):
// - trang chính index.html: bỏ <!doctype>/<html>/<head>/<body> vì Artifact tự bọc khung;
// - font: bỏ @font-face tự host + preload, dùng Google Fonts (host font duy nhất CSP cho phép);
// - chép các trang/ảnh/script cần thiết sang ../artifact/, bỏ trang thử (prototype/break-ui, og).
import fs from 'fs';
import path from 'path';
const dist = new URL('../dist/', import.meta.url).pathname;
const out = new URL('../../artifact/', import.meta.url).pathname;
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const GF = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;600&display=swap&subset=vietnamese">';
const SKIP = [/^prototype\/break-ui/, /^og\.html$/];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(dist).map((f) => path.relative(dist, f));
const keep = [];
for (const rel of files) {
  if (SKIP.some((r) => r.test(rel))) continue;
  if (/\.(woff2?|ttf)$/.test(rel)) continue; // font tự host không dùng nữa
  const src = path.join(dist, rel), dst = path.join(out, rel);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  if (rel.endsWith('.html')) {
    let s = fs.readFileSync(src, 'utf8');
    s = s.replace(/@font-face\{[^}]*\}/g, '');
    s = s.replace(/<link rel="preload"[^>]*as="font"[^>]*>/g, '');
    s = s.replace('</title>', '</title>' + GF);
    if (rel === 'index.html') {
      s = s.replace(/<title>[^<]*<\/title>/, '<title>Gió Nồm Travel</title>');
      const head = s.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<meta charset="utf-8">/, '').replace(/<meta name="viewport"[^>]*>/, '');
      const bodyOpen = s.match(/<body[^>]*>/)[0];
      const body = s.slice(s.indexOf(bodyOpen) + bodyOpen.length, s.lastIndexOf('</body>'));
      const titleTag = head.match(/<title>[\s\S]*?<\/title>/)[0];
      s = titleTag + head.replace(titleTag, '') + body;
    }
    fs.writeFileSync(dst, s);
  } else if (rel.endsWith('.css')) {
    fs.writeFileSync(dst, fs.readFileSync(src, 'utf8').replace(/@font-face\{[^}]*\}/g, ''));
  } else fs.copyFileSync(src, dst);
  keep.push(rel);
}
fs.writeFileSync(path.join(out, '_files.json'), JSON.stringify(keep.filter((f) => f !== 'index.html'), null, 1));
console.log('artifact:', keep.length, 'file');
