# KẾT QUẢ CHẤM – lần 1 (giám khảo độc lập, chấm mù)

Ngày chấm: 10/10/2026. Đã xem đủ 30 ảnh trong `qa/cham/lan-1/` (3 trang × 2 khổ × 5 vị trí cuộn). Không đọc mã nguồn. So với mô tả trong THAM-CHIEU.md và STYLE.md (không có ảnh tham chiếu, nên điểm 10 là "ngang mức mà mô tả của Intrepid / G Adventures / Tours Chanteclerc cho thấy").

Những gì **không** bị trừ điểm: font Barlow / Barlow Condensed, bảng màu xanh biển chỉ dẫn + vàng + đỏ cột km, hero biển chỉ dẫn (khách đã duyệt). Thiếu ảnh thật là lỗ hổng nội dung đã biết: ghi nhận nhưng không trừ vào thiết kế.

**Kết luận: CHƯA ĐẠT.** Cả ba tiêu chí chính đều dưới 8.

## 1. Bảng điểm

| Tiêu chí | Trang chủ | Danh mục tour | Chi tiết Bà Nà | **Toàn site** |
|---|---|---|---|---|
| **Style** (chính) | 7 | 6 | 7 | **7** |
| **Bố cục** (chính) | 6 | 5,5 | 6,5 | **6** |
| **Màu sắc** (chính) | 7 | 7 | 6 | **6,5** |
| Chữ (phụ) | 7 | 6,5 | 7 | **7** |
| Chuyển động (phụ) | 6,5 | 7 | 7,5 | **7** |

### Lý do ngắn từng trang

**Trang chủ.** Hero là phần tốt nhất của site: biển chỉ dẫn có cột, vạch kẻ đường vàng, bảng "giờ tới nơi" đọc như biển thật, nút Zalo vàng thấy ngay màn đầu ở cả 1440 và 390. Từ 25% trở xuống thì yếu dần:
- Ba khối xanh to giống hệt nhau (hero, "Năm tour", "Bạn đi ngày nào?"), cùng viền trắng đôi, cùng bo góc. Nhịp trang thành "khối xanh, nền xám, khối xanh", đơn điệu.
- Hàng "Bốn điều Gió Nồm giữ" (desktop 50%): bốn biểu tượng cao thấp khác nhau (tròn 84px, vuông 84px, tròn 84px, chữ nhật khoảng 60px). Vì vậy tiêu đề nằm ở các độ cao 401, 408, 408 và 421px, lệch nhau thấy rõ.
- Thẻ "Ba người lo chuyến đi" là thẻ trắng bo góc có bóng và avatar chữ cái H/T/V. Đây là mẫu thẻ SaaS, không thuộc thế giới biển báo.

**Danh mục.**
- Dòng trạng thái rỗng "Chưa có tour nào khớp bộ lọc này. / Xem tất cả 5 tour" vẫn hiện ngay dưới danh sách đủ 5 tour, ở cả desktop (50%, 75%) và mobile (75%). Nhìn như web hỏng.
- Khối tiêu đề xanh trống hẳn nửa phải (desktop 0%).
- Hàng tour trên desktop có một khoảng chết khoảng 280px giữa phần mô tả (hết ở x≈790) và cột giá (bắt đầu ở x≈1072). Cột giá chỉ rộng khoảng 256px nên nhãn bị gãy dòng: "Tới Bãi san hô Hòn / Dài", "Tới Đỉnh đèo Hải / Vân", "còn / 4/12". Giờ và giá vì thế không thẳng hàng giữa các tour.
- Đường kẻ chia hàng chạy từ x=97 tới x=1343, thò ra ngoài lưới nội dung (112 tới 1328).

