# KẾT QUẢ CHẤM – lần 3

Ngày chấm: 10/10/2026. Người chấm: giám khảo độc lập, chấm mù. Chỉ xem 31 ảnh trong `qa/cham/lan-3/` và đọc TIEU-CHI.md, THAM-CHIEU.md, STYLE.md. Không đọc mã nguồn, NOTES.md hay kết quả lần 1, lần 2.

Thang điểm theo TIEU-CHI.md: 10 = ngang web tham chiếu tốt nhất, 8 = gần ngang và chỉ thua ở chi tiết, 6 = ổn nhưng nhìn ra template, ≤ 4 = nhìn rẻ hoặc lộ mùi AI. Ba tiêu chí chính phải đạt từ 8 trở lên.

Đây là những gì tôi không chấm trừ: font Barlow / Barlow Condensed, bảng màu, ý tưởng hero bảng chỉ đường (khách đã duyệt), và việc chưa có ảnh thật (thiếu nội dung, đã biết từ trước). Tôi chỉ chấm cách làm bên trong thế giới biển báo đường bộ.

## 1. Bảng điểm

| Tiêu chí | Trang chủ | Danh mục tour | Chi tiết (Bà Nà) | **Toàn site** | Đạt? |
|---|---|---|---|---|---|
| Style (chính) | 8 | 7 | 8 | **7,5** | Chưa |
| Bố cục (chính) | 7 | 5,5 | 7 | **6,5** | Chưa |
| Màu sắc (chính) | 8 | 7 | 7,5 | **7,5** | Chưa |
| Chữ (phụ) | 8 | 8 | 8 | **8** | Đạt |
| Chuyển động (phụ) | 7,5 | 5 | 8 | **7** | Vừa đạt |

**Kết luận: chưa đạt.** Cả ba tiêu chí chính còn dưới 8. Trang chủ và trang chi tiết đã gần tới mức đạt. Trang danh mục kéo điểm toàn site xuống, chủ yếu vì lỗi hiển thị bản đồ mini.

### Lý do từng ô

**Trang chủ**
- *Style 8.* Hero bảng chỉ đường có viền trắng lồng trong, chân cột và mặt đường vạch vàng ngay bên dưới. Cách làm này có cá tính rõ và không giống template. Dải thời gian 05:00–18:00 có xe buýt chạy theo vạch, cọc km đỏ ở phần "ba bước", biển "12" viền đỏ: tất cả cùng một thế giới. Bị trừ vì khối "Năm tour" (nền asphalt) và khối "Bốn điều" vẫn là dạng danh sách icon cộng chữ quen thuộc. Khối "Ba người lo chuyến đi" dùng icon thay ảnh người nên trông như chỗ để trống.
- *Bố cục 7.* Màn đầu rõ: tiêu đề, CTA vàng, bảng giờ tới nơi. Bị trừ vì:
  1. Đầu mục "Mỗi tour xếp quanh một giờ tới nơi" (ảnh -17) chỉ chiếm nửa trái, nửa phải trống.
  2. Đường dẫn dọc của thẻ 10:15 cắt ngang dòng chữ đỏ "Từ 9 giờ: Cầu Vàng đ|ông dần…".
  3. Nhãn giờ trên trục (05:00, 06:00…) quá nhỏ.
  4. Bản đồ tổng (ảnh -75) có nhiều mảng đất trống. Nhãn "Mỹ Sơn" không có điểm hay tuyến nào đi tới. Tuyến cam dừng cách chấm đỏ Hội An khá xa, nên người xem đọc như vẽ lệch.
  5. Trên mobile, nhãn "Tới Cầu Vàng" và "Người lớn" lệch chân chữ khoảng 7 px. Lỗi này lặp lại ở mọi dòng tour.
