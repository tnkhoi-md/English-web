# Tnkhoi English 4.6

Hệ thống tự học tiếng Anh phổ thông (0 đến C1) và tiếng Anh y khoa cơ bản, chạy hoàn toàn trong trình duyệt.
Xây dựng bởi Nguyên Khôi. © KhoiTN-MD. Phiên bản 4.9.1 (02.10.26).

## Cấu trúc (thư mục gốc)

Từ bản 4.8, 21 file script được gộp thành 4 file. Thứ tự nạp và mã không đổi; mỗi phần trong file gộp bắt đầu bằng dòng `/* ===== file: tên-cũ.js ===== */` để dễ tìm.

| File | Vai trò |
|---|---|
| `index.html` | Trang chính, nạp 4 file script bên dưới theo đúng thứ tự (cache-bust `?v=4.8`) |
| `styles.css` | Giao diện |
| `content-lessons.js` | 12 bài học, 3 ca bệnh ảo, cặp âm, hình vị, 10 tình huống phòng khám sàng lọc |
| `content-library.js` | Thư viện từ vựng: phổ thông (21 chủ đề, A1 đến C1), luyện thi (nền tảng, TOEIC, IELTS/VSTEP, họ từ, kết hợp từ), y khoa |
| `content-study.js` | Kho từ phát âm và Thư viện ngữ pháp (40 điểm), 18 chặng học và ngân hàng 524 câu bài tập ngữ pháp, 44 âm, 48 bài đọc, dữ liệu Luyện đề, 1.165 định nghĩa tiếng Anh |
| `app.js` | Toàn bộ mã: lõi (lưu trữ, FSRS, giờ học, giọng đọc, bài học, ôn tập), thư viện, mục tiêu, đồng bộ, lộ trình, bài sinh tự động, Luyện đề, Kho luyện đọc, giao diện, giọng người thật, khởi động app (cuối file) |
| `index-single-file.html` | Bản gộp một file, dùng để mở thử hoặc dự phòng |
| `NGHIEN-CUU-NGUON-MO.md` | Báo cáo nghiên cứu định dạng đề thi, nguồn mở và giấy phép |

Không đổi thứ tự thẻ `<script>` trong `index.html`: `content-lessons.js`, `content-library.js`, `content-study.js` phải nạp trước `app.js`; `app.js` tự khởi động app ở cuối file.

**Khi cập nhật lên GitHub:** xóa các file script cũ (`content-general.js`, `content-medical.js`, `content-extra.js`, `content-clinic-screen.js`, `content-library-*.js`, `content-pron-grammar.js`, `content-curriculum.js`, `content-phonemes.js`, `content-reading.js`, `content-exam.js`, `content-defs.js`, `app-core.js`, `app-views.js`, `app-views2.js`, `app-v4*.js`, `app-v46.js`) rồi chép 4 file mới và `index.html`, `styles.css`.

## Cập nhật lên GitHub Pages

1. Trên bản đang chạy, vào Cài đặt, chọn Tải file sao lưu (phòng khi cần).
2. Chép toàn bộ file trong gói này vào thư mục gốc của repo, ghi đè bản cũ. Xóa `README-IMPORTANT.txt` cũ nếu còn.
3. Commit và push. Dữ liệu cũ (`tnkhoi_english_v3`) được giữ nguyên và tự nâng lên v4.

## Đồng bộ giữa các thiết bị

Vào mục Đồng bộ thiết bị và làm theo hướng dẫn: tạo một fine-grained token trên GitHub với duy nhất quyền **Gists: Read and write**, dán vào app. App tạo một Gist bí mật `tnkhoi-english-sync.json` và gộp dữ liệu hai chiều mỗi khi mở app, mỗi 3 phút và khi rời trang. Trên thiết bị thứ hai, dán cùng mã, app tự tìm lại Gist.

