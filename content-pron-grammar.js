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