**Chi tiết.**
- Bố cục desktop tốt nhất site: khối thông số trong biển xanh, thẻ giá sát bên, lịch trình bên trái và "vé Gió Nồm" dính bên phải chạy theo mốc giờ.
- Điểm trừ:
  - Ở mobile 0%, màn đầu **không có nút hành động nào**: thẻ giá và nút Zalo nằm dưới mép màn, thanh dính chưa hiện.
  - Bản đồ (desktop 0%) bị tràn khung: mảng đất xanh vượt qua đường viền trắng bên trong, góc trên trái có một vệt cung thừa, nhãn "Sơn Trà" màu trắng nằm trên nền xanh nhạt và bị cắt thành "Sơn Tr". Trang chủ (desktop 75%) cũng có lỗi tràn khung tương tự ở mép dưới bản đồ.
  - Danh sách "Đã gồm / Chưa gồm" ba cột (desktop 50%) có đáy và đường kẻ ở ba độ cao khác nhau, nhìn lởm chởm.
  - Có 4 kiểu nút giữ chỗ khác nhau (xem phần Màu sắc).

## 2. Kiểm tra ở các ảnh giữa trang (25 / 50 / 75%)

| Lỗi tìm | Kết quả |
|---|---|
| **Khoảng trống khi cuộn** | **Có, ở mọi trang.** Desktop: trang chủ 25% (y 110–290, dưới trục giờ), 50% (56–200 và 520–730), 75% (180–400); danh mục 75% (360–610); chi tiết 50% (330–550), 75% (380–600). Mobile (ảnh 2x): trang chủ 25% (200–490), 50% (350–620); danh mục 75% (220–600); chi tiết 50% (300–580), 75% (140–440). Nhiều màn có 25–40% chiều cao là nền trống. Không thấy dấu hiệu nội dung chưa hiện (không có khối mờ dở dang), nên khả năng cao đây là padding giữa các section quá lớn, không phải hiệu ứng chưa chạy. |
| **Chữ chìm vào nền** | Nhãn "Sơn Trà" trắng trên xanh nhạt ở bản đồ trang chi tiết (desktop 0%). Thanh dính dưới đáy trên mobile trong suốt một phần, nên chữ bên dưới lộ ra mờ mờ ("Ảnh đội ngũ sẽ cập nhật…" ở trang chủ 75%, "Thứ Tư 14/10" ở chi tiết 50%, ô "24 giờ" ở trang chủ 50%). Nhìn như bẩn, và đây cũng là kiểu kính mờ mà tiêu chí coi là dấu hiệu web AI. |
| **Hiệu ứng chưa chạy** | Không thấy phần tử dừng giữa chừng. Trục giờ ở trang chủ (25%) chỉ thấy hàng nhãn giờ và một ghi chú đỏ, không thấy thanh tour nào trong khung. Không kết luận được thanh đã vẽ hay chưa, vì nó nằm trên mép ảnh. Cần chụp thêm một ảnh có trọn biểu đồ để kiểm. |
| **Chồng lấn** | Mảng đất trên bản đồ tràn qua khung (chi tiết desktop 0%, trang chủ desktop 75%). Thanh dính mobile che mất dòng cuối của nội dung (chấp nhận được với thanh dính, nhưng cần thêm padding đáy). Ở danh mục mobile 75%, nút Zalo trong khối CTA và nút Zalo trên thanh dính hiện cùng lúc: hai nút giống hệt nhau trên một màn. |

## 3. Từng tiêu chí chính: web top làm tốt hơn ở đâu, sửa thế nào

### Style – 7/10
- **Web top làm tốt hơn.**
  - Intrepid, G Adventures và Chanteclerc có một hệ module dùng lại, và mọi module đều nói cùng một giọng thương hiệu. Theo mô tả của agency, Chanteclerc có "design system dựng từ module dùng lại", G Adventures "một hệ nhận diện linh hoạt".
  - Gió Nồm mới có thế giới biển báo ở hero, cột km, vé và ô ghế. Các khối còn lại rơi về mẫu chung: thẻ trắng bo góc có bóng ("Ba người lo chuyến đi", "Cần biết trước", thẻ giá), avatar chữ cái, thanh dính kính mờ, nhãn nhỏ viết hoa giãn chữ trên tiêu đề ("NÚI · 1 NGÀY", "ĐIỂM CHÍNH").
  - Ở trang danh mục, hàng tour chỉ là danh sách chữ trên nền xám. Không có gì của biển báo ngoài icon.
