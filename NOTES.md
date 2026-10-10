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
- [x] pick-ui-library
- [x] Trang chủ + khuôn danh mục + khuôn chi tiết
- [x] impeccable overdrive (hero)
- [x] animate (Emil)
- [x] apple-design
- [x] emil-design-eng
- [x] impeccable delight (chiêu riêng: vé chạy theo lịch trình)
- [x] break-ui

### 4. Nhân ra (checklist từng trang: find-animation-opportunities + impeccable audit)
- [x] / (trang chủ)
- [x] /tour/
- [x] /tour/ba-na-cau-vang/
- [x] /tour/hoi-an-chieu-toi/
- [x] /tour/cu-lao-cham/
- [x] /tour/my-son-sang-som/
- [x] /tour/hai-van-hue-2n1d/
- [x] /lich-khoi-hanh/
- [x] /lien-he/

### 5. Nâng design
- [x] redesign-existing-projects
- [x] high-end-visual-design
- [x] impeccable typeset, layout, colorize
- [x] improve-animations (+ làm theo kế hoạch)
- [x] giam-khao-web chấm (tối đa 3 vòng)

### 6. Kiểm tra
- [x] playwright-cli chụp mọi trang
- [x] impeccable harden, adapt, optimize, polish
- [x] mobile-native, review-animations
- [x] Lighthouse mobile mọi trang
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
| 10/10/2026 | pick-ui-library | Không thêm thư viện | Danh sách Emil: Sonner (toast, React), motion (React), NumberFlow (số), base-ui (React). Web Astro không React; toast, lọc, accordion, form đều làm được bằng CSS/JS nhỏ, GSAP lo chuyển động. Thêm React chỉ để có toast thì nặng hơn 40 KB, trái luật 2MB/Lighthouse. Đã ghi trong mục Dùng từ thư viện. |
| 10/10/2026 | impeccable overdrive | Mũi tên biển xoay về hướng thật + giờ lật số khi vào trang; View Transitions giữa hàng biển trang chủ và đầu trang tour | 3 hướng đã cân nhắc: (A) chọn; (B) mặt đường chạy dưới chân theo cuộn – vui nhưng không thêm thông tin; (C) đồng hồ đếm ngược tới chuyến kế – cần dữ liệu thời gian thực, dễ sai. A kể đúng sự thật (hướng thật, giờ thật), nhẹ, có bản reduced-motion. |
| 10/10/2026 | impeccable delight | Chấm "đang trực Zalo" theo giờ Đà Nẵng ở khối kêu gọi; trang 404 "Đường cụt" bằng biển báo; dải chắn "8–9 giờ xe đoàn lớn rời Đà Nẵng" trên trục giờ | Delight phải có ích: khách biết lúc nào được trả lời; 404 vẫn dẫn về tour. |
| 10/10/2026 | redesign-existing-projects / high-end-visual-design | Chỉ lấy phần hợp: khoảng trắng lệch nhịp, bóng nhuộm xanh, mũi tên trong tấm biển nhỏ, avatar vuông. Bỏ: nhãn nhỏ trên tiêu đề, kính mờ, nút bo tròn hết cỡ, header nổi kiểu viên thuốc, mọi phần hiện dần khi cuộn, ảnh picsum | Giai đoạn 8 phải giữ font, màu, hero, phong cách đã duyệt; impeccable craft-floor cấm eyebrow và glass trang trí; Emil cấm động cho vui; luật dự án cấm ảnh không rõ nguồn. |
| 10/10/2026 | Publish artifact | Đóng gói riêng (`site/scripts/artifact.mjs` → `artifact/`): trang chính bỏ khung html/head/body, font chuyển sang Google Fonts, bỏ trang thử break-ui và og | Luật Artifact: trang chính được bọc khung; font chỉ chắc chắn tải được từ Google Fonts. Đổi lại Lighthouse bản này 85 thay vì 95–98. |
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

## Báo cáo break-ui (10/10/2026)
Dữ liệu xấu nhất ở `data/_test/worst-case.json`, đi qua đúng component thật (trang dev `/prototype/break-ui-1`, `-2`, noindex).

