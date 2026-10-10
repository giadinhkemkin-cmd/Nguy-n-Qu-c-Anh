# Kế hoạch chuyển động (improve-animations, commit b11e1cc)

Recon: Astro + GSAP 3.15 (ScrollTrigger, CustomEase) + Lenis (chỉ máy có chuột). Token CSS: `--ease-out: cubic-bezier(0.23,1,0.32,1)`, `--ease-in-out: cubic-bezier(0.77,0,0.175,1)`, `--ease-drawer: cubic-bezier(0.32,0.72,0,1)`, `--dur-press 120ms`, `--dur-ui 220ms`. Tần suất: hàng biển, nút, lọc = hàng chục lần/ngày; vé lịch trình, bản đồ = mỗi lần xem trang; intro hero = mỗi lần vào trang chủ.

| # | Mức | Nhóm | Chỗ | Vấn đề | Sửa | Trạng thái |
|---|---|---|---|---|---|---|
| 001 | MEDIUM | Đồng bộ token | HeroSign.astro:45, MapSection.astro:41-42, Itinerary.astro:99/105, flap.js:13 | GSAP dùng expo.out / power2 / power3 / power1, lệch đường cong CSS | Đăng ký CustomEase `gn-out` = "M0,0 C0.23,1 0.32,1 1,1", `gn-inout` = "M0,0 C0.77,0 0.175,1 1,1" trong motion.js; thay mọi ease GSAP | DONE |
| 002 | LOW | Hiệu năng | SignRows.astro:27 | `will-change: transform` để thường trực trên 5 mũi tên | Bỏ; GSAP tự gắn lớp khi chạy | DONE |
| 003 | LOW | Mục đích | HeroSign.astro:45 | Intro mũi tên 0,7s + trễ tới 0,39s ≈ 1,1s, quá luật "intro ≤ 0,8s" | 0,55s, trễ 0,1 + i×0,05 (tổng ≈ 0,85s, chữ đọc được ngay từ đầu) | DONE |

Cơ hội bỏ lỡ: không còn (đã làm ở bước 4: FAQ, lọc, lỗi form, báo gửi).
Kiểm cảm giác: mở trang chủ với DevTools Animations ở 25% tốc độ; cuộn trang Bà Nà xem giờ lật và tên điểm đổi không giật khi cuộn nhanh ngược chiều.