Quy tắc gộp: thẻ ôn lấy bản ôn gần nhất, điểm bài học và ca bệnh lấy mức cao nhất, từ “đã biết” lấy hợp của hai bên, thời gian học lưu riêng theo từng thiết bị rồi cộng lại, cài đặt và mục tiêu lấy bản sửa sau cùng. Mã truy cập chỉ lưu trên thiết bị, không nằm trong file sao lưu hay trong Gist.

Đồng bộ chỉ hoạt động trên trang GitHub Pages (hoặc khi mở file trực tiếp), không hoạt động trong bản xem thử trên claude.ai vì trang đó chặn kết nối ra ngoài.

## Thêm từ vào thư viện

Mỗi dòng trong `content-library.js` có dạng `từ|từ loại|nghĩa|câu ví dụ hoặc định nghĩa`. Thêm dòng vào đúng cấp độ (`A1`…`C1` hoặc `T1`/`T2`) của chủ đề là xong. Mã thẻ ôn tính theo chủ đề và chính tả của từ, nên đừng đổi `id` chủ đề hay sửa chính tả một từ đã có người học (thẻ cũ sẽ bị bỏ qua). Muốn thêm chủ đề mới, chép một khối `{ id, icon, color, title, vi, levels }`.

## Mới trong 4.9.1 (đối chiếu giáo trình bản Word)

- Dùng bản Word `Reading book.docx` (chương 1 đến 4 sạch; chương 5 Máu vẫn bị lỗi font nên chỉ giải mã được phần chữ, mất toàn bộ chữ số). Mỗi chặng M1–M6 được đối chiếu lại với văn bản sạch: bổ sung thuật ngữ và thành phần từ còn thiếu (M1 từ 66 lên 76 thuật ngữ, M3 và M4 mỗi chặng 80), sửa chỗ sai của bản nháp, viết lại bài đọc và bài điền đoạn văn cho đủ các mục của chương.
- **Bộ bài tập chương mới** (Luyện đề, nhóm “Giáo trình Y khoa: bài tập chương”): 6 bộ, 142 câu, theo các dạng bài của giáo trình viết bằng lời mới: nối thuật ngữ với định nghĩa, thành phần từ (-itis, -ectomy, -cyte…), đúng/sai, điền từ, hiểu bài. Mỗi bộ cũng hiện trong trang chặng tương ứng.
- Mỗi câu mới qua hai lượt rà soát độc lập (tổng 46 chỗ sửa, gồm định nghĩa chứa chính từ, đáp án nhiễu hợp lý, câu đúng/sai gây tranh cãi, một câu nói polio và Parkinson là bệnh “thần kinh cơ”).
- Giáo trình có thể có sai sót: các tác nhân ghi lại hơn 40 chỗ (ví dụ lunula bị mô tả là phần hồng của móng, mô tả mồ hôi chứa khí carbon dioxide, hai tế bào tạo cốt bào và hủy cốt bào bị đảo vai trò trong bài tập loãng xương, “cycloskeleton” viết sai của cytoskeleton). Những chỗ này đã tránh, không đưa vào nội dung app.

## Mới trong 4.9 (giáo trình Y khoa cơ bản M1–M6)