- **Sửa.**
  - Đưa ngôn ngữ biển báo vào các khối còn lại:
    - "Cần biết trước": làm thành biển cảnh báo tam giác vàng viền đen, góc vuông.
    - "Ba người lo chuyến đi": làm thành bảng tên kiểu biển phụ (nền trắng viền đen, không bóng).
  - Bỏ bóng đổ và bo góc lớn trên thẻ trắng.
  - Thanh dính mobile dùng nền đặc (không trong suốt).
  - Trên hàng tour ở danh mục, đưa giờ tới nơi vào ô trắng có nắp đỏ như ở trang chủ (đang là chữ đỏ trơn), để cùng một ký hiệu ở mọi trang.

### Bố cục – 6/10
- **Web top làm tốt hơn.**
  - Vietravel và Hanoitourist đặt 5 trường cố định của thẻ tour thành hàng, cột thẳng, so được giữa các tour. G Adventures nén thông số vào một khối.
  - Ở Gió Nồm, cột giá trong hàng tour bị bóp, nhãn gãy dòng, giờ và giá không cùng hàng giữa các tour. Giữa hai cột có khoảng chết khoảng 280px.
  - Khoảng cách giữa các section quá rộng (khoảng 180–250px desktop), nên mỗi màn cuộn chứa ít thông tin và nhịp bị đứt.
  - Trang chủ lặp ba khối xanh cùng khuôn.
  - Ở mobile trang chi tiết, màn đầu không có nút.
- **Sửa.**
  - Hàng tour (danh mục, khối "Năm tour" trang chủ, "Ghép thêm một tour"): đổi sang lưới 12 cột. Mô tả 7 cột, cột số liệu 5 cột (khoảng 420px). Nhãn để `white-space: nowrap`, nhãn dài thì rút gọn ("Tới Hòn Dài"). Giờ và giá đặt trong hai ô cố định cùng đường chân chữ.
  - Đường kẻ chia hàng phải nằm trong lưới 112–1328.
  - Giảm padding section xuống khoảng 96–120px desktop và 56–64px mobile.
  - Ở mobile trang chi tiết, hiện thanh dính "Giữ chỗ qua Zalo" ngay từ lúc tải, hoặc chuyển dòng giá người lớn và nút Zalo lên trong khối biển xanh.
  - Hàng "Bốn điều": hộp icon cố định 84×84, căn đáy, để bốn tiêu đề cùng một đường.

### Màu sắc – 6,5/10
- **Web top làm tốt hơn.**
  - Theo THAM-CHIEU, Chanteclerc chỉ dùng hai tông xanh, Vietravel dùng xanh chủ đạo với một điểm đỏ. Bài học số 10 của chính dự án là "một màu nhấn duy nhất cho nút Zalo".
  - Thực tế hành động giữ chỗ đang có 4 kiểu:
    - vàng ("Nhắn Zalo hỏi chỗ", "Giữ chỗ qua Zalo");
    - đen ("Giữ chỗ chuyến này" trên vé, desktop 25%);
    - xanh đặc ("Giữ chỗ" ở từng ngày khởi hành, desktop 50%);
    - viền trắng ("Gọi …").
  - Màu đỏ vừa là màu của giờ (08:15, 16:30… ở danh mục và lịch trình), vừa là màu cảnh báo ("Tạm nghỉ"), vừa là nắp cột km. Mắt không phân biệt được đâu là thông tin, đâu là cảnh báo.
  - Xanh lá (chấm lịch trình, tuyến trên bản đồ, chấm "đang trực") là màu thứ năm, không có vai trò rõ ràng.