| Trường | Giá trị xấu nhất | Hỏng gì | Đã sửa |
|---|---|---|---|
| gia_tre_em | thiếu | Build sập (vnd(undefined)) | `vnd()` trả "Hỏi giá", dòng trẻ em chỉ hiện khi có giá |
| gia_nguoi_lon | 0 | Hiện "0 đ" | Hiện "Hỏi giá" |
| diem_nhan, chua_gom, nen_mang | mảng rỗng | Tiêu đề mục trơ trọi | Ẩn mục hoặc ghi câu thay thế |
| luu_y | rỗng / chỉ có nhãn [CẦN XÁC NHẬN] | Hộp cảnh báo rỗng | Ẩn hộp khi không còn chữ |
| diem_nhan | chuỗi 60 ký tự không dấu cách | Tràn ngang cả trang trên 390px | `overflow-wrap` toàn cục, `anywhere` ở danh sách |
| lich_trinh | 1 điểm / 2 điểm trùng toạ độ | Bản đồ phóng quá to, chỉ thấy biển | Khung bản đồ tối thiểu 220 đơn vị |
| ten | 115 ký tự | H1 6 dòng trên mobile | Cỡ chữ nhỏ hơn khi tên > 60 ký tự |
| tên điểm chính | 55 ký tự | Nhãn "Tới …" 3 dòng | Cắt 2 dòng |
| mo_ta_ngan | 260 ký tự | Danh sách tour dài | Cắt 4 dòng ở danh sách, đủ ở trang chi tiết |
| lịch | không có chuyến | — | Đã có trạng thái rỗng + nút "Nhắn để được báo lịch" |
| tên 1 ký tự "Ơ", emoji | — | Không hỏng | — |

## Soát kiểu Emil (emil-design-eng) + apple-design

| Before | After | Why |
| --- | --- | --- |
| Toast dùng @keyframes | transition opacity/translate 220ms | Toast bấm liên tục phải ngắt được giữa chừng |
| `--ease-out` tự chọn | `cubic-bezier(0.23,1,0.32,1)` của Emil | Đường cong mạnh, phản hồi ngay |
| Hover không giới hạn thiết bị | `@media (hover:hover) and (pointer:fine)` | Cảm ứng bắn hover giả khi chạm |
| Giờ lật chồng nhau khi cuộn nhanh | Huỷ lượt lật cũ trước khi lật mới | Interruptible (apple-design §3) |
| Tên điểm trên vé đổi bằng mờ dần | Thêm blur 3px khi đổi | Blur che chỗ hai trạng thái chồng nhau |
| Menu mobile hiện tức thì | @starting-style 200ms mờ + trượt 8px | Menu mở thỉnh thoảng, cần biết nó đến từ header |
| Thẻ mốc giờ đổi độ mờ 300ms | 220ms | UI dưới 300ms |
| Nút không có trạng thái nhấn | `:active` scale 0.97 trên mọi nút, hàng biển | Phản hồi lúc chạm xuống |

## Bước 4 – find-animation-opportunities (theo loại trang, lọc theo Emil)

| # | Trang | Chỗ | Hôm nay | Mục đích | Tần suất | Làm |
|---|---|---|---|---|---|---|
| 1 | Trang chủ | FAQ | Câu trả lời hiện bụp | Chỉ trạng thái | Thỉnh thoảng | `::details-content` cao + mờ 220ms ✔ |
| 2 | /tour/, /lich-khoi-hanh/ | Bộ lọc | Hàng ẩn/hiện tức thì | Tránh đổi đột ngột | Thỉnh thoảng | `@starting-style` mờ + trượt 6px 200ms, chỉ khi bấm lọc ✔ |
| 3 | /lien-he/ | Lỗi form | Hiện bụp | Chỉ trạng thái | Thỉnh thoảng | mờ + trượt 4px 160ms ✔ |
| 4 | /lien-he/ | Báo đã gửi | Hiện bụp | Phản hồi | Hiếm | mờ + trượt 6px 220ms ✔ |
| – | Trang chủ | Danh sách tour vào lần lượt | – | Trang trí | – | Loại: khách cần đọc ngay |
| – | Chi tiết | 12 ghế tô dần khi cuộn tới | – | Trang trí trên dữ liệu | – | Loại: dữ liệu khách đang đọc không được động |
| – | Trang chủ | Biển cam kết nảy vào | – | Trang trí | – | Loại |

## Bước 4 – impeccable audit (mọi trang, 10/10/2026)