- **Tích hợp giáo trình** “Reading book” bạn bổ sung (5 chương: sinh học phân tử và tế bào, da, xương, cơ, máu và phòng vệ cơ thể). Chương 1 được tách làm hai nên có **6 chặng M1–M6**: M1 Sinh học phân tử và tế bào, M2 Cơ chế di truyền cơ bản và mô, M3 Da, M4 Hệ xương, M5 Hệ cơ, M6 Máu và phòng vệ cơ thể. Nội dung do tác giả viết lại bằng lời mới dựa trên đề cương và thuật ngữ của giáo trình, **không chép nguyên văn** (giáo trình thuộc bản quyền của nơi biên soạn); xem mục Giới hạn.
- Mỗi chặng có: bộ thuật ngữ T1 và T2 (267 thuật ngữ mới, kèm nghĩa tiếng Việt và định nghĩa tiếng Anh), 3 bài đọc (B1, B2, C1, mỗi bài 5 câu hỏi có bằng chứng), 2 bài điền đoạn văn (chọn từ và gõ từ), bài học tự sinh và bài kiểm tra chặng. Trang chặng có mục “Đọc hiểu và bài tập của chương”.
- 6 chặng y khoa cũ (Y1 đến Y6) đổi mã thành **L1 đến L6** (lâm sàng và thuật ngữ mở rộng), giữ nguyên nội dung và tiến độ, xếp sau M1–M6.
- **Bỏ nhãn “Bài G1/M1…”**: tên bài hiển thị bằng tiêu đề (nút Học, danh sách ôn, trang Hôm nay, trang chặng); đề mục “Bài học” đổi thành “Học phần”, “Bài kiểm tra chặng” thành “Kiểm tra chặng”.
- Người rà soát độc lập đã sửa 91 chỗ (ví dụ định nghĩa “benign” sai, một khẳng định sai về tạo cốt bào khi mãn kinh).
- **Giới hạn:** 126 thuật ngữ trong giáo trình đã có sẵn ở thư viện y khoa cũ nên không nhân đôi (vẫn học được ở chặng L). Chương Máu bị lỗi font khi trích văn bản nên mức bám sát đề cương chương này kém chắc hơn các chương khác. File `Reading book - ĐHYD.txt` chỉ để trong thư mục làm nguồn, không đưa lên GitHub Pages.

## Mới trong 4.8 (gộp file)

- 21 file script gộp thành 4 (`content-lessons.js`, `content-library.js`, `content-study.js`, `app.js`). Không đổi chức năng: kiểm tra tự động cho cùng kết quả (504 bài sinh tự động, 2.479 từ, 53 bộ đề, 0 vấn đề).

## Mới trong 4.7.3 (định nghĩa tiếng Anh)

- **1.165 định nghĩa tiếng Anh** cho từ phổ thông B1, B2, C1 (phủ 99% từ ở các cấp này; 5 mục họ từ chưa có). Định nghĩa viết bằng từ đơn giản hơn từ gốc (tối đa B1), không chứa chính từ đó. Hiện ở Thư viện từ vựng, Từ của tôi và bảng nghĩa khi chạm từ trong Kho luyện đọc, nằm giữa nghĩa tiếng Việt và câu ví dụ.
- Mỗi định nghĩa qua hai lượt: người viết, rồi người rà soát độc lập (sửa 38 trên 1.165). Từ A1 và A2 chưa có định nghĩa tiếng Anh vì nghĩa tiếng Việt hiệu quả hơn ở trình độ đó.

## Mới trong 4.7.2 (trang Luyện đề)

- **Sửa lỗi tính giờ:** trước đây chỉ cần mở trang Luyện đề (hoặc danh sách Viết và nói) là đồng hồ học đã chạy. Nay chỉ tính khi đang làm một bộ đề, đọc một bài hoặc viết một đề cụ thể.
- **Sắp xếp lại trang:** hai ô lớn (Đọc hiểu, Viết và nói) kèm tiến độ; mục **Thi thử TOEIC** (Part 5 và Part 6) lên trên; các dạng bài gom vào năm nhóm có thể thu gọn, mỗi nhóm hiện số bộ đã làm; phần hướng dẫn và nguồn tham khảo thu gọn ở cuối.
- **Đổi tên đề mục:** "TOEIC Part 5: điền từ vào câu", "TOEIC Part 6: điền vào đoạn văn", "Điền đoạn văn: chọn từ", "Điền đoạn văn: gõ từ", "Viết lại câu với từ cho sẵn".

## Mới trong 4.7 (gộp file và bước 4)

