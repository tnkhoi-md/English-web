/* ============================================================
   v4.2 · CHƯƠNG TRÌNH HỌC THEO CHẶNG (đồng bộ bài học, thư viện từ vựng,
   ngữ pháp, phát âm, ca bệnh) và NGÂN HÀNG BÀI TẬP NGỮ PHÁP
   vocab: [mã chủ đề trong thư viện, cấp độ]
   ============================================================ */
const UNITS = [
{ id: "a1-1", track: "gen", level: "A1", code: "A1.1", icon: "👋", color: "#2e9d57", title: "First steps", vi: "Làm quen",
  goal: "Giới thiệu bản thân, gia đình, nói giờ và ngày; dùng đúng be, số nhiều và mạo từ.",
  lessons: ["G1"], grammar: ["be", "plurals", "articles"], pron: ["th"],
  vocab: [["core-verbs", "A1"], ["core-nouns", "A1"], ["people", "A1"], ["time", "A1"]] },
{ id: "a1-2", track: "gen", level: "A1", code: "A1.2", icon: "🏠", color: "#3a9d6a", title: "Everyday life", vi: "Cuộc sống hằng ngày",
  goal: "Kể thói quen, hỏi và trả lời câu hỏi đơn giản về sinh hoạt, công việc, cảm xúc.",
  lessons: ["G2"], grammar: ["present-simple", "questions"], pron: ["s"],
  vocab: [["core-adj", "A1"], ["daily", "A1"], ["feelings", "A1"], ["work", "A1"]] },
{ id: "a1-3", track: "gen", level: "A1", code: "A1.3", icon: "🛒", color: "#40a080", title: "Around town", vi: "Quanh thành phố",
  goal: "Gọi món, mua sắm, hỏi đường, nói về cơ thể và thời tiết.",
  lessons: ["G3", "G4"], grammar: ["there-is", "prepositions"], pron: ["silent"],
  vocab: [["food", "A1"], ["places", "A1"], ["shopping", "A1"], ["body", "A1"], ["nature", "A1"], ["tech", "A1"]] },
{ id: "a2-1", track: "gen", level: "A2", code: "A2.1", icon: "🕰️", color: "#12908e", title: "Past and experiences", vi: "Quá khứ và trải nghiệm",
  goal: "Kể lại việc đã xảy ra, nói về trải nghiệm, dùng quá khứ đơn và hiện tại hoàn thành.",
  lessons: ["G5"], grammar: ["past-simple", "present-perfect"], pron: ["ed"],
  vocab: [["core-verbs", "A2"], ["core-nouns", "A2"], ["people", "A2"], ["time", "A2"], ["feelings", "A2"], ["verbs", "A2"]] },
{ id: "a2-2", track: "gen", level: "A2", code: "A2.2", icon: "🗺️", color: "#1a8a9a", title: "Plans and comparisons", vi: "Kế hoạch và so sánh",
  goal: "Nói dự định, so sánh, đưa lời khuyên và điều kiện có thể xảy ra.",
  lessons: ["G6"], grammar: ["future", "comparatives", "modals", "first-conditional"], pron: ["syllables"],
  vocab: [["core-adj", "A2"], ["daily", "A2"], ["food", "A2"], ["places", "A2"], ["shopping", "A2"], ["body", "A2"], ["work", "A2"], ["nature", "A2"], ["tech", "A2"], ["discourse", "A2"], ["x-collocations", "A2"]] },
{ id: "a2-3", track: "gen", level: "A2", code: "A2.3", icon: "🗂️", color: "#2080a8", title: "Workplace basics", vi: "Nơi làm việc cơ bản (TOEIC nền)",
  goal: "Nắm từ vựng công sở, nhân sự, tài chính, bán hàng, đặt hàng, công tác ở mức A2.",
  lessons: [], grammar: [], pron: ["spelling"],
  vocab: [["t-office", "A2"], ["t-hr", "A2"], ["t-finance", "A2"], ["t-marketing", "A2"], ["t-logistics", "A2"], ["t-travel", "A2"], ["i-education", "A2"]] },
{ id: "b1-1", track: "gen", level: "B1", code: "B1.1", icon: "💬", color: "#2f7fd8", title: "Opinions and people", vi: "Quan điểm và con người",
  goal: "Nêu ý kiến có lý do, mô tả con người và công việc; phân biệt hiện tại hoàn thành với quá khứ đơn.",
  lessons: [], grammar: ["pp-vs-past", "gerund-infinitive", "sva"], pron: ["stress"],
  vocab: [["core-verbs", "B1"], ["core-adj", "B1"], ["core-nouns", "B1"], ["people", "B1"], ["feelings", "B1"], ["work", "B1"], ["society", "B1"], ["discourse", "B1"], ["idioms", "B1"]] },
{ id: "b1-2", track: "gen", level: "B1", code: "B1.2", icon: "🌍", color: "#3a6fd8", title: "The world around us", vi: "Thế giới quanh ta",
  goal: "Nói và viết về môi trường, công nghệ, sức khỏe, đô thị; dùng bị động, mệnh đề quan hệ, câu tường thuật.",
  lessons: [], grammar: ["passive", "relative", "reported"], pron: ["clusters"],
  vocab: [["daily", "B1"], ["food", "B1"], ["time", "B1"], ["places", "B1"], ["body", "B1"], ["shopping", "B1"], ["nature", "B1"], ["tech", "B1"], ["verbs", "B1"], ["i-education", "B1"], ["i-environment", "B1"], ["i-technology", "B1"], ["i-health", "B1"], ["i-urban", "B1"], ["i-crime", "B1"], ["i-economy", "B1"], ["i-media", "B1"]] },
{ id: "b1-3", track: "gen", level: "B1", code: "B1.3", icon: "💼", color: "#4561cf", title: "Work and exams B1", vi: "Công việc và luyện thi B1",
  goal: "Từ vựng TOEIC mức B1, họ từ và kết hợp từ; câu điều kiện loại 2 và dạng từ trong đề thi.",
  lessons: [], grammar: ["second-conditional", "word-forms"], pron: [],
  vocab: [["t-office", "B1"], ["t-hr", "B1"], ["t-finance", "B1"], ["t-marketing", "B1"], ["t-logistics", "B1"], ["t-travel", "B1"], ["x-families", "B1"], ["x-collocations", "B1"]] },
{ id: "b2-1", track: "gen", level: "B2", code: "B2.1", icon: "🎓", color: "#5a55d6", title: "Academic English", vi: "Tiếng Anh học thuật (IELTS, VSTEP)",
  goal: "Lập luận, so sánh ưu nhược điểm cho IELTS Writing và Speaking; từ nối tương phản, câu hỏi gián tiếp.",
  lessons: [], grammar: ["linking", "indirect-questions"], pron: [],
  vocab: [["core-verbs", "B2"], ["core-adj", "B2"], ["core-nouns", "B2"], ["academic", "B2"], ["discourse", "B2"], ["society", "B2"], ["i-education", "B2"], ["i-environment", "B2"], ["i-technology", "B2"], ["i-health", "B2"], ["i-urban", "B2"], ["i-crime", "B2"], ["i-economy", "B2"], ["i-media", "B2"]] },
{ id: "b2-2", track: "gen", level: "B2", code: "B2.2", icon: "🧩", color: "#6b4fd0", title: "Precision and range", vi: "Chính xác và đa dạng",
  goal: "Mở rộng vốn từ B2 ở mọi chủ đề và TOEIC; câu điều kiện loại 3, động từ khuyết thiếu quá khứ.",
  lessons: [], grammar: ["third-conditional", "modals-past"], pron: [],
  vocab: [["people", "B2"], ["daily", "B2"], ["food", "B2"], ["time", "B2"], ["places", "B2"], ["work", "B2"], ["body", "B2"], ["feelings", "B2"], ["shopping", "B2"], ["nature", "B2"], ["tech", "B2"], ["verbs", "B2"], ["idioms", "B2"], ["t-office", "B2"], ["t-hr", "B2"], ["t-finance", "B2"], ["t-marketing", "B2"], ["t-logistics", "B2"], ["t-travel", "B2"], ["x-families", "B2"], ["x-collocations", "B2"]] },
{ id: "c1-1", track: "gen", level: "C1", code: "C1", icon: "🚀", color: "#9b3fc0", title: "Towards C1", vi: "Hướng tới C1",
  goal: "Từ vựng C1 cho học thuật và nghề nghiệp. Học sau khi đã vững B2.",
  lessons: [], grammar: [], pron: [],
  vocab: [["work", "C1"], ["feelings", "C1"], ["nature", "C1"], ["tech", "C1"], ["society", "C1"], ["verbs", "C1"], ["academic", "C1"], ["discourse", "C1"], ["idioms", "C1"]] },
{ id: "m-1", track: "med", level: "T1", code: "Y1", icon: "🧍", color: "#0a8f78", title: "Symptoms and the body", vi: "Triệu chứng và cơ thể",
  goal: "Mô tả triệu chứng; gọi tên vùng cơ thể, xương, cơ và thuật ngữ định hướng.",
  lessons: ["M1"], grammar: [], pron: ["medical"], cases: [],
  vocab: [["a-regions", "T1"], ["a-skeleton", "T1"], ["a-muscles", "T1"], ["c-signs", "T1"]] },
{ id: "m-2", track: "med", level: "T1", code: "Y2", icon: "🫀", color: "#0f8a70", title: "Organs and systems", vi: "Cơ quan và hệ cơ quan",
  goal: "Ghép và hiểu thuật ngữ; tên cơ quan của các hệ tim mạch, hô hấp, tiêu hóa, thần kinh, tiết niệu, nội tiết, giác quan.",
  lessons: ["M5"], grammar: [], pron: [], cases: [],
  vocab: [["a-cardio", "T1"], ["a-resp", "T1"], ["a-gi", "T1"], ["a-neuro", "T1"], ["a-uro", "T1"], ["a-endo", "T1"], ["a-senses", "T1"]] },
{ id: "m-3", track: "med", level: "T1", code: "Y3", icon: "🩺", color: "#13866d", title: "Taking a history", vi: "Hỏi bệnh sử",
  goal: "Mở đầu buổi khám, hỏi khởi phát và thời gian; từ vựng sinh lý và thăm khám.",
  lessons: ["M2", "M3"], grammar: ["questions", "pp-vs-past", "indirect-questions"], pron: [], cases: ["C1", "C4", "C8"],
  vocab: [["p-core", "T1"], ["p-circ", "T1"], ["p-systems", "T1"], ["c-exam", "T1"]] },
{ id: "m-4", track: "med", level: "T1", code: "Y4", icon: "🔬", color: "#18806a", title: "Pain and pathology", vi: "Cơn đau và bệnh học",
  goal: "Khai thác cơn đau theo SOCRATES; từ vựng bệnh học đại cương, nhiễm trùng, bệnh theo hệ cơ quan.",
  lessons: ["M4"], grammar: [], pron: [], cases: ["C2", "C7", "C9", "C12"],
  vocab: [["d-general", "T1"], ["d-infect", "T1"], ["d-systems", "T1"]] },
{ id: "m-5", track: "med", level: "T1", code: "Y5", icon: "💊", color: "#1d7a66", title: "Explaining and advising", vi: "Giải thích và dặn dò",
  goal: "Dặn thuốc, khuyên, kiểm tra hiểu (teach-back); điều trị, triệu chứng và xét nghiệm mở rộng.",
  lessons: ["M6"], grammar: ["modals", "first-conditional"], pron: [], cases: ["C3", "C5", "C6", "C10", "C11", "C13"],
  vocab: [["c-treat", "T1"], ["c-signs", "T2"], ["c-exam", "T2"]] },
{ id: "m-6", track: "med", level: "T2", code: "Y6", icon: "📚", color: "#227462", title: "Extended terminology", vi: "Thuật ngữ mở rộng",
  goal: "Thuật ngữ giải phẫu, sinh lý, bệnh học mức mở rộng để đọc tài liệu chuyên ngành.",
  lessons: [], grammar: [], pron: [], cases: [],
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
t|She ___ (not / be) at home now.|isn't;is not|Phủ định: is not, viết tắt isn't.
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
c|___ exercise is good for you.|The / An / (không mạo từ)|2|Nói chung chung: không mạo từ.
c|I saw ___ doctor yesterday. ___ doctor was very kind.|a … The / the … A / a … A|0|Lần đầu nhắc dùng a, lần sau dùng the.
c|He studies at ___ university in Hanoi.|a / an / the|0|university bắt đầu bằng âm /j/ (phụ âm).
c|Please wait for ___ hour.|a / an / the|1|hour bắt đầu bằng âm nguyên âm (h câm).
c|Can you close ___ door, please?|a / an / the|2|Cánh cửa cụ thể mà cả hai đều biết.
t|She has ___ X-ray this afternoon.|an|X-ray đọc bắt đầu bằng âm /e/.
x|Chọn câu đúng|The life is hard. / Life is hard. / A life is hard.|1|Nói chung chung không dùng the.
f|My sister is nurse.|nurse|a nurse|Nghề nghiệp cần a hoặc an.
f|I usually have the breakfast at seven.|the|(bỏ the)|Không dùng the trước bữa ăn nói chung.`,
"there-is": `c|___ any toilets on this floor?|Is there / Are there / Have|1|toilets số nhiều: Are there.
c|There ___ a pharmacy near the station.|is / are / have|0|a pharmacy số ít: There is.
c|There ___ two lifts in this building.|is / are / be|1|Số nhiều: There are.
c|There isn't ___ milk left.|some / any / a|1|Câu phủ định dùng any.
t|___ there a bank near here?|Is|Câu hỏi số ít: Is there …?
t|There ___ (not / be) any beds available.|aren't;are not|Số nhiều phủ định: aren't.
x|Chọn câu đúng|Have a café in the hospital? / Is there a café in the hospital? / There is a café in the hospital have?|1|Không dịch “có” thành have.
x|Chọn câu đúng|There is many people here. / There are many people here. / There have many people here.|1|Số nhiều dùng are.
f|There are a problem with my phone.|are|is|a problem là số ít.
o|Is there a pharmacy near here?|Is there + danh từ số ít?`,
questions: `x|Chọn câu đúng|What you are doing? / What are you doing? / What doing you?|1|Đảo are lên trước you.
x|Chọn câu đúng|How often you exercise? / How often do you exercise? / How often exercise you?|1|Cần trợ động từ do.
c|Where ___ it hurt?|do / does / is|1|it là ngôi thứ ba số ít: does.
c|When ___ the pain start?|did / does / was|0|Quá khứ: did + động từ nguyên mẫu.
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
c|I ___ breakfast this morning.|don't have / didn't have / didn't had|1|didn't + nguyên mẫu.
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
c|The phone is ringing. I ___ answer it.|'ll / am going to / answer|0|Quyết định ngay lúc nói: will.
c|I ___ my dentist at 3 pm tomorrow. It's booked.|see / am seeing / will to see|1|Lịch hẹn đã sắp xếp: hiện tại tiếp diễn.
c|We ___ study medicine next year. We've already applied.|will / are going to / going|1|Dự định có sẵn: going to.
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
c|My pain is ___ at night.|bad / worse / worst|1|bad → worse.
c|The exam was not as ___ as I expected.|hard / harder / hardest|0|as … as dùng tính từ nguyên dạng.
t|Hanoi is ___ (cold) than Ho Chi Minh City in winter.|colder|Tính từ ngắn: -er.
t|This is the ___ (difficult) exam I've ever taken.|most difficult|Tính từ dài, so sánh nhất: the most.
t|Walking is ___ (healthy) than driving.|healthier|y → ier.
x|Chọn câu đúng|It's more better now. / It's much better now. / It's more good now.|1|Nhấn mạnh so sánh hơn dùng much.
x|Chọn câu đúng|She is taller than me. / She is more tall than me. / She is tallest than me.|0|Tính từ ngắn: taller than.
f|He is the most tallest student in the class.|most|(bỏ most)|tallest đã là so sánh nhất.
o|This treatment is more effective than that one.|more + tính từ dài + than.`,
"present-perfect": `c|She ___ in this hospital since 2019.|works / has worked / worked|1|since + mốc, kéo dài đến nay.
c|I ___ my keys. I can't find them.|lost / have lost / am losing|1|Kết quả còn ở hiện tại.
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
c|In Vietnam, drivers ___ drive on the right.|have to / should / might|0|Quy định: have to.
c|She ___ speak three languages.|can / cans / can to|0|Động từ khuyết thiếu không thêm -s, không có to.
c|It ___ rain later, so take an umbrella.|might / must / should to|0|Khả năng: might.
t|You ___ (should / rest) for a few days.|should rest|should + nguyên mẫu.
t|Nurses ___ (have to / wear) a uniform at work.|have to wear|have to + nguyên mẫu.
t|He ___ (not / have to / work) on Sundays.|doesn't have to work;does not have to work|Ngôi thứ ba: doesn't have to.
x|Chọn câu đúng|You must to take it. / You must take it. / You must taking it.|1|Không có to sau must.
x|Chọn câu đúng|She cans come. / She can come. / She can comes.|1|can không đổi theo ngôi.
f|He has to wearing a mask in the ward.|wearing|wear|have to + nguyên mẫu.`,
"first-conditional": `c|If it ___ tomorrow, we will stay at home.|will rain / rains / rained|1|Mệnh đề if dùng hiện tại đơn.
c|If you take this medicine, you ___ better soon.|feel / will feel / felt|1|Mệnh đề chính dùng will.
c|___ you don't hurry, you will miss the bus.|If / Unless / Because|0|If + phủ định.
c|You won't pass ___ you study.|if / unless / when|1|unless = if not.
c|If you ___ enough water, you'll get a headache.|don't drink / won't drink / didn't drink|0|Mệnh đề if: hiện tại đơn.
t|If the pain ___ (get) worse, come back straight away.|gets|Mệnh đề if, ngôi thứ ba: gets.
t|If she ___ (not / eat), she will feel dizzy.|doesn't eat;does not eat|Hiện tại đơn phủ định.
t|I ___ (call) you if I hear any news.|will call;'ll call|Mệnh đề chính: will.
x|Chọn câu đúng|If you will take it with food, it helps. / If you take it with food, it will help. / If you took it with food, it will help.|1|Không dùng will sau if.
x|Chọn câu đúng|If I will see him, I tell him. / If I see him, I will tell him. / If I see him, I told him.|1|If + hiện tại, will + nguyên mẫu.
f|If he will come early, we will start the meeting.|will|(bỏ will: If he comes)|Mệnh đề if không dùng will.
o|If the pain gets worse, call us.|If + hiện tại, mệnh lệnh.`,
"gerund-infinitive": `c|You should stop ___.|smoke / to smoke / smoking|2|stop + V-ing = bỏ thói quen.
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
c|The room ___ at the moment.|is cleaned / is being cleaned / cleans|1|Đang được làm: is being + V3.
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
c|Neither of the answers ___ correct.|is / are / were|0|Neither of + số ít (văn trang trọng).
t|The news ___ (be) good today.|is|news không đếm được, dùng số ít.
t|My family and I ___ (live) in Da Nang.|live|Hai chủ ngữ nối bằng and: số nhiều.
t|Mathematics ___ (be) my favourite subject.|is|Tên môn học tận cùng -s vẫn là số ít.
x|Chọn câu đúng|The equipment are new. / The equipment is new. / The equipments is new.|1|equipment không đếm được.
x|Chọn câu đúng|One of my friends are a doctor. / One of my friends is a doctor. / One of my friend is a doctor.|1|One of + danh từ số nhiều + động từ số ít.
f|The patients in the ward needs more blankets.|needs|need|Danh từ chính patients là số nhiều.
f|There is many reasons for this.|is|are|reasons số nhiều.`,
reported: `c|He ___ me that he was tired.|said / told / asked|1|tell + người.
c|She said she ___ a headache.|has / had / have|1|Lùi thì: have → had.
c|He asked me where the pharmacy ___.|is / was / were|1|Lùi thì, không đảo ngữ.
c|The doctor asked if I ___ any allergies.|have / had / has|1|Lùi thì: had.
c|“I will call you,” he said. → He said he ___ call me.|will / would / can|1|will → would.
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
c|I wish I ___ harder at school.|studied / had studied / would study|1|Hối tiếc về quá khứ: wish + had V3.
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
"modals-past": `c|The lights are off. They ___ gone home.|must have / should have / can have|0|Suy đoán chắc chắn: must have.
c|You ___ told me earlier! Now it's too late.|must have / should have / might|1|Lẽ ra nên: should have.
c|She ___ have taken the wrong bus. She's never late.|might / should / must to|0|Có thể đã: might have.
c|He ___ have seen me. I was hiding.|can't / must / should|0|Không thể nào đã: can't have.
c|I ___ have locked the door, but I'm not sure.|might / must / should to|0|Không chắc: might have.
c|We ___ have booked a table. The restaurant is full.|should / must / can|0|Tiếc nuối: should have.
c|The ground is wet. It ___ have rained last night.|must / should / can|0|Suy luận có căn cứ: must have.
c|You ___ have come. The meeting was cancelled.|needn't / mustn't / can't|0|needn't have: đã làm nhưng hóa ra không cần.
t|He ___ (should / call) an ambulance immediately.|should have called|should have + V3.
t|She ___ (must / forget) about the appointment.|must have forgotten|must have + V3.
t|They ___ (can't / finish) already. It's too soon.|can't have finished;cannot have finished|can't have + V3.
t|I ___ (might / leave) my phone in the taxi.|might have left|might have + V3.
x|Chọn câu đúng|You should came earlier. / You should have come earlier. / You should have came earlier.|1|should have + V3.
x|Chọn câu đúng|It must be a virus yesterday. / It must have been a virus. / It must have be a virus.|1|must have been.
f|She should have went to the doctor.|went|gone|should have + V3 (gone).
o|You should have come in earlier.|should have + V3.`,
linking: `c|___ feeling tired, he finished the report.|Although / Despite / However|1|Sau chỗ trống là V-ing: despite.
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
c|Do you know ___ the clinic is open on Sundays?|whether / that / what|0|whether = liệu có … không.
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
o|Could you tell me where it hurts?|Câu hỏi gián tiếp lịch sự.`
};
