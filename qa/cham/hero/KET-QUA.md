# Chấm 3 hero – giám khảo độc lập (chấm mù)

Ngày: 10/10/2026. Chỉ xem TIEU-CHI.md, THAM-CHIEU.md, STYLE.md và 6 ảnh trong `qa/hero/` (desktop 1440, mobile 390 @2x). Không có ảnh tham chiếu, nên so theo mô tả. Tương phản đo trên ảnh chụp: chữ đoạn #C9D7F0 trên nền #1446A0 ≈ 6,0:1; chữ tối trên nút vàng #F3B300 ≈ 8,1:1; giờ vàng trên xanh ≈ 4,7:1 (đều đạt AA).

## Bảng điểm

| Hero | Style | Bố cục | Màu sắc | **Tổng 3 chính** | Chữ (phụ) | Rõ ý và hành động |
|---|---|---|---|---|---|---|
| 1 – Biển chỉ đường cao tốc | 7 | 7 | 7 | **21** | 7 | 8 |
| 2 – Bản đồ bờ biển | 7 | 6 | 6 | **19** | 7 | 5 |
| 3 – Cột cây số | 6 | 5 | 6 | **17** | 4 | 6 |

**Thắng: Hero 1 (21 điểm).** Chưa hero nào đạt ngưỡng ≥ 8 ở 3 tiêu chí chính, nên phải sửa rồi chấm lại.

## Nhận xét từng tiêu chí

