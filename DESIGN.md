# DESIGN – Gió Nồm Travel

Viết từ bản đã dựng (không phải quy tắc dựng trước). Token nằm ở `site/src/styles/global.css`.

## Thế giới
Hệ biển báo đường bộ Việt Nam: biển chỉ dẫn xanh có viền trắng chìm, cột cây số thân trắng đỉnh đỏ, vạch kẻ đường vàng, mặt đường nhựa, vé xe khách có răng cưa. Mỗi tour là một tuyến đường có giờ tới nơi. Không ảnh stock, không tranh vẽ giả cảnh; hình ảnh là hình học (bản đồ Natural Earth, pictogram, biển). Khung ảnh thật để sẵn khi khách gửi ảnh.

## Màu (chiến lược: Full palette, 4 vai)
| Token | Mã | Vai |
|---|---|---|
| `--c-paint` | #edeee9 | Nền trang (sơn trắng cột mốc), ~60% |
| `--c-sign` / `--c-sign-deep` | #1446a0 / #0d3378 | Mảng lớn: header, hero, bảng giờ, bản đồ biển, khối kêu gọi, ~30% |
| `--c-line` | #f3b300 | Chỉ cho nút hành động chính (Nhắn Zalo) và vạch đường |
| `--c-cap` | #c42b1f | Giờ tới nơi, đỉnh cột mốc, cảnh báo hết chỗ |
| `--c-asphalt` | #23262b | Chân trang, mặt đường, chữ trên vàng |
| `--c-time` | #0d3378 | Số giờ trên ô trắng (đỏ chỉ là vạch trên đầu ô) |
| `--c-ink` / `--c-ink-2` | #1b1e23 / #4a505a | Chữ chính 15:1 / chữ phụ 7,2:1 trên nền sơn |
| Màu tuyến | `--t-nui` #1d7f47, `--t-den` #d27a00, `--t-bien` #0083a8, `--t-thap` #b04428, `--t-co-do` #7a4627 | Chỉ dùng cho nét tuyến trên bản đồ và gạch chân pictogram |

Tương phản: trắng trên xanh 8,5:1; than trên vàng 9,6:1; chữ phụ trên xanh `--c-on-sign-2` #c9d7f0 ≥ 6:1.

## Chữ
- Barlow Condensed 600/700: tiêu đề, tên điểm (in hoa trên biển), số giờ (tabular-nums).
- Barlow 400/600: thân bài 17px, line-height 1.6.
- Thang: hero clamp(3rem → 6rem), h2 clamp(2rem → 3.4rem), h3 1.3 → 1.6rem, dẫn 1.125 → 1.3rem, nhỏ 0.9375rem, tí 0.875rem (≥ 14px vì có khách lớn tuổi).
- Chữ in hoa tiếng Việt: line-height ≥ 1.05 để dấu chồng không chạm dòng trên.
- Nguồn: Google Fonts qua @fontsource, OFL 1.1, tự host, preload 3 file (Barlow Condensed 700 latin + vietnamese, Barlow 400 latin).

## Thành phần
- **Tấm biển** `.sign`: nền xanh, bo 10px, viền trắng 2px chìm cách mép 7px.
- **Hàng biển** (SignRows): mũi tên theo hướng thật từ văn phòng (làm tròn 15°), pictogram trắng gạch chân màu tuyến, tên điểm in hoa, ô giờ trắng vạch đỏ trên đầu.
- **Nút chính** `.btn`: vàng, chữ than, bo 6px, cao ≥ 52px, nhấn scale 0.97. Nút phụ: viền trắng (trên xanh) hoặc than.
- **Bảng giờ** (TourList board): danh sách tour trên tấm biển xanh, mỗi hàng: pictogram, tên, mô tả, giờ/thời lượng/lịch, giờ tới nơi, giá người lớn.
- **Biển cam kết**: biển giới hạn "12", biển chỉ dẫn khách sạn, biển hiệu lệnh đồng hồ, biển phụ "24 giờ".
- **Cột km** (bước đặt tour): thân trắng, đỉnh đỏ chữ KM.
- **Vé chạy theo** (Itinerary): giấy vé #fbfbf7, số vé, bản đồ nhỏ, giờ lật, cuống vé răng cưa có nút giữ chỗ; mobile thành dải đáy.
- **Ghế** (Departures): 12 ô ghế, ô đặc = đã có khách.
- **Biển cảnh báo** tam giác vàng cho "Cần biết trước". 404 = biển "đường cụt".

## Khoảng cách, bố cục
Thang `--sp-1..9` (0.25 → 6.5rem). Section: mobile 4.5rem trên / 5rem dưới, desktop 6.5rem / 7.5rem; `.section--tight` cho khối nối tiếp. Lề `clamp(1rem, 4vw, 2.5rem)`, rộng tối đa 76rem. Mobile 390px là bố cục chính: hàng biển 1 dòng, trục giờ dọc, dải hành động/dải vé dính đáy.

## Chuyển động
Token: `--ease-out` cubic-bezier(0.23,1,0.32,1), `--ease-in-out` (0.77,0,0.175,1), `--ease-drawer` (0.32,0.72,0,1); GSAP dùng CustomEase cùng đường cong (`gn-out`, `gn-inout`). Nhấn 120ms, UI 220ms.
Khoảnh khắc chính: vé chạy theo lịch trình. Phụ: mũi tên xoay về hướng thật + giờ lật khi vào trang (≈0,85s, chữ đọc được ngay), xe chạy trên trục giờ theo cuộn, tuyến bản đồ vẽ dần, View Transitions từ hàng biển sang trang tour.
Reduced motion: không xoay/lật/trượt; giờ đổi ngay, đường vẽ hiện sẵn, Lenis tắt; giữ đổi màu/độ mờ.
