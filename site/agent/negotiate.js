// Phục vụ agent: chọn Markdown hay HTML theo header Accept, và trả lỗi JSON (RFC 9457) cho /api/*.
// Dùng chung cho middleware Cloudflare Pages (functions/_middleware.js) và cho test (tests/*.test.mjs).

export const MARKDOWN_TYPE = 'text/markdown; charset=utf-8';
export const PROBLEM_TYPE = 'application/problem+json; charset=utf-8';

// Tách header Accept thành [{type, q}] theo RFC 9110 §12.5.1 (bỏ entry q=0 không hợp lệ thì vẫn giữ q=0 để loại trừ).
export function parseAccept(header = '') {
  return String(header)
    .split(',')
    .map((part) => {
      const [type, ...params] = part.trim().split(';').map((s) => s.trim());
      let q = 1;
      for (const p of params) {
        const [k, v] = p.split('=').map((s) => s.trim());
        if (k.toLowerCase() === 'q') {
          const n = Number(v);
          q = Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0;
        }
      }
      return { type: (type || '').toLowerCase(), q };
    })
    .filter((e) => e.type);
}

// q của một kiểu cụ thể: khớp chính xác ưu tiên hơn "text/*", rồi "*/*"
function qualityFor(entries, type) {
  const [major] = type.split('/');
  const exact = entries.find((e) => e.type === type);
  if (exact) return exact.q;
  const range = entries.find((e) => e.type === `${major}/*`);
  if (range) return range.q;
  const any = entries.find((e) => e.type === '*/*');
  return any ? any.q : 0;
}

// Markdown chỉ được chọn khi client gọi tên text/markdown và không xếp nó thấp hơn HTML.
export function prefersMarkdown(acceptHeader) {
  const entries = parseAccept(acceptHeader);
  const md = entries.find((e) => e.type === 'text/markdown');
  if (!md || md.q === 0) return false;
  return md.q >= qualityFor(entries, 'text/html');
}

// Client muốn JSON hơn HTML (dùng cho trang 404 ngoài /api/)
export function prefersJson(acceptHeader) {
  const entries = parseAccept(acceptHeader);
  const json = Math.max(
    entries.find((e) => e.type === 'application/json')?.q ?? 0,
    entries.find((e) => e.type === 'application/problem+json')?.q ?? 0,
  );
  return json > 0 && json > qualityFor(entries, 'text/html');
}

// Đường dẫn trang → file Markdown sinh lúc build. null = không phải trang (asset, api…).
export function markdownPathFor(pathname) {
  let p = decodeURIComponent(pathname || '/');
  if (p.startsWith('/api/') || p === '/api') return null;
  if (p.endsWith('/index.html')) p = p.slice(0, -'index.html'.length);
  if (p.endsWith('.html')) p = p.slice(0, -'.html'.length);
  else if (/\.[a-z0-9]+$/i.test(p)) return null; // ảnh, js, css, json, md…
  p = p.replace(/\/+$/, '');
  return p === '' ? '/index.md' : `${p}.md`;
}

export function appendVary(headers, value) {
  const cur = headers.get('Vary');
  if (!cur) return headers.set('Vary', value);
  const parts = cur.split(',').map((s) => s.trim().toLowerCase());
  if (parts.includes('*') || parts.includes(value.toLowerCase())) return;
  headers.set('Vary', `${cur}, ${value}`);
}

// Lỗi dạng RFC 9457 "Problem Details": type, title, status, detail, instance + mở rộng code, hint.
export function problem(status, { code, title, detail, hint, instance }, extraHeaders = {}) {
  const body = {
    type: `/errors/${code}`,
    title,
    status,
    detail,
    instance,
    code,
    hint,
  };
  const headers = new Headers({ 'Content-Type': PROBLEM_TYPE, 'Cache-Control': 'no-store', Vary: 'Accept', ...extraHeaders });
  return new Response(JSON.stringify(body, null, 2), { status, headers });
}

const API_HINT = 'Xem danh sách endpoint tại /openapi.json (OpenAPI 3.1).';

// Lõi xử lý: fetchAsset(path) lấy file tĩnh, next() là phản hồi mặc định của host.
export async function handle(request, { fetchAsset, next }) {
  const url = new URL(request.url);
  const method = request.method.toUpperCase();
  const accept = request.headers.get('Accept') || '';
  const isApi = url.pathname === '/api' || url.pathname.startsWith('/api/');
  const readOnly = method === 'GET' || method === 'HEAD';

  if (isApi && !readOnly) {
    return problem(405, {
      code: 'method_not_allowed',
      title: 'Method not allowed',
      detail: `API chỉ đọc; ${method} không được hỗ trợ.`,
      hint: `Dùng GET hoặc HEAD. ${API_HINT}`,
      instance: url.pathname,
    }, { Allow: 'GET, HEAD' });
  }

  const mdPath = readOnly && !isApi ? markdownPathFor(url.pathname) : null;

  if (mdPath && prefersMarkdown(accept)) {
    const asset = await fetchAsset(mdPath);
    if (asset && asset.ok) {
      const text = await asset.text();
      if (text.trim()) {
        const headers = new Headers({ 'Content-Type': MARKDOWN_TYPE, Vary: 'Accept', 'Cache-Control': 'public, max-age=300' });
        return new Response(method === 'HEAD' ? null : text, { status: 200, headers });
      }
    }
  }

  const res = await next();

  if (res.status === 404 && (isApi || prefersJson(accept))) {
    return problem(404, {
      code: 'not_found',
      title: 'Not found',
      detail: `Không có tài nguyên tại ${url.pathname}.`,
      hint: isApi ? API_HINT : 'Trang chủ: /. Danh sách tour: /tour/. Bản Markdown: gửi Accept: text/markdown.',
      instance: url.pathname,
    });
  }

  // Trang có bản Markdown: báo cho cache biết nội dung đổi theo Accept
  if (mdPath) {
    const headers = new Headers(res.headers);
    appendVary(headers, 'Accept');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
  }
  return res;
}
