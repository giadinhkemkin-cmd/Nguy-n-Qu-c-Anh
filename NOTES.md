# NOTES – Gió Nồm Travel (TEST)

Người dùng yêu cầu: không dừng hỏi ở bước nào; chỗ cần duyệt thì tự chọn phương án tốt nhất và ghi lý do ở đây.

## Tiến độ (bị ngắt thì làm tiếp từ dòng chưa tick)

### 0. Cài skill
- [x] impeccable, emil skills (animate, apple-design, emil-design-eng, break-ui, pick-ui-library, prototype, review-animations, improve-animations, find-animation-opportunities, mobile-native…), extract-design, redesign-existing-projects, high-end-visual-design, humanizer, playwright-cli
- [x] Skill tài khoản: giam-khao-web, dinh-huong-trai-nghiem, chu-web-sach, copywriting-co-ban đều có

### 1. Khách giả, chữ, định hướng A
- [x] BRIEF.md, data/cong-ty.json, data/tours.json, data/lich.json
- [x] COPY.md (copywriting-co-ban) → humanizer → chu-web-sach (TU-CAM.md, COPY-CHANGES.md)
- [x] dinh-huong-trai-nghiem phần A (BRIEF mục 4, CLAUDE.md Luật chuyển động)

### 2. Thiết kế
- [ ] giam-khao-web chọn tham chiếu → THAM-CHIEU.md
- [ ] Xem thư viện → mục Dùng từ thư viện
- [ ] extract-design → STYLE.md
- [ ] impeccable init → PRODUCT.md, DESIGN.md
- [ ] impeccable shape → bố cục từng loại trang
- [ ] dinh-huong-trai-nghiem phần B → /he-thiet-ke, chọn font
- [ ] prototype 3 bản hero
- [ ] giam-khao-web chấm hero (TIEU-CHI.md), chọn bản cao nhất

### 3. Build khuôn
- [ ] pick-ui-library
- [ ] Trang chủ + khuôn danh mục + khuôn chi tiết
- [ ] impeccable overdrive (hero)
- [ ] animate (Emil)
- [ ] apple-design
- [ ] emil-design-eng
- [ ] impeccable delight (chiêu riêng: vé chạy theo lịch trình)
- [ ] break-ui

### 4. Nhân ra (checklist từng trang: find-animation-opportunities + impeccable audit)
- [ ] / (trang chủ)
- [ ] /tour/
- [ ] /tour/ba-na-cau-vang/
- [ ] /tour/hoi-an-chieu-toi/
- [ ] /tour/cu-lao-cham/
- [ ] /tour/my-son-sang-som/
- [ ] /tour/hai-van-hue-2n1d/
- [ ] /lich-khoi-hanh/
- [ ] /lien-he/

### 5. Nâng design
- [ ] redesign-existing-projects
- [ ] high-end-visual-design
- [ ] impeccable typeset, layout, colorize
- [ ] improve-animations (+ làm theo kế hoạch)
- [ ] giam-khao-web chấm (tối đa 3 vòng)

### 6. Kiểm tra
- [ ] playwright-cli chụp mọi trang
- [ ] impeccable harden, adapt, optimize, polish
- [ ] mobile-native, review-animations
- [ ] Lighthouse mobile mọi trang
- [ ] Build + publish artifact, tự mở kiểm tra

## Quyết định thay cho bước duyệt (lý do)

| Ngày | Bước | Chọn | Lý do |
|---|---|---|---|
| 10/10/2026 | Môi trường | Không lấy được ảnh stock, không chụp được web tham chiếu | Chính sách mạng của sandbox chặn images.unsplash.com, images.pexels.com, upload.wikimedia.org, www.vietravel.com, canva, imgur… (403 từ proxy). Chỉ mở được npm, GitHub raw, Google Fonts. Muốn có ảnh tạm/chụp tham chiếu thì thêm các host này vào Allowed domains của môi trường. |
| 10/10/2026 | Tài nguyên ảnh | Minh hoạ SVG tự vẽ (tranh in lụa, mảng phẳng) + bản đồ vẽ từ dữ liệu Natural Earth | Luật cho phép AI/Claude làm "minh hoạ phong cách vẽ, bản đồ, tem, vé"; cấm ảnh AI trông như thật cho điểm đến và người. Minh hoạ nhẹ (vài KB), giúp đạt 2MB và Lighthouse. Ảnh thật của khách thay vào sau ở cùng khung. |
| 10/10/2026 | Tên tour Mỹ Sơn | "Mỹ Sơn sáng sớm" thay "bình minh" | Blog du lịch ghi rõ ở Mỹ Sơn thường không thấy mặt trời mọc; không hứa điều không chắc. |
| 10/10/2026 | Định hướng phần A | Duyệt như BRIEF mục 4 | Câu "phải tin" chỉ dựa trên cam kết vận hành của khách (12 người, giờ đi, ghi rõ giá), không cần số liệu ngoài. Chiêu riêng "vé chạy theo lịch trình" theo đúng gợi ý ngành du lịch trong skill, khả thi bằng GSAP + SVG, không cần ảnh. |

## Dùng từ thư viện
(điền ở giai đoạn 5)

## Điểm giám khảo
(điền khi chấm)

## Nguồn, giấy phép
(điền khi dùng)
