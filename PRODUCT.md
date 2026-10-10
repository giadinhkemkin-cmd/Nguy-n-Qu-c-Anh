# Product

<!-- impeccable:product-schema 1 -->

> Mọi mục dưới đây suy ra từ BRIEF.md (khách giả, dự án TEST). Người dùng dặn không dừng hỏi, nên phỏng vấn init được thay bằng suy luận từ brief; mục nào là suy luận có ghi "(suy luận)".

## Platform

web

## Stack

Astro 5 (luật hệ thống), GSAP + Lenis cho chuyển động, CSS thuần (không Tailwind), font tự host qua @fontsource. Không có backend: đặt chỗ qua Zalo/điện thoại.

## Users

Khách nội địa 25–45 tuổi từ Hà Nội, TP.HCM (cặp đôi, gia đình có con nhỏ, nhóm bạn) đã đặt vé máy bay và phòng ở nội thành Đà Nẵng, đang chọn 1–3 tour cho chuyến 3–5 ngày. Phần lớn xem trên điện thoại, nhiều khi ngay tối hôm trước ở khách sạn (suy luận). Việc họ cần làm: so tour, xem giá đã gồm gì, xem ngày nào còn chỗ, rồi nhắn Zalo giữ chỗ.

## Product Purpose

Web của một công ty tour nhỏ (Gió Nồm Travel) bán 5 tour ghép quanh Đà Nẵng. Thành công = khách bấm "Nhắn Zalo hỏi chỗ" hoặc gọi hotline với đủ thông tin (tour, ngày, số người).

## Positioning

Nhóm tối đa 12 khách trên xe 16 chỗ, lịch xếp để tới điểm chính lệch giờ đoàn lớn (08:15 Cầu Vàng, 06:00 Mỹ Sơn), đón tận khách sạn nội thành, huỷ miễn phí trước 24 giờ, giá ghi rõ đã gồm/chưa gồm. Công ty tour lớn chạy xe 29–45 chỗ không nói thật được điều này.

## Operating Context

Khách nhắn Zalo → điều hành báo còn chỗ, gửi số tài khoản cọc 30% → tối hôm trước hướng dẫn viên nhắn giờ đón → trả phần còn lại ngày đi. Lịch khởi hành: Bà Nà, Hội An hằng ngày; Mỹ Sơn T2/T4/T6; Huế T3/T6; Cù Lao Chàm tháng 3–9.

## Capabilities and Constraints

- 5 trang tour sinh từ `data/tours.json`, lịch từ `data/lich.json`, thông tin công ty từ `data/cong-ty.json`.
- Không thanh toán online, không tài khoản người dùng.
- Lần tải đầu khoảng 2MB, Lighthouse mobile từ 80, có prefers-reduced-motion.
- Chưa có: logo, màu thương hiệu, ảnh thật, review, số giấy phép lữ hành.

## Brand Commitments

Tên "Gió Nồm Travel" (gió nồm: gió biển mát thổi vào bờ miền Trung chiều hè). Giọng: người Đà Nẵng nói chuyện thẳng, ấm, không khoa trương; xưng "Gió Nồm", gọi "bạn". Không dùng từ trong TU-CAM.md.

## Evidence on Hand

- Dữ liệu tour, giá, lịch: `data/*.json` (dữ liệu test).
- Không có ảnh thật, review, giải thưởng, con số khách đã phục vụ. Không được bịa các thứ này.
- Ảnh thay bằng minh hoạ SVG và bản đồ dữ liệu Natural Earth (xem BRIEF, Danh sách tài nguyên).

## Product Principles

1. Giờ và con số cụ thể thay cho tính từ: "08:15 tới Cầu Vàng" thay "trải nghiệm tuyệt vời".
2. Giá luôn hiện cùng phần "đã gồm / chưa gồm"; không có chi phí bất ngờ.
3. Một hành động chính trên mỗi màn hình: nhắn Zalo hỏi chỗ.
4. Nói thật về giới hạn (biển động huỷ tour, Mỹ Sơn thường không thấy mặt trời mọc).

## Accessibility & Inclusion

WCAG AA về tương phản; vùng bấm ≥ 44px; đọc được bằng trình đọc màn hình (bản đồ, vé có mô tả chữ tương đương); reduced-motion. Người lớn tuổi đi cùng gia đình cũng xem web (suy luận) → chữ thân tối thiểu 16px.
