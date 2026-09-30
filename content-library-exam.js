/* ============================================================
   THƯ VIỆN TỪ VỰNG LUYỆN THI (v4.1) · ưu tiên A1 → B2
   Danh sách từ do tác giả tự biên soạn, đối chiếu cấp độ với khung CEFR
   (tham khảo NGSL/TSL CC BY-SA 4.0 và Oxford 3000 làm danh mục kiểm tra;
   không sao chép định nghĩa). Mỗi dòng: từ | từ loại | nghĩa | ví dụ
   exam: kỳ thi liên quan. sec: nhóm hiển thị trong thư viện.
   ============================================================ */
const LIB_EXAM_CORE = [
{ id: "core-verbs", sec: "core", exam: ["CEFR", "VSTEP", "IELTS", "TOEIC"], icon: "⚡", color: "#e0622f", title: "Core verbs", vi: "Động từ lõi thông dụng", levels: {
A1: `be|v|thì, là, ở|She is a nurse.
have|v|có; ăn, uống|I have two brothers.
do|v|làm|What do you do?
go|v|đi|We go to school by bus.
come|v|đến|Come here, please.
get|v|nhận; lấy; trở nên|I get up at six.
make|v|làm ra, tạo ra|She makes breakfast every day.
take|v|cầm, lấy; đưa đi|Take one tablet a day.
give|v|cho, đưa|Give me your hand.
see|v|nhìn thấy|I can see the sea.
know|v|biết|I know her name.
think|v|nghĩ|I think it's a good idea.
say|v|nói|What did he say?
tell|v|kể, bảo|Tell me about your family.
ask|v|hỏi; yêu cầu|Can I ask a question?
use|v|sử dụng|Can I use your phone?
find|v|tìm thấy|I can't find my keys.
put|v|đặt, để|Put your bag here.
start|v|bắt đầu|The class starts at eight.
stop|v|dừng lại|Stop the car, please.`,
A2: `become|v|trở thành|She wants to become a doctor.
bring|v|mang đến|Bring your passport.
build|v|xây dựng|They built a new hospital.
carry|v|mang, xách|Can you carry this box?
change|v|thay đổi|I want to change my plan.
choose|v|chọn|Choose the correct answer.
continue|v|tiếp tục|Please continue.
decide|v|quyết định|I decided to study medicine.
describe|v|mô tả|Describe your pain.
explain|v|giải thích|Can you explain this word?
feel|v|cảm thấy|I feel better today.
forget|v|quên|Don't forget your medicine.
happen|v|xảy ra|What happened?
hope|v|hy vọng|I hope you feel better soon.
keep|v|giữ|Keep the medicine in a cool place.
leave|v|rời đi; để lại|The train leaves at nine.
lose|v|mất; thua|I lost my wallet.
move|v|di chuyển; chuyển nhà|Can you move your fingers?
pay|v|trả tiền|Can I pay by card?
remember|v|nhớ|I remember his face.
send|v|gửi|Send me an email.
spend|v|tiêu; dành (thời gian)|I spend two hours studying.
travel|v|đi du lịch, đi lại|I travel for work.
try|v|thử; cố gắng|Try this one.
understand|v|hiểu|I don't understand.
wait|v|chờ|Please wait here.`,
B1: `achieve|v|đạt được|She achieved her goal.
allow|v|cho phép|Visitors are not allowed after 8 pm.
avoid|v|tránh|Avoid fatty food.
compare|v|so sánh|Compare the two results.
consider|v|cân nhắc|Consider all the options.
develop|v|phát triển|He developed a rash.
encourage|v|khuyến khích|We encourage patients to exercise.
expect|v|mong đợi|What do you expect from the treatment?
improve|v|cải thiện|Your English has improved.
include|v|bao gồm|The price includes breakfast.
increase|v|tăng|The risk increases with age.
manage|v|quản lý; xoay xở|She manages a small team.
prepare|v|chuẩn bị|Prepare for the exam.
prevent|v|ngăn ngừa|Vaccines prevent disease.
provide|v|cung cấp|We provide free check-ups.
reduce|v|giảm|Reduce your salt intake.
suggest|v|gợi ý|I suggest you rest.
support|v|hỗ trợ|Her family supports her.`,
B2: `acknowledge|v|thừa nhận|He acknowledged the mistake.
assume|v|cho rằng, giả định|Don't assume it's serious.
contribute|v|đóng góp; góp phần|Stress contributes to high blood pressure.
determine|v|xác định|Tests will determine the cause.
emphasise|v|nhấn mạnh (US: emphasize)|
ensure|v|đảm bảo|Ensure the patient is comfortable.
establish|v|thiết lập|
maintain|v|duy trì|Maintain a healthy weight.
obtain|v|thu được, có được|
overcome|v|vượt qua|She overcame her fear.
pursue|v|theo đuổi|He wants to pursue a career in surgery.
require|v|đòi hỏi, cần|This job requires patience.`
}},
{ id: "core-adj", sec: "core", exam: ["CEFR", "VSTEP", "IELTS"], icon: "🎨", color: "#c77c1a", title: "Core adjectives & adverbs", vi: "Tính từ và trạng từ lõi", levels: {
A1: `big|adj|to|
small|adj|nhỏ|
long|adj|dài|
new|adj|mới|
easy|adj|dễ|
difficult|adj|khó|
beautiful|adj|đẹp|
fast|adj, adv|nhanh|
slow|adj|chậm|
very|adv|rất|
really|adv|thật sự|
often|adv|thường|
again|adv|lại, lần nữa|`,
A2: `important|adj|quan trọng|
interesting|adj|thú vị|
boring|adj|nhàm chán|
dangerous|adj|nguy hiểm|
careful|adj|cẩn thận|Be careful!
quiet|adj|yên tĩnh|
different|adj|khác nhau|
same|adj|giống nhau|
possible|adj|có thể|
ready|adj|sẵn sàng|
quickly|adv|một cách nhanh chóng|
carefully|adv|một cách cẩn thận|
already|adv|đã … rồi|
still|adv|vẫn|`,
B1: `available|adj|có sẵn; rảnh|Is the doctor available?
common|adj|phổ biến|
familiar|adj|quen thuộc|
likely|adj|có khả năng|
necessary|adj|cần thiết|
serious|adj|nghiêm trọng|
successful|adj|thành công|
suitable|adj|phù hợp|
useful|adj|hữu ích|
recent|adj|gần đây|
actually|adv|thực ra|
especially|adv|đặc biệt là|
probably|adv|có lẽ|
unfortunately|adv|không may|`,
B2: `accurate|adj|chính xác|
adequate|adj|đủ, thỏa đáng|
crucial|adj|then chốt|
essential|adj|thiết yếu|
efficient|adj|hiệu quả (về thời gian, nguồn lực)|
effective|adj|có hiệu quả (đạt kết quả)|
relevant|adj|liên quan|
reluctant|adj|miễn cưỡng|
significant|adj|đáng kể|
considerably|adv|đáng kể|
gradually|adv|dần dần|
relatively|adv|tương đối|`
}},
{ id: "core-nouns", sec: "core", exam: ["CEFR", "VSTEP", "IELTS", "TOEIC"], icon: "📦", color: "#b5651d", title: "Core nouns", vi: "Danh từ lõi thông dụng", levels: {
A1: `thing|n|đồ vật, điều|
people|n|người (số nhiều)|
place|n|nơi chốn|
problem|n|vấn đề|
question|n|câu hỏi|
answer|n|câu trả lời|
word|n|từ|
number|n|con số|
way|n|cách; đường|
life|n|cuộc sống|`,
A2: `idea|n|ý tưởng|
information|n|thông tin (không đếm được)|
advice|n|lời khuyên (không đếm được)|
reason|n|lý do|
result|n|kết quả|
activity|n|hoạt động|
area|n|khu vực|
fact|n|sự thật|
group|n|nhóm|
difference|n|sự khác biệt|`,
B1: `advantage|n|lợi thế, ưu điểm|
disadvantage|n|bất lợi, nhược điểm|
effect|n|ảnh hưởng, tác động|
situation|n|tình huống|
attitude|n|thái độ|
behaviour|n|hành vi (US: behavior)|
knowledge|n|kiến thức|
purpose|n|mục đích|
quality|n|chất lượng|
risk|n|rủi ro, nguy cơ|`,
B2: `aspect|n|khía cạnh|
consequence|n|hậu quả|
feature|n|đặc điểm|
outcome|n|kết cục, kết quả|
perspective|n|góc nhìn|
priority|n|ưu tiên|
range|n|phạm vi|
trend|n|xu hướng|`
}}
];

