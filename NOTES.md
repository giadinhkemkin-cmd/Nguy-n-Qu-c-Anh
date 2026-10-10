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
- [x] giam-khao-web chọn tham chiếu → THAM-CHIEU.md
- [x] Xem thư viện → mục Dùng từ thư viện
- [x] extract-design → STYLE.md
- [x] impeccable init → PRODUCT.md (DESIGN.md viết ở bước hoàn thiện theo impeccable; bản nháp token ở site/src/styles/global.css)
- [x] impeccable shape → bố cục từng loại trang
- [x] dinh-huong-trai-nghiem phần B → /he-thiet-ke, chọn font
- [x] prototype 3 bản hero
- [x] giam-khao-web chấm hero (TIEU-CHI.md), chọn bản cao nhất

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
| 10/10/2026 | Tài nguyên ảnh (sửa lại) | Bỏ minh hoạ phong cảnh vẽ tay; chỉ dùng hình học: bản đồ, tuyến đường, cột cây số, biển chỉ dẫn, vé, pictogram kiểu biển báo | impeccable craft-floor: "Real illustration or none" – SVG giả tranh nhìn nghiệp dư; SVG làm hình học (bản đồ, đường vẽ, biển) thì được. Chỗ ảnh thật để khung sẵn, thay khi khách gửi. |
| 10/10/2026 | Hướng thiết kế (impeccable concept-seed) | Thế giới "đường bộ miền Trung": biển chỉ dẫn xanh, cột cây số đỉnh đỏ, vạch kẻ đường vàng, vé xe | concept-seed chạy chế độ suy giảm (mạng chặn impeccable.style, không có challenger), giao hướng số 5 trong 7 hướng tôi xếp (1 lịch bloc, 2 vé xe/tàu, 3 bảng giờ lật, 4 ghe sơn, 5 cột cây số/biển chỉ dẫn, 6 bản đồ du lịch gấp, 7 đèn lồng Hội An). Theo luật impeccable, phép gieo là bắt buộc để tránh mặc định ngành; hướng 5 chở được sự thật của sản phẩm (tour đi bằng xe trên đường, giờ + km), toàn hình học nên hợp khi không có ảnh. Lựa chọn của tôi nếu được tự chọn là hướng 1 (lịch bloc) – ghi lại để người dùng đổi nếu muốn. Chiêu riêng "vé chạy theo lịch trình" giữ nguyên: vé xe khách thuộc chính thế giới đường bộ. |
| 10/10/2026 | Duyệt THAM-CHIEU.md | Duyệt 5 web: Vietravel, Saigontourist, Hanoitourist, Intrepid, G Adventures (+ Tours Chanteclerc bổ sung) | Có nguồn "top" cho từng công ty. Hạn chế: không chụp được ảnh tham chiếu (mạng chặn, WebFetch cũng lỗi), STYLE.md phần lớn "không lấy được" màu/font; chấm điểm sẽ dựa trên mô tả + tiêu chí. Lấy các bài học: ô 'Tối đa 12 khách' ngang hàng giá, 'còn x/12' từng ngày, mã chuyến tự điền vào tin Zalo, ghi phương án khi biển động cạnh nút. |
| 10/10/2026 | Chọn font (/he-thiet-ke) | Font 1: Barlow Condensed (tiêu đề, số giờ) + Barlow (thân) | Barlow dựng từ chữ biển báo giao thông, đúng thế giới đã chọn; bản hẹp giữ tên điểm dài ("Bãi san hô Hòn Dài") trên một dòng ở 390px; OFL 1.1, đủ dấu. Overpass rộng hơn, dấu chồng in hoa dễ chạm dòng trên; Be Vietnam Pro đẹp nhưng không mang chất biển báo. Lưu ý: chữ in hoa tiếng Việt cần line-height ≥ 1.05 để không mất dấu (giám khảo bắt lỗi "VẮNG" thành "VĂNG" ở hero 3). |
| 10/10/2026 | Chọn hero | Bản 1 – biển chỉ dẫn (21/30 điểm chính) | Cao điểm nhất theo giám khảo mù (qa/cham/hero/KET-QUA.md). Sửa 3 lỗi khi build: (1) ô giờ bớt đỏ, chỉ một nút vàng trong màn đầu; (2) hàng biển trên mobile gọn một dòng; (3) thêm dòng bằng chứng "chuyến gần nhất · còn x/12 chỗ · giá từ". Không thêm dải phong cảnh SVG giám khảo gợi ý vì craft-floor cấm tranh SVG giả cảnh. |
| 10/10/2026 | Định hướng phần A | Duyệt như BRIEF mục 4 | Câu "phải tin" chỉ dựa trên cam kết vận hành của khách (12 người, giờ đi, ghi rõ giá), không cần số liệu ngoài. Chiêu riêng "vé chạy theo lịch trình" theo đúng gợi ý ngành du lịch trong skill, khả thi bằng GSAP + SVG, không cần ảnh. |

