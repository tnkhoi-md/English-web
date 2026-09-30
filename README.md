# Tnkhoi English · v3.3

Bản nâng cấp từ v3.2, giữ nguyên dữ liệu học trong localStorage.

## Quan trọng khi cập nhật GitHub
- Các file JavaScript nằm trong thư mục `js/`.
- `index.html` đã gọi đúng `js/...`.
- Không đổi lại đường dẫn thành root nếu bạn giữ cấu trúc ZIP này.

## v3.3 hiện tại
- Giữ engine học, FSRS, resume, timer và nội dung của v3.2.
- Sửa lỗi an toàn khi trang Lộ trình đọc trạng thái resume sau khi reload, không còn phụ thuộc `L` runtime.
- Cache-bust sang `?v=3.3`.
- Hiển thị phiên bản 3.3.

## Cách cập nhật
1. Sao lưu dữ liệu trong Cài đặt → Tải file sao lưu.
2. Giải nén ZIP.
3. Upload toàn bộ file/thư mục trong ZIP vào repository, giữ nguyên cấu trúc.
4. Giữ `index.html` ở thư mục gốc và thư mục `js/` ở ngay bên cạnh.

## Lưu ý
Bản này ưu tiên ổn định. Các thay đổi lớn về Learning Profile, Library và mascot sẽ được triển khai ở các bản tiếp theo sau khi xác nhận bản 3.3 chạy ổn trên iPad/Safari.
