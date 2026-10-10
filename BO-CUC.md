# Bố cục từng loại trang (impeccable shape)

Giả định (không hỏi người dùng theo yêu cầu): mobile 390px là chính; khách đọc lướt; mọi trang có nút Zalo trong tầm ngón cái.

## Khung chung
- Header: dải xanh biển chỉ dẫn mỏng 56px: logo chữ "Gió Nồm" + dấu sóng, nút tròn mở menu (mobile), menu ngang (desktop ≥ 960px): Tour · Lịch khởi hành · Liên hệ · nút vàng "Nhắn Zalo".
- Mobile: dải hành động dính đáy (Zalo vàng + Gọi) xuất hiện sau khi qua hero; ẩn khi bàn phím mở/khi đang ở footer.
- Footer: nền than nhựa đường, vạch vàng đứt ở mép trên; thông tin công ty, giấy phép [CẦN XÁC NHẬN], dòng "dữ liệu thử nghiệm".

## Trang chủ (thứ tự, nhịp)
1. Hero – biển chỉ dẫn (êm, đọc ngay): H1 + 5 dòng tuyến (link) + nút Zalo + link xem tour.
2. Dải giờ (dồn): 5 cột cây số theo giờ tới, cuộn ngang theo cuộn dọc trên desktop; mobile là danh sách cột mốc xếp dọc, cột trồi lên khi vào khung.
3. Bản đồ tuyến (êm): bờ biển thật, 5 tuyến vẽ dần theo cuộn, chạm tên tuyến để nổi bật.
4. Năm tour, giá đã gồm vé: danh sách dạng "bảng giờ xe" – mỗi hàng: pictogram, tên, thời lượng, giờ, lịch, giá; mobile thành thẻ biển nhỏ xếp dọc. Không lưới 3 thẻ giống nhau.
5. Bốn điều giữ ở mọi chuyến: 4 biển hiệu lệnh tròn/vuông kiểu biển báo (12 người, đón tận nơi, lệch giờ, huỷ 24h).
6. Ai lo chuyến đi + 3 bước đặt (chung một khối "tuyến đặt chỗ" có vạch đường nối 3 mốc).
7. Câu hỏi thường gặp (accordion).
8. Kêu gọi cuối: "Bạn đi ngày nào?" trên nền xanh, nút Zalo + gọi.

## Danh mục tour
- H1 + câu dẫn; hàng lọc dạng biển phụ (Tất cả · Trong ngày · Nửa ngày · Qua đêm) cuộn ngang trên mobile.
- Danh sách tour dạng hàng biển chỉ dẫn lớn (đủ giá người lớn/trẻ em, lịch, trạng thái mùa); trạng thái rỗng khi lọc không ra.
- Khối "Chưa chọn được?" + Zalo.

## Chi tiết tour
1. Đầu trang: biển chỉ dẫn riêng của tour (tên, km từ văn phòng, giờ, thời lượng), khung ảnh thật (chờ ảnh khách, tạm dùng bản đồ tuyến).
2. Hộp giá dính (desktop cột phải; mobile thành dải đáy).
3. Chuyến này có gì (điểm nhấn).
4. Lịch trình theo giờ + **vé chạy theo** (chiêu riêng): desktop vé dính bên phải, bản đồ nhỏ trong vé; mobile vé thu thành dải đáy (giờ lật + tên điểm + nút).
5. Giá đã gồm / Chưa gồm (hai cột), Nên mang theo, Cần biết trước.
6. Ngày khởi hành sắp tới (từ lich.json; trạng thái hằng ngày / theo thứ / ngoài mùa / hết chỗ).
7. Đặt cọc và huỷ tour.
8. Ghép thêm một tour (2–3 tour khác, hàng biển nhỏ).

## Lịch khởi hành
- Lọc theo tour; danh sách theo tuần, mỗi chuyến: thứ/ngày, tour, còn chỗ (còn n / sắp hết ≤ 3 / hết chỗ), nút giữ chỗ.

## Liên hệ
- Kênh nhanh (Zalo, gọi, email), form soạn tin Zalo (kiểm lỗi ngay tại ô), địa chỉ + giờ, chính sách cọc/huỷ.