| # | Mặt | Điểm | Ghi chú |
|---|---|---|---|
| 1 | Truy cập | 4 | Lighthouse a11y 100 mọi trang sau khi sửa: mốc giờ chưa sáng dùng opacity 0.5 làm tương phản 2,2:1 → đổi sang màu chữ phụ 7:1; nhãn logo khác chữ hiện → dùng chữ ẩn bổ sung. Reduced-motion: bỏ lệnh tắt 0,01ms toàn cục, từng phần có bản thay thế. |
| 2 | Hiệu năng | 4 | Lần 1 trang chủ 79 → 98: CSS nhúng thẳng, preload 3 font, bỏ `text-wrap: pretty`, Lenis chỉ tải cho máy có chuột, ScrollTrigger tạo lúc rảnh, không đọc layout khi cuộn. |
| 3 | Theming | 3 | Token màu đủ; còn vài màu lẻ (#fbfbf7 giấy vé, #9aa0a6 cột) nên gom thành token. Chỉ có giao diện sáng (chọn theo cảnh dùng: khách xem cả ngày ngoài trời). |
| 4 | Responsive | 4 | 390px không tràn ngang (đo scrollWidth mọi trang), vùng bấm ≥ 44px, mobile có bố cục riêng (hàng biển 1 dòng, trục giờ dọc, dải vé đáy). |
| 5 | Toàn vẹn | 3 | Detector: 2 lỗi thật đã sửa (viền trái màu ở mốc giờ, vạch màu trên cột cây số). Còn 4 dương tính giả: 3 vạch kẻ đầu bảng (list, không bo góc) và răng cưa vé (radial-gradient là lỗ bấm vé, không phải lưới). |
| | **Tổng** | **18/20** | Excellent |

Lighthouse mobile (lan-2, sau khi sửa): / 98 · /tour/ 96 · Bà Nà 96 · Hội An 97 · Cù Lao Chàm 93 · Mỹ Sơn 97 · Huế 98 · Lịch 99 · Liên hệ 96. A11y/BP/SEO 100. Dung lượng lần tải đầu 217–252 KB.

## Điểm giám khảo

| Lần | Ngày | Trang | Style | Bố cục | Màu | Chữ | Chuyển động | 3 lỗi lớn nhất |
|---|---|---|---|---|---|---|---|---|
| Vòng 1 | 10/10/2026 | Toàn site (chủ / danh mục / chi tiết) | 7 (7/6/7) | 6 (6/5,5/6,5) | 6,5 (7/7/6) | 7 | 7 | (1) khoảng trống dọc quá lớn, 3 khối xanh cùng khuôn; (2) danh mục: dòng 'không có tour' hiện sai, cột giá gãy dòng, nửa phải khối đầu trống; (3) nút giữ chỗ 4 màu, đỏ vừa là giờ vừa là cảnh báo, mobile chi tiết không có nút ở màn đầu |
| Vòng 2 | 10/10/2026 | Toàn site (chủ / danh mục / chi tiết) | 7 (8/6/8) | 7 (7/6/7) | 7 (7/7/7) | 7 | 7 | (1) danh mục như bảng tính, cột trống, không có nút vàng; (2) trục giờ: chấm lơ lửng, nhãn dồn trái, vùng sọc 8–9 giờ dễ hiểu nhầm; (3) mobile là desktop co lại (icon thụt, chữ gãy, giá dưới màn đầu) |
| Vòng 3 | 10/10/2026 | Toàn site (chủ / danh mục / chi tiết) | 7,5 (8/7/8) | 6,5 (7/5,5/7) | 7,5 (8/7/7,5) | 8 | 7 | (1) bản đồ mini danh mục lệch, rộng khác nhau, không tên địa danh; (2) xanh lấn, 2–3 nút vàng một màn mobile, nhãn Sơn Trà chìm; (3) lưới: hero chi tiết hụt đáy, giá lặp, nhãn lệch chân chữ, cọc cắt chữ đỏ, danh mục không có chuyển động |
| Kết luận | 10/10/2026 | | | | | | | Hết 3 vòng, chưa đạt ≥ 8 cả 3 tiêu chính (Bố cục 6,5 thấp nhất, kéo xuống bởi trang danh mục). Theo giam-khao-web: dừng, gửi người dùng điểm + ảnh để quyết. Không có ảnh tham chiếu để đặt cạnh (mạng chặn). Lỗi kỹ thuật vòng 3 vẫn sửa ở bước hoàn thiện, không chấm lại. |
| Hero | 10/10/2026 | Hero 1 / 2 / 3 | 7 / 7 / 6 | 7 / 6 / 5 | 7 / 6 / 6 | 7 / 7 / 4 | – | (H1) hai màu nhấn tranh nhau; mobile co lại từ desktop; thiếu giá/ngày/chỗ trong màn đầu |

## Nguồn, giấy phép
(điền khi dùng)