- **Gộp file:** `app-v44.js` và `app-v45.js` thành `app-v46.js` (số file script giảm một). Thứ tự nạp trong `index.html` giữ nguyên, `app-v46.js` đứng cuối.
- **Gộp 121 từ trùng cùng nghĩa** giữa các chủ đề (ví dụ open, eat, meeting, salary): giữ bản đầu tiên, xóa bản sau. Thẻ ôn và trạng thái "đã biết" của bản trùng tự chuyển sang từ gốc khi nạp dữ liệu (bảng `DUP_ALIAS` trong `app-v46.js`), khi đồng bộ cũng vậy, nên không mất dữ liệu. Thư viện còn 2.479 từ (phổ thông 2.090).
- **Tái xuất hiện từ trong Kho luyện đọc:** mỗi bài đọc hiện dải tóm tắt (từ đã học, từ đến hạn ôn, từ chưa học); từ đã học được gạch chân xanh.
- **Trang Viết và nói** (`#/writing`, mở từ Luyện đề): 9 đề (5 viết, 4 nói, có đề y khoa) và bảng tự chấm bốn tiêu chí theo cách IELTS và VSTEP chấm. Điểm tự chấm được lưu và cộng vào kỹ năng Viết hoặc Nói trên biểu đồ ra-đa.
- **Chưa làm:** định nghĩa tiếng Anh cho từ vựng (cần viết khoảng 2.000 định nghĩa, nên tách riêng).

## Mới trong 4.6.11 (trang chủ)

- Bỏ hai khối "Xem trước một từ" và "Lỗi sai thường gặp" khỏi trang Hôm nay.
- Mục "Mục tiêu hôm nay" có biểu tượng cho ba ô số liệu (ngày liên tiếp, thẻ đến hạn, thẻ đã có), xếp ngang ba cột.

## Mới trong 4.6.8

- Bốn ô thống kê đầu trang Tiến bộ (tổng thời gian học, ngày có học, ngày liên tiếp, thẻ đã vững) có biểu tượng màu riêng: đồng hồ, lịch, ngọn lửa, cúp.

## Mới trong 4.6.7 (Tiến bộ: biểu đồ ra-đa)

- Bỏ hai mục "Bài học và thẻ" và "Phòng khám và phát âm" khỏi trang Tiến bộ.
- Mục **Kỹ năng** đổi từ các thanh ngang sang **biểu đồ ra-đa** 8 trục (từ vựng, ngữ pháp, nghe, đọc, nói, viết, phát âm, giao tiếp lâm sàng), kèm bảng tỉ lệ đúng và số lần làm bên dưới. Kỹ năng chưa luyện nằm ở tâm.

## Mới trong 4.6.5 (Ôn tập)

- Màn tổng quan Ôn tập làm lại: thẻ lớn nêu số thẻ đến hạn kèm nút bắt đầu và thời gian ước tính (hoặc báo đã xong và thời điểm thẻ kế tiếp), **thanh phân bố mức nhớ** (mới, đang học, đang củng cố, đã vững) có chú thích, biểu đồ 7 ngày tới, và hướng dẫn chấm điểm thu gọn thành bốn ô màu (Quên, Khó, Nhớ, Dễ) với phím tắt 1 đến 4.
- Sửa lỗi biểu đồ cột (7 ngày tới ở Ôn tập, 14 ngày ở Tiến bộ) bị thấp hơn thực tế vì chiều cao tính theo phần trăm.

## Mới trong 4.6.3 (Từ của tôi)

- Dải thống kê ngay đầu trang (số thẻ, mới và đang học, đang củng cố, đã vững) và nút **Ôn thẻ đến hạn** hoặc **Thêm từ từ Thư viện**.
- **Bộ lọc theo mức nhớ** (Tất cả, Mới, Đang học, Đang củng cố, Đã vững): lọc tức thì, ẩn nhóm trống, cập nhật số từ mỗi nhóm và hiện số từ khớp.
- Mỗi dòng từ gọn hơn: từ, phiên âm và nghĩa nằm bên trái, nút nghe và trạng thái nhớ nằm bên phải.

