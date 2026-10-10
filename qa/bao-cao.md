# Báo cáo kiểm tra (giai đoạn 9) – 10/10/2026

## Chụp mọi trang
- playwright-cli (cấu hình `.playwright/cli.config.json` trỏ Chromium có sẵn) + script Playwright `qa/tools/shoot.cjs`: 390×844 (2x) và 1440×900, đủ 9 trang + 404. Ảnh ở `qa/kiem-tra/`, `qa/cham/lan-*/`, `qa/truoc/`.
- Link nội bộ: 485 link / 17 trang, hỏng 0 (trừ 4 link tới tour giả trong trang thử break-ui, không publish).
- Tràn ngang: 0 ở 320, 390, 768, 1024, 1440, 1920px.
- Không JS: nội dung đọc được đủ (mốc giờ sáng sẵn, bản đồ vẽ sẵn). Reduced-motion: không lỗi console, giờ đổi ngay, không trượt/lật.

## impeccable harden
Dữ liệu thiếu/sai (break-ui), chuỗi dài không dấu cách, tour 1 điểm, giá 0/thiếu, hết chỗ, ngoài mùa, clipboard bị chặn (hiện tin để chép tay), không tự mở cửa sổ (nhiều trình duyệt chặn `window.open`), form kiểm lỗi tại ô, `[hidden]` luôn ẩn.

## impeccable adapt
Mobile 390px là bố cục chính: hàng biển 1 dòng, trục giờ dọc, thẻ tour icon cùng dòng tên, dải hành động/dải vé dính đáy (nền đặc, ẩn khi tới khối kêu gọi cuối, không hiện ở trang đã có nút vàng trên từng hàng). Vùng bấm ≥ 44px (đã nới breadcrumb, tên tour ở trang lịch).

## impeccable optimize
CSS nhúng thẳng, preload 3 font, Lenis chỉ tải cho máy có chuột, ScrollTrigger tạo lúc rảnh, không đọc layout khi cuộn, bỏ `text-wrap: pretty`. Lần tải đầu 222–257 KB (luật: ~2 MB).

## impeccable polish
Token màu vai rõ: vàng chỉ cho nút; đỏ cho nắp cột km/cảnh báo; giờ trong ô trắng chữ xanh đậm. Nhãn bản đồ có viền chữ. Bản đồ đóng trong viền biển xanh.

## mobile-native
viewport `interactive-widget=resizes-content`, `-webkit-tap-highlight-color: transparent`, `touch-action: manipulation`, chặn chọn chữ khi nhấn giữ nút, input 16px (không zoom), safe-area cho thanh đáy và header.

## review-animations
| Before | After | Why |
| --- | --- | --- |
| GSAP dùng expo/power lệch token | CustomEase `gn-out`/`gn-inout` = token CSS | Một hệ đường cong |
| Intro mũi tên ≈ 1,1s | ≈ 0,85s, chữ đọc được ngay | Luật intro ≤ 0,8s |
| Bản đồ vẽ 1,1s + trễ 0,12 | 0,9s + trễ 0,08 | Khung hình tĩnh đầy đủ sớm hơn |
| `will-change` thường trực | bỏ | Chỉ gắn khi chạy |
Kết luận: đạt 10 chuẩn (có mục đích, đúng tần suất, ease-out mạnh, UI < 300ms, chỉ transform/opacity/dashoffset, ngắt được, reduced-motion, hover có điều kiện).

## Lighthouse mobile (bản build tự host font, `qa/lighthouse/cuoi/`)
| Trang | Perf | A11y | BP | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| / | 91 | 100 | 100 | 100 | 3,1 s | 0,002 |
| /tour/ | 95 | 100 | 100 | 100 | 2,6 s | 0 |
| Bà Nà | 98 | 100 | 100 | 100 | 2,1 s | 0,013 |
| Hội An | 95 | 100 | 100 | 100 | 2,6 s | 0,011 |
| Cù Lao Chàm | 97 | 100 | 100 | 100 | 2,3 s | 0 |
| Mỹ Sơn | 97 | 100 | 100 | 100 | 2,3 s | 0 |
| Huế | 95 | 100 | 100 | 100 | 2,6 s | 0 |
| Lịch | 99 | 100 | 100 | 100 | 2,0 s | 0,013 |
| Liên hệ | 99 | 100 | 100 | 100 | 1,7 s | 0 |

Bản đóng gói artifact (font từ Google Fonts vì CSP của artifact): /tour/ 85, Bà Nà 85 (CSS Google Fonts chặn hiển thị). Đo bằng Lighthouse 12.8 cục bộ, giả lập Moto G Power + 4G chậm; chưa đo bằng pagespeed.web.dev trên điện thoại thật.
