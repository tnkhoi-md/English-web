# Tnkhoi English 4.2

Hệ thống tự học tiếng Anh phổ thông (0 đến C1) và tiếng Anh y khoa cơ bản, chạy hoàn toàn trong trình duyệt.
Xây dựng bởi Nguyên Khôi. © KhoiTN-MD. Phiên bản 4.2 (02.10.26).

## Cấu trúc (thư mục gốc, đúng như repo English-web)

| File | Vai trò |
|---|---|
| `index.html` | Trang chính, nạp các file bên dưới theo đúng thứ tự (cache-bust `?v=4.0`) |
| `styles.css` | Giao diện |
| `content-general.js`, `content-medical.js`, `content-extra.js` | 12 bài học, 3 ca bệnh ảo, cặp âm, hình vị |
| `content-library-gen.js` | Thư viện phổ thông: 16 chủ đề, A1 đến C1 |
| `content-library-exam.js` | Từ vựng luyện thi: nền tảng A1–B2 (xếp đầu), TOEIC, IELTS/VSTEP, họ từ, kết hợp từ |
| `content-clinic-screen.js` | 10 tình huống phòng khám sàng lọc ban đầu (C4–C13) |
| `content-curriculum.js` | 18 chặng học (12 phổ thông A1.1 đến C1, 6 y khoa Y1 đến Y6) và ngân hàng 318 câu bài tập ngữ pháp |
| `content-pron-grammar.js` | Kho từ phát âm, Thư viện ngữ pháp (25 điểm A1–B2), 60 câu nói động lực |
| `content-library-med.js` | Thư viện y khoa: giải phẫu, sinh lý, bệnh học, lâm sàng |
| `app-core.js`, `app-views.js`, `app-views2.js` | Lõi: lưu trữ, FSRS, bộ đếm giờ, giọng đọc, bài học, ôn tập, phòng khám |
| `app-v4.js` | Thư viện, Mục tiêu, Kiểm tra đầu vào, Đồng bộ thiết bị, thanh công cụ |
| `app-v41.js` | Bộ lọc kỳ thi, Ngữ pháp, Kho phát âm, câu nói động lực, nhóm ca bệnh |
| `app-v42.js` | Lộ trình theo chặng, trang chặng, bài kiểm tra chặng, công cụ luyện tập 9 dạng câu. Phải nạp cuối cùng và khởi động app |
| `index-single-file.html` | Bản gộp một file, dùng để mở thử hoặc dự phòng |

Không đổi thứ tự thẻ `<script>` trong `index.html`. Các file `content-*` phải nạp trước `app-core.js`; `app-v42.js` luôn đứng cuối.

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

## Mới trong 4.2

- Lộ trình được thiết kế lại thành bản đồ chặng. Mỗi chặng gom bài học, bộ từ vựng lấy trực tiếp từ Thư viện (theo chủ đề và cấp độ), điểm ngữ pháp, nhóm phát âm, ca bệnh và một bài kiểm tra chặng. Đạt 80% là qua chặng.
- “Học từ mới” mỗi ngày lấy từ của chặng đang học; học trong chặng hay trong thư viện đều cộng vào cùng một tiến độ. Mỗi chủ đề trong thư viện và mỗi điểm ngữ pháp cho biết nó thuộc chặng nào.
- Ngân hàng bài tập ngữ pháp: 10 câu mỗi điểm A1, 12 câu A2, 14 câu B1, 16 câu B2 (318 câu), gồm 5 dạng: chọn đáp án, chọn câu đúng, điền dạng đúng, tìm lỗi sai, sắp xếp câu. Có chế độ luyện đầy đủ, kiểm tra nhanh 8 câu và làm lại câu sai.
- Bài kiểm tra chặng thêm 4 dạng cho từ vựng: chọn nghĩa, chọn từ tiếng Anh, nghe và chọn, viết đúng chính tả.

## Thêm bài tập ngữ pháp

Trong `content-curriculum.js`, mỗi dòng của `GRAMMAR_BANK` là một câu hỏi: `c|câu có ___|A / B / C|chỉ số đúng|giải thích`, `x|Chọn câu đúng|câu 1 / câu 2 / câu 3|chỉ số|giải thích`, `t|câu có ___ (gợi ý)|đáp án 1;đáp án 2|giải thích`, `f|câu có lỗi|từ sai|sửa thành|giải thích`, `o|câu hoàn chỉnh|giải thích`. Chỉ số bắt đầu từ 0.

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
