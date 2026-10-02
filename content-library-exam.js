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
stop|v|dừng lại|Stop the car, please.
eat|v|ăn|I eat rice for lunch.
drink|v|uống|Please drink some water.
live|v|sống, ở|They live in a small house.
play|v|chơi|The children play in the park.
run|v|chạy|I run every morning.
walk|v|đi bộ|We walk to school together.
open|v|mở|Please open the window.
close|v|đóng|Please close the door.
help|v|giúp đỡ|Can you help me?
call|v|gọi (điện thoại)|I will call you tonight.
look|v|nhìn|Look at this picture!
listen|v|nghe|Please listen to the teacher.
speak|v|nói (một ngôn ngữ)|She can speak three languages.
need|v|cần|I need a pen.
meet|v|gặp|I meet my friends on Sunday.
show|v|cho xem, chỉ|Can you show me the way?
wear|v|mặc, đội, đeo|He likes to wear a blue hat.
visit|v|thăm, tham quan|We visit my grandmother every week.
stand|v|đứng|Please stand near the door.
turn|v|rẽ, quay|Turn left at the bank.`,
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
wait|v|chờ|Please wait here.
believe|v|tin, tin tưởng|I believe you.
borrow|v|mượn|Can I borrow your pen, please?
lend|v|cho mượn|Could you lend me some money?
check|v|kiểm tra|Please check your answers again.
enjoy|v|thích, tận hưởng|I enjoy listening to music in the evening.
finish|v|hoàn thành, kết thúc|When do you finish work today?
follow|v|đi theo, làm theo|Please follow me to the office.
join|v|tham gia, gia nhập|Would you like to join our team?
invite|v|mời|I want to invite you to my party.
mean|v|có nghĩa là|What does this word mean?
miss|v|lỡ; nhớ|I miss my family very much.
offer|v|đề nghị, mời|They offer free coffee to every guest.
return|v|trở lại; trả lại|Please return the book next week.
share|v|chia sẻ, dùng chung|We share a small room.
stay|v|ở lại, ở (khách sạn)|We stay at a hotel near the beach.
teach|v|dạy|She will teach me to drive.
throw|v|ném, quăng|Throw the ball to me!
wish|v|ước, mong|I wish I could fly.
worry|v|lo lắng|Please do not worry about me.
win|v|thắng|Our team will win the game.
cut|v|cắt|Cut the bread with a knife.
break|v|làm vỡ, làm hỏng|Be careful not to break the glass.
fall|v|ngã, rơi|Leaves fall from the trees in autumn.
hold|v|cầm, giữ|Hold my bag for a minute, please.
reach|v|với tới; đến được|We reach the village before dark.`,
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
support|v|hỗ trợ|Her family supports her.
accept|v|chấp nhận, nhận|She decided to accept the job offer.
approve|v|phê duyệt, tán thành|The manager will approve your holiday request.
appear|v|xuất hiện; có vẻ|A strange light began to appear in the sky.
argue|v|tranh cãi; lập luận|They always argue about money.
arrange|v|sắp xếp, bố trí|Can you arrange a meeting for next week?
belong|v|thuộc về|This bag does not belong to me.
cause|v|gây ra|Heavy rain can cause serious floods.
complain|v|phàn nàn|Customers often complain about the slow service.
discover|v|khám phá, phát hiện|Scientists discover new species every year.
discuss|v|thảo luận|We need to discuss the problem as a team.
earn|v|kiếm (tiền), giành được|She works two jobs to earn enough money.
express|v|bày tỏ, diễn đạt|It is hard to express my feelings in English.
fix|v|sửa chữa; cố định|Can you fix my bike this weekend?
handle|v|xử lý, đối phó|She knows how to handle difficult customers.
imagine|v|tưởng tượng|I cannot imagine living without my phone.
introduce|v|giới thiệu|Let me introduce my sister to you.
involve|v|bao gồm, liên quan đến|The job will involve a lot of travel.
mention|v|đề cập|He did not mention the price.
notice|v|nhận thấy, để ý|I did not notice the mistake until later.
promise|v|hứa|I promise to call you tomorrow.
realise|v|nhận ra|Did you realise that the shop closes at five?
receive|v|nhận được|Did you receive my email yesterday?
refuse|v|từ chối|He may refuse to answer the question.
remind|v|nhắc nhở|Please remind me to buy milk.
replace|v|thay thế|We need to replace the old computer.
solve|v|giải quyết, giải (bài toán)|It took an hour to solve the puzzle.
survive|v|sống sót, tồn tại|Few plants can survive in the desert.
warn|v|cảnh báo|The doctor will warn him about the risks.`,
B2: `acknowledge|v|thừa nhận|He acknowledged the mistake.
assume|v|cho rằng, giả định|Don't assume it's serious.
contribute|v|đóng góp; góp phần|Stress contributes to high blood pressure.
determine|v|xác định|Tests will determine the cause.
emphasise|v|nhấn mạnh (US: emphasize)|The teacher likes to emphasise how important it is to read every day.
ensure|v|đảm bảo|Ensure the patient is comfortable.
establish|v|thiết lập|Two friends decided to establish a small company in their town.
maintain|v|duy trì|Maintain a healthy weight.
obtain|v|thu được, có được|You need to obtain a visa before you travel to that country.
overcome|v|vượt qua|She overcame her fear.
pursue|v|theo đuổi|He wants to pursue a career in surgery.
require|v|đòi hỏi, cần|This job requires patience.
adapt|v|thích nghi; điều chỉnh|It takes time to adapt to a new culture.
adjust|v|điều chỉnh|You can adjust the seat to make it more comfortable.
anticipate|v|dự đoán, lường trước|We anticipate heavy traffic during the holiday.
claim|v|cho rằng, khẳng định; yêu cầu bồi thường|Some people claim that the medicine is dangerous.
clarify|v|làm rõ|Could you clarify what you mean by that?
conduct|v|tiến hành, thực hiện|The team will conduct a survey next month.
convince|v|thuyết phục|She tried to convince him to see a doctor.
demonstrate|v|chứng minh; trình diễn|The study aims to demonstrate the benefits of exercise.
distinguish|v|phân biệt|It is hard to distinguish the real from the fake.
eliminate|v|loại bỏ|The new system helps eliminate errors in the data.
enhance|v|nâng cao, cải thiện|Good lighting can enhance the quality of your photos.
enable|v|cho phép, giúp có thể|This app will enable patients to book appointments online.
generate|v|tạo ra, phát ra|Wind farms generate clean electricity.
identify|v|nhận ra, xác định|Doctors can identify the problem with a simple test.
imply|v|ngụ ý, hàm ý|His silence seemed to imply that he disagreed.`,
C1: `accommodate|v|đáp ứng, cung cấp chỗ ở; điều chỉnh cho phù hợp|The hospital can accommodate up to five hundred patients.
allocate|v|phân bổ|The government will allocate more funds to rural clinics.
alleviate|v|làm dịu, giảm bớt|This medicine should alleviate the pain within an hour.
articulate|v|diễn đạt rõ ràng|She struggled to articulate her concerns to the committee.
circumvent|v|lách, tránh (quy định, khó khăn)|Some companies try to circumvent the new safety rules.
comply|v|tuân thủ|All staff must comply with the hospital's safety regulations.
comprise|v|bao gồm, gồm có|The committee will comprise twelve members from different countries.
constitute|v|cấu thành, tạo nên|Women constitute the majority of the nursing workforce.
convey|v|truyền đạt|It is hard to convey bad news with kindness.
deteriorate|v|xấu đi, suy giảm|The patient's condition began to deteriorate overnight.
diminish|v|giảm bớt, suy giảm|Public trust in the company began to diminish after the scandal.
discern|v|nhận ra, phân biệt được|It was difficult to discern any real difference between the two results.
elicit|v|gợi ra, khơi ra|The survey was designed to elicit honest opinions from patients.
embody|v|thể hiện, hiện thân|She seems to embody everything a good nurse should be.
endorse|v|tán thành, ủng hộ công khai|Many doctors endorse the new guidelines on healthy eating.
exacerbate|v|làm trầm trọng thêm|Stress can exacerbate many chronic health conditions.
exert|v|dùng (sức, ảnh hưởng)|Peer pressure can exert a strong influence on young people.
foster|v|nuôi dưỡng, thúc đẩy|Good teachers foster curiosity in their students.
hinder|v|cản trở|Poor communication can hinder effective teamwork.
impose|v|áp đặt|The city decided to impose strict limits on traffic.
infer|v|suy ra|From her tone, we could infer that she was disappointed.
intervene|v|can thiệp|The nurse had to intervene when the argument became heated.
undermine|v|làm suy yếu, phá hoại dần|Constant criticism can undermine a person's confidence.
uphold|v|duy trì, bảo vệ (luật, nguyên tắc)|Judges must uphold the law without fear or favour.
warrant|v|đáng, biện minh cho|The situation does not warrant such a strong response.`
}},
{ id: "core-adj", sec: "core", exam: ["CEFR", "VSTEP", "IELTS"], icon: "🎨", color: "#c77c1a", title: "Core adjectives & adverbs", vi: "Tính từ và trạng từ lõi", levels: {
A1: `big|adj|to|The elephant is a very big animal.
small|adj|nhỏ|My room is small, but it is nice.
long|adj|dài|She has long black hair.
new|adj|mới|I have a new phone.
easy|adj|dễ|This test is easy for me.
difficult|adj|khó|Chinese is difficult for me.
beautiful|adj|đẹp|The garden is beautiful in spring.
fast|adj, adv|nhanh|Nam runs very fast.
slow|adj|chậm|The old bus is slow.
very|adv|rất|The soup is very hot.
really|adv|thật sự|I really like this song.
often|adv|thường|We often eat rice for dinner.
again|adv|lại, lần nữa|Please say it again.
many|det|nhiều (đếm được)|There are many books here.
much|det|nhiều (không đếm được)|I do not have much time.
some|det|một vài, một ít|I want some water.
every|det|mỗi, mọi|I study English every day.
only|adv|chỉ|I have only one pen.
too|adv|quá; cũng|This bag is too heavy.
now|adv|bây giờ|I am busy now.
here|adv|ở đây|Come here, please.
there|adv|ở đó|My bag is over there.
well|adv|giỏi, tốt|She sings very well.
hard|adj, adv|khó; chăm chỉ|I work hard every day.
high|adj|cao (núi, tòa nhà)|That mountain is very high.
low|adj|thấp|The table is low.
heavy|adj|nặng|This box is very heavy.
full|adj|đầy; no|The bus is full.
true|adj|đúng, thật|Is this story true?
wrong|adj|sai|My answer is wrong.
great|adj|tuyệt vời|That is a great film!
next|adj|tiếp theo|The next bus is at ten.`,
A2: `important|adj|quan trọng|It is important to drink water every day.
interesting|adj|thú vị|This book is interesting, so I read it twice.
boring|adj|nhàm chán|The film was so boring that I fell asleep.
dangerous|adj|nguy hiểm|It is dangerous to swim in this river.
careful|adj|cẩn thận|Be careful!
quiet|adj|yên tĩnh|The library is quiet, so I study there.
different|adj|khác nhau|My brother and I have different hobbies.
same|adj|giống nhau|Lan and Anna wear the same school uniform.
possible|adj|có thể|Is it possible to pay by card here?
ready|adj|sẵn sàng|Dinner is ready, so come and eat.
quickly|adv|một cách nhanh chóng|Minh ate his breakfast quickly and ran to school.
carefully|adv|một cách cẩn thận|Read the question carefully before you answer.
already|adv|đã … rồi|I have already finished my homework.
still|adv|vẫn|It is midnight, but Nam is still awake.
enough|adv|đủ|Is the room big enough for ten people?
each|det|mỗi (một)|Each student has a book.
both|det|cả hai|Both my parents are teachers.
another|det|một cái khác nữa|Can I have another cup of tea?
few|det|ít, vài (đếm được)|I have a few close friends.
most|det|hầu hết|Most people here speak English.
almost|adv|gần như, suýt|It is almost midnight.
maybe|adv|có lẽ|Maybe we can meet on Friday.
ever|adv|từng (trong câu hỏi)|Have you ever been to Japan?
once|adv|một lần; từng|I went there once.
together|adv|cùng nhau|We study together after school.
alone|adj, adv|một mình|She lives alone in the city.
perfect|adj|hoàn hảo|This is the perfect place for a picnic.
special|adj|đặc biệt|Today is a special day for us.
strong|adj|khỏe, mạnh|He is strong enough to lift the box.
clear|adj|rõ ràng; trong|The water is very clear.
correct|adj|đúng, chính xác|Your answer is correct.
main|adj|chính|The main road is closed today.
whole|adj|toàn bộ, cả|I read the whole book in one day.
real|adj|thật, có thật|Is this a real diamond?
popular|adj|được ưa chuộng|Football is very popular in Vietnam.
safe|adj|an toàn|It is safe to walk here at night.
quite|adv|khá, khá là|The soup is quite hot.
just|adv|vừa mới; chỉ|I have just finished my homework.
famous|adj|nổi tiếng|She is a famous singer.`,
B1: `available|adj|có sẵn; rảnh|Is the doctor available?
common|adj|phổ biến|Colds are common in winter.
familiar|adj|quen thuộc|Her face looks familiar, but I forget her name.
likely|adj|có khả năng|It is likely to rain this afternoon, so take an umbrella.
necessary|adj|cần thiết|Is it necessary to book a table in advance?
serious|adj|nghiêm trọng|The doctor said it was not a serious illness.
successful|adj|thành công|Anna is a successful lawyer with her own office.
suitable|adj|phù hợp|These shoes are not suitable for climbing mountains.
useful|adj|hữu ích|A dictionary is a useful tool for learning English.
recent|adj|gần đây|In recent years, more people have started working from home.
actually|adv|thực ra|I thought the test was hard, but it was actually quite easy.
especially|adv|đặc biệt là|I love fruit, especially mangoes.
probably|adv|có lẽ|Minh is probably at home, because his light is on.
unfortunately|adv|không may|Unfortunately, the museum is closed on Mondays.
aware|adj|nhận thức được|Are you aware of the risks?
current|adj|hiện tại, hiện nay|The current situation is difficult for everyone.
exact|adj|chính xác|I do not know the exact time of the meeting.
extra|adj|thêm, phụ|We need an extra chair for the guest.
huge|adj|to lớn, khổng lồ|They live in a huge house near the lake.
impossible|adj|không thể|It is impossible to finish this work in one hour.
independent|adj|độc lập|She is a strong and independent woman.
major|adj|chính, quan trọng, lớn|Pollution is a major problem in big cities.
normal|adj|bình thường|It is normal to feel nervous before an exam.
obvious|adj|rõ ràng, hiển nhiên|It was obvious that he was not happy.
particular|adj|cụ thể, đặc biệt|Is there a particular reason for your visit?
positive|adj|tích cực; dương tính|She always has a positive attitude to life.
negative|adj|tiêu cực; âm tính|Try not to be so negative about your work.
similar|adj|tương tự|My brother and I have similar hobbies.
simple|adj|đơn giản|The test was simple and quick.
sudden|adj|đột ngột|There was a sudden noise outside the room.
typical|adj|điển hình, tiêu biểu|A typical day starts at six in the morning.
various|adj|nhiều loại, đa dạng|The shop sells various kinds of tea.
definitely|adv|chắc chắn, nhất định|I will definitely come to your party.
eventually|adv|cuối cùng, rốt cuộc|After many hours, we eventually found the hotel.
immediately|adv|ngay lập tức|Call a doctor immediately if the pain gets worse.
mainly|adv|chủ yếu|The group consists mainly of students.
nearly|adv|gần như|We have nearly finished the project.
rather|adv|khá, hơi (mức độ)|The exam was rather difficult.
generally|adv|nói chung, thường thì|People generally eat dinner at seven here.`,
B2: `accurate|adj|chính xác|The weather forecast was accurate, and it rained all day.
adequate|adj|đủ, thỏa đáng|The room was small but adequate for one night.
crucial|adj|then chốt|Good communication is crucial in any team.
essential|adj|thiết yếu|Clean water is essential for life.
efficient|adj|hiệu quả (về thời gian, nguồn lực)|This new machine is more efficient, so it saves time and electricity.
effective|adj|có hiệu quả (đạt kết quả)|Is this medicine effective against headaches?
relevant|adj|liên quan|Please include only relevant information in your report.
reluctant|adj|miễn cưỡng|Lan was reluctant to speak in front of the whole class.
significant|adj|đáng kể|The new bridge made a significant difference to travel times.
considerably|adv|đáng kể|Prices have risen considerably since last year.
gradually|adv|dần dần|The weather gradually became warmer in March.
relatively|adv|tương đối|The test was relatively easy compared with last year.
apparent|adj|rõ ràng; bề ngoài|It soon became apparent that something was wrong.
appropriate|adj|phù hợp, thích hợp|Casual clothes are not appropriate for the interview.
complex|adj|phức tạp|The human brain is an extremely complex organ.
constant|adj|liên tục, không đổi|The constant noise made it hard to sleep.
distinct|adj|rõ rệt; khác biệt|The two languages have distinct sounds.
fundamental|adj|cơ bản, nền tảng|Respect is fundamental to any good relationship.
inevitable|adj|không thể tránh khỏi|Some delay is inevitable on such a long journey.
initial|adj|ban đầu|My initial reaction was one of surprise.
potential|adj|tiềm năng, có thể xảy ra|The doctor explained the potential risks of the surgery.
severe|adj|nghiêm trọng, nặng|The storm caused severe damage to the town.
sufficient|adj|đủ, đầy đủ|Is there sufficient evidence to support this claim?
substantial|adj|đáng kể, lớn|She received a substantial amount of money.`,
C1: `ambiguous|adj|mơ hồ, nhiều nghĩa|The instructions were ambiguous and led to some confusion.
arbitrary|adj|tùy tiện, ngẫu nhiên|The decision seemed arbitrary and unfair to many staff.
coherent|adj|mạch lạc, chặt chẽ|He gave a clear and coherent account of the accident.
dominant|adj|chiếm ưu thế, thống trị|English remains the dominant language of international science.
explicit|adj|rõ ràng, tường minh|The rules are explicit about what staff may not do.
implicit|adj|ngầm hiểu, không nói ra|There was an implicit agreement between the two sides.
inherent|adj|vốn có, cố hữu|Every surgery has some inherent risk.
intrinsic|adj|nội tại, bản chất|Many students have an intrinsic desire to learn.
negligible|adj|không đáng kể|The difference in cost was negligible.
obsolete|adj|lỗi thời, không còn dùng|Many of these machines are now obsolete.
pervasive|adj|lan tràn, phổ biến khắp nơi|Social media has become pervasive in modern life.
plausible|adj|hợp lý, đáng tin|Her explanation sounded plausible, but we still had doubts.
prevalent|adj|phổ biến, thịnh hành|Heart disease is prevalent in many wealthy countries.
profound|adj|sâu sắc|The war had a profound effect on the whole country.
subtle|adj|tinh tế, khó nhận thấy|There is a subtle difference between these two words.
tangible|adj|hữu hình, rõ ràng|We need tangible proof that the treatment works.
viable|adj|khả thi|Is it a viable option for a small clinic?
arguably|adv|có thể cho rằng|She is arguably the best surgeon in the country.
predominantly|adv|chủ yếu, phần lớn|The staff are predominantly women under forty.
ultimately|adv|cuối cùng, xét cho cùng|Ultimately, the decision belongs to the patient.`
}},
{ id: "core-nouns", sec: "core", exam: ["CEFR", "VSTEP", "IELTS", "TOEIC"], icon: "📦", color: "#b5651d", title: "Core nouns", vi: "Danh từ lõi thông dụng", levels: {
A1: `thing|n|đồ vật, điều|What is that thing on the table?
people|n|người (số nhiều)|Many people walk in the park.
place|n|nơi chốn|This is a quiet place to read.
problem|n|vấn đề|I have a problem with my phone.
question|n|câu hỏi|Can I ask you a question?
answer|n|câu trả lời|Write your answer on this paper.
word|n|từ|I do not know this word.
number|n|con số|What is your phone number?
way|n|cách; đường|Which way is the station?
life|n|cuộc sống|Life in the city is busy.
day|n|ngày|Today is a good day.
time|n|thời gian; lần|I have no time today.
part|n|phần, bộ phận|This is the best part of the film.
end|n|phần cuối, kết thúc|The end of the story is sad.
side|n|bên, mặt|Write on this side of the paper.
story|n|câu chuyện|My father tells me a story every night.
game|n|trò chơi, trận đấu|We play a game after dinner.
world|n|thế giới|I want to see the world.`,
A2: `idea|n|ý tưởng|That is a great idea for the party.
information|n|thông tin (không đếm được)|Where can I find information about the bus times?
advice|n|lời khuyên (không đếm được)|My teacher gave me good advice about studying.
reason|n|lý do|What is the reason for being late?
result|n|kết quả|Anna was happy with her test result.
activity|n|hoạt động|Swimming is my favourite activity on holiday.
area|n|khu vực|This area has many shops and a park.
fact|n|sự thật|It is a fact that the Earth goes around the sun.
group|n|nhóm|A group of students waited outside the classroom.
difference|n|sự khác biệt|Can you see the difference between these two pictures?
example|n|ví dụ|Can you give me an example?
level|n|trình độ, mức độ|My English level is low.
chance|n|cơ hội; khả năng|This is your last chance to win.
plan|n|kế hoạch|What is your plan for the weekend?
step|n|bước|The first step is to open the box.
topic|n|chủ đề|Our topic today is food.
detail|n|chi tiết|Please tell me every detail.
type|n|loại, kiểu|What type of music do you like?
mistake|n|lỗi, sai sót|I made a small mistake in the test.
trouble|n|rắc rối, phiền toái|I am in trouble with my teacher.`,
B1: `advantage|n|lợi thế, ưu điểm|Living near the office is a big advantage when you hate traffic.
disadvantage|n|bất lợi, nhược điểm|One disadvantage of this flat is the lack of a lift.
effect|n|ảnh hưởng, tác động|The medicine had a strong effect on his headache.
situation|n|tình huống|Stay calm in a difficult situation and think before you act.
attitude|n|thái độ|Her positive attitude helps the whole team stay motivated.
behaviour|n|hành vi (US: behavior)|The teacher praised the children for their good behaviour.
knowledge|n|kiến thức|He has a lot of knowledge about old cars.
purpose|n|mục đích|What is the purpose of your visit to the clinic?
quality|n|chất lượng|I prefer to pay more for good quality shoes.
risk|n|rủi ro, nguy cơ|Smoking increases the risk of serious illness.
aim|n|mục tiêu, mục đích|The aim of this course is to improve your speaking.
amount|n|số lượng, lượng|A large amount of money was lost.
attempt|n|lần thử, sự cố gắng|It was my third attempt to pass the test.
choice|n|sự lựa chọn|You have a choice between tea and coffee.
effort|n|nỗ lực, sự cố gắng|She made a big effort to learn the language.
opportunity|n|cơ hội|Studying abroad is a great opportunity.
option|n|lựa chọn|Staying at home is not a good option.
possibility|n|khả năng|There is a possibility of rain tomorrow.
process|n|quá trình, quy trình|Learning a language is a slow process.
progress|n|sự tiến bộ, tiến triển|You are making good progress in English.
reaction|n|phản ứng|His reaction to the news was calm.
reality|n|thực tế, hiện thực|The reality is that we do not have enough time.
responsibility|n|trách nhiệm|Parents have a responsibility to protect their children.
role|n|vai trò|Teachers play an important role in society.
strength|n|sức mạnh; điểm mạnh|Honesty is her greatest strength.
challenge|n|thử thách|Learning to drive was a big challenge for him.
pressure|n|áp lực; sức ép|Many students feel pressure before exams.`,
B2: `aspect|n|khía cạnh|Which aspect of the job do you enjoy the most?
consequence|n|hậu quả|One consequence of missing the deadline was losing an important client.
feature|n|đặc điểm|The best feature of this phone is its long battery life.
outcome|n|kết cục, kết quả|We are still waiting for the outcome of the medical tests.
perspective|n|góc nhìn|Living abroad gave her a new perspective on her own country.
priority|n|ưu tiên|Safety must be our first priority on the building site.
range|n|phạm vi|The shop sells a wide range of cheap laptops.
trend|n|xu hướng|There is a growing trend towards working from home.
assumption|n|giả định, sự cho rằng|The plan is based on a wrong assumption.
circumstance|n|hoàn cảnh, tình huống|It is hard to plan for every possible circumstance.
context|n|ngữ cảnh, bối cảnh|You can guess the meaning from the context.
contrast|n|sự tương phản|There is a sharp contrast between rich and poor areas.
element|n|yếu tố, thành phần|Trust is an important element of teamwork.
insight|n|sự thấu hiểu, hiểu biết sâu sắc|The book gives a useful insight into patient care.
instance|n|trường hợp, ví dụ|In this instance, the doctor made the right decision.
limitation|n|hạn chế, giới hạn|Every study has at least one limitation.
obstacle|n|trở ngại, chướng ngại|Lack of money is the biggest obstacle to his plan.
principle|n|nguyên tắc|As a matter of principle, she never tells lies.
proportion|n|tỷ lệ, phần|A large proportion of the students come from rural areas.
resource|n|nguồn lực, tài nguyên|Water is a precious resource in dry regions.
strategy|n|chiến lược|We need a clear strategy to reduce costs.`,
C1: `criterion|n|tiêu chí|Experience is the main criterion for this job.
dimension|n|khía cạnh; kích thước|The illness has a psychological dimension as well.
discrepancy|n|sự chênh lệch, mâu thuẫn|There is a discrepancy between the two reports.
hierarchy|n|hệ thống thứ bậc|The hospital has a strict hierarchy of doctors and nurses.
magnitude|n|mức độ, tầm cỡ|Few people understood the magnitude of the problem.
momentum|n|đà, động lực|The campaign is gaining momentum across the country.
nuance|n|sắc thái, điểm khác biệt tinh tế|A good translator understands every nuance of meaning.
premise|n|tiền đề, giả thiết|The whole argument is based on a false premise.
prerequisite|n|điều kiện tiên quyết|A degree is a prerequisite for this position.
rationale|n|cơ sở lý luận, lý do căn bản|What is the rationale behind this new policy?
threshold|n|ngưỡng|Everyone has a different pain threshold.
trajectory|n|quỹ đạo, hướng phát triển|Her career trajectory took her from nurse to director.
notion|n|quan niệm, khái niệm|The notion that money brings happiness is not always true.
legacy|n|di sản, hệ quả để lại|The old system left a legacy of debt.
constraint|n|sự ràng buộc, hạn chế|Lack of time is a major constraint for the project.
paradox|n|nghịch lý|It is a paradox that more choice can make people unhappy.
precedent|n|tiền lệ|The court decision set a precedent for similar cases.
setback|n|trở ngại, bước thụt lùi|The patient suffered a minor setback during recovery.
pitfall|n|cạm bẫy, rủi ro tiềm ẩn|One common pitfall is trying to learn too much at once.
catalyst|n|chất xúc tác, tác nhân thúc đẩy|The crisis was a catalyst for change in the health system.`
}}
];

const LIB_EXAM = [
/* ---------- TOEIC ---------- */
{ id: "t-office", sec: "toeic", exam: ["TOEIC"], icon: "🗂️", color: "#2c6fbb", title: "Office & meetings", vi: "Văn phòng và cuộc họp", levels: {
A2: `manager|n|người quản lý|Please send the report to the manager before lunch.
printer|n|máy in|The printer is out of paper again.
file|n|hồ sơ, tệp|Please save the file on the shared computer.
desk|n|bàn làm việc|Minh puts his laptop on his desk every morning.
department|n|phòng ban|She works in the sales department.
report|n|báo cáo|I must finish the report today.
reception|n|quầy lễ tân|Please wait at reception until someone comes.`,
B1: `agenda|n|chương trình nghị sự|Let's look at the agenda.
minutes|n|biên bản cuộc họp|Who is taking the minutes?
memo|n|bản ghi nhớ nội bộ|The manager sent a memo to all staff about the new rules.
attachment|n|tệp đính kèm|Please see the attachment.
conference call|n|cuộc gọi hội nghị|We have a conference call with our partners in Japan at ten.
reschedule|v|dời lịch|Can we reschedule the meeting?
postpone|v|hoãn lại|The meeting was postponed.
supervisor|n|người giám sát|Lan asked her supervisor for a day off next week.
headquarters|n|trụ sở chính|The company's headquarters moved to a larger building downtown.
proposal|n|bản đề xuất|She sent a proposal to the new client.
get back to|phr|trả lời lại, liên hệ lại|I will get back to you by Friday.`,
B2: `branch|n|chi nhánh|She works at the company's branch in the next town.
subsidiary|n|công ty con|The firm opened a subsidiary overseas to serve local customers.
merger|n|sáp nhập|After the merger, the two companies shared one office.
facilitate|v|tạo điều kiện|A good leader should facilitate discussion rather than dominate it.
delegate|v|giao việc, ủy quyền|A busy manager must learn to delegate small tasks to the team.
on behalf of|phr|thay mặt cho|I'm writing on behalf of my manager.
in charge of|phr|phụ trách|Nam is in charge of training the new staff.
as of|phr|kể từ (ngày)|As of Monday, the office opens at 8.
stakeholder|n|bên liên quan|We must inform every stakeholder before the change.
streamline|v|tinh gọn quy trình|The company wants to streamline its ordering process.`
}},
{ id: "t-hr", sec: "toeic", exam: ["TOEIC"], icon: "🧑‍💼", color: "#7b52c9", title: "Hiring & human resources", vi: "Tuyển dụng và nhân sự", levels: {
A2: `apply|v|nộp đơn|You can apply for this position online before Friday.
staff|n|nhân viên (tập thể)|The staff are very friendly here.`,
B1: `applicant|n|người nộp đơn|Each applicant must send a letter and a photo.
candidate|n|ứng viên|The best candidate will start work next month.
résumé|n|sơ yếu lý lịch (UK: CV)|Please attach your résumé to the email.
position|n|vị trí công việc|They have an open position for a nurse at the clinic.
hire|v|thuê, tuyển|The restaurant wants to hire two new cooks this summer.
employee|n|nhân viên|Every employee gets a free lunch on Fridays.
employer|n|người sử dụng lao động|My employer pays for my English classes.
promotion|n|sự thăng chức|Lan was very happy to get a promotion after three years.
retire|v|nghỉ hưu|My grandfather plans to retire when he is sixty-five.
full-time|adj|toàn thời gian|She works in a full-time job at the bank.
part-time|adj|bán thời gian|Nam has a part-time job at a cafe while he studies.
vacancy|n|vị trí còn trống (tuyển dụng)|There is a vacancy in the accounts department.
reference|n|thư giới thiệu, người giới thiệu|The employer asked for a reference from my last job.
maternity leave|n|nghỉ thai sản|She returns from maternity leave next month.`,
B2: `orientation|n|buổi định hướng nhân viên mới|All new staff must attend orientation on their first morning.
payroll|n|bảng lương|The payroll department pays everyone on the last day of the month.
benefits package|n|gói phúc lợi|The company offers a good benefits package, including health insurance.
performance review|n|đánh giá hiệu suất|Her manager praised her work during the annual performance review.
qualified|adj|đủ trình độ|We need a qualified teacher to lead this course.
resign|v|từ chức|He decided to resign because he moved to another city.
recruit|v|tuyển dụng|The hospital plans to recruit ten new doctors this year.
probation|n|thời gian thử việc|New employees stay on probation for three months before getting a permanent contract.
redundancy|n|sa thải do cắt giảm nhân sự|The factory closure caused redundancy for many workers.
incentive|n|động lực, khoản khuyến khích|The firm offers a bonus as an incentive to sell more.
turnover|n|tỷ lệ nghỉ việc (nhân sự); doanh thu|High staff turnover is costly for the company.`
}},
{ id: "t-finance", sec: "toeic", exam: ["TOEIC", "IELTS"], icon: "💹", color: "#1f8f5f", title: "Finance & budgets", vi: "Tài chính và ngân sách", levels: {
A2: `cost|n, v|chi phí; có giá|The cost of the repair was very high.
profit|n|lợi nhuận|The shop made a small profit last month.
tax|n|thuế|You must pay tax on your income.
credit card|n|thẻ tín dụng|Can I pay by credit card?
total|n|tổng cộng|The total is fifty dollars.`,
B1: `expense|n|chi phí, khoản chi|Travel is the biggest expense for our team.
invoice|n|hóa đơn thanh toán|Please send the invoice to our accounting department by Monday.
payment|n|khoản thanh toán|The payment will arrive in your account within three days.
account|n|tài khoản|She opened a savings account at the local bank.
estimate|n, v|ước tính|Can you estimate how much the repairs will cost?
quarterly|adj|hằng quý|quarterly report
revenue|n|doanh thu|The company's revenue grew by ten percent this year.
income|n|thu nhập|Her monthly income is not very high.
deposit|n|tiền đặt cọc, tiền gửi|You must pay a deposit when you book the room.
withdraw|v|rút tiền|I need to withdraw some cash from the ATM.
interest rate|n|lãi suất|The bank has raised the interest rate again.`,
B2: `reimburse|v|hoàn trả chi phí|The company will reimburse your travel costs.
audit|n|kiểm toán|An outside company will carry out an audit of our accounts.
investment|n|khoản đầu tư|Buying new machines was a smart investment for the factory.
shareholder|n|cổ đông|Every shareholder received an invitation to the annual meeting.
forecast|n, v|dự báo|The sales forecast for next quarter looks very positive.
deficit|n|thâm hụt|The city has a budget deficit because it spent more than it earned.
fiscal year|n|năm tài chính|Our fiscal year ends in March, not in December.
asset|n|tài sản|The building is the company's biggest asset.
liability|n|khoản nợ phải trả|Every liability must be listed in the annual report.
cash flow|n|dòng tiền|Poor cash flow forced the shop to close.`
}},
{ id: "t-marketing", sec: "toeic", exam: ["TOEIC"], icon: "📣", color: "#d64f7a", title: "Sales & marketing", vi: "Bán hàng và tiếp thị", levels: {
A2: `product|n|sản phẩm|This new product is cheap and easy to use.
advertise|v|quảng cáo|The shop will advertise its sale on the radio.
poster|n|áp phích|They put a poster on the wall.`,
B1: `client|n|khách hàng (dịch vụ)|Our lawyer is meeting a new client this afternoon.
launch|v, n|ra mắt|The new product will launch in May.
survey|n|khảo sát|The company sent a survey to ask customers about the new menu.
competitor|n|đối thủ cạnh tranh|Our main competitor just lowered its prices.
brochure|n|tờ quảng cáo|The travel agent gave us a colourful brochure about the island.
customer service|n|dịch vụ khách hàng|I called customer service because my order never arrived.
slogan|n|khẩu hiệu quảng cáo|The company has a catchy slogan.
promote|v|quảng bá, thúc đẩy|They use social media to promote their new phone.
retail|n|bán lẻ|She has ten years of experience in retail.
free of charge|phr|miễn phí|Delivery is free of charge for orders over fifty euros.`,
B2: `market share|n|thị phần|The company wants to increase its market share in Asia.
target audience|n|khách hàng mục tiêu|Young parents are the target audience for this advert.
campaign|n|chiến dịch|The new campaign helped the company reach younger buyers.
feedback|n|phản hồi|We read every piece of customer feedback to improve our service.
promotion|n|khuyến mại|The shop is running a promotion: buy one, get one free.
competitive|adj|cạnh tranh|The mobile phone market is very competitive these days.
exceed|v|vượt quá|Sales exceeded expectations.
endorsement|n|sự chứng thực, quảng cáo bởi người nổi tiếng|The athlete's endorsement boosted sales of the shoes.`
}},
{ id: "t-logistics", sec: "toeic", exam: ["TOEIC"], icon: "🚚", color: "#8a5a2b", title: "Orders, shipping & purchasing", vi: "Đặt hàng, vận chuyển và mua hàng", levels: {
A2: `order|n, v|đơn hàng; đặt hàng|Lan wants to order two books online.
deliver|v|giao hàng|The shop will deliver the sofa to your home on Monday.
box|n|thùng, hộp|Please put the glasses carefully into the box.
parcel|n|bưu kiện|A parcel arrived for you this morning.
address|n|địa chỉ|Please write your address on the form.
package|n|gói hàng|The package is too heavy to carry.`,
B1: `delivery|n|sự giao hàng|The delivery arrived two days late.
shipment|n|lô hàng|The shipment of laptops left the port this morning.
warehouse|n|kho hàng|The company stores its goods in a large warehouse near the airport.
supplier|n|nhà cung cấp|Our supplier sends fresh vegetables to the restaurant every day.
out of stock|phr|hết hàng|Sorry, the black shoes are out of stock right now.
warranty|n|bảo hành|The washing machine has a two-year warranty, so the repair is free.
fragile|adj|dễ vỡ|Be careful with this parcel because it is fragile.
contract|n|hợp đồng|Both companies signed the contract on Tuesday.
courier|n|người/dịch vụ chuyển phát nhanh|We sent the documents by courier.
packaging|n|bao bì, đóng gói|The packaging protects the goods during transport.
in bulk|phr|với số lượng lớn|The shop buys rice in bulk to save money.
damaged|adj|bị hư hỏng|The goods arrived damaged, so we asked for a refund.`,
B2: `inventory|n|hàng tồn kho|Staff count the inventory in the shop at the end of every year.
quote|n|báo giá|Could you send me a quote for fifty office chairs?
procurement|n|mua sắm (doanh nghiệp)|The procurement team compares prices from several suppliers before buying.
backorder|n|đơn hàng chờ bổ sung|The blue model is on backorder and will arrive in three weeks.
dispatch|v|gửi đi|We will dispatch your parcel as soon as the payment arrives.
expedite|v|xúc tiến, làm nhanh|Can you expedite my order? I need it by Friday.
freight|n|hàng hóa vận chuyển|Air freight is faster but more expensive than shipping by sea.
backlog|n|lượng công việc tồn đọng|A backlog of orders delayed the deliveries.`
}},
{ id: "t-travel", sec: "toeic", exam: ["TOEIC"], icon: "🧳", color: "#1b8fb3", title: "Business travel & events", vi: "Công tác và sự kiện", levels: {
A2: `flight|n|chuyến bay|My flight to London leaves at six o'clock.
book|v|đặt (vé, phòng)|Please book a double room for two nights.
trip|n|chuyến đi|Minh is on a business trip to Hanoi this week.
pack|v|đóng gói hành lý|I need to pack my bags tonight.
tour|n|chuyến tham quan|We joined a tour of the old city.
arrive|v|đến nơi|The train will arrive at six o'clock.`,
B1: `reservation|n|sự đặt chỗ|I made a reservation for a table for four at eight.
boarding pass|n|thẻ lên máy bay|Show your boarding pass and passport at the gate.
conference|n|hội nghị|Anna is giving a talk at an international conference in May.
venue|n|địa điểm tổ chức|The venue for the wedding is a beautiful garden near the lake.
attendee|n|người tham dự|Each attendee received a name badge and a free notebook.
registration|n|đăng ký|Registration for the conference opens at eight, so please arrive early.
catering|n|dịch vụ ăn uống|The catering at the event was excellent, especially the vegetarian dishes.
customs|n|hải quan|We had to go through customs at the airport.
visa|n|thị thực|You need a visa to enter that country.`,
B2: `keynote speaker|n|diễn giả chính|The keynote speaker opened the conference with a talk about the future of work.
workshop|n|hội thảo thực hành|Anna signed up for a workshop where participants practise presenting in small groups.
reimbursement|n|sự hoàn trả chi phí|Please send your receipts to Finance to get reimbursement for the taxi fares.
round trip|n|khứ hồi|A round trip to Hanoi from here costs less if you book early.`
}},
/* ---------- IELTS & VSTEP ---------- */
{ id: "i-education", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🏫", color: "#3a5fc8", title: "Education", vi: "Giáo dục", levels: {
A2: `university|n|đại học|Minh wants to study medicine at university.`,
B1: `course|n|khóa học|Lan is taking an English course on Saturday mornings.
degree|n|bằng cấp|After four years, Nam finally received his degree in engineering.
online learning|n|học trực tuyến|Online learning lets you study from home at any time.
tuition fee|n|học phí|The tuition fee for this semester is due at the end of the month.
scholarship|n|học bổng|She won a scholarship to study in Germany.
assignment|n|bài tập lớn, nhiệm vụ|The teacher gave us a long assignment.`,
B2: `curriculum|n|chương trình giảng dạy|The school is updating its curriculum to include more practical subjects.
academic performance|n|kết quả học tập|Getting enough sleep can improve your academic performance during exam season.
critical thinking|n|tư duy phản biện|Good teachers encourage critical thinking instead of asking students to memorise facts.
lifelong learning|n|học tập suốt đời|Lifelong learning helps people adapt to new jobs as technology changes.
vocational training|n|đào tạo nghề|After school, Nam chose vocational training to become an electrician.
compulsory|adj|bắt buộc|Education is compulsory for all children until the age of sixteen.
tertiary education|n|giáo dục đại học|Tertiary education has become more affordable for families in recent years.
plagiarism|n|đạo văn|Plagiarism can get a student expelled.
literacy|n|khả năng đọc viết|The programme aims to improve adult literacy.`
}},
{ id: "i-environment", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🌍", color: "#2f9a55", title: "Environment & energy", vi: "Môi trường và năng lượng", levels: {
A2: `plastic|n|nhựa|Plastic bags are bad for the sea.`,
B1: `waste|n, v|rác thải; lãng phí|Households throw away too much food waste every week.
energy|n|năng lượng|Turning off lights saves energy and lowers your electricity bill.
rubbish|n|rác (US: trash)|Please put your rubbish in the bin, not on the street.`,
B2: `emission|n|khí thải|The emission from old factories harms the air we breathe.
renewable energy|n|năng lượng tái tạo|The island gets most of its power from renewable energy such as wind and sun.
fossil fuel|n|nhiên liệu hóa thạch|Burning fossil fuel, such as coal and oil, harms the atmosphere.
conservation|n|sự bảo tồn|Conservation of wild animals depends on protecting their natural homes.
carbon footprint|n|dấu chân carbon|Flying less is one way to reduce your carbon footprint.
global warming|n|nóng lên toàn cầu|Scientists warn that global warming is causing sea levels to rise.
single-use plastic|n|nhựa dùng một lần|Many shops now charge extra for single-use plastic bags.
biodegradable|adj|có thể phân hủy sinh học|Biodegradable bags break down naturally.`
}},
{ id: "i-technology", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🤖", color: "#4d5bd6", title: "Technology & the internet", vi: "Công nghệ và Internet", levels: {

B1: `digital|adj|kỹ thuật số|Lan prefers reading digital books on her phone to carrying paper ones.
smartphone|n|điện thoại thông minh|Most students own a smartphone today.`,
B2: `innovation|n|sự đổi mới|Constant innovation keeps the company ahead of its competitors.
automation|n|tự động hóa|Automation in factories means machines now do many repetitive tasks.
rely on|phr|phụ thuộc vào|Many people rely on their phones to find directions in new cities.
screen time|n|thời gian dùng màn hình|Doctors advise parents to limit their children's screen time before bed.
cyberbullying|n|bắt nạt trên mạng|The school has a clear policy against cyberbullying in class group chats.
breakthrough|n|bước đột phá|Researchers announced a breakthrough in battery technology this week.`
}},
{ id: "i-health", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🥗", color: "#d9486b", title: "Health & lifestyle", vi: "Sức khỏe và lối sống", levels: {
A2: `fit|adj|khỏe mạnh, cân đối|He runs every day to stay fit.`,
B1: `habit|n|thói quen|Drinking a glass of water every morning is a good habit.
junk food|n|đồ ăn vặt kém lành mạnh|Eating too much junk food can make you gain weight.
balanced diet|n|chế độ ăn cân bằng|A balanced diet includes fruit, vegetables and protein.
lifestyle|n|lối sống|A healthy lifestyle can prevent many diseases.`,
B2: `obesity|n|béo phì|Doctors say that obesity increases the risk of heart disease.
sedentary|adj|ít vận động|a sedentary lifestyle
well-being|n|sự khỏe mạnh, hạnh phúc|Spending time outdoors is good for your well-being.
prevention|n|phòng ngừa|Prevention is better than cure, so wash your hands often.
life expectancy|n|tuổi thọ trung bình|Better healthcare has raised the average life expectancy in many countries.
mental health|n|sức khỏe tâm thần|Talking to friends can improve your mental health when life is difficult.
healthcare system|n|hệ thống y tế|The healthcare system in this country gives everyone access to a doctor.
awareness|n|nhận thức|The campaign aims to increase public awareness of the dangers of smoking.
addiction|n|chứng nghiện|Phone addiction is increasing among teenagers.`
}},
{ id: "i-urban", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🏙️", color: "#6b7a8f", title: "Cities, housing & transport", vi: "Đô thị, nhà ở và giao thông", levels: {

B1: `traffic|n|giao thông|The traffic was so bad that I arrived late to work.
public transport|n|giao thông công cộng|Public transport in this city is cheap, clean and reliable.
population|n|dân số|The population of the city has doubled in twenty years.
countryside|n|nông thôn|My grandparents live in the countryside, surrounded by fields and hills.
crowded|adj|đông đúc|The bus was so crowded that nobody could find a seat.
skyscraper|n|nhà chọc trời|This skyscraper is the tallest building in the city.`,
B2: `urban|adj|thuộc đô thị|Urban areas usually have more jobs, hospitals and universities than villages.
rural|adj|thuộc nông thôn|Many young people leave rural villages to look for work in cities.
urbanisation|n|đô thị hóa (US: urbanization)|Rapid urbanisation has put pressure on schools and hospitals in the city.
affordable housing|n|nhà ở giá phải chăng|The council plans to build affordable housing for young families.
infrastructure|n|cơ sở hạ tầng|Good roads and bridges are an important part of a country's infrastructure.
commuter|n|người đi làm xa hằng ngày|Every morning, thousands of commuter passengers take the train into the city.
high-rise|adj|cao tầng|They live in a high-rise apartment with a view of the river.
slum|n|khu ổ chuột|Many families still live in a slum near the river.`,
C1: `gentrification|n|quá trình tân trang khu dân cư (đẩy giá lên)|Gentrification has made the old district too expensive for locals.`
}},
{ id: "i-crime", sec: "ielts", exam: ["IELTS"], icon: "⚖️", color: "#7a4e3a", title: "Crime & law", vi: "Tội phạm và pháp luật", levels: {
A2: `thief|n|kẻ trộm|The thief ran away with my bag.`,
B1: `police|n|cảnh sát|Call the police if you see someone breaking into a car.
prison|n|nhà tù|The man spent two years in prison for his crime.
punish|v|trừng phạt|Parents should explain rules clearly before they punish a child.
steal|v|ăn trộm|Someone tried to steal her bag on the crowded train.
victim|n|nạn nhân|The victim told the police what had happened.
fine|n|tiền phạt|He had to pay a fine for speeding.
witness|n|nhân chứng|A witness saw the man leave the shop.
arrest|v|bắt giữ|Police officers can arrest anyone who breaks the law.`,
B2: `offender|n|người phạm tội|A first-time offender may receive a lighter penalty than someone who repeats the crime.
punishment|n|hình phạt|Many people think the punishment should match the seriousness of the crime.
rehabilitation|n|sự cải tạo, phục hồi|Rehabilitation programmes help former prisoners learn new skills and find jobs.
deter|v|răn đe|Cameras in the street can deter people from committing crimes.
juvenile crime|n|tội phạm vị thành niên|Experts believe juvenile crime falls when young people have after-school activities.
sentence|n, v|bản án; tuyên án|The judge gave him a two-year sentence for the robbery.
community service|n|lao động công ích|Instead of going to prison, she had to do community service cleaning parks.
law enforcement|n|thực thi pháp luật|Law enforcement agencies are working together to catch the gang.
deterrent|n|biện pháp răn đe|Heavy fines can be an effective deterrent.
fraud|n|gian lận, lừa đảo|He was jailed for credit card fraud.`
}},
{ id: "i-economy", sec: "ielts", exam: ["IELTS", "TOEIC"], icon: "🌐", color: "#1b7f8c", title: "Globalisation & economy", vi: "Toàn cầu hóa và kinh tế", levels: {

B1: `economy|n|nền kinh tế|The economy grows when more people have jobs and spend money.
trade|n, v|thương mại; buôn bán|Trade between the two countries has increased in recent years.
company|n|công ty|My uncle works for a company that makes furniture.
international|adj|quốc tế|Lan wants a job at an international company so she can use English every day.
unemployment|n|thất nghiệp|Unemployment is high in towns where the main factory has closed.
export|v|xuất khẩu|Vietnam will export more rice this year.
industry|n|ngành công nghiệp|Tourism is an important industry in this region.`,
B2: `globalisation|n|toàn cầu hóa (US: globalization)|Globalisation means that products made in one country are sold all over the world.
workforce|n|lực lượng lao động|The factory has a young and skilled workforce of about two hundred people.
invest|v|đầu tư|Nam decided to invest his savings in a small business.
demand|n|nhu cầu|Demand for electric cars is rising as petrol becomes more expensive.
supply|n|nguồn cung|A shortage of supply has pushed up the price of rice.
multinational|adj|đa quốc gia|She works for a multinational firm with offices in twelve countries.
recession|n|suy thoái kinh tế|Many people lost their jobs during the recession.
outsource|v|thuê ngoài|Many firms outsource customer service to other countries.
cost of living|n|chi phí sinh hoạt|The cost of living in big cities is rising fast.`
}},
{ id: "i-media", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "📰", color: "#c2552e", title: "Media & advertising", vi: "Truyền thông và quảng cáo", levels: {
B1: `advertisement|n|quảng cáo|I saw an advertisement for a new phone on the bus.
newspaper|n|báo|My father reads the newspaper with his coffee every morning.
channel|n|kênh|Which channel shows the football match tonight?
article|n|bài báo|Did you read the article about healthy eating in today's paper?
headline|n|tiêu đề báo|The headline on the front page shocked everyone.
journalist|n|nhà báo|The journalist interviewed the mayor.`,
B2: `mass media|n|truyền thông đại chúng|The mass media, including television and radio, shapes how people see the news.
influence|n, v|ảnh hưởng|Social media can influence what young people buy and wear.
biased|adj|thiên vị|Some readers think the report is biased because it only shows one side.
censorship|n|kiểm duyệt|Many writers oppose censorship because they want to publish freely.
celebrity|n|người nổi tiếng|The shop hired a famous celebrity to promote its new perfume.
fake news|n|tin giả|Check the source before sharing a story, because fake news spreads quickly.
propaganda|n|tuyên truyền|The state used propaganda to control public opinion.
clickbait|n|tiêu đề giật gân câu view|Clickbait headlines often exaggerate the story.`
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
A2: `do homework|phr|làm bài tập về nhà|Minh must do homework before he plays games.
catch a cold|phr|bị cảm lạnh|Wear a warm coat, or you will catch a cold.
have a temperature|phr|bị sốt|Children often have a temperature when they catch a cold.
take a photo|phr|chụp ảnh|Can you take a photo of us?
go on holiday|phr|đi nghỉ|We usually go on holiday in August.`,
B1: `pay attention to|phr|chú ý tới|Please pay attention to the safety instructions before the flight starts.
meet a deadline|phr|kịp hạn chót|We worked all weekend to meet a deadline for the project.
attend a meeting|phr|tham dự cuộc họp|Can you attend a meeting with the new client tomorrow morning?
heavy traffic|phr|giao thông đông đúc|We were late because of heavy traffic on the main road.
take medication|phr|dùng thuốc|You should take medication twice a day after meals.
suffer from|phr|mắc, chịu đựng (bệnh)|He suffers from asthma.
depend on|phr|phụ thuộc vào|The result will depend on the weather.
be responsible for|phr|chịu trách nhiệm về|Anna will be responsible for training the new staff this month.
take advantage of|phr|tận dụng|You should take advantage of the free English classes.
take place|phr|diễn ra|The conference will take place in Hanoi.
give a presentation|phr|thuyết trình|She has to give a presentation on Monday.
look forward to|phr|mong đợi|I look forward to meeting you next week.
make sense|phr|có lý, dễ hiểu|Your explanation does not make sense to me.`,
B2: `have an effect on|phr|có tác động tới|Lack of sleep can have an effect on your memory and mood.
play a role in|phr|đóng vai trò trong|Parents play a role in shaping their children's attitudes towards learning.
raise awareness of|phr|nâng cao nhận thức về|The charity runs events to raise awareness of mental health problems.
lead to|phr|dẫn đến|Eating too much sugar can lead to serious health problems.
result in|phr|gây ra, dẫn tới|Careless driving can easily result in accidents.
due to|phr|do, vì|The flight was cancelled due to bad weather.
in terms of|phr|xét về mặt|In terms of price, this laptop is better than the other one.
reduce emissions|phr|giảm khí thải|Cities are planting trees and promoting bicycles to reduce emissions.
commit a crime|phr|phạm tội|People who commit a crime must face the consequences.
play a part in|phr|đóng vai trò trong|Education can play a part in reducing poverty.
take into account|phr|xem xét, tính đến|Employers should take into account each worker's needs.
pose a threat to|phr|gây đe dọa cho|Plastic waste can pose a threat to marine life.
give rise to|phr|làm nảy sinh|Poor housing can give rise to health problems.
on a regular basis|phr|một cách thường xuyên|Doctors advise exercising on a regular basis.
at the expense of|phr|phải trả giá bằng, gây thiệt hại cho|Economic growth should not come at the expense of nature.
gain access to|phr|có được quyền tiếp cận|Poor families struggle to gain access to quality healthcare.`
}}
];
/* Nền tảng lên đầu để lượt học từ mới mỗi ngày ưu tiên từ lõi A1–B2; chủ đề luyện thi xếp sau. */
LIB_GEN.unshift(...LIB_EXAM_CORE);
LIB_GEN.push(...LIB_EXAM);