- *Màu 8.* Tỷ lệ gần đúng 60-30-10: nền ngà, xanh biển báo, vàng chỉ dùng cho nút Zalo. Đỏ chỉ có ở mũ cọc km và mũ ô giờ. Đúng chất biển báo.
- *Chữ 8.* Barlow Condensed đậm cho tiêu đề, Barlow cho đoạn văn. Dấu tiếng Việt đủ, dòng thoáng. Bị trừ vì nhãn giờ trên trục nhỏ và chữ pháp lý ở footer nhỏ, xám, hơi chìm.
- *Chuyển động 7,5.* Ảnh -17 và -25 cho thấy xe buýt đã chạy từ khoảng 11:00 tới 17:00 theo nhịp cuộn. Chấm 16:30 đổi từ xám sang cam khi xe tới, nên hiệu ứng có chạy. Từ ảnh tĩnh không xác định được bản đồ có vẽ tuyến khi cuộn hay không. Nếu có, thì nó chưa vẽ đủ (tuyến Mỹ Sơn không thấy).

**Danh mục tour**
- *Style 7.* Năm thẻ giống hệt nhau: dải đầu xanh, viền màu, mô tả, bản đồ, giá, nút. Ở desktop, xếp chồng như vậy trông như danh sách template. Bản đồ mini không có nhãn địa danh, nên chỉ là đường kẻ trên mảng xanh trắng, không kể được tuyến đi đâu.
- *Bố cục 5,5.* Đây là lỗi nặng nhất của lần này:
  1. Bản đồ mini ở mỗi thẻ rộng một kiểu. Trên desktop: Bà Nà khoảng 660 px, Hội An khoảng 626, Cù Lao Chàm khoảng 561, Mỹ Sơn khoảng 565.
  2. Bản đồ Hải Vân – Huế bị lệch phải. Bên trái có một khoảng trắng rồi một sọc xanh đứng. Đầu tuyến phía Huế bị cắt và quặt ngược ở mép (ảnh desktop-75 và mobile-75).
  3. Trên mobile, bản đồ cũng không lấp đầy chiều ngang thẻ.
  4. Ở desktop, cột phải dưới nút "Giữ chỗ" trống khoảng 150 px ở mọi thẻ.
  5. Thanh lọc trên mobile tràn ngang, bị cắt ở chữ "Qua". Thanh này không có dấu hiệu là cuộn được.
- *Màu 7.* Năm dải đầu xanh đậm, cộng hero xanh, nav xanh và khối CTA xanh, làm màu xanh lấn quá phần nền. Trên mobile có lúc ba nút vàng cùng một màn: nút "Giữ chỗ" trong thẻ, thanh dính "Nhắn Zalo hỏi chỗ" và nút trong khối CTA. Màu nhấn vì vậy mất tác dụng chỉ chỗ cần bấm.
- *Chữ 8.* Giống trang chủ.
- *Chuyển động 5.* Năm ảnh cuộn không cho thấy chuyển động nào: không vẽ tuyến, không thấy ô chỗ trống đổi theo cuộn. Trang hoàn toàn tĩnh, trong khi trang chủ và trang chi tiết đều có chuyển động theo cuộn.

**Chi tiết tour Bà Nà – Cầu Vàng**
- *Style 8.* "Vé Gió Nồm" có số vé GN-1210-BN, đường xé đứt nét, ô giờ và mục "Điểm 4/7" đi theo lịch trình. Đây là chi tiết đắt nhất của site. Hàng ngày khởi hành có mã chuyến và 12 ô chỗ trống, vừa đúng chất vừa đúng bài học tham chiếu.
- *Bố cục 7.* Bị trừ vì:
  1. Hero xanh trên desktop bị kéo cao cho bằng thẻ giá, nên dưới hàng thông số trống khoảng 110 px.
  2. Hero trên mobile đã có "Người lớn 1.490.000 đ" và "còn 4/12 chỗ", rồi thẻ giá ngay bên dưới lặp lại giá đó.
  3. Ở "Ghép thêm một tour" (desktop-75), đường kẻ dưới dòng tour rộng hơn lưới (khoảng 96–1344 px so với 112–1328 px).
  4. Dưới vé dính ở desktop, cột phải trống suốt phần lịch trình. Chấp nhận được vì vé dính theo cuộn.