## Mới trong 4.6.2 (thanh công cụ và trang chủ)

- **Thanh công cụ chia ba nhóm có tên**: Giọng đọc (US/UK và tốc độ), Giao diện, Đồng bộ. Nhóm có viền chung; tên nhóm hiện trên màn hình rộng, ẩn trên điện thoại. Giao diện đổi từ một nút xoay vòng sang bộ chọn ba trạng thái (Sáng, Tối, Theo thiết bị) hiển thị rõ chế độ đang dùng. Đồng hồ không còn bị xuống dòng.
- **Trang chủ (Hôm nay)** có dải tóm tắt ngay dưới lời chào: tiến độ phút học trong ngày so với mục tiêu, số thẻ đến hạn (bấm để ôn), chuỗi ngày liên tiếp, cùng bốn lối tắt: Ôn tập, Luyện đề, Đọc, Lộ trình.

## Mới trong 4.6.1 (mục Tiến bộ)

- Thêm các phần trước đây thiếu: **Lộ trình** (số chặng đã qua, chặng đang học), **Vốn từ theo cấp độ** (A1 đến C1, nền tảng và mở rộng y khoa), **Ngữ pháp, luyện đề và đọc** (điểm đạt theo cấp, bộ đề và bài đọc đã làm, điểm trung bình, năm lượt làm gần đây có liên kết), và dòng gợi ý kỹ năng cần chú ý.
- Ô thống kê đầu trang xếp 2 cột trên màn hình hẹp; nhãn số liệu không còn xuống dòng; lịch 12 tuần có chú thích mức độ.

## Mới trong 4.6 (Luyện đề và Kho luyện đọc)

- **Trang Luyện đề** (menu Học): 53 bộ đề, gồm 358 mục dữ liệu (bài đọc, đoạn văn, câu hỏi).
  - **TOEIC Part 5**: ngân hàng 150 câu hoàn thành câu theo 7 nhóm (dạng từ, thì, giới từ, liên từ, đại từ, từ vựng công sở, lượng từ và so sánh), có bộ Thi thử 30 câu.
  - **TOEIC Part 6**: 16 đoạn thư, thông báo, bài báo, mỗi đoạn 4 chỗ trống trong đó có một chỗ chọn nguyên câu, có bộ Thi thử 4 đoạn (16 câu). Số câu theo đề TOEIC hiện hành (Part 5 có 30 câu, Part 6 có 16 câu, theo ETS RM-17-05).
  - **Điền đoạn văn kiểu Cambridge**: 12 bài chọn từ và 12 bài gõ từ (open cloze), mỗi bài 8 chỗ trống, mức B1 đến C1.
  - **Viết lại câu với từ cho sẵn** (key word transformation): 120 câu B1, B2, C1; mỗi câu liệt kê đủ các đáp án đúng. Bộ chấm hiểu dạng viết tắt (`shouldn't have` bằng `should not have`) nhưng không nhận lỗi gần đúng, vì `has` và `had` khác nghĩa.
- **Kho luyện đọc**: 48 đoạn văn ngắn tự viết, A2 (8), B1 (14), B2 (14), C1 (12), trong đó 13 bài y khoa. Mỗi bài có 5 câu hỏi (ý chính, chi tiết, suy luận hoặc từ trong ngữ cảnh, True/False/Not given), đáp án kèm bằng chứng trích từ bài và giải thích tiếng Việt. Chạm vào từ gạch chấm để xem nghĩa và thêm vào lịch ôn; có nút nghe cả bài và tóm tắt tiếng Việt.
- Mọi câu trắc nghiệm qua hai lượt kiểm tra độc lập (tác giả tự thử từng đáp án nhiễu, rồi người rà soát thử lại); người rà soát đã sửa khoảng 63 trên 766 câu (kể cả vài câu True/False/Not given bị gắn nhãn sai) và bổ sung khoảng 160 đáp án chấp nhận được cho phần viết lại câu.
- Trang Luyện đề liệt kê nguồn chính thức và nguồn mở (kèm giấy phép) để luyện thêm. Chi tiết trong `NGHIEN-CUU-NGUON-MO.md`.
- Phiên bản này đổi `?v=` thành 4.6; nếu mở app mà thấy lỗi lạ sau khi cập nhật, hãy tải lại cứng trang (Ctrl+Shift+R) để bỏ bộ nhớ đệm.
- Chưa có: Part 7 nhiều đoạn, matching headings, Yes/No/Not given, word formation (Cambridge Part 3), thi thử có đồng hồ.

