# BRIEF – Gió Nồm Travel (khách giả, dự án TEST hệ thống làm web)

> Toàn bộ thông tin khách là dữ liệu test. Tên công ty, số điện thoại, email, địa chỉ là giả. Không có web cũ.

## 1. Thông tin khách

| Mục | Nội dung |
|---|---|
| Tên | Gió Nồm Travel (Công ty TNHH Du lịch Gió Nồm, tên giả) |
| Lĩnh vực | Lữ hành nội địa, tour ghép trong ngày và 2N1Đ quanh Đà Nẵng |
| Quy mô | Công ty nhỏ: 1 điều hành, 2 hướng dẫn viên chính, 2 xe 16 chỗ thuê dài hạn [CẦN XÁC NHẬN] |
| Sản phẩm chủ lực | 5 tour: Bà Nà – Cầu Vàng; Hội An chiều tối; Cù Lao Chàm; Mỹ Sơn sáng sớm; Hải Vân – Huế 2N1Đ (chi tiết ở `data/tours.json`) |
| Khách hàng mục tiêu | Khách nội địa 25–45 tuổi từ Hà Nội, TP.HCM bay tới Đà Nẵng 3–5 ngày: cặp đôi, gia đình có con nhỏ, nhóm bạn. Ở khách sạn trong nội thành. Đặt tour sau khi đã đặt vé máy bay và phòng. |
| Điểm khác đối thủ | Nhóm tối đa 12 khách (đối thủ phổ biến xe 29–45 chỗ); giờ đi lệch giờ đoàn lớn; đón tận khách sạn nội thành miễn phí; huỷ miễn phí trước 24 giờ; giá đã gồm vé, ghi rõ phần chưa gồm |
| Mục tiêu web | 1) Nhắn Zalo hỏi chỗ (chính); 2) Gọi hotline; 3) Gửi form hỏi tour. Không có thanh toán online. |
| Logo, màu, font thương hiệu | Chưa có (khách nhỏ). Tự đề xuất ở giai đoạn thiết kế, ghi DESIGN.md [CẦN XÁC NHẬN] |
| Web khách thích / không thích | Không có (test). |
| Ảnh thật | Chưa có. Xem mục Danh sách tài nguyên. |
| Review thật | Chưa có. Không đưa review, sao đánh giá lên web. |
| Liên hệ | 68 Bạch Đằng, Hải Châu, Đà Nẵng · 0905 000 000 (gọi, Zalo) · xinchao@gionom.test · 7:00–21:00 cả tuần (dữ liệu test) |
| Form liên hệ gửi về | [CẦN XÁC NHẬN] Bản test: form mở Zalo/email với nội dung soạn sẵn, không có server |

## 2. Nghiên cứu (rút gọn cho bản test)