- **Sửa.**
  - Mọi nút giữ chỗ hoặc Zalo đều màu vàng chữ đen. Nút phụ (Gọi) để viền.
  - "Giữ chỗ" ở danh sách ngày khởi hành đổi sang vàng, hoặc viền xanh nếu muốn hàng nhẹ hơn, nhưng đừng dùng xanh đặc.
  - Giờ dùng chữ xanh đậm trong ô trắng nắp đỏ (ký hiệu biển giờ). Đỏ chỉ để cho cột km, "Tạm nghỉ" và "Hết chỗ".
  - Xanh lá chỉ để cho trạng thái "còn chỗ / đang trực".
  - Nhãn "Sơn Trà" trên bản đồ đổi sang chữ xanh đậm có viền sáng.

## 4. Ba lỗi lớn nhất toàn site (theo thứ tự)

1. **Khoảng trống dọc quá lớn, nhịp trang đứt (mọi trang, cả hai khổ).** Các ảnh 25/50/75% có 25–40% màn là nền trống. Ví dụ: trang chủ desktop 50% (trên khối "Bốn điều" khoảng 150px, dưới khoảng 210px), chi tiết desktop 50% (khoảng 220px giữa "Cần biết trước" và "Ngày khởi hành"), danh mục mobile 75% (khoảng 190px CSS trước "Chưa chọn được?").
   **Sửa:** khoảng cách giữa hai section còn khoảng 96–120px desktop và khoảng 56–64px mobile. Bỏ trường hợp padding đáy của section này cộng với padding đầu của section sau. Ở trang chủ, đổi khuôn khối giữa ("Năm tour") để không lặp ba khối xanh giống nhau.
2. **Trang danh mục trông như hỏng và lệch lưới (desktop + mobile).** Thông báo rỗng "Chưa có tour nào khớp bộ lọc này" vẫn hiện dưới đủ 5 tour. Cột giá hẹp làm nhãn gãy dòng ("Tới Bãi san hô Hòn / Dài", "còn / 4/12"), khoảng chết khoảng 280px giữa hai cột, khối tiêu đề xanh trống nửa phải.
   **Sửa:** chỉ hiện trạng thái rỗng khi số tour lọc ra bằng 0. Hàng tour chia 7/5 cột, nhãn không gãy, giờ và giá cùng đường chân chữ. Nửa phải khối tiêu đề đặt bảng 5 tour và giờ tới nơi (giống hero trang chủ), hoặc thu khối lại cho vừa chữ.
3. **Màu nhấn của hành động không thống nhất, đỏ bị dùng cho hai nghĩa (trang chi tiết là nặng nhất).** Có 4 kiểu nút giữ chỗ (vàng, đen trên vé, xanh đặc ở từng ngày, viền). Giờ in chữ đỏ trùng với màu cảnh báo "Tạm nghỉ". Thêm vào đó, mobile trang chi tiết không có nút nào ở màn đầu.
   **Sửa:** mọi nút giữ chỗ hoặc Zalo đều vàng. Giờ đặt trong ô trắng nắp đỏ, chữ xanh đậm. Đỏ chỉ cho cảnh báo và cột km. Ở mobile trang chi tiết, hiện thanh dính Zalo ngay từ 0% (nền đặc, không trong suốt).

### Lỗi phụ cần sửa kèm
- Bản đồ tràn khung và vệt cung ở góc (chi tiết desktop 0%, trang chủ desktop 75%). Nhãn "Sơn Trà" bị cắt.
- Danh sách "Đã gồm / Chưa gồm" ba cột có đáy lệch nhau (chi tiết desktop 50%). Nên dùng chung một lưới hàng, hoặc mỗi cột thành một biển riêng có cùng chiều cao.
- "Khởi hành hằng / ngày" gãy dòng ở mobile chi tiết 0%. Nên đổi nhãn thành "Hằng ngày".
- Chữ mô tả dùng nét mảnh màu xám (mô tả tour, khối "Đặt cọc" khoảng 15px) nhìn nhạt trên nền #ECECE8. Nên tăng lên weight 400 và một bậc đậm màu.
- Trục giờ ở trang chủ chưa kiểm được trọn: cần chụp thêm ảnh trang chủ desktop khoảng 15–20% để xác nhận các thanh tour đã vẽ đủ.
