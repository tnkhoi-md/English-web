/* ============================================================
   NỘI DUNG HỌC TẬP: ngữ pháp, lộ trình và ngân hàng bài tập, 44 âm, Kho luyện đọc, Luyện đề, định nghĩa tiếng Anh.
   Gộp từ: content-pron-grammar.js, content-curriculum.js, content-phonemes.js, content-reading.js, content-exam.js, content-defs.js.
   Mỗi phần bắt đầu bằng dòng "===== file: ... =====".
   ============================================================ */

/* ===== file: content-pron-grammar.js ===== */
/* ============================================================
   v4.1 · KHO TỪ PHÁT ÂM · THƯ VIỆN NGỮ PHÁP · CÂU NÓI ĐỘNG LỰC
   IPA theo quy ước Cambridge Dictionary. Mỗi dòng: từ | IPA UK | IPA US | ghi chú
   ============================================================ */
const PRON_BANK = [
{ id: "silent", icon: "🤫", color: "#7a63d6", title: "Chữ câm", vi: "Có chữ viết nhưng không đọc", tip: "Đọc theo âm, không đọc theo chữ. Nghe mẫu trước, rồi mới nhìn chữ.", items: `Wednesday|/ˈwenz.deɪ/|/ˈwenz.deɪ/|chữ d đầu không đọc, chỉ 2 âm tiết
island|/ˈaɪ.lənd/|/ˈaɪ.lənd/|s câm
receipt|/rɪˈsiːt/|/rɪˈsiːt/|p câm
debt|/det/|/det/|b câm
doubt|/daʊt/|/daʊt/|b câm
subtle|/ˈsʌt.əl/|/ˈsʌt̬.əl/|b câm
psychology|/saɪˈkɒl.ə.dʒi/|/saɪˈkɑː.lə.dʒi/|p câm
knee|/niː/|/niː/|k câm
knife|/naɪf/|/naɪf/|k câm
honest|/ˈɒn.ɪst/|/ˈɑː.nɪst/|h câm
hour|/aʊər/|/aʊr/|h câm
climb|/klaɪm/|/klaɪm/|b câm
answer|/ˈɑːn.sər/|/ˈæn.sɚ/|w câm
listen|/ˈlɪs.ən/|/ˈlɪs.ən/|t câm
castle|/ˈkɑː.səl/|/ˈkæs.əl/|t câm
muscle|/ˈmʌs.əl/|/ˈmʌs.əl/|c câm
calm|/kɑːm/|/kɑːm/|l câm
half|/hɑːf/|/hæf/|l câm
salmon|/ˈsæm.ən/|/ˈsæm.ən/|l câm
foreign|/ˈfɒr.ən/|/ˈfɔːr.ən/|g câm` },
{ id: "syllables", icon: "✂️", color: "#d0691f", title: "Âm tiết bị nuốt", vi: "Viết nhiều âm tiết, đọc ít hơn", tip: "Người bản xứ thường bỏ một nguyên âm yếu ở giữa từ. Đọc đủ từng chữ nghe rất cứng.", items: `comfortable|/ˈkʌmf.tə.bəl/|/ˈkʌmf.tɚ.bəl/|3 âm tiết, nhấn âm đầu
vegetable|/ˈvedʒ.tə.bəl/|/ˈvedʒ.tə.bəl/|3 âm tiết
chocolate|/ˈtʃɒk.lət/|/ˈtʃɑːk.lət/|2 âm tiết
different|/ˈdɪf.ər.ənt/|/ˈdɪf.ɚ.ənt/|khi nói nhanh thường thành /ˈdɪf.rənt/
interesting|/ˈɪn.trə.stɪŋ/|/ˈɪn.trɪ.stɪŋ/|3 âm tiết, nhấn âm đầu
temperature|/ˈtem.prə.tʃər/|/ˈtem.pɚ.ə.tʃɚ/|
every|/ˈev.ri/|/ˈev.ri/|2 âm tiết
restaurant|/ˈres.trɒnt/|/ˈres.tə.rɑːnt/|
business|/ˈbɪz.nɪs/|/ˈbɪz.nɪs/|2 âm tiết, u đọc /ɪ/
family|/ˈfæm.əl.i/|/ˈfæm.əl.i/|thường nghe gần như 2 âm tiết` },
{ id: "spelling", icon: "🔤", color: "#2f7fd8", title: "Chính tả đánh lừa", vi: "Chữ viết và âm đọc khác xa nhau", tip: "Nhóm -ough có nhiều cách đọc. Học từng từ, đừng đoán theo chữ.", items: `colonel|/ˈkɜː.nəl/|/ˈkɝː.nəl/|đọc giống kernel
choir|/kwaɪər/|/kwaɪr/|ch đọc /kw/
queue|/kjuː/|/kjuː/|5 chữ, 2 âm
recipe|/ˈres.ɪ.pi/|/ˈres.ə.pi/|3 âm tiết, e cuối đọc /i/
women|/ˈwɪm.ɪn/|/ˈwɪm.ɪn/|o đọc /ɪ/
busy|/ˈbɪz.i/|/ˈbɪz.i/|u đọc /ɪ/
thorough|/ˈθʌr.ə/|/ˈθɝː.oʊ/|khác through
through|/θruː/|/θruː/|
though|/ðəʊ/|/ðoʊ/|
tough|/tʌf/|/tʌf/|
cough|/kɒf/|/kɑːf/|gh đọc /f/
clothes|/kləʊðz/|/kloʊðz/|cụm cuối /ðz/` },
{ id: "stress", icon: "🎯", color: "#c0392b", title: "Trọng âm dễ sai", vi: "Danh từ và động từ đổi trọng âm, họ từ dời trọng âm", tip: "Với nhiều cặp hai âm tiết: danh từ nhấn âm 1, động từ nhấn âm 2. Âm tiết không nhấn thường đọc nhẹ thành /ə/.", items: `record (n)|/ˈrek.ɔːd/|/ˈrek.ɚd/|danh từ: nhấn âm 1
record (v)|/rɪˈkɔːd/|/rɪˈkɔːrd/|động từ: nhấn âm 2
present (n)|/ˈprez.ənt/|/ˈprez.ənt/|món quà; hiện tại
present (v)|/prɪˈzent/|/prɪˈzent/|trình bày
increase (n)|/ˈɪn.kriːs/|/ˈɪn.kriːs/|
increase (v)|/ɪnˈkriːs/|/ɪnˈkriːs/|
object (n)|/ˈɒb.dʒɪkt/|/ˈɑːb.dʒekt/|
object (v)|/əbˈdʒekt/|/əbˈdʒekt/|phản đối
photograph|/ˈfəʊ.tə.ɡrɑːf/|/ˈfoʊ.t̬ə.ɡræf/|nhấn âm 1
photography|/fəˈtɒɡ.rə.fi/|/fəˈtɑː.ɡrə.fi/|nhấn dời sang âm 2
economy|/ɪˈkɒn.ə.mi/|/iˈkɑː.nə.mi/|nhấn âm 2
economic|/ˌiː.kəˈnɒm.ɪk/|/ˌiː.kəˈnɑː.mɪk/|nhấn âm 3
hotel|/həʊˈtel/|/hoʊˈtel/|nhấn âm 2
develop|/dɪˈvel.əp/|/dɪˈvel.əp/|nhấn âm 2
determine|/dɪˈtɜː.mɪn/|/dɪˈtɝː.mɪn/|đuôi không đọc “mai”
career|/kəˈrɪər/|/kəˈrɪr/|nhấn âm 2
advertisement|/ədˈvɜː.tɪs.mənt/|/ˌæd.vɚˈtaɪz.mənt/|Anh-Anh và Anh-Mỹ nhấn khác nhau` },
{ id: "ed", icon: "⏮️", color: "#12908e", title: "Đuôi -ed", vi: "/t/, /d/ hay /ɪd/", tip: "Sau âm vô thanh (p, k, s, sh, ch, f): /t/. Sau âm hữu thanh và nguyên âm: /d/. Sau t, d: /ɪd/ và thêm một âm tiết.", items: `asked|/ɑːskt/|/æskt/|/t/, cụm 3 phụ âm cuối
helped|/helpt/|/helpt/|/t/
washed|/wɒʃt/|/wɑːʃt/|/t/
watched|/wɒtʃt/|/wɑːtʃt/|/t/
laughed|/lɑːft/|/læft/|/t/
played|/pleɪd/|/pleɪd/|/d/
called|/kɔːld/|/kɑːld/|/d/
lived|/lɪvd/|/lɪvd/|/d/
opened|/ˈəʊ.pənd/|/ˈoʊ.pənd/|/d/
cleaned|/kliːnd/|/kliːnd/|/d/
wanted|/ˈwɒn.tɪd/|/ˈwɑːn.t̬ɪd/|/ɪd/
needed|/ˈniː.dɪd/|/ˈniː.dɪd/|/ɪd/
started|/ˈstɑː.tɪd/|/ˈstɑːr.t̬ɪd/|/ɪd/
visited|/ˈvɪz.ɪ.tɪd/|/ˈvɪz.ɪ.t̬ɪd/|/ɪd/
decided|/dɪˈsaɪ.dɪd/|/dɪˈsaɪ.dɪd/|/ɪd/` },
{ id: "s", icon: "➕", color: "#2e9d57", title: "Đuôi -s, -es", vi: "/s/, /z/ hay /ɪz/", tip: "Sau âm vô thanh: /s/. Sau âm hữu thanh và nguyên âm: /z/. Sau s, z, sh, ch, j: /ɪz/ và thêm một âm tiết. Đừng bỏ âm này, nó mang nghĩa số nhiều hoặc ngôi thứ ba.", items: `books|/bʊks/|/bʊks/|/s/
cups|/kʌps/|/kʌps/|/s/
months|/mʌnθs/|/mʌnθs/|/s/, cụm /nθs/ khó
dogs|/dɒɡz/|/dɑːɡz/|/z/
calls|/kɔːlz/|/kɑːlz/|/z/
pens|/penz/|/penz/|/z/
buses|/ˈbʌs.ɪz/|/ˈbʌs.ɪz/|/ɪz/
watches|/ˈwɒtʃ.ɪz/|/ˈwɑː.tʃɪz/|/ɪz/
pages|/ˈpeɪ.dʒɪz/|/ˈpeɪ.dʒɪz/|/ɪz/
boxes|/ˈbɒk.sɪz/|/ˈbɑːk.sɪz/|/ɪz/` },
{ id: "th", icon: "👅", color: "#e0622f", title: "Âm /θ/ và /ð/", vi: "Đầu lưỡi đặt giữa hai hàm răng", tip: "/θ/ thổi hơi, không rung (think). /ð/ rung dây thanh (this). Đừng thay bằng /t/, /d/ hay /s/, /z/.", items: `think|/θɪŋk/|/θɪŋk/|/θ/
thank|/θæŋk/|/θæŋk/|/θ/
three|/θriː/|/θriː/|cụm /θr/
month|/mʌnθ/|/mʌnθ/|/θ/ cuối
health|/helθ/|/helθ/|/lθ/ cuối
both|/bəʊθ/|/boʊθ/|
mouth|/maʊθ/|/maʊθ/|
throat|/θrəʊt/|/θroʊt/|
birth|/bɜːθ/|/bɝːθ/|
this|/ðɪs/|/ðɪs/|/ð/
mother|/ˈmʌð.ər/|/ˈmʌð.ɚ/|/ð/
weather|/ˈweð.ər/|/ˈweð.ɚ/|/ð/
breath (n)|/breθ/|/breθ/|danh từ: /θ/
breathe (v)|/briːð/|/briːð/|động từ: /ð/, nguyên âm dài` },
{ id: "clusters", icon: "🧱", color: "#8a5a2b", title: "Cụm phụ âm cuối", vi: "Đọc đủ các phụ âm ở cuối từ", tip: "Tiếng Việt không có cụm phụ âm cuối nên ta hay bỏ bớt. Tập chậm từng âm rồi nói nhanh dần.", items: `texts|/teksts/|/teksts/|/ksts/
sixth|/sɪksθ/|/sɪksθ/|/ksθ/
world|/wɜːld/|/wɝːld/|/ld/
strengths|/streŋθs/|/streŋθs/|/ŋθs/
asked|/ɑːskt/|/æskt/|/skt/
helped|/helpt/|/helpt/|/lpt/
clothes|/kləʊðz/|/kloʊðz/|/ðz/
tests|/tests/|/tests/|/sts/` },
{ id: "medical", icon: "🩺", color: "#0a8f78", title: "Thuật ngữ y khoa hay đọc sai", vi: "Từ y khoa dễ phát âm nhầm", tip: "Nhiều từ có chữ câm (p, h) hoặc chính tả Anh-Anh (oe, ae). Anh-Mỹ viết khác: esophagus, hemorrhage, anemia.", items: `diabetes|/ˌdaɪ.əˈbiː.tiːz/|/ˌdaɪ.əˈbiː.t̬iːz/|nhấn “-be-”
oesophagus|/ɪˈsɒf.ə.ɡəs/|/ɪˈsɑː.fə.ɡəs/|US: esophagus
haemorrhage|/ˈhem.ər.ɪdʒ/|/ˈhem.ɚ.ɪdʒ/|US: hemorrhage
pneumonia|/njuːˈməʊ.ni.ə/|/nuːˈmoʊ.njə/|p câm
psychiatry|/saɪˈkaɪə.tri/|/saɪˈkaɪə.tri/|p câm
sciatica|/saɪˈæt.ɪ.kə/|/saɪˈæt̬.ɪ.kə/|sc đọc /s/
dyspnoea|/dɪspˈniː.ə/|/ˈdɪsp.niː.ə/|US: dyspnea, nhấn khác
diarrhoea|/ˌdaɪ.əˈriː.ə/|/ˌdaɪ.əˈriː.ə/|US: diarrhea
anaemia|/əˈniː.mi.ə/|/əˈniː.mi.ə/|US: anemia
paracetamol|/ˌpær.əˈsiː.tə.mɒl/|/ˌper.əˈsiː.t̬ə.mɑːl/|Mỹ thường nói acetaminophen
asthma|/ˈæs.mə/|/ˈæz.mə/|th câm
stomach|/ˈstʌm.ək/|/ˈstʌm.ək/|ch đọc /k/
ache|/eɪk/|/eɪk/|ch đọc /k/
nausea|/ˈnɔː.zi.ə/|/ˈnɑː.zi.ə/|
hypertension|/ˌhaɪ.pəˈten.ʃən/|/ˌhaɪ.pɚˈten.ʃən/|
arthritis|/ɑːˈθraɪ.tɪs/|/ɑːrˈθraɪ.t̬əs/|cụm /θr/
ibuprofen|/ˌaɪ.bjuːˈprəʊ.fən/|/ˌaɪ.bjuːˈproʊ.fən/|
tonsillitis|/ˌtɒn.səlˈaɪ.tɪs/|/ˌtɑːn.səlˈaɪ.t̬əs/|
eczema|/ˈek.sɪ.mə/|/ɪɡˈziː.mə/|Anh-Anh và Anh-Mỹ khác nhau
migraine|/ˈmiː.ɡreɪn/|/ˈmaɪ.ɡreɪn/|Anh-Anh và Anh-Mỹ khác nhau
urine|/ˈjʊə.rɪn/|/ˈjʊr.ɪn/|
bruise|/bruːz/|/bruːz/|
wound|/wuːnd/|/wuːnd/|vết thương (khác wound /waʊnd/ là quá khứ của wind)
thyroid|/ˈθaɪ.rɔɪd/|/ˈθaɪ.rɔɪd/|/θ/
oedema|/ɪˈdiː.mə/|/ɪˈdiː.mə/|US: edema` }
];

/* ============================================================
   THƯ VIỆN NGỮ PHÁP (A1 → B2)
   quiz: [câu hỏi, [lựa chọn], chỉ số đúng, giải thích]
   ============================================================ */
const GRAMMAR = [
{ id: "be", lvl: "A1", title: "The verb be", vi: "Động từ to be", exams: ["CEFR", "VSTEP"],
  form: "I am · you/we/they are · he/she/it is. Phủ định: is not (isn't). Câu hỏi: Is she …?",
  use: "Nói tên, nghề, tuổi, quê, tính chất, trạng thái. Câu tiếng Anh luôn cần động từ, nên trước tính từ và danh từ phải có be.",
  ex: [["She is a nurse.", "Cô ấy là y tá."], ["I'm tired.", "Tôi mệt."], ["Are you from Hue?", "Bạn là người Huế à?"]],
  err: [["She very tired.", "She is very tired.", "Thiếu be trước tính từ."], ["I am agree.", "I agree.", "agree đã là động từ, không thêm be."]],
  quiz: [["My brother ___ a doctor.", ["am", "is", "are"], 1, "He, she, it và danh từ số ít đi với is."], ["They ___ very busy today.", ["is", "are", "be"], 1, "They đi với are."]] },
{ id: "present-simple", lvl: "A1", title: "Present simple", vi: "Thì hiện tại đơn", exams: ["CEFR", "VSTEP", "TOEIC"],
  form: "I/you/we/they + V · he/she/it + V-s/-es. Phủ định: don't/doesn't + V. Câu hỏi: Do/Does + S + V?",
  use: "Thói quen, sự thật, lịch trình. Hay đi với always, usually, often, every day.",
  ex: [["He works at a clinic.", "Anh ấy làm việc ở phòng khám."], ["Does she smoke?", "Cô ấy có hút thuốc không?"], ["The train leaves at 7.", "Tàu chạy lúc 7 giờ."]],
  err: [["He work every day.", "He works every day.", "Ngôi thứ ba số ít cần -s."], ["Does she smokes?", "Does she smoke?", "Sau does dùng động từ nguyên mẫu."]],
  quiz: [["The patient ___ two tablets a day.", ["take", "takes", "taking"], 1, "The patient = he/she nên dùng takes."], ["___ your father work at weekends?", ["Do", "Does", "Is"], 1, "Your father là ngôi thứ ba số ít: Does."]] },
{ id: "plurals", lvl: "A1", title: "Plurals & countable nouns", vi: "Số nhiều, danh từ đếm được và không đếm được", exams: ["CEFR", "TOEIC", "IELTS"],
  form: "Đếm được: a book, two books. Không đếm được: water, advice, information, equipment, furniture (không có -s, không dùng a). Lượng từ: many/a few + đếm được; much/a little + không đếm được.",
  use: "Tiếng Việt không đánh dấu số nhiều, nên hay quên -s. Một số danh từ tiếng Việt đếm được nhưng tiếng Anh thì không.",
  ex: [["three patients", "ba bệnh nhân"], ["some advice", "vài lời khuyên"], ["How much water do you drink?", "Bạn uống bao nhiêu nước?"]],
  err: [["three patient", "three patients", "Số nhiều cần -s."], ["advices, informations", "advice, information", "Danh từ không đếm được không thêm -s."]],
  quiz: [["Can you give me some ___?", ["advice", "advices", "an advice"], 0, "advice không đếm được."], ["There are five ___ in the waiting room.", ["person", "people", "peoples"], 1, "Số nhiều của person là people."]] },
{ id: "articles", lvl: "A1", title: "Articles a, an, the", vi: "Mạo từ", exams: ["CEFR", "IELTS", "TOEIC", "VSTEP"],
  form: "a/an + danh từ đếm được số ít (lần đầu nhắc, chưa xác định). the + thứ đã xác định. Không mạo từ: nói chung với số nhiều hoặc không đếm được.",
  use: "an trước âm nguyên âm (an hour, an X-ray), a trước âm phụ âm (a university). Nói chung chung: Life is hard, Doctors work long hours.",
  ex: [["I saw a doctor. The doctor was kind.", "Tôi đi khám một bác sĩ. Vị bác sĩ đó rất tử tế."], ["an hour, a university", "một giờ, một trường đại học"], ["Smoking is bad for health.", "Hút thuốc có hại cho sức khỏe."]],
  err: [["I saw doctor.", "I saw a doctor.", "Danh từ đếm được số ít cần mạo từ."], ["The life is hard.", "Life is hard.", "Nói chung chung không dùng the."], ["a hour", "an hour", "hour bắt đầu bằng âm nguyên âm."]],
  quiz: [["She is ___ engineer.", ["a", "an", "the"], 1, "engineer bắt đầu bằng âm nguyên âm."], ["In general, ___ exercise is good for you.", ["The", "An", "(không mạo từ)"], 2, "Nói chung chung về tập thể dục: không mạo từ."]] },
{ id: "there-is", lvl: "A1", title: "There is / there are", vi: "Có (tồn tại)", exams: ["CEFR", "VSTEP"],
  form: "There is + số ít / không đếm được. There are + số nhiều. Is there …? Are there any …?",
  use: "Nói một thứ tồn tại ở đâu đó. Không dịch “có” thành have.",
  ex: [["There is a pharmacy near here.", "Gần đây có một hiệu thuốc."], ["There are two lifts.", "Có hai thang máy."]],
  err: [["Have a pharmacy near here?", "Is there a pharmacy near here?", "Dịch từng chữ từ “có”."], ["There is many people.", "There are many people.", "Số nhiều dùng are."]],
  quiz: [["___ any toilets on this floor?", ["Is there", "Are there", "Have"], 1, "toilets số nhiều: Are there."]] },
{ id: "questions", lvl: "A1", title: "Question word order", vi: "Trật tự từ trong câu hỏi", exams: ["CEFR", "VSTEP", "IELTS"],
  form: "(Từ để hỏi) + trợ động từ + chủ ngữ + động từ chính. Where do you live? What does it feel like? When did it start?",
  use: "Tiếng Việt giữ nguyên trật tự câu và thêm từ hỏi. Tiếng Anh phải đảo trợ động từ lên trước chủ ngữ.",
  ex: [["Where does it hurt?", "Đau ở đâu?"], ["How long have you had it?", "Bạn bị bao lâu rồi?"]],
  err: [["Where you feel the pain?", "Where do you feel the pain?", "Thiếu trợ động từ do."], ["When it started?", "When did it start?", "Quá khứ: did + động từ nguyên mẫu."]],
  quiz: [["Chọn câu đúng", ["What you are doing?", "What are you doing?", "What doing you?"], 1, "Đảo are lên trước you."], ["Chọn câu đúng", ["How often you exercise?", "How often do you exercise?", "How often exercise you?"], 1, "Cần trợ động từ do."]] },
{ id: "prepositions", lvl: "A1", title: "Prepositions of time & place", vi: "Giới từ chỉ thời gian và nơi chốn", exams: ["CEFR", "TOEIC", "VSTEP"],
  form: "at + giờ (at 7 pm), on + ngày (on Monday), in + tháng, năm, buổi (in May, in the morning). at + điểm (at the hospital), in + trong không gian (in the room), on + bề mặt, tầng (on the second floor).",
  use: "Giới từ hay đi kèm cố định: interested in, depend on, married to, good at, allergic to.",
  ex: [["The appointment is at 9 on Monday.", "Lịch hẹn lúc 9 giờ thứ Hai."], ["She's allergic to penicillin.", "Cô ấy dị ứng penicillin."]],
  err: [["in Monday", "on Monday", "Ngày trong tuần dùng on."], ["discuss about the plan", "discuss the plan", "discuss không cần about."], ["married with", "married to", "Cụm cố định."]],
  quiz: [["I was born ___ 2003.", ["on", "in", "at"], 1, "Năm dùng in."], ["The X-ray department is ___ the second floor.", ["in", "at", "on"], 2, "Tầng dùng on."]] },
{ id: "past-simple", lvl: "A2", title: "Past simple", vi: "Thì quá khứ đơn", exams: ["CEFR", "VSTEP", "TOEIC", "IELTS"],
  form: "V-ed hoặc động từ bất quy tắc (go → went). Phủ định: didn't + V. Câu hỏi: Did + S + V?",
  use: "Việc đã xong trong quá khứ, thường có thời gian cụ thể: yesterday, last week, two days ago. Có từ chỉ thời gian vẫn phải chia động từ.",
  ex: [["I went to the pharmacy yesterday.", "Hôm qua tôi đi hiệu thuốc."], ["Did you take the tablets?", "Bạn đã uống thuốc chưa?"]],
  err: [["Yesterday I go to work.", "Yesterday I went to work.", "Có yesterday vẫn phải chia quá khứ."], ["Did you went?", "Did you go?", "Sau did dùng nguyên mẫu."]],
  quiz: [["The pain ___ two days ago.", ["start", "started", "has started"], 1, "Mốc two days ago: quá khứ đơn."], ["I ___ breakfast yesterday.", ["don't have", "didn't have", "didn't had"], 1, "didn't + nguyên mẫu."]] },
{ id: "future", lvl: "A2", title: "Will, going to, present continuous", vi: "Các cách nói về tương lai", exams: ["CEFR", "VSTEP", "TOEIC"],
  form: "will + V (quyết định lúc nói, dự đoán, lời hứa). be going to + V (dự định đã có, dự đoán có dấu hiệu). Hiện tại tiếp diễn (lịch hẹn đã sắp xếp).",
  use: "I'll call you back (vừa quyết định). I'm going to study medicine (dự định). I'm seeing the doctor at 3 (đã hẹn).",
  ex: [["I'll open the window.", "Để tôi mở cửa sổ."], ["We're meeting the client tomorrow.", "Mai chúng tôi gặp khách hàng."]],
  err: [["I will to go.", "I will go.", "Sau will không có to."], ["Tomorrow I go to Hanoi.", "Tomorrow I'm going to Hanoi.", "Kế hoạch tương lai cần dạng tương lai."]],
  quiz: [["Look at those clouds. It ___ rain.", ["is going to", "will to", "rains"], 0, "Có dấu hiệu hiện tại: going to."]] },
{ id: "comparatives", lvl: "A2", title: "Comparatives & superlatives", vi: "So sánh hơn và so sánh nhất", exams: ["CEFR", "TOEIC", "IELTS"],
  form: "Tính từ ngắn: -er than, the -est. Tính từ dài: more … than, the most. Bất quy tắc: good → better → best, bad → worse → worst.",
  use: "So sánh hai hay nhiều đối tượng. Trong IELTS Writing Task 1 dùng rất nhiều.",
  ex: [["The pain is worse at night.", "Cơn đau nặng hơn về đêm."], ["This is the most effective treatment.", "Đây là cách điều trị hiệu quả nhất."]],
  err: [["more better", "better", "Không dùng more với dạng -er."], ["more cheap than", "cheaper than", "Tính từ ngắn dùng -er."]],
  quiz: [["Today I feel ___ than yesterday.", ["good", "better", "more good"], 1, "good → better."]] },
{ id: "present-perfect", lvl: "A2", title: "Present perfect", vi: "Thì hiện tại hoàn thành", exams: ["CEFR", "VSTEP", "TOEIC", "IELTS"],
  form: "have/has + V3 (quá khứ phân từ). Hay đi với ever, never, just, already, yet, for, since.",
  use: "Trải nghiệm đến giờ, việc vừa xảy ra, việc kéo dài từ quá khứ tới hiện tại. How long have you had the cough?",
  ex: [["I've had this cough for two weeks.", "Tôi bị ho hai tuần rồi."], ["Have you ever had surgery?", "Bạn đã từng phẫu thuật chưa?"]],
  err: [["I live here since 2020.", "I have lived here since 2020.", "Kéo dài đến nay dùng hiện tại hoàn thành."], ["I have seen him yesterday.", "I saw him yesterday.", "Có mốc quá khứ cụ thể thì dùng quá khứ đơn."]],
  quiz: [["She ___ in this hospital since 2019.", ["works", "has worked", "worked"], 1, "since + mốc, kéo dài đến nay."], ["I ___ my keys. I can't find them.", ["have lost", "has lost", "have losed"], 0, "Kết quả ở hiện tại: have lost."]] },
{ id: "modals", lvl: "A2", title: "Should, must, have to", vi: "Động từ khuyết thiếu chỉ lời khuyên, bắt buộc", exams: ["CEFR", "VSTEP", "TOEIC"],
  form: "should/must/can/might + V nguyên mẫu (không to, không -s). have to + V (có chia: she has to).",
  use: "should: lời khuyên. must: bắt buộc từ người nói. have to: bắt buộc từ quy định. mustn't: cấm. don't have to: không cần.",
  ex: [["You should rest for a few days.", "Bạn nên nghỉ ngơi vài ngày."], ["You mustn't drive after this medicine.", "Không được lái xe sau khi dùng thuốc này."]],
  err: [["You must to take it.", "You must take it.", "Không có to sau must."], ["She cans come.", "She can come.", "Động từ khuyết thiếu không thêm -s."]],
  quiz: [["You ___ drink alcohol with this medicine. It's dangerous.", ["mustn't", "don't have to", "should"], 0, "Cấm vì nguy hiểm: mustn't."], ["It's free. You ___ pay.", ["mustn't", "don't have to", "can't"], 1, "Không cần: don't have to."]] },
{ id: "first-conditional", lvl: "A2", title: "First conditional", vi: "Câu điều kiện loại 1", exams: ["CEFR", "VSTEP", "IELTS"],
  form: "If + hiện tại đơn, will + V. Mệnh đề if không dùng will.",
  use: "Điều có thể xảy ra trong hiện tại hoặc tương lai, dùng nhiều khi dặn dò bệnh nhân.",
  ex: [["If the pain gets worse, come back straight away.", "Nếu đau nặng hơn, hãy quay lại ngay."], ["If you take it with food, it will upset your stomach less.", "Nếu uống cùng thức ăn, thuốc sẽ ít làm khó chịu dạ dày hơn."]],
  err: [["If you will take it…", "If you take it…", "Không dùng will sau if."]],
  quiz: [["If it ___ tomorrow, we will stay at home.", ["will rain", "rains", "rained"], 1, "Mệnh đề if dùng hiện tại đơn."]] },
{ id: "gerund-infinitive", lvl: "B1", title: "Gerund or infinitive", vi: "V-ing hay to V", exams: ["TOEIC", "IELTS", "VSTEP"],
  form: "Sau enjoy, avoid, finish, stop, suggest, mind, keep: V-ing. Sau want, decide, plan, hope, agree, refuse, need: to V. Sau giới từ: luôn V-ing.",
  use: "Nhóm này rất hay xuất hiện trong TOEIC Part 5.",
  ex: [["Avoid lifting heavy things.", "Tránh nâng vật nặng."], ["I decided to study medicine.", "Tôi quyết định học y."], ["She's interested in learning English.", "Cô ấy thích học tiếng Anh."]],
  err: [["avoid to lift", "avoid lifting", "avoid + V-ing."], ["I'm interested in learn.", "I'm interested in learning.", "Sau giới từ dùng V-ing."]],
  quiz: [["You should give up ___.", ["smoke", "to smoke", "smoking"], 2, "give up + V-ing (không dùng to + động từ)."], ["We plan ___ a new clinic.", ["opening", "to open", "open"], 1, "plan + to V."]] },
{ id: "pp-vs-past", lvl: "B1", title: "Present perfect vs past simple, for / since", vi: "Hiện tại hoàn thành hay quá khứ đơn", exams: ["IELTS", "VSTEP", "TOEIC"],
  form: "Quá khứ đơn: thời điểm đã kết thúc (yesterday, in 2020, ago). Hiện tại hoàn thành: đến nay, không nói rõ lúc nào. for + khoảng thời gian; since + mốc.",
  use: "Trong hỏi bệnh: When did it start? (quá khứ đơn) và How long have you had it? (hiện tại hoàn thành).",
  ex: [["It started three days ago.", "Nó bắt đầu cách đây ba ngày."], ["I've had it for three days / since Monday.", "Tôi bị ba ngày rồi / từ thứ Hai."]],
  err: [["since three days", "for three days", "Khoảng thời gian dùng for."], ["How long do you have it?", "How long have you had it?", "“Bao lâu rồi” dùng hiện tại hoàn thành."]],
  quiz: [["I ___ him since we were students.", ["knew", "have known", "know"], 1, "since + mốc, kéo dài đến nay."], ["She ___ to Japan in 2022.", ["has gone", "went", "goes"], 1, "Năm cụ thể: quá khứ đơn."]] },
{ id: "passive", lvl: "B1", title: "The passive", vi: "Câu bị động", exams: ["TOEIC", "IELTS", "VSTEP"],
  form: "be (chia theo thì) + V3. The sample was sent. The results will be ready. The room is being cleaned. Người thực hiện (nếu cần): by …",
  use: "Khi hành động quan trọng hơn người làm: văn phong học thuật, báo cáo, quy trình y khoa.",
  ex: [["The patient was admitted last night.", "Bệnh nhân được nhập viện tối qua."], ["Blood samples are taken in the morning.", "Mẫu máu được lấy vào buổi sáng."]],
  err: [["The sample sent to the lab.", "The sample was sent to the lab.", "Bị động cần be."], ["The meeting was cancel.", "The meeting was cancelled.", "Sau be dùng V3."]],
  quiz: [["The new hospital ___ in 2025.", ["built", "was built", "is building"], 1, "Bệnh viện được xây: bị động quá khứ."], ["All applications must ___ by Friday.", ["submit", "be submitted", "submitted"], 1, "must + be + V3."]] },
{ id: "relative", lvl: "B1", title: "Relative clauses", vi: "Mệnh đề quan hệ", exams: ["IELTS", "TOEIC", "VSTEP"],
  form: "who (người), which (vật), that (người/vật, chỉ trong mệnh đề xác định), whose (của ai), where (nơi). Mệnh đề không xác định có dấu phẩy và không dùng that.",
  use: "Nối hai câu, mô tả chính xác người hoặc vật. Giúp câu văn IELTS phức tạp hơn.",
  ex: [["The doctor who saw me was very kind.", "Vị bác sĩ khám cho tôi rất tử tế."], ["My sister, who lives in Hue, is a nurse.", "Chị tôi, người sống ở Huế, là y tá."]],
  err: [["The drug that you take it…", "The drug that you take…", "Không lặp lại đại từ it."], ["My mother, that is a teacher…", "My mother, who is a teacher…", "Mệnh đề có dấu phẩy không dùng that."]],
  quiz: [["The man ___ car was stolen called the police.", ["who", "whose", "which"], 1, "Sở hữu: whose."], ["This is the clinic ___ I work.", ["where", "which", "who"], 0, "Nơi chốn: where."]] },
{ id: "sva", lvl: "B1", title: "Subject–verb agreement", vi: "Hòa hợp chủ ngữ và động từ", exams: ["TOEIC", "IELTS"],
  form: "Chủ ngữ số ít + động từ số ít. Everyone, each, the number of + số ít. A number of + số nhiều. Chủ ngữ dài: tìm danh từ chính.",
  use: "Lỗi rất hay bị bắt trong TOEIC Part 5 và bị trừ điểm IELTS Writing.",
  ex: [["The number of patients is increasing.", "Số bệnh nhân đang tăng."], ["The results of the test show …", "Kết quả xét nghiệm cho thấy …"]],
  err: [["The number of patients are rising.", "The number of patients is rising.", "Danh từ chính là number."], ["Everyone have a role.", "Everyone has a role.", "Everyone là số ít."]],
  quiz: [["Each of the rooms ___ a window.", ["have", "has", "having"], 1, "Each of … dùng số ít."], ["The list of names ___ on the desk.", ["is", "are", "be"], 0, "Danh từ chính là list."]] },
{ id: "reported", lvl: "B1", title: "Reported speech", vi: "Câu tường thuật", exams: ["VSTEP", "IELTS"],
  form: "Lùi thì: am → was, will → would, did → had done. say (that) …; tell + người + (that) …; ask + if/whether hoặc từ để hỏi + S + V.",
  use: "Thuật lại lời bệnh nhân, đồng nghiệp: She said she had a headache.",
  ex: [["She said (that) she felt dizzy.", "Cô ấy nói cô ấy thấy chóng mặt."], ["He asked where the pharmacy was.", "Anh ấy hỏi hiệu thuốc ở đâu."]],
  err: [["She said me …", "She told me … / She said to me …", "say không đi trực tiếp với người."], ["He asked where was the pharmacy.", "He asked where the pharmacy was.", "Câu hỏi gián tiếp không đảo ngữ."]],
  quiz: [["He ___ me that he was tired.", ["said", "told", "asked"], 1, "tell + người."]] },
{ id: "second-conditional", lvl: "B1", title: "Second conditional", vi: "Câu điều kiện loại 2", exams: ["IELTS", "VSTEP"],
  form: "If + quá khứ đơn, would + V. If I were you, I would … (dùng were cho mọi ngôi, trang trọng).",
  use: "Giả định không có thật ở hiện tại, lời khuyên lịch sự.",
  ex: [["If I had more time, I would study more.", "Nếu có nhiều thời gian hơn, tôi sẽ học nhiều hơn."], ["If I were you, I'd see a doctor.", "Nếu là bạn, tôi sẽ đi khám."]],
  err: [["If I would have time…", "If I had time…", "Không dùng would sau if."]],
  quiz: [["If she ___ closer, she would walk to work.", ["lives", "lived", "would live"], 1, "Điều kiện loại 2: quá khứ đơn sau if."]] },
{ id: "word-forms", lvl: "B1", title: "Word forms", vi: "Dạng từ: danh, động, tính, trạng từ", exams: ["TOEIC", "IELTS", "VSTEP"],
  form: "Vị trí quyết định dạng từ: sau mạo từ và tính từ là danh từ; trước danh từ là tính từ; bổ nghĩa cho động từ là trạng từ (-ly). Hậu tố: -tion, -ment, -ness (danh từ); -ful, -ive, -al (tính từ).",
  use: "Dạng câu hỏi xuất hiện nhiều nhất trong TOEIC Part 5.",
  ex: [["a successful launch", "một buổi ra mắt thành công"], ["She works efficiently.", "Cô ấy làm việc hiệu quả."], ["the decision of the committee", "quyết định của hội đồng"]],
  err: [["a success launch", "a successful launch", "Trước danh từ cần tính từ."], ["He speaks English very good.", "He speaks English very well.", "Bổ nghĩa cho động từ dùng trạng từ."]],
  quiz: [["The new system is very ___.", ["effect", "effective", "effectively"], 1, "Sau be và very cần tính từ."], ["Please read the instructions ___.", ["careful", "care", "carefully"], 2, "Bổ nghĩa cho read: trạng từ."]] },
{ id: "third-conditional", lvl: "B2", title: "Third conditional, wish", vi: "Câu điều kiện loại 3 và câu ước", exams: ["IELTS", "VSTEP"],
  form: "If + had V3, would have V3. I wish + quá khứ đơn (hiện tại), I wish + had V3 (quá khứ).",
  use: "Giả định trái với quá khứ, hối tiếc.",
  ex: [["If he had come earlier, we would have treated him sooner.", "Nếu anh ấy đến sớm hơn, chúng tôi đã điều trị sớm hơn."], ["I wish I had studied harder.", "Ước gì tôi đã học chăm hơn."]],
  err: [["If I would have known…", "If I had known…", "Mệnh đề if dùng had V3."]],
  quiz: [["If she ___ the bus, she wouldn't have been late.", ["caught", "had caught", "would catch"], 1, "Loại 3: had + V3."]] },
{ id: "modals-past", lvl: "B2", title: "Modals in the past", vi: "Động từ khuyết thiếu ở quá khứ", exams: ["IELTS"],
  form: "should have V3 (lẽ ra nên), must have V3 (chắc hẳn đã), might/could have V3 (có thể đã), can't have V3 (không thể nào đã).",
  use: "Suy đoán hoặc tiếc nuối về quá khứ.",
  ex: [["You should have come in earlier.", "Lẽ ra bạn nên đến khám sớm hơn."], ["It must have been a virus.", "Chắc hẳn đó là do vi-rút."]],
  err: [["You should came.", "You should have come.", "should + have + V3."]],
  quiz: [["The lights are off. They ___ gone home.", ["must have", "needn't have", "can have"], 0, "Suy đoán chắc chắn: must have."]] },
{ id: "linking", lvl: "B2", title: "Although, despite, however", vi: "Từ nối chỉ sự tương phản", exams: ["TOEIC", "IELTS", "VSTEP"],
  form: "although/even though + mệnh đề (S + V). despite/in spite of + danh từ hoặc V-ing. However, … đứng đầu câu mới, sau nó có dấu phẩy.",
  use: "TOEIC hay hỏi phân biệt although và despite. IELTS thưởng điểm cho câu phức có liên từ đúng.",
  ex: [["Although it was raining, she walked to work.", "Mặc dù trời mưa, cô ấy vẫn đi bộ đi làm."], ["Despite the rain, she walked to work.", "Bất chấp trời mưa, cô ấy vẫn đi bộ đi làm."]],
  err: [["Despite it was raining…", "Although it was raining… / Despite the rain…", "despite không đi với mệnh đề."], ["Although …, but …", "Although …, …", "Không dùng although và but cùng lúc."]],
  quiz: [["___ feeling tired, he finished the report.", ["Because", "Despite", "However"], 1, "Sau chỗ trống là V-ing: despite."], ["The drug works well. ___, it can cause headaches.", ["Although", "Despite", "However"], 2, "Đầu câu mới, có dấu phẩy: However."]] },
{ id: "indirect-questions", lvl: "B2", title: "Indirect questions", vi: "Câu hỏi gián tiếp (lịch sự)", exams: ["IELTS", "TOEIC"],
  form: "Could you tell me / Do you know / I was wondering + từ để hỏi (hoặc if/whether) + S + V (không đảo ngữ).",
  use: "Hỏi lịch sự với khách hàng, bệnh nhân, người lạ.",
  ex: [["Could you tell me where it hurts?", "Anh/chị chỉ giúp tôi đau ở đâu nhé?"], ["Do you know if the clinic is open?", "Bạn có biết phòng khám mở cửa không?"]],
  err: [["Could you tell me where does it hurt?", "Could you tell me where it hurts?", "Câu hỏi gián tiếp không dùng trợ động từ đảo."]],
  quiz: [["Do you know what time ___?", ["does the bank open", "the bank opens", "opens the bank"], 1, "Không đảo ngữ trong câu hỏi gián tiếp."]] }
];
/* Điểm ngữ pháp bổ sung (v4.5): gộp vào GRAMMAR rồi xếp theo cấp độ (sort ổn định, giữ nguyên thứ tự cũ trong cùng cấp). */
const GRAMMAR_NEW = [
{"id": "possessives", "lvl": "A1", "title": "Possessives: my/mine, 's, of, whose", "vi": "Sở hữu: tính từ sở hữu, đại từ sở hữu, 's và of, whose", "exams": ["CEFR", "VSTEP"], "form": "Tính từ sở hữu (+ danh từ): my, your, his, her, its, our, their. Đại từ sở hữu (đứng một mình): mine, yours, his, hers, ours, theirs. Người: Anna's bag; số nhiều có s: the doctors' room. Vật: the door of the room. Hỏi: Whose bag is this?", "use": "Nói đồ vật hay người thuộc về ai. Đừng nhầm its (của nó) với it's (it is), và whose (của ai) với who's (who is). Sau tính từ sở hữu luôn có danh từ; mine/yours thì không.", "ex": [["This is my phone, and that one is yours.", "Đây là điện thoại của tôi, còn cái kia là của bạn."], ["The nurse's uniform is white.", "Đồng phục của y tá màu trắng."], ["Whose coat is on the chair?", "Áo khoác của ai ở trên ghế vậy?"]], "err": [["This book is my.", "This book is mine.", "Không có danh từ phía sau thì dùng mine, không dùng my."], ["The dog is wagging it's tail.", "The dog is wagging its tail.", "its là tính từ sở hữu, it's chỉ là it is."], ["This is my sister book.", "This is my sister's book.", "Người sở hữu cần 's."]], "quiz": [["Is this your pen? No, ___ is blue.", ["my", "mine", "me"], 1, "Không có danh từ sau nên dùng đại từ sở hữu mine."], ["___ umbrella is this?", ["Who", "Whose", "Who's"], 1, "Hỏi chủ sở hữu dùng Whose + danh từ."]]},
{"id": "present-continuous", "lvl": "A1", "title": "Present continuous", "vi": "Thì hiện tại tiếp diễn", "exams": ["CEFR", "VSTEP", "TOEIC"], "form": "am/is/are + V-ing. Phủ định: isn't/aren't + V-ing. Câu hỏi: Is she working? Quy tắc -ing: make → making (bỏ e), run → running, swim → swimming, sit → sitting (gấp đôi phụ âm), lie → lying.", "use": "Hành động đang diễn ra lúc nói (now, at the moment, Look!, Listen!) hoặc kế hoạch gần. Thói quen dùng hiện tại đơn. Động từ chỉ trạng thái như know, like, want, love, need, understand không dùng thể tiếp diễn.", "ex": [["The doctor is talking to a patient now.", "Bác sĩ đang nói chuyện với một bệnh nhân."], ["I'm not working today.", "Hôm nay tôi không làm việc."], ["Are they waiting outside?", "Họ có đang đợi bên ngoài không?"]], "err": [["She is make dinner now.", "She is making dinner now.", "Sau be dùng V-ing, không dùng nguyên mẫu."], ["I am wanting some water.", "I want some water.", "want là động từ trạng thái, không dùng tiếp diễn."], ["He is runing in the park.", "He is running in the park.", "Động từ ngắn một âm tiết gấp đôi phụ âm cuối trước -ing."]], "quiz": [["Listen! The baby ___.", ["cries", "is crying", "cry"], 1, "Listen! báo hiệu việc đang xảy ra nên dùng tiếp diễn."], ["I ___ the answer.", ["know", "am knowing", "knowing"], 0, "know là động từ trạng thái, dùng hiện tại đơn."]]},
{"id": "past-continuous", "lvl": "A2", "title": "Past continuous", "vi": "Thì quá khứ tiếp diễn", "exams": ["CEFR", "VSTEP", "IELTS"], "form": "was/were + V-ing. I/he/she/it was; you/we/they were. Phủ định: wasn't/weren't + V-ing. Câu hỏi: Were you sleeping? Mẫu: S + was/were + V-ing when + quá khứ đơn; While + quá khứ tiếp diễn, quá khứ đơn.", "use": "Hành động đang diễn ra tại một thời điểm trong quá khứ (at 8 p.m. last night) hoặc bị một hành động ngắn khác cắt ngang. Hành động dài dùng quá khứ tiếp diễn, hành động ngắn chen vào dùng quá khứ đơn. Hai hành động song song cùng dùng while.", "ex": [["I was watching TV when the phone rang.", "Tôi đang xem tivi thì điện thoại reo."], ["The patients were waiting when the doctor arrived.", "Các bệnh nhân đang đợi thì bác sĩ đến."], ["What were you doing at nine yesterday?", "Chín giờ hôm qua bạn đang làm gì?"]], "err": [["We was waiting for the bus.", "We were waiting for the bus.", "We đi với were."], ["I was walking home when I was seeing an accident.", "I was walking home when I saw an accident.", "Hành động ngắn chen vào dùng quá khứ đơn."], ["She cooking when I called.", "She was cooking when I called.", "Thiếu was trước V-ing."]], "quiz": [["I ___ TV when the phone rang.", ["watching", "was watching", "am watching"], 1, "Hành động đang diễn ra bị cắt ngang dùng quá khứ tiếp diễn."], ["What ___ you doing at 9 o'clock yesterday?", ["was", "were", "did"], 1, "you đi với were."]]},
{"id": "used-to", "lvl": "A2", "title": "Used to, be used to, get used to", "vi": "Used to + động từ; be/get used to + V-ing", "exams": ["CEFR", "VSTEP", "IELTS"], "form": "used to + V: thói quen hoặc trạng thái trong quá khứ nay không còn. Phủ định/nghi vấn: didn't use to, Did you use to …? (bỏ d). be used to + V-ing/danh từ: quen với. get used to + V-ing: dần trở nên quen.", "use": "Used to + V nói về quá khứ khác với hiện tại. Be used to và get used to là cấu trúc khác, theo sau là V-ing hoặc danh từ: I'm used to waking up early.", "ex": [["I used to live in a small village.", "Tôi từng sống ở một ngôi làng nhỏ."], ["She didn't use to drink coffee.", "Trước đây cô ấy không uống cà phê."], ["He is used to working night shifts.", "Anh ấy đã quen làm ca đêm."]], "err": [["She didn't used to like fish.", "She didn't use to like fish.", "Sau didn't dùng use (không có d)."], ["I'm used to wake up early.", "I'm used to waking up early.", "Sau be used to dùng V-ing."], ["I used to walking to school.", "I used to walk to school.", "Sau used to (thói quen quá khứ) dùng động từ nguyên mẫu."]], "quiz": [["When I was a child, I ___ in a small village.", ["used to live", "use to live", "am used to live"], 0, "Thói quen quá khứ: used to + V."], ["I'm not used to ___ on the left.", ["drive", "driving", "drove"], 1, "be used to + V-ing."]]},
{"id": "quantifiers", "lvl": "A2", "title": "Quantifiers", "vi": "Từ chỉ số lượng", "exams": ["CEFR", "VSTEP"], "form": "Đếm được: many, a few, few, (not) enough. Không đếm được: much, a little, little. Cả hai: some, any, a lot of, no, enough. Some dùng ở câu khẳng định, any ở câu phủ định và câu hỏi.", "use": "Nói về số lượng không chính xác. Trước tiên xác định danh từ đếm được (egg, bed) hay không đếm được (milk, time, water) rồi mới chọn từ chỉ số lượng.", "ex": [["There are a few beds free in the ward.", "Còn một vài giường trống trong khoa."], ["We don't have much time.", "Chúng ta không có nhiều thời gian."], ["Is there any water in the bottle?", "Trong chai còn nước không?"]], "err": [["I have many homework.", "I have a lot of homework.", "homework không đếm được nên không dùng many."], ["We don't have some milk.", "We don't have any milk.", "Câu phủ định dùng any, không dùng some."], ["How many water do you drink?", "How much water do you drink?", "water không đếm được nên dùng much."]], "quiz": [["There isn't ___ juice in the fridge.", ["many", "much", "a few"], 1, "juice không đếm được; câu phủ định dùng much."], ["I need ___ eggs to make this cake.", ["a little", "much", "a few"], 2, "eggs đếm được số nhiều nên dùng a few."]]},
{"id": "zero-conditional", "lvl": "A2", "title": "Zero conditional", "vi": "Câu điều kiện loại 0", "exams": ["CEFR", "VSTEP"], "form": "If/When + hiện tại đơn, hiện tại đơn. Hoặc If + hiện tại đơn, mệnh lệnh. Có thể đảo vế: Water boils if you heat it to 100 degrees.", "use": "Nói về sự thật hiển nhiên, quy luật khoa học, thói quen và hướng dẫn luôn đúng. Không dùng will trong cả hai vế.", "ex": [["If you heat ice, it melts.", "Nếu bạn đun nóng đá, nó tan chảy."], ["When I have a headache, I rest in a dark room.", "Khi bị đau đầu, tôi nghỉ trong phòng tối."], ["If a patient has a fever, call the doctor.", "Nếu bệnh nhân bị sốt, hãy gọi bác sĩ."]], "err": [["If you will heat water, it boils.", "If you heat water, it boils.", "Mệnh đề if dùng hiện tại đơn, không dùng will."], ["If it rains, the roads gets slippery.", "If it rains, the roads get slippery.", "roads là số nhiều nên động từ không thêm -s."], ["When I am tired, I drank coffee.", "When I am tired, I drink coffee.", "Cả hai vế đều ở hiện tại đơn."]], "quiz": [["If you mix red and blue, you ___ purple.", ["get", "got", "will to get"], 0, "Sự thật hiển nhiên dùng hiện tại đơn ở cả hai vế."], ["When the temperature ___ below zero, water freezes.", ["drops", "dropped", "will drop"], 0, "Mệnh đề when dùng hiện tại đơn, khớp với freezes."]]},
{"id": "question-tags", "lvl": "B1", "title": "Question tags", "vi": "Câu hỏi đuôi", "exams": ["CEFR", "IELTS", "VSTEP"], "form": "Câu khẳng định + tag phủ định (She is here, isn't she?). Câu phủ định + tag khẳng định (She isn't here, is she?). Dùng trợ động từ của câu chính; hiện tại đơn dùng do/does, quá khứ đơn dùng did. Đặc biệt: I am ... aren't I?; Let's ... shall we?; mệnh lệnh ... will you?", "use": "Xác nhận thông tin hoặc mời người nghe đồng ý. Đuôi dùng đại từ thay chủ ngữ. Nobody, nothing, never được xem là phủ định nên đuôi khẳng định.", "ex": [["You are a nurse, aren't you?", "Bạn là y tá, đúng không?"], ["He hasn't taken his medicine, has he?", "Anh ấy chưa uống thuốc, phải không?"], ["Let's start the ward round, shall we?", "Chúng ta bắt đầu đi buồng nhé?"]], "err": [["You like coffee, aren't you?", "You like coffee, don't you?", "Câu chính dùng like nên đuôi dùng trợ động từ do."], ["She isn't working, isn't she?", "She isn't working, is she?", "Câu phủ định thì đuôi phải khẳng định."], ["I am late, isn't I?", "I am late, aren't I?", "Với I am, đuôi chuẩn là aren't I."]], "quiz": [["They finished the report yesterday, ___?", ["didn't they", "don't they", "haven't they"], 0, "Câu chính ở quá khứ đơn nên đuôi dùng did."], ["Open the window, ___?", ["do you", "will you", "are you"], 1, "Sau câu mệnh lệnh thường dùng will you."]]},
{"id": "phrasal-verbs", "lvl": "B1", "title": "Phrasal verbs", "vi": "Cụm động từ", "exams": ["CEFR", "IELTS", "TOEIC", "VSTEP"], "form": "Động từ + tiểu từ (up, down, off, after...). Tách được: turn down the offer / turn the offer down; nếu tân ngữ là đại từ thì bắt buộc đặt giữa: turn it down. Không tách được: look after the baby, run out of milk.", "use": "Rất phổ biến trong giao tiếp và bài thi. Nghĩa thường khác nghĩa từng từ: give up (từ bỏ), look after (chăm sóc), turn down (từ chối hoặc giảm âm), set up (thành lập).", "ex": [["He gave up smoking last year.", "Anh ấy đã bỏ thuốc từ năm ngoái."], ["The nurse looks after the patients.", "Y tá chăm sóc bệnh nhân."], ["They offered her the job, but she turned it down.", "Họ mời cô ấy làm việc nhưng cô ấy từ chối."]], "err": [["Please turn off it.", "Please turn it off.", "Với cụm tách được, đại từ it phải đứng giữa động từ và tiểu từ."], ["She looks her mother after.", "She looks after her mother.", "look after không tách được; tiểu từ đứng ngay sau động từ."], ["We ran out milk.", "We ran out of milk.", "Cụm đầy đủ là run out of + danh từ."]], "quiz": [["I can't hear the TV. Please turn it ___.", ["down", "up", "off"], 1, "Không nghe rõ thì cần tăng âm lượng: turn it up."], ["Our clinic ___ by two doctors in 2015.", ["set up", "was set up", "was setting up"], 1, "Clinic là vật bị thành lập (có by two doctors) nên dùng bị động was set up."]]},
{"id": "too-enough", "lvl": "B1", "title": "Too, enough, so, such", "vi": "Too, enough, so và such", "exams": ["A2-B1", "VSTEP", "TOEIC"], "form": "too + adj (+ to V): quá … không thể. adj + enough (+ to V); enough + noun. so + adj/adv/much/many + that; such + (a/an) + (adj) + noun + that. too much + danh từ không đếm được, too many + danh từ đếm được.", "use": "Nói về mức độ vượt quá hoặc đủ so với yêu cầu (too/enough), và nhấn mạnh kết quả (so/such ... that). Too mang nghĩa tiêu cực; enough đứng SAU tính từ/trạng từ nhưng TRƯỚC danh từ.", "ex": [["The tea is too hot to drink.", "Trà nóng quá nên không uống được."], ["She is old enough to vote.", "Cô ấy đủ tuổi để bầu cử."], ["It was such a long wait that many patients left.", "Phải chờ lâu đến mức nhiều bệnh nhân bỏ về."]], "err": [["She is enough old to drive.", "She is old enough to drive.", "Enough đứng sau tính từ."], ["It was so a hot day.", "It was such a hot day.", "so + adj; such + a + adj + danh từ."], ["There are too much cars.", "There are too many cars.", "Danh từ đếm được số nhiều dùng too many."]], "quiz": [["He is ___ tired to drive safely.", ["too", "enough", "very"], 0, "Too + adj + to V: quá … không thể."], ["It was ___ a cold night that we stayed inside.", ["so", "such", "too"], 1, "such + a + adj + danh từ + that."]]},
{"id": "causative", "lvl": "B2", "title": "Causative: have, get, make, let", "vi": "Thể sai khiến", "exams": ["B2", "IELTS", "VSTEP"], "form": "have/get + vật + V3 (nhờ làm giúp). have + người + V; get + người + to V. make + người + V (bắt buộc). let + người + V (cho phép).", "use": "Nói việc do người khác làm cho mình (have/get something done), hoặc bắt/cho phép ai làm gì. Make và let không dùng to sau tân ngữ.", "ex": [["I had my blood pressure checked yesterday.", "Hôm qua tôi đã đi đo huyết áp."], ["The nurse got the patient to sit down.", "Y tá bảo bệnh nhân ngồi xuống."], ["My boss made us work late.", "Sếp bắt chúng tôi làm việc muộn."]], "err": [["I cut my hair yesterday at the salon.", "I had my hair cut yesterday at the salon.", "Người khác cắt giúp thì dùng have + vật + V3."], ["She made me to wait.", "She made me wait.", "Make + người + V nguyên mẫu không to."], ["He got me fix the car.", "He got me to fix the car.", "Get + người + to V."]], "quiz": [["I had my teeth ___ last week.", ["checked", "check", "checking"], 0, "have + vật + V3."], ["They let the children ___ outside.", ["to play", "play", "playing"], 1, "let + người + V nguyên mẫu."]]},
{"id": "future-perfect", "lvl": "B2", "title": "Future perfect and future continuous", "vi": "Tương lai hoàn thành và tương lai tiếp diễn", "exams": ["B2", "IELTS", "VSTEP"], "form": "will have + V3 (xong trước một mốc tương lai). Thường đi với by + mốc thời gian, by the time + mệnh đề hiện tại đơn. Tương lai tiếp diễn: will be + V-ing (đang diễn ra tại một thời điểm tương lai).", "use": "Dùng will have V3 cho việc đã hoàn thành trước mốc; will be V-ing cho việc đang diễn ra tại mốc. Sau by the time dùng hiện tại đơn, không dùng will.", "ex": [["By next June, I will have finished my degree.", "Đến tháng Sáu tới, tôi sẽ hoàn thành bằng cấp."], ["This time tomorrow, I will be taking my exam.", "Giờ này ngày mai, tôi đang thi."], ["By the time you arrive, the surgery will have ended.", "Khi bạn đến, ca mổ đã kết thúc."]], "err": [["By the time I will arrive, they will have left.", "By the time I arrive, they will have left.", "Sau by the time dùng hiện tại đơn."], ["She will has finished by noon.", "She will have finished by noon.", "Will + have + V3."], ["By June I will finished my course.", "By June I will have finished my course.", "Thiếu have: will have + V3."]], "quiz": [["By 2030, she ___ her medical training.", ["will have completed", "completed", "has completing"], 0, "By + mốc tương lai: will have V3."], ["This time next week, we ___ on a plane.", ["will have sat", "will be sitting", "sat"], 1, "Đang diễn ra tại mốc: will be V-ing."]]},
{"id": "mixed-conditionals", "lvl": "C1", "title": "Mixed conditionals, wish, as if", "vi": "Câu điều kiện hỗn hợp, ước, as if", "exams": ["C1", "IELTS", "VSTEP"], "form": "If + had V3, would + V (quá khứ gây kết quả hiện tại). If + quá khứ đơn, would have V3 (đặc điểm hiện tại gây kết quả trong quá khứ). I wish + had V3 (tiếc quá khứ); I wish/If only + quá khứ đơn (tiếc hiện tại). as if/as though + quá khứ đơn (không thật ở hiện tại) hoặc had V3 (không thật ở quá khứ).", "use": "Trộn mốc thời gian giữa mệnh đề if và mệnh đề chính. Dùng were cho mọi ngôi trong văn trang trọng. Dấu hiệu now, today hay yesterday, last year giúp chọn đúng dạng.", "ex": [["If I had taken that job, I would be living in Berlin now.", "Nếu tôi nhận công việc đó, giờ tôi đang sống ở Berlin."], ["If she were more careful, she wouldn't have given the wrong dose.", "Nếu cô ấy cẩn thận hơn, cô ấy đã không cho nhầm liều."], ["He talks as if he were the director.", "Anh ta nói như thể mình là giám đốc."]], "err": [["If I would have saved more, I could buy a flat now.", "If I had saved more, I could buy a flat now.", "Mệnh đề if không dùng would; dùng had V3."], ["I wish I studied harder last year.", "I wish I had studied harder last year.", "Tiếc việc trong quá khứ dùng wish + had V3."], ["If she had taken the medicine, she will feel better now.", "If she had taken the medicine, she would feel better now.", "Điều kiện không có thật dùng would + V, không dùng will."]], "quiz": [["If I had listened to the doctor, I ___ healthier now.", ["would be", "would have been", "will be"], 0, "Now cho kết quả hiện tại: would + V."], ["He acts as if he ___ the boss, but he is a trainee.", ["would be", "were", "being"], 1, "Không thật ở hiện tại: as if + were."]]},
{"id": "inversion", "lvl": "C1", "title": "Inversion", "vi": "Đảo ngữ (phủ định, điều kiện)", "exams": ["C1", "IELTS", "VSTEP"], "form": "Trạng từ phủ định/hạn chế (never, rarely, seldom, little, hardly...when, no sooner...than, not only...but also, only when, not until, under no circumstances) + trợ động từ + S + V. Điều kiện đảo: Had + S + V3 / Should + S + V / Were + S + to V.", "use": "Văn phong trang trọng, bài viết học thuật, nhấn mạnh. Hay gặp trong bài Use of English C1 và IELTS Writing.", "ex": [["Never have I seen such a calm patient.", "Tôi chưa bao giờ thấy một bệnh nhân bình tĩnh như vậy."], ["No sooner had she left than the phone rang.", "Cô ấy vừa đi thì điện thoại reo."], ["Had I known, I would have called earlier.", "Nếu tôi biết, tôi đã gọi sớm hơn."]], "err": [["Not only she forgot the form, but...", "Not only did she forget the form, but...", "Sau Not only đầu câu phải đảo trợ động từ: did she forget."], ["No sooner had he arrived when it rained.", "No sooner had he arrived than it rained.", "No sooner đi với than; hardly đi với when."], ["Only when the test ended we left.", "Only when the test ended did we leave.", "Only when đầu câu kéo theo đảo ngữ ở mệnh đề chính."]], "quiz": [["Rarely ___ such a rapid recovery.", ["have I seen", "I have seen", "I seen have"], 0, "Rarely đầu câu: đảo trợ động từ trước chủ ngữ."], ["___ you need help, please call reception.", ["Should", "Would", "Do"], 0, "Đảo ngữ điều kiện loại 1: Should + S + V."]]},
{"id": "participle-clauses", "lvl": "C1", "title": "Participle clauses", "vi": "Mệnh đề phân từ và mệnh đề quan hệ rút gọn", "exams": ["C1", "IELTS", "VSTEP"], "form": "V-ing (chủ động, đồng thời), V3 (bị động), Having + V3 (xảy ra trước), Not + V-ing (phủ định). Chủ ngữ của mệnh đề phân từ phải trùng chủ ngữ mệnh đề chính. Rút gọn quan hệ: the man (who is) standing there; the drug (which was) developed in 1998.", "use": "Viết câu gọn, văn phong học thuật. Lỗi dangling participle (chủ ngữ treo) hay bị trừ điểm trong IELTS Writing và bài sửa lỗi.", "ex": [["Having finished her shift, she went straight home.", "Sau khi hết ca, cô ấy về thẳng nhà."], ["Overwhelmed by the workload, the doctors asked for help.", "Bị quá tải công việc, các bác sĩ xin hỗ trợ."], ["The woman standing by the door is my aunt.", "Người phụ nữ đứng cạnh cửa là dì tôi."]], "err": [["Walking to the station, a car almost hit me.", "Walking to the station, I was almost hit by a car.", "Chủ ngữ của Walking phải là I, không phải a car (dangling participle)."], ["Having been finished the shift, she left.", "Having finished the shift, she left.", "Chủ ngữ tự làm hành động nên dùng chủ động: Having finished."], ["The students sat at the back were talking.", "The students sitting at the back were talking.", "Nghĩa chủ động rút gọn bằng V-ing."]], "quiz": [["___ what to do, she asked a colleague.", ["Not knowing", "Knowing not", "Not known"], 0, "Phủ định: Not + V-ing."], ["The patients ___ in Ward 4 will be moved tomorrow.", ["treated", "treating", "treat"], 0, "Bệnh nhân được điều trị (bị động): V3."]]},
{"id": "cleft-sentences", "lvl": "C1", "title": "Cleft sentences", "vi": "Câu chẻ (nhấn mạnh)", "exams": ["C1", "IELTS", "VSTEP"], "form": "It-cleft: It + be + phần nhấn mạnh + that/who + mệnh đề. Wh-cleft: What + S + V + be + phần nhấn mạnh. All + S + V + be + (to) V.", "use": "Nhấn mạnh thông tin mới hoặc đối lập, rất hay gặp trong nói và viết C1.", "ex": [["It was the delay that upset him.", "Chính sự chậm trễ làm anh ấy khó chịu."], ["What she needs is a long holiday.", "Điều cô ấy cần là một kỳ nghỉ dài."], ["All you have to do is sign here.", "Bạn chỉ cần ký vào đây."]], "err": [["It was in 2015 what the clinic opened.", "It was in 2015 that the clinic opened.", "It-cleft dùng that (hoặc who cho người), không dùng what."], ["That I need is a rest.", "What I need is a rest.", "Wh-cleft bắt đầu bằng What."], ["It was the nurse noticed the error.", "It was the nurse who noticed the error.", "It-cleft cần who/that sau phần nhấn mạnh."]], "quiz": [["___ worries me is the cost, not the risk.", ["What", "That", "Which"], 0, "Wh-cleft mở đầu bằng What."], ["It was my sister ___ first told me about this course.", ["who", "what", "whose"], 0, "It was + người + who."]]}
];
GRAMMAR.push(...GRAMMAR_NEW);
{ const _o = ["A1", "A2", "B1", "B2", "C1"]; GRAMMAR.sort((a, b) => _o.indexOf(a.lvl) - _o.indexOf(b.lvl)); }


/* ============================================================
   CÂU NÓI ĐỘNG LỰC (ngạn ngữ, thành ngữ truyền thống, phạm vi công cộng)
   [tiếng Anh, ý nghĩa, tương đương tiếng Việt]
   ============================================================ */
const PROVERBS = [
["Practice makes perfect.", "Skill comes from repetition.", "Trăm hay không bằng tay quen."],
["Rome wasn't built in a day.", "Big things take time.", "Việc lớn cần có thời gian."],
["Where there's a will, there's a way.", "Determination finds a path.", "Có chí thì nên."],
["Little strokes fell great oaks.", "Small, repeated efforts win.", "Có công mài sắt, có ngày nên kim."],
["Slow and steady wins the race.", "Consistency beats speed.", "Chậm mà chắc."],
["Every cloud has a silver lining.", "Something good hides in bad times.", "Trong cái rủi có cái may."],
["Actions speak louder than words.", "What you do matters more than what you say.", "Việc làm quan trọng hơn lời nói."],
["The early bird catches the worm.", "Start early to gain the advantage.", "Trâu chậm uống nước đục."],
["Better late than never.", "Starting late beats never starting.", "Muộn còn hơn không."],
["No pain, no gain.", "Effort brings results.", "Muốn ăn thì lăn vào bếp."],
["Nothing ventured, nothing gained.", "Take chances to succeed.", "Không vào hang hổ, sao bắt được hổ con."],
["Constant dripping wears away the stone.", "Persistence overcomes difficulty.", "Nước chảy đá mòn."],
["Little by little, one goes far.", "Tiny steps add up.", "Kiến tha lâu cũng đầy tổ."],
["Many a little makes a mickle.", "Small amounts become large.", "Tích tiểu thành đại."],
["Great oaks from little acorns grow.", "Big things start small.", "Cây lớn mọc lên từ hạt nhỏ."],
["Failure is the mother of success.", "Mistakes teach you.", "Thất bại là mẹ thành công."],
["If at first you don't succeed, try, try again.", "Keep trying.", "Thất bại thì làm lại, làm mãi sẽ thành."],
["To err is human.", "Everyone makes mistakes.", "Nhân vô thập toàn."],
["It's never too late to learn.", "Learning has no age limit.", "Học không bao giờ là muộn."],
["Live and learn.", "Experience teaches us.", "Sống là học hỏi mỗi ngày."],
["Knowledge is power.", "Knowing gives you strength.", "Tri thức là sức mạnh."],
["A journey of a thousand miles begins with a single step.", "Just start.", "Hành trình vạn dặm bắt đầu từ một bước chân."],
["Don't put off until tomorrow what you can do today.", "Don't procrastinate.", "Việc hôm nay chớ để ngày mai."],
["Time and tide wait for no man.", "Time won't wait for you.", "Thời gian không chờ đợi ai."],
["Time is money.", "Time is valuable.", "Thời gian là vàng bạc."],
["Strike while the iron is hot.", "Act at the right moment.", "Rèn sắt khi còn nóng."],
["Two heads are better than one.", "Working together helps.", "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao."],
["Look before you leap.", "Think before you act.", "Cẩn tắc vô áy náy."],
["Learn to walk before you run.", "Master the basics first.", "Phải biết đi trước khi chạy."],
["Prevention is better than cure.", "Avoid problems early.", "Phòng bệnh hơn chữa bệnh."],
["An apple a day keeps the doctor away.", "Healthy habits protect you.", "Mỗi ngày một quả táo, không cần gặp bác sĩ."],
["Health is better than wealth.", "Health matters most.", "Sức khỏe là vàng."],
["Laughter is the best medicine.", "Joy heals.", "Một nụ cười bằng mười thang thuốc bổ."],
["Good medicine tastes bitter.", "Helpful things can be unpleasant.", "Thuốc đắng dã tật."],
["First, do no harm.", "The first duty of care.", "Trước hết, không gây hại."],
["Where there's life, there's hope.", "Never give up.", "Còn nước còn tát."],
["After rain comes sunshine.", "Hard times pass.", "Sau cơn mưa trời lại sáng."],
["Early to bed and early to rise makes a man healthy, wealthy and wise.", "A good routine pays off.", "Ngủ sớm dậy sớm giúp ta khỏe mạnh, sung túc và sáng suốt."],
["Honesty is the best policy.", "Always be truthful.", "Thật thà là cha quỷ quái."],
["When in Rome, do as the Romans do.", "Adapt to local customs.", "Nhập gia tùy tục."],
["Practise what you preach.", "Do what you advise others to do.", "Nói phải đi đôi với làm."],
["A friend in need is a friend indeed.", "True friends help in hard times.", "Hoạn nạn mới biết bạn hiền."],
["Fortune favours the brave.", "Courage brings luck.", "May mắn mỉm cười với người dũng cảm."],
["The pen is mightier than the sword.", "Ideas are stronger than force.", "Ngòi bút mạnh hơn gươm giáo."],
["Don't judge a book by its cover.", "Look deeper than appearances.", "Đừng trông mặt mà bắt hình dong."],
["You never know what you can do till you try.", "Try it and see.", "Chưa thử sao biết mình làm được."],
["Nothing is impossible to a willing heart.", "A strong will overcomes all.", "Không có việc gì khó, chỉ sợ lòng không bền."],
["Hard work pays off.", "Effort is rewarded.", "Siêng năng ắt thành công."],
["Keep your chin up.", "Stay positive.", "Ngẩng cao đầu, đừng nản lòng."],
["Hang in there.", "Don't give up.", "Cố lên, đừng bỏ cuộc."],
["Break a leg!", "Good luck, for example before a test.", "Chúc may mắn nhé!"],
["The sky's the limit.", "There are no limits.", "Không gì là giới hạn."],
["Go the extra mile.", "Do more than expected.", "Nỗ lực hơn cả mong đợi."],
["Hit the books.", "Study hard.", "Chăm chỉ học bài."],
["Burn the midnight oil.", "Study or work late into the night.", "Thức khuya học tập."],
["Every little helps.", "Small contributions matter.", "Mỗi chút đều có ích."],
["Learn from your mistakes.", "Use errors to grow.", "Học từ chính sai lầm của mình."],
["Practice is the best of all instructors.", "Practice teaches best.", "Thực hành là người thầy giỏi nhất."],
["Seeing is believing.", "Experience convinces.", "Trăm nghe không bằng một thấy."],
["Well begun is half done.", "A good start makes the rest easier.", "Đầu xuôi đuôi lọt."]
];


/* ===== file: content-curriculum.js ===== */
/* ============================================================
   v4.2 · CHƯƠNG TRÌNH HỌC THEO CHẶNG (đồng bộ bài học, thư viện từ vựng,
   ngữ pháp, phát âm, ca bệnh) và NGÂN HÀNG BÀI TẬP NGỮ PHÁP
   vocab: [mã chủ đề trong thư viện, cấp độ]
   ============================================================ */
const UNITS = [
{ id: "a1-1", track: "gen", level: "A1", code: "A1.1", icon: "👋", color: "#2e9d57", title: "First steps", vi: "Làm quen",
  goal: "Giới thiệu bản thân, gia đình, nói giờ và ngày; dùng đúng be, số nhiều và mạo từ.",
  lessons: ["G1"], grammar: ["be", "plurals", "articles", "possessives"], pron: ["th"],
  vocab: [["people", "A1"], ["core-verbs", "A1"], ["core-nouns", "A1"], ["time", "A1"], ["basics", "A1"]] },
{ id: "a1-2", track: "gen", level: "A1", code: "A1.2", icon: "🏠", color: "#3a9d6a", title: "Everyday life", vi: "Cuộc sống hằng ngày",
  goal: "Kể thói quen, hỏi và trả lời câu hỏi đơn giản về sinh hoạt, công việc, cảm xúc.",
  lessons: ["G2"], grammar: ["present-simple", "questions", "present-continuous"], pron: ["s"],
  vocab: [["core-adj", "A1"], ["daily", "A1"], ["feelings", "A1"], ["work", "A1"], ["leisure", "A1"], ["school", "A1"]] },
{ id: "a1-3", track: "gen", level: "A1", code: "A1.3", icon: "🛒", color: "#40a080", title: "Around town", vi: "Quanh thành phố",
  goal: "Gọi món, mua sắm, hỏi đường, nói về cơ thể và thời tiết.",
  lessons: ["G3", "G4"], grammar: ["there-is", "prepositions"], pron: ["silent"],
  vocab: [["food", "A1"], ["places", "A1"], ["shopping", "A1"], ["body", "A1"], ["nature", "A1"], ["tech", "A1"], ["clothes", "A1"], ["transport", "A1"]] },
{ id: "a2-1", track: "gen", level: "A2", code: "A2.1", icon: "🕰️", color: "#12908e", title: "Past and experiences", vi: "Quá khứ và trải nghiệm",
  goal: "Kể lại việc đã xảy ra, nói về trải nghiệm, dùng quá khứ đơn và hiện tại hoàn thành.",
  lessons: ["G5"], grammar: ["past-simple", "present-perfect", "past-continuous", "used-to"], pron: ["ed"],
  vocab: [["core-verbs", "A2"], ["core-nouns", "A2"], ["people", "A2"], ["time", "A2"], ["feelings", "A2"], ["verbs", "A2"], ["basics", "A2"], ["school", "A2"]] },
{ id: "a2-2", track: "gen", level: "A2", code: "A2.2", icon: "🗺️", color: "#1a8a9a", title: "Plans and comparisons", vi: "Kế hoạch và so sánh",
  goal: "Nói dự định, so sánh, đưa lời khuyên và điều kiện có thể xảy ra.",
  lessons: ["G6"], grammar: ["future", "comparatives", "modals", "first-conditional", "quantifiers"], pron: ["syllables"],
  vocab: [["core-adj", "A2"], ["daily", "A2"], ["food", "A2"], ["places", "A2"], ["shopping", "A2"], ["body", "A2"], ["work", "A2"], ["nature", "A2"], ["tech", "A2"], ["discourse", "A2"], ["x-collocations", "A2"], ["clothes", "A2"], ["transport", "A2"], ["leisure", "A2"], ["i-environment", "A2"], ["i-health", "A2"], ["i-crime", "A2"]] },
{ id: "a2-3", track: "gen", level: "A2", code: "A2.3", icon: "🗂️", color: "#2080a8", title: "Workplace basics", vi: "Nơi làm việc cơ bản (TOEIC nền)",
  goal: "Nắm từ vựng công sở, nhân sự, tài chính, bán hàng, đặt hàng, công tác ở mức A2.",
  lessons: [], grammar: ["zero-conditional"], pron: ["spelling"],
  vocab: [["t-office", "A2"], ["t-hr", "A2"], ["t-finance", "A2"], ["t-marketing", "A2"], ["t-logistics", "A2"], ["t-travel", "A2"], ["i-education", "A2"]] },
{ id: "b1-1", track: "gen", level: "B1", code: "B1.1", icon: "💬", color: "#2f7fd8", title: "Opinions and people", vi: "Quan điểm và con người",
  goal: "Nêu ý kiến có lý do, mô tả con người và công việc; phân biệt hiện tại hoàn thành với quá khứ đơn.",
  lessons: [], grammar: ["pp-vs-past", "gerund-infinitive", "sva", "question-tags"], pron: ["stress"],
  vocab: [["core-verbs", "B1"], ["core-adj", "B1"], ["core-nouns", "B1"], ["people", "B1"], ["feelings", "B1"], ["work", "B1"], ["society", "B1"], ["discourse", "B1"], ["idioms", "B1"]] },
{ id: "b1-2", track: "gen", level: "B1", code: "B1.2", icon: "🌍", color: "#3a6fd8", title: "The world around us", vi: "Thế giới quanh ta",
  goal: "Nói và viết về môi trường, công nghệ, sức khỏe, đô thị; dùng bị động, mệnh đề quan hệ, câu tường thuật.",
  lessons: [], grammar: ["passive", "relative", "reported", "phrasal-verbs"], pron: ["clusters"],
  vocab: [["daily", "B1"], ["food", "B1"], ["time", "B1"], ["places", "B1"], ["body", "B1"], ["shopping", "B1"], ["nature", "B1"], ["tech", "B1"], ["verbs", "B1"], ["i-education", "B1"], ["i-environment", "B1"], ["i-technology", "B1"], ["i-health", "B1"], ["i-urban", "B1"], ["i-crime", "B1"], ["i-economy", "B1"], ["i-media", "B1"], ["clothes", "B1"], ["transport", "B1"], ["leisure", "B1"], ["school", "B1"]] },
{ id: "b1-3", track: "gen", level: "B1", code: "B1.3", icon: "💼", color: "#4561cf", title: "Work and exams B1", vi: "Công việc và luyện thi B1",
  goal: "Từ vựng TOEIC mức B1, họ từ và kết hợp từ; câu điều kiện loại 2 và dạng từ trong đề thi.",
  lessons: [], grammar: ["second-conditional", "word-forms", "too-enough"], pron: [],
  vocab: [["t-office", "B1"], ["t-hr", "B1"], ["t-finance", "B1"], ["t-marketing", "B1"], ["t-logistics", "B1"], ["t-travel", "B1"], ["x-families", "B1"], ["x-collocations", "B1"]] },
{ id: "b2-1", track: "gen", level: "B2", code: "B2.1", icon: "🎓", color: "#5a55d6", title: "Academic English", vi: "Tiếng Anh học thuật (IELTS, VSTEP)",
  goal: "Lập luận, so sánh ưu nhược điểm cho IELTS Writing và Speaking; từ nối tương phản, câu hỏi gián tiếp.",
  lessons: [], grammar: ["linking", "indirect-questions", "causative"], pron: [],
  vocab: [["core-verbs", "B2"], ["core-adj", "B2"], ["core-nouns", "B2"], ["academic", "B2"], ["discourse", "B2"], ["society", "B2"], ["i-education", "B2"], ["i-environment", "B2"], ["i-technology", "B2"], ["i-health", "B2"], ["i-urban", "B2"], ["i-crime", "B2"], ["i-economy", "B2"], ["i-media", "B2"]] },
{ id: "b2-2", track: "gen", level: "B2", code: "B2.2", icon: "🧩", color: "#6b4fd0", title: "Precision and range", vi: "Chính xác và đa dạng",
  goal: "Mở rộng vốn từ B2 ở mọi chủ đề và TOEIC; câu điều kiện loại 3, động từ khuyết thiếu quá khứ.",
  lessons: [], grammar: ["third-conditional", "modals-past", "future-perfect"], pron: [],
  vocab: [["people", "B2"], ["daily", "B2"], ["food", "B2"], ["time", "B2"], ["places", "B2"], ["work", "B2"], ["body", "B2"], ["feelings", "B2"], ["shopping", "B2"], ["nature", "B2"], ["tech", "B2"], ["verbs", "B2"], ["idioms", "B2"], ["t-office", "B2"], ["t-hr", "B2"], ["t-finance", "B2"], ["t-marketing", "B2"], ["t-logistics", "B2"], ["t-travel", "B2"], ["x-families", "B2"], ["x-collocations", "B2"], ["clothes", "B2"], ["transport", "B2"], ["leisure", "B2"]] },
{ id: "c1-1", track: "gen", level: "C1", code: "C1", icon: "🚀", color: "#9b3fc0", title: "Towards C1", vi: "Hướng tới C1",
  goal: "Từ vựng C1 cho học thuật và nghề nghiệp. Học sau khi đã vững B2.",
  lessons: [], grammar: ["mixed-conditionals", "inversion", "participle-clauses", "cleft-sentences"], pron: [],
  vocab: [["work", "C1"], ["feelings", "C1"], ["nature", "C1"], ["tech", "C1"], ["society", "C1"], ["verbs", "C1"], ["academic", "C1"], ["discourse", "C1"], ["idioms", "C1"], ["transport", "C1"], ["core-verbs", "C1"], ["core-adj", "C1"], ["core-nouns", "C1"], ["i-urban", "C1"]] },
{ id: "bk-1", track: "med", level: "T1", code: "M1", icon: "🧬", color: "#7b4bb7", title: "Introduction to Molecular Biology, Biochemistry, Genetics and the Cell", vi: "Nhập môn sinh học phân tử, hóa sinh, di truyền học và tế bào",
  goal: "Sau bài học, bạn có thể phân biệt sinh học phân tử, hóa sinh và di truyền học, gọi tên các bào quan chính cùng chức năng, và giải thích bằng tiếng Anh cách tế bào thu nhận năng lượng và đáp ứng với kích thích.",
  lessons: [], grammar: ["relative"], pron: ["medical"], cases: [],
  vocab: [["bk-molecular-cell", "T1"], ["bk-molecular-cell", "T2"]] },
{ id: "bk-2", track: "med", level: "T1", code: "M2", icon: "🧪", color: "#7b5ea7", title: "Basic Genetic Mechanisms and Cells in Their Social Context", vi: "Cơ chế di truyền cơ bản và tế bào trong bối cảnh xã hội",
  goal: "Sau bài này, bạn có thể mô tả bằng tiếng Anh sự sao chép, sửa chữa và phiên mã ADN, cũng như các khái niệm cơ bản về ung thư và tế bào gốc.",
  lessons: [], grammar: ["passive"], pron: [], cases: [],
  vocab: [["bk-genes-tissues", "T1"], ["bk-genes-tissues", "T2"]] },
{ id: "bk-3", track: "med", level: "T1", code: "M3", icon: "🩹", color: "#d98a6a", title: "The Skin (Integumentary System)", vi: "Da và hệ bì",
  goal: "Sau bài học, bạn gọi tên và mô tả được các lớp da, tóc, móng, tuyến bã và tuyến mồ hôi, nêu được chức năng của da và đọc hiểu, trình bày bằng tiếng Anh về các bệnh và tổn thương da thường gặp.",
  lessons: [], grammar: ["relative"], pron: [], cases: [],
  vocab: [["bk-skin", "T1"], ["bk-skin", "T2"]] },
{ id: "bk-4", track: "med", level: "T1", code: "M4", icon: "🦴", color: "#8d7b68", title: "The Skeletal System", vi: "Hệ xương",
  goal: "Sau bài này bạn gọi tên và mô tả được các xương chính, tế bào và mô xương, sụn, khớp, chức năng của bộ xương và một số rối loạn thường gặp bằng tiếng Anh y khoa.",
  lessons: [], grammar: ["passive"], pron: [], cases: [],
  vocab: [["bk-skeleton", "T1"], ["bk-skeleton", "T2"]] },
{ id: "bk-5", track: "med", level: "T1", code: "M5", icon: "💪", color: "#c0392b", title: "The Muscular System", vi: "Hệ cơ",
  goal: "Sau bài này bạn gọi tên và mô tả được ba loại cơ, cơ chế co cơ, cách đặt tên cơ và chức năng của hệ cơ bằng tiếng Anh. Bạn cũng đọc hiểu được các rối loạn cơ thường gặp như nhược cơ, loạn dưỡng cơ, Parkinson và uốn ván.",
  lessons: [], grammar: ["word-forms"], pron: [], cases: [],
  vocab: [["bk-muscle", "T1"], ["bk-muscle", "T2"]] },
{ id: "bk-6", track: "med", level: "T1", code: "M6", icon: "🩸", color: "#c62828", title: "Blood, Immunity and Blood Disorders", vi: "Máu, miễn dịch và các rối loạn về máu",
  goal: "Sau bài này bạn có thể mô tả thành phần và chức năng của máu, giải thích cách hệ miễn dịch và hệ bạch huyết bảo vệ cơ thể, và dùng đúng thuật ngữ khi nói về thiếu máu, bệnh bạch cầu và bệnh ưa chảy máu bằng tiếng Anh.",
  lessons: [], grammar: ["passive", "relative"], pron: [], cases: [],
  vocab: [["bk-blood", "T1"], ["bk-blood", "T2"]] },
{ id: "m-1", track: "med", level: "T1", code: "L1", icon: "🧍", color: "#0a8f78", title: "Symptoms and the body", vi: "Triệu chứng và cơ thể",
  goal: "Mô tả triệu chứng; gọi tên vùng cơ thể, xương, cơ và thuật ngữ định hướng.",
  lessons: ["M1"], grammar: ["present-continuous"], pron: ["medical"], cases: [],
  vocab: [["a-regions", "T1"], ["a-skeleton", "T1"], ["a-muscles", "T1"], ["c-signs", "T1"]] },
{ id: "m-2", track: "med", level: "T1", code: "L2", icon: "🫀", color: "#0f8a70", title: "Organs and systems", vi: "Cơ quan và hệ cơ quan",
  goal: "Ghép và hiểu thuật ngữ; tên cơ quan của các hệ tim mạch, hô hấp, tiêu hóa, thần kinh, tiết niệu, nội tiết, giác quan.",
  lessons: ["M5"], grammar: ["relative"], pron: [], cases: [],
  vocab: [["a-cardio", "T1"], ["a-resp", "T1"], ["a-gi", "T1"], ["a-neuro", "T1"], ["a-uro", "T1"], ["a-endo", "T1"], ["a-senses", "T1"]] },
{ id: "m-3", track: "med", level: "T1", code: "L3", icon: "🩺", color: "#13866d", title: "Taking a history", vi: "Hỏi bệnh sử",
  goal: "Mở đầu buổi khám, hỏi khởi phát và thời gian; từ vựng sinh lý và thăm khám.",
  lessons: ["M2", "M3"], grammar: ["questions", "pp-vs-past", "indirect-questions"], pron: [], cases: ["C1", "C4", "C8"],
  vocab: [["p-core", "T1"], ["p-circ", "T1"], ["p-systems", "T1"], ["c-exam", "T1"]] },
{ id: "m-4", track: "med", level: "T1", code: "L4", icon: "🔬", color: "#18806a", title: "Pain and pathology", vi: "Cơn đau và bệnh học",
  goal: "Khai thác cơn đau theo SOCRATES; từ vựng bệnh học đại cương, nhiễm trùng, bệnh theo hệ cơ quan.",
  lessons: ["M4"], grammar: ["past-continuous"], pron: [], cases: ["C2", "C7", "C9", "C12"],
  vocab: [["d-general", "T1"], ["d-infect", "T1"], ["d-systems", "T1"]] },
{ id: "m-5", track: "med", level: "T1", code: "L5", icon: "💊", color: "#1d7a66", title: "Explaining and advising", vi: "Giải thích và dặn dò",
  goal: "Dặn thuốc, khuyên, kiểm tra hiểu (teach-back); điều trị, triệu chứng và xét nghiệm mở rộng.",
  lessons: ["M6"], grammar: ["modals", "first-conditional"], pron: [], cases: ["C3", "C5", "C6", "C10", "C11", "C13"],
  vocab: [["c-treat", "T1"], ["c-signs", "T2"], ["c-exam", "T2"]] },
{ id: "m-6", track: "med", level: "T2", code: "L6", icon: "📚", color: "#227462", title: "Extended terminology", vi: "Thuật ngữ mở rộng",
  goal: "Thuật ngữ giải phẫu, sinh lý, bệnh học mức mở rộng để đọc tài liệu chuyên ngành.",
  lessons: [], grammar: ["passive", "word-forms"], pron: [], cases: [],
  vocab: [["a-regions", "T2"], ["a-skeleton", "T2"], ["a-muscles", "T2"], ["a-cardio", "T2"], ["a-resp", "T2"], ["a-gi", "T2"], ["a-neuro", "T2"], ["a-uro", "T2"], ["a-endo", "T2"], ["a-senses", "T2"], ["p-core", "T2"], ["p-circ", "T2"], ["p-systems", "T2"], ["d-general", "T2"], ["d-infect", "T2"], ["d-systems", "T2"], ["c-treat", "T2"]] }
];

/* ------------------------------------------------------------
   NGÂN HÀNG BÀI TẬP NGỮ PHÁP. Dạng câu:
   c|câu có ___|lựa chọn 1 / lựa chọn 2 / …|chỉ số đúng|giải thích      (chọn đáp án)
   x|lời nhắc|câu 1 / câu 2 / câu 3|chỉ số đúng|giải thích             (chọn câu đúng)
   t|câu có ___ (gợi ý)|đáp án 1;đáp án 2|giải thích                   (điền dạng đúng)
   f|câu có một lỗi|từ sai|sửa thành|giải thích                         (tìm lỗi sai)
   o|câu đúng hoàn chỉnh|giải thích                                    (sắp xếp câu)
   ------------------------------------------------------------ */
const GRAMMAR_BANK = {
be: `c|My brother ___ a doctor.|am / is / are|1|He, she, it và danh từ số ít đi với is.
c|They ___ very busy today.|is / are / be|1|They đi với are.
c|I ___ from Da Nang.|am / is / are|0|I đi với am.
c|___ you a student?|Is / Are / Am|1|Câu hỏi với you: Are you …?
t|She ___ (not / be) at home now.|isn't;is not;'s not|Phủ định: is not, viết tắt isn't.
t|We ___ (be) tired after the night shift.|are;'re|We đi với are.
x|Chọn câu đúng|She very tired. / She is very tired. / She are very tired.|1|Trước tính từ phải có be.
x|Chọn câu đúng|I am agree with you. / I agree with you. / I agreeing with you.|1|agree đã là động từ, không thêm be.
f|The patients is in room three.|is|are|Chủ ngữ số nhiều dùng are.
o|Where are you from?|Câu hỏi: từ để hỏi + be + chủ ngữ.`,
"present-simple": `c|The patient ___ two tablets a day.|take / takes / taking|1|The patient = he/she nên dùng takes.
c|___ your father work at weekends?|Do / Does / Is|1|Your father là ngôi thứ ba số ít: Does.
c|She never ___ coffee in the evening.|drink / drinks / drinking|1|She + drinks; never đứng trước động từ.
c|My parents ___ in Hue.|live / lives / living|0|Chủ ngữ số nhiều: live.
t|He ___ (watch) TV every evening.|watches|Động từ tận cùng -ch thêm -es.
t|She ___ (not / smoke).|doesn't smoke;does not smoke|Phủ định ngôi thứ ba: doesn't + động từ nguyên mẫu.
t|___ it hurt when you walk?|Does|Câu hỏi với it: Does.
x|Chọn câu đúng|Does she smokes? / Does she smoke? / Do she smoke?|1|Sau does dùng động từ nguyên mẫu.
f|He work at the hospital every day.|work|works|Ngôi thứ ba số ít cần -s.
o|How often do you exercise?|How often + do + chủ ngữ + động từ.`,
plurals: `c|Can you give me some ___?|advice / advices / an advice|0|advice không đếm được.
c|There are five ___ in the waiting room.|person / people / peoples|1|Số nhiều của person là people.
c|How ___ water do you drink a day?|many / much / a few|1|water không đếm được nên dùng much.
c|I have a ___ questions.|few / little / much|0|questions đếm được nên dùng a few.
c|There isn't ___ milk in the fridge.|many / much / few|1|milk không đếm được nên dùng much.
t|I have two ___ (child).|children|Số nhiều bất quy tắc: child → children.
t|Brush your ___ (tooth) twice a day.|teeth|tooth → teeth.
x|Chọn câu đúng|I need some informations. / I need some information. / I need an information.|1|information không đếm được.
x|Chọn câu đúng|three patient / three patients / three patientes|1|Số nhiều thêm -s.
f|We bought new furnitures for the clinic.|furnitures|furniture|furniture không đếm được.`,
articles: `c|She is ___ engineer.|a / an / the|1|engineer bắt đầu bằng âm nguyên âm.
c|In general, ___ exercise is good for you.|The / An / (không mạo từ)|2|Nói chung chung: không mạo từ.
c|I saw ___ doctor yesterday. ___ doctor was very kind.|a … The / an … The / a … An|0|Lần đầu nhắc dùng a, lần sau dùng the.
c|What ___ useful idea!|a / an / the|0|useful bắt đầu bằng âm /j/ (phụ âm) nên dùng a; trong câu cảm thán What a …! không dùng the.
c|It takes ___ hour to get there.|a / an / the|1|hour bắt đầu bằng âm nguyên âm (h câm).
c|The window is closed but the door is open. Can you close ___ door, please?|a / an / the|2|Cánh cửa cụ thể mà cả hai đều biết.
t|She has ___ X-ray this afternoon.|an|X-ray đọc bắt đầu bằng âm /e/.
x|Chọn câu đúng (nói về cuộc sống nói chung)|The life is hard. / Life is hard. / A life is hard.|1|Nói chung chung không dùng the.
f|My sister is nurse.|nurse|a nurse|Nghề nghiệp cần a hoặc an.
f|I usually have the breakfast at seven.|the|(bỏ the)|Không dùng the trước bữa ăn nói chung.`,
"there-is": `c|___ any toilets on this floor?|Is there / Are there / Have|1|toilets số nhiều: Are there.
c|There ___ a pharmacy near the station.|is / are / have|0|a pharmacy số ít: There is.
c|There ___ two lifts in this building.|is / are / be|1|Số nhiều: There are.
c|There isn't ___ milk left.|some / any / a|1|Câu phủ định dùng any.
t|___ there a bank near here?|Is|Câu hỏi số ít: Is there …?
t|There ___ (not / be) any beds available.|aren't;are not;'re not|Số nhiều phủ định: aren't.
x|Chọn câu đúng|Have a café in the hospital? / Is there a café in the hospital? / There is a café in the hospital have?|1|Không dịch “có” thành have.
x|Chọn câu đúng|There is many people here. / There are many people here. / There have many people here.|1|Số nhiều dùng are.
f|There are a problem with my phone.|are|is|a problem là số ít.
o|Is there a pharmacy near here?|Is there + danh từ số ít?`,
questions: `x|Chọn câu đúng|What you are doing? / What are you doing? / What doing you?|1|Đảo are lên trước you.
x|Chọn câu đúng|How often you exercise? / How often do you exercise? / How often exercise you?|1|Cần trợ động từ do.
c|Where ___ it hurt?|do / does / is|1|it là ngôi thứ ba số ít: does.
c|A: When ___ the pain start? B: Two days ago.|did / does / was|0|Quá khứ: did + động từ nguyên mẫu.
c|How long ___ you had the cough?|do / have / did|1|How long have you had …?
t|___ you take any medicine yesterday?|Did|Câu hỏi quá khứ: Did.
t|What ___ (be) your name?|is;'s|What is your name?
f|Where you live?|you|do you|Thiếu trợ động từ do.
o|What does the pain feel like?|Từ để hỏi + does + chủ ngữ + động từ.
o|How long have you had the cough?|Hỏi thời gian kéo dài: How long have you had …?`,
prepositions: `c|I was born ___ 2003.|on / in / at|1|Năm dùng in.
c|The X-ray department is ___ the second floor.|in / at / on|2|Tầng dùng on.
c|The appointment is ___ 9 am.|in / on / at|2|Giờ dùng at.
c|See you ___ Monday.|in / on / at|1|Ngày trong tuần dùng on.
c|She's allergic ___ penicillin.|with / to / of|1|allergic to.
c|I'm interested ___ cardiology.|on / in / at|1|interested in.
t|It depends ___ the results.|on|depend on.
t|He is married ___ a nurse.|to|married to.
f|We discussed about the plan.|about|(bỏ about)|discuss không cần about.
x|Chọn câu đúng|I'm good in English. / I'm good at English. / I'm good on English.|1|good at.`,
"past-simple": `c|The pain ___ two days ago.|start / started / has started|1|Có mốc two days ago: quá khứ đơn.
c|I ___ breakfast yesterday.|don't have / didn't have / didn't had|1|didn't + nguyên mẫu.
c|We ___ to the beach last weekend.|go / went / gone|1|go → went.
c|___ you see the doctor yesterday?|Do / Did / Have|1|Câu hỏi quá khứ: Did.
t|She ___ (buy) some medicine at the pharmacy.|bought|buy → bought.
t|He ___ (feel) dizzy this morning.|felt|feel → felt.
t|They ___ (not / come) to the meeting.|didn't come;did not come|Phủ định: didn't + nguyên mẫu.
t|I ___ (study) until midnight last night.|studied|study → studied (y → ied).
x|Chọn câu đúng|Yesterday I go to work. / Yesterday I went to work. / Yesterday I goes to work.|1|Có yesterday vẫn phải chia quá khứ.
x|Chọn câu đúng|Did you went out? / Did you go out? / Did you goed out?|1|Sau did dùng nguyên mẫu.
f|She visit her grandparents last Sunday.|visit|visited|Có last Sunday: quá khứ đơn.
o|When did the pain start?|When + did + chủ ngữ + nguyên mẫu.`,
future: `c|Look at those clouds. It ___ rain.|is going to / will to / rains|0|Có dấu hiệu ở hiện tại: going to.
c|The phone is ringing. I ___ answer it.|'ll / will to / going to|0|Quyết định ngay lúc nói: will.
c|I ___ my dentist at 3 pm tomorrow. It's booked.|saw / am seeing / will to see|1|Lịch hẹn đã sắp xếp: hiện tại tiếp diễn.
c|We ___ study medicine next year. We've already applied.|are going to / is going to / will to|0|Đã nộp đơn rồi nên đây là kế hoạch có sẵn: be going to. Chủ ngữ We đi với are.
c|I think it ___ be sunny tomorrow.|will / is / going|0|Dự đoán theo ý kiến: will.
t|I ___ (call) you back in five minutes, I promise.|will call;'ll call|Lời hứa: will.
t|She ___ (not / come) to the party.|won't come;will not come;isn't going to come;is not going to come|Phủ định tương lai.
t|What ___ you going to do this weekend?|are|What are you going to do …?
x|Chọn câu đúng|I will to go to Hanoi. / I will go to Hanoi. / I will going to Hanoi.|1|Sau will không có to.
x|Chọn câu đúng|Tomorrow I go to the clinic at 8. / I'm going to the clinic tomorrow at 8. / I going to the clinic tomorrow.|1|Kế hoạch đã định: hiện tại tiếp diễn.
f|He is going to visits his parents.|visits|visit|Sau going to dùng nguyên mẫu.
o|Are you going to take the exam?|Câu hỏi: be + chủ ngữ + going to + V.`,
comparatives: `c|Today I feel ___ than yesterday.|good / better / more good|1|good → better.
c|This is the ___ hospital in the city.|bigger / biggest / most big|1|So sánh nhất: the biggest.
c|The new drug is ___ than the old one.|effectiver / more effective / most effective|1|Tính từ dài: more … than.
c|My pain is ___ at night than during the day.|bad / worse / worst|1|bad → worse.
c|The exam was not as ___ as I expected.|hard / harder / hardest|0|as … as dùng tính từ nguyên dạng.
t|Hanoi is ___ (cold) than Ho Chi Minh City in winter.|colder|Tính từ ngắn: -er.
t|This is the ___ (difficult) exam I've ever taken.|most difficult|Tính từ dài, so sánh nhất: the most.
t|Walking is ___ (healthy) than driving.|healthier|y → ier.
x|Chọn câu đúng|It's more better now. / It's much better now. / It's more good now.|1|Nhấn mạnh so sánh hơn dùng much.
x|Chọn câu đúng|She is taller than me. / She is more tall than me. / She is tallest than me.|0|Tính từ ngắn: taller than.
f|He is the most tallest student in the class.|most|(bỏ most)|tallest đã là so sánh nhất.
o|This treatment is more effective than that one.|more + tính từ dài + than.`,
"present-perfect": `c|She ___ in this hospital since 2019.|works / has worked / worked|1|since + mốc, kéo dài đến nay.
c|I ___ my keys. I can't find them.|have lost / has lost / have losed|0|Kết quả còn ở hiện tại.
c|___ you ever had surgery?|Did / Have / Were|1|Trải nghiệm: Have you ever …?
c|I haven't finished my report ___.|yet / already / just|0|yet trong câu phủ định và câu hỏi.
c|He has ___ left. You only missed him by a minute.|yet / just / ever|1|just: vừa mới.
t|I ___ (know) him for ten years.|have known;'ve known|for + khoảng thời gian, kéo dài đến nay.
t|She ___ (never / be) to Japan.|has never been;'s never been|Trải nghiệm: has never been.
t|How long ___ you had this cough?|have|How long have you had …?
x|Chọn câu đúng|I live here since 2020. / I have lived here since 2020. / I am living here since 2020.|1|Kéo dài đến nay: hiện tại hoàn thành.
x|Chọn câu đúng|I have seen him yesterday. / I saw him yesterday. / I have saw him yesterday.|1|Có mốc quá khứ cụ thể: quá khứ đơn.
f|We have already ate lunch.|ate|eaten|have + quá khứ phân từ.
o|Have you ever been to London?|Have + chủ ngữ + ever + V3.`,
modals: `c|You ___ drink alcohol with this medicine. It's dangerous.|mustn't / don't have to / should|0|Cấm vì nguy hiểm: mustn't.
c|It's free. You ___ pay.|mustn't / don't have to / can't|1|Không cần: don't have to.
c|You look tired. You ___ go to bed early.|should / must to / have|0|Lời khuyên: should.
c|In Vietnam, drivers ___ drive on the right.|have to / might / must to|0|Quy định: have to.
c|She ___ speak three languages.|can / cans / can to|0|Động từ khuyết thiếu không thêm -s, không có to.
c|It ___ rain later, so take an umbrella.|might / must / should to|0|Khả năng: might.
t|You ___ (should / rest) for a few days.|should rest|should + nguyên mẫu.
t|Nurses ___ (have to / wear) a uniform at work.|have to wear|have to + nguyên mẫu.
t|He ___ (not / have to / work) on Sundays.|doesn't have to work;does not have to work|Ngôi thứ ba: doesn't have to.
x|Chọn câu đúng|You must to take it. / You must take it. / You must taking it.|1|Không có to sau must.
x|Chọn câu đúng|She cans come. / She can come. / She can comes.|1|can không đổi theo ngôi.
f|He has to wearing a mask in the ward.|wearing|wear|have to + nguyên mẫu.`,
"first-conditional": `c|If it ___ tomorrow, we will stay at home.|will rain / rains / rained|1|Mệnh đề if dùng hiện tại đơn.
c|If you take this medicine, you ___ better soon.|will feel / feeling / felt|0|Mệnh đề chính dùng will.
c|___ you don't hurry, you will miss the bus.|If / Unless / Despite|0|If + phủ định.
c|You won't pass ___ you study.|if / unless / when|1|unless = if not.
c|If you ___ enough water, you'll get a headache.|don't drink / won't drink / didn't drink|0|Mệnh đề if: hiện tại đơn.
t|If the pain ___ (get) worse, come back straight away.|gets|Mệnh đề if, ngôi thứ ba: gets.
t|If she ___ (not / eat), she will feel dizzy.|doesn't eat;does not eat|Hiện tại đơn phủ định.
t|I ___ (call) you if I hear any news.|will call;'ll call|Mệnh đề chính: will.
x|Chọn câu đúng|If you will take it with food, it helps. / If you take it with food, it will help. / If you took it with food, it will help.|1|Không dùng will sau if.
x|Chọn câu đúng|If I will see him, I tell him. / If I see him, I will tell him. / If I see him, I told him.|1|If + hiện tại, will + nguyên mẫu.
f|If he will come early, we will start the meeting.|will|(bỏ will: If he comes)|Mệnh đề if không dùng will.
o|If the pain gets worse, call us.|If + hiện tại, mệnh lệnh.`,
"gerund-infinitive": `c|You should give up ___.|smoke / to smoke / smoking|2|give up + V-ing (không dùng to + động từ).
c|We plan ___ a new clinic.|opening / to open / open|1|plan + to V.
c|She enjoys ___ in the morning.|to run / running / run|1|enjoy + V-ing.
c|I decided ___ medicine.|studying / to study / study|1|decide + to V.
c|Avoid ___ heavy things.|to lift / lifting / lift|1|avoid + V-ing.
c|He refused ___ the form.|signing / to sign / sign|1|refuse + to V.
c|Would you mind ___ the window?|to open / opening / open|1|mind + V-ing.
t|I'm interested in ___ (learn) English.|learning|Sau giới từ dùng V-ing.
t|She agreed ___ (help) us.|to help|agree + to V.
t|Don't forget ___ (take) your tablets.|to take|forget to do: quên làm việc cần làm.
t|I hope ___ (become) a surgeon.|to become|hope + to V.
x|Chọn câu đúng|I look forward to meet you. / I look forward to meeting you. / I look forward meet you.|1|to ở đây là giới từ, sau nó dùng V-ing.
x|Chọn câu đúng|He suggested to go home. / He suggested going home. / He suggested go home.|1|suggest + V-ing.
f|Thank you for help me.|help|helping|Sau for dùng V-ing.`,
"pp-vs-past": `c|I ___ him since we were students.|knew / have known / know|1|since + mốc, kéo dài đến nay.
c|She ___ to Japan in 2022.|has gone / went / goes|1|Năm cụ thể: quá khứ đơn.
c|The pain started three days ___.|ago / since / for|0|cách đây: ago.
c|I've had this cough ___ Monday.|for / since / ago|1|Mốc thời gian: since.
c|He has worked here ___ ten years.|since / for / ago|1|Khoảng thời gian: for.
c|When ___ you arrive?|have / did / has|1|When hỏi thời điểm: quá khứ đơn.
t|I ___ (see) that film last week.|saw|last week: quá khứ đơn.
t|She ___ (be) a nurse since 2018.|has been;'s been|since + mốc: hiện tại hoàn thành.
t|They ___ (not / finish) the project yet.|haven't finished;have not finished|yet: hiện tại hoàn thành.
t|Have you ever ___ (try) Vietnamese coffee?|tried|Have + V3.
x|Chọn câu đúng|I have visited Hue in 2020. / I visited Hue in 2020. / I was visit Hue in 2020.|1|Có năm cụ thể: quá khứ đơn.
x|Chọn câu đúng|How long do you have it? / How long have you had it? / How long did you have it now?|1|“Bao lâu rồi”: hiện tại hoàn thành.
f|I have finished my exam yesterday.|have|(bỏ have: I finished)|Có yesterday: quá khứ đơn.
o|How long have you worked here?|How long + have + chủ ngữ + V3.`,
passive: `c|The new hospital ___ in 2025.|built / was built / is building|1|Bệnh viện được xây: bị động quá khứ.
c|All applications must ___ by Friday.|submit / be submitted / submitted|1|must + be + V3.
c|The results ___ tomorrow.|will send / will be sent / are sending|1|Tương lai bị động: will be + V3.
c|English ___ all over the world.|speaks / is spoken / is speaking|1|Bị động hiện tại: is + V3.
c|The patient ___ to the ward an hour ago.|was taken / took / has taken|0|Bị động quá khứ.
c|The room ___ at the moment.|is being cleaned / is cleaning / cleans|0|Đang được làm: is being + V3.
t|The report ___ (write) by the head nurse last week.|was written|Bị động quá khứ: was + V3.
t|Blood samples ___ (take) every morning.|are taken|Bị động hiện tại, số nhiều.
t|The meeting has ___ (cancel).|been cancelled;been canceled|Hiện tại hoàn thành bị động: has been + V3.
t|This drug ___ (should not / give) to children.|should not be given;shouldn't be given|should not + be + V3.
x|Chọn câu đúng|The sample sent to the lab. / The sample was sent to the lab. / The sample was send to the lab.|1|Bị động cần be + V3.
x|Chọn câu đúng|The meeting was cancel. / The meeting was cancelled. / The meeting cancelled was.|1|Sau be dùng V3.
f|The letter was wrote by the director.|wrote|written|was + V3.
o|The patient was admitted last night.|Chủ ngữ + was + V3.`,
relative: `c|The man ___ car was stolen called the police.|who / whose / which|1|Sở hữu: whose.
c|This is the clinic ___ I work.|where / which / who|0|Nơi chốn: where.
c|The doctor ___ saw me was very kind.|who / which / whose|0|Người: who.
c|The medicine ___ you gave me works well.|who / which / where|1|Vật: which.
c|My mother, ___ is a teacher, lives in Hue.|that / who / which|1|Mệnh đề có dấu phẩy không dùng that.
c|Hanoi, ___ is the capital, has many hospitals.|which / that / where|0|Vật, có dấu phẩy: which.
t|The nurse ___ looked after me was very patient.|who;that|Người: who hoặc that.
t|The book ___ I'm reading is about anatomy.|which;that|Vật: which hoặc that.
t|Do you know the patient ___ son is a doctor?|whose|Sở hữu: whose.
t|That's the reason ___ I called you.|why|the reason why.
x|Chọn câu đúng|The drug that you take it is strong. / The drug that you take is strong. / The drug who you take is strong.|1|Không lặp lại đại từ it.
x|Chọn câu đúng|My sister, that lives in Hue, is a nurse. / My sister, who lives in Hue, is a nurse. / My sister who, lives in Hue, is a nurse.|1|Có dấu phẩy: who, không dùng that.
f|The hospital which I was born is in Hanoi.|which|where|Nơi chốn: where (hoặc in which).
o|The doctor who saw me was very kind.|Mệnh đề quan hệ đứng ngay sau danh từ.`,
sva: `c|Each of the rooms ___ a window.|have / has / having|1|Each of … dùng số ít.
c|The list of names ___ on the desk.|is / are / be|0|Danh từ chính là list.
c|The number of patients ___ increasing.|is / are / were|0|The number of + số ít.
c|A number of students ___ absent today.|is / are / was|1|A number of + số nhiều.
c|Everyone ___ a role in the team.|have / has / having|1|Everyone là số ít.
c|The results of the test ___ normal.|is / are / was|1|Danh từ chính là results.
c|Neither of the answers ___ correct.|is / be / being|0|Neither of + số ít (văn trang trọng).
t|The news ___ (be) good today.|is|news không đếm được, dùng số ít.
t|My family and I ___ (live) in Da Nang.|live|Hai chủ ngữ nối bằng and: số nhiều.
t|Mathematics ___ (be) my favourite subject.|is|Tên môn học tận cùng -s vẫn là số ít.
x|Chọn câu đúng|The equipment are new. / The equipment is new. / The equipments is new.|1|equipment không đếm được.
x|Chọn câu đúng|One of my friends are a doctor. / One of my friends is a doctor. / One of my friend is a doctor.|1|One of + danh từ số nhiều + động từ số ít.
f|The patients in the ward needs more blankets.|needs|need|Danh từ chính patients là số nhiều.
f|There is many reasons for this.|is|are|reasons số nhiều.`,
reported: `c|He ___ me that he was tired.|said / told / asked|1|tell + người.
c|She said she ___ a headache.|had / have / having|0|Lùi thì: have → had.
c|He asked me where the pharmacy ___.|was / were / be|0|Lùi thì, không đảo ngữ.
c|The doctor asked if I ___ any allergies.|had / has / having|0|Lùi thì: had.
c|“I will call you,” he said. → He said he ___ call me.|would / can / calling|0|will → would.
c|She told me ___ the tablets after meals.|take / to take / taking|1|tell + người + to V.
t|“I am tired.” → She said she ___ tired.|was|am → was.
t|“Do you smoke?” → He asked me if I ___.|smoked|Lùi thì: smoke → smoked.
t|“Don't eat spicy food.” → The doctor told me not ___ spicy food.|to eat|tell + người + not to V.
t|“I can't sleep.” → He said he ___ sleep.|couldn't;could not|can → could.
x|Chọn câu đúng|She said me she was busy. / She told me she was busy. / She told she was busy.|1|tell + người; say không đi trực tiếp với người.
x|Chọn câu đúng|He asked where was the pharmacy. / He asked where the pharmacy was. / He asked where is the pharmacy.|1|Câu hỏi gián tiếp không đảo ngữ.
f|She asked me what time did the clinic open.|did|(bỏ did: what time the clinic opened)|Câu hỏi gián tiếp không dùng trợ động từ đảo.
o|She said that she felt dizzy.|said (that) + mệnh đề lùi thì.`,
"second-conditional": `c|If she ___ closer, she would walk to work.|lives / lived / would live|1|Loại 2: quá khứ đơn sau if.
c|If I ___ you, I would see a doctor.|am / were / would be|1|If I were you.
c|What would you do if you ___ the lottery?|win / won / will win|1|Quá khứ đơn sau if.
c|If I had more time, I ___ more.|study / will study / would study|2|Mệnh đề chính: would + V.
c|He ___ healthier if he stopped smoking.|will be / would be / is|1|would + V.
c|If we ___ a car, we could visit you more often.|have / had / would have|1|Quá khứ đơn sau if.
c|I would travel more if I ___ so busy.|am not / weren't / won't be|1|Quá khứ đơn phủ định.
t|If I ___ (know) the answer, I would tell you.|knew|know → knew.
t|She ___ (buy) a house if she had enough money.|would buy;'d buy|would + V.
t|If it ___ (not / rain), we would go to the park.|didn't rain;did not rain|Quá khứ đơn phủ định.
x|Chọn câu đúng|If I would have time, I would help. / If I had time, I would help. / If I have time, I would help.|1|Không dùng would sau if.
x|Chọn câu đúng|If I was you, I will rest. / If I were you, I would rest. / If I am you, I would rest.|1|If I were you, I would …
f|If he would exercise more, he would lose weight.|would|(bỏ would: If he exercised)|Mệnh đề if không dùng would.
o|If I were you, I would see a doctor.|Lời khuyên lịch sự.`,
"word-forms": `c|The new system is very ___.|effect / effective / effectively|1|Sau be và very cần tính từ.
c|Please read the instructions ___.|careful / care / carefully|2|Bổ nghĩa cho động từ: trạng từ.
c|The ___ of the committee was final.|decide / decision / decisive|1|Sau the cần danh từ.
c|She is a very ___ manager.|success / successful / successfully|1|Trước danh từ cần tính từ.
c|We need to improve our ___.|produce / productive / productivity|2|Sau our cần danh từ.
c|He drives very ___.|dangerous / dangerously / danger|1|Bổ nghĩa cho drives: trạng từ.
c|The company is looking for ___ staff.|qualify / qualification / qualified|2|Trước danh từ cần tính từ.
t|Thank you for your ___ (patient).|patience|Sau your cần danh từ: patience.
t|The ___ (employ) received a bonus.|employee;employees|Người được thuê: employee.
t|Her ___ (explain) was very clear.|explanation|Danh từ của explain: explanation.
t|The results were ___ (surprise).|surprising|Tính chất của sự vật: -ing.
x|Chọn câu đúng|a success launch / a successful launch / a successfully launch|1|Trước danh từ cần tính từ.
x|Chọn câu đúng|He speaks English very good. / He speaks English very well. / He speaks English very goodly.|1|Bổ nghĩa cho động từ: well.
f|The doctor gave me a clearly explanation.|clearly|clear|Trước danh từ cần tính từ.`,
"third-conditional": `c|If she ___ the bus, she wouldn't have been late.|caught / had caught / would catch|1|Loại 3: had + V3.
c|If he had come earlier, we ___ him sooner.|would treat / would have treated / had treated|1|would have + V3.
c|I wish I ___ harder last year.|studied / had studied / would study|1|Hối tiếc về quá khứ: wish + had V3.
c|I wish I ___ more free time now.|have / had / had had|1|Ước cho hiện tại: wish + quá khứ đơn.
c|If I ___ about the problem, I would have helped.|knew / had known / have known|1|had + V3.
c|If it hadn't rained, we ___ to the beach.|would go / would have gone / went|1|would have + V3.
c|If only I ___ to the doctor earlier!|went / had gone / would go|1|If only + had V3: tiếc về quá khứ.
c|She would have passed if she ___ so nervous.|wasn't / hadn't been / wouldn't be|1|had not been.
t|If you ___ (tell) me, I would have come.|had told|had + V3.
t|We ___ (not / miss) the flight if we had left earlier.|wouldn't have missed;would not have missed|would not have + V3.
t|I wish I ___ (not / eat) so much last night.|hadn't eaten;had not eaten|wish + had not V3.
t|If he ___ (take) his tablets, he wouldn't have got worse.|had taken|had + V3.
x|Chọn câu đúng|If I would have known, I would have told you. / If I had known, I would have told you. / If I knew, I would have told you.|1|Mệnh đề if: had + V3.
x|Chọn câu đúng|I wish I can swim. / I wish I could swim. / I wish I will swim.|1|wish + could.
f|If she had studied, she would pass the exam last year.|pass|have passed|Loại 3: would have + V3.
o|If I had known, I would have come.|If + had V3, would have V3.`,
"modals-past": `c|The lights are off. They ___ gone home.|must have / needn't have / can have|0|Suy đoán chắc chắn: must have.
c|You ___ told me earlier! Now it's too late.|must have / should have / might|1|Lẽ ra nên: should have.
c|She ___ have taken the wrong bus. She's never late.|might / should / must to|0|Có thể đã: might have.
c|He ___ have seen me. I was hiding.|can't / must / should|0|Không thể nào đã: can't have.
c|I ___ have locked the door, but I'm not sure.|might / must / should to|0|Không chắc: might have.
c|We ___ have booked a table. The restaurant is full.|should / must / can|0|Tiếc nuối: should have.
c|The ground is wet. It ___ have rained last night.|must / should / can|0|Suy luận có căn cứ: must have.
c|You ___ have come. The meeting was cancelled.|needn't / mustn't / can|0|needn't have: đã làm nhưng hóa ra không cần.
t|He ___ (should / call) an ambulance immediately.|should have called|should have + V3.
t|She ___ (must / forget) about the appointment.|must have forgotten|must have + V3.
t|They ___ (can't / finish) already. It's too soon.|can't have finished;cannot have finished|can't have + V3.
t|I ___ (might / leave) my phone in the taxi.|might have left|might have + V3.
x|Chọn câu đúng|You should came earlier. / You should have come earlier. / You should have came earlier.|1|should have + V3.
x|Chọn câu đúng|It must be a virus yesterday. / It must have been a virus. / It must have be a virus.|1|must have been.
f|She should have went to the doctor.|went|gone|should have + V3 (gone).
o|You should have come in earlier.|should have + V3.`,
linking: `c|___ feeling tired, he finished the report.|Because / Despite / However|1|Sau chỗ trống là V-ing: despite.
c|The drug works well. ___, it can cause headaches.|Although / Despite / However|2|Đầu câu mới, có dấu phẩy: However.
c|___ it was raining, she walked to work.|Although / Despite / In spite of|0|Trước mệnh đề: although.
c|She passed the exam ___ she didn't study much.|despite / even though / however|1|even though + mệnh đề.
c|I stayed at home ___ my cough.|because / because of / although|1|because of + danh từ.
c|He is rich; ___, he is not happy.|nevertheless / because / so|0|Tương phản, trang trọng: nevertheless.
c|___ the bad weather, the flight left on time.|Although / In spite of / However|1|In spite of + danh từ.
c|Some patients improve quickly, ___ others take months.|whereas / despite / therefore|0|Đối lập hai mệnh đề: whereas.
t|___ the traffic, we arrived on time.|Despite;In spite of|+ danh từ: despite, in spite of.
t|The clinic was busy. ___, everyone was seen before noon.|However;Nevertheless|Đầu câu, tương phản.
t|I went to bed early ___ I was tired.|because;as;since|Chỉ lý do.
t|She took an umbrella so ___ she wouldn't get wet.|that|so that: để mà.
x|Chọn câu đúng|Despite it was raining, we went out. / Although it was raining, we went out. / Although of the rain, we went out.|1|despite không đi với mệnh đề.
x|Chọn câu đúng|Although it was late, but he kept working. / Although it was late, he kept working. / Despite it was late, he kept working.|1|Không dùng although và but cùng lúc.
f|Despite she was ill, she went to work.|Despite|Although|Trước mệnh đề dùng although.
o|However, it can cause side effects.|However đứng đầu câu, sau có dấu phẩy.`,
"indirect-questions": `c|Do you know what time ___?|does the bank open / the bank opens / opens the bank|1|Không đảo ngữ trong câu hỏi gián tiếp.
c|Could you tell me where ___?|is the pharmacy / the pharmacy is / does the pharmacy|1|Chủ ngữ + động từ.
c|I wonder ___ he will come.|if / that / what|0|Câu hỏi có/không: if hoặc whether.
c|Can you tell me how long ___ the pain?|have you had / you have had / did you have|1|Không đảo ngữ.
c|Do you know ___ the clinic is open on Sundays?|whether / who / what|0|whether = liệu có … không.
c|I'd like to know when ___.|did the problem start / the problem started / started the problem|1|Không dùng did đảo.
c|Could you tell me ___ you take?|what medicines / what medicines do / which do medicines|0|Không dùng trợ động từ đảo.
c|Do you remember where ___ your keys?|did you put / you put / put you|1|Chủ ngữ + động từ.
t|Could you tell me where it ___ (hurt)?|hurts|it + hurts, không đảo ngữ.
t|I was wondering if you ___ (can) help me.|could|Lịch sự: could.
t|Do you know what his name ___ (be)?|is|Chủ ngữ his name + is.
t|Can you explain how the machine ___ (work)?|works|the machine + works.
x|Chọn câu đúng|Could you tell me where does it hurt? / Could you tell me where it hurts? / Could you tell me where hurts it?|1|Không đảo ngữ.
x|Chọn câu đúng|Do you know is he a doctor? / Do you know if he is a doctor? / Do you know if is he a doctor?|1|if + chủ ngữ + động từ.
f|Can you tell me what time does the train leave?|does|(bỏ does: the train leaves)|Câu hỏi gián tiếp không dùng does đảo.
o|Could you tell me where it hurts?|Câu hỏi gián tiếp lịch sự.`,
"possessives": `c|Linh and I are sisters. ___ mother is a nurse.|Our / Ours / We|0|Trước danh từ mother cần tính từ sở hữu our.
c|This phone isn't yours. It's ___.|my / mine / me|1|Không có danh từ phía sau nên dùng đại từ sở hữu mine.
c|The nurse is checking the ___ blood pressure.|patient's / patients / patient|0|Người sở hữu một người thì thêm 's: the patient's.
c|___ bag is this? It's on my desk.|Who / Whose / Who's|1|Hỏi chủ sở hữu dùng Whose + danh từ.
t|Is this your umbrella? No, it's not ___ (I). It's Mai's.|mine|Không có danh từ phía sau nên dùng mine.
t|Look at that cat! ___ (it) fur is very soft.|its|Trước danh từ fur dùng tính từ sở hữu its.
t|These are not our seats. Those seats are ___ (they).|theirs|Không có danh từ sau nên dùng theirs.
x|Chọn câu đúng|A friend of me called. / A friend of mine called. / A friend of my called.|1|Sau of dùng đại từ sở hữu: a friend of mine.
f|The dog is wagging it's tail.|it's|its|Tính từ sở hữu là its, it's nghĩa là it is.
o|Whose coat is on the chair?|Whose + danh từ + be + vị trí.`,
"present-continuous": `c|Shh! The baby ___.|sleeps / is sleeping / sleep|1|Shh! chỉ việc đang xảy ra nên dùng is sleeping.
c|I ___ the answer to your question.|know / am knowing / knowing|0|know là động từ trạng thái, không dùng tiếp diễn.
c|Look! It ___ outside.|rains / is raining / rain|1|Look! báo hiệu việc đang xảy ra: is raining.
c|The nurse ___ the patient's temperature at the moment.|takes / is taking / take|1|At the moment đi với hiện tại tiếp diễn.
t|Look! The children ___ (swim) in the lake.|are swimming;'re swimming|swim gấp đôi m trước -ing: swimming.
t|She ___ (not / work) today. She's on holiday.|isn't working;is not working;'s not working|Phủ định: isn't + V-ing.
t|She ___ (write) a report now.|is writing;'s writing|write bỏ e trước -ing: writing.
x|Chọn câu đúng|I am wanting a glass of water. / I want a glass of water. / I wanting a glass of water.|1|want là động từ trạng thái, dùng hiện tại đơn.
f|She is make dinner now.|make|making|Sau is dùng V-ing: making.
o|The students are taking an exam now.|S + am/is/are + V-ing + now.`,
"past-continuous": `c|I ___ TV when the phone rang.|watching / was watching / am watching|1|Hành động dài đang diễn ra bị cắt ngang: was watching; watching thiếu was, am watching sai thì.
c|While the nurse ___ blood, the patient fainted.|was taking / were taking / take|0|The nurse là số ít nên dùng was taking.
c|At 8 p.m. last night, we ___ dinner.|were having / have / are having|0|Mốc giờ trong quá khứ nên dùng were having.
c|What ___ you doing at 9 o'clock yesterday?|was / were / did|1|you đi với were; did you doing là sai cấu trúc.
c|He broke his arm while he ___ down the stairs.|was running / were running / is running|0|He đi với was; is running sai thì.
t|I ___ (study) when my friend called.|was studying|Hành động đang diễn ra bị cắt ngang: was studying.
t|The patients ___ (wait) when the doctor arrived.|were waiting|Chủ ngữ số nhiều dùng were waiting.
t|At that moment, she ___ (not / listen) to the teacher. She was texting.|wasn't listening;was not listening|Đang diễn ra tại một thời điểm quá khứ nên dùng quá khứ tiếp diễn phủ định: wasn't listening.
x|Chọn câu đúng|She was cooking when the phone rang. / She cooking when the phone rang. / She were cooking when the phone rang.|0|She đi với was và cần was trước V-ing.
x|Chọn câu đúng|We was waiting for the bus. / We were waiting for the bus. / We were waited for the bus.|1|We đi với were + V-ing.
f|I was walking to work when I was seeing an accident.|was seeing|saw|Hành động ngắn chen vào dùng quá khứ đơn: saw.
o|She was sleeping when I called her.|S + was + V-ing + when + quá khứ đơn.`,
"used-to": `c|When I was a child, I ___ in a small village.|used to live / use to live / am used to live|0|Trạng thái trong quá khứ: used to + V.
c|She didn't ___ coffee, but now she drinks it every day.|used drinking / use to drink / be used to drink|1|Phủ định: didn't + use to + V (không có d, không có be).
c|I'm new here. I'm not used to ___ on the left.|drive / driving / drove|1|be used to + V-ing.
c|Did you ___ play the piano when you were young?|use to / be used to / using to|0|Câu hỏi với did dùng use to + V (không d, không be).
c|It took me months to get used to ___ night shifts.|work / working / worked|1|get used to + V-ing.
t|We ___ (use to / live) in Hue, but now we live in Hanoi.|used to live|Thói quen quá khứ khẳng định: used to + V.
t|He ___ (not / use to / smoke) in the past, but he smokes now.|didn't use to smoke;did not use to smoke;used not to smoke|Phủ định: didn't + use to + V (hoặc used not to + V, trang trọng).
t|After a few weeks, she got used to ___ (wear) the uniform.|wearing|get used to + V-ing.
x|Chọn câu đúng|I used to walking to school. / I used to walk to school. / I use to walk to school.|1|Thói quen quá khứ khẳng định: used to + V.
x|Chọn câu đúng|He is used to get up early. / He is used to getting up early. / He is use to getting up early.|1|be used to + V-ing, và be giữ nguyên used.
f|She didn't used to like fish.|used|use|Sau didn't dùng use to, không dùng used to.
o|Did you use to play football?|Did + chủ ngữ + use to + V.`,
"quantifiers": `c|We don't have ___ milk at home. Can you buy some?|some / any / many|1|Câu phủ định dùng any; many không đi với danh từ không đếm được.
c|How ___ sugar do you take in your tea?|many / few / much|2|sugar không đếm được nên hỏi bằng How much.
c|There are only ___ beds free in the ward, so we must wait.|a few / a little / much|0|beds đếm được số nhiều nên dùng a few.
c|Drink ___ water every day. Your body needs it.|many / a few / a lot of|2|water không đếm được; a lot of đi được với cả hai loại danh từ.
c|There aren't ___ chairs for all the students.|much / enough / a little|1|chairs đếm được; enough dùng được với cả hai loại, còn much và a little thì không.
t|The jar is empty. There is ___ sugar in it. (no / any)|no|Câu khẳng định với nghĩa không có gì dùng no.
t|How ___ students are there in your class? (much / many)|many|students đếm được nên dùng many.
t|We have very ___ rice left. (little / few)|little|rice không đếm được nên dùng little.
x|Chọn câu đúng|She drinks many coffee every day. / She drinks a lot of coffee every day. / She drinks a few coffee every day.|1|coffee không đếm được nên không dùng many hay a few; a lot of thì đúng.
x|Chọn câu đúng|There aren't any eggs in the fridge. / There isn't any eggs in the fridge. / There aren't some eggs in the fridge.|0|eggs số nhiều nên dùng are; câu phủ định dùng any.
f|We don't have many time before the exam.|many|much|time không đếm được nên dùng much.
o|There is a little milk in the glass.|a little đi với danh từ không đếm được như milk.`,
"zero-conditional": `c|If you heat ice, it ___.|melts / melt / to melt|0|Chủ ngữ it số ít nên động từ hiện tại đơn thêm -s.
c|If you don't drink enough water, you ___ dehydrated.|gets / get / getting|1|Chủ ngữ you đi với get; mệnh đề chính dùng hiện tại đơn.
c|When the temperature ___ below zero, water freezes.|drops / dropped / will drop|0|Câu điều kiện loại 0 dùng hiện tại đơn ở cả hai vế, không dùng will.
c|If a patient has a high fever, the nurse ___ his temperature every hour.|checks / checking / to check|0|Mệnh đề chính dùng hiện tại đơn; the nurse số ít nên thêm -s.
c|Plants ___ if they don't get any light.|dies / died / die|2|Plants số nhiều nên dùng die; thì hiện tại khớp với don't get.
t|If you ___ red and blue, you get purple. (mix)|mix|Mệnh đề if dùng hiện tại đơn; you đi với động từ nguyên mẫu.
t|If she ___ well, she feels weak all day. (not / sleep)|doesn't sleep;does not sleep|She là ngôi thứ ba số ít nên phủ định dùng doesn't + V.
t|If you press this button, the machine always ___. (start)|starts|The machine số ít nên động từ thêm -s.
x|Chọn câu đúng|If you will cool water to 0 degrees, it freezes. / If you cool water to 0 degrees, it freezes. / If you cools water to 0 degrees, it freeze.|1|Loại 0: hiện tại đơn ở cả hai vế, chia động từ đúng với chủ ngữ.
x|Chọn câu đúng|When it rains, the roads get slippery. / When it will rain, the roads get slippery. / When it rains, the roads gets slippery.|0|Mệnh đề when dùng hiện tại đơn; roads số nhiều nên dùng get.
f|If you will heat water to 100 degrees, it boils.|will heat|heat|Mệnh đề if trong câu điều kiện loại 0 dùng hiện tại đơn, không dùng will.
o|If you heat ice, it melts.|Cấu trúc: If + hiện tại đơn, hiện tại đơn.`,
"question-tags": `c|You are a nurse, ___?|aren't you / don't you / isn't you|0|Câu chính dùng are nên đuôi là aren't you.
c|She doesn't smoke, ___?|doesn't she / is she / does she|2|Câu phủ định dùng doesn't nên đuôi khẳng định does she.
c|They finished the report yesterday, ___?|didn't they / haven't they / don't they|0|Quá khứ đơn thì đuôi dùng didn't they.
c|I am late again, ___?|isn't I / aren't I / don't I|1|Với I am, đuôi chuẩn là aren't I.
c|Let's start the ward round now, ___?|will we / don't we / shall we|2|Sau Let's thì đuôi là shall we.
c|Open the window, ___?|do you / will you / are you|1|Sau câu mệnh lệnh thường dùng will you.
t|Your sister can swim, ___? (not / she)|can't she|Câu khẳng định dùng can nên đuôi là can't she.
t|He hasn't taken his medicine, ___? (he)|has he|Câu phủ định với hasn't nên đuôi khẳng định has he.
t|Your brother will come soon, ___? (not)|won't he|Câu khẳng định dùng will nên đuôi là won't he.
t|Nobody knows the answer, ___? (they)|do they;does he;does she|Nobody mang nghĩa phủ định nên đuôi khẳng định, dùng they hoặc he/she.
x|Chọn câu đúng|You like coffee, aren't you? / You like coffee, isn't it? / You like coffee, don't you?|2|Động từ chính là like nên đuôi dùng trợ động từ do.
x|Chọn câu đúng|She isn't working today, is she? / She isn't working today, isn't she? / She isn't working today, does she?|0|Câu phủ định dùng isn't nên đuôi khẳng định is she.
f|You have finished your homework, don't you?|don't you|haven't you|Câu chính dùng have (hoàn thành) nên đuôi là haven't you.
o|Let's go to the canteen, shall we?|Let's luôn đi với đuôi shall we.`,
"phrasal-verbs": `c|I can't hear the TV. Please turn it ___.|down / up / off|1|Không nghe rõ nên cần tăng âm lượng, turn it up.
c|She looks ___ her grandmother because her parents work abroad.|after / for / out|0|look after là chăm sóc; look for là tìm kiếm nên không hợp nghĩa.
c|He was offered a job, but he turned it ___ because the salary was low.|on / down / up|1|turn down là từ chối; đại từ it đứng giữa.
c|They set ___ a small clinic in the village in 2019.|off / in / up|2|set up nghĩa là thành lập.
c|My father gave ___ smoking last year because of his health.|in / out / up|2|give up nghĩa là từ bỏ một thói quen; give in là nhượng bộ.
c|I'll pick the children ___ from school at four.|down / off / up|2|pick up nghĩa là đón ai đó.
t|Here is the form. Please fill it ___. (in)|in;out|fill it in là điền vào mẫu; đại từ it đứng giữa.
t|I don't know this word. I will ___ it up in a dictionary. (look)|look|look up nghĩa là tra cứu.
t|Our flight was late, but the plane finally took ___ at nine. (off)|off|take off nghĩa là máy bay cất cánh.
t|The nurse ___ after the patients all night last night. (look)|looked;was looking|Có last night nên dùng quá khứ (looked hoặc was looking).
x|Chọn câu đúng|He gave up it last year. / He gave it up last year. / He gave last year up it.|1|Với cụm tách được, đại từ it đứng giữa: gave it up.
x|Chọn câu đúng|We ran out of milk this morning. / We ran out milk of this morning. / We ran of out milk this morning.|0|Cụm đúng là run out of + danh từ.
f|Please turn off it before you leave the room.|turn off it|turn it off|Đại từ it phải đứng giữa động từ và tiểu từ.
o|Could you turn it down, please?|Đại từ it đứng giữa turn và down.`,
"too-enough": `c|The soup is ___ hot to eat. Wait a few minutes.|too / enough / so|0|Too + adj + to V diễn tả quá mức nên không thể.
c|She isn't old ___ to drive a car.|enough / too / so|0|Enough đứng sau tính từ: old enough to V.
c|We don't have ___ chairs for all the guests.|too / enough / so|1|Enough đứng trước danh từ: enough chairs.
c|It was ___ a boring film that we left halfway.|so / such / too|1|Có a + adj + danh từ nên dùng such, không dùng so.
c|The ward was ___ noisy that the patients couldn't sleep.|such / so / too|1|so + adj + that; such cần có danh từ đi kèm.
c|There is ___ traffic in the city centre at 8 a.m., so I always take the metro.|too many / too much / too|1|Traffic là danh từ không đếm được nên dùng too much.
t|The medicine is ___ bitter that the child refuses to take it. (so / such)|so|So + adj + that; không có danh từ nên dùng so.
t|Is the room big ___ for twenty people? (too / enough)|enough|Adj + enough + for: đủ lớn.
t|There were ___ many patients in the waiting room that some had to stand. (so / too)|so|So many + danh từ + that: nhiều đến mức.
t|I can't buy this laptop. It is ___ expensive for me. (too / enough)|too|Too + adj + for + người: quá đắt đối với tôi.
x|Chọn câu đúng|She is too young to vote. / She is young too to vote. / She is enough young to vote.|0|Too đứng trước tính từ: too young to V.
x|Chọn câu đúng|He speaks English enough well to work abroad. / He speaks English well enough to work abroad. / He speaks English well too to work abroad.|1|Enough đứng sau trạng từ: well enough.
f|It was so a difficult exam that nobody finished it.|so a difficult|such a difficult|Có a + adj + danh từ thì dùng such a, không dùng so a.
o|The tea was too hot to drink.|Too + adj + to V: quá nóng nên không uống được.`,
"causative": `c|I had my blood pressure ___ at the clinic yesterday.|check / checked / checking|1|Have + vật + V3: huyết áp được đo bởi người khác.
c|The teacher made the students ___ the essay again.|to rewrite / rewrite / rewriting|1|Make + người + V nguyên mẫu, không có to.
c|She got her brother ___ her laptop.|repair / to repair / repaired|1|Get + người + to V.
c|My parents didn't let me ___ out after ten.|to stay / staying / stay|2|Let + người + V nguyên mẫu.
c|We are going to have the kitchen ___ next month.|paint / painting / painted|2|Have + vật + V3: nhờ người khác sơn.
c|The doctor had the nurse ___ the patient's temperature.|to take / take / taken|1|Have + người + V nguyên mẫu.
c|Where did you ___ your hair cut?|make / let / have|2|Have + vật + V3 (nhờ cắt tóc); make và let không mang nghĩa nhờ người khác làm giúp.
t|I need to ___ my car serviced before the trip. (have / get)|have;get|Have/get + vật + V3: đem xe đi bảo dưỡng.
t|The manager made us ___ overtime on Friday. (work)|work|Make + người + V nguyên mẫu.
t|She got the dentist ___ her tooth. (check)|to check|Get + người + to V.
t|He had his wallet ___ on the bus. (steal)|stolen|Have + vật + V3 cũng dùng cho việc không may xảy ra với mình.
x|Chọn câu đúng|She had her teeth whitened. / She had her teeth whitening. / She had whitened her teeth by a dentist.|0|Have + vật + V3 diễn tả việc người khác làm giúp.
x|Chọn câu đúng|He let his son to play outside. / He let his son played outside. / He let his son play outside.|2|Let + tân ngữ + V nguyên mẫu.
f|My mother made me to clean my room.|made me to clean|made me clean|Make + người + V nguyên mẫu, bỏ to.
o|I had my hair cut yesterday.|Have + vật + V3: đi cắt tóc ở tiệm.
o|She got him to fix the sink.|Get + người + to V: nhờ/thuyết phục ai làm gì.`,
"future-perfect": `c|By next June, I ___ my nursing degree.|finished / have finished / will have finished|2|By + mốc tương lai dùng will have V3.
c|By the time you arrive, the film ___.|started / will have started / have started|1|Việc xong trước mốc tương lai: will have V3.
c|This time tomorrow, we ___ on a beach in Da Nang.|will be lying / will have lain / lay|0|Việc đang diễn ra tại mốc tương lai dùng will be V-ing.
c|She ___ the report by 5 p.m., so you can collect it then.|will have finish / will have finished / has finishing|1|Will have + V3.
c|By 2030, scientists ___ a cure for this disease.|will have find / will have found / will found|1|Will have + V3 (found là V3 của find).
c|Don't call me at 8 tonight. I ___ dinner with my family.|will be having / will had / am have|0|Đang diễn ra tại mốc tương lai nên dùng will be V-ing.
c|By the time the ambulance gets here, the nurse ___ the bleeding.|stopped / will have stopped / will have stop|1|Xong trước mốc: will have V3; sau by the time dùng hiện tại đơn.
t|By the end of this year, I ___ here for ten years. (be)|will have been;'ll have been|Be dùng V3 là been: will have been.
t|By the time we get to the cinema, the film ___. (end)|will have ended;'ll have ended|Xong trước mốc tương lai: will have V3.
t|Next week at this time, I ___ for my IELTS exam. (sit)|will be sitting;'ll be sitting|Đang diễn ra tại mốc tương lai: will be V-ing.
t|Hurry up! The bakery ___ all its cakes by the time we get there. (sell)|will have sold;'ll have sold|Xong trước mốc tương lai: will have V3 (sold).
x|Chọn câu đúng|By next week, he will have recovered fully. / By next week, he will have recover fully. / By next week, he will has recovered fully.|0|Will have + V3.
x|Chọn câu đúng|By the time I will arrive, they will have left. / By the time I arrive, they will have left. / By the time I arrived, they will have left.|1|Sau by the time dùng hiện tại đơn cho tương lai.
f|By 2028, she will has graduated from medical school.|will has graduated|will have graduated|Sau will luôn là have, không phải has.
o|By noon, they will have finished the surgery.|By + mốc thời gian dùng will have V3.
o|I will have saved enough money by December.|Will have V3 + by December: hoàn thành trước mốc.`,
"mixed-conditionals": `c|If I had taken that job in Berlin, I ___ in Germany now.|would have lived / would be living / had lived|1|Kết quả ở hiện tại (now): would + V.
c|If she were more careful, she ___ the wrong dose last night.|wouldn't give / hadn't given / wouldn't have given|2|Last night là quá khứ: would have V3.
c|I wish I ___ medicine; I'd be a doctor by now.|have studied / had studied / would study|1|Tiếc việc quá khứ: wish + had V3.
c|If only I ___ so shy, I could talk to people easily.|am not / weren't / wouldn't been|1|Tiếc điều trái hiện tại: if only + quá khứ đơn.
c|He talks as if he ___ the director, but he is only a trainee.|would be / being / were|2|As if + were diễn tả điều không có thật ở hiện tại.
c|If the ambulance had arrived sooner, he ___ alive today.|will be / would have been / would be|2|Today chỉ hiện tại: would + V.
c|If I weren't allergic to penicillin, the doctor ___ it for me yesterday.|would prescribe / would have prescribed / had prescribed|1|Yesterday là quá khứ: would have V3.
t|If we had left earlier, we ___ stuck in traffic now. (not / be)|wouldn't be;would not be|Now là hiện tại nên dùng would + V.
t|If she were fluent in French, she ___ the job last year. (get)|would have got;would have gotten;'d have got;'d have gotten;would've got;would've gotten|Last year là quá khứ: would have V3.
t|I wish I ___ so much coffee yesterday; I can't sleep now. (not / drink)|hadn't drunk;had not drunk|Tiếc việc quá khứ: wish + had V3.
t|She spoke as though she ___ the exam already, but the results weren't out. (pass)|had passed|As though + had V3 diễn tả điều không thật ở quá khứ.
x|Chọn câu đúng|If I had listened to my doctor, I would be healthier now. / If I listened to my doctor, I would have been healthier now. / If I would listen to my doctor, I would be healthier now.|0|Quá khứ gây kết quả hiện tại: had V3, would + V.
x|Chọn câu đúng|If I was taller, I would join the police last year. / If I had been taller, I would join the police last year. / If I were taller, I would have joined the police last year.|2|Đặc điểm hiện tại, kết quả quá khứ: quá khứ đơn, would have V3.
f|If I would have saved more, I could buy a flat now.|would have saved|had saved|Mệnh đề if không dùng would; dùng had V3.
o|If I had slept more, I would feel better now.|If + had V3, would + V: kết quả ở hiện tại.
o|I wish I had accepted that offer.|Wish + had V3 diễn tả sự tiếc nuối quá khứ.`,
"inversion": `c|Never ___ such a dedicated nurse in all my years on the ward.|have I met / I have met / I met have|0|Never đứng đầu câu thì đảo trợ động từ trước chủ ngữ: have I met.
c|Hardly had the surgeon finished the operation ___ the power went out.|when / than / while|0|Hardly...when, còn no sooner...than.
c|No sooner had the patient arrived ___ the alarm sounded.|than / that / as|0|No sooner đi với than (when/that/as đều sai).
c|Not only ___ the dosage, but she also changed the schedule.|did the doctor reduce / the doctor reduced / reduced the doctor|0|Not only đầu câu: đảo với trợ động từ did + S + V nguyên mẫu.
c|Only when the results came back ___ the true cause of the problem.|did we understand / we understood / we did understand|0|Only when đầu câu: mệnh đề chính đảo ngữ (did we understand).
c|Under no circumstances ___ leave the ward without permission.|may patients / patients may / patients are|0|Under no circumstances là cụm phủ định đầu câu nên phải đảo: may patients.
c|___ I known about the delay, I would have booked an earlier flight.|Had / Would / Did|0|Đảo ngữ điều kiện loại 3: Had + S + V3 thay cho If + had.
t|Rarely ___ (we / see, present simple) such a long queue at this clinic on a Monday.|do we see|Rarely đầu câu: đảo trợ động từ do + we + see.
t|___ (had) the ambulance arrived sooner, the man would have survived.|had|Đảo ngữ điều kiện loại 3: Had + S + V3.
t|Not until the lights went out ___ (he / realise) the generator was broken.|did he realise;did he realize|Not until đầu câu: mệnh đề chính đảo ngữ với did.
t|___ (should) you experience any dizziness, stop taking the tablets.|should|Đảo ngữ điều kiện loại 1: Should + S + V.
x|Chọn câu đúng|Little did she know that the test would change her life. / Little she knew that the test would change her life. / Little knew she did that the test would change her life.|0|Little (nghĩa phủ định) đầu câu: đảo trợ động từ did she know.
x|Chọn câu đúng|Hardly had we sat down when the fire alarm rang. / Hardly we had sat down when the fire alarm rang. / Hardly had we sat down than the fire alarm rang.|0|Hardly + had + S + V3 + when; không dùng than và không bỏ đảo ngữ.
f|Not only she forgot the appointment, but she also lost the referral letter.|Not only she forgot|Not only did she forget|Sau Not only đầu câu phải đảo: did she forget.
o|Never have I seen such a calm patient.|Never đầu câu nên đảo have trước I.
o|Had I known, I would have called earlier.|Had + S + V3 là đảo ngữ điều kiện loại 3.`,
"participle-clauses": `c|___ along the corridor, the nurse heard a strange noise.|Walking / Walked / Having walk|0|Chủ ngữ the nurse tự đi, hai hành động đồng thời: V-ing.
c|___ by the heavy workload, the junior doctors asked for extra support.|Overwhelmed / Overwhelming / Having overwhelm|0|Các bác sĩ bị quá tải (nghĩa bị động): V3.
c|___ the report twice, she submitted it to the committee.|Having checked / Checked / Having been checked|0|Hành động kiểm tra xảy ra trước và cô ấy là người làm: Having + V3.
c|___ what to do, she asked a colleague for advice.|Not knowing / Knowing not / Not known|0|Phủ định mệnh đề phân từ: Not + V-ing.
c|The patients ___ in Ward 4 need to be moved tomorrow.|treated / treating / being treat|0|Rút gọn quan hệ bị động: patients (who are) treated.
c|The drug, ___ in 1998, is still widely prescribed.|first developed / first developing / having first develop|0|Thuốc được phát triển (bị động): V3.
c|The man ___ the speech is our new director.|giving / given / gave|0|Rút gọn quan hệ chủ động: the man (who is) giving.
t|___ (live) in Hanoi for ten years, she knows the city very well.|having lived;living|Hành động kéo dài trước hiện tại: Having lived (hoặc Living).
t|The documents ___ (attach) to this email contain confidential data.|attached|Tài liệu được đính kèm (bị động): attached.
t|___ (not / want) to disturb the patient, the nurse spoke quietly.|not wanting|Phủ định mệnh đề phân từ chủ động: Not wanting.
t|Once ___ (complete), the form should be returned to reception.|completed|Once + V3: biểu mẫu được hoàn thành (bị động).
x|Chọn câu đúng|Walking to the station, a car almost hit me. / Walking to the station, I was almost hit by a car. / Having walked to the station, a car almost hit me.|1|Chủ ngữ mệnh đề phân từ phải là I; hai câu còn lại bị dangling.
x|Chọn câu đúng|The students sitting at the back were talking. / The students sat at the back were talking. / The students been sitting at the back were talking.|0|Rút gọn quan hệ chủ động dùng V-ing.
f|Having been finished the shift, she went home.|Having been finished|Having finished|Cô ấy là người làm hành động nên dùng chủ động Having finished.
o|Having finished her shift, she went straight home.|Having + V3 diễn tả hành động xảy ra trước, cùng chủ ngữ she.
o|The woman standing by the door is my aunt.|standing by the door là mệnh đề quan hệ rút gọn chủ động.`,
"cleft-sentences": `c|It was the dosage ___ caused the problem, not the drug itself.|that / what / who|0|It-cleft dùng that sau phần nhấn mạnh chỉ vật; who chỉ dùng cho người.
c|___ I need right now is a quiet place to rest.|What / That / Which|0|Wh-cleft bắt đầu bằng What.
c|All she wanted ___ to go home and sleep.|was / were / has|0|All she wanted là chủ ngữ số ít, chia quá khứ: was.
c|It was not until 2019 ___ the hospital installed the new scanner.|that / what / who|0|It was not until + thời gian + that + mệnh đề.
c|It is Dr Lan ___ you should speak to about the schedule.|who / what / whose|0|Phần nhấn mạnh chỉ người: who (làm tân ngữ thì who/whom/that).
c|What annoys me most ___ the lack of communication.|is / are / do|0|What annoys me most là chủ ngữ số ít, theo sau là be: is.
c|What the patients want is ___ treated with respect.|to be / to being / been|0|Sau is trong wh-cleft dùng to V: to be treated.
t|___ (what) worries me is the cost, not the risk.|what|Wh-cleft mở đầu bằng What.
t|It was my sister ___ (who / that) first told me about this course.|who;that|It-cleft chỉ người dùng who hoặc that.
t|All you have to do ___ (be) to sign here.|is|All you have to do is (to) V: chia hiện tại số ít.
t|It was in the library ___ (that / where) I lost my notes.|that;where|It-cleft nhấn mạnh nơi chốn: that (hoặc where).
x|Chọn câu đúng|It was the nurse who noticed the error first. / It was the nurse what noticed the error first. / The nurse it was who noticed the error first.|0|It-cleft: It was + người + who + V.
x|Chọn câu đúng|What I enjoy most is working with children. / What I enjoy most it is working with children. / That I enjoy most is working with children.|0|Wh-cleft: What + S + V + is + phần nhấn mạnh, không thêm it.
f|It was in 2015 what the clinic opened its new wing.|what|that|It-cleft dùng that sau phần nhấn mạnh, không dùng what.
o|What she needs is a long holiday.|Wh-cleft: What + S + V + is + phần nhấn mạnh.
o|It was the delay that upset him.|It-cleft: It was + phần nhấn mạnh + that + mệnh đề.`
};


/* ===== file: content-phonemes.js ===== */
/* ============================================================
   v4.4 · THƯ VIỆN 44 ÂM TIẾNG ANH (hệ phiên âm Anh-Anh chuẩn, ghi chú Anh-Mỹ)
   Mỗi âm: ký hiệu, nhóm, tên, từ khóa, cách phát âm, lỗi thường gặp,
   cách viết, từ ví dụ (từ đơn, để nghe giọng người thật), cặp âm tối thiểu.
   pairs: [từ có âm này, từ đối lập, âm đối lập]
   ============================================================ */
const PH_GROUPS = [
  ["short", "Nguyên âm ngắn", "Short vowels"], ["long", "Nguyên âm dài", "Long vowels"], ["diph", "Nguyên âm đôi", "Diphthongs"],
  ["plosive", "Phụ âm bật (tắc)", "Plosives"], ["fric", "Phụ âm xát", "Fricatives"], ["affric", "Phụ âm tắc xát", "Affricates"],
  ["nasal", "Phụ âm mũi", "Nasals"], ["approx", "Âm tiếp cận (lướt)", "Approximants"]
];
const PHONEMES = [
/* ---------- Nguyên âm ngắn ---------- */
{ id: "i-short", ipa: "ɪ", g: "short", name: "i ngắn", key: "sit", how: "Môi thả lỏng, hơi mở. Lưỡi cao phía trước nhưng thấp và lùi hơn /iː/. Phát âm ngắn, không căng.", trap: "Đọc thành “i” dài của tiếng Việt, khiến ship nghe thành sheep, sick thành seek.", spell: "i (sit), y (gym), e (pretty), u (busy), o (women)", words: ["sit", "big", "fish", "busy", "women", "gym"], pairs: [["ship", "sheep", "iː"], ["sit", "seat", "iː"], ["fill", "feel", "iː"], ["live", "leave", "iː"]] },
{ id: "e", ipa: "e", g: "short", name: "e ngắn", key: "bed", us: "Anh-Mỹ thường ghi /ɛ/.", how: "Miệng mở vừa, môi dẹt, lưỡi ở giữa phía trước. Ngắn, gần chữ “e” tiếng Việt nhưng khép hơn một chút.", trap: "Nhầm với /æ/: bed và bad, men và man.", spell: "e (bed), ea (head), ai (said), a (many), ie (friend)", words: ["bed", "red", "head", "said", "many", "friend"], pairs: [["bed", "bad", "æ"], ["men", "man", "æ"], ["pen", "pan", "æ"], ["set", "sat", "æ"]] },
{ id: "ae", ipa: "æ", g: "short", name: "a bẹt", key: "cat", how: "Hạ hàm, mở miệng rộng, kéo môi sang hai bên. Lưỡi thấp phía trước. Âm nằm giữa “e” và “a” tiếng Việt.", trap: "Đọc thành “a” hoặc “e” tiếng Việt, làm mất khác biệt bad và bed.", spell: "a (cat, hand, apple)", words: ["cat", "bag", "hand", "black", "apple", "happy"], pairs: [["bad", "bed", "e"], ["man", "men", "e"], ["cap", "cup", "ʌ"], ["hat", "hut", "ʌ"]] },
{ id: "uh", ipa: "ʌ", g: "short", name: "ă / â ngắn", key: "cup", how: "Miệng mở vừa, môi thả lỏng không tròn, lưỡi ở giữa hơi thấp. Rất ngắn, gần “ă” hoặc “â” tiếng Việt.", trap: "Đọc theo chữ o hoặc u (love thành “lốp”, money thành “mô-ni”).", spell: "u (cup, bus), o (love, son, money), ou (young, touch)", words: ["cup", "bus", "love", "money", "young", "sun"], pairs: [["cup", "cap", "æ"], ["cut", "cat", "æ"], ["hut", "hat", "æ"], ["luck", "lock", "ɒ"]] },
{ id: "o-short", ipa: "ɒ", g: "short", name: "o ngắn (Anh-Anh)", key: "hot", us: "Anh-Mỹ thường đọc thành /ɑː/: hot /hɑːt/.", how: "Môi hơi tròn, miệng mở rộng, lưỡi thấp phía sau. Ngắn.", trap: "Tròn môi quá mức như “ô” tiếng Việt, hoặc kéo dài.", spell: "o (hot, stop), a sau w (want, watch)", words: ["hot", "dog", "stop", "watch", "want", "doctor"], pairs: [["lock", "luck", "ʌ"], ["not", "nut", "ʌ"], ["cot", "cut", "ʌ"], ["shot", "short", "ɔː"]] },
{ id: "u-short", ipa: "ʊ", g: "short", name: "u ngắn", key: "book", how: "Môi hơi tròn nhưng thả lỏng, lưỡi cao phía sau nhưng thấp hơn /uː/. Ngắn.", trap: "Kéo dài thành “u” tiếng Việt, khiến full nghe như fool.", spell: "oo (book, good), u (put, full), ou (could, would)", words: ["book", "good", "put", "full", "could", "woman"], pairs: [["full", "fool", "uː"], ["pull", "pool", "uː"]] },
{ id: "schwa", ipa: "ə", g: "short", name: "schwa (âm yếu)", key: "about", us: "Anh-Mỹ có thêm dạng /ɚ/ khi có r: teacher /ˈtiːtʃɚ/.", how: "Âm yếu nhất tiếng Anh: miệng, môi, lưỡi đều thả lỏng ở vị trí trung tâm, cực ngắn. Chỉ xuất hiện ở âm tiết không nhấn.", trap: "Người Việt đọc rõ từng nguyên âm theo chữ viết (a-bao, ba-na-na), làm mất nhịp và trọng âm tiếng Anh.", spell: "a (about, banana), e (open), o (today, doctor), u (support), er (teacher)", words: ["about", "banana", "today", "doctor", "teacher", "support"], pairs: [] },
/* ---------- Nguyên âm dài ---------- */
{ id: "i-long", ipa: "iː", g: "long", name: "i dài", key: "see", how: "Kéo môi sang hai bên như đang cười, lưỡi cao phía trước, căng. Kéo dài.", trap: "Không đủ dài và căng nên nghe lẫn với /ɪ/.", spell: "ee (see), ea (eat), e (me), ie (piece), ey (key), eo (people)", words: ["see", "eat", "meet", "key", "people", "piece"], pairs: [["sheep", "ship", "ɪ"], ["seat", "sit", "ɪ"], ["feel", "fill", "ɪ"], ["leave", "live", "ɪ"]] },
{ id: "a-long", ipa: "ɑː", g: "long", name: "a dài", key: "car", us: "Anh-Mỹ đọc r sau: car /kɑːr/.", how: "Mở miệng rộng, lưỡi thấp và lùi về sau, môi không tròn. Kéo dài như “a” tiếng Việt nhưng sâu hơn.", trap: "Đọc ngắn quá nên lẫn với /ʌ/: heart và hut.", spell: "ar (car, start), a (father, half, calm), ear (heart)", words: ["car", "father", "start", "heart", "calm", "half"], pairs: [["heart", "hut", "ʌ"], ["cart", "cut", "ʌ"], ["calm", "come", "ʌ"]] },
{ id: "o-long", ipa: "ɔː", g: "long", name: "o dài", key: "saw", us: "Anh-Mỹ ở nhiều từ đọc gần /ɑː/; từ có r đọc /ɔːr/ (four).", how: "Tròn môi và đưa ra trước, lưỡi thấp phía sau. Kéo dài, gần “o” tiếng Việt nhưng tròn và sâu hơn.", trap: "Đọc ngắn nên lẫn với /ɒ/: short và shot.", spell: "aw (saw, law), al (talk), or (four, sport), oor (door), augh/ough (caught, bought)", words: ["saw", "talk", "law", "four", "door", "caught"], pairs: [["short", "shot", "ɒ"], ["port", "pot", "ɒ"], ["sport", "spot", "ɒ"]] },
{ id: "u-long", ipa: "uː", g: "long", name: "u dài", key: "food", how: "Tròn môi và chu ra trước, lưỡi cao phía sau. Kéo dài.", trap: "Không đủ tròn và dài nên lẫn với /ʊ/.", spell: "oo (food, school), ue (blue, true), o (move, do), oe (shoe), ew (new)", words: ["food", "blue", "school", "true", "move", "shoe"], pairs: [["fool", "full", "ʊ"], ["pool", "pull", "ʊ"]] },
{ id: "er-long", ipa: "ɜː", g: "long", name: "ơ dài", key: "bird", us: "Anh-Mỹ có r: /ɝː/ (bird /bɝːd/).", how: "Môi dẹt, thả lỏng, lưỡi ở giữa miệng. Kéo dài như “ơ” tiếng Việt.", trap: "Đọc theo chữ (bird thành “bia”, work thành “woóc”), hoặc thêm r rung.", spell: "ir (bird, first), or sau w (work, word), ur (nurse), ear (learn)", words: ["bird", "work", "learn", "nurse", "first", "word"], pairs: [["fur", "far", "ɑː"], ["heard", "hard", "ɑː"], ["firm", "farm", "ɑː"]] },
/* ---------- Nguyên âm đôi ---------- */
{ id: "ei", ipa: "eɪ", g: "diph", name: "ây", key: "day", how: "Bắt đầu từ /e/ rồi trượt nhanh lên /ɪ/. Âm đầu mạnh và dài hơn.", trap: "Đọc thành “ê” đơn, không trượt, nên late nghe như let.", spell: "a-e (name), ai (rain), ay (day), ea (great), eigh (eight), ey (they)", words: ["day", "name", "rain", "great", "eight", "they"], pairs: [["late", "let", "e"], ["pain", "pen", "e"], ["wait", "wet", "e"], ["taste", "test", "e"]] },
{ id: "ai", ipa: "aɪ", g: "diph", name: "ai", key: "my", how: "Bắt đầu từ /a/ mở rộng rồi trượt lên /ɪ/. Gần “ai” tiếng Việt.", trap: "Bỏ âm cuối sau nguyên âm đôi (light thành “lai”).", spell: "i-e (time), y (my), igh (light), uy (buy), eye", words: ["my", "time", "light", "buy", "high", "eye"], pairs: [["my", "may", "eɪ"], ["light", "late", "eɪ"], ["time", "tame", "eɪ"], ["buy", "bay", "eɪ"]] },
{ id: "oi", ipa: "ɔɪ", g: "diph", name: "oi", key: "boy", how: "Bắt đầu từ /ɔː/ tròn môi rồi trượt lên /ɪ/. Gần “oi” tiếng Việt.", trap: "Ít khó, nhưng hay bỏ phụ âm cuối (voice thành “voi”).", spell: "oy (boy, enjoy), oi (coin, voice)", words: ["boy", "coin", "voice", "noise", "enjoy", "point"], pairs: [["boy", "buy", "aɪ"], ["toy", "tie", "aɪ"], ["voice", "vice", "aɪ"]] },
{ id: "au", ipa: "aʊ", g: "diph", name: "ao", key: "now", how: "Bắt đầu từ /a/ mở rộng rồi trượt tới /ʊ/, môi tròn dần. Gần “ao” tiếng Việt.", trap: "Nhầm với /əʊ/: now và no, town và tone.", spell: "ow (now, town), ou (house, loud)", words: ["now", "house", "town", "down", "loud", "flower"], pairs: [["now", "no", "əʊ"], ["town", "tone", "əʊ"], ["loud", "load", "əʊ"]] },
{ id: "ou", ipa: "əʊ", g: "diph", name: "âu (Anh-Anh) / ou (Anh-Mỹ)", key: "go", us: "Anh-Mỹ: /oʊ/, bắt đầu tròn môi hơn.", how: "Anh-Anh: bắt đầu từ /ə/ rồi trượt tới /ʊ/. Anh-Mỹ: bắt đầu từ “ô” rồi trượt tới /ʊ/.", trap: "Đọc thành “ô” đơn, không trượt, nên coat nghe như caught.", spell: "o (go, no), o-e (home, phone), oa (road), ow (know, low)", words: ["go", "home", "road", "know", "low", "phone"], pairs: [["coat", "caught", "ɔː"], ["low", "law", "ɔː"], ["boat", "bought", "ɔː"], ["woke", "walk", "ɔː"]] },
{ id: "ia", ipa: "ɪə", g: "diph", name: "ia", key: "here", us: "Anh-Mỹ: /ɪr/ (here /hɪr/).", how: "Bắt đầu từ /ɪ/ rồi trượt về /ə/. Gần “ia” tiếng Việt.", trap: "Nhầm với /eə/: here và hair, ear và air.", spell: "ere (here), ear (ear, near), eer (beer), ea (idea)", words: ["here", "ear", "near", "idea", "beer", "clear"], pairs: [["here", "hair", "eə"], ["ear", "air", "eə"], ["beer", "bear", "eə"], ["fear", "fair", "eə"]] },
{ id: "ea", ipa: "eə", g: "diph", name: "e-ơ", key: "air", us: "Anh-Mỹ: /er/ (air /er/).", how: "Bắt đầu từ /e/ rồi trượt về /ə/. Anh-Anh ngày nay thường kéo dài thành /ɛː/.", trap: "Nhầm với /ɪə/ hoặc đọc r rung ở cuối.", spell: "air (air, hair), are (care), ere (where), ear (bear)", words: ["air", "care", "where", "hair", "pair", "there"], pairs: [["hair", "here", "ɪə"], ["air", "ear", "ɪə"], ["bear", "beer", "ɪə"], ["fair", "fear", "ɪə"]] },
{ id: "ua", ipa: "ʊə", g: "diph", name: "ua", key: "tour", us: "Anh-Mỹ: /ʊr/. Nhiều người Anh hiện đại đọc thành /ɔː/ (sure /ʃɔː/, poor /pɔː/).", how: "Bắt đầu từ /ʊ/ rồi trượt về /ə/. Âm hiếm và đang dần biến mất.", trap: "Không phải lỗi lớn: đọc /ɔː/ cũng được chấp nhận ở nhiều từ.", spell: "our (tour), ure (pure, cure), oor (poor)", words: ["tour", "pure", "cure", "poor", "tourist", "during"], pairs: [["tour", "tore", "ɔː"], ["poor", "paw", "ɔː"]] },
/* ---------- Phụ âm bật ---------- */
{ id: "p", ipa: "p", g: "plosive", voice: 0, name: "p", key: "pen", how: "Mím hai môi rồi bật mạnh. Ở đầu từ có luồng hơi phụt ra (đặt tờ giấy trước miệng, giấy sẽ rung). Vô thanh.", trap: "Đọc như “p” tiếng Việt không bật hơi nên nghe giống /b/; nuốt /p/ ở cuối từ (help, stop).", spell: "p (pen), pp (happy)", words: ["pen", "paper", "happy", "cup", "stop", "help"], pairs: [["pea", "bee", "b"], ["cap", "cab", "b"], ["pack", "back", "b"], ["rope", "robe", "b"]] },
{ id: "b", ipa: "b", g: "plosive", voice: 1, name: "b", key: "bag", how: "Mím hai môi rồi mở ra, dây thanh rung, không bật hơi mạnh. Hữu thanh.", trap: "Bỏ /b/ ở cuối từ (job, rub) hoặc đọc thành /p/.", spell: "b (bag), bb (rabbit)", words: ["bag", "baby", "job", "table", "big", "club"], pairs: [["bee", "pea", "p"], ["cab", "cap", "p"], ["back", "pack", "p"], ["robe", "rope", "p"]] },
{ id: "t", ipa: "t", g: "plosive", voice: 0, name: "t", key: "time", us: "Anh-Mỹ: t giữa hai nguyên âm đọc nhẹ như “đ” lướt (water /ˈwɑːt̬ɚ/, better).", how: "Đầu lưỡi chạm vào lợi ngay sau răng cửa trên (không chạm răng), rồi bật hơi. Vô thanh.", trap: "Chạm lưỡi vào răng như “t” tiếng Việt; bỏ /t/ ở cuối từ (eight, test, what).", spell: "t (time), tt (better), -ed sau âm vô thanh (walked)", words: ["time", "water", "better", "cat", "eight", "test"], pairs: [["tie", "die", "d"], ["bat", "bad", "d"], ["write", "ride", "d"], ["cart", "card", "d"]] },
{ id: "d", ipa: "d", g: "plosive", voice: 1, name: "d", key: "day", how: "Đầu lưỡi chạm lợi trên như /t/ nhưng dây thanh rung, không bật hơi. Hữu thanh.", trap: "Đọc như “đ” tiếng Việt (lưỡi chạm răng) hoặc bỏ /d/ ở cuối (bed, good, road).", spell: "d (day), dd (ladder), -ed sau âm hữu thanh (played)", words: ["day", "door", "ladder", "bed", "good", "road"], pairs: [["die", "tie", "t"], ["bad", "bat", "t"], ["ride", "write", "t"], ["card", "cart", "t"]] },
{ id: "k", ipa: "k", g: "plosive", voice: 0, name: "k", key: "key", how: "Gốc lưỡi chạm ngạc mềm phía sau rồi bật hơi. Vô thanh.", trap: "Nuốt /k/ ở cuối từ (book, back, like).", spell: "k (key), c (cat), ck (back), ch (school), q (queen)", words: ["key", "cat", "school", "back", "book", "lake"], pairs: [["coat", "goat", "ɡ"], ["back", "bag", "ɡ"], ["pick", "pig", "ɡ"], ["class", "glass", "ɡ"]] },
{ id: "g", ipa: "ɡ", g: "plosive", voice: 1, name: "g", key: "go", how: "Gốc lưỡi chạm ngạc mềm như /k/ nhưng dây thanh rung. Hữu thanh.", trap: "Bỏ /g/ cuối (big, bag, egg) hoặc đọc thành /k/.", spell: "g (go), gg (egg), gu (guess)", words: ["go", "girl", "big", "egg", "bag", "again"], pairs: [["goat", "coat", "k"], ["bag", "back", "k"], ["pig", "pick", "k"], ["glass", "class", "k"]] },
/* ---------- Phụ âm xát ---------- */
{ id: "f", ipa: "f", g: "fric", voice: 0, name: "f", key: "fish", how: "Răng trên chạm nhẹ môi dưới, thổi hơi qua khe hẹp. Vô thanh.", trap: "Bỏ /f/ cuối (laugh, cough, off) vì tiếng Việt không có phụ âm cuối này.", spell: "f (fish), ph (phone), gh (laugh), ff (coffee)", words: ["fish", "phone", "coffee", "laugh", "life", "off"], pairs: [["fan", "van", "v"], ["fine", "vine", "v"], ["safe", "save", "v"], ["leaf", "leave", "v"]] },
{ id: "v", ipa: "v", g: "fric", voice: 1, name: "v", key: "very", how: "Răng trên chạm môi dưới như /f/ nhưng dây thanh rung. Không mím hai môi như /b/.", trap: "Ở cuối từ đọc thành /f/ hoặc bỏ hẳn (five, love, have).", spell: "v (very, over), f trong of", words: ["very", "voice", "over", "live", "love", "five"], pairs: [["van", "fan", "f"], ["save", "safe", "f"], ["vest", "best", "b"], ["very", "berry", "b"]] },
{ id: "th", ipa: "θ", g: "fric", voice: 0, name: "th vô thanh", key: "think", how: "Đặt đầu lưỡi nhẹ giữa hai hàm răng, thổi hơi ra. Vô thanh, không rung.", trap: "Thay bằng /t/ (three thành tree) hoặc /s/ (think thành sink). Đừng đọc như “th” tiếng Việt, đó là /t/ bật hơi.", spell: "th (think, bath, month)", words: ["think", "three", "thank", "bath", "month", "mouth"], pairs: [["three", "tree", "t"], ["thin", "tin", "t"], ["think", "sink", "s"], ["mouth", "mouse", "s"]] },
{ id: "dh", ipa: "ð", g: "fric", voice: 1, name: "th hữu thanh", key: "this", how: "Đầu lưỡi giữa hai hàm răng như /θ/ nhưng dây thanh rung. Đặt tay lên cổ để cảm nhận độ rung.", trap: "Thay bằng /d/ (they thành day) hoặc /z/.", spell: "th (this, mother, breathe)", words: ["this", "they", "mother", "weather", "breathe", "with"], pairs: [["they", "day", "d"], ["then", "den", "d"], ["though", "dough", "d"], ["breathe", "breeze", "z"]] },
{ id: "s", ipa: "s", g: "fric", voice: 0, name: "s", key: "see", how: "Đầu lưỡi gần lợi trên, hơi xì ra qua khe hẹp, môi dẹt. Vô thanh.", trap: "Bỏ /s/ cuối, nhất là đuôi -s số nhiều và ngôi thứ ba (books, works).", spell: "s (see), ss (class), c trước e/i/y (city, rice)", words: ["see", "sun", "city", "bus", "class", "rice"], pairs: [["sip", "zip", "z"], ["bus", "buzz", "z"], ["rice", "rise", "z"], ["price", "prize", "z"]] },
{ id: "z", ipa: "z", g: "fric", voice: 1, name: "z", key: "zoo", how: "Vị trí như /s/ nhưng dây thanh rung, nghe như tiếng ong vo ve. Nguyên âm đứng trước /z/ kéo dài hơn.", trap: "Đọc thành /s/ ở cuối từ (rise thành rice, has thành “hát-s”).", spell: "z (zoo), s giữa hai nguyên âm (music, easy), -s sau âm hữu thanh (dogs)", words: ["zoo", "zero", "easy", "music", "rise", "has"], pairs: [["zip", "sip", "s"], ["buzz", "bus", "s"], ["rise", "rice", "s"], ["prize", "price", "s"]] },
{ id: "sh", ipa: "ʃ", g: "fric", voice: 0, name: "sh", key: "she", how: "Tròn môi và đẩy ra trước, lưỡi lùi hơn /s/, thổi hơi. Vô thanh. Giống tiếng “suỵt”.", trap: "Đọc thành /s/: ship thành sip, she thành see.", spell: "sh (she, wash), ti/ci (nation, special), s (sugar, sure), ch (machine)", words: ["she", "ship", "sugar", "nation", "wash", "fish"], pairs: [["she", "see", "s"], ["ship", "sip", "s"], ["shoe", "sue", "s"], ["sheet", "seat", "s"]] },
{ id: "zh", ipa: "ʒ", g: "fric", voice: 1, name: "zh", key: "measure", how: "Vị trí như /ʃ/ nhưng dây thanh rung. Âm hiếm, thường ở giữa từ.", trap: "Đọc thành /z/ hoặc “gi” tiếng Việt.", spell: "s (measure, usual, vision), g (garage, beige)", words: ["measure", "usual", "vision", "television", "pleasure", "garage"], pairs: [] },
{ id: "h", ipa: "h", g: "fric", voice: 0, name: "h", key: "hat", how: "Chỉ là hơi thở nhẹ đi qua họng, miệng đã ở vị trí của nguyên âm theo sau. Không cọ xát mạnh.", trap: "Bỏ /h/ (hat thành at), hoặc đọc /h/ ở từ có h câm (hour, honest).", spell: "h (hat, behind), wh (who)", words: ["hat", "home", "hello", "behind", "who", "happy"], pairs: [["hat", "at", "∅"], ["heat", "eat", "∅"], ["hear", "ear", "∅"], ["hair", "air", "∅"]] },
/* ---------- Phụ âm tắc xát ---------- */
{ id: "ch", ipa: "tʃ", g: "affric", voice: 0, name: "ch", key: "chair", how: "Bắt đầu như /t/ (lưỡi chạm lợi) rồi bật ra thành /ʃ/, môi hơi tròn. Vô thanh.", trap: "Đọc như “ch” tiếng Việt (lưỡi chạm ngạc cứng, không tròn môi); bỏ âm ở cuối từ (watch, much).", spell: "ch (chair, much), tch (watch), t trước ure (picture)", words: ["chair", "cheese", "teacher", "watch", "much", "kitchen"], pairs: [["chip", "ship", "ʃ"], ["watch", "wash", "ʃ"], ["cheap", "jeep", "dʒ"], ["rich", "ridge", "dʒ"]] },
{ id: "j", ipa: "dʒ", g: "affric", voice: 1, name: "dj", key: "job", how: "Như /tʃ/ nhưng dây thanh rung. Bắt đầu như /d/ rồi bật ra thành /ʒ/.", trap: "Đọc thành “gi” hoặc “d” tiếng Việt; bỏ âm ở cuối từ (age, large, bridge).", spell: "j (job), g trước e/i/y (age, giant), dge (bridge)", words: ["job", "age", "bridge", "jam", "large", "orange"], pairs: [["joke", "choke", "tʃ"], ["jeep", "cheap", "tʃ"], ["ridge", "rich", "tʃ"], ["gin", "chin", "tʃ"]] },
/* ---------- Phụ âm mũi ---------- */
{ id: "m", ipa: "m", g: "nasal", voice: 1, name: "m", key: "man", how: "Mím hai môi, hơi đi ra qua mũi. Hữu thanh.", trap: "Ở cuối từ đọc quá nhẹ hoặc thành /n/ (some thành sun).", spell: "m (man), mm (summer), mb (climb)", words: ["man", "mother", "summer", "time", "come", "name"], pairs: [["some", "sun", "n"], ["team", "teen", "n"], ["game", "gain", "n"]] },
{ id: "n", ipa: "n", g: "nasal", voice: 1, name: "n", key: "no", how: "Đầu lưỡi chạm lợi trên, hơi đi ra qua mũi. Hữu thanh.", trap: "Nhầm /n/ với /l/ (người miền Bắc) và với /ŋ/ ở cuối từ.", spell: "n (no), nn (dinner), kn (know)", words: ["no", "name", "dinner", "ten", "sun", "line"], pairs: [["sin", "sing", "ŋ"], ["thin", "thing", "ŋ"], ["night", "light", "l"], ["no", "low", "l"]] },
{ id: "ng", ipa: "ŋ", g: "nasal", voice: 1, name: "ng", key: "sing", how: "Gốc lưỡi chạm ngạc mềm, hơi đi ra qua mũi, như “ng” tiếng Việt. Không bật thêm /g/ sau (sing /sɪŋ/, không phải /sɪŋɡ/).", trap: "Thêm /g/ hoặc đọc thành /n/ (thing thành thin).", spell: "ng (sing, long), n trước k/g (think, finger)", words: ["sing", "long", "thing", "morning", "young", "English"], pairs: [["sing", "sin", "n"], ["thing", "thin", "n"], ["rang", "ran", "n"], ["wing", "win", "n"]] },
/* ---------- Âm tiếp cận ---------- */
{ id: "l", ipa: "l", g: "approx", voice: 1, name: "l", key: "light", how: "Đầu lưỡi chạm lợi trên, hơi thoát ra hai bên lưỡi. Ở cuối từ là “l tối”: gốc lưỡi nâng lên, nghe như có “ô” nhẹ (feel, school).", trap: "Bỏ /l/ cuối (feel thành “phi”), nhầm với /n/ (miền Bắc) hoặc /r/.", spell: "l (light), ll (hello), le (table)", words: ["light", "like", "hello", "feel", "school", "milk"], pairs: [["light", "right", "r"], ["long", "wrong", "r"], ["lead", "read", "r"], ["light", "night", "n"]] },
{ id: "r", ipa: "r", g: "approx", voice: 1, name: "r", key: "red", us: "Anh-Mỹ đọc r ở mọi vị trí (car /kɑːr/). Anh-Anh chỉ đọc r trước nguyên âm (car /kɑː/, carry /ˈkæri/).", how: "Cong đầu lưỡi lên về phía vòm miệng nhưng không chạm, môi hơi tròn. Không rung lưỡi.", trap: "Rung lưỡi như “r” tiếng Việt, hoặc đọc thành /z/ hay /l/.", spell: "r (red), rr (sorry), wr (write)", words: ["red", "right", "very", "sorry", "tree", "write"], pairs: [["right", "light", "l"], ["wrong", "long", "l"], ["read", "lead", "l"], ["grass", "glass", "l"]] },
{ id: "y", ipa: "j", g: "approx", voice: 1, name: "y", key: "yes", how: "Lưỡi ở vị trí /iː/ rồi trượt nhanh sang nguyên âm sau, như “d” miền Nam hay “y” trong “yêu”.", trap: "Bỏ /j/ ẩn trong từ (music /ˈmjuːzɪk/, use /juːz/) hoặc đọc thành /dʒ/.", spell: "y (yes, year), u (use, music), ew (new, Anh-Anh)", words: ["yes", "you", "year", "yellow", "use", "music"], pairs: [["yet", "jet", "dʒ"], ["yolk", "joke", "dʒ"], ["year", "ear", "∅"], ["yeast", "east", "∅"]] },
{ id: "w", ipa: "w", g: "approx", voice: 1, name: "w", key: "we", how: "Tròn môi và chu ra như /uː/ rồi mở nhanh sang nguyên âm sau. Răng không chạm môi.", trap: "Đọc thành /v/ (wine thành vine) do để răng chạm môi.", spell: "w (we, window), wh (what), qu (quick), o (one)", words: ["we", "water", "window", "quick", "away", "one"], pairs: [["wet", "vet", "v"], ["west", "vest", "v"], ["wine", "vine", "v"], ["while", "vile", "v"]] }
];


/* ===== file: content-reading.js ===== */
/* ============================================================
   KHO LUYỆN ĐỌC (v4.5): đoạn văn ngắn do tác giả tự viết, A2 đến C1.
   Mỗi bài: lvl, topic, genre, title, text, gist (tiếng Việt), qs (5 câu hỏi có bằng chứng ev).
   ============================================================ */
const READING = [
 {
  "id": "rd-a2-a01",
  "lvl": "A2",
  "topic": "daily",
  "genre": "email",
  "title": "Can I Bring a Cake?",
  "text": "Hi Lan,\n\nThanks for your message. I would love to come to your birthday party on Saturday! What time does it start? I finish work at one o'clock on Saturday, so I can be there at three.\n\nI want to bring a cake, but I cannot cook very well. Do you prefer chocolate or fruit? I will buy it at the bakery near my house. My brother wants to come too. Is that OK? He is very quiet, so he will not make any problems.\n\nPlease tell me your address again. I lost the paper with the map.\n\nSee you soon,\nMinh",
  "gist": "Minh nhận lời đến tiệc sinh nhật của Lan, hỏi về bánh và xin lại địa chỉ.",
  "qs": [
   {
    "kind": "main",
    "q": "Why does Minh write this email?",
    "opts": [
     "To invite Lan to a party",
     "To say yes to an invitation and ask some questions",
     "To say he cannot come on Saturday",
     "To ask Lan to buy a cake"
    ],
    "a": 1,
    "ev": "I would love to come to your birthday party on Saturday!",
    "why": "Minh nhận lời đến tiệc và hỏi thêm vài điều (giờ, loại bánh, địa chỉ)."
   },
   {
    "kind": "detail",
    "q": "When can Minh get to the party?",
    "opts": [
     "At one o'clock",
     "At three o'clock",
     "At five o'clock",
     "At ten o'clock"
    ],
    "a": 1,
    "ev": "so I can be there at three",
    "why": "Anh ấy tan làm lúc một giờ nên có thể đến lúc ba giờ: \"I can be there at three\"."
   },
   {
    "kind": "detail",
    "q": "Where will Minh get the cake?",
    "opts": [
     "He will make it at home",
     "From his brother",
     "From a shop near Lan's house",
     "From a bakery near his own house"
    ],
    "a": 3,
    "ev": "I will buy it at the bakery near my house",
    "why": "Minh nói sẽ mua ở tiệm bánh gần nhà mình."
   },
   {
    "kind": "vocab",
    "q": "In the email, what does \"quiet\" mean?",
    "opts": [
     "Not noisy",
     "Very tall",
     "Very hungry",
     "Very angry"
    ],
    "a": 0,
    "ev": "He is very quiet",
    "why": "\"Quiet\" = ít nói, không ồn ào; hợp với \"will not make any problems\"."
   },
   {
    "kind": "tfng",
    "q": "Minh has a map of the way to Lan's home.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "I lost the paper with the map.",
    "why": "Minh đã làm mất tờ giấy có bản đồ, nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-a2-a02",
  "lvl": "A2",
  "topic": "education",
  "genre": "notice",
  "title": "New Opening Times at the Library",
  "text": "Green Valley Library: New Opening Times\n\nFrom 1 October, the library will open earlier on weekdays. The new times are:\n\nMonday to Friday: 8:00 a.m. to 7:00 p.m.\nSaturday: 9:00 a.m. to 4:00 p.m.\nSunday: closed\n\nChildren under ten must come with an adult. You can borrow up to six books for three weeks. If you forget to bring a book back on time, you must pay 20 cents for each day.\n\nThe new children's room is now open on the second floor. It has comfortable chairs and many picture books. Every Saturday at 10:00 a.m., a teacher reads a story for young children. It is free, and you do not need to book a place.",
  "gist": "Thông báo giờ mở cửa mới và các quy định của thư viện, cùng phòng thiếu nhi mới.",
  "qs": [
   {
    "kind": "main",
    "q": "What is this notice mainly about?",
    "opts": [
     "A school for young children",
     "A sale of old books",
     "New opening times and rules for a library",
     "A teacher who reads stories"
    ],
    "a": 2,
    "ev": "the library will open earlier on weekdays",
    "why": "Thông báo nói về giờ mở cửa mới và quy định mượn sách của thư viện."
   },
   {
    "kind": "detail",
    "q": "How long can a person keep the books?",
    "opts": [
     "One week",
     "Two weeks",
     "Three weeks",
     "Six weeks"
    ],
    "a": 2,
    "ev": "up to six books for three weeks",
    "why": "Được mượn tối đa sáu cuốn trong ba tuần; sáu là số sách, không phải số tuần."
   },
   {
    "kind": "detail",
    "q": "What happens if someone returns a book late?",
    "opts": [
     "They pay a small amount for each day",
     "They cannot borrow books again",
     "They pay 20 cents one time",
     "They must give the library another book"
    ],
    "a": 0,
    "ev": "you must pay 20 cents for each day",
    "why": "Phải trả 20 cent cho mỗi ngày trễ, không phải một lần."
   },
   {
    "kind": "inference",
    "q": "Who can visit the library without an adult?",
    "opts": [
     "A five-year-old child",
     "A seven-year-old child",
     "A nine-year-old child",
     "A twelve-year-old child"
    ],
    "a": 3,
    "ev": "Children under ten must come with an adult",
    "why": "Trẻ dưới mười tuổi phải đi cùng người lớn, nên chỉ trẻ mười hai tuổi được đi một mình."
   },
   {
    "kind": "tfng",
    "q": "People must reserve a place for the Saturday story time.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "you do not need to book a place",
    "why": "Văn bản nói không cần đặt chỗ nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-a2-a03",
  "lvl": "A2",
  "topic": "environment",
  "genre": "blog",
  "title": "My Balcony Garden",
  "text": "I live in a small flat in the city, and I do not have a garden. But last spring I started a little garden on my balcony. First, I bought four plastic boxes and some soil. Then I planted tomatoes, mint and two small flowers.\n\nThe tomatoes grew slowly. In June, they were still green. I water the plants every morning before work, and I also talk to them! My neighbour thinks this is funny. In July, I picked my first red tomato. It was small, but it tasted wonderful.\n\nNow I use the mint in my tea. Gardening is cheap and relaxing. After a long day, I sit on the balcony and look at my plants. Next year, I want to try growing carrots.",
  "gist": "Tác giả kể về khu vườn nhỏ trên ban công và niềm vui khi tự trồng cây.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's main message?",
    "opts": [
     "Tomatoes are difficult to grow",
     "Plants need a lot of water",
     "A big garden is better than a balcony",
     "You can enjoy a small garden even in a flat"
    ],
    "a": 3,
    "ev": "last spring I started a little garden on my balcony",
    "why": "Dù sống trong căn hộ, tác giả vẫn thích làm vườn nhỏ trên ban công."
   },
   {
    "kind": "detail",
    "q": "What did the writer plant?",
    "opts": [
     "Carrots, mint and tomatoes",
     "Tomatoes, mint and flowers",
     "Only tomatoes",
     "Flowers and carrots"
    ],
    "a": 1,
    "ev": "I planted tomatoes, mint and two small flowers",
    "why": "Cà chua, bạc hà và hai bông hoa; cà rốt chỉ là kế hoạch năm sau."
   },
   {
    "kind": "detail",
    "q": "When does the writer give water to the plants?",
    "opts": [
     "Before going to work",
     "After work",
     "At night",
     "Only at weekends"
    ],
    "a": 0,
    "ev": "I water the plants every morning before work",
    "why": "Tác giả tưới cây mỗi sáng trước khi đi làm."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"relaxing\" means",
    "opts": [
     "needing a lot of work",
     "very expensive",
     "making you feel calm",
     "hard to learn"
    ],
    "a": 2,
    "ev": "Gardening is cheap and relaxing",
    "why": "\"Relaxing\" = thư giãn, làm bạn thấy bình tĩnh; đi cùng \"cheap\" và việc ngồi ngắm cây."
   },
   {
    "kind": "tfng",
    "q": "The writer's neighbour helps look after the plants.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Văn bản chỉ nói người hàng xóm thấy buồn cười, không nói họ giúp chăm cây."
   }
  ]
 },
 {
  "id": "rd-a2-a04",
  "lvl": "A2",
  "topic": "travel",
  "genre": "dialogue",
  "title": "At the Ticket Office",
  "text": "Clerk: Good morning. Can I help you?\n\nTom: Yes, please. I need a ticket to Hanover for tomorrow morning.\n\nClerk: There is a train at 8:15 and another one at 10:40. The 8:15 train is faster. It takes two hours. The 10:40 train takes three hours because it stops in many towns.\n\nTom: I prefer the faster one. How much is a ticket?\n\nClerk: A single ticket is 32 euros. A return ticket is 50 euros. You can also get a cheaper ticket if you are a student.\n\nTom: I am not a student, but I will take a return ticket. I come back on Sunday.\n\nClerk: Fine. That is 50 euros. Platform 4, please.",
  "gist": "Tom mua vé tàu khứ hồi đi Hanover, chọn chuyến nhanh hơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is Tom doing in this conversation?",
    "opts": [
     "Asking about a student card",
     "Buying a train ticket",
     "Looking for Platform 4",
     "Planning a holiday in Hanover"
    ],
    "a": 1,
    "ev": "I need a ticket to Hanover for tomorrow morning.",
    "why": "Tom đến quầy để mua vé tàu đi Hanover."
   },
   {
    "kind": "detail",
    "q": "Why does the 10:40 train take longer?",
    "opts": [
     "It leaves from a different platform",
     "It is older than the other train",
     "It stops in many towns",
     "It goes to a different city"
    ],
    "a": 2,
    "ev": "it stops in many towns",
    "why": "Chuyến 10:40 lâu hơn vì dừng ở nhiều thị trấn."
   },
   {
    "kind": "detail",
    "q": "How much does Tom pay?",
    "opts": [
     "32 euros",
     "50 euros",
     "40 euros",
     "82 euros"
    ],
    "a": 1,
    "ev": "That is 50 euros.",
    "why": "Tom mua vé khứ hồi giá 50 euro; 32 euro là vé một chiều."
   },
   {
    "kind": "vocab",
    "q": "In the conversation, \"prefer\" means",
    "opts": [
     "forget about",
     "hate",
     "need to buy",
     "like better"
    ],
    "a": 3,
    "ev": "I prefer the faster one",
    "why": "\"Prefer\" = thích hơn; Tom chọn chuyến nhanh hơn."
   },
   {
    "kind": "tfng",
    "q": "Tom is travelling to Hanover for work.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Không có thông tin về lý do Tom đi Hanover."
   }
  ]
 },
 {
  "id": "rd-b1-a05",
  "lvl": "B1",
  "topic": "environment",
  "genre": "article",
  "title": "One Year of Bicycle Lanes",
  "text": "Last year, the city of Riverton opened twenty kilometres of new bicycle lanes. Many people thought the idea was a waste of money. Cars would have less space, they said, and traffic would become even worse. One year later, the results are surprising.\n\nAccording to a city survey, the number of people who cycle to work has doubled. Shops on the main streets also report that they have more customers, because cyclists stop more often than drivers do. The average journey in the city centre is now four minutes shorter, as fewer cars block the roads at busy times.\n\nNot everyone is happy, however. Some drivers complain that it is harder to find parking spaces. Delivery companies say they sometimes have to stop in the lanes to unload their vans, which makes cycling dangerous. The council has promised to build special loading areas next year.\n\nMost experts agree that the project was a good start. They say the city now needs more safe places to leave bicycles, because many riders are afraid that their bikes will be stolen.",
  "gist": "Sau một năm có làn đường xe đạp mới, thành phố thu được nhiều kết quả tốt nhưng vẫn còn vấn đề.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the article mainly about?",
    "opts": [
     "How to ride a bicycle safely",
     "The results of new bicycle lanes after one year",
     "Why shops are closing in the city",
     "A plan to ban cars in the centre"
    ],
    "a": 1,
    "ev": "One year later, the results are surprising.",
    "why": "Bài viết nói về tác động của làn xe đạp mới sau một năm."
   },
   {
    "kind": "detail",
    "q": "What does the survey say about cycling to work?",
    "opts": [
     "It has become twice as common",
     "It has increased by a fifth",
     "It has stayed the same",
     "It has become less popular"
    ],
    "a": 0,
    "ev": "the number of people who cycle to work has doubled",
    "why": "\"Doubled\" nghĩa là tăng gấp đôi."
   },
   {
    "kind": "detail",
    "q": "Why do shops on main streets have more customers?",
    "opts": [
     "Parking is cheaper there",
     "Cyclists stop more often than drivers",
     "Delivery vans bring more goods",
     "Cars drive more slowly there"
    ],
    "a": 1,
    "ev": "cyclists stop more often than drivers do",
    "why": "Người đi xe đạp dừng lại thường xuyên hơn người lái xe."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"unload\" means",
    "opts": [
     "drive slowly past",
     "park far away",
     "clean thoroughly",
     "take goods out of"
    ],
    "a": 3,
    "ev": "to unload their vans",
    "why": "\"Unload\" = dỡ hàng xuống, phù hợp với xe giao hàng."
   },
   {
    "kind": "tfng",
    "q": "The council has already built loading areas for delivery vehicles.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The council has promised to build special loading areas next year.",
    "why": "Hội đồng mới hứa sẽ xây vào năm sau, chưa xây."
   }
  ]
 },
 {
  "id": "rd-b1-a06",
  "lvl": "B1",
  "topic": "work",
  "genre": "email",
  "title": "Moving to the New Office",
  "text": "Subject: Changes to the office next month\n\nDear all,\n\nAs you know, our company is moving to the new building on Harbour Street on 3 November. I would like to explain what this means for you.\n\nThe move will take place over the weekend of 1 and 2 November, so the office will be closed on Friday afternoon. Please pack your personal items into the boxes that Facilities will give you on Wednesday. Do not pack your computer. The IT team will move all equipment themselves and will set it up before Monday morning.\n\nThe new building has no car park for staff, but there is a train station two minutes away. The company will pay half of the cost of a monthly train pass for anyone who wants one. If you would prefer to cycle, there is a secure room for bicycles on the ground floor.\n\nFinally, there will be a short tour of the new offices on Thursday at 4 p.m. It is not compulsory, but I recommend it, especially for new colleagues.\n\nIf you have any questions, please contact me.\n\nBest wishes,\nMs Weber\nOffice Manager",
  "gist": "Quản lý văn phòng thông báo kế hoạch chuyển sang tòa nhà mới và hỗ trợ đi lại.",
  "qs": [
   {
    "kind": "main",
    "q": "Why is Ms Weber writing this email?",
    "opts": [
     "To ask staff to find a new office",
     "To report problems with the IT team",
     "To invite staff to a party",
     "To give staff information about the move"
    ],
    "a": 3,
    "ev": "I would like to explain what this means for you.",
    "why": "Bà Weber giải thích cho nhân viên về việc chuyển văn phòng."
   },
   {
    "kind": "detail",
    "q": "What should staff do with their computers?",
    "opts": [
     "Leave them for the IT team to move",
     "Pack them in the boxes",
     "Carry them to the new building",
     "Take them home for the weekend"
    ],
    "a": 0,
    "ev": "Do not pack your computer.",
    "why": "Không được đóng gói máy tính; đội IT sẽ tự chuyển."
   },
   {
    "kind": "detail",
    "q": "How will the company help staff who travel by train?",
    "opts": [
     "It will give them free tickets",
     "It will pay half of a monthly pass",
     "It will pay for taxis",
     "It will move them closer to the station"
    ],
    "a": 1,
    "ev": "pay half of the cost of a monthly train pass",
    "why": "Công ty trả một nửa chi phí vé tháng."
   },
   {
    "kind": "inference",
    "q": "Which employee is most likely to have a problem at the new building?",
    "opts": [
     "Someone who rides a bicycle",
     "Someone who takes the train",
     "Someone who drives to work",
     "Someone who works in IT"
    ],
    "a": 2,
    "ev": "The new building has no car park for staff",
    "why": "Tòa nhà mới không có bãi đỗ xe cho nhân viên, nên người lái xe sẽ gặp khó."
   },
   {
    "kind": "tfng",
    "q": "All staff have to join the tour on Thursday.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "It is not compulsory",
    "why": "Chuyến tham quan không bắt buộc nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-a07",
  "lvl": "B1",
  "topic": "society",
  "genre": "story",
  "title": "The Brown Wallet",
  "text": "On Tuesday evening, Nam was walking home from the bus stop when he saw a brown wallet lying near a bench. He picked it up and looked inside. There was a bus card, a photo of a little girl, and a lot of cash. There was also a small piece of paper with a name and a phone number.\n\nNam felt nervous. He needed money for his university books, and nobody was watching. For a moment, he put the wallet in his bag. But then he thought about the photo. Somebody was probably worried at that very moment.\n\nAt home, he called the number. A man answered quickly. His voice was shaky. \"I have been searching everywhere for it,\" he said. He explained that the wallet had been his late father's, and the photo showed his daughter on her first day of school.\n\nThey met at the bench twenty minutes later. The man tried to give Nam some of the cash as a reward, but Nam refused. \"I'm just glad it is back with you,\" he said. Walking home, he felt lighter than he had all week.",
  "gist": "Nam nhặt được chiếc ví, suýt giữ lại nhưng cuối cùng trả cho chủ nhân và từ chối tiền thưởng.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the story mainly about?",
    "opts": [
     "A man who loses his job",
     "A student who needs money for books",
     "A girl's first day at school",
     "A young man who returns a lost wallet"
    ],
    "a": 3,
    "ev": "But then he thought about the photo.",
    "why": "Câu chuyện kể Nam trả lại chiếc ví dù đã bị cám dỗ giữ lại."
   },
   {
    "kind": "detail",
    "q": "How did Nam find the owner of the wallet?",
    "opts": [
     "He called a number written on a piece of paper",
     "He took it to the police",
     "He asked people at the bus stop",
     "He put a message on the bench"
    ],
    "a": 0,
    "ev": "a small piece of paper with a name and a phone number",
    "why": "Trong ví có mảnh giấy ghi tên và số điện thoại, Nam gọi số đó."
   },
   {
    "kind": "detail",
    "q": "Why did Nam decide not to keep the wallet?",
    "opts": [
     "He saw somebody watching him",
     "He already had enough money",
     "He thought about the photo and the worried owner",
     "His friend told him to call"
    ],
    "a": 2,
    "ev": "But then he thought about the photo.",
    "why": "Nghĩ đến bức ảnh và người chủ đang lo lắng khiến Nam đổi ý."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"shaky\" describes a voice that is",
    "opts": [
     "very loud",
     "not steady",
     "angry and rude",
     "slow and bored"
    ],
    "a": 1,
    "ev": "His voice was shaky.",
    "why": "\"Shaky\" = run rẩy, không vững, hợp với việc người đàn ông đang lo lắng tìm ví."
   },
   {
    "kind": "tfng",
    "q": "Nam accepted some of the cash as a reward.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "tried to give Nam some of the cash as a reward, but Nam refused",
    "why": "Nam từ chối tiền thưởng nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-a08",
  "lvl": "B1",
  "topic": "education",
  "genre": "leaflet",
  "title": "Evening Classes at Riverside",
  "text": "Riverside Community Centre: Evening Classes This Autumn\n\nLooking for a new hobby, or a way to meet people in your neighbourhood? Our autumn courses start on Monday 14 October and last eight weeks. Each class meets once a week for two hours.\n\nBeginner Photography (Mondays, 6:30 p.m.): Learn to use your camera or phone to take better pictures. Bring your own device. We will go outdoors if the weather is good.\n\nHome Cooking (Wednesdays, 7 p.m.): Prepare simple, healthy meals from fresh ingredients, then eat together. The fee includes all food, but please bring an apron.\n\nConversational Spanish (Thursdays, 6 p.m.): Practise speaking in small groups with a friendly teacher. No experience is needed.\n\nPrices: Each course costs 60 pounds. Residents of Riverside receive a 20 percent discount, and pensioners pay half price. Places are limited to twelve people per class, so please register early at the front desk or by calling 555-0142. If a course is cancelled, we will return your money in full.",
  "gist": "Tờ rơi giới thiệu ba khóa học buổi tối của trung tâm cộng đồng, kèm giá và cách đăng ký.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of this leaflet?",
    "opts": [
     "To advertise evening courses",
     "To ask for volunteer teachers",
     "To announce a new centre",
     "To explain how to cook healthy food"
    ],
    "a": 0,
    "ev": "Our autumn courses start on Monday 14 October",
    "why": "Tờ rơi quảng cáo các khóa học buổi tối mùa thu."
   },
   {
    "kind": "detail",
    "q": "What should students bring to the Home Cooking class?",
    "opts": [
     "Fresh ingredients",
     "An apron",
     "Their own camera",
     "A notebook for Spanish"
    ],
    "a": 1,
    "ev": "please bring an apron",
    "why": "Phí đã gồm thực phẩm; chỉ cần mang tạp dề."
   },
   {
    "kind": "detail",
    "q": "How many people can be in one class?",
    "opts": [
     "Eight",
     "Two",
     "Sixty",
     "Twelve"
    ],
    "a": 3,
    "ev": "limited to twelve people per class",
    "why": "Mỗi lớp tối đa mười hai người; tám là số tuần, hai là số giờ."
   },
   {
    "kind": "inference",
    "q": "How much would a Riverside resident who is not a pensioner pay for one course?",
    "opts": [
     "48 pounds",
     "30 pounds",
     "52 pounds",
     "40 pounds"
    ],
    "a": 0,
    "ev": "Each course costs 60 pounds. Residents of Riverside receive a 20 percent discount",
    "why": "Giảm 20% của 60 bảng là 12 bảng, còn 48 bảng."
   },
   {
    "kind": "tfng",
    "q": "Photography students need to take their own camera or phone to class.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 0,
    "ev": "Bring your own device.",
    "why": "Văn bản yêu cầu mang thiết bị của mình, nên câu này đúng."
   }
  ]
 },
 {
  "id": "rd-a2-b01",
  "lvl": "A2",
  "topic": "daily",
  "genre": "notice",
  "title": "Green Park Pool Is Closed for a Week",
  "text": "NOTICE: Green Park Swimming Pool\n\nThe pool will be closed from Monday 3 June to Friday 7 June. We are cleaning the water and painting the changing rooms. The pool will open again on Saturday at 8 a.m.\n\nDuring the week, you can swim at Lake Road Pool. It is five minutes by bus from Green Park. Show your Green Park card at the door and you will pay only half price.\n\nChildren under seven must always swim with an adult. Please do not run near the water.\n\nIf you have a question, call Mrs Hall at the front desk.",
  "gist": "Thông báo hồ bơi Green Park đóng cửa một tuần để làm vệ sinh và sơn phòng thay đồ, đồng thời gợi ý bơi ở hồ Lake Road với giá nửa tiền.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the notice mainly about?",
    "opts": [
     "A pool is closed for a week, and there is another place to swim.",
     "A new pool is opening on Lake Road.",
     "Swimming lessons for children are starting.",
     "Prices at Green Park are going down."
    ],
    "a": 0,
    "ev": "The pool will be closed from Monday 3 June to Friday 7 June.",
    "why": "Thông báo nói hồ đóng cửa từ thứ Hai đến thứ Sáu và gợi ý hồ khác."
   },
   {
    "kind": "detail",
    "q": "What work will be done at the pool during the closure?",
    "opts": [
     "Building a new café",
     "Fixing the roof",
     "Cleaning the water and painting some rooms",
     "Teaching new swimming classes"
    ],
    "a": 2,
    "ev": "We are cleaning the water and painting the changing rooms.",
    "why": "Văn bản nêu rõ: cleaning the water and painting the changing rooms."
   },
   {
    "kind": "detail",
    "q": "How can a Green Park member pay less at the other pool?",
    "opts": [
     "By going with a child",
     "By showing the Green Park card",
     "By arriving by bus",
     "By calling Mrs Hall first"
    ],
    "a": 1,
    "ev": "Show your Green Park card at the door and you will pay only half price.",
    "why": "Chỉ cần đưa thẻ Green Park là được nửa giá."
   },
   {
    "kind": "inference",
    "q": "What do we learn about Lake Road Pool?",
    "opts": [
     "It is closed next week.",
     "It is only for adults.",
     "It is on the same street as Mrs Hall's desk.",
     "It is a short bus ride from Green Park."
    ],
    "a": 3,
    "ev": "It is five minutes by bus from Green Park.",
    "why": "Five minutes by bus tức là rất gần."
   },
   {
    "kind": "tfng",
    "q": "Children aged six can swim alone at Green Park.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Children under seven must always swim with an adult.",
    "why": "Trẻ dưới bảy tuổi phải đi cùng người lớn nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-a2-b02",
  "lvl": "A2",
  "topic": "daily",
  "genre": "advert",
  "title": "For Sale: Blue City Bike",
  "text": "FOR SALE: Blue City Bike\n\nI am selling my blue bike because I am moving to a small flat and there is no place for it. The bike is two years old and in very good condition. It has a new front light and a strong basket. The tyres are new, too.\n\nI paid 280 euros, but I want 120 euros. You can try the bike before you buy it. I am at home every evening after 6 p.m. and all day on Sunday.\n\nPlease send a message to Tom on 0151 555 0182. I cannot answer calls at work.",
  "gist": "Quảng cáo bán xe đạp cũ màu xanh vì chủ chuyển sang căn hộ nhỏ; giá 120 euro, có thể thử xe trước khi mua.",
  "qs": [
   {
    "kind": "main",
    "q": "Why is Tom selling his bike?",
    "opts": [
     "The bike is broken.",
     "He wants a newer bike.",
     "He has no space for it in his new home.",
     "He needs money for a trip."
    ],
    "a": 2,
    "ev": "because I am moving to a small flat and there is no place for it",
    "why": "Lý do là chuyển đến căn hộ nhỏ, không có chỗ để xe."
   },
   {
    "kind": "detail",
    "q": "How much less than the first price does Tom want now?",
    "opts": [
     "160 euros",
     "120 euros",
     "280 euros",
     "400 euros"
    ],
    "a": 0,
    "ev": "I paid 280 euros, but I want 120 euros.",
    "why": "Tom mua với giá 280 euro và bây giờ muốn bán 120 euro, nên chênh lệch là 160 euro."
   },
   {
    "kind": "detail",
    "q": "When can a buyer see the bike?",
    "opts": [
     "In the mornings and on Saturdays",
     "In the evenings and on Sundays",
     "Only on Sunday evening",
     "All day while Tom is at work"
    ],
    "a": 1,
    "ev": "I am at home every evening after 6 p.m. and all day on Sunday.",
    "why": "Tom ở nhà mỗi tối sau 6 giờ và cả ngày Chủ nhật."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"condition\" means",
    "opts": [
     "how much the bike costs",
     "where the bike is from",
     "what colour the bike is",
     "how well the bike works and looks"
    ],
    "a": 3,
    "ev": "in very good condition",
    "why": "\"Condition\" là tình trạng của xe, ở đây là rất tốt."
   },
   {
    "kind": "tfng",
    "q": "Tom uses the bike to travel to his office.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Văn bản chỉ nói Tom làm việc nhưng không nói anh đi làm bằng xe đạp."
   }
  ]
 },
 {
  "id": "rd-a2-b03",
  "lvl": "A2",
  "topic": "daily",
  "genre": "dialogue",
  "title": "Plans for a River Picnic",
  "text": "Lan: Hi Minh! Are you free on Saturday?\n\nMinh: I think so. Why?\n\nLan: Nam and I want to have a picnic at the river. The weather will be sunny, so it is a good day for it.\n\nMinh: Great idea! What can I bring?\n\nLan: Please bring some drinks. Nam is making sandwiches, and I will bring fruit and a big blanket.\n\nMinh: OK. How do we get there? My car is at the garage.\n\nLan: No problem. We can take the bus at 10 o'clock from the station. It takes about twenty minutes.\n\nMinh: Perfect. I will meet you at the station at a quarter to ten.\n\nLan: See you then!",
  "gist": "Lan rủ Minh đi picnic bên sông vào thứ Bảy; họ chia nhau mang đồ và hẹn đi xe buýt lúc 10 giờ.",
  "qs": [
   {
    "kind": "main",
    "q": "What are the two friends doing?",
    "opts": [
     "Choosing a new car",
     "Planning a day out by the river",
     "Cooking dinner together",
     "Looking for a lost blanket"
    ],
    "a": 1,
    "ev": "Nam and I want to have a picnic at the river.",
    "why": "Họ đang lên kế hoạch cho buổi picnic."
   },
   {
    "kind": "detail",
    "q": "What will Minh bring to the picnic?",
    "opts": [
     "Sandwiches",
     "Fruit",
     "A big blanket",
     "Drinks"
    ],
    "a": 3,
    "ev": "Please bring some drinks.",
    "why": "Lan nhờ Minh mang đồ uống; Nam làm sandwich, còn Lan mang trái cây và chăn."
   },
   {
    "kind": "detail",
    "q": "How will the friends travel to the river?",
    "opts": [
     "By bus",
     "By car",
     "By train",
     "By bicycle"
    ],
    "a": 0,
    "ev": "We can take the bus at 10 o'clock from the station.",
    "why": "Họ đi xe buýt lúc 10 giờ."
   },
   {
    "kind": "inference",
    "q": "Why does Minh ask how they will get there?",
    "opts": [
     "He does not like buses.",
     "He lives next to the river.",
     "He has no driving licence.",
     "He cannot use his car at the moment."
    ],
    "a": 3,
    "ev": "My car is at the garage.",
    "why": "Xe của Minh đang ở garage nên anh chưa dùng được."
   },
   {
    "kind": "tfng",
    "q": "The weather forecast for Saturday is bad.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The weather will be sunny, so it is a good day for it.",
    "why": "Thời tiết nắng nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-a2-b04",
  "lvl": "A2",
  "topic": "society",
  "genre": "story",
  "title": "Ben's Red Umbrella",
  "text": "It was a rainy morning. Ben took his red umbrella and walked to the bus stop. An old woman was standing there without an umbrella. Her coat was wet and she looked cold.\n\nBen smiled and gave her his umbrella. \"Please take it,\" he said. \"My office is only two minutes from here.\" The woman said thank you many times.\n\nBen ran to his office in the rain. He was wet, but he felt happy. The next day, there was a small box on his desk. Inside there was a new umbrella and a card: \"For a kind young man. Thank you.\" Ben did not know who sent it, but he smiled all day.",
  "gist": "Ben cho một bà cụ mượn ô vào buổi sáng mưa, hôm sau anh nhận được một chiếc ô mới và tấm thiệp cảm ơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the story mainly about?",
    "opts": [
     "A man who loses his umbrella",
     "A kind action that leads to a nice surprise",
     "A bus that is late in the rain",
     "A woman who looks for her office"
    ],
    "a": 1,
    "ev": "Ben smiled and gave her his umbrella.",
    "why": "Ben giúp đỡ bà cụ và sau đó nhận quà bất ngờ."
   },
   {
    "kind": "detail",
    "q": "How far was Ben's office from the bus stop?",
    "opts": [
     "Ten minutes by bus",
     "Two streets away by bike",
     "A very short walk",
     "About twenty minutes on foot"
    ],
    "a": 2,
    "ev": "My office is only two minutes from here.",
    "why": "Văn phòng chỉ cách hai phút."
   },
   {
    "kind": "detail",
    "q": "What did Ben find on his desk the next day?",
    "opts": [
     "A box with an umbrella and a card",
     "A red coat and a letter",
     "A bus ticket and a card",
     "A cake and some flowers"
    ],
    "a": 0,
    "ev": "Inside there was a new umbrella and a card",
    "why": "Trong hộp có ô mới và một tấm thiệp."
   },
   {
    "kind": "vocab",
    "q": "In the card, \"kind\" means",
    "opts": [
     "tall and strong",
     "rich and famous",
     "quiet and shy",
     "friendly and helpful"
    ],
    "a": 3,
    "ev": "For a kind young man.",
    "why": "\"Kind\" nghĩa là tốt bụng, thân thiện và hay giúp đỡ."
   },
   {
    "kind": "tfng",
    "q": "Ben knows who left the box on his desk.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Ben did not know who sent it",
    "why": "Ben không biết ai gửi nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-b05",
  "lvl": "B1",
  "topic": "work",
  "genre": "email",
  "title": "Change of Room for Thursday's Training",
  "text": "Subject: Change of room for Thursday's training\n\nHi everyone,\n\nI'm writing to let you know that Thursday's training session on customer service has moved. Because the main meeting room is being repaired after a water leak, we will now use Room 4 on the second floor. The start time is still 9:30, but we will finish earlier, at 3:30 instead of 4:30, as the room must be locked by 4 p.m.\n\nPlease remember to bring your laptop and the booklet that was sent last week. If you have lost it, I have printed spare copies, and you can collect one from my desk. Lunch will not be provided this time, because the canteen is closed on Thursdays. However, there is a café across the street that offers a discount to our employees.\n\nIf you cannot attend because of the change, let me know by Wednesday noon so that I can book another date. Thanks for your understanding.\n\nBest wishes,\nHelen Park\nTraining Coordinator",
  "gist": "Email thông báo buổi tập huấn thứ Năm đổi sang Phòng 4, kết thúc sớm hơn, nhắc mang laptop và tài liệu, không có bữa trưa.",
  "qs": [
   {
    "kind": "main",
    "q": "Why did Helen write this email?",
    "opts": [
     "To ask for a new meeting room",
     "To cancel the training completely",
     "To tell staff about changes to a training session",
     "To explain how to use the canteen"
    ],
    "a": 2,
    "ev": "Thursday's training session on customer service has moved.",
    "why": "Email thông báo thay đổi địa điểm và giờ kết thúc."
   },
   {
    "kind": "detail",
    "q": "What caused the change of room?",
    "opts": [
     "Repairs after a leak in the usual room",
     "A booking mistake in Room 4",
     "A broken laptop projector",
     "A closed canteen"
    ],
    "a": 0,
    "ev": "the main meeting room is being repaired after a water leak",
    "why": "Phòng chính đang sửa sau khi bị rò nước."
   },
   {
    "kind": "detail",
    "q": "What should people do if they no longer have the booklet?",
    "opts": [
     "Print one at the café",
     "Ask a colleague to lend theirs",
     "Wait for a new email on Wednesday",
     "Take a spare copy from Helen's desk"
    ],
    "a": 3,
    "ev": "you can collect one from my desk",
    "why": "Helen đã in bản dự phòng để ở bàn."
   },
   {
    "kind": "inference",
    "q": "Why will the session finish earlier than planned?",
    "opts": [
     "The trainer has another meeting.",
     "The room cannot be used after 4 p.m.",
     "Fewer people will attend.",
     "Lunch will not be provided."
    ],
    "a": 1,
    "ev": "as the room must be locked by 4 p.m.",
    "why": "Phòng phải khóa lúc 4 giờ nên buổi học kết thúc sớm."
   },
   {
    "kind": "tfng",
    "q": "The session will begin later than planned.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The start time is still 9:30",
    "why": "Giờ bắt đầu vẫn là 9:30 nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-b06",
  "lvl": "B1",
  "topic": "environment",
  "genre": "article",
  "title": "A Garden on the Library Roof",
  "text": "When the Riverside Library opened a roof garden last spring, few people expected it to become the busiest part of the building. The idea came from a group of volunteers who wanted a quiet place to grow vegetables in the middle of the city. The library agreed to give them the empty space on its roof, and a local company donated wooden boxes and soil.\n\nToday about forty people take care of the garden. Some come every day before work to water the plants, while others only visit on weekends. Tomatoes, beans and herbs grow best, but the strong wind on the roof has destroyed several flowers. To solve this problem, the volunteers built a low glass wall.\n\nThe garden is not only about food. Every Saturday, a retired teacher, Mr Okoro, gives free lessons to children about plants and insects. In summer, the group also sells extra vegetables at a small market in the library hall. The money pays for new tools and seeds.\n\nNext year, the volunteers hope to add beehives, but they first need permission from the city council.",
  "gist": "Bài báo về khu vườn trên mái thư viện do tình nguyện viên lập ra, nay có khoảng 40 người chăm sóc và còn dạy trẻ em.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the article mainly about?",
    "opts": [
     "A library that sells vegetables",
     "A successful community project on top of a building",
     "A teacher who writes about insects",
     "A company that makes wooden boxes"
    ],
    "a": 1,
    "ev": "When the Riverside Library opened a roof garden last spring",
    "why": "Bài viết kể về vườn trên mái do cộng đồng làm."
   },
   {
    "kind": "detail",
    "q": "How did a local business help the project?",
    "opts": [
     "It paid the volunteers.",
     "It built the glass wall.",
     "It gave boxes and soil.",
     "It sold the vegetables."
    ],
    "a": 2,
    "ev": "a local company donated wooden boxes and soil",
    "why": "Công ty địa phương tặng hộp gỗ và đất."
   },
   {
    "kind": "detail",
    "q": "How did the volunteers deal with the wind?",
    "opts": [
     "They built a low barrier of glass.",
     "They moved the boxes to the ground floor.",
     "They covered the plants every night.",
     "They planted only herbs."
    ],
    "a": 0,
    "ev": "the volunteers built a low glass wall",
    "why": "Họ xây một bức tường kính thấp."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"donated\" means",
    "opts": [
     "sold at a low price",
     "borrowed for a short time",
     "repaired carefully",
     "gave without asking for money"
    ],
    "a": 3,
    "ev": "a local company donated wooden boxes and soil",
    "why": "\"Donated\" là tặng, cho không."
   },
   {
    "kind": "tfng",
    "q": "Bees are already kept on the roof.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Next year, the volunteers hope to add beehives",
    "why": "Tổ ong mới chỉ là kế hoạch cho năm sau nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-b07",
  "lvl": "B1",
  "topic": "daily",
  "genre": "blog",
  "title": "Three Months on Two Wheels",
  "text": "Three months ago, I sold my car and started cycling to work. My friends thought I was crazy, because my office is eleven kilometres from my flat. Honestly, I was not sure either, but the petrol prices and the traffic jams had made me tired of driving.\n\nThe first week was terrible. My legs hurt, I arrived at work sweating, and it rained twice. Then I bought a good waterproof jacket and a bag that fits on the back of the bike, and everything became easier. Now the journey takes me 35 minutes, which is only five minutes longer than by car in the morning rush hour.\n\nThe biggest surprise is how much better I feel. I sleep well, I have more energy in the afternoon, and I have saved nearly 200 euros a month. I also notice things I never saw from the car, such as a tiny bakery where I now buy bread every Friday.\n\nOf course, it is not perfect. In winter I will need warmer gloves, and I still don't enjoy strong wind. But I would recommend trying it for a month. You may be surprised, too.",
  "gist": "Blogger kể về ba tháng bán xe hơi và đạp xe đi làm: lúc đầu khó, sau đó khỏe hơn và tiết kiệm tiền.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's main purpose?",
    "opts": [
     "To complain about bad weather",
     "To sell a bicycle",
     "To explain how to repair a car",
     "To describe a lifestyle change and encourage others"
    ],
    "a": 3,
    "ev": "But I would recommend trying it for a month.",
    "why": "Tác giả kể trải nghiệm và khuyên người khác thử."
   },
   {
    "kind": "detail",
    "q": "What made the writer stop driving?",
    "opts": [
     "The cost of fuel and busy roads",
     "Advice from a doctor",
     "A new job in another city",
     "A car accident"
    ],
    "a": 0,
    "ev": "the petrol prices and the traffic jams had made me tired of driving",
    "why": "Giá xăng và kẹt xe khiến anh chán lái xe."
   },
   {
    "kind": "detail",
    "q": "How does cycling compare with driving in the morning?",
    "opts": [
     "It takes much longer.",
     "It takes the same time.",
     "It takes a little longer.",
     "It is quicker."
    ],
    "a": 2,
    "ev": "which is only five minutes longer than by car in the morning rush hour",
    "why": "Đạp xe chỉ lâu hơn 5 phút."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"tiny\" means",
    "opts": [
     "very old",
     "very small",
     "very expensive",
     "very busy"
    ],
    "a": 1,
    "ev": "a tiny bakery",
    "why": "\"Tiny\" nghĩa là rất nhỏ."
   },
   {
    "kind": "tfng",
    "q": "The writer's friends supported his decision at first.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "My friends thought I was crazy",
    "why": "Bạn bè cho rằng anh điên rồ nên không ủng hộ."
   }
  ]
 },
 {
  "id": "rd-b1-b08",
  "lvl": "B1",
  "topic": "travel",
  "genre": "leaflet",
  "title": "Welcome to Hillside Farm Park",
  "text": "Welcome to Hillside Farm Park\n\nHillside Farm Park is a great day out for families. Visitors can meet more than 60 animals, including goats, ponies and rabbits. Our guides will show you how to feed the animals safely. Feeding times are at 11:00 and 3:00, and food bags cost two euros.\n\nOpening times: Tuesday to Sunday, 10 a.m. to 5 p.m. We are closed on Mondays except during school holidays. Tickets cost 9 euros for adults and 5 euros for children aged 3 to 12. Children under three enter free. Dogs are not allowed, except guide dogs, because they frighten the animals.\n\nFood and drink: The Barn Café serves soup, sandwiches and homemade cakes. You may also bring your own picnic and eat it at the tables near the pond. Please take your rubbish home or use the bins.\n\nGood to know: The paths are flat, so wheelchairs and baby buggies are welcome. Wear shoes that can get dirty, as some areas are muddy after rain. For group bookings of ten people or more, call 0151 555 0147 to get 15% off.",
  "gist": "Tờ rơi giới thiệu trang trại Hillside: giờ mở cửa, giá vé, quy định về chó, quán cà phê và lưu ý cho khách.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the leaflet for?",
    "opts": [
     "Advertising jobs for farm workers",
     "Selling animals to families",
     "Giving visitors useful information about the park",
     "Teaching people to cook"
    ],
    "a": 2,
    "ev": "Hillside Farm Park is a great day out for families.",
    "why": "Tờ rơi cung cấp thông tin cho khách tham quan."
   },
   {
    "kind": "detail",
    "q": "When can visitors learn how to feed the animals?",
    "opts": [
     "At 11:00 and 3:00",
     "At 10:00 and 5:00",
     "Only during school holidays",
     "Every hour from opening time"
    ],
    "a": 0,
    "ev": "Feeding times are at 11:00 and 3:00",
    "why": "Giờ cho ăn là 11:00 và 3:00."
   },
   {
    "kind": "detail",
    "q": "How much does an eight-year-old child pay to enter?",
    "opts": [
     "9 euros",
     "5 euros",
     "2 euros",
     "Nothing"
    ],
    "a": 1,
    "ev": "Tickets cost 9 euros for adults and 5 euros for children aged 3 to 12.",
    "why": "Trẻ 3-12 tuổi trả 5 euro."
   },
   {
    "kind": "inference",
    "q": "Which visitor would have a problem at the park?",
    "opts": [
     "A woman using a wheelchair",
     "A family with a baby buggy",
     "A group of ten adults",
     "A man bringing his pet dog"
    ],
    "a": 3,
    "ev": "Dogs are not allowed, except guide dogs",
    "why": "Chó nuôi không được vào, chỉ chó dẫn đường được phép."
   },
   {
    "kind": "tfng",
    "q": "The park offers a lower price for students.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Tờ rơi không nhắc đến giá cho sinh viên."
   }
  ]
 },
 {
  "id": "rd-b1-c01",
  "lvl": "B1",
  "topic": "work",
  "genre": "email",
  "title": "Changes to the Office Schedule",
  "text": "Subject: Changes to the office schedule\n\nHi everyone,\n\nFrom next Monday, our office will open at 8:00 instead of 9:00 and close at 4:30 instead of 5:30. The change was suggested by many of you in last month's survey, and Mr Park has agreed to try it for three months.\n\nThe new hours mean that staff who live far from the city can avoid the worst traffic. However, the customer phone line will stay open until 5:30, so two people must still be at their desks in the late afternoon. Anna and Nam will take the first month, and we will then change the list.\n\nPlease remember that the meeting room is no longer free before 10:00 because the training team will use it every morning. If you need a room for a client visit, book one by email at least two days before.\n\nIf the new hours cause any problems, tell me and I will pass your comments on to Mr Park.\n\nThanks,\nLan",
  "gist": "Email thông báo thay đổi giờ làm việc của văn phòng, kèm lịch trực điện thoại và phòng họp.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the email?",
    "opts": [
     "To inform staff about a change to office hours",
     "To ask staff to take part in a survey",
     "To explain a new rule about meeting rooms",
     "To report a problem with the phone line"
    ],
    "a": 0,
    "ev": "our office will open at 8:00 instead of 9:00",
    "why": "Email mở đầu bằng việc thông báo giờ mở cửa mới; các ý khác chỉ là chi tiết phụ."
   },
   {
    "kind": "detail",
    "q": "How will the new hours help some employees?",
    "opts": [
     "They can travel when the roads are less busy.",
     "They can take a longer lunch break.",
     "They no longer have to attend meetings.",
     "They can work from home twice a week."
    ],
    "a": 0,
    "ev": "can avoid the worst traffic",
    "why": "Văn bản nói nhân viên ở xa \"can avoid the worst traffic\", tức đi lại khi đường bớt đông."
   },
   {
    "kind": "detail",
    "q": "Who will stay late to answer calls in the first month?",
    "opts": [
     "Lan and Mr Park",
     "Anna and Nam",
     "The training team",
     "Nam and Lan"
    ],
    "a": 1,
    "ev": "Anna and Nam will take the first month",
    "why": "Câu \"Anna and Nam will take the first month\" nêu rõ hai người trực đầu tiên."
   },
   {
    "kind": "vocab",
    "q": "In the second paragraph, \"avoid\" is closest in meaning to",
    "opts": [
     "stay away from",
     "look for",
     "pay for",
     "wait in"
    ],
    "a": 0,
    "ev": "can avoid the worst traffic",
    "why": "\"Avoid\" nghĩa là tránh, tức tránh xa giờ cao điểm."
   },
   {
    "kind": "tfng",
    "q": "Staff can reserve the meeting room for a client visit on the same day they need it.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "book one by email at least two days before",
    "why": "Phải đặt phòng \"at least two days before\", nên không thể đặt trong ngày; câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-c02",
  "lvl": "B1",
  "topic": "travel",
  "genre": "blog",
  "title": "Two Days on the Coast Road",
  "text": "Last weekend my friend Minh and I cycled along the coast road for two days. We had never done a long bike trip before, so we were a little nervous. On Saturday we left the town at seven o'clock, when the air was still cool. The road was flat for the first thirty kilometres, and we stopped twice to eat fruit and take photos of the fishing boats.\n\nIn the afternoon things got harder. A strong wind blew against us, and Minh's back tyre went flat near a small village. A farmer saw us and lent us a pump, and he refused to take any money. That kindness made the whole day for me.\n\nWe slept in a simple guesthouse by the beach. The room cost only eight dollars, but there was no hot water, so the shower was a shock! On Sunday we rode back by a quieter inland road. Our legs were tired, but we felt proud. Next time we want to try a three-day trip, and I will bring a spare tyre.",
  "gist": "Blog kể về chuyến đạp xe hai ngày dọc bờ biển của hai người bạn, với khó khăn và sự giúp đỡ bất ngờ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the blog mainly about?",
    "opts": [
     "The writer's first two-day bike trip along the coast",
     "How to repair a flat bicycle tyre",
     "A comparison of two beach guesthouses",
     "Advice for people planning a three-day trip"
    ],
    "a": 0,
    "ev": "cycled along the coast road for two days",
    "why": "Cả bài kể lại chuyến đạp xe hai ngày đầu tiên của tác giả."
   },
   {
    "kind": "detail",
    "q": "Why did the friends leave the town at seven o'clock?",
    "opts": [
     "To avoid the strong wind",
     "To ride while the air was cool",
     "To buy fruit at a market",
     "To reach the guesthouse before dark"
    ],
    "a": 1,
    "ev": "when the air was still cool",
    "why": "Bài viết nói họ đi lúc bảy giờ \"when the air was still cool\"; gió chỉ nổi lên vào buổi chiều."
   },
   {
    "kind": "detail",
    "q": "How was the problem with the tyre solved?",
    "opts": [
     "Minh walked to the next town.",
     "They put on a spare tyre.",
     "A farmer lent them a pump.",
     "They paid a farmer to repair it."
    ],
    "a": 2,
    "ev": "A farmer saw us and lent us a pump",
    "why": "Người nông dân cho mượn bơm, và không nhận tiền."
   },
   {
    "kind": "inference",
    "q": "How does the writer feel about the trip as a whole?",
    "opts": [
     "Disappointed because it cost too much",
     "Bored by the flat road",
     "Angry with the farmer",
     "Pleased, even though it was hard"
    ],
    "a": 3,
    "ev": "Our legs were tired, but we felt proud",
    "why": "Dù mệt, tác giả \"felt proud\" và muốn đi chuyến dài hơn, nên cảm nhận tích cực."
   },
   {
    "kind": "tfng",
    "q": "The guesthouse served breakfast to the cyclists.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài chỉ nói phòng rẻ và không có nước nóng, không nhắc đến bữa sáng nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b2-c03",
  "lvl": "B2",
  "topic": "technology",
  "genre": "article",
  "title": "The Shortcut Problem",
  "text": "Navigation apps were meant to make journeys faster for everyone. For individual drivers, they often do. Yet some city planners now argue that the same technology is creating problems on streets that were never designed to carry heavy traffic.\n\nThe reason is simple. When a main road is congested, an app instantly suggests a shortcut through a residential neighbourhood. Thousands of drivers receive the same advice at the same moment, and a quiet street with a school and a playground suddenly fills with cars. Residents in one district, Rivermead, reported that traffic past their houses had tripled within two years of apps becoming popular.\n\nSome councils have responded by installing speed bumps, narrowing lanes, or banning turns at certain times of day. The apps, however, quickly learn about these obstacles and may still direct drivers there if the delay is judged to be small. Critics say the companies behind the software have little incentive to protect local streets, since their goal is to shorten each user's trip.\n\nTransport researchers suggest a different approach: sharing road data directly with the apps so that routes through sensitive areas are marked as closed. Early trials look promising, but they depend on cooperation that is not guaranteed. Until then, the people who live beside the shortcuts will continue to pay the price for other people's convenience.",
  "gist": "Ứng dụng chỉ đường đẩy xe cộ vào các khu dân cư yên tĩnh; các biện pháp của hội đồng thành phố chưa đủ và các nhà nghiên cứu đề xuất chia sẻ dữ liệu đường.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main point of the article?",
    "opts": [
     "Navigation apps no longer help individual drivers.",
     "Councils should ban navigation apps completely.",
     "Navigation apps can push heavy traffic onto unsuitable streets.",
     "Speed bumps are the best way to reduce traffic."
    ],
    "a": 2,
    "ev": "creating problems on streets that were never designed to carry heavy traffic",
    "why": "Bài nói công nghệ này tạo vấn đề trên những con phố không được thiết kế cho nhiều xe."
   },
   {
    "kind": "detail",
    "q": "What did residents of Rivermead report?",
    "opts": [
     "Traffic outside their homes became three times heavier.",
     "A school was closed because of danger.",
     "Traffic fell after speed bumps were built.",
     "App companies agreed to pay for repairs."
    ],
    "a": 0,
    "ev": "traffic past their houses had tripled within two years",
    "why": "\"Tripled\" nghĩa là tăng gấp ba, trong vòng hai năm."
   },
   {
    "kind": "detail",
    "q": "Why do the councils' measures often fail to stop the apps?",
    "opts": [
     "The apps cannot detect physical obstacles.",
     "Drivers deliberately ignore the apps' advice.",
     "Councils remove the obstacles after complaints.",
     "The apps may still send drivers there if the delay seems minor."
    ],
    "a": 3,
    "ev": "may still direct drivers there if the delay is judged to be small",
    "why": "Ứng dụng học được các chướng ngại nhưng vẫn dẫn xe tới nếu độ chậm trễ nhỏ."
   },
   {
    "kind": "vocab",
    "q": "In the last paragraph, \"promising\" is closest in meaning to",
    "opts": [
     "likely to succeed",
     "difficult to measure",
     "very expensive",
     "recently finished"
    ],
    "a": 0,
    "ev": "Early trials look promising",
    "why": "\"Promising\" ở đây là có triển vọng, có vẻ sẽ thành công."
   },
   {
    "kind": "tfng",
    "q": "Most drivers say they would stop using navigation apps if asked to.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không đề cập ý kiến của tài xế về việc ngừng dùng ứng dụng nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b2-c04",
  "lvl": "B2",
  "topic": "environment",
  "genre": "news",
  "title": "A Town Lets Its Grass Grow",
  "text": "The council of Aldermoor, a mid-sized town in the north of the country, has stopped mowing most of its public grass verges and parks. Instead, it has sown wildflower seed on more than forty hectares of land, a decision that surprised many residents when it was announced two summers ago.\n\nThe idea came from a local ecologist, Dr Tran, who noticed that insects were almost absent from the town's tidy lawns. After the first season, her team counted over ninety species of bees, butterflies and beetles in areas that had previously supported fewer than twenty. Birds that feed on insects have followed, and the council says it now spends roughly a third less on grass cutting and fuel.\n\nNot everyone is delighted. Some residents complain that the meadows look untidy by late summer, and a few worry that tall plants block drivers' view at junctions. The council has answered by keeping a one-metre strip beside roads and paths cut short, and by placing small signs that explain the purpose of each meadow.\n\nDr Tran admits that the project cannot solve the wider decline of insects, which is driven largely by farming methods and climate change. \"A town is only a small part of the picture,\" she says. \"But a small part, repeated in many towns, can become a very large one.\" Several neighbouring councils have already asked to visit Aldermoor to learn from its experience.",
  "gist": "Một thị trấn ngừng cắt cỏ, gieo hoa dại; côn trùng tăng mạnh và chi phí giảm, dù vẫn có người phàn nàn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the article mainly about?",
    "opts": [
     "A town's change from mown lawns to wildflower meadows",
     "The causes of insect decline across the country",
     "A dispute between a council and an ecologist",
     "New rules for drivers at road junctions"
    ],
    "a": 0,
    "ev": "has stopped mowing most of its public grass verges and parks",
    "why": "Bài tập trung vào việc thị trấn thôi cắt cỏ và gieo hoa dại cùng kết quả."
   },
   {
    "kind": "detail",
    "q": "What did Dr Tran's team find after the first season?",
    "opts": [
     "Fewer than twenty insect species in places that previously had ninety",
     "More than ninety insect species in places that previously had under twenty",
     "Ninety new bird species in the town's parks",
     "Twenty species of plants in the new meadows"
    ],
    "a": 1,
    "ev": "over ninety species of bees, butterflies and beetles in areas that had previously supported fewer than twenty",
    "why": "Số loài côn trùng tăng từ dưới 20 lên hơn 90 ở khu vực đã chuyển đổi."
   },
   {
    "kind": "detail",
    "q": "How has the council dealt with worries about visibility?",
    "opts": [
     "By removing all meadows near junctions",
     "By asking drivers to slow down",
     "By cutting every meadow before late summer",
     "By keeping the edges beside roads cut short"
    ],
    "a": 3,
    "ev": "keeping a one-metre strip beside roads and paths cut short",
    "why": "Hội đồng giữ dải rộng một mét cạnh đường được cắt ngắn."
   },
   {
    "kind": "inference",
    "q": "What does Dr Tran suggest in her final comment?",
    "opts": [
     "Her project has already ended the decline of insects.",
     "Similar projects in many towns could have a large effect.",
     "Only large cities can help insects.",
     "Towns should ignore the effects of farming."
    ],
    "a": 1,
    "ev": "a small part, repeated in many towns, can become a very large one",
    "why": "Bà ngụ ý nhiều thị trấn cùng làm thì tác động sẽ lớn."
   },
   {
    "kind": "tfng",
    "q": "The council now pays more for fuel than it did before.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "spends roughly a third less on grass cutting and fuel",
    "why": "Hội đồng chi ít hơn khoảng một phần ba cho cắt cỏ và nhiên liệu, không phải nhiều hơn."
   }
  ]
 },
 {
  "id": "rd-b2-c05",
  "lvl": "B2",
  "topic": "work",
  "genre": "dialogue",
  "title": "Sharing One Job",
  "text": "Anna: Minh, I heard you've moved to a job-share with Lan at Orion Logistics. How does that work?\n\nMinh: Basically, we split one full-time planning role. I work Monday to Wednesday morning and Lan covers the rest of the week. We have a shared notebook, and we spend thirty minutes together on Wednesday to hand everything over.\n\nAnna: Doesn't that cause confusion? Clients usually want one point of contact.\n\nMinh: That was my worry at first. But the clients now have two people who know their accounts, so if one of us is ill, nothing stops. Honestly, the biggest challenge isn't communication, it's trust. You have to accept that someone else will make decisions about your projects, and that they may do things differently.\n\nAnna: And the salary? I imagine it's halved.\n\nMinh: Roughly, yes, though our manager argued that we produce more than half each, because we're fresher. I'm not sure that's true, but I do feel less tired. I use my free days to study for a data analysis course, which I couldn't have done before.\n\nAnna: Would you recommend it?\n\nMinh: For people with a clear reason, yes. If you just want more free time without a plan, I think the lower income would become frustrating quickly. Also, it only works if your partner is reliable. I was lucky with Lan.",
  "gist": "Hội thoại về việc hai người chia sẻ một vị trí công việc: cách phối hợp, khó khăn lớn nhất, lương và lời khuyên.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the conversation?",
    "opts": [
     "To discuss Minh's experience of sharing a job",
     "To plan a handover meeting with clients",
     "To explain why a manager is unhappy",
     "To compare two data analysis courses"
    ],
    "a": 0,
    "ev": "we split one full-time planning role",
    "why": "Cả đoạn hội thoại xoay quanh trải nghiệm chia sẻ một công việc của Minh."
   },
   {
    "kind": "detail",
    "q": "What does Minh find hardest about job-sharing?",
    "opts": [
     "Explaining the work to new clients",
     "Finding time for the weekly handover",
     "Accepting that a colleague may decide things differently",
     "Learning the details of each account"
    ],
    "a": 2,
    "ev": "the biggest challenge isn't communication, it's trust",
    "why": "Minh nói thách thức lớn nhất là sự tin tưởng, chấp nhận người khác quyết định khác mình."
   },
   {
    "kind": "detail",
    "q": "What does Minh do with his days off?",
    "opts": [
     "He looks after other clients.",
     "He studies a course in data analysis.",
     "He covers Lan's shifts.",
     "He works for another company."
    ],
    "a": 1,
    "ev": "I use my free days to study for a data analysis course",
    "why": "Minh dùng ngày rảnh để học khóa phân tích dữ liệu."
   },
   {
    "kind": "inference",
    "q": "What does Minh suggest about job-sharing without a clear plan?",
    "opts": [
     "It is easy to organise.",
     "It always leads to higher pay.",
     "It is only suitable for managers.",
     "It may become disappointing because of the lower income."
    ],
    "a": 3,
    "ev": "the lower income would become frustrating quickly",
    "why": "Nếu không có kế hoạch rõ ràng, thu nhập thấp sẽ nhanh chóng gây khó chịu."
   },
   {
    "kind": "tfng",
    "q": "Minh's manager thinks job-sharers produce less than half of a full-timer's work each.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "our manager argued that we produce more than half each, because we're fresher",
    "why": "Quản lý cho rằng mỗi người làm ra hơn một nửa, trái với phát biểu."
   }
  ]
 },
 {
  "id": "rd-b2-c06",
  "lvl": "B2",
  "topic": "education",
  "genre": "article",
  "title": "Why Rereading Fails",
  "text": "Most students believe that the best way to prepare for an exam is to read their notes again and again the night before. Psychologists have known for over a century that this feels effective but works poorly. The reason is that repeated reading creates familiarity, and familiarity is easily mistaken for knowledge.\n\nA more reliable method is called spaced retrieval. Instead of studying a topic for three hours in one evening, the learner studies it for one hour on three separate days, and each time tries to recall the main points from memory before checking the notes. The short gaps allow the brain to forget a little, and the effort of remembering strengthens the connection more than simple rereading does.\n\nIn one classroom experiment, two groups of teenagers learned the same list of science terms. One group studied the list in a single session, while the other met the material in three shorter sessions a week apart. Two months later, the second group remembered almost twice as many terms. Interestingly, when asked beforehand which method they preferred, most students chose the single session.\n\nResearchers are careful to point out that the technique has limits. It requires planning, which many students find difficult, and it is less useful for understanding complex arguments than for memorising facts. Nevertheless, teachers who introduce even a small amount of spacing report that their classes perform better in tests.",
  "gist": "Đọc lại ghi chú tạo cảm giác quen thuộc chứ không phải hiểu biết; học cách quãng và tự gợi nhớ hiệu quả hơn nhưng có giới hạn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "Why students should avoid science subjects",
     "A study method that works better than rereading notes",
     "How teachers can write better exams",
     "The causes of forgetting in old age"
    ],
    "a": 1,
    "ev": "A more reliable method is called spaced retrieval",
    "why": "Bài giới thiệu spaced retrieval như phương pháp hiệu quả hơn việc đọc lại."
   },
   {
    "kind": "detail",
    "q": "Why is rereading notes an unreliable way to study?",
    "opts": [
     "It takes too many hours.",
     "It makes the material seem too difficult.",
     "It forces students to study at night.",
     "It gives a feeling of knowing that is not real knowledge."
    ],
    "a": 3,
    "ev": "familiarity is easily mistaken for knowledge",
    "why": "Đọc lại tạo sự quen thuộc, dễ bị nhầm với kiến thức thật."
   },
   {
    "kind": "detail",
    "q": "What happened in the classroom experiment?",
    "opts": [
     "Both groups remembered a similar number of terms.",
     "The single-session group remembered almost twice as many terms.",
     "The group with several shorter sessions remembered more terms.",
     "The students who preferred spacing did best."
    ],
    "a": 2,
    "ev": "the second group remembered almost twice as many terms",
    "why": "Nhóm học nhiều buổi ngắn nhớ gần gấp đôi số thuật ngữ."
   },
   {
    "kind": "vocab",
    "q": "In the second paragraph, \"reliable\" is closest in meaning to",
    "opts": [
     "more popular",
     "cheaper",
     "quicker to explain",
     "more likely to give good results"
    ],
    "a": 3,
    "ev": "A more reliable method is called spaced retrieval",
    "why": "\"Reliable\" là đáng tin cậy, thường cho kết quả tốt."
   },
   {
    "kind": "tfng",
    "q": "Most students in the experiment preferred the method that worked best.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "most students chose the single session",
    "why": "Phần lớn chọn học một buổi, là phương pháp kém hiệu quả hơn."
   }
  ]
 },
 {
  "id": "rd-b2-c07",
  "lvl": "B2",
  "topic": "culture",
  "genre": "article",
  "title": "Please Touch the Exhibit",
  "text": "For most of their history, museums have followed one unspoken rule: look, but do not touch. Glass cases, ropes and alarms protect fragile objects, and visitors learn to move quietly, hands in pockets. Yet a growing number of museums are quietly breaking that rule, at least for selected items.\n\nThe Harbour Street Museum in the city of Calden recently opened a room where visitors may handle replica tools, coins and pottery. Staff explain that the replicas are made from the same materials as the originals, so people can feel the weight of a stone axe or the roughness of ancient cloth. Curator Ms Okafor says visitors stay up to three times longer in the room than in any other gallery, and children in particular ask more questions.\n\nNot all experts agree with the trend. Some argue that handling replicas can leave visitors with the false impression that they have experienced the real thing, and that the room takes space and money away from the museum's research. Others fear that once touching is allowed in one room, visitors will begin to try it everywhere, putting priceless objects at risk.\n\nMs Okafor accepts these concerns but remains convinced. 'People remember what they do far longer than what they read on a label,' she says. 'If a replica gets them curious about the real object, then it has done its job.'",
  "gist": "Một số bảo tàng cho phép khách chạm vào bản sao; có lợi ích về sự quan tâm nhưng cũng bị chuyên gia lo ngại.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main idea of the article?",
    "opts": [
     "Museums have always let visitors touch objects.",
     "Some museums let visitors handle copies of objects, and this is debated.",
     "Replicas are more valuable than original objects.",
     "Children should not be allowed in museums."
    ],
    "a": 1,
    "ev": "a growing number of museums are quietly breaking that rule",
    "why": "Bài nói xu hướng cho chạm vào bản sao và các ý kiến trái chiều."
   },
   {
    "kind": "detail",
    "q": "What is special about the replicas in Calden?",
    "opts": [
     "They are older than the originals.",
     "They are made from the same materials as the originals.",
     "They are kept behind glass cases.",
     "They were made by visitors."
    ],
    "a": 1,
    "ev": "made from the same materials as the originals",
    "why": "Bản sao được làm từ cùng vật liệu như bản gốc."
   },
   {
    "kind": "detail",
    "q": "What does Ms Okafor say about the visitors in the new room?",
    "opts": [
     "They buy more souvenirs than other visitors.",
     "They stay only a few minutes.",
     "They spend longer there than in other galleries.",
     "They prefer it to every other museum."
    ],
    "a": 2,
    "ev": "visitors stay up to three times longer in the room than in any other gallery",
    "why": "Khách ở lại lâu hơn ở mọi phòng trưng bày khác."
   },
   {
    "kind": "vocab",
    "q": "In the last paragraph, \"convinced\" is closest in meaning to",
    "opts": [
     "slightly worried",
     "completely sure",
     "easily persuaded",
     "politely silent"
    ],
    "a": 1,
    "ev": "remains convinced",
    "why": "Bà Okafor chấp nhận lo ngại nhưng vẫn hoàn toàn tin chắc vào ý tưởng."
   },
   {
    "kind": "tfng",
    "q": "The museum has recorded a fall in visitor numbers since the room opened.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không đưa thông tin về tổng số khách giảm, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b2-c08",
  "lvl": "B2",
  "topic": "society",
  "genre": "letter",
  "title": "Save the Elm Road Centre",
  "text": "Dear Editor,\n\nI am writing in response to your recent article about the plan to close the Elm Road community centre. As someone who has lived in the area for almost thirty years, I believe the council is making a serious mistake, and I would like to explain why.\n\nThe council says that the centre costs too much to run and that few people use it. In fact, the centre is busy in the evenings and at weekends, when the council's own survey was not carried out. Its figures were collected on weekday mornings, when most residents are at work or school. Counting visitors at the wrong time naturally produces low numbers.\n\nMore importantly, the centre offers something that cannot easily be measured in money. Older neighbours who live alone meet there for lunch twice a week. Teenagers use the quiet room for homework because their flats are crowded. A group of parents even started a small repair workshop, which saves several families from buying new appliances. If the building closes, these activities will probably disappear, and the cost to public services in loneliness and poorer health could easily be greater than the savings.\n\nI am not suggesting that the council should ignore its budget. I would simply ask it to repeat the survey at suitable times and to meet residents before making a final decision.\n\nYours faithfully,\nMai Hoang",
  "gist": "Thư gửi biên tập viên phản đối kế hoạch đóng trung tâm cộng đồng, chỉ ra khảo sát sai thời điểm và lợi ích xã hội.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the letter?",
    "opts": [
     "To argue against closing a community centre",
     "To apply for a job at the council",
     "To advertise a repair workshop",
     "To thank the editor for an article"
    ],
    "a": 0,
    "ev": "I believe the council is making a serious mistake",
    "why": "Tác giả viết để phản đối kế hoạch đóng trung tâm."
   },
   {
    "kind": "detail",
    "q": "Why does the writer doubt the council's figures?",
    "opts": [
     "They were collected by untrained volunteers.",
     "They were based only on the centre's income.",
     "They included only elderly residents.",
     "They were gathered at times when few residents can visit."
    ],
    "a": 3,
    "ev": "Its figures were collected on weekday mornings",
    "why": "Số liệu thu vào sáng ngày thường khi cư dân đi làm, đi học."
   },
   {
    "kind": "detail",
    "q": "What do teenagers use the centre for?",
    "opts": [
     "Quiet study",
     "Repairing appliances",
     "Sharing lunch",
     "Weekend sports"
    ],
    "a": 0,
    "ev": "Teenagers use the quiet room for homework",
    "why": "Thanh thiếu niên dùng phòng yên tĩnh để làm bài tập."
   },
   {
    "kind": "inference",
    "q": "What does the writer suggest about closing the centre?",
    "opts": [
     "It would be against the law.",
     "It may cost more in the long run than it saves.",
     "It would please most residents.",
     "It was decided without any budget."
    ],
    "a": 1,
    "ev": "could easily be greater than the savings",
    "why": "Tác giả cho rằng chi phí xã hội có thể lớn hơn khoản tiết kiệm."
   },
   {
    "kind": "tfng",
    "q": "The writer thinks the council should spend more than it can afford.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "I am not suggesting that the council should ignore its budget",
    "why": "Tác giả nói rõ không đề nghị bỏ qua ngân sách."
   }
  ]
 },
 {
  "id": "rd-b2-d01",
  "lvl": "B2",
  "topic": "science",
  "genre": "article",
  "title": "Why We Need Sleep to Remember",
  "text": "Most people think of sleep as a time when the brain simply switches off, but research suggests the opposite. During the night, the brain is busy sorting through the information it has gathered during the day, deciding what to keep and what to discard. This process, known as memory consolidation, is one of the main reasons why a good night's rest improves learning.\n\nIn one well-known type of experiment, volunteers learn a list of word pairs in the evening. Half of them then sleep normally, while the other half stay awake all night. When both groups are tested two days later, after everyone has had a chance to recover, the people who slept immediately after learning remember significantly more. This suggests that sleep protects new memories at the moment when they are most fragile.\n\nDifferent stages of sleep appear to play different roles. Deep sleep, which dominates the first half of the night, seems to strengthen factual memories, such as vocabulary or historical dates. Rapid eye movement sleep, which becomes longer towards morning, is more closely linked to emotional memories and to creative problem solving. A person who regularly cuts their sleep short by two hours may therefore lose the very stages that matter most for certain kinds of learning.\n\nThese findings have practical implications for students. Many of them believe that staying up until dawn to revise is an effective strategy, yet the evidence indicates that it may be counterproductive. A more sensible approach is to study in the evening, sleep for a full night and review the material briefly the next morning. Researchers stress, however, that sleep is not magic: it can only strengthen information that was properly understood in the first place.",
  "gist": "Giấc ngủ giúp não củng cố trí nhớ, và các giai đoạn ngủ khác nhau củng cố các loại ký ức khác nhau; vì vậy thức đêm để ôn bài thường phản tác dụng.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main point of the passage?",
    "opts": [
     "Sleep actively helps the brain to store what has been learned.",
     "Students should avoid studying in the evening.",
     "The brain stops working completely during sleep.",
     "Creative people need less sleep than other people."
    ],
    "a": 0,
    "ev": "the brain is busy sorting through the information it has gathered during the day",
    "why": "Đoạn 1 nói não hoạt động để sắp xếp và củng cố thông tin trong khi ngủ."
   },
   {
    "kind": "detail",
    "q": "In the experiment described, when were the two groups compared?",
    "opts": [
     "Two days after the learning session, once both had recovered",
     "On the morning straight after the night without sleep",
     "Before either group had learned anything",
     "One week after the volunteers had left the laboratory"
    ],
    "a": 0,
    "ev": "When both groups are tested two days later, after everyone has had a chance to recover",
    "why": "Hai nhóm được kiểm tra sau hai ngày, khi mọi người đã hồi phục."
   },
   {
    "kind": "detail",
    "q": "According to the passage, what is deep sleep associated with?",
    "opts": [
     "Strengthening factual information",
     "Producing emotional memories",
     "Becoming longer as morning approaches",
     "Solving creative problems"
    ],
    "a": 0,
    "ev": "seems to strengthen factual memories, such as vocabulary or historical dates",
    "why": "Giấc ngủ sâu củng cố ký ức về sự kiện như từ vựng, ngày tháng."
   },
   {
    "kind": "inference",
    "q": "What can be inferred about a student who sleeps four hours before an exam?",
    "opts": [
     "They may miss a stage of sleep that helps certain learning.",
     "They will certainly fail the exam.",
     "They will remember emotional events better.",
     "They will have longer deep sleep than usual."
    ],
    "a": 0,
    "ev": "may therefore lose the very stages that matter most for certain kinds of learning",
    "why": "Cắt ngắn giấc ngủ có thể làm mất các giai đoạn quan trọng cho việc học."
   },
   {
    "kind": "tfng",
    "q": "The passage says that sleep can improve the memory of material that a student has not understood.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "it can only strengthen information that was properly understood in the first place",
    "why": "Văn bản nói giấc ngủ chỉ củng cố thông tin đã được hiểu đúng, nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b2-d02",
  "lvl": "B2",
  "topic": "society",
  "genre": "article",
  "title": "The Box That Changed Trade",
  "text": "Before the 1950s, loading a cargo ship was slow, expensive work. Goods arrived at the port in sacks, barrels and crates of every shape, and teams of dockworkers carried them aboard by hand. A ship could spend almost as many days in harbour as it did at sea, and theft and damage were common. Shipping a single television across the ocean could cost a significant proportion of its price.\n\nThe solution came from a trucking businessman in the United States, who became frustrated watching lorries wait while their goods were lifted individually onto ships. His idea was simple: put everything into a standard metal box that could be moved, without being opened, from a lorry to a ship to a train. The first voyage with such boxes took place in 1956, and it carried fewer than sixty of them.\n\nAt first, the industry resisted the change. Port workers feared for their jobs, and shipping companies did not want to invest in expensive cranes. Moreover, every country used boxes of slightly different sizes, which made them hard to exchange. Only when international organisations agreed on common dimensions in the 1960s did the system become truly global.\n\nThe effects were dramatic. Loading times fell from several days to a matter of hours, and the cost of moving goods dropped so sharply that it became cheaper to make products far from where they were sold. Factories in Asia began supplying shops in Europe and North America, and many economists argue that this change helped to create modern globalisation.\n\nYet the success of the container also has a darker side. Ports now need huge areas of land and powerful machinery, and the large ships that use them produce considerable pollution. Many traditional harbour towns lost their main source of employment and never fully recovered.",
  "gist": "Container tiêu chuẩn hóa đã làm giảm mạnh chi phí và thời gian vận chuyển, thúc đẩy toàn cầu hóa, nhưng cũng gây ô nhiễm và làm mất việc làm ở nhiều cảng cũ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "How a standard box transformed international shipping",
     "The dangers of working in a port",
     "Why televisions became cheaper",
     "How lorries replaced ships"
    ],
    "a": 0,
    "ev": "put everything into a standard metal box",
    "why": "Cả bài nói về ý tưởng container chuẩn hóa và tác động của nó."
   },
   {
    "kind": "detail",
    "q": "Why did shipping take so long before containers?",
    "opts": [
     "Goods were handled by hand in many different shapes",
     "Ships were too small to carry heavy goods",
     "Ports were closed during the winter",
     "Customs officers inspected every sack"
    ],
    "a": 0,
    "ev": "teams of dockworkers carried them aboard by hand",
    "why": "Hàng hóa nhiều hình dạng và được bốc bằng tay nên chậm."
   },
   {
    "kind": "detail",
    "q": "What finally made the container system work worldwide?",
    "opts": [
     "An agreement on common sizes",
     "The invention of the crane",
     "A fall in the price of televisions",
     "The support of port workers"
    ],
    "a": 0,
    "ev": "agreed on common dimensions in the 1960s",
    "why": "Các tổ chức quốc tế thống nhất kích thước chung vào thập niên 1960."
   },
   {
    "kind": "vocab",
    "q": "The word \"resisted\" in paragraph 3 is closest in meaning to",
    "opts": [
     "opposed",
     "delayed",
     "copied",
     "ignored"
    ],
    "a": 0,
    "ev": "the industry resisted the change",
    "why": "Resisted = chống lại, phản đối, vì công nhân lo mất việc."
   },
   {
    "kind": "tfng",
    "q": "The first container voyage carried more than a hundred boxes.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "it carried fewer than sixty of them",
    "why": "Chuyến đầu chở ít hơn sáu mươi thùng, nên sai."
   }
  ]
 },
 {
  "id": "rd-b2-d03",
  "lvl": "B2",
  "topic": "work",
  "genre": "report",
  "title": "The Four-Day Week: What the Trials Show",
  "text": "Over the past few years, a number of companies have experimented with a shorter working week in which employees are paid the same salary for working four days instead of five. The idea once sounded unrealistic, but several large trials have now produced data that managers cannot easily ignore.\n\nIn a typical trial, participating firms agree to measure their output, staff stress and resignation rates before and after the change. In most cases, revenue stayed roughly the same or rose slightly, and the proportion of employees who left voluntarily fell. Workers reported lower levels of burnout and said that they could manage their family responsibilities more easily. Several firms also noticed that fewer people called in sick.\n\nWhy would productivity not fall when working hours do? Researchers point to a few explanations. First, people tend to waste a surprising amount of time in long meetings and unnecessary emails; when time is limited, they cut these out. Second, rested employees concentrate better and make fewer mistakes. Third, a shorter week acts as a powerful incentive, since staff want to keep the arrangement and therefore work harder to prove that it succeeds.\n\nHowever, critics urge caution. The firms that volunteer for trials are usually small, creative organisations that already trust their employees, so the results may not apply to hospitals, factories or restaurants, where a service must be provided every day. Others worry that, in some workplaces, employees simply compress five days of work into four longer and more exhausting ones. There is also the question of whether the enthusiasm shown in the first year will last.\n\nFor now, the evidence suggests that a four-day week can work well in suitable sectors, though it is unlikely to be a universal solution. The most useful lesson may be that working time should be judged by results, not by the number of hours spent at a desk.",
  "gist": "Các thử nghiệm tuần làm việc bốn ngày cho thấy năng suất thường giữ nguyên và nhân viên hài lòng hơn, nhưng kết quả có thể không áp dụng cho mọi ngành.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's overall conclusion about the four-day week?",
    "opts": [
     "It works well in some sectors but is not a universal answer.",
     "It should replace the five-day week everywhere.",
     "It has failed in most trials.",
     "It is only popular with managers."
    ],
    "a": 0,
    "ev": "it is unlikely to be a universal solution",
    "why": "Kết luận: hiệu quả ở ngành phù hợp nhưng không phải giải pháp chung."
   },
   {
    "kind": "detail",
    "q": "What happened to revenue in most of the trials?",
    "opts": [
     "It stayed about the same or increased a little",
     "It fell sharply",
     "It doubled",
     "It was not measured"
    ],
    "a": 0,
    "ev": "revenue stayed roughly the same or rose slightly",
    "why": "Doanh thu giữ nguyên hoặc tăng nhẹ."
   },
   {
    "kind": "detail",
    "q": "According to researchers, why might employees stay productive?",
    "opts": [
     "They remove wasteful activities when time is short",
     "They are paid extra for each hour",
     "They are watched more closely by managers",
     "They take fewer holidays"
    ],
    "a": 0,
    "ev": "when time is limited, they cut these out",
    "why": "Khi thời gian có hạn, họ bỏ bớt họp và email không cần thiết."
   },
   {
    "kind": "inference",
    "q": "Why do critics doubt that the results apply to hospitals?",
    "opts": [
     "A hospital must provide its service every day.",
     "Doctors dislike short weeks.",
     "Hospitals cannot measure output.",
     "Hospital staff are never stressed."
    ],
    "a": 0,
    "ev": "where a service must be provided every day",
    "why": "Bệnh viện phải phục vụ hàng ngày nên khó rút ngắn tuần làm việc."
   },
   {
    "kind": "tfng",
    "q": "The companies in the trials were required by law to take part.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The firms that volunteer for trials",
    "why": "Văn bản nói các công ty \"volunteer\" (tự nguyện) tham gia, nên câu bị bắt buộc theo luật là sai, không phải Not given."
   }
  ]
 },
 {
  "id": "rd-b2-d04",
  "lvl": "B2",
  "topic": "technology",
  "genre": "article",
  "title": "How Noise-Cancelling Headphones Work",
  "text": "Anyone who has travelled on a long flight knows how tiring constant engine noise can be. Noise-cancelling headphones offer a solution, and they do so with a clever piece of physics rather than simply blocking sound with thick padding.\n\nSound travels as a wave of pressure that rises and falls many times per second. If a second wave with exactly the opposite pattern is produced at the same moment, the two waves meet and flatten each other out, leaving almost silence. This effect is called destructive interference. Headphones achieve it by using tiny microphones on the outside of each ear cup to detect the surrounding noise. A small electronic circuit analyses the sound and instantly creates an opposite wave, which is played through the speaker together with your music.\n\nThe technique works best with steady, low sounds such as the hum of an aircraft or the rumble of a train. These sounds are predictable, so the circuit has time to calculate the opposite wave accurately. Sudden or high-pitched noises, such as a dog barking or someone shouting, change too quickly for the system to follow, and they usually pass through. For this reason, most models combine electronic cancellation with ordinary padding that blocks higher sounds physically.\n\nThe technology is not without drawbacks. Some wearers describe a strange feeling of pressure in the ears, although no real pressure is present. The circuit also needs a battery, which makes the headphones heavier and more expensive than simple ones. Audio specialists add that the electronics can slightly change the quality of music, since the system occasionally adds a faint hiss.\n\nDespite these limitations, the devices have become popular with commuters and office workers, who use them to create a quiet space in crowded environments.",
  "gist": "Tai nghe chống ồn dùng micro và mạch điện tử tạo sóng âm ngược pha để triệt tiêu tiếng ồn đều, thấp; chúng kém hiệu quả với âm thanh đột ngột hoặc cao.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the passage?",
    "opts": [
     "To explain how a type of headphones reduces noise",
     "To compare different brands of headphones",
     "To warn people about the dangers of loud music",
     "To describe the history of air travel"
    ],
    "a": 0,
    "ev": "they do so with a clever piece of physics",
    "why": "Bài giải thích nguyên lý vật lý của tai nghe chống ồn."
   },
   {
    "kind": "detail",
    "q": "What is the job of the microphones on the outside of the ear cups?",
    "opts": [
     "To pick up the noise from the surroundings",
     "To record the wearer's voice",
     "To play the opposite wave",
     "To store the music"
    ],
    "a": 0,
    "ev": "to detect the surrounding noise",
    "why": "Micro bên ngoài dùng để phát hiện tiếng ồn xung quanh."
   },
   {
    "kind": "detail",
    "q": "Why do sudden noises usually get through?",
    "opts": [
     "They change too fast for the system to follow",
     "They are too quiet to detect",
     "They are blocked by the padding",
     "They travel as light waves"
    ],
    "a": 0,
    "ev": "change too quickly for the system to follow",
    "why": "Âm thanh đột ngột thay đổi quá nhanh để hệ thống theo kịp."
   },
   {
    "kind": "vocab",
    "q": "The word \"steady\" in paragraph 3 is closest in meaning to",
    "opts": [
     "constant",
     "loud",
     "painful",
     "musical"
    ],
    "a": 0,
    "ev": "steady, low sounds such as the hum of an aircraft",
    "why": "Steady = đều, không đổi, như tiếng ù động cơ."
   },
   {
    "kind": "tfng",
    "q": "Wearers experience real air pressure in their ears when the headphones are on.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "although no real pressure is present",
    "why": "Bài nói không có áp suất thật, chỉ là cảm giác, nên sai."
   }
  ]
 },
 {
  "id": "rd-c1-d05",
  "lvl": "C1",
  "topic": "society",
  "genre": "article",
  "title": "The Tyranny of Being Productive",
  "text": "It has become almost impossible to describe a free afternoon without a note of apology. Rest, we are told, must be earned, optimised or at least justified as preparation for more work. The language of productivity, once confined to factories, now colonises our private lives: we track our steps, schedule our hobbies and judge a weekend by how much of the to-do list it managed to clear. Leisure that produces nothing measurable is regarded as slightly shameful.\n\nThis attitude is curious, because technology was supposed to deliver the opposite. Economists in the early twentieth century confidently predicted that rising efficiency would shrink the working week to fifteen hours by now. Instead, the gains were absorbed by higher expectations. Every time a task becomes quicker, a new one expands to fill the gap, and the sense of having finished never quite arrives. The inbox, unlike the assembly line, has no natural end.\n\nDefenders of the cult of productivity argue that it reflects ambition, and that a society which values effort will achieve more. There is some truth in this; few people want to return to an age of enforced idleness. But the argument confuses activity with accomplishment. Studies of knowledge workers suggest that creative insight frequently arrives not at the desk but during walks, showers and apparently aimless daydreaming. A mind that is permanently occupied has little opportunity to make the unexpected connections on which original thinking depends.\n\nThere is, moreover, a moral cost. When worth is measured by output, those who cannot produce at a steady rate, such as the sick, the elderly or carers, are quietly demoted to the margins of respect. A culture that cannot value rest therefore struggles to value people who cannot work.\n\nNone of this requires abandoning effort. It requires distinguishing between work that gives life meaning and busyness that merely fills time. Perhaps the most radical thing one can do is to spend an afternoon doing nothing in particular, and to feel no need to explain it.",
  "gist": "Tác giả phê phán văn hóa tôn sùng năng suất: nó xâm chiếm đời sống riêng, cản trở sáng tạo và hạ thấp những người không thể làm việc đều đặn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's central argument?",
    "opts": [
     "Valuing constant productivity harms creativity and wellbeing.",
     "Technology has made people work fewer hours.",
     "Ambition is a harmful quality.",
     "Factories should be modernised."
    ],
    "a": 0,
    "ev": "A culture that cannot value rest therefore struggles to value people who cannot work.",
    "why": "Cả bài phê phán việc đo giá trị bằng năng suất và coi nhẹ nghỉ ngơi."
   },
   {
    "kind": "detail",
    "q": "Why did the predicted fifteen-hour working week not appear?",
    "opts": [
     "Higher expectations absorbed the efficiency gains",
     "Workers refused to use new technology",
     "Factories closed down",
     "Economists miscalculated wages"
    ],
    "a": 0,
    "ev": "the gains were absorbed by higher expectations",
    "why": "Lợi ích hiệu suất bị nuốt bởi kỳ vọng cao hơn."
   },
   {
    "kind": "detail",
    "q": "According to the writer, when does creative insight often occur?",
    "opts": [
     "During relaxed, unfocused moments away from the desk",
     "While answering emails",
     "In the middle of meetings",
     "Only after a long holiday"
    ],
    "a": 0,
    "ev": "during walks, showers and apparently aimless daydreaming",
    "why": "Ý tưởng sáng tạo thường đến khi đi dạo, tắm, mơ màng."
   },
   {
    "kind": "inference",
    "q": "What does the writer imply about defenders of productivity?",
    "opts": [
     "They overlook the difference between being busy and achieving something.",
     "They have never worked in an office.",
     "They want to forbid leisure.",
     "They are mostly economists."
    ],
    "a": 0,
    "ev": "But the argument confuses activity with accomplishment.",
    "why": "Tác giả cho rằng họ nhầm lẫn hoạt động với thành tựu."
   },
   {
    "kind": "tfng",
    "q": "The writer believes that people should stop working hard altogether.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "None of this requires abandoning effort.",
    "why": "Tác giả nói không cần từ bỏ nỗ lực, nên sai."
   }
  ]
 },
 {
  "id": "rd-c1-d06",
  "lvl": "C1",
  "topic": "culture",
  "genre": "article",
  "title": "The Clock and the Invention of Punctuality",
  "text": "To a modern reader, the idea that time might be experienced differently seems almost absurd. We divide the day into equal, numbered units and arrange our lives around them. Yet for most of history, time was a matter of natural rhythms: people rose with the light, worked until a task was finished and measured the day by the sun's position or the call to prayer. Precision would have been both unattainable and, for most purposes, unnecessary.\n\nThe mechanical clock changed this, though gradually. The earliest devices, installed in European monasteries and town squares from around the fourteenth century, were designed to regulate religious observance. But they soon acquired a civic role. Merchants discovered that a public bell striking the hours made it easier to coordinate markets, and employers realised that wages could be tied to hours rather than to the completion of tasks. In this sense, the clock did not merely record time; it turned time into a commodity that could be bought, sold and wasted.\n\nThe consequences became most visible with industrialisation. A factory demanded that hundreds of workers arrive together and remain at their machines for fixed periods, so lateness became a form of theft. Early factory owners fined latecomers, and some were accused of altering the clocks to extract extra labour. Schools soon adopted the same discipline, preparing children for the rhythm of employment that awaited them.\n\nThe spread of railways further tightened the grip. Each town had previously kept its own local time, set by the sun, which was tolerable when journeys were slow. Timetables made such differences impractical, and countries were obliged to adopt standard time zones. By the late nineteenth century, a traveller could rely on a single national clock.\n\nIt would be wrong to regard this transformation purely as oppression. Shared time made large-scale cooperation possible, from public transport to scientific experiment. Nevertheless, it replaced a flexible, task-based sense of time with an abstract, relentless one, and many of the anxieties of modern life, including the persistent feeling of never having enough hours, can be traced to that shift.",
  "gist": "Đồng hồ cơ khí biến thời gian thành hàng hóa, và công nghiệp hóa cùng đường sắt buộc xã hội tuân theo giờ giấc chuẩn, vừa có lợi vừa gây áp lực.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly concerned with?",
    "opts": [
     "How clocks reshaped the way societies think about time",
     "The technical design of medieval clocks",
     "The decline of religious practice",
     "The difficulties of building railways"
    ],
    "a": 0,
    "ev": "the clock did not merely record time; it turned time into a commodity",
    "why": "Bài bàn về việc đồng hồ thay đổi quan niệm về thời gian."
   },
   {
    "kind": "detail",
    "q": "Why were the earliest mechanical clocks installed?",
    "opts": [
     "To regulate religious practice",
     "To help merchants set prices",
     "To punish late workers",
     "To help sailors navigate"
    ],
    "a": 0,
    "ev": "designed to regulate religious observance",
    "why": "Đồng hồ đầu tiên đặt để điều tiết sinh hoạt tôn giáo."
   },
   {
    "kind": "detail",
    "q": "Why did railways make local time a problem?",
    "opts": [
     "Timetables could not work if every town kept its own time",
     "Trains were too fast to be timed",
     "Stations had no clocks",
     "Passengers disliked sunlight"
    ],
    "a": 0,
    "ev": "Timetables made such differences impractical",
    "why": "Lịch tàu khiến sự khác biệt giờ địa phương không khả thi."
   },
   {
    "kind": "vocab",
    "q": "The word \"relentless\" in the final paragraph is closest in meaning to",
    "opts": [
     "never easing",
     "very accurate",
     "old-fashioned",
     "friendly"
    ],
    "a": 0,
    "ev": "an abstract, relentless one",
    "why": "Relentless = không ngừng, không nới lỏng."
   },
   {
    "kind": "tfng",
    "q": "The writer thinks that standardised time brought no benefits to society.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "It would be wrong to regard this transformation purely as oppression.",
    "why": "Tác giả nói không nên xem đó thuần túy là áp bức và nêu lợi ích hợp tác, nên sai."
   }
  ]
 },
 {
  "id": "rd-c1-d07",
  "lvl": "C1",
  "topic": "work",
  "genre": "report",
  "title": "Rethinking the Open-Plan Office",
  "text": "When open-plan offices spread in the late twentieth century, their advocates promised a transformation. Removing walls, they argued, would encourage spontaneous conversation, flatten hierarchies and spark collaboration. Employers were also drawn by a more prosaic benefit: an open floor accommodates more desks per square metre than a corridor of private rooms. Today, a considerable share of professionals work in such spaces, yet the evidence for their supposed advantages is surprisingly thin.\n\nOne much-cited study tracked two organisations before and after they dismantled their partitions. Contrary to expectations, face-to-face interaction fell by roughly two-thirds, while the volume of email and instant messaging rose. Employees, it seems, responded to the loss of privacy by withdrawing: they wore headphones, avoided eye contact and conducted important discussions in writing to prevent being overheard. The architecture intended to bring people together had, paradoxically, driven them apart.\n\nThe costs are not merely social. Open offices are associated with more frequent interruptions, and research on attention indicates that recovering from a single interruption can take many minutes. Cognitively demanding tasks, such as analysis or drafting, suffer most. Some employees also report being less satisfied with their environment and more prone to illness, as germs circulate more easily in shared air.\n\nIt would be unfair, however, to condemn open plans outright. Teams whose work consists largely of rapid, informal exchange, such as emergency dispatchers or trading desks, may genuinely benefit from sitting within earshot of one another. The difficulty arises when a single design is imposed on every function regardless of what the work requires.\n\nA more promising model is the so-called activity-based office, in which staff choose between quiet booths, meeting rooms and shared tables according to the task at hand. Early results are encouraging, though they depend heavily on whether organisations trust employees to choose and provide enough of each type of space. Without that, flexibility can degenerate into a daily competition for the few good seats.",
  "gist": "Văn phòng không vách ngăn không mang lại sự hợp tác như hứa hẹn; nhiều nghiên cứu cho thấy giao tiếp trực tiếp giảm và xao nhãng tăng, nên mô hình theo hoạt động có thể tốt hơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main idea of the passage?",
    "opts": [
     "Open-plan offices have not delivered the benefits claimed for them.",
     "Private offices are always more expensive.",
     "Email is better than conversation.",
     "Employees prefer working at home."
    ],
    "a": 0,
    "ev": "the evidence for their supposed advantages is surprisingly thin",
    "why": "Bằng chứng ủng hộ ưu điểm của văn phòng mở rất mỏng."
   },
   {
    "kind": "detail",
    "q": "What was the effect on face-to-face interaction in the study?",
    "opts": [
     "It dropped by about two-thirds",
     "It increased by two-thirds",
     "It stayed the same",
     "It was not recorded"
    ],
    "a": 0,
    "ev": "face-to-face interaction fell by roughly two-thirds",
    "why": "Giao tiếp trực tiếp giảm khoảng hai phần ba."
   },
   {
    "kind": "detail",
    "q": "Which kind of work suffers most from interruptions?",
    "opts": [
     "Work needing deep concentration",
     "Work done by dispatchers",
     "Work done in meeting rooms",
     "Work involving travel"
    ],
    "a": 0,
    "ev": "Cognitively demanding tasks, such as analysis or drafting, suffer most.",
    "why": "Công việc đòi hỏi nhận thức cao như phân tích, soạn thảo chịu ảnh hưởng nhất."
   },
   {
    "kind": "inference",
    "q": "What does the writer suggest about emergency dispatchers?",
    "opts": [
     "Sitting close together may genuinely help their work",
     "They dislike private rooms",
     "They are unaffected by noise",
     "They should wear headphones"
    ],
    "a": 0,
    "ev": "may genuinely benefit from sitting within earshot of one another",
    "why": "Công việc trao đổi nhanh, không chính thức có thể hưởng lợi từ ngồi gần."
   },
   {
    "kind": "tfng",
    "q": "Activity-based offices have been proven to work in every organisation.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Early results are encouraging, though they depend heavily on",
    "why": "Bài nói kết quả ban đầu khả quan nhưng phụ thuộc điều kiện, nên sai."
   }
  ]
 },
 {
  "id": "rd-c1-d08",
  "lvl": "C1",
  "topic": "medical",
  "genre": "article",
  "title": "The Puzzle of the Placebo",
  "text": "A placebo is, by definition, a treatment with no active ingredient: a sugar pill, a saline injection, a sham procedure. It follows that it should do nothing. Yet in clinical trials, patients who receive such inert treatments frequently improve, sometimes substantially, and the phenomenon has intrigued researchers for decades. Understanding it is not merely an academic exercise, since it affects how every new medicine is judged.\n\nPart of the apparent improvement has nothing to do with the placebo itself. Many conditions fluctuate naturally, and people tend to enrol in a trial when their symptoms are at their worst, so a recovery would probably have occurred anyway. Statisticians call this regression to the mean. Careful studies therefore compare placebo groups with patients who receive no treatment at all, in order to isolate the genuine effect.\n\nWhen this is done, a real but modest effect remains, and it is strongest for subjective experiences such as pain, nausea and fatigue. Brain imaging has shown that expecting relief can trigger the release of the body's own painkilling chemicals, suggesting that belief changes physiology rather than merely perception. By contrast, there is little evidence that placebos shrink tumours or cure infections. The effect also appears to be shaped by context: larger pills seem more powerful than small ones, and an injection more effective than a tablet. A confident, attentive doctor can heighten the response further.\n\nThis raises an ethical dilemma. If a pill containing nothing can ease suffering, might clinicians be justified in prescribing it? Most professional guidelines say no, because doing so would require deceiving the patient and would undermine trust. Interestingly, some small studies indicate that placebos may retain a measure of effectiveness even when patients are told openly what they are taking, although the findings remain preliminary and contested.\n\nWhat the placebo ultimately demonstrates is not that the mind can conquer disease, a claim often exaggerated in popular accounts, but that treatment is never purely chemical. The ritual of care, the expectation of benefit and the relationship between doctor and patient all contribute to how well a person feels.",
  "gist": "Hiệu ứng giả dược có thật nhưng khiêm tốn, mạnh nhất với triệu chứng chủ quan như đau; nó cho thấy kỳ vọng và mối quan hệ chăm sóc góp phần vào kết quả điều trị.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's main purpose?",
    "opts": [
     "To explain what the placebo effect is and how far it extends",
     "To prove that doctors deceive patients",
     "To advertise new medicines",
     "To argue that the mind can cure any disease"
    ],
    "a": 0,
    "ev": "treatment is never purely chemical",
    "why": "Bài phân tích giả dược và giới hạn của hiệu ứng này."
   },
   {
    "kind": "detail",
    "q": "According to the passage, why might patients' symptoms improve in a trial for reasons unrelated to the placebo?",
    "opts": [
     "Their symptoms often change naturally over time",
     "The pills contain hidden medicine",
     "Doctors choose healthier patients",
     "Trials are very short"
    ],
    "a": 0,
    "ev": "Many conditions fluctuate naturally",
    "why": "Nhiều bệnh tự dao động nên bệnh nhân có thể khỏi dù sao."
   },
   {
    "kind": "detail",
    "q": "For which kind of symptom is the placebo effect strongest?",
    "opts": [
     "Ones based on personal experience, such as pain",
     "Infections caused by bacteria",
     "Growths such as tumours",
     "Injuries to bones"
    ],
    "a": 0,
    "ev": "strongest for subjective experiences such as pain, nausea and fatigue",
    "why": "Hiệu ứng mạnh nhất với trải nghiệm chủ quan như đau, buồn nôn."
   },
   {
    "kind": "vocab",
    "q": "The word \"inert\" in paragraph 1 is closest in meaning to",
    "opts": [
     "having no active effect",
     "very expensive",
     "harmful",
     "newly invented"
    ],
    "a": 0,
    "ev": "such inert treatments",
    "why": "Inert = trơ, không có hoạt tính, như viên đường."
   },
   {
    "kind": "tfng",
    "q": "Younger patients respond to placebos more strongly than older patients do.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không nói gì về tuổi của bệnh nhân hay mức độ đáp ứng theo tuổi nên là Not given."
   }
  ]
 },
 {
  "id": "rd-c1-e01",
  "lvl": "C1",
  "topic": "society",
  "genre": "article",
  "title": "The Hidden Price of Convenience",
  "text": "Few would dispute that modern life has become easier. Groceries arrive at the door, directions are whispered by a phone, and a film can be summoned in seconds. Yet the cumulative effect of this frictionless existence deserves more scrutiny than it usually receives, not least because its costs are spread so thinly across time that they seldom provoke complaint. Convenience, after all, is rarely neutral: every task we hand to a service is a skill we cease to practise.\n\nConsider navigation. Studies of drivers who rely heavily on satellite guidance suggest that they form weaker mental maps of their surroundings than those who consult paper maps or simply memorise routes. The difference is not dramatic in any single journey, but it accrues, much as a muscle weakens through disuse. What is lost is not merely competence but also a certain attentiveness to place, the incidental noticing that makes a neighbourhood feel like one's own.\n\nDefenders of convenience counter, reasonably, that freed time and effort can be redirected towards more meaningful pursuits. This argument has force, yet it presumes that the saved hours are in fact reinvested rather than absorbed by further consumption. Surveys of household habits hint at the latter: the minutes recovered from cooking are more often spent scrolling than learning the violin.\n\nNone of this amounts to a case for abandoning labour-saving tools. A more defensible position is selective inconvenience: deliberately retaining friction in those activities that sustain judgement, memory or social bonds. A person might let an app plan the commute yet insist on cooking a meal from scratch each weekend. The aim is not nostalgia but stewardship, a conscious decision about which capacities one is prepared to outsource and which one is determined to keep.",
  "gist": "Tác giả cho rằng sự tiện lợi có cái giá ẩn và nên chủ động giữ lại một số việc tốn công để bảo vệ kỹ năng của mình.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's central argument?",
    "opts": [
     "People should decide which tasks to keep effortful, since convenience has hidden costs.",
     "People should give up all modern services and return to older methods.",
     "Convenience is valuable chiefly because it gives people time for meaningful pursuits.",
     "Navigation apps are too unreliable to be used for everyday journeys."
    ],
    "a": 0,
    "ev": "A more defensible position is selective inconvenience",
    "why": "Tác giả đề xuất 'selective inconvenience': giữ lại một số việc tốn công; ông không đòi bỏ hết công cụ."
   },
   {
    "kind": "detail",
    "q": "What do studies suggest about drivers who depend on satellite guidance?",
    "opts": [
     "They build less detailed internal pictures of an area.",
     "They choose slower routes than drivers with paper maps.",
     "They feel more attached to the places they drive through.",
     "They memorise routes more quickly than other drivers."
    ],
    "a": 0,
    "ev": "form weaker mental maps of their surroundings",
    "why": "Bài viết nói họ 'form weaker mental maps of their surroundings'."
   },
   {
    "kind": "detail",
    "q": "Why does the writer doubt the defenders' argument about saved time?",
    "opts": [
     "The time saved may not actually be used for worthwhile activities.",
     "Labour-saving services usually cost more than the time they save.",
     "Convenient services are too expensive for most households.",
     "Saved hours are mostly spent on housework and cooking."
    ],
    "a": 0,
    "ev": "it presumes that the saved hours are in fact reinvested rather than absorbed by further consumption",
    "why": "Lập luận kia 'presumes' thời gian được tái đầu tư, nhưng thực tế thường bị tiêu vào việc khác."
   },
   {
    "kind": "vocab",
    "q": "In the second paragraph, 'accrues' is closest in meaning to",
    "opts": [
     "builds up gradually",
     "vanishes quickly",
     "is noticed at once",
     "is put right"
    ],
    "a": 0,
    "ev": "but it accrues, much as a muscle",
    "why": "Sự khác biệt nhỏ mỗi chuyến nhưng 'accrues' như cơ yếu dần: tích tụ dần dần."
   },
   {
    "kind": "tfng",
    "q": "The writer recommends that people stop using labour-saving devices altogether.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "None of this amounts to a case for abandoning labour-saving tools.",
    "why": "Tác giả nói rõ đây không phải lý do để từ bỏ công cụ tiết kiệm sức lao động, nên câu là False."
   }
  ]
 },
 {
  "id": "rd-c1-e02",
  "lvl": "C1",
  "topic": "environment",
  "genre": "report",
  "title": "Street Tree Survey: Kestrel Bay",
  "text": "This report summarises the findings of a two-year survey of street trees in the fictional coastal town of Kestrel Bay, commissioned by the town council to inform its planting strategy. Volunteers and council officers assessed 4,200 trees across 31 neighbourhoods, recording species, estimated age, health and the condition of the surrounding pavement.\n\nThe headline finding is uneven distribution. Canopy cover averages 18 per cent townwide, but ranges from 31 per cent in the older northern districts to just 7 per cent in the dockside estates, where housing is densest and incomes lowest. Temperature readings taken on three summer afternoons showed that the least shaded streets were, on average, four degrees warmer than the best shaded ones.\n\nThe survey also revealed a worrying lack of diversity. Almost half of all trees belong to just two species, which leaves the town vulnerable should a single disease take hold. Moreover, nearly a third of the trees are over sixty years old, and few young specimens are growing to replace them. Where saplings had been planted, roughly one in five had died within three years, most often because of inadequate watering in the first summer.\n\nThe authors recommend three measures. First, new planting should be directed to the neighbourhoods with the lowest cover rather than spread evenly. Second, no single species should exceed one tenth of future plantings. Third, the council should fund a watering scheme for newly planted trees, which would cost little relative to the cost of replacing failed saplings. The report does not address whether residents would accept the loss of parking spaces that wider planting could entail, a question the authors suggest merits separate consultation. Nevertheless, they stress that the evidence gathered here gives the council a firm basis on which to act without further delay.",
  "gist": "Báo cáo khảo sát cây xanh đường phố ở một thị trấn hư cấu, chỉ ra sự phân bố không đều và đề xuất ưu tiên trồng cây.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the report?",
    "opts": [
     "To report survey findings and advise on future planting",
     "To argue that the council should remove old trees",
     "To compare Kestrel Bay with other coastal towns",
     "To ask volunteers to help water young trees"
    ],
    "a": 0,
    "ev": "The authors recommend three measures.",
    "why": "Báo cáo tóm tắt kết quả khảo sát rồi đưa ra ba đề xuất về trồng cây."
   },
   {
    "kind": "detail",
    "q": "Which part of town has the least tree cover?",
    "opts": [
     "The older northern districts",
     "The dockside estates",
     "Neighbourhoods with the highest incomes",
     "Streets with the worst pavements"
    ],
    "a": 1,
    "ev": "just 7 per cent in the dockside estates",
    "why": "Khu 'dockside estates' chỉ có 7% độ phủ tán cây, thấp nhất."
   },
   {
    "kind": "detail",
    "q": "What was the most common reason that newly planted trees failed?",
    "opts": [
     "Too little water soon after planting",
     "Disease spreading from older trees",
     "Damage to the surrounding pavement",
     "Shade from taller buildings"
    ],
    "a": 0,
    "ev": "inadequate watering in the first summer",
    "why": "Nguyên nhân thường gặp nhất là thiếu nước ('inadequate watering') trong mùa hè đầu."
   },
   {
    "kind": "vocab",
    "q": "In the last sentence, 'merits' is closest in meaning to",
    "opts": [
     "deserves",
     "rejects",
     "avoids",
     "completes"
    ],
    "a": 0,
    "ev": "a question the authors suggest merits separate consultation",
    "why": "Câu hỏi 'merits' tham vấn riêng nghĩa là xứng đáng được tham vấn riêng."
   },
   {
    "kind": "tfng",
    "q": "Residents have agreed that some parking spaces can be removed to make room for trees.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Báo cáo không nói cư dân đã đồng ý hay chưa; nó chỉ nói chưa xét vấn đề này, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-c1-e03",
  "lvl": "C1",
  "topic": "work",
  "genre": "article",
  "title": "Reading the Four-Day Week Carefully",
  "text": "Reports from organisations trialling a four-day working week have been overwhelmingly positive: staff are less stressed, absence falls, and output holds steady. It is tempting to conclude that the shorter week is a free gain. A closer reading, however, suggests the evidence is less conclusive than the headlines imply, and that enthusiasm should be tempered by some methodological caution.\n\nThe first difficulty is selection. Employers that volunteer for such trials tend to be small, flexible and already inclined to believe in the idea. A software studio with autonomous teams can compress its schedule with relative ease; a hospital ward or a manufacturing line, where tasks cannot be postponed, faces constraints that a trial in an office will never reveal. Findings from the former cannot simply be transferred to the latter.\n\nA second difficulty concerns measurement. Productivity in knowledge work is notoriously hard to quantify, and many trials rely on managers' own assessments or on self-reported wellbeing. Participants who know they are part of an experiment, and who stand to lose a cherished benefit if results disappoint, have every incentive to work harder and report favourably. Such enthusiasm may fade once the novelty wears off. Independent audits of output, which would settle the matter, remain rare.\n\nNone of this means the shorter week is a mirage. Several firms have retained it for years, which implies that at least some benefits are durable. What the evidence supports is a narrower claim than its advocates often make: that certain kinds of organisation can reduce hours without losing output, given careful redesign of meetings and workflows. Whether the arrangement would suit a whole economy remains, for now, an open question that no trial of volunteers can settle.",
  "gist": "Tác giả phân tích rằng bằng chứng về tuần làm việc bốn ngày hứa hẹn nhưng kém chắc chắn hơn những gì tiêu đề báo chí gợi ý.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's overall position on the four-day week?",
    "opts": [
     "The results are encouraging but less conclusive than often claimed.",
     "The trials have proved that it suits every economy.",
     "The trials are worthless because all employers exaggerate.",
     "It should be rejected because staff become less productive."
    ],
    "a": 0,
    "ev": "the evidence is less conclusive than the headlines imply",
    "why": "Tác giả cho rằng bằng chứng 'less conclusive than the headlines imply', nhưng không bác bỏ hoàn toàn."
   },
   {
    "kind": "detail",
    "q": "Why might results from an office trial not apply to a hospital ward?",
    "opts": [
     "Work there cannot easily be delayed or rescheduled.",
     "Hospital staff dislike working shorter weeks.",
     "Hospitals have too many managers.",
     "Hospitals measure productivity more precisely."
    ],
    "a": 0,
    "ev": "where tasks cannot be postponed",
    "why": "Bệnh viện có công việc 'cannot be postponed' nên khó nén lịch."
   },
   {
    "kind": "detail",
    "q": "What weakness does the writer find in how trials judge productivity?",
    "opts": [
     "They depend heavily on subjective reports.",
     "They use figures from only one industry.",
     "They ignore the number of days staff are absent.",
     "They compare firms with their competitors."
    ],
    "a": 0,
    "ev": "many trials rely on managers' own assessments or on self-reported wellbeing",
    "why": "Nhiều thử nghiệm dựa vào đánh giá của quản lý và tự báo cáo, tức mang tính chủ quan."
   },
   {
    "kind": "inference",
    "q": "What does the writer suggest by noting that several firms kept the shorter week for years?",
    "opts": [
     "Some of the benefits appear to be lasting.",
     "Every firm that tried it made more profit.",
     "Enthusiasm for the idea never fades.",
     "Further trials are no longer needed."
    ],
    "a": 0,
    "ev": "which implies that at least some benefits are durable",
    "why": "Tác giả nói việc giữ nhiều năm 'implies that at least some benefits are durable'."
   },
   {
    "kind": "tfng",
    "q": "The writer believes the shorter week is an illusion.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "None of this means the shorter week is a mirage.",
    "why": "Tác giả nói rõ tuần bốn ngày không phải là ảo ảnh ('mirage'), nên câu là False."
   }
  ]
 },
 {
  "id": "rd-c1-e04",
  "lvl": "C1",
  "topic": "society",
  "genre": "article",
  "title": "Why Libraries Still Matter",
  "text": "It is a common assumption that public libraries are casualties of the internet: if every text is a few taps away, why maintain buildings full of books? The assumption mistakes what libraries are for. Their core function was never simply to store information but to offer access to it on equal terms, and in that respect the digital age has made them more necessary, not less.\n\nConsider who in fact lacks easy access. Households without reliable broadband, older people unsure of online forms, and students who share a single device with siblings all depend on libraries for connection and guidance. For them, a librarian who can explain how to apply for a benefit or evaluate a dubious website provides something no search engine supplies: patient, personal help.\n\nLibraries also perform a quieter social role. They are among the few remaining public spaces where one may stay for hours without being expected to buy anything. Researchers who study community life often describe such places as social infrastructure, because they foster casual encounters between people of different ages and backgrounds who would otherwise rarely meet. When a branch closes, the savings appear on a budget sheet immediately, whereas the erosion of those encounters is slow and goes unrecorded.\n\nCritics are right that libraries must adapt, and many already have, lending tools, hosting workshops and offering study rooms. But adaptation is not a reason for withdrawal of funds. A sensible council would measure a library's value not by the number of books borrowed alone but by the range of needs it quietly meets. By that standard, even a modestly busy branch often proves to be remarkably good value for the public money it receives.",
  "gist": "Tác giả lập luận thư viện công cộng vẫn cần thiết trong thời đại số và xứng đáng được tài trợ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main point of the article?",
    "opts": [
     "Libraries remain valuable in the digital age and deserve continued funding.",
     "Libraries should stop lending books and become workshop spaces.",
     "The internet has made information equally available to everyone.",
     "Councils spend too much money on social infrastructure."
    ],
    "a": 0,
    "ev": "in that respect the digital age has made them more necessary, not less",
    "why": "Ý chính: thời đại số khiến thư viện 'more necessary, not less'."
   },
   {
    "kind": "detail",
    "q": "Who is described as having to share a device at home?",
    "opts": [
     "Students with brothers or sisters",
     "Older people with online forms",
     "Researchers of community life",
     "Council officers"
    ],
    "a": 0,
    "ev": "students who share a single device with siblings",
    "why": "Bài nêu 'students who share a single device with siblings'."
   },
   {
    "kind": "detail",
    "q": "According to the writer, why is the harm of closing a branch easy to overlook?",
    "opts": [
     "The damage to community contact is gradual and not measured.",
     "The money saved is too small to notice.",
     "Few people ever visit their local branch.",
     "Councils refuse to publish the figures."
    ],
    "a": 0,
    "ev": "the erosion of those encounters is slow and goes unrecorded",
    "why": "Tiết kiệm thấy ngay trên bảng ngân sách, còn tổn hại xã hội thì chậm và 'goes unrecorded'."
   },
   {
    "kind": "vocab",
    "q": "In the third paragraph, 'erosion' is closest in meaning to",
    "opts": [
     "gradual loss",
     "sudden growth",
     "careful study",
     "fair division"
    ],
    "a": 0,
    "ev": "the erosion of those encounters is slow",
    "why": "'Erosion' đi với 'slow' nghĩa là sự mất dần."
   },
   {
    "kind": "tfng",
    "q": "Libraries in the writer's region have recently extended their opening hours.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không đề cập giờ mở cửa, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b1-e05",
  "lvl": "B1",
  "topic": "medical",
  "genre": "leaflet",
  "title": "Sample Leaflet: Looking After Your Back",
  "text": "Sample leaflet: Looking after your back\n\nMany people have back pain at some time in their lives. For most people it is not serious and gets better within a few weeks. This sample leaflet gives some simple advice.\n\nKeep moving. Resting in bed for a long time usually makes back pain worse. Try to continue with gentle activities such as walking, and go back to your normal routine as soon as you can.\n\nLift carefully. Bend your knees, keep the object close to your body and avoid twisting. If something is too heavy, ask someone to help you.\n\nSit well. If you work at a desk, take a short break every 30 minutes to stand up and stretch. Your feet should rest flat on the floor.\n\nWhen to see a doctor. Contact your doctor if the pain lasts longer than six weeks, if it wakes you at night, or if you feel numbness in your legs. Seek help at once if you cannot control your bladder or bowels.\n\nThis leaflet is general information only and does not replace advice from your own doctor or nurse.",
  "gist": "Tờ rơi mẫu đưa lời khuyên chung về giữ lưng khỏe và khi nào cần gặp bác sĩ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the purpose of this leaflet?",
    "opts": [
     "To give general advice about back pain",
     "To advertise a new clinic",
     "To explain how to book an appointment",
     "To describe a back operation"
    ],
    "a": 0,
    "ev": "This sample leaflet gives some simple advice.",
    "why": "Tờ rơi đưa ra lời khuyên đơn giản về đau lưng."
   },
   {
    "kind": "detail",
    "q": "What does the leaflet say about staying in bed for a long time?",
    "opts": [
     "It often makes the pain worse.",
     "It is the quickest way to recover.",
     "It is only useful at night.",
     "It is needed for six weeks."
    ],
    "a": 0,
    "ev": "Resting in bed for a long time usually makes back pain worse.",
    "why": "Nằm nghỉ lâu thường làm đau lưng nặng hơn."
   },
   {
    "kind": "detail",
    "q": "How often should a person who works at a desk stand up and stretch?",
    "opts": [
     "Every 30 minutes",
     "Every hour",
     "Every two hours",
     "Every 10 minutes"
    ],
    "a": 0,
    "ev": "take a short break every 30 minutes to stand up and stretch",
    "why": "Tờ rơi khuyên nghỉ ngắn mỗi 30 phút."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'numbness' means",
    "opts": [
     "loss of feeling",
     "strong heat",
     "a heavy weight",
     "swelling"
    ],
    "a": 0,
    "ev": "if you feel numbness in your legs",
    "why": "'Numbness' là tình trạng mất cảm giác ở chân."
   },
   {
    "kind": "tfng",
    "q": "The leaflet recommends special exercises to strengthen the back.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Tờ rơi chỉ khuyên đi bộ nhẹ, không nhắc bài tập tăng cường lưng, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b1-e06",
  "lvl": "B1",
  "topic": "medical",
  "genre": "leaflet",
  "title": "Sample Discharge Sheet: Sprained Ankle",
  "text": "Sample discharge sheet: Sprained ankle\n\nPatient: Mr Park. Seen at the Green Valley Clinic emergency desk.\n\nYou have a sprained ankle. This means the soft bands that hold the joint together have been stretched. Most sprains heal in two to six weeks.\n\nAt home\nRest your ankle for the first two days and avoid long walks. Put a cold pack, wrapped in a cloth, on the ankle for about 15 minutes several times a day. Never put ice directly on the skin. Wear the bandage during the day and take it off at night. When you sit, raise your foot on a cushion.\n\nGetting better\nAfter two days, start moving the ankle gently. Slowly walk a little further each day. Sport should wait until you can walk without pain.\n\nCome back if\n- the pain is getting worse instead of better\n- your toes turn blue, pale or very cold\n- you have a fever\n- you cannot put any weight on the foot after one week\n\nQuestions: please call the clinic reception on weekdays. This is a sample sheet and all details are fictional.",
  "gist": "Phiếu hướng dẫn xuất viện mẫu cho người bị bong gân mắt cá: chăm sóc tại nhà, hồi phục dần và khi nào cần quay lại.",
  "qs": [
   {
    "kind": "main",
    "q": "What is this sheet mainly for?",
    "opts": [
     "Telling a patient how to look after an injury at home",
     "Explaining how the clinic is organised",
     "Asking the patient to pay a bill",
     "Describing how sports injuries happen"
    ],
    "a": 0,
    "ev": "Rest your ankle for the first two days and avoid long walks.",
    "why": "Phiếu hướng dẫn cách tự chăm sóc mắt cá bị bong gân tại nhà."
   },
   {
    "kind": "detail",
    "q": "How should the cold pack be used?",
    "opts": [
     "Wrapped in a cloth, for about 15 minutes, several times a day",
     "Straight on the skin for about 15 minutes",
     "Wrapped in a cloth, all through the night",
     "Wrapped in a cloth, only once after two days"
    ],
    "a": 0,
    "ev": "Put a cold pack, wrapped in a cloth, on the ankle for about 15 minutes several times a day.",
    "why": "Gói túi lạnh bằng vải, chườm khoảng 15 phút, vài lần mỗi ngày."
   },
   {
    "kind": "detail",
    "q": "When may the patient return to sport?",
    "opts": [
     "When walking is possible without pain",
     "After exactly two days",
     "As soon as the bandage is off",
     "After the clinic telephones"
    ],
    "a": 0,
    "ev": "Sport should wait until you can walk without pain.",
    "why": "Chơi thể thao nên đợi đến khi đi lại không đau."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'raise' means",
    "opts": [
     "lift up",
     "wash",
     "bend",
     "turn"
    ],
    "a": 0,
    "ev": "raise your foot on a cushion",
    "why": "'Raise your foot' là kê chân lên cao."
   },
   {
    "kind": "tfng",
    "q": "The patient should wear the bandage during the night as well as during the day.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Wear the bandage during the day and take it off at night.",
    "why": "Phiếu bảo tháo băng vào ban đêm, nên câu là False."
   }
  ]
 },
 {
  "id": "rd-b1-e07",
  "lvl": "B1",
  "topic": "medical",
  "genre": "letter",
  "title": "A Message from Nurse Lan",
  "text": "Hello Mrs Tran,\n\nThis is Nurse Lan from Green Valley Clinic. I am writing about your blood pressure check last Tuesday. Your reading was a little higher than we would like, but there is no need to worry. One reading does not tell us very much, because blood pressure can go up when people feel nervous or have just climbed the stairs.\n\nDr Silva would like to check it again in two weeks. Please book an appointment at reception or by phone. Before you come, try to avoid coffee and heavy exercise for an hour, and sit quietly in the waiting room for a few minutes.\n\nIn the meantime, it may help to eat less salt, go for a short walk every day and try to sleep well. If you ever have a bad headache, chest pain or feel dizzy and unwell, do not wait for your appointment. Call the emergency number straight away.\n\nBest wishes,\nNurse Lan",
  "gist": "Y tá Lan nhắn bà Tran về chỉ số huyết áp hơi cao, hẹn đo lại và dặn dò lối sống cùng dấu hiệu cần gọi cấp cứu.",
  "qs": [
   {
    "kind": "main",
    "q": "Why is Nurse Lan writing to Mrs Tran?",
    "opts": [
     "To arrange another blood pressure check and give advice",
     "To report a serious illness",
     "To change the clinic's opening hours",
     "To say the doctor is away"
    ],
    "a": 0,
    "ev": "Dr Silva would like to check it again in two weeks.",
    "why": "Mục đích: hẹn đo lại huyết áp sau hai tuần và đưa lời khuyên."
   },
   {
    "kind": "detail",
    "q": "According to the message, why does one reading tell us little?",
    "opts": [
     "Blood pressure can rise for short-term reasons.",
     "The machine is often wrong.",
     "The readings depend on the season.",
     "Doctors read the results differently."
    ],
    "a": 0,
    "ev": "blood pressure can go up when people feel nervous or have just climbed the stairs",
    "why": "Huyết áp có thể tăng tạm thời khi lo lắng hoặc vừa leo cầu thang."
   },
   {
    "kind": "detail",
    "q": "What should Mrs Tran do before the next check?",
    "opts": [
     "Avoid coffee and hard exercise for an hour",
     "Stop eating salt a week earlier",
     "Take a fast walk just before the visit",
     "Eat nothing the night before"
    ],
    "a": 0,
    "ev": "avoid coffee and heavy exercise for an hour",
    "why": "Nên tránh cà phê và tập nặng trong một giờ trước khi đến."
   },
   {
    "kind": "inference",
    "q": "How does Nurse Lan seem to feel about the result?",
    "opts": [
     "Not seriously worried",
     "Very alarmed",
     "Sure that Mrs Tran is ill",
     "Angry with Mrs Tran"
    ],
    "a": 0,
    "ev": "there is no need to worry",
    "why": "Cô nói 'there is no need to worry' nên không quá lo."
   },
   {
    "kind": "tfng",
    "q": "Mrs Tran has had high blood pressure readings before.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Thư không nói bà từng có chỉ số cao trước đó, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b1-e08",
  "lvl": "B1",
  "topic": "medical",
  "genre": "article",
  "title": "Hand Washing: A Simple Habit",
  "text": "Hand washing: a simple habit that protects everyone\n\nWashing your hands properly is one of the easiest ways to stop germs spreading. For health-care students it is the first skill to learn, and it matters just as much at home.\n\nWhen should you wash? Always wash your hands before eating or preparing food, after using the toilet, after coughing, sneezing or blowing your nose, and after touching rubbish. In a clinic, staff also wash before and after every patient.\n\nHow should you wash? Wet your hands with clean running water and apply soap. Rub your palms, the backs of your hands, between your fingers and under your nails for at least 20 seconds. Many people hum a short song to measure the time. Rinse well and dry your hands with a clean towel or paper towel, because wet hands spread germs more easily.\n\nWhat if there is no water? An alcohol-based hand gel is a good alternative, but only when your hands are not visibly dirty. Gel does not replace soap and water when hands look dirty.\n\nGood hand hygiene is cheap, quick and effective. Teach it to the children in your family early.",
  "gist": "Bài giáo dục sức khỏe giải thích khi nào và cách rửa tay đúng để ngăn vi khuẩn lây lan.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the text mostly about?",
    "opts": [
     "When and how to wash hands properly",
     "Which soap is best for clinics",
     "How germs are seen under a microscope",
     "Why children dislike washing"
    ],
    "a": 0,
    "ev": "Washing your hands properly is one of the easiest ways to stop germs spreading.",
    "why": "Bài giải thích khi nào và cách rửa tay đúng."
   },
   {
    "kind": "detail",
    "q": "How long should you rub your hands when washing?",
    "opts": [
     "At least 20 seconds",
     "About 5 seconds",
     "Exactly two minutes",
     "Until the water is warm"
    ],
    "a": 0,
    "ev": "for at least 20 seconds",
    "why": "Cần chà tay ít nhất 20 giây."
   },
   {
    "kind": "detail",
    "q": "Why does the text advise drying hands carefully?",
    "opts": [
     "Wet hands pass on germs more easily.",
     "Towels kill germs on the skin.",
     "Dry hands feel softer.",
     "Soap stays on wet skin."
    ],
    "a": 0,
    "ev": "because wet hands spread germs more easily",
    "why": "Tay ướt dễ lây vi khuẩn hơn."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'alternative' means",
    "opts": [
     "another option",
     "the same product",
     "a cheaper copy",
     "a final step"
    ],
    "a": 0,
    "ev": "An alcohol-based hand gel is a good alternative",
    "why": "'Alternative' là lựa chọn thay thế khi không có nước."
   },
   {
    "kind": "tfng",
    "q": "Hand gel can replace soap and water even when hands are very dirty.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Gel does not replace soap and water when hands look dirty.",
    "why": "Bài nói gel không thay được xà phòng và nước khi tay bẩn, nên là False."
   }
  ]
 },
 {
  "id": "rd-b2-f01",
  "lvl": "B2",
  "topic": "medical",
  "genre": "abstract",
  "title": "Walking Groups and Blood Pressure: A Summary",
  "text": "This is a plain-language summary of a fictional pilot study carried out by a small research team at Green Valley Clinic. The team wanted to find out whether a structured walking programme could help adults with mildly raised blood pressure.\n\nSixty volunteers aged between 45 and 65 took part. They were randomly divided into two equal groups. The first group joined a walking club that met three times a week for twelve weeks, led by a trained health coach. The second group received only a printed leaflet with general lifestyle advice. Nobody was asked to change their medication, and all participants continued to see their own doctors as usual.\n\nBlood pressure was measured at the start and at the end of the programme by a nurse who did not know which group each person belonged to. At the end, the walking group showed a modest average fall in blood pressure, while the leaflet group showed almost no change. Participants in the walking club also reported feeling more energetic and said they enjoyed the social side of the sessions.\n\nThe authors stress that the results should be treated with caution. The sample was small, the study lasted only three months, and volunteers who join exercise studies may already be more motivated than the general population. In addition, the research team did not record what participants ate, so diet may have influenced the outcome.\n\nThe authors conclude that group walking is a low-cost and promising approach worth testing in a larger trial. They do not claim that walking can replace medical treatment, and they recommend that anyone with high blood pressure should follow the advice of their own health professional.",
  "gist": "Tóm tắt một nghiên cứu thí điểm giả định cho thấy đi bộ theo nhóm làm huyết áp giảm nhẹ, nhưng tác giả nhấn mạnh cần thận trọng và cần thử nghiệm lớn hơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the text?",
    "opts": [
     "To explain a small study of group walking and blood pressure and its limits",
     "To advise readers to stop taking their medication",
     "To compare several clinics' exercise programmes",
     "To describe how nurses measure blood pressure"
    ],
    "a": 0,
    "ev": "whether a structured walking programme could help adults with mildly raised blood pressure",
    "why": "Mục đích là tóm tắt nghiên cứu về chương trình đi bộ và huyết áp, kèm các hạn chế."
   },
   {
    "kind": "detail",
    "q": "How was the second group of participants treated?",
    "opts": [
     "They walked alone every day",
     "They were given only written general advice",
     "They were asked to change their medication",
     "They joined a different club twice a week"
    ],
    "a": 1,
    "ev": "received only a printed leaflet with general lifestyle advice",
    "why": "Nhóm thứ hai chỉ nhận tờ rơi in lời khuyên chung."
   },
   {
    "kind": "detail",
    "q": "Why was the nurse who took the measurements unaware of the groups?",
    "opts": [
     "The nurse was new at the clinic",
     "The groups met at different times",
     "The study wanted to avoid bias in the readings",
     "Participants refused to give their names"
    ],
    "a": 2,
    "ev": "a nurse who did not know which group each person belonged to",
    "why": "Y tá không biết ai thuộc nhóm nào để tránh thiên lệch khi đo."
   },
   {
    "kind": "vocab",
    "q": "In the text, the word 'modest' in 'a modest average fall' is closest in meaning to",
    "opts": [
     "sudden",
     "small",
     "dangerous",
     "expected"
    ],
    "a": 1,
    "ev": "a modest average fall in blood pressure",
    "why": "'Modest' ở đây là nhỏ, vừa phải, phù hợp với 'treat with caution'."
   },
   {
    "kind": "tfng",
    "q": "The researchers recorded the diet of every participant.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "the research team did not record what participants ate",
    "why": "Bài nói rõ nhóm nghiên cứu không ghi lại chế độ ăn nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b2-f02",
  "lvl": "B2",
  "topic": "medical",
  "genre": "article",
  "title": "Why Antibiotics Are Losing Their Edge",
  "text": "Antibiotics transformed medicine in the twentieth century, turning once-deadly infections into routine problems. Today, however, doctors worry that these medicines are gradually becoming less effective. The cause is antibiotic resistance, a process in which bacteria change in ways that allow them to survive the drugs designed to kill them.\n\nResistance is a natural part of evolution. When a group of bacteria is exposed to an antibiotic, most of them die, but a few may carry a chance mutation that protects them. These survivors multiply, and soon the resistant strain dominates. The more often antibiotics are used, the more opportunities bacteria have to adapt.\n\nThis is why unnecessary prescribing is such a concern. Most coughs and sore throats are caused by viruses, which antibiotics cannot treat at all. Taking them in these cases offers no benefit to the patient and encourages resistance. Another common problem is stopping a prescribed course too early because one feels better. Patients should always follow the instructions given by their pharmacist or doctor rather than deciding for themselves.\n\nResistance is not only a matter of human medicine. Antibiotics are also used in farming, and resistant bacteria can pass between animals, people and the environment. For this reason, many health authorities promote a joint approach that involves doctors, vets and farmers.\n\nWhat can ordinary people do? Simple habits make a real difference: washing hands regularly, keeping vaccinations up to date, and preparing food hygienically all reduce the number of infections that need treatment in the first place. Fewer infections mean fewer prescriptions, and fewer prescriptions slow the spread of resistance.\n\nResearchers are searching for new antibiotics, but developing them takes many years and is expensive. Experts therefore agree that protecting the medicines we already have is just as important as discovering new ones.",
  "gist": "Bài báo cho công chúng giải thích vì sao vi khuẩn kháng thuốc xuất hiện và mỗi người có thể làm gì để làm chậm quá trình này.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main message of the article?",
    "opts": [
     "New antibiotics will soon solve the problem completely",
     "Viruses are more dangerous to people than bacteria are",
     "Farmers are the only group responsible for resistance",
     "Overusing antibiotics helps resistance spread, so careful use matters"
    ],
    "a": 3,
    "ev": "The more often antibiotics are used, the more opportunities bacteria have to adapt.",
    "why": "Ý chính: dùng kháng sinh càng nhiều, vi khuẩn càng có cơ hội thích nghi nên phải dùng cẩn thận."
   },
   {
    "kind": "detail",
    "q": "According to the text, how does a resistant strain become common?",
    "opts": [
     "Survivors with a protective mutation reproduce",
     "Antibiotics change the bacteria on purpose",
     "Patients pass viruses to bacteria",
     "Vaccinations weaken the medicine"
    ],
    "a": 0,
    "ev": "These survivors multiply, and soon the resistant strain dominates.",
    "why": "Những vi khuẩn sống sót nhân lên và dòng kháng thuốc chiếm ưu thế."
   },
   {
    "kind": "detail",
    "q": "Why is it a mistake to take antibiotics for most sore throats?",
    "opts": [
     "The medicines are too expensive for most patients",
     "They are only suitable for treating young children",
     "They usually make the throat more infected",
     "Most are viral, so the medicines cannot help"
    ],
    "a": 3,
    "ev": "Most coughs and sore throats are caused by viruses, which antibiotics cannot treat at all.",
    "why": "Phần lớn viêm họng do virus nên kháng sinh vô ích."
   },
   {
    "kind": "inference",
    "q": "What can be inferred about the writer's view of new drug development?",
    "opts": [
     "It is easy but unnecessary",
     "It is slow and costly, so it cannot be the only answer",
     "It has already replaced the old antibiotics",
     "It is mainly the job of farmers"
    ],
    "a": 1,
    "ev": "developing them takes many years and is expensive",
    "why": "Phát triển thuốc mới lâu và tốn kém nên không thể là giải pháp duy nhất."
   },
   {
    "kind": "tfng",
    "q": "The article says that vaccinations can help reduce the need for antibiotic prescriptions.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 0,
    "ev": "keeping vaccinations up to date",
    "why": "Tiêm chủng đầy đủ được liệt kê trong các thói quen giảm nhiễm trùng, từ đó giảm kê đơn."
   }
  ]
 },
 {
  "id": "rd-b2-f03",
  "lvl": "B2",
  "topic": "medical",
  "genre": "notice",
  "title": "Notice to Visitors: Infection Control on Ward Floors",
  "text": "Riverside General Hospital\n\nUpdated Visiting Policy for Medical and Surgical Wards\n\nTo protect patients, many of whom have weakened immune systems, the hospital has revised its visiting arrangements. These changes take effect on Monday and will be reviewed after three months.\n\nVisiting hours\nVisitors are welcome between 2 p.m. and 7 p.m. each day. Two people may visit a patient at the same time. Children under twelve may visit only with the agreement of the nurse in charge. Patients who are close to the end of life may receive visitors outside these hours; please speak to the ward manager.\n\nHand hygiene\nEveryone must clean their hands with the gel provided when entering and leaving a ward. Staff will gladly show you the correct technique. Please do not be offended if a member of staff reminds you; the same rule applies to doctors and nurses.\n\nIf you are unwell\nPlease do not visit if you have had a fever, vomiting or diarrhoea in the past two days, or if you have cold symptoms. Contact the patient by phone or video call instead. A visit that seems kind may put another person at serious risk.\n\nFood and flowers\nBecause of the risk of infection, fresh flowers are no longer permitted on wards. Visitors may bring packaged snacks, but patients on special diets should check with the nurse first.\n\nRespecting other patients\nPlease keep conversations quiet and use the family room for longer discussions. Photographs of other patients are not allowed under any circumstances.\n\nThank you for helping us keep everyone safe. Questions about this policy can be directed to the Patient Services Office on the ground floor.",
  "gist": "Thông báo của bệnh viện về quy định thăm bệnh mới nhằm kiểm soát nhiễm khuẩn: giờ thăm, vệ sinh tay, khi bản thân ốm, đồ mang vào.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the purpose of the notice?",
    "opts": [
     "To announce new doctors on the wards",
     "To explain updated rules for hospital visitors",
     "To advertise a new family room",
     "To report an outbreak of infection"
    ],
    "a": 1,
    "ev": "the hospital has revised its visiting arrangements",
    "why": "Thông báo giải thích quy định thăm bệnh được sửa đổi."
   },
   {
    "kind": "detail",
    "q": "Who needs permission from a nurse before visiting?",
    "opts": [
     "Anyone arriving after 7 p.m.",
     "Visitors carrying snacks",
     "Young children",
     "Relatives of surgical patients"
    ],
    "a": 2,
    "ev": "Children under twelve may visit only with the agreement of the nurse in charge.",
    "why": "Trẻ dưới 12 tuổi cần sự đồng ý của y tá trưởng."
   },
   {
    "kind": "detail",
    "q": "What should a person do if they have had vomiting in the past two days?",
    "opts": [
     "Clean their hands twice",
     "Wear a mask in the family room",
     "Ask the ward manager for a special pass",
     "Stay away and contact the patient remotely"
    ],
    "a": 3,
    "ev": "Contact the patient by phone or video call instead.",
    "why": "Người từng nôn trong 2 ngày qua nên gọi điện hoặc video thay vì đến thăm."
   },
   {
    "kind": "vocab",
    "q": "In the notice, 'permitted' in 'fresh flowers are no longer permitted' is closest in meaning to",
    "opts": [
     "allowed",
     "required",
     "sold",
     "recommended"
    ],
    "a": 0,
    "ev": "fresh flowers are no longer permitted on wards",
    "why": "'Permitted' nghĩa là được cho phép; 'no longer permitted' là không còn được phép."
   },
   {
    "kind": "tfng",
    "q": "Staff members are exempt from the hand-hygiene rule.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "the same rule applies to doctors and nurses",
    "why": "Thông báo nói cùng quy định áp dụng cho cả bác sĩ và điều dưỡng, nên nhân viên không được miễn."
   }
  ]
 },
 {
  "id": "rd-b2-f04",
  "lvl": "B2",
  "topic": "medical",
  "genre": "dialogue",
  "title": "Using Teach-Back After a Diagnosis",
  "text": "Tutor Dr Hoang is discussing a recorded role-play with a student nurse, Lan.\n\nDr Hoang: In the video you explained to Mr Park how to use his new inhaler. How do you think it went?\n\nLan: I felt I covered everything. I described each step slowly and showed him the device. At the end I asked, \"Do you understand?\" and he nodded.\n\nDr Hoang: That is a very common habit, but a nod does not tell you much. Many patients say yes because they feel embarrassed or do not want to waste the nurse's time. Have you heard of teach-back?\n\nLan: Only the name. Is it where the patient repeats the information?\n\nDr Hoang: Nearly. The key is that you are checking how well you explained, not testing the patient. You might say, \"I want to be sure I was clear, so could you show me how you would use it at home?\" If he makes a mistake, the responsibility is yours, and you simply explain that step again in a different way.\n\nLan: That sounds much kinder than asking whether he understands. But would it take too long?\n\nDr Hoang: Studies of this method, including some conducted in our own hospital, suggest it adds only a minute or two. Misunderstandings, on the other hand, can lead to repeat visits and avoidable complications.\n\nLan: I also noticed that I used the word \"chronic\" without explaining it.\n\nDr Hoang: Exactly. Plain language matters. Try replacing \"chronic\" with \"long-lasting\", and avoid giving too many instructions at once. Choose the two or three points that matter most.\n\nLan: Could I try the whole conversation again next week?\n\nDr Hoang: Yes. Bring a short list of the key messages and we will record it once more.",
  "gist": "Cuộc trò chuyện giữa giảng viên và sinh viên điều dưỡng về kỹ thuật teach-back: kiểm tra xem mình giải thích có rõ không thay vì hỏi bệnh nhân có hiểu không.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main topic of the conversation?",
    "opts": [
     "How to make patients attend more appointments",
     "How to choose the right inhaler",
     "How to check that a patient has really understood",
     "How to record a video lesson"
    ],
    "a": 2,
    "ev": "The key is that you are checking how well you explained, not testing the patient.",
    "why": "Trọng tâm là cách kiểm tra bệnh nhân thật sự hiểu (teach-back)."
   },
   {
    "kind": "detail",
    "q": "Why does Dr Hoang say a nod is not reliable?",
    "opts": [
     "Patients may agree because they feel embarrassed",
     "Patients often cannot see the device",
     "Nurses rarely look at the patient",
     "Patients forget the nurse's name"
    ],
    "a": 0,
    "ev": "Many patients say yes because they feel embarrassed",
    "why": "Bệnh nhân gật đầu vì ngại, nên cái gật không đáng tin."
   },
   {
    "kind": "detail",
    "q": "What should the nurse do if the patient makes a mistake during teach-back?",
    "opts": [
     "Repeat the explanation in a different way",
     "Ask the patient to return next week",
     "Write a report for the tutor",
     "Remove the device from the patient"
    ],
    "a": 0,
    "ev": "you simply explain that step again in a different way",
    "why": "Y tá chỉ cần giải thích lại bước đó bằng cách khác."
   },
   {
    "kind": "inference",
    "q": "What does Dr Hoang suggest about the time teach-back takes?",
    "opts": [
     "It is too slow to use in practice",
     "It costs little time compared with the problems it avoids",
     "It should only be used with children",
     "It is not supported by any evidence"
    ],
    "a": 1,
    "ev": "adds only a minute or two",
    "why": "Mất thêm 1–2 phút nhưng tránh tái khám, nên tiết kiệm hơn."
   },
   {
    "kind": "tfng",
    "q": "Mr Park used the inhaler incorrectly in the recorded video.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Hội thoại chỉ nói ông Park gật đầu; không nói ông dùng ống hít đúng hay sai, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-c1-f05",
  "lvl": "C1",
  "topic": "medical",
  "genre": "email",
  "title": "Re: Transfer Request for Mr Park",
  "text": "Subject: Re: Transfer request for Mr Park, Bed 14\n\nDear Dr Nam,\n\nThank you for your message and for the thorough summary of Mr Park's case. I am writing to clarify where we stand, since I understand that the delay is causing some frustration on your side.\n\nWe are sympathetic to your request, and I would like to assure you that the decision does not reflect any doubt about the quality of your assessment. Rather, it is a matter of capacity. Our high-dependency unit is currently operating at the limit of its safe staffing levels, and admitting a further patient with Mr Park's needs would, in the view of the nurse in charge, compromise the care of those already here. I recognise that this is hardly a comforting explanation when a colleague is waiting for an answer.\n\nThat said, I do not think the situation is without options. Firstly, we expect two patients to be stepped down to the general ward by tomorrow afternoon, which should free a bed. Secondly, in the meantime, our outreach team would be glad to review Mr Park at your bedside this evening and advise on monitoring. They cannot take over his care, but their input may well reduce the risk of deterioration while he waits.\n\nIt would help me to have a few details: his most recent observations, whether his oxygen requirement has changed since this morning, and whether the family have been told that a transfer is being considered. I am wary of raising expectations before we are certain, so I would suggest they are told only that the possibility is under discussion.\n\nPlease do not hesitate to escalate to the duty consultant if his condition worsens before we speak again; that route exists precisely for situations of this kind.\n\nWith kind regards,\n\nDr Anna Weber\nCritical Care Coordinator, Riverside General Hospital",
  "gist": "Email giữa hai bác sĩ về yêu cầu chuyển bệnh: từ chối tạm thời vì thiếu năng lực, nhưng đưa ra giải pháp thay thế và cách leo thang nếu bệnh nặng hơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of Dr Weber's email?",
    "opts": [
     "To criticise Dr Nam's assessment of the patient",
     "To explain why the transfer is delayed and propose interim steps",
     "To tell the family that the transfer has been approved",
     "To ask Dr Nam to take over Mr Park's care"
    ],
    "a": 1,
    "ev": "it is a matter of capacity",
    "why": "Email giải thích việc chậm là do năng lực và đề xuất bước tạm thời."
   },
   {
    "kind": "detail",
    "q": "What does the outreach team offer to do this evening?",
    "opts": [
     "Move Mr Park to the general ward",
     "Examine Mr Park and advise on monitoring",
     "Assume responsibility for his treatment",
     "Inform his relatives about the transfer"
    ],
    "a": 1,
    "ev": "our outreach team would be glad to review Mr Park at your bedside this evening and advise on monitoring",
    "why": "Nhóm outreach sẽ khám tại giường và tư vấn theo dõi."
   },
   {
    "kind": "detail",
    "q": "According to Dr Weber, when might a bed become available?",
    "opts": [
     "This evening",
     "Tomorrow afternoon",
     "Next week",
     "Once the family agrees"
    ],
    "a": 1,
    "ev": "we expect two patients to be stepped down to the general ward by tomorrow afternoon",
    "why": "Dự kiến chiều mai hai bệnh nhân chuyển xuống khoa thường nên có giường."
   },
   {
    "kind": "vocab",
    "q": "In the email, 'wary of' in 'I am wary of raising expectations' is closest in meaning to",
    "opts": [
     "eager about",
     "careful about",
     "unaware of",
     "angry about"
    ],
    "a": 1,
    "ev": "I am wary of raising expectations before we are certain",
    "why": "'Wary of' là thận trọng, e ngại; hợp với 'before we are certain'."
   },
   {
    "kind": "tfng",
    "q": "Dr Weber says the delay is caused by doubts about Dr Nam's diagnosis.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "the decision does not reflect any doubt about the quality of your assessment",
    "why": "Bà nói rõ quyết định không phản ánh nghi ngờ gì về đánh giá của Dr Nam."
   }
  ]
 },
 {
  "id": "rd-c1-f06",
  "lvl": "C1",
  "topic": "medical",
  "genre": "article",
  "title": "The Quiet Value of Prevention",
  "text": "Health systems tend to reward drama. A surgeon who removes a tumour or a team that revives a patient in cardiac arrest is easily celebrated, whereas a nurse who spends twenty minutes encouraging a patient to attend a screening appointment rarely makes headlines. Yet there is a persuasive case that preventive care deserves far more attention than it receives.\n\nThe logic is straightforward. Many of the conditions that consume the largest share of health budgets, such as type 2 diabetes, heart disease and several cancers, develop over years, and their risk can be reduced by vaccination, early detection and changes in everyday habits. Treating a late-stage illness is almost always more demanding, for patient and system alike, than preventing it or catching it early.\n\nNevertheless, prevention faces structural obstacles. Its benefits are statistical rather than visible: when a screening programme works, nobody can point to the individuals who were spared. Its rewards also arrive slowly, often long after the politician or manager who funded the programme has left office. Budgets, by contrast, are planned annually, which encourages spending on immediate needs.\n\nA further difficulty is that prevention is not uniformly benign. Screening can identify abnormalities that would never have caused harm, leading to anxiety and unnecessary procedures, a phenomenon known as overdiagnosis. Responsible programmes must therefore weigh potential benefit against potential harm and communicate the uncertainty honestly instead of promising certainty.\n\nNone of this undermines the central argument; it refines it. Effective prevention depends on careful evidence, realistic messaging, and equitable access, since those who most need it are often least able to attend appointments during working hours. For students entering the health professions, the lesson is perhaps counterintuitive: some of the most valuable work you will do will be work whose success is measured by what does not happen.",
  "gist": "Bài luận lập luận rằng chăm sóc dự phòng bị đánh giá thấp vì lợi ích khó thấy, nhưng cũng nêu rủi ro như chẩn đoán quá mức và nhu cầu công bằng.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's central argument?",
    "opts": [
     "Surgery brings less benefit to patients than screening does",
     "Screening should be dropped because overdiagnosis harms patients",
     "Prevention is undervalued, though it also has complications",
     "Politicians should take over the planning of hospital budgets"
    ],
    "a": 2,
    "ev": "there is a persuasive case that preventive care deserves far more attention than it receives",
    "why": "Luận điểm chính: dự phòng xứng đáng được chú ý hơn nhưng cũng có phức tạp."
   },
   {
    "kind": "detail",
    "q": "Why does the writer say the benefits of prevention are hard to see?",
    "opts": [
     "Results appear only after a long review",
     "Patients refuse to attend screenings",
     "Nobody can identify the people who were spared illness",
     "Prevention is too costly to measure"
    ],
    "a": 2,
    "ev": "nobody can point to the individuals who were spared",
    "why": "Khi sàng lọc hiệu quả, không ai chỉ ra được người được cứu khỏi bệnh."
   },
   {
    "kind": "detail",
    "q": "What problem is associated with overdiagnosis?",
    "opts": [
     "Delayed vaccination programmes",
     "Anxiety and unnecessary procedures",
     "Lower hospital budgets",
     "Fewer patients attending appointments"
    ],
    "a": 1,
    "ev": "leading to anxiety and unnecessary procedures",
    "why": "Chẩn đoán quá mức dẫn đến lo lắng và thủ thuật không cần thiết."
   },
   {
    "kind": "inference",
    "q": "What does the phrase 'it refines it' suggest about the writer's attitude to the problems of screening?",
    "opts": [
     "They make the argument more precise rather than weaker",
     "They prove the argument wrong",
     "They are exaggerated by critics",
     "They apply only to cancer"
    ],
    "a": 0,
    "ev": "None of this undermines the central argument; it refines it.",
    "why": "Các vấn đề làm lập luận chính xác hơn chứ không làm yếu nó."
   },
   {
    "kind": "tfng",
    "q": "The writer has personally worked on a screening programme.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không nói tác giả từng tham gia chương trình sàng lọc nào, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-c1-f07",
  "lvl": "C1",
  "topic": "medical",
  "genre": "article",
  "title": "When Honesty Hurts: A Reflection on Disclosure",
  "text": "During my second clinical placement I watched a consultant explain a difficult diagnosis to an elderly woman and her son. The son had asked us privately, before the meeting, not to mention the word \"cancer\", insisting that his mother would lose hope. I remember how uncomfortable the team felt as we walked into the room, caught between respect for the family and our duty to the patient.\n\nThe consultant did something I have thought about ever since. She began by asking the patient what she already understood about her illness and how much detail she wished to hear. The patient, to my surprise, answered quite directly: she suspected the news was serious and preferred to know everything. The son appeared taken aback, but he did not object.\n\nThis episode challenged an assumption I had unconsciously absorbed, namely that protecting someone from distressing information is an act of kindness. In many families, and in some cultures, withholding a grave diagnosis is regarded as compassion. I do not wish to dismiss that tradition, which often springs from real love. Nevertheless, it sits uneasily with the principle that competent adults are entitled to make decisions about their own treatment, and they cannot do so without information.\n\nThe ethical solution, I now think, lies neither in blunt disclosure nor in automatic deference to relatives. It lies in discovering what the patient herself wants. Asking permission before sharing bad news, pausing frequently, and allowing silence are skills that can be practised, yet they are rarely examined in assessments.\n\nI do not claim to have settled the dilemma. Another patient might have asked us to speak to her family instead, and respecting that choice would also be a form of respect for autonomy. What the consultant taught me is that the question should be put to the person whose life it concerns.",
  "gist": "Bài suy ngẫm về đạo đức khi báo tin xấu: thay vì giấu theo yêu cầu gia đình hay nói thẳng, hãy hỏi bệnh nhân họ muốn biết bao nhiêu.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main point of the reflection?",
    "opts": [
     "Families should decide what patients are told",
     "Doctors should always give full details immediately",
     "Cancer should never be mentioned aloud",
     "The patient's own wishes should guide how bad news is shared"
    ],
    "a": 3,
    "ev": "the question should be put to the person whose life it concerns",
    "why": "Ý chính: nên hỏi chính bệnh nhân về mong muốn được biết."
   },
   {
    "kind": "detail",
    "q": "What did the consultant do first in the meeting?",
    "opts": [
     "Asked the son to leave the room",
     "Gave the diagnosis straight away",
     "Asked what the patient knew and wanted to hear",
     "Showed the family the test results"
    ],
    "a": 2,
    "ev": "asking the patient what she already understood about her illness and how much detail she wished to hear",
    "why": "Bà bắt đầu bằng việc hỏi bệnh nhân đã hiểu gì và muốn nghe bao nhiêu."
   },
   {
    "kind": "detail",
    "q": "How did the son react when his mother asked for the whole truth?",
    "opts": [
     "He left the room in anger",
     "He was surprised but raised no objection",
     "He asked the consultant to change the diagnosis",
     "He supported her immediately"
    ],
    "a": 1,
    "ev": "The son appeared taken aback, but he did not object.",
    "why": "Người con ngạc nhiên nhưng không phản đối."
   },
   {
    "kind": "inference",
    "q": "What does the writer imply about assessments of medical students?",
    "opts": [
     "They test communication skills too thoroughly",
     "They are designed by patients",
     "They tend to neglect skills for delivering bad news",
     "They forbid silence in conversations"
    ],
    "a": 2,
    "ev": "yet they are rarely examined in assessments",
    "why": "Các kỹ năng này hiếm khi được thi, tức là bị bỏ qua."
   },
   {
    "kind": "tfng",
    "q": "The writer believes that families who withhold diagnoses are acting out of cruelty.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "which often springs from real love",
    "why": "Tác giả nói truyền thống đó thường xuất phát từ tình yêu thật sự, không phải sự tàn nhẫn."
   }
  ]
 },
 {
  "id": "rd-c1-f08",
  "lvl": "C1",
  "topic": "medical",
  "genre": "report",
  "title": "Case Study: Informed Consent in a Time-Pressured Setting",
  "text": "The following fictional case is used in our professional practice module to illustrate how consent can be valid in form yet inadequate in substance.\n\nMr Minh, a 58-year-old man, attended an emergency department with abdominal pain. After investigation, the surgical team recommended an operation the same evening. A junior doctor visited him with the consent form, summarised the procedure in under two minutes, and asked him to sign. Mr Minh, who was in discomfort and anxious, signed without asking questions. Later, a nurse noticed that he seemed unsure what the operation involved and whether any alternatives existed.\n\nValid consent is generally understood to rest on three conditions: the patient must have the capacity to decide, must receive sufficient and relevant information, and must act voluntarily. In this case, capacity was not in doubt. The weaknesses lay elsewhere. The information was brief and delivered in technical language, no alternatives were discussed, and the setting arguably discouraged questions. A signature on a form is evidence that a conversation occurred; it is not, in itself, proof that understanding was achieved.\n\nThe nurse's response was instructive. Rather than challenging the junior doctor publicly, she asked Mr Minh in private what he understood and then alerted the surgical registrar, who returned to the bedside. The registrar explained the main benefits, the common risks and the option of closer monitoring, and gave Mr Minh time to think. He chose to proceed, but this time he could say why.\n\nThree lessons emerge. First, urgency does not remove the duty to inform, though it may shorten the conversation. Second, any team member who doubts a patient's understanding has a responsibility to speak up. Finally, teach-back or similar checks can turn a formality into genuine consent. Students should reflect on how they would feel and act if they were in the nurse's position.",
  "gist": "Ca tình huống giả định về đồng thuận có hiểu biết: chữ ký chưa đủ nếu bệnh nhân không hiểu; y tá phát hiện và giúp quy trình được làm lại đúng cách.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the case study?",
    "opts": [
     "To show that consent forms are unnecessary in emergencies",
     "To illustrate that a signed form does not guarantee real understanding",
     "To criticise nurses who question doctors",
     "To describe how to perform abdominal surgery"
    ],
    "a": 1,
    "ev": "valid in form yet inadequate in substance",
    "why": "Mục đích: chỉ ra đồng thuận hợp lệ về hình thức nhưng chưa đủ về thực chất."
   },
   {
    "kind": "detail",
    "q": "What was the problem with the junior doctor's explanation?",
    "opts": [
     "It was too brief and technical, with no alternatives mentioned",
     "It was given by the wrong person",
     "It was delivered after the operation",
     "It was refused by the patient"
    ],
    "a": 0,
    "ev": "The information was brief and delivered in technical language, no alternatives were discussed",
    "why": "Thông tin ngắn, thuật ngữ, không nêu lựa chọn thay thế."
   },
   {
    "kind": "detail",
    "q": "How did the nurse first act on her concern?",
    "opts": [
     "She cancelled the operation",
     "She informed Mr Minh's family",
     "She corrected the junior doctor in front of others",
     "She asked the patient privately, then told the registrar"
    ],
    "a": 3,
    "ev": "she asked Mr Minh in private what he understood and then alerted the surgical registrar",
    "why": "Cô hỏi riêng bệnh nhân rồi báo cho bác sĩ phẫu thuật cấp cao."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'instructive' in 'The nurse's response was instructive' is closest in meaning to",
    "opts": [
     "surprising",
     "rude",
     "useful to learn from",
     "unnecessary"
    ],
    "a": 2,
    "ev": "The nurse's response was instructive.",
    "why": "'Instructive' nghĩa là mang tính giáo dục, có thể học hỏi, phù hợp với đoạn 'Three lessons emerge'."
   },
   {
    "kind": "tfng",
    "q": "Mr Minh decided against the operation after the second conversation.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "He chose to proceed",
    "why": "Ông chọn tiếp tục phẫu thuật nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-m101",
  "lvl": "B1",
  "topic": "medical",
  "genre": "article",
  "title": "From Molecules to Cells",
  "text": "Molecular biology looks at life at the level of molecules. Scientists in this field study how DNA, RNA and proteins work together inside a cell, and how these actions are controlled. The subject overlaps with two others. Biochemistry studies the chemical reactions that keep body cells alive and let them reproduce. Hormones control the whole system, while enzymes control each single reaction. Genetics studies inheritance, which explains why children resemble their parents. Its branches include population, molecular and clinical genetics.\n\nDoctors use biochemistry every day. Because cell fluids and blood exchange substances constantly, a blood or urine test can reveal what is happening inside the body. Liver and kidney function tests are common examples, and they help doctors to diagnose a disease, to screen for it and to follow its progress.\n\nThe cell is the smallest unit of life. Every cell must store genetic information, use energy, control its own activities and react to stimuli. There are two basic kinds. Prokaryotic cells, such as bacteria, have no membrane-bound compartments. Eukaryotic cells, found in animals, plants, fungi and protists, contain organelles such as the nucleus. In all cells, anabolic reactions build large molecules and catabolic reactions break them down.",
  "gist": "Bài viết giới thiệu sinh học phân tử, hóa sinh, di truyền học và các nhánh của nó, vai trò của xét nghiệm, hai loại tế bào cơ bản và chuyển hóa.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "An introduction to the fields that study life at molecular level and to the basic types of cell",
     "A guide to preparing for a blood test at a hospital",
     "A history of the discovery of bacteria",
     "A comparison of animals, plants and fungi"
    ],
    "a": 0,
    "ev": "Molecular biology looks at life at the level of molecules.",
    "why": "Bài giới thiệu các ngành nghiên cứu ở mức phân tử và hai loại tế bào; các đáp án khác chỉ là chi tiết hoặc không được nhắc tới."
   },
   {
    "kind": "detail",
    "q": "According to the passage, what controls each separate reaction in a cell?",
    "opts": [
     "Hormones",
     "Enzymes",
     "Minerals",
     "Organelles"
    ],
    "a": 1,
    "ev": "enzymes control each single reaction",
    "why": "Văn bản nói hormone điều hòa cả hệ thống còn \"enzymes control each single reaction\"."
   },
   {
    "kind": "detail",
    "q": "Why can a blood or urine test show what is going on inside the body?",
    "opts": [
     "Cells produce blood inside the nucleus",
     "Substances pass back and forth between cells and these fluids",
     "Only these two fluids contain proteins",
     "Doctors remove cells from the liver for each test"
    ],
    "a": 1,
    "ev": "cell fluids and blood exchange substances constantly",
    "why": "Dịch tế bào và máu liên tục trao đổi chất (\"exchange substances constantly\") nên xét nghiệm phản ánh tình trạng bên trong."
   },
   {
    "kind": "vocab",
    "q": "In the first paragraph, the word \"resemble\" is closest in meaning to",
    "opts": [
     "look like",
     "argue with",
     "depend on",
     "learn from"
    ],
    "a": 0,
    "ev": "why children resemble their parents",
    "why": "\"Children resemble their parents\" nghĩa là trẻ giống cha mẹ, tức \"look like\"."
   },
   {
    "kind": "tfng",
    "q": "Bacteria have their DNA enclosed in a nucleus together with several other internal compartments.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Prokaryotic cells, such as bacteria, have no membrane-bound compartments.",
    "why": "Vi khuẩn là tế bào nhân sơ nên \"have no internal compartments\", không có nhân hay bào quan."
   }
  ],
  "unit": "M1"
 },
 {
  "id": "rd-b2-m102",
  "lvl": "B2",
  "topic": "medical",
  "genre": "article",
  "title": "A Tour of the Eukaryotic Cell",
  "text": "A eukaryotic cell works like a well-organised factory, and its internal compartments, called organelles, share out the jobs. The nucleus, which holds the DNA, is surrounded by a double membrane that continues into the endoplasmic reticulum. The rough form of this network is studded with ribosomes, the machines that build proteins. Ribosomes that float freely make proteins for use inside the cytoplasm, whereas those attached to the rough network make proteins that will enter a membrane, stay in an organelle or leave the cell. The attachment is not permanent: after finishing a protein, a ribosome detaches and returns to the free pool. The smooth form has no ribosomes and instead makes lipids and carries out detoxification reactions.\n\nProteins are then sorted in the Golgi complex and leave in vesicles, which are small transport packages rather than true organelles. Mitochondria supply most of the energy. Their folded inner membrane allows aerobic respiration, which uses oxygen to make ATP far more efficiently than the anaerobic processes used by many prokaryotes. This extra energy is one reason why eukaryotic cells can grow larger.\n\nTwo other organelles deal with breakdown. Lysosomes hold digestive enzymes that work best in acid. This is a built-in safeguard, because if a lysosome bursts, the enzymes meet the almost neutral cytoplasm and cannot damage the cell at random. Peroxisomes act on smaller molecules by oxidation, for instance in liver cells that break down alcohol. The process creates hydrogen peroxide, which is harmful in high amounts, so catalase quickly converts it into water and oxygen. Finally, the cytoskeleton gives the cell its shape and provides tracks along which molecules, vesicles and even organelles travel.",
  "gist": "Bài mô tả chức năng các bào quan của tế bào nhân thực: nhân, lưới nội chất, Golgi, ty thể, lysosome, peroxisome và bộ khung tế bào.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the passage?",
    "opts": [
     "To explain how the main organelles of a eukaryotic cell share the work",
     "To argue that prokaryotes are more efficient than eukaryotes",
     "To describe how doctors diagnose liver disease",
     "To list the diseases caused by bacteria"
    ],
    "a": 0,
    "ev": "its internal compartments, called organelles, share out the jobs",
    "why": "Bài đi qua từng bào quan và vai trò của chúng (\"share out the jobs\")."
   },
   {
    "kind": "detail",
    "q": "Which ribosomes produce proteins that are destined to leave the cell?",
    "opts": [
     "Those floating in the cytoplasm",
     "Those attached to the rough network",
     "Those inside the Golgi complex",
     "Those inside mitochondria"
    ],
    "a": 1,
    "ev": "those attached to the rough network make proteins that will enter a membrane, stay in an organelle or leave the cell",
    "why": "Chỉ ribosome gắn trên lưới nội chất hạt mới tạo protein để vào màng, ở lại bào quan hoặc ra khỏi tế bào."
   },
   {
    "kind": "detail",
    "q": "Why is a burst lysosome unlikely to destroy the cell?",
    "opts": [
     "Its enzymes work poorly in the almost neutral cytoplasm",
     "Its enzymes are removed by catalase at once",
     "Its membrane repairs itself immediately",
     "Its enzymes only digest alcohol"
    ],
    "a": 0,
    "ev": "the enzymes meet the almost neutral cytoplasm and cannot damage the cell at random",
    "why": "Enzyme của lysosome hoạt động tốt trong môi trường acid; trong bào tương gần trung tính chúng không phá hủy tế bào."
   },
   {
    "kind": "vocab",
    "q": "In the third paragraph, \"safeguard\" is closest in meaning to",
    "opts": [
     "protection",
     "punishment",
     "fuel",
     "secret"
    ],
    "a": 0,
    "ev": "This is a built-in safeguard",
    "why": "\"Built-in safeguard\" là cơ chế bảo vệ có sẵn, tức \"protection\"."
   },
   {
    "kind": "tfng",
    "q": "Mitochondria contain a small amount of their own DNA.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không nhắc gì đến DNA của ty thể nên đáp án là Not given."
   }
  ],
  "unit": "M1"
 },
 {
  "id": "rd-c1-m103",
  "lvl": "C1",
  "topic": "medical",
  "genre": "report",
  "title": "When a Recycling Organelle Fails",
  "text": "Lysosomes are often described as the recycling centre of the cell, and the consequences of damaging that centre are best seen in the group of inherited conditions known as lysosomal storage disorders. In each of them, a change in the gene that codes for a single lysosomal enzyme leaves the cell unable to break down a particular large molecule. Because the enzyme works poorly or not at all, the molecule is not recycled; instead it accumulates inside the lysosome, which swells and eventually disturbs the function of the whole cell.\n\nAlthough the underlying mechanism is shared, the clinical picture depends on which substance builds up and which tissues are most exposed. Some patients develop an enlarged liver and spleen or bone pain, whereas in others the nervous system is mainly affected, so that a young child may lose skills that were previously acquired. Because such signs are not specific, they are easily mistaken for more common illnesses, and the diagnosis is frequently delayed.\n\nClinical genetics and biochemistry therefore work together. A doctor begins with the family history, since many of these disorders are inherited as recessive traits, meaning that both parents are usually healthy carriers. The suspicion is then tested in the laboratory, where the activity of the suspected enzyme can be measured in a blood sample, and the result is commonly confirmed by looking for the causative change in the DNA.\n\nManagement is still limited. For a few disorders, replacing the missing enzyme by regular infusion reduces the burden of stored material, although it cannot always reach the brain. Other patients rely mainly on supportive care, which aims to relieve symptoms and preserve function. Genetic counselling helps affected families to understand the risk for future pregnancies. The condition thus illustrates how a defect in a single organelle can be traced back to one molecule, one gene and one clinical presentation.",
  "gist": "Bài phân tích nhóm bệnh dự trữ lysosome: nguyên nhân là đột biến gen của một enzyme, biểu hiện đa dạng, chẩn đoán bằng tiền sử gia đình, đo enzyme và xét nghiệm DNA, điều trị còn hạn chế.",
  "qs": [
   {
    "kind": "main",
    "q": "What does the passage mainly illustrate?",
    "opts": [
     "How one faulty gene can disable a single organelle function and cause a disease",
     "Why all inherited diseases can be cured by enzyme replacement",
     "How the nervous system controls the liver and spleen",
     "Why bone pain is the first sign of every genetic disorder"
    ],
    "a": 0,
    "ev": "a defect in a single organelle can be traced back to one molecule, one gene and one clinical presentation",
    "why": "Câu cuối nêu ý chính: một khiếm khuyết bào quan truy ngược được tới một phân tử, một gen và một biểu hiện lâm sàng."
   },
   {
    "kind": "detail",
    "q": "According to the passage, why is the diagnosis often late?",
    "opts": [
     "The signs are not specific and resemble commoner illnesses",
     "The blood test needed is not available in laboratories",
     "Parents are usually unwilling to give a family history",
     "The disorders only appear in adult life"
    ],
    "a": 0,
    "ev": "they are easily mistaken for more common illnesses",
    "why": "Triệu chứng không đặc hiệu nên dễ bị nhầm với bệnh thường gặp hơn."
   },
   {
    "kind": "detail",
    "q": "How can the suspected enzyme problem be tested?",
    "opts": [
     "By measuring the enzyme activity in blood",
     "By removing the lysosomes from the liver",
     "By counting the ribosomes in a urine sample",
     "By observing the cell wall under the microscope"
    ],
    "a": 0,
    "ev": "the activity of the suspected enzyme can be measured in a blood sample",
    "why": "Hoạt tính enzyme nghi ngờ được đo trong mẫu máu, sau đó thường xác nhận bằng xét nghiệm DNA."
   },
   {
    "kind": "vocab",
    "q": "In the first paragraph, \"accumulates\" is closest in meaning to",
    "opts": [
     "gradually collects",
     "quickly disappears",
     "is carried out of the cell",
     "is changed into energy"
    ],
    "a": 0,
    "ev": "accumulates inside the lysosome",
    "why": "Phân tử không được tái chế nên \"accumulates\" là tích tụ dần trong lysosome."
   },
   {
    "kind": "tfng",
    "q": "Replacing the missing enzyme reliably corrects the brain symptoms of every such disorder.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "although it cannot always reach the brain",
    "why": "Văn bản nói liệu pháp thay enzyme \"cannot always reach the brain\" và chỉ dùng cho một vài bệnh."
   }
  ],
  "unit": "M1"
 },
 {
  "id": "rd-b1-m201",
  "lvl": "B1",
  "topic": "medical",
  "genre": "article",
  "title": "From DNA to Protein: How Cells Use Genes",
  "text": "Every cell in your body carries instructions written in DNA. In most cells the DNA is a double-stranded molecule kept in the nucleus. Its strands are held together by hydrogen bonds between matching bases: adenine pairs with thymine, and guanine pairs with cytosine. One bond is weak, but millions together make the molecule very stable, so DNA is a good place to store information for a long time.\n\nThe same stability has a cost. The informational bases are locked inside the helix, and breaking all the bonds each time a protein is needed would waste energy and time. So the cell first copies a gene into RNA, a process called transcription. It needs three control elements: a start site, a stop site and a promoter. The promoter controls how often a gene is copied, because the cell does not need every product in the same amount at the same time. Ribosomes then read the RNA, which is mostly single-stranded, and build the protein.\n\nA cell is never built directly from DNA. Before it divides, it copies its genome and then splits into two daughter cells. Every cell comes from another cell. A virus carries genetic material, but it lacks the machinery to use it and depends on a host cell, so it is not a living organism.",
  "gist": "Bài đọc giải thích ADN lưu trữ thông tin ổn định nhờ liên kết hydro, được phiên mã thành ARN (với promoter, điểm bắt đầu và kết thúc) để ribosome tạo protein, và được sao chép khi tế bào phân chia; virus không phải sinh vật sống.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "Why hydrogen bonds are the strongest bonds in nature",
     "How viruses infect healthy cells",
     "How proteins are broken down inside the nucleus",
     "How cells store genetic information and use it to make proteins"
    ],
    "a": 3,
    "ev": "Every cell in your body carries instructions written in DNA.",
    "why": "Cả bài nói về việc tế bào lưu trữ thông tin di truyền (ADN) và dùng nó (phiên mã, ARN, ribosome) để tạo protein."
   },
   {
    "kind": "detail",
    "q": "According to the text, why does a cell copy a gene into RNA before building a protein?",
    "opts": [
     "Ribosomes are able to read only DNA",
     "RNA is double-stranded and so it is stronger",
     "Opening the helix for every protein would waste energy and time",
     "The DNA is destroyed each time a protein is made"
    ],
    "a": 2,
    "ev": "breaking all the bonds each time a protein is needed would waste energy and time",
    "why": "Phải phá mọi liên kết trong chuỗi xoắn cho mỗi protein thì tốn năng lượng và thời gian, nên tế bào tạo bản sao ARN."
   },
   {
    "kind": "detail",
    "q": "What is the job of the promoter?",
    "opts": [
     "It carries the finished protein out of the cell",
     "It marks the place where copying stops",
     "It reads the RNA and builds the protein",
     "It controls how often a gene is copied"
    ],
    "a": 3,
    "ev": "The promoter controls how often a gene is copied",
    "why": "Promoter kiểm soát tần suất phiên mã; điểm bắt đầu và kết thúc là các yếu tố khác."
   },
   {
    "kind": "vocab",
    "q": "In the phrase \"very stable\", the word stable means",
    "opts": [
     "very large",
     "quick to copy",
     "unlikely to change",
     "easy to see"
    ],
    "a": 2,
    "ev": "make the molecule very stable",
    "why": "Stable = ít thay đổi, bền vững, hợp với ý lưu trữ thông tin lâu dài."
   },
   {
    "kind": "tfng",
    "q": "A virus is able to reproduce without a host cell.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "depends on a host cell",
    "why": "Văn bản nói virus phụ thuộc vào tế bào chủ vì thiếu bộ máy cần thiết nên câu này False."
   }
  ],
  "unit": "M2"
 },
 {
  "id": "rd-b2-m201",
  "lvl": "B2",
  "topic": "medical",
  "genre": "article",
  "title": "Copying and Repairing DNA",
  "text": "Before a cell divides, it must duplicate its DNA. Replication begins at specific sites called origins of replication, where the double helix is unwound. At each origin two replication forks form and move in opposite directions. Each original strand acts as a template, and the enzyme DNA polymerase adds complementary nucleotides to build a new strand. Because every new molecule keeps one old strand and gains one new strand, the process is called semiconservative. Proofreading mechanisms check the new strand, so the copy is almost perfect. The same idea works in the laboratory: the polymerase chain reaction copies DNA in vitro to amplify one chosen fragment.\n\nEven so, DNA is constantly damaged. Normal metabolism and outside factors such as ultraviolet light can cause as many as a million lesions in a single human cell every day. Some lesions block transcription, while others cause mutations that may be passed to daughter cells after mitosis. For this reason repair systems work all the time. If repair fails and the cell does not undergo apoptosis, serious damage such as double-strand breaks can build up.\n\nRecombination is a related process in which two DNA molecules exchange genetic information. During meiosis, homologous chromosomes pair up and swap material, creating new combinations of alleles that offspring can inherit. In mitosis, recombination usually involves sister chromosomes, which are identical, so nothing new is created, yet it is still a common way to repair broken DNA. A special form, V(D)J recombination, occurs only in developing lymphocytes and helps immune cells diversify so that they can recognise new pathogens. Gene therapy, which tries to replace or modify faulty genes in body cells, is a medical idea that grew out of this kind of knowledge.",
  "gist": "Bài đọc mô tả sự sao chép ADN bán bảo tồn (và PCR in vitro), các cơ chế sửa chữa tổn thương ADN, tái tổ hợp trong giảm phân/nguyên phân, tái tổ hợp V(D)J ở lympho bào và liệu pháp gen.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the passage?",
    "opts": [
     "To compare viruses with bacteria",
     "To describe how ribosomes build proteins",
     "To list the symptoms of genetic diseases",
     "To explain how cells copy DNA, repair it and exchange genetic information"
    ],
    "a": 3,
    "ev": "Before a cell divides, it must duplicate its DNA.",
    "why": "Bài tập trung vào sao chép, sửa chữa và tái tổ hợp ADN."
   },
   {
    "kind": "detail",
    "q": "Where does DNA replication start?",
    "opts": [
     "At random points along the strand",
     "Inside the ribosomes",
     "Only at the very ends of a chromosome",
     "At special sites where the helix is unwound"
    ],
    "a": 3,
    "ev": "Replication begins at specific sites called origins of replication",
    "why": "Sao chép bắt đầu tại các điểm khởi đầu sao chép đặc hiệu."
   },
   {
    "kind": "detail",
    "q": "Why is the copying process described as semiconservative?",
    "opts": [
     "Both strands of each new molecule are newly made",
     "Both old strands stay together in one molecule",
     "Each new molecule contains one old and one new strand",
     "Only half of the genome is copied"
    ],
    "a": 2,
    "ev": "every new molecule keeps one old strand and gains one new strand",
    "why": "Mỗi phân tử mới giữ một mạch cũ và thêm một mạch mới."
   },
   {
    "kind": "vocab",
    "q": "In the first paragraph, the word amplify means",
    "opts": [
     "to cut into smaller pieces",
     "to move to another cell",
     "to make many more copies of",
     "to hide from damage"
    ],
    "a": 2,
    "ev": "to amplify one chosen fragment",
    "why": "Amplify = nhân lên nhiều bản của đoạn ADN đã chọn."
   },
   {
    "kind": "tfng",
    "q": "V(D)J recombination takes place in many kinds of cell throughout the body.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "occurs only in developing lymphocytes",
    "why": "Văn bản nói chỉ xảy ra ở lympho bào đang phát triển nên câu này False."
   }
  ],
  "unit": "M2"
 },
 {
  "id": "rd-c1-m201",
  "lvl": "C1",
  "topic": "medical",
  "genre": "report",
  "title": "Cancer: From Risk Factors to Care",
  "text": "Cancer is a group of more than one hundred diseases in which cells grow abnormally and may invade other parts of the body. Not every tumor is dangerous: a benign tumor stays where it is, whereas a malignant one can spread by metastasis. Tobacco causes about a fifth of cancer deaths, and obesity, a poor diet, inactivity and alcohol add roughly another tenth. Certain infections, ionizing radiation and pollutants also contribute, at least partly by changing the genes of a cell. Typically many such changes are needed, and only a small minority of cancers stem from defects inherited from the parents.\n\nBreast cancer shows how symptoms and risk fit together. It usually starts in the cells lining the milk ducts or the lobules that supply them. A woman may notice a lump, dimpling of the skin or fluid from the nipple, but such signs can also have harmless explanations, so the diagnosis rests on a biopsy of the suspicious lump. Further tests then show whether the disease has spread beyond the breast.\n\nLung cancer is a useful contrast. Consider a hypothetical patient, a 62-year-old man who has smoked for four decades. He has a persistent cough, blood in his sputum and shortness of breath. Imaging may reveal a mass, yet it only raises suspicion; a biopsy, usually taken by bronchoscopy, confirms the diagnosis and the type of carcinoma. Small-cell carcinoma usually responds better to chemotherapy and radiotherapy, whereas the non-small-cell type is sometimes treated with surgery. Most cases cannot be cured, so palliative care is an important part of management.\n\nPrevention is therefore the strongest tool. About 85% of lung cancers are linked to long-term smoking, and the rest arise from genetic susceptibility combined with radon, asbestos or air pollution. Avoiding such risk factors, together with screening tests for some cancers, benefits every community.",
  "gist": "Bài viết trình bày ung thư nói chung (u lành/ác, nguyên nhân, di truyền), ung thư vú và ung thư phổi (triệu chứng, chẩn đoán bằng sinh thiết, điều trị, chăm sóc giảm nhẹ) và vai trò của phòng ngừa.",
  "qs": [
   {
    "kind": "main",
    "q": "Which statement best summarises the passage?",
    "opts": [
     "It explains what cancer is and follows breast and lung cancer from signs to treatment and prevention",
     "It explains how damaged DNA is repaired in lung cells",
     "It argues that surgery is the best treatment for every tumor",
     "It compares benign tumors with infections"
    ],
    "a": 0,
    "ev": "Cancer is a group of more than one hundred diseases",
    "why": "Bài giới thiệu ung thư rồi đi qua ung thư vú, phổi: dấu hiệu, chẩn đoán, điều trị, phòng ngừa."
   },
   {
    "kind": "detail",
    "q": "Why can a lump or skin change not be used alone to diagnose breast cancer?",
    "opts": [
     "Patients rarely notice these signs",
     "The signs differ from one patient to another",
     "Such signs can have harmless explanations",
     "Such signs appear only after surgery"
    ],
    "a": 2,
    "ev": "such signs can also have harmless explanations",
    "why": "Dấu hiệu có thể do nguyên nhân lành tính nên cần sinh thiết để chẩn đoán xác định."
   },
   {
    "kind": "detail",
    "q": "Which step confirms the diagnosis of lung cancer in the example?",
    "opts": [
     "Asking about the length of the cough",
     "Taking an imaging scan",
     "Weighing the patient",
     "Taking a tissue sample"
    ],
    "a": 3,
    "ev": "a biopsy, usually taken by bronchoscopy, confirms the diagnosis",
    "why": "Sinh thiết xác định chẩn đoán; hình ảnh chỉ gợi ý nghi ngờ."
   },
   {
    "kind": "inference",
    "q": "What does the passage suggest about care for most lung cancer patients?",
    "opts": [
     "It is unnecessary once the tumor is found",
     "It relies only on chemotherapy",
     "It almost always ends in complete recovery",
     "It often aims to control symptoms because a cure is usually not possible"
    ],
    "a": 3,
    "ev": "Most cases cannot be cured, so palliative care is an important part of management.",
    "why": "Vì hầu hết ca không chữa khỏi, chăm sóc giảm nhẹ là phần quan trọng."
   },
   {
    "kind": "tfng",
    "q": "According to the passage, only people who smoke ever develop lung cancer.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "the rest arise from genetic susceptibility combined with radon, asbestos or air pollution",
    "why": "Khoảng 85% do hút thuốc, phần còn lại do di truyền và môi trường nên câu này False."
   }
  ],
  "unit": "M2"
 },
 {
  "id": "rd-b1-m301",
  "lvl": "B1",
  "topic": "medical",
  "genre": "article",
  "title": "Your Skin: Three Layers, Many Jobs",
  "text": "The skin is the largest organ of the body, and together with hair and nails it forms the integumentary system. Its first job is protection. It keeps water inside the body and keeps germs, chemicals and harmful sunlight out.\n\nThe skin has three layers. The epidermis is the thin outer layer. It has no blood vessels, and its cells are constantly lost from the surface and replaced from below. Some of these cells make melanin, the pigment that gives skin its colour and helps to block ultraviolet rays. The dermis lies under the epidermis. It is thicker and contains blood vessels, nerves and glands. Collagen fibres in the dermis make the skin strong, while elastin fibres let it stretch. Below the dermis is the hypodermis, a layer of fat that protects the organs and keeps the body warm.\n\nThe skin also helps to control temperature. When you are hot, your sweat glands release sweat, and the body cools down as the sweat evaporates. Nerve endings in the skin let you feel touch, pain, heat and cold. Hair and nails are made of keratin, a tough protein, and they protect the head and the tips of the fingers and toes.",
  "gist": "Da gồm ba lớp (thượng bì, trung bì, hạ bì), bảo vệ cơ thể, điều hòa thân nhiệt và cảm nhận kích thích.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "The structure of the skin and what it does for the body",
     "How to treat common skin diseases",
     "Why some people have darker skin than others",
     "The way hair and nails grow"
    ],
    "a": 0,
    "ev": "The skin has three layers.",
    "why": "Bài mô tả ba lớp da và các chức năng của da (\"The skin has three layers\"), không bàn về điều trị bệnh hay chỉ riêng tóc, móng."
   },
   {
    "kind": "detail",
    "q": "What is the job of the elastin fibres in the dermis?",
    "opts": [
     "They produce sweat",
     "They allow the skin to stretch",
     "They give the skin its colour",
     "They make the skin waterproof"
    ],
    "a": 1,
    "ev": "elastin fibres let it stretch",
    "why": "Văn bản nói \"elastin fibres let it stretch\"; màu da do melanin, mồ hôi do tuyến mồ hôi."
   },
   {
    "kind": "detail",
    "q": "According to the text, how does sweat help to lower body temperature?",
    "opts": [
     "It blocks ultraviolet rays",
     "It stops blood from reaching the skin",
     "It evaporates from the skin surface",
     "It carries heat into the fat layer"
    ],
    "a": 2,
    "ev": "the body cools down as the sweat evaporates",
    "why": "Câu \"the body cools down as the sweat evaporates\" cho thấy cơ thể mát đi nhờ mồ hôi bay hơi."
   },
   {
    "kind": "vocab",
    "q": "In the text, the word \"pigment\" means",
    "opts": [
     "a type of protein fibre",
     "a kind of gland",
     "a layer of fat",
     "a coloured substance"
    ],
    "a": 3,
    "ev": "melanin, the pigment that gives skin its colour",
    "why": "Pigment là chất tạo màu, như melanin \"gives skin its colour\"."
   },
   {
    "kind": "tfng",
    "q": "Hair and nails are not part of the integumentary system.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "together with hair and nails it forms the integumentary system",
    "why": "Văn bản nói da cùng với tóc và móng tạo thành hệ bì, nên phát biểu là sai."
   }
  ],
  "unit": "M3"
 },
 {
  "id": "rd-b2-m302",
  "lvl": "B2",
  "topic": "medical",
  "genre": "article",
  "title": "Hair, Nails and Glands: The Skin's Appendages",
  "text": "The hair, the nails and the glands of the skin are called its appendages. Each hair grows from a follicle, and growth takes place at the papilla at the bottom, where an artery brings nourishment. New cells multiply, fill with keratin and are pushed up through the surface as the shaft. The shaft has three layers: a soft medulla in the centre, a cortex that forms most of the hair, and a hard outer cuticle. The cortex also holds the melanin that colours the hair, and when melanin production stops with age, the hair turns grey. Nails are built in a similar way. The nail matrix, a thin area beneath the base of the nail, makes new cells that push the older ones forward, so a nail grows about one millimetre per week.\n\nSebaceous glands open into hair follicles and release sebum, an oily secretion rich in lipids that lubricates skin and hair. When teenage hormones raise the output of sebum and pores become blocked by sebum and dead cells, acne may develop. Later in life these glands slow down, and the skin tends to become drier.\n\nSweat is quite different, because it is mostly water with dissolved salts and a little urea. Eccrine glands are spread over most of the body, especially the forehead, palms and soles, and their sweat helps to regulate body temperature. Apocrine glands start to work at puberty and lie mainly in the armpits and pubic area. Their secretion is thicker and has no smell by itself; body odour appears only when bacteria on the skin break it down.",
  "gist": "Phần phụ của da: lông, tóc (nang, nhú, thân tóc), móng (mầm móng), tuyến bã và hai loại tuyến mồ hôi, kèm liên hệ với mụn và mùi cơ thể.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "The hair, nails and glands of the skin and how they work",
     "How the three layers of the skin are arranged",
     "How skin cancer develops from a mole",
     "The treatment of burns and pressure sores"
    ],
    "a": 0,
    "ev": "The hair, the nails and the glands of the skin are called its appendages.",
    "why": "Bài mô tả tóc, móng và các tuyến của da (\"its appendages\"); các lớp da, ung thư da, bỏng không được bàn đến."
   },
   {
    "kind": "detail",
    "q": "Where does the growth of a hair actually take place?",
    "opts": [
     "At the tip of the shaft above the skin",
     "At the papilla at the bottom of the follicle",
     "At the cuticle of the shaft",
     "In the sebaceous gland beside the follicle"
    ],
    "a": 1,
    "ev": "growth takes place at the papilla at the bottom",
    "why": "Câu \"growth takes place at the papilla at the bottom\" nêu rõ nơi tóc phát triển là nhú ở đáy nang; cuticle chỉ là lớp ngoài của thân tóc."
   },
   {
    "kind": "detail",
    "q": "What happens when the matrix of a nail makes new cells?",
    "opts": [
     "The nail stops growing for a week",
     "The hair follicle becomes blocked",
     "The older cells are pushed forward",
     "The nail turns grey with age"
    ],
    "a": 2,
    "ev": "makes new cells that push the older ones forward",
    "why": "Văn bản nói mầm móng \"makes new cells that push the older ones forward\" nên móng dài ra."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"lubricates\" is closest in meaning to",
    "opts": [
     "pushes out dead cells",
     "turns a darker colour",
     "holds in place",
     "makes smooth and less dry"
    ],
    "a": 3,
    "ev": "an oily secretion rich in lipids that lubricates skin and hair",
    "why": "Sebum là chất dầu nên làm da và tóc trơn, mềm, đỡ khô: lubricates = makes smooth and less dry."
   },
   {
    "kind": "tfng",
    "q": "Hair turns grey because the cuticle wears away.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "when melanin production stops with age, the hair turns grey",
    "why": "Văn bản nói tóc bạc khi ngừng tạo melanin, không phải do lớp cuticle mòn đi, nên phát biểu sai."
   }
  ],
  "unit": "M3"
 },
 {
  "id": "rd-c1-m303",
  "lvl": "C1",
  "topic": "medical",
  "genre": "report",
  "title": "A Changing Mole: Following a Case of Melanoma",
  "text": "Mr Park, a fictional patient aged 54, spent most of his working life outdoors and rarely used any protection against the sun. During a routine check-up he mentioned a dark mole on his shoulder that his wife had noticed was growing and had begun to bleed. His doctor referred him to a dermatologist, who examined the lesion closely and recommended that a small sample be removed for laboratory analysis.\n\nThe reasoning behind this caution is straightforward. Melanoma arises from melanocytes, the cells of the epidermis that produce melanin. Melanin normally shields the deeper tissue from ultraviolet radiation, which is why people with little pigment in their skin are at greater risk of sunburn and of skin cancer. Prolonged exposure to ultraviolet rays can damage these cells so that they begin to multiply in a rapid and uncontrolled way. The resulting tumour often starts as a mole that changes in size, shape or colour. Because the melanocytes lie in the deepest part of the epidermis, a growing tumour can invade the dermis, where blood and lymph vessels allow cancer cells to travel to other parts of the body.\n\nFor this reason, timing matters. When melanoma is found early, surgical removal of the affected area is often enough to treat it. If it is left alone, it may spread and become life-threatening. Doctors therefore stress that any mole that changes should be examined promptly, and that prevention, through shade, protective clothing and sunscreen, is wiser than later treatment.\n\nNot every dark spot is dangerous, and a specialist's opinion is needed to tell the difference. Mr Park's case shows how an observant family member, a careful examination and a laboratory result can work together to protect a patient.",
  "gist": "Một ca minh họa u hắc tố: cơ chế phát sinh từ tế bào hắc tố do tia cực tím, tầm quan trọng của khám sớm, sinh thiết và phẫu thuật cắt bỏ.",
  "qs": [
   {
    "kind": "main",
    "q": "What does the passage mainly illustrate?",
    "opts": [
     "Why a changing mole needs early examination and how melanoma develops",
     "How sunscreen is manufactured and tested",
     "Which jobs carry the highest risk of injury",
     "How the epidermis renews itself every month"
    ],
    "a": 0,
    "ev": "any mole that changes should be examined promptly",
    "why": "Bài kể ca bệnh và giải thích cơ chế, rồi nhấn mạnh \"any mole that changes should be examined promptly\"."
   },
   {
    "kind": "detail",
    "q": "What did the dermatologist recommend after examining the lesion?",
    "opts": [
     "Testing Mr Park's blood only",
     "Taking a small sample for laboratory testing",
     "Treating it with sunscreen at home",
     "Watching it for several years before acting"
    ],
    "a": 1,
    "ev": "recommended that a small sample be removed for laboratory analysis",
    "why": "Câu \"recommended that a small sample be removed for laboratory analysis\" cho đáp án đúng."
   },
   {
    "kind": "detail",
    "q": "Why are people with little pigment in their skin more at risk of skin cancer?",
    "opts": [
     "Their dermis contains fewer nerves",
     "Their sweat glands produce less sweat",
     "They have less natural protection from ultraviolet radiation",
     "They have more melanocytes that multiply quickly"
    ],
    "a": 2,
    "ev": "Melanin normally shields the deeper tissue from ultraviolet radiation",
    "why": "Melanin che chắn mô sâu khỏi tia cực tím, nên ít sắc tố thì ít được bảo vệ."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"promptly\" is closest in meaning to",
    "opts": [
     "carefully but slowly",
     "by a family member",
     "again and again",
     "without delay"
    ],
    "a": 3,
    "ev": "should be examined promptly",
    "why": "Cần khám sớm vì khối u phát hiện sớm dễ điều trị hơn, nên promptly = without delay."
   },
   {
    "kind": "tfng",
    "q": "Mr Park's wife works as a nurse.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Văn bản chỉ nói vợ ông nhận thấy nốt ruồi lớn lên, không nói nghề nghiệp của bà, nên là Not given."
   }
  ],
  "unit": "M3"
 },
 {
  "id": "rd-b1-m401",
  "lvl": "B1",
  "topic": "medical",
  "genre": "article",
  "title": "What Your Skeleton Does for You",
  "text": "An adult skeleton has 206 bones, and it is much more than a simple frame. Together with tendons, ligaments and cartilage, it carries out several important jobs.\n\nFirst, the bones support the body and give it its shape. Second, they protect soft organs: the skull covers the brain, the vertebrae surround the spinal cord, and the ribs form a cage around the heart and lungs. Third, bones work as levers. When a muscle pulls, a bone moves, so we can walk and lift things.\n\nSome jobs are hidden. Bone marrow inside many bones makes new blood cells. In babies the marrow of most long bones does this work, but in adults much of it turns into yellow marrow, which mainly stores fat. Bones also store calcium and release it into the blood when the body needs it.\n\nLong bones, such as the femur, have a shaft and two rounded ends. Short bones, such as the wrist bones, look like cubes, and flat bones, such as the sternum, are thin and curved. Irregular bones, such as the vertebrae, have complex shapes, and sesamoid bones grow inside tendons.\n\nThe skeleton has two parts. The axial skeleton includes the skull, the spine, the ribs and the sternum. The appendicular skeleton includes the limbs and the bones that join them to the trunk.",
  "gist": "Bộ xương người trưởng thành có 206 xương, đảm nhiệm nâng đỡ, bảo vệ, vận động, tạo máu và dự trữ khoáng chất; có năm loại xương và hai phần là bộ xương trục và bộ xương chi.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "The jobs and main parts of the skeleton",
     "How doctors treat broken bones",
     "Why babies have more bones than adults",
     "How muscles grow stronger"
    ],
    "a": 0,
    "ev": "it carries out several important jobs",
    "why": "Bài nói về các chức năng và phần chính của bộ xương: \"the bones carry out several important jobs\"."
   },
   {
    "kind": "detail",
    "q": "Which part of the skeleton surrounds the spinal cord?",
    "opts": [
     "The skull",
     "The ribs",
     "The vertebrae",
     "The sternum"
    ],
    "a": 2,
    "ev": "the vertebrae surround the spinal cord",
    "why": "Bài viết: \"the vertebrae surround the spinal cord\"; hộp sọ bảo vệ não, xương sườn bảo vệ tim và phổi."
   },
   {
    "kind": "detail",
    "q": "What happens to much of the marrow as a person gets older?",
    "opts": [
     "It disappears completely",
     "It becomes cartilage",
     "It starts to make calcium",
     "It changes into marrow that mostly keeps fat"
    ],
    "a": 3,
    "ev": "in adults much of it turns into yellow marrow, which mainly stores fat",
    "why": "Ở người lớn tủy đỏ chuyển thành \"yellow marrow that mainly stores fat\"."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"release\" in \"release it into the blood\" is closest in meaning to",
    "opts": [
     "hold back",
     "let out",
     "measure",
     "make"
    ],
    "a": 1,
    "ev": "release it into the blood when the body needs it",
    "why": "Xương giải phóng canxi vào máu khi cần, nên \"release\" gần nghĩa \"let out\"."
   },
   {
    "kind": "tfng",
    "q": "The skull belongs to the appendicular skeleton.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The axial skeleton includes the skull, the spine, the ribs and the sternum.",
    "why": "Hộp sọ thuộc bộ xương trục: \"The axial skeleton includes the skull\"."
   }
  ],
  "unit": "M4"
 },
 {
  "id": "rd-b2-m402",
  "lvl": "B2",
  "topic": "medical",
  "genre": "article",
  "title": "How Bone Renews Itself and Controls Calcium",
  "text": "Bone looks solid and unchanging, yet it is a living tissue that is constantly being rebuilt. Its hard quality comes from the matrix, a material that contains calcium salts and collagen fibres. The calcium salts give the bone its strength, whereas the collagen makes it slightly flexible. Without collagen, bone would snap too easily; without minerals, it would bend like rubber.\n\nThree kinds of cell look after this tissue. Osteoblasts build new matrix and help it to mineralise. Osteocytes, which are mature cells trapped inside the matrix, maintain it. Osteoclasts do the opposite of osteoblasts: they dissolve old bone and release its minerals. In a healthy adult these two activities are balanced, so the skeleton is renewed without losing density.\n\nThe same system helps to keep the level of calcium in the blood steady, which matters for nerves and muscles. When the level falls, the parathyroid glands release parathyroid hormone, and calcium is taken out of the matrix and sent into the bloodstream. When the level rises too high, the thyroid gland releases calcitonin, which causes the excess calcium to be removed from the blood and stored in the bone again.\n\nStructure also reflects function. The outer surface is covered by the periosteum, a thin membrane with nerves and blood vessels. Beneath it lies smooth compact bone, and inside that lies cancellous bone, which resembles a sponge. Each bone also contains other tissues, such as blood vessels, nerves and fat, so it is not made of bone tissue alone. In the centre of many bones lies the marrow, where hematopoietic stem cells give rise to red cells, white cells and platelets.",
  "gist": "Xương là mô sống luôn được tái tạo nhờ tạo cốt bào, tế bào xương và hủy cốt bào; hormone cận giáp và calcitonin điều hòa canxi máu; cấu trúc xương gồm màng xương, xương đặc, xương xốp và tủy.",
  "qs": [
   {
    "kind": "main",
    "q": "Which statement best summarises the passage?",
    "opts": [
     "Bone is a living tissue that cells and hormones keep renewing and using to regulate calcium",
     "Bone is a fixed material that stops changing once a person has finished growing",
     "Hormones mainly decide how fast the long bones grow in length",
     "Marrow is the only part of a bone that has an important function"
    ],
    "a": 0,
    "ev": "it is a living tissue that is constantly being rebuilt",
    "why": "Ý chính: xương là mô sống, \"constantly being rebuilt\", có tế bào và hormone điều hòa."
   },
   {
    "kind": "detail",
    "q": "What is the role of osteoclasts?",
    "opts": [
     "They build new matrix",
     "They maintain the matrix from inside",
     "They break down old bone",
     "They produce blood cells"
    ],
    "a": 2,
    "ev": "they dissolve old bone and release its minerals",
    "why": "Hủy cốt bào \"dissolve old bone and release its minerals\"; tạo cốt bào mới là tế bào xây chất nền."
   },
   {
    "kind": "detail",
    "q": "What happens when the level of calcium in the blood becomes too high?",
    "opts": [
     "Parathyroid hormone is released and calcium leaves the bone",
     "Calcitonin is released and calcium goes back into the bone",
     "Collagen fibres are broken down to free more calcium",
     "The marrow makes extra blood cells to carry the calcium"
    ],
    "a": 1,
    "ev": "When the level rises too high, the thyroid gland releases calcitonin",
    "why": "Khi canxi máu cao, tuyến giáp tiết calcitonin để canxi được lưu vào xương lại."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"excess\" in \"the excess calcium\" means",
    "opts": [
     "a harmful form of",
     "a shortage of",
     "an extra amount of",
     "a stored form of"
    ],
    "a": 2,
    "ev": "causes the excess calcium to be removed from the blood",
    "why": "\"Excess calcium\" là lượng canxi dư; nó bị đưa ra khỏi máu, nên nghĩa là \"an extra amount of\"."
   },
   {
    "kind": "tfng",
    "q": "Osteocytes live on the outside of the bone, close to the periosteum.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Osteocytes, which are mature cells trapped inside the matrix",
    "why": "Tế bào xương bị \"trapped inside the matrix\", không nằm ở bề mặt ngoài."
   }
  ],
  "unit": "M4"
 },
 {
  "id": "rd-c1-m403",
  "lvl": "C1",
  "topic": "medical",
  "genre": "report",
  "title": "A Fall, a Fracture and a Silent Disease",
  "text": "Mrs Hanh, a 72-year-old retired teacher, slipped on a wet floor and landed on her side. In the emergency department she complained of severe pain in her hip and could not bear weight on that leg. An X-ray showed a fracture of the neck of the femur. The surgeon explained that a fall of this kind would rarely break a healthy hip in a younger adult, which suggested that her bones were unusually fragile.\n\nFurther assessment supported this suspicion. A bone density scan revealed markedly reduced density, and the diagnosis was osteoporosis. The condition develops when bone resorption by osteoclasts outpaces bone formation by osteoblasts, so that the tissue gradually thins and its internal spongy framework becomes weaker. Mrs Hanh had several risk factors. She had passed the menopause, and the fall in oestrogen production that follows it is known to speed up bone breakdown. Her diet had also contained little calcium for years, and she rarely went outdoors, which limited her vitamin D, since this vitamin helps the gut to absorb calcium. Because a lack of vitamin D can also soften adult bone, a condition called osteomalacia, her blood levels were checked as well.\n\nTreatment had two aims: to repair the fracture and to prevent another one. The surgical team stabilised the hip, and a physiotherapist began gentle exercises to help her regain movement. Because bone responds to the forces placed upon it, regular weight-bearing activity is encouraged once healing allows. Her doctors also reviewed her diet, advised sources of calcium and vitamin D, and discussed medicines that slow bone loss.\n\nThe case illustrates why osteoporosis is often called a silent disease. It causes no pain until a fracture occurs, so many patients are diagnosed only after an injury. Early screening of people at higher risk, such as older women with a poor diet, could allow treatment to begin before bones break.",
  "gist": "Ca bệnh bà Hanh gãy cổ xương đùi sau ngã, được chẩn đoán loãng xương; bài nêu nguyên nhân, yếu tố nguy cơ, chẩn đoán và hướng điều trị, nhấn mạnh bệnh diễn tiến âm thầm.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the passage?",
    "opts": [
     "To use one case to show how osteoporosis arises, is diagnosed and is managed",
     "To compare different operations for repairing a broken hip",
     "To argue that falls are the chief cause of osteoporosis",
     "To explain how children's fractures heal compared with adults'"
    ],
    "a": 0,
    "ev": "The case illustrates why osteoporosis is often called a silent disease.",
    "why": "Bài dùng một ca bệnh để minh họa nguyên nhân, chẩn đoán, điều trị loãng xương: \"The case illustrates...\"."
   },
   {
    "kind": "detail",
    "q": "How was the diagnosis of osteoporosis established?",
    "opts": [
     "An X-ray showed a fracture of the neck of the femur",
     "A scan found that bone density was markedly low",
     "Her diet history proved that she lacked calcium",
     "Her age alone was accepted as proof"
    ],
    "a": 1,
    "ev": "A bone density scan revealed markedly reduced density, and the diagnosis was osteoporosis",
    "why": "Chẩn đoán dựa vào \"A bone density scan revealed markedly reduced density\"; X-quang chỉ cho thấy gãy xương."
   },
   {
    "kind": "detail",
    "q": "According to the text, why does the menopause raise the risk of osteoporosis?",
    "opts": [
     "Osteoclasts disappear from the bone",
     "Calcium is no longer absorbed by the gut",
     "The lower oestrogen level speeds up the loss of bone",
     "Bones stop receiving any mechanical load"
    ],
    "a": 2,
    "ev": "the fall in oestrogen production that follows it is known to speed up bone breakdown",
    "why": "Sau mãn kinh estrogen giảm làm \"speed up bone breakdown\", nên xương bị tiêu nhiều hơn; các lựa chọn khác không được nêu."
   },
   {
    "kind": "inference",
    "q": "What can be inferred from the final paragraph?",
    "opts": [
     "Osteoporosis is painful from its earliest stage",
     "Many people have the disease without knowing it",
     "Only women can develop the disease",
     "The disease cannot be treated once a bone has broken"
    ],
    "a": 1,
    "ev": "so many patients are diagnosed only after an injury",
    "why": "Bệnh không đau cho đến khi gãy xương, nên \"many patients are diagnosed only after an injury\" - nhiều người mắc mà không biết."
   },
   {
    "kind": "tfng",
    "q": "Mrs Hanh left hospital with a prescription for one particular drug.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài chỉ nói bác sĩ \"discussed medicines that slow bone loss\"; không nói bà được kê loại thuốc cụ thể nào."
   }
  ],
  "unit": "M4"
 },
 {
  "id": "rd-b1-m501",
  "lvl": "B1",
  "topic": "medical",
  "genre": "article",
  "title": "Three Kinds of Muscle",
  "text": "The body is built from four basic tissue types: epithelial, connective, nerve and muscle tissue. Muscle tissue is special because it can contract, which means it can shorten and pull. There are three kinds of muscle, and each type has its own job.\n\nSkeletal muscle is attached to bones by strong bands called tendons. You control it consciously, so it is called voluntary muscle. When you walk, write or speak, skeletal muscles shorten and pull the bones closer together. Under a microscope it looks striped, or striated. Books give slightly different totals, but the body has around 700 of these muscles.\n\nCardiac muscle is found only in the heart. It pumps blood around the body. You cannot decide to stop it, so it is involuntary. It is striated too, and it can start its own contractions, which is why it is called autorhythmic.\n\nSmooth muscle is in the walls of organs such as the stomach, the intestines and the blood vessels. It moves food and blood along. It has no stripes and is also involuntary.\n\nMuscles have four main functions: movement, posture, moving substances inside the body, and making heat. When we exercise hard, extra contractions make us warmer and we begin to sweat.",
  "gist": "Cơ thể có ba loại cơ (cơ vân, cơ tim, cơ trơn), mỗi loại có vị trí, cách điều khiển và chức năng riêng.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "How skeletal, cardiac and smooth muscle differ and what each one does",
     "How tendons heal after an injury",
     "Why people sweat during exercise",
     "How the heart changes with age"
    ],
    "a": 0,
    "ev": "each type has its own job",
    "why": "Bài so sánh ba loại cơ và vai trò riêng của từng loại: 'each type has its own job'."
   },
   {
    "kind": "detail",
    "q": "According to the passage, what happens to the body when we exercise hard?",
    "opts": [
     "Extra muscle contractions make it warmer",
     "The tendons stop working for a while",
     "The heart switches to voluntary control",
     "Smooth muscle changes into skeletal muscle"
    ],
    "a": 0,
    "ev": "extra contractions make us warmer and we begin to sweat",
    "why": "Khi vận động mạnh, các cơn co cơ thêm làm cơ thể nóng lên và đổ mồ hôi: 'extra contractions make us warmer'."
   },
   {
    "kind": "detail",
    "q": "Why is cardiac muscle described as autorhythmic?",
    "opts": [
     "It can start its own contractions",
     "A person can control its speed at will",
     "It has no stripes under the microscope",
     "It forms the walls of the blood vessels"
    ],
    "a": 0,
    "ev": "it can start its own contractions",
    "why": "Cơ tim tự phát nhịp: 'it can start its own contractions'."
   },
   {
    "kind": "vocab",
    "q": "In the text, the word 'striated' means",
    "opts": [
     "having a striped appearance",
     "moved by conscious choice",
     "found in organ walls",
     "able to heal quickly"
    ],
    "a": 0,
    "ev": "Under a microscope it looks striped, or striated.",
    "why": "Câu nêu 'striped, or striated' nên 'striated' = có vân/sọc."
   },
   {
    "kind": "tfng",
    "q": "A person can decide to move smooth muscle at will.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "It has no stripes and is also involuntary.",
    "why": "Cơ trơn 'involuntary' tức không điều khiển theo ý muốn nên câu sai."
   }
  ],
  "unit": "M5"
 },
 {
  "id": "rd-b2-m502",
  "lvl": "B2",
  "topic": "medical",
  "genre": "article",
  "title": "From Nerve Signal to Movement",
  "text": "A voluntary movement begins in the brain, but the muscle itself obeys a chemical message. A motor neuron carries the signal to the muscle fibre, yet the nerve cell never actually touches it. The two meet at a synapse, where a tiny gap, the synaptic cleft, separates them. When the signal arrives, the neuron releases a neurotransmitter called acetylcholine. This substance diffuses across the cleft and binds to receptors on a specialised patch of the muscle cell, the motor end-plate. The binding triggers the fibre to contract.\n\nBecause the whole sequence depends on a single chemical transfer, anything that disturbs it can disable the muscle. Some diseases and toxins block the release of the messenger or damage the receptors, and the affected muscle then weakens or fails to work properly.\n\nOnce a fibre contracts, its force must reach the skeleton. Tendons, which are tough bands of dense connective tissue rich in collagen, do this job. They are woven into the coverings of both muscle and bone, so they can withstand great tension. Most skeletal muscles are attached to two bones across a joint. The attachment on the bone that stays still is the origin; the attachment on the bone that moves is the insertion. The fleshy belly between the tendons is the part that actually shortens. As it does so, it pulls the insertion toward the origin, and the joint bends or straightens. This arrangement explains why muscles can only pull, never push: movement in the opposite direction needs another muscle.",
  "gist": "Tín hiệu thần kinh truyền qua synap bằng acetylcholine làm sợi cơ co, lực co được gân truyền tới xương.",
  "qs": [
   {
    "kind": "main",
    "q": "What does the passage mainly explain?",
    "opts": [
     "How a nerve signal makes a muscle contract and move a bone",
     "How muscles are named after their shape",
     "Why the heart beats without conscious control",
     "How tendons are repaired after surgery"
    ],
    "a": 0,
    "ev": "A voluntary movement begins in the brain, but the muscle itself obeys a chemical message.",
    "why": "Bài giải thích chuỗi từ tín hiệu thần kinh, chất dẫn truyền đến co cơ và kéo xương."
   },
   {
    "kind": "detail",
    "q": "What happens to acetylcholine after the neuron releases it?",
    "opts": [
     "It crosses the gap and attaches to receptors on the muscle cell",
     "It travels in the blood to the tendon",
     "It passes into the muscle cell by direct contact with the neuron",
     "It stays in the neuron and strengthens the signal"
    ],
    "a": 0,
    "ev": "diffuses across the cleft and binds to receptors",
    "why": "Acetylcholine khuếch tán qua khe synap và gắn vào thụ thể: 'diffuses across the cleft and binds to receptors'."
   },
   {
    "kind": "detail",
    "q": "Which part of a skeletal muscle does the actual shortening?",
    "opts": [
     "The belly",
     "The origin",
     "The insertion",
     "The tendon"
    ],
    "a": 0,
    "ev": "The fleshy belly between the tendons is the part that actually shortens.",
    "why": "Bụng cơ là phần co thực sự: 'The fleshy belly ... actually shortens'."
   },
   {
    "kind": "inference",
    "q": "Why would a toxin that stops acetylcholine release cause weakness?",
    "opts": [
     "The muscle would not receive the chemical message needed to contract",
     "The tendons would become too tight",
     "The bones would stop moving on their own",
     "The motor neuron would touch the muscle too often"
    ],
    "a": 0,
    "ev": "Because the whole sequence depends on a single chemical transfer, anything that disturbs it can disable the muscle.",
    "why": "Cả chuỗi phụ thuộc vào một sự truyền hóa học, nên chặn nó làm cơ không co được."
   },
   {
    "kind": "tfng",
    "q": "Leg muscles have thicker tendons than arm muscles.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không so sánh độ dày gân của chân và tay nên là Not given."
   }
  ],
  "unit": "M5"
 },
 {
  "id": "rd-c1-m503",
  "lvl": "C1",
  "topic": "medical",
  "genre": "report",
  "title": "Weakness That Grows With Effort",
  "text": "Mr Park, a 45-year-old accountant, noticed that his eyelids drooped by the evening and that his speech became slurred during long phone calls. After a night of rest he felt almost normal again. Such a pattern, in which weakness builds with repeated effort and eases with rest, is characteristic of myasthenia gravis, a disorder of the neuromuscular junction rather than of the muscle fibre itself.\n\nThe disease is autoimmune. The immune system mistakenly produces antibodies that attack the acetylcholine receptors on the motor end-plate. With fewer functioning receptors, the chemical message released by the motor neuron is only partly received, and the muscle responds weakly. At the start of activity enough receptors may remain to produce a normal contraction, but as the transmitter supply dwindles with repeated use, the response fades. This explains the easy fatigability that gives the condition its name, from the roots myo, muscle, and asthenia, weakness. The facial muscles, the muscles that move the jaw and tongue, and those involved in breathing are affected most, which is why swallowing difficulty and shortness of breath are the symptoms doctors take most seriously.\n\nDiagnosis combines the history with a neurological examination. Doctors may test for the characteristic antibodies in the blood and study how well nerve signals pass to the muscle with electrical tests. Imaging of the chest can look for abnormalities of the thymus gland, which is often linked to the disease. Treatment aims to improve transmission across the junction, to dampen the abnormal immune response, or both; in selected patients, surgical removal of the thymus is considered. Although the disease is not curable in most cases, the outlook is generally good with proper care.\n\nIt differs sharply from tetanus, in which a bacterial neurotoxin causes sustained muscle contraction. In myasthenia the problem is too little stimulation; in tetanus it is a loss of inhibition.",
  "gist": "Ca bệnh nhược cơ: kháng thể tấn công thụ thể acetylcholine gây yếu cơ tăng khi gắng sức; nêu chẩn đoán, hướng điều trị và so sánh với uốn ván.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the passage?",
    "opts": [
     "To explain how an immune attack on the nerve-muscle junction produces a typical pattern of symptoms and how it is assessed and managed",
     "To argue that tetanus is more dangerous than any other muscle disease",
     "To describe how antibodies are produced in the thymus",
     "To show that rest is the only treatment needed"
    ],
    "a": 0,
    "ev": "The disease is autoimmune.",
    "why": "Bài đi từ ca lâm sàng đến cơ chế tự miễn, chẩn đoán và điều trị."
   },
   {
    "kind": "detail",
    "q": "What directly causes the muscle to respond weakly in this disease?",
    "opts": [
     "Fewer working receptors for the chemical message",
     "Too much acetylcholine in the cleft",
     "Destruction of the tendons",
     "Damage to the heart muscle"
    ],
    "a": 0,
    "ev": "With fewer functioning receptors, the chemical message released by the motor neuron is only partly received",
    "why": "Ít thụ thể hoạt động nên tín hiệu chỉ được nhận một phần: 'With fewer functioning receptors'."
   },
   {
    "kind": "detail",
    "q": "Which muscles are affected most?",
    "opts": [
     "Those of the face, jaw, tongue and breathing",
     "Those of the hands and feet",
     "The smooth muscle of blood vessels",
     "The muscles of the lower back"
    ],
    "a": 0,
    "ev": "The facial muscles, the muscles that move the jaw and tongue, and those involved in breathing are affected most",
    "why": "Cơ mặt, hàm, lưỡi và hô hấp bị ảnh hưởng nhiều nhất theo bài."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'dwindles' is closest in meaning to",
    "opts": [
     "gradually becomes smaller",
     "suddenly increases",
     "stays the same",
     "becomes more harmful"
    ],
    "a": 0,
    "ev": "as the transmitter supply dwindles with repeated use",
    "why": "Nguồn chất dẫn truyền giảm dần khi dùng lặp lại nên 'dwindles' = giảm dần."
   },
   {
    "kind": "tfng",
    "q": "The disease most often starts in childhood.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không nêu độ tuổi khởi phát thường gặp nên là Not given."
   }
  ],
  "unit": "M5"
 },
 {
  "id": "rd-b1-m601",
  "lvl": "B1",
  "topic": "medical",
  "genre": "article",
  "title": "What Is Blood Made Of?",
  "text": "Blood is a connective tissue that travels through the arteries and veins. It brings oxygen and nutrients to every cell and takes away waste such as carbon dioxide. It also carries hormones, helps to control body temperature and protects us from infection.\n\nIf a sample of blood is spun in a machine, it separates into two parts. The liquid part is called plasma. It is pale yellow and is mostly water, with salts, proteins and other substances dissolved in it. The solid part is made of three kinds of cells. Erythrocytes, or red blood cells, are the most numerous. They are discs with a dip on each side and no nucleus, and they contain haemoglobin, a red protein that holds oxygen and gives blood its colour. Leukocytes, or white blood cells, are fewer but very important because they fight germs. Some have tiny grains inside, and these are called granulocytes; the others are agranulocytes. Platelets are the smallest cells. When a blood vessel is cut, they gather at the wound and form a plug, so the bleeding stops.\n\nAll three kinds of cells are made in the bone marrow, the soft tissue inside many bones. Because blood cannot be made in a factory, hospitals depend on generous donors when a patient needs a transfusion.",
  "gist": "Máu là mô lỏng gồm huyết tương và ba loại tế bào (hồng cầu, bạch cầu, tiểu cầu), mỗi loại có vai trò riêng; tất cả được tạo ra ở tủy xương.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "The parts of blood and what each one does",
     "How hospitals store blood from donors",
     "Why red blood cells are larger than white blood cells",
     "The causes and treatment of anaemia"
    ],
    "a": 0,
    "ev": "it separates into two parts",
    "why": "Cả bài mô tả các thành phần của máu và chức năng của từng loại, bắt đầu từ \"it separates into two parts\"."
   },
   {
    "kind": "detail",
    "q": "Which substance is responsible for the colour of blood?",
    "opts": [
     "Plasma",
     "Haemoglobin",
     "Platelets",
     "Salts"
    ],
    "a": 1,
    "ev": "a red protein that holds oxygen and gives blood its colour",
    "why": "Bài nêu haemoglobin là \"a red protein that holds oxygen and gives blood its colour\"."
   },
   {
    "kind": "detail",
    "q": "What do platelets do after a blood vessel is damaged?",
    "opts": [
     "They carry oxygen to the damaged area",
     "They attack the germs that enter the cut",
     "They gather at the wound and block it",
     "They make new plasma for the vessel"
    ],
    "a": 2,
    "ev": "they gather at the wound and form a plug",
    "why": "Tiểu cầu \"gather at the wound and form a plug\" để cầm máu; các lựa chọn khác là chức năng của hồng cầu, bạch cầu hoặc không được nhắc đến."
   },
   {
    "kind": "vocab",
    "q": "In the passage, the word \"numerous\" is closest in meaning to",
    "opts": [
     "great in number",
     "very heavy",
     "brightly coloured",
     "hard to find"
    ],
    "a": 0,
    "ev": "are the most numerous",
    "why": "\"the most numerous\" nghĩa là có số lượng nhiều nhất, tức \"great in number\"."
   },
   {
    "kind": "tfng",
    "q": "The passage says that blood cells are produced in the liver.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "All three kinds of cells are made in the bone marrow",
    "why": "Bài nói cả ba loại tế bào được tạo ra ở tủy xương (\"All three kinds of cells are made in the bone marrow\"), không phải ở gan."
   }
  ],
  "unit": "M6"
 },
 {
  "id": "rd-b2-m602",
  "lvl": "B2",
  "topic": "medical",
  "genre": "article",
  "title": "Telling Friend from Enemy",
  "text": "The immune system has to solve a difficult problem: it must destroy dangerous invaders without attacking the body itself. It does this by recognising proteins on the surface of cells. During early development the system learns to ignore the body's own proteins, which are described as self. Anything else that triggers a response is called an antigen. An antigen may be a bacterium, a virus, a fungus, a toxin, or even one of our own cells that has become faulty.\n\nDefence begins with innate immunity, which everyone is born with. The skin and the mucous membranes lining the nose, throat and gut form a physical barrier, and phagocytes such as neutrophils and macrophages swallow and digest germs that get through. This response is quick but general.\n\nAdaptive immunity is slower and more precise. It depends on lymphocytes, which begin their lives in the bone marrow. Those that stay there mature into B cells, while others travel to the thymus and become T cells. When a B cell meets its matching antigen, it starts to release antibodies, proteins that lock on to that one target. Antibodies do not usually kill the invader themselves; they mark it so that phagocytes can destroy it. Helper T cells coordinate the whole operation, and killer T cells destroy body cells that a virus has already entered.\n\nFinally, some lymphocytes survive as memory cells, so a second infection with the same germ is dealt with much faster. Vaccination takes advantage of this. Passive immunity, by contrast, is borrowed: a baby receives antibodies from its mother through the placenta and in breast milk, and the protection fades after a short time.",
  "gist": "Hệ miễn dịch phân biệt \"ta\" với \"địch\" nhờ protein bề mặt tế bào; miễn dịch bẩm sinh phản ứng nhanh nhưng chung chung, còn miễn dịch thích nghi (tế bào B, T, kháng thể) chậm hơn nhưng đặc hiệu và có trí nhớ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the passage?",
    "opts": [
     "To explain how the immune system recognises and removes threats",
     "To compare the symptoms of viral and bacterial diseases",
     "To describe how vaccines are produced in laboratories",
     "To list the organs that make up the lymphatic system"
    ],
    "a": 0,
    "ev": "it must destroy dangerous invaders without attacking the body itself",
    "why": "Bài giải thích cách hệ miễn dịch nhận diện và loại bỏ mối đe dọa mà không tấn công chính cơ thể (\"destroy dangerous invaders without attacking the body itself\")."
   },
   {
    "kind": "detail",
    "q": "Where do T cells complete their development?",
    "opts": [
     "In the spleen",
     "In the thymus",
     "In the bone marrow",
     "In the lymph nodes"
    ],
    "a": 1,
    "ev": "others travel to the thymus and become T cells",
    "why": "Lymphocyte ở lại tủy xương thành tế bào B, còn \"others travel to the thymus and become T cells\"."
   },
   {
    "kind": "detail",
    "q": "According to the passage, what is the role of antibodies?",
    "opts": [
     "They kill the invader directly",
     "They coordinate the work of the other immune cells",
     "They mark the target so that other cells can destroy it",
     "They digest germs that pass through the skin"
    ],
    "a": 2,
    "ev": "they mark it so that phagocytes can destroy it",
    "why": "Kháng thể không tự tiêu diệt mà \"they mark it so that phagocytes can destroy it\"; việc điều phối là của tế bào T hỗ trợ."
   },
   {
    "kind": "inference",
    "q": "What can be concluded about vaccination from the passage?",
    "opts": [
     "It lets the body deal with a later infection more quickly",
     "It gives the body antibodies borrowed from another person",
     "It makes the skin barrier thicker and stronger",
     "It replaces the work of helper T cells"
    ],
    "a": 0,
    "ev": "so a second infection with the same germ is dealt with much faster",
    "why": "Vaccine tận dụng tế bào nhớ nên nhiễm trùng lần sau được xử lý nhanh hơn (\"dealt with much faster\"); miễn dịch mượn từ người khác là miễn dịch thụ động."
   },
   {
    "kind": "tfng",
    "q": "The writer states that killer T cells are more numerous than helper T cells.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài chỉ nêu vai trò của hai loại tế bào T, không so sánh số lượng nên đáp án là Not given."
   }
  ],
  "unit": "M6"
 },
 {
  "id": "rd-c1-m603",
  "lvl": "C1",
  "topic": "medical",
  "genre": "report",
  "title": "Tired, Pale and Tingling: A Case of Pernicious Anaemia",
  "text": "Mr Park, a 62-year-old teacher, visited a clinic because he had felt unusually tired for several months. His wife had noticed that his skin looked pale with a faint yellow tinge, and he described a tingling sensation in his fingers and toes. When the doctor tested his balance, he found it unsteady. This combination of symptoms pointed towards anaemia, a condition in which too few red cells, or too little haemoglobin, leave the tissues short of oxygen.\n\nAnaemia is not a single illness. Iron deficiency anaemia, the most common form, usually responds well to dietary changes and iron supplements. Mr Park's blood tests, however, showed enlarged red cells and a very low level of vitamin B12, which is typical of pernicious anaemia. In this disorder the lining of the stomach wastes away and can no longer produce intrinsic factor, a substance the gut needs in order to absorb the vitamin. Because the shortage grows slowly, the symptoms develop insidiously, which explains why patients often seek help late. The yellow tinge comes from the excessive breakdown of haemoglobin, since red cells made in the bone marrow without enough B12 are defective and die early. Nerve damage accounts for the tingling, the loss of vibration sense and the poor balance.\n\nTreatment consists of replacing the missing vitamin, usually by injection, which bypasses the faulty absorption. If the condition is left untreated, it may cause severe and sometimes permanent complications, particularly in the nervous system.\n\nA blood count can reveal other changes. Leukocytosis, a raised number of white cells, often accompanies infection, whereas leukopenia means that there are too few. In thrombocytopenia the platelets are scarce, so bleeding is harder to stop, and in thrombosis a clot forms inside a vessel. Disorders of the defences themselves can be sorted into three broad groups: immunodeficiency, in which part of the system fails; autoimmune disease, in which healthy cells are attacked; and hypersensitivity, an over-strong reaction such as anaphylactic shock.\n\nOther blood disorders differ sharply in cause. In leukaemia, abnormal white cells multiply uncontrollably in the marrow and crowd out healthy ones, so the patient loses the ability to fight infection. In haemophilia, an inherited shortage of clotting factors means that even internal bleeding into joints may be dangerous.",
  "gist": "Một ca thiếu máu ác tính: triệu chứng (mệt, da xanh vàng, tê bì, mất thăng bằng), cơ chế thiếu yếu tố nội và vitamin B12, cách điều trị, đối chiếu với bệnh bạch cầu và ưa chảy máu.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "A patient's case that shows how pernicious anaemia develops and is treated",
     "A comparison of every treatment available for leukaemia",
     "The role of iron in the diet of older adults",
     "How doctors test balance in people with nerve disease"
    ],
    "a": 0,
    "ev": "This combination of symptoms pointed towards anaemia",
    "why": "Bài kể ca bệnh của ông Park để giải thích cơ chế và điều trị thiếu máu ác tính, rồi nhắc ngắn đến các rối loạn máu khác."
   },
   {
    "kind": "detail",
    "q": "Why is Mr Park unable to absorb enough vitamin B12?",
    "opts": [
     "His stomach lining no longer makes a substance needed for absorption",
     "His bone marrow produces too many abnormal white cells",
     "He has an inherited shortage of clotting factors",
     "His diet contains too little iron"
    ],
    "a": 0,
    "ev": "can no longer produce intrinsic factor",
    "why": "Niêm mạc dạ dày teo nên \"can no longer produce intrinsic factor\"; các đáp án khác là bệnh bạch cầu, ưa chảy máu và thiếu sắt."
   },
   {
    "kind": "detail",
    "q": "What causes the yellow colour of the patient's skin?",
    "opts": [
     "Nerve damage that spreads to the skin",
     "A reaction to iron supplements",
     "Heavy bleeding from the stomach",
     "Too much haemoglobin being broken down"
    ],
    "a": 3,
    "ev": "The yellow tinge comes from the excessive breakdown of haemoglobin",
    "why": "Bài nói rõ \"The yellow tinge comes from the excessive breakdown of haemoglobin\"; tổn thương thần kinh gây tê và mất thăng bằng."
   },
   {
    "kind": "vocab",
    "q": "In the passage, the word \"insidiously\" is closest in meaning to",
    "opts": [
     "gradually and without obvious warning",
     "suddenly and with severe pain",
     "only during the night",
     "in a way that is easy to see"
    ],
    "a": 0,
    "ev": "the symptoms develop insidiously, which explains why patients often seek help late",
    "why": "Triệu chứng \"develop insidiously\" khiến bệnh nhân đến muộn, nghĩa là âm thầm, tăng dần không báo trước."
   },
   {
    "kind": "tfng",
    "q": "In leukaemia, the extra white cells make the patient better able to resist infection.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "so the patient loses the ability to fight infection",
    "why": "Trái lại, bạch cầu bất thường chèn ép tế bào khỏe nên \"the patient loses the ability to fight infection\"."
   }
  ],
  "unit": "M6"
 }
];


/* ===== file: content-exam.js ===== */
/* ============================================================
   LUYỆN ĐỀ (v4.5): do tác giả tự biên soạn. Mỗi câu trắc nghiệm có đúng một đáp án.
   TOEIC5: câu hoàn thành. TOEIC6/CLOZE_MC: đoạn văn có chỗ trống {n}, chọn đáp án.
   CLOZE_OPEN: đoạn văn gõ một từ. KWT: viết lại câu với từ cho sẵn.
   ============================================================ */
/* TOEIC Part 5 */
const TOEIC5 = [
 {
  "id": "t5-a001",
  "cat": "form",
  "lvl": "B1",
  "q": "The new software has greatly improved the ___ of our payroll department.",
  "opts": [
   "more efficient",
   "efficient",
   "efficiency",
   "efficiently"
  ],
  "a": 2,
  "why": "Sau mạo từ 'the' và trước 'of' cần một danh từ: efficiency."
 },
 {
  "id": "t5-a002",
  "cat": "form",
  "lvl": "B2",
  "q": "Ms Lan was promoted because of her ___ contribution to the sales team last year.",
  "opts": [
   "significance",
   "significantly",
   "signify",
   "significant"
  ],
  "a": 3,
  "why": "Trước danh từ 'contribution' cần tính từ: significant."
 },
 {
  "id": "t5-a003",
  "cat": "form",
  "lvl": "B1",
  "q": "Please read the safety instructions ___ before operating the new packaging machine.",
  "opts": [
   "careful",
   "carefully",
   "caring",
   "care"
  ],
  "a": 1,
  "why": "Cần trạng từ bổ nghĩa cho động từ 'read': carefully."
 },
 {
  "id": "t5-a004",
  "cat": "form",
  "lvl": "B1",
  "q": "The company plans to ___ its warehouse capacity before the holiday season begins.",
  "opts": [
   "expansively",
   "expansive",
   "expand",
   "expansion"
  ],
  "a": 2,
  "why": "Sau 'plans to' cần động từ nguyên mẫu: expand."
 },
 {
  "id": "t5-a005",
  "cat": "form",
  "lvl": "B2",
  "q": "Mr Park is responsible for the ___ of all new employees in the finance department.",
  "opts": [
   "train",
   "training",
   "trained",
   "trains"
  ],
  "a": 1,
  "why": "Sau 'the' và trước 'of' cần danh từ: training."
 },
 {
  "id": "t5-a006",
  "cat": "form",
  "lvl": "B1",
  "q": "Customers appreciate the ___ delivery service offered by Orion Logistics.",
  "opts": [
   "reliably",
   "reliability",
   "reliable",
   "rely"
  ],
  "a": 2,
  "why": "Trước danh từ ghép 'delivery service' cần tính từ: reliable."
 },
 {
  "id": "t5-a007",
  "cat": "form",
  "lvl": "B2",
  "q": "The manager asked all staff to submit their expense reports ___ at the end of each month.",
  "opts": [
   "prompt",
   "promptness",
   "prompted",
   "promptly"
  ],
  "a": 3,
  "why": "Cần trạng từ bổ nghĩa cho 'submit': promptly."
 },
 {
  "id": "t5-a008",
  "cat": "form",
  "lvl": "B1",
  "q": "Green Valley Clinic offers a ___ range of services for patients of all ages.",
  "opts": [
   "width",
   "wide",
   "widen",
   "widely"
  ],
  "a": 1,
  "why": "Trước danh từ 'range' cần tính từ: wide."
 },
 {
  "id": "t5-a009",
  "cat": "form",
  "lvl": "B2",
  "q": "The committee was ___ by the quality of the proposal submitted by the design team.",
  "opts": [
   "impress",
   "impressive",
   "impressed",
   "impression"
  ],
  "a": 2,
  "why": "Câu bị động 'was + V3' với chủ ngữ là người: impressed."
 },
 {
  "id": "t5-a010",
  "cat": "form",
  "lvl": "B2",
  "q": "Employees who show strong ___ are often given more responsibility by their supervisors.",
  "opts": [
   "leader",
   "leading",
   "lead",
   "leadership"
  ],
  "a": 3,
  "why": "Sau tính từ 'strong' cần danh từ không đếm được: leadership."
 },
 {
  "id": "t5-a011",
  "cat": "form",
  "lvl": "B2",
  "q": "The auditors found that the report was ___ accurate, though a few minor typing errors remained.",
  "opts": [
   "enlarge",
   "largely",
   "large",
   "largest"
  ],
  "a": 1,
  "why": "Cần trạng từ bổ nghĩa cho tính từ 'accurate': largely."
 },
 {
  "id": "t5-a012",
  "cat": "form",
  "lvl": "B1",
  "q": "Sales have shown ___ growth since the company introduced its loyalty programme in March.",
  "opts": [
   "steadied",
   "steadily",
   "steadiness",
   "steady"
  ],
  "a": 3,
  "why": "Trước danh từ 'growth' cần tính từ: steady."
 },
 {
  "id": "t5-a013",
  "cat": "form",
  "lvl": "B1",
  "q": "Please make sure the contract is ___ by both parties before it is sent to the legal office.",
  "opts": [
   "signature",
   "signing",
   "signed",
   "sign"
  ],
  "a": 2,
  "why": "Bị động 'is + V3': signed."
 },
 {
  "id": "t5-a014",
  "cat": "form",
  "lvl": "B2",
  "q": "The IT team worked ___ to restore the network before employees returned on Monday.",
  "opts": [
   "tireless",
   "tiredness",
   "tirelessly",
   "tire"
  ],
  "a": 2,
  "why": "Cần trạng từ bổ nghĩa cho động từ 'worked': tirelessly."
 },
 {
  "id": "t5-a015",
  "cat": "form",
  "lvl": "B2",
  "q": "We are pleased to announce that Mr Nam is the most ___ candidate for the regional manager position.",
  "opts": [
   "qualify",
   "qualifying",
   "qualification",
   "qualified"
  ],
  "a": 3,
  "why": "Sau 'the most' và trước danh từ 'candidate' cần tính từ: qualified."
 },
 {
  "id": "t5-a016",
  "cat": "tense",
  "lvl": "B1",
  "q": "Anna ___ the quarterly report to the director yesterday, so please check your email.",
  "opts": [
   "sent",
   "has sent",
   "will send",
   "is sending"
  ],
  "a": 0,
  "why": "'yesterday' là mốc quá khứ xác định nên dùng quá khứ đơn: sent."
 },
 {
  "id": "t5-a017",
  "cat": "tense",
  "lvl": "B2",
  "q": "By the time the auditors arrive next week, we ___ all the invoices.",
  "opts": [
   "will have processed",
   "would process",
   "processed",
   "have processed"
  ],
  "a": 0,
  "why": "'By the time + hiện tại' chỉ tương lai nên dùng tương lai hoàn thành: will have processed."
 },
 {
  "id": "t5-a018",
  "cat": "tense",
  "lvl": "B1",
  "q": "If the shipment ___ on time, the store will open the new section on Monday.",
  "opts": [
   "would arrive",
   "arrives",
   "will arrive",
   "arrived"
  ],
  "a": 1,
  "why": "Câu điều kiện loại 1: mệnh đề if dùng hiện tại đơn: arrives."
 },
 {
  "id": "t5-a019",
  "cat": "tense",
  "lvl": "B2",
  "q": "The conference room ___ for a client meeting until noon today.",
  "opts": [
   "has used",
   "is being used",
   "uses",
   "is using"
  ],
  "a": 1,
  "why": "Phòng là vật bị tác động và hành động đang diễn ra: is being used."
 },
 {
  "id": "t5-a020",
  "cat": "tense",
  "lvl": "B2",
  "q": "Mr Park suggested ___ the meeting to Thursday because of the holiday.",
  "opts": [
   "moved",
   "to move",
   "move",
   "moving"
  ],
  "a": 3,
  "why": "Sau 'suggest' dùng V-ing: moving."
 },
 {
  "id": "t5-a021",
  "cat": "tense",
  "lvl": "B1",
  "q": "All employees are required ___ their ID badges at the entrance.",
  "opts": [
   "to show",
   "show",
   "showing",
   "shown"
  ],
  "a": 0,
  "why": "Cấu trúc bị động 'be required to + V': to show."
 },
 {
  "id": "t5-a022",
  "cat": "tense",
  "lvl": "B1",
  "q": "The company ___ in this building since 2015, and it plans to move next year.",
  "opts": [
   "was",
   "has been",
   "will be",
   "is"
  ],
  "a": 1,
  "why": "'since 2015' đi với hiện tại hoàn thành: has been."
 },
 {
  "id": "t5-a023",
  "cat": "tense",
  "lvl": "B2",
  "q": "When I called the help desk, the technician ___ another customer's problem.",
  "opts": [
   "will solve",
   "has solved",
   "solves",
   "was solving"
  ],
  "a": 3,
  "why": "Hành động đang diễn ra tại thời điểm quá khứ 'when I called': was solving."
 },
 {
  "id": "t5-a024",
  "cat": "tense",
  "lvl": "B2",
  "q": "Had the supplier delivered the parts earlier, the factory ___ the order on schedule.",
  "opts": [
   "completed",
   "would have completed",
   "would complete",
   "will complete"
  ],
  "a": 1,
  "why": "Điều kiện loại 3 đảo ngữ 'Had + S + V3': would have + V3."
 },
 {
  "id": "t5-a025",
  "cat": "tense",
  "lvl": "B2",
  "q": "The new policy, which ___ last month, requires managers to approve all overtime.",
  "opts": [
   "has introduced",
   "was introduced",
   "introduced",
   "introduces"
  ],
  "a": 1,
  "why": "Chính sách bị giới thiệu (bị động) và có 'last month': was introduced."
 },
 {
  "id": "t5-a026",
  "cat": "tense",
  "lvl": "B2",
  "q": "Neither the manager nor the assistants ___ aware of the change in the delivery schedule.",
  "opts": [
   "has been",
   "was",
   "is",
   "were"
  ],
  "a": 3,
  "why": "Với 'neither...nor', động từ hòa hợp với danh từ gần nhất 'assistants' (số nhiều): were."
 },
 {
  "id": "t5-a027",
  "cat": "tense",
  "lvl": "B1",
  "q": "The team ___ working on the budget since early morning and still has not finished.",
  "opts": [
   "has been",
   "is",
   "had",
   "was"
  ],
  "a": 0,
  "why": "'since early morning' và 'still has not finished' cần hiện tại hoàn thành tiếp diễn: has been working."
 },
 {
  "id": "t5-a028",
  "cat": "tense",
  "lvl": "B2",
  "q": "The invoices ___ by the accounting team before the end of the week, according to the plan.",
  "opts": [
   "will be checked",
   "will check",
   "are checking",
   "have checked"
  ],
  "a": 0,
  "why": "Hóa đơn là đối tượng bị kiểm tra, mốc tương lai: will be checked."
 },
 {
  "id": "t5-a029",
  "cat": "tense",
  "lvl": "B2",
  "q": "Not only ___ the new system reduce costs, but it also improves customer satisfaction.",
  "opts": [
   "is",
   "do",
   "has",
   "does"
  ],
  "a": 3,
  "why": "Đảo ngữ với 'Not only' cần trợ động từ, chủ ngữ số ít 'system': does."
 },
 {
  "id": "t5-a030",
  "cat": "prep",
  "lvl": "B1",
  "q": "The training session will take place ___ 9 a.m. and 11 a.m. in Room 4.",
  "opts": [
   "among",
   "between",
   "during",
   "within"
  ],
  "a": 1,
  "why": "Khoảng giữa hai mốc giờ dùng 'between ... and ...'."
 },
 {
  "id": "t5-a031",
  "cat": "prep",
  "lvl": "B2",
  "q": "Orion Logistics guarantees delivery ___ two working days of receiving an order.",
  "opts": [
   "until",
   "during",
   "since",
   "within"
  ],
  "a": 3,
  "why": "'within two working days' nghĩa là trong vòng hai ngày làm việc."
 },
 {
  "id": "t5-a032",
  "cat": "prep",
  "lvl": "B1",
  "q": "Mr Park has been the head of the marketing team ___ 2019.",
  "opts": [
   "since",
   "during",
   "for",
   "from"
  ],
  "a": 0,
  "why": "Mốc thời điểm 2019 với hiện tại hoàn thành dùng 'since'."
 },
 {
  "id": "t5-a033",
  "cat": "prep",
  "lvl": "B2",
  "q": "All visitors must report ___ the front desk before entering the production area.",
  "opts": [
   "across",
   "on",
   "to",
   "of"
  ],
  "a": 2,
  "why": "Cụm 'report to + nơi/người': báo danh tại quầy lễ tân."
 },
 {
  "id": "t5-a034",
  "cat": "prep",
  "lvl": "B1",
  "q": "The manager is not satisfied ___ the results of the customer survey.",
  "opts": [
   "at",
   "to",
   "with",
   "for"
  ],
  "a": 2,
  "why": "Cụm cố định 'be satisfied with'."
 },
 {
  "id": "t5-a035",
  "cat": "prep",
  "lvl": "B2",
  "q": "Our flight was delayed ___ heavy snow, so we missed the opening of the trade fair.",
  "opts": [
   "in spite of",
   "instead of",
   "due to",
   "in case of"
  ],
  "a": 2,
  "why": "'due to' + danh từ chỉ nguyên nhân; các cụm còn lại sai nghĩa."
 },
 {
  "id": "t5-a036",
  "cat": "prep",
  "lvl": "B1",
  "q": "Employees can apply ___ a transfer to another branch through the HR portal.",
  "opts": [
   "at",
   "by",
   "for",
   "with"
  ],
  "a": 2,
  "why": "Cụm 'apply for' (xin/đăng ký cái gì)."
 },
 {
  "id": "t5-a037",
  "cat": "prep",
  "lvl": "B2",
  "q": "The new printer is similar ___ the one we bought for the Hanoi office.",
  "opts": [
   "to",
   "as",
   "with",
   "than"
  ],
  "a": 0,
  "why": "Cụm cố định 'be similar to' (giống với)."
 },
 {
  "id": "t5-a038",
  "cat": "prep",
  "lvl": "B2",
  "q": "___ the rise in fuel prices, the company decided to keep its shipping rates unchanged.",
  "opts": [
   "However",
   "Although",
   "Because",
   "Despite"
  ],
  "a": 3,
  "why": "Sau chỗ trống là cụm danh từ nên cần giới từ 'Despite'; Although/Because cần mệnh đề."
 },
 {
  "id": "t5-a039",
  "cat": "prep",
  "lvl": "B2",
  "q": "Ms Lan was in charge ___ organizing the annual staff dinner.",
  "opts": [
   "of",
   "for",
   "to",
   "at"
  ],
  "a": 0,
  "why": "Cụm cố định 'in charge of'."
 },
 {
  "id": "t5-a040",
  "cat": "prep",
  "lvl": "B2",
  "q": "The budget proposal is ___ review and will be approved by the board next week.",
  "opts": [
   "under",
   "off",
   "among",
   "over"
  ],
  "a": 0,
  "why": "Cụm cố định 'under review' nghĩa là đang được xem xét."
 },
 {
  "id": "t5-a041",
  "cat": "conj",
  "lvl": "B1",
  "q": "The weekly sales meeting was cancelled ___ the director was sick and could not attend.",
  "opts": [
   "because",
   "unless",
   "although",
   "so that"
  ],
  "a": 0,
  "why": "Vế sau là nguyên nhân của việc hủy họp: because."
 },
 {
  "id": "t5-a042",
  "cat": "conj",
  "lvl": "B2",
  "q": "___ the factory had installed new machines last spring, production remained slow.",
  "opts": [
   "Unless",
   "Since",
   "Although",
   "Because"
  ],
  "a": 2,
  "why": "Hai vế đối lập (có máy mới nhưng vẫn chậm): Although."
 },
 {
  "id": "t5-a043",
  "cat": "conj",
  "lvl": "B1",
  "q": "You will not receive a refund at the service counter ___ you show the original receipt.",
  "opts": [
   "while",
   "because",
   "unless",
   "if"
  ],
  "a": 2,
  "why": "'will not ... unless' nghĩa là trừ khi bạn xuất trình hóa đơn."
 },
 {
  "id": "t5-a044",
  "cat": "conj",
  "lvl": "B2",
  "q": "Mr Nam checked the figures twice ___ there would be no mistakes in the report.",
  "opts": [
   "although",
   "unless",
   "so that",
   "because"
  ],
  "a": 2,
  "why": "Chỉ mục đích: so that + mệnh đề."
 },
 {
  "id": "t5-a045",
  "cat": "conj",
  "lvl": "B1",
  "q": "Ms Lan, ___ manages our Hanoi branch, will visit the head office next week.",
  "opts": [
   "who",
   "which",
   "whose",
   "whom"
  ],
  "a": 0,
  "why": "Đại từ quan hệ thay người, làm chủ ngữ của 'manages': who."
 },
 {
  "id": "t5-a046",
  "cat": "conj",
  "lvl": "B2",
  "q": "The brochure ___ we designed last month has already been sent to customers.",
  "opts": [
   "whose",
   "who",
   "what",
   "that"
  ],
  "a": 3,
  "why": "Đại từ quan hệ thay vật làm tân ngữ: that."
 },
 {
  "id": "t5-a047",
  "cat": "conj",
  "lvl": "B2",
  "q": "Please call the help desk ___ you have any problem with the new software.",
  "opts": [
   "if",
   "although",
   "until",
   "unless"
  ],
  "a": 0,
  "why": "Điều kiện 'nếu bạn gặp sự cố thì gọi': if."
 },
 {
  "id": "t5-a048",
  "cat": "conj",
  "lvl": "B2",
  "q": "The staff were told to wait ___ the technician finished repairing the server.",
  "opts": [
   "so",
   "until",
   "since",
   "unless"
  ],
  "a": 1,
  "why": "Cấu trúc 'wait until' nghĩa là đợi đến khi."
 },
 {
  "id": "t5-a049",
  "cat": "conj",
  "lvl": "B2",
  "q": "___ the sales team met its target, the company paid a bonus to every member.",
  "opts": [
   "Since",
   "Despite",
   "Instead",
   "Whereas"
  ],
  "a": 0,
  "why": "Vế đầu là lý do: Since (bởi vì) + mệnh đề."
 },
 {
  "id": "t5-a050",
  "cat": "conj",
  "lvl": "B2",
  "q": "The company has not decided ___ to open a new branch in Da Nang or in Hue.",
  "opts": [
   "whether",
   "what",
   "that",
   "which"
  ],
  "a": 0,
  "why": "'whether ... or ...' diễn đạt lựa chọn giữa hai khả năng."
 },
 {
  "id": "t5-a051",
  "cat": "conj",
  "lvl": "B1",
  "q": "Both the department manager ___ the assistant approved the revised travel plan.",
  "opts": [
   "but",
   "nor",
   "or",
   "and"
  ],
  "a": 3,
  "why": "Cấu trúc 'both ... and ...'."
 },
 {
  "id": "t5-a052",
  "cat": "pron",
  "lvl": "B2",
  "q": "Anna asked Mr Park to send ___ the updated schedule before noon.",
  "opts": [
   "she",
   "hers",
   "herself",
   "her"
  ],
  "a": 3,
  "why": "Sau động từ 'send' cần đại từ tân ngữ: her."
 },
 {
  "id": "t5-a053",
  "cat": "pron",
  "lvl": "B2",
  "q": "The employees completed the survey by ___ and returned it to the manager.",
  "opts": [
   "their",
   "themselves",
   "they",
   "them"
  ],
  "a": 1,
  "why": "'by themselves' nghĩa là tự họ, không cần ai giúp."
 },
 {
  "id": "t5-a054",
  "cat": "pron",
  "lvl": "B2",
  "q": "Mr Park's office is bigger than ___ of the other managers.",
  "opts": [
   "them",
   "it",
   "those",
   "that"
  ],
  "a": 3,
  "why": "Thay cho 'office' (số ít) để so sánh: that."
 },
 {
  "id": "t5-a055",
  "cat": "pron",
  "lvl": "B1",
  "q": "Those ___ wish to join the safety workshop should register with Ms Lan.",
  "opts": [
   "whom",
   "which",
   "whose",
   "who"
  ],
  "a": 3,
  "why": "Thay cho người, làm chủ ngữ của 'wish': who."
 },
 {
  "id": "t5-a056",
  "cat": "pron",
  "lvl": "B1",
  "q": "The two departments have worked closely with ___ other on the new budget.",
  "opts": [
   "every",
   "both",
   "one",
   "each"
  ],
  "a": 3,
  "why": "'each other' diễn tả quan hệ qua lại giữa hai bên."
 },
 {
  "id": "t5-a057",
  "cat": "pron",
  "lvl": "B2",
  "q": "At the morning briefing, the new manager stood up and introduced ___ to the whole team.",
  "opts": [
   "his",
   "he",
   "himself",
   "itself"
  ],
  "a": 2,
  "why": "Chủ ngữ và tân ngữ là cùng một người (manager tự giới thiệu mình) nên dùng đại từ phản thân: himself."
 },
 {
  "id": "t5-a058",
  "cat": "pron",
  "lvl": "B2",
  "q": "We received two quotes, but ___ of them included the cost of installation.",
  "opts": [
   "neither",
   "every",
   "any",
   "no"
  ],
  "a": 0,
  "why": "Hai báo giá và 'but' (phủ định): neither of them."
 },
 {
  "id": "t5-a059",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The airline will ___ passengers for the cost of any lost luggage.",
  "opts": [
   "compensate",
   "compete",
   "complain",
   "confirm"
  ],
  "a": 0,
  "why": "'compensate sb for sth' là bồi thường cho ai về cái gì."
 },
 {
  "id": "t5-a060",
  "cat": "vocab",
  "lvl": "B1",
  "q": "Before ordering new office chairs, we asked three suppliers to ___ a quotation for the full amount.",
  "opts": [
   "attend",
   "repair",
   "submit",
   "rent"
  ],
  "a": 2,
  "why": "Cụm 'submit a quotation' là nộp báo giá."
 },
 {
  "id": "t5-a061",
  "cat": "vocab",
  "lvl": "B1",
  "q": "The warehouse manager ___ the shipment against the packing list to make sure nothing was missing.",
  "opts": [
   "checked",
   "borrowed",
   "paid",
   "invited"
  ],
  "a": 0,
  "why": "Đối chiếu hàng với phiếu đóng gói để chắc chắn đủ: checked."
 },
 {
  "id": "t5-a062",
  "cat": "vocab",
  "lvl": "B1",
  "q": "To qualify for a refund, customers must ___ the product within 30 days of purchase.",
  "opts": [
   "reserve",
   "return",
   "retire",
   "refer"
  ],
  "a": 1,
  "why": "Muốn được hoàn tiền phải trả lại sản phẩm: return."
 },
 {
  "id": "t5-a063",
  "cat": "vocab",
  "lvl": "B1",
  "q": "Ms Lan was asked to ___ the new employees around the factory on their first day.",
  "opts": [
   "say",
   "speak",
   "show",
   "tell"
  ],
  "a": 2,
  "why": "Cụm 'show sb around' là dẫn ai đi tham quan."
 },
 {
  "id": "t5-a064",
  "cat": "vocab",
  "lvl": "B1",
  "q": "The hotel has ___ a discount for guests who book their rooms more than a month in advance.",
  "opts": [
   "lacked",
   "offered",
   "stayed",
   "ordered"
  ],
  "a": 1,
  "why": "'offer a discount' là đưa ra ưu đãi giảm giá."
 },
 {
  "id": "t5-a065",
  "cat": "vocab",
  "lvl": "B2",
  "q": "Because of the sudden rise in demand, the factory had to ___ extra workers for the night shift.",
  "opts": [
   "retire",
   "fire",
   "resign",
   "hire"
  ],
  "a": 3,
  "why": "Cần thêm công nhân khi nhu cầu tăng: hire."
 },
 {
  "id": "t5-a066",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The marketing team will ___ a survey to find out why customers are switching to other brands.",
  "opts": [
   "confide",
   "conduct",
   "convey",
   "consume"
  ],
  "a": 1,
  "why": "Kết hợp từ 'conduct a survey' nghĩa là tiến hành khảo sát."
 },
 {
  "id": "t5-a067",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The contract states that the supplier must ___ all defective goods at no extra charge.",
  "opts": [
   "reply",
   "replace",
   "reduce",
   "remind"
  ],
  "a": 1,
  "why": "Hàng lỗi được thay miễn phí: replace."
 },
 {
  "id": "t5-a068",
  "cat": "vocab",
  "lvl": "B1",
  "q": "Our accountant advised us to ___ all receipts for at least seven years in case of an audit.",
  "opts": [
   "keep",
   "cancel",
   "lend",
   "spend"
  ],
  "a": 0,
  "why": "Giữ hóa đơn phòng khi kiểm toán: keep."
 },
 {
  "id": "t5-a069",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The sales figures were ___ affected by the strike at the port, which delayed shipments for two weeks.",
  "opts": [
   "nearly",
   "adversely",
   "formerly",
   "cheerfully"
  ],
  "a": 1,
  "why": "Đình công làm chậm hàng nên doanh số bị ảnh hưởng xấu: adversely."
 },
 {
  "id": "t5-a070",
  "cat": "vocab",
  "lvl": "B2",
  "q": "Mr Park's presentation was so ___ that several clients asked for a copy of his slides.",
  "opts": [
   "expensive",
   "informative",
   "crowded",
   "hesitant"
  ],
  "a": 1,
  "why": "Khách xin bản slide vì bài thuyết trình nhiều thông tin: informative."
 },
 {
  "id": "t5-a071",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The company is reviewing its policy to ensure it ___ with the latest safety regulations.",
  "opts": [
   "depends",
   "relies",
   "complies",
   "applies"
  ],
  "a": 2,
  "why": "Cụm 'comply with regulations' là tuân thủ quy định."
 },
 {
  "id": "t5-a072",
  "cat": "quant",
  "lvl": "B2",
  "q": "Hue received ___ complaints than any other branch, so it won the service award.",
  "opts": [
   "few",
   "the fewest",
   "fewer",
   "least"
  ],
  "a": 2,
  "why": "Có 'than' nên dùng so sánh hơn của danh từ đếm được: fewer complaints than."
 },
 {
  "id": "t5-a073",
  "cat": "quant",
  "lvl": "B1",
  "q": "The new model is ___ expensive than the old one, but it uses much less energy.",
  "opts": [
   "most",
   "more",
   "the more",
   "as"
  ],
  "a": 1,
  "why": "Có 'than' nên dùng so sánh hơn: more expensive."
 },
 {
  "id": "t5-a074",
  "cat": "quant",
  "lvl": "B1",
  "q": "We have ___ time left before the presentation, so please finish the slides quickly.",
  "opts": [
   "a few",
   "many",
   "few",
   "little"
  ],
  "a": 3,
  "why": "'time' không đếm được và ngụ ý ít: little."
 },
 {
  "id": "t5-a075",
  "cat": "quant",
  "lvl": "B1",
  "q": "___ employee who completes the course will receive a certificate.",
  "opts": [
   "Several",
   "All",
   "Every",
   "Many"
  ],
  "a": 2,
  "why": "Danh từ số ít 'employee' đi với Every."
 },
 {
  "id": "t5-b001",
  "cat": "form",
  "lvl": "B1",
  "q": "The facilities team is responsible for the ___ of all fire extinguishers in the office building.",
  "opts": [
   "maintain",
   "maintained",
   "maintainable",
   "maintenance"
  ],
  "a": 3,
  "why": "Sau mạo từ 'the' và trước 'of' cần một danh từ: maintenance (sự bảo trì)."
 },
 {
  "id": "t5-b002",
  "cat": "form",
  "lvl": "B1",
  "q": "Inspectors reported that the new packaging line operates more ___ than the old one did.",
  "opts": [
   "efficient",
   "efficiency",
   "efficiently",
   "efficiencies"
  ],
  "a": 2,
  "why": "Bổ nghĩa cho động từ 'operates' cần trạng từ: more efficiently."
 },
 {
  "id": "t5-b003",
  "cat": "form",
  "lvl": "B1",
  "q": "All applicants must submit a ___ CV and two letters of reference to the recruitment office by Friday.",
  "opts": [
   "detail",
   "detailed",
   "detailing",
   "details"
  ],
  "a": 1,
  "why": "Trước danh từ 'CV' cần tính từ: a detailed CV (hồ sơ chi tiết)."
 },
 {
  "id": "t5-b004",
  "cat": "form",
  "lvl": "B1",
  "q": "Ms Tran was ___ for the position of regional recruitment manager after a long interview process.",
  "opts": [
   "selected",
   "select",
   "selection",
   "selective"
  ],
  "a": 0,
  "why": "Câu bị động 'was + V3': was selected for the position (được chọn)."
 },
 {
  "id": "t5-b005",
  "cat": "form",
  "lvl": "B1",
  "q": "The bank's new mobile app offers customers a ___ way to check their account balances at any time.",
  "opts": [
   "conveniently",
   "convenience",
   "conveniences",
   "convenient"
  ],
  "a": 3,
  "why": "Sau mạo từ 'a' và trước danh từ 'way' cần tính từ: a convenient way."
 },
 {
  "id": "t5-b006",
  "cat": "form",
  "lvl": "B1",
  "q": "Organisers apologised for the ___ of the keynote speech, which began forty minutes later than planned.",
  "opts": [
   "delayed",
   "delaying",
   "delay",
   "delayer"
  ],
  "a": 2,
  "why": "Sau 'the' và trước 'of' cần danh từ: the delay of the speech. 'began forty minutes later' cho thấy sự chậm trễ."
 },
 {
  "id": "t5-b007",
  "cat": "form",
  "lvl": "B2",
  "q": "The quality control manager insisted on a ___ review of every batch before it left the factory.",
  "opts": [
   "thoroughly",
   "thorough",
   "thoroughness",
   "thoroughest"
  ],
  "a": 1,
  "why": "Giữa 'a' và danh từ 'review' cần tính từ nguyên mẫu: a thorough review; 'thoroughest' là so sánh nhất, không đi với 'a'."
 },
 {
  "id": "t5-b008",
  "cat": "form",
  "lvl": "B2",
  "q": "Hotel guests were ___ to learn that breakfast would be complimentary throughout the conference week.",
  "opts": [
   "pleased",
   "pleasing",
   "pleasure",
   "pleasantly"
  ],
  "a": 0,
  "why": "'be pleased to + V' là cấu trúc cố định (vui mừng khi biết); chủ ngữ là người nên dùng V-ed."
 },
 {
  "id": "t5-b009",
  "cat": "form",
  "lvl": "B1",
  "q": "The clinic's administrator is ___ for scheduling all patient appointments and updating insurance records.",
  "opts": [
   "responsibly",
   "responsibility",
   "responsibilities",
   "responsible"
  ],
  "a": 3,
  "why": "Sau 'is' cần tính từ: be responsible for (chịu trách nhiệm về)."
 },
 {
  "id": "t5-b010",
  "cat": "form",
  "lvl": "B2",
  "q": "Because the shipment was ___ labelled, the customs officer held it for further inspection at the border.",
  "opts": [
   "incorrect",
   "incorrectness",
   "incorrectly",
   "incorrecting"
  ],
  "a": 2,
  "why": "Trạng từ đứng giữa 'was' và V3 'labelled' để bổ nghĩa: was incorrectly labelled."
 },
 {
  "id": "t5-b011",
  "cat": "form",
  "lvl": "B2",
  "q": "The airline's ___ to resolve baggage complaints within a day has greatly improved its reputation among travellers.",
  "opts": [
   "able",
   "ability",
   "ably",
   "enable"
  ],
  "a": 1,
  "why": "Sau sở hữu cách 's cần danh từ, kèm 'to + V': ability to resolve (khả năng giải quyết)."
 },
 {
  "id": "t5-b012",
  "cat": "form",
  "lvl": "B2",
  "q": "A careful ___ of the supplier contract revealed several clauses that were unfavourable to the company.",
  "opts": [
   "analysis",
   "analyse",
   "analytic",
   "analytically"
  ],
  "a": 0,
  "why": "Sau tính từ 'careful' và trước 'of' cần danh từ: a careful analysis."
 },
 {
  "id": "t5-b013",
  "cat": "form",
  "lvl": "B1",
  "q": "Tourism officials expect visitor numbers to rise ___ over the next quarter as new flights are added.",
  "opts": [
   "steady",
   "steadiness",
   "steadied",
   "steadily"
  ],
  "a": 3,
  "why": "Bổ nghĩa cho động từ 'rise' cần trạng từ: rise steadily (tăng đều)."
 },
 {
  "id": "t5-b014",
  "cat": "form",
  "lvl": "B1",
  "q": "Candidates with ___ experience in logistics will be given priority during the shortlisting process.",
  "opts": [
   "relevance",
   "relevantly",
   "relevant",
   "relevancy"
  ],
  "a": 2,
  "why": "Trước danh từ 'experience' cần tính từ: relevant experience (kinh nghiệm liên quan)."
 },
 {
  "id": "t5-b015",
  "cat": "form",
  "lvl": "B2",
  "q": "Dr Kim's ___ of the electronic patient records system saved the clinic hours of paperwork every week.",
  "opts": [
   "implemented",
   "implementation",
   "implement",
   "implementable"
  ],
  "a": 1,
  "why": "Sau sở hữu cách 'Dr Kim's' và trước 'of' cần danh từ: implementation (việc triển khai)."
 },
 {
  "id": "t5-b016",
  "cat": "tense",
  "lvl": "B1",
  "q": "The inspection team ___ the production line yesterday and found no serious defects.",
  "opts": [
   "inspected",
   "inspects",
   "will inspect",
   "has inspected"
  ],
  "a": 0,
  "why": "'yesterday' là mốc quá khứ xác định nên dùng quá khứ đơn: inspected."
 },
 {
  "id": "t5-b017",
  "cat": "tense",
  "lvl": "B1",
  "q": "Mr Park ___ for Orion Logistics since 2015, so he knows the warehouse system very well.",
  "opts": [
   "worked",
   "works",
   "is working",
   "has worked"
  ],
  "a": 3,
  "why": "'since 2015' đi với hiện tại hoàn thành: has worked."
 },
 {
  "id": "t5-b018",
  "cat": "tense",
  "lvl": "B1",
  "q": "If the shipment arrives before noon, the warehouse staff ___ it immediately.",
  "opts": [
   "unloaded",
   "would unload",
   "will unload",
   "unloading"
  ],
  "a": 2,
  "why": "Câu điều kiện loại 1: If + hiện tại đơn, ... will + V."
 },
 {
  "id": "t5-b019",
  "cat": "tense",
  "lvl": "B1",
  "q": "The conference registration desk ___ at 8 a.m. tomorrow, so please arrive a little earlier.",
  "opts": [
   "opened",
   "opens",
   "has opened",
   "opening"
  ],
  "a": 1,
  "why": "Lịch trình cố định trong tương lai dùng hiện tại đơn: opens at 8 a.m. tomorrow."
 },
 {
  "id": "t5-b020",
  "cat": "tense",
  "lvl": "B1",
  "q": "All visitors ___ to wear safety helmets when they enter the construction area.",
  "opts": [
   "are required",
   "requires",
   "is requiring",
   "require"
  ],
  "a": 0,
  "why": "Chủ ngữ 'visitors' là người bị yêu cầu nên dùng bị động số nhiều: are required to."
 },
 {
  "id": "t5-b021",
  "cat": "tense",
  "lvl": "B2",
  "q": "By the time the auditors arrived, the accounts team ___ all the records for the previous year.",
  "opts": [
   "has organised",
   "organises",
   "will have organised",
   "had organised"
  ],
  "a": 3,
  "why": "'By the time + quá khứ đơn' cần quá khứ hoàn thành cho hành động xảy ra trước: had organised."
 },
 {
  "id": "t5-b022",
  "cat": "tense",
  "lvl": "B2",
  "q": "Ms Lan suggested ___ the recruitment drive to universities in the northern region this autumn.",
  "opts": [
   "to expand",
   "expand",
   "expanding",
   "expanded"
  ],
  "a": 2,
  "why": "'suggest' đi với V-ing: suggested expanding."
 },
 {
  "id": "t5-b023",
  "cat": "tense",
  "lvl": "B2",
  "q": "The new vaccine storage fridge ___ before the clinic opens next Monday morning.",
  "opts": [
   "installs",
   "will be installed",
   "has installed",
   "is installing"
  ],
  "a": 1,
  "why": "Thiết bị là đối tượng bị tác động, thời điểm tương lai: bị động will be installed."
 },
 {
  "id": "t5-b024",
  "cat": "tense",
  "lvl": "B2",
  "q": "Neither the supervisor nor the technicians ___ aware of the sudden change in the delivery schedule last week.",
  "opts": [
   "were",
   "was",
   "is",
   "has been"
  ],
  "a": 0,
  "why": "Với 'neither...nor', động từ hòa hợp với danh từ gần nhất 'technicians' (số nhiều); 'last week' là quá khứ: were."
 },
 {
  "id": "t5-b025",
  "cat": "tense",
  "lvl": "B2",
  "q": "The hotel manager decided ___ extra staff for the weekend because of the large wedding party.",
  "opts": [
   "hiring",
   "hire",
   "hired",
   "to hire"
  ],
  "a": 3,
  "why": "'decide' đi với to-V: decided to hire."
 },
 {
  "id": "t5-b026",
  "cat": "tense",
  "lvl": "B2",
  "q": "Last quarter's sales figures ___ in the report that Mr Nam sent to all department heads.",
  "opts": [
   "included",
   "have included",
   "were included",
   "including"
  ],
  "a": 2,
  "why": "Số liệu là vật bị 'bao gồm' nên dùng bị động quá khứ (Last quarter): were included."
 },
 {
  "id": "t5-b027",
  "cat": "tense",
  "lvl": "B2",
  "q": "While the technician ___ the faulty scanner, the warehouse workers continued packing orders by hand.",
  "opts": [
   "will repair",
   "was repairing",
   "has repaired",
   "repairs"
  ],
  "a": 1,
  "why": "Hành động đang diễn ra song song trong quá khứ (workers continued...): quá khứ tiếp diễn was repairing; 'will repair/repairs' sai thì, 'has repaired' không hợp mệnh đề quá khứ."
 },
 {
  "id": "t5-b028",
  "cat": "tense",
  "lvl": "B2",
  "q": "We would have met the delivery deadline if the supplier ___ the parts on time.",
  "opts": [
   "had sent",
   "sent",
   "would send",
   "has sent"
  ],
  "a": 0,
  "why": "Điều kiện loại 3: If + had + V3, ... would have + V3."
 },
 {
  "id": "t5-b029",
  "cat": "tense",
  "lvl": "B1",
  "q": "Customers can ___ their bookings online until 24 hours before departure without paying any fee.",
  "opts": [
   "cancelling",
   "cancelled",
   "cancels",
   "cancel"
  ],
  "a": 3,
  "why": "Sau động từ khuyết thiếu 'can' dùng động từ nguyên mẫu: can cancel."
 },
 {
  "id": "t5-b030",
  "cat": "prep",
  "lvl": "B1",
  "q": "The maintenance crew will repair the broken lift ___ Thursday afternoon, so please use the stairs.",
  "opts": [
   "in",
   "at",
   "on",
   "of"
  ],
  "a": 2,
  "why": "Dùng 'on' trước thứ/ngày: on Thursday afternoon."
 },
 {
  "id": "t5-b031",
  "cat": "prep",
  "lvl": "B1",
  "q": "Please send your application ___ email to the recruitment office before the end of the month.",
  "opts": [
   "to",
   "by",
   "at",
   "under"
  ],
  "a": 1,
  "why": "'by email' là cụm cố định chỉ phương tiện gửi."
 },
 {
  "id": "t5-b032",
  "cat": "prep",
  "lvl": "B1",
  "q": "The quality inspector is not satisfied ___ the standard of the latest batch of bottles.",
  "opts": [
   "with",
   "of",
   "for",
   "at"
  ],
  "a": 0,
  "why": "Cụm cố định: be satisfied with (hài lòng với)."
 },
 {
  "id": "t5-b033",
  "cat": "prep",
  "lvl": "B1",
  "q": "Travellers must show their passports ___ the check-in counter before they receive a boarding pass.",
  "opts": [
   "on",
   "into",
   "among",
   "at"
  ],
  "a": 3,
  "why": "'at the check-in counter' chỉ vị trí tại quầy; các giới từ còn lại không hợp nghĩa."
 },
 {
  "id": "t5-b034",
  "cat": "prep",
  "lvl": "B2",
  "q": "The conference centre is located ___ walking distance of two metro stations and several hotels.",
  "opts": [
   "between",
   "among",
   "within",
   "toward"
  ],
  "a": 2,
  "why": "Cụm cố định: within walking distance of (trong khoảng cách đi bộ tới)."
 },
 {
  "id": "t5-b035",
  "cat": "prep",
  "lvl": "B2",
  "q": "Staff are reminded to complete the safety form ___ accordance with company regulations at the start of each shift.",
  "opts": [
   "on",
   "in",
   "by",
   "under"
  ],
  "a": 1,
  "why": "Cụm cố định: in accordance with (theo đúng)."
 },
 {
  "id": "t5-b036",
  "cat": "prep",
  "lvl": "B2",
  "q": "___ the sharp rise in fuel prices, the company managed to keep its delivery fees unchanged this year.",
  "opts": [
   "Despite",
   "Because of",
   "Instead of",
   "According to"
  ],
  "a": 0,
  "why": "Giá nhiên liệu tăng nhưng phí không đổi, quan hệ nhượng bộ: Despite. 'Because of' sẽ sai logic."
 },
 {
  "id": "t5-b037",
  "cat": "prep",
  "lvl": "B2",
  "q": "Ms Tran was promoted ___ recognition of her outstanding work in the quality control department.",
  "opts": [
   "at",
   "on",
   "with",
   "in"
  ],
  "a": 3,
  "why": "Cụm cố định: in recognition of (để ghi nhận)."
 },
 {
  "id": "t5-b038",
  "cat": "prep",
  "lvl": "B2",
  "q": "The new bank branch will be open ___ 9 a.m. and 5 p.m. on weekdays, but closed on weekends.",
  "opts": [
   "during",
   "since",
   "between",
   "among"
  ],
  "a": 2,
  "why": "Cấu trúc 'between ... and ...' chỉ khoảng thời gian từ 9 giờ đến 5 giờ."
 },
 {
  "id": "t5-b039",
  "cat": "prep",
  "lvl": "B2",
  "q": "Clinic staff are in charge ___ updating patient files after every appointment.",
  "opts": [
   "for",
   "of",
   "with",
   "on"
  ],
  "a": 1,
  "why": "Cụm cố định: be in charge of (phụ trách)."
 },
 {
  "id": "t5-b040",
  "cat": "prep",
  "lvl": "B2",
  "q": "Applicants are expected to be fluent ___ both English and Vietnamese to work at the tourist information desk.",
  "opts": [
   "in",
   "by",
   "for",
   "of"
  ],
  "a": 0,
  "why": "Cụm cố định: be fluent in + ngôn ngữ."
 },
 {
  "id": "t5-b041",
  "cat": "conj",
  "lvl": "B1",
  "q": "The meeting was postponed ___ the manager was stuck in traffic and could not reach the office.",
  "opts": [
   "so",
   "although",
   "but",
   "because"
  ],
  "a": 3,
  "why": "Vế sau là nguyên nhân của việc hoãn họp: because."
 },
 {
  "id": "t5-b042",
  "cat": "conj",
  "lvl": "B1",
  "q": "You can either pay by credit card ___ transfer the money directly to our bank account.",
  "opts": [
   "and",
   "but",
   "or",
   "nor"
  ],
  "a": 2,
  "why": "Cấu trúc 'either ... or ...' (hoặc ... hoặc)."
 },
 {
  "id": "t5-b043",
  "cat": "conj",
  "lvl": "B1",
  "q": "___ the flight was delayed, the tour group missed the first activity of the day.",
  "opts": [
   "Although",
   "Because",
   "Unless",
   "Whether"
  ],
  "a": 1,
  "why": "Chuyến bay trễ là nguyên nhân bỏ lỡ hoạt động: Because."
 },
 {
  "id": "t5-b044",
  "cat": "conj",
  "lvl": "B1",
  "q": "Please call the help desk ___ you have any trouble logging in to the booking system.",
  "opts": [
   "if",
   "unless",
   "although",
   "since"
  ],
  "a": 0,
  "why": "Điều kiện 'nếu bạn gặp sự cố' dùng if."
 },
 {
  "id": "t5-b045",
  "cat": "conj",
  "lvl": "B2",
  "q": "The factory will not resume production ___ the safety inspectors have approved the repairs.",
  "opts": [
   "while",
   "although",
   "whereas",
   "until"
  ],
  "a": 3,
  "why": "'not ... until' nghĩa là chưa ... cho đến khi."
 },
 {
  "id": "t5-b046",
  "cat": "conj",
  "lvl": "B2",
  "q": "Sales improved significantly this quarter, ___ the marketing budget was reduced by ten percent.",
  "opts": [
   "so that",
   "in case",
   "even though",
   "as long as"
  ],
  "a": 2,
  "why": "Hai vế đối lập (ngân sách giảm nhưng doanh số tăng): even though."
 },
 {
  "id": "t5-b047",
  "cat": "conj",
  "lvl": "B2",
  "q": "Employees should save their files regularly ___ no data is lost if the system crashes unexpectedly.",
  "opts": [
   "in spite of",
   "so that",
   "as if",
   "whereas"
  ],
  "a": 1,
  "why": "'so that' chỉ mục đích (để không mất dữ liệu)."
 },
 {
  "id": "t5-b048",
  "cat": "conj",
  "lvl": "B2",
  "q": "The candidate has excellent technical skills; ___, she lacks experience in managing a team.",
  "opts": [
   "however",
   "moreover",
   "therefore",
   "for example"
  ],
  "a": 0,
  "why": "Vế sau nêu điểm yếu, đối lập với điểm mạnh: however."
 },
 {
  "id": "t5-b049",
  "cat": "conj",
  "lvl": "B2",
  "q": "Please keep your receipt; ___, you will not be able to return the item to the store.",
  "opts": [
   "therefore",
   "moreover",
   "besides",
   "otherwise"
  ],
  "a": 3,
  "why": "'otherwise' nghĩa là nếu không thì, nêu hậu quả: không có biên lai sẽ không trả hàng được."
 },
 {
  "id": "t5-b050",
  "cat": "conj",
  "lvl": "B2",
  "q": "___ the hotel is fully booked in July, travellers are advised to reserve rooms at least two months ahead.",
  "opts": [
   "Unless",
   "Whether",
   "Since",
   "Until"
  ],
  "a": 2,
  "why": "'Since' (vì) nêu lý do khách sạn kín phòng nên cần đặt sớm."
 },
 {
  "id": "t5-b051",
  "cat": "conj",
  "lvl": "B2",
  "q": "The new software is easy to use, ___ it does take a few days to learn all of its features.",
  "opts": [
   "because",
   "although",
   "unless",
   "so"
  ],
  "a": 1,
  "why": "Hai vế đối lập (dễ dùng nhưng cần vài ngày): although."
 },
 {
  "id": "t5-b052",
  "cat": "conj",
  "lvl": "B2",
  "q": "The supplier ___ contract expires in June has offered us a discount if we renew early.",
  "opts": [
   "whose",
   "who",
   "which",
   "whom"
  ],
  "a": 0,
  "why": "Đại từ quan hệ sở hữu đứng trước danh từ 'contract': whose contract."
 },
 {
  "id": "t5-b053",
  "cat": "pron",
  "lvl": "B1",
  "q": "Ms Kim asked the new employees to introduce ___ to the rest of the sales team.",
  "opts": [
   "them",
   "their",
   "theirs",
   "themselves"
  ],
  "a": 3,
  "why": "Chủ ngữ và tân ngữ cùng chỉ một đối tượng nên dùng đại từ phản thân: themselves."
 },
 {
  "id": "t5-b054",
  "cat": "pron",
  "lvl": "B1",
  "q": "The delegates must show ___ badges at the entrance before they can enter the conference hall.",
  "opts": [
   "them",
   "theirs",
   "their",
   "they"
  ],
  "a": 2,
  "why": "Trước danh từ 'badges' cần tính từ sở hữu: their."
 },
 {
  "id": "t5-b055",
  "cat": "pron",
  "lvl": "B1",
  "q": "I left my laptop in the meeting room, but Anna has already brought ___ back to my desk.",
  "opts": [
   "them",
   "it",
   "itself",
   "its"
  ],
  "a": 1,
  "why": "Thay cho 'my laptop' (số ít, làm tân ngữ) dùng 'it'."
 },
 {
  "id": "t5-b056",
  "cat": "pron",
  "lvl": "B2",
  "q": "Those ___ wish to attend the safety workshop should sign up at the reception desk by Friday.",
  "opts": [
   "who",
   "which",
   "whom",
   "whose"
  ],
  "a": 0,
  "why": "'Those' chỉ người; đại từ quan hệ làm chủ ngữ cho 'wish' là who."
 },
 {
  "id": "t5-b057",
  "cat": "pron",
  "lvl": "B2",
  "q": "Our training programmes are quite different from ___ offered by competitors in the region.",
  "opts": [
   "that",
   "ones",
   "these",
   "those"
  ],
  "a": 3,
  "why": "So sánh với 'programmes' số nhiều đã nhắc nên dùng đại từ thay thế số nhiều: 'those offered by...'; 'that' dành cho danh từ số ít."
 },
 {
  "id": "t5-b058",
  "cat": "pron",
  "lvl": "B2",
  "q": "The two departments share one budget, and ___ has to approve every purchase over five hundred dollars.",
  "opts": [
   "every",
   "both",
   "each",
   "all"
  ],
  "a": 2,
  "why": "'each' làm đại từ đi với động từ số ít 'has'; 'both/all' đòi 'have', 'every' không đứng một mình."
 },
 {
  "id": "t5-b059",
  "cat": "pron",
  "lvl": "B2",
  "q": "Please let Ms Tran or ___ know if the delivery is delayed again this week.",
  "opts": [
   "I",
   "me",
   "my",
   "mine"
  ],
  "a": 1,
  "why": "Sau 'let' cần tân ngữ: let Ms Tran or me know."
 },
 {
  "id": "t5-b060",
  "cat": "pron",
  "lvl": "B1",
  "q": "This laptop is not mine; it belongs to Minh, so please give it back to ___.",
  "opts": [
   "him",
   "he",
   "his",
   "himself"
  ],
  "a": 0,
  "why": "Sau giới từ 'to' cần đại từ tân ngữ: him."
 },
 {
  "id": "t5-b061",
  "cat": "vocab",
  "lvl": "B1",
  "q": "Please ___ your seat belts while the tour bus is moving along the mountain road.",
  "opts": [
   "open",
   "carry",
   "borrow",
   "fasten"
  ],
  "a": 3,
  "why": "Collocation: fasten seat belts (thắt dây an toàn)."
 },
 {
  "id": "t5-b062",
  "cat": "vocab",
  "lvl": "B1",
  "q": "The warehouse manager asked staff to ___ the boxes carefully because the contents were fragile.",
  "opts": [
   "design",
   "hire",
   "handle",
   "predict"
  ],
  "a": 2,
  "why": "'fragile' gợi việc xử lý cẩn thận: handle the boxes carefully."
 },
 {
  "id": "t5-b063",
  "cat": "vocab",
  "lvl": "B1",
  "q": "To book a room, you must first fill out the online ___ form with your name and passport number.",
  "opts": [
   "ceiling",
   "registration",
   "catering",
   "vacancy"
  ],
  "a": 1,
  "why": "Collocation: registration form (mẫu đăng ký); các từ khác không hợp nghĩa."
 },
 {
  "id": "t5-b064",
  "cat": "vocab",
  "lvl": "B1",
  "q": "The tourist office provides free ___ of the old town, including maps and a list of museums.",
  "opts": [
   "brochures",
   "complaints",
   "invoices",
   "salaries"
  ],
  "a": 0,
  "why": "'maps and a list of museums' là nội dung của tờ rơi: brochures."
 },
 {
  "id": "t5-b065",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The bank will ___ a fee of two percent on all international money transfers made after June.",
  "opts": [
   "pay",
   "spend",
   "lend",
   "charge"
  ],
  "a": 3,
  "why": "Collocation: charge a fee (thu phí)."
 },
 {
  "id": "t5-b066",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The quality team found that the defective valves did not ___ with the required safety standards.",
  "opts": [
   "apply",
   "attend",
   "comply",
   "suit"
  ],
  "a": 2,
  "why": "Collocation: comply with standards (tuân thủ tiêu chuẩn)."
 },
 {
  "id": "t5-b067",
  "cat": "vocab",
  "lvl": "B2",
  "q": "Because of the heavy snow, the airline offered stranded passengers free hotel ___ for the night.",
  "opts": [
   "admission",
   "accommodation",
   "appointment",
   "acquisition"
  ],
  "a": 1,
  "why": "'hotel ... for the night' nghĩa là chỗ ở: accommodation."
 },
 {
  "id": "t5-b068",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The HR officer will ___ the final candidate list to the director for approval by Friday.",
  "opts": [
   "submit",
   "admit",
   "reserve",
   "invest"
  ],
  "a": 0,
  "why": "Collocation: submit a list for approval (nộp danh sách để duyệt)."
 },
 {
  "id": "t5-b069",
  "cat": "vocab",
  "lvl": "B2",
  "q": "Warehouse supervisors must ___ that every pallet is scanned before it is loaded onto the truck.",
  "opts": [
   "ensue",
   "inquire",
   "enrol",
   "ensure"
  ],
  "a": 3,
  "why": "'ensure that' nghĩa là đảm bảo rằng; các từ còn lại không đi với mệnh đề that."
 },
 {
  "id": "t5-b070",
  "cat": "vocab",
  "lvl": "B2",
  "q": "The hospital's billing office offers a payment ___ for patients who cannot pay the full amount at once.",
  "opts": [
   "route",
   "ticket",
   "plan",
   "shift"
  ],
  "a": 2,
  "why": "Collocation: payment plan (kế hoạch trả góp) cho người không trả hết một lần."
 },
 {
  "id": "t5-b071",
  "cat": "vocab",
  "lvl": "B2",
  "q": "Delegates who wish to attend both workshops must ___ in advance because places are limited.",
  "opts": [
   "resign",
   "register",
   "retire",
   "require"
  ],
  "a": 1,
  "why": "'places are limited' gợi việc đăng ký trước: register in advance."
 },
 {
  "id": "t5-b072",
  "cat": "vocab",
  "lvl": "B2",
  "q": "A leaking pipe on the third floor ___ the facilities team to close the conference room for repairs.",
  "opts": [
   "forced",
   "suggested",
   "reported",
   "admitted"
  ],
  "a": 0,
  "why": "'force somebody to V' (buộc ai làm gì); các từ khác không đi với cấu trúc tân ngữ + to-V."
 },
 {
  "id": "t5-b073",
  "cat": "quant",
  "lvl": "B1",
  "q": "Only ___ tickets remain for the evening harbour cruise, so please book your seats today.",
  "opts": [
   "a little",
   "much",
   "every",
   "a few"
  ],
  "a": 3,
  "why": "'tickets' đếm được số nhiều: a few; 'a little/much' dùng với danh từ không đếm được, 'every' đi với danh từ số ít."
 },
 {
  "id": "t5-b074",
  "cat": "quant",
  "lvl": "B2",
  "q": "This year's conference attracted ___ more participants than last year's, with attendance up by almost forty percent.",
  "opts": [
   "very",
   "most",
   "far",
   "too"
  ],
  "a": 2,
  "why": "'far' nhấn mạnh so sánh hơn: far more participants."
 },
 {
  "id": "t5-b075",
  "cat": "quant",
  "lvl": "B2",
  "q": "Of all the suppliers we tested, Green Valley Packaging offers ___ reliable delivery service.",
  "opts": [
   "more",
   "the most",
   "as",
   "much"
  ],
  "a": 1,
  "why": "'Of all' là so sánh nhất: the most reliable."
 }
];
/* TOEIC Part 6 */
const TOEIC6 = [
 {
  "id": "t6-a01",
  "genre": "email",
  "lvl": "B1",
  "title": "New printer rules",
  "text": "Subject: New printer rules\n\nDear all,\n\nFrom Monday, the third-floor printer {1} only for urgent documents. Staff who need to print long reports should use the copy room on the second floor. {2} The old machine has broken down three times this month, and repairs are expensive. {3}, we have decided to limit its use until the new one arrives. {4} the new printer arrives, we will tell you by email.\n\nWe are sorry for any trouble this causes, and we thank you for your understanding.\nMinh, Office Manager",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "used",
     "will use",
     "will be used",
     "is using"
    ],
    "a": 2,
    "why": "Máy in là vật nhận hành động nên dùng bị động tương lai: \"will be used\"."
   },
   {
    "type": "sentence",
    "opts": [
     "The copy room is on the second floor.",
     "Everyone received a new laptop last week.",
     "The printer was bought yesterday and works perfectly.",
     "We know this change may cause some inconvenience."
    ],
    "a": 3,
    "why": "Câu thừa nhận sự bất tiện, mở đường cho lời giải thích 'The old machine has broken down'; các câu kia lặp ý, lạc đề hoặc mâu thuẫn với 'old machine'."
   },
   {
    "type": "connector",
    "opts": [
     "However",
     "Therefore",
     "For example",
     "Although"
    ],
    "a": 1,
    "why": "Máy hỏng nhiều và sửa tốn kém nên kết quả là hạn chế sử dụng: \"Therefore\"."
   },
   {
    "type": "connector",
    "opts": [
     "Because",
     "Unless",
     "As soon as",
     "During"
    ],
    "a": 2,
    "why": "\"As soon as the new printer arrives, we will tell you\" là quan hệ thời gian hợp lý."
   }
  ]
 },
 {
  "id": "t6-a02",
  "genre": "notice",
  "lvl": "B1",
  "title": "Library opening hours",
  "text": "NOTICE: Library Opening Hours\n\nGreen Valley Library {1} its opening hours from 1 November. The library will open at 8 a.m. instead of 9 a.m. on weekdays, and it will stay open until 8 p.m. on Thursdays. {2} Many students told us that they need a quiet place to study in the evening. {3}, the weekend hours will not change. The library will still close at 5 p.m. on Saturdays and Sundays. If you want to {4} a study room, please ask at the front desk.",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "has changed",
     "will change",
     "changed",
     "changing"
    ],
    "a": 1,
    "why": "\"from 1 November\" chỉ tương lai nên dùng \"will change\"."
   },
   {
    "type": "sentence",
    "opts": [
     "The library will open at 7 a.m. on weekdays.",
     "The library will open at 8 a.m. instead of 9 a.m.",
     "These changes will help people who work or study late.",
     "The library was built more than fifty years ago."
    ],
    "a": 2,
    "why": "Câu này nối kết quả với lý do \"study in the evening\"; các câu khác lạc đề, mâu thuẫn \"8 a.m.\" hoặc lặp lại."
   },
   {
    "type": "connector",
    "opts": [
     "Because",
     "As a result",
     "For example",
     "However"
    ],
    "a": 3,
    "why": "Ngày thường thay đổi, cuối tuần thì không: quan hệ tương phản nên dùng \"However\"."
   },
   {
    "type": "vocab",
    "opts": [
     "rescue",
     "reserve",
     "repeat",
     "resolve"
    ],
    "a": 1,
    "why": "\"reserve a study room\" là cụm đúng nghĩa: đặt trước phòng học."
   }
  ]
 },
 {
  "id": "t6-a03",
  "genre": "memo",
  "lvl": "B1",
  "title": "Parking during building work",
  "text": "MEMO\nTo: All staff\nFrom: Facilities Team\nSubject: Parking\n\nNext month, because of building work, the east car park {1} closed from 15 to 28 October. Staff {2} usually park there should use the car park behind the supermarket instead. {3} Two free shuttle buses will take you from there to the main entrance every ten minutes. Please do not park on the road outside the building, {4} the police may give you a fine. We apologise for any problem this may cause, and we thank you for your patience and cooperation.",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "was",
     "has been",
     "will be",
     "had been"
    ],
    "a": 2,
    "why": "\"Next month\" chỉ tương lai nên dùng \"will be closed\"."
   },
   {
    "type": "grammar",
    "opts": [
     "which",
     "whom",
     "whose",
     "who"
    ],
    "a": 3,
    "why": "Đại từ quan hệ thay cho \"Staff\" (người) làm chủ ngữ: \"who\"."
   },
   {
    "type": "sentence",
    "opts": [
     "Building work will finish on 28 October.",
     "This car park is a little far from the office.",
     "The east car park has space for two hundred cars.",
     "Nobody is allowed to use any car park during these weeks."
    ],
    "a": 1,
    "why": "'This car park' chỉ bãi xe sau siêu thị và dẫn tới xe đưa đón 'from there'; các câu khác lặp ngày, phá vỡ chỉ định 'there' hoặc mâu thuẫn với bãi xe thay thế."
   },
   {
    "type": "connector",
    "opts": [
     "for instance",
     "therefore",
     "moreover",
     "otherwise"
    ],
    "a": 3,
    "why": "\"otherwise\" = nếu không thì: đỗ trên đường thì có thể bị phạt."
   }
  ]
 },
 {
  "id": "t6-a04",
  "genre": "letter",
  "lvl": "B2",
  "title": "Complaint about a late sofa",
  "text": "Dear Mr Park,\n\nI am writing about the sofa I ordered from your shop on 3 September. The delivery was supposed to {1} within seven days, but it still has not arrived. I called your office twice last week, and each time I {2} that someone would call me back. {3} I took a day off work last Friday to wait for the delivery, but nobody came. {4}, I would like to know the exact delivery date, or I will ask for my money back.\n\nYours sincerely,\nLan Tran",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "arrives",
     "arriving",
     "arrive",
     "arrived"
    ],
    "a": 2,
    "why": "Sau \"supposed to\" dùng động từ nguyên mẫu: \"arrive\"."
   },
   {
    "type": "grammar",
    "opts": [
     "told",
     "telling",
     "was told",
     "have told"
    ],
    "a": 2,
    "why": "Người viết là người nhận lời hứa nên dùng bị động quá khứ: \"was told that\"."
   },
   {
    "type": "sentence",
    "opts": [
     "I am very happy with the sofa.",
     "Your office is open from nine to five.",
     "The sofa is blue and costs six hundred euros.",
     "No one has contacted me yet, and I am very disappointed."
    ],
    "a": 3,
    "why": "Câu này tiếp nối ý \"someone would call me back\" và dẫn tới \"nobody came\"; các câu khác mâu thuẫn hoặc lạc đề."
   },
   {
    "type": "connector",
    "opts": [
     "Therefore",
     "For example",
     "Although",
     "In contrast"
    ],
    "a": 0,
    "why": "Sau các vấn đề đã nêu, yêu cầu là kết quả: \"Therefore\"."
   }
  ]
 },
 {
  "id": "t6-a05",
  "genre": "article",
  "lvl": "B2",
  "title": "Working from home balance",
  "text": "Working from home: the new balance\n\nA recent survey of 2,000 employees found that people who work from home two or three days a week are more productive than those who stay in the office full-time. {1}, the same workers reported feeling less connected to their colleagues. {2} Companies are therefore starting to {3} flexible schedules that bring teams together on fixed days. Managers say this approach keeps creativity high while allowing staff to avoid long commutes. Experts warn that no single model {4} every business.",
  "gaps": [
   {
    "type": "connector",
    "opts": [
     "However",
     "As a result",
     "Therefore",
     "Similarly"
    ],
    "a": 0,
    "why": "Năng suất tốt nhưng cảm giác gắn kết thấp hơn: hai ý tương phản nên dùng \"However\"."
   },
   {
    "type": "sentence",
    "opts": [
     "The survey was sent to 2,000 employees by email.",
     "This lack of contact can weaken teamwork, even when individual results are good.",
     "Most of the employees surveyed lived within walking distance of their offices.",
     "Colleagues who rarely meet always build stronger teams."
    ],
    "a": 1,
    "why": "Câu này giải thích hệ quả của \"less connected\" và dẫn tới \"Companies are therefore starting\"; các câu khác lạc đề, lặp lại hoặc mâu thuẫn."
   },
   {
    "type": "vocab",
    "opts": [
     "deliver",
     "introduce",
     "repair",
     "imagine"
    ],
    "a": 1,
    "why": "\"introduce flexible schedules\" = áp dụng lịch làm việc linh hoạt."
   },
   {
    "type": "grammar",
    "opts": [
     "to suit",
     "suit",
     "suiting",
     "suits"
    ],
    "a": 3,
    "why": "Chủ ngữ \"no single model\" số ít nên động từ thêm -s: \"suits\"."
   }
  ]
 },
 {
  "id": "t6-a06",
  "genre": "advert",
  "lvl": "B2",
  "title": "Evening English courses",
  "text": "Orion Language Academy: Enrol Now\n\nWhether you are {1} for a promotion or planning to study abroad, our evening English courses will definitely help you reach your goals. Classes are small and friendly, so every student {2} personal attention from an experienced teacher. {3} Course fees include all books and online materials, and there are no hidden costs. Students who register before 30 November will {4} a ten per cent discount. Places are limited, so apply today through our website or visit our friendly office downtown.",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "aiming",
     "aim",
     "aimed",
     "aims"
    ],
    "a": 0,
    "why": "Sau \"are\" cần V-ing: \"are aiming for a promotion\"."
   },
   {
    "type": "grammar",
    "opts": [
     "receive",
     "receives",
     "to receive",
     "receiving"
    ],
    "a": 1,
    "why": "\"every student\" là chủ ngữ số ít nên dùng \"receives\"."
   },
   {
    "type": "sentence",
    "opts": [
     "The city has several museums and a famous bridge.",
     "Our classes are small, so students get personal attention.",
     "All classes are very large, with over fifty students.",
     "You can choose two, three or four lessons per week, depending on your schedule."
    ],
    "a": 3,
    "why": "Câu này bổ sung thông tin về khóa học trước khi nói về học phí; các câu khác lặp ý, mâu thuẫn \"Classes are small\" hoặc lạc đề."
   },
   {
    "type": "vocab",
    "opts": [
     "offer",
     "receive",
     "lend",
     "provide"
    ],
    "a": 1,
    "why": "Học viên là người nhận ưu đãi: \"receive a discount\"."
   }
  ]
 },
 {
  "id": "t6-a07",
  "genre": "email",
  "lvl": "B2",
  "title": "Warehouse project delay",
  "text": "Subject: Update on the Harbour Road project\n\nDear Ms Wong,\n\nI am writing to inform you that the opening of the new warehouse {1} postponed until 12 January. The delay is due to a late delivery of steel, which our supplier had promised to {2} by the end of September. {3} Had we known earlier, we would have informed you sooner. {4}, our team is working extra shifts to recover lost time, and we do not expect any further delays. I will send you a full schedule on Friday.\n\nKind regards,\nNam Pham",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "has",
     "has been",
     "have been",
     "having been"
    ],
    "a": 1,
    "why": "Chủ ngữ \"the opening\" số ít, bị động hoàn thành: \"has been postponed\"."
   },
   {
    "type": "grammar",
    "opts": [
     "delivery",
     "delivering",
     "delivered",
     "deliver"
    ],
    "a": 3,
    "why": "Sau \"promised to\" dùng động từ nguyên mẫu: \"deliver\"."
   },
   {
    "type": "sentence",
    "opts": [
     "Unfortunately, we only learned about the problem last week.",
     "We learned about the problem several months ago.",
     "The warehouse will have space for 5,000 pallets.",
     "The steel was delivered on time and in perfect condition."
    ],
    "a": 0,
    "why": "Câu này giải thích cho \"Had we known earlier\"; các câu khác mâu thuẫn với việc giao trễ hoặc lạc đề."
   },
   {
    "type": "connector",
    "opts": [
     "Meanwhile",
     "Otherwise",
     "Likewise",
     "For instance"
    ],
    "a": 0,
    "why": "\"Meanwhile\" = trong lúc đó, nhóm đang tăng ca để bù thời gian."
   }
  ]
 },
 {
  "id": "t6-a08",
  "genre": "memo",
  "lvl": "B2",
  "title": "Mandatory safety training",
  "text": "MEMO: Mandatory safety training\nTo: Department heads\n\nAll employees who work in the production hall {1} complete a safety course before the end of the year. The company introduced the requirement after an internal review showed that several accidents could have been {2} with better training. {3} Each session lasts three hours, and employees will be paid for their time. Managers are asked to prepare a schedule {4} production is not disrupted. Please send the final list of names to the HR office by 20 October.",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "have required to",
     "are requiring to",
     "require to",
     "are required to"
    ],
    "a": 3,
    "why": "Cấu trúc bị động đúng: \"are required to + V\"."
   },
   {
    "type": "grammar",
    "opts": [
     "avoid",
     "avoided",
     "avoiding",
     "avoids"
    ],
    "a": 1,
    "why": "Cấu trúc \"could have been + V3\": \"avoided\"."
   },
   {
    "type": "sentence",
    "opts": [
     "Safety courses must be completed before the end of the year.",
     "The review found no accidents in the production hall last year.",
     "Employees in the office already have a break room.",
     "The first sessions will begin in the week of 3 November."
    ],
    "a": 3,
    "why": "Câu này nêu lịch bắt đầu và dẫn vào \"Each session lasts three hours\"; các câu khác mâu thuẫn, lạc đề hoặc lặp lại."
   },
   {
    "type": "connector",
    "opts": [
     "so that",
     "as if",
     "even though",
     "in case of"
    ],
    "a": 0,
    "why": "\"so that\" chỉ mục đích: lịch được lập để sản xuất không bị gián đoạn."
   }
  ]
 },
 {
  "id": "t6-b01",
  "genre": "email",
  "lvl": "B1",
  "title": "Faulty blender reply",
  "text": "Dear Mr Hall,\n\nThank you for your email about the blender {1} you bought from our online shop. We are sorry that it stopped working after only one week.\n\nWe would like to {2} you a new one free of charge. {3} Please keep the old blender in its box, because a courier will collect it when the new one arrives. {4}, if you prefer a refund, just reply to this message and we will return your money within five days.\n\nBest regards,\nLena Ortiz\nCustomer Care, Brightline Home",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "who",
     "whose",
     "which",
     "what"
    ],
    "a": 2,
    "why": "Đại từ quan hệ chỉ vật là 'which' (the blender which you bought); 'who' dành cho người."
   },
   {
    "type": "vocab",
    "opts": [
     "keep",
     "send",
     "do",
     "say"
    ],
    "a": 1,
    "why": "Collocation: 'send you a new one' (gửi cho bạn một cái mới); keep/do/say không hợp nghĩa."
   },
   {
    "type": "sentence",
    "opts": [
     "Many customers enjoy cooking with our products at weekends.",
     "We are sorry that your blender stopped working after one week.",
     "You must pay a delivery fee before we can send the replacement.",
     "The new blender will be delivered to your home within three working days."
    ],
    "a": 3,
    "why": "Câu đúng nối với 'when the new one arrives'; câu về phí giao hàng mâu thuẫn với 'free of charge', các câu còn lại lặp ý hoặc lạc đề."
   },
   {
    "type": "connector",
    "opts": [
     "Therefore",
     "Meanwhile",
     "Alternatively",
     "Likewise"
    ],
    "a": 2,
    "why": "Đoạn nêu một lựa chọn khác (hoàn tiền) so với đổi hàng, nên dùng 'Alternatively'."
   }
  ]
 },
 {
  "id": "t6-b02",
  "genre": "notice",
  "lvl": "B1",
  "title": "Filing system workshop",
  "text": "Staff Training Notice\n\nAll office staff are invited to a workshop on the new filing system, which {1} on Thursday, 14 March, in Meeting Room B. The session starts at 9:00 and finishes at 11:30.\n\n{2} The trainer, Ms Duong, will show you how to save, name and find documents quickly. Please bring your laptop, on {3} you will practise during the session. Lunch is not included, {4} there is a café on the ground floor.\n\nTo book a place, contact Hana in HR before Monday.",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "took place",
     "was taking place",
     "has been taking place",
     "will take place"
    ],
    "a": 3,
    "why": "Thông báo mời tham dự một sự kiện ngày sắp tới nên dùng tương lai 'will take place'."
   },
   {
    "type": "sentence",
    "opts": [
     "The new filing system will not be introduced until next year, so no training is needed.",
     "Room B has recently been repainted and has new chairs.",
     "The workshop is designed to help everyone work faster with the new system.",
     "The workshop was held last year and was very popular."
    ],
    "a": 2,
    "why": "Câu đúng giới thiệu mục đích workshop, nối với câu sau về người hướng dẫn; các câu khác mâu thuẫn, lạc đề hoặc sai thì."
   },
   {
    "type": "grammar",
    "opts": [
     "what",
     "which",
     "that",
     "whom"
    ],
    "a": 1,
    "why": "Sau giới từ 'on' dùng 'which' chỉ vật (laptop): 'on which you will practise'."
   },
   {
    "type": "connector",
    "opts": [
     "so",
     "because",
     "but",
     "or"
    ],
    "a": 2,
    "why": "Hai vế đối lập (không có bữa trưa >< có quán cà phê) nên dùng 'but'."
   }
  ]
 },
 {
  "id": "t6-b03",
  "genre": "notice",
  "lvl": "B1",
  "title": "Lunch box recall",
  "text": "Product Recall: Sunny Day Lunch Boxes\n\nBrightway Kitchenware is recalling its blue Sunny Day lunch boxes, model SD-20, {1} the lid can crack when it is washed in very hot water. No injuries have been reported, but we want customers to stay safe.\n\n{2} Please stop using the product at once and return it to the shop where you bought it. You do not need a receipt. {3}, we will give you a full refund or a new lunch box of your choice. If you have any questions, call our helpline, {4} is open from 8:00 to 18:00 every day.",
  "gaps": [
   {
    "type": "connector",
    "opts": [
     "although",
     "unless",
     "so",
     "because"
    ],
    "a": 3,
    "why": "Vế sau nêu lý do thu hồi nên dùng 'because'."
   },
   {
    "type": "sentence",
    "opts": [
     "All Brightway products are dangerous and must be thrown away.",
     "Customers should keep using the lunch box until the lid cracks.",
     "Lunch boxes are popular with children and office workers alike.",
     "Only lunch boxes with the code SD-20 printed on the bottom are affected."
    ],
    "a": 3,
    "why": "Câu đúng giới hạn phạm vi ở 'model SD-20'; các câu khác mở rộng sai, mâu thuẫn 'stop using' hoặc lạc đề."
   },
   {
    "type": "connector",
    "opts": [
     "However",
     "In exchange",
     "For example",
     "Meanwhile"
    ],
    "a": 1,
    "why": "Trả lại sản phẩm thì đổi lại được hoàn tiền: 'In exchange'."
   },
   {
    "type": "grammar",
    "opts": [
     "it",
     "what",
     "who",
     "which"
    ],
    "a": 3,
    "why": "Mệnh đề quan hệ không xác định bổ nghĩa 'helpline' dùng 'which is open...'."
   }
  ]
 },
 {
  "id": "t6-b04",
  "genre": "letter",
  "lvl": "B2",
  "title": "Job offer letter",
  "text": "Dear Ms Ferreira,\n\nI am pleased to offer you the position of Logistics Coordinator at Orion Logistics, {1} from Monday, 3 June. Your starting salary will be 42,000 euros per year, paid monthly.\n\n{2} Your first week will be spent learning our tracking software and meeting the regional teams. Please note that this offer is {3} on satisfactory references, which we have requested from your previous employer.\n\nIf you accept, please sign and return the enclosed contract by 20 May. {4} you have any questions, do not hesitate to contact me.\n\nYours sincerely,\nPaul Reiter, HR Manager",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "started",
     "start",
     "starting",
     "starts"
    ],
    "a": 2,
    "why": "Phân từ hiện tại 'starting from' rút gọn mệnh đề, đứng sau dấu phẩy."
   },
   {
    "type": "sentence",
    "opts": [
     "Our warehouse in the north was opened over twenty years ago.",
     "Your salary will be paid every week in cash.",
     "Orion Logistics offers you the position of Logistics Coordinator.",
     "You will report to Ms Aldous, our operations manager, who will guide you through the induction."
    ],
    "a": 3,
    "why": "Câu đúng nối tiếp với 'Your first week' (giai đoạn làm quen); các câu khác lạc đề, mâu thuẫn 'paid monthly' hoặc lặp ý."
   },
   {
    "type": "vocab",
    "opts": [
     "depending",
     "conditional",
     "dependable",
     "conditioning"
    ],
    "a": 1,
    "why": "Cụm cố định 'be conditional on' (phụ thuộc vào điều kiện)."
   },
   {
    "type": "grammar",
    "opts": [
     "Would",
     "Must",
     "Do",
     "Should"
    ],
    "a": 3,
    "why": "Đảo ngữ điều kiện 'Should you have any questions' là cấu trúc trang trọng trong thư."
   }
  ]
 },
 {
  "id": "t6-b05",
  "genre": "memo",
  "lvl": "B2",
  "title": "Office move memo",
  "text": "MEMO\nTo: All staff\nFrom: Facilities Management\nSubject: Move to the Riverside building\n\nAs you know, our department will relocate to the Riverside building at the end of the month. {1} the lease on our current office expires on 30 June, the move cannot be postponed.\n\n{2} Each employee will receive ten labelled boxes, and all packing must be completed by Friday, 27 June. Desks and computers {3} by the removal company, so please do not unplug anything yourself. {4}, staff who work from home that week should collect their keys from reception.",
  "gaps": [
   {
    "type": "connector",
    "opts": [
     "Despite",
     "Whereas",
     "Unless",
     "Since"
    ],
    "a": 3,
    "why": "'Since' + mệnh đề nêu lý do (hợp đồng thuê hết hạn); 'Despite' không đi với mệnh đề."
   },
   {
    "type": "sentence",
    "opts": [
     "Many employees prefer working from home to commuting to the office.",
     "The lease on our current office expires on 30 June.",
     "Our department moved to the Riverside building last year.",
     "Please pack your belongings carefully so that nothing is lost or damaged during the move."
    ],
    "a": 3,
    "why": "Câu đúng dẫn vào việc phát hộp và đóng gói ở câu sau; các câu khác lặp ý, mâu thuẫn 'will relocate' hoặc lạc đề."
   },
   {
    "type": "grammar",
    "opts": [
     "will move",
     "are moving",
     "moved",
     "will be moved"
    ],
    "a": 3,
    "why": "Bàn và máy tính là đối tượng bị chuyển, có 'by the removal company' nên dùng bị động tương lai."
   },
   {
    "type": "connector",
    "opts": [
     "Instead",
     "Otherwise",
     "In addition",
     "Consequently"
    ],
    "a": 2,
    "why": "Câu bổ sung thêm một hướng dẫn khác: 'In addition'; không có quan hệ kết quả hay thay thế."
   }
  ]
 },
 {
  "id": "t6-b06",
  "genre": "email",
  "lvl": "B2",
  "title": "Lisbon trip itinerary",
  "text": "Dear Group Members,\n\nHere is the final plan for our trip to Lisbon. We {1} at the airport at 6:30 on Saturday, so please do not be late. After landing, a coach will take us straight to the hotel, {2} we can leave our luggage before lunch.\n\n{3} On Sunday morning, we will tour the old town with a local guide, and the afternoon is free. On Monday, we will visit the coast, but the coach will leave at 8:00 sharp. {4} you miss it, you will have to pay for your own transport.\n\nSafe travels,\nMarco",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "need gather",
     "need to gather",
     "needs to gather",
     "need gathering"
    ],
    "a": 1,
    "why": "'We need to + động từ nguyên mẫu'; chủ ngữ 'We' nên dùng 'need', không phải 'needs'."
   },
   {
    "type": "connector",
    "opts": [
     "unless",
     "although",
     "so that",
     "in spite of"
    ],
    "a": 2,
    "why": "'so that' chỉ mục đích: đến khách sạn để gửi hành lý trước bữa trưa."
   },
   {
    "type": "sentence",
    "opts": [
     "We will not arrive in Lisbon until Sunday evening.",
     "Saturday afternoon is free for you to rest or explore the area near the hotel.",
     "Lisbon is the capital city of the country.",
     "The coach will take us back to the airport after lunch."
    ],
    "a": 1,
    "why": "Câu đúng lấp khoảng trống buổi chiều thứ Bảy trước 'On Sunday morning'; các câu khác mâu thuẫn lịch trình hoặc lạc đề."
   },
   {
    "type": "connector",
    "opts": [
     "Unless",
     "If",
     "Because",
     "Although"
    ],
    "a": 1,
    "why": "Điều kiện 'If you miss it, you will have to pay' (câu điều kiện loại 1)."
   }
  ]
 },
 {
  "id": "t6-b07",
  "genre": "article",
  "lvl": "B2",
  "title": "Single-use cup ban",
  "text": "Green Valley Council Bans Single-Use Cups\n\nFrom 1 January, cafés and food stalls in Green Valley will no longer be allowed to serve drinks in single-use plastic cups. The council says the rule is intended to reduce the amount of waste {1} collected from the town's streets every year.\n\n{2} Businesses that break the rule will receive a warning first and a fine of 200 euros for further offences. Several café owners have {3} the decision, arguing that reusable cups are expensive. {4}, the council has promised to offer each business a grant of 300 euros to buy them.",
  "gaps": [
   {
    "type": "grammar",
    "opts": [
     "what is",
     "who is",
     "whose is",
     "that is"
    ],
    "a": 3,
    "why": "Mệnh đề quan hệ chỉ vật sau 'waste': 'that is collected'."
   },
   {
    "type": "sentence",
    "opts": [
     "Single-use cups will be allowed again from 1 January.",
     "Green Valley is a popular town in the north of the country.",
     "The council says the rule is intended to reduce waste.",
     "Inspectors will visit cafés regularly to check that the new rule is being followed."
    ],
    "a": 3,
    "why": "Câu đúng giải thích việc kiểm tra, dẫn tới 'Businesses that break the rule'; các câu khác mâu thuẫn, lạc đề hoặc lặp ý."
   },
   {
    "type": "grammar",
    "opts": [
     "criticise",
     "criticising",
     "criticism",
     "criticised"
    ],
    "a": 3,
    "why": "Thì hiện tại hoàn thành 'have criticised' (have + V3)."
   },
   {
    "type": "connector",
    "opts": [
     "Likewise",
     "Otherwise",
     "For example",
     "In response"
    ],
    "a": 3,
    "why": "Hội đồng đưa ra khoản hỗ trợ như phản ứng trước lời phàn nàn: 'In response'."
   }
  ]
 },
 {
  "id": "t6-b08",
  "genre": "advert",
  "lvl": "B2",
  "title": "Open day invitation",
  "text": "You are invited to the Orion Logistics Open Day\n\nJoin us on Saturday, 12 October, to discover what life is like behind the scenes at one of the region's busiest distribution centres. Visitors can take a guided {1} of the warehouse, try driving an electric forklift under supervision, and meet our team.\n\n{2} Free parking is available, but places are limited, so we recommend that you {3} early. Children under twelve are welcome, {4} they must be accompanied by an adult.\n\nTo reserve your tickets, visit our website.",
  "gaps": [
   {
    "type": "vocab",
    "opts": [
     "voyage",
     "commute",
     "tour",
     "passage"
    ],
    "a": 2,
    "why": "Collocation 'take a guided tour of' (tham quan có hướng dẫn)."
   },
   {
    "type": "sentence",
    "opts": [
     "The event will take place on Sunday, 13 October.",
     "Open days at companies have become increasingly common in recent years.",
     "The event runs from 10:00 to 16:00, and refreshments will be on sale all day.",
     "Join us on Saturday to discover life behind the scenes."
    ],
    "a": 2,
    "why": "Câu đúng bổ sung giờ giấc, hợp mạch; các câu khác mâu thuẫn ngày, lạc đề hoặc lặp ý."
   },
   {
    "type": "grammar",
    "opts": [
     "to book",
     "booked",
     "booking",
     "book"
    ],
    "a": 3,
    "why": "Sau 'recommend that you' dùng động từ nguyên mẫu không 'to': 'book'."
   },
   {
    "type": "connector",
    "opts": [
     "so",
     "because",
     "unless",
     "but"
    ],
    "a": 3,
    "why": "Hai vế đối lập (được chào đón >< phải có người lớn đi cùng): 'but'."
   }
  ]
 }
];
/* Cambridge-style multiple-choice cloze */
const CLOZE_MC = [
 {
  "id": "cm-b1-a01",
  "lvl": "B1",
  "title": "A Morning at the Market",
  "text": "Last Saturday, Anna {1} up early because she wanted to visit the farmers' market in her town. She {2} a bag and some money and walked there. The market was already very {3}, with lots of people looking at fruit and vegetables. Anna wanted to buy some tomatoes, but they were too {4} for her, so she chose apples instead. {5} she was paying, she met an old friend, Minh. They decided to have a coffee together. Minh told her that he was planning to {6} a small shop selling bread. \"I hope it will be a success,\" said Anna. After that, she {7} her shopping home and cooked a big lunch. It was a lovely day, and she {8} to go back the following week.",
  "gaps": [
   {
    "opts": [
     "got",
     "took",
     "put",
     "set"
    ],
    "a": 0,
    "why": "\"Get up\" nghĩa là thức dậy rời giường; \"took/put/set up early\" không đúng nghĩa."
   },
   {
    "opts": [
     "took",
     "made",
     "did",
     "said"
    ],
    "a": 0,
    "why": "\"Took a bag\" = mang theo túi; \"made/did/said a bag\" không tạo thành cụm hợp lý."
   },
   {
    "opts": [
     "busy",
     "heavy",
     "tall",
     "empty"
    ],
    "a": 0,
    "why": "\"with lots of people\" nên chợ \"busy\" (đông đúc); \"empty\" mâu thuẫn."
   },
   {
    "opts": [
     "expensive",
     "cheap",
     "free",
     "rich"
    ],
    "a": 0,
    "why": "Cô ấy chọn táo thay thế nên cà chua \"too expensive\" (quá đắt)."
   },
   {
    "opts": [
     "While",
     "During",
     "Since",
     "Until"
    ],
    "a": 0,
    "why": "\"While she was paying\": while + mệnh đề chia thì tiếp diễn; during cần danh từ."
   },
   {
    "opts": [
     "open",
     "close",
     "break",
     "miss"
    ],
    "a": 0,
    "why": "\"open a small shop selling bread\" = mở một cửa hàng bán bánh mì."
   },
   {
    "opts": [
     "carried",
     "wore",
     "kicked",
     "wished"
    ],
    "a": 0,
    "why": "\"carried her shopping home\" = xách đồ mua về nhà; các từ khác sai nghĩa."
   },
   {
    "opts": [
     "decided",
     "enjoyed",
     "finished",
     "suggested"
    ],
    "a": 0,
    "why": "\"decided to go\": chỉ decided đi với to-V; enjoyed/finished + V-ing, suggested + V-ing/that."
   }
  ]
 },
 {
  "id": "cm-b1-a02",
  "lvl": "B1",
  "title": "A Letter About My New Job",
  "text": "Dear Lan, Thank you for your email. I'm {1} to tell you that I've got a new job! I'll be working in an office near the station, so I will {2} a lot of time on the way to work. My boss, Mr Park, seems very kind. On my first day he {3} me round the building and introduced me to everyone. The work is quite difficult, but I'm {4} a lot every day. The only problem is that I have to {5} up very early, at six o'clock. I'm not used to it yet, and in the afternoon I often feel {6}. Anyway, I hope you can visit me soon. Let's {7} in touch by phone, and perhaps we can meet next month. If you have time, please write {8} soon.",
  "gaps": [
   {
    "opts": [
     "pleased",
     "bored",
     "angry",
     "sorry"
    ],
    "a": 0,
    "why": "Tin vui (new job) nên \"pleased to tell you\"; bored/angry/sorry không hợp."
   },
   {
    "opts": [
     "save",
     "win",
     "earn",
     "miss"
    ],
    "a": 0,
    "why": "\"save time\" = tiết kiệm thời gian vì văn phòng gần ga."
   },
   {
    "opts": [
     "showed",
     "looked",
     "made",
     "told"
    ],
    "a": 0,
    "why": "\"showed me round the building\" = dẫn tôi đi tham quan; các từ khác không đi với \"me round\"."
   },
   {
    "opts": [
     "learning",
     "knowing",
     "being",
     "having"
    ],
    "a": 0,
    "why": "\"I'm learning a lot\": công việc khó nên học nhiều; know không dùng thì tiếp diễn."
   },
   {
    "opts": [
     "get",
     "put",
     "make",
     "hold"
    ],
    "a": 0,
    "why": "\"get up early\" = dậy sớm; put/make/hold up không đúng nghĩa."
   },
   {
    "opts": [
     "tired",
     "tall",
     "rich",
     "wet"
    ],
    "a": 0,
    "why": "Dậy lúc sáu giờ nên chiều \"feel tired\"."
   },
   {
    "opts": [
     "keep",
     "have",
     "make",
     "hold"
    ],
    "a": 0,
    "why": "\"keep in touch\" là cụm cố định = giữ liên lạc."
   },
   {
    "opts": [
     "back",
     "out",
     "over",
     "down"
    ],
    "a": 0,
    "why": "\"write back soon\" = sớm trả lời thư (đáp lại \"Thank you for your email\")."
   }
  ]
 },
 {
  "id": "cm-b2-a03",
  "lvl": "B2",
  "title": "Working From Home",
  "text": "Over the past decade, working from home has {1} from a rare privilege into a common arrangement. Employers were initially {2} about the idea, fearing that staff would be less productive without supervision. However, several studies have {3} that many people actually get more done at home. Nevertheless, the change is not without its drawbacks. Some workers complain that the {4} between professional and private life has become blurred, and they find it hard to switch off in the evening. Others miss the casual conversations that {5} place in the office kitchen, which often led to new ideas. To {6} with these problems, a number of companies now ask employees to attend the office two days a week. This hybrid model seems to {7} the best of both worlds, although it requires careful planning. {8}, it appears that flexible working is here to stay.",
  "gaps": [
   {
    "opts": [
     "turned",
     "become",
     "made",
     "fallen"
    ],
    "a": 0,
    "why": "\"turned from ... into ...\" = chuyển từ ... thành; become không đi với into."
   },
   {
    "opts": [
     "sceptical",
     "enthusiastic",
     "grateful",
     "ignorant"
    ],
    "a": 0,
    "why": "\"fearing that staff would be less productive\" cho thấy họ \"sceptical\" (hoài nghi)."
   },
   {
    "opts": [
     "shown",
     "told",
     "given",
     "taken"
    ],
    "a": 0,
    "why": "\"studies have shown that\" là cách nói chuẩn; told/given/taken không đi với that-clause."
   },
   {
    "opts": [
     "boundary",
     "agreement",
     "contact",
     "comparison"
    ],
    "a": 0,
    "why": "\"blurred boundary\" = ranh giới giữa công việc và đời tư bị mờ; agreement/contact/comparison không đi với \"between professional and private life\" theo nghĩa này."
   },
   {
    "opts": [
     "take",
     "make",
     "have",
     "give"
    ],
    "a": 0,
    "why": "\"take place\" = diễn ra, cụm cố định."
   },
   {
    "opts": [
     "deal",
     "solve",
     "face",
     "fix"
    ],
    "a": 0,
    "why": "\"deal with\" đi với giới từ with; solve/face/fix + tân ngữ trực tiếp."
   },
   {
    "opts": [
     "have",
     "wear",
     "sit",
     "pull"
    ],
    "a": 0,
    "why": "\"have the best of both worlds\" là thành ngữ = tận dụng được cả hai mặt tốt; wear/sit/pull không tạo thành cụm hợp lý."
   },
   {
    "opts": [
     "Overall",
     "Besides",
     "Otherwise",
     "Instead"
    ],
    "a": 0,
    "why": "Câu kết luận nên dùng \"Overall\" (nhìn chung)."
   }
  ]
 },
 {
  "id": "cm-b2-a04",
  "lvl": "B2",
  "title": "The Choice to Go Abroad",
  "text": "When Daniel was offered a place at a university abroad, he found it hard to {1} up his mind. On one hand, the course was exactly what he had always dreamed of; on the other, he would have to leave his family and friends behind. He asked his teacher for advice, and she {2} out that he could always return if things went badly. In the end, he decided to {3} a chance. The first months were difficult because he could hardly {4} himself understood in a foreign language. Gradually, however, he got {5} to the new way of life and even made a few close friends. Looking back, Daniel is {6} that he did not let fear stop him. \"If I had stayed at home, I would have {7} the chance of a lifetime,\" he says. He now works as a translator and, {8} to his friends' warnings that it would be dull, enjoys the job a great deal.",
  "gaps": [
   {
    "opts": [
     "make",
     "take",
     "put",
     "keep"
    ],
    "a": 0,
    "why": "\"make up one's mind\" = quyết định."
   },
   {
    "opts": [
     "pointed",
     "carried",
     "brought",
     "turned"
    ],
    "a": 0,
    "why": "\"point out that\" = chỉ ra rằng."
   },
   {
    "opts": [
     "take",
     "make",
     "have",
     "hold"
    ],
    "a": 0,
    "why": "\"take a chance\" = liều một phen, cụm cố định."
   },
   {
    "opts": [
     "make",
     "give",
     "keep",
     "do"
    ],
    "a": 0,
    "why": "\"make oneself understood\" = làm cho người khác hiểu mình."
   },
   {
    "opts": [
     "used",
     "usual",
     "habit",
     "normal"
    ],
    "a": 0,
    "why": "\"get used to\" = làm quen với."
   },
   {
    "opts": [
     "glad",
     "sorry",
     "afraid",
     "doubtful"
    ],
    "a": 0,
    "why": "Nhìn lại, anh vui vì không để nỗi sợ ngăn cản: \"glad that\"."
   },
   {
    "opts": [
     "missed",
     "failed",
     "shared",
     "avoided"
    ],
    "a": 0,
    "why": "\"miss the chance of a lifetime\" = bỏ lỡ cơ hội đời người; failed/shared/avoided không hợp collocation hoặc nghĩa."
   },
   {
    "opts": [
     "contrary",
     "according",
     "owing",
     "thanks"
    ],
    "a": 0,
    "why": "\"contrary to warnings\" = trái với lời cảnh báo; anh vẫn thích công việc."
   }
  ]
 },
 {
  "id": "cm-c1-a05",
  "lvl": "C1",
  "title": "The Value of Silence",
  "text": "In an age of constant notifications, silence has become something of a luxury. Researchers who study attention argue that our brains {1} periods of quiet in order to consolidate memories and generate original ideas. Yet few of us deliberately {2} out time for it. The modern workplace, with its open-plan layout, is particularly {3} to concentration, and employees often complain that they cannot hear themselves think. Some firms have {4} to this problem by creating silent rooms where mobile phones are strictly banned. Critics, however, {5} that such spaces merely treat the symptoms rather than the cause, which is a culture of perpetual availability. Whatever the merits of this argument, there is {6} evidence that regular solitude improves mood and creativity. It would be unwise to dismiss the idea {7} of hand. After all, a few quiet minutes a day {8} little but may yield considerable benefits.",
  "gaps": [
   {
    "opts": [
     "require",
     "request",
     "order",
     "claim"
    ],
    "a": 0,
    "why": "\"require periods of quiet\" = cần những khoảng yên tĩnh; request/order/claim không hợp nghĩa."
   },
   {
    "opts": [
     "carve",
     "pour",
     "wipe",
     "blow"
    ],
    "a": 0,
    "why": "\"carve out time\" = dành riêng thời gian."
   },
   {
    "opts": [
     "detrimental",
     "conducive",
     "indifferent",
     "devoted"
    ],
    "a": 0,
    "why": "Nhân viên than phiền nên môi trường \"detrimental to\" (có hại); conducive mâu thuẫn."
   },
   {
    "opts": [
     "responded",
     "resolved",
     "replied",
     "solved"
    ],
    "a": 0,
    "why": "\"responded to this problem by creating\" = ứng phó với vấn đề."
   },
   {
    "opts": [
     "contend",
     "convince",
     "persuade",
     "assure"
    ],
    "a": 0,
    "why": "\"contend that\" = cho rằng; convince/persuade/assure cần tân ngữ người."
   },
   {
    "opts": [
     "ample",
     "many",
     "few",
     "numerous"
    ],
    "a": 0,
    "why": "\"evidence\" không đếm được: \"ample evidence\"; many/few/numerous sai."
   },
   {
    "opts": [
     "out",
     "off",
     "away",
     "down"
    ],
    "a": 0,
    "why": "\"out of hand\" là thành ngữ = bác bỏ ngay lập tức."
   },
   {
    "opts": [
     "cost",
     "pay",
     "charge",
     "lose"
    ],
    "a": 0,
    "why": "\"cost little but may yield benefits\" = tốn ít nhưng có lợi; chủ ngữ số nhiều nên cost."
   }
  ]
 },
 {
  "id": "cm-c1-a06",
  "lvl": "C1",
  "title": "Rethinking City Traffic",
  "text": "City planners have long struggled to {1} the problem of congestion. Building more roads, it was once assumed, would {2} the pressure on existing ones. Experience, however, has proved otherwise: new capacity tends to attract more vehicles, so any relief is short-lived. A more promising approach is to {3} drivers to leave their cars at home by making public transport cheaper and more reliable. In several cities, charges for entering the centre have {4} the number of private vehicles dramatically. Opponents {5} the point that such schemes penalise low-income commuters, yet revenue is often used to subsidise buses. It remains to be {6} whether these measures can be sustained in the long term. Nevertheless, one thing is certain: simply carrying on as we are will {7} the situation worse. Any lasting solution will therefore {8} cooperation between governments, businesses and ordinary citizens.",
  "gaps": [
   {
    "opts": [
     "tackle",
     "enclose",
     "depart",
     "perform"
    ],
    "a": 0,
    "why": "\"tackle the problem\" = giải quyết vấn đề."
   },
   {
    "opts": [
     "ease",
     "intensify",
     "provoke",
     "announce"
    ],
    "a": 0,
    "why": "Xây đường nhằm \"ease the pressure\" = giảm áp lực."
   },
   {
    "opts": [
     "persuade",
     "suggest",
     "make",
     "let"
    ],
    "a": 0,
    "why": "\"persuade sb to do\" đúng cấu trúc; make/let không có to, suggest không dùng vậy."
   },
   {
    "opts": [
     "cut",
     "raised",
     "doubled",
     "welcomed"
    ],
    "a": 0,
    "why": "Phí vào trung tâm làm giảm xe: \"cut the number\"; các từ khác ngược nghĩa."
   },
   {
    "opts": [
     "make",
     "take",
     "hold",
     "draw"
    ],
    "a": 0,
    "why": "\"make the point that\" = nêu quan điểm rằng."
   },
   {
    "opts": [
     "seen",
     "looked",
     "watched",
     "viewed"
    ],
    "a": 0,
    "why": "\"It remains to be seen whether\" = còn phải chờ xem, cụm cố định."
   },
   {
    "opts": [
     "make",
     "do",
     "cause",
     "turn"
    ],
    "a": 0,
    "why": "\"make the situation worse\" = làm tình hình tệ hơn."
   },
   {
    "opts": [
     "require",
     "depend",
     "rely",
     "hinge"
    ],
    "a": 0,
    "why": "\"require cooperation\" là ngoại động từ; depend/rely/hinge cần giới từ on."
   }
  ]
 },
 {
  "id": "cm-b1-b01",
  "lvl": "B1",
  "title": "A Visit to the Clinic",
  "text": "Last Tuesday I had an appointment at Green Valley Clinic because of a bad cough that would not {1} away. I arrived early, but the waiting room was already full, so I had to {2} for almost forty minutes. At last a nurse called my name and {3} my temperature. Then the doctor asked me several questions about my {4}, for example whether I had a fever or a headache. She listened to my chest carefully and said that it was not serious. \"You should drink water and get plenty of rest,\" she told me. She also advised me not to {5} up exercise completely, but to walk a little every day. Before I left, she gave me a prescription. I {6} the medicine at the pharmacy next door on my way home. Now I feel much {7}, and the cough is almost gone. Next time I will make an appointment {8} advance, so that I do not have to wait so long.",
  "gaps": [
   {
    "opts": [
     "go",
     "pass",
     "leave",
     "run"
    ],
    "a": 0,
    "why": "\"go away\" = biến mất, hết (cơn ho). \"pass away\" nghĩa là qua đời; \"leave/run away\" không dùng với cơn ho."
   },
   {
    "opts": [
     "wait",
     "await",
     "expect",
     "attend"
    ],
    "a": 0,
    "why": "\"wait for + khoảng thời gian\"; \"await\" và \"expect\" cần tân ngữ trực tiếp, \"attend\" không hợp nghĩa."
   },
   {
    "opts": [
     "took",
     "made",
     "put",
     "set"
    ],
    "a": 0,
    "why": "Cụm cố định \"take someone's temperature\" = đo nhiệt độ."
   },
   {
    "opts": [
     "symptoms",
     "ingredients",
     "results",
     "manners"
    ],
    "a": 0,
    "why": "Bác sĩ hỏi về triệu chứng: \"whether I had a fever or a headache\" là các symptoms."
   },
   {
    "opts": [
     "give",
     "put",
     "set",
     "bring"
    ],
    "a": 0,
    "why": "\"give up\" = từ bỏ; ba phương án còn lại không tạo thành cụm hợp nghĩa với \"up exercise\"."
   },
   {
    "opts": [
     "collected",
     "borrowed",
     "lent",
     "sold"
    ],
    "a": 0,
    "why": "Bệnh nhân đến nhà thuốc để lấy thuốc: \"collected the medicine\". Borrowed/lent/sold sai logic."
   },
   {
    "opts": [
     "better",
     "best",
     "good",
     "well"
    ],
    "a": 0,
    "why": "\"much better\" là dạng so sánh hơn sau \"feel\"; \"much best/good/well\" sai ngữ pháp."
   },
   {
    "opts": [
     "in",
     "at",
     "on",
     "by"
    ],
    "a": 0,
    "why": "Cụm cố định \"in advance\" = trước, từ trước."
   }
  ]
 },
 {
  "id": "cm-b1-b02",
  "lvl": "B1",
  "title": "A Weekend in the Mountains",
  "text": "Last summer my friend Lan and I set {1} for a small village in the mountains. We travelled by bus, and the journey {2} six hours because of the heavy traffic leaving the city. When we finally {3} the village, the air was cool and fresh. We stayed in a family guesthouse, and the owner, Mr Park, {4} us a warm welcome. On the second day we went hiking, but the weather {5} suddenly, and it started to rain heavily. We were not ready for it because we had {6} to bring raincoats. Luckily, we found a small shelter and waited until the storm was {7}. Although we got a little wet, the view from the top was worth it, and I would {8} the place to anyone who loves nature.",
  "gaps": [
   {
    "opts": [
     "off",
     "up",
     "down",
     "in"
    ],
    "a": 0,
    "why": "\"set off for\" = lên đường đi đến; \"set up/down/in\" không hợp nghĩa."
   },
   {
    "opts": [
     "took",
     "spent",
     "passed",
     "made"
    ],
    "a": 0,
    "why": "\"The journey took six hours\": chủ ngữ là chuyến đi nên dùng \"took\"; \"spent\" cần chủ ngữ là người."
   },
   {
    "opts": [
     "reached",
     "arrived",
     "got",
     "came"
    ],
    "a": 0,
    "why": "\"reach + địa điểm\" không cần giới từ; arrived/got/came cần \"at/in/to\"."
   },
   {
    "opts": [
     "gave",
     "made",
     "took",
     "did"
    ],
    "a": 0,
    "why": "Cụm cố định \"give someone a warm welcome\"."
   },
   {
    "opts": [
     "changed",
     "moved",
     "stopped",
     "replaced"
    ],
    "a": 0,
    "why": "\"The weather changed suddenly\" = thời tiết đổi đột ngột; moved/stopped/replaced không đi với weather hoặc trái logic (trời bắt đầu mưa)."
   },
   {
    "opts": [
     "forgotten",
     "missed",
     "lost",
     "stopped"
    ],
    "a": 0,
    "why": "\"had forgotten to bring\" = đã quên mang; \"forgotten\" là quá khứ phân từ phù hợp với \"had\"."
   },
   {
    "opts": [
     "over",
     "out",
     "off",
     "away"
    ],
    "a": 0,
    "why": "\"was over\" = đã kết thúc; \"the storm was out/off/away\" không tự nhiên."
   },
   {
    "opts": [
     "recommend",
     "advise",
     "insist",
     "demand"
    ],
    "a": 0,
    "why": "\"recommend something to someone\" = giới thiệu cho ai; \"advise it to\" sai cấu trúc."
   }
  ]
 },
 {
  "id": "cm-b2-b03",
  "lvl": "B2",
  "title": "Learning Before the Real Thing",
  "text": "Medical students used to learn mostly from textbooks and from watching senior doctors at work. Today, however, many universities have {1} up simulation centres, where students practise on realistic models before they meet real patients. At Orion Medical School, for example, first-year students {2} part in a scenario in which a mannequin suddenly stops breathing. The aim is to give them a safe place to {3} mistakes. The whole session is {4} on video, and afterwards the group discusses what went well. Critics argue that a model can never {5} a real human being, and they are right to some extent. {6}, research suggests that students who train this way feel more confident and make fewer errors during their first weeks on the wards. The school's director says the approach has {7} a real difference to patient safety. \"We cannot afford to learn at the {8} of the patient,\" she explains.",
  "gaps": [
   {
    "opts": [
     "set",
     "take",
     "give",
     "turn"
    ],
    "a": 0,
    "why": "\"have set up\" = thiết lập, xây dựng; \"turned/taken/given up\" không hợp nghĩa với \"simulation centres\"."
   },
   {
    "opts": [
     "take",
     "make",
     "have",
     "join"
    ],
    "a": 0,
    "why": "Cụm cố định \"take part in\" = tham gia."
   },
   {
    "opts": [
     "make",
     "do",
     "take",
     "have"
    ],
    "a": 0,
    "why": "Collocation \"make mistakes\" (mắc lỗi)."
   },
   {
    "opts": [
     "recorded",
     "written",
     "drawn",
     "printed"
    ],
    "a": 0,
    "why": "Buổi tập được ghi hình: \"recorded on video\"; written/drawn/printed không đi với video."
   },
   {
    "opts": [
     "replace",
     "remove",
     "repair",
     "rescue"
    ],
    "a": 0,
    "why": "\"replace a real human being\" = thay thế người thật; các từ còn lại sai nghĩa."
   },
   {
    "opts": [
     "Nevertheless",
     "Therefore",
     "Besides",
     "Similarly"
    ],
    "a": 0,
    "why": "Câu trước nêu chỉ trích, câu sau nêu kết quả trái chiều nên cần liên từ nhượng bộ \"Nevertheless\"."
   },
   {
    "opts": [
     "made",
     "done",
     "given",
     "taken"
    ],
    "a": 0,
    "why": "Collocation \"make a difference\" = tạo ra sự khác biệt."
   },
   {
    "opts": [
     "expense",
     "benefit",
     "request",
     "mercy"
    ],
    "a": 0,
    "why": "Cụm cố định \"at the expense of\" = gây thiệt hại cho; \"at the mercy of\" nghĩa là bị phụ thuộc, sai ngữ cảnh \"cannot afford to learn\"."
   }
  ]
 },
 {
  "id": "cm-b2-b04",
  "lvl": "B2",
  "title": "Working from Home",
  "text": "When Anna's company first introduced remote working, she was {1} about the idea. She worried that she would feel lonely at home and would find it hard to {2} work from private life. After a few months, however, her view has completely {3}. She no longer spends two hours every day commuting, which means she can {4} advantage of the quiet morning hours. Her manager, who was originally against the plan, now admits that the team's productivity has {5} slightly. Of course, there are drawbacks. Casual conversations by the coffee machine, which often lead to new ideas, are almost impossible to {6} in an online meeting. To make up for this, the team has {7} up a weekly lunch in the office, and attendance is voluntary. Anna says she would never go back to a full-time office job unless she had no {8}.",
  "gaps": [
   {
    "opts": [
     "sceptical",
     "enthusiastic",
     "grateful",
     "confident"
    ],
    "a": 0,
    "why": "Câu sau nói \"She worried\", nên ban đầu cô ấy hoài nghi: \"sceptical\"."
   },
   {
    "opts": [
     "separate",
     "combine",
     "connect",
     "join"
    ],
    "a": 0,
    "why": "\"separate A from B\" = tách A khỏi B; combine/connect/join không đi với \"from\"."
   },
   {
    "opts": [
     "changed",
     "grown",
     "risen",
     "passed"
    ],
    "a": 0,
    "why": "\"her view has changed\" = quan điểm đã thay đổi; \"however\" báo hiệu sự đối lập."
   },
   {
    "opts": [
     "take",
     "make",
     "have",
     "get"
    ],
    "a": 0,
    "why": "Cụm cố định \"take advantage of\" = tận dụng."
   },
   {
    "opts": [
     "risen",
     "raised",
     "arisen",
     "rose"
    ],
    "a": 0,
    "why": "\"has risen\": nội động từ ở thì hiện tại hoàn thành; \"raised\" cần tân ngữ, \"rose\" sai thì."
   },
   {
    "opts": [
     "recreate",
     "resist",
     "rescue",
     "reserve"
    ],
    "a": 0,
    "why": "Những cuộc trò chuyện ngẫu nhiên khó \"recreate\" (tái tạo) trong họp trực tuyến."
   },
   {
    "opts": [
     "set",
     "put",
     "taken",
     "made"
    ],
    "a": 0,
    "why": "\"has set up a weekly lunch\" = tổ chức bữa trưa hằng tuần; các cụm còn lại không hợp nghĩa."
   },
   {
    "opts": [
     "choice",
     "selection",
     "decision",
     "preference"
    ],
    "a": 0,
    "why": "Cụm cố định \"have no choice\" = không còn lựa chọn nào khác."
   }
  ]
 },
 {
  "id": "cm-c1-b05",
  "lvl": "C1",
  "title": "Sleep and the Junior Doctor",
  "text": "For decades, long shifts were seen as a rite of passage for junior doctors, a test of stamina that {1} the weak from the strong. Yet a growing body of evidence suggests that exhaustion does more harm than good. Studies of hospital wards have {2} that tired doctors are more likely to misread test results and to overlook subtle warning signs. Some senior consultants remain {3}, insisting that the long hours teach resilience. Their critics point out, {4}, that resilience is of little use to a patient whose medication has been prescribed by someone who has not slept for twenty hours. In response, several hospitals have {5} the length of a single shift. The results have been encouraging: errors fell by almost a fifth {6} twelve months of the change. Even so, progress is slow, partly because rotas are already stretched {7} by staff shortages. Reformers hope that asking for rest will no longer be seen as a {8} of weakness.",
  "gaps": [
   {
    "opts": [
     "separated",
     "removed",
     "protected",
     "replaced"
    ],
    "a": 0,
    "why": "\"separate the weak from the strong\" = phân biệt người yếu với người mạnh."
   },
   {
    "opts": [
     "shown",
     "told",
     "spoken",
     "talked"
    ],
    "a": 0,
    "why": "\"Studies have shown that...\" = các nghiên cứu cho thấy; told/spoken/talked sai cấu trúc."
   },
   {
    "opts": [
     "unconvinced",
     "unaware",
     "unharmed",
     "unlikely"
    ],
    "a": 0,
    "why": "\"insisting that...\" cho thấy họ vẫn không bị thuyết phục: \"unconvinced\"."
   },
   {
    "opts": [
     "however",
     "therefore",
     "similarly",
     "otherwise"
    ],
    "a": 0,
    "why": "Ý kiến của người phê bình đối lập với các chuyên gia cao cấp nên dùng \"however\"."
   },
   {
    "opts": [
     "capped",
     "extended",
     "doubled",
     "ignored"
    ],
    "a": 0,
    "why": "Bệnh viện giới hạn độ dài ca trực: \"capped\"; extended/doubled/ignored trái với \"encouraging\" về sau."
   },
   {
    "opts": [
     "within",
     "until",
     "since",
     "among"
    ],
    "a": 0,
    "why": "\"within twelve months of the change\" = trong vòng 12 tháng kể từ thay đổi."
   },
   {
    "opts": [
     "thin",
     "short",
     "narrow",
     "flat"
    ],
    "a": 0,
    "why": "Cụm cố định \"stretched thin\" = quá tải, thiếu người."
   },
   {
    "opts": [
     "sign",
     "price",
     "level",
     "lack"
    ],
    "a": 0,
    "why": "\"a sign of weakness\" = dấu hiệu của sự yếu đuối; các từ còn lại sai nghĩa."
   }
  ]
 },
 {
  "id": "cm-c1-b06",
  "lvl": "C1",
  "title": "The Day Noon Became Standard",
  "text": "Before the age of railways, every town set its clocks by the sun, so noon in one city could {1} from noon in the next by several minutes. For travellers on foot or horseback this hardly {2}, since journeys were slow and nobody expected to arrive at an exact minute. The arrival of the railway changed all that. Timetables were meaningless unless every station {3} the same time, and companies soon realised that a single national time was the only way to {4} chaos. At first, many local authorities resisted, {5} that their independence was under threat. Church towers sometimes displayed two clocks, one showing local time and the other railway time. Gradually, however, the public came to {6} the new system, as the practical benefits became impossible to {7}. By the end of the century, standard time had become so thoroughly {8} in daily life that few people questioned where it had come from.",
  "gaps": [
   {
    "opts": [
     "differ",
     "distinguish",
     "divide",
     "depart"
    ],
    "a": 0,
    "why": "\"differ from ... by\" = khác nhau một khoảng; \"depart from noon\" vô nghĩa."
   },
   {
    "opts": [
     "mattered",
     "occurred",
     "resulted",
     "proceeded"
    ],
    "a": 0,
    "why": "\"hardly mattered\" = hầu như không quan trọng, vì hành trình chậm."
   },
   {
    "opts": [
     "kept",
     "held",
     "stood",
     "ran"
    ],
    "a": 0,
    "why": "\"keep the same time\" = chạy cùng một giờ; các động từ khác không đi với \"the same time\"."
   },
   {
    "opts": [
     "avoid",
     "cause",
     "spread",
     "allow"
    ],
    "a": 0,
    "why": "Một giờ quốc gia là cách duy nhất để \"avoid chaos\"; các phương án khác phi logic."
   },
   {
    "opts": [
     "fearing",
     "hoping",
     "wishing",
     "enjoying"
    ],
    "a": 0,
    "why": "Họ phản đối vì sợ: \"fearing that their independence was under threat\"."
   },
   {
    "opts": [
     "accept",
     "oppose",
     "doubt",
     "deny"
    ],
    "a": 0,
    "why": "\"came to accept the new system\" = dần chấp nhận, vì lợi ích thực tế rõ ràng; oppose/doubt/deny trái với \"however\" và \"benefits\"."
   },
   {
    "opts": [
     "ignore",
     "borrow",
     "lend",
     "repair"
    ],
    "a": 0,
    "why": "\"impossible to ignore\" = không thể làm ngơ trước lợi ích thực tế."
   },
   {
    "opts": [
     "embedded",
     "embarked",
     "enrolled",
     "extended"
    ],
    "a": 0,
    "why": "\"embedded in daily life\" = ăn sâu vào đời sống; các từ còn lại không đi với \"in daily life\"."
   }
  ]
 },
 {
  "id": "cm-m1",
  "lvl": "B2",
  "title": "How Cells Stay Alive",
  "text": "A cell is the smallest unit of life, yet it must {1} several demanding tasks at once. It has to store genetic information, obtain energy from sunlight or {2}, and convert that energy into forms it can use. Cells are highly ordered, so they cannot {3} as cells without a constant supply of energy. They are also self-regulating. If the supply of glucose {4} out, the cell makes more transport proteins to bring it in. If it detects damage in its genome, it can {5} the cell cycle to give repair systems time to work, and if the repairs repeatedly fail, it may even start its own death. Cells also react to signals from {6} the cell, such as a hormone released by a distant organ. {7} on the signal, the response may be to make new proteins, move away, or start to divide. Reactions that build large molecules from small ones are called anabolic, whereas those that break large molecules down are called catabolic. Taken together, both kinds of reaction make up the cell's {8}.",
  "gaps": [
   {
    "opts": [
     "carry out",
     "bring up",
     "put off",
     "hold on"
    ],
    "a": 0,
    "why": "\"Carry out tasks\" là cụm cố định (thực hiện nhiệm vụ); các cụm còn lại không đi với tasks trong nghĩa này."
   },
   {
    "opts": [
     "shade",
     "food",
     "silence",
     "smell"
    ],
    "a": 1,
    "why": "Tế bào lấy năng lượng từ ánh sáng mặt trời hoặc thức ăn: \"sunlight or food\"."
   },
   {
    "opts": [
     "become",
     "replace",
     "remain",
     "achieve"
    ],
    "a": 2,
    "why": "\"Remain as cells\" nghĩa là vẫn còn là tế bào; \"become as\" không đúng nghĩa."
   },
   {
    "opts": [
     "breaks",
     "pulls",
     "sits",
     "runs"
    ],
    "a": 3,
    "why": "\"Supply runs out\" nghĩa là nguồn cung cạn kiệt, cụm cố định."
   },
   {
    "opts": [
     "ignore",
     "pause",
     "invent",
     "measure"
    ],
    "a": 1,
    "why": "Để có thời gian sửa chữa, tế bào tạm dừng chu kỳ: \"pause the cell cycle\"."
   },
   {
    "opts": [
     "inside",
     "against",
     "outside",
     "between"
    ],
    "a": 2,
    "why": "Hormone từ cơ quan ở xa là tín hiệu \"outside\" tế bào; inside sai nghĩa, against/between sai ngữ pháp."
   },
   {
    "opts": [
     "Taking",
     "Depending",
     "Ending",
     "Setting"
    ],
    "a": 1,
    "why": "\"Depending on the signal\" nghĩa là tùy theo tín hiệu."
   },
   {
    "opts": [
     "capsule",
     "nucleus",
     "lesion",
     "metabolism"
    ],
    "a": 3,
    "why": "Tổng các phản ứng hóa học của tế bào gọi là \"metabolism\" (chuyển hóa)."
   }
  ],
  "unit": "M1"
 },
 {
  "id": "cm-m2",
  "lvl": "B2",
  "title": "Stem Cells and Their Sources",
  "text": "Stem cells are undifferentiated cells that can {1} into specialised cell types and can also divide by mitosis to produce more stem cells. There are two broad types: embryonic stem cells, which are {2} from the inner cell mass of a blastocyst, and adult stem cells, which are found in various tissues. In an adult body they act as a repair system by {3} damaged tissue. A progenitor cell is already more specific than a stem cell, and the key difference is that a stem cell can divide {4}, whereas a progenitor cell can divide only a limited number of times. Autologous stem cells come from the patient's own body, so this method carries the {5} risk of all the types. One source is bone marrow, which must be {6} by inserting a needle into a large bone such as the hip bone. Another is blood, collected by apheresis, in which blood is drawn, the stem cells are removed and the rest is {7} to the donor. These cells are often used in medical therapy, for example in bone marrow {8}.",
  "gaps": [
   {
    "opts": [
     "defend",
     "differ",
     "differentiate",
     "deposit"
    ],
    "a": 2,
    "why": "Cấu trúc 'differentiate into' = biệt hóa thành; 'differ' không đi với 'into' theo nghĩa này, deposit/defend sai nghĩa."
   },
   {
    "opts": [
     "invaded",
     "imitated",
     "insulated",
     "isolated"
    ],
    "a": 3,
    "why": "'isolated from the inner cell mass' = được phân lập từ khối tế bào bên trong; các từ còn lại sai nghĩa."
   },
   {
    "opts": [
     "replenishing",
     "resisting",
     "repeating",
     "requesting"
    ],
    "a": 0,
    "why": "'replenishing damaged tissue' = bổ sung, tái tạo mô tổn thương; các từ khác vô nghĩa trong ngữ cảnh."
   },
   {
    "opts": [
     "incorrectly",
     "indefinitely",
     "immediately",
     "instantly"
    ],
    "a": 1,
    "why": "'divide indefinitely' (phân chia vô hạn) đối lập với 'only a limited number of times'."
   },
   {
    "opts": [
     "less",
     "lower",
     "fewest",
     "least"
    ],
    "a": 3,
    "why": "'the least risk of all' = so sánh nhất với danh từ không đếm được; less/lower không đi với 'of all', fewest dùng cho danh từ đếm được."
   },
   {
    "opts": [
     "expanded",
     "expired",
     "extracted",
     "explained"
    ],
    "a": 2,
    "why": "'must be extracted by drilling' = được lấy ra bằng cách khoan; các từ khác sai nghĩa."
   },
   {
    "opts": [
     "replied",
     "retreated",
     "reverted",
     "returned"
    ],
    "a": 3,
    "why": "'returned to the donor' = trả lại cho người hiến; các từ khác không đi với tân ngữ này."
   },
   {
    "opts": [
     "transplantation",
     "translation",
     "transcription",
     "transmission"
    ],
    "a": 0,
    "why": "'bone marrow transplantation' = ghép tủy xương; transcription là phiên mã, không dùng ở đây."
   }
  ],
  "unit": "M2"
 },
 {
  "id": "cm-m3",
  "lvl": "B1",
  "title": "The Skin's Equipment",
  "text": "Hair and nails are part of the skin's equipment. Each hair grows from a {1} in the dermis, and its cells fill with keratin before they are pushed up to the surface. A hair has three layers: a soft medulla, a cortex and a hard outer cuticle. The colour of a hair depends on the {2} of melanin in its cortex, and it turns grey when this pigment is no longer made. Nails protect the sensitive {3} of the fingers and toes. A nail looks pink because of tiny blood {4} beneath it, while the pale half-moon at its base is called the lunula. Nearby, sebaceous glands release sebum, which {5} the skin and hair, and in teenagers too much sebum can {6} the pores and lead to acne. Sweat from the eccrine glands cools the body, whereas the thicker sweat of the {7} glands has no smell until bacteria {8} it down.",
  "gaps": [
   {
    "opts": [
     "follicle",
     "gland",
     "nail",
     "fibre"
    ],
    "a": 0,
    "why": "Tóc mọc từ nang lông (hair follicle) nằm trong trung bì; gland, nail, fibre không phải nơi tóc mọc ra."
   },
   {
    "opts": [
     "shape",
     "amount",
     "number",
     "length"
    ],
    "a": 1,
    "why": "Màu tóc phụ thuộc vào lượng melanin: \"the amount of melanin\" (danh từ không đếm được, không dùng number)."
   },
   {
    "opts": [
     "layers",
     "shafts",
     "tips",
     "roots"
    ],
    "a": 2,
    "why": "Móng bảo vệ phần đầu ngón tay, ngón chân: \"the tips of the fingers and toes\"."
   },
   {
    "opts": [
     "glands",
     "fibres",
     "follicles",
     "vessels"
    ],
    "a": 3,
    "why": "Móng có màu hồng nhờ mạng mạch máu nhỏ bên dưới: \"tiny blood vessels\"."
   },
   {
    "opts": [
     "lubricates",
     "evaporates",
     "excretes",
     "regulates"
    ],
    "a": 0,
    "why": "Bã nhờn làm trơn da và tóc: \"lubricates the skin and hair\"; các động từ kia không đi với tân ngữ này."
   },
   {
    "opts": [
     "nourish",
     "block",
     "open",
     "cool"
    ],
    "a": 1,
    "why": "Quá nhiều chất bã làm tắc lỗ chân lông rồi gây mụn: \"block the pores\"; open làm ngược logic."
   },
   {
    "opts": [
     "sebaceous",
     "mammary",
     "apocrine",
     "eccrine"
    ],
    "a": 2,
    "why": "Mồ hôi đặc hơn, bắt đầu từ tuổi dậy thì, là của tuyến apocrine; eccrine vừa được nhắc ở vế trước."
   },
   {
    "opts": [
     "put",
     "make",
     "go",
     "break"
    ],
    "a": 3,
    "why": "Cụm \"break it down\" (phân hủy): vi khuẩn phân hủy mồ hôi nên mới có mùi."
   }
  ],
  "unit": "M3"
 },
 {
  "id": "cm-m4",
  "lvl": "B2",
  "title": "Joints, Cartilage and Movement",
  "text": "Bones are rigid, but the skeleton as a whole is flexible because bones can move against one another at {1}. A joint is the place where two or more bones {2} together. Some joints, such as the sutures of the skull, allow no movement at all, whereas others move freely. In the knee, the end of each bone is {3} with a layer of smooth hyaline cartilage, and two pads called menisci cushion the joint further. The remaining space is filled with synovial fluid, which {4} the joint and reduces friction. Strong ligaments hold the bones together, but tendons {5} muscle to bone so that the bone can be moved. Cartilage has no blood supply, so damaged tissue recovers {6}. Joints that carry heavy loads are {7} to injury, and common problems include sprains, dislocations and arthritis. There are several types of synovial joint. {8}, the knee is a hinge joint that mainly bends and straightens along one axis, while the shoulder allows movement in many directions.",
  "gaps": [
   {
    "opts": [
     "joints",
     "sutures",
     "ligaments",
     "menisci"
    ],
    "a": 0,
    "why": "Xương di chuyển so với nhau tại \"joints\" (khớp); sutures không cử động, ligaments và menisci không phải nơi xương trượt."
   },
   {
    "opts": [
     "come",
     "turn",
     "cut",
     "fall"
    ],
    "a": 0,
    "why": "\"come together\" nghĩa là gặp nhau - khớp là nơi các xương gặp nhau; \"turn/cut/fall together\" không tạo thành cụm có nghĩa này."
   },
   {
    "opts": [
     "covered",
     "filled",
     "packed",
     "drained"
    ],
    "a": 0,
    "why": "Đầu xương được phủ (\"covered\") bởi một lớp sụn trong; \"filled/packed/drained with a layer\" sai nghĩa."
   },
   {
    "opts": [
     "lubricates",
     "dissolves",
     "hardens",
     "empties"
    ],
    "a": 0,
    "why": "Dịch khớp làm trơn khớp và giảm ma sát: \"lubricates the joint and reduces friction\"."
   },
   {
    "opts": [
     "attach",
     "divide",
     "cover",
     "replace"
    ],
    "a": 0,
    "why": "Gân nối cơ với xương: \"attach muscle to bone\"; các từ còn lại sai nghĩa."
   },
   {
    "opts": [
     "slowly",
     "quickly",
     "rapidly",
     "easily"
    ],
    "a": 0,
    "why": "Sụn không có mạch máu nên hồi phục \"slowly\"; các từ kia mâu thuẫn với \"no blood supply\"."
   },
   {
    "opts": [
     "prone",
     "immune",
     "resistant",
     "safe"
    ],
    "a": 0,
    "why": "\"prone to injury\" = dễ bị tổn thương; các từ còn lại trái nghĩa với ý \"problems include...\"."
   },
   {
    "opts": [
     "For example",
     "However",
     "Therefore",
     "Instead"
    ],
    "a": 0,
    "why": "Câu sau đưa ví dụ về một loại khớp hoạt dịch nên dùng \"For example\"; However/Therefore/Instead sai logic."
   }
  ],
  "unit": "M4"
 },
 {
  "id": "cm-m5",
  "lvl": "B2",
  "title": "How Muscles Get Their Names",
  "text": "Some are named after their {1}: the tibialis anterior lies at the front of the shin. Others reflect where they begin and end; the sternocleidomastoid {2} the sternum and clavicle to the skull. The number of origins is also a clue. A muscle with two origins is a biceps, while one with four is a quadriceps. Shape {3} a role as well: the deltoid is triangular. Size is used to separate neighbours, so in the buttock the gluteus maximus is, as its name suggests, the {4} of the three. In the abdomen, fibres that run straight up and down belong to the rectus abdominis, whereas those that run at an {5} belong to the obliques. Finally, a muscle may be named for its action, {6} a supinator, which turns the palm upward. When a name has two words, this is {7} because two rules are being applied at once. Once you know the rules, you can often {8} the job of a muscle from its name alone.",
  "gaps": [
   {
    "opts": [
     "location",
     "size",
     "shape",
     "number"
    ],
    "a": 0,
    "why": "'lies at the front of the shin' mô tả vị trí nên chọn 'location'."
   },
   {
    "opts": [
     "connects",
     "leans",
     "covers",
     "separates"
    ],
    "a": 0,
    "why": "Cơ ức đòn chũm nối xương ức và xương đòn với sọ: 'connects ... to'."
   },
   {
    "opts": [
     "plays",
     "makes",
     "does",
     "puts"
    ],
    "a": 0,
    "why": "Cụm cố định 'play a role' (đóng vai trò)."
   },
   {
    "opts": [
     "largest",
     "smallest",
     "middle",
     "thinnest"
    ],
    "a": 0,
    "why": "'maximus' nghĩa là lớn nhất; 'as its name suggests' gợi 'largest'."
   },
   {
    "opts": [
     "angle",
     "edge",
     "end",
     "arc"
    ],
    "a": 0,
    "why": "Cụm cố định 'at an angle' (nghiêng một góc) chỉ cơ chéo."
   },
   {
    "opts": [
     "such as",
     "instead of",
     "in spite of",
     "owing to"
    ],
    "a": 0,
    "why": "'such as a supinator' đưa ví dụ cho cơ đặt tên theo chức năng."
   },
   {
    "opts": [
     "simply",
     "hardly",
     "never",
     "scarcely"
    ],
    "a": 0,
    "why": "'simply because' = chỉ đơn giản là vì; các từ còn lại mang nghĩa phủ định, sai logic."
   },
   {
    "opts": [
     "predict",
     "prevent",
     "repair",
     "reject"
    ],
    "a": 0,
    "why": "Biết quy tắc thì có thể 'predict' (đoán) chức năng cơ từ tên."
   }
  ],
  "unit": "M5"
 },
 {
  "id": "cm-m6",
  "lvl": "B2",
  "title": "Germs, Viruses and Bacteria",
  "text": "Diseases such as measles, tuberculosis and malaria are caused by pathogens, which are germs too small to be {1} without a microscope. Viruses and bacteria are the best-known examples. A virus is a parasite: it cannot {2} itself unless it enters a host cell, and it may damage or even destroy that cell. A bacterium, by contrast, is a single cell that can reproduce on its own. Not all bacteria are harmful; some are actually {3} to the health of the body. Tuberculosis is sometimes wrongly called a viral disease, but it is a bacterial {4}, and bacterial infections can often be treated with antibiotics, {5} viruses do not respond to them. Many viruses enter the body through mucous membranes, which have no outer layer of skin to {6} them. For some, though not all, viral diseases, {7} against infection is available. Scientists continue their research in the hope of {8} dangerous viruses altogether.",
  "gaps": [
   {
    "opts": [
     "seen",
     "heard",
     "tasted",
     "smelled"
    ],
    "a": 0,
    "why": "Mầm bệnh quá nhỏ nên không thể nhìn thấy nếu không có kính hiển vi: \"too small to be seen\"."
   },
   {
    "opts": [
     "remove",
     "absorb",
     "borrow",
     "multiply"
    ],
    "a": 3,
    "why": "Vi-rút chỉ nhân lên được khi vào tế bào chủ: \"cannot multiply itself unless it enters a host cell\"."
   },
   {
    "opts": [
     "harmful",
     "essential",
     "careless",
     "opposed"
    ],
    "a": 1,
    "why": "Sau \"Not all bacteria are harmful\", vế tiếp là có loại cần thiết cho sức khỏe: \"essential to the health\"."
   },
   {
    "opts": [
     "symptom",
     "medicine",
     "disease",
     "treatment"
    ],
    "a": 2,
    "why": "\"a bacterial disease\" (bệnh do vi khuẩn), đối lập với \"a viral disease\" ở vế trước."
   },
   {
    "opts": [
     "because",
     "so",
     "unless",
     "whereas"
    ],
    "a": 3,
    "why": "\"whereas\" nối hai vế đối lập: kháng sinh trị được vi khuẩn, còn vi-rút thì không đáp ứng."
   },
   {
    "opts": [
     "invite",
     "protect",
     "produce",
     "replace"
    ],
    "a": 1,
    "why": "Niêm mạc không có lớp da bên ngoài che chắn: \"no outer layer of skin to protect them\"."
   },
   {
    "opts": [
     "diagnosis",
     "infection",
     "vaccination",
     "transmission"
    ],
    "a": 2,
    "why": "Chỉ có tiêm chủng mới là biện pháp \"available\" để phòng nhiễm vi-rút: \"vaccination against infection\"."
   },
   {
    "opts": [
     "spreading",
     "creating",
     "ignoring",
     "eradicating"
    ],
    "a": 3,
    "why": "Mục tiêu của nghiên cứu là xóa sổ vi-rút nguy hiểm: \"in the hope of eradicating\"."
   }
  ],
  "unit": "M6"
 }
];
/* Cambridge-style open cloze */
const CLOZE_OPEN = [
 {
  "id": "co-b1-a01",
  "lvl": "B1",
  "title": "A New Hobby",
  "text": "Last year my brother Nam started {1} unusual hobby that surprised everyone in our family: he began to grow vegetables on the roof of our flat. At first he knew nothing {2} gardening, so he bought some books and watched videos online. {3} the beginning, nothing grew, and he nearly gave {4} gardening altogether. But he is a patient person, and he asked a neighbour for advice. She explained that the roof was hot and dry, so the plants needed to be watered {5} often than he had thought. He followed her advice, and now the roof is full {6} tomatoes, beans and herbs. We often have dinner there, and Nam always cooks the vegetables {7} he has grown himself. If you ever visit us, you will agree that it is {8} best garden in the street.",
  "gaps": [
   {
    "ans": [
     "an",
     "another"
    ],
    "why": "\"unusual\" bắt đầu bằng nguyên âm nên dùng \"an\"."
   },
   {
    "ans": [
     "about",
     "of"
    ],
    "why": "\"know nothing about gardening\" = không biết gì về làm vườn."
   },
   {
    "ans": [
     "at",
     "in",
     "from"
    ],
    "why": "\"At/In the beginning\" = lúc đầu; \"from the beginning\" = ngay từ đầu cũng đúng."
   },
   {
    "ans": [
     "up"
    ],
    "why": "\"give up gardening\" = bỏ việc làm vườn; \"give in\" không đi với tân ngữ này."
   },
   {
    "ans": [
     "more"
    ],
    "why": "Mái nhà nóng và khô nên cây cần tưới \"more often than\" (thường xuyên hơn)."
   },
   {
    "ans": [
     "of"
    ],
    "why": "\"be full of\" = đầy ..."
   },
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Đại từ quan hệ chỉ vật: \"vegetables that/which he has grown\"."
   },
   {
    "ans": [
     "the"
    ],
    "why": "So sánh nhất: \"the best garden\"."
   }
  ]
 },
 {
  "id": "co-b1-a02",
  "lvl": "B1",
  "title": "A Week at the Coast",
  "text": "Last summer my family went to the coast for a week. We stayed in a small hotel {1} was only five minutes from the beach. On the first day, the weather was perfect, so we {2} swimming in the morning. My little sister, who had never seen the sea {3}, was very excited and ran straight into the water. {4} the evening, we had dinner at a restaurant near the harbour. Unfortunately, it started to rain on the third day, and we had to stay inside {5} the weather got better. There wasn't {6} to do, so my father taught us some card games. By the end of the week, we were all sorry {7} leave. I would love to go back there {8} soon as possible.",
  "gaps": [
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Đại từ quan hệ làm chủ ngữ cho vật: \"a hotel that/which was\"."
   },
   {
    "ans": [
     "went",
     "were"
    ],
    "why": "\"went swimming\" = đi bơi (hoặc \"were swimming\")."
   },
   {
    "ans": [
     "before",
     "previously"
    ],
    "why": "\"never seen the sea before\" = chưa từng thấy biển trước đây."
   },
   {
    "ans": [
     "in",
     "during"
    ],
    "why": "\"In the evening\" = vào buổi tối."
   },
   {
    "ans": [
     "until",
     "till"
    ],
    "why": "\"stay inside until the weather got better\" = ở trong nhà cho đến khi trời đẹp."
   },
   {
    "ans": [
     "much",
     "anything",
     "enough"
    ],
    "why": "Câu phủ định \"wasn't\" nên dùng \"much\", \"anything\" hoặc \"enough\" (There wasn't enough to do)."
   },
   {
    "ans": [
     "to"
    ],
    "why": "\"sorry to leave\" = tiếc phải rời đi."
   },
   {
    "ans": [
     "as"
    ],
    "why": "\"as soon as possible\" = càng sớm càng tốt."
   }
  ]
 },
 {
  "id": "co-b2-a03",
  "lvl": "B2",
  "title": "Why We Procrastinate",
  "text": "Most people put off tasks {1} some point in their lives, and the reasons are more complicated than simple laziness. Psychologists suggest that procrastination has little to do {2} time management and much more to do with emotions. When a task seems boring or frightening, we tend to avoid it {3} order to feel better in the short term. The problem is that the relief is brief, and afterwards we are left feeling even {4} stressed than before. Some experts recommend breaking a big project down {5} smaller steps so that it feels less overwhelming. Others suggest setting a deadline, {6} though this does not work for everyone. Whatever method you choose, the important thing is to begin, {7} matter how small the first step is. Once you have started, you may well find that the task is not nearly {8} bad as you had imagined.",
  "gaps": [
   {
    "ans": [
     "at"
    ],
    "why": "\"at some point\" = vào lúc nào đó."
   },
   {
    "ans": [
     "with"
    ],
    "why": "\"have little to do with\" = ít liên quan đến."
   },
   {
    "ans": [
     "in"
    ],
    "why": "\"in order to\" = để."
   },
   {
    "ans": [
     "more"
    ],
    "why": "\"even more stressed than before\": nhẹ nhõm ngắn ngủi rồi lại căng thẳng hơn; \"less\" mâu thuẫn với \"The problem\"."
   },
   {
    "ans": [
     "into",
     "to"
    ],
    "why": "\"break (a project) down into/to smaller steps\" = chia nhỏ thành các bước nhỏ."
   },
   {
    "ans": [
     "even"
    ],
    "why": "\"even though\" = mặc dù."
   },
   {
    "ans": [
     "no"
    ],
    "why": "\"no matter how\" = dù ... đến đâu."
   },
   {
    "ans": [
     "as",
     "so"
    ],
    "why": "\"not nearly as/so bad as\" = không tệ như; cấu trúc so sánh bằng phủ định."
   }
  ]
 },
 {
  "id": "co-b2-a04",
  "lvl": "B2",
  "title": "The Garden on Mill Street",
  "text": "When the old factory on Mill Street was pulled down, local residents were worried that the empty site would {1} left to decay. Instead, a group of volunteers, most {2} whom had never grown anything before, proposed turning it into a community garden. The council, which had no other plans for the land, agreed, provided {3} the volunteers paid for the soil themselves. Today the garden {4} become the pride of the neighbourhood. Children visit it after school, learn how plants grow and take home vegetables {5} they have picked. Mrs Lee, {6} lives next door, says she would never have met her neighbours if it hadn't been {7} the garden. \"People used to walk past one another without speaking,\" she says. \"Now we stop to chat, and everyone seems to have time for a conversation, {8} busy they are.\"",
  "gaps": [
   {
    "ans": [
     "be",
     "get"
    ],
    "why": "Bị động: \"would be left\" (hoặc \"get left\") to decay."
   },
   {
    "ans": [
     "of"
    ],
    "why": "\"most of whom\" = hầu hết trong số họ."
   },
   {
    "ans": [
     "that"
    ],
    "why": "\"provided that\" = với điều kiện là."
   },
   {
    "ans": [
     "has"
    ],
    "why": "\"Today the garden has become\" = thì hiện tại hoàn thành, hợp với các động từ hiện tại ở câu sau."
   },
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Mệnh đề quan hệ chỉ vật: \"vegetables that/which they have picked\"."
   },
   {
    "ans": [
     "who"
    ],
    "why": "Đại từ quan hệ chỉ người làm chủ ngữ: \"Mrs Lee, who lives\"."
   },
   {
    "ans": [
     "for"
    ],
    "why": "\"if it hadn't been for\" = nếu không nhờ có."
   },
   {
    "ans": [
     "however"
    ],
    "why": "\"however busy they are\" = dù bận đến đâu."
   }
  ]
 },
 {
  "id": "co-c1-a05",
  "lvl": "C1",
  "title": "Why Science Doubts Itself",
  "text": "Few ideas have shaped modern science {1} profoundly as the principle that every claim should be tested. A hypothesis, no matter how elegant, is worthless {2} it can be checked against evidence. This is not to say that researchers are free {3} bias. On the contrary, they are as prone as anyone to see what they expect to see, which is precisely {4} the scientific method relies on peer review. Not only {5} experiments have to be repeatable, but the methods must also be described in enough detail for others to follow them. Were this {6} the case, errors would go unnoticed for decades. Admittedly, the system is far from perfect, and fraud does occasionally slip through the net. Even so, it remains the best mechanism we have, {7} which our understanding of the world could never have advanced as far {8} it has.",
  "gaps": [
   {
    "ans": [
     "as",
     "so"
    ],
    "why": "\"as profoundly as\" (hoặc \"so profoundly as\") trong câu phủ định ngầm \"Few\"."
   },
   {
    "ans": [
     "unless",
     "until"
    ],
    "why": "\"worthless unless it can be checked\" = vô giá trị trừ khi kiểm chứng được."
   },
   {
    "ans": [
     "from",
     "of"
    ],
    "why": "\"free from/of bias\" = không thiên vị."
   },
   {
    "ans": [
     "why"
    ],
    "why": "\"precisely why\" = chính vì lý do đó."
   },
   {
    "ans": [
     "do"
    ],
    "why": "Đảo ngữ sau \"Not only\": \"Not only do experiments have to be\"."
   },
   {
    "ans": [
     "not"
    ],
    "why": "Đảo ngữ điều kiện: \"Were this not the case\" = nếu không như vậy."
   },
   {
    "ans": [
     "without"
    ],
    "why": "\"without which\" = nếu không có nó thì ..."
   },
   {
    "ans": [
     "as"
    ],
    "why": "\"as far as it has\" = đi xa như nó đã đi."
   }
  ]
 },
 {
  "id": "co-c1-a06",
  "lvl": "C1",
  "title": "Tourism and Heritage",
  "text": "Tourism can be a double-edged sword for historic towns. {1} the one hand, visitors bring income that helps preserve old buildings; on the other, their sheer numbers can damage the very sites they come to admire. Local authorities, {2} are often short of money, find themselves in a difficult position. Some have introduced limits on daily visitors, a measure {3} has proved effective despite being unpopular with traders. Others have sought to spread the crowds by promoting lesser-known attractions, the idea {4} that tourists will then be less concentrated. Whether such strategies will succeed depends largely {5} how willing travellers are to change their habits. Few people, having saved up for a trip, are inclined to avoid the famous landmarks they have read so much {6}. Nevertheless, there are signs that attitudes are shifting. Rarely {7} the public been so aware of the environmental cost of travel, and a growing number of tourists {8} now saying they are prepared to pay more for sustainable options.",
  "gaps": [
   {
    "ans": [
     "on"
    ],
    "why": "\"On the one hand ... on the other\" = một mặt ... mặt khác."
   },
   {
    "ans": [
     "who"
    ],
    "why": "Mệnh đề quan hệ không xác định chỉ người: \"authorities, who are\"."
   },
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Đại từ quan hệ làm chủ ngữ chỉ vật: \"a measure that/which has proved\"."
   },
   {
    "ans": [
     "being"
    ],
    "why": "\"the idea being that ...\" = ý tưởng là ..."
   },
   {
    "ans": [
     "on",
     "upon"
    ],
    "why": "\"depend on\" = phụ thuộc vào."
   },
   {
    "ans": [
     "about"
    ],
    "why": "\"read so much about\" = đọc nhiều về."
   },
   {
    "ans": [
     "has",
     "have"
    ],
    "why": "Đảo ngữ sau \"Rarely\": \"Rarely has/have the public been\" (the public có thể đi với động từ số ít hoặc số nhiều)."
   },
   {
    "ans": [
     "are"
    ],
    "why": "\"tourists {8} now saying\" = thì hiện tại tiếp diễn; \"a growing number of tourists\" đi với động từ số nhiều: are."
   }
  ]
 },
 {
  "id": "co-b1-b01",
  "lvl": "B1",
  "title": "My First Race",
  "text": "Last year my doctor told me that I should do more exercise, so I decided {1} start running. At first it was hard. I could only run for five minutes {2} I felt tired, and my legs hurt the next day. My neighbour Minh, who has been running for many years, gave me some good advice. He said that I {3} not try to do too much too quickly. Now I run three times a week, usually in the park near my house. It is much easier than it was {4} the beginning. I also eat more vegetables and I drink a lot {5} water. The best thing is that I sleep much better {6} I did before. Last month I took part in a ten-kilometre race for the first time. I did not win, but I was very proud of {7} for finishing. Next year I hope to run a half marathon, if my knee {8} not hurt me again.",
  "gaps": [
   {
    "ans": [
     "to"
    ],
    "why": "\"decide to + động từ nguyên mẫu\"."
   },
   {
    "ans": [
     "before",
     "until"
    ],
    "why": "\"could only run for five minutes before/until I felt tired\" = chỉ chạy được 5 phút thì thấy mệt."
   },
   {
    "ans": [
     "should",
     "must",
     "need"
    ],
    "why": "Lời khuyên gián tiếp: \"I should/must/need not try to do too much\" = không nên/không cần cố làm quá nhiều."
   },
   {
    "ans": [
     "at",
     "in"
    ],
    "why": "Cụm cố định \"at the beginning\" / \"in the beginning\" = lúc đầu."
   },
   {
    "ans": [
     "of"
    ],
    "why": "\"a lot of water\": lượng từ đi với \"of\"."
   },
   {
    "ans": [
     "than"
    ],
    "why": "So sánh hơn: \"better than I did before\"."
   },
   {
    "ans": [
     "myself"
    ],
    "why": "Chủ ngữ \"I\" cũng là người được tự hào: \"proud of myself for finishing\" (đại từ phản thân)."
   },
   {
    "ans": [
     "does"
    ],
    "why": "Câu điều kiện thì hiện tại: \"if my knee does not hurt me again\"; trợ động từ \"does\" đi với chủ ngữ số ít."
   }
  ]
 },
 {
  "id": "co-b1-b02",
  "lvl": "B1",
  "title": "Grandfather's New Phone",
  "text": "My grandfather bought his first smartphone last month, and he has been excited about it {1} since. At first he did not know how to connect it {2} the internet, so he asked me to show him. Now he sends messages to all his friends, but he often makes mistakes because he does not wear his glasses. Yesterday he sent a photo of his dinner to my teacher {3} mistake! The teacher was kind and replied with a smile. My grandfather also enjoys playing games, and he says it is {4} best way for anybody to relax in the evening. However, my mother is a little worried. She thinks he spends too {5} time looking at the screen and not enough time walking outside. I told her that there is nothing to worry {6}, because he still goes for a walk every morning. If he ever feels bored, I will show him how to use a video app, so that he can talk to his cousins, {7} live in another city, every week. I am sure he will find {8} easy to use.",
  "gaps": [
   {
    "ans": [
     "ever"
    ],
    "why": "Cụm cố định \"ever since\" = kể từ đó đến nay."
   },
   {
    "ans": [
     "to"
    ],
    "why": "\"connect something to the internet\" = kết nối với internet."
   },
   {
    "ans": [
     "by"
    ],
    "why": "Cụm cố định \"by mistake\" = do nhầm lẫn."
   },
   {
    "ans": [
     "the"
    ],
    "why": "Mạo từ \"the\" trước so sánh nhất: \"the best way for anybody to relax\" (không phải của riêng ông nên không dùng \"his\")."
   },
   {
    "ans": [
     "much"
    ],
    "why": "\"too much time\": time là danh từ không đếm được nên dùng \"much\"."
   },
   {
    "ans": [
     "about"
    ],
    "why": "Cụm \"worry about\" = lo lắng về; \"nothing to worry about\" = không có gì phải lo."
   },
   {
    "ans": [
     "who"
    ],
    "why": "Mệnh đề quan hệ không xác định (có dấu phẩy) thay thế cho người (\"cousins\"): \"who\"."
   },
   {
    "ans": [
     "it"
    ],
    "why": "\"find it easy to use\": \"it\" thay cho \"a video app\" (tân ngữ giả đứng trước tính từ)."
   }
  ]
 },
 {
  "id": "co-b2-b03",
  "lvl": "B2",
  "title": "Why Bees Matter",
  "text": "Bees are among the most important insects on Earth, {1} about one third of the food we eat depends on pollination. When a bee visits a flower to collect nectar, pollen sticks {2} its body and is carried to the next flower. Without this service, many fruits and vegetables would become rare and expensive. Unfortunately, bee populations have been falling in several regions, and scientists believe that the main causes {3} the loss of wild habitats and the use of certain chemicals on crops. Some farmers have started {4} plant flowers around their fields in order to provide the insects with food. Others have started keeping hives, which, if looked {5} carefully, can produce honey as well as help the harvest. Gardeners can also make a difference. Planting a few native flowers is enough {6} attract bees to even a small balcony. It is also advisable to avoid cutting the grass too {7}, because a few centimetres of length are enough to shelter many species. If everybody did a little, the situation might improve more quickly {8} we expect.",
  "gaps": [
   {
    "ans": [
     "since",
     "because",
     "as",
     "for"
    ],
    "why": "Liên từ chỉ nguyên nhân: ong quan trọng vì (since/because/as/for) một phần ba thực phẩm phụ thuộc vào thụ phấn."
   },
   {
    "ans": [
     "to",
     "on",
     "onto"
    ],
    "why": "\"pollen sticks to/on its body\" = phấn hoa dính vào cơ thể."
   },
   {
    "ans": [
     "are",
     "include",
     "were"
    ],
    "why": "Chủ ngữ \"the main causes\" (số nhiều) + \"are\" (hoặc \"include\")."
   },
   {
    "ans": [
     "to"
    ],
    "why": "\"start to + động từ nguyên mẫu\" (không có \"-ing\" vì \"plant\" ở dạng gốc)."
   },
   {
    "ans": [
     "after"
    ],
    "why": "Phrasal verb \"look after\" = chăm sóc."
   },
   {
    "ans": [
     "to"
    ],
    "why": "\"enough to + động từ\": đủ để làm gì."
   },
   {
    "ans": [
     "short",
     "low"
    ],
    "why": "\"too short\" = cắt cỏ quá ngắn; vế sau nói vài cen-ti-mét chiều dài đã đủ che chở cho nhiều loài."
   },
   {
    "ans": [
     "than"
    ],
    "why": "So sánh hơn: \"more quickly than we expect\"."
   }
  ]
 },
 {
  "id": "co-b2-b04",
  "lvl": "B2",
  "title": "Learning to Talk to Patients",
  "text": "Technical knowledge is only part of what makes a good doctor. Equally important is the ability to talk to patients clearly and kindly, {1} is why many medical schools now teach communication skills as a separate subject. In one typical class, students take turns playing the roles of doctor and patient. The \"doctor\" has to explain a diagnosis {2} using complicated terms, and the \"patient\" is allowed to interrupt whenever something is unclear. Afterwards, classmates give feedback on what was done well and what could have been done {3}. Many students admit that they are surprised {4} how difficult it is to deliver bad news gently. \"I used to think that facts were all that mattered,\" says Mai, a third-year student. \"Now I realise that people remember how they were treated long {5} they forget the details.\" Research supports her view: patients who feel listened to are far {6} likely to follow their treatment plan. Teachers hope that, by the time students graduate, these habits will have become second nature, and they will no longer need to think about {7} they speak. Whether this hope proves justified remains to be {8}.",
  "gaps": [
   {
    "ans": [
     "which",
     "that"
    ],
    "why": "\"..., which is why ...\" / \"that is why\" = đó là lý do vì sao nhiều trường y dạy kỹ năng giao tiếp."
   },
   {
    "ans": [
     "without"
    ],
    "why": "\"without using complicated terms\" = không dùng thuật ngữ phức tạp; \"has to explain ... without using\" hợp với ý giải thích dễ hiểu."
   },
   {
    "ans": [
     "better",
     "differently",
     "otherwise"
    ],
    "why": "\"could have been done better/differently\" = lẽ ra có thể làm tốt hơn/khác đi."
   },
   {
    "ans": [
     "at",
     "by",
     "about"
    ],
    "why": "\"be surprised at/by something\" = ngạc nhiên về điều gì."
   },
   {
    "ans": [
     "after"
    ],
    "why": "\"long after\" = rất lâu sau khi; người ta nhớ cách mình được đối xử lâu sau khi quên chi tiết."
   },
   {
    "ans": [
     "more"
    ],
    "why": "\"far more likely\" = có khả năng cao hơn nhiều (so sánh hơn với \"far\")."
   },
   {
    "ans": [
     "how",
     "when"
    ],
    "why": "\"think about how they speak\" = nghĩ về cách mình nói."
   },
   {
    "ans": [
     "seen"
    ],
    "why": "Cụm cố định \"remains to be seen\" = vẫn còn phải chờ xem."
   }
  ]
 },
 {
  "id": "co-c1-b05",
  "lvl": "C1",
  "title": "The Vanishing Telegraph Operator",
  "text": "The telegraph transformed communication in the nineteenth century, yet the profession it created has all but vanished. Operators, {1} skill lay in translating clicks into words at astonishing speed, were once among the most respected workers in towns across the world. So great was the demand for them {2} companies began recruiting women, a decision that was considered radical at the time. Wages, however, remained lower than those of men doing exactly {3} same work. Having mastered the code, operators could often tell, merely by the rhythm of the clicks, {4} was sending a message, much as one recognises a friend by his footsteps. Nothing could have prepared them {5} the speed at which the telephone would take over. Within a generation, most offices had abandoned the old equipment, and operators found themselves obliged to retrain, {6} they were lucky enough to be kept on. Today the telegraph survives only in museums and in the occasional film, in {7} it appears as no more than a faint echo of its former importance. {8} it not been for the dedication of such workers, the early network would never have become so reliable.",
  "gaps": [
   {
    "ans": [
     "whose"
    ],
    "why": "Sở hữu: \"Operators, whose skill lay in...\" = những người điều hành mà kỹ năng của họ..."
   },
   {
    "ans": [
     "that"
    ],
    "why": "Cấu trúc đảo ngữ \"So great was the demand ... that ...\" = nhu cầu lớn đến mức..."
   },
   {
    "ans": [
     "the"
    ],
    "why": "\"exactly the same work\" = cùng một công việc; \"the same\" luôn có mạo từ \"the\"."
   },
   {
    "ans": [
     "who"
    ],
    "why": "Đại từ nghi vấn làm chủ ngữ: \"who was sending a message\" = ai đang gửi."
   },
   {
    "ans": [
     "for"
    ],
    "why": "\"prepare someone for something\" = chuẩn bị cho ai điều gì."
   },
   {
    "ans": [
     "unless"
    ],
    "why": "\"unless they were lucky enough to be kept on\" = trừ khi may mắn được giữ lại."
   },
   {
    "ans": [
     "which"
    ],
    "why": "Giới từ + đại từ quan hệ: \"in which\" thay cho \"the occasional film\"."
   },
   {
    "ans": [
     "had"
    ],
    "why": "Đảo ngữ điều kiện loại 3: \"Had it not been for ...\" = nếu không nhờ có..."
   }
  ]
 },
 {
  "id": "co-c1-b06",
  "lvl": "C1",
  "title": "Lost Without the App",
  "text": "Few inventions have altered everyday life as quietly as the satellite navigation app. Drivers who once unfolded paper maps on the passenger seat now follow a calm voice that tells them where to turn, {1} they have ever been there before or not. Yet convenience comes at a price. A recent study suggested that people who rely heavily {2} such tools develop a weaker mental map of their surroundings, much {3} muscles weaken when they are not used. Participants were asked to find their way across a city they had visited repeatedly; those who had been using an app throughout performed noticeably worse {4} those who had navigated unaided. The researchers are careful to point {5} that correlation does not prove causation. {6} the truth, few of us would willingly give up a tool that saves so much time. The real challenge, perhaps, lies not in abandoning it altogether but in using it in {7} a way that our own judgement is still exercised. Only then can we be sure that, in gaining a guide, we have not lost the ability to find the way for {8}.",
  "gaps": [
   {
    "ans": [
     "whether"
    ],
    "why": "Cấu trúc \"whether ... or not\" = dù ... hay không."
   },
   {
    "ans": [
     "on",
     "upon"
    ],
    "why": "\"rely on/upon\" = dựa vào."
   },
   {
    "ans": [
     "as",
     "like"
    ],
    "why": "\"much as muscles weaken\" = giống như cơ bắp yếu đi (much as; cũng chấp nhận \"like\" trong văn nói)."
   },
   {
    "ans": [
     "than"
    ],
    "why": "So sánh hơn: \"worse than those who...\"."
   },
   {
    "ans": [
     "out"
    ],
    "why": "Phrasal verb \"point out\" = chỉ ra."
   },
   {
    "ans": [
     "whatever"
    ],
    "why": "\"Whatever the truth (may be)\" = dù sự thật là gì."
   },
   {
    "ans": [
     "such"
    ],
    "why": "Cấu trúc \"in such a way that\" = theo cách mà."
   },
   {
    "ans": [
     "ourselves"
    ],
    "why": "Đại từ phản thân \"for ourselves\" = tự mình, vì chủ ngữ là \"we\"."
   }
  ]
 },
 {
  "id": "co-m1",
  "lvl": "B2",
  "title": "Two Kinds of Cells",
  "text": "All living cells belong {1} one of two basic types. Eukaryotic cells contain organelles, which are compartments surrounded by membranes. Prokaryotic cells have {2} compartments of this kind. In a prokaryote the DNA usually lies in a central region, and the cell is bounded by a membrane. Outside this membrane there is a rigid wall {3} gives the cell its shape. Some bacteria also make an extra layer, called a capsule, which protects them {4} drying out. A looser layer, known as a slime layer, helps bacteria to stick to surfaces. Eukaryotic cells are much more complex. The nucleus, {5} contains the DNA, is the most striking organelle, and it is surrounded by a double membrane. Mitochondria allow these cells to use oxygen, so they can produce far more energy {6} the same amount of food than prokaryotes can. This is one reason why eukaryotic cells are able {7} grow larger. Animals, plants, fungi and protists are all made {8} eukaryotic cells.",
  "gaps": [
   {
    "ans": [
     "to"
    ],
    "why": "\"Belong to\" là cụm động từ cố định (thuộc về)."
   },
   {
    "ans": [
     "no"
    ],
    "why": "Tế bào nhân sơ không có bào quan: \"have no compartments\"."
   },
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Đại từ quan hệ thay cho \"wall\", làm chủ ngữ của \"gives\"."
   },
   {
    "ans": [
     "from",
     "against"
    ],
    "why": "\"Protect somebody from/against something\": bảo vệ khỏi bị khô."
   },
   {
    "ans": [
     "which"
    ],
    "why": "Mệnh đề không xác định sau dấu phẩy chỉ dùng \"which\", không dùng \"that\"."
   },
   {
    "ans": [
     "from",
     "with",
     "using"
    ],
    "why": "\"Produce energy from/with/using the same amount of food\": tạo ra năng lượng từ cùng lượng thức ăn."
   },
   {
    "ans": [
     "to"
    ],
    "why": "\"Be able to + động từ nguyên mẫu\"."
   },
   {
    "ans": [
     "of",
     "from"
    ],
    "why": "\"Be made of/from\": được cấu tạo từ tế bào nhân thực."
   }
  ],
  "unit": "M1"
 },
 {
  "id": "co-m2",
  "lvl": "B1",
  "title": "Understanding Cancer",
  "text": "Cancer is {1} group of diseases in which cells grow abnormally and may invade other parts of the body. Not all tumors are cancerous: benign tumors do not spread, {2} malignant ones can. Typical signs include a new lump, a cough {3} does not go away, and unexplained weight loss. These symptoms may also be caused {4} other problems, so a biopsy is needed to confirm the diagnosis. Tobacco use is responsible {5} about 22% of cancer deaths. Infections, radiation and pollution also play a role, partly because they can change the genes of a cell. Many such changes have {6} happen before a tumor develops. Cancer can often be prevented by not smoking, eating plenty of vegetables and avoiding too {7} sunlight. Treatment usually consists {8} surgery, chemotherapy, radiotherapy and targeted therapy, and palliative care helps patients with advanced disease.",
  "gaps": [
   {
    "ans": [
     "a"
    ],
    "why": "'a group of diseases': mạo từ không xác định đứng trước danh từ đếm được số ít."
   },
   {
    "ans": [
     "but",
     "whereas",
     "while",
     "yet"
    ],
    "why": "Đối lập giữa u lành (không lan) và u ác (có thể lan)."
   },
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Đại từ quan hệ thay cho 'cough'."
   },
   {
    "ans": [
     "by"
    ],
    "why": "Bị động 'be caused by' + nguyên nhân."
   },
   {
    "ans": [
     "for"
    ],
    "why": "'be responsible for' = chịu trách nhiệm/gây ra."
   },
   {
    "ans": [
     "to"
    ],
    "why": "'have to happen' = phải xảy ra."
   },
   {
    "ans": [
     "much"
    ],
    "why": "'too much sunlight' = quá nhiều ánh nắng."
   },
   {
    "ans": [
     "of"
    ],
    "why": "'consist of' = bao gồm."
   }
  ],
  "unit": "M2"
 },
 {
  "id": "co-m3",
  "lvl": "B1",
  "title": "Infections, Lesions and Burns",
  "text": "The skin is exposed to many dangers. Infections may be bacterial, viral or fungal, and herpes, a viral infection, can pass to another person {1} direct contact, even when the carrier shows no symptoms. Skin lesions are divided into two groups. Primary lesions, such {2} a rash or a furuncle, do not break the skin, {3} secondary lesions, for example excoriations and ulcers, do. A graze is a shallow wound {4} only the top layer is rubbed off, while a bruise appears when blood vessels beneath the skin are damaged. Bed sores can affect people {5} cannot change position, because constant pressure on one area reduces the blood supply. Burns are classified by depth. A first-degree burn affects {6} the epidermis, so the area is red and painful but no blisters form. In a second-degree burn the dermis is injured as {7}. A third-degree burn destroys every layer and is often painless because the nerve endings {8} been destroyed.",
  "gaps": [
   {
    "ans": [
     "through",
     "by",
     "via"
    ],
    "why": "Herpes lây \"through/by direct contact\" (qua tiếp xúc trực tiếp)."
   },
   {
    "ans": [
     "as"
    ],
    "why": "Cấu trúc \"such as\" để nêu ví dụ."
   },
   {
    "ans": [
     "while",
     "whereas",
     "but",
     "and",
     "yet"
    ],
    "why": "Hai vế đối lập (không làm rách da / làm rách da) nối bằng while/whereas/but."
   },
   {
    "ans": [
     "where"
    ],
    "why": "Mệnh đề chỉ nơi chốn/trường hợp: \"a shallow wound where only the top layer is rubbed off\"."
   },
   {
    "ans": [
     "who",
     "that"
    ],
    "why": "Đại từ quan hệ chỉ người làm chủ ngữ: \"people who/that cannot change position\"."
   },
   {
    "ans": [
     "only",
     "just",
     "solely",
     "merely"
    ],
    "why": "Bỏng độ một chỉ ảnh hưởng thượng bì: \"affects only the epidermis\"."
   },
   {
    "ans": [
     "well"
    ],
    "why": "Cụm cố định \"as well\" (cũng, nữa): trung bì cũng bị tổn thương."
   },
   {
    "ans": [
     "have",
     "had"
    ],
    "why": "Thì hiện tại hoàn thành bị động với chủ ngữ số nhiều: \"the nerve endings have been destroyed\"."
   }
  ],
  "unit": "M3"
 },
 {
  "id": "co-m4",
  "lvl": "B2",
  "title": "The Human Skeleton",
  "text": "The adult skeleton {1} made up of 206 bones. It is divided {2} two main parts. The axial skeleton consists of the skull, the spine, the ribs and the sternum, {3} the appendicular skeleton forms the limbs and the girdles that attach them to the trunk. The spine contains 33 vertebrae, of {4} the first seven are cervical. Twelve pairs of ribs enclose the thorax and protect the heart and lungs; the last two pairs, {5} do not join the sternum at the front, are called floating ribs. Each wrist has eight carpal bones, while each ankle has seven tarsal bones. Bones also work {6} levers when muscles pull on them, and they store minerals such as calcium. The skull protects the brain, and {7} of its bones are connected by sutures, which allow no movement. A typical long bone has a shaft and two rounded ends, {8} are called epiphyses.",
  "gaps": [
   {
    "ans": [
     "is"
    ],
    "why": "Chủ ngữ số ít \"The adult skeleton\" + made up of: \"is made up of\" (bị động)."
   },
   {
    "ans": [
     "into",
     "in"
    ],
    "why": "\"divided into two parts\" - cấu trúc chia thành các phần."
   },
   {
    "ans": [
     "while",
     "whereas",
     "and",
     "but"
    ],
    "why": "Liên từ nối hai vế đối chiếu: bộ xương trục ... \"while\" bộ xương chi ..."
   },
   {
    "ans": [
     "which"
    ],
    "why": "\"of which the first seven...\": giới từ + đại từ quan hệ chỉ vật \"which\"."
   },
   {
    "ans": [
     "which"
    ],
    "why": "Mệnh đề quan hệ không xác định, có dấu phẩy, bổ nghĩa cho \"the last two pairs\" không dùng that; dùng \"which\"."
   },
   {
    "ans": [
     "as",
     "like"
    ],
    "why": "\"work as levers\" = đóng vai trò như đòn bẩy."
   },
   {
    "ans": [
     "most",
     "many",
     "some",
     "several"
    ],
    "why": "Chỉ số lượng: phần lớn xương sọ nối bằng khớp bất động; \"most/many\" đều hợp lý."
   },
   {
    "ans": [
     "which"
    ],
    "why": "Mệnh đề quan hệ không xác định có dấu phẩy, thay thế \"two rounded ends\": \"which are called epiphyses\"."
   }
  ],
  "unit": "M4"
 },
 {
  "id": "co-m5",
  "lvl": "B2",
  "title": "Muscle Disorders and Their Causes",
  "text": "Disorders of the muscular system can be sorted into several groups. Some disorders of movement, such as polio and Parkinson's disease, are caused {1} problems in the nervous system, which controls muscle. In myasthenia gravis, an autoimmune illness, the body's own defences attack receptors at the motor end-plate. Muscular dystrophy is a myopathy: the muscle tissue itself is destroyed {2} replaced by scar tissue. Injuries such as strains and cramps form a further group, and certain toxins also interfere with the nerve signal. Tetanus belongs to the last group, {3} it is caused by a poison made by bacteria. Spores enter a deep wound, grow into a colony and release a toxin {4} blocks inhibitory signals in the nervous system. The result is constant contraction of major muscle groups, {5} is why the illness is also called lockjaw. Fortunately, tetanus can {6} prevented by vaccination, and booster doses are given every ten years {7} order to keep protection. Anyone who {8} not been vaccinated should ask a doctor for advice after a deep, dirty wound.",
  "gaps": [
   {
    "ans": [
     "by"
    ],
    "why": "Bị động 'are caused by' + nguyên nhân (problems in the nerves)."
   },
   {
    "ans": [
     "and",
     "then"
    ],
    "why": "'destroyed and replaced': hai hành động nối bằng 'and' (mô cơ bị phá hủy và được thay bằng mô sẹo)."
   },
   {
    "ans": [
     "because",
     "since",
     "as",
     "for"
    ],
    "why": "Chỉ lý do tetanus thuộc nhóm độc tố: do chất độc của vi khuẩn."
   },
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Đại từ quan hệ thay cho 'toxin' làm chủ ngữ của 'blocks'."
   },
   {
    "ans": [
     "which",
     "that"
    ],
    "why": "Mệnh đề quan hệ không xác định sau dấu phẩy, thay cho cả ý phía trước; 'that' không dùng sau dấu phẩy."
   },
   {
    "ans": [
     "be"
    ],
    "why": "Bị động với động từ khuyết thiếu: 'can be prevented'."
   },
   {
    "ans": [
     "in"
    ],
    "why": "Cụm cố định 'in order to' (để mà)."
   },
   {
    "ans": [
     "has",
     "had"
    ],
    "why": "'Anyone who has not been vaccinated': hiện tại hoàn thành, chủ ngữ số ít."
   }
  ],
  "unit": "M5"
 },
 {
  "id": "co-m6",
  "lvl": "B2",
  "title": "The Body's Drainage and Guard Posts",
  "text": "The lymphatic system is part of the body's defences. Lymph vessels collect fluid {1} leaks out of the blood capillaries into the tissues and carry it towards the chest, where it drains back {2} the bloodstream. Without this drainage, fluid would build up and the tissues would swell. Before the fluid reaches the blood, it passes {3} one or more lymph nodes. These small, bean-shaped organs contain phagocytes, cells {4} destroy any germs carried in the lymph. The spleen, which lies on the left side of the abdomen, filters the blood and also removes old red cells. The thymus, situated in the chest behind the breastbone, helps T lymphocytes grow and multiply. It is most active in childhood, and {5} time it slowly shrinks. The tonsils guard the entrance of the throat. They help to switch on the immune system early. This is {6} they meet germs soon after these enter through the mouth or nose. In this {7} the body can recognise the same germ more quickly {8} it did the first time.",
  "gaps": [
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Đại từ quan hệ thay cho \"fluid\" làm chủ ngữ của \"leaks\": that/which."
   },
   {
    "ans": [
     "into",
     "to"
    ],
    "why": "Bạch huyết đổ trở lại vào máu: \"drains back into the bloodstream\"."
   },
   {
    "ans": [
     "through",
     "via"
    ],
    "why": "Dịch bạch huyết đi qua các hạch: \"passes through\"."
   },
   {
    "ans": [
     "that",
     "which"
    ],
    "why": "Đại từ quan hệ thay cho 'cells' làm chủ ngữ của 'destroy': that/which."
   },
   {
    "ans": [
     "over",
     "with"
    ],
    "why": "'Over time' = theo thời gian, dần dần; 'with time' cũng đúng nghĩa tương tự."
   },
   {
    "ans": [
     "because"
    ],
    "why": "'This is because ...' = đó là vì; amiđan gặp mầm bệnh ngay khi chúng vào miệng hoặc mũi."
   },
   {
    "ans": [
     "way",
     "manner"
    ],
    "why": "Cụm cố định \"In this way\" nghĩa là bằng cách này."
   },
   {
    "ans": [
     "than"
    ],
    "why": "So sánh hơn \"more quickly than it did the first time\"."
   }
  ],
  "unit": "M6"
 }
];
/* Key word transformations */
const KWT = [
 {
  "id": "kw-b1-a001",
  "lvl": "B1",
  "s1": "Someone has repaired the lift.",
  "key": "BEEN",
  "start": "The lift ___ repaired.",
  "ans": [
   "has been"
  ],
  "why": "Câu bị động thì hiện tại hoàn thành: has/have + been + V3."
 },
 {
  "id": "kw-b1-a002",
  "lvl": "B1",
  "s1": "'I will call you tomorrow,' Minh said to Lan.",
  "key": "CALL",
  "start": "Minh told Lan that he ___ her the next day.",
  "ans": [
   "would call",
   "was going to call"
  ],
  "why": "Câu tường thuật: will lùi thành would; tomorrow thành the next day."
 },
 {
  "id": "kw-b1-a003",
  "lvl": "B1",
  "s1": "Hurry up or you will miss the bus.",
  "key": "UNLESS",
  "start": "You will miss the bus ___ hurry up.",
  "ans": [
   "unless you"
  ],
  "why": "Unless = if ... not; câu điều kiện loại 1 'Hurry up or...' tương đương 'unless you hurry up'."
 },
 {
  "id": "kw-b1-a004",
  "lvl": "B1",
  "s1": "I'm sorry I don't have a bigger flat.",
  "key": "WISH",
  "start": "___ a bigger flat.",
  "ans": [
   "I wish I had",
   "I wish that I had",
   "I do wish I had",
   "I wish I owned"
  ],
  "why": "Wish + quá khứ đơn diễn tả điều ước trái với hiện tại."
 },
 {
  "id": "kw-b1-a005",
  "lvl": "B1",
  "s1": "A mechanic fixed Nam's bike yesterday.",
  "key": "HAD",
  "start": "Nam ___ by a mechanic yesterday.",
  "ans": [
   "had his bike fixed",
   "had his bicycle fixed",
   "had his bike repaired",
   "had his bicycle repaired"
  ],
  "why": "Thể sai khiến: have + tân ngữ + V3 (nhờ người khác làm)."
 },
 {
  "id": "kw-b1-a006",
  "lvl": "B1",
  "s1": "Anna lived in a village when she was young, but she doesn't now.",
  "key": "USED",
  "start": "Anna ___ in a village when she was young.",
  "ans": [
   "used to live"
  ],
  "why": "Used to + V diễn tả thói quen/trạng thái trong quá khứ không còn nữa."
 },
 {
  "id": "kw-b1-a007",
  "lvl": "B1",
  "s1": "Lan's bag is lighter than Minh's.",
  "key": "AS",
  "start": "Minh's bag is not ___ Lan's.",
  "ans": [
   "as light as",
   "so light as"
  ],
  "why": "So sánh bằng phủ định: not as + adj + as tương đương so sánh hơn của vế kia."
 },
 {
  "id": "kw-b1-a008",
  "lvl": "B1",
  "s1": "The soup was so hot that Nam couldn't eat it.",
  "key": "TOO",
  "start": "The soup was ___ Nam to eat.",
  "ans": [
   "too hot for",
   "much too hot for",
   "far too hot for"
  ],
  "why": "too + adj + for sb + to V = quá ... đến nỗi không thể."
 },
 {
  "id": "kw-b1-a009",
  "lvl": "B1",
  "s1": "It was such a boring film that we left early.",
  "key": "SO",
  "start": "The film ___ we left early.",
  "ans": [
   "was so boring that",
   "was so boring"
  ],
  "why": "so + adj + that; chuyển từ such a + adj + noun sang so + adj."
 },
 {
  "id": "kw-b1-a010",
  "lvl": "B1",
  "s1": "I'm sure Mr Park forgot the meeting.",
  "key": "MUST",
  "start": "Mr Park ___ the meeting.",
  "ans": [
   "must have forgotten",
   "must've forgotten"
  ],
  "why": "Must have + V3 diễn tả suy đoán chắc chắn về quá khứ."
 },
 {
  "id": "kw-b1-a011",
  "lvl": "B1",
  "s1": "I will look after your cat while you're away.",
  "key": "CARE",
  "start": "I will ___ of your cat while you're away.",
  "ans": [
   "take care",
   "take good care"
  ],
  "why": "Look after = take care of (cụm động từ/thành ngữ cùng nghĩa)."
 },
 {
  "id": "kw-b1-a012",
  "lvl": "B1",
  "s1": "Lan started learning English five years ago.",
  "key": "BEEN",
  "start": "Lan ___ English for five years.",
  "ans": [
   "has been learning",
   "has been studying"
  ],
  "why": "Hiện tại hoàn thành tiếp diễn với for + khoảng thời gian."
 },
 {
  "id": "kw-b1-a013",
  "lvl": "B1",
  "s1": "I like walking better than taking the bus.",
  "key": "PREFER",
  "start": "I ___ to taking the bus.",
  "ans": [
   "prefer walking",
   "much prefer walking",
   "really prefer walking"
  ],
  "why": "Cấu trúc prefer + V-ing + to + V-ing (thích ... hơn ...)."
 },
 {
  "id": "kw-b1-a014",
  "lvl": "B1",
  "s1": "I know a boy. His father is a pilot.",
  "key": "WHOSE",
  "start": "I know a boy ___ is a pilot.",
  "ans": [
   "whose father",
   "whose dad"
  ],
  "why": "Đại từ quan hệ sở hữu whose + danh từ."
 },
 {
  "id": "kw-b1-a015",
  "lvl": "B1",
  "s1": "Although it was raining, we went out.",
  "key": "SPITE",
  "start": "We went out ___ the rain.",
  "ans": [
   "in spite of"
  ],
  "why": "In spite of + danh từ diễn tả sự nhượng bộ (= although + mệnh đề)."
 },
 {
  "id": "kw-b1-a016",
  "lvl": "B1",
  "s1": "Minh took a taxi because he didn't want to be late.",
  "key": "ORDER",
  "start": "Minh took a taxi ___ late.",
  "ans": [
   "in order not to be"
  ],
  "why": "In order (not) to + V chỉ mục đích."
 },
 {
  "id": "kw-b1-a017",
  "lvl": "B1",
  "s1": "You can borrow my car if you drive carefully.",
  "key": "PROVIDED",
  "start": "You can borrow my car ___ carefully.",
  "ans": [
   "provided you drive",
   "provided that you drive"
  ],
  "why": "Provided (that) = if, với điều kiện; theo sau là mệnh đề."
 },
 {
  "id": "kw-b1-a018",
  "lvl": "B1",
  "s1": "As Lan studies more, her results get better.",
  "key": "MORE",
  "start": "The ___ studies, the better her results get.",
  "ans": [
   "more Lan"
  ],
  "why": "So sánh kép: The more ..., the better ..."
 },
 {
  "id": "kw-b1-a019",
  "lvl": "B1",
  "s1": "Nam should go to bed now.",
  "key": "TIME",
  "start": "It's ___ bed.",
  "ans": [
   "time Nam went to",
   "time that Nam went to",
   "high time Nam went to",
   "about time Nam went to"
  ],
  "why": "It's time + S + quá khứ đơn / It's time for sb to V: đã đến lúc làm gì."
 },
 {
  "id": "kw-b1-a020",
  "lvl": "B1",
  "s1": "People say the clinic is very old.",
  "key": "SAID",
  "start": "The clinic ___ very old.",
  "ans": [
   "is said to be"
  ],
  "why": "Bị động với động từ tường thuật: S + is said to + V."
 },
 {
  "id": "kw-b2-a001",
  "lvl": "B2",
  "s1": "I didn't take the umbrella, so I got wet.",
  "key": "HAD",
  "start": "If I ___ the umbrella, I wouldn't have got wet.",
  "ans": [
   "had taken"
  ],
  "why": "Điều kiện loại 3: If + had + V3, would have + V3."
 },
 {
  "id": "kw-b2-a002",
  "lvl": "B2",
  "s1": "Anna isn't fit now because she didn't exercise last year.",
  "key": "WOULD",
  "start": "If Anna had exercised last year, she ___ fit now.",
  "ans": [
   "would be",
   "would now be"
  ],
  "why": "Điều kiện hỗn hợp: If + had V3 (quá khứ), would + V (hiện tại)."
 },
 {
  "id": "kw-b2-a003",
  "lvl": "B2",
  "s1": "I regret not saving more money.",
  "key": "ONLY",
  "start": "If ___ more money.",
  "ans": [
   "only I had saved",
   "only I'd saved",
   "only I had saved up",
   "only I'd saved up"
  ],
  "why": "If only + had V3 diễn tả sự tiếc nuối về quá khứ."
 },
 {
  "id": "kw-b2-a004",
  "lvl": "B2",
  "s1": "'Where did you park the ambulance?' the manager asked Nam.",
  "key": "WHERE",
  "start": "The manager asked Nam ___ the ambulance.",
  "ans": [
   "where he had parked",
   "where he parked",
   "where he'd parked"
  ],
  "why": "Câu hỏi tường thuật: từ để hỏi + S + V, lùi thì, không đảo ngữ."
 },
 {
  "id": "kw-b2-a005",
  "lvl": "B2",
  "s1": "'Why don't we hold the meeting online?' said Lan.",
  "key": "SUGGESTED",
  "start": "Lan ___ the meeting online.",
  "ans": [
   "suggested holding",
   "suggested that we hold",
   "suggested we hold",
   "suggested that we should hold",
   "suggested we should hold",
   "suggested having"
  ],
  "why": "Suggest + V-ing hoặc suggest (that) + S + (should) V."
 },
 {
  "id": "kw-b2-a006",
  "lvl": "B2",
  "s1": "They must repair the bridge before winter.",
  "key": "BE",
  "start": "The bridge ___ repaired before winter.",
  "ans": [
   "must be",
   "has to be",
   "needs to be",
   "has got to be"
  ],
  "why": "Bị động với modal: modal + be + V3."
 },
 {
  "id": "kw-b2-a007",
  "lvl": "B2",
  "s1": "Minh finds working night shifts normal now.",
  "key": "USED",
  "start": "Minh ___ working night shifts.",
  "ans": [
   "is used to",
   "is now used to",
   "has got used to",
   "has become used to",
   "has grown used to"
  ],
  "why": "Be used to + V-ing: đã quen với việc gì."
 },
 {
  "id": "kw-b2-a008",
  "lvl": "B2",
  "s1": "The ward was so noisy that Anna couldn't sleep.",
  "key": "ENOUGH",
  "start": "The ward wasn't ___ Anna to sleep.",
  "ans": [
   "quiet enough for"
  ],
  "why": "Not + adj trái nghĩa + enough for sb to V; enough đứng sau tính từ."
 },
 {
  "id": "kw-b2-a009",
  "lvl": "B2",
  "s1": "The lecture was so long that many students fell asleep.",
  "key": "SUCH",
  "start": "It was ___ that many students fell asleep.",
  "ans": [
   "such a long lecture",
   "such a lengthy lecture"
  ],
  "why": "Cấu trúc such + a/an + adj + danh từ + that (đến nỗi)."
 },
 {
  "id": "kw-b2-a010",
  "lvl": "B2",
  "s1": "It was a pity that Nam didn't ask for help.",
  "key": "SHOULD",
  "start": "Nam ___ for help.",
  "ans": [
   "should have asked",
   "should've asked"
  ],
  "why": "Should have + V3: lẽ ra nên làm nhưng đã không làm."
 },
 {
  "id": "kw-b2-a011",
  "lvl": "B2",
  "s1": "They postponed the meeting until Friday.",
  "key": "OFF",
  "start": "They ___ the meeting until Friday.",
  "ans": [
   "put off"
  ],
  "why": "Cụm động từ put off = hoãn lại; tân ngữ 'the meeting' đứng sau cụm động từ nên viết 'put off'."
 },
 {
  "id": "kw-b2-a012",
  "lvl": "B2",
  "s1": "Nam invented an excuse for being late.",
  "key": "UP",
  "start": "Nam ___ an excuse for being late.",
  "ans": [
   "made up",
   "came up with",
   "thought up",
   "dreamed up",
   "dreamt up",
   "cooked up"
  ],
  "why": "Make up = bịa ra, tạo ra (một lời bào chữa)."
 },
 {
  "id": "kw-b2-a013",
  "lvl": "B2",
  "s1": "Mr Park regrets that he didn't tell the staff about the changes.",
  "key": "NOT",
  "start": "Mr Park regrets ___ the staff about the changes.",
  "ans": [
   "not telling",
   "not having told"
  ],
  "why": "Regret + V-ing / not + V-ing nói về việc đã (không) làm trong quá khứ."
 },
 {
  "id": "kw-b2-a014",
  "lvl": "B2",
  "s1": "Don't forget to lock the pharmacy door.",
  "key": "REMEMBER",
  "start": "Please ___ the pharmacy door.",
  "ans": [
   "remember to lock",
   "do remember to lock",
   "always remember to lock"
  ],
  "why": "Remember to V = nhớ phải làm (đối lập với forget to V)."
 },
 {
  "id": "kw-b2-a015",
  "lvl": "B2",
  "s1": "The clinic where Lan works is closing.",
  "key": "WHICH",
  "start": "The clinic ___ is closing.",
  "ans": [
   "in which Lan works",
   "which Lan works in",
   "at which Lan works",
   "which Lan works at"
  ],
  "why": "Mệnh đề quan hệ có giới từ: in which = where."
 },
 {
  "id": "kw-b2-a016",
  "lvl": "B2",
  "s1": "Despite feeling ill, Nam went to work.",
  "key": "ALTHOUGH",
  "start": "Nam went to work ___ ill.",
  "ans": [
   "although he felt",
   "although he was feeling",
   "although he was"
  ],
  "why": "Although + mệnh đề thay cho despite + V-ing."
 },
 {
  "id": "kw-b2-a017",
  "lvl": "B2",
  "s1": "Lan wrote everything down because she didn't want to forget it.",
  "key": "AS",
  "start": "Lan wrote everything down ___ it.",
  "ans": [
   "so as not to forget",
   "so as to not forget"
  ],
  "why": "So as not to + V chỉ mục đích phủ định."
 },
 {
  "id": "kw-b2-a018",
  "lvl": "B2",
  "s1": "If you don't book now, you won't get a seat.",
  "key": "UNLESS",
  "start": "You won't get a seat ___ now.",
  "ans": [
   "unless you book"
  ],
  "why": "Unless = if ... not, đi với động từ khẳng định."
 },
 {
  "id": "kw-b2-a019",
  "lvl": "B2",
  "s1": "I'd prefer you to call me after lunch.",
  "key": "RATHER",
  "start": "I'd ___ me after lunch.",
  "ans": [
   "rather you called",
   "rather that you called",
   "rather you phoned",
   "rather you rang"
  ],
  "why": "Would rather + S + quá khứ đơn: muốn ai đó làm gì."
 },
 {
  "id": "kw-b2-a020",
  "lvl": "B2",
  "s1": "Nothing is more important than your health.",
  "key": "MOST",
  "start": "Your health is ___ thing.",
  "ans": [
   "the most important",
   "by far the most important",
   "easily the most important"
  ],
  "why": "So sánh nhất: the most + adj dài."
 },
 {
  "id": "kw-b2-a021",
  "lvl": "B2",
  "s1": "I'm sorry I didn't revise more for the exam.",
  "key": "WISH",
  "start": "I ___ revised more for the exam.",
  "ans": [
   "wish I had",
   "wish I'd",
   "wish that I had",
   "wish that I'd",
   "do wish I had",
   "really wish I had"
  ],
  "why": "Wish + had V3 diễn tả sự tiếc nuối về quá khứ."
 },
 {
  "id": "kw-b2-a022",
  "lvl": "B2",
  "s1": "An optician is going to test Minh's eyes tomorrow.",
  "key": "HAVING",
  "start": "Minh ___ tested tomorrow.",
  "ans": [
   "is having his eyes",
   "will be having his eyes"
  ],
  "why": "Thể sai khiến thì hiện tại tiếp diễn chỉ kế hoạch: is having sth V3."
 },
 {
  "id": "kw-b2-a023",
  "lvl": "B2",
  "s1": "'I didn't take the keys,' said Nam.",
  "key": "DENIED",
  "start": "Nam ___ the keys.",
  "ans": [
   "denied taking",
   "denied having taken",
   "denied he took",
   "denied that he took",
   "denied he had taken",
   "denied that he had taken",
   "denied he'd taken"
  ],
  "why": "Deny + V-ing / having V3: phủ nhận đã làm gì."
 },
 {
  "id": "kw-b2-a024",
  "lvl": "B2",
  "s1": "Minh last saw his cousin five years ago.",
  "key": "SEEN",
  "start": "Minh ___ his cousin for five years.",
  "ans": [
   "hasn't seen",
   "has not seen"
  ],
  "why": "Hiện tại hoàn thành phủ định với for: hasn't + V3 for + khoảng thời gian."
 },
 {
  "id": "kw-b2-a025",
  "lvl": "B2",
  "s1": "People think Anna won the prize last year.",
  "key": "THOUGHT",
  "start": "Anna ___ the prize last year.",
  "ans": [
   "is thought to have won"
  ],
  "why": "Bị động với động từ tường thuật + hành động quá khứ: is thought to have + V3 (thay cho 'People think Anna won'). Đổi để tránh 'is thought to win' mơ hồ về thì tương lai."
 },
 {
  "id": "kw-c1-a001",
  "lvl": "C1",
  "s1": "As soon as Lan sat down, the phone rang.",
  "key": "SOONER",
  "start": "No ___ than the phone rang.",
  "ans": [
   "sooner had Lan sat down"
  ],
  "why": "No sooner + had + S + V3 ... than: đảo ngữ sau trạng từ phủ định."
 },
 {
  "id": "kw-c1-a002",
  "lvl": "C1",
  "s1": "We had only just left when it began to snow.",
  "key": "HARDLY",
  "start": "___ when it began to snow.",
  "ans": [
   "Hardly had we left"
  ],
  "why": "Hardly + had + S + V3 ... when: đảo ngữ."
 },
 {
  "id": "kw-c1-a003",
  "lvl": "C1",
  "s1": "The treatment was cheap and also effective.",
  "key": "ONLY",
  "start": "Not ___ cheap but also effective.",
  "ans": [
   "only was the treatment"
  ],
  "why": "Not only đứng đầu câu thì đảo trợ động từ/be trước chủ ngữ."
 },
 {
  "id": "kw-c1-a004",
  "lvl": "C1",
  "s1": "You must never open this door.",
  "key": "CIRCUMSTANCES",
  "start": "Under no ___ open this door.",
  "ans": [
   "circumstances must you",
   "circumstances are you to",
   "circumstances must you ever"
  ],
  "why": "Under no circumstances đứng đầu câu gây đảo ngữ: must you + V."
 },
 {
  "id": "kw-c1-a005",
  "lvl": "C1",
  "s1": "Anna did not realise the danger.",
  "key": "LITTLE",
  "start": "___ the danger.",
  "ans": [
   "Little did Anna realise",
   "Little did Anna realize"
  ],
  "why": "Little ở đầu câu mang nghĩa phủ định, đảo trợ động từ: Little did + S + V."
 },
 {
  "id": "kw-c1-a006",
  "lvl": "C1",
  "s1": "Minh's rudeness annoyed me most.",
  "key": "WHAT",
  "start": "___ was Minh's rudeness.",
  "ans": [
   "What annoyed me most",
   "What annoyed me the most",
   "What most annoyed me"
  ],
  "why": "Câu chẻ (cleft) với What: What + V ... + be + danh từ."
 },
 {
  "id": "kw-c1-a007",
  "lvl": "C1",
  "s1": "Lan only wanted a quiet room.",
  "key": "ALL",
  "start": "___ was a quiet room.",
  "ans": [
   "All Lan wanted",
   "All that Lan wanted"
  ],
  "why": "Cấu trúc All + (that) S + V + be: nhấn mạnh 'chỉ'."
 },
 {
  "id": "kw-c1-a008",
  "lvl": "C1",
  "s1": "After she had finished her shift, Anna went home.",
  "key": "HAVING",
  "start": "___ her shift, Anna went home.",
  "ans": [
   "Having finished",
   "Having completed"
  ],
  "why": "Mệnh đề phân từ hoàn thành: Having + V3 diễn tả hành động xảy ra trước."
 },
 {
  "id": "kw-c1-a009",
  "lvl": "C1",
  "s1": "As she didn't know the way, Lan asked a passer-by.",
  "key": "KNOWING",
  "start": "___ the way, Lan asked a passer-by.",
  "ans": [
   "Not knowing"
  ],
  "why": "Mệnh đề phân từ phủ định: Not + V-ing chỉ lý do."
 },
 {
  "id": "kw-c1-a010",
  "lvl": "C1",
  "s1": "It annoys me that Nam keeps interrupting; I'd like him to stop.",
  "key": "WOULD",
  "start": "I wish ___ stop interrupting.",
  "ans": [
   "Nam would",
   "that Nam would"
  ],
  "why": "Wish + S + would + V diễn tả sự bực bội về hành vi hiện tại của người khác."
 },
 {
  "id": "kw-c1-a011",
  "lvl": "C1",
  "s1": "Although the course was expensive, it was worth it.",
  "key": "AS",
  "start": "Expensive ___, it was worth it.",
  "ans": [
   "as the course was"
  ],
  "why": "Đảo ngữ nhượng bộ: Adj + as + S + be, ... = although."
 },
 {
  "id": "kw-c1-a012",
  "lvl": "C1",
  "s1": "If the clinic had not called, I would have missed the appointment.",
  "key": "HAD",
  "start": "___ called, I would have missed the appointment.",
  "ans": [
   "Had the clinic not"
  ],
  "why": "Điều kiện loại 3 đảo ngữ: Had + S + (not) + V3, ..."
 },
 {
  "id": "kw-c1-a013",
  "lvl": "C1",
  "s1": "If you need more help, contact us.",
  "key": "SHOULD",
  "start": "___ more help, contact us.",
  "ans": [
   "Should you need",
   "Should you require",
   "Should you ever need"
  ],
  "why": "Điều kiện đảo ngữ với should: Should + S + V, ..."
 },
 {
  "id": "kw-c1-a014",
  "lvl": "C1",
  "s1": "It is believed that the storm damaged the roof.",
  "key": "BELIEVED",
  "start": "The storm ___ damaged the roof.",
  "ans": [
   "is believed to have",
   "is widely believed to have",
   "is generally believed to have"
  ],
  "why": "Bị động tường thuật với quá khứ: is believed to have + V3."
 },
 {
  "id": "kw-c1-a015",
  "lvl": "C1",
  "s1": "There is no point in arguing with Mr Park.",
  "key": "USE",
  "start": "It's no ___ with Mr Park.",
  "ans": [
   "use arguing"
  ],
  "why": "It's no use + V-ing = vô ích khi làm gì."
 },
 {
  "id": "kw-b1-b001",
  "lvl": "B1",
  "s1": "The nurse took my temperature this morning.",
  "key": "WAS",
  "start": "My temperature ___ the nurse this morning.",
  "ans": [
   "was taken by"
  ],
  "why": "Câu bị động quá khứ đơn: was + V3 + by + tác nhân."
 },
 {
  "id": "kw-b1-b002",
  "lvl": "B1",
  "s1": "\"I will phone you tomorrow,\" the doctor said to Lan.",
  "key": "TOLD",
  "start": "The doctor ___ would phone her the next day.",
  "ans": [
   "told Lan she",
   "told Lan that she",
   "told her she",
   "told her that she"
  ],
  "why": "Câu tường thuật: told + người nghe + (that) + mệnh đề lùi thì (will -> would, tomorrow -> the next day)."
 },
 {
  "id": "kw-b1-b003",
  "lvl": "B1",
  "s1": "Take a rest, or you will feel worse.",
  "key": "UNLESS",
  "start": "You will feel worse ___ a rest.",
  "ans": [
   "unless you take",
   "unless you have"
  ],
  "why": "Câu điều kiện loại 1 với unless = if ... not: unless + S + V hiện tại."
 },
 {
  "id": "kw-b1-b004",
  "lvl": "B1",
  "s1": "I am sorry I don't live near the clinic.",
  "key": "WISH",
  "start": "I ___ near the clinic.",
  "ans": [
   "wish I lived",
   "wish that I lived"
  ],
  "why": "Wish + quá khứ đơn diễn tả mong ước trái với hiện tại."
 },
 {
  "id": "kw-b1-b005",
  "lvl": "B1",
  "s1": "The soup was so hot that Nam couldn't eat it.",
  "key": "TOO",
  "start": "The soup was ___ Nam to eat.",
  "ans": [
   "too hot for"
  ],
  "why": "Cấu trúc too + adj + for + người + to V (quá ... để không thể)."
 },
 {
  "id": "kw-b1-b006",
  "lvl": "B1",
  "s1": "Anna played tennis when she was young, but she doesn't now.",
  "key": "USED",
  "start": "Anna ___ tennis when she was young.",
  "ans": [
   "used to play"
  ],
  "why": "Used to + V nguyên mẫu diễn tả thói quen trong quá khứ không còn nữa."
 },
 {
  "id": "kw-b1-b007",
  "lvl": "B1",
  "s1": "No other doctor in the clinic is as kind as Dr Hoa.",
  "key": "KINDEST",
  "start": "Dr Hoa is ___ doctor in the clinic.",
  "ans": [
   "the kindest",
   "by far the kindest"
  ],
  "why": "So sánh nhất: the + tính từ ngắn + -est."
 },
 {
  "id": "kw-b1-b008",
  "lvl": "B1",
  "s1": "A dentist checked my teeth yesterday.",
  "key": "HAD",
  "start": "I ___ checked yesterday.",
  "ans": [
   "had my teeth"
  ],
  "why": "Thể truyền khiến: have + tân ngữ + V3 (nhờ người khác làm)."
 },
 {
  "id": "kw-b1-b009",
  "lvl": "B1",
  "s1": "It was such a long wait that we went home.",
  "key": "SO",
  "start": "The wait was ___ we went home.",
  "ans": [
   "so long that",
   "so long"
  ],
  "why": "So + adj + that diễn tả kết quả; such + a + adj + N tương đương."
 },
 {
  "id": "kw-b1-b010",
  "lvl": "B1",
  "s1": "The receptionist asked me to complete this form.",
  "key": "FILL",
  "start": "The receptionist asked me to ___ this form.",
  "ans": [
   "fill in",
   "fill out"
  ],
  "why": "Cụm động từ fill in / fill out = điền vào (biểu mẫu)."
 },
 {
  "id": "kw-b1-b011",
  "lvl": "B1",
  "s1": "Lan started learning English three years ago.",
  "key": "BEEN",
  "start": "Lan ___ English for three years.",
  "ans": [
   "has been learning",
   "'s been learning"
  ],
  "why": "Hiện tại hoàn thành tiếp diễn: has been + V-ing với for + khoảng thời gian."
 },
 {
  "id": "kw-b1-b012",
  "lvl": "B1",
  "s1": "We walked to the hospital although it was raining.",
  "key": "DESPITE",
  "start": "We walked to the hospital ___.",
  "ans": [
   "despite the rain",
   "despite it raining"
  ],
  "why": "Despite + danh từ/cụm danh từ diễn tả sự nhượng bộ (although + mệnh đề)."
 },
 {
  "id": "kw-b1-b013",
  "lvl": "B1",
  "s1": "Minh went to the pharmacy because he wanted to buy cough medicine.",
  "key": "ORDER",
  "start": "Minh went to the pharmacy ___ cough medicine.",
  "ans": [
   "in order to buy",
   "in order to purchase",
   "in order to get"
  ],
  "why": "Chỉ mục đích: in order to + V nguyên mẫu."
 },
 {
  "id": "kw-b1-b014",
  "lvl": "B1",
  "s1": "I like tea more than coffee.",
  "key": "PREFER",
  "start": "I ___ coffee.",
  "ans": [
   "prefer tea to",
   "prefer drinking tea to"
  ],
  "why": "Prefer A to B = thích A hơn B."
 },
 {
  "id": "kw-b1-b015",
  "lvl": "B1",
  "s1": "You can't use phones in the waiting room.",
  "key": "ALLOWED",
  "start": "Phones ___ in the waiting room.",
  "ans": [
   "are not allowed",
   "aren't allowed",
   "aren't allowed to be used"
  ],
  "why": "Bị động với allowed: are not allowed thay cho can't."
 },
 {
  "id": "kw-b1-b016",
  "lvl": "B1",
  "s1": "Nam finds working night shifts normal now.",
  "key": "USED",
  "start": "Nam ___ working night shifts.",
  "ans": [
   "is used to",
   "is now used to",
   "has got used to",
   "has become used to",
   "has gotten used to",
   "has now got used to",
   "has now gotten used to",
   "'s used to"
  ],
  "why": "Be/get used to + V-ing = quen với việc gì."
 },
 {
  "id": "kw-b1-b017",
  "lvl": "B1",
  "s1": "I have never visited a hospital this big before.",
  "key": "FIRST",
  "start": "This is the ___ visited a hospital this big.",
  "ans": [
   "first time I have",
   "first time I've",
   "first time that I have",
   "first time that I've"
  ],
  "why": "This is the first time + hiện tại hoàn thành."
 },
 {
  "id": "kw-b1-b018",
  "lvl": "B1",
  "s1": "The woman gave me the injection. She is a nurse.",
  "key": "WHO",
  "start": "The woman ___ me the injection is a nurse.",
  "ans": [
   "who gave"
  ],
  "why": "Mệnh đề quan hệ xác định: who thay cho người làm chủ ngữ."
 },
 {
  "id": "kw-b1-b019",
  "lvl": "B1",
  "s1": "The last time Anna saw a doctor was in May.",
  "key": "SINCE",
  "start": "Anna hasn't seen a doctor ___.",
  "ans": [
   "since May"
  ],
  "why": "Hiện tại hoàn thành phủ định + since + mốc thời gian."
 },
 {
  "id": "kw-b1-b020",
  "lvl": "B1",
  "s1": "It is not necessary to book an appointment.",
  "key": "NEED",
  "start": "You ___ an appointment.",
  "ans": [
   "don't need to book",
   "do not need to book",
   "need not book",
   "do not need to make",
   "don't need to make",
   "need not make"
  ],
  "why": "Don't need to + V = không cần phải (thay cho not necessary)."
 },
 {
  "id": "kw-b2-b001",
  "lvl": "B2",
  "s1": "People believe the new vaccine is safe.",
  "key": "BELIEVED",
  "start": "The new vaccine ___ safe.",
  "ans": [
   "is believed to be",
   "is widely believed to be",
   "is generally believed to be",
   "is commonly believed to be"
  ],
  "why": "Bị động tường thuật: S + is believed + to V."
 },
 {
  "id": "kw-b2-b002",
  "lvl": "B2",
  "s1": "Because I didn't take the antibiotics, I recovered slowly.",
  "key": "HAVE",
  "start": "If I had taken the antibiotics, I ___ recovered so slowly.",
  "ans": [
   "would not have",
   "wouldn't have"
  ],
  "why": "Điều kiện loại 3: if + had V3, would (not) have V3."
 },
 {
  "id": "kw-b2-b003",
  "lvl": "B2",
  "s1": "Sara isn't a doctor because she didn't study medicine.",
  "key": "WOULD",
  "start": "If Sara had studied medicine, she ___ a doctor now.",
  "ans": [
   "would be",
   "would now be"
  ],
  "why": "Điều kiện hỗn hợp: if + had V3 (quá khứ), would + V (hiện tại, có 'now')."
 },
 {
  "id": "kw-b2-b004",
  "lvl": "B2",
  "s1": "I regret not telling the nurse about my allergy.",
  "key": "WISH",
  "start": "I ___ the nurse about my allergy.",
  "ans": [
   "wish I had told",
   "wish I'd told",
   "wish that I had told",
   "wish that I'd told"
  ],
  "why": "Wish + quá khứ hoàn thành diễn tả tiếc nuối về quá khứ."
 },
 {
  "id": "kw-b2-b005",
  "lvl": "B2",
  "s1": "It was a mistake for you to ignore the doctor's advice.",
  "key": "SHOULD",
  "start": "You ___ ignored the doctor's advice.",
  "ans": [
   "should not have"
  ],
  "why": "Should not have + V3 = lẽ ra đã không nên (chỉ trích việc đã xảy ra)."
 },
 {
  "id": "kw-b2-b006",
  "lvl": "B2",
  "s1": "I'm sure the patient fell asleep during the lecture.",
  "key": "MUST",
  "start": "The patient ___ asleep during the lecture.",
  "ans": [
   "must have fallen",
   "must've fallen"
  ],
  "why": "Must have + V3 = chắc hẳn đã (suy luận chắc chắn về quá khứ)."
 },
 {
  "id": "kw-b2-b007",
  "lvl": "B2",
  "s1": "It is pointless to complain about the waiting time.",
  "key": "POINT",
  "start": "There ___ complaining about the waiting time.",
  "ans": [
   "is no point in",
   "is not any point in",
   "isn't any point in",
   "'s no point in"
  ],
  "why": "There is no point in + V-ing = vô ích khi làm gì."
 },
 {
  "id": "kw-b2-b008",
  "lvl": "B2",
  "s1": "If you exercise more, you will feel healthier.",
  "key": "MORE",
  "start": "The ___, the healthier you will feel.",
  "ans": [
   "more you exercise",
   "more exercise you do",
   "more exercise you take"
  ],
  "why": "So sánh kép: the more ..., the + so sánh hơn."
 },
 {
  "id": "kw-b2-b009",
  "lvl": "B2",
  "s1": "The flight was cancelled because of the storm.",
  "key": "DUE",
  "start": "The flight was cancelled ___ the storm.",
  "ans": [
   "due to"
  ],
  "why": "Due to + danh từ = vì, do (tương đương because of)."
 },
 {
  "id": "kw-b2-b010",
  "lvl": "B2",
  "s1": "The man I spoke to was a surgeon.",
  "key": "WHOM",
  "start": "The man ___ I spoke was a surgeon.",
  "ans": [
   "to whom"
  ],
  "why": "Giới từ đứng trước đại từ quan hệ: to whom."
 },
 {
  "id": "kw-b2-b011",
  "lvl": "B2",
  "s1": "\"Why don't you see a specialist?\" Anna said to me.",
  "key": "SUGGESTED",
  "start": "Anna ___ a specialist.",
  "ans": [
   "suggested I see",
   "suggested that I see",
   "suggested I should see",
   "suggested that I should see",
   "suggested I go and see",
   "suggested my seeing"
  ],
  "why": "Suggest + (that) S (should) V nguyên mẫu, hoặc suggest + V-ing."
 },
 {
  "id": "kw-b2-b012",
  "lvl": "B2",
  "s1": "\"I forgot to sterilise the tools,\" Minh said.",
  "key": "ADMITTED",
  "start": "Minh ___ sterilise the tools.",
  "ans": [
   "admitted forgetting to",
   "admitted having forgotten to",
   "admitted he forgot to",
   "admitted he had forgotten to",
   "admitted that he forgot to",
   "admitted he'd forgotten to",
   "admitted that he'd forgotten to",
   "admitted to forgetting to",
   "admitted to having forgotten to"
  ],
  "why": "Động từ tường thuật admit + V-ing / having V3 hoặc mệnh đề."
 },
 {
  "id": "kw-b2-b013",
  "lvl": "B2",
  "s1": "You can leave the ward as long as a nurse goes with you.",
  "key": "PROVIDED",
  "start": "You can leave the ward ___ goes with you.",
  "ans": [
   "provided a nurse",
   "provided that a nurse"
  ],
  "why": "Provided (that) = miễn là, dùng như điều kiện."
 },
 {
  "id": "kw-b2-b014",
  "lvl": "B2",
  "s1": "I like walking better than taking the bus.",
  "key": "PREFER",
  "start": "I ___ to taking the bus.",
  "ans": [
   "prefer walking",
   "much prefer walking"
  ],
  "why": "Cấu trúc prefer + V-ing + to + V-ing."
 },
 {
  "id": "kw-b2-b015",
  "lvl": "B2",
  "s1": "The ward is too small for twelve beds.",
  "key": "ENOUGH",
  "start": "The ward isn't ___ twelve beds.",
  "ans": [
   "big enough for",
   "large enough for",
   "spacious enough for",
   "roomy enough for",
   "big enough to hold",
   "large enough to hold",
   "big enough to fit",
   "large enough to fit",
   "big enough to accommodate"
  ],
  "why": "Not + adj + enough for = không đủ ... cho, tương đương too small."
 },
 {
  "id": "kw-b2-b016",
  "lvl": "B2",
  "s1": "Green Valley Clinic pays a company to wash its windows every month.",
  "key": "HAS",
  "start": "Green Valley Clinic ___ washed every month.",
  "ans": [
   "has its windows",
   "has the windows"
  ],
  "why": "Thể truyền khiến: have + tân ngữ + V3."
 },
 {
  "id": "kw-b2-b017",
  "lvl": "B2",
  "s1": "The team had to cancel the health fair because of rain.",
  "key": "CALLED",
  "start": "The health fair ___ because of rain.",
  "ans": [
   "was called off",
   "had to be called off"
  ],
  "why": "Cụm động từ bị động: call off = hủy bỏ."
 },
 {
  "id": "kw-b2-b018",
  "lvl": "B2",
  "s1": "Although he felt dizzy, Nam finished the shift.",
  "key": "SPITE",
  "start": "Nam finished the shift ___ dizzy.",
  "ans": [
   "in spite of feeling",
   "in spite of being"
  ],
  "why": "In spite of + V-ing / danh từ diễn tả nhượng bộ."
 },
 {
  "id": "kw-b2-b019",
  "lvl": "B2",
  "s1": "I'm sorry that I didn't bring my insurance card.",
  "key": "REGRET",
  "start": "I ___ my insurance card.",
  "ans": [
   "regret not bringing",
   "regret not having brought",
   "regret that I didn't bring",
   "regret I didn't bring",
   "regret I hadn't brought",
   "regret that I hadn't brought"
  ],
  "why": "Regret + (not) V-ing = hối tiếc việc đã (không) làm."
 },
 {
  "id": "kw-b2-b020",
  "lvl": "B2",
  "s1": "\"How long have you had this cough?\" the doctor asked Mr Park.",
  "key": "HOW",
  "start": "The doctor asked Mr Park ___ this cough.",
  "ans": [
   "how long he had had",
   "how long he'd had",
   "how long he has had",
   "how long he's had"
  ],
  "why": "Câu hỏi tường thuật: từ để hỏi + chủ ngữ + động từ lùi thì (have had -> had had)."
 },
 {
  "id": "kw-b2-b021",
  "lvl": "B2",
  "s1": "You really should start exercising now.",
  "key": "TIME",
  "start": "___ you started exercising.",
  "ans": [
   "It's high time",
   "It is high time",
   "It's about time",
   "It is about time",
   "It's time",
   "It is time",
   "It's high time that",
   "It is high time that",
   "It's about time that",
   "It's time that",
   "It's past time",
   "It is past time"
  ],
  "why": "It's (high/about) time + S + V quá khứ đơn = đã đến lúc ai đó phải làm gì (nghĩa là should ... now)."
 },
 {
  "id": "kw-b2-b022",
  "lvl": "B2",
  "s1": "The lift was out of order, and we used the stairs.",
  "key": "SO",
  "start": "The lift was out of order, ___ the stairs.",
  "ans": [
   "so we used",
   "so we took"
  ],
  "why": "So + mệnh đề chỉ kết quả."
 },
 {
  "id": "kw-b2-b023",
  "lvl": "B2",
  "s1": "Lan doesn't smoke and Nam doesn't either.",
  "key": "NEITHER",
  "start": "Lan doesn't smoke and ___ Nam.",
  "ans": [
   "neither does"
  ],
  "why": "Neither + trợ động từ + chủ ngữ = ... cũng không (đảo ngữ)."
 },
 {
  "id": "kw-b2-b024",
  "lvl": "B2",
  "s1": "Nobody in the team worked harder than Hoa.",
  "key": "HARDEST",
  "start": "Hoa ___ in the team.",
  "ans": [
   "worked the hardest",
   "worked hardest",
   "was the hardest worker",
   "was the hardest working"
  ],
  "why": "So sánh nhất của trạng từ: the hardest."
 },
 {
  "id": "kw-b2-b025",
  "lvl": "B2",
  "s1": "The nurse didn't let the visitors enter the ward.",
  "key": "ALLOWED",
  "start": "The visitors ___ enter the ward.",
  "ans": [
   "weren't allowed to",
   "were not allowed to"
  ],
  "why": "Let sb do -> be allowed to (bị động)."
 },
 {
  "id": "kw-c1-b001",
  "lvl": "C1",
  "s1": "She had barely sat down when the phone rang.",
  "key": "SOONER",
  "start": "No ___ sat down than the phone rang.",
  "ans": [
   "sooner had she"
  ],
  "why": "Đảo ngữ: No sooner had + S + V3 + than."
 },
 {
  "id": "kw-c1-b002",
  "lvl": "C1",
  "s1": "The clinic was not only understaffed but also short of supplies.",
  "key": "ONLY",
  "start": "Not ___ the clinic understaffed but also short of supplies.",
  "ans": [
   "only was"
  ],
  "why": "Đảo ngữ sau Not only: Not only + was + S."
 },
 {
  "id": "kw-c1-b003",
  "lvl": "C1",
  "s1": "Patients' records must never be shared.",
  "key": "CIRCUMSTANCES",
  "start": "Under no ___ patients' records be shared.",
  "ans": [
   "circumstances must",
   "circumstances should",
   "circumstances may",
   "circumstances can"
  ],
  "why": "Under no circumstances + trợ động từ + S (đảo ngữ); ở đây mệnh đề bị động nên 'records' là chủ ngữ."
 },
 {
  "id": "kw-c1-b004",
  "lvl": "C1",
  "s1": "The long waiting time annoyed Lan most.",
  "key": "WHAT",
  "start": "The long waiting time was ___ Lan most.",
  "ans": [
   "what annoyed"
  ],
  "why": "Mệnh đề danh từ với what (= the thing that): was what annoyed Lan most."
 },
 {
  "id": "kw-c1-b005",
  "lvl": "C1",
  "s1": "As she had worked a night shift, Anna was exhausted.",
  "key": "HAVING",
  "start": "___ a night shift, Anna was exhausted.",
  "ans": [
   "Having worked",
   "Having done"
  ],
  "why": "Mệnh đề phân từ hoàn thành: Having + V3 chỉ hành động xảy ra trước."
 },
 {
  "id": "kw-c1-b006",
  "lvl": "C1",
  "s1": "\"You must see a specialist,\" the doctor said to Minh firmly.",
  "key": "INSISTED",
  "start": "The doctor ___ a specialist.",
  "ans": [
   "insisted that Minh see",
   "insisted Minh see",
   "insisted Minh should see",
   "insisted that Minh should see",
   "insisted on Minh seeing",
   "insisted Minh must see",
   "insisted that Minh must see",
   "insisted Minh had to see"
  ],
  "why": "Insist (that) S (should) V nguyên mẫu (giả định cách) hoặc insist on + V-ing."
 },
 {
  "id": "kw-c1-b007",
  "lvl": "C1",
  "s1": "If the surgeon hadn't intervened, the patient would be dead now.",
  "key": "HAD",
  "start": "___ intervened, the patient would be dead now.",
  "ans": [
   "Had the surgeon not"
  ],
  "why": "Đảo ngữ điều kiện loại 3: Had + S + (not) + V3."
 },
 {
  "id": "kw-c1-b008",
  "lvl": "C1",
  "s1": "I'd prefer you not to smoke in the clinic grounds.",
  "key": "RATHER",
  "start": "I'd ___ in the clinic grounds.",
  "ans": [
   "rather you didn't smoke",
   "rather you did not smoke",
   "much rather you didn't smoke",
   "rather you not smoke"
  ],
  "why": "Would rather + S + V quá khứ đơn: muốn người khác làm/không làm gì ở hiện tại."
 },
 {
  "id": "kw-c1-b009",
  "lvl": "C1",
  "s1": "Anna did not realise how serious the infection was.",
  "key": "LITTLE",
  "start": "___ how serious the infection was.",
  "ans": [
   "Little did Anna realise",
   "Little did Anna realize",
   "Little did Anna know"
  ],
  "why": "Đảo ngữ với trạng từ phủ định little: Little did + S + V nguyên mẫu."
 },
 {
  "id": "kw-c1-b010",
  "lvl": "C1",
  "s1": "Experts expect the number of patients to rise.",
  "key": "EXPECTED",
  "start": "The number of patients ___ rise.",
  "ans": [
   "is expected to",
   "is expected by experts to"
  ],
  "why": "Bị động: be expected to + V."
 },
 {
  "id": "kw-c1-b011",
  "lvl": "C1",
  "s1": "Although the task was difficult, the team completed it.",
  "key": "AS",
  "start": "Difficult ___, the team completed the task.",
  "ans": [
   "as the task was",
   "as it was"
  ],
  "why": "Cấu trúc nhượng bộ đảo: Adj + as + S + be, ... = although."
 },
 {
  "id": "kw-c1-b012",
  "lvl": "C1",
  "s1": "The staff weren't told about the changes until Monday.",
  "key": "NOT",
  "start": "It was ___ Monday that the staff were told about the changes.",
  "ans": [
   "not until"
  ],
  "why": "Câu chẻ: It was not until + thời điểm + that ..."
 },
 {
  "id": "kw-c1-b013",
  "lvl": "C1",
  "s1": "The clinic will buy the scanner, whatever it costs.",
  "key": "MATTER",
  "start": "The clinic will buy the scanner, ___ it costs.",
  "ans": [
   "no matter what",
   "no matter how much"
  ],
  "why": "No matter what + S + V = dù ... thế nào."
 },
 {
  "id": "kw-c1-b014",
  "lvl": "C1",
  "s1": "The treatment was so effective that patients went home within days.",
  "key": "EFFECTIVE",
  "start": "So ___ the treatment that patients went home within days.",
  "ans": [
   "effective was"
  ],
  "why": "Đảo ngữ với So + adj + be + S + that."
 },
 {
  "id": "kw-c1-b015",
  "lvl": "C1",
  "s1": "The charity was just about to close when a donor appeared.",
  "key": "POINT",
  "start": "The charity was ___ closing when a donor appeared.",
  "ans": [
   "on the point of"
  ],
  "why": "Be on the point of + V-ing = sắp sửa làm gì."
 }
];


/* Bài tập chương M1–M6 (thuật ngữ, thành phần từ, đúng/sai, hiểu bài). */
const MED_EX = [
 {
  "unit": "M1",
  "id": "mx-m1",
  "title": "Molecular Biology and the Cell: Chapter Review",
  "items": [
   {
    "q": "Which definition matches 'ribosome'?",
    "opts": [
     "a tiny structure that builds proteins",
     "a small bubble that carries substances inside the cell",
     "a network of fibres that gives the cell its shape",
     "an enzyme that turns a harmful chemical into water and oxygen"
    ],
    "a": 0,
    "why": "Ribosome là cấu trúc nhỏ tổng hợp protein; các lựa chọn còn lại lần lượt là túi vận chuyển, bộ khung tế bào và catalase."
   },
   {
    "q": "Which term is defined as 'a tight sticky layer outside the wall of some bacteria'?",
    "opts": [
     "nucleoid",
     "capsule",
     "cytoplasm",
     "desiccation"
    ],
    "a": 1,
    "why": "Capsule là lớp chất nhầy chặt bên ngoài thành tế bào một số vi khuẩn; nucleoid là vùng chứa DNA, cytoplasm là tế bào chất, desiccation là sự khô kiệt."
   },
   {
    "q": "Which definition matches 'catalase'?",
    "opts": [
     "an enzyme that turns hydrogen peroxide into water and oxygen",
     "a sugar that cells use for energy",
     "a layer that helps bacteria stick to surfaces",
     "a test that shows how well the kidneys work"
    ],
    "a": 0,
    "why": "Catalase là enzyme của peroxisome chuyển H2O2 thành nước và oxy; các đáp án khác mô tả glucose, lớp nhầy và xét nghiệm thận."
   },
   {
    "q": "Which term is defined as 'the building of complex molecules from simple ones'?",
    "opts": [
     "catabolism",
     "anabolism",
     "oxidation",
     "detoxification"
    ],
    "a": 1,
    "why": "Đồng hóa (anabolism) là xây dựng phân tử phức tạp từ phân tử đơn giản; catabolism là quá trình ngược lại (phân giải)."
   },
   {
    "q": "Which definition matches 'Golgi complex'?",
    "opts": [
     "an organelle that sorts and packs proteins into vesicles",
     "an organelle that makes most of the cell's energy",
     "a network of membranes joined to the membrane around the nucleus",
     "a rigid layer that gives a bacterium its shape"
    ],
    "a": 0,
    "why": "Bộ máy Golgi phân loại và đóng gói protein vào túi vận chuyển; ty thể tạo năng lượng, lưới nội chất nối với màng nhân, thành tế bào cứng tạo hình dạng."
   },
   {
    "q": "The prefix uni- in 'unicellular' means ...",
    "opts": [
     "one",
     "two",
     "many",
     "no"
    ],
    "a": 0,
    "why": "Uni- nghĩa là một; unicellular là đơn bào, trái với multicellular (đa bào)."
   },
   {
    "q": "The prefix an- in 'anaerobic' means ...",
    "opts": [
     "without",
     "with",
     "around",
     "after"
    ],
    "a": 0,
    "why": "An- nghĩa là không có; anaerobic là hoạt động không cần oxy."
   },
   {
    "q": "In 'anabolism' and 'catabolism', the part ana- points to building up, while cata- points to ...",
    "opts": [
     "breaking down",
     "moving away",
     "joining together",
     "copying"
    ],
    "a": 0,
    "why": "Anabolism là xây dựng, catabolism là phân giải nên cata- gắn với việc phá vỡ, phân hủy."
   },
   {
    "q": "The ending -some in 'lysosome' and 'ribosome' refers to a ...",
    "opts": [
     "small body",
     "kind of disease",
     "surgical removal",
     "study of a subject"
    ],
    "a": 0,
    "why": "Hậu tố -some chỉ một thể nhỏ, như bào quan hay hạt bên trong tế bào; -itis là viêm, -ectomy là cắt bỏ, -ology là ngành học."
   },
   {
    "q": "The root karyo- in 'prokaryote' and 'eukaryote' refers to the ...",
    "opts": [
     "nucleus",
     "membrane",
     "wall",
     "sugar"
    ],
    "a": 0,
    "why": "Karyo- chỉ nhân tế bào; prokaryote là chưa có nhân thật, eukaryote có nhân thật."
   },
   {
    "q": "Prokaryotic cells have a nucleus surrounded by a membrane.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: tế bào nhân sơ không có bào quan có màng như nhân; DNA nằm ở vùng nhân (nucleoid)."
   },
   {
    "q": "Ribosomes attached to the rough ER mainly make proteins that will enter a membrane, stay in an organelle or be secreted.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: ribosome gắn trên lưới nội chất hạt tạo protein đưa vào màng, bào quan hoặc tiết ra ngoài; ribosome tự do tạo protein ở lại bào tương."
   },
   {
    "q": "Enzymes are proteins that speed up chemical reactions in cells.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: enzyme là protein xúc tác, làm các phản ứng hóa học trong tế bào diễn ra nhanh hơn."
   },
   {
    "q": "Lysosome enzymes work best in acidic conditions.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: enzyme lysosome hoạt động tốt trong môi trường acid, nên khi lysosome vỡ vào bào tương gần trung tính thì ít gây hại."
   },
   {
    "q": "Most of a eukaryotic cell's ATP is made in its mitochondria.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: ty thể thực hiện hô hấp hiếu khí và tạo phần lớn ATP của tế bào nhân thực."
   },
   {
    "q": "A bacterium with a thick cell wall is classed as ___.",
    "opts": [
     "gram-positive",
     "gram-negative",
     "multicellular",
     "heterotrophic"
    ],
    "a": 0,
    "why": "Vách dày là vi khuẩn gram dương; gram âm có vách mỏng."
   },
   {
    "q": "Hydrogen peroxide is harmful in high amounts, so peroxisomes contain ___, which converts it into water and oxygen.",
    "opts": [
     "catalase",
     "glucose",
     "a nucleotide",
     "a capsule"
    ],
    "a": 0,
    "why": "Catalase là enzyme phân hủy H2O2 thành nước và oxy trong peroxisome."
   },
   {
    "q": "If a lysosome bursts, its enzymes do little harm because the cytoplasm is almost ___.",
    "opts": [
     "neutral",
     "acidic",
     "dry",
     "frozen"
    ],
    "a": 0,
    "why": "Bào tương gần trung tính nên enzyme ưa acid hoạt động kém; nếu là acidic thì enzyme vẫn hoạt động tốt."
   },
   {
    "q": "A doctor repeats a blood test every month to ___ how a disease is progressing.",
    "opts": [
     "monitor",
     "secrete",
     "ingest",
     "dissociate"
    ],
    "a": 0,
    "why": "Xét nghiệm lặp lại để theo dõi (monitor) diễn tiến bệnh; secrete là tiết, ingest là ăn vào, dissociate là tách ra."
   },
   {
    "q": "According to the chapter, why can eukaryotic cells grow larger than prokaryotic cells?",
    "opts": [
     "Mitochondria let them get more energy from the same amount of food.",
     "They have no membranes that limit their size.",
     "They make energy without using any oxygen.",
     "Their ribosomes are always permanently attached."
    ],
    "a": 0,
    "why": "Ty thể cho phép hô hấp hiếu khí, tạo nhiều năng lượng hơn từ cùng lượng thức ăn nên tế bào nhân thực lớn hơn."
   },
   {
    "q": "What is the difference between free ribosomes and ribosomes on the rough ER?",
    "opts": [
     "Free ribosomes make proteins that stay in the cytoplasm.",
     "Free ribosomes make proteins that leave the cell.",
     "Ribosomes on the rough ER make only lipids.",
     "Ribosomes on the rough ER never leave the membrane."
    ],
    "a": 0,
    "why": "Ribosome tự do tạo protein ở lại bào tương; ribosome trên lưới nội chất hạt không gắn vĩnh viễn và tạo protein cho màng, bào quan hoặc tiết ra."
   },
   {
    "q": "What may a cell do if its repair of damage in the genome repeatedly fails?",
    "opts": [
     "It may start its own death.",
     "It may turn into a prokaryote.",
     "It may speed up the cell cycle.",
     "It may swap its DNA for RNA."
    ],
    "a": 0,
    "why": "Nếu sửa chữa liên tục thất bại, tế bào có thể tự khởi động quá trình chết của chính nó."
   },
   {
    "q": "Which statement about the branches of genetics is correct?",
    "opts": [
     "Population genetics compares how common genes are in different groups of people.",
     "Molecular genetics deals with the prevention of inherited illness in patients.",
     "Clinical genetics studies how often genes occur in different races.",
     "Population genetics studies the structure and copying of DNA."
    ],
    "a": 0,
    "why": "Di truyền học quần thể so sánh tần số gen giữa các nhóm người; mô tả phân tử và lâm sàng ở các câu khác bị đảo."
   }
  ]
 },
 {
  "unit": "M2",
  "id": "mx-m2",
  "title": "Genetic Mechanisms and Cells: Chapter Review",
  "items": [
   {
    "q": "Which definition matches \"template\"?",
    "opts": [
     "a strand used as a pattern for making a new matching strand",
     "a region where copying of a gene begins",
     "the planned death of a damaged cell",
     "a protein that speeds up a chemical reaction"
    ],
    "a": 0,
    "why": "Template là mạch dùng làm khuôn để tổng hợp mạch bổ sung mới; các lựa chọn khác là enzyme, promoter và apoptosis."
   },
   {
    "q": "Which term is defined as \"the planned death of a cell that is damaged or no longer needed\"?",
    "opts": [
     "apoptosis",
     "mitosis",
     "mutation",
     "metastasis"
    ],
    "a": 0,
    "why": "Apoptosis là chết tế bào theo chương trình; metastasis là di căn, mutation là đột biến, mitosis là nguyên phân."
   },
   {
    "q": "Which definition matches \"autologous\" in the context of stem cells?",
    "opts": [
     "taken from a different person who donates it",
     "done artificially in a laboratory dish",
     "describing a growth that does not spread",
     "taken from the same person who will receive it"
    ],
    "a": 3,
    "why": "Autologous = tự thân, lấy từ chính người sẽ nhận; 'lấy từ người khác' là đồng loại (allogeneic), 'không lan' là benign, 'nhân tạo trong phòng thí nghiệm' là in vitro."
   },
   {
    "q": "Which term is defined as \"a cell that is already partly committed to becoming one cell type\"?",
    "opts": [
     "daughter cell",
     "red blood cell",
     "progenitor cell",
     "stem cell"
    ],
    "a": 2,
    "why": "Progenitor cell đã định hướng một phần; tế bào gốc còn chưa chuyên hóa, tế bào con chỉ là sản phẩm của phân chia."
   },
   {
    "q": "Which definition matches \"metastasis\"?",
    "opts": [
     "a lasting change in the order of the genetic code",
     "the spread of harmful cells from one part of the body to another",
     "the removal of a small piece of tissue for examination",
     "a check done on healthy people to find a disease early"
    ],
    "a": 1,
    "why": "Metastasis là di căn; các lựa chọn khác lần lượt là sinh thiết, đột biến và xét nghiệm sàng lọc."
   },
   {
    "q": "The suffix -ectomy means ...",
    "opts": [
     "inflammation",
     "study of",
     "surgical removal",
     "cutting into"
    ],
    "a": 2,
    "why": "-ectomy = cắt bỏ (vd. mastectomy); -otomy là rạch, -itis là viêm, -ology là khoa học nghiên cứu."
   },
   {
    "q": "The suffix -itis means ...",
    "opts": [
     "removal",
     "cell",
     "study of",
     "inflammation"
    ],
    "a": 3,
    "why": "-itis = viêm (vd. hepatitis là viêm gan)."
   },
   {
    "q": "In the word osteocyte, the suffix -cyte means ...",
    "opts": [
     "tumor",
     "study",
     "cell",
     "fat"
    ],
    "a": 2,
    "why": "-cyte = tế bào; osteocyte là tế bào xương."
   },
   {
    "q": "The suffix -otomy refers to ...",
    "opts": [
     "a type of cell",
     "taking out a part of the body",
     "cutting into a part of the body",
     "swelling of a tissue"
    ],
    "a": 2,
    "why": "-otomy = rạch/mở vào (incision); -ectomy mới là cắt bỏ."
   },
   {
    "q": "The word oncology refers to the study of ...",
    "opts": [
     "tumors and cancer",
     "cells in general",
     "the skin",
     "the spread of infections"
    ],
    "a": 0,
    "why": "Oncology = ung thư học, nghiên cứu u và bệnh ung thư; nghiên cứu tế bào là cytology, da là dermatology."
   },
   {
    "q": "DNA is usually double-stranded, whereas RNA is mostly single-stranded.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: ADN thường có hai mạch, ARN chủ yếu một mạch."
   },
   {
    "q": "Each hydrogen bond between DNA bases is very strong, and this alone makes DNA stable.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: mỗi liên kết hydro yếu, chính số lượng rất lớn các liên kết cùng nhau mới làm ADN bền."
   },
   {
    "q": "During mitosis, recombination between sister chromosomes usually creates new combinations of alleles.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: hai nhiễm sắc thể chị em thường giống hệt nhau nên không tạo tổ hợp alen mới."
   },
   {
    "q": "Recombinant DNA can be produced in the laboratory, for example for vaccine development.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: tái tổ hợp có thể được tạo ra trong phòng thí nghiệm để tạo ADN tái tổ hợp, dùng trong phát triển vắc-xin."
   },
   {
    "q": "A benign tumor can spread to other parts of the body by metastasis.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: u lành tính không di căn; chỉ u ác tính mới lan theo cơ chế di căn."
   },
   {
    "q": "After a doctor removes a small piece of a lump to examine it under a microscope, the procedure is called a ___.",
    "opts": [
     "recombination",
     "biopsy",
     "metastasis",
     "replication"
    ],
    "a": 1,
    "why": "Lấy một mẫu mô nhỏ để xem dưới kính hiển vi là sinh thiết (biopsy); các từ khác là quá trình sinh học tế bào."
   },
   {
    "q": "Because the cancer was advanced, the team offered ___ care to ease her pain.",
    "opts": [
     "palliative",
     "benign",
     "homologous",
     "autologous"
    ],
    "a": 0,
    "why": "Chăm sóc giảm nhẹ (palliative care) làm dịu triệu chứng khi bệnh ở giai đoạn muộn; các tính từ còn lại không đi với 'care' theo nghĩa này."
   },
   {
    "q": "Reading the DNA directly for every protein would be energetically ___.",
    "opts": [
     "expensive",
     "cheap",
     "silent",
     "harmless"
    ],
    "a": 0,
    "why": "'Energetically expensive' = tốn nhiều năng lượng vì phải phá mọi liên kết hydro."
   },
   {
    "q": "In the laboratory, the polymerase chain reaction is used to ___ a chosen DNA fragment into millions of copies.",
    "opts": [
     "silence",
     "transplant",
     "amplify",
     "digest"
    ],
    "a": 2,
    "why": "PCR nhân (amplify) đoạn ADN đã chọn thành hàng triệu bản."
   },
   {
    "q": "What does each original DNA strand do during replication?",
    "opts": [
     "It is destroyed once its information has been read",
     "It is changed into an RNA strand",
     "It serves as a template for a new complementary strand",
     "It carries the polymerase to the origin"
    ],
    "a": 2,
    "why": "Mỗi mạch gốc làm khuôn cho mạch bổ sung mới (sao chép bán bảo tồn)."
   },
   {
    "q": "Why is double-stranded DNA described as impractical for making proteins?",
    "opts": [
     "It is too short to carry any information",
     "It is found only outside the cell",
     "It contains no bases at all",
     "Its bases are locked inside, and breaking the bonds costs much energy"
    ],
    "a": 3,
    "why": "Các bazơ bị khóa bên trong chuỗi xoắn, phá liên kết hydro cho mỗi protein rất tốn năng lượng và thời gian."
   },
   {
    "q": "What is the main difference between a stem cell and a progenitor cell?",
    "opts": [
     "Stem cells are found only in embryos, but progenitor cells only in adults",
     "Stem cells can divide indefinitely, but progenitor cells only a limited number of times",
     "Progenitor cells never divide, but stem cells always do",
     "Progenitor cells can become any cell type, but stem cells only one"
    ],
    "a": 1,
    "why": "Khác biệt chính: tế bào gốc phân chia vô hạn, tế bào tiền thân chỉ phân chia số lần giới hạn."
   },
   {
    "q": "Why is a virus not considered a living organism?",
    "opts": [
     "It lacks the machinery to use its genetic material and depends on a host cell",
     "It is made only of proteins and fats",
     "It has no genetic material at all",
     "It is too small to be seen"
    ],
    "a": 0,
    "why": "Virus có vật liệu di truyền nhưng không có bộ máy để dùng nên phụ thuộc vào tế bào chủ."
   },
   {
    "q": "What is special about V(D)J recombination?",
    "opts": [
     "It occurs in all body cells during mitosis",
     "It occurs only in developing lymphocytes and helps immune cells diversify",
     "It makes a copy of the whole genome before division",
     "It repairs damage caused by ultraviolet light in the skin"
    ],
    "a": 1,
    "why": "Tái tổ hợp V(D)J chỉ xảy ra ở lympho bào đang phát triển, giúp tế bào miễn dịch đa dạng hóa để nhận biết tác nhân gây bệnh mới."
   }
  ]
 },
 {
  "unit": "M3",
  "id": "mx-m3",
  "title": "The Integumentary System: Chapter Review",
  "items": [
   {
    "q": "Which definition matches \"keratinization\"?",
    "opts": [
     "skin cells filling with hard protein and dying as they reach the surface",
     "the loss of water from the skin as a vapour",
     "the growth of a new hair from a follicle",
     "the forming of a scab over a cut"
    ],
    "a": 0,
    "why": "Keratinization là quá trình tế bào biểu bì chứa đầy keratin rồi chết ở bề mặt; các định nghĩa còn lại là sự bay hơi, mọc tóc, đóng vảy."
   },
   {
    "q": "Which term is defined as \"the layer of skin between the outer layer and the fat layer, called the true skin\"?",
    "opts": [
     "cuticle",
     "dermis",
     "epidermis",
     "hypodermis"
    ],
    "a": 1,
    "why": "Trung bì (dermis) nằm giữa thượng bì và hạ bì và đôi khi được gọi là \"true skin\"; cuticle là lớp ngoài của thân tóc."
   },
   {
    "q": "Which term is defined as \"a tiny muscle that makes a hair stand up and causes goosebumps\"?",
    "opts": [
     "dermal papilla",
     "lunula",
     "arrector pili muscle",
     "sebaceous gland"
    ],
    "a": 2,
    "why": "Cơ dựng lông (arrector pili) co lại làm lông dựng và nổi da gà; các cấu trúc còn lại không phải cơ."
   },
   {
    "q": "Which definition matches \"laceration\"?",
    "opts": [
     "a shallow scrape where only the top layer is rubbed off",
     "a deep narrow wound that is deeper than it is long",
     "a dark mark where blood has leaked under unbroken skin",
     "a wound with irregular, torn edges that involves the epidermis and dermis"
    ],
    "a": 3,
    "why": "Laceration là vết rách bờ không đều, qua cả thượng bì và trung bì; ba đáp án còn lại là abrasion, penetrating wound và contusion."
   },
   {
    "q": "Which term is defined as \"a skin ulcer caused by long, unrelieved pressure on one part of the body\"?",
    "opts": [
     "pressure ulcer",
     "cold sore",
     "ringworm",
     "furuncle"
    ],
    "a": 0,
    "why": "Loét tì đè (bed sore) do bị đè ép kéo dài; cold sore do herpes, ringworm do nấm, furuncle là nhọt do nhiễm trùng."
   },
   {
    "q": "The root kerat/o refers to ...",
    "opts": [
     "the nail",
     "keratin, the tough horny protein",
     "sweat",
     "the colour black"
    ],
    "a": 1,
    "why": "Gốc kerat/o chỉ keratin / lớp sừng (vd. keratosis); sweat là hidr/o, black là melan/o, nail là onych/o."
   },
   {
    "q": "The word hyperhidrosis means an abnormally high production of ...",
    "opts": [
     "melanin",
     "keratin",
     "sweat",
     "sebum"
    ],
    "a": 2,
    "why": "hidr/o là mồ hôi và hyper- là quá mức, nên hyperhidrosis là chứng tăng tiết mồ hôi; sebum là gốc seb/o."
   },
   {
    "q": "The word root onych/o, as in onychomycosis, refers to the ...",
    "opts": [
     "hair",
     "sweat gland",
     "fat layer",
     "nail"
    ],
    "a": 3,
    "why": "Onych/o là móng; onychomycosis là nhiễm nấm móng (mycosis = nấm). Hair là trich/o."
   },
   {
    "q": "The suffix -itis in the word dermatitis means ...",
    "opts": [
     "inflammation",
     "surgical removal",
     "study of",
     "fear of"
    ],
    "a": 0,
    "why": "Hậu tố -itis nghĩa là viêm: dermatitis là viêm da; -ectomy là cắt bỏ, -ology là ngành nghiên cứu."
   },
   {
    "q": "The prefix hypo- in the word hypodermis means ...",
    "opts": [
     "across",
     "under, below",
     "above, excessive",
     "around"
    ],
    "a": 1,
    "why": "Tiền tố hypo- nghĩa là dưới: hypodermis là lớp dưới trung bì; hyper- mới là quá mức."
   },
   {
    "q": "Hair grows on every part of the body surface, including the palms of the hands and the soles of the feet.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Lòng bàn tay và bàn chân không có lông (cũng như môi), nên phát biểu sai."
   },
   {
    "q": "The epidermis contains no blood vessels.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Thượng bì không có mạch máu, nó nhận chất nuôi từ trung bì bên dưới nên phát biểu đúng."
   },
   {
    "q": "Nails get their hardness mainly from melanin.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Móng cứng nhờ keratin, còn melanin là sắc tố tạo màu da, nên phát biểu sai."
   },
   {
    "q": "The sweat of the apocrine glands is thicker than the sweat of the eccrine glands.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Tuyến apocrine tiết dịch đặc hơn tuyến eccrine nên phát biểu đúng."
   },
   {
    "q": "A third-degree burn destroys all layers of the skin, and the burned area itself is usually painless.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Bỏng độ ba phá hủy thượng bì, trung bì và lớp mỡ, đầu mút thần kinh bị hủy nên thường không đau; phát biểu đúng."
   },
   {
    "q": "When the sweat on the skin ____, the body cools down.",
    "opts": [
     "lubricates",
     "regulates",
     "evaporates",
     "insulates"
    ],
    "a": 2,
    "why": "Mồ hôi làm mát cơ thể khi bay hơi (evaporates); các động từ còn lại không dùng nội động với \"sweat\" theo nghĩa này."
   },
   {
    "q": "In shock the skin is pale and ____, meaning cool and damp.",
    "opts": [
     "supple",
     "tanned",
     "itchy",
     "clammy"
    ],
    "a": 3,
    "why": "Clammy nghĩa là lạnh và ẩm; supple (mềm dẻo), tanned (rám nắng), itchy (ngứa) không có nghĩa lạnh ẩm."
   },
   {
    "q": "Millions of nerve endings make the skin ____ to touch, pain and heat.",
    "opts": [
     "sensitive",
     "excessive",
     "constant",
     "waterproof"
    ],
    "a": 0,
    "why": "\"sensitive to\" nghĩa là nhạy cảm với kích thích; ba từ kia không đi với \"to touch\" theo nghĩa này."
   },
   {
    "q": "Hair turns grey in old age because the ____ that colours it is no longer made.",
    "opts": [
     "elastin",
     "pigment",
     "sebum",
     "collagen"
    ],
    "a": 1,
    "why": "Tóc bạc khi không còn tạo sắc tố (melanin); sebum, collagen, elastin không quyết định màu tóc."
   },
   {
    "q": "After a fall, Lan had a ____ on her knee, where only the top layer of skin had been scraped away.",
    "opts": [
     "contusion",
     "penetrating wound",
     "abrasion",
     "laceration"
    ],
    "a": 2,
    "why": "Trầy xước (abrasion) là tổn thương nông chỉ mất lớp ngoài do ma sát; laceration là vết rách sâu hơn, contusion là bầm, penetrating là vết đâm."
   },
   {
    "q": "Why does the nail plate look pink?",
    "opts": [
     "It is coloured by melanin from the matrix.",
     "The hypodermis lies directly under it.",
     "It is coated with sebum.",
     "Tiny blood vessels in the tissue beneath it show through."
    ],
    "a": 3,
    "why": "Phần thân móng hồng vì mạng mạch máu nhỏ ở trung bì bên dưới; lunula mới là vùng nhạt màu hình trăng khuyết ở gốc móng."
   },
   {
    "q": "How do the sebaceous glands contribute to acne in teenagers?",
    "opts": [
     "Hormones make them produce more sebum, which can block the pores.",
     "They make less sebum, so the skin becomes dry.",
     "They release thick sweat that blocks the armpit.",
     "They stop working during puberty."
    ],
    "a": 0,
    "why": "Hormone tuổi dậy thì kích thích tuyến bã tiết nhiều hơn; bã nhờn và tế bào chết làm tắc lỗ chân lông gây mụn."
   },
   {
    "q": "What do the dermal papillae form on the palms?",
    "opts": [
     "the nails of the fingers",
     "fingerprints that are different for each person",
     "the hair follicles of the hand",
     "a waterproof layer of dead cells"
    ],
    "a": 1,
    "why": "Nhú bì nhô lên thượng bì và tạo vân tay riêng cho mỗi người; nang lông, lớp sừng và móng có cấu trúc khác."
   },
   {
    "q": "Who is most at risk of pressure sores?",
    "opts": [
     "a teenager with oily skin",
     "a person who works outdoors in the sun",
     "a person who cannot change position for a long time because of illness",
     "a person who exercises and sweats a lot"
    ],
    "a": 2,
    "why": "Loét tì đè xảy ra khi ma sát hoặc áp lực không được giải tỏa ở người không thể cử động, vd. do bệnh hoặc liệt."
   }
  ]
 },
 {
  "unit": "M4",
  "id": "mx-m4",
  "title": "The Skeletal System: Chapter Review",
  "items": [
   {
    "q": "Which definition matches \"ligament\"?",
    "opts": [
     "A cord that joins a muscle to a bone",
     "A fluid-filled sac that reduces friction at a joint",
     "A curved pad that cushions the knee",
     "A tough band that joins one bone to another"
    ],
    "a": 3,
    "why": "Dây chằng nối xương với xương; gân nối cơ với xương, túi hoạt dịch giảm ma sát, sụn chêm đệm khớp gối."
   },
   {
    "q": "Which term is defined as \"the rounded end of a long bone\"?",
    "opts": [
     "Diaphysis",
     "Epiphysis",
     "Periosteum",
     "Medullary cavity"
    ],
    "a": 1,
    "why": "Epiphysis là đầu xương; diaphysis là thân xương, periosteum là màng xương, medullary cavity là ống tủy."
   },
   {
    "q": "Which term is defined as \"the thin membrane covering the outside of a bone, with nerves and blood vessels that feed it\"?",
    "opts": [
     "Compact bone",
     "Periosteum",
     "Cancellous bone",
     "Bone marrow"
    ],
    "a": 1,
    "why": "Màng xương (periosteum) bao ngoài xương và chứa thần kinh, mạch máu nuôi xương; xương đặc và xương xốp là mô xương, tủy nằm bên trong."
   },
   {
    "q": "Which definition matches \"erythropoiesis\"?",
    "opts": [
     "The destruction of old bone tissue",
     "The storage of calcium in bone",
     "The making of new red blood cells",
     "The hardening of cartilage"
    ],
    "a": 2,
    "why": "Erythropoiesis là quá trình tạo hồng cầu (xảy ra ở tủy đỏ)."
   },
   {
    "q": "Which term is defined as \"the part of the skeleton made of the collarbone and the shoulder blade\"?",
    "opts": [
     "Pelvic girdle",
     "Rib cage",
     "Vertebral column",
     "Pectoral girdle"
    ],
    "a": 3,
    "why": "Đai vai (pectoral girdle) gồm xương đòn và xương bả vai; đai chậu gồm các xương hông."
   },
   {
    "q": "The suffix -itis means",
    "opts": [
     "inflammation",
     "removal by surgery",
     "softening",
     "measurement"
    ],
    "a": 0,
    "why": "Hậu tố -itis chỉ tình trạng viêm, ví dụ arthritis, spondylitis."
   },
   {
    "q": "The word root cost(o)- refers to the",
    "opts": [
     "skull",
     "joints",
     "vertebrae",
     "ribs"
    ],
    "a": 3,
    "why": "Cost(o)- là sườn (rib), ví dụ costosternal; crani(o)- là sọ, arthr(o)- là khớp, spondyl(o)- là đốt sống."
   },
   {
    "q": "The suffix -ectomy, as in costectomy, means",
    "opts": [
     "surgical repair",
     "measurement",
     "surgical removal",
     "softening"
    ],
    "a": 2,
    "why": "-ectomy là cắt bỏ bằng phẫu thuật; costectomy là cắt bỏ một xương sườn."
   },
   {
    "q": "The suffix -malacia, as in osteomalacia, means",
    "opts": [
     "hardening",
     "narrowing",
     "inflammation",
     "softening"
    ],
    "a": 3,
    "why": "-malacia là nhuyễn/mềm; osteomalacia là xương bị mềm (nhuyễn xương)."
   },
   {
    "q": "In the word spondylitis, the root spondyl(o)- refers to the ______.",
    "opts": [
     "vertebra",
     "skull",
     "rib",
     "joint"
    ],
    "a": 0,
    "why": "Gốc spondyl(o)- chỉ đốt sống; spondylitis là viêm đốt sống. Sọ là crani(o)-, sườn là cost(o)-, khớp là arthr(o)-."
   },
   {
    "q": "Calcitonin causes extra calcium to be taken out of the blood and added to the bone matrix.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: calcitonin từ tuyến giáp làm hạ canxi máu bằng cách đưa canxi vào chất nền xương."
   },
   {
    "q": "The appendicular skeleton includes the skull and the ribs.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: sọ và xương sườn thuộc bộ xương trục; bộ xương chi gồm chi và các đai."
   },
   {
    "q": "Acromegaly that starts after puberty does not change a person's overall height, but some bones, such as those of the hands and the lower jaw, may keep growing.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: xương đã ngừng dài ra nên chiều cao không đổi, nhưng xương bàn tay và xương hàm dưới vẫn có thể to ra."
   },
   {
    "q": "Cartilage contains many blood vessels and nerves.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: sụn không có mạch máu và thần kinh (avascular, aneural)."
   },
   {
    "q": "A greenstick fracture is an incomplete break in which the bone bends, and it is seen mainly in children.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: gãy cành tươi là gãy không hoàn toàn, xương bị cong, chủ yếu gặp ở trẻ em."
   },
   {
    "q": "The knee is a ______ joint because it mainly bends and straightens along one axis.",
    "opts": [
     "pivot",
     "ball-and-socket",
     "saddle",
     "hinge"
    ],
    "a": 3,
    "why": "Khớp gối chủ yếu gập và duỗi theo một trục nên là khớp bản lề (hinge)."
   },
   {
    "q": "Most skull bones are connected by ______, which allow no movement.",
    "opts": [
     "tendons",
     "sutures",
     "menisci",
     "bursae"
    ],
    "a": 1,
    "why": "Các xương sọ nối với nhau chủ yếu bằng sutures (khớp sọ bất động)."
   },
   {
    "q": "In osteoporosis the activity of the bone-building cells falls behind the bone-removing cells, so bone ______ is lost.",
    "opts": [
     "length",
     "colour",
     "density",
     "temperature"
    ],
    "a": 2,
    "why": "Loãng xương là mất mật độ xương (bone density) do mất cân bằng hoạt động tạo cốt bào và hủy cốt bào."
   },
   {
    "q": "A young child whose soft bones bend under body weight because of a lack of vitamin D and calcium most likely has ______.",
    "opts": [
     "gout",
     "acromegaly",
     "a dislocation",
     "rickets"
    ],
    "a": 3,
    "why": "Còi xương (rickets) là bệnh ở trẻ em do thiếu vitamin D và canxi làm xương mềm, cong."
   },
   {
    "q": "A break in which the bone splits into several pieces is called a ______ fracture.",
    "opts": [
     "greenstick",
     "comminuted",
     "transverse",
     "spiral"
    ],
    "a": 1,
    "why": "Comminuted fracture là gãy nhiều mảnh; greenstick là gãy cong, transverse là gãy ngang, spiral là gãy xoắn."
   },
   {
    "q": "Why are postmenopausal women at high risk of osteoporosis?",
    "opts": [
     "Their osteoclasts stop working completely",
     "They take in too much vitamin D",
     "Their bones receive too much calcitonin",
     "Lower estrogen production is linked to reduced osteoblast activity"
    ],
    "a": 3,
    "why": "Sau mãn kinh estrogen giảm, hoạt động của tạo cốt bào giảm nên mất mật độ xương; các ý khác không có trong nội dung."
   },
   {
    "q": "What is the main role of bones in movement?",
    "opts": [
     "They contract to produce force",
     "They act as levers that use the force made by skeletal muscles",
     "They make synovial fluid for the joints",
     "They join muscles to each other"
    ],
    "a": 1,
    "why": "Xương hoạt động như đòn bẩy, tận dụng lực do cơ vân tạo ra; xương không co."
   },
   {
    "q": "What happens to red marrow as a person grows older?",
    "opts": [
     "Much of it turns into fatty yellow marrow that can no longer make blood cells",
     "It becomes cartilage",
     "It becomes more active in all long bones",
     "It hardens into compact bone"
    ],
    "a": 0,
    "why": "Khi già, tủy đỏ chuyển dần thành tủy vàng nhiều mỡ, không còn khả năng tạo máu."
   },
   {
    "q": "What is the main function of synovial fluid in a joint?",
    "opts": [
     "It lowers friction between the moving surfaces",
     "It makes red blood cells for the body",
     "It stores calcium for the bone matrix",
     "It links muscle to bone"
    ],
    "a": 0,
    "why": "Dịch khớp là chất nhờn trong khoang khớp, bôi trơn và giảm ma sát giữa các mặt khớp; tạo hồng cầu là của tủy đỏ, nối cơ với xương là gân."
   }
  ]
 },
 {
  "unit": "M5",
  "id": "mx-m5",
  "title": "The Muscular System: Chapter Review",
  "items": [
   {
    "q": "Which definition matches \"origin\"?",
    "opts": [
     "the attachment of a muscle to the bone that stays still",
     "the attachment of a muscle to the bone that moves",
     "the tough band that joins muscle to bone",
     "the fleshy middle part of a muscle"
    ],
    "a": 0,
    "why": "Origin là điểm bám trên xương đứng yên; điểm bám trên xương di động là insertion, phần thịt giữa là belly, dải bám là gân (tendon)."
   },
   {
    "q": "Which term is defined as a chemical that carries a signal from a nerve cell across a tiny gap to a muscle cell?",
    "opts": [
     "collagen",
     "spore",
     "tendon",
     "neurotransmitter"
    ],
    "a": 3,
    "why": "Neurotransmitter (chất dẫn truyền thần kinh) như acetylcholine truyền tín hiệu qua khe synap; các từ còn lại không có chức năng này."
   },
   {
    "q": "Which term is defined as a muscle in the abdomen whose fibres run at an angle?",
    "opts": [
     "rectus",
     "transverse",
     "deltoid",
     "oblique"
    ],
    "a": 3,
    "why": "Cơ chéo (oblique) có sợi chạy nghiêng; rectus chạy thẳng đứng, transverse chạy ngang, deltoid là cơ tam giác ở vai."
   },
   {
    "q": "Which definition matches \"myopathy\"?",
    "opts": [
     "a disease that attacks only the heart valves",
     "a disease of the muscle tissue itself",
     "a disease caused by a poison from bacteria",
     "an injury to a band that links two bones"
    ],
    "a": 1,
    "why": "Myopathy = bệnh của chính mô cơ (my/myo = cơ; -pathy = bệnh). Các lựa chọn khác mô tả uốn ván, bong gân, bệnh van tim."
   },
   {
    "q": "Which term describes cardiac muscle's ability to start its own contractions?",
    "opts": [
     "voluntary",
     "autorhythmic",
     "multinucleated",
     "extensible"
    ],
    "a": 1,
    "why": "Cơ tim tự phát nhịp (autorhythmic); voluntary là chịu sự điều khiển ý thức, multinucleated là nhiều nhân, extensible là căng giãn được."
   },
   {
    "q": "The suffix -itis means ___.",
    "opts": [
     "growth",
     "weakness",
     "inflammation",
     "pain"
    ],
    "a": 2,
    "why": "-itis = viêm, ví dụ tendonitis là viêm gân. Đau là -algia, yếu là -asthenia."
   },
   {
    "q": "The word part myo- refers to ___.",
    "opts": [
     "bone",
     "muscle",
     "nerve",
     "skin"
    ],
    "a": 1,
    "why": "Myo- = cơ, như trong myopathy (bệnh cơ) và myalgia (đau cơ)."
   },
   {
    "q": "The suffix -algia, as in myalgia, means ___.",
    "opts": [
     "paralysis",
     "swelling",
     "pain",
     "poison"
    ],
    "a": 2,
    "why": "-algia = đau; myalgia = đau cơ."
   },
   {
    "q": "In the term myasthenia, the part -asthenia means ___.",
    "opts": [
     "weakness",
     "stiffness",
     "movement",
     "strength"
    ],
    "a": 0,
    "why": "Myasthenia gravis = yếu cơ nặng: my/myo = cơ, asthenia = yếu (suy nhược)."
   },
   {
    "q": "In dystrophy, the prefix dys- means ___.",
    "opts": [
     "around",
     "above",
     "bad or faulty",
     "double"
    ],
    "a": 2,
    "why": "Dys- = xấu, rối loạn; -trophy = nuôi dưỡng, nên dystrophy là sự nuôi dưỡng/phát triển bất thường."
   },
   {
    "q": "Skeletal muscle is the only muscle type in the body that is under voluntary control.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: cơ vân (cơ xương) là loại cơ duy nhất chịu sự điều khiển có ý thức; cơ tim và cơ trơn là không tự ý."
   },
   {
    "q": "Cardiac muscle needs a signal from a motor neuron before every single heartbeat.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: cơ tim tự kích thích để co (autorhythmic); hormone và tín hiệu từ não chỉ điều chỉnh nhịp."
   },
   {
    "q": "A muscle with three origins is called a triceps.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: biceps có hai điểm bám khởi đầu, triceps ba, quadriceps bốn."
   },
   {
    "q": "Cerebral palsy is a condition that gets steadily worse over time.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: bại não là tình trạng không tiến triển (non-progressive) do tổn thương vùng vận động của não."
   },
   {
    "q": "Booster vaccinations against tetanus are recommended about every ten years.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: tiêm nhắc lại khoảng 10 năm một lần để duy trì khả năng bảo vệ."
   },
   {
    "q": "Skeletal muscles contract when they receive a chemical signal from a ___ neuron.",
    "opts": [
     "sensory",
     "cardiac",
     "smooth",
     "motor"
    ],
    "a": 3,
    "why": "Nơron vận động (motor neuron) gửi tín hiệu đến cơ vân; 'sensory' dẫn cảm giác về, còn cardiac và smooth là loại cơ chứ không phải loại nơron."
   },
   {
    "q": "After lifting heavy boxes, Lan felt a sudden, painful tightening in her calf muscle. This is called a ___.",
    "opts": [
     "paralysis",
     "vaccine",
     "cramp",
     "tremor"
    ],
    "a": 2,
    "why": "Sự co thắt đau đột ngột của cơ là chuột rút (cramp); tremor là run, paralysis là liệt, vaccine là thuốc chủng ngừa."
   },
   {
    "q": "The muscles that keep the body upright all day have great ___, so they do not become tired quickly.",
    "opts": [
     "tremor",
     "strain",
     "endurance",
     "paralysis"
    ],
    "a": 2,
    "why": "Cơ giữ tư thế có sức bền (endurance) lớn nên không mỏi; tremor, paralysis, strain đều có nghĩa tiêu cực, không hợp logic."
   },
   {
    "q": "In myasthenia gravis, the immune system attacks acetylcholine ___ at the neuromuscular junction.",
    "opts": [
     "collagen fibres",
     "receptors",
     "spores",
     "tendons"
    ],
    "a": 1,
    "why": "Nhược cơ do tự kháng thể tấn công thụ thể (receptors) của acetylcholine; gân, bào tử, collagen không phải mục tiêu."
   },
   {
    "q": "Which muscle type is both striated and involuntary?",
    "opts": [
     "smooth muscle",
     "cardiac muscle",
     "skeletal muscle",
     "visceral muscle"
    ],
    "a": 1,
    "why": "Cơ tim có vân và không tự ý. Cơ vân (xương) có vân nhưng tự ý; cơ trơn (cơ tạng) không vân."
   },
   {
    "q": "The gluteus maximus gets the second part of its name mainly because of its ___.",
    "opts": [
     "number of origins",
     "size",
     "shape",
     "location"
    ],
    "a": 1,
    "why": "Maximus nghĩa là lớn nhất, đặt tên theo kích thước, phân biệt với gluteus medius và minimus trong cùng vùng mông."
   },
   {
    "q": "Which statement about Parkinson's disease is correct?",
    "opts": [
     "It is an immune attack on acetylcholine receptors",
     "It is linked to the loss of cells that make dopamine",
     "It is a non-progressive result of birth injury",
     "It is caused by a bacterial poison in a deep wound"
    ],
    "a": 1,
    "why": "Parkinson do mất các nơron tạo dopamine ở não. Độc tố vi khuẩn là uốn ván, tự miễn là nhược cơ, không tiến triển là bại não."
   },
   {
    "q": "What does the tetanus neurotoxin do in the nervous system?",
    "opts": [
     "It blocks every acetylcholine receptor permanently",
     "It stops inhibitory signals, so muscles stay contracted",
     "It destroys the muscle fibres and replaces them with scar tissue",
     "It makes the heart stop beating on its own"
    ],
    "a": 1,
    "why": "Độc tố uốn ván ngăn giải phóng chất ức chế ở hệ thần kinh trung ương nên cơ co cứng liên tục; thay bằng mô sẹo là loạn dưỡng cơ."
   }
  ]
 },
 {
  "unit": "M6",
  "id": "mx-m6",
  "title": "Blood and Body Defences: Chapter Review",
  "items": [
   {
    "q": "Which definition matches \"plasma\"?",
    "opts": [
     "the liquid part of blood in which the cells float",
     "the tiny cell fragments that plug a wound",
     "the red protein that carries oxygen",
     "the clear fluid carried in the thin drainage vessels"
    ],
    "a": 0,
    "why": "Huyết tương là phần lỏng của máu, các tế bào nằm trong đó; tiểu cầu, huyết sắc tố và bạch huyết là những thứ khác."
   },
   {
    "q": "Which term is defined as \"a white cell that surrounds and swallows germs\"?",
    "opts": [
     "platelet",
     "phagocyte",
     "antibody",
     "erythrocyte"
    ],
    "a": 1,
    "why": "Tế bào thực bào (phagocyte) bao vây và nuốt mầm bệnh; tiểu cầu cầm máu, kháng thể là protein, hồng cầu chở oxy."
   },
   {
    "q": "Which definition matches \"thrombocytopenia\"?",
    "opts": [
     "an abnormally high number of platelets in the blood",
     "a lower than normal number of white cells",
     "an abnormally low number of platelets in the blood",
     "the formation of a solid mass inside a vessel"
    ],
    "a": 2,
    "why": "Giảm tiểu cầu = thrombocyte + -penia (thiếu); tăng tiểu cầu là thrombocytosis, giảm bạch cầu là leukopenia, huyết khối là thrombosis."
   },
   {
    "q": "Which term is defined as \"an organ on the left of the abdomen that filters the blood and removes old red cells\"?",
    "opts": [
     "thymus",
     "tonsil",
     "bone marrow",
     "spleen"
    ],
    "a": 3,
    "why": "Lách nằm ở bên trái ổ bụng, lọc máu và loại bỏ hồng cầu già; tuyến ức ở ngực, amiđan ở họng, tủy xương tạo tế bào máu."
   },
   {
    "q": "Which definition matches \"antigen\"?",
    "opts": [
     "a substance that can start an immune response",
     "a protein that locks onto a germ and marks it",
     "protection that a baby borrows from its mother",
     "a white cell that releases histamine"
    ],
    "a": 0,
    "why": "Kháng nguyên là chất có thể kích hoạt đáp ứng miễn dịch; lựa chọn A là kháng thể, C là miễn dịch thụ động, D là dưỡng bào."
   },
   {
    "q": "The suffix -penia, as in \"leukopenia\", means ___.",
    "opts": [
     "an increase",
     "too few, a shortage",
     "a cell",
     "inflammation"
    ],
    "a": 1,
    "why": "-penia chỉ sự thiếu hụt/giảm (leukopenia = giảm bạch cầu); -cyte là tế bào, -itis là viêm."
   },
   {
    "q": "The word ending -cyte, as in \"erythrocyte\", refers to a ___.",
    "opts": [
     "disease",
     "vessel",
     "cell",
     "hormone"
    ],
    "a": 2,
    "why": "-cyte là tế bào (erythrocyte = hồng cầu, leukocyte = bạch cầu, lymphocyte = tế bào lympho)."
   },
   {
    "q": "The prefix leuk(o)- in \"leukocyte\" means ___.",
    "opts": [
     "red",
     "round",
     "small",
     "white"
    ],
    "a": 3,
    "why": "leuk(o)- nghĩa là trắng (bạch cầu), còn erythro- nghĩa là đỏ (hồng cầu)."
   },
   {
    "q": "The root thromb(o)- in \"thrombosis\" refers to ___.",
    "opts": [
     "a blood clot",
     "a bone",
     "a hormone",
     "a nerve"
    ],
    "a": 0,
    "why": "thromb(o)- liên quan đến cục máu đông; thrombosis là sự hình thành huyết khối."
   },
   {
    "q": "The ending -osis in \"thrombosis\" suggests ___.",
    "opts": [
     "removal by surgery",
     "a condition or process",
     "inflammation",
     "the study of something"
    ],
    "a": 1,
    "why": "-osis chỉ một tình trạng hoặc quá trình (thường bất thường); phẫu thuật cắt bỏ là -ectomy, viêm là -itis, ngành học là -ology."
   },
   {
    "q": "Mature red blood cells contain a nucleus.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Hồng cầu trưởng thành không có nhân (non-nucleated), có dạng đĩa lõm hai mặt; bạch cầu thì có nhân."
   },
   {
    "q": "Antibodies lock onto an antigen and mark it, so that other cells can destroy it.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: kháng thể gắn vào kháng nguyên và đánh dấu để các tế bào như thực bào tiêu diệt, chính kháng thể không giết mầm bệnh."
   },
   {
    "q": "Tuberculosis is a viral disease, so it responds well to antibiotics.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: lao là bệnh do vi khuẩn (bacterial disease) chứ không phải vi-rút; kháng sinh điều trị được vi khuẩn nhưng không điều trị được vi-rút."
   },
   {
    "q": "Haemophilia is an inherited disorder in which the blood lacks enough clotting factors.",
    "opts": [
     "True",
     "False"
    ],
    "a": 0,
    "why": "Đúng: ưa chảy máu là bệnh di truyền do thiếu các yếu tố đông máu nên chảy máu kéo dài."
   },
   {
    "q": "Lymphocytes that mature in the thymus gland become B cells.",
    "opts": [
     "True",
     "False"
    ],
    "a": 1,
    "why": "Sai: lympho bào trưởng thành ở tuyến ức thành tế bào T; những tế bào ở lại tủy xương mới thành tế bào B."
   },
   {
    "q": "When a blood sample is spun in a ___, the cells separate from the plasma.",
    "opts": [
     "thermometer",
     "syringe",
     "stethoscope",
     "centrifuge"
    ],
    "a": 3,
    "why": "Máy ly tâm (centrifuge) quay mẫu máu để tách huyết tương và tế bào; các dụng cụ khác không dùng để tách máu."
   },
   {
    "q": "A virus cannot ___ unless it enters a living host cell.",
    "opts": [
     "multiply",
     "evaporate",
     "dissolve",
     "freeze"
    ],
    "a": 0,
    "why": "Vi-rút là ký sinh, chỉ nhân lên (multiply/replicate) trong tế bào chủ."
   },
   {
    "q": "Because Nam has haemophilia, he may suffer prolonged ___ after even a small injury.",
    "opts": [
     "sneezing",
     "bleeding",
     "itching",
     "coughing"
    ],
    "a": 1,
    "why": "Thiếu yếu tố đông máu khiến chảy máu kéo dài (prolonged bleeding) sau chấn thương."
   },
   {
    "q": "The skin and mucous membranes belong to ___ immunity, which a person has from birth.",
    "opts": [
     "adaptive",
     "passive",
     "innate",
     "vaccine"
    ],
    "a": 2,
    "why": "Da và niêm mạc là hàng rào của miễn dịch bẩm sinh (innate); miễn dịch thích nghi hình thành sau khi tiếp xúc mầm bệnh hoặc tiêm chủng."
   },
   {
    "q": "A baby receives antibodies from its mother in breast milk, which gives short-term ___ immunity.",
    "opts": [
     "adaptive",
     "chronic",
     "viral",
     "passive"
    ],
    "a": 3,
    "why": "Kháng thể mượn từ mẹ chỉ bảo vệ ngắn hạn nên gọi là miễn dịch thụ động (passive)."
   },
   {
    "q": "What would happen if lymph were not drained from the tissues?",
    "opts": [
     "The fluid would build up and cause swelling",
     "The blood would stop carrying oxygen",
     "T cells would stop maturing in the thymus",
     "The bone marrow would stop making platelets"
    ],
    "a": 0,
    "why": "Nếu bạch huyết không được dẫn lưu thì dịch ứ lại gây phù (swelling); các hậu quả khác không liên quan đến mạch bạch huyết."
   },
   {
    "q": "What is the main difference between a virus and a bacterium?",
    "opts": [
     "A virus is a single living cell, but a bacterium is not a cell",
     "A virus can multiply only inside a host cell, but a bacterium can reproduce by itself",
     "Only viruses cause disease, while all bacteria are helpful",
     "Antibiotics treat viral infections, but not bacterial ones"
    ],
    "a": 1,
    "why": "Vi-rút chỉ nhân lên trong tế bào chủ, còn vi khuẩn là sinh vật đơn bào tự sinh sản; kháng sinh trị vi khuẩn chứ không trị vi-rút."
   },
   {
    "q": "How do B cells and T cells differ in their roles?",
    "opts": [
     "T cells release antibodies, while B cells destroy infected cells",
     "B cells release antibodies, while T cells coordinate or destroy",
     "B cells mature in the thymus, while T cells mature in the bone marrow",
     "Only B cells take part in adaptive immunity"
    ],
    "a": 1,
    "why": "Tế bào B tiết kháng thể; tế bào T hỗ trợ điều phối đáp ứng hoặc tế bào T độc tiêu diệt tế bào nhiễm vi-rút."
   },
   {
    "q": "Why does a patient with pernicious anaemia need vitamin B12 by injection?",
    "opts": [
     "The vitamin kills the bacteria that cause the disease",
     "The bone marrow makes too many white cells",
     "The blood contains too many clotting factors",
     "The stomach lacks intrinsic factor, so the gut cannot absorb the vitamin"
    ],
    "a": 3,
    "why": "Niêm mạc dạ dày teo nên thiếu yếu tố nội, ruột không hấp thu được B12; tiêm giúp bỏ qua khâu hấp thu."
   }
  ]
 }
];

/* ===== file: content-defs.js ===== */
/* ============================================================
   ĐỊNH NGHĨA TIẾNG ANH (v4.7) cho từ phổ thông B1, B2, C1.
   Khóa: mã chủ đề:từ (trùng w.key). Viết lại bằng từ đơn giản hơn từ gốc, không chứa từ đó.
   ============================================================ */
const WORD_DEFS = {
"people:relative": "a person who belongs to the same family as you",
"people:relationship": "the way two people or groups feel and behave towards each other",
"people:generation": "all the people born and living at about the same time",
"people:get-on-with": "to have a friendly, easy connection with someone",
"people:bring-up": "to look after a child and teach it how to behave until it is grown",
"people:take-after": "to look or behave like an older member of your family",
"people:elderly": "old, and often not strong or healthy any more",
"people:teenager": "a young person aged between thirteen and nineteen",
"people:adult": "a person who is fully grown and legally no longer a child",
"people:colleague": "a person you work with in the same job or company",
"people:acquaintance": "a person you know a little but who is not a close friend",
"people:stranger": "a person you do not know",
"people:role-model": "a person whose behaviour others want to copy because they admire them",
"people:only-child": "a boy or girl who has no brothers or sisters",
"people:single-parent": "a mother or father who raises children without a partner",
"people:adopt": "to legally take another person's child into your family as your own",
"people:mother-in-law": "the mother of your husband or wife",
"people:middle-aged": "no longer young but not yet old, usually between about forty and sixty",
"people:outgoing": "friendly, lively and happy to talk to new people",
"people:mature": "behaving in a sensible way like a grown person",
"people:fall-out-with": "to stop being friendly with someone after an argument",
"people:look-up-to": "to respect and admire someone",
"people:get-together": "to meet someone to spend time together",
"people:grow-apart": "to slowly become less close to someone as time passes",
"people:upbringing": "the way parents care for a child and teach it how to behave",
"people:sibling": "a brother or sister",
"people:spouse": "a person's husband or wife",
"people:extended-family": "a family group including grandparents, aunts, uncles and cousins as well as parents and children",
"people:nuclear-family": "a family group of only parents and their children",
"people:next-of-kin": "the person who is your closest family member, for official purposes",
"people:ancestor": "a person in your family who lived long before you",
"people:descendant": "a person whose family line comes from someone who lived long ago",
"people:guardian": "a person who is legally responsible for looking after a child who is not their own",
"people:estranged": "no longer friendly or in contact with someone who was once close",
"people:peer": "a person of the same age or social group as you",
"people:orphan": "a child whose parents have both died",
"daily:routine": "the usual things you do every day in the same order",
"daily:chore": "a small job that must be done regularly around the home",
"daily:landlord": "a person who owns a house or flat and lets others pay to live in it",
"daily:furniture": "things like tables, chairs and beds that you put in a room",
"daily:comfortable": "pleasant to sit or lie on, or making you feel relaxed",
"daily:spare-time": "the time when you are free and do not have to work",
"daily:sort-out": "to put things in order or to deal with a problem",
"daily:run-out-of": "to use all of something so that none is left",
"daily:household": "all the people who live together in one home",
"daily:appliance": "a machine used in the home, such as a fridge or a cooker",
"daily:dishwasher": "a machine that cleans plates, cups and cooking tools",
"daily:vacuum-cleaner": "a machine that cleans floors by sucking up dust",
"daily:washing-machine": "a machine that cleans dirty clothes with water",
"daily:neighbourhood": "a small area of a town and the people who live in it",
"daily:doorbell": "a button by a door that makes a sound inside when pressed",
"daily:basement": "a room or floor of a building below the ground",
"daily:attic": "a space under the roof of a house, often used for storing things",
"daily:leak": "a hole or crack where liquid or gas escapes, or the escape itself",
"daily:repair": "to mend something that is broken or damaged",
"daily:decorate": "to make a room look nicer by painting it or putting up paper",
"daily:move-house": "to leave your home and go to live in a different one",
"daily:settle-in": "to get used to a new home or place and feel comfortable there",
"daily:heating": "the system that makes a building warm",
"daily:air-conditioning": "a system that keeps the air in a building cool and fresh",
"daily:commute": "to travel regularly between your home and your work",
"daily:maintenance": "the work needed to keep something in good condition",
"daily:cluttered": "full of too many things in a messy way",
"daily:tenant": "a person who pays money to live in a place owned by someone else",
"daily:renovate": "to repair and improve an old building so it looks new",
"daily:mortgage": "a loan from a bank used to buy a home",
"daily:utilities": "services such as electricity, water and gas that a home uses",
"daily:domestic": "connected with the home and family life",
"daily:spacious": "having a lot of room inside",
"daily:cramped": "too small, with not enough space to move",
"daily:tenancy": "the period of time when you rent a home",
"food:ingredient": "one of the things that you use to make a dish",
"food:portion": "the amount of food served to one person",
"food:diet": "the kinds of food a person usually eats, or a special plan for eating",
"food:vegetarian": "someone who does not eat meat or fish, or food without them",
"food:takeaway": "a meal you buy at a restaurant and eat somewhere else",
"food:raw": "not cooked or heated before eating",
"food:fresh": "recently made or picked and not yet old or kept in a tin",
"food:leftovers": "food that has not been eaten at the end of a meal",
"food:nutritious": "containing the good things your body needs to stay healthy",
"food:starter": "a small dish eaten at the beginning of a meal",
"food:main-course": "the largest and most important dish in a meal",
"food:tip": "a small amount of extra money you give to a worker for good service",
"food:grill": "to cook food over or under strong direct heat",
"food:stir": "to mix food or liquid by moving a spoon round in it",
"food:spice": "a strong-tasting powder or seed added to food to give it flavour",
"food:frozen": "kept at a very low temperature so that it is hard as ice",
"food:organic": "grown or made without artificial chemicals",
"food:ripe": "fully grown and ready to be eaten",
"food:crispy": "hard and dry in a pleasant way, so it breaks easily when bitten",
"food:greasy": "containing or covered with a lot of oil or fat",
"food:bland": "having very little taste",
"food:calorie": "a unit for measuring the energy that food gives you",
"food:protein": "a substance in meat, eggs and beans that helps the body grow",
"food:allergic": "having a bad body reaction to something that is usually harmless",
"food:processed-food": "food that has been changed or treated in a factory before you buy it",
"food:wholegrain": "made from the complete seeds of a plant, with nothing taken out",
"food:appetite": "the feeling that you want to eat food",
"food:moderation": "the habit of not doing or having too much of something",
"food:craving": "a very strong wish for a particular food",
"food:nutrient": "a substance in food that people and animals need to live and grow",
"food:malnutrition": "bad health caused by not eating enough good food",
"food:preservative": "a substance added to food to stop it going bad",
"food:additive": "a substance added to food to change its taste, colour or shelf life",
"food:savoury": "tasting of salt or spice rather than sugar",
"food:cuisine": "the style of cooking of a particular country or region",
"food:perishable": "likely to go bad quickly if it is not kept cold",
"food:intake": "the amount of something that you eat or drink",
"food:dietary": "relating to the kinds of food a person eats",
"time:recently": "a short time ago",
"time:nowadays": "at the present time, compared with the past",
"time:in-advance": "before the time when something happens",
"time:on-time": "at the planned moment, not late",
"time:deadline": "the last day or time by which something must be finished",
"time:schedule": "a plan that lists when things will happen",
"time:temporary": "lasting only for a short time",
"time:permanent": "lasting for a long time or without a planned end",
"time:frequent": "happening or done many times, close together",
"time:decade": "a period of ten years",
"time:period": "a length of time with a beginning and an end",
"time:meanwhile": "during the time that something else is happening",
"time:lately": "in the last few days or weeks",
"time:currently": "at this moment",
"time:shortly": "in a very short time from now",
"time:punctual": "arriving or doing things at the right time, never late",
"time:from-time-to-time": "sometimes, but not often or regularly",
"time:in-the-meantime": "during the time between now and a later event",
"time:up-to-date": "including the newest information or the latest ideas",
"time:simultaneously": "in a way that happens at exactly the same time",
"time:duration": "the length of time that something continues",
"time:interval": "the amount of time between two events",
"time:annual": "happening once every year",
"time:overdue": "late, because the time to pay or return something has passed",
"time:chronological": "arranged in the order in which things happened",
"time:sporadic": "happening only sometimes and not in a regular way",
"time:prolonged": "continuing for longer than usual or longer than expected",
"time:imminent": "about to happen very soon",
"time:ongoing": "continuing to happen now and not yet finished",
"time:in-the-long-run": "after a long period of time, when everything is considered",
"time:prior-to": "before a particular time or event",
"time:lifespan": "the length of time that a person or thing lives or works",
"places:destination": "the place where someone or something is going",
"places:accommodation": "a place to stay, such as a hotel room or flat",
"places:sightseeing": "the activity of visiting interesting places as a tourist",
"places:delay": "a time when something happens later than planned, or to make it later",
"places:departure": "the act of leaving a place, especially at the start of a journey",
"places:arrival": "the act of reaching a place at the end of a journey",
"places:abroad": "in or to a foreign country",
"places:set-off": "to start a journey",
"places:check-in": "to tell the desk you have arrived at a hotel or airport",
"places:suburb": "an area on the edge of a city where many people live",
"places:tourist-attraction": "a place that many visitors come to see",
"places:guidebook": "a book that gives visitors information about a place",
"places:hostel": "a cheap place to stay where travellers often share rooms",
"places:campsite": "a place where people can put up tents and stay",
"places:resort": "a place where many people go for a holiday",
"places:local": "belonging to the area you are talking about",
"places:monument": "a large building or statue that reminds people of a person or event",
"places:itinerary": "a detailed plan of a journey, with places and times",
"places:jet-lag": "tiredness caused by flying across several time zones",
"places:remote": "far from towns and difficult to reach",
"places:congestion": "a situation where too many vehicles block the roads",
"places:landmark": "a building or object that is easy to see and recognise in an area",
"places:metropolis": "a very large and busy city",
"places:heritage": "the buildings, traditions and culture passed down from earlier times",
"places:off-the-beaten-track": "far from the usual places that most visitors go to",
"places:cosmopolitan": "containing people and influences from many different countries",
"places:picturesque": "attractive in a way that looks like a painting",
"places:ancient": "very old, from thousands of years ago",
"work:career": "the series of jobs a person has during their working life",
"work:experience": "knowledge and skill you get from doing a job over time",
"work:skill": "the ability to do something well, usually after practice",
"work:qualification": "an exam result or certificate showing you have studied a subject",
"work:degree": "a course of study at university, or the certificate you get for it",
"work:apply-for": "to ask formally for a job or a place on a course",
"work:interview": "a formal meeting where someone asks you questions to see if you suit a job",
"work:training": "the process of learning the skills needed for a job",
"work:shift": "a fixed period of work, such as nights or mornings",
"work:responsible-for": "having the duty to look after something and to answer for it",
"work:lecture": "a talk given to a group of students about a subject",
"work:unemployed": "without a job but able and wanting to work",
"work:overtime": "extra hours that you work after your normal working day",
"work:teamwork": "the work done by people who do a job together",
"work:volunteer": "a person who works without pay, or to offer to do so",
"work:apprentice": "a young person who learns a trade by working for a skilled person",
"work:profession": "a job that needs special study, such as a doctor or lawyer",
"work:internship": "a short period of work, often unpaid, to gain experience",
"work:residency": "the period of hospital training that a doctor does after finishing medical school",
"work:supervisor": "a person who watches and guides the work of others",
"work:workload": "the amount of work that a person has to do",
"work:burnout": "extreme tiredness and stress caused by working too hard for too long",
"work:curriculum": "the subjects that a school or course teaches",
"work:appraisal": "a meeting or report that judges how well an employee does their job",
"work:prioritise": "to decide which things are most important and deal with them first",
"work:work-life-balance": "the right amount of time given to your job and to your own life",
"work:networking": "meeting and keeping in touch with people who may help you in your career",
"work:freelance": "working for different companies as needed, not for one regular employer",
"work:proficiency": "the skill and ability to do something well, shown through practice",
"work:expertise": "a high level of special knowledge or skill in a particular subject",
"work:competence": "the ability to do a job or task well and correctly",
"work:mentor": "an experienced person who gives advice and support to a less experienced one",
"work:accountable": "having to explain and take responsibility for your actions and decisions",
"work:accreditation": "official approval given to a school or organisation that meets required standards",
"work:autonomy": "the freedom to make your own decisions without being controlled by others",
"work:collaboration": "the act of working together with others to achieve something",
"work:commitment": "strong dedication and willingness to give your time and effort to something",
"work:diligent": "showing careful and steady effort in your work",
"work:entrepreneur": "a person who starts their own business and takes financial risks",
"work:hierarchy": "a system that arranges people in levels from the highest to the lowest",
"work:incentive": "something that encourages you to do more, such as a reward",
"work:liaise": "to communicate with another person or group so that you can work well together",
"work:tenure": "the period of time when someone holds an important job or position",
"work:vocation": "a job that you feel strongly called to do and suited for",
"body:injury": "damage to a part of the body, often caused by an accident",
"body:pain": "the unpleasant feeling you have when part of your body is hurt",
"body:sore": "painful and uncomfortable, especially when touched or used",
"body:swollen": "larger and rounder than normal because of injury or illness",
"body:dizzy": "feeling unsteady, as if everything is spinning around you",
"body:treatment": "medical care given to a person to cure an illness or injury",
"body:recover": "to become well again after an illness or injury",
"body:exercise": "physical activity that you do to stay strong and healthy",
"body:healthy": "having a body that is strong and free from illness",
"body:stress": "a worried, tense feeling caused by problems in your life",
"body:checkup": "a regular examination by a doctor to see if you are well",
"body:hip": "the part on each side of the body where the leg joins the body",
"body:wound": "an injury where the skin is cut or broken",
"body:bruise": "a dark mark on the skin where it has been hit",
"body:muscle": "a piece of body tissue that tightens and relaxes to make you move",
"body:cramp": "a sudden, painful tightening of a muscle",
"body:nausea": "the unpleasant feeling that you are going to be sick",
"body:bleed": "to lose blood from the body",
"body:stitch": "a short piece of thread used to close a cut in the skin",
"body:symptom": "a physical sign that shows you have an illness",
"body:condition": "an illness or health problem that someone has",
"body:chronic": "continuing for a long time, used about an illness or problem",
"body:prescription": "a piece of paper from a doctor that lets you get a medicine",
"body:side-effect": "an unwanted effect of a medicine in addition to its main purpose",
"body:wellbeing": "the state of being comfortable, healthy and happy",
"body:dehydration": "a dangerous lack of water in the body",
"body:nutrition": "the food you eat and how it affects your health and growth",
"body:posture": "the way you hold your body when you sit or stand",
"body:hygiene": "the practice of keeping yourself and your surroundings clean to stay healthy",
"feelings:confident": "feeling sure that you can do something well",
"feelings:anxious": "feeling worried and nervous about something that may happen",
"feelings:upset": "feeling unhappy or worried because something unpleasant has happened",
"feelings:embarrassed": "feeling shy and uncomfortable because of something that happened in public",
"feelings:patient": "able to wait calmly without getting angry or annoyed",
"feelings:honest": "always telling the truth and not cheating or lying",
"feelings:reliable": "able to be trusted to do what you say",
"feelings:calm": "quiet and relaxed, not angry, nervous or excited",
"feelings:frustrated": "feeling annoyed and unhappy because you cannot do what you want",
"feelings:cross": "feeling slightly angry or annoyed with someone",
"feelings:cheerful": "happy and friendly in the way you behave",
"feelings:disappointed": "unhappy because something was not as good as you hoped",
"feelings:grateful": "feeling thankful to someone for something they did for you",
"feelings:stubborn": "refusing to change your mind or do what others want",
"feelings:generous": "happy to give money, time or help to others",
"feelings:mood": "the way you feel at a particular time",
"feelings:guilty": "feeling unhappy because you think you did something wrong",
"feelings:disgusted": "feeling very strong dislike for something that seems unpleasant or bad",
"feelings:empathetic": "able to understand how other people feel because you imagine yourself in their place",
"feelings:reassured": "feeling less worried because someone has comforted you",
"feelings:overwhelmed": "feeling that there is too much to deal with",
"feelings:resilient": "able to become strong or happy again quickly after a problem",
"feelings:considerate": "careful not to upset or cause problems for other people",
"feelings:moody": "often changing quickly from happy to sad or angry for no clear reason",
"feelings:sympathetic": "showing that you care about someone's problems and feel sorry for them",
"feelings:irritable": "quick to become annoyed or angry",
"feelings:insecure": "not confident about yourself and worried about not being good enough",
"feelings:optimistic": "expecting good things to happen in the future",
"feelings:pessimistic": "expecting bad things to happen in the future",
"feelings:vulnerable": "easy to hurt, either in body or in feelings",
"feelings:content": "quietly happy and satisfied with what you have",
"feelings:apprehensive": "worried that something bad may happen",
"feelings:compassionate": "feeling and showing kindness toward people who are suffering",
"feelings:conscientious": "careful to do your work well and in the right way",
"feelings:ambivalent": "having two opposite feelings about something at the same time",
"feelings:indifferent": "showing no interest in or concern about something",
"feelings:resentful": "feeling angry and bitter because you think you were treated unfairly",
"feelings:composed": "calm and in control of your feelings",
"feelings:elated": "extremely happy and excited because something good has happened",
"feelings:sceptical": "doubting that something is true or good",
"feelings:empathy": "the ability to understand how another person feels",
"feelings:poised": "calm, confident and in control of how you act",
"feelings:sentimental": "influenced by tender feelings, especially about the past",
"feelings:tactful": "careful not to say things that might upset other people",
"feelings:detached": "not emotionally involved, so able to judge fairly",
"shopping:afford": "to have enough money to pay for something",
"shopping:bargain": "something you buy for much less than its usual price",
"shopping:refund": "money that is given back to you when you return something",
"shopping:save": "to keep money and not spend it",
"shopping:budget": "the amount of money you have available to spend",
"shopping:loan": "an amount of money that you borrow and must pay back",
"shopping:brand": "a name that a company gives to the products it sells",
"shopping:online-shopping": "buying things over the internet instead of in a shop",
"shopping:guarantee": "a company's promise to repair or replace a product that breaks",
"shopping:exchange": "to give back something you bought and get a different one",
"shopping:in-stock": "available in the shop now and ready to be bought",
"shopping:sold-out": "no longer available because all of it has been bought",
"shopping:purchase": "the act of buying something, or the thing you bought",
"shopping:insurance": "an agreement to pay a company regularly so it pays for loss or damage",
"shopping:expenditure": "the total amount of money that is spent",
"shopping:out-of-pocket": "using your own money to pay for something",
"shopping:consumer": "a person who buys goods or services for their own use",
"shopping:overpriced": "costing more than it is worth",
"shopping:impulse-buy": "something you buy suddenly without planning to",
"shopping:loyalty-card": "a card from a shop that gives you points or discounts for buying there",
"shopping:haggle": "to argue about the price to try to pay less",
"nature:environment": "the air, water and land where people, animals and plants live",
"nature:pollution": "dirty or harmful substances in the air, water or land",
"nature:recycle": "to treat used materials so that they can be used again",
"nature:climate": "the usual weather conditions of a place over a long time",
"nature:flood": "a large amount of water covering land that is usually dry",
"nature:humid": "having a lot of water in the air, so it feels warm and wet",
"nature:protect": "to keep someone or something safe from harm or damage",
"nature:thunder": "the loud noise in the sky that follows a flash of lightning during a storm",
"nature:lightning": "a bright flash of light in the sky during a storm",
"nature:wildlife": "animals and plants that live freely in nature",
"nature:natural-resources": "useful things from nature, such as water, oil and wood, that people use",
"nature:renewable": "able to be replaced naturally, so it never runs out",
"nature:shortage": "a situation where there is not enough of something that people need",
"nature:pollute": "to make air, water or land dirty and harmful",
"nature:climate-change": "the long-term warming of the Earth and the changes in weather that it causes",
"nature:drought": "a long period with very little rain, causing a lack of water",
"nature:sustainable": "using natural things in a way that does not harm the planet for the future",
"nature:emissions": "gases or other substances sent into the air, especially by vehicles and factories",
"nature:heatwave": "a period of unusually hot weather lasting several days",
"nature:endangered": "in danger of soon disappearing completely, said about animals or plants",
"nature:landfill": "a large place where rubbish is buried in the ground",
"nature:landscape": "everything you can see when you look across an area of land",
"nature:habitat": "the natural place where an animal or plant normally lives",
"nature:extinct": "no longer existing anywhere in the world",
"nature:wildfire": "a large fire that spreads quickly through forest or grassland",
"nature:greenhouse-gas": "a gas in the air that traps heat and warms the Earth",
"nature:ozone-layer": "a layer of gas high above the Earth that blocks harmful sunlight",
"nature:biodiversity": "the variety of different living things in a place",
"nature:deforestation": "the cutting down or burning of large areas of forest",
"nature:mitigate": "to make something bad less serious or harmful",
"nature:ecosystem": "all the living things in an area and the way they depend on each other",
"nature:depletion": "a gradual reduction in the amount of something until little is left",
"nature:degradation": "the process of becoming worse in quality or condition",
"nature:resilience": "the ability to recover quickly or resist damage after something bad happens",
"nature:conserve": "to protect something and use it carefully so that it lasts",
"nature:irreversible": "impossible to change back to how it was before",
"nature:carbon-neutral": "adding no more carbon dioxide to the air than is removed",
"tech:device": "a small piece of electronic equipment made for a particular purpose",
"tech:software": "the programs that tell a computer what to do",
"tech:upload": "to send a file from your device to a website or another computer",
"tech:update": "to make something newer by adding the latest information or changes",
"tech:social-media": "websites and apps where people share messages, photos and videos with others",
"tech:search": "to look for information on a computer or the internet",
"tech:charge": "to put electricity into a battery",
"tech:battery": "a small container that stores electricity to power a device",
"tech:log-in": "to type your name and password to start using a computer system or website",
"tech:log-out": "to finish using a computer system or website by leaving your account",
"tech:install": "to put a program on a computer so that it is ready to use",
"tech:delete": "to remove something that is written or stored on a computer",
"tech:screenshot": "a picture of what is shown on a computer or phone screen",
"tech:network": "a group of computers that are connected so they can share information",
"tech:profile": "a page with personal details about a user on a website or app",
"tech:memory": "the part of a device where information and files are stored",
"tech:data": "facts and numbers that are collected and stored for use",
"tech:privacy": "the right to keep your personal life and information secret from others",
"tech:artificial-intelligence": "computer systems that can do things that usually need human thinking",
"tech:backup": "a copy of computer files kept safe in case the originals are lost",
"tech:browser": "a program that you use to look at pages on the internet",
"tech:reliable-source": "a person or place that gives information you can trust to be true",
"tech:cybersecurity": "the protection of computers and online information from criminals and attacks",
"tech:hacker": "a person who gets into other people's computer systems without permission",
"tech:cloud-storage": "a service that keeps your files on the internet instead of on your own device",
"tech:streaming": "playing video or music directly over the internet without saving it first",
"tech:bandwidth": "the amount of data that an internet connection can carry at one time",
"tech:malware": "harmful computer programs made to damage a system or steal information",
"tech:algorithm": "a set of step-by-step rules that a computer follows to solve a problem",
"tech:misinformation": "wrong or untrue information that is spread, often without meaning to cause harm",
"tech:encryption": "the process of changing information into a secret code so others cannot read it",
"tech:authentication": "the process of proving that a person is who they say they are",
"tech:surveillance": "the careful watching of people or places, especially by the police or government",
"tech:proliferation": "a sudden and fast increase in the number of something",
"tech:digital-literacy": "the skills needed to use computers and the internet well and safely",
"tech:disruptive": "causing big changes by replacing the usual way of doing things",
"tech:anonymity": "the state of not having your name or identity known",
"society:opinion": "what you think or believe about something, not a fact",
"society:agree": "to have the same opinion as someone else",
"society:disagree": "to have a different opinion from someone else",
"society:solution": "a way of solving a problem",
"society:community": "the people living in the same area, or a group with shared interests",
"society:government": "the group of people who control and make decisions for a country",
"society:law": "an official rule of a country that everyone must obey",
"society:rule": "a statement of what you must or must not do in a place or activity",
"society:public": "open to or used by everyone, not private",
"society:crime": "illegal activity, or an illegal act that can be punished by law",
"society:citizen": "a person who legally belongs to a country and has rights there",
"society:vote": "to show your choice in an election, or the choice you make",
"society:election": "an occasion when people choose a leader or government by voting",
"society:tradition": "a belief or custom that has continued for a long time in a group",
"society:protest": "a public show of strong disagreement; to say strongly that you disagree",
"society:issue": "an important subject or problem that people discuss",
"society:policy": "a plan or set of rules agreed by a government or organisation",
"society:inequality": "a situation in which some people have more money or rights than others",
"society:poverty": "the state of having very little money or too few things to live on",
"society:access": "the chance or right to use or reach something",
"society:benefit": "a good or helpful result or advantage",
"society:drawback": "a disadvantage that makes something less attractive or useful",
"society:controversial": "causing a lot of angry argument between people with different opinions",
"society:on-the-other-hand": "used to introduce a different or opposite point of view",
"society:it-depends": "used to say that the answer changes according to the situation",
"society:democracy": "a system of government in which people choose leaders by voting",
"society:discrimination": "unfair treatment of a person or group because of who they are",
"society:equality": "the situation in which everyone has the same rights and chances",
"society:immigration": "the act of coming to live permanently in a foreign country",
"society:tolerance": "willingness to accept people or opinions that are different from your own",
"society:refugee": "a person forced to leave their country because of war or danger",
"society:consensus": "an opinion that everyone in a group agrees on",
"society:advocate": "to publicly support an idea or plan and say it should happen",
"society:stigma": "a strong feeling in society that something or someone is shameful",
"society:disparity": "a big and unfair difference between two things or groups",
"society:welfare": "a person's health, comfort and happiness; also help given by the state",
"society:ethical": "connected with principles of what is right and wrong",
"society:dilemma": "a difficult situation in which you must choose between two options",
"society:unprecedented": "never having happened or existed before",
"society:inclusive": "welcoming and including all kinds of people equally",
"society:marginalised": "treated as unimportant and kept away from power or help",
"society:polarisation": "a split of opinion into two opposite extreme groups",
"society:accountability": "the duty to explain and take responsibility for your actions and decisions",
"society:legislation": "the laws made by a government",
"society:discourse": "serious written or spoken discussion of a subject",
"society:cohesion": "the state of a group being united and sticking together well",
"society:demographic": "a group of people of a particular age, sex or background",
"verbs:find-out": "to learn a fact or get information about something",
"verbs:give-up": "to stop doing something that you do regularly",
"verbs:look-after": "to take care of someone or something",
"verbs:pick-up": "to lift something; to collect someone in a vehicle",
"verbs:carry-on": "to continue doing something without stopping",
"verbs:fill-in": "to write the needed information in a form",
"verbs:set-up": "to prepare and arrange equipment so that it is ready to use",
"verbs:turn-up": "to arrive or appear, often without being expected",
"verbs:calm-down": "to become quiet and relaxed after being angry or upset",
"verbs:work-out": "to do physical exercise; to find the answer to a problem",
"verbs:break-down": "to stop working; to lose control of your feelings",
"verbs:check-out": "to leave a hotel after paying; to look at something to see if it is good",
"verbs:come-up-with": "to think of an idea or plan and suggest it",
"verbs:cheer-up": "to become happier, or to make someone feel happier",
"verbs:end-up": "to be in a place or situation after a series of events",
"verbs:figure-out": "to understand or find the answer by thinking",
"verbs:hold-on": "to wait for a short time; to grip something firmly",
"verbs:show-up": "to arrive at a place where people expect you",
"verbs:go-on": "to continue; to happen",
"verbs:get-along": "to have a friendly relationship with someone",
"verbs:come-down-with": "to start to suffer from an illness",
"verbs:pass-out": "to suddenly lose consciousness and fall down",
"verbs:throw-up": "to bring food up from your stomach through your mouth",
"verbs:get-over": "to feel better after an illness or an unhappy experience",
"verbs:cut-down-on": "to eat, drink or use less of something",
"verbs:put-off": "to decide or arrange to do something at a later time",
"verbs:break-out": "to start suddenly, usually something bad like a fire or war",
"verbs:wear-off": "to slowly become weaker and then disappear",
"verbs:come-round": "to wake up after being unconscious",
"verbs:back-up": "to show that something is true; to make a spare copy of data",
"verbs:call-off": "to decide that a planned event will not happen",
"verbs:carry-out": "to do and complete a piece of work or a task",
"verbs:deal-with": "to take action to solve a problem or handle a situation",
"verbs:drop-out": "to leave school or a course before finishing it",
"verbs:look-into": "to try to find out the facts about a problem",
"verbs:turn-down": "to say no to an offer or request; to make a sound quieter",
"verbs:put-up-with": "to accept something annoying without complaining",
"verbs:flare-up": "to suddenly become active or painful again after a quiet period",
"verbs:bring-on": "to cause an illness or problem to start",
"verbs:rule-out": "to decide that something is not possible or not the cause",
"verbs:fend-off": "to defend yourself against an attack or something unwanted",
"verbs:account-for": "to explain the reason for something; to make up an amount of a total",
"verbs:bring-about": "to make something happen",
"verbs:phase-out": "to stop using or doing something gradually in stages",
"verbs:single-out": "to choose one person or thing from a group for special attention",
"verbs:step-down": "to leave an important job or position",
"verbs:set-out": "to explain or list ideas clearly; to begin with a particular aim",
"verbs:live-up-to": "to be as good as people hoped or expected",
"verbs:tie-in-with": "to fit well with or agree with something else",
"academic:analyse": "to examine something carefully in order to understand it",
"academic:approach": "a way of dealing with a subject or problem",
"academic:evidence": "facts or signs that show something is true",
"academic:method": "a planned way of doing something",
"academic:research": "careful study of a subject to discover new facts",
"academic:factor": "one of several things that influence a result or situation",
"academic:conclude": "to decide that something is true after thinking about the facts",
"academic:indicate": "to show that something is true or likely",
"academic:assess": "to judge the quality or level of something or someone",
"academic:concept": "an idea about how something is or how it works",
"academic:define": "to say exactly what a word or idea means",
"academic:interpret": "to explain what you think something means",
"academic:previous": "happening or existing before the present time",
"academic:participant": "a person who takes part in an activity or study",
"academic:theory": "an idea or set of ideas that explains why something happens",
"academic:findings": "the results or facts discovered by a study",
"academic:hypothesis": "an idea that is suggested as an explanation and still needs to be tested",
"academic:variable": "something in an experiment that can change or be changed",
"academic:correlation": "a link between two things that change together",
"academic:bias": "an unfair preference for one side that affects results or judgement",
"academic:sample": "a small group chosen to represent a larger group in a study",
"academic:subsequent": "coming after something else in time",
"academic:comprehensive": "covering all or nearly all parts of something",
"academic:derive": "to come from a source; to get something from something else",
"academic:underlying": "forming the hidden basic reason for something",
"academic:implication": "a possible result or meaning that is not stated directly",
"academic:robust": "strong and unlikely to be shown wrong",
"academic:feasible": "possible to do and likely to work in practice",
"academic:empirical": "based on what is seen or tested in experience, not on ideas alone",
"academic:synthesise": "to combine different ideas or information into one whole",
"academic:paradigm": "a set of ideas that shapes how people think about a subject",
"academic:methodology": "the set of methods and principles used in a particular study",
"academic:mechanism": "the way in which something works or produces a result",
"academic:framework": "a set of ideas or rules that gives a structure for understanding something",
"academic:validity": "the quality of being based on truth and correct reasoning",
"academic:correlate": "to have a close link, so that one changes when the other does",
"academic:theoretical": "based on ideas rather than on practical experience",
"discourse:however": "used to add a statement that contrasts with the previous one",
"discourse:although": "used to introduce a fact that contrasts with the main statement",
"discourse:for-example": "used to introduce something that shows what you mean",
"discourse:first-of-all": "used to introduce the first point or the first thing to do",
"discourse:finally": "at the end, after a long time or a list of things",
"discourse:in-addition": "used to add another point to what you have said",
"discourse:instead": "in the place of something just mentioned",
"discourse:as-a-result": "used to introduce what happened because of something",
"discourse:in-fact": "used to give the true situation, often against what was expected",
"discourse:at-the-same-time": "used to say that two things happen or are true together",
"discourse:in-my-opinion": "used to introduce what you personally think",
"discourse:besides": "used to add another reason or point to your argument",
"discourse:otherwise": "used to say what will happen if something is not done",
"discourse:in-short": "used to give a brief summary of what has been said",
"discourse:therefore": "used to show that something is the result of what was just said",
"discourse:whereas": "used to compare two things that are very different",
"discourse:despite": "used to say that something happens although something else might prevent it",
"discourse:in-contrast": "used to show how two things are very different",
"discourse:furthermore": "used to add a more important or extra point",
"discourse:overall": "when everything is considered as a whole",
"discourse:to-sum-up": "used to introduce a short statement of the main points",
"discourse:moreover": "used to add a further point that supports what you said",
"discourse:nonetheless": "in spite of what has just been said",
"discourse:as-far-as-i-am-concerned": "used to say what you personally think about something",
"discourse:in-other-words": "used to say the same thing again in a simpler way",
"discourse:regardless-of": "without being affected by something; not considering it",
"discourse:on-the-whole": "when everything is considered; in most cases",
"discourse:nevertheless": "in spite of what has just been said",
"discourse:consequently": "as a result of something that has just been mentioned",
"discourse:notwithstanding": "in spite of something that might have stopped it",
"discourse:albeit": "used to add a detail that slightly weakens the main statement",
"discourse:in-light-of": "when you think about new facts or events",
"discourse:by-the-same-token": "used to add a point that follows from the same reasoning",
"discourse:hence": "used to show that something is the result of the facts just given",
"discourse:thereby": "used to say that something happens as a result of an action",
"discourse:whereby": "used to explain the way in which something is done",
"discourse:conversely": "used to introduce the opposite of what was just said",
"discourse:in-view-of": "used to say that something is the reason for a decision",
"discourse:with-regard-to": "used to say what subject you are talking about",
"discourse:that-said": "used to add a point that contrasts with what was just said",
"discourse:as-opposed-to": "used to show that you mean one thing and not the other",
"idioms:make-a-mistake": "to do something wrong or in a way that is not correct",
"idioms:take-a-break": "to stop working for a short time to rest",
"idioms:make-a-decision": "to choose what to do after thinking about the options",
"idioms:pay-attention": "to listen or watch carefully and think about what you hear or see",
"idioms:keep-in-touch": "to continue to communicate with someone regularly",
"idioms:under-the-weather": "feeling slightly ill or unwell",
"idioms:make-an-effort": "to try hard to do something",
"idioms:have-a-look": "to look at something quickly",
"idioms:take-part-in": "to be involved in an activity together with others",
"idioms:make-progress": "to get better or move closer to completing something",
"idioms:get-in-touch": "to contact someone by phone, letter or message",
"idioms:make-sure": "to check or act so that something is certain to happen",
"idioms:take-something-seriously": "to treat something as important and give it proper attention",
"idioms:raise-awareness": "to help more people know about and understand a problem",
"idioms:a-piece-of-cake": "something very easy to do",
"idioms:on-the-mend": "slowly getting better after an illness or injury",
"idioms:break-the-news": "to be the first to tell someone about something important",
"idioms:play-it-by-ear": "to decide what to do as things happen, without a plan",
"idioms:once-in-a-blue-moon": "very rarely, only on a few occasions",
"idioms:break-the-ice": "to make people feel more relaxed when they first meet",
"idioms:get-out-of-hand": "to become impossible to control",
"idioms:make-ends-meet": "to earn just enough money to pay for what you need",
"idioms:call-it-a-day": "to stop work for the day",
"idioms:bear-in-mind": "to remember a fact when making a decision",
"idioms:at-a-loss": "confused and not knowing what to say or do",
"idioms:a-double-edged-sword": "something that has both good and bad effects",
"idioms:the-tip-of-the-iceberg": "a small, visible part of a much bigger problem",
"idioms:touch-and-go": "uncertain, with a real chance of a bad result",
"idioms:back-to-square-one": "back at the beginning after earlier work has failed",
"idioms:beat-around-the-bush": "to avoid saying directly what you really mean",
"idioms:bite-the-bullet": "to accept something unpleasant and deal with it bravely",
"idioms:cut-corners": "to do something in a cheaper or quicker way, with less care",
"idioms:read-between-the-lines": "to find the hidden meaning in what is said or written",
"idioms:the-last-straw": "the final small problem that makes you unable to accept a bad situation",
"idioms:a-blessing-in-disguise": "something that seems bad at first but later brings good results",
"idioms:face-the-music": "to accept the unpleasant results of what you have done",
"idioms:come-to-terms-with": "to learn to accept a difficult situation or fact",
"clothes:bra": "a piece of women's underwear that supports the breasts",
"clothes:leather": "strong material made from animal skin, used for shoes and bags",
"clothes:silk": "smooth, soft cloth made from thread produced by insects",
"clothes:fashion": "the style of clothes that is popular at a particular time",
"clothes:stylish": "attractive in a modern and fashionable way",
"clothes:casual": "relaxed and not suitable for formal occasions",
"clothes:formal": "suitable for serious or official occasions",
"clothes:tight": "fitting closely to the body, often uncomfortably",
"clothes:loose": "not fitting closely to the body",
"clothes:dress-up": "to put on smart clothes for a special occasion",
"clothes:tailor": "a person whose job is to make clothes to fit each customer",
"clothes:fabric": "cloth made by weaving or knitting threads",
"clothes:waterproof": "not allowing water to go through",
"clothes:accessory": "an extra item such as a scarf or belt that goes with clothes",
"clothes:alter": "to change the size or shape of clothes so they fit better",
"transport:vehicle": "a machine with an engine, such as a car or bus, that carries people or goods",
"transport:rush-hour": "the busy time of day when many people travel to or from work",
"transport:motorway": "a wide road for fast traffic over long distances",
"transport:roundabout": "a circular area where roads meet and traffic goes around",
"transport:junction": "a place where two or more roads meet",
"transport:speed-limit": "the fastest speed that vehicles may legally travel on a road",
"transport:driving-licence": "an official document that allows you to drive a vehicle",
"transport:fuel": "a substance such as petrol that is burned to give power to an engine",
"transport:seat-belt": "a strap that holds you in your seat in a vehicle",
"transport:puncture": "a hole in a tyre that lets the air out",
"transport:breakdown": "an occasion when a vehicle stops working",
"transport:carriage": "one of the separate sections of a train where passengers sit",
"transport:fare": "the money you pay to travel by bus, train or plane",
"transport:season-ticket": "a ticket you can use many times during a long period",
"transport:gate": "the place in an airport where you get on your plane",
"transport:runway": "a long, flat strip of ground where planes take off and land",
"transport:traffic-jam": "a long line of vehicles that cannot move or move very slowly",
"transport:cycle-lane": "a part of the road kept for people riding bicycles",
"transport:carpool": "to share a car journey with other people going the same way",
"transport:hitchhike": "to travel by asking drivers to give you a free ride",
"transport:pedestrian": "a person who is walking, especially on a road or in a town",
"transport:cyclist": "a person who rides a bicycle",
"transport:overtake": "to pass a vehicle that is moving more slowly in front of you",
"transport:detour": "a longer route you take to avoid something or to visit a place",
"transport:road-works": "repairs being done on a road, often blocking part of it",
"transport:layover": "a short stop between two flights during a long journey",
"transport:bypass": "a road that goes around a town instead of through it",
"transport:gridlock": "a situation when so many vehicles are in the streets that none can move",
"leisure:exhibition": "a public show of art or interesting objects",
"leisure:gallery": "a building or room where art is shown to the public",
"leisure:theatre": "a building where people go to watch plays",
"leisure:audience": "the people who watch or listen to a show or event",
"leisure:performance": "a show in which someone acts, sings or plays music for people",
"leisure:drama": "a serious play or film about emotional events",
"leisure:documentary": "a film or programme that gives facts about real people or events",
"leisure:series": "a set of television programmes with the same characters or subject",
"leisure:episode": "one programme in a television series",
"leisure:championship": "a competition to decide who is the best player or team",
"leisure:tournament": "a sports competition in which many players or teams play several games",
"leisure:coach": "a person who trains a sports player or team",
"leisure:member": "a person who belongs to a group or club",
"leisure:gardening": "the activity of growing plants and looking after a garden",
"leisure:craft": "an activity in which you make things skilfully with your hands",
"leisure:backpacking": "travelling cheaply while carrying your things in a large bag",
"leisure:amateur": "doing an activity for pleasure and not as a paid job",
"leisure:spectator": "a person who watches a sports event",
"leisure:fixture": "a sports match arranged to take place on a particular date",
"leisure:blockbuster": "a very successful and expensive film that many people go to see",
"leisure:soundtrack": "the music that is played in a film",
"leisure:leisure-activity": "something you do for enjoyment in your free time",
"school:graduate": "to finish your studies at a university and receive a degree",
"core-verbs:achieve": "to succeed in getting something after working hard",
"core-verbs:allow": "to let someone do something",
"core-verbs:avoid": "to stay away from something or stop it from happening",
"core-verbs:compare": "to look at things to see how they are similar or different",
"core-verbs:consider": "to think carefully about something before deciding",
"core-verbs:develop": "to start to have an illness or problem",
"core-verbs:encourage": "to give someone confidence or hope to do something",
"core-verbs:expect": "to think that something will happen or arrive",
"core-verbs:improve": "to become better or make something better",
"core-verbs:include": "to have something as one part of a whole",
"core-verbs:increase": "to become greater in number, size or amount",
"core-verbs:manage": "to be in charge of people or an organisation",
"core-verbs:prepare": "to get ready for something or make something ready",
"core-verbs:prevent": "to stop something from happening",
"core-verbs:provide": "to give someone something they need",
"core-verbs:reduce": "to make something smaller in size, amount or price",
"core-verbs:suggest": "to say an idea or plan for someone to think about",
"core-verbs:support": "to help someone by giving them comfort, money or encouragement",
"core-verbs:accept": "to take something that is offered and say yes to it",
"core-verbs:approve": "to officially agree to something or say that it is good",
"core-verbs:appear": "to start to be seen",
"core-verbs:argue": "to speak angrily with someone because you disagree",
"core-verbs:arrange": "to plan or organise something so that it can happen",
"core-verbs:belong": "to be owned by someone or be part of something",
"core-verbs:cause": "to make something happen",
"core-verbs:complain": "to say that you are unhappy or not satisfied with something",
"core-verbs:discover": "to find something or learn something for the first time",
"core-verbs:discuss": "to talk about something with other people",
"core-verbs:earn": "to get money for work that you do",
"core-verbs:express": "to show what you think or feel in words or actions",
"core-verbs:fix": "to repair something that is broken",
"core-verbs:handle": "to deal with a person or situation",
"core-verbs:imagine": "to form a picture or idea in your mind",
"core-verbs:introduce": "to tell two people each other's names when they first meet",
"core-verbs:involve": "to have something as a necessary part",
"core-verbs:mention": "to say something briefly without giving many details",
"core-verbs:notice": "to see or become aware of something",
"core-verbs:promise": "to say that you will certainly do something",
"core-verbs:realise": "to suddenly understand or become aware of a fact",
"core-verbs:receive": "to get something that someone gives or sends you",
"core-verbs:refuse": "to say that you will not do or accept something",
"core-verbs:remind": "to help someone remember something they must do",
"core-verbs:replace": "to put a new thing or person in the place of another",
"core-verbs:solve": "to find an answer to a problem or puzzle",
"core-verbs:survive": "to stay alive in a difficult or dangerous situation",
"core-verbs:warn": "to tell someone about a possible danger or problem",
"core-verbs:acknowledge": "to accept or admit that something is true",
"core-verbs:assume": "to think that something is true without having proof",
"core-verbs:contribute": "to help to make something happen",
"core-verbs:determine": "to find out the exact facts about something",
"core-verbs:emphasise": "to give special importance to something by stressing it",
"core-verbs:ensure": "to make certain that something happens or is true",
"core-verbs:establish": "to start a company or organisation that will continue for a long time",
"core-verbs:maintain": "to keep something at the same level or in good condition",
"core-verbs:obtain": "to get something, especially by asking or making an effort",
"core-verbs:overcome": "to defeat or control a problem or feeling",
"core-verbs:pursue": "to try to achieve something over a long time",
"core-verbs:require": "to need something or make it necessary",
"core-verbs:adapt": "to change in order to fit a new situation",
"core-verbs:adjust": "to change something slightly to make it work better",
"core-verbs:anticipate": "to expect something and get ready for it before it happens",
"core-verbs:claim": "to say that something is true although it has not been proved",
"core-verbs:clarify": "to make something easier to understand by explaining it more clearly",
"core-verbs:conduct": "to organise and carry out an activity or piece of research",
"core-verbs:convince": "to make someone believe something or agree to do something",
"core-verbs:demonstrate": "to show clearly that something is true",
"core-verbs:distinguish": "to see or understand the difference between two things",
"core-verbs:eliminate": "to completely remove something that is not wanted",
"core-verbs:enhance": "to make something better or stronger",
"core-verbs:enable": "to make it possible for someone to do something",
"core-verbs:generate": "to produce something such as power or money",
"core-verbs:identify": "to recognise something and say exactly what it is",
"core-verbs:imply": "to suggest something without saying it directly",
"core-verbs:accommodate": "to have enough space for a number of people",
"core-verbs:allocate": "to officially give a share of money or time for a particular purpose",
"core-verbs:alleviate": "to make pain or a problem less severe",
"core-verbs:articulate": "to say your thoughts or feelings clearly in words",
"core-verbs:circumvent": "to find a way of avoiding a rule or problem",
"core-verbs:comply": "to do what a rule or order says you must do",
"core-verbs:comprise": "to have as parts or members",
"core-verbs:constitute": "to form or make up a whole or a total",
"core-verbs:convey": "to make ideas or feelings known to another person",
"core-verbs:deteriorate": "to become worse over time",
"core-verbs:diminish": "to become smaller, weaker or less important",
"core-verbs:discern": "to see or understand something that is not obvious",
"core-verbs:elicit": "to get a reaction or information from someone",
"core-verbs:embody": "to be a perfect example of a quality or idea",
"core-verbs:endorse": "to say publicly that you support a person, idea or product",
"core-verbs:exacerbate": "to make a bad situation or problem worse",
"core-verbs:exert": "to use strength, power or influence to affect something",
"core-verbs:foster": "to help something such as a feeling or skill grow",
"core-verbs:hinder": "to make it difficult for something to happen or progress",
"core-verbs:impose": "to force people to accept a rule or limit",
"core-verbs:infer": "to form an opinion from facts or signs rather than being told",
"core-verbs:intervene": "to become involved in a situation in order to change it",
"core-verbs:undermine": "to make someone or something gradually weaker or less sure",
"core-verbs:uphold": "to support a law or principle and keep it in force",
"core-verbs:warrant": "to be a good enough reason for something",
"core-adj:available": "able to be used or obtained, or free to see people",
"core-adj:common": "happening often or found in many places",
"core-adj:familiar": "well known to you because you have seen or heard it before",
"core-adj:likely": "probably going to happen or be true",
"core-adj:necessary": "needed in order to achieve something",
"core-adj:serious": "bad and causing worry or possible danger",
"core-adj:successful": "having achieved what you wanted, or earning a lot of money",
"core-adj:suitable": "right or good enough for a particular purpose or person",
"core-adj:useful": "helpful in doing or achieving something",
"core-adj:recent": "having happened or started only a short time ago",
"core-adj:actually": "used to say what is really true, often when it is surprising",
"core-adj:especially": "used to show that something is more true for one thing than for others",
"core-adj:probably": "used to say that something is very likely",
"core-adj:unfortunately": "used to say that something bad or disappointing is true",
"core-adj:aware": "knowing that something exists or is true",
"core-adj:current": "happening or existing now",
"core-adj:exact": "completely correct in every detail",
"core-adj:extra": "more than is usual or already there",
"core-adj:huge": "extremely large in size or amount",
"core-adj:impossible": "not able to happen or be done",
"core-adj:independent": "not needing help or control from other people",
"core-adj:major": "very large or very important compared with others",
"core-adj:normal": "usual, ordinary and what you would expect",
"core-adj:obvious": "easy to see or understand, with no need for explanation",
"core-adj:particular": "relating to one single person, thing or case, not others",
"core-adj:positive": "hopeful and confident, looking at the good side of things",
"core-adj:negative": "gloomy and expecting the worst, seeing mainly bad things",
"core-adj:similar": "like someone or something else but not exactly the same",
"core-adj:simple": "easy to do or understand, not complicated",
"core-adj:sudden": "happening quickly and without any warning",
"core-adj:typical": "having the usual qualities of a certain kind of person or thing",
"core-adj:various": "of several different kinds",
"core-adj:definitely": "without any doubt, for sure",
"core-adj:eventually": "at the end of a long time or process",
"core-adj:immediately": "at once, without any delay",
"core-adj:mainly": "in most cases or for the most part",
"core-adj:nearly": "almost but not completely",
"core-adj:rather": "to a fairly large degree, often more than expected",
"core-adj:generally": "in most cases or in most places, but not always",
"core-adj:accurate": "completely correct, with no mistakes",
"core-adj:adequate": "good enough or big enough for a particular need",
"core-adj:crucial": "extremely important because everything else depends on it",
"core-adj:essential": "completely necessary, so that you cannot manage without it",
"core-adj:efficient": "working well without wasting time, money or energy",
"core-adj:effective": "producing the result that you want",
"core-adj:relevant": "connected with and important to what is being discussed",
"core-adj:reluctant": "not wanting to do something and slow to agree",
"core-adj:significant": "large or important enough to be noticed",
"core-adj:considerably": "by a large amount",
"core-adj:gradually": "in small steps over a long time",
"core-adj:relatively": "when compared with other things of the same kind",
"core-adj:apparent": "easy to see or understand, or seeming to be true",
"core-adj:appropriate": "right or suitable for a particular situation",
"core-adj:complex": "made of many parts that are linked and hard to understand",
"core-adj:constant": "happening all the time without stopping or changing",
"core-adj:distinct": "clearly different and easy to tell apart from others",
"core-adj:fundamental": "forming the most important base of something",
"core-adj:inevitable": "certain to happen and impossible to stop",
"core-adj:initial": "happening at the beginning, first",
"core-adj:potential": "possible in the future but not yet real",
"core-adj:severe": "very bad or serious, causing great harm or pain",
"core-adj:sufficient": "as much as is needed, enough",
"core-adj:substantial": "large in amount, size or importance",
"core-adj:ambiguous": "having more than one possible meaning, so not clear",
"core-adj:arbitrary": "decided by chance or personal wish, not by reason or rules",
"core-adj:coherent": "logical and well organised so that all parts fit together clearly",
"core-adj:dominant": "stronger or more important than all others of its kind",
"core-adj:explicit": "stated in a clear and direct way, leaving no doubt",
"core-adj:implicit": "understood without being said directly",
"core-adj:inherent": "existing as a natural and permanent part of something",
"core-adj:intrinsic": "coming from within a thing or person, not from outside",
"core-adj:negligible": "so small or unimportant that it can be ignored",
"core-adj:obsolete": "no longer used because something newer and better exists",
"core-adj:pervasive": "spreading into every part of something and hard to avoid",
"core-adj:plausible": "seeming likely to be true or reasonable",
"core-adj:prevalent": "common or widespread at a particular time or place",
"core-adj:profound": "very deep or strong, with great effect",
"core-adj:subtle": "small and delicate, so not easy to notice",
"core-adj:tangible": "real enough to be seen, touched or clearly shown",
"core-adj:viable": "able to work or succeed in practice",
"core-adj:arguably": "in a way that many people could support with good reasons",
"core-adj:predominantly": "in most cases, with one kind being the largest part",
"core-adj:ultimately": "after everything else has been considered, in the end",
"core-nouns:advantage": "something good that helps you do better than others",
"core-nouns:disadvantage": "something that makes a situation worse or causes problems",
"core-nouns:effect": "a change that is caused by something",
"core-nouns:situation": "all the things that are happening at a particular time and place",
"core-nouns:attitude": "the way you think and feel about something, shown in your behaviour",
"core-nouns:behaviour": "the way that a person or animal acts",
"core-nouns:knowledge": "the facts and understanding that you have learned",
"core-nouns:purpose": "the reason why you do something or why something exists",
"core-nouns:quality": "how good or bad something is",
"core-nouns:risk": "the chance that something bad will happen",
"core-nouns:aim": "the thing that you hope to achieve",
"core-nouns:amount": "how much of something there is",
"core-nouns:attempt": "an act of trying to do something, often something difficult",
"core-nouns:choice": "the act of picking between two or more things",
"core-nouns:effort": "physical or mental energy that you use to do something",
"core-nouns:opportunity": "a chance to do something good that you want to do",
"core-nouns:option": "one of the things that you can choose",
"core-nouns:possibility": "something that might happen or be true",
"core-nouns:process": "a series of actions or changes that lead to a result",
"core-nouns:progress": "improvement or movement towards a goal",
"core-nouns:reaction": "what you do or feel as a result of something",
"core-nouns:reality": "the way things truly are, not how you imagine them",
"core-nouns:responsibility": "a duty to look after something or someone and to do the right thing",
"core-nouns:role": "the part that someone or something has in an activity or situation",
"core-nouns:strength": "a good quality or ability that someone has",
"core-nouns:challenge": "something new and difficult that tests your ability",
"core-nouns:pressure": "the feeling of worry caused by having to do something or reach a standard",
"core-nouns:aspect": "one part or side of a situation or subject",
"core-nouns:consequence": "a result of something that happened earlier, often a bad one",
"core-nouns:feature": "an important or interesting part of something",
"core-nouns:outcome": "the final result of an activity or process",
"core-nouns:perspective": "a particular way of thinking about something",
"core-nouns:priority": "something that you think is more important than other things and deal with first",
"core-nouns:range": "a set of different things of the same general kind",
"core-nouns:trend": "a general change or development in the way things are going",
"core-nouns:assumption": "something that you accept as true without checking it",
"core-nouns:circumstance": "a fact or condition that affects a situation or action",
"core-nouns:context": "the situation or words around something that help explain its meaning",
"core-nouns:contrast": "a clear difference between two things that are compared",
"core-nouns:element": "one basic part of something larger",
"core-nouns:insight": "a clear and deep understanding of something complicated",
"core-nouns:instance": "a single example or case of something",
"core-nouns:limitation": "a weakness or a rule that stops something from being better or bigger",
"core-nouns:obstacle": "something that blocks your way or makes it hard to achieve something",
"core-nouns:principle": "a basic rule or belief about what is right or how things work",
"core-nouns:proportion": "a part of a whole, compared with the size of the whole",
"core-nouns:resource": "something such as money, materials or water that you can use",
"core-nouns:strategy": "a detailed plan for achieving success over a long time",
"core-nouns:criterion": "a standard that you use to judge or decide something",
"core-nouns:dimension": "one part or side of a problem, or a measurement such as length or width",
"core-nouns:discrepancy": "a difference between things that should be the same",
"core-nouns:hierarchy": "a system that arranges people or things in levels from highest to lowest",
"core-nouns:magnitude": "the great size or importance of something",
"core-nouns:momentum": "the force or speed that makes a process keep growing or moving",
"core-nouns:nuance": "a very small difference in meaning, feeling or colour",
"core-nouns:premise": "an idea or statement that you accept as true and build an argument on",
"core-nouns:prerequisite": "something that must exist or be done before something else can happen",
"core-nouns:rationale": "the set of reasons that explain why something is done",
"core-nouns:threshold": "the level at which something starts to happen or have an effect",
"core-nouns:trajectory": "the path of a development or career over time",
"core-nouns:notion": "an idea or belief about something, often a vague one",
"core-nouns:legacy": "something left behind from the past that still affects the present",
"core-nouns:constraint": "something that limits what you can do",
"core-nouns:paradox": "a situation that seems strange because it has opposite qualities or contradicts itself",
"core-nouns:precedent": "an earlier action or decision that is used as an example for later ones",
"core-nouns:setback": "a problem that delays or reverses your progress",
"core-nouns:pitfall": "a hidden danger or mistake that is easy to make",
"core-nouns:catalyst": "a person or event that quickly causes a change",
"t-office:agenda": "a list of the things to be talked about at a meeting",
"t-office:minutes": "the written record of what was said and decided at a meeting",
"t-office:memo": "a short written note sent between people in the same company",
"t-office:attachment": "a file that is sent together with an email",
"t-office:conference-call": "a phone talk in which three or more people speak together",
"t-office:reschedule": "to change the time or date of an event",
"t-office:postpone": "to decide that something will happen at a later time",
"t-office:supervisor": "a person whose job is to watch and direct other workers",
"t-office:headquarters": "the main office of a company, where its leaders work",
"t-office:proposal": "a formal written plan or suggestion for others to consider",
"t-office:get-back-to": "to contact someone again later with an answer or information",
"t-office:branch": "a local office or shop that belongs to a larger organisation",
"t-office:subsidiary": "a company that is owned and controlled by a larger company",
"t-office:merger": "the joining of two companies into one",
"t-office:facilitate": "to make a process or discussion easier or smoother",
"t-office:delegate": "to give part of your work or power to someone else",
"t-office:on-behalf-of": "acting as the representative of someone else",
"t-office:in-charge-of": "having control of and being responsible for something",
"t-office:as-of": "starting from a particular date or time",
"t-office:stakeholder": "a person or group with an interest in a business and affected by its decisions",
"t-office:streamline": "to make a system or process simpler and faster by removing unnecessary steps",
"t-hr:applicant": "a person who asks formally for a job or a place on a course",
"t-hr:candidate": "a person who is being considered for a job",
"t-hr:resume": "a short written summary of your education, work and skills for a job application",
"t-hr:position": "a job in a company or organisation",
"t-hr:hire": "to give someone a job and pay them to work for you",
"t-hr:employee": "a person who is paid to work for a company or another person",
"t-hr:employer": "a person or company that pays people to work for them",
"t-hr:promotion": "a move to a higher and more important job in the same company",
"t-hr:retire": "to stop working permanently, usually because of age",
"t-hr:full-time": "for the whole of the normal working week",
"t-hr:part-time": "for only some of the normal working week",
"t-hr:vacancy": "a job that is available because nobody is doing it now",
"t-hr:reference": "a letter or person that tells a new employer about your character and work",
"t-hr:maternity-leave": "time off work that a woman takes before and after she has a baby",
"t-hr:orientation": "a session that gives new workers basic information about a company and their job",
"t-hr:payroll": "the list of employees and the money that a company pays them",
"t-hr:benefits-package": "all the extra things besides salary that a company gives its workers",
"t-hr:performance-review": "a meeting where a manager judges how well an employee has done their job",
"t-hr:qualified": "having the education or training needed for a job",
"t-hr:resign": "to officially tell your employer that you are leaving your job",
"t-hr:recruit": "to find new people and persuade them to join a company",
"t-hr:probation": "a short period at the start of a job when your work is tested",
"t-hr:redundancy": "the loss of a job because the employer no longer needs that worker",
"t-hr:incentive": "something that encourages people to work harder or do more",
"t-hr:turnover": "the rate at which workers leave a company and are replaced",
"t-finance:expense": "money that you spend on something",
"t-finance:invoice": "a document that lists goods or services provided and the money owed for them",
"t-finance:payment": "an amount of money that is paid, or the act of paying it",
"t-finance:account": "an arrangement with a bank to keep your money and record what goes in and out",
"t-finance:estimate": "to guess the size, cost or amount of something by thinking about the facts",
"t-finance:quarterly": "happening four times a year, every three months",
"t-finance:revenue": "the total money that a company or government receives",
"t-finance:income": "the money that a person receives regularly, especially from work",
"t-finance:deposit": "a first payment made to keep something, or money put in a bank",
"t-finance:withdraw": "to take money out of a bank account",
"t-finance:interest-rate": "the percentage that a bank charges for a loan or pays on saved money",
"t-finance:reimburse": "to pay back money that someone has spent for you",
"t-finance:audit": "an official check of a company's money records to see that they are correct",
"t-finance:investment": "money put into something in order to make a profit later",
"t-finance:shareholder": "a person who owns a part of a company",
"t-finance:forecast": "a statement about what is expected to happen in the future",
"t-finance:deficit": "the amount by which money spent is greater than money received",
"t-finance:fiscal-year": "a period of twelve months that a company or government uses for its accounts",
"t-finance:asset": "something valuable that a person or company owns",
"t-finance:liability": "an amount of money that a person or company owes",
"t-finance:cash-flow": "the movement of money coming into and going out of a business",
"t-marketing:client": "a person or company that pays a professional for a service",
"t-marketing:launch": "to make a new product available to the public for the first time",
"t-marketing:survey": "a set of questions asked to many people to find out their opinions",
"t-marketing:competitor": "a person or company trying to win the same customers as you",
"t-marketing:brochure": "a thin printed booklet with pictures and information about a product or place",
"t-marketing:customer-service": "the part of a company that helps people who buy its products",
"t-marketing:slogan": "a short, memorable phrase used to advertise a company or product",
"t-marketing:promote": "to advertise something so that more people know about it and buy it",
"t-marketing:retail": "the business of selling goods to the public in shops",
"t-marketing:free-of-charge": "costing nothing to the person who gets it",
"t-marketing:market-share": "the part of all sales in an area of trade that one company has",
"t-marketing:target-audience": "the group of people an advert or product is made for",
"t-marketing:campaign": "a planned series of activities to sell a product or reach a goal",
"t-marketing:feedback": "comments from people about how good or bad something is",
"t-marketing:promotion": "a special offer or activity that encourages people to buy a product",
"t-marketing:competitive": "having many companies all trying hard to win customers",
"t-marketing:exceed": "to be more than an amount or limit",
"t-marketing:endorsement": "public support for a product, often by a famous person, to help sell it",
"t-logistics:delivery": "the act of bringing goods to a person or place",
"t-logistics:shipment": "a quantity of goods sent together to a place",
"t-logistics:warehouse": "a large building where goods are kept before they are sold or sent",
"t-logistics:supplier": "a person or company that provides goods to a business",
"t-logistics:out-of-stock": "not available in the shop at the moment",
"t-logistics:warranty": "a written promise to repair or replace a product if it breaks within a set time",
"t-logistics:fragile": "easily broken or damaged",
"t-logistics:contract": "a legal written agreement between people or companies",
"t-logistics:courier": "a person or company that carries packages and documents quickly",
"t-logistics:packaging": "the boxes or covers used to wrap goods for sale or transport",
"t-logistics:in-bulk": "in large amounts, usually at a lower price",
"t-logistics:damaged": "harmed or broken, so that it no longer works or looks good",
"t-logistics:inventory": "the full list or amount of goods a business has in stock",
"t-logistics:quote": "a statement of how much a job or product will cost",
"t-logistics:procurement": "the process of finding and buying goods or services for an organisation",
"t-logistics:backorder": "an order for goods that are not in stock yet and will be sent later",
"t-logistics:dispatch": "to send goods or a message to a place",
"t-logistics:expedite": "to make a process happen faster",
"t-logistics:freight": "goods carried by ship, plane, train or lorry",
"t-logistics:backlog": "an amount of work that should have been done already but is still waiting",
"t-travel:reservation": "an arrangement to keep a table, room or seat for you",
"t-travel:boarding-pass": "a card that lets you get on a plane",
"t-travel:conference": "a large meeting where people with shared interests listen to talks and discuss ideas",
"t-travel:venue": "the place where an event takes place",
"t-travel:attendee": "a person who is present at an event or meeting",
"t-travel:registration": "the process of putting your name on an official list to join something",
"t-travel:catering": "the job of providing food and drink at an event",
"t-travel:customs": "the place at a border where officials check goods coming into a country",
"t-travel:visa": "an official stamp or document that allows you to enter or stay in a country",
"t-travel:keynote-speaker": "the main person who gives the most important talk at a conference",
"t-travel:workshop": "a short meeting where people learn by doing practical activities",
"t-travel:reimbursement": "money paid back to you for costs you had",
"t-travel:round-trip": "a journey to a place and back again",
"i-education:course": "a series of lessons on a particular subject",
"i-education:degree": "a qualification given by a university after you finish your studies",
"i-education:online-learning": "studying through lessons given over the internet",
"i-education:tuition-fee": "the money you pay to a school or university for teaching",
"i-education:scholarship": "money given to a student to help pay for their studies",
"i-education:assignment": "a piece of work given to a student or worker to do",
"i-education:curriculum": "all the subjects taught in a school or course",
"i-education:academic-performance": "how well a student does in their school or university studies",
"i-education:critical-thinking": "the ability to judge ideas carefully and decide whether they are true",
"i-education:lifelong-learning": "the idea of gaining new knowledge and skills throughout your whole life",
"i-education:vocational-training": "teaching of the practical skills needed for a particular job",
"i-education:compulsory": "required by a rule or law, so that you must do it",
"i-education:tertiary-education": "study at a university or college after leaving school",
"i-education:plagiarism": "the act of copying someone else's work and saying it is your own",
"i-education:literacy": "the ability to read and write",
"i-environment:waste": "things that are no longer wanted and are thrown away",
"i-environment:energy": "the power from sources such as electricity, gas or sun that makes things work",
"i-environment:rubbish": "things you throw away because you do not want them",
"i-environment:emission": "a gas or substance that is sent out into the air",
"i-environment:renewable-energy": "power from sources that never run out, such as sun or wind",
"i-environment:fossil-fuel": "coal, oil or gas formed from dead plants and animals millions of years ago",
"i-environment:conservation": "the protection of nature and wild places from damage or loss",
"i-environment:carbon-footprint": "the amount of harmful gas a person or activity sends into the air",
"i-environment:global-warming": "the slow rise in the Earth's temperature caused by gases in the air",
"i-environment:single-use-plastic": "goods made of a light man-made material that are thrown away after one use",
"i-environment:biodegradable": "able to rot naturally and not harm the environment",
"i-technology:digital": "using computer technology and numbers to store or show information",
"i-technology:smartphone": "a mobile phone that can use the internet and run apps",
"i-technology:innovation": "a new idea, method or invention, or the use of such ideas",
"i-technology:automation": "the use of machines to do work that people did before",
"i-technology:rely-on": "to need something or someone and trust them to help you",
"i-technology:screen-time": "the hours a person spends looking at phones, computers or televisions",
"i-technology:cyberbullying": "the use of the internet to hurt or frighten another person",
"i-technology:breakthrough": "an important discovery or success that allows progress",
"i-health:habit": "something you do often and almost without thinking",
"i-health:junk-food": "cheap meals or snacks that are quick to eat but not good for your health",
"i-health:balanced-diet": "a healthy mix of different kinds of food that you regularly eat",
"i-health:lifestyle": "the way a person lives, including their daily habits",
"i-health:obesity": "the condition of being very overweight in a way that is bad for health",
"i-health:sedentary": "spending a lot of time sitting down and not moving much",
"i-health:well-being": "the state of feeling healthy, comfortable and happy",
"i-health:prevention": "action taken to stop something bad from happening",
"i-health:life-expectancy": "the number of years a person is likely to live",
"i-health:mental-health": "the condition of a person's mind and feelings",
"i-health:healthcare-system": "the organisation of doctors, hospitals and services that look after people's health",
"i-health:awareness": "knowing about a subject or problem and understanding it",
"i-health:addiction": "the condition of being unable to stop doing or taking something harmful",
"i-urban:traffic": "the cars and other vehicles moving along roads",
"i-urban:public-transport": "buses, trains and other vehicles that anyone can pay to use",
"i-urban:population": "the number of people living in a place",
"i-urban:countryside": "land outside towns with farms, fields and villages",
"i-urban:crowded": "full of too many people",
"i-urban:skyscraper": "a very tall building with many floors",
"i-urban:urban": "connected with towns and cities",
"i-urban:rural": "connected with the countryside and not towns",
"i-urban:urbanisation": "the growth of towns and cities as more people move into them",
"i-urban:affordable-housing": "homes that people with low or middle incomes can pay for",
"i-urban:infrastructure": "the basic systems such as roads, bridges and power that a country needs",
"i-urban:commuter": "a person who travels to work and back home every day, usually a long way",
"i-urban:high-rise": "having many floors, like a tall building",
"i-urban:slum": "a poor, crowded part of a city with bad housing",
"i-urban:gentrification": "the change of a poor area when richer people move in and prices rise",
"i-crime:police": "the people whose job is to catch criminals and keep order",
"i-crime:prison": "a building where people are kept as punishment for crimes",
"i-crime:punish": "to make someone suffer because they did something wrong",
"i-crime:steal": "to take something that belongs to someone else without permission",
"i-crime:victim": "a person who is hurt or harmed by a crime or accident",
"i-crime:fine": "money you must pay as punishment for breaking a rule",
"i-crime:witness": "a person who sees a crime or accident happen",
"i-crime:arrest": "to take someone to the police because they may have committed a crime",
"i-crime:offender": "a person who has broken the law",
"i-crime:punishment": "the action of making someone suffer for doing wrong, or what is done to them",
"i-crime:rehabilitation": "help given to criminals to live a normal, useful life after prison",
"i-crime:deter": "to make someone decide not to do something by showing it has bad results",
"i-crime:juvenile-crime": "crimes done by young people who are not yet adults",
"i-crime:sentence": "the punishment that a judge gives to someone found guilty",
"i-crime:community-service": "unpaid work for the public given to a criminal instead of prison",
"i-crime:law-enforcement": "the work of making sure people obey the law",
"i-crime:deterrent": "something that makes people afraid to do something wrong",
"i-crime:fraud": "the crime of tricking people to get money illegally",
"i-economy:economy": "the system of money, jobs, buying and selling in a country",
"i-economy:trade": "the buying and selling of goods between people or countries",
"i-economy:company": "a business that sells goods or services",
"i-economy:international": "involving more than one country",
"i-economy:unemployment": "the situation of not having a paid job",
"i-economy:export": "to sell goods to another country",
"i-economy:industry": "all the businesses that make one type of product or provide one type of service",
"i-economy:globalisation": "the growing connection of businesses and cultures around the whole world",
"i-economy:workforce": "all the people who work for a company or in a country",
"i-economy:invest": "to put money into something hoping to make more money later",
"i-economy:demand": "the amount of a product that people want to buy",
"i-economy:supply": "the amount of a product that is available to buy",
"i-economy:multinational": "operating in several countries",
"i-economy:recession": "a period when a country's economy gets weaker and jobs are lost",
"i-economy:outsource": "to pay another company to do part of your work",
"i-economy:cost-of-living": "the amount of money people need for everyday things like food and housing",
"i-media:advertisement": "a notice or short film that tries to persuade people to buy something",
"i-media:newspaper": "a daily or weekly printed publication with news and articles",
"i-media:channel": "a television or radio station that broadcasts programmes",
"i-media:article": "a piece of writing about a subject in a newspaper or magazine",
"i-media:headline": "the title above a news story in large letters",
"i-media:journalist": "a person who writes or reports news for newspapers, television or websites",
"i-media:mass-media": "television, radio, newspapers and the internet that reach very large numbers of people",
"i-media:influence": "to change what someone thinks or does, or the power to do this",
"i-media:biased": "showing unfair support for one side",
"i-media:censorship": "the control of what people may say, read or see by cutting out parts",
"i-media:celebrity": "a famous person, especially in entertainment or sport",
"i-media:fake-news": "false stories that look like real reports of events",
"i-media:propaganda": "information, often untrue, used to make people support a government or idea",
"i-media:clickbait": "online headlines made to attract attention so that people open the page",
"x-collocations:pay-attention-to": "to listen or watch carefully and think about something",
"x-collocations:meet-a-deadline": "to finish something by the time it is due",
"x-collocations:attend-a-meeting": "to go to a gathering where people talk about work",
"x-collocations:heavy-traffic": "a large number of vehicles moving slowly on the road",
"x-collocations:take-medication": "to swallow or use medicine for an illness",
"x-collocations:suffer-from": "to have an illness or problem that makes life hard",
"x-collocations:depend-on": "to be decided by something else",
"x-collocations:be-responsible-for": "to have the duty to look after or deal with something",
"x-collocations:take-advantage-of": "to use a chance or situation well to get a benefit",
"x-collocations:take-place": "to happen, especially as planned",
"x-collocations:give-a-presentation": "to talk to a group of people to show and explain information",
"x-collocations:look-forward-to": "to feel happy and excited about something that will happen",
"x-collocations:make-sense": "to be easy to understand or reasonable",
"x-collocations:have-an-effect-on": "to cause a change in someone or something",
"x-collocations:play-a-role-in": "to be part of something and help it happen",
"x-collocations:raise-awareness-of": "to make more people know about an important problem",
"x-collocations:lead-to": "to cause something to happen later",
"x-collocations:result-in": "to cause a particular thing to happen in the end",
"x-collocations:due-to": "used to give the cause of something",
"x-collocations:in-terms-of": "when talking about one particular point",
"x-collocations:reduce-emissions": "to send less harmful gas into the air",
"x-collocations:commit-a-crime": "to do something that is against the law",
"x-collocations:play-a-part-in": "to be involved in something and help it happen",
"x-collocations:take-into-account": "to think about certain facts when making a decision",
"x-collocations:pose-a-threat-to": "to be a possible danger to someone or something",
"x-collocations:give-rise-to": "to cause something to begin or exist",
"x-collocations:on-a-regular-basis": "again and again at fixed or similar times",
"x-collocations:at-the-expense-of": "with a bad effect on something else",
"x-collocations:gain-access-to": "to get the chance to use or reach something"
};

/* ===== Từ điển giao diện VI-EN (dùng cho nút chuyển ngôn ngữ). Khóa: đoạn chữ tiếng Việt trong giao diện, {1} {2} là giá trị chèn lúc chạy. ===== */
const I18N_EN = {
"(câu sai)": "(incorrect sentence)",
"(phím 1 đến 4, cách để lật thẻ)": "(keys 1 to 4, ways to flip the card)",
"(phần {1}/{2})": "(part {1}/{2})",
"({1} câu)": "({1} questions)",
", chọn Sao chép dữ liệu trên máy cũ, dán vào máy mới. Cách này thay thế hoàn toàn, không gộp.": ", choose Copy data on the old device, then paste it on the new device. This replaces everything completely and does not merge.",
", cần khoảng {1} từ mỗi ngày để kịp hạn": ", about {1} words a day needed to meet the deadline",
", cần mạng": ", needs internet",
", hiện 80 đầu tiên": ", showing the first 80",
", nhiều hơn mức {1} bạn đang đặt": ", more than the {1} you have set",
", nhiều nhất {1} phút một ngày": ", at most {1} minutes a day",
", rồi": ", then",
", thẻ mới": ", new cards",
", xây dựng như một không gian học tập riêng và một thử nghiệm về cách công nghệ hỗ trợ việc tự học lâu dài.": ", built as a personal learning space and an experiment in how technology can support long-term self-study.",
", {1} tuổi,": ", {1} years old,",
", {1}/{2} bài giao tiếp, {3}/{4} ca bệnh": ", {1}/{2} communication lessons, {3}/{4} cases",
", {1}/{2} học phần": ", {1}/{2} modules",
", đang theo kịp": ", on track",
", đã quên": ", forgotten",
". Dòng in nghiêng là định nghĩa bằng tiếng Anh đơn giản, dùng được khi giải thích cho bệnh nhân.": ". The italic line is a simple English definition you can use when explaining to a patient.",
". Không cần quyền nào khác.": ". No other permission is needed.",
"0 chưa đạt, 1 còn yếu, 2 khá, 3 tốt. Điểm trung bình hiện tại:": "0 not passed, 1 weak, 2 fair, 3 good. Current average score:",
"12 tuần": "12 weeks",
"14 ngày gần đây": "Last 14 days",
"1–2 phút": "1–2 minutes",
"2 phút": "2 minutes",
"20 câu ngẫu nhiên từ cả {1} câu": "20 random questions out of all {1} questions",
"30 câu, lấy ngẫu nhiên từ cả ngân hàng, mỗi câu bốn lựa chọn": "30 questions, randomly drawn from the whole bank, four options each",
"4 đoạn, 16 chỗ trống, có chỗ chọn nguyên câu": "4 passages, 16 blanks, some with whole-sentence choices",
"44 âm, cặp âm, kho từ phát âm": "44 sounds, sound pairs, pronunciation word bank",
"7 ngày tới": "Next 7 days",
"8 chỗ trống, chọn từ": "8 blanks, choose the word",
"8 chỗ trống, gõ từ": "8 blanks, type the word",
": bốn kỹ năng, mỗi kỹ năng 25%. Ngữ pháp được chấm trong Viết và Nói.": ": four skills, 25% each. Grammar is scored within Writing and Speaking.",
": câu hỏi về dạng từ xuất hiện nhiều nhất, sau đó là thì, chủ động và bị động, hòa hợp chủ ngữ và động từ, giới từ, liên từ, đại từ quan hệ.": ": word-form questions appear most often, followed by tenses, active and passive voice, subject-verb agreement, prepositions, conjunctions, and relative pronouns.",
": không có bài ngữ pháp riêng. “Grammatical Range and Accuracy” là một trong bốn tiêu chí chấm Writing và Speaking, thưởng điểm cho câu phức viết đúng.": ": there are no separate grammar lessons. “Grammatical Range and Accuracy” is one of the four scoring criteria for Writing and Speaking, rewarding correctly written complex sentences.",
": không nhớ ra.": ": could not remember.",
": mỗi nhóm từ vựng của chặng được chia thành các bài 5 từ, cấu trúc giống bài G/M (học từ, kiểm tra nghĩa, điền từ, từ loại, nghe, sắp xếp câu, chép chính tả, viết đúng, phát âm, nói). Có thêm": ": each vocabulary group of the stage is split into lessons of 5 words, structured like G/M lessons (learn words, check meaning, fill in the word, word class, listening, sentence ordering, dictation, write correctly, pronunciation, speaking). There is also",
": nhận ra cấu trúc đang kiểm tra (bị động, tường thuật, điều kiện, so sánh…) rồi dùng đúng từ cho sẵn, không đổi dạng.": ": recognize the structure being tested (passive, reported speech, conditional, comparison...), then use the given word as is, without changing its form.",
": nhớ ngay lập tức. Hãy chấm thật lòng; thuật toán dựa vào đó để hẹn lịch.": ": remembered instantly. Rate honestly; the algorithm uses it to schedule reviews.",
": nhớ ra nhưng rất chật vật.": ": remembered, but with great difficulty.",
": nhớ ra sau một chút suy nghĩ.": ": remembered after some thought.",
": đọc cả câu rồi mới nhìn lựa chọn. Xác định chỗ trống cần loại từ gì trước khi nghĩ đến nghĩa.": ": read the whole sentence before looking at the options. Decide which word class the blank needs before thinking about meaning.",
": đọc cả đoạn, vì nhiều chỗ trống phụ thuộc câu trước và câu sau.": ": read the whole passage, because many blanks depend on the sentences before and after.",
"A1 Sơ cấp": "A1 Beginner",
"A2 Sơ trung cấp": "A2 Elementary",
"Anh-Mỹ": "US English",
"Anh-Mỹ:": "US English:",
"Anh/chị bị bao lâu rồi?": "How long have you had this?",
"Anh/chị cho tôi biết họ tên và ngày sinh nhé?": "Could you tell me your full name and date of birth?",
"Anh/chị nên uống một viên, ngày hai lần.": "You should take one tablet, twice a day.",
"Anh/chị uống gì không?": "Are you taking any medication?",
"B1 Trung cấp": "B1 Intermediate",
"B2 Trung cao cấp": "B2 Upper intermediate",
"Biết": "Known",
"Biểu đồ ra-đa mức hoàn thiện kỹ năng: {1}": "Radar chart of skill completion: {1}",
"Buồn chán, mất hứng thú (sàng lọc trầm cảm)": "Feeling down, losing interest (depression screening)",
"Bài báo": "Article",
"Bài cặp âm {1}": "Sound pairs lesson {1}",
"Bài giao tiếp": "Communication lesson",
"Bài gồm 6 từ mới, một mẫu câu, nghe hiểu, luyện tập, phát âm và nói.": "The lesson has 6 new words, a sentence pattern, listening comprehension, practice, pronunciation, and speaking.",
"Bài gồm 6 từ mới, một mẫu câu, nghe hiểu, luyện tập, phát âm và nói. Điểm chỉ tính câu đúng ngay lần đầu. Từ mới vào hàng ôn tập khi bạn học xong bài.": "The lesson has 6 new words, a sentence pattern, listening comprehension, practice, pronunciation, and speaking. Only answers correct on the first try count toward the score. New words enter the review queue when you finish the lesson.",
"Bài gồm {1} từ mới của chặng {2}: học từ, kiểm tra nghĩa, điền từ, từ loại, nghe hiểu, sắp xếp câu, chép chính tả, viết đúng, phát âm và nói.": "The lesson has {1} new words from stage {2}: learn words, check meaning, fill in the word, word class, listening comprehension, sentence ordering, dictation, write correctly, pronunciation, and speaking.",
"Bài học": "Lesson",
"Bài học và thẻ": "Lessons and cards",
"Bài luận: công nghệ và sức khỏe": "Essay: technology and health",
"Bài luận: học trực tuyến": "Essay: online learning",
"Bài ngẫu nhiên": "Random lesson",
"Bài ngẫu nhiên, chặng {1}": "Random lesson, stage {1}",
"Bài này có điểm thấp nhất ({1}%).": "This lesson has the lowest score ({1}%).",
"Bài này nên học sau {1}. Bạn vẫn có thể học trước nếu muốn.": "This lesson should be studied after {1}. You can still study it first if you want.",
"Bài đọc {1}, {2} từ, {3} câu hỏi": "Reading {1}, {2} words, {3} questions",
"Bác sĩ, người dẫn chuyện.": "Doctor, narrator.",
"Bám sát lỗi hay gặp": "Focus on common mistakes",
"Bán hàng và tiếp thị": "Sales and marketing",
"Báo cáo": "Report",
"Báo cáo cuối ca mô phỏng các nhóm tiêu chí giao tiếp lâm sàng của OET Speaking: xây dựng quan hệ, tìm hiểu quan điểm bệnh nhân (ICE), cấu trúc buổi hỏi, thu thập và cung cấp thông tin. Đây là công cụ tự luyện, không phải điểm OET.": "The end-of-case report simulates the clinical communication criteria groups of OET Speaking: building rapport, exploring the patient's perspective (ICE), structuring the consultation, and gathering and giving information. This is a self-practice tool, not an OET score.",
"Báo cáo cuối ca mô phỏng các nhóm tiêu chí giao tiếp lâm sàng của bài thi OET Speaking: xây dựng quan hệ, tìm hiểu quan điểm bệnh nhân, cấu trúc buổi hỏi, thu thập thông tin và cung cấp thông tin.": "The end-of-case report simulates the clinical communication criteria groups of the OET Speaking test: building rapport, exploring the patient's perspective, structuring the consultation, gathering information, and giving information.",
"Bước 2 trên 4: tóm tắt ca": "Step 2 of 4: case summary",
"Bước 3 trên 4: lập luận và giải thích": "Step 3 of 4: reasoning and explanation",
"Bước 4 trên 4: báo cáo": "Step 4 of 4: report",
"Bạn bè mời ăn tối ngày mai. Từ chối lịch sự, nêu lý do và gợi ý ngày khác.": "A friend invites you to dinner tomorrow. Decline politely, give a reason, and suggest another day.",
"Bạn có biết nghĩa của từ này không? Nghĩ câu trả lời trước khi bấm.": "Do you know the meaning of this word? Think of the answer before you tap.",
"Bạn có muốn đi cùng không?": "Would you like to come along?",
"Bạn là bác sĩ. Hỏi bệnh bằng cách tự gõ, tự nói hoặc chọn từ ngân hàng câu hỏi; ngân hàng có cả những cách hỏi chưa phù hợp để bạn học cách tránh. Cuối buổi, bạn viết tóm tắt ca, chọn chẩn đoán và cách giải thích cho bệnh nhân.": "You are the doctor. Take the history by typing, speaking, or choosing from the question bank; the bank also includes unsuitable ways of asking so you can learn to avoid them. At the end, you write a case summary, choose a diagnosis, and choose how to explain it to the patient.",
"Bạn là bác sĩ. Hỏi bệnh bằng cách tự gõ, tự nói, hoặc chọn từ ngân hàng câu hỏi. Ngân hàng có cả những cách hỏi chưa phù hợp để bạn học cách tránh. Cuối buổi, bạn viết tóm tắt ca, chọn chẩn đoán và cách giải thích cho bệnh nhân.": "You are the doctor. Take the history by typing, speaking, or choosing from the question bank. The bank also includes unsuitable ways of asking so you can learn to avoid them. At the end, you write a case summary, choose a diagnosis, and choose how to explain it to the patient.",
"Bạn nghe thấy từ nào? {1}": "Which word did you hear? {1}",
"Bạn đang ở bước {1}/{2}. Trạng thái được lưu tự động.": "You are on step {1}/{2}. Progress is saved automatically.",
"Bạn đã học gần đủ từ vựng và ngữ pháp của chặng.": "You have learned almost all the vocabulary and grammar of the stage.",
"Bạn đã học hết các bài hiện có. Hôm nay hãy giữ nhịp ôn tập.": "You have finished all current lessons. Today, keep up your review rhythm.",
"Bạn đã học {1}. Giờ tự hỏi bệnh một bệnh nhân ảo từ đầu đến cuối.": "You have learned {1}. Now take a history from a virtual patient from start to finish on your own.",
"Bạn đã học đủ bài chuẩn bị.": "You have completed enough preparation lessons.",
"Bạn đã hỏi đủ mọi ý chính.": "You have asked about all the main points.",
"Bạn đã qua mọi chặng phổ thông.": "You have passed all the general stages.",
"Bạn đến từ đâu?": "Where are you from?",
"Bản ghi lấy từ Free Dictionary API (dữ liệu Wiktionary và Wikimedia Commons, giấy phép CC BY-SA), có giọng Anh-Mỹ và Anh-Anh riêng. Mỗi từ chỉ tải một lần rồi được lưu lại trên máy. Từ nào chưa có bản ghi sẽ tự chuyển sang giọng máy.": "Recordings come from the Free Dictionary API (Wiktionary and Wikimedia Commons data, CC BY-SA license), with separate US and UK voices. Each word is downloaded only once and then saved on your device. Words without a recording automatically switch to the device voice.",
"Bản mẫu": "Template",
"Bản tóm tắt còn quá ngắn. Viết ít nhất 2 câu.": "The summary is too short. Write at least 2 sentences.",
"Bấm micro rồi đọc một từ. Nếu máy nghe ra đúng từ, người bản xứ cũng dễ hiểu bạn.": "Tap the mic and read a word. If the device recognizes the right word, native speakers will understand you easily.",
"Bậc 1": "Level 1",
"Bậc 2": "Level 2",
"Bậc 3 (4.0–5.5)": "Level 3 (4.0–5.5)",
"Bậc 4 (6.0–8.0)": "Level 4 (6.0–8.0)",
"Bậc 5 (8.5–10)": "Level 5 (8.5–10)",
"Bật": "On",
"Bật đồng bộ": "Turn on sync",
"Bật đồng bộ (làm một lần trên mỗi thiết bị)": "Turn on sync (do this once on each device)",
"Bắt đầu": "Start",
"Bắt đầu luyện nghe": "Start listening practice",
"Bắt đầu với hai bài đầu tiên": "Start with the first two lessons",
"Bắt đầu với hai bài đầu tiên.": "Start with the first two lessons.",
"Bắt đầu ôn": "Start review",
"Bắt đầu ôn {1} thẻ": "Start reviewing {1} cards",
"Bằng chứng thật.": "Real evidence.",
"Bằng chứng trong bài: “": "Evidence in the text: “",
"Bệnh học": "Pathology",
"Bệnh học đại cương": "General pathology",
"Bệnh nhân vừa vào phòng. Hãy chào, giới thiệu bản thân và mở đầu bằng một câu hỏi mở.": "The patient has just entered the room. Greet them, introduce yourself, and start with an open question.",
"Bệnh nhân đau gối. Hỏi bốn câu: vị trí, tính chất, yếu tố làm nặng, mức độ.": "The patient has knee pain. Ask four questions: location, character, aggravating factors, severity.",
"Bệnh nhân, người đối thoại.": "Patient, conversation partner.",
"Bệnh thường gặp theo hệ cơ quan": "Common conditions by organ system",
"Bỏ qua": "Skip",
"Bỏ qua bước nói": "Skip the speaking step",
"C1 Cao cấp": "C1 Advanced",
"Ca bệnh": "Case",
"Ca bệnh ảo": "Virtual case",
"Ca bệnh ảo: {1}": "Virtual case: {1}",
"Cho tôi xin hóa đơn.": "Could I have the receipt, please?",
"Chuẩn bị 1 phút với vài từ khóa, rồi nói thành tiếng và ghi âm bằng điện thoại để nghe lại. Chỉ ghi vài ý, đừng viết cả bài.": "Prepare for 1 minute with a few keywords, then speak aloud and record on your phone to listen back. Note only a few ideas; do not write the whole answer.",
"Chào buổi chiều": "Good afternoon",
"Chào buổi sáng": "Good morning",
"Chào buổi trưa": "Good midday",
"Chào buổi tối": "Good evening",
"Chào bệnh nhân, giới thiệu vai trò, xác nhận danh tính và hỏi lý do đến khám bằng câu hỏi mở.": "Greet the patient, introduce your role, confirm their identity, and ask the reason for the visit with an open question.",
"Chào hỏi, nói tên, quê quán, nghề nghiệp và hỏi lại người khác.": "Greet, say your name, hometown and job, and ask the other person in return.",
"Chào, giới thiệu vai trò, xác nhận danh tính, rồi hỏi một câu mở.": "Greet, introduce your role, confirm identity, then ask one open question.",
"Chính xác và đa dạng": "Accurate and varied",
"Chính xác.": "Correct.",
"Chưa biết hoặc biết rất ít tiếng Anh.": "You know no English or very little.",
"Chưa biết, xem nghĩa": "Don't know yet, show meaning",
"Chưa bật đồng bộ thiết bị": "Device sync is not turned on",
"Chưa có bộ đề nào.": "No question sets yet.",
"Chưa có câu hỏi cho phần này. Hãy học thêm từ vựng hoặc chọn phần khác.": "There are no questions for this section yet. Learn more vocabulary or choose another section.",
"Chưa có mã truy cập GitHub.": "No GitHub access token yet.",
"Chưa có thẻ nào. Học xong một bài, 6 từ của bài sẽ thành 12 thẻ ôn tập.": "No cards yet. After you finish a lesson, its 6 words become 12 review cards.",
"Chưa có từ nào. Học xong một bài, hoặc chọn “Ôn”, “Biết” trong Thư viện từ vựng.": "No words yet. Finish a lesson, or choose “Review” or “Known” in the Vocabulary library.",
"Chưa kết nối được thư viện âm thanh người thật. Tạm dùng giọng máy.": "Could not connect to the human voice library. Using the device voice for now.",
"Chưa luyện cặp âm nào.": "No sound pairs practiced yet.",
"Chưa làm kiểm tra đầu vào.": "You have not taken the placement test yet.",
"Chưa nghe thấy giọng nói. Thử nói to và gần micro hơn.": "No voice detected. Try speaking louder and closer to the microphone.",
"Chưa tải được giọng đọc. Thử lại sau vài giây.": "Could not load the voice. Try again in a few seconds.",
"Chưa đúng.": "Not correct.",
"Chưa đúng. Thử lại một lần.": "Not correct. Try once more.",
"Chưa được cấp quyền micro. Hãy cho phép micro cho trang này.": "Microphone permission has not been granted. Please allow the microphone for this page.",
"Chương trình học, giao diện, thuật toán gợi ý, ôn tập, phát âm và nội dung chuyên ngành đều được thử nghiệm và cải tiến liên tục.": "The curriculum, interface, recommendation algorithm, review, pronunciation and specialist content are all continuously tested and improved.",
"Chạm các mảnh theo thứ tự tiền tố, gốc, hậu tố.": "Tap the pieces in the order prefix, root, suffix.",
"Chạm các ô bên dưới theo thứ tự.": "Tap the boxes below in order.",
"Chạm vào các ô bên dưới theo đúng thứ tự.": "Tap the boxes below in the correct order.",
"Chạm vào từ gạch chân để xem nghĩa.": "Tap an underlined word to see its meaning.",
"Chấm thế nào cho đúng": "How to rate correctly",
"Chấm điểm dựa trên gì": "What scoring is based on",
"Chất lượng phụ thuộc giọng cài trên thiết bị. Trên iPad, vào Cài đặt, Trợ năng, Nội dung được đọc, Giọng nói, tải giọng tiếng Anh loại Nâng cao để nghe tự nhiên hơn.": "Quality depends on the voice installed on your device. On iPad, go to Settings, Accessibility, Spoken Content, Voices, and download an Enhanced English voice for a more natural sound.",
"Chặng này còn quá ít từ chưa học để tạo bài ngẫu nhiên.": "This stage has too few unlearned words to create a random lesson.",
"Chặng sau: {1}": "Next stage: {1}",
"Chặng trước: {1}": "Previous stage: {1}",
"Chặng {1}: {2}": "Stage {1}: {2}",
"Chặng {1}: {2}{3}": "Stage {1}: {2}{3}",
"Chỉ tính thời gian bạn đang làm bài. Một ngày được tính vào chuỗi khi học từ 5 phút.": "Only the time you are actively working is counted. A day counts toward your streak when you study for 5 minutes.",
"Chỉ tính thời gian khi bạn đang làm bài": "Only the time you are actively working is counted",
"Chỉ để tham khảo, không sao chép:": "For reference only, do not copy:",
"Chọn bài khác": "Choose another lesson",
"Chọn câu hợp lý nhất cho chỗ trống": "Choose the most suitable sentence for the blank",
"Chọn nghĩa đúng": "Choose the correct meaning",
"Chọn theo các lý do đến khám phổ biến nhất ở tuyến chăm sóc ban đầu: nhiễm trùng hô hấp trên, tăng huyết áp, đái tháo đường, đau lưng, đau khớp, bệnh da, tiết niệu, tiêu hóa, tâm lý, và đau ngực cần nhận diện cấp cứu.": "Based on the most common reasons for visits in primary care: upper respiratory infection, hypertension, diabetes, back pain, joint pain, skin disease, urinary, digestive, psychological, and chest pain requiring emergency recognition.",
"Chọn tháng": "Choose month",
"Chọn từ điền vào chỗ trống.": "Choose the word to fill in the blank.",
"Chọn từ điền đoạn văn": "Choose words to fill in the passage",
"Chọn đáp án cho chỗ trống": "Choose the answer for the blank",
"Chọn đúng loại từ hoặc dạng từ: danh từ, động từ, tính từ, trạng từ.": "Choose the correct part of speech or word form: noun, verb, adjective, adverb.",
"Chọn đề khác": "Choose another test",
"Chủ đề này không còn từ mới": "This topic has no new words left",
"Chữ 'bị' trong tiếng Việt không dịch thành be. Ngôi thứ ba dùng has: She has a cough.": "In Vietnamese, the word for \"suffer from\" is not translated as be. For the third person, use has: She has a cough.",
"Chữ viết và âm đọc khác xa nhau": "Spelling and pronunciation are very different",
"Con người và gia đình": "People and family",
"Cuộc sống hằng ngày": "Daily life",
"Cài đặt": "Settings",
"Các ca khác": "Other cases",
"Các chủ đề hay ra đề Speaking và Writing.": "Topics that often appear in Speaking and Writing tests.",
"Các cách nói về tương lai": "Ways to talk about the future",
"Các cặp âm người Việt hay nhầm. Nghe và chọn đúng từ trước, vì tai phân biệt được thì miệng mới sửa được. Sau đó tự nói và để máy nghe thử.": "Sound pairs that Vietnamese speakers often confuse. Listen and choose the correct word first, because if your ear can tell them apart, your mouth can be corrected. Then speak by yourself and let the device listen.",
"Các dạng bài thường gặp trong các kỳ thi tiếng Anh. Mỗi câu trắc nghiệm chỉ có một đáp án đúng, có giải thích bằng tiếng Việt. Đạt từ 70% là qua bộ đề.": "Common question types in English exams. Each multiple-choice question has only one correct answer, with an explanation in Vietnamese. A score of 70% or more passes the set.",
"Các từ bạn đã học, gom theo chủ đề. Muốn thêm từ mới, mở": "The words you have learned, grouped by topic. To add new words, open",
"Các từ của bài này đã có trong hàng ôn tập, lịch ôn không bị thay đổi.": "The words in this lesson are already in the review queue; your review schedule is not changed.",
"Các ô chữ": "Letter tiles",
"Các ý cần có": "Key points to include",
"Cách dùng": "Usage",
"Cách hỏi nên thay": "Better way to ask",
"Cách đọc bảng": "How to read the table",
"Câu bạn nghe được": "The sentence you heard",
"Câu bị động": "Passive sentences",
"Câu có từ {1}: “{2}”": "Sentences with the word {1}: “{2}”",
"Câu của bạn": "Your sentence",
"Câu dưới đây có một từ sai. Chạm vào từ đó.": "The sentence below has one wrong word. Tap that word.",
"Câu hỏi của bạn": "Your question",
"Câu hỏi gián tiếp (lịch sự)": "Indirect questions (polite)",
"Câu khác": "Another sentence",
"Câu mẫu": "Example sentence",
"Câu nói động lực": "Motivational quote",
"Câu tiếp": "Next sentence",
"Câu trả lời": "Answer",
"Câu trắc nghiệm được viết và rà soát để chỉ có một đáp án hợp lệ, kèm giải thích bằng tiếng Việt.": "Multiple-choice questions are written and reviewed to have only one valid answer, with an explanation in Vietnamese.",
"Câu tường thuật": "Reported speech",
"Câu {1}/{2}. Chọn nghĩa đúng, hoặc “Tôi không biết” nếu không chắc.": "Question {1}/{2}. Choose the correct meaning, or “I don't know” if you are not sure.",
"Câu đa dạng (đơn, ghép, phức), lỗi ít và không gây khó hiểu.": "Varied sentences (simple, compound, complex), few errors, and nothing hard to understand.",
"Câu điều kiện loại 1": "First conditional",
"Câu điều kiện loại 2": "Second conditional",
"Câu điều kiện loại 3 và câu ước": "Third conditional and wishes",
"Câu đúng, dễ nghe, nhấn trọng âm và ngắt nhịp hợp lý.": "Correct, easy-to-hear sentences with reasonable stress and rhythm.",
"Câu đúng:": "Correct sentence:",
"Còn thiếu hoặc sai": "Missing or wrong",
"Còn {1} thẻ": "{1} cards left",
"Còn {1} từ thư viện cho {2} trong {3} ngày: cần khoảng": "{1} library words left for {2} in {3} days: need about",
"Còn {1} từ thư viện đến {2}{3}.": "{1} library words left until {2}{3}.",
"Có (tồn tại)": "There is / there are (existence)",
"Có chữ viết nhưng không đọc": "Has spelling but is not pronounced",
"Có mở, thân, kết; mỗi đoạn một ý; dùng từ nối đa dạng, không lặp máy móc.": "Has an opening, body and conclusion; one idea per paragraph; varied linking words, not mechanically repeated.",
"Có {1}/{2} ý.": "{1}/{2} points covered.",
"Cô ấy bắt đầu ca lúc bảy giờ.": "She starts her shift at seven o'clock.",
"Công cụ nhanh": "Quick tools",
"Công nghệ": "Technology",
"Công nghệ và Internet": "Technology and the Internet",
"Công nghệ và truyền thông": "Technology and media",
"Công thức": "Formula",
"Công tác và sự kiện": "Business trips and events",
"Công việc": "Work",
"Công việc và học tập": "Work and study",
"Công việc và luyện thi B1": "Work and B1 exam prep",
"Cơ": "Muscles",
"Cơ bản": "Basic",
"Cơ chế di truyền cơ bản và tế bào trong bối cảnh xã hội": "Basic genetic mechanisms and cells in a social context",
"Cơ chế di truyền cơ bản và tế bào trong mô": "Basic genetic mechanisms and cells in tissue",
"Cơ quan và hệ cơ quan": "Organs and organ systems",
"Cơ thể hoạt động thế nào: tuần hoàn, hô hấp, chuyển hóa, miễn dịch.": "How the body works: circulation, respiration, metabolism, immunity.",
"Cơn đau có cảm giác thế nào?": "What does the pain feel like?",
"Cơn đau và bệnh học": "Pain and pathology",
"Cảm xúc và tính cách": "Emotions and personality",
"Cấp độ": "Level",
"Cấp độ từ vựng đối chiếu với khung CEFR, có tham khảo NGSL và TOEIC Service List (Browne, Culligan và Phillips, CC BY-SA 4.0) và Oxford 3000 như danh mục kiểm tra, không sao chép định nghĩa. Ngữ pháp theo tiến trình của English Grammar Profile và British Council.": "Vocabulary levels are cross-checked against the CEFR framework, with reference to the NGSL and the TOEIC Service List (Browne, Culligan and Phillips, CC BY-SA 4.0) and the Oxford 3000 as checklists, without copying definitions. Grammar follows the progression of the English Grammar Profile and the British Council.",
"Cần 70% để đạt.": "70% needed to pass.",
"Cần {1}% để đạt.": "{1}% needed to pass.",
"Cặp âm khác": "Other sound pairs",
"Cặp âm người Việt hay nhầm": "Sound pairs Vietnamese speakers often confuse",
"Cặp âm tối thiểu": "Minimal pairs",
"Cặp âm tối thiểu, âm cuối, đuôi -s và -ed, mạo từ và những lỗi dịch từng chữ như “I am headache” được đưa vào ngay từ bài đầu.": "Minimal pairs, final sounds, -s and -ed endings, articles, and word-for-word translation errors such as “I am headache” are included right from the first lesson.",
"Cặp âm tối thiểu, âm cuối, đuôi -s và -ed, mạo từ và những lỗi dịch từng chữ như “I am headache” được đưa vào ngay từ đầu.": "Minimal pairs, final sounds, -s and -ed endings, articles, and word-for-word translation errors such as “I am headache” are included right from the start.",
"Cột xanh là ngày đạt mục tiêu {1} phút.": "Blue bars are days when you reached the goal of {1} minutes.",
"Cụm động từ": "Phrasal verbs",
"Của bạn": "Yours",
"Da (hệ bì)": "Skin (integumentary system)",
"Da và hệ bì": "Skin and the integumentary system",
"Da, mắt và tai": "Skin, eyes and ears",
"Danh sách từ vựng do tác giả biên soạn, cấp độ đối chiếu với khung CEFR, có tham khảo NGSL và TOEIC Service List (Browne, Culligan và Phillips, CC BY-SA 4.0) và Oxford 3000 như danh mục kiểm tra, không sao chép định nghĩa. Ngữ pháp theo tiến trình của English Grammar Profile và British Council. Phòng khám ảo bám theo NICE (NG84, NG136, NG59, NG226, CG95, hướng dẫn UTI của UKHSA) và tiêu chuẩn chẩn đoán đái tháo đường của WHO. Phiên âm theo Cambridge Dictionary. Các câu ngạn ngữ là câu truyền thống thuộc phạm vi công cộng.": "Vocabulary lists compiled by the author, with levels cross-checked against the CEFR framework, referring to the NGSL and the TOEIC Service List (Browne, Culligan and Phillips, CC BY-SA 4.0) and the Oxford 3000 as checklists, without copying definitions. Grammar follows the progression of the English Grammar Profile and the British Council. The Virtual clinic follows NICE (NG84, NG136, NG59, NG226, CG95, UKHSA UTI guidance) and the WHO diagnostic criteria for diabetes. Phonetic transcriptions follow the Cambridge Dictionary. The proverbs are traditional sayings in the public domain.",
"Danh từ lõi thông dụng": "Common core nouns",
"Danh từ và động từ đổi trọng âm, họ từ dời trọng âm": "Nouns and verbs that shift stress, word families that move stress",
"Diễn đạt bằng từ khác nhau, biết nói lại khi quên từ.": "Express yourself with different words, and know how to rephrase when you forget a word.",
"Du lịch": "Travel",
"Dán dữ liệu đã sao chép": "Paste copied data",
"Dùng tiếng Anh linh hoạt, chính xác cho học thuật và nghề nghiệp, kể cả trong y khoa.": "Use English flexibly and precisely for academic and professional purposes, including in medicine.",
"Dùng trong lời chào trang Hôm nay.": "Used in the greeting on the Today page.",
"Dùng từ chính xác, có kết hợp từ tự nhiên, ít lặp từ.": "Use words precisely, with natural collocations and little repetition.",
"Dùng được kèm ghi công:": "Can be used with attribution:",
"Dùng để đối chiếu định dạng đề, không sao chép đề.": "Used to check the exam format, do not copy the exam.",
"Dạng từ": "Word forms",
"Dạng từ: danh, động, tính, trạng từ": "Word forms: noun, verb, adjective, adverb",
"Dặn cách dùng thuốc, đưa lời khuyên, tránh thuật ngữ và kiểm tra bệnh nhân đã hiểu (teach-back).": "Give instructions on how to take medicine, offer advice, avoid jargon and check that the patient understood (teach-back).",
"Dặn cách uống thuốc giảm đau (ngày ba lần, sau ăn), thêm một lời khuyên, rồi kiểm tra bệnh nhân hiểu chưa.": "Give instructions on how to take painkillers (three times a day, after meals), add one piece of advice, then check that the patient understood.",
"Dặn thuốc, khuyên, kiểm tra hiểu (teach-back); điều trị, triệu chứng và xét nghiệm mở rộng.": "Medication instructions, advice, checking understanding (teach-back); treatment, symptoms and extended tests.",
"Dễ": "Easy",
"Dừng ghi": "Stop recording",
"Dữ liệu": "Data",
"Dữ liệu chỉ nằm trong trình duyệt trên thiết bị này. Safari có thể xóa dữ liệu của trang web ít dùng, nên hãy xuất bản sao lưu mỗi tuần.": "Data is stored only in the browser on this device. Safari may delete data from rarely used websites, so export a backup every week.",
"Dữ liệu học được cất trong một Gist bí mật trên tài khoản GitHub của chính bạn, cùng tài khoản đang chạy trang English-web. Mỗi thiết bị gộp dữ liệu hai chiều: thẻ ôn lấy bản mới nhất, điểm lấy mức cao nhất, thời gian học cộng theo từng thiết bị.": "Your learning data is stored in a secret Gist on your own GitHub account, the same account that runs the English-web site. Each device merges data in both directions: review cards take the newest version, scores take the highest value, and study time is added up per device.",
"Dữ liệu không đúng định dạng JSON.": "The data is not in valid JSON format.",
"Dự án được xây dựng như một không gian học tập cá nhân và một quá trình thử nghiệm về cách công nghệ có thể hỗ trợ việc tự học lâu dài.": "The project was built as a personal learning space and an experiment in how technology can support long-term self-study.",
"Dựa trên lỗi của người Việt.": "Based on the mistakes Vietnamese speakers make.",
"Dựa trên việc bạn thực sự làm": "Based on what you actually do",
"FSRS ước lượng lúc bạn sắp quên từng thẻ và hẹn ôn đúng lúc đó. Mỗi từ có hai thẻ: nhìn từ nhớ nghĩa, và nhìn nghĩa gõ lại từ.": "FSRS estimates when you are about to forget each card and schedules the review at exactly that moment. Each word has two cards: see the word and recall the meaning, and see the meaning and type the word.",
"Ghi âm": "Record",
"Ghép thuật ngữ": "Match terms",
"Ghép thuật ngữ y khoa": "Match medical terms",
"Ghép thuật ngữ: nội soi dạ dày": "Match terms: gastroscopy",
"Ghép thuật ngữ: đau khớp": "Match terms: joint pain",
"Ghép và hiểu thuật ngữ; tên cơ quan của các hệ tim mạch, hô hấp, tiêu hóa, thần kinh, tiết niệu, nội tiết, giác quan.": "Match and understand terms; organ names for the cardiovascular, respiratory, digestive, nervous, urinary, endocrine and sensory systems.",
"Giai đoạn y khoa đang tập trung": "Medical phase in focus",
"Giao diện": "Appearance",
"Giao diện sáng": "Light theme",
"Giao diện theo thiết bị": "Match device theme",
"Giao diện tối": "Dark theme",
"Giao diện {1}": "{1} theme",
"Giao diện {1}, bấm để đổi": "{1} theme, tap to change",
"Giao diện {1}. Bấm để đổi": "{1} theme. Tap to change",
"Giao diện: {1}": "Theme: {1}",
"Giao thông và đi lại": "Transport and travel",
"Giao tiếp hằng ngày, A1 đến A2.": "Everyday communication, A1 to A2.",
"Giao tiếp hằng ngày, nền cho CEFR và VSTEP bậc 1–3.": "Everyday communication, the base for CEFR and VSTEP levels 1-3.",
"Giao tiếp lâm sàng": "Clinical communication",
"Giao tiếp việc quen thuộc: mua sắm, chỉ đường, công việc và sinh hoạt hằng ngày.": "Handle familiar tasks: shopping, directions, work and daily routines.",
"Gist sẽ được tạo ở lần đồng bộ đầu tiên.": "Gist will be created at the first sync.",
"GitHub báo lỗi": "GitHub reported an error",
"Giáo dục": "Education",
"Giải phẫu": "Anatomy",
"Giải phẫu, rồi sinh lý, bệnh học và lâm sàng. Mỗi thanh là tỉ lệ thuật ngữ đã học.": "Anatomy, then physiology, pathology and clinical terms. Each bar shows the share of terms learned.",
"Giải thích từ gastritis cho bệnh nhân bằng tiếng Anh đơn giản, rồi nêu một triệu chứng.": "Explain the word gastritis to a patient in plain English, then name one symptom.",
"Giải thích và dặn dò": "Explaining and advising",
"Giải trí và sở thích": "Entertainment and hobbies",
"Giấy phép ghi theo trang của từng nguồn khi tra cứu ngày 01.10.2026; hãy đọc lại điều khoản trước khi sao chép.": "Licenses are recorded from each source's page as checked on 01.10.2026; reread the terms before copying.",
"Giọng chuẩn": "Standard voice",
"Giọng chính": "Main voice",
"Giọng phụ": "Secondary voice",
"Giọng thứ hai": "Second voice",
"Giọng {1}. Bấm để đổi": "{1} voice. Tap to change",
"Giọng đọc": "Voice",
"Giọng đọc là giọng tổng hợp của thiết bị, chọn giọng Anh-Mỹ hoặc Anh-Anh trong Cài đặt. Nhận dạng giọng nói chỉ cho biết máy hiểu bạn nói từ nào, không chấm từng âm vị như các ứng dụng chuyên dụng.": "The voice is your device's synthesized speech; choose a US or UK voice in Settings. Speech recognition only tells you which word the computer understood, and does not score each sound like specialized apps do.",
"Giọng đọc, mục tiêu, sao lưu dữ liệu": "Voice, goals, data backup",
"Giọng đọc, sao lưu dữ liệu": "Voice, data backup",
"Giới thiệu bản thân trong ba câu: tên, quê, nghề.": "Introduce yourself in three sentences: name, hometown, job.",
"Giới thiệu bản thân, gia đình, nói giờ và ngày; dùng đúng be, số nhiều và mạo từ.": "Introduce yourself, your family, tell the time and date; use be, plurals and articles correctly.",
"Giới từ": "Prepositions",
"Giới từ chỉ thời gian và nơi chốn": "Prepositions of time and place",
"Giới từ và cụm giới từ cố định.": "Prepositions and fixed prepositional phrases.",
"Góc tác giả": "About the author",
"Gõ MỘT từ cho chỗ trống ({1}).": "Type ONE word for the blank ({1}).",
"Gõ chỗ trống, gồm từ cho sẵn": "Type the blank, including the given word",
"Gõ câu hỏi bằng tiếng Anh…": "Type your question in English…",
"Gõ một từ": "Type one word",
"Gõ từ còn thiếu.": "Type the missing word.",
"Gõ từ hoặc cụm từ cần điền": "Type the word or phrase to fill in",
"Gõ từ tiếng Anh": "Type the English word",
"Gõ từ điền đoạn văn": "Type the word to fill the passage",
"Gần đây có hiệu thuốc không?": "Is there a pharmacy nearby?",
"Gần đúng, sai chính tả nhẹ.": "Close, minor spelling mistake.",
"Gặp gỡ và giới thiệu bản thân": "Meeting and introducing yourself",
"Gọi món lịch sự, hỏi về món ăn và nói mình bị dị ứng gì.": "Order politely, ask about dishes and say what you are allergic to.",
"Gọi món và ăn uống": "Ordering and dining",
"Gọi món, mua sắm, hỏi đường, nói về cơ thể và thời tiết.": "Order food, shop, ask for directions, talk about the body and weather.",
"Gọi một món ăn và đồ uống thật lịch sự, nói mình dị ứng với gì.": "Order a dish and a drink politely, and say what you are allergic to.",
"Gốc từ": "Word root",
"Gợi ý, {1}": "Hint, {1}",
"Gợi ý:": "Hint:",
"Hai kỹ năng chưa thể chấm tự động, nên ở đây bạn tự chấm theo bốn tiêu chí giống cách các kỳ thi IELTS và VSTEP chấm. Viết hoặc nói thật, rồi đối chiếu từng tiêu chí và đọc lại bài của mình sau một ngày để thấy lỗi.": "Two skills cannot be scored automatically, so here you self-assess on four criteria, the way IELTS and VSTEP exams do. Write or speak for real, then check each criterion and reread your work after a day to spot mistakes.",
"Hai mạch học chạy song song. Ngữ pháp học ở bài thông dụng được dùng lại trong bài y khoa cùng cấp độ, ví dụ thì quá khứ và": "Two tracks run in parallel. Grammar learned in general lessons is reused in medical lessons at the same level, for example the past tense and",
"Hai mạch học chạy song song: tiếng Anh thông dụng làm nền, tiếng Anh y khoa dùng lại chính ngữ pháp đó trong phòng khám.": "Two tracks run in parallel: general English is the foundation, and medical English reuses the same grammar in the clinic.",
"Hai mạch song song": "Two parallel tracks",
"Hai mạch song song.": "Two parallel tracks.",
"Hai mục tiêu song song: tiếng Anh phổ thông từ con số 0 đến C1, và tiếng Anh y khoa cơ bản bắt đầu từ thuật ngữ giải phẫu, sinh lý, bệnh học. Trang Hôm nay tự chia từ mới mỗi ngày theo các mục tiêu này.": "Two parallel goals: general English from zero to C1, and basic medical English starting with anatomy, physiology and pathology terms. The Today page splits new words each day across these goals.",
"Hai từ chỉ khác nhau đúng một âm. Nghe xen kẽ từng cặp để tai quen với sự khác biệt.": "The two words differ by exactly one sound. Listen to each pair in turn to train your ear to the difference.",
"Hiểu và dùng câu rất đơn giản về bản thân, gia đình và nhu cầu trước mắt.": "Understand and use very simple sentences about yourself, your family and immediate needs.",
"Hiểu ý chính của văn bản phức tạp, trao đổi trôi chảy và tự nhiên với người bản xứ.": "Understand the main ideas of complex texts and communicate fluently and naturally with native speakers.",
"Hiện bài đọc": "Show reading",
"Hiện nghĩa": "Show meaning",
"Hiện tại hoàn thành hay quá khứ đơn": "Present perfect or past simple",
"Ho và sốt": "Cough and fever",
"Hoàn thành": "Complete",
"Hoàn thành yêu cầu": "Complete the task",
"Hoàn thành {1}%. Qua chặng khi đạt 80%.": "{1}% complete. Pass the stage at 80%.",
"Hoặc gõ câu trả lời": "Or type your answer",
"Hãy chấm thật lòng; thuật toán dựa vào đó để hẹn lịch.": "Rate honestly; the algorithm uses it to schedule reviews.",
"Hãy hỏi bệnh nhân ít nhất một câu trước.": "Ask the patient at least one question first.",
"Hãy nói hoặc gõ câu trả lời trước.": "Speak or type your answer first.",
"Hình vị y khoa": "Medical word parts",
"Hòa hợp chủ ngữ và động từ": "Subject-verb agreement",
"Hôm nay": "Today",
"Hôm nay anh/chị đến khám vì chuyện gì?": "What brings you in today?",
"Hôm nay {1}/{2} phút": "Today {1}/{2} minutes",
"Hôm nay:": "Today:",
"Hướng tới C1": "Toward C1",
"Hạn đạt mục tiêu phổ thông": "Deadline for the general English goal",
"Hậu tố": "Suffix",
"Hậu tố thường quyết định trọng âm: -itis nhấn vào 'i' (gas-TRI-tis), -logy nhấn âm ngay trước (car-di-OL-o-gy), -ectomy nhấn 'ec' (ton-sil-LEC-to-my).": "Suffixes often determine stress: -itis stresses 'i' (gas-TRI-tis), -logy stresses the syllable just before it (car-di-OL-o-gy), -ectomy stresses 'ec' (ton-sil-LEC-to-my).",
"Hệ cơ": "Muscular system",
"Hệ hô hấp": "Respiratory system",
"Hệ thần kinh": "Nervous system",
"Hệ thống hướng tới việc ghi nhận những gì đã biết, phát hiện những phần còn thiếu, lựa chọn điều đáng học tiếp theo và biến nó thành những phiên học ngắn, có bằng chứng và có thể sử dụng trong thực tế.": "The system aims to record what you already know, find the gaps, choose what is worth learning next and turn it into short, evidence-based sessions you can use in real life.",
"Hệ thống ưu tiên learning gain trên mỗi phút thay vì số bài đã hoàn thành.": "The system prioritizes learning gain per minute over the number of lessons completed.",
"Hệ tiêu hóa": "Digestive system",
"Hệ tiết niệu và sinh sản": "Urinary and reproductive systems",
"Hệ xương": "Skeletal system",
"Họ từ (dạng từ) hay ra đề": "Word families (word forms) often tested",
"Họ từ, kết hợp từ, từ nối, cụm động từ, thành ngữ.": "Word families, collocations, linking words, phrasal verbs, idioms.",
"Học": "Learn",
"Học bài {1}": "Learn lesson {1}",
"Học bài: {1} (phần {2}/{3})": "Study lesson: {1} (part {2}/{3})",
"Học lại": "Relearn",
"Học lại: {1}": "Relearn: {1}",
"Học ngoại ngữ theo cách của chính mình.": "Learn a foreign language in your own way.",
"Học ngữ pháp": "Learn grammar",
"Học phần": "Module",
"Học tiếp trên iPad, điện thoại, máy tính": "Continue learning on iPad, phone, computer",
"Học tập": "Study",
"Học từ mới": "Learn new words",
"Học từ mới ({1})": "Learn new words ({1})",
"Học từ mới của chặng ({1} từ)": "Learn the stage's new words ({1} words)",
"Học {1}": "Learn {1}",
"Hỏi": "Ask",
"Hỏi 'bao lâu rồi' dùng hiện tại hoàn thành như một cụm cố định: How long have you had…? Không cần học hết thì này ngay.": "Asking \"how long\" uses the present perfect as a fixed phrase: How long have you had…? You don't need to learn this whole tense right now.",
"Hỏi bệnh 3 ca bệnh ảo": "Take histories from 3 virtual cases",
"Hỏi bệnh bắt đầu khi nào, bao lâu rồi, đột ngột hay từ từ, đang đỡ hay nặng lên.": "Ask when it started, how long, sudden or gradual, getting better or worse.",
"Hỏi bệnh nhân ba câu về thời điểm bắt đầu và diễn tiến của cơn ho.": "Ask the patient three questions about when the cough started and how it has progressed.",
"Hỏi bệnh sử": "Medical history taking",
"Hỏi bệnh theo SOCRATES và ICE": "History taking with SOCRATES and ICE",
"Hỏi bệnh theo SOCRATES và ICE.": "History taking with SOCRATES and ICE.",
"Hỏi có nơi nào gần đây không, hiểu và đưa ra chỉ dẫn đơn giản.": "Ask whether there is a place nearby; understand and give simple directions.",
"Hỏi và chỉ đường": "Asking for and giving directions",
"Hỏi đủ 8 khía cạnh của cơn đau và hiểu bệnh nhân mô tả tính chất đau.": "Ask about all 8 aspects of pain and understand how the patient describes its character.",
"Hội thoại": "Dialogue",
"Hội thoại, mẫu câu và lỗi sai thường gặp": "Dialogues, sentence patterns and common mistakes",
"Khai thác cơn đau theo SOCRATES": "Explore pain with SOCRATES",
"Khai thác cơn đau theo SOCRATES; từ vựng bệnh học đại cương, nhiễm trùng, bệnh theo hệ cơ quan.": "Explore pain with SOCRATES; general pathology vocabulary, infections, diseases by organ system.",
"Kho luyện đọc": "Reading library",
"Kho từ phát âm": "Pronunciation word bank",
"Kho từ: {1}": "Word bank: {1}",
"Kho {1} từ hay đọc sai trong giao tiếp và bài thi nói, chia theo lỗi. Mỗi từ có phiên âm Anh-Anh và Anh-Mỹ, nghe được cả hai giọng và tự nói để máy nhận dạng. Bạn đã tập {2} từ.": "A bank of {1} words often mispronounced in conversation and speaking exams, grouped by error. Each word has UK and US phonetics; listen to both voices and say it yourself for the computer to recognize. You have practiced {2} words.",
"Khoa học": "Science",
"Khá": "Fair",
"Khám ca: {1}": "Revisit case: {1}",
"Khám lại ca này": "Revisit this case",
"Khám và xét nghiệm": "Examination and tests",
"Khó": "Hard",
"Khôi": "Khoi",
"Không bắt buộc. Dùng để tính số từ cần học mỗi ngày.": "Optional. Used to calculate how many words to learn each day.",
"Không còn gì đến hạn. Bạn có thể luyện phát âm hoặc khám lại một ca bệnh.": "Nothing is due. You can practice pronunciation or revisit a case.",
"Không có bài nào khớp bộ lọc.": "No lessons match the filter.",
"Không có chủ đề nào khớp bộ lọc.": "No topics match the filter.",
"Không có thẻ đến hạn.": "No cards due.",
"Không có thẻ đến hạn. {1}": "No cards due. {1}",
"Không có từ nào khớp “{1}” với bộ lọc hiện tại.": "No words match “{1}” with the current filter.",
"Không có từ nào khớp “{1}”.": "No words match “{1}”.",
"Không dùng câu hỏi thiếu phù hợp": "Do not use unsuitable questions",
"Không lưu được vào trình duyệt. Hãy xuất bản sao lưu trong Cài đặt.": "Could not save to the browser. Export a backup in Settings.",
"Không muốn dùng GitHub?": "Don't want to use GitHub?",
"Không mở được micro. Kiểm tra quyền micro của trình duyệt.": "Could not open the microphone. Check your browser's microphone permission.",
"Không nhận dạng được. Thử lại nhé.": "Not recognized. Please try again.",
"Không nhớ ra.": "Can't remember.",
"Không nên dùng": "Avoid using",
"Không phát được bản ghi.": "Could not play the recording.",
"Không phải học càng nhiều càng tốt, mà là học đúng thứ mình cần tiếp theo.": "It's not about learning as much as possible, but about learning exactly what you need next.",
"Không phải học càng nhiều càng tốt, mà là học đúng thứ mình cần tiếp theo. Ưu tiên lượng kiến thức thu được trên mỗi phút học, không phải số bài đã hoàn thành.": "It's not about learning as much as possible, but about learning exactly what you need next. The priority is the amount of knowledge gained per minute of study, not the number of lessons completed.",
"Không sai câu nào.": "No mistakes.",
"Không sao chép được. Thử nút Tải file sao lưu.": "Could not copy. Try the Download backup file button.",
"Không tìm thấy bài.": "Lesson not found.",
"Không tìm thấy bản đồng bộ trên GitHub.": "No sync found on GitHub.",
"Không tìm thấy chặng.": "Stage not found.",
"Không tìm thấy chủ đề.": "Topic not found.",
"Không, tôi nhầm. Thêm vào ôn tập": "No, I was wrong. Add to review",
"Khởi phát và thời gian": "Onset and duration",
"Khởi đầu": "Getting started",
"Kiểm tra": "Test",
"Kiểm tra chặng": "Stage test",
"Kiểm tra chặng {1}": "Stage {1} test",
"Kiểm tra các ý": "Check the points",
"Kiểm tra nhanh": "Quick check",
"Kiểm tra nhanh ({1} câu ngẫu nhiên)": "Quick check ({1} random questions)",
"Kiểm tra và chọn giọng": "Test and choose voice",
"Kiểm tra đầu vào": "Placement test",
"Kiểm tra đầu vào ngày {1}: {2}.": "Placement test on {1}: {2}.",
"Kế hoạch hôm nay": "Today's plan",
"Kế hoạch và so sánh": "Plans and comparisons",
"Kết hợp từ hay dùng khi thi": "Collocations often used in exams",
"Kết hợp từ và thành ngữ": "Collocations and idioms",
"Kết nối và đồng bộ": "Connect and sync",
"Kết quả": "Result",
"Kết thúc hỏi bệnh": "End history taking",
"Kể buổi sáng của bạn trong ba câu, có dùng usually hoặc always.": "Describe your morning in three sentences, using usually or always.",
"Kể chuyện cuối tuần": "Tell a weekend story",
"Kể lại việc đã xảy ra bằng thì quá khứ đơn, hỏi Did you…?": "Recount something that happened in the past simple, and ask Did you…?",
"Kể lại việc đã xảy ra, nói về trải nghiệm, dùng quá khứ đơn và hiện tại hoàn thành.": "Recount past events, talk about experiences, using the past simple and present perfect.",
"Kể thói quen hằng ngày, dùng đúng động từ ngôi thứ ba (she works).": "Describe daily habits, using third-person verbs correctly (she works).",
"Kể thói quen, hỏi và trả lời câu hỏi đơn giản về sinh hoạt, công việc, cảm xúc.": "Describe habits, ask and answer simple questions about daily life, work and feelings.",
"Kể về cuối tuần vừa rồi trong ba câu.": "Describe your last weekend in three sentences.",
"Kỳ thi": "Exam",
"Kỳ thi kiểm tra ngữ pháp thế nào": "How the exam tests grammar",
"Kỹ năng": "Skills",
"Kỹ năng, thời gian, lịch học": "Skills, time, schedule",
"Liên từ và từ nối": "Conjunctions and linking words",
"Liên từ, từ nối, đại từ quan hệ.": "Conjunctions, linking words, relative pronouns.",
"Luyện": "Practice",
"Luyện ca": "Practice a case",
"Luyện cặp âm {1}": "Practice sound pairs {1}",
"Luyện lượt mới": "Practice a new attempt",
"Luyện ngữ pháp: {1}": "Grammar practice: {1}",
"Luyện nhanh 10 câu": "Quick practice: 10 questions",
"Luyện theo dạng bài": "Practice by question type",
"Luyện thêm": "Practice more",
"Luyện thêm 10 lượt": "Practice 10 more attempts",
"Luyện tập": "Practice",
"Luyện âm": "Practice sounds",
"Luyện đầy đủ ({1} câu)": "Full practice ({1} questions)",
"Luyện đề": "Exam practice",
"Luôn hoàn thiện": "Always improving",
"Làm bài": "Take the lesson",
"Làm bài ({1} câu hỏi)": "Take the test ({1} questions)",
"Làm bài kiểm tra": "Take the test",
"Làm bài kiểm tra chặng": "Take the stage test",
"Làm kiểm tra (25 câu)": "Take the test (25 questions)",
"Làm liền một mạch, đúng số câu của đề thi thật.": "Do it in one go, with the same number of questions as the real exam.",
"Làm lượt mới": "Start a new attempt",
"Làm lại": "Redo",
"Làm lại bài kiểm tra chặng": "Retake the stage test",
"Làm lại {1} câu sai": "Redo {1} wrong questions",
"Làm quen": "Get familiar",
"Lâm sàng": "Clinical",
"Lên kế hoạch và lời mời": "Plans and invitations",
"Lưu loát và mạch lạc": "Fluency and coherence",
"Lưu tự đánh giá": "Save self-assessment",
"Lưu ý:": "Note:",
"Lượng từ, so sánh hơn và nhất, mạo từ.": "Quantifiers, comparatives and superlatives, articles.",
"Lượng từ, so sánh, mạo từ": "Quantifiers, comparisons, articles",
"Lượt tiếp": "Next attempt",
"Lượt {1}/{2}": "Attempt {1}/{2}",
"Lần trước bạn đạt {1}%. Học lại không tạo thêm thẻ trùng.": "Last time you scored {1}%. Studying again does not create duplicate cards.",
"Lập luận và giải thích": "Reasoning and explanation",
"Lập luận, so sánh ưu nhược điểm cho IELTS Writing và Speaking; từ nối tương phản, câu hỏi gián tiếp.": "Reasoning, weighing pros and cons for IELTS Writing and Speaking; contrast linkers, indirect questions.",
"Lịch học": "Study schedule",
"Lịch học 12 tuần": "12-week study schedule",
"Lịch học tháng {1} năm {2}": "Study calendar for month {1}, year {2}",
"Lọc theo mức nhớ": "Filter by recall level",
"Lối tắt": "Shortcuts",
"Lỗi sai thường gặp": "Common mistakes",
"Lỗi đồng bộ:": "Sync error:",
"Lộ trình": "Learning path",
"Lộ trình, kỹ năng, lịch học, mục tiêu": "Learning path, skills, study schedule, goals",
"Mua sắm và tiền bạc": "Shopping and money",
"Muốn luyện thêm và tự ghi âm, vào mục Phát âm.": "To practice more and record yourself, go to Pronunciation.",
"Máu và hệ thống phòng vệ của cơ thể": "Blood and the body's defense system",
"Máu, miễn dịch và các rối loạn về máu": "Blood, immunity and blood disorders",
"Máy chưa khớp câu này với câu hỏi nào của ca bệnh. Thử diễn đạt rõ hơn, hoặc chọn từ ngân hàng câu hỏi bên cạnh.": "The computer could not match this sentence to any of the case's questions. Try rephrasing it more clearly, or pick from the question bank alongside.",
"Máy nghe được": "What the computer heard",
"Máy tính Windows hoặc Mac:": "Windows or Mac computer:",
"Máy đọc một trong hai từ của một cặp. Bạn chọn từ mình nghe thấy. {1} lượt.": "The computer reads one of the two words. You choose the word you hear. {1} attempts.",
"Máy đọc một trong hai từ. Bạn chọn từ mình nghe thấy. {1} lượt.": "The computer reads one of the two words. You choose the word you hear. {1} attempts.",
"Mã chỉ lưu trong trình duyệt của thiết bị này, không nằm trong file sao lưu và không gửi đi đâu ngoài api.github.com. Ai có mã sẽ đọc và sửa được các Gist của bạn, nên chỉ cấp quyền Gists và đừng chia sẻ mã.": "The token is stored only in this device's browser, is not in the backup file, and is not sent anywhere except api.github.com. Anyone with the token can read and edit your Gists, so grant only the Gists permission and do not share the token.",
"Mã không đúng dạng. Mã GitHub bắt đầu bằng github_pat_ hoặc ghp_.": "Invalid token format. GitHub tokens start with github_pat_ or ghp_.",
"Mã truy cập GitHub": "GitHub access token",
"Mã truy cập không hợp lệ hoặc đã hết hạn.": "The access token is invalid or has expired.",
"Mã truy cập thiếu quyền Gists, hoặc GitHub đang giới hạn tạm thời.": "The access token lacks the Gists permission, or GitHub is temporarily rate limiting.",
"Mô tả cấp độ theo tinh thần Khung tham chiếu châu Âu (CEFR). Thư viện hiện có {1} từ lõi: đây là bộ khởi đầu có chọn lọc, chưa phải toàn bộ vốn từ của mỗi cấp. Bạn có thể thêm từ trong file content-library-gen.js.": "Levels are described in the spirit of the Common European Framework of Reference (CEFR). The library currently has {1} core words: this is a selective starter set, not the entire vocabulary of each level. You can add words in the file content-library-gen.js.",
"Mô tả triệu chứng": "Describe symptoms",
"Mô tả triệu chứng; gọi tên vùng cơ thể, xương, cơ và thuật ngữ định hướng.": "Describe symptoms; name body regions, bones, muscles and directional terms.",
"Môi trường": "Environment",
"Môi trường và năng lượng": "Environment and energy",
"Mạch học": "Learning track",
"Mạch lạc và liên kết": "Coherence and cohesion",
"Mạo từ": "Articles",
"Mẫu câu": "Sentence patterns",
"Mẹo làm bài": "Test-taking tips",
"Mẹo:": "Tip:",
"Mệnh đề quan hệ": "Relative clauses",
"Mệt, khát nhiều (tầm soát đái tháo đường)": "Tired, very thirsty (diabetes screening)",
"Mọi con số ở đây đến từ việc bạn thực sự đã làm. Không có điểm khởi tạo sẵn.": "Every number here comes from what you have actually done. There are no preset starting scores.",
"Mọi cấp": "All levels",
"Mọi kỳ thi": "All exams",
"Mỗi bài dạy {1} từ của một nhóm từ vựng trong chặng, cùng cấu trúc với các bài G và M: học từ, kiểm tra nghĩa, điền từ, từ loại, nghe hiểu, sắp xếp câu, chép chính tả, viết đúng, phát âm và nói. Học xong, các từ vào lịch ôn tập và được tính vào tiến độ của Thư viện.": "Each lesson teaches {1} words from a vocabulary group in the stage, with the same structure as the G and M lessons: learn the words, check meanings, fill in the blank, parts of speech, listening comprehension, sentence ordering, dictation, correct writing, pronunciation and speaking. After finishing, the words enter the review schedule and count toward Library progress.",
"Mỗi chặng gom đúng bài học, bộ từ vựng trong thư viện, điểm ngữ pháp, phát âm và ca bệnh cùng cấp độ, kết thúc bằng bài kiểm tra chặng. Hoàn thành 80% là qua chặng. “Học từ mới” mỗi ngày lấy từ của chặng đang học.": "Each stage groups the lessons, library vocabulary sets, grammar points, pronunciation and cases of the same level, and ends with a stage test. Completing 80% passes the stage. Each day, “Learn new words” draws words from the stage you are learning.",
"Mỗi câu một đáp án": "One answer per question",
"Mỗi mẫu ngữ pháp ở mạch phổ thông được dùng lại ở mạch y khoa cùng cấp độ, để một lần học phục vụ hai mục đích.": "Each grammar pattern in the general track is reused in the medical track at the same level, so one study session serves two purposes.",
"Mỗi mẫu ngữ pháp ở mạch thông dụng được dùng lại ở mạch y khoa cùng cấp độ, để một lần học phục vụ hai mục đích.": "Each grammar pattern in the general track is reused in the medical track at the same level, so one study session serves two purposes.",
"Mỗi từ thuộc từ loại nào?": "Which part of speech is each word?",
"Một cấp được tính là đạt khi đúng ít nhất 4/5 và mọi cấp thấp hơn cũng đạt. Đây chỉ là ước lượng nhanh về vốn từ nhận biết, không phải bài thi CEFR chính thức.": "A level counts as passed when you get at least 4/5 correct and all lower levels are passed too. This is only a quick estimate of your recognition vocabulary, not an official CEFR test.",
"Một dự án cá nhân của": "A personal project by",
"Một dự án cá nhân được xây dựng bởi": "A personal project built by",
"Một ngày của tôi": "My day",
"Một ngày vào chuỗi liên tiếp khi học từ 5 phút.": "A day counts toward your streak when you study for at least 5 minutes.",
"Một người hỏi gần đây có quán cà phê không. Trả lời và chỉ đường đơn giản.": "Someone nearby asks whether there is a cafe around here. Answer and give simple directions.",
"Một từ để nói to hôm nay": "One word to say aloud today",
"Mới": "New",
"Mở lộ trình": "Open learning path",
"Mở rộng": "Expand",
"Mở rộng vốn từ B2 ở mọi chủ đề và TOEIC; câu điều kiện loại 3, động từ khuyết thiếu quá khứ.": "Expand B2 vocabulary across all topics and TOEIC; third conditional, past modal verbs.",
"Mở thư viện": "Open library",
"Mở Ôn tập": "Open Review",
"Mở đầu buổi khám": "Opening the consultation",
"Mở đầu buổi khám, hỏi khởi phát và thời gian; từ vựng sinh lý và thăm khám.": "Opening the consultation, asking about onset and timing; physiology and examination vocabulary.",
"Mở đầu bằng câu hỏi mở để bệnh nhân tự kể. Câu hỏi đóng dùng sau, khi cần kiểm tra chi tiết cụ thể.": "Start with open questions so the patient can tell their own story. Use closed questions later, when you need to check specific details.",
"Mục tiêu": "Goal",
"Mục tiêu hôm nay": "Today's goal",
"Mục tiêu học tập": "Learning goal",
"Mục tiêu mỗi ngày": "Daily goal",
"Mục tiêu phổ thông": "General English goal",
"Mục tiêu và tiến bộ": "Goals & progress",
"Mục tiêu {1} từ mới mỗi ngày. Chủ đề “{2}”, cấp {3}.": "Goal: {1} new words per day. Topic “{2}”, level {3}.",
"Mục đích": "Purpose",
"Mục đích, triết lý, phương pháp": "Purpose, philosophy, method",
"Mức hoàn thiện của mỗi kỹ năng tăng theo số lượt luyện tập: {1} lượt là 100%. Mỗi câu hỏi, thẻ ôn hoặc bài tập bạn làm tính một lượt, dù đúng hay sai. Kỹ năng chưa luyện nằm ở tâm.": "Each skill's completion grows with the number of practice attempts: {1} attempts is 100%. Every question, review card or exercise you do counts as one attempt, whether right or wrong. Skills you have not practiced sit at the center.",
"Mức hoàn thiện kỹ năng tính từ số lượt luyện thật; thời gian học chỉ tính khi bạn đang làm bài hoặc đọc.": "Skill completion is based on real practice attempts; study time only counts while you are doing exercises or reading.",
"Mức nhớ của {1} thẻ": "Memory strength of {1} cards",
"Nam 21 tuổi. Hôm nay cậu ấy thấy không khỏe. Cậu bị đau đầu và ho khan. Cậu cũng sốt nhưng không đau họng.": "A 21-year-old man. He feels unwell today. He has a headache and a dry cough. He also has a fever but no sore throat.",
"Nghe": "Listening",
"Nghe chậm": "Listen slowly",
"Nghe câu": "Listen to the sentence",
"Nghe câu có từ mới rồi chép lại.": "Listen to the sentence with the new word, then write it down.",
"Nghe câu nói": "Listen to the sentence",
"Nghe câu rồi gõ lại đúng từng từ. Không cần viết hoa hay dấu câu.": "Listen to the sentence, then type it word for word. Capitals and punctuation are not needed.",
"Nghe cả bài": "Listen to the whole lesson",
"Nghe cả đoạn mẫu": "Listen to the whole sample passage",
"Nghe giọng Anh-Anh": "Listen to the UK voice",
"Nghe giọng Anh-Mỹ": "Listen to the US voice",
"Nghe hiểu": "Listening comprehension",
"Nghe hội thoại": "Listen to the dialogue",
"Nghe lại": "Listen again",
"Nghe lại bản ghi": "Listen to the recording again",
"Nghe thử hội thoại": "Preview the dialogue",
"Nghe thử, xếp hạng giọng, bật tắt giọng người thật": "Preview voices, rank voices, turn human voices on or off",
"Nghe trước rồi trả lời. Nếu xem lời thoại trước khi trả lời, câu đó được tính vào kỹ năng đọc thay vì nghe.": "Listen first, then answer. If you view the transcript before answering, that question counts toward reading instead of listening.",
"Nghe từ": "Listen to the word",
"Nghe và chép": "Listen and write",
"Nghe {1} giọng Anh-Anh": "Listen to {1} in a UK accent",
"Nghe {1} giọng Anh-Mỹ": "Listen to {1} in a US accent",
"Nguyên Khôi": "Nguyen Khoi",
"Nguồn mở để học thêm": "Open resources for further study",
"Nguồn tham khảo": "References",
"Nguồn tham khảo trong phiên bản {1}": "Sources referenced in version {1}",
"Nguồn: bảng CEFR của IELTS và ETS (điểm tối thiểu TOEIC theo từng kỹ năng cộng lại), Thông tư 23/2017 của Bộ GD&ĐT cho VSTEP, ước tính vốn từ của Milton và Alexiou (2009). Các đơn vị có thể công bố khác nhau đôi chút; hãy kiểm tra lại với nơi tổ chức thi trước khi đăng ký.": "Sources: the CEFR tables of IELTS and ETS (TOEIC minimum scores per skill added together), Circular 23/2017 of the Ministry of Education and Training for VSTEP, vocabulary size estimates by Milton and Alexiou (2009). Publishing bodies may differ slightly; check with the exam organizer before registering.",
"Ngân hàng câu hỏi": "Question bank",
"Ngân hàng {1} câu": "Bank of {1} questions",
"Ngôn ngữ": "Language",
"Ngôn ngữ giao diện: {1}. Bấm để đổi": "Interface language: {1}. Tap to change",
"Ngôn ngữ phù hợp": "Suitable language",
"Người Việt hay dịch 'có' thành have: 'Have a pharmacy near here?'. Muốn nói một nơi tồn tại, tiếng Anh dùng there is / there are.": "Vietnamese speakers often translate the Vietnamese word for \"there is\" as have: 'Have a pharmacy near here?'. To say that a place exists, English uses there is / there are.",
"Ngứa, phát ban": "Itching, rash",
"Ngữ pháp": "Grammar",
"Ngữ pháp và phát âm": "Grammar and pronunciation",
"Ngữ pháp: {1}": "Grammar: {1}",
"Nhiều": "Many",
"Nhiễm trùng và miễn dịch": "Infection and immunity",
"Nhiệm vụ của bạn": "Your task",
"Nhìn nghĩa, gõ lại từ": "See the meaning, type the word",
"Nhìn từ, nhớ nghĩa": "See the word, recall the meaning",
"Nhận biết, nghe, viết và dùng đúng {1} từ: {2}.": "Recognize, hear, write and correctly use {1} words: {2}.",
"Nhập dữ liệu đã dán": "Import pasted data",
"Nhập môn sinh học phân tử, hóa sinh, di truyền học và tế bào": "Introduction to molecular biology, biochemistry, genetics and cell biology",
"Nhập từ file": "Import from file",
"Nhớ": "Remembered",
"Nhớ lại trước khi học mới. Thẻ để quá hạn sẽ khó nhớ hơn.": "Review before learning new material. Cards left overdue are harder to remember.",
"Nhớ ngay lập tức.": "Remembered instantly.",
"Nhớ ra nhưng rất chật vật.": "Remembered, but with great difficulty.",
"Nhớ ra sau một chút suy nghĩ.": "Remembered after a little thought.",
"Nâng cao": "Advanced",
"Nên học sau {1}": "Best studied after {1}",
"Nên học trước": "Should study first",
"Nên học trước {1}": "Should study {1} first",
"Nêu ý kiến có lý do, mô tả con người và công việc; phân biệt hiện tại hoàn thành với quá khứ đơn.": "Give opinions with reasons, describe people and jobs; distinguish the present perfect from the past simple.",
"Nó bắt đầu đột ngột cách đây hai giờ.": "It started suddenly two hours ago.",
"Nói": "Speaking",
"Nói I want hoặc Give me nghe khá cộc. Người bản xứ dùng Could I have hoặc I'd like khi gọi món.": "Saying I want or Give me sounds rather blunt. Native speakers use Could I have or I'd like when ordering.",
"Nói câu hỏi": "Say the question",
"Nói dự định với be going to, mời, nhận lời và từ chối lịch sự.": "Talk about plans with be going to, invite, accept and politely decline.",
"Nói dự định, so sánh, đưa lời khuyên và điều kiện có thể xảy ra.": "Talk about plans, make comparisons, give advice and describe possible conditions.",
"Nói hoặc viết mỗi họ từ một câu, dùng ít nhất dạng đầu tiên của họ từ.": "Say or write one sentence for each word family, using at least the first form of the family.",
"Nói hoặc viết mỗi từ một câu ngắn. Máy kiểm tra bạn đã dùng đủ các từ chưa.": "Say or write one short sentence for each word. The app checks whether you used all the words.",
"Nói liền mạch, ít ngập ngừng, biết nối ý (first, however, because).": "Speak fluently with few hesitations, and link ideas (first, however, because).",
"Nói mình bị gì, chỗ nào đau, và thuật lại triệu chứng của người khác.": "Say what is wrong, where it hurts, and report someone else's symptoms.",
"Nói từ {1}": "Say the word {1}",
"Nói và viết về môi trường, công nghệ, sức khỏe, đô thị; dùng bị động, mệnh đề quan hệ, câu tường thuật.": "Speak and write about the environment, technology, health and cities; use the passive, relative clauses and reported speech.",
"Nói về một người giúp bạn": "Talk about someone who helps you",
"Nói về một nơi bạn thích": "Talk about a place you like",
"Nói để máy nghe": "Speak for the machine to hear",
"Nói đủ các ý của đề, có ví dụ cụ thể.": "Cover all the points in the prompt, with specific examples.",
"Nút có chấm xanh là bản ghi người thật đọc. Bấm micro để tự đọc và xem máy nghe ra từ nào.": "A button with a green dot is a recording by a real person. Tap the microphone to read aloud yourself and see which words the app hears.",
"Năm sau": "Next year",
"Năm trước": "Last year",
"Nơi chốn và du lịch": "Places and travel",
"Nơi làm việc cơ bản (TOEIC nền)": "Basic workplace (TOEIC foundation)",
"Nắm từ vựng công sở, nhân sự, tài chính, bán hàng, đặt hàng, công tác ở mức A2.": "Master A2-level vocabulary for the office, HR, finance, sales, ordering and business travel.",
"Nền tảng": "Foundation",
"Nền tảng phổ thông": "General English foundation",
"Nền tảng y khoa": "Medical foundation",
"Nội dung và danh mục tham khảo": "Content and reference catalog",
"Nội tiết, máu và cơ quan miễn dịch": "Endocrine, blood and immune organs",
"Nộp bản tóm tắt": "Submit the summary",
"Phiên": "Session",
"Phiên bản {1}": "Version {1}",
"Phiên bản {1} ({2})": "Version {1} ({2})",
"Phiên bản {1} ({2}). Xây dựng bởi {3}. {4}": "Version {1} ({2}). Built by {3}. {4}",
"Phiên bản {1} ({2}). Xây dựng bởi {3}. {4}.": "Version {1} ({2}). Built by {3}. {4}.",
"Phiên âm lấy từ Wiktionary": "Transcription taken from Wiktionary",
"Phiên âm theo Cambridge Dictionary.": "Transcription follows the Cambridge Dictionary.",
"Phiên âm theo Cambridge Dictionary. Bản ghi phát âm người thật và phiên âm bổ sung lấy qua Free Dictionary API (dictionaryapi.dev) từ dữ liệu Wiktionary và Wikimedia Commons, giấy phép CC BY-SA.": "Transcription follows the Cambridge Dictionary. Real-person pronunciation recordings and additional transcriptions come via the Free Dictionary API (dictionaryapi.dev) from Wiktionary and Wikimedia Commons data, under the CC BY-SA license.",
"Phiên âm theo Cambridge Dictionary. Bản ghi phát âm người thật và phiên âm bổ sung lấy qua {1} từ dữ liệu Wiktionary và Wikimedia Commons, giấy phép CC BY-SA. Khi không có bản ghi hoặc mất mạng, ứng dụng dùng giọng máy của thiết bị.": "Transcription follows the Cambridge Dictionary. Real-person pronunciation recordings and supplementary transcriptions are obtained via {1} from Wiktionary and Wikimedia Commons data, licensed CC BY-SA. When no recording is available or you are offline, the app uses the device's machine voice.",
"Phiên âm theo quy ước Cambridge Dictionary. Giọng đọc là giọng tổng hợp của thiết bị, nên hãy coi IPA là chuẩn khi hai bên khác nhau.": "Transcription follows Cambridge Dictionary conventions. The voice is your device's synthesized voice, so treat the IPA as the standard when the two differ.",
"Phiên âm và giọng đọc": "Transcription and voice",
"Phái sinh phải giữ cùng giấy phép (CC BY-SA):": "Derivatives must keep the same license (CC BY-SA):",
"Phát âm": "Pronunciation",
"Phát âm, lượt {1}/{2}": "Pronunciation, attempt {1}/{2}",
"Phân biệt {1}": "Tell {1} apart",
"Phân bố mức nhớ": "Memory strength distribution",
"Phòng khám và phát âm": "Clinic and pronunciation",
"Phòng khám ảo": "Virtual clinic",
"Phòng khám ảo bám theo hướng dẫn NICE (NG84, NG136, NG59, NG226, CG95, hướng dẫn UTI của UKHSA) và tiêu chuẩn chẩn đoán đái tháo đường của WHO. Câu ngạn ngữ là câu truyền thống thuộc phạm vi công cộng.": "The Virtual clinic follows NICE guidelines (NG84, NG136, NG59, NG226, CG95, the UKHSA UTI guidance) and the WHO diagnostic criteria for diabetes. The proverbs are traditional sayings in the public domain.",
"Phòng khám ảo mô phỏng các nhóm tiêu chí giao tiếp lâm sàng của OET Speaking, gồm cả việc tìm hiểu quan điểm và mối lo của bệnh nhân.": "The virtual clinic simulates the clinical communication criteria groups of OET Speaking, including exploring the patient's views and concerns.",
"Phòng khám ảo mô phỏng các tiêu chí giao tiếp lâm sàng, gồm cả việc tìm hiểu quan điểm và mối lo của bệnh nhân.": "The virtual clinic simulates clinical communication criteria, including exploring the patient's views and concerns.",
"Phút học hôm nay": "Minutes studied today",
"Phương pháp": "Method",
"Phương pháp trong phiên bản {1}": "Method in version {1}",
"Phần lớn thuật ngữ y khoa ghép từ gốc Hy Lạp và La-tinh. Nhớ khoảng 30 mảnh dưới đây là đoán được nghĩa của hàng trăm từ.": "Most medical terms are built from Greek and Latin roots. Remember the roughly 30 pieces below and you can guess the meaning of hundreds of words.",
"Phần {1}": "Part {1}",
"Phổ thông": "General",
"Phục vụ tự học ngoại ngữ lâu dài, với General English là nền tảng và Medical / Academic English phát triển dần theo năng lực.": "Built for long-term self-study of a foreign language, with General English as the foundation and Medical / Academic English developing gradually with your ability.",
"Phục vụ tự học ngoại ngữ lâu dài: tiếng Anh phổ thông làm nền tảng, tiếng Anh y khoa và học thuật phát triển dần theo năng lực.": "Built for long-term self-study of a foreign language: general English as the foundation, with medical and academic English developing gradually with your ability.",
"Quan điểm bệnh nhân": "Patient perspective",
"Quan điểm và con người": "Opinions and people",
"Quanh thành phố": "Around the city",
"Quay lại": "Back",
"Quay lại hỏi thêm": "Go back to ask more",
"Quy đổi tham khảo giữa các kỳ thi": "Reference conversion between exams",
"Quá khứ và trải nghiệm": "The past and experiences",
"Quên": "Forgot",
"Quản lý": "Manage",
"Quảng cáo": "Advertising",
"Quần áo": "Clothes",
"Rất vui được gặp bạn.": "Nice to meet you.",
"Rẽ trái rồi đi thẳng.": "Turn left, then go straight.",
"SOCRATES là khung nhớ để không bỏ sót. Khi nói với bệnh nhân, dùng từ đời thường, không nói tên khung.": "SOCRATES is a memory framework so you do not miss anything. When talking to patients, use everyday words and do not say the name of the framework.",
"Safari không cho trang web dùng giọng Siri, và giọng tải thêm (Premium, Enhanced) thường không hiện trong trình duyệt. Vì vậy trên iPad, bản ghi người thật là nguồn tốt nhất để luyện phát âm. Bạn vẫn có thể thử vào Cài đặt, Trợ năng, Nội dung được đọc, Giọng nói, Tiếng Anh, tải giọng Premium hoặc Enhanced, rồi mở lại trang để xem giọng có xuất hiện không.": "Safari does not let websites use Siri voices, and downloaded voices (Premium, Enhanced) often do not appear in the browser. So on iPad, real-person recordings are the best source for pronunciation practice. You can still try going to Settings, Accessibility, Spoken Content, Voices, English, downloading a Premium or Enhanced voice, then reopening the page to see whether the voice appears.",
"Sao chép dữ liệu": "Copy data",
"Sao chép mã (bắt đầu bằng github_pat_) rồi dán vào ô dưới đây. Trên thiết bị thứ hai, dán cùng mã đó; app sẽ tự tìm lại Gist.": "Copy the token (starting with github_pat_) and paste it into the box below. On the second device, paste the same token; the app will find the Gist again automatically.",
"Sau bài này bạn có thể:": "After this lesson you can:",
"Sau bài này, bạn có thể mô tả bằng tiếng Anh sự sao chép, sửa chữa và phiên mã ADN, cũng như các khái niệm cơ bản về ung thư và tế bào gốc.": "After this lesson, you can describe DNA replication, repair and transcription in English, as well as basic concepts of cancer and stem cells.",
"Sinh hoạt và nhà cửa": "Daily life and home",
"Sinh học phân tử và tế bào": "Molecular and cell biology",
"Sinh lý": "Physiology",
"Sinh lý cơ bản": "Basic physiology",
"So sánh hơn và so sánh nhất": "Comparatives and superlatives",
"Sáng": "Morning",
"Sắp xếp các ô thành câu đúng.": "Arrange the tiles into a correct sentence.",
"Sắp xếp thành câu đúng (có từ mới trong bài).": "Arrange into a correct sentence (includes new words from the lesson).",
"Sắp xếp thành câu:": "Arrange into a sentence:",
"Số nhiều, danh từ đếm được và không đếm được": "Plurals, countable and uncountable nouns",
"Số thẻ đến hạn 7 ngày tới": "Number of cards due in the next 7 days",
"Sổ từ": "Word book",
"Sổ từ trống. Học xong một bài, các từ của bài sẽ xuất hiện ở đây kèm trạng thái ôn tập.": "Your word book is empty. After you finish a lesson, its words will appear here with their review status.",
"Sổ từ và thuật ngữ": "Word book and terms",
"Sức khỏe": "Health",
"Sức khỏe và cơ thể (phổ thông)": "Health and the body (general)",
"Sức khỏe và lối sống": "Health and lifestyle",
"Sửa:": "Fix:",
"TOEIC Nghe + Đọc": "TOEIC Listening + Reading",
"TOEIC Part 5 và 6": "TOEIC Part 5 and 6",
"Tachycardia nghĩa là tim đập nhanh.": "Tachycardia means a fast heartbeat.",
"Teach-back là nhờ bệnh nhân nhắc lại bằng lời của họ. Đó là trách nhiệm của bác sĩ giải thích rõ, không phải bài kiểm tra bệnh nhân.": "Teach-back means asking the patient to repeat in their own words. It checks that the doctor explained clearly; it is not a test of the patient.",
"Thay dữ liệu hiện tại bằng bản sao lưu này? ({1} bài, {2} thẻ, {3} học)": "Replace the current data with this backup? ({1} lessons, {2} cards, {3} learning)",
"Thay vì dùng nhiều công cụ rời rạc cho từ vựng, ngữ pháp, nghe, phát âm, giao tiếp và đọc hiểu, đây là một hệ thống thống nhất, dần thích nghi với chính người học.": "Instead of many separate tools for vocabulary, grammar, listening, pronunciation, communication and reading, this is one unified system that gradually adapts to the learner.",
"Theo thiết bị": "Follow device",
"Thiên nhiên, thời tiết và môi trường": "Nature, weather and the environment",
"Thiết bị chưa bật nhận dạng giọng nói (trên iPad: bật Siri & Đọc chính tả).": "Speech recognition is not turned on for this device (on iPad: turn on Siri & Dictation).",
"Thiết bị này: {1}. {2}": "This device: {1}. {2}",
"Thiết lập": "Set up",
"Thiết lập mục tiêu": "Set goals",
"Thoát": "Exit",
"Thu thập thông tin": "Gathering information",
"Thuật lại cho bác sĩ tình trạng của Mai (dùng she has).": "Report Mai's condition to the doctor (use she has).",
"Thuật ngữ giải phẫu, sinh lý, bệnh học mức mở rộng để đọc tài liệu chuyên ngành.": "Extended anatomy, physiology and pathology terms for reading specialist materials.",
"Thuật ngữ mở rộng": "Extended terms",
"Thuật ngữ tiếp": "Next terms",
"Thuật ngữ {1}/{2}": "Terms {1}/{2}",
"Thuật toán FSRS ước lượng lúc bạn sắp quên từng thẻ và hẹn ôn đúng lúc đó. Mỗi từ có hai thẻ: nhìn từ nhớ nghĩa, và nhìn nghĩa gõ lại từ.": "The FSRS algorithm estimates when you are about to forget each card and schedules a review at just that time. Each word has two cards: see the word and recall the meaning, and see the meaning and type the word.",
"Thuật toán mã nguồn mở hiện là mặc định cho hồ sơ mới trong Anki. Nó cần ít lượt ôn hơn thuật toán SM-2 cũ để đạt cùng mức ghi nhớ.": "This open-source algorithm is now the default for new profiles in Anki. It needs fewer reviews than the older SM-2 algorithm to reach the same level of retention.",
"Thuật toán mã nguồn mở, hẹn ôn đúng lúc bạn sắp quên. Cần ít lượt ôn hơn thuật toán SM-2 cũ để đạt cùng mức ghi nhớ.": "An open-source algorithm that schedules a review just as you are about to forget. It needs fewer reviews than the older SM-2 algorithm to reach the same level of retention.",
"Thuộc chặng {1}. {2} câu luyện, cần đạt 70%.": "Part of stage {1}. {2} practice questions, 70% needed to pass.",
"Thuộc chặng:": "Part of stage:",
"Tháng này": "This month",
"Tháng {1}/{2}: {3} ngày có học, tổng {4} phút{5}. Mục tiêu mỗi ngày {6} phút.": "Month {1}/{2}: {3} days studied, {4} minutes in total{5}. Daily goal {6} minutes.",
"Thêm": "More",
"Thêm cả chủ đề vào ôn tập": "Add the whole topic to review",
"Thêm từ từ Thư viện": "Add words from the Library",
"Thêm vào lịch ôn": "Add to review schedule",
"Thêm vào ôn tập": "Add to review",
"Thêm {1} từ ({2} thẻ) vào ôn tập cùng lúc? Học dần qua “Học từ mới” thường nhớ tốt hơn.": "Add {1} words ({2} cards) to review at once? Learning gradually through “Learn new words” usually works better for memory.",
"Thì hiện tại hoàn thành": "Present perfect tense",
"Thì hiện tại đơn": "Present simple tense",
"Thì quá khứ đơn": "Past simple tense",
"Thì và dạng động từ": "Tenses and verb forms",
"Thì, chủ động và bị động, hòa hợp chủ vị, V-ing hay to V.": "Tenses, active and passive, subject-verb agreement, V-ing or to V.",
"Thông báo": "Notifications",
"Thông dụng": "Common",
"Thông dụng và Y khoa": "General and Medical",
"Thư": "Letter",
"Thư gửi bạn": "Letter to a friend",
"Thư phàn nàn": "Complaint letter",
"Thư viện": "Library",
"Thư viện 44 âm": "Library of 44 sounds",
"Thư viện ngữ pháp": "Grammar library",
"Thư viện từ vựng": "Vocabulary library",
"Thư viện đủ 44 âm của tiếng Anh theo hệ phiên âm Anh-Anh chuẩn, kèm ghi chú khác biệt Anh-Mỹ. Mỗi âm có cách đặt lưỡi, môi, dây thanh, lỗi sai thường gặp, cách viết, từ ví dụ đọc bằng giọng người thật và bài nghe phân biệt cặp âm. Bạn đã luyện {1}/44 âm.": "A library of all 44 English sounds in standard UK transcription, with notes on UK-US differences. Each sound has tongue, lip and vocal cord positions, common mistakes, spellings, example words read by a real voice, and a listening exercise to tell sound pairs apart. You have practiced {1}/44 sounds.",
"Thư điện tử": "Email",
"Thẻ tiếp theo sau": "Next card in",
"Thẻ tiếp theo đến hạn sau": "Next card due in",
"Thế giới quanh ta": "The world around us",
"Thời gian mỗi ngày": "Daily time",
"Thời gian, số và lịch": "Time, numbers and the calendar",
"Thử giọng": "Try voice",
"Thử lại một lần.": "Try again.",
"Thử sắp xếp lại.": "Try rearranging.",
"Thử thêm một lần.": "Try once more.",
"Tim và mạch máu": "Heart and blood vessels",
"Tin tức": "News",
"Tiêu chảy, nôn": "Diarrhea, vomiting",
"Tiêu hóa, thận, thần kinh và miễn dịch": "Digestive, kidney, nervous and immune systems",
"Tiến bộ": "Progress",
"Tiến độ": "Progress",
"Tiến độ bài": "Lesson progress",
"Tiếng Anh học thuật": "Academic English",
"Tiếng Anh học thuật (IELTS, VSTEP)": "Academic English (IELTS, VSTEP)",
"Tiếng Anh phổ thông": "General English",
"Tiếng Anh thông dụng": "General English",
"Tiếng Anh vùng khác": "Other regional English",
"Tiếng Anh y khoa": "Medical English",
"Tiếng Anh y khoa cơ bản": "Basic medical English",
"Tiếng Việt dùng 'đã', 'hôm qua' để chỉ quá khứ và động từ không đổi. Tiếng Anh phải đổi động từ.": "Vietnamese uses words for \"already\" and \"yesterday\" to show the past, and the verb does not change. English must change the verb.",
"Tiếng Việt không bắt buộc có động từ 'là' trong câu như 'Tôi sinh viên'. Tiếng Anh thì luôn cần be.": "Vietnamese does not require the verb \"to be\" in a sentence like 'I student'. English always needs be.",
"Tiếp theo của chặng": "Next in stage",
"Tiếp tục": "Continue",
"Tiếp tục chặng {1}": "Continue stage {1}",
"Tiếp: [^": "Next: [^",
"Tiếp: chẩn đoán": "Next: diagnosis",
"Tiếp: {1}": "Next: {1}",
"Tiền tố": "Prefix",
"Tiểu buốt": "Painful urination",
"Tnkhoi English: dữ liệu học cá nhân (đừng xóa)": "Tnkhoi English: personal study data (do not delete)",
"Toàn bộ từ vựng (ví dụ, nghĩa, định nghĩa tiếng Anh), bài học, câu hỏi, bài đọc, đề luyện, ca bệnh và đề viết nói do tác giả biên soạn cho ứng dụng, không sao chép từ đề thi hay sách.": "All vocabulary (examples, meanings, English definitions), lessons, questions, reading passages, practice tests, cases, and writing and speaking prompts were written by the author for the app, not copied from exams or books.",
"Toàn cầu hóa và kinh tế": "Globalization and the economy",
"Trang Giọng đọc": "Voice page",
"Triết lý": "Philosophy",
"Triệu chứng và cơ thể": "Symptoms and the body",
"Triệu chứng và dấu hiệu": "Symptoms and signs",
"Triệu chứng, thăm khám, điều trị và giao tiếp với bệnh nhân.": "Symptoms, examination, treatment and communicating with patients.",
"Truyền thông và quảng cáo": "Media and advertising",
"Truyện ngắn": "Short story",
"Trên GitHub, vào Settings, Developer settings, Personal access tokens, Fine-grained tokens, chọn Generate new token.": "On GitHub, go to Settings, Developer settings, Personal access tokens, Fine-grained tokens, then choose Generate new token.",
"Trên bàn phím: phím cách để lật thẻ, phím 1 đến 4 để chấm.": "On the keyboard: space bar to flip the card, keys 1 to 4 to rate.",
"Trên thang 0 đến 10, cơn đau ở mức nào?": "On a scale of 0 to 10, how bad is the pain?",
"Trình bày ca với bác sĩ hướng dẫn": "Present the case to the supervising doctor",
"Trình duyệt chưa trả về danh sách giọng. Hãy tải lại trang hoặc thử trình duyệt khác.": "The browser has not returned a list of voices. Reload the page or try another browser.",
"Trình duyệt này chưa hỗ trợ nhận dạng giọng nói. Bạn có thể ghi âm để tự nghe lại hoặc gõ câu trả lời.": "This browser does not support speech recognition yet. You can record yourself to listen back, or type your answer.",
"Trình duyệt này chưa nhận dạng giọng nói. Hãy ghi âm, nghe lại so với câu mẫu, hoặc gõ câu trả lời để máy kiểm tra ý.": "This browser does not support speech recognition yet. Record yourself and compare with the model sentence, or type your answer so the app can check the ideas.",
"Trình duyệt này chưa nhận dạng giọng nói. Hãy nghe mẫu và đọc theo.": "This browser does not support speech recognition yet. Listen to the model and repeat after it.",
"Trình duyệt này chưa nhận dạng giọng nói; hãy nghe mẫu và đọc theo.": "This browser does not support speech recognition yet; listen to the model and repeat after it.",
"Trình duyệt này không hỗ trợ ghi âm.": "This browser does not support recording.",
"Trình duyệt này không hỗ trợ đọc văn bản.": "This browser does not support text-to-speech.",
"Trình độ hiện tại của bạn là {1}: các chặng thấp hơn được xem là ôn tập, không bắt buộc.": "Your current level is {1}: lower stages are treated as review and are optional.",
"Trình độ phổ thông hiện tại": "Current general level",
"Trình độ từ vựng ước tính: {1}": "Estimated vocabulary level: {1}",
"Trường học và học tập": "School and study",
"Trạng thái": "Status",
"Trạng thái: {1}. Đã lưu {2} từ có bản ghi. Phiên này: {3} lần giọng người thật, {4} lần giọng máy.": "Status: {1}. {2} words with recordings saved. This session: {3} human-voice plays, {4} synthetic-voice plays.",
"Trả lời đủ mọi ý của đề, đúng thể loại và đúng giọng điệu.": "Answer every point of the prompt, in the right genre and the right tone.",
"Trật tự từ trong câu hỏi": "Word order in questions",
"Trộn mọi dạng": "Mix all types",
"Trộn từ vựng của chặng (chọn nghĩa, chọn từ, nghe, viết chính tả) và câu hỏi ngữ pháp. Đạt từ 80% là qua phần kiểm tra.": "Mixes the stage vocabulary (choose the meaning, choose the word, listening, dictation) and grammar questions. A score of 80% or higher passes this part of the test.",
"Tuyển dụng và nhân sự": "Recruitment and HR",
"Tuần hoàn và hô hấp": "Circulation and respiration",
"Tài chính và ngân sách": "Finance and budgeting",
"Tách thuật ngữ thành tiền tố, gốc, hậu tố để đoán nghĩa, và đọc đúng trọng âm.": "Break a term into prefix, root, and suffix to guess its meaning, and read it with the correct stress.",
"Tám chỗ trống, mỗi chỗ bốn lựa chọn. Kiểm tra từ vựng, kết hợp từ, cụm động từ, từ nối.": "Eight blanks, four options each. Tests vocabulary, collocations, phrasal verbs, and linking words.",
"Tám chỗ trống, mỗi chỗ gõ đúng một từ (mạo từ, giới từ, trợ động từ, đại từ quan hệ, từ nối).": "Eight blanks, type exactly one word in each (articles, prepositions, auxiliary verbs, relative pronouns, linking words).",
"Tên cấu trúc cơ thể, vùng và thuật ngữ định hướng.": "Names of body structures, regions, and directional terms.",
"Tên gọi": "Name",
"Tìm trong thư viện": "Search the library",
"Tìm từ": "Find word",
"Tìm từ hoặc nghĩa…": "Search for a word or meaning…",
"Tìm từ tiếng Anh hoặc nghĩa tiếng Việt…": "Search for an English word or Vietnamese meaning…",
"Tính từ và trạng từ lõi": "Core adjectives and adverbs",
"Tính vào kỹ năng {1}.": "Counts toward the {1} skill.",
"Tóm tắt ca": "Case summary",
"Tóm tắt hôm nay": "Today's summary",
"Tóm tắt nghiên cứu": "Research summary",
"Tôi biết từ này": "I know this word",
"Tôi bị đau đầu và đau họng.": "I have a headache and a sore throat.",
"Tôi không biết": "I don't know",
"Tôi thường ăn sáng lúc bảy giờ.": "I usually have breakfast at seven o'clock.",
"Tôi đã biết từ này": "I already know this word",
"Tôi đã nói đủ ý (tự đánh giá)": "I covered all the points (self-assessment)",
"Tôi ở nhà và xem phim.": "I stay home and watch movies.",
"Tạm dừng": "Pause",
"Tạm dừng vì không có tương tác trong 2 phút hoặc trang bị ẩn": "Paused after 2 minutes without interaction or when the page is hidden",
"Tải file sao lưu": "Download backup file",
"Tất cả": "All",
"Tầm soát tăng huyết áp": "Hypertension screening",
"Tập trung vào lỗi sai thường gặp.": "Focus on common mistakes.",
"Tắt chỉ xóa mã truy cập khỏi thiết bị này; dữ liệu học trên máy và trên Gist vẫn còn.": "Turning off only removes the access code from this device; your study data on this device and on Gist remains.",
"Tắt đồng bộ trên thiết bị này": "Turn off sync on this device",
"Tắt đồng bộ và xóa mã truy cập khỏi thiết bị này?": "Turn off sync and remove the access code from this device?",
"Tỉ lệ đúng ngay lần đầu trong 40 lần gần nhất của mỗi kỹ năng, được hiệu chỉnh khi còn ít dữ liệu. Số lần cho biết điểm đáng tin đến đâu.": "Your first-try accuracy over the last 40 attempts for each skill, adjusted when there is little data. The number of attempts shows how reliable the score is.",
"Tốc độ": "Speed",
"Tốc độ đọc {1} lần. Bấm để đổi": "Speech speed {1}×. Tap to change",
"Tốc độ đọc đổi nhanh bằng nút tốc độ trên thanh công cụ. Luyện thi nên nghe ở 1.0×; mới học có thể dùng 0.9×.": "Change the speech speed quickly with the speed button on the toolbar. For exam practice, listen at 1.0×; beginners can use 0.9×.",
"Tốc độ đọc, bấm để đổi": "Speech speed, tap to change",
"Tối": "Dark",
"Tối qua bạn có đi chơi không?": "Did you go out last night?",
"Tốt. So sánh với câu mẫu để nói tự nhiên hơn.": "Good. Compare with the model sentence to sound more natural.",
"Tổng cho cả hai mạch. Mỗi từ tạo 2 thẻ ôn tập.": "Total for both tracks. Each word creates 2 review cards.",
"Tội phạm và pháp luật": "Crime and law",
"Tờ hướng dẫn": "Handout",
"Từ chương trình học, giao diện, thuật toán đề xuất, hệ thống ôn tập, phát âm đến nội dung chuyên ngành, mọi thành phần đều có thể được thử nghiệm và cải tiến.": "From the curriculum, interface, recommendation algorithm, and review system to pronunciation and specialist content, every part can be tested and improved.",
"Từ chối trong tiếng Anh thường có ba phần: cảm ơn hoặc xin lỗi, lý do, đề xuất khác.": "Declining in English usually has three parts: thanks or apology, reason, alternative suggestion.",
"Từ còn thiếu": "Missing word",
"Từ cơ bản": "Basic words",
"Từ của tôi": "My words",
"Từ mới chỉ vào hàng ôn tập sau khi bạn học xong bài.": "New words enter the review queue only after you finish the lesson.",
"Từ mới chỉ vào hàng ôn tập sau khi bạn học xong bài. Thuật toán FSRS lên lịch ôn mỗi thẻ ngay trước lúc bạn sắp quên.": "New words only enter the review queue after you finish the lesson. The FSRS algorithm schedules each card for review just before you are about to forget it.",
"Từ mới mỗi ngày": "New words every day",
"Từ mới vào hàng ôn tập khi bạn học xong bài, hoặc khi bạn chọn học trong Thư viện từ vựng.": "New words enter the review queue when you finish the lesson, or when you choose to learn them in the Vocabulary library.",
"Từ mới {1}/{2}": "New word {1}/{2}",
"Từ nối chỉ sự tương phản": "Contrast linking words",
"Từ nối và diễn ngôn": "Linking words and discourse",
"Từ phía bệnh nhân sang phía bác sĩ, bám khung hỏi bệnh SOCRATES.": "From the patient's side to the doctor's side, following the SOCRATES history-taking framework.",
"Từ sau": "Next word",
"Từ trước": "Previous word",
"Từ vừa đọc là": "The word you just read is",
"Từ vựng": "Vocabulary",
"Từ vựng C1 cho học thuật và nghề nghiệp. Học sau khi đã vững B2.": "C1 vocabulary for academic and professional use. Study after you have mastered B2.",
"Từ vựng TOEIC mức B1, họ từ và kết hợp từ; câu điều kiện loại 2 và dạng từ trong đề thi.": "B1-level TOEIC vocabulary, word families and collocations; type 2 conditionals and word forms in exam questions.",
"Từ vựng công sở": "Office vocabulary",
"Từ vựng của chặng “{1}”. Hôm nay đã nạp {2}/{3} từ.": "Vocabulary for stage “{1}”. Today {2}/{3} words loaded.",
"Từ vựng nơi làm việc: văn phòng, nhân sự, tài chính, đặt hàng, công tác.": "Workplace vocabulary: office, HR, finance, ordering, business trips.",
"Từ vựng và kết hợp từ trong ngữ cảnh công việc.": "Vocabulary and collocations in work contexts.",
"Từ y khoa dễ phát âm nhầm": "Medical words that are easy to mispronounce",
"Từ {1}": "Word {1}",
"Từ {1}{2}": "Word {1}{2}",
"Từ đã học": "Learned words",
"Từ đã học có gạch chân xanh. Chạm vào từ chưa học để thêm vào lịch ôn.": "Learned words are underlined in blue. Tap an unlearned word to add it to your review schedule.",
"Từ đã học theo chủ đề, hình vị, ghép thuật ngữ": "Learned words by topic, word parts, term building",
"Từ đã học, hình vị, ghép thuật ngữ": "Learned words, word parts, building terms",
"Tự chấm theo tiêu chí": "Self-scoring by criteria",
"Tự chọn giọng tốt nhất": "Automatically pick the best voice",
"Tự nhiên": "Natural",
"Tự nói từ {1}": "Say word {1} yourself",
"Tự nói từng từ": "Say each word yourself",
"Tự đọc {1}": "Read {1} yourself",
"Tự đồng bộ khi mở app, mỗi 3 phút và khi rời trang": "Syncs automatically when you open the app, every 3 minutes, and when you leave the page",
"VSTEP (Khung 6 bậc)": "VSTEP (6-level framework)",
"VSTEP.3-5 (ĐHQG Hà Nội)": "VSTEP.3-5 (Vietnam National University, Hanoi)",
"Viêm, nhiễm trùng, u, và tên các bệnh thường gặp.": "Inflammation, infection, tumors, and names of common diseases.",
"Viết": "Writing",
"Viết 3 đến 5 câu: tuổi, nghề, triệu chứng chính và thời gian, đặc điểm nổi bật, dấu hiệu cảnh báo có hay không, và mối lo của bệnh nhân.": "Write 3 to 5 sentences: age, occupation, main symptom and its duration, notable features, whether warning signs are present or absent, and the patient's concerns.",
"Viết bài của bạn ở đây…": "Write your text here…",
"Viết lại câu": "Rewrite sentences",
"Viết lại câu, mức {1}": "Rewrite sentences, level {1}",
"Viết nhiều âm tiết, đọc ít hơn": "Write many syllables, read fewer",
"Viết từ tiếng Anh": "Write the English word",
"Viết và nói": "Writing & speaking",
"Viết đúng chính tả: {1} ({2}).": "Spell it correctly: {1} ({2}).",
"Vào bài": "Start lesson",
"Vào phòng khám": "Enter the clinic",
"Ví dụ": "Example",
"Vô thanh: dây thanh không rung (đặt tay lên cổ không thấy rung). Hữu thanh: dây thanh rung. Nhiều phụ âm đi thành cặp vô thanh và hữu thanh có cùng vị trí miệng: /p/–/b/, /t/–/d/, /k/–/ɡ/, /f/–/v/, /θ/–/ð/, /s/–/z/, /ʃ/–/ʒ/, /tʃ/–/dʒ/. Ký hiệu ∅ nghĩa là không có âm.": "Voiceless: the vocal cords do not vibrate (put your hand on your throat and you feel no vibration). Voiced: the vocal cords vibrate. Many consonants come in voiceless and voiced pairs with the same mouth position: /p/–/b/, /t/–/d/, /k/–/ɡ/, /f/–/v/, /θ/–/ð/, /s/–/z/, /ʃ/–/ʒ/, /tʃ/–/dʒ/. The symbol ∅ means no sound.",
"Vùng cơ thể và thuật ngữ định hướng": "Body regions and directional terms",
"Văn hóa": "Culture",
"Văn phòng và cuộc họp": "Office and meetings",
"Vẫn có thể chuyển dữ liệu thủ công: trong": "You can still transfer data manually: in",
"Vẫn thêm vào ôn tập": "Add to review anyway",
"Về Hôm nay": "About Today",
"Về Mục tiêu": "About Goals",
"Về chặng": "About stages",
"Về chặng {1}": "About stage {1}",
"Về chế độ tự chọn": "About self-select mode",
"Về chủ đề": "About the topic",
"Về lộ trình": "About the learning path",
"Về tác giả": "About the author",
"Vốn từ ước tính": "Estimated vocabulary size",
"Xem báo cáo": "View report",
"Xem câu mẫu, nghe và thử lại.": "View the model sentence, listen, and try again.",
"Xem kết quả": "View results",
"Xem lại câu sai": "Review wrong answers",
"Xem lịch ôn": "View review schedule",
"Xem lời thoại": "View transcript",
"Xem nghĩa tiếng Việt": "View Vietnamese meaning",
"Xem trước một từ": "Preview a word",
"Xem tóm tắt tiếng Việt": "View Vietnamese summary",
"Xem từ": "View word",
"Xem từ {1}": "View word {1}",
"Xin lỗi, mình không đi được. Mai mình bận.": "Sorry, I can't come. I'm busy tomorrow.",
"Xoay xở hầu hết tình huống khi đi lại, kể trải nghiệm, nêu lý do cho ý kiến của mình.": "Handle most situations when traveling, describe experiences, and give reasons for your opinions.",
"Xong phiên ôn": "Finish review session",
"Xây dựng bởi {1}": "Built by {1}",
"Xã hội": "Society",
"Xã hội và quan điểm": "Society and opinions",
"Xóa toàn bộ dữ liệu học": "Delete all learning data",
"Xóa toàn bộ tiến độ, thẻ ôn tập và thời gian học trên thiết bị này? Không thể hoàn tác.": "Delete all progress, review cards, and study time on this device? This cannot be undone.",
"Xương và khớp": "Bones and joints",
"Xếp lại": "Reshuffle",
"Y khoa: giải thích cho bệnh nhân": "Medical: explaining to patients",
"Y khoa: thư gửi bệnh nhân": "Medical: letters to patients",
"bên cạnh": "next to",
"bạn": "you",
"bận": "busy",
"bắt đầu bằng “{1}”, {2} ký tự": "starts with “{1}”, {2} characters",
"bệnh nhân": "patient",
"bị dị ứng": "allergic",
"bữa sáng": "breakfast",
"ca làm việc": "work shift",
"cho giọng phụ. Ứng dụng tự chọn giọng tốt nhất, bạn có thể đổi ở danh sách dưới.": "for secondary voices. The app automatically picks the best voice; you can change it in the list below.",
"chóng mặt": "dizzy",
"chưa có": "none yet",
"chưa khám": "not examined yet",
"chưa kết nối được (kiểm tra mạng; bản xem thử trên Claude chặn kết nối ngoài, trang GitHub Pages thì dùng được)": "could not connect (check your network; the preview on Claude blocks external connections, while the GitHub Pages site works)",
"chưa luyện": "not practiced yet",
"chưa làm": "not done yet",
"chưa tải được": "could not load",
"chọn câu đúng": "choose the correct sentence",
"chọn nghĩa": "choose the meaning",
"chọn từ tiếng Anh": "choose the English word",
"chọn đáp án": "choose the answer",
"cách đây, trước": "ago, before",
"cái ly, cốc": "glass, cup",
"có lẽ": "maybe",
"cắt amiđan": "tonsillectomy",
"cắt bỏ thận": "nephrectomy",
"da liễu học": "dermatology",
"danh từ": "noun",
"dùng Chrome với giọng Google; vào cài đặt Chuyển văn bản thành giọng nói để tải giọng tiếng Anh chất lượng cao.": "use Chrome with Google voices; go to the Text-to-speech settings to download high-quality English voices.",
"dưới ~1.500": "under ~1,500",
"dữ dội, nặng": "severe, intense",
"ghép thuật ngữ": "term building",
"giờ": "hour",
"gọi món": "order food",
"hiện tại": "current",
"hiệu thuốc": "pharmacy",
"hóa đơn": "bill",
"hôm nay {1} phút": "{1} minutes today",
"hôm qua": "yesterday",
"học lại bài": "redo the lesson",
"học {1}": "learn {1}",
"học {1} từ mới": "learn {1} new words",
"hữu thanh": "voiced",
"iPad và iPhone:": "iPad and iPhone:",
"khoảng 3.0–3.5": "about 3.0–3.5",
"khoảng {1} phút": "about {1} minutes",
"khác": "other",
"khám ca": "examine case",
"khám ca {1}": "examine case {1}",
"khó thở": "shortness of breath",
"không có": "none",
"không rõ": "unknown",
"khởi phát": "onset",
"khởi đầu": "starter",
"khởi đầu (dưới A1)": "starter (below A1)",
"kiểm tra chặng {1}": "stage {1} test",
"kiểm tra đầu vào": "placement test",
"kê đơn": "prescribe",
"kế hoạch": "plan",
"liên tục": "continuous",
"lo lắng": "anxious",
"luyện ngữ pháp {1}": "practice {1} grammar",
"luyện âm": "practice sounds",
"luôn luôn": "always",
"làm việc": "at work",
"lượt nghe đúng": "correct listening attempts",
"lượt.": "attempts.",
"lần": "times",
"lần đầu khám ca này": "first time examining this case",
"lịch hẹn": "appointment",
"máy nghe:": "the app heard:",
"mã": "code",
"mệt": "tired",
"mới": "new",
"mới hoặc đang học": "new or learning",
"mới và đang học": "new and learning",
"mời": "invite",
"mời ngồi": "please sit down",
"mở trang bằng Microsoft Edge. Edge có các giọng “Online (Natural)” như Aria, Jenny, Guy (Anh-Mỹ), Sonia, Ryan, Libby (Anh-Anh), nghe rất gần người thật. Các giọng này cần mạng.": "open the page in Microsoft Edge. Edge has “Online (Natural)” voices such as Aria, Jenny, Guy (US English), Sonia, Ryan, Libby (UK English) that sound very close to a real person. These voices need an internet connection.",
"mục tiêu": "goal",
"n là danh từ, v là động từ, adj là tính từ. Trạng từ (adv), cụm từ (phr), giới từ (prep)… xếp vào loại khác. Một số từ có nhiều từ loại; ở đây tính theo nghĩa đang học.": "n is noun, v is verb, adj is adjective. Adverbs (adv), phrases (phr), prepositions (prep), and so on go under other. Some words have several parts of speech; here they are counted by the meaning being learned.",
"nghe và chọn": "listen and choose",
"nghe đúng {1}/{2}": "listened correctly {1}/{2}",
"nghĩa của từ cần điền: {1}": "meaning of the word to fill in: {1}",
"nghĩa: {1}; bắt đầu bằng “{2}”, {3} ký tự": "meaning: {1}; starts with “{2}”, {3} characters",
"ngày có học": "days studied",
"ngày hai lần": "twice a day",
"ngày liên tiếp": "day streak",
"ngày mai": "tomorrow",
"ngày sinh": "date of birth",
"nhói, sắc": "stabbing, sharp",
"như trong": "as in",
"nhằm phục vụ quá trình tự học ngoại ngữ lâu dài.": "intended to support long-term, self-directed language learning.",
"nhịp tim chậm": "slow heart rate",
"nhịp tim nhanh": "fast heart rate",
"nói": "speaking",
"nóng rát": "burning",
"nội soi dạ dày": "gastroscopy",
"phút": "minutes",
"rảnh; miễn phí": "free; available",
"rất vui được gặp bạn": "nice to meet you",
"rẽ trái": "turn left",
"s và": "s and",
"sinh viên": "student",
"sáng": "morning",
"sắp xếp câu": "arrange sentences",
"sẵn sàng": "ready",
"sống": "raw",
"sốt": "fever",
"theo thiết bị": "by device",
"thuật ngữ ghép đúng ngay lần đầu": "compound terms correct on the first try",
"thuốc giảm đau": "painkiller",
"thường thường": "often",
"thẳng": "straight",
"thẻ": "card",
"thẻ đã có": "existing cards",
"thẻ đã vững": "mastered cards",
"thẻ đến hạn": "due cards",
"thẻ đến hạn bây giờ": "cards due now",
"thức dậy": "wake up",
"thực đơn": "menu",
"tim mạch học": "cardiology",
"tiếng Anh": "English",
"tiếng Việt": "Vietnamese",
"triệu chứng": "symptom",
"tránh": "avoid",
"trước.": "before.",
"tác dụng phụ": "side effect",
"tái khám": "follow-up visit",
"tên": "name",
"tìm lỗi sai": "find the error",
"tính từ": "adjective",
"tăng đường huyết": "hyperglycemia",
"tầng": "floor",
"tệ hơn, nặng hơn": "worse, more severe",
"tối": "evening",
"tốt nhất": "best",
"tốt nhất {1}%": "best {1}%",
"tốt nhất {1}%, {2} lượt": "best {1}%, {2} attempts",
"tổng thời gian học": "total study time",
"từ": "word",
"từ (mốc thời gian)": "from (point in time)",
"từ 120": "from 120",
"từ 225": "from 225",
"từ 550": "from 550",
"từ 785": "from 785",
"từ 945": "from 945",
"từ từ": "slowly",
"từ {1}": "from {1}",
"viêm dạ dày": "gastritis",
"viêm gan": "hepatitis",
"viêm khớp": "arthritis",
"viêm màng ngoài tim": "pericarditis",
"viết": "writing",
"viết lại câu": "rewrite the sentence",
"viết đúng chính tả": "spell correctly",
"và": "and",
"vô thanh": "voiceless",
"với": "with",
"xám là đã hỏi": "grey means asked",
"{1} (nội dung VOA tự viết thuộc phạm vi công cộng) · {2} (trừ A.D.A.M. và chuyên khảo thuốc) · {3} (Open Government Licence v3.0, không dùng logo và hình) · {4} (sách thuộc phạm vi công cộng) · {5} (câu ví dụ, CC BY 2.0 FR).": "{1} (original VOA content, public domain) · {2} (except A.D.A.M. and drug monographs) · {3} (Open Government Licence v3.0, logos and images not used) · {4} (public domain books) · {5} (example sentences, CC BY 2.0 FR).",
"{1} Chọn nghĩa đúng": "{1} Choose the correct meaning",
"{1} Câu nói hôm nay": "{1} Phrase of the day",
"{1} Luyện nhanh": "{1} Quick practice",
"{1} Luyện đề": "{1} Exam practice",
"{1} Lộ trình": "{1} Learning path",
"{1} Nói": "{1} Speaking",
"{1} Nếu đã có nền, hãy làm": "{1} If you already have a foundation, do",
"{1} Thử: “{2}”": "{1} Try: “{2}”",
"{1} Xong phần từ mới": "{1} New words done",
"{1} cho giọng chính,": "{1} for the main voice,",
"{1} câu gồm các dạng: {2}. Đạt từ 70% là qua điểm ngữ pháp này.": "{1} questions covering these forms: {2}. Score 70% or more to pass this grammar point.",
"{1} câu hỏi chưa phù hợp": "{1} questions not suitable yet",
"{1} câu về thuật ngữ và nội dung chương": "{1} questions on terms and chapter content",
"{1} giây": "{1} seconds",
"{1} giọng": "{1} voices",
"{1} giờ": "{1} hours",
"{1} giờ {2} phút": "{1} hours {2} minutes",
"{1} kết quả{2}": "{1} results{2}",
"{1} lượt": "{1} attempts",
"{1} lượt chọn Quên. Những thẻ đó sẽ quay lại sớm hơn.": "{1} times you chose Forgot. Those cards will come back sooner.",
"{1} nghĩa là {2}.": "{1} means {2}.",
"{1} ngày": "{1} days",
"{1} năm": "{1} years",
"{1} phút": "{1} minutes",
"{1} tháng": "{1} months",
"{1} thẻ": "{1} cards",
"{1} thẻ mới (nhận diện và gõ lại) đã vào hàng ôn tập. Ôn ngay bây giờ giúp đưa từ vừa học vào trí nhớ.": "{1} new cards (recognition and retyping) have entered the review queue. Reviewing now helps lock the words you just learned into memory.",
"{1} thẻ đến hạn": "{1} cards due",
"{1} thẻ: {2} mới, {3} đang học, {4} đang củng cố, {5} đã vững.": "{1} cards: {2} new, {3} learning, {4} consolidating, {5} mastered.",
"{1} từ": "{1} words",
"{1} từ (mục tiêu {2})": "{1} words (goal {2})",
"{1} từ chưa học": "{1} words not yet studied",
"{1} từ khớp bộ lọc": "{1} words match the filter",
"{1} từ lấy trực tiếp từ Thư viện từ vựng. Học ở đây hay trong thư viện đều cộng vào cùng một tiến độ.": "{1} words taken directly from the Vocabulary library. Studying here or in the library counts toward the same progress.",
"{1} từ mỗi ngày": "{1} words per day",
"{1} từ mới: chặng {2}": "{1} new words: stage {2}",
"{1} từ mới: {2}": "{1} new words: {2}",
"{1} từ mới: {2}.": "{1} new words: {2}.",
"{1} từ và thuật ngữ chia theo {2} chủ đề. Bạn đã học {3} từ. Bấm “Ôn” để đưa một từ vào lịch ôn tập, “Biết” nếu bạn đã chắc chắn.": "{1} words and terms organized into {2} topics. You have studied {3} words. Tap “Review” to add a word to your review schedule, or “Know” if you are sure of it.",
"{1} từ và thuật ngữ trong {2} chủ đề. Mạch phổ thông ưu tiên {3} từ A1–B2 thông dụng cho IELTS, TOEIC, VSTEP và các bài thi theo CEFR; bạn đã học {4} từ trong số đó.": "{1} words and terms in {2} topics. The general English track prioritizes {3} common A1–B2 words for IELTS, TOEIC, VSTEP and CEFR-based exams; you have studied {4} of them.",
"{1} từ vào hàng ôn tập, {2} từ đánh dấu đã biết. Hôm nay bạn đã nạp {3}/{4} từ mới.": "{1} words added to the review queue, {2} words marked as known. Today you have taken in {3}/{4} new words.",
"{1} từ đã học": "{1} words studied",
"{1} từ đến hạn ôn": "{1} words due for review",
"{1} từ, khoảng {2} phút đọc, {3} câu hỏi": "{1} words, about {2} minutes to read, {3} questions",
"{1} Ôn tập": "{1} Review",
"{1} Đọc": "{1} Reading",
"{1} đang là kỹ năng yếu nhất: {2}% trên {3} lần làm gần đây.": "{1} is currently your weakest skill: {2}% over {3} recent attempts.",
"{1} điểm ngữ pháp cốt lõi từ A1 đến C1, sắp theo thứ tự nên học. Mỗi điểm có công thức, cách dùng, ví dụ nghe được, lỗi sai thường gặp và câu hỏi luyện kiểu đề thi. Bạn đã luyện {2}/{3} điểm.": "{1} core grammar points from A1 to C1, arranged in a recommended study order. Each point has a formula, usage notes, listenable examples, common mistakes and exam-style practice questions. You have practiced {2}/{3} points.",
"{1} đoạn văn ngắn do tác giả tự viết, từ A2 đến C1, gồm thư, thông báo, bài báo, hội thoại và tài liệu y khoa. Chạm vào từ gạch chân để xem nghĩa và thêm vào lịch ôn. Bạn đã làm {2}/{3} bài.": "{1} short passages written by the author, from A2 to C1, including letters, notices, articles, dialogues and medical texts. Tap an underlined word to see its meaning and add it to your review schedule. You have completed {2}/{3} passages.",
"{1} đoạn văn, mỗi đoạn 5 câu hỏi": "{1} passages, 5 questions each",
"{1} đề, tự chấm theo tiêu chí": "{1} prompts, self-graded by criteria",
"{1}% trên {2} lượt": "{1}% out of {2} attempts",
"{1}, 4 chỗ trống": "{1}, 4 blanks",
"{1}, chỗ trống {2}": "{1}, blank {2}",
"{1}, phần {2}/{3}": "{1}, part {2}/{3}",
"{1}, {2} câu luyện": "{1}, {2} practice questions",
"{1}, {2} tuổi,": "{1}, {2} years old,",
"{1}, {2} tuổi, {3}. {4}": "{1}, {2} years old, {3}. {4}",
"{1}, {2} âm": "{1}, {2} sounds",
"{1}, {2}{3}, khoảng {4} phút": "{1}, {2}{3}, about {4} minutes",
"{1}/{2} bài": "{1}/{2} lessons",
"{1}/{2} chặng": "{1}/{2} stages",
"{1}/{2} câu": "{1}/{2} questions",
"{1}/{2} câu đúng": "{1}/{2} questions correct",
"{1}/{2} học phần": "{1}/{2} modules",
"{1}/{2} phút": "{1}/{2} minutes",
"{1}/{2} thuật ngữ{3}": "{1}/{2} terms{3}",
"{1}/{2} từ hôm nay": "{1}/{2} words today",
"{1}/{2} từ thư viện{3}": "{1}/{2} library words{3}",
"{1}/{2} từ đã học{3}": "{1}/{2} words studied{3}",
"{1}/{2} từ đã tập": "{1}/{2} words practiced",
"{1}/{2} ý chính": "{1}/{2} key points",
"{1}/{2} đã học": "{1}/{2} studied",
"{1}/{2}/{3}: {4} phút": "{1}/{2}/{3}: {4} minutes",
"{1}: {2} phút": "{1}: {2} minutes",
"{1}Qua chặng khi đạt 80%.": "{1}Pass the stage with 80%.",
"Âm này hầu như không có cặp tối thiểu thông dụng. Hãy nghe và nhại lại các từ ví dụ.": "This sound has almost no common minimal pairs. Listen and repeat the example words.",
"Âm tiếp: {1}": "Next sound: {1}",
"Âm trước: {1}": "Previous sound: {1}",
"Ít": "Few",
"Ôn": "Review",
"Ôn ngay": "Review now",
"Ôn tập": "Review",
"Ôn tập ngắt quãng FSRS": "FSRS spaced review",
"Ôn tập ngắt quãng FSRS.": "FSRS spaced review.",
"Ôn {1} thẻ đến hạn": "Review {1} due cards",
"Ý chính bạn chưa hỏi": "Key points you have not asked about",
"Ý kiến: mạng xã hội": "Opinion: social media",
"âm ỉ": "dull ache",
"ôn {1} thẻ": "review {1} cards",
"Ăn uống": "Food and drink",
"Đang củng cố": "Consolidating",
"Đang dùng:": "In use:",
"Đang học": "Learning",
"Đang học chặng": "Currently learning stage",
"Đang học dở": "In progress",
"Đang nghe…": "Listening…",
"Đang nghe… hãy nói câu hỏi.": "Listening… say your question.",
"Đang tính giờ học": "Timing your study",
"Đang đồng bộ…": "Syncing…",
"Đau họng": "Sore throat",
"Đau khớp gối": "Knee joint pain",
"Đau ngực (sàng lọc hội chứng vành cấp)": "Chest pain (screening for acute coronary syndrome)",
"Đau thượng vị": "Epigastric pain",
"Đau thắt lưng": "Lower back pain",
"Đau đầu": "Headache",
"Đau ở đâu?": "Where does it hurt?",
"Điền 2 đến 5 từ, gồm từ cho sẵn (không đổi dạng), để câu thứ hai cùng nghĩa với câu thứ nhất.": "Fill in 2 to 5 words, including the given word (do not change its form), so the second sentence means the same as the first.",
"Điền 2 đến 5 từ, gồm từ cho sẵn (không đổi dạng), để câu thứ hai cùng nghĩa với câu thứ nhất. Mỗi lượt lấy 10 câu.": "Fill in 2 to 5 words, including the given word (do not change its form), so the second sentence means the same as the first. Each attempt has 10 questions.",
"Điền từ vào câu": "Fill in the blank",
"Điền đoạn văn": "Complete the passage",
"Điều hướng": "Navigation",
"Điều hướng chính": "Main navigation",
"Điều quan trọng là tránh đồ cay.": "It is important to avoid spicy food.",
"Điều trị và chăm sóc": "Treatment and care",
"Điểm kỹ năng chỉ tính từ câu bạn làm, nói rõ đang dựa trên bao nhiêu lần. Thời gian chỉ tính khi bạn thực sự đang học.": "Skill scores are based only on questions you answer, and show how many attempts they rely on. Time is counted only while you are actively studying.",
"Điểm kỹ năng chỉ tính từ câu bạn thực sự làm, nên lúc đầu mọi thứ bằng 0. Dữ liệu nằm trong trình duyệt này; hãy xuất bản sao lưu định kỳ trong": "Skill scores only count questions you actually answer, so everything starts at 0. Data is stored in this browser; export a backup regularly in",
"Điểm tiếp: {1}": "Next score: {1}",
"Điểm trước: {1}": "Previous score: {1}",
"Điểm tổng hợp = một nửa từ thu thập thông tin, còn lại từ tóm tắt, quan điểm bệnh nhân, chẩn đoán và giải thích; mỗi câu hỏi chưa phù hợp trừ 5 điểm. Công cụ tự luyện, không phải điểm OET.": "Overall score = half from information gathering, the rest from summarizing, patient perspective, diagnosis and explanation; each inappropriate question deducts 5 points. This is a self-practice tool, not an OET score.",
"Đáp án:": "Answer:",
"Đây không phải bản sao lưu của Tnkhoi English.": "This is not a Tnkhoi English backup.",
"Đây không được xây dựng với mục tiêu trở thành một ứng dụng học tiếng Anh đại trà. Dự án bắt đầu từ một nhu cầu cá nhân: thay vì sử dụng nhiều công cụ rời rạc cho từ vựng, ngữ pháp, nghe, phát âm, giao tiếp và đọc hiểu, tôi muốn xây dựng một hệ thống học tập thống nhất và dần thích nghi với chính người học.": "This was not built to be a mass-market English learning app. The project started from a personal need: instead of using many separate tools for vocabulary, grammar, listening, pronunciation, communication and reading, I wanted to build one unified learning system that gradually adapts to the learner.",
"Đây là công cụ tự luyện ngôn ngữ, không phải điểm OET và không phải hướng dẫn chẩn đoán hay điều trị.": "This is a language self-practice tool. It is not an OET score and not a guide to diagnosis or treatment.",
"Đây là một dự án đang phát triển": "This is a project in development",
"Đã chuyển sang Anh-Anh: phiên âm và giọng đọc": "Switched to UK English: phonetics and voice",
"Đã chuyển sang Anh-Mỹ: phiên âm và giọng đọc": "Switched to US English: phonetics and voice",
"Đã chọn giọng.": "Voice selected.",
"Đã có trong lịch ôn": "Already in the review schedule",
"Đã cập nhật trình độ hiện tại.": "Current level updated.",
"Đã ghi nhận tự đánh giá. So với câu mẫu để tự sửa.": "Self-assessment recorded. Compare with the sample answer to correct yourself.",
"Đã học đủ bài chuẩn bị.": "All preparation lessons completed.",
"Đã hỏi {1}/{2} ý chính": "Asked {1}/{2} key points",
"Đã luyện {1}/{2}": "Practiced {1}/{2}",
"Đã lưu.": "Saved.",
"Đã mang {1} học từ phiên bản cũ ({2}).": "Brought over {1} learning from the old version ({2}).",
"Đã mang {1} học từ phiên bản cũ sang.": "Carried over {1} learned from the old version.",
"Đã nhập dữ liệu.": "Data imported.",
"Đã sao chép dữ liệu. Dán vào Ghi chú hoặc email để cất giữ.": "Data copied. Paste it into Notes or an email to keep it safe.",
"Đã thêm {1} từ vào ôn tập.": "Added {1} words to review.",
"Đã thêm “{1}” vào ôn tập.": "Added “{1}” to review.",
"Đã tạo file sao lưu. Nếu không thấy file tải về, dùng nút Sao chép dữ liệu.": "Backup file created. If you do not see the downloaded file, use the Copy data button.",
"Đã vững": "Mastered",
"Đã xong hết thẻ đến hạn": "All due cards done",
"Đã xóa dữ liệu.": "Data deleted.",
"Đã ôn": "Reviewed",
"Đã đồng bộ": "Synced",
"Đã đồng bộ.": "Synced.",
"Đóng": "Close",
"Đô thị, nhà ở và giao thông": "Cities, housing and transport",
"Đúng {1}/{2}.": "Correct {1}/{2}.",
"Đúng, chỉ sai chính tả nhẹ.": "Correct, only a minor spelling mistake.",
"Đúng, đánh dấu đã biết": "Correct, mark as known",
"Đúng.": "Correct.",
"Đại từ và từ hạn định": "Pronouns and determiners",
"Đại từ, sở hữu, phản thân, từ hạn định.": "Pronouns, possessives, reflexives, determiners.",
"Đạt yêu cầu.": "Passed.",
"Đầu lưỡi đặt giữa hai hàm răng": "Place the tip of the tongue between the teeth",
"Đặc tả đề thi chính thức": "Official exam specifications",
"Đặt hàng, vận chuyển và mua hàng": "Ordering, shipping and purchasing",
"Đặt tên như “Tnkhoi English sync”, chọn thời hạn, ở mục Account permissions đặt": "Name it like “Tnkhoi English sync”, choose a duration, and in the Account permissions section set",
"Đặt {1} làm trình độ hiện tại": "Set {1} as current level",
"Đề thi thử": "Mock test",
"Đề thi thử: điền từ vào câu": "Mock test: fill in the blank",
"Đề thi thử: điền vào đoạn văn": "Mock test: complete the passage",
"Đọc": "Reading",
"Đọc hiểu": "Reading comprehension",
"Đọc to từ và câu ví dụ sau khi nghe.": "Read the word and example sentence aloud after listening.",
"Đọc to từ và câu ví dụ sau khi nghe. Âm tiết được tô vàng là âm tiết mang trọng âm.": "Read the word and example sentence aloud after listening. The syllable highlighted in yellow is the stressed one.",
"Đọc từ “{1}”…": "Say the word “{1}”…",
"Đọc đủ các phụ âm ở cuối từ": "Pronounce all the final consonants of the word",
"Đồng bộ": "Sync",
"Đồng bộ ngay": "Sync now",
"Đồng bộ thiết bị": "Device sync",
"Đồng bộ đang bật": "Sync is on",
"Đổi cả phiên âm IPA và giọng đọc cho khớp nhau.": "Changes both the IPA transcription and the voice so they match.",
"Đổi giọng Anh-Mỹ / Anh-Anh": "Switch US / UK voice",
"Đổi ngôn ngữ giao diện giữa tiếng Việt và tiếng Anh": "Switch the interface language between Vietnamese and English",
"Động từ khuyết thiếu chỉ lời khuyên, bắt buộc": "Modal verbs for advice and obligation",
"Động từ khuyết thiếu ở quá khứ": "Past modal verbs",
"Động từ lõi thông dụng": "Common core verbs",
"Động từ tiếng Việt không đổi theo người nói. Tiếng Anh thêm -s hoặc -es khi chủ ngữ là he, she, it.": "Vietnamese verbs do not change with the speaker. English adds -s or -es when the subject is he, she or it.",
"Động từ to be": "The verb to be",
"Động từ, tính từ, danh từ lõi xuất hiện trong mọi kỳ thi.": "Core verbs, adjectives and nouns that appear in every exam.",
"Đời sống": "Daily life",
"đa niệu": "polyuria",
"đang củng cố": "consolidating",
"đang học": "learning",
"đang học,": "learning,",
"đang học, bước {1}": "learning, step {1}",
"đang tập trung": "focusing",
"đau (bộ phận nào đó)": "pain (in a body part)",
"đau dây thần kinh": "neuralgia",
"đau giật theo nhịp": "throbbing pain",
"đau họng": "sore throat",
"đau khớp": "joint pain",
"đau đầu": "headache",
"điền dạng đúng": "fill in the correct form",
"điền đoạn văn, chọn từ": "complete the passage, choose words",
"điền đoạn văn, gõ từ": "complete the passage, type words",
"điểm ngữ pháp A1 đến C1, có câu luyện": "A1 to C1 grammar points, with practice questions",
"điểm tổng hợp": "overall score",
"đây là công cụ luyện tiếng Anh giao tiếp lâm sàng, không phải hướng dẫn chẩn đoán hay điều trị. Ngưỡng và cách xử trí bám theo hướng dẫn NICE (Anh) và WHO, có thể khác phác đồ của Bộ Y tế Việt Nam.": "this is a clinical communication English practice tool, not a guide to diagnosis or treatment. Thresholds and management follow NICE (UK) and WHO guidelines and may differ from Vietnam Ministry of Health protocols.",
"đã biết": "known",
"đã học hết {1} từ": "finished all {1} words",
"đã thăm": "visited",
"đã vững": "mastered",
"đã vững (từ 21 ngày)": "mastered (21 days or more)",
"đã xem": "viewed",
"đã đi": "went",
"đã ở lại": "stayed",
"đúng ngay lần đầu": "correct on the first try",
"đúng {1}": "{1} correct",
"đúng {1}/{2}": "correct {1}/{2}",
"được chấm như nhau (": "are scored the same (",
"đến": "to",
"đến hạn bây giờ": "due now",
"đến từ": "comes from",
"đề thi chính thức của ETS, IELTS và Cambridge; English Vocabulary Profile; British Council LearnEnglish.": "official exams from ETS, IELTS and Cambridge; English Vocabulary Profile; British Council LearnEnglish.",
"đọc hiểu": "reading comprehension",
"đối diện": "opposite",
"động từ": "verb",
"đột ngột": "sudden",
"Ưu tiên A1–B2": "Priority A1–B2",
"Ẩn bài đọc": "Hide reading passage",
"Ẩn lời thoại": "Hide dialogue",
"Ẩn nghĩa": "Hide meaning",
"Ẩn tóm tắt": "Hide summary",
"ở G5 quay lại khi hỏi khởi phát bệnh ở M3.": "at G5, return to this when asking about onset at M3.",
"ở các từ gạch chân. Nghe lại và sửa một lần.": "on the underlined words. Listen again and correct once.",
"Ứng dụng dùng hai nguồn âm thanh. Từ đơn được đọc bằng bản ghi người bản xứ thật, nên phân biệt được ship và sheep. Câu và hội thoại được đọc bằng giọng tổng hợp tốt nhất mà thiết bị của bạn có.": "The app uses two audio sources. Single words use real native-speaker recordings, so you can tell ship and sheep apart. Sentences and dialogues are read by the best synthetic voice your device has.",
"Ứng dụng ghi nhận những gì bạn đã biết, tìm ra phần còn thiếu, chọn điều đáng học tiếp theo và biến nó thành những phiên học ngắn, có bằng chứng, dùng được trong thực tế.": "The app records what you already know, finds what is missing, picks what is worth learning next and turns it into short, evidence-based study sessions you can use in real life.",
"Ứng dụng này hoạt động thế nào": "How this app works",
"☁️ Đồng bộ thiết bị": "☁️ Device sync",
"⚖️ Cặp âm tối thiểu": "⚖️ Minimal pairs",
"⚠️ Lỗi sai thường gặp": "⚠️ Common mistakes",
"✍️ Cách viết thường gặp": "✍️ Common ways to write it",
"✍️ Luyện tập": "✍️ Practice",
"✓ máy nghe đúng": "✓ the machine heard correctly",
"⭐ Nền tảng A1–B2 (ưu tiên học trước)": "⭐ A1–B2 foundation (study first)",
"🎓 Luyện thi IELTS và VSTEP": "🎓 IELTS and VSTEP practice",
"🎙️ Giọng người thật cho từ đơn": "🎙️ Real human voices for single words",
"🎧 Luyện nghe phân biệt": "🎧 Listening discrimination practice",
"🎯 Phổ thông: {1} đến {2}": "🎯 General English: {1} to {2}",
"🎲 Bài ngẫu nhiên (5 từ chưa học)": "🎲 Random lesson (5 unlearned words)",
"🏁 Kiểm tra chặng": "🏁 Stage test",
"🏡 Chủ đề đời sống": "🏡 Daily life topics",
"👄 Cách phát âm": "👄 How to pronounce",
"💡 Để giọng máy tự nhiên hơn": "💡 Make the synthetic voice sound more natural",
"💼 Luyện thi TOEIC": "💼 TOEIC practice",
"📐 Ngữ pháp": "📐 Grammar",
"📖 Học phần": "📖 Module",
"📖 Đọc hiểu và bài tập của chương": "📖 Reading and chapter exercises",
"📘 Tiếng Anh phổ thông": "📘 General English",
"📚 Ca nền tảng": "📚 Foundation cases",
"🔊 Phát âm": "🔊 Pronunciation",
"🔊 Từ ví dụ": "🔊 Example words",
"🔤 Từ vựng của chặng": "🔤 Stage vocabulary",
"🗣️ Giọng máy cho câu": "🗣️ Synthetic voice for sentences",
"🧠 Kỹ năng làm bài": "🧠 Test-taking skills",
"🩺 Ca bệnh ảo": "🩺 Virtual cases",
"🩺 Phòng khám sàng lọc ban đầu ({1} tình huống thường gặp)": "🩺 Initial screening clinic ({1} common situations)",
"🩺 Y khoa cơ bản": "🩺 Basic medicine",
"Chào buổi sáng, {1}. {2}": "Good morning, {1}. {2}",
"Chào buổi trưa, {1}. {2}": "Good afternoon, {1}. {2}",
"Chào buổi chiều, {1}. {2}": "Good afternoon, {1}. {2}",
"Chào buổi tối, {1}. {2}": "Good evening, {1}. {2}",
"Tháng {1}/{2}: {3} ngày có học, tổng {4} phút. Mục tiêu mỗi ngày {5} phút.": "{1}/{2}: {3} days studied, {4} minutes in total. Daily goal: {5} minutes.",
"Tháng {1}/{2}: {3} ngày có học, tổng {4} phút, nhiều nhất {5} phút một ngày. Mục tiêu mỗi ngày {6} phút.": "{1}/{2}: {3} days studied, {4} minutes in total, up to {5} minutes in a day. Daily goal: {6} minutes.",
"{1}/{2} từ thư viện": "{1}/{2} library words",
"{1}/{2} từ thư viện, {3}/{4} học phần": "{1}/{2} library words, {3}/{4} sections",
"đang học, {1}%": "in progress, {1}%",
"Chưa bật đồng bộ thiết bị.": "Device sync is not enabled."
};