## Mới trong 4.5 (mở rộng từ vựng và ngữ pháp)

- **Thêm 1.193 từ phổ thông** có ví dụ, nâng từ phổ thông từ khoảng 1.020 lên 2.211: A1 450, A2 518, B1 592, B2 451, C1 200 (trước đó C1 chỉ có 53). Năm chủ đề mới: Từ cơ bản (số, màu, hình, hướng, từ để hỏi), Quần áo, Giao thông và đi lại, Giải trí và sở thích, Trường học. Nhóm từ lõi (Core verbs, Core adjectives, Core nouns) có thêm mức C1. Danh sách từ do tác giả biên soạn, đối chiếu cấp độ với Oxford 3000/5000, English Vocabulary Profile và NGSL; chưa sao chép định nghĩa.
- **Thêm 15 điểm ngữ pháp** (tổng 40, A1 đến C1): sở hữu, hiện tại tiếp diễn, quá khứ tiếp diễn, used to, từ chỉ lượng, câu điều kiện loại 0, câu hỏi đuôi, cụm động từ, too/enough, câu nhờ bảo (causative), tương lai hoàn thành, điều kiện hỗn hợp, đảo ngữ, mệnh đề phân từ, câu nhấn mạnh (cleft). Thêm 206 câu bài tập (ngân hàng 524 câu) và mở lại mục C1 trong Thư viện ngữ pháp. Điểm ngữ pháp đã được gắn vào các chặng, kể cả A2.3, C1 và Y1, Y2, Y4, Y6 vốn trước đó không có ngữ pháp.
- Số bài học tự sinh tăng từ 285 lên 523.
- Mọi câu trắc nghiệm mới đều qua hai lượt kiểm tra độc lập: tác giả tự thử từng đáp án nhiễu, rồi một người rà soát khác thử lại từng lựa chọn và sửa 19 trên 210 câu có thể bị hiểu là có hai đáp án đúng.
- Chưa gộp các từ xuất hiện ở nhiều chủ đề (xem mục 4.4.1). Thẻ ôn theo chủ đề và chính tả nên người đã học không mất dữ liệu.

## Mới trong 4.4.1 (chất lượng bài tập)