const LIB_EXAM = [
/* ---------- TOEIC ---------- */
{ id: "t-office", sec: "toeic", exam: ["TOEIC"], icon: "🗂️", color: "#2c6fbb", title: "Office & meetings", vi: "Văn phòng và cuộc họp", levels: {
A2: `meeting|n|cuộc họp|
manager|n|người quản lý|
colleague|n|đồng nghiệp|
printer|n|máy in|
file|n|hồ sơ, tệp|
desk|n|bàn làm việc|
schedule|n|lịch trình|`,
B1: `agenda|n|chương trình nghị sự|Let's look at the agenda.
minutes|n|biên bản cuộc họp|Who is taking the minutes?
memo|n|bản ghi nhớ nội bộ|
attachment|n|tệp đính kèm|Please see the attachment.
conference call|n|cuộc gọi hội nghị|
deadline|n|hạn chót|
reschedule|v|dời lịch|Can we reschedule the meeting?
postpone|v|hoãn lại|The meeting was postponed.
supervisor|n|người giám sát|
headquarters|n|trụ sở chính|`,
B2: `branch|n|chi nhánh|
subsidiary|n|công ty con|
merger|n|sáp nhập|
facilitate|v|tạo điều kiện|
delegate|v|giao việc, ủy quyền|
on behalf of|phr|thay mặt cho|I'm writing on behalf of my manager.
in charge of|phr|phụ trách|
as of|phr|kể từ (ngày)|As of Monday, the office opens at 8.`
}},
{ id: "t-hr", sec: "toeic", exam: ["TOEIC"], icon: "🧑‍💼", color: "#7b52c9", title: "Hiring & human resources", vi: "Tuyển dụng và nhân sự", levels: {
A2: `job|n|công việc|
apply|v|nộp đơn|
salary|n|lương|
interview|n|phỏng vấn|`,
B1: `applicant|n|người nộp đơn|
candidate|n|ứng viên|
résumé|n|sơ yếu lý lịch (UK: CV)|
position|n|vị trí công việc|
hire|v|thuê, tuyển|
employee|n|nhân viên|
employer|n|người sử dụng lao động|
training|n|đào tạo|
promotion|n|sự thăng chức|
retire|v|nghỉ hưu|
full-time|adj|toàn thời gian|
part-time|adj|bán thời gian|`,
B2: `orientation|n|buổi định hướng nhân viên mới|
payroll|n|bảng lương|
benefits package|n|gói phúc lợi|
performance review|n|đánh giá hiệu suất|
qualified|adj|đủ trình độ|
resign|v|từ chức|
recruit|v|tuyển dụng|
probation|n|thời gian thử việc|`
}},
{ id: "t-finance", sec: "toeic", exam: ["TOEIC", "IELTS"], icon: "💹", color: "#1f8f5f", title: "Finance & budgets", vi: "Tài chính và ngân sách", levels: {
A2: `price|n|giá|
cost|n, v|chi phí; có giá|
profit|n|lợi nhuận|
bill|n|hóa đơn|`,
B1: `budget|n|ngân sách|
expense|n|chi phí, khoản chi|
invoice|n|hóa đơn thanh toán|
payment|n|khoản thanh toán|
account|n|tài khoản|
loan|n|khoản vay|
estimate|n, v|ước tính|
quarterly|adj|hằng quý|quarterly report
revenue|n|doanh thu|`,
B2: `reimburse|v|hoàn trả chi phí|The company will reimburse your travel costs.
audit|n|kiểm toán|
investment|n|khoản đầu tư|
shareholder|n|cổ đông|
forecast|n, v|dự báo|
deficit|n|thâm hụt|
fiscal year|n|năm tài chính|`
}},
{ id: "t-marketing", sec: "toeic", exam: ["TOEIC"], icon: "📣", color: "#d64f7a", title: "Sales & marketing", vi: "Bán hàng và tiếp thị", levels: {
A2: `customer|n|khách hàng|
product|n|sản phẩm|
sell|v|bán|
advertise|v|quảng cáo|`,
B1: `client|n|khách hàng (dịch vụ)|
brand|n|thương hiệu|
discount|n|giảm giá|
launch|v, n|ra mắt|The new product will launch in May.
survey|n|khảo sát|
competitor|n|đối thủ cạnh tranh|
brochure|n|tờ quảng cáo|
customer service|n|dịch vụ khách hàng|`,
B2: `market share|n|thị phần|
target audience|n|khách hàng mục tiêu|
campaign|n|chiến dịch|
feedback|n|phản hồi|
promotion|n|khuyến mại|
competitive|adj|cạnh tranh|
exceed|v|vượt quá|Sales exceeded expectations.`
}},
{ id: "t-logistics", sec: "toeic", exam: ["TOEIC"], icon: "🚚", color: "#8a5a2b", title: "Orders, shipping & purchasing", vi: "Đặt hàng, vận chuyển và mua hàng", levels: {
A2: `order|n, v|đơn hàng; đặt hàng|
deliver|v|giao hàng|
box|n|thùng, hộp|
receipt|n|biên lai|`,
B1: `delivery|n|sự giao hàng|
shipment|n|lô hàng|
warehouse|n|kho hàng|
supplier|n|nhà cung cấp|
out of stock|phr|hết hàng|
refund|n|hoàn tiền|
warranty|n|bảo hành|
fragile|adj|dễ vỡ|
contract|n|hợp đồng|`,
B2: `inventory|n|hàng tồn kho|
quote|n|báo giá|
procurement|n|mua sắm (doanh nghiệp)|
backorder|n|đơn hàng chờ bổ sung|
dispatch|v|gửi đi|
expedite|v|xúc tiến, làm nhanh|`
}},
{ id: "t-travel", sec: "toeic", exam: ["TOEIC"], icon: "🧳", color: "#1b8fb3", title: "Business travel & events", vi: "Công tác và sự kiện", levels: {
A2: `flight|n|chuyến bay|
book|v|đặt (vé, phòng)|
hotel|n|khách sạn|
trip|n|chuyến đi|`,
B1: `reservation|n|sự đặt chỗ|
itinerary|n|lịch trình chuyến đi|
boarding pass|n|thẻ lên máy bay|
conference|n|hội nghị|
venue|n|địa điểm tổ chức|
attendee|n|người tham dự|
registration|n|đăng ký|
catering|n|dịch vụ ăn uống|`,
B2: `accommodation|n|chỗ ở|
keynote speaker|n|diễn giả chính|
workshop|n|hội thảo thực hành|
reimbursement|n|sự hoàn trả chi phí|
round trip|n|khứ hồi|`
}},
/* ---------- IELTS & VSTEP ---------- */
{ id: "i-education", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🏫", color: "#3a5fc8", title: "Education", vi: "Giáo dục", levels: {
A2: `university|n|đại học|
subject|n|môn học|
student|n|học sinh, sinh viên|`,
B1: `course|n|khóa học|
degree|n|bằng cấp|
knowledge|n|kiến thức|
skill|n|kỹ năng|
qualification|n|bằng cấp, chứng chỉ|
online learning|n|học trực tuyến|
tuition fee|n|học phí|`,
B2: `curriculum|n|chương trình giảng dạy|
academic performance|n|kết quả học tập|
critical thinking|n|tư duy phản biện|
lifelong learning|n|học tập suốt đời|
vocational training|n|đào tạo nghề|
compulsory|adj|bắt buộc|
tertiary education|n|giáo dục đại học|`
}},
{ id: "i-environment", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🌍", color: "#2f9a55", title: "Environment & energy", vi: "Môi trường và năng lượng", levels: {
B1: `environment|n|môi trường|
pollution|n|ô nhiễm|
climate|n|khí hậu|
waste|n, v|rác thải; lãng phí|
recycle|v|tái chế|
protect|v|bảo vệ|
energy|n|năng lượng|
rubbish|n|rác (US: trash)|`,
B2: `sustainable|adj|bền vững|
emission|n|khí thải|
renewable energy|n|năng lượng tái tạo|
fossil fuel|n|nhiên liệu hóa thạch|
conservation|n|sự bảo tồn|
carbon footprint|n|dấu chân carbon|
global warming|n|nóng lên toàn cầu|
single-use plastic|n|nhựa dùng một lần|`
}},
{ id: "i-technology", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🤖", color: "#4d5bd6", title: "Technology & the internet", vi: "Công nghệ và Internet", levels: {
B1: `device|n|thiết bị|
digital|adj|kỹ thuật số|
research|n, v|nghiên cứu|
online|adj, adv|trực tuyến|
software|n|phần mềm|`,
B2: `innovation|n|sự đổi mới|
automation|n|tự động hóa|
rely on|phr|phụ thuộc vào|
access|n, v|truy cập; tiếp cận|
privacy|n|quyền riêng tư|
screen time|n|thời gian dùng màn hình|
cyberbullying|n|bắt nạt trên mạng|
breakthrough|n|bước đột phá|`
}},
{ id: "i-health", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🥗", color: "#d9486b", title: "Health & lifestyle", vi: "Sức khỏe và lối sống", levels: {
B1: `diet|n|chế độ ăn|
exercise|n, v|tập thể dục|
habit|n|thói quen|
stress|n|căng thẳng|
junk food|n|đồ ăn vặt kém lành mạnh|`,
B2: `obesity|n|béo phì|
sedentary|adj|ít vận động|a sedentary lifestyle
well-being|n|sự khỏe mạnh, hạnh phúc|
prevention|n|phòng ngừa|
life expectancy|n|tuổi thọ trung bình|
mental health|n|sức khỏe tâm thần|
healthcare system|n|hệ thống y tế|
awareness|n|nhận thức|`
}},
{ id: "i-urban", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🏙️", color: "#6b7a8f", title: "Cities, housing & transport", vi: "Đô thị, nhà ở và giao thông", levels: {
B1: `traffic|n|giao thông|
public transport|n|giao thông công cộng|
population|n|dân số|
countryside|n|nông thôn|
crowded|adj|đông đúc|`,
B2: `urban|adj|thuộc đô thị|
rural|adj|thuộc nông thôn|
urbanisation|n|đô thị hóa (US: urbanization)|
affordable housing|n|nhà ở giá phải chăng|
congestion|n|tắc nghẽn|
infrastructure|n|cơ sở hạ tầng|
commuter|n|người đi làm xa hằng ngày|
high-rise|adj|cao tầng|`
}},
{ id: "i-crime", sec: "ielts", exam: ["IELTS"], icon: "⚖️", color: "#7a4e3a", title: "Crime & law", vi: "Tội phạm và pháp luật", levels: {
B1: `crime|n|tội phạm|
law|n|luật|
police|n|cảnh sát|
prison|n|nhà tù|
punish|v|trừng phạt|
steal|v|ăn trộm|`,
B2: `offender|n|người phạm tội|
punishment|n|hình phạt|
rehabilitation|n|sự cải tạo, phục hồi|
deter|v|răn đe|
juvenile crime|n|tội phạm vị thành niên|
sentence|n, v|bản án; tuyên án|
community service|n|lao động công ích|`
}},
{ id: "i-economy", sec: "ielts", exam: ["IELTS", "TOEIC"], icon: "🌐", color: "#1b7f8c", title: "Globalisation & economy", vi: "Toàn cầu hóa và kinh tế", levels: {
B1: `economy|n|nền kinh tế|
trade|n, v|thương mại; buôn bán|
company|n|công ty|
international|adj|quốc tế|
unemployment|n|thất nghiệp|`,
B2: `globalisation|n|toàn cầu hóa (US: globalization)|
workforce|n|lực lượng lao động|
invest|v|đầu tư|
demand|n|nhu cầu|
supply|n|nguồn cung|
policy|n|chính sách|
poverty|n|nghèo đói|
inequality|n|bất bình đẳng|
multinational|adj|đa quốc gia|`
}},
{ id: "i-media", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "📰", color: "#c2552e", title: "Media & advertising", vi: "Truyền thông và quảng cáo", levels: {
B1: `advertisement|n|quảng cáo|
newspaper|n|báo|
channel|n|kênh|
article|n|bài báo|`,
B2: `mass media|n|truyền thông đại chúng|
influence|n, v|ảnh hưởng|
consumer|n|người tiêu dùng|
biased|adj|thiên vị|
censorship|n|kiểm duyệt|
celebrity|n|người nổi tiếng|
fake news|n|tin giả|`
}},
/* ---------- Kỹ năng thi ---------- */
{ id: "x-families", sec: "skills", exam: ["TOEIC", "IELTS", "VSTEP"], icon: "🌳", color: "#5a8f29", title: "Word families", vi: "Họ từ (dạng từ) hay ra đề", levels: {
B1: `decide · decision · decisive|v · n · adj|quyết định · sự quyết định · quyết đoán|
succeed · success · successful · successfully|v · n · adj · adv|thành công (các dạng)|
employ · employee · employer · employment|v · n · n · n|thuê · nhân viên · chủ · việc làm|
produce · product · production · productive|v · n · n · adj|sản xuất · sản phẩm · sự sản xuất · năng suất|
care · careful · carefully · careless|n · adj · adv · adj|chăm sóc · cẩn thận · cẩn thận · bất cẩn|`,
B2: `economy · economic · economical · economist|n · adj · adj · n|kinh tế · thuộc kinh tế · tiết kiệm · nhà kinh tế|
compete · competition · competitive · competitor|v · n · adj · n|cạnh tranh (các dạng)|
diagnose · diagnosis · diagnostic|v · n · adj|chẩn đoán (các dạng)|
prescribe · prescription|v · n|kê đơn · đơn thuốc|
effect · effective · effectively · effectiveness|n · adj · adv · n|tác động · hiệu quả (các dạng)|
analyse · analysis · analytical · analyst|v · n · adj · n|phân tích (các dạng)|`
}},
{ id: "x-collocations", sec: "skills", exam: ["IELTS", "TOEIC", "VSTEP"], icon: "🧷", color: "#b24a8c", title: "Exam collocations", vi: "Kết hợp từ hay dùng khi thi", levels: {
A2: `make a mistake|phr|mắc lỗi|
do homework|phr|làm bài tập về nhà|
take a break|phr|nghỉ giải lao|
catch a cold|phr|bị cảm lạnh|
have a temperature|phr|bị sốt|`,
B1: `make a decision|phr|đưa ra quyết định|
pay attention to|phr|chú ý tới|
meet a deadline|phr|kịp hạn chót|
attend a meeting|phr|tham dự cuộc họp|
heavy traffic|phr|giao thông đông đúc|
take medication|phr|dùng thuốc|
suffer from|phr|mắc, chịu đựng (bệnh)|He suffers from asthma.
depend on|phr|phụ thuộc vào|
be responsible for|phr|chịu trách nhiệm về|`,
B2: `have an effect on|phr|có tác động tới|
play a role in|phr|đóng vai trò trong|
raise awareness of|phr|nâng cao nhận thức về|
lead to|phr|dẫn đến|
result in|phr|gây ra, dẫn tới|
due to|phr|do, vì|
in terms of|phr|xét về mặt|
reduce emissions|phr|giảm khí thải|
commit a crime|phr|phạm tội|`
}}
];
/* Nền tảng lên đầu để lượt học từ mới mỗi ngày ưu tiên từ lõi A1–B2; chủ đề luyện thi xếp sau. */
LIB_GEN.unshift(...LIB_EXAM_CORE);
LIB_GEN.push(...LIB_EXAM);
