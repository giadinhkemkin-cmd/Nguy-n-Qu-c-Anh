# CLAUDE.md – luật dự án Gió Nồm Travel (TEST hệ thống làm web)

Đọc trước mỗi phiên: BRIEF.md (thông tin khách, định hướng), NOTES.md (đã chốt, tiến độ, checklist). Bị ngắt thì đọc mục **Tiến độ** trong NOTES.md rồi làm tiếp.

## Kỹ thuật
- Astro (thư mục `site/`), trang tour sinh từ `data/*.json`. GSAP + Lenis cho chuyển động. React Bits tối đa 2 component (hiện không dùng).
- Tiếng Việt có dấu, font đủ dấu tiếng Việt, được dùng thương mại (tự host qua @fontsource).
- Thiết kế mobile 390px trước. Vùng bấm tối thiểu 44px.
- Lần tải đầu khoảng 2MB, tổng trang khoảng 10MB, phần nặng tải khi cuộn tới. Lighthouse mobile từ 80.
- Bản build để publish artifact: đường dẫn tương đối, link trang ghi rõ `.html` (xem `site/scripts/relativize.mjs`).

## Nội dung
- Không bịa số liệu, review, giải thưởng, giá. Thiếu thì [CẦN XÁC NHẬN]. Dữ liệu khách hiện là dữ liệu test.
- Chữ lấy từ COPY.md; từ cấm ở TU-CAM.md.

## Ảnh
- Ảnh thật của khách cho tour, điểm đến, người. Hiện chưa có → dùng minh hoạ SVG (được phép) + bản đồ dữ liệu thật. Không dùng ảnh AI trông như thật.

## SEO
- Mỗi trang một h1, title, meta description, OG, JSON-LD không bịa điểm đánh giá. `/he-thiet-ke/` và `/prototype/*` gắn noindex, bỏ trước khi lên chính thức.

## Cho agent đọc
- `npm run build` sinh thêm `<trang>.md`, `api/*.json`, `openapi.json`, `llms.txt` từ `data/*.json` (`site/scripts/agent-files.mjs`). Sửa data thì cả HTML, Markdown, API cùng đổi.
- `site/functions/_middleware.js` (Cloudflare Pages): `Accept: text/markdown` → Markdown + `Vary: Accept`; lỗi `/api/*` → `application/problem+json` (RFC 9457).
- `public/robots.txt` cho phép GPTBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended.
- Kiểm: `npm run build && npm test` (site/tests).

## Luật chuyển động
- Hiệu ứng chạy theo nhịp cuộn của người xem; không có hiệu ứng tự chạy dài bắt người xem chờ (intro tối đa ~0,8 giây, nội dung đọc được ngay).
- Mỗi hiệu ứng phải có lý do (dẫn mắt, kể chuyện, phản hồi khi bấm); không thêm cho vui.
- Có chế độ prefers-reduced-motion: đứng yên hoặc chỉ mờ dần; Lenis tắt.
- Phần nặng (bản đồ chi tiết, ảnh lớn) tải sau khi người dùng cuộn gần tới.
- Chỉ animate transform và opacity (và stroke-dashoffset cho đường vẽ). Nút phản hồi khi bấm trong ≤150ms.