### Người mua lo gì
Nguồn đọc ngày 10/10/2026 (đã tìm thread Reddit trực tiếp nhưng công cụ tìm kiếm chỉ trả về blog và trang của công ty tour, nên ghi rõ đây là ý kiến từ blog du lịch, không phải người mua):
- Cầu Vàng đông từ khoảng 9 giờ vì đoàn lớn rời Đà Nẵng lúc 8–9 giờ; tới trước 8 giờ thì vắng; trên núi lạnh hơn dưới phố, sáng hay có sương ([theabroadguide](https://theabroadguide.com/golden-bridge-early-morning-to-avoid-crowds-take-nice-photos/), [hoiandaytrip](https://hoiandaytrip.com/how-to-visit-golden-bridge-ba-na-hills/)).
- Mỹ Sơn đi sớm là để tránh nóng và tránh đông, **thường không thấy mặt trời mọc** ([theabroadguide](https://theabroadguide.com/hoi-an-my-son-sanctuary-sunrise-tour-2/)). → Đổi tên tour từ "Mỹ Sơn bình minh" thành "Mỹ Sơn sáng sớm", không hứa ngắm mặt trời mọc.
- Nỗi lo chung khi đặt tour ghép (theo kinh nghiệm ngành, chưa có nguồn người mua thật, cần kiểm lại khi có review khách): đoàn quá đông, bị dẫn vào điểm mua sắm, phí phát sinh, đón trễ, tour biển bị huỷ mà không hoàn tiền.

### Đối thủ trực tiếp (tham khảo, chưa mở được web vì mạng bị chặn)
Các công ty tour ghép lớn ở Đà Nẵng bán cùng tuyến Bà Nà, Hội An, Cù Lao Chàm, Mỹ Sơn, Huế với xe 29–45 chỗ. Gió Nồm không cạnh tranh bằng giá rẻ nhất, mà bằng nhóm nhỏ và giờ đi.

### Giai đoạn thị trường, loại lead
- Lead **ấm**: đã chọn Đà Nẵng, đang so tour. Cần thấy giá, lịch, cái gì đã gồm.
- Thị trường giai đoạn 3 (hoài nghi, ai cũng hứa "trọn gói, uy tín"): cần **cơ chế** cụ thể → giờ đi lệch đoàn đông + nhóm 12 + ghi rõ chưa gồm gì.
- Mong muốn lớn: thoát áp lực (chen chúc, bị lùa). Mong muốn phụ: tiện (đón tận nơi), tin được giá.

### Từ khoá (ước lượng, chưa có Search Console)
tour Bà Nà ghép đoàn, tour Hội An buổi tối, tour Cù Lao Chàm 1 ngày, tour Mỹ Sơn sáng sớm, tour Đà Nẵng Huế 2 ngày 1 đêm, tour ghép Đà Nẵng nhóm nhỏ.

### Quy định ngành
Web công ty lữ hành phải ghi tên doanh nghiệp, số giấy phép kinh doanh lữ hành, địa chỉ (Luật Du lịch 2017) [CẦN XÁC NHẬN số giấy phép]. Giá ghi rõ đơn vị đồng, đã gồm/chưa gồm.

## 3. Sơ đồ trang

| URL | Trang | Ghi chú |
|---|---|---|
| `/` | Trang chủ | |
| `/tour/` | Danh mục tour | Lọc theo vùng, thời lượng |
| `/tour/<slug>/` | Chi tiết tour (5 trang) | Sinh từ `data/tours.json` |
| `/lich-khoi-hanh/` | Lịch khởi hành | Sinh từ `data/lich.json` |
| `/lien-he/` | Liên hệ, đặt tour, chính sách huỷ | |
| `/he-thiet-ke/` | Hệ thiết kế | noindex, không vào menu, bỏ trước khi lên chính thức |
| `/prototype/hero-1..3/` | 3 bản hero | noindex, chỉ để chấm |

## 4. Định hướng trải nghiệm — ĐÃ CHỐT (dự án test: người làm tự duyệt, lý do ở NOTES.md)

1. **Khách thấy gì đầu tiên?** Một tấm bản đồ minh hoạ bờ biển Đà Nẵng – Hội An – Huế vẽ từ dữ liệu bản đồ thật, năm tuyến tour là năm nét màu, mỗi tuyến gắn giờ tới điểm chính (08:15 Cầu Vàng, 06:00 Mỹ Sơn…). Câu lớn: **"Đà Nẵng lúc còn vắng"**. Câu phụ nói cơ chế: nhóm tối đa 12 khách, giờ đi lệch giờ xe đoàn lớn. Nút chính: **"Nhắn Zalo hỏi chỗ"**; nút phụ: "Xem 5 tour và giá".
2. **Cuộn hết trang, khách phải tin điều gì?** "Đi với Gió Nồm, tôi tới điểm chính lúc còn vắng, trong nhóm không quá 12 người, và biết trước mình trả tiền cho gì." (Không có con số nào cần bằng chứng ngoài cam kết của chính khách hàng; giờ tới điểm lấy từ lịch trình.)
3. **Tài nguyên:** xem bảng Danh sách tài nguyên bên dưới.
4. **Nhịp:**
   - Êm: hero, giới thiệu từng tour (đọc, xem minh hoạ), phần câu hỏi thường gặp.
   - Dồn: dải "giờ vắng" (5 mốc giờ chạy ngang theo cuộn), bảng giá và lịch, đoạn lịch trình ở trang chi tiết (vé chạy theo, đường đi tự vẽ).
5. **Chiêu riêng — "Tấm vé chạy theo lịch trình":** ở trang chi tiết tour, một tấm vé (kiểu vé xe khách cũ, có đường răng cưa) dính ở cạnh màn hình. Khi cuộn qua từng mốc lịch trình, giờ trên vé lật sang giờ của mốc đó (kiểu bảng lật số ở bến xe), tên điểm đổi theo, và trên bản đồ nhỏ đường đi tự vẽ tới điểm đó. Cuộn tới cuối, phần cuống vé "xé" ra thành nút "Giữ chỗ chuyến này qua Zalo" kèm ngày gần nhất còn chỗ. Trên mobile vé thu thành dải mỏng ở đáy màn hình (giờ + tên điểm + nút). Reduced-motion: giờ đổi ngay, không lật; đường vẽ hiện sẵn.

### Danh sách tài nguyên — ĐÃ CHỐT

| Tài nguyên | Dùng ở | Nguồn | Ghi chú |
|---|---|---|---|
| Ảnh thật từng tour (Cầu Vàng, phố Hội An đêm, san hô, tháp Chăm, Đại Nội) | Thẻ tour, trang chi tiết | **Cần khách chụp/cung cấp** | Bản test: chưa có. Mạng sandbox chặn Unsplash/Pexels/Wikimedia nên không lấy được ảnh tạm. Chỗ ảnh dùng minh hoạ (dòng dưới). |
| Ảnh hướng dẫn viên, đội ngũ | Phần "Ai dẫn bạn đi" | **Cần khách chụp** | Không dùng AI cho người. Bản test: dùng chữ cái đầu tên, không có ảnh. |
| Minh hoạ phong cảnh từng tour (kiểu tranh in lụa, mảng màu phẳng) | Hero, thẻ tour, đầu trang chi tiết | Claude vẽ SVG | Được phép: "minh hoạ phong cách vẽ". Không vẽ người, không giống ảnh thật. Ghi "minh hoạ" khi cần. |
| Bản đồ bờ biển Đà Nẵng – Quảng Nam – Huế | Hero, trang chi tiết | Vẽ từ dữ liệu bản đồ mở (gói npm), Claude dựng SVG | Ghi nguồn dữ liệu, giấy phép trong NOTES.md |
| Tem, vé, icon | Vé lịch trình, nhãn, icon | Claude vẽ SVG | |
| Animation đường đi, giờ lật | Trang chi tiết, hero | GSAP + SVG | Nhẹ, không cần ảnh |
| Logo | Header, footer | Claude đề xuất (chữ + dấu sóng) | [CẦN XÁC NHẬN] khách duyệt |

Không dùng ảnh AI trông như thật cho điểm đến, tour, người.
