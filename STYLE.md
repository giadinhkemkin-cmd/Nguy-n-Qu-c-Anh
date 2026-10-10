# STYLE – ngôn ngữ thiết kế của web tham chiếu (extract-design)

Ngày làm: 10/10/2026. Danh sách web và nguồn ở THAM-CHIEU.md.

> **Cách lấy dữ liệu:** extract-design cần mở web để đọc CSS (`npx designlang`). Lần này lệnh đó thất bại ("No browser available"), curl/Playwright bị chặn, WebFetch báo `ENOTFOUND` với mọi tên miền. Mọi mục dưới đây lấy từ đoạn trích của công cụ tìm kiếm, trang Awwwards và trang của agency thiết kế. Phần nào không có nguồn thì ghi **"không lấy được"**, không đoán. Các file token (Tailwind, CSS variables, Figma) của extract-design **chưa tạo được**.

## 1. Từng web

### Vietravel – travel.com.vn
- **Màu:** nhận diện mới (ra mắt 20/12/2025) lấy **xanh làm màu chủ đạo** và giữ **mặt trời đỏ** ở logo (theo báo chí). Mã hex: **không lấy được**. (Có một mã #FCCC0C trên trang tổng hợp logo, nhưng là của Vietravel Airlines, một công ty khác, nên không dùng.)
- **Font:** không lấy được.
- **Khoảng cách / bo góc / đổ bóng:** không lấy được.
- **Mẫu thành phần (theo chữ trên trang):**
  - Trang danh mục theo điểm đến có dòng tổng số ("395 tour đã lên lịch khởi hành") và danh sách tour.
  - Thẻ tour: mã chương trình, nơi khởi hành, thời gian (3N2Đ), dãy ngày khởi hành, "Giá từ … ₫".
  - Từng ngày khởi hành có số chỗ còn hoặc "Hết chỗ".
  - Mỗi chuyến có mã riêng trong URL (`?tourCode=…`).
  - Trang "Tour giờ chót": giá cũ gạch ngang, giá mới, số chỗ.
  - Tên tour rất dài, nối nhiều điểm và cả hạng khách sạn (vd. "Đà Nẵng – Bán đảo Sơn Trà – KDL Bà Nà Hills (bao gồm vé cáp treo) – Phố cổ Hội An – Rừng dừa Bảy Mẫu – … – Khách sạn 4 sao").
  - Có bản tiếng Anh (`/en/du-lich-da-nang`).
- **Tóm tắt ngôn ngữ thiết kế:** kiểu cửa hàng bán tour số lượng lớn. Ưu tiên tìm và lọc, nhiều thông tin trên một thẻ, nhiều khuyến mãi.

### Lữ hành Saigontourist – saigontourist.net
- **Màu:** không lấy được. **Font:** không lấy được. **Khoảng cách / bo góc / đổ bóng:** không lấy được.
- **Mẫu thành phần:**
  - Ba kiểu trang theo điểm đến, URL ngắn: `/tours/da-nang` (tour trọn gói), `/free-easy/da-nang` (tự túc), `/diem-den/da-nang` (giới thiệu điểm đến).
  - Thẻ tour: số ngày đêm, giá từ, hãng bay.
  - Trang chi tiết: mã tour theo năm (`STN084-2026-…`), số hiệu và giờ bay, "giá tour bao gồm", phụ thu phòng đơn, giá trẻ em theo tuổi, khoản chưa gồm có giá, phương án dự phòng khi thời tiết xấu.
  - Nút "Đặt/Mua tour" ở trang danh sách.
  - Còn tồn tại song song URL kiểu cũ (`/vi/tour-trong-nuoc/3869/…`), tức là có hai hệ trang cho cùng một tour.
- **Tóm tắt:** gọn hơn Vietravel ở cấu trúc URL. Trang chi tiết nặng chữ, kiểu văn bản điều khoản, nhưng minh bạch về giá và rủi ro.

### Lữ hành Hanoitourist – hanoitourist.vn
- **Màu:** không lấy được. **Font:** không lấy được. **Khoảng cách / bo góc / đổ bóng:** không lấy được.
- **Mẫu thành phần:**
  - Danh sách tour theo điểm đến: ngày khởi hành cụ thể, giá theo ngày, số chỗ còn ("còn 9 chỗ").
  - Luồng đặt chỗ đi từ một ngày khởi hành (`/tour/562/lich/2598/booking`).
  - Trang chi tiết: điều kiện đặt cọc, các khoản ngoài chương trình có giá.
  - Tiêu đề trang mang giọng khuyến mãi ("giá cực tốt 2026"). Khẩu hiệu "Thương hiệu du lịch uy tín từ 1963" nằm ở tiêu đề trang.
- **Tóm tắt:** giống Vietravel ở cách bán theo lịch. Điểm hay là đặt chỗ đi từ từng chuyến.

### Intrepid Travel – intrepidtravel.com
- **Màu:** lần làm mới thương hiệu đã **làm dịu màu đỏ đặc trưng** và tách chữ khỏi vòng tròn logo (Travel Weekly). Mã hex: **không lấy được**.
- **Font:** không lấy được. **Khoảng cách / bo góc / đổ bóng:** không lấy được.
- **Mẫu thành phần:**
  - Khối thông số chuyến có "Group size: 1 to 12".
  - Lịch trình theo ngày, mỗi ngày dùng cùng một bộ tiêu đề con: Accommodation, Meals, Included activities, Optional activities (giá từng hoạt động), Special information.
  - Ngày khởi hành có mã riêng.
  - Lịch, giá, chỗ trống nằm trong widget tải sau (không có trong chữ đã index).
  - Có ghi chú "Before you book" về thể lực, viết bằng câu văn.
  - URL theo thị trường (`/en/`, `/us/`, `/au/`, `/eu/`).
- **Tóm tắt:** lịch trình rất có cấu trúc. Thương hiệu xây trên mục đích (B Corp), giọng người thật.

### G Adventures – gadventures.com
- **Màu:** logo tím **#49207A**. *Nguồn là trang tổng hợp logo bên thứ ba, không phải CSS, chưa đối chiếu.* Màu trên web: **không lấy được**.
- **Font:** không lấy được. **Khoảng cách / bo góc / đổ bóng:** không lấy được.
- **Mẫu thành phần:**
  - URL chuyến dạng `/trips/<slug>/<MÃ>/`.
  - Khối thông số ngắn: số ngày, mức thể lực có số và chữ ("2 – Light"), độ tuổi, quy mô nhóm hai số ("Max 24, Avg 16").
  - Danh sách ngày khởi hành có nhãn "sold out".
  - Có FAQ chung về quy mô nhóm.
  - Hệ nhận diện linh hoạt cho nhiều dòng sản phẩm (Travel Styles), thay cho bản cũ bị agency đánh giá là "rối".
- **Tóm tắt:** thông số chuyến nén vào một khối, dễ so sánh giữa các tour. Thương hiệu một màu mạnh.

### Tours Chanteclerc – tourschanteclerc.com (web bổ sung, không phải công ty top)
- **Màu (theo Awwwards):** **#125ED1** (xanh dương sáng), **#0A254D** (navy đậm). Màu xanh lấy lại từ catalogue in cũ của hãng.
- **Font:** một serif chính và một sans hiện đại phụ (theo agency Leeroy). Tên font: **không lấy được**.
- **Khoảng cách / bo góc / đổ bóng:** không lấy được.
- **Mẫu thành phần:**
  - Carousel điểm đến cho tour chủ lực.
  - Trang chi tiết riêng cho từng tour, thay cho brochure PDF.
  - Bản đồ điểm đến.
  - Bộ lọc động và bảng lọc nâng cao (Algolia).
  - Design system dựng từ module dùng lại. CMS là Craft.
- **Tóm tắt:** bảng màu hai tông có gốc lịch sử, chữ có tương phản serif/sans, thông tin tour đưa lên web thay vì nằm trong PDF.

## 2. Mẫu chung của ngành

Các mẫu này rút từ trường thông tin, không rút từ ảnh. Vị trí, cột và màu chưa kiểm được.

1. **Bán theo chuyến, không chỉ theo tour.** Cả 5 công ty top đều liệt kê ngày khởi hành cụ thể. Vietravel, Hanoitourist và G Adventures còn ghi chỗ trống hoặc hết chỗ cho từng ngày (Saigontourist, Intrepid: chưa thấy trong chữ đã index; Tours Chanteclerc: chưa kiểm).
2. **Bộ trường của thẻ tour gần như cố định:** tên, thời lượng (NĐ hoặc số ngày), nơi khởi hành, giá từ, ngày khởi hành. Web quốc tế thêm quy mô nhóm, độ tuổi, mức thể lực.
3. **Mã tour hoặc mã chuyến** có ở Vietravel, Saigontourist, Intrepid, G Adventures (trong URL hoặc trên trang). Hanoitourist chỉ có số định danh trong URL.
4. **Số chỗ còn và nhãn hết chỗ** tạo cảm giác khan hiếm thật, dựa trên dữ liệu thật.
5. **Trang chi tiết nặng chữ**, chia khối theo ngày. Phần giá gồm/chưa gồm, trẻ em, phụ thu, đặt cọc, huỷ thường nằm cuối trang.
6. **Danh mục theo điểm đến** là trục điều hướng chính (`/du-lich-da-nang`, `/tours/da-nang`, `/tour-da-nang`).
7. **Thương hiệu một màu mạnh:** xanh (Vietravel mới, Chanteclerc), đỏ (Intrepid), tím (G Adventures, chưa đối chiếu).

## 3. Chỗ ngành làm yếu mà Gió Nồm có thể vượt

| Chỗ yếu (có dẫn chứng) | Gió Nồm làm khác thế nào |
|---|---|
| **Không ghi quy mô nhóm.** Ba web trong nước không thấy số khách tối đa. Web quốc tế có ghi nhưng con số lệch nhau (G Adventures: "Max 24" trên trang chuyến, "up to 15" trong FAQ). | Một con số **12** ở mọi thẻ, mọi trang, cùng trọng lượng chữ với giá. Hiện "còn x/12 chỗ" theo từng chuyến. |
| **Không ai nói giờ tới điểm.** Các web chỉ ghi ngày, buổi hoặc giờ bay, không ghi giờ tới điểm tham quan. | Giờ tới điểm chính là thông tin chính (08:15 Cầu Vàng, 06:00 Mỹ Sơn), đúng với "Đà Nẵng lúc còn vắng". |
| **Giá "từ" và khoản chưa gồm rải trong văn bản** (cáp treo 650.000đ, 750.000đ nằm giữa đoạn văn). | Giá đầy đủ cho người lớn/trẻ em và khối "Đã gồm / Chưa gồm" có số tiền, đặt sát nút giữ chỗ. |
| **Trang và lịch đã hết hạn vẫn mở và được index** (Vietravel có trang tour 2018; BenThanh, Hanoitourist, Saigontourist có lịch 2022–2025). Hai hệ URL song song (Saigontourist). | Lịch sinh từ `data/lich.json`, chuyến đã qua tự ẩn, mỗi tour chỉ có một URL. |
| **Tên tour dài 7–8 điểm nối bằng gạch ngang**, khó đọc trên màn hình 390px. | Tên ngắn theo trải nghiệm (vd. "Hội An chiều tối"). Danh sách điểm đưa vào lịch trình. |
| **Giọng khuyến mãi** ("giá cực tốt", "giá ưu đãi", "giờ chót", "siêu sale"). | Không có banner giảm giá. Giọng nói cơ chế (TU-CAM.md đã cấm "giá sốc", "siêu rẻ"). |
| **Rủi ro thời tiết, huỷ tour nằm cuối trang.** Chỉ Saigontourist ghi phương án dự phòng, và cũng nằm trong văn bản dài. | Câu "biển động thì sao" và "huỷ miễn phí trước 24 giờ" đặt cạnh nút Zalo, nhất là ở tour Cù Lao Chàm. |
| **Đặt chỗ qua form dài hoặc giỏ hàng.** Khách nhỏ không cần thanh toán online. | Một nút Zalo, tin nhắn soạn sẵn kèm tên tour, ngày và mã chuyến. |
| **Mức thể lực viết bằng câu văn** (Intrepid "Before you book"). Web trong nước không có. | Nhãn ngắn theo dữ liệu tour ("dậy 4:30", "đi tàu cao tốc 20 phút"), hợp với gia đình có con nhỏ. |
| **Ảnh:** **chưa kiểm được** vì không xem được web. Không kết luận là ảnh stock. | Ghi lại để kiểm khi có ảnh chụp. Gió Nồm dùng minh hoạ SVG và bản đồ dữ liệu thật, không dùng ảnh AI trông như thật. |
