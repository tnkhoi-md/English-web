# Tnkhoi English 4.1

Hệ thống tự học tiếng Anh phổ thông (0 đến C1) và tiếng Anh y khoa cơ bản, chạy hoàn toàn trong trình duyệt.
Xây dựng bởi Nguyên Khôi. © KhoiTN-MD. Phiên bản 4.1 (01.10.26).

## Cấu trúc (thư mục gốc, đúng như repo English-web)

| File | Vai trò |
|---|---|
| `index.html` | Trang chính, nạp các file bên dưới theo đúng thứ tự (cache-bust `?v=4.0`) |
| `styles.css` | Giao diện |
| `content-general.js`, `content-medical.js`, `content-extra.js` | 12 bài học, 3 ca bệnh ảo, cặp âm, hình vị |
| `content-library-gen.js` | Thư viện phổ thông: 16 chủ đề, A1 đến C1 |
| `content-library-exam.js` | Từ vựng luyện thi: nền tảng A1–B2 (xếp đầu), TOEIC, IELTS/VSTEP, họ từ, kết hợp từ |
| `content-clinic-screen.js` | 10 tình huống phòng khám sàng lọc ban đầu (C4–C13) |
| `content-pron-grammar.js` | Kho từ phát âm, Thư viện ngữ pháp (25 điểm A1–B2), 60 câu nói động lực |
| `content-library-med.js` | Thư viện y khoa: giải phẫu, sinh lý, bệnh học, lâm sàng |
| `app-core.js`, `app-views.js`, `app-views2.js` | Lõi: lưu trữ, FSRS, bộ đếm giờ, giọng đọc, bài học, ôn tập, phòng khám |
| `app-v4.js` | Thư viện, Mục tiêu, Kiểm tra đầu vào, Đồng bộ thiết bị, thanh công cụ |
| `app-v41.js` | Bộ lọc kỳ thi, Ngữ pháp, Kho phát âm, câu nói động lực, nhóm ca bệnh. Phải nạp cuối cùng và khởi động app |
| `index-single-file.html` | Bản gộp một file, dùng để mở thử hoặc dự phòng |

Không đổi thứ tự thẻ `<script>` trong `index.html`. Các file `content-*` phải nạp trước `app-core.js`; `app-v41.js` luôn đứng cuối.

## Cập nhật lên GitHub Pages

1. Trên bản đang chạy, vào Cài đặt, chọn Tải file sao lưu (phòng khi cần).
2. Chép toàn bộ file trong gói này vào thư mục gốc của repo, ghi đè bản cũ. Xóa `README-IMPORTANT.txt` cũ nếu còn.
3. Commit và push. Dữ liệu cũ (`tnkhoi_english_v3`) được giữ nguyên và tự nâng lên v4.

## Đồng bộ giữa các thiết bị

Vào mục Đồng bộ thiết bị và làm theo hướng dẫn: tạo một fine-grained token trên GitHub với duy nhất quyền **Gists: Read and write**, dán vào app. App tạo một Gist bí mật `tnkhoi-english-sync.json` và gộp dữ liệu hai chiều mỗi khi mở app, mỗi 3 phút và khi rời trang. Trên thiết bị thứ hai, dán cùng mã, app tự tìm lại Gist.

Quy tắc gộp: thẻ ôn lấy bản ôn gần nhất, điểm bài học và ca bệnh lấy mức cao nhất, từ “đã biết” lấy hợp của hai bên, thời gian học lưu riêng theo từng thiết bị rồi cộng lại, cài đặt và mục tiêu lấy bản sửa sau cùng. Mã truy cập chỉ lưu trên thiết bị, không nằm trong file sao lưu hay trong Gist.

Đồng bộ chỉ hoạt động trên trang GitHub Pages (hoặc khi mở file trực tiếp), không hoạt động trong bản xem thử trên claude.ai vì trang đó chặn kết nối ra ngoài.

## Thêm từ vào thư viện

Mỗi dòng trong `content-library-*.js` có dạng `từ|từ loại|nghĩa|câu ví dụ hoặc định nghĩa`. Thêm dòng vào đúng cấp độ (`A1`…`C1` hoặc `T1`/`T2`) của chủ đề là xong. Mã thẻ ôn tính theo chủ đề và chính tả của từ, nên đừng đổi `id` chủ đề hay sửa chính tả một từ đã có người học (thẻ cũ sẽ bị bỏ qua). Muốn thêm chủ đề mới, chép một khối `{ id, icon, color, title, vi, levels }`.

## Mới trong 4.1

- Thư viện từ vựng ưu tiên từ thông dụng A1–B2 cho IELTS, TOEIC, VSTEP và bài thi theo CEFR; lọc theo kỳ thi và cấp độ. Lượt học từ mới mỗi ngày đi theo thứ tự A1 → B2 trước khi sang C1.
- Kho từ phát âm (Phát âm, thẻ Kho từ phát âm): chữ câm, âm tiết bị nuốt, trọng âm, đuôi -ed/-s, /θ ð/, cụm phụ âm cuối, thuật ngữ y khoa; nghe giọng UK và US, tự nói để máy nhận dạng.
- Thư viện ngữ pháp: 25 điểm A1–B2, công thức, cách dùng, ví dụ, lỗi sai thường gặp, câu hỏi luyện kiểu đề thi.
- Phòng khám ảo: thêm 10 tình huống sàng lọc ban đầu (đau họng, tăng huyết áp, đái tháo đường, đau lưng, tiểu buốt, đau ngực, tiêu chảy, ban ngứa, đau gối, trầm cảm).
- Trang Hôm nay: khung câu nói động lực, đổi ngẫu nhiên mỗi lần mở app.
- “Lỗi người Việt hay gặp” đổi thành “Lỗi sai thường gặp”.

## Giới hạn

- Thư viện là bộ từ lõi có chọn lọc (khoảng 1.400 từ), chưa phải toàn bộ vốn từ của mỗi cấp CEFR. Kiểm tra đầu vào chỉ ước lượng vốn từ nhận biết, không phải bài thi CEFR.
- Từ trong thư viện chưa có phiên âm IPA; hãy dùng nút nghe.
- Nội dung y khoa phục vụ học ngôn ngữ, không phải tài liệu chuyên môn.