- *Màu 7,5.* Nhãn "Sơn Trà" màu trắng trên bản đồ nằm vắt qua mảng đất trắng ngà, nên gần như không đọc được. Lỗi tương phản này thấy rõ (desktop-0).
- *Chữ 8.* Thứ bậc rõ: giờ, tên điểm, mô tả. Bị trừ vì breadcrumb lệch chân chữ: link gạch dưới thấp hơn chữ thường khoảng 4 px.
- *Chuyển động 8.* Vé theo lịch trình chạy thật. Desktop ở 09:30 hiện "Điểm 4/7". Trên mobile, vé thu thành thanh dưới đáy và hiện "08:15, Điểm 3/7, Cầu Vàng", khớp với chấm đang sáng. Đây là chuyển động có nghĩa, không bắt chờ. Bị trừ nhẹ vì bản đồ mini trong vé vẽ hơi vụng: đầu tuyến bên trái có một vòng tròn lồng chấm.

## 2. Kiểm tra ảnh giữa trang

| Lỗi | Có không | Ở đâu |
|---|---|---|
| Khoảng trống khi cuộn | Có, mức nhẹ | Hero chi tiết trên desktop (trống khoảng 110 px). Cột phải thẻ danh mục (khoảng 150 px). Nửa phải đầu mục timeline trang chủ. Không có màn nào trắng trơn. |
| Chữ chìm vào nền | Có | "Sơn Trà" trắng trên đất trắng (chi tiết desktop-0). Nhãn giờ trục timeline rất nhỏ. Chữ pháp lý ở footer xám nhỏ. |
| Hiệu ứng không chạy | Một chỗ nghi ngờ | Bản đồ tổng trang chủ: có nhãn Mỹ Sơn nhưng không có tuyến, tuyến Hội An không chạm điểm. Không rõ do tuyến chưa vẽ xong hay do dữ liệu đặt sai. Danh mục không có chuyển động nào. |
| Phần tử chồng nhau | Có | Đường dẫn dọc của thẻ 10:15 cắt qua dòng chữ đỏ "Từ 9 giờ…" (index-desktop-17). Sọc xanh và khoảng trắng thừa ở bản đồ Hải Vân (danh mục). |

## 3. Web top ngành làm tốt hơn ở đâu, và cách sửa

**Style.** Intrepid và G Adventures cho mỗi tour một gương mặt riêng: ảnh, màu dòng sản phẩm, khối thông số gọn. Tours Chanteclerc có bản đồ điểm đến được dàn trang như một phần của trang chi tiết. Ở Gió Nồm, năm thẻ danh mục giống hệt nhau, bản đồ không có tên, và mục đội ngũ dùng icon thay ảnh.
- *Sửa:*
  1. Mỗi bản đồ mini ghi tên điểm đầu (Đà Nẵng) và điểm cuối (Bà Nà, Hội An…) bằng chữ biển báo, nền chữ có hộp nền để đọc được trên mọi mảng.
  2. Thẻ danh mục mượn chi tiết vé từ trang chi tiết (số vé, đường xé đứt nét) để có điểm nhận ra.
  3. Mục "Ba người lo chuyến đi" dùng biển tên kiểu biển báo, có chữ cái đầu lớn, thay cho ba icon xe và điện thoại giống nhau. Khi có ảnh thì thay ngay.