### Hero 1 – Biển chỉ đường
- **Style 7:** ý tưởng biển xanh cao tốc có viền trắng đôi, cột chống và mặt đường vạch vàng nhất quán, có cá tính, không lộ mùi AI; nhưng thua web top ở chỗ không có cảm xúc nơi đến (bảng 5 hàng trông như bảng điều hành, thiếu một hình minh hoạ cảnh). Sửa: thêm một dải phong cảnh SVG mảnh (núi Sơn Trà, sóng) phía sau cột biển, cao ~120px, đặt dưới mép biển và trên mặt đường.
- **Bố cục 7:** lưới 2 cột rõ, tiêu đề đọc trước, nút nằm trong tầm mắt; thua ở chỗ cột phải (5 hàng chữ hoa + 5 ô giờ đỏ) nặng ngang tiêu đề nên mắt bị kéo hai hướng, và bên dưới mặt đường là một dải trống xám ~70px vô nghĩa. Mobile chỉ xếp chồng: tên điểm gãy dòng ("ĐỈNH ĐÈO HẢI / VÂN"), "· 45 km" rơi xuống dòng riêng. Sửa: giảm tên điểm từ ~32px xuống 26px, ô giờ 88×48 xuống 76×40; trên mobile chỉ hiện 3 hàng, bỏ mũi tên, đặt km cùng dòng với giờ; bỏ dải trống dưới mặt đường.
- **Màu sắc 7:** xanh 60 – trắng ngà 30 – vàng nút 10 khá đúng, tương phản đạt; nhưng có hai màu nhấn tranh nhau (vàng nút và 5 ô giờ đỏ #C62828 đậm ngang nhau), cộng thêm các vạch màu nâu/xanh lá dưới icon và hai nút vàng cùng màn (menu + hero). Sửa: ô giờ chuyển sang nền trắng chữ xanh đậm #0A2A6B, chỉ giữ một dải đỏ 4px phía trên; bỏ vạch màu dưới icon.
- **Chữ 7 (phụ):** condensed đậm hợp biển báo, đủ dấu, dòng thoáng; đoạn mô tả font mảnh (~300) cỡ 18px trên nền xanh hơi yếu, nhãn "ĐIỂM CHÍNH / GIỜ ĐOÀN TỚI NƠI" 11px giãn chữ quá nhỏ. Sửa: đoạn lên 400, 19–20px; nhãn cột 13px.
- **Rõ ý và hành động 8:** hiểu bán tour nhóm nhỏ, giờ tới sớm; nút "Nhắn Zalo hỏi chỗ" nằm ở ~395px trên mobile 844px. Thiếu giá và chỗ trống. Sửa: thêm một dòng dưới nút "Chuyến gần nhất: Cầu Vàng 12/10 · còn 5/12 chỗ · từ …đ".

### Hero 2 – Bản đồ
- **Style 7:** bản đồ bờ biển thật với tuyến kiểu metro là điểm khác biệt mạnh, gần hướng Tours Chanteclerc; nhưng bản đồ không có tên địa danh nên chỉ là các đường màu, và nhãn 16:30 bị chính tuyến xanh ngọc đè lên, nhãn 06:00 sát mép dưới. Sửa: thêm nhãn địa danh 14px cạnh mỗi đầu tuyến; dời nhãn 16:30 vào trong khung ít nhất 24px.
- **Bố cục 6:** desktop cột trái 576px chật, tiêu đề 3 dòng, danh sách giờ và chú thích chạm đáy màn 900px; mobile đẩy bản đồ lên đầu (~490px) nên tiêu đề ở ~580px và nút rơi khỏi màn đầu. Sửa: mobile đặt chữ + nút trước, bản đồ sau (hoặc bản đồ cao tối đa 240px); desktop tiêu đề 2 dòng, bỏ dòng chú thích.
- **Màu sắc 6:** 5 màu tuyến (nâu, xanh lá, đỏ, xanh ngọc, cam) + vàng + đỏ nhãn + xanh nền: bảng màu loãng, phá 60-30-10; giờ vàng 4,7:1 chỉ vừa đạt. Sửa: tuyến dùng một màu đậm #0A2A6B với nét liền/đứt, chỉ tuyến đang chọn mới tô vàng.
- **Chữ 7 (phụ):** tiêu đề condensed đẹp, danh sách 16px dễ đọc; chú thích 12px quá nhỏ.
- **Rõ ý và hành động 5:** trên mobile màn đầu chỉ thấy bản đồ không chú thích và nửa tiêu đề, không thấy nút. Trượt tiêu chí "thấy nút chính ngay màn đầu trên mobile".

### Hero 3 – Cột cây số
- **Style 6:** cột cây số QL1A là hình ảnh rất Việt Nam, có cá tính; nhưng 5 cột nhỏ giống hệt nhau là mẫu "nhiều thẻ giống nhau", và "0 km" khó hiểu. Sửa: chỉ giữ cột lớn, đổi "0 km" thành "Đà Nẵng 0 km" ở dòng riêng nhỏ hơn; thay 5 cột nhỏ bằng danh sách giờ.
- **Bố cục 5:** desktop không có tiêu đề ở cột phải (đoạn văn đứng đầu), khung xám chứa 5 cột tràn ra ngoài lưới ~40px bên phải, cột "BÃI SAN HÔ HÒN DÀI" cao hơn các cột khác, dưới hero có dải xám trống ~70px. Mobile: cột lớn chiếm ~400px trước khi tới mô tả.
- **Màu sắc 6:** đỏ – trắng – xanh – vàng – xám đen đều đậm ngang nhau, không có màu chủ; đỏ chiếm diện tích lớn hơn nút vàng nên nút không nổi nhất.
- **Chữ 4 (phụ):** lỗi dấu: "VẮNG" mất dấu sắc, đọc thành "VĂNG" (chữ hoa sát dòng làm cắt dấu); đầu các cột nhỏ chỉ ghi "MỸ", "BÀ", "HẢI", "CÙ", "HỘI" – chữ cụt vô nghĩa. Sửa: line-height tiêu đề hoa ≥ 1.15 và padding-top cho dấu; bỏ chữ cụt.
- **Rõ ý và hành động 6:** nút ở ~620px trên mobile vẫn thấy, nhưng thông điệp bị chia hai nơi (tiêu đề trong cột, mô tả bên ngoài) và "0 km" gây hiểu nhầm.

## 3 vấn đề lớn nhất của Hero 1 (bên thắng)

1. **Hai màu nhấn tranh nhau:** 5 ô giờ đỏ chữ trắng nền đậm cạnh tranh với nút vàng. Sửa: ô giờ nền trắng, chữ #0A2A6B, chỉ một viền đỏ 4px; vàng chỉ dùng cho nút Zalo (ẩn nút Zalo ở menu khi hero đang hiện).
2. **Mobile chỉ co lại:** bảng 5 hàng làm tên điểm gãy 2 dòng, km rơi dòng, mũi tên chiếm 40px vô ích. Sửa: mobile bỏ mũi tên và icon, mỗi hàng 1 dòng "Cầu Vàng · 35 km ……… 08:15" cỡ 18px, chỉ hiện 3 hàng + link "Xem cả 5 tour".
3. **Thiếu bằng chứng bán hàng và cảm xúc:** không có giá, ngày, chỗ trống (điều web top đều có), cũng không có hình cảnh; thêm vào đó là dải xám trống dưới mặt đường. Sửa: thêm dòng "Chuyến gần nhất · còn x/12 chỗ · từ …đ" (lấy từ dữ liệu thật) dưới nút; thêm dải phong cảnh SVG cao ~120px sau cột biển; bỏ khoảng trống dưới mặt đường.
