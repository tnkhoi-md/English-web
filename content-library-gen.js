/* ============================================================
   THƯ VIỆN TỪ VỰNG · Tiếng Anh phổ thông (A1 → C1)
   Mỗi dòng: từ | từ loại | nghĩa tiếng Việt | câu ví dụ (không bắt buộc)
   Thêm từ: chỉ cần thêm dòng vào đúng cấp độ của chủ đề.
   ============================================================ */
const LIB_GEN = [
{ id: "people", icon: "👪", color: "#e0773a", title: "People & family", vi: "Con người và gia đình", levels: {
A1: `mother|n|mẹ|My mother is a teacher.
father|n|bố, cha|My father works in a bank.
brother|n|anh, em trai|I have one brother.
sister|n|chị, em gái|Her sister lives in Hue.
son|n|con trai|Their son is five.
daughter|n|con gái|She has two daughters.
husband|n|chồng|Her husband is a doctor.
wife|n|vợ|His wife is from Da Lat.
friend|n|bạn|He is my best friend.
baby|n|em bé|The baby is sleeping.
child|n|đứa trẻ (số nhiều: children)|Every child needs love.
man|n|người đàn ông (số nhiều: men)|
woman|n|người phụ nữ (số nhiều: women)|
name|n|tên|
age|n|tuổi|
old|adj|già; cũ|How old are you?
young|adj|trẻ|
tall|adj|cao|My brother is very tall.
short|adj|thấp; ngắn|`,
A2: `parents|n|bố mẹ|I live with my parents.
grandparents|n|ông bà|
cousin|n|anh chị em họ|
uncle|n|chú, bác, cậu|
aunt|n|cô, dì, bác gái|
neighbour|n|hàng xóm|Our neighbour is very kind.
married|adj|đã kết hôn|They got married last year.
single|adj|độc thân|
born|v|được sinh ra|I was born in 2003.
grow up|phr|lớn lên|She grew up in the countryside.
look like|phr|trông giống|You look like your mother.
beard|n|râu|
curly|adj|xoăn|She has curly hair.
slim|adj|mảnh mai|
friendly|adj|thân thiện|`,
B1: `relative|n|họ hàng|
relationship|n|mối quan hệ|They have a close relationship.
generation|n|thế hệ|
get on with|phr|hòa hợp với|I get on well with my sister.
bring up|phr|nuôi nấng|She was brought up by her grandmother.
take after|phr|giống (người lớn trong nhà)|He takes after his father.
elderly|adj|cao tuổi|We care for elderly patients.
teenager|n|thanh thiếu niên|
adult|n|người trưởng thành|
colleague|n|đồng nghiệp|`,
B2: `upbringing|n|sự nuôi dạy|
sibling|n|anh chị em ruột|
spouse|n|vợ hoặc chồng (trang trọng)|
extended family|n|đại gia đình|
nuclear family|n|gia đình hạt nhân|
next of kin|n|người thân gần nhất (liên hệ khẩn cấp)|Who is your next of kin?`
}},
{ id: "daily", icon: "🏠", color: "#c9962c", title: "Daily life & home", vi: "Sinh hoạt và nhà cửa", levels: {
A1: `house|n|ngôi nhà|
flat|n|căn hộ (US: apartment)|
room|n|phòng|
kitchen|n|nhà bếp|
bedroom|n|phòng ngủ|
bathroom|n|phòng tắm|
bed|n|giường|
table|n|cái bàn|
chair|n|cái ghế|
door|n|cửa|Please close the door.
window|n|cửa sổ|
wake up|phr|thức dậy|I wake up at six.
sleep|v|ngủ|
wash|v|rửa, giặt|Wash your hands, please.
cook|v|nấu ăn|
clean|v|lau dọn|
watch TV|phr|xem ti vi|`,
A2: `sofa|n|ghế sofa|
fridge|n|tủ lạnh|
cupboard|n|tủ chén, tủ đồ|
stairs|n|cầu thang|
garden|n|vườn|
housework|n|việc nhà|
tidy|adj|gọn gàng|Keep your room tidy.
brush|v|chải (răng, tóc)|Brush your teeth twice a day.
shower|n|vòi sen; tắm vòi sen|
laundry|n|quần áo cần giặt; việc giặt giũ|
iron|v|là, ủi (quần áo)|
rent|n, v|tiền thuê; thuê|
key|n|chìa khóa|`,
B1: `routine|n|thói quen hằng ngày|
chore|n|việc vặt trong nhà|
landlord|n|chủ nhà (cho thuê)|
furniture|n|đồ nội thất (không đếm được)|
comfortable|adj|thoải mái|
spare time|n|thời gian rảnh|
sort out|phr|sắp xếp, giải quyết|
run out of|phr|hết (cái gì)|We've run out of milk.
household|n|hộ gia đình|`,
B2: `commute|v, n|đi lại (nhà ↔ nơi làm)|I commute for an hour every day.
maintenance|n|sự bảo trì|
cluttered|adj|bừa bộn|
tenant|n|người thuê nhà|`
}},
{ id: "food", icon: "🍜", color: "#e25d4a", title: "Food & drink", vi: "Ăn uống", levels: {
A1: `rice|n|cơm, gạo|
bread|n|bánh mì|
egg|n|trứng|
meat|n|thịt|
fish|n|cá|
chicken|n|thịt gà; con gà|
fruit|n|trái cây|
vegetable|n|rau củ|
water|n|nước|
milk|n|sữa|
coffee|n|cà phê|
tea|n|trà|
breakfast|n|bữa sáng|
lunch|n|bữa trưa|
dinner|n|bữa tối|
hungry|adj|đói|I'm hungry.
thirsty|adj|khát|`,
A2: `delicious|adj|ngon|
salty|adj|mặn|
sweet|adj|ngọt|
sour|adj|chua|
bitter|adj|đắng|
recipe|n|công thức nấu ăn|
fry|v|chiên, rán|
boil|v|luộc, đun sôi|
bake|v|nướng (lò)|
snack|n|đồ ăn vặt|
dessert|n|món tráng miệng|
order|v|gọi món|
menu|n|thực đơn|
bill|n|hóa đơn (US: check)|`,
B1: `ingredient|n|nguyên liệu|
portion|n|khẩu phần|
diet|n|chế độ ăn|a healthy diet
vegetarian|n, adj|người ăn chay; chay|
takeaway|n|đồ ăn mang đi|
raw|adj|sống, chưa nấu|
fresh|adj|tươi|
leftovers|n|đồ ăn thừa|
nutritious|adj|bổ dưỡng|`,
B2: `processed food|n|thực phẩm chế biến sẵn|
wholegrain|adj|nguyên cám|
appetite|n|sự thèm ăn|I have no appetite.
moderation|n|sự điều độ|Drink alcohol in moderation.
craving|n|cơn thèm|`
}},
{ id: "time", icon: "🗓️", color: "#7a63d6", title: "Time, numbers & calendar", vi: "Thời gian, số và lịch", levels: {
A1: `today|adv|hôm nay|
tomorrow|adv|ngày mai|
yesterday|adv|hôm qua|
morning|n|buổi sáng|
afternoon|n|buổi chiều|
evening|n|buổi tối|
night|n|ban đêm|
week|n|tuần|
month|n|tháng|
year|n|năm|
hour|n|giờ (60 phút)|
minute|n|phút|
Monday|n|thứ Hai|
Sunday|n|Chủ nhật|
first|adj|thứ nhất|
half past|phr|rưỡi (giờ)|It's half past seven.`,
A2: `weekend|n|cuối tuần|
early|adj, adv|sớm|
late|adj, adv|muộn|
always|adv|luôn luôn|
usually|adv|thường thường|
sometimes|adv|thỉnh thoảng|
never|adv|không bao giờ|
ago|adv|cách đây|two days ago
soon|adv|sớm, chẳng bao lâu|
quarter|n|một phần tư; 15 phút|a quarter to nine
century|n|thế kỷ|
date|n|ngày tháng|`,
B1: `recently|adv|gần đây|
nowadays|adv|ngày nay|
in advance|phr|trước (thời hạn)|Book in advance.
on time|phr|đúng giờ|
deadline|n|hạn chót|
schedule|n|lịch trình|
temporary|adj|tạm thời|
permanent|adj|vĩnh viễn|
frequent|adj|thường xuyên|`,
B2: `simultaneously|adv|đồng thời|
duration|n|khoảng thời gian kéo dài|
interval|n|khoảng cách (thời gian)|
annual|adj|hằng năm|an annual check-up
overdue|adj|quá hạn|`
}},
{ id: "places", icon: "✈️", color: "#2f8fd8", title: "Places & travel", vi: "Nơi chốn và du lịch", levels: {
A1: `city|n|thành phố|
street|n|đường phố|
shop|n|cửa hàng|
school|n|trường học|
hospital|n|bệnh viện|
bank|n|ngân hàng|
park|n|công viên|
bus|n|xe buýt|
train|n|tàu hỏa|
car|n|ô tô|
bike|n|xe đạp|
left|n, adv|bên trái|Turn left.
right|n, adv|bên phải|
near|prep|gần|
far|adj|xa|`,
A2: `airport|n|sân bay|
station|n|nhà ga|
ticket|n|vé|
passport|n|hộ chiếu|
hotel|n|khách sạn|
map|n|bản đồ|
journey|n|chuyến đi|
luggage|n|hành lý (không đếm được)|
opposite|prep|đối diện|
corner|n|góc (đường)|
straight|adv|thẳng|Go straight on.
crossroads|n|ngã tư|`,
B1: `destination|n|điểm đến|
accommodation|n|chỗ ở|
sightseeing|n|tham quan|
delay|n, v|sự trì hoãn; hoãn|
departure|n|sự khởi hành|
arrival|n|sự đến nơi|
abroad|adv|ở nước ngoài|
set off|phr|khởi hành|
check in|phr|làm thủ tục nhận phòng / lên máy bay|`,
B2: `itinerary|n|lịch trình chuyến đi|
jet lag|n|mệt mỏi do lệch múi giờ|
remote|adj|xa xôi, hẻo lánh|
congestion|n|tắc nghẽn|traffic congestion
landmark|n|địa danh nổi bật|`
}},
{ id: "work", icon: "💼", color: "#3d6fb0", title: "Work & study", vi: "Công việc và học tập", levels: {
A1: `job|n|công việc|
work|v|làm việc|
student|n|sinh viên, học sinh|
teacher|n|giáo viên|
doctor|n|bác sĩ|
nurse|n|y tá, điều dưỡng|
book|n|quyển sách|
class|n|lớp học|
learn|v|học|
read|v|đọc|
write|v|viết|
office|n|văn phòng|`,
A2: `exam|n|kỳ thi|
homework|n|bài tập về nhà|
subject|n|môn học|
lesson|n|bài học|
meeting|n|cuộc họp|
boss|n|sếp|
salary|n|lương|
busy|adj|bận|
practise|v|luyện tập (US: practice)|
revise|v|ôn bài (UK)|
pass|v|đỗ, qua (kỳ thi)|
fail|v|trượt, thất bại|`,
B1: `career|n|sự nghiệp|
experience|n|kinh nghiệm|
skill|n|kỹ năng|
qualification|n|bằng cấp|
degree|n|bằng đại học|
apply for|phr|nộp đơn xin|
interview|n|buổi phỏng vấn|
training|n|sự đào tạo|
shift|n|ca làm việc|
responsible for|phr|chịu trách nhiệm về|
lecture|n|bài giảng|`,
B2: `internship|n|kỳ thực tập|
residency|n|nội trú (bác sĩ)|
supervisor|n|người hướng dẫn|
workload|n|khối lượng công việc|
burnout|n|kiệt sức vì công việc|
curriculum|n|chương trình học|`,
C1: `proficiency|n|sự thành thạo|
expertise|n|chuyên môn sâu|
competence|n|năng lực|
mentor|n|người cố vấn|`
}},
{ id: "body", icon: "🩹", color: "#d9486b", title: "Health & the body", vi: "Sức khỏe và cơ thể (phổ thông)", levels: {
A1: `head|n|đầu|
eye|n|mắt|
ear|n|tai|
nose|n|mũi|
mouth|n|miệng|
tooth|n|răng (số nhiều: teeth)|
hand|n|bàn tay|
arm|n|cánh tay|
leg|n|chân|
foot|n|bàn chân (số nhiều: feet)|
back|n|lưng|
stomach|n|bụng, dạ dày|
ill|adj|ốm|
sick|adj|ốm; buồn nôn|
hurt|v|đau|My knee hurts.
medicine|n|thuốc|`,
A2: `neck|n|cổ|
shoulder|n|vai|
knee|n|đầu gối|
finger|n|ngón tay|
chest|n|ngực|
skin|n|da|
headache|n|đau đầu|
toothache|n|đau răng|
cold|n|cảm lạnh|
flu|n|cúm|
temperature|n|nhiệt độ; sốt|She has a temperature.
tired|adj|mệt|
pharmacy|n|hiệu thuốc|
appointment|n|lịch hẹn khám|`,
B1: `injury|n|chấn thương|
pain|n|cơn đau|
sore|adj|đau, rát|a sore throat
swollen|adj|sưng|
dizzy|adj|chóng mặt|
treatment|n|sự điều trị|
recover|v|hồi phục|
exercise|n, v|tập thể dục|
healthy|adj|khỏe mạnh|
stress|n|căng thẳng|
checkup|n|khám sức khỏe định kỳ|`,
B2: `symptom|n|triệu chứng|
condition|n|tình trạng bệnh|
chronic|adj|mạn tính|
prescription|n|đơn thuốc|
side effect|n|tác dụng phụ|
wellbeing|n|sự khỏe mạnh toàn diện|`
}},
{ id: "feelings", icon: "💬", color: "#e0a21a", title: "Feelings & personality", vi: "Cảm xúc và tính cách", levels: {
A1: `happy|adj|vui|
sad|adj|buồn|
angry|adj|tức giận|
good|adj|tốt|
bad|adj|tồi, xấu|
nice|adj|dễ chịu|
like|v|thích|
love|v|yêu|
want|v|muốn|`,
A2: `worried|adj|lo lắng|
afraid|adj|sợ|
bored|adj|chán|
excited|adj|hào hứng|
surprised|adj|ngạc nhiên|
nervous|adj|hồi hộp|
kind|adj|tốt bụng|
shy|adj|nhút nhát|
lazy|adj|lười|
funny|adj|hài hước|
polite|adj|lịch sự|`,
B1: `confident|adj|tự tin|
anxious|adj|lo âu|
upset|adj|buồn bực|
embarrassed|adj|ngượng|
patient|adj|kiên nhẫn|
honest|adj|trung thực|
reliable|adj|đáng tin cậy|
calm|adj|bình tĩnh|
frustrated|adj|bực bội, nản|`,
B2: `empathetic|adj|thấu cảm|
reassured|adj|yên tâm|The patient felt reassured.
overwhelmed|adj|choáng ngợp|
resilient|adj|kiên cường|
considerate|adj|chu đáo|
moody|adj|tính khí thất thường|`,
C1: `apprehensive|adj|e sợ, lo ngại|
compassionate|adj|giàu lòng trắc ẩn|
conscientious|adj|tận tâm|
ambivalent|adj|mâu thuẫn trong cảm xúc|`
}},
{ id: "shopping", icon: "🛍️", color: "#c04fa8", title: "Shopping & money", vi: "Mua sắm và tiền bạc", levels: {
A1: `buy|v|mua|
sell|v|bán|
money|n|tiền|
price|n|giá|
cheap|adj|rẻ|
expensive|adj|đắt|
pay|v|trả tiền|
card|n|thẻ|
shirt|n|áo sơ mi|
shoes|n|giày|`,
A2: `size|n|kích cỡ|
try on|phr|mặc thử|Can I try it on?
receipt|n|biên lai|
discount|n|giảm giá|
cash|n|tiền mặt|
change|n|tiền thừa|
customer|n|khách hàng|
market|n|chợ|
spend|v|tiêu (tiền, thời gian)|`,
B1: `afford|v|đủ tiền mua|I can't afford it.
bargain|n|món hời|
refund|n|hoàn tiền|
save|v|tiết kiệm|
budget|n|ngân sách|
loan|n|khoản vay|
brand|n|thương hiệu|`,
B2: `insurance|n|bảo hiểm|health insurance
expenditure|n|khoản chi tiêu|
out of pocket|phr|tự chi trả|
consumer|n|người tiêu dùng|`
}},
{ id: "nature", icon: "🌿", color: "#3c9a4f", title: "Nature, weather & environment", vi: "Thiên nhiên, thời tiết và môi trường", levels: {
A1: `sun|n|mặt trời|
rain|n, v|mưa|
hot|adj|nóng|
cold|adj|lạnh|
tree|n|cây|
flower|n|hoa|
dog|n|con chó|
cat|n|con mèo|
sea|n|biển|
river|n|sông|`,
A2: `weather|n|thời tiết|
cloudy|adj|nhiều mây|
windy|adj|nhiều gió|
storm|n|cơn bão|
season|n|mùa|
mountain|n|núi|
beach|n|bãi biển|
island|n|hòn đảo|
forest|n|rừng|`,
B1: `environment|n|môi trường|
pollution|n|ô nhiễm|air pollution
recycle|v|tái chế|
climate|n|khí hậu|
flood|n|lũ lụt|
humid|adj|ẩm ướt|
temperature|n|nhiệt độ|
protect|v|bảo vệ|`,
B2: `climate change|n|biến đổi khí hậu|
drought|n|hạn hán|
sustainable|adj|bền vững|
emissions|n|khí thải|
heatwave|n|đợt nắng nóng|
endangered|adj|có nguy cơ tuyệt chủng|`,
C1: `biodiversity|n|đa dạng sinh học|
deforestation|n|nạn phá rừng|
mitigate|v|giảm nhẹ|`
}},
{ id: "tech", icon: "💻", color: "#4a67d8", title: "Technology & media", vi: "Công nghệ và truyền thông", levels: {
A1: `phone|n|điện thoại|
computer|n|máy tính|
email|n|thư điện tử|
message|n|tin nhắn|
photo|n|ảnh|
music|n|âm nhạc|
film|n|phim (US: movie)|`,
A2: `website|n|trang web|
app|n|ứng dụng|
password|n|mật khẩu|
download|v|tải xuống|
screen|n|màn hình|
keyboard|n|bàn phím|
online|adj, adv|trực tuyến|
news|n|tin tức|`,
B1: `device|n|thiết bị|
software|n|phần mềm|
upload|v|tải lên|
update|v, n|cập nhật|
social media|n|mạng xã hội|
search|v|tìm kiếm|
charge|v|sạc (pin)|
battery|n|pin|`,
B2: `data|n|dữ liệu|
privacy|n|quyền riêng tư|
artificial intelligence|n|trí tuệ nhân tạo|
backup|n|bản sao lưu|
browser|n|trình duyệt|
reliable source|n|nguồn đáng tin cậy|`,
C1: `algorithm|n|thuật toán|
misinformation|n|thông tin sai lệch|
encryption|n|mã hóa|`
}},
{ id: "society", icon: "🏛️", color: "#8a6a4c", title: "Society & opinions", vi: "Xã hội và quan điểm", levels: {
B1: `opinion|n|ý kiến|In my opinion, ...
agree|v|đồng ý|
disagree|v|không đồng ý|
problem|n|vấn đề|
solution|n|giải pháp|
community|n|cộng đồng|
government|n|chính phủ|
law|n|luật|
rule|n|quy định|
public|adj|công cộng|
crime|n|tội phạm|`,
B2: `issue|n|vấn đề (cần bàn)|
policy|n|chính sách|
inequality|n|sự bất bình đẳng|
poverty|n|sự nghèo đói|
access|n|sự tiếp cận|access to healthcare
benefit|n|lợi ích|
drawback|n|mặt hạn chế|
controversial|adj|gây tranh cãi|
on the other hand|phr|mặt khác|
it depends|phr|còn tùy|`,
C1: `consensus|n|sự đồng thuận|
advocate|v|ủng hộ, bênh vực|
stigma|n|sự kỳ thị|mental health stigma
disparity|n|sự chênh lệch|
welfare|n|phúc lợi|
ethical|adj|thuộc về đạo đức|
dilemma|n|tình thế tiến thoái lưỡng nan|
unprecedented|adj|chưa từng có|`
}},
{ id: "verbs", icon: "🔗", color: "#0f8c8c", title: "Phrasal verbs", vi: "Cụm động từ", levels: {
A2: `get up|phr|thức dậy|
put on|phr|mặc vào|Put on your coat.
take off|phr|cởi ra; (máy bay) cất cánh|
turn on|phr|bật|
turn off|phr|tắt|
look for|phr|tìm kiếm|I'm looking for the pharmacy.
sit down|phr|ngồi xuống|
come back|phr|quay lại|
go out|phr|ra ngoài|`,
B1: `find out|phr|tìm ra, phát hiện|
give up|phr|từ bỏ|He gave up smoking.
look after|phr|chăm sóc|
pick up|phr|nhặt lên; đón|
carry on|phr|tiếp tục|
fill in|phr|điền (mẫu đơn)|Please fill in this form.
set up|phr|thiết lập|
turn up|phr|xuất hiện, đến|
calm down|phr|bình tĩnh lại|
work out|phr|tập thể dục; tìm ra lời giải|`,
B2: `come down with|phr|bị (bệnh nhẹ)|I've come down with a cold.
pass out|phr|ngất|He passed out in the heat.
throw up|phr|nôn|
get over|phr|vượt qua, khỏi (bệnh)|
cut down on|phr|giảm bớt|Cut down on salt.
put off|phr|trì hoãn|
break out|phr|bùng phát|
wear off|phr|hết tác dụng dần|The anaesthetic will wear off.
come round|phr|tỉnh lại|`,
C1: `flare up|phr|bùng phát lại (triệu chứng)|My eczema flares up in winter.
bring on|phr|gây ra, khởi phát|Stress can bring on a migraine.
rule out|phr|loại trừ|We need to rule out a fracture.
fend off|phr|chống đỡ|`
}},
{ id: "academic", icon: "🎓", color: "#5b4fc4", title: "Academic English", vi: "Tiếng Anh học thuật", levels: {
B2: `analyse|v|phân tích|
approach|n|cách tiếp cận|
evidence|n|bằng chứng|
significant|adj|đáng kể; có ý nghĩa thống kê|
method|n|phương pháp|
research|n|nghiên cứu|
factor|n|yếu tố|
data|n|dữ liệu|
conclude|v|kết luận|
indicate|v|cho thấy|
assess|v|đánh giá|
concept|n|khái niệm|`,
C1: `hypothesis|n|giả thuyết|
variable|n|biến số|
correlation|n|mối tương quan|
bias|n|sai lệch, thiên kiến|
sample|n|mẫu (nghiên cứu)|
subsequent|adj|tiếp theo sau|
comprehensive|adj|toàn diện|
derive|v|bắt nguồn; rút ra|
underlying|adj|tiềm ẩn, cơ bản|the underlying cause
implication|n|hàm ý, hệ quả|
robust|adj|vững chắc (bằng chứng)|
feasible|adj|khả thi|
empirical|adj|thực nghiệm|
synthesise|v|tổng hợp|
paradigm|n|mô hình, hệ hình|`
}},
{ id: "discourse", icon: "🧩", color: "#b0582b", title: "Linking & discourse", vi: "Từ nối và diễn ngôn", levels: {
A2: `and|conj|và|
but|conj|nhưng|
because|conj|vì|
so|conj|nên|
then|adv|sau đó|
also|adv|cũng|`,
B1: `however|adv|tuy nhiên|
although|conj|mặc dù|
for example|phr|ví dụ|
first of all|phr|trước hết|
finally|adv|cuối cùng|
in addition|phr|ngoài ra|
instead|adv|thay vào đó|
as a result|phr|kết quả là|`,
B2: `therefore|adv|vì vậy|
whereas|conj|trong khi (đối lập)|
despite|prep|mặc dù (+ danh từ)|
in contrast|phr|ngược lại|
furthermore|adv|hơn nữa|
overall|adv|nhìn chung|
to sum up|phr|tóm lại|`,
C1: `nevertheless|adv|dù vậy|
consequently|adv|do đó|
notwithstanding|prep|bất chấp|
albeit|conj|mặc dù (trang trọng)|
in light of|phr|xét đến|
by the same token|phr|tương tự như vậy|`
}},
{ id: "idioms", icon: "💡", color: "#d0691f", title: "Collocations & idioms", vi: "Kết hợp từ và thành ngữ", levels: {
B1: `make a mistake|phr|mắc lỗi|
take a break|phr|nghỉ giải lao|
make a decision|phr|đưa ra quyết định|
pay attention|phr|chú ý|
keep in touch|phr|giữ liên lạc|
under the weather|phr|hơi mệt, không khỏe|I'm feeling a bit under the weather.`,
B2: `take something seriously|phr|coi trọng việc gì|
raise awareness|phr|nâng cao nhận thức|
a piece of cake|phr|dễ như ăn bánh|
on the mend|phr|đang hồi phục|She's on the mend now.
break the news|phr|báo tin (thường là tin xấu)|
play it by ear|phr|tùy cơ ứng biến|`,
C1: `bear in mind|phr|ghi nhớ, lưu ý|
at a loss|phr|bối rối, không biết làm gì|
a double-edged sword|phr|con dao hai lưỡi|
the tip of the iceberg|phr|phần nổi của tảng băng|
touch and go|phr|ngàn cân treo sợi tóc|It was touch and go for a while.
back to square one|phr|quay lại vạch xuất phát|`
}}
];
