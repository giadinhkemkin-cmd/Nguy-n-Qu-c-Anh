// Middleware Cloudflare Pages: Markdown theo Accept (acceptmarkdown.com), lỗi JSON RFC 9457 cho /api/*.
// Logic nằm ở agent/negotiate.js để test được ngoài Cloudflare.
import { handle } from '../agent/negotiate.js';

export async function onRequest(context) {
  const { request, env, next } = context;
  return handle(request, {
    fetchAsset: (path) => env.ASSETS.fetch(new URL(path, request.url)),
    next,
  });
}
