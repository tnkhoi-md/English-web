# Tnkhoi English 3.0

Hệ thống tự học tiếng Anh thông dụng và tiếng Anh y khoa, chạy hoàn toàn trong trình duyệt, không cần máy chủ và tài khoản.
Xây dựng bởi Nguyên Khôi. © KhoiTN-MD. Phiên bản 3.0 (29.9.26).

## Có gì trong ứng dụng

- **Hôm nay**: kế hoạch tối đa 3 bước, tự sắp theo thứ tự ưu tiên: thẻ đến hạn, bài tiếp theo (xen kẽ hai mạch), ca bệnh ảo hoặc kỹ năng yếu nhất. Mỗi bước ghi rõ lý do.
- **Lộ trình**: 6 bài tiếng Anh thông dụng (G1–G6, A1–A2) và 6 bài tiếng Anh y khoa (M1–M6). Mỗi bài gồm 6 từ, mẫu câu kèm lỗi người Việt hay gặp, nghe hiểu, bài tập, phát âm và nói.
- **Ôn tập**: thuật toán FSRS-4.5 với tham số mặc định. Mỗi từ có 2 thẻ (nhìn từ nhớ nghĩa, nhìn nghĩa gõ lại từ). Thẻ chỉ được tạo khi học xong bài.
- **Phòng khám ảo**: 3 ca (đau đầu, đau thượng vị, ho sốt). Hỏi bệnh bằng cách gõ, nói hoặc chọn từ ngân hàng câu hỏi (có cả cách hỏi chưa phù hợp). Sau đó viết tóm tắt ca, chọn chẩn đoán, cách giải thích, và nhận báo cáo theo các nhóm tiêu chí giao tiếp lâm sàng kiểu OET.
- **Phát âm**: 7 cặp âm tối thiểu người Việt hay nhầm (/θ/–/t/, /ɪ/–/iː/, /l/–/n/, âm cuối…), nghe phân biệt và tự nói để máy nhận dạng.
- **Sổ từ và thuật ngữ**: từ đã học kèm trạng thái ôn, bảng 31 hình vị y khoa, trò ghép thuật ngữ.
- **Tiến bộ**: điểm kỹ năng chỉ tính từ bằng chứng thật (kèm số lần), thời gian 14 ngày, lịch 12 tuần.

Thời gian học chỉ được tính khi bạn đang ở màn học, trang đang hiển thị và có tương tác trong 2 phút gần nhất. Một ngày vào chuỗi khi học từ 5 phút.

## Đưa lên GitHub Pages

1. Chép toàn bộ nội dung thư mục này (hoặc chỉ riêng `index.html` bản một-file) vào repository `English-web`, ghi đè bản cũ.
2. Commit và push. GitHub Pages sẽ phục vụ lại tại địa chỉ cũ.
3. Dữ liệu cũ trong trình duyệt (khóa `tnkhoi_english_*`) được tự nhận ra lần đầu mở: thời gian học được mang sang, các số liệu mẫu (XP, streak giả) thì không.

Trên iPad: mở trang bằng Safari, chọn Chia sẻ, Thêm vào MH chính để dùng như một ứng dụng.

## Dữ liệu và sao lưu

Mọi dữ liệu nằm trong `localStorage` của trình duyệt trên thiết bị đó (khóa `tnkhoi_english_v3`). Safari có thể xóa dữ liệu của trang ít dùng, vì vậy hãy vào **Cài đặt**, chọn **Tải file sao lưu** hoặc **Sao chép dữ liệu** mỗi tuần. File nhập vào luôn được kiểm tra và làm sạch trước khi dùng.

## Thêm bài học mới

Nội dung nằm riêng trong `js/content-general.js`, `js/content-medical.js` và `js/content-extra.js`. Để thêm bài, chép một khối bài có sẵn, đổi `id` (ví dụ `G7`), điền `words` (6 từ, có `us`/`uk` IPA, `syl` và `st` là chỉ số âm tiết nhấn) và `steps`. Các dạng bước có sẵn: `pattern`, `listen`, `read`, `mcq`, `cloze` (chọn hoặc gõ), `order`, `dict`, `classify`, `pairs`, `speak`. Mã thẻ ôn tập có dạng `G7:0:r`, nên `id` bài phải là một chữ G hoặc M kèm một chữ số.

Muốn tạo lại bản một-file sau khi sửa: nối các file JS theo thứ tự trong `index.html` vào một thẻ `<script>`.

## Giới hạn cần biết

- Giọng đọc là giọng tổng hợp của thiết bị. Trên iPad, tải giọng tiếng Anh loại Nâng cao trong Cài đặt, Trợ năng, Nội dung được đọc để nghe tự nhiên hơn.
- Nhận dạng giọng nói (Safari 14.5 trở lên, Chrome) chỉ cho biết máy hiểu bạn nói từ nào, không chấm từng âm vị như ELSA.
- Phòng khám ảo nhận câu hỏi tự do bằng so khớp từ khóa, nên có lúc không hiểu một cách diễn đạt lạ. Khi đó hãy nói rõ hơn hoặc chọn từ ngân hàng câu hỏi.
- Nội dung y khoa phục vụ học ngôn ngữ, không phải hướng dẫn chẩn đoán hay điều trị. Điểm phòng khám là để tự luyện, không phải điểm OET.


## v3.2 Stability
- Resume bài đang học sau reload.
- Writing live word count + auto-save.
- Study timer ổn định hơn trên iPad/Safari.
- Cache-busting JS assets.
- Semantic colors cho General/Medical.