- **Mỗi câu trắc nghiệm chỉ có một đáp án đúng.** Câu điền từ trong bài sinh tự động giờ có gợi ý nghĩa tiếng Việt của từ cần điền, và đáp án nhiễu luôn khác nghĩa (không trùng hoặc gần nghĩa) với đáp án đúng, ưu tiên cùng từ loại. Câu “chọn nghĩa”, “chọn từ”, “nghe và chọn” dùng cùng bộ lọc. Từ nhiễu trong bài nghe không bao giờ xuất hiện trong bản ghi (kể cả dạng biến đổi). Chỗ trống khớp nguyên từ (không còn khớp “man” trong “woman”). Câu gõ từ có gợi ý chữ cái đầu và số ký tự.
- **Vị trí đáp án đúng được xáo trộn.** Trước đây 73% câu ngữ pháp có đáp án đúng ở lựa chọn B, và mọi ca bệnh có đáp án ở vị trí cố định. Nay xáo mỗi lần luyện (ngân hàng ngữ pháp, thư viện ngữ pháp) hoặc mỗi lần tải (bài viết tay, ca bệnh); mỗi vị trí khoảng một phần ba.
- **Sửa 30 câu ngữ pháp có hai đáp án cùng đúng** (ví dụ “stop ___” nhận cả smoking và to smoke, “She said she ___” nhận cả had và has, “Although/Despite feeling tired”), và nhận thêm các cách viết đúng cho câu gõ (’s not, ’re not).
- **Thêm 950 câu ví dụ hoặc định nghĩa**: 99% từ trong thư viện nay có ví dụ (trước đó 32%). Nhờ vậy 283/285 bài sinh tự động có câu điền từ (trước đó 136), và số câu nghe tăng từ 182 lên 566.
- Chưa gộp các từ xuất hiện ở nhiều chủ đề (như order, bill, cold: nhiều cặp khác nghĩa) vì sẽ làm mất thẻ ôn cũ. Gợi ý nghĩa trong câu điền từ đã xử lý các cặp khác nghĩa.

## Mới trong 4.4

- Giọng người thật cho từ đơn: mọi nút nghe một từ (bài học, thư viện, ôn tập, cặp âm, phát âm) phát bản ghi người bản xứ thật lấy qua Free Dictionary API (dictionaryapi.dev, dữ liệu Wiktionary và Wikimedia Commons, CC BY-SA), có giọng Anh-Mỹ và Anh-Anh. Từ nào chưa có bản ghi, hoặc khi mất mạng, tự chuyển sang giọng máy. Mỗi từ chỉ tải một lần và được lưu trên máy (khóa `tnk_audio_v1`). Nút có chấm xanh là đang có bản ghi người thật.
- Phiên âm IPA tự bổ sung cho các từ thư viện chưa có phiên âm.
- Giọng máy cho câu: tự xếp hạng theo chất lượng (Natural/Online, Premium, Enhanced trước; loại giọng vui nhộn). Trang Giọng đọc để nghe thử, chọn giọng chính và phụ, bật tắt giọng người thật, kèm hướng dẫn cho iPad, Windows/Mac (Edge có giọng Natural rất tự nhiên), Android.
- Thư viện 44 âm tiếng Anh (Phát âm, thẻ Thư viện 44 âm): 12 nguyên âm đơn, 8 nguyên âm đôi, 24 phụ âm, mỗi âm có cách đặt lưỡi, môi, dây thanh, lỗi sai thường gặp, cách viết, 6 từ ví dụ nghe US/UK và tự đọc, cặp âm tối thiểu, bài nghe phân biệt 8 lượt.
- Nút US/UK có cả trong màn học để đổi giọng khi đang luyện.

Lưu ý: giọng người thật cần mạng và chạy trên GitHub Pages; bản xem thử trên claude.ai chặn kết nối ngoài nên chỉ dùng giọng máy.

## Mới trong 4.3

- Mọi chặng đều có mục Bài học. Mỗi nhóm từ vựng của chặng (ví dụ A1.1: People & family, Core verbs, Core nouns, Time) được chia thành các bài 5 từ, tổng cộng 285 bài phủ toàn bộ 1.407 từ của lộ trình.
- Cấu trúc mỗi bài giống bài G/M: giới thiệu, học từ, kiểm tra nghĩa, chọn từ theo nghĩa, điền từ vào câu, phân loại từ loại, nghe hiểu, sắp xếp câu, chép chính tả, viết đúng chính tả, phát âm cặp âm, nói hoặc viết câu với từ mới.
- Nút “Bài ngẫu nhiên” tạo bài từ 5 từ chưa học bất kỳ trong chặng.
- Học xong bài, từ vào lịch ôn tập và cộng vào tiến độ Thư viện. Trang Hôm nay gợi ý bài tiếp theo của chặng đang học.
- Bài được sinh tự động từ thư viện: thêm từ vào một nhóm trong `content-library-*.js` là có thêm bài, không cần viết tay.