## Dùng từ thư viện (đã tự duyệt 10/10/2026)

Trả lời 6 câu: (1) có lý do? (2) có sẵn chưa? (3) nặng bao nhiêu? (4) giấy phép? (5) chỉnh theo DESIGN.md (kiểm ở GĐ6) (6) chạy ổn trên điện thoại (kiểm ở GĐ6).

| Tên | Link | Dùng cho | Lấy ý gì | Giấy phép | Nặng (ước) | (1) | (2) | (4) | Kết luận |
|---|---|---|---|---|---|---|---|---|---|
| GSAP core + ScrollTrigger | https://gsap.com | Chuyển động theo cuộn, vé chạy theo lịch trình | — | Miễn phí kể cả thương mại (Webflow, 2025) | ~45 KB gzip | Có: dẫn mắt qua lịch trình | Luật hệ thống | Có | Dùng |
| GSAP DrawSVGPlugin, MotionPathPlugin | https://gsap.com/docs/v3/Plugins/ | Vẽ dần tuyến đường trên bản đồ; xe chạy theo tuyến | Đường vẽ dần | Như trên | ~6 KB | Có: kể chuyện tuyến đi | Có trong gói gsap | Có | Dùng |
| Lenis | https://lenis.darkroom.engineering | Cuộn mượt | — | MIT | ~4 KB | Có: vé chạy theo cuộn mượt hơn | Luật hệ thống | Có | Dùng, tắt khi reduced-motion |
| Codrops – bảng lật số (split-flap) | https://tympanus.net/codrops/ | Giờ trên vé lật số | Ý tưởng lật từng ký tự | MIT, giữ ghi chú bản quyền nếu chép mã | 0 (tự viết bằng GSAP) | Có: giờ là cơ chế bán hàng | GSAP làm được | Có | Chỉ lấy ý, tự viết bằng GSAP, không chép mã |
| world-atlas (Natural Earth 10m) + d3-geo, topojson-client | https://github.com/topojson/world-atlas | Bờ biển Đà Nẵng – Huế (dựng lúc build, không tải ở trình duyệt) | Dữ liệu bản đồ | ISC; dữ liệu Natural Earth public domain | 0 KB ở trình duyệt (SVG ~2 KB) | Có: bản đồ là chỗ thay ảnh | Không | Có | Dùng lúc build |
| Font Barlow / Barlow Condensed | https://fonts.google.com/specimen/Barlow | Chữ toàn web | Font dựng theo chữ biển báo giao thông | OFL 1.1 | ~25 KB/kiểu (vietnamese + latin) | Có: đúng thế giới biển báo | Không | Có | Ứng viên font 1 |
| Font Overpass / Overpass Mono | https://fonts.google.com/specimen/Overpass | Ứng viên font 2; Mono cho số vé | Font dựng theo Highway Gothic | OFL 1.1 | ~25 KB/kiểu | Có | Không | Có | Ứng viên font 2 |
| Font Be Vietnam Pro | https://fonts.google.com/specimen/Be+Vietnam+Pro | Ứng viên font 3 | Font do người Việt thiết kế, dấu đẹp | OFL 1.1 | ~25 KB/kiểu | Có | Không | Có | Ứng viên font 3 |
| cobe (quả địa cầu) | https://github.com/shuding/cobe | — | — | MIT | 5 KB | Không: tour chỉ trong 100 km, quả địa cầu không kể gì | — | — | Bỏ |
| React Bits, Magic UI, Aceternity | — | — | — | — | kéo theo React ~45 KB | Không: GSAP làm được hết | — | — | Bỏ |
| Ảnh Unsplash/Pexels | — | Ảnh tạm | — | Unsplash License | — | Có | — | Có | Không dùng được: mạng chặn (xem Quyết định) |
| Awwwards, Land-book | https://www.awwwards.com/websites/travel/ | Xem bố cục hero | — | — | — | — | — | — | Không mở được trong sandbox (mạng chặn); hero lấy ý từ biển báo giao thông Việt Nam thay vì web mẫu |

## Điểm giám khảo

| Lần | Ngày | Trang | Style | Bố cục | Màu | Chữ | Chuyển động | 3 lỗi lớn nhất |
|---|---|---|---|---|---|---|---|---|
| Hero | 10/10/2026 | Hero 1 / 2 / 3 | 7 / 7 / 6 | 7 / 6 / 5 | 7 / 6 / 6 | 7 / 7 / 4 | – | (H1) hai màu nhấn tranh nhau; mobile co lại từ desktop; thiếu giá/ngày/chỗ trong màn đầu |

## Nguồn, giấy phép
(điền khi dùng)
