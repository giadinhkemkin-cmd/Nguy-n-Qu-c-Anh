// Sau build: đổi mọi đường dẫn gốc "/..." trong HTML/CSS thành đường dẫn tương đối và link trang thành file .html,
// để bản build chạy được trên host tĩnh không có rewrite (artifact nhiều file, mở thẳng thư mục).
import fs from 'fs';
import path from 'path';
const dist = new URL('../dist/', import.meta.url).pathname;
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(dist);
const pages = new Set(files.filter((f) => f.endsWith('.html')).map((f) => path.relative(dist, f)));
function mapUrl(u) {
  // u bắt đầu bằng "/" (không phải "//")
  const [p, hash = ''] = u.split('#');
  const [pathname, query = ''] = p.split('?');
  let out;
  if (pathname === '/' || pathname === '') out = 'index.html';
  else if (pathname.startsWith('/assets/') || /\.[a-z0-9]+$/i.test(pathname)) out = pathname.slice(1);
  else {
    const clean = pathname.replace(/^\/|\/$/g, '');
    out = pages.has(clean + '.html') ? clean + '.html' : pages.has(clean + '/index.html') ? clean + '/index.html' : clean + '.html';
  }
  return out + (query ? '?' + query : '') + (hash ? '#' + hash : '');
}
let n = 0;
for (const f of files) {
  const rel = path.relative(dist, f);
  if (f.endsWith('.html')) {
    const depth = rel.split('/').length - 1;
    const pre = '../'.repeat(depth);
    let s = fs.readFileSync(f, 'utf8');
    s = s.replace(/(<meta property="og:image" content=)(["'])(\/[^"']*)\2/g, (_, a, q, u) => `${a}${q}${pre}${u.slice(1)}${q}`);
    s = s.replace(/(\s(?:href|src|action|poster)=)(["'])(\/(?!\/)[^"']*)\2/g, (_, a, q, u) => { n++; return `${a}${q}${pre}${mapUrl(u)}${q}`; });
    s = s.replace(/url\((["']?)(\/assets\/[^)"']+)\1\)/g, (_, q, u) => `url(${q}${pre}${u.slice(1)}${q})`);
    // import trong <script type=module> nội tuyến
    s = s.replace(/(from\s*|import\s*\(?\s*)(["'])(\/assets\/[^"']+)\2/g, (_, a, q, u) => `${a}${q}./${pre}${u.slice(1)}${q}`.replace('./../', '../'));
    fs.writeFileSync(f, s);
  } else if (f.endsWith('.css')) {
    let s = fs.readFileSync(f, 'utf8');
    s = s.replace(/url\((["']?)\/assets\/([^)"']+)\1\)/g, (_, q, u) => `url(${q}./${u}${q})`);
    fs.writeFileSync(f, s);
  } else if (f.endsWith('.js')) {
    let s = fs.readFileSync(f, 'utf8');
    if (s.includes('"/assets/')) { s = s.replace(/"\/assets\//g, '"./'); fs.writeFileSync(f, s); }
  }
}
console.log(`relativize: ${n} đường dẫn trong ${pages.size} trang`);