## Mới trong 4.2

- Lộ trình được thiết kế lại thành bản đồ chặng. Mỗi chặng gom bài học, bộ từ vựng lấy trực tiếp từ Thư viện (theo chủ đề và cấp độ), điểm ngữ pháp, nhóm phát âm, ca bệnh và một bài kiểm tra chặng. Đạt 80% là qua chặng.
- “Học từ mới” mỗi ngày lấy từ của chặng đang học; học trong chặng hay trong thư viện đều cộng vào cùng một tiến độ. Mỗi chủ đề trong thư viện và mỗi điểm ngữ pháp cho biết nó thuộc chặng nào.
- Ngân hàng bài tập ngữ pháp: 10 câu mỗi điểm A1, 12 câu A2, 14 câu B1, 16 câu B2 (318 câu), gồm 5 dạng: chọn đáp án, chọn câu đúng, điền dạng đúng, tìm lỗi sai, sắp xếp câu. Có chế độ luyện đầy đủ, kiểm tra nhanh 8 câu và làm lại câu sai.
- Bài kiểm tra chặng thêm 4 dạng cho từ vựng: chọn nghĩa, chọn từ tiếng Anh, nghe và chọn, viết đúng chính tả.

## Thêm bài tập ngữ pháp

Trong `content-study.js` (phần `content-curriculum.js`), mỗi dòng của `GRAMMAR_BANK` là một câu hỏi: `c|câu có ___|A / B / C|chỉ số đúng|giải thích`, `x|Chọn câu đúng|câu 1 / câu 2 / câu 3|chỉ số|giải thích`, `t|câu có ___ (gợi ý)|đáp án 1;đáp án 2|giải thích`, `f|câu có lỗi|từ sai|sửa thành|giải thích`, `o|câu hoàn chỉnh|giải thích`. Chỉ số bắt đầu từ 0.

## Mới trong 4.1

- Thư viện từ vựng ưu tiên từ thông dụng A1–B2 cho IELTS, TOEIC, VSTEP và bài thi theo CEFR; lọc theo kỳ thi và cấp độ. Lượt học từ mới mỗi ngày đi theo thứ tự A1 → B2 trước khi sang C1.
- Kho từ phát âm (Phát âm, thẻ Kho từ phát âm): chữ câm, âm tiết bị nuốt, trọng âm, đuôi -ed/-s, /θ ð/, cụm phụ âm cuối, thuật ngữ y khoa; nghe giọng UK và US, tự nói để máy nhận dạng.
- Thư viện ngữ pháp: 25 điểm A1–B2, công thức, cách dùng, ví dụ, lỗi sai thường gặp, câu hỏi luyện kiểu đề thi.
- Phòng khám ảo: thêm 10 tình huống sàng lọc ban đầu (đau họng, tăng huyết áp, đái tháo đường, đau lưng, tiểu buốt, đau ngực, tiêu chảy, ban ngứa, đau gối, trầm cảm).
- Trang Hôm nay: khung câu nói động lực, đổi ngẫu nhiên mỗi lần mở app.
- “Lỗi người Việt hay gặp” đổi thành “Lỗi sai thường gặp”.

## Giới hạn

- Thư viện là bộ từ lõi có chọn lọc (khoảng 2.600 từ, trong đó 2.200 từ phổ thông và 400 từ y khoa), chưa phải toàn bộ vốn từ của mỗi cấp CEFR. Mức C1 mới có khoảng 200 từ. Kiểm tra đầu vào chỉ ước lượng vốn từ nhận biết, không phải bài thi CEFR.
- Từ trong thư viện chưa có phiên âm IPA; hãy dùng nút nghe.
- Nội dung y khoa phục vụ học ngôn ngữ, không phải tài liệu chuyên môn.