**Bố cục.** Web tham chiếu giữ lưới chặt: ảnh hoặc bản đồ luôn cùng một tỷ lệ khung ở mọi thẻ, và cột giá không để trống.
- *Sửa:*
  1. Bản đồ mini dùng khung cố định (ví dụ `aspect-ratio: 16/5`, rộng 100% cột) và `object-fit` hoặc viewBox chung, để cả năm bản đồ cùng rộng và cùng mép.
  2. Sửa viewBox bản đồ Hải Vân – Huế: bỏ sọc xanh và khoảng trắng bên trái, khung lại cho thấy hết đầu tuyến phía Huế.
  3. Ở desktop, đặt bản đồ mini dưới toàn bộ thẻ hoặc thu thẻ về hai cột cân nhau, để cột phải không trống.
  4. Hero chi tiết trên desktop canh hàng thông số xuống đáy khung, hoặc để chiều cao tự nhiên thay vì kéo bằng thẻ giá.
  5. Trên mobile, bỏ dòng giá trong hero chi tiết vì thẻ giá ngay bên dưới đã có.
  6. Canh cùng chân chữ cho nhãn "Tới …" và "Người lớn" (một hàng lưới chung).
  7. Dời dòng chữ đỏ "Từ 9 giờ…" sang trái của đường dẫn, hoặc ngắt đường dẫn quanh chữ.

**Màu sắc.** Web tham chiếu dùng màu thương hiệu mạnh nhưng để nền chiếm phần lớn diện tích, và chỉ một nút nhấn trên mỗi màn.
- *Sửa:*
  1. Dải đầu thẻ danh mục đổi từ nền xanh đặc sang nền sáng có mép xanh (hoặc chỉ giữ ô icon xanh), để xanh quay về khoảng 30%.
  2. Trên mobile, ẩn thanh dính "Nhắn Zalo hỏi chỗ" khi trong màn hình đã có nút vàng khác (nút "Giữ chỗ" trong thẻ, hoặc khối CTA cuối trang).
  3. Mọi nhãn chữ trên bản đồ có viền chữ hoặc hộp nền tương phản, đạt AA trên cả nền xanh và nền đất.
  4. Nhãn giờ trên trục timeline tăng lên ít nhất 12 px, độ sáng đủ AA.

## 4. Ba vấn đề lớn nhất còn lại (xếp theo mức nặng)

1. **Bản đồ mini ở trang danh mục hiển thị sai.** Năm bản đồ rộng năm kiểu. Bản đồ Hải Vân – Huế lệch, có sọc xanh và khoảng trắng thừa, đầu tuyến bị cắt. Trên mobile bản đồ không lấp đầy thẻ. Bản đồ không có tên địa danh nên không đọc được.
   *Sửa:* dùng một khung cố định cho mọi bản đồ, sửa viewBox của Hải Vân, thêm nhãn điểm đầu và điểm cuối có hộp nền.
2. **Màu nhấn và màu xanh bị loãng.** Trang danh mục có năm dải đầu xanh đặc. Trên mobile có lúc hai hoặc ba nút vàng cùng một màn. Nhãn "Sơn Trà" trắng chìm trên đất trắng.
   *Sửa:* đổi dải đầu thẻ sang nền sáng, ẩn thanh dính khi màn đã có nút vàng, cho mọi nhãn bản đồ viền hoặc hộp nền.
3. **Chi tiết lưới và lặp nội dung chưa chặt.**
   - Hero chi tiết trên desktop có khoảng trống.
   - Giá bị lặp ở hero mobile.
   - Nhãn giá lệch chân chữ ở mọi dòng tour.
   - Đường dẫn timeline cắt qua chữ đỏ.
   - Bản đồ tổng trang chủ có nhãn Mỹ Sơn mà không có tuyến, tuyến Hội An không chạm điểm.
   - Trang danh mục hoàn toàn không có chuyển động.

   *Sửa:* xử lý theo danh sách ở mục 3. Riêng danh mục: cho tuyến bản đồ mini vẽ ra khi thẻ vào màn hình, và cho ô chỗ trống lấp dần, giống chuyển động ở trang chủ và trang chi tiết.

Thiếu ảnh thật vẫn là khoảng cách lớn nhất so với Intrepid, G Adventures và Chanteclerc. Đây là thiếu nội dung, không tính vào điểm ở trên. Khi có ảnh, ưu tiên ảnh đội ngũ và ảnh từng tour cho dải đầu thẻ.
