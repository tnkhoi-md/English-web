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
  quiz: [["She is ___ engineer.", ["a", "an", "the"], 1, "engineer bắt đầu bằng âm nguyên âm."], ["___ exercise is good for you.", ["The", "An", "(không mạo từ)"], 2, "Nói chung chung về tập thể dục: không mạo từ."]] },
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
  quiz: [["The pain ___ two days ago.", ["start", "started", "has started"], 1, "Mốc two days ago: quá khứ đơn."], ["I ___ breakfast this morning.", ["don't have", "didn't have", "didn't had"], 1, "didn't + nguyên mẫu."]] },
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
  quiz: [["She ___ in this hospital since 2019.", ["works", "has worked", "worked"], 1, "since + mốc, kéo dài đến nay."], ["I ___ my keys. I can't find them.", ["lost", "have lost", "am losing"], 1, "Kết quả ở hiện tại: have lost."]] },
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
  quiz: [["You should stop ___.", ["smoke", "to smoke", "smoking"], 2, "stop + V-ing = bỏ thói quen."], ["We plan ___ a new clinic.", ["opening", "to open", "open"], 1, "plan + to V."]] },
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
  quiz: [["The lights are off. They ___ gone home.", ["must have", "should have", "can have"], 0, "Suy đoán chắc chắn: must have."]] },
{ id: "linking", lvl: "B2", title: "Although, despite, however", vi: "Từ nối chỉ sự tương phản", exams: ["TOEIC", "IELTS", "VSTEP"],
  form: "although/even though + mệnh đề (S + V). despite/in spite of + danh từ hoặc V-ing. However, … đứng đầu câu mới, sau nó có dấu phẩy.",
  use: "TOEIC hay hỏi phân biệt although và despite. IELTS thưởng điểm cho câu phức có liên từ đúng.",
  ex: [["Although it was raining, she walked to work.", "Mặc dù trời mưa, cô ấy vẫn đi bộ đi làm."], ["Despite the rain, she walked to work.", "Bất chấp trời mưa, cô ấy vẫn đi bộ đi làm."]],
  err: [["Despite it was raining…", "Although it was raining… / Despite the rain…", "despite không đi với mệnh đề."], ["Although …, but …", "Although …, …", "Không dùng although và but cùng lúc."]],
  quiz: [["___ feeling tired, he finished the report.", ["Although", "Despite", "However"], 1, "Sau chỗ trống là V-ing: despite."], ["The drug works well. ___, it can cause headaches.", ["Although", "Despite", "However"], 2, "Đầu câu mới, có dấu phẩy: However."]] },
{ id: "indirect-questions", lvl: "B2", title: "Indirect questions", vi: "Câu hỏi gián tiếp (lịch sự)", exams: ["IELTS", "TOEIC"],
  form: "Could you tell me / Do you know / I was wondering + từ để hỏi (hoặc if/whether) + S + V (không đảo ngữ).",
  use: "Hỏi lịch sự với khách hàng, bệnh nhân, người lạ.",
  ex: [["Could you tell me where it hurts?", "Anh/chị chỉ giúp tôi đau ở đâu nhé?"], ["Do you know if the clinic is open?", "Bạn có biết phòng khám mở cửa không?"]],
  err: [["Could you tell me where does it hurt?", "Could you tell me where it hurts?", "Câu hỏi gián tiếp không dùng trợ động từ đảo."]],
  quiz: [["Do you know what time ___?", ["does the bank open", "the bank opens", "opens the bank"], 1, "Không đảo ngữ trong câu hỏi gián tiếp."]] }
];

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
