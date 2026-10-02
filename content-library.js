/* ============================================================
   THƯ VIỆN TỪ VỰNG: phổ thông (gen), luyện thi (exam), y khoa (med). Mỗi dòng: từ|từ loại|nghĩa|ví dụ.
   Gộp từ: content-library-gen.js, content-library-exam.js, content-library-med.js.
   Mỗi phần bắt đầu bằng dòng "===== file: ... =====".
   ============================================================ */

/* ===== file: content-library-gen.js ===== */
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
man|n|người đàn ông (số nhiều: men)|The man with the dog is my neighbour.
woman|n|người phụ nữ (số nhiều: women)|That woman is a doctor at the hospital.
name|n|tên|What is your name?
age|n|tuổi|Her age is twenty-five.
old|adj|già; cũ|How old are you?
young|adj|trẻ|My teacher is young and kind.
tall|adj|cao|My brother is very tall.
short|adj|thấp; ngắn|Nam is short, but his brother is tall.
boy|n|cậu bé, con trai|The boy is playing football.
girl|n|cô bé, con gái|The girl has a red bag.
grandmother|n|bà (nội, ngoại)|My grandmother lives in a small village.
grandfather|n|ông (nội, ngoại)|My grandfather reads the newspaper every morning.
family|n|gia đình|I have a big family.
person|n|người|He is a very kind person.`,
A2: `parents|n|bố mẹ|I live with my parents.
grandparents|n|ông bà|My grandparents live in a small village near the sea.
cousin|n|anh chị em họ|Lan and her cousin are the same age.
uncle|n|chú, bác, cậu|My uncle is my father's brother.
aunt|n|cô, dì, bác gái|My aunt is my mother's sister.
neighbour|n|hàng xóm|Our neighbour is very kind.
married|adj|đã kết hôn|They got married last year.
single|adj|độc thân|He is single and lives alone in a small flat.
born|v|được sinh ra|I was born in 2003.
grow up|phr|lớn lên|She grew up in the countryside.
look like|phr|trông giống|You look like your mother.
beard|n|râu|My grandfather has a long white beard.
curly|adj|xoăn|She has curly hair.
slim|adj|mảnh mai|She is tall and slim, and she runs every day.
friendly|adj|thân thiện|Our new neighbour is very friendly and always says hello.
boyfriend|n|bạn trai|Her boyfriend works in a bank.
girlfriend|n|bạn gái|His girlfriend is a nurse.
twin|n|một trong cặp sinh đôi|My twin looks exactly like me.
handsome|adj|đẹp trai|Your brother is very handsome.
bald|adj|hói|My uncle is bald.
blonde|adj|tóc vàng hoe|She has long blonde hair.
divorced|adj|đã ly hôn|My aunt is divorced and lives alone.`,
B1: `relative|n|họ hàng|My favourite relative is my uncle, who lives in another city.
relationship|n|mối quan hệ|They have a close relationship.
generation|n|thế hệ|Each generation in my family learns something new from the last one.
get on with|phr|hòa hợp với|I get on well with my sister.
bring up|phr|nuôi nấng|She was brought up by her grandmother.
take after|phr|giống (người lớn trong nhà)|He takes after his father.
elderly|adj|cao tuổi|We care for elderly patients.
teenager|n|thanh thiếu niên|My brother is a teenager, so he sleeps until noon.
adult|n|người trưởng thành|Children must come with an adult to the swimming pool.
colleague|n|đồng nghiệp|Minh is a colleague, so we often have lunch together.
acquaintance|n|người quen (không thân)|He is just an acquaintance, not a close friend.
stranger|n|người lạ|Never go with a stranger.
role model|n|hình mẫu, tấm gương|My teacher is a great role model for me.
only child|n|con một|I am an only child, so I had no brothers or sisters.
single parent|n|cha/mẹ đơn thân|She is a single parent with two children.
adopt|v|nhận nuôi|They decided to adopt a baby girl.
mother-in-law|n|mẹ chồng, mẹ vợ|My mother-in-law cooks very well.
middle-aged|adj|trung niên|A middle-aged man was waiting at the door.
outgoing|adj|hướng ngoại, cởi mở|Anna is outgoing and makes friends easily.
mature|adj|trưởng thành, chín chắn|He is very mature for his age.
fall out with|phr|cãi nhau, bất hòa với|Don't fall out with your friends over small things.
look up to|phr|ngưỡng mộ, kính trọng|Children often look up to their older brothers.
get together|phr|tụ họp, gặp gỡ|Our family likes to get together at the weekend.
grow apart|phr|dần xa cách nhau|Old friends can grow apart when they live in different cities.`,
B2: `upbringing|n|sự nuôi dạy|Her strict upbringing taught her to be honest and polite.
sibling|n|anh chị em ruột|As the youngest sibling, Anna always got her brother's old clothes.
spouse|n|vợ hoặc chồng (trang trọng)|Please write the name of your spouse on the form.
extended family|n|đại gia đình|Our extended family gathers every summer, with cousins, aunts and uncles.
nuclear family|n|gia đình hạt nhân|A nuclear family is just parents and their children living together.
next of kin|n|người thân gần nhất (liên hệ khẩn cấp)|Who is your next of kin?
ancestor|n|tổ tiên|Her ancestor came from Italy.
descendant|n|con cháu, hậu duệ|He is a descendant of a famous doctor.
guardian|n|người giám hộ|The child's legal guardian signed the form for the operation.
estranged|adj|xa cách, không còn liên lạc (với người thân)|He is estranged from his father after a long argument.
peer|n|bạn đồng trang lứa|A teenager can be strongly influenced by a close peer.
orphan|n|trẻ mồ côi|The orphan was raised by his aunt.`
}},
{ id: "daily", icon: "🏠", color: "#c9962c", title: "Daily life & home", vi: "Sinh hoạt và nhà cửa", levels: {
A1: `house|n|ngôi nhà|They have a big house with a garden.
flat|n|căn hộ (US: apartment)|Our flat is on the third floor.
room|n|phòng|This room has two windows.
kitchen|n|nhà bếp|Mum cooks dinner in the kitchen.
bedroom|n|phòng ngủ|My bedroom is small but quiet.
bathroom|n|phòng tắm|The bathroom is next to the kitchen.
bed|n|giường|I go to bed at ten o'clock.
table|n|cái bàn|Put the plates on the table, please.
chair|n|cái ghế|Sit on this chair, Grandma.
door|n|cửa|Please close the door.
window|n|cửa sổ|Please open the window. It is hot.
wake up|phr|thức dậy|I wake up at six.
sleep|v|ngủ|Babies sleep a lot.
wash|v|rửa, giặt|Wash your hands, please.
cook|v|nấu ăn|My father likes to cook on Sundays.
clean|v|lau dọn|We clean our house every Saturday.
watch TV|phr|xem ti vi|After dinner, we watch TV together.
home|n|nhà, tổ ấm|I am at home today.
wall|n|bức tường|There is a picture on the wall.
floor|n|sàn nhà, tầng|The book is on the floor.
lamp|n|đèn|Please turn on the lamp.
toilet|n|nhà vệ sinh, bồn cầu|The toilet is next to the bathroom.
bag|n|túi, cặp|Her bag is on the chair.
clock|n|đồng hồ treo tường|The clock is on the wall.`,
A2: `sofa|n|ghế sofa|The cat is asleep on the sofa.
fridge|n|tủ lạnh|Put the milk in the fridge, please.
cupboard|n|tủ chén, tủ đồ|The cups are in the cupboard above the sink.
stairs|n|cầu thang|Walk up the stairs to find my room.
garden|n|vườn|Grandpa grows tomatoes in the garden.
housework|n|việc nhà|Lan and her brother share the housework every weekend.
tidy|adj|gọn gàng|Keep your room tidy.
brush|v|chải (răng, tóc)|Brush your teeth twice a day.
shower|n|vòi sen; tắm vòi sen|I take a shower every morning before school.
laundry|n|quần áo cần giặt; việc giặt giũ|Minh does the laundry on Saturday morning.
iron|v|là, ủi (quần áo)|Can you iron my white shirt for tomorrow?
rent|n, v|tiền thuê; thuê|The rent for this flat is five hundred euros a month.
key|n|chìa khóa|I can't open the door because I lost my key.
towel|n|khăn tắm|Take a clean towel from the shelf.
soap|n|xà phòng|Wash your hands with soap.
toothbrush|n|bàn chải đánh răng|I forgot my toothbrush at the hotel.
pillow|n|cái gối|This pillow is very soft.
blanket|n|cái chăn|Take a blanket because it is cold at night.
curtain|n|rèm cửa|Please close the curtain.
carpet|n|thảm trải sàn|There is a red carpet in the living room.
shelf|n|cái kệ|The books are on the top shelf.
balcony|n|ban công|We have breakfast on the balcony.
ceiling|n|trần nhà|The ceiling in my bedroom is very high.
lift|n|thang máy (US: elevator)|The lift is broken, so we use the stairs.
wash up|phr|rửa bát đĩa|I cook and my brother has to wash up.
make the bed|phr|dọn giường|I always make the bed before I leave.`,
B1: `routine|n|thói quen hằng ngày|My morning routine is simple: shower, breakfast, then the bus.
chore|n|việc vặt trong nhà|Washing the dishes is my least favourite chore.
landlord|n|chủ nhà (cho thuê)|Our landlord fixed the broken heater yesterday.
furniture|n|đồ nội thất (không đếm được)|We bought some new furniture for the living room.
comfortable|adj|thoải mái|This armchair is so comfortable that I fall asleep in it.
spare time|n|thời gian rảnh|In my spare time, I read novels and go cycling.
sort out|phr|sắp xếp, giải quyết|Let's sort out these old papers and throw away the useless ones.
run out of|phr|hết (cái gì)|We've run out of milk.
household|n|hộ gia đình|Every household in this street gets a free recycling bin.
appliance|n|thiết bị gia dụng|A fridge is an important kitchen appliance.
dishwasher|n|máy rửa bát|We bought a new dishwasher last month.
vacuum cleaner|n|máy hút bụi|The vacuum cleaner is in the cupboard.
washing machine|n|máy giặt|The washing machine is very noisy.
neighbourhood|n|khu phố, vùng lân cận|It is a quiet and friendly neighbourhood.
doorbell|n|chuông cửa|The doorbell rang while I was cooking.
basement|n|tầng hầm|We keep old furniture in the basement.
attic|n|gác mái|There are some old boxes in the attic.
leak|n, v|chỗ rò rỉ; rò rỉ|There is a leak in the bathroom ceiling.
repair|v|sửa chữa|He can repair almost anything in the house.
decorate|v|trang trí, sơn sửa (nhà)|We want to decorate the living room before Christmas.
move house|phr|chuyển nhà|We are going to move house next month.
settle in|phr|ổn định chỗ ở mới|It took a few weeks to settle in after the move.
heating|n|hệ thống sưởi|The heating is not working, so the flat is cold.
air conditioning|n|điều hòa không khí|The air conditioning keeps the room cool in summer.`,
B2: `commute|v, n|đi lại (nhà ↔ nơi làm)|I commute for an hour every day.
maintenance|n|sự bảo trì|Regular maintenance keeps the heating system working properly.
cluttered|adj|bừa bộn|His desk is so cluttered that he can never find his keys.
tenant|n|người thuê nhà|The tenant on the second floor pays her rent on the first of the month.
renovate|v|cải tạo, tu sửa (nhà cửa)|They plan to renovate the old kitchen this year.
mortgage|n|khoản vay thế chấp mua nhà|They pay a high mortgage every month.
utilities|n|các dịch vụ tiện ích (điện, nước, gas)|The rent includes all utilities.
domestic|adj|thuộc về gia đình, trong nhà|She does most of the domestic work in the family.
spacious|adj|rộng rãi|The flat is bright and spacious.
cramped|adj|chật chội|Five people lived in one cramped room.
tenancy|n|thời hạn thuê nhà|Her tenancy ends in June.`
}},
{ id: "food", icon: "🍜", color: "#e25d4a", title: "Food & drink", vi: "Ăn uống", levels: {
A1: `rice|n|cơm, gạo|We eat rice with fish every day.
bread|n|bánh mì|I buy fresh bread at the shop.
egg|n|trứng|He has one egg for breakfast.
meat|n|thịt|My sister does not eat meat.
fish|n|cá|Fish live in water.
chicken|n|thịt gà; con gà|We have chicken and rice for lunch.
fruit|n|trái cây|Apples and oranges are my favourite fruit.
vegetable|n|rau củ|Carrots are a vegetable.
water|n|nước|Can I have a glass of water?
milk|n|sữa|The baby drinks milk every morning.
coffee|n|cà phê|Dad drinks coffee before work.
tea|n|trà|Would you like green tea?
breakfast|n|bữa sáng|We have breakfast at seven.
lunch|n|bữa trưa|Lunch at school is at noon.
dinner|n|bữa tối|Dinner is ready, everyone!
hungry|adj|đói|I'm hungry.
thirsty|adj|khát|I am thirsty. Can I have some water?
apple|n|quả táo|I eat an apple every day.
banana|n|quả chuối|The monkey likes the banana.
potato|n|khoai tây|I like potato soup.
tomato|n|cà chua|Put a tomato in the salad.
cheese|n|phô mai|I like cheese on my bread.
juice|n|nước ép|She drinks orange juice for breakfast.
soup|n|món súp|The soup is very hot.
cake|n|bánh ngọt|We have a cake for her birthday.`,
A2: `delicious|adj|ngon|This soup is delicious. Can I have some more?
salty|adj|mặn|The soup is too salty for me.
sweet|adj|ngọt|I don't like sweet tea. It has too much sugar.
sour|adj|chua|This lemon is very sour.
bitter|adj|đắng|Black coffee tastes bitter without sugar.
recipe|n|công thức nấu ăn|Grandma gave me her recipe for chicken soup.
fry|v|chiên, rán|First, fry the onions in a little oil.
boil|v|luộc, đun sôi|Boil the eggs for ten minutes.
bake|v|nướng (lò)|We bake a cake every Sunday afternoon.
snack|n|đồ ăn vặt|I eat a small snack after school.
dessert|n|món tráng miệng|For dessert, we have ice cream.
order|v|gọi món|Are you ready to order, sir?
menu|n|thực đơn|Could we see the menu, please?
bill|n|hóa đơn (US: check)|Excuse me, can we have the bill, please?
butter|n|bơ|Do you want butter on your bread?
flour|n|bột mì|You need flour and eggs to make a cake.
onion|n|hành tây|Chop the onion and fry it.
garlic|n|tỏi|This soup has a lot of garlic.
carrot|n|cà rốt|Rabbits love to eat a carrot.
pepper|n|hạt tiêu; ớt chuông|Add some salt and pepper to the soup.
lemon|n|quả chanh vàng|I put a slice of lemon in my tea.
honey|n|mật ong|Honey is very sweet.
noodles|n|mì sợi|We had noodles with chicken for lunch.
sandwich|n|bánh mì kẹp|I made a cheese sandwich for lunch.
pasta|n|mì Ý|We often have pasta on Fridays.
spicy|adj|cay|This soup is too spicy for me.
taste|v, n|nếm; có vị; vị|I do not like the taste of coffee.
chop|v|chặt, thái nhỏ|Chop the onions into small pieces.
peel|v|gọt vỏ, bóc vỏ|Please peel the potatoes.
slice|n, v|lát; thái lát|Cut a slice of bread for me.
roast|v|quay, nướng (lò)|We roast a chicken on Sundays.`,
B1: `ingredient|n|nguyên liệu|Garlic is the main ingredient in this sauce.
portion|n|khẩu phần|The portion was so big that I could not finish it.
diet|n|chế độ ăn|a healthy diet
vegetarian|n, adj|người ăn chay; chay|Anna is vegetarian, so she always orders the vegetable pasta.
takeaway|n|đồ ăn mang đi|We were too tired to cook, so we got a takeaway.
raw|adj|sống, chưa nấu|Never eat raw chicken because it can make you sick.
fresh|adj|tươi|I only buy fresh fish from the market.
leftovers|n|đồ ăn thừa|We ate the leftovers for lunch the next day.
nutritious|adj|bổ dưỡng|Beans are cheap, and they are also very nutritious.
starter|n|món khai vị|I will have the soup as a starter.
main course|n|món chính|The main course was fish with rice.
tip|n|tiền boa|We left a tip for the waiter.
grill|v|nướng (vỉ)|He likes to grill meat in the garden.
stir|v|khuấy, đảo|Stir the soup slowly for five minutes.
spice|n|gia vị (cay, thơm)|Indian food uses a lot of spice.
frozen|adj|đông lạnh|I buy frozen vegetables because they are cheap.
organic|adj|hữu cơ|She only buys organic fruit.
ripe|adj|chín|These bananas are not ripe yet.
crispy|adj|giòn|The fried chicken was hot and crispy.
greasy|adj|nhiều dầu mỡ|Greasy food makes me feel sick.
bland|adj|nhạt nhẽo|The soup was bland, so I added salt.
calorie|n|ca-lo|Each calorie counts when you are on a diet.
protein|n|chất đạm|Fish and eggs are a good source of protein.
allergic|adj|bị dị ứng|He is allergic to nuts.`,
B2: `processed food|n|thực phẩm chế biến sẵn|Doctors say you should eat less processed food and more fresh vegetables.
wholegrain|adj|nguyên cám|Wholegrain bread keeps you full for longer than white bread.
appetite|n|sự thèm ăn|I have no appetite.
moderation|n|sự điều độ|Drink alcohol in moderation.
craving|n|cơn thèm|She had a strong craving for chocolate in the afternoon.
nutrient|n|chất dinh dưỡng|Iron is an important nutrient for the body.
malnutrition|n|suy dinh dưỡng|Malnutrition is a serious problem in many poor areas.
preservative|n|chất bảo quản|This juice contains no artificial preservative or colours.
additive|n|phụ gia thực phẩm|Every food additive must be listed on the label.
savoury|adj|mặn (không ngọt)|I prefer savoury snacks to sweet ones.
cuisine|n|ẩm thực|Vietnamese cuisine is famous for fresh herbs.
perishable|adj|dễ hỏng|Milk and meat are perishable, so keep them in the fridge.
intake|n|lượng ăn vào, lượng tiêu thụ|Doctors advise a lower salt intake for patients with high blood pressure.
dietary|adj|thuộc chế độ ăn|The hospital asks about dietary needs before surgery.`
}},
{ id: "time", icon: "🗓️", color: "#7a63d6", title: "Time, numbers & calendar", vi: "Thời gian, số và lịch", levels: {
A1: `today|adv|hôm nay|It is sunny today.
tomorrow|adv|ngày mai|We have an English test tomorrow.
yesterday|adv|hôm qua|Yesterday, I met my friend in the park.
morning|n|buổi sáng|I drink tea every morning.
afternoon|n|buổi chiều|The shop closes in the afternoon.
evening|n|buổi tối|We eat dinner in the evening.
night|n|ban đêm|The stars are bright at night.
week|n|tuần|There are seven days in a week.
month|n|tháng|February is a short month.
year|n|năm|Next year, I want to learn to swim.
hour|n|giờ (60 phút)|The film is one hour long.
minute|n|phút|Wait one minute, please.
Monday|n|thứ Hai|School starts on Monday.
Sunday|n|Chủ nhật|We visit Grandma every Sunday.
first|adj|thứ nhất|January is the first month of the year.
half past|phr|rưỡi (giờ)|It's half past seven.
Tuesday|n|thứ Ba|We have English on Tuesday.
Wednesday|n|thứ Tư|The market is open on Wednesday.
Thursday|n|thứ Năm|I work late on Thursday.
Friday|n|thứ Sáu|Friday is my favourite day.
Saturday|n|thứ Bảy|We go to the park on Saturday.
spring|n|mùa xuân|Flowers come out in spring.
summer|n|mùa hè|It is very hot in summer.
autumn|n|mùa thu (US: fall)|The leaves fall in autumn.
winter|n|mùa đông|It is cold in winter.`,
A2: `weekend|n|cuối tuần|What are you doing this weekend?
early|adj, adv|sớm|I get up early to catch the bus.
late|adj, adv|muộn|Sorry I'm late. The train was slow.
always|adv|luôn luôn|Minh always brings his lunch to work.
usually|adv|thường thường|I usually walk to school, but today it is raining.
sometimes|adv|thỉnh thoảng|Sometimes my brother cooks dinner for us.
never|adv|không bao giờ|Lan never drinks coffee after lunch.
ago|adv|cách đây|two days ago
soon|adv|sớm, chẳng bao lâu|Dinner will be ready soon.
quarter|n|một phần tư; 15 phút|a quarter to nine
century|n|thế kỷ|This old bridge is more than one century old.
date|n|ngày tháng|What is the date of your birthday?
midnight|n|nửa đêm|The party ended at midnight.
noon|n|buổi trưa, 12 giờ trưa|We have lunch at noon.
tonight|adv|tối nay|I am going to the cinema tonight.
daily|adj, adv|hằng ngày|Brush your teeth daily.
weekly|adj, adv|hằng tuần|We have a weekly meeting on Monday.
calendar|n|lịch|Look at the calendar to check the date.
during|prep|trong suốt|I slept during the film.
until|prep, conj|cho đến khi|Wait here until I come back.`,
B1: `recently|adv|gần đây|I recently started going to the gym after work.
nowadays|adv|ngày nay|Nowadays, most people use their phones to pay for things.
in advance|phr|trước (thời hạn)|Book in advance.
on time|phr|đúng giờ|Please be on time for the meeting tomorrow.
deadline|n|hạn chót|The deadline for this report is Friday at five.
schedule|n|lịch trình|My schedule is very busy this week.
temporary|adj|tạm thời|He has a temporary job until he finds a better one.
permanent|adj|vĩnh viễn|After one year, the company offered her a permanent contract.
frequent|adj|thường xuyên|Frequent short breaks help you study better.
decade|n|thập kỷ, mười năm|He has worked here for over a decade.
period|n|khoảng thời gian|There was a long period of rain in April.
meanwhile|adv|trong khi đó|Cook the rice, and meanwhile cut the vegetables.
lately|adv|gần đây|I have been very tired lately.
currently|adv|hiện tại|She is currently working in a hospital.
shortly|adv|ngay sau đây, chẳng bao lâu|The doctor will see you shortly.
punctual|adj|đúng giờ|Our teacher is always punctual.
from time to time|phr|thỉnh thoảng|I visit my grandparents from time to time.
in the meantime|phr|trong lúc chờ đợi|The bus is late, so in the meantime let us have a coffee.
up to date|adj|cập nhật, mới nhất|Please keep your records up to date.`,
B2: `simultaneously|adv|đồng thời|The two trains arrived at the station simultaneously.
duration|n|khoảng thời gian kéo dài|The duration of the flight is about three hours.
interval|n|khoảng cách (thời gian)|The bus runs at a ten-minute interval during the day.
annual|adj|hằng năm|an annual check-up
overdue|adj|quá hạn|Your library book is overdue, so you must pay a small fine.
chronological|adj|theo thứ tự thời gian|Write the events in chronological order.
sporadic|adj|rải rác, không đều|There were sporadic showers during the afternoon.
prolonged|adj|kéo dài|Prolonged stress can damage your health.
imminent|adj|sắp xảy ra|The storm is imminent, so stay indoors.
ongoing|adj|đang diễn ra, liên tục|The ongoing treatment will last six months.
in the long run|phr|về lâu dài|Regular exercise will save you money in the long run.
prior to|prep|trước khi|Patients must not eat anything prior to the operation.
lifespan|n|tuổi thọ, vòng đời|The average lifespan has increased in the last century.`
}},
{ id: "places", icon: "✈️", color: "#2f8fd8", title: "Places & travel", vi: "Nơi chốn và du lịch", levels: {
A1: `city|n|thành phố|This is a big city with many parks.
street|n|đường phố|My house is on this street.
shop|n|cửa hàng|The shop sells bread and milk.
school|n|trường học|My school is near the park.
hospital|n|bệnh viện|The nurse works at a big hospital.
bank|n|ngân hàng|Minh goes to the bank to get money.
park|n|công viên|Children play football in the park.
bus|n|xe buýt|The bus stops in front of my school.
train|n|tàu hỏa|The train to the city leaves at nine.
car|n|ô tô|Dad drives the car to work every day.
bike|n|xe đạp|Lan rides her bike to school.
left|n, adv|bên trái|Turn left.
right|n, adv|bên phải|Turn right at the next street.
near|prep|gần|Is there a shop near here?
far|adj|xa|The beach is too far to walk.
town|n|thị trấn|My town is small and quiet.
village|n|làng|Her grandmother lives in a village.
country|n|đất nước|Vietnam is a beautiful country.
restaurant|n|nhà hàng|We eat at a restaurant on Friday.
cafe|n|quán cà phê|Let's meet at the cafe.
supermarket|n|siêu thị|The supermarket opens at eight.
museum|n|bảo tàng|The museum is free on Sundays.
cinema|n|rạp chiếu phim (US: movie theater)|We go to the cinema on Saturday.
library|n|thư viện|I read books in the library.
hall|n|hội trường, sảnh|The hall is full of people.
swimming pool|n|bể bơi|We swim in the swimming pool.
farm|n|nông trại|My uncle has a farm.`,
A2: `airport|n|sân bay|We arrived at the airport two hours early.
station|n|nhà ga|Let's meet at the station at six.
ticket|n|vé|How much is a ticket to the city?
passport|n|hộ chiếu|Don't forget to bring your passport to the airport.
hotel|n|khách sạn|We booked a hotel near the beach for three nights.
map|n|bản đồ|Look at the map to find the museum.
journey|n|chuyến đi|The journey was long, but we enjoyed it.
luggage|n|hành lý (không đếm được)|Her luggage was too heavy to carry upstairs.
opposite|prep|đối diện|The pharmacy is opposite the bank.
corner|n|góc (đường)|The café is on the corner of the street.
straight|adv|thẳng|Go straight on.
crossroads|n|ngã tư|Turn left when you get to the crossroads.
bridge|n|cầu|The bridge is over the river.
church|n|nhà thờ|There is an old church in the square.
square|n|quảng trường|People meet in the square.
temple|n|chùa, đền|We visited a famous temple.
tourist|n|khách du lịch|The tourist asked me for a map.
postcard|n|bưu thiếp|I sent you a postcard from Hue.
harbour|n|bến cảng (US: harbor)|Many boats are in the harbour.
castle|n|lâu đài|We visited an old castle.
palace|n|cung điện|The palace is open to tourists.
zoo|n|sở thú|The children loved the zoo.`,
B1: `destination|n|điểm đến|Our final destination is a small island.
accommodation|n|chỗ ở|We are still looking for cheap accommodation near the city centre.
sightseeing|n|tham quan|We spent the whole morning sightseeing in the old town.
delay|n, v|sự trì hoãn; hoãn|The storm caused a long delay at the airport.
departure|n|sự khởi hành|The departure time is shown on the board.
arrival|n|sự đến nơi|After our arrival, we went straight to the hotel.
abroad|adv|ở nước ngoài|Minh wants to study abroad after school.
set off|phr|khởi hành|We set off early to avoid the traffic.
check in|phr|làm thủ tục nhận phòng / lên máy bay|You must check in two hours before the flight.
suburb|n|vùng ngoại ô|They moved to a quiet suburb.
tourist attraction|n|điểm thu hút khách du lịch|The old bridge is a popular tourist attraction.
guidebook|n|sách hướng dẫn du lịch|The guidebook recommends a small local restaurant.
hostel|n|nhà trọ giá rẻ cho khách du lịch|We stayed in a cheap hostel near the station.
campsite|n|khu cắm trại|The campsite has showers and a small shop.
resort|n|khu nghỉ dưỡng|The resort has a pool and a beach.
local|adj|địa phương|I like trying local food when I travel.
monument|n|đài tưởng niệm, di tích|The monument is in the centre of the city.`,
B2: `itinerary|n|lịch trình chuyến đi|Our itinerary includes two days in the mountains.
jet lag|n|mệt mỏi do lệch múi giờ|I always get terrible jet lag after flying to Europe.
remote|adj|xa xôi, hẻo lánh|They live in a remote village high in the mountains.
congestion|n|tắc nghẽn|traffic congestion
landmark|n|địa danh nổi bật|The old tower is a famous landmark in the city.
metropolis|n|đô thị lớn|Ho Chi Minh City is a busy metropolis.
heritage|n|di sản|The old town is part of the national heritage.
off the beaten track|phr|xa nơi đông khách, hẻo lánh|We found a lovely village off the beaten track.
cosmopolitan|adj|mang tính quốc tế, đa văn hoá|London is a lively, cosmopolitan city.
picturesque|adj|đẹp như tranh|We stopped in a picturesque fishing village.
ancient|adj|cổ xưa|We walked around the ancient city walls.`
}},
{ id: "work", icon: "💼", color: "#3d6fb0", title: "Work & study", vi: "Công việc và học tập", levels: {
A1: `job|n|công việc|My mother has a new job.
work|v|làm việc|Do you work on Saturdays?
student|n|sinh viên, học sinh|She is a student at a big school.
teacher|n|giáo viên|The teacher writes words on the board.
doctor|n|bác sĩ|The doctor says I need more sleep.
nurse|n|y tá, điều dưỡng|The nurse takes my temperature.
book|n|quyển sách|Please open your book to page ten.
class|n|lớp học|Our class starts at eight o'clock.
learn|v|học|Lan wants to learn English.
read|v|đọc|Read the text and answer the questions.
write|v|viết|Write your name at the top of the page.
office|n|văn phòng|My father's office is on the second floor.
worker|n|công nhân, người lao động|Every worker gets a lunch break.
pen|n|bút|Can I borrow your pen?
paper|n|giấy|I need some paper and a pen.
test|n|bài kiểm tra|We have a test on Monday.
meeting room|n|phòng họp|The meeting room is on the second floor.
shop owner|n|chủ cửa hàng|The shop owner is my aunt.
factory|n|nhà máy|He works in a factory.
farmer|n|nông dân|The farmer gets up at five.`,
A2: `exam|n|kỳ thi|Lan studies hard for her final exam.
homework|n|bài tập về nhà|Do your homework before you watch TV.
subject|n|môn học|Maths is my favourite subject at school.
lesson|n|bài học|Today's lesson is about the weather.
meeting|n|cuộc họp|The meeting starts at ten and ends at eleven.
boss|n|sếp|My boss is kind and always listens.
salary|n|lương|Her salary goes into her bank account each month.
busy|adj|bận|Sorry, I can't talk now because I'm busy.
practise|v|luyện tập (US: practice)|You should practise speaking English every day.
revise|v|ôn bài (UK)|Students revise for the test the night before.
pass|v|đỗ, qua (kỳ thi)|If you study hard, you will pass the exam.
fail|v|trượt, thất bại|Many students fail the test if they don't study.
workplace|n|nơi làm việc|A safe workplace is important.
task|n|nhiệm vụ|My first task is to answer emails.
presentation|n|bài thuyết trình|I have a presentation at ten.
email address|n|địa chỉ thư điện tử|What is your email address?
engineer|n|kỹ sư|My brother is an engineer.
receptionist|n|nhân viên lễ tân|The receptionist answered the phone.`,
B1: `career|n|sự nghiệp|She wants a career in medicine.
experience|n|kinh nghiệm|Do you have any experience of working in a restaurant?
skill|n|kỹ năng|Speaking clearly is an important skill at work.
qualification|n|bằng cấp|You need a teaching qualification for this job.
degree|n|bằng đại học|Minh has a degree in computer science.
apply for|phr|nộp đơn xin|Lan decided to apply for a job at the hospital.
interview|n|buổi phỏng vấn|I have a job interview tomorrow morning.
training|n|sự đào tạo|New staff receive two weeks of training.
shift|n|ca làm việc|Nam works the night shift at the hospital.
responsible for|phr|chịu trách nhiệm về|The manager is responsible for training new staff.
lecture|n|bài giảng|The lecture on history lasted two hours.
unemployed|adj|thất nghiệp|He was unemployed for six months.
overtime|n|giờ làm thêm|We worked overtime to finish the project.
teamwork|n|làm việc nhóm|Good teamwork makes the job easier.
volunteer|n, v|tình nguyện viên; tình nguyện|She works as a volunteer at the hospital.
apprentice|n|người học việc|The apprentice learns from an experienced electrician.
profession|n|nghề nghiệp (đòi hỏi chuyên môn)|Teaching is a respected profession.`,
B2: `internship|n|kỳ thực tập|She did a summer internship at a law firm.
residency|n|nội trú (bác sĩ)|After medical school, he began his residency at a hospital.
supervisor|n|người hướng dẫn|My supervisor gave me useful feedback on my report.
workload|n|khối lượng công việc|Her workload has doubled since two colleagues left.
burnout|n|kiệt sức vì công việc|Working long hours without rest can lead to burnout.
curriculum|n|chương trình học|The school changed its curriculum to include more science.
appraisal|n|đánh giá hiệu suất làm việc|I have my yearly appraisal next week.
prioritise|v|ưu tiên (US: prioritize)|You must prioritise urgent tasks first.
work-life balance|n|cân bằng công việc và cuộc sống|Nurses need a healthy work-life balance.
networking|n|xây dựng mạng lưới quan hệ|Networking can help you find a new job.
freelance|adj, adv|làm tự do|He works freelance as a translator.`,
C1: `proficiency|n|sự thành thạo|The job requires a high level of proficiency in English.
expertise|n|chuyên môn sâu|The team relies on her expertise in data analysis.
competence|n|năng lực|Her competence as a manager earned her a promotion.
mentor|n|người cố vấn|My mentor helped me plan my career.
accountable|adj|có trách nhiệm giải trình|Doctors are accountable for their decisions.
accreditation|n|sự công nhận chính thức, chứng nhận|The hospital received full accreditation last year.
autonomy|n|quyền tự chủ|Senior nurses have a lot of autonomy.
collaboration|n|sự hợp tác|Collaboration between teams improves patient care.
commitment|n|sự tận tâm, cam kết|Her commitment to the job impressed everyone.
diligent|adj|chăm chỉ, cần mẫn|He is a diligent worker who rarely makes mistakes.
entrepreneur|n|doanh nhân khởi nghiệp|The young entrepreneur opened three cafes in one year.
hierarchy|n|hệ thống cấp bậc|A strict hierarchy can slow down decisions.
incentive|n|sự khuyến khích, ưu đãi|The company offers an incentive for extra sales.
liaise|v|liên lạc phối hợp|She must liaise with doctors and social workers.
tenure|n|nhiệm kỳ, thời gian giữ chức|His long tenure gave him great experience.
vocation|n|thiên hướng nghề nghiệp, sứ mệnh|Nursing is more than a job; it is a vocation.`
}},
{ id: "body", icon: "🩹", color: "#d9486b", title: "Health & the body", vi: "Sức khỏe và cơ thể (phổ thông)", levels: {
A1: `head|n|đầu|She wears a hat on her head.
eye|n|mắt|Something is in my eye.
ear|n|tai|She whispered a secret in my ear.
nose|n|mũi|I can't smell because my nose is blocked.
mouth|n|miệng|Open your mouth and say 'ah'.
tooth|n|răng (số nhiều: teeth)|My baby brother has a loose tooth.
hand|n|bàn tay|Give me your hand to cross the street.
arm|n|cánh tay|I broke my arm last year.
leg|n|chân|My leg hurts after the long walk.
foot|n|bàn chân (số nhiều: feet)|She hurt her foot when she ran.
back|n|lưng|My back hurts after sitting all day.
stomach|n|bụng, dạ dày|He lay down because his stomach hurt.
ill|adj|ốm|Anna is ill, so she stays in bed.
sick|adj|ốm; buồn nôn|I feel sick, so I need some air.
hurt|v|đau|My knee hurts.
medicine|n|thuốc|Take this medicine twice a day.
face|n|khuôn mặt|She has a kind face.
hair|n|tóc|He has short black hair.
body|n|cơ thể|Your body needs sleep.
lip|n|môi|Her lip is bleeding.
heart|n|trái tim|My heart is beating fast.
bone|n|xương|He broke a bone in his arm.
chin|n|cằm|He has a small chin.
tongue|n|lưỡi|Show me your tongue, please.`,
A2: `neck|n|cổ|Giraffes have a very long neck.
shoulder|n|vai|She put her bag on her shoulder.
knee|n|đầu gối|He fell and hurt his knee.
finger|n|ngón tay|I cut my finger with a knife.
chest|n|ngực|The doctor listened to my chest.
skin|n|da|Use cream if your skin is dry.
headache|n|đau đầu|I have a headache, so I'm going to lie down.
toothache|n|đau răng|Minh has a toothache and needs a dentist.
cold|n|cảm lạnh|I have a cold, so I stay at home.
flu|n|cúm|Half of our class has the flu.
temperature|n|nhiệt độ; sốt|She has a temperature.
tired|adj|mệt|I'm tired after a long day at work.
pharmacy|n|hiệu thuốc|You can buy this medicine at the pharmacy.
appointment|n|lịch hẹn khám|I have an appointment with the doctor at three.
hospital bed|n|giường bệnh|He stayed in a hospital bed for two days.
stomachache|n|đau bụng|I have a stomachache after lunch.
elbow|n|khuỷu tay|I hit my elbow on the door.
wrist|n|cổ tay|She hurt her wrist playing tennis.
cheek|n|má|The baby has a soft cheek.
thumb|n|ngón tay cái|He hurt his thumb with a hammer.
lung|n|phổi|He had an operation on his left lung.
brain|n|não|The brain controls the whole body.
tablet|n|viên thuốc|Take one tablet after each meal.`,
B1: `injury|n|chấn thương|The player missed the match because of a knee injury.
pain|n|cơn đau|He felt a sharp pain in his back.
sore|adj|đau, rát|a sore throat
swollen|adj|sưng|Her foot was swollen after the long flight.
dizzy|adj|chóng mặt|I felt dizzy when I stood up quickly.
treatment|n|sự điều trị|The treatment for a broken arm takes several weeks.
recover|v|hồi phục|It takes about a week to recover from the flu.
exercise|n, v|tập thể dục|Doctors say you should exercise for thirty minutes a day.
healthy|adj|khỏe mạnh|Eating fruit and vegetables keeps you healthy.
stress|n|căng thẳng|Too much stress can make it hard to sleep.
checkup|n|khám sức khỏe định kỳ|Everyone should have a checkup once a year.
hip|n|hông|My hip hurts when I walk.
wound|n|vết thương|Wash the wound with clean water.
bruise|n|vết bầm tím|She has a bruise on her leg.
muscle|n|cơ bắp|I pulled a muscle while running.
cramp|n|chuột rút|I got a cramp in my leg while swimming.
nausea|n|buồn nôn|The medicine can cause nausea.
bleed|v|chảy máu|His nose began to bleed.
stitch|n|mũi khâu|The doctor put one stitch in his hand.`,
B2: `symptom|n|triệu chứng|A high temperature is a common symptom of flu.
condition|n|tình trạng bệnh|The doctor explained that his condition is not serious.
chronic|adj|mạn tính|Her chronic back pain makes it hard to sit for long.
prescription|n|đơn thuốc|The pharmacist needs a prescription before giving you this medicine.
side effect|n|tác dụng phụ|One side effect of this medicine is feeling sleepy.
wellbeing|n|sự khỏe mạnh toàn diện|Regular sleep is important for your mental wellbeing.
dehydration|n|sự mất nước|Dehydration can cause headaches and dizziness.
nutrition|n|dinh dưỡng|Good nutrition is important for recovery.
posture|n|tư thế|Bad posture can cause back pain.
hygiene|n|vệ sinh|Good hygiene helps prevent infection.`
}},
{ id: "feelings", icon: "💬", color: "#e0a21a", title: "Feelings & personality", vi: "Cảm xúc và tính cách", levels: {
A1: `happy|adj|vui|Lan is happy because it's her birthday.
sad|adj|buồn|The children are sad when summer ends.
angry|adj|tức giận|Dad is angry because the bus is late.
good|adj|tốt|This soup is very good.
bad|adj|tồi, xấu|The weather is bad today.
nice|adj|dễ chịu|It's nice to sit in the sun.
like|v|thích|Do you like spicy food?
love|v|yêu|Children love ice cream.
want|v|muốn|What do you want for dinner?
fine|adj|khoẻ, ổn|I am fine, thank you.
glad|adj|vui mừng|I am glad to see you.
sorry|adj|xin lỗi, tiếc|I am sorry I am late.
afraid of|phr|sợ|I am afraid of dogs.`,
A2: `worried|adj|lo lắng|Mum is worried because Nam is not home yet.
afraid|adj|sợ|Anna is afraid of big dogs.
bored|adj|chán|The film was long, and I felt bored.
excited|adj|hào hứng|The children are excited about the trip.
surprised|adj|ngạc nhiên|I was surprised to see Lan at the party.
nervous|adj|hồi hộp|Minh feels nervous before his speech.
kind|adj|tốt bụng|A kind stranger helped me carry my bags.
shy|adj|nhút nhát|Nam is shy and rarely speaks in class.
lazy|adj|lười|Don't be lazy; help me clean the kitchen.
funny|adj|hài hước|My uncle tells funny stories that make everyone laugh.
polite|adj|lịch sự|It is polite to say thank you when someone helps you.
proud|adj|tự hào|She is proud of her son.
lonely|adj|cô đơn|He felt lonely in the new city.
jealous|adj|ghen tị|She was jealous of her friend's new phone.
brave|adj|dũng cảm|The brave boy saved the cat.
rude|adj|thô lỗ|It is rude to talk with food in your mouth.
sleepy|adj|buồn ngủ|The sleepy child went to bed early.`,
B1: `confident|adj|tự tin|After weeks of practice, Lan felt confident about her speech.
anxious|adj|lo âu|Nam felt anxious while he waited for his exam results.
upset|adj|buồn bực|She was upset because her friend forgot her birthday.
embarrassed|adj|ngượng|Minh felt embarrassed when he forgot the teacher's name in front of everyone.
patient|adj|kiên nhẫn|Be patient with the little boy while he ties his shoes.
honest|adj|trung thực|Thank you for being honest and telling me the truth.
reliable|adj|đáng tin cậy|Anna is very reliable, so she always arrives on time.
calm|adj|bình tĩnh|Stay calm and walk slowly to the exit.
frustrated|adj|bực bội, nản|He felt frustrated when the computer stopped working again.
cross|adj|bực mình|Dad was cross when I came home late.
cheerful|adj|vui vẻ, hồ hởi|The cheerful nurse greeted every patient.
disappointed|adj|thất vọng|I was disappointed with my test result.
grateful|adj|biết ơn|We are grateful for your help.
stubborn|adj|bướng bỉnh|My brother is too stubborn to say sorry.
generous|adj|rộng rãi, hào phóng|He is generous and often helps friends.
mood|n|tâm trạng|She is in a bad mood today.
guilty|adj|cảm thấy có lỗi|I feel guilty about forgetting her birthday.
disgusted|adj|ghê tởm|She felt disgusted by the smell.`,
B2: `empathetic|adj|thấu cảm|An empathetic nurse listens carefully and understands how patients feel.
reassured|adj|yên tâm|The patient felt reassured.
overwhelmed|adj|choáng ngợp|She felt overwhelmed by the amount of homework she had this week.
resilient|adj|kiên cường|Children are often more resilient than adults expect after a difficult year.
considerate|adj|chu đáo|It was considerate of you to turn the music down at night.
moody|adj|tính khí thất thường|My brother gets moody when he is tired, so we leave him alone.
sympathetic|adj|thông cảm|The doctor was sympathetic and listened carefully.
irritable|adj|dễ cáu|Lack of sleep makes me irritable.
insecure|adj|thiếu tự tin|He felt insecure about his English.
optimistic|adj|lạc quan|She is optimistic about the future.
pessimistic|adj|bi quan|Don't be so pessimistic about the exam.
vulnerable|adj|dễ bị tổn thương|Patients often feel vulnerable in hospital.
content|adj|hài lòng|She felt content with a quiet life.`,
C1: `apprehensive|adj|e sợ, lo ngại|Nam felt apprehensive about moving to a new city on his own.
compassionate|adj|giàu lòng trắc ẩn|The doctor was so compassionate that patients trusted her immediately.
conscientious|adj|tận tâm|Lan is a conscientious worker who always checks every detail twice.
ambivalent|adj|mâu thuẫn trong cảm xúc|Minh feels ambivalent about the job offer, since it pays well but means moving away.
indifferent|adj|thờ ơ, dửng dưng|He seemed indifferent to the news.
resentful|adj|oán giận, bực bội|She felt resentful that nobody thanked her.
composed|adj|điềm tĩnh|The nurse stayed composed during the emergency.
elated|adj|vô cùng phấn khởi|She was elated when she passed the exam.
sceptical|adj|hoài nghi (US: skeptical)|I am sceptical about miracle cures.
empathy|n|sự đồng cảm|Empathy is vital for a good caregiver.
poised|adj|điềm đạm, tự tin|She gave a poised answer under pressure.
sentimental|adj|đa cảm, hoài niệm|My grandmother is sentimental about old photographs.
tactful|adj|khéo léo, tế nhị|A tactful reply avoided a long argument.
detached|adj|xa cách, khách quan|Doctors must stay emotionally detached but caring.`
}},
{ id: "shopping", icon: "🛍️", color: "#c04fa8", title: "Shopping & money", vi: "Mua sắm và tiền bạc", levels: {
A1: `buy|v|mua|I want to buy some bread.
sell|v|bán|This shop does sell fresh fruit.
money|n|tiền|I have no money in my bag.
price|n|giá|What is the price of this book?
cheap|adj|rẻ|This bag is cheap, only five dollars.
expensive|adj|đắt|That watch is too expensive for me.
card|n|thẻ|Can I use my card here?
shirt|n|áo sơ mi|He wears a white shirt to work.
shoes|n|giày|My new shoes are very small.
shop assistant|n|nhân viên bán hàng|The shop assistant is very helpful.
basket|n|giỏ|Put the apples in the basket.
closed|adj|đóng cửa|The shop is closed on Sunday.
free|adj|miễn phí|The coffee is free today.
coin|n|đồng xu|I have one coin in my pocket.
gift|n|món quà|This is a gift for you.
pay by card|phr|trả bằng thẻ|You can pay by card here.`,
A2: `size|n|kích cỡ|Do you have this jacket in a bigger size?
try on|phr|mặc thử|Can I try it on?
receipt|n|biên lai|Keep the receipt in case you want to return the shirt.
discount|n|giảm giá|Students get a ten percent discount at this bookshop.
cash|n|tiền mặt|Sorry, we only take cash, not cards.
change|n|tiền thừa|The cashier gave me my change and a small bag.
customer|n|khách hàng|The customer asked the shop assistant for a smaller size.
market|n|chợ|Anna buys fresh vegetables at the market every morning.
queue|n, v|hàng người xếp hàng; xếp hàng|There is a long queue at the checkout.
checkout|n|quầy thanh toán|Please pay at the checkout.
trolley|n|xe đẩy hàng (US: cart)|He pushed the trolley down the aisle.
second-hand|adj|đã qua sử dụng|I bought a second-hand bike.
sale|n|đợt giảm giá|The shoes are on sale this week.
coupon|n|phiếu giảm giá|I have a coupon for ten percent off.
cashier|n|thu ngân|The cashier gave me my change.
wallet|n|ví tiền|He lost his wallet on the bus.`,
B1: `afford|v|đủ tiền mua|I can't afford it.
bargain|n|món hời|This coat was a real bargain, half the usual price.
refund|n|hoàn tiền|The shop gave me a full refund because the phone was broken.
save|v|tiết kiệm|Minh tries to save a little money every month.
budget|n|ngân sách|We have a small budget, so we cannot buy a new sofa.
loan|n|khoản vay|They took out a loan to buy their first flat.
brand|n|thương hiệu|Lan always chooses the same brand of shampoo.
online shopping|n|mua sắm trực tuyến|Online shopping saves me a lot of time.
guarantee|n|sự bảo hành|The phone has a one-year guarantee.
exchange|v, n|đổi (hàng)|Can I exchange this jumper for a bigger size?
in stock|phr|còn hàng|Do you have this jacket in stock?
sold out|phr|hết hàng|The tickets were sold out in an hour.
purchase|n, v|việc mua; mua|I made an online purchase yesterday.`,
B2: `insurance|n|bảo hiểm|health insurance
expenditure|n|khoản chi tiêu|The family's monthly expenditure on food has risen sharply this year.
out of pocket|phr|tự chi trả|The company did not cover the trip, so I paid out of pocket.
consumer|n|người tiêu dùng|Every consumer has the right to ask for a refund on faulty goods.
overpriced|adj|bị định giá quá cao|The souvenirs at the airport are overpriced.
impulse buy|n|món mua bốc đồng|The chocolate at the till was an impulse buy.
loyalty card|n|thẻ khách hàng thân thiết|I collect points with my loyalty card.
haggle|v|mặc cả|Tourists often haggle in the market.`
}},
{ id: "nature", icon: "🌿", color: "#3c9a4f", title: "Nature, weather & environment", vi: "Thiên nhiên, thời tiết và môi trường", levels: {
A1: `sun|n|mặt trời|The sun is bright today.
rain|n, v|mưa|Take an umbrella because the rain is heavy.
hot|adj|nóng|It is very hot in the kitchen.
tree|n|cây|A bird sits in the tree.
flower|n|hoa|She puts a red flower in the glass.
dog|n|con chó|The dog runs after the ball.
cat|n|con mèo|My cat sleeps on the sofa.
sea|n|biển|We swim in the sea in summer.
river|n|sông|A small river goes through the village.
snow|n|tuyết|It is cold, and there is snow outside.
wind|n|gió|The wind is strong today.
sky|n|bầu trời|The sky is blue.
moon|n|mặt trăng|I can see the moon tonight.
star|n|ngôi sao|There is a bright star in the sky.
grass|n|cỏ|The children sit on the grass.
bird|n|con chim|A small bird is on the tree.
ice|n|băng, đá|The ice on the lake is thick.`,
A2: `weather|n|thời tiết|What is the weather like in your city today?
cloudy|adj|nhiều mây|It is cloudy this morning, so we may not see the sun.
windy|adj|nhiều gió|It was too windy to fly the kite.
storm|n|cơn bão|A big storm came, and the lights went out.
season|n|mùa|Summer is my favourite season because I love swimming.
mountain|n|núi|We climbed the mountain and saw the whole valley.
beach|n|bãi biển|The children build sand castles on the beach.
island|n|hòn đảo|You can only reach the island by boat.
forest|n|rừng|We walked through the forest and heard many birds.
cloud|n|đám mây|There is a big grey cloud over the town.
fog|n|sương mù|The fog was so thick that we could not see the road.
lake|n|hồ|We swim in the lake in summer.
field|n|cánh đồng|The cows are in the field.
hill|n|đồi|We walked up the hill.
rainbow|n|cầu vồng|We saw a rainbow after the rain.
sunny|adj|có nắng|It is a sunny day today.
wave|n|sóng biển|The big wave hit the beach.`,
B1: `environment|n|môi trường|Plastic bags are bad for the environment.
pollution|n|ô nhiễm|air pollution
recycle|v|tái chế|Please recycle your bottles instead of throwing them in the bin.
climate|n|khí hậu|The climate in this region is warm and dry.
flood|n|lũ lụt|After three days of rain, the flood covered the main road.
humid|adj|ẩm ướt|The air is so humid in July that my clothes never dry.
protect|v|bảo vệ|We should protect the forest for future generations.
thunder|n|sấm|The thunder was so loud that the dog hid.
lightning|n|tia chớp, sét|Lightning hit the old tree last night.
wildlife|n|động vật hoang dã|The park is a great place to see wildlife.
natural resources|phr|tài nguyên thiên nhiên|Oil and water are important natural resources.
renewable|adj|có thể tái tạo|Wind and solar are renewable sources of energy.
shortage|n|sự thiếu hụt|There is a water shortage every summer.
pollute|v|gây ô nhiễm|Factories must not pollute the river.`,
B2: `climate change|n|biến đổi khí hậu|Climate change is making summers hotter around the world.
drought|n|hạn hán|The long drought killed many crops across the region.
sustainable|adj|bền vững|Many shops now sell sustainable products that do not harm the planet.
emissions|n|khí thải|The city wants to cut emissions from cars and buses.
heatwave|n|đợt nắng nóng|During the heatwave, doctors told old people to stay indoors.
endangered|adj|có nguy cơ tuyệt chủng|The tiger is an endangered animal, so hunting it is illegal.
landfill|n|bãi chôn lấp rác|Most of our rubbish goes to a landfill.
landscape|n|phong cảnh, cảnh quan|The landscape here is beautiful in autumn.
habitat|n|môi trường sống|Many animals lose their habitat when forests are cut down.
extinct|adj|tuyệt chủng|Dinosaurs became extinct millions of years ago.
wildfire|n|cháy rừng|A wildfire spread quickly across the dry hills.
greenhouse gas|phr|khí nhà kính|Cars and factories release greenhouse gas into the air.
ozone layer|phr|tầng ozone|The ozone layer protects us from harmful sun rays.`,
C1: `biodiversity|n|đa dạng sinh học|Protecting wetlands helps preserve biodiversity because many species live there.
deforestation|n|nạn phá rừng|Deforestation destroys the homes of thousands of animals every year.
mitigate|v|giảm nhẹ|Planting trees in cities can help mitigate the effects of extreme heat.
ecosystem|n|hệ sinh thái|Pollution can destroy a delicate ecosystem within a few years.
depletion|n|sự cạn kiệt|The depletion of fish stocks threatens many coastal communities.
degradation|n|sự suy thoái|Soil degradation reduces the amount of food farmers can grow.
resilience|n|khả năng phục hồi, sức chống chịu|Wetlands increase a region's resilience to flooding.
conserve|v|bảo tồn, giữ gìn|Governments must act to conserve scarce water supplies.
irreversible|adj|không thể đảo ngược|Scientists warn that some damage to the ice sheets may be irreversible.
carbon neutral|phr|trung hòa carbon|The city hopes to become carbon neutral by 2040.`
}},
{ id: "tech", icon: "💻", color: "#4a67d8", title: "Technology & media", vi: "Công nghệ và truyền thông", levels: {
A1: `phone|n|điện thoại|My phone is on the table.
computer|n|máy tính|He works on a computer all day.
email|n|thư điện tử|I send an email to my teacher.
message|n|tin nhắn|She reads a message from her mother.
photo|n|ảnh|Take a photo of the beautiful lake.
music|n|âm nhạc|We listen to music in the car.
film|n|phim (US: movie)|Do you want to watch a film tonight?
internet|n|mạng internet|I use the internet every day.
video|n|video|I watch a video on my phone.
text|n, v|tin nhắn; nhắn tin|I send a text to my friend.`,
A2: `website|n|trang web|The school website shows all the class times.
app|n|ứng dụng|I use an app to learn English every day.
password|n|mật khẩu|Please do not tell anyone your password.
download|v|tải xuống|Can you download the photos from the trip?
screen|n|màn hình|The screen of my phone is broken.
keyboard|n|bàn phím|Her keyboard has a key that does not work.
online|adj, adv|trực tuyến|Nam buys his books online because it is cheaper.
news|n|tin tức|Did you watch the news this morning?
click|v|nhấp chuột|Click the button to start.
wifi|n|mạng wifi|Is there free wifi in this cafe?
camera|n|máy ảnh, camera|My phone has a very good camera.
video call|phr|cuộc gọi video|We had a video call with our grandparents.
link|n|đường dẫn, liên kết|Please send me the link to the website.
chat|v, n|trò chuyện (trực tuyến)|We chat online every evening.`,
B1: `device|n|thiết bị|Turn off every electronic device before the plane takes off.
software|n|phần mềm|The company installed new software on all the office computers.
upload|v|tải lên|Minh will upload the holiday video to the website tonight.
update|v, n|cập nhật|Please update the app before you travel.
social media|n|mạng xã hội|Many teenagers spend hours on social media after school.
search|v|tìm kiếm|Lan used the internet to search for cheap flights to Hanoi.
charge|v|sạc (pin)|Where can I charge my phone? The battery is almost empty.
battery|n|pin|The battery in my laptop lasts about six hours.
log in|phr|đăng nhập|You have to log in with your username and password.
log out|phr|đăng xuất|Remember to log out when you use a public computer.
install|v|cài đặt|You need to install the app before you can use it.
delete|v|xóa|Please delete the old photos from your phone.
screenshot|n|ảnh chụp màn hình|She sent me a screenshot of the message.
network|n|mạng lưới|The office network is down again.
profile|n|hồ sơ cá nhân|Add a photo to your online profile.
memory|n|bộ nhớ|My phone has no memory left for new photos.`,
B2: `data|n|dữ liệu|The app collects data about how people use it.
privacy|n|quyền riêng tư|Many users worry about their privacy when they share photos online.
artificial intelligence|n|trí tuệ nhân tạo|Artificial intelligence can now translate speech almost instantly.
backup|n|bản sao lưu|Always make a backup of your files before you reset the laptop.
browser|n|trình duyệt|Try opening the page in a different browser if it does not load.
reliable source|n|nguồn đáng tin cậy|Before you share the story, check that it comes from a reliable source.
cybersecurity|n|an ninh mạng|Hospitals must invest in cybersecurity to protect patient records.
hacker|n|tin tặc|A hacker stole thousands of passwords from the company.
cloud storage|phr|lưu trữ đám mây|I keep my documents in cloud storage so I can open them anywhere.
streaming|n|phát trực tuyến|Streaming has changed how people watch films.
bandwidth|n|băng thông|Video calls need a lot of bandwidth.
malware|n|phần mềm độc hại|The email contained malware that damaged the computer.`,
C1: `algorithm|n|thuật toán|The video app uses an algorithm to decide which clips you see next.
misinformation|n|thông tin sai lệch|Misinformation about health can spread quickly on social networks.
encryption|n|mã hóa|Encryption protects your messages so strangers cannot read them.
authentication|n|sự xác thực|Two-step authentication makes your account much harder to hack.
surveillance|n|sự giám sát|Critics argue that mass surveillance threatens personal freedom.
proliferation|n|sự gia tăng nhanh chóng|The proliferation of fake accounts makes online fraud harder to stop.
digital literacy|phr|năng lực số|Schools should teach digital literacy as early as possible.
disruptive|adj|mang tính đột phá, gây xáo trộn|Disruptive technologies can transform whole industries almost overnight.
anonymity|n|sự ẩn danh|Online anonymity can encourage both honest debate and abuse.`
}},
{ id: "society", icon: "🏛️", color: "#8a6a4c", title: "Society & opinions", vi: "Xã hội và quan điểm", levels: {
B1: `opinion|n|ý kiến|In my opinion, ...
agree|v|đồng ý|Do you agree with the new school timetable?
disagree|v|không đồng ý|I disagree with you, but I respect your opinion.
solution|n|giải pháp|We need to find a solution to the parking shortage.
community|n|cộng đồng|The local community organised a clean-up day for the park.
government|n|chính phủ|The government plans to build more schools in rural areas.
law|n|luật|In many countries, the law says you must wear a seat belt.
rule|n|quy định|Students must follow the rule about not using phones in class.
public|adj|công cộng|Public transport is cheaper than owning a car.
crime|n|tội phạm|The police say that crime has fallen in this neighbourhood.
citizen|n|công dân|Every citizen has the right to vote.
vote|v, n|bỏ phiếu; lá phiếu|People over eighteen can vote in this country.
election|n|cuộc bầu cử|The election will take place in May.
tradition|n|truyền thống|Eating together is an important family tradition.
protest|n, v|cuộc biểu tình; phản đối|Thousands of people joined the protest against the new law.`,
B2: `issue|n|vấn đề (cần bàn)|Housing costs are an important issue for young people.
policy|n|chính sách|The company changed its policy on working from home.
inequality|n|sự bất bình đẳng|Many people believe education can reduce inequality between rich and poor families.
poverty|n|sự nghèo đói|Charities work to help families escape poverty through training and jobs.
access|n|sự tiếp cận|access to healthcare
benefit|n|lợi ích|One benefit of cycling to work is that it keeps you fit.
drawback|n|mặt hạn chế|The main drawback of this flat is the noise from the street.
controversial|adj|gây tranh cãi|The plan to close the old library was highly controversial.
on the other hand|phr|mặt khác|Living in the city is exciting; on the other hand, it is expensive.
it depends|phr|còn tùy|Is online learning better than classroom learning? Well, it depends.
democracy|n|nền dân chủ|Free speech is essential to democracy.
discrimination|n|sự phân biệt đối xử|Discrimination at work is illegal in many countries.
equality|n|sự bình đẳng|The campaign aims to promote equality between men and women.
immigration|n|sự nhập cư|Immigration has changed the culture of many big cities.
tolerance|n|sự khoan dung|Tolerance of different views is important in a diverse society.
refugee|n|người tị nạn|The charity helps every refugee find a home and work.`,
C1: `consensus|n|sự đồng thuận|After a long discussion, the committee reached a consensus on the budget.
advocate|v|ủng hộ, bênh vực|Many doctors advocate a shorter working week to improve public health.
stigma|n|sự kỳ thị|mental health stigma
disparity|n|sự chênh lệch|There is a large disparity in income between city and rural workers.
welfare|n|phúc lợi|The charity works to improve the welfare of elderly people living alone.
ethical|adj|thuộc về đạo đức|Is it ethical for a company to test its products on animals?
dilemma|n|tình thế tiến thoái lưỡng nan|Lan faced a dilemma: take the better job or stay close to her family.
unprecedented|adj|chưa từng có|The city saw an unprecedented number of visitors during the festival.
inclusive|adj|bao gồm, hòa nhập|The hospital aims to provide inclusive care for patients of all backgrounds.
marginalised|adj|bị gạt ra bên lề|Marginalised groups often lack access to basic health services.
polarisation|n|sự phân cực|Social media may increase political polarisation.
accountability|n|trách nhiệm giải trình|Citizens demand greater accountability from public officials.
legislation|n|luật pháp, hệ thống luật|New legislation will ban smoking in all public places.
discourse|n|diễn ngôn, cuộc thảo luận|Public discourse on health has become more informed in recent years.
cohesion|n|sự gắn kết|Shared activities help to build social cohesion in a neighbourhood.
demographic|n|nhóm dân số|Young adults are the key demographic for this health campaign.`
}},
{ id: "verbs", icon: "🔗", color: "#0f8c8c", title: "Phrasal verbs", vi: "Cụm động từ", levels: {
A2: `get up|phr|thức dậy|I get up at six o'clock every morning.
put on|phr|mặc vào|Put on your coat.
take off|phr|cởi ra; (máy bay) cất cánh|Please take off your shoes before you enter the house.
turn on|phr|bật|Can you turn on the light? It is dark in here.
turn off|phr|tắt|Please turn off the light before you go to bed.
look for|phr|tìm kiếm|I'm looking for the pharmacy.
sit down|phr|ngồi xuống|Come in and sit down on the sofa.
come back|phr|quay lại|Wait here, Nam. I will come back in five minutes.
go out|phr|ra ngoài|Do you want to go out for dinner tonight?
come in|phr|đi vào|Please come in and sit down.
hurry up|phr|nhanh lên|Hurry up, or we will miss the bus!
stand up|phr|đứng dậy|Please stand up when the teacher comes in.
give back|phr|trả lại|Please give back my pen.`,
B1: `find out|phr|tìm ra, phát hiện|Lan wants to find out why the train is late.
give up|phr|từ bỏ|He gave up smoking.
look after|phr|chăm sóc|Can you look after my cat while I am on holiday?
pick up|phr|nhặt lên; đón|Please pick up your toys from the floor.
carry on|phr|tiếp tục|Please carry on working while I answer the phone.
fill in|phr|điền (mẫu đơn)|Please fill in this form.
set up|phr|thiết lập|Minh will set up the new printer in the office tomorrow.
turn up|phr|xuất hiện, đến|Anna was worried when her friend did not turn up for the meeting.
calm down|phr|bình tĩnh lại|Take a deep breath and calm down, everything is fine.
work out|phr|tập thể dục; tìm ra lời giải|I work out at the gym three times a week.
break down|phr|hỏng, suy sụp|I hope the car does not break down on the way to work.
check out|phr|trả phòng; kiểm tra|We must check out of the hotel by ten.
come up with|phr|nghĩ ra|Can you come up with a good idea for the project?
cheer up|phr|vui lên|Cheer up, things will get better soon.
end up|phr|rốt cuộc, cuối cùng là|We took a wrong turn and will end up in a different town.
figure out|phr|tìm ra, hiểu ra|I cannot figure out how this machine works.
hold on|phr|chờ một chút, giữ chặt|Hold on, I will be right back.
show up|phr|xuất hiện, có mặt|He did not show up for the meeting.
go on|phr|tiếp tục; xảy ra|Please go on with your story.
get along|phr|hòa thuận|I get along well with my new colleagues.`,
B2: `come down with|phr|bị (bệnh nhẹ)|I've come down with a cold.
pass out|phr|ngất|He passed out in the heat.
throw up|phr|nôn|The child felt sick and had to throw up after the long car ride.
get over|phr|vượt qua, khỏi (bệnh)|It took Nam two weeks to get over his bad cold.
cut down on|phr|giảm bớt|Cut down on salt.
put off|phr|trì hoãn|Don't put off your homework until the last minute.
break out|phr|bùng phát|A fire can break out quickly in a dry forest.
wear off|phr|hết tác dụng dần|The anaesthetic will wear off.
come round|phr|tỉnh lại|The patient began to come round a few minutes after the operation.
back up|phr|ủng hộ; sao lưu|Her test results back up the doctor's diagnosis.
call off|phr|hủy bỏ|They had to call off the match because of the heavy rain.
carry out|phr|thực hiện, tiến hành|Nurses carry out many checks on each patient every day.
deal with|phr|giải quyết, xử lý|Doctors must deal with stressful situations every day.
drop out|phr|bỏ học, rút lui|Some students drop out of university after one year.
look into|phr|điều tra, xem xét|The committee will look into the complaint.
turn down|phr|từ chối; vặn nhỏ|She had to turn down the job offer.
put up with|phr|chịu đựng|I cannot put up with the noise any longer.`,
C1: `flare up|phr|bùng phát lại (triệu chứng)|My eczema flares up in winter.
bring on|phr|gây ra, khởi phát|Stress can bring on a migraine.
rule out|phr|loại trừ|We need to rule out a fracture.
fend off|phr|chống đỡ|The goalkeeper managed to fend off every attack in the final minutes.
account for|phr|giải thích; chiếm (tỷ lệ)|Poor diet may account for part of the increase in diabetes.
bring about|phr|gây ra, dẫn đến|New technology can bring about rapid social change.
phase out|phr|loại bỏ dần|The clinic plans to phase out paper records over two years.
single out|phr|chọn ra, nhắm riêng vào|The report did not single out any one person as the cause of errors.
step down|phr|từ chức|The director will step down at the end of the year.
set out|phr|trình bày; bắt đầu (mục tiêu)|The guidelines set out clearly what staff must do in an emergency.
live up to|phr|đáp ứng được (kỳ vọng)|The new treatment did not live up to expectations.
tie in with|phr|phù hợp, ăn khớp với|These results tie in with earlier findings on sleep and memory.`
}},
{ id: "academic", icon: "🎓", color: "#5b4fc4", title: "Academic English", vi: "Tiếng Anh học thuật", levels: {
B2: `analyse|v|phân tích|Students must analyse the results of their experiment carefully.
approach|n|cách tiếp cận|Our teacher uses a new approach to explain grammar.
evidence|n|bằng chứng|The police need more evidence before they can arrest anyone.
method|n|phương pháp|Which method did you use to solve this maths problem?
research|n|nghiên cứu|Her research on sleep was published in a famous journal.
factor|n|yếu tố|Stress is an important factor in many health problems.
conclude|v|kết luận|After reading the report, we conclude that the plan will work.
indicate|v|cho thấy|The survey results indicate that most people prefer online shopping.
assess|v|đánh giá|Teachers assess students' progress through tests and class projects.
concept|n|khái niệm|The concept of time is hard for young children to understand.
define|v|định nghĩa|Scientists define health as more than the absence of disease.
interpret|v|diễn giải|Doctors must interpret the test results carefully.
previous|adj|trước đó|Previous research has shown similar results.
participant|n|người tham gia (nghiên cứu)|Each participant answered a short questionnaire.
theory|n|lý thuyết|The theory explains why some people sleep badly.
findings|n|những phát hiện|The findings of the study were published last month.`,
C1: `hypothesis|n|giả thuyết|The scientist tested her hypothesis that plants grow faster with more light.
variable|n|biến số|In this experiment, temperature is the only variable we change.
correlation|n|mối tương quan|The study found a strong correlation between exercise and good sleep.
bias|n|sai lệch, thiên kiến|A good survey should not show any bias toward one group of people.
sample|n|mẫu (nghiên cứu)|The researchers asked a sample of five hundred adults about their diet.
subsequent|adj|tiếp theo sau|The first test was easy, but subsequent tests became much harder.
comprehensive|adj|toàn diện|The doctor gave Anna a comprehensive medical check-up covering every part of her health.
derive|v|bắt nguồn; rút ra|Many English words derive from Latin.
underlying|adj|tiềm ẩn, cơ bản|the underlying cause
implication|n|hàm ý, hệ quả|What is the main implication of these findings for schools?
robust|adj|vững chắc (bằng chứng)|The team needs more robust evidence before the drug can be approved.
feasible|adj|khả thi|Is it feasible to finish the project in just two weeks?
empirical|adj|thực nghiệm|The theory needs empirical support from real experiments, not just ideas.
synthesise|v|tổng hợp|In her essay, Lan must synthesise ideas from five different articles.
paradigm|n|mô hình, hệ hình|The discovery caused a paradigm shift in how doctors think about stress.
methodology|n|phương pháp luận|The methodology of the study was criticised by some experts.
mechanism|n|cơ chế|Researchers are studying the mechanism by which the drug works.
framework|n|khung, khuôn khổ|The study provides a useful framework for understanding stress.
validity|n|tính hợp lệ, giá trị|The validity of the test was questioned by several experts.
correlate|v|tương quan|Hours of sleep correlate with test performance.
theoretical|adj|thuộc lý thuyết|The study is mainly theoretical and has no practical results yet.`
}},
{ id: "discourse", icon: "🧩", color: "#b0582b", title: "Linking & discourse", vi: "Từ nối và diễn ngôn", levels: {
A2: `and|conj|và|Anna bought bread and milk at the market.
but|conj|nhưng|I like tea, but my sister prefers coffee.
because|conj|vì|Minh stayed home because he was ill.
so|conj|nên|It was raining, so we took a taxi.
then|adv|sau đó|First wash your hands, then sit down to eat.
also|adv|cũng|Lan speaks English and she also speaks French.
after that|phr|sau đó|We had lunch, and after that we went for a walk.
or|conj|hoặc|Do you want tea or coffee?`,
B1: `however|adv|tuy nhiên|The hotel was cheap. However, the rooms were very dirty.
although|conj|mặc dù|Although it was cold, we went swimming in the sea.
for example|phr|ví dụ|I enjoy outdoor sports, for example, running and cycling.
first of all|phr|trước hết|First of all, let me thank everyone for coming today.
finally|adv|cuối cùng|After three hours of waiting, the bus finally arrived.
in addition|phr|ngoài ra|The job pays well. In addition, it offers free lunch every day.
instead|adv|thay vào đó|The cinema was full, so we went for a walk instead.
as a result|phr|kết quả là|Nam studied hard all year. As a result, he passed every exam.
in fact|phr|thực tế là|I thought it was easy, but in fact it was very hard.
at the same time|phr|đồng thời|She was happy and sad at the same time.
in my opinion|phr|theo ý kiến của tôi|In my opinion, the film was too long.
besides|adv|hơn nữa, ngoài ra|I am too tired to go out, and besides, it is raining.
otherwise|adv|nếu không thì|Take your medicine, otherwise you will not get better.
in short|phr|tóm lại|In short, the plan did not work.`,
B2: `therefore|adv|vì vậy|The roads were closed by snow, therefore the meeting was cancelled.
whereas|conj|trong khi (đối lập)|Anna loves big cities, whereas her brother prefers the countryside.
despite|prep|mặc dù (+ danh từ)|Despite the heavy rain, the match started on time.
in contrast|phr|ngược lại|Summers here are hot. In contrast, winters are mild and wet.
furthermore|adv|hơn nữa|The flat is close to work. Furthermore, the rent is very cheap.
overall|adv|nhìn chung|There were a few problems, but overall the trip was a success.
to sum up|phr|tóm lại|To sum up, the new schedule saves time and reduces stress.
moreover|adv|hơn nữa|The plan is cheap and moreover it is easy to carry out.
nonetheless|adv|tuy nhiên, dù vậy|The test was hard, but she passed it nonetheless.
as far as I am concerned|phr|theo tôi thì|As far as I am concerned, the decision is final.
in other words|phr|nói cách khác|He is bilingual, in other words he speaks two languages fluently.
regardless of|phr|bất kể|Everyone gets treatment regardless of their income.
on the whole|phr|nhìn chung|On the whole, the trip was a success.`,
C1: `nevertheless|adv|dù vậy|The task was risky; nevertheless, the team decided to continue.
consequently|adv|do đó|Sales fell sharply last year; consequently, the company closed two shops.
notwithstanding|prep|bất chấp|Notwithstanding the bad weather, thousands of people came to the festival.
albeit|conj|mặc dù (trang trọng)|She finished the marathon, albeit more slowly than she had hoped.
in light of|phr|xét đến|In light of the new evidence, the committee changed its decision.
by the same token|phr|tương tự như vậy|Fast food is convenient; by the same token, it can harm your health.
hence|adv|do đó|The tests were incomplete, and hence the results are unreliable.
thereby|adv|nhờ đó, qua đó|Regular exercise lowers blood pressure, thereby reducing the risk of stroke.
whereby|adv|theo đó (cách thức)|The hospital introduced a system whereby patients book appointments online.
conversely|adv|ngược lại|Some drugs raise blood pressure, while others, conversely, lower it.
in view of|phr|xét đến, do|In view of the new evidence, the case was reopened.
with regard to|phr|về vấn đề, liên quan đến|With regard to your question, the answer is not yet clear.
that said|phr|tuy vậy|The results are promising; that said, more research is needed.
as opposed to|phr|trái với, thay vì|The study compared home care as opposed to hospital care.`
}},
{ id: "idioms", icon: "💡", color: "#d0691f", title: "Collocations & idioms", vi: "Kết hợp từ và thành ngữ", levels: {
B1: `make a mistake|phr|mắc lỗi|Everyone can make a mistake when they are learning a language.
take a break|phr|nghỉ giải lao|You look tired, so why don't you take a break?
make a decision|phr|đưa ra quyết định|It is hard to make a decision when you have so many choices.
pay attention|phr|chú ý|Please pay attention when the teacher is speaking.
keep in touch|phr|giữ liên lạc|Let's keep in touch after you move to Hanoi.
under the weather|phr|hơi mệt, không khỏe|I'm feeling a bit under the weather.
make an effort|phr|nỗ lực|You must make an effort to speak English every day.
have a look|phr|xem qua|Let me have a look at your homework.
take part in|phr|tham gia|Many students take part in the school sports day.
make progress|phr|tiến bộ|He wants to make progress in his English class.
get in touch|phr|liên lạc|Please get in touch if you have any questions.
make sure|phr|đảm bảo|Make sure you lock the door when you leave.`,
B2: `take something seriously|phr|coi trọng việc gì|You should take something seriously when a doctor gives you advice about your health.
raise awareness|phr|nâng cao nhận thức|The students made posters to raise awareness about plastic waste.
a piece of cake|phr|dễ như ăn bánh|The exam was a piece of cake for Lan.
on the mend|phr|đang hồi phục|She's on the mend now.
break the news|phr|báo tin (thường là tin xấu)|Nobody wanted to break the news to him that the trip was cancelled.
play it by ear|phr|tùy cơ ứng biến|We have no fixed plan for Saturday, so let's play it by ear.
once in a blue moon|phr|hiếm khi, năm thì mười họa|We only eat out once in a blue moon.
break the ice|phr|phá vỡ bầu không khí ngượng ngùng|A joke helped to break the ice at the start of the meeting.
get out of hand|phr|vượt khỏi tầm kiểm soát|Do not let the party get out of hand.
make ends meet|phr|xoay xở đủ sống|Many families struggle to make ends meet.
call it a day|phr|nghỉ, dừng làm việc hôm nay|We are all tired, so let us call it a day.`,
C1: `bear in mind|phr|ghi nhớ, lưu ý|Bear in mind that the shop closes early on Sundays.
at a loss|phr|bối rối, không biết làm gì|When the computer stopped working, Minh was at a loss.
a double-edged sword|phr|con dao hai lưỡi|Social media is a double-edged sword: it connects people but can also waste their time.
the tip of the iceberg|phr|phần nổi của tảng băng|The few complaints we heard were only the tip of the iceberg.
touch and go|phr|ngàn cân treo sợi tóc|It was touch and go for a while.
back to square one|phr|quay lại vạch xuất phát|The test failed, so the engineers were back to square one.
beat around the bush|phr|nói vòng vo|Please do not beat around the bush and tell me the problem.
bite the bullet|phr|cắn răng chịu đựng, làm điều khó chịu|I decided to bite the bullet and have the operation.
cut corners|phr|làm ẩu, làm tắt để tiết kiệm|Hospitals must never cut corners on patient safety.
read between the lines|phr|hiểu ý ngầm|If you read between the lines, the report is quite critical.
the last straw|phr|giọt nước tràn ly|Losing my keys again was the last straw.
a blessing in disguise|phr|trong cái rủi có cái may|Losing that job was a blessing in disguise for him.
face the music|phr|đối mặt với hậu quả|He lied to his boss and now has to face the music.
come to terms with|phr|chấp nhận, thích nghi với|It took her a long time to come to terms with the diagnosis.`
}},
{ id: "basics", icon: "🔤", color: "#6C8EBF", title: "Basics", vi: "Từ cơ bản", levels: {
A1: `eleven|n|mười một|I have eleven books.
twelve|n|mười hai|There are twelve eggs in the box.
twenty|n|hai mươi|My brother is twenty years old.
thirty|n|ba mươi|The class starts in thirty minutes.
hundred|n|một trăm|There are a hundred students here.
thousand|n|một nghìn|The bike costs one thousand euros.
red|adj|đỏ|She has a red bag.
blue|adj|xanh dương|The sea is blue today.
green|adj|xanh lá cây|I like green tea.
yellow|adj|vàng|He wears a yellow shirt.
black|adj|đen|My cat is black.
white|adj|trắng|The walls are white.
orange|adj|màu cam|She has an orange hat.
pink|adj|hồng|The baby has pink shoes.
brown|adj|nâu|I have brown eyes.
grey|adj|xám (US: gray)|The sky is grey today.
circle|n|hình tròn|Draw a circle on the paper.
square|n|hình vuông|A square has four sides.
up|adv|lên, ở trên|Please stand up.
down|adv|xuống, ở dưới|Sit down, please.
behind|prep|phía sau|The cat is behind the door.
between|prep|ở giữa|The bank is between the shop and the park.
next to|prep|bên cạnh|I sit next to my friend.
in front of|prep|phía trước|The car is in front of the house.
under|prep|dưới|The cat is under the table.
what|pron|cái gì|What is your name?
who|pron|ai|Who is that man?
where|adv|ở đâu|Where do you live?
when|adv|khi nào|When is your birthday?
why|adv|tại sao|Why are you sad?
how|adv|như thế nào, bằng cách nào|How are you?
which|det|nào, cái nào|Which bus goes to the park?
hello|excl|xin chào|Hello, my name is Anna.
goodbye|excl|tạm biệt|Goodbye, see you tomorrow.
please|adv|làm ơn, xin vui lòng|Please open the window.
thank you|phr|cảm ơn|Thank you for your help.
excuse me|phr|xin lỗi (để gây chú ý hoặc xin đi qua)|Excuse me, where is the station?
yes|excl|vâng, có|Yes, I like coffee.
no|excl|không|No, thank you.`,
A2: `north|n, adv|phía bắc|The city is in the north of the country.
south|n, adv|phía nam|Birds fly south in winter.
east|n, adv|phía đông|The sun rises in the east.
west|n, adv|phía tây|We drove west for two hours.
inside|prep, adv|bên trong|It is cold, so let us go inside.
outside|prep, adv|bên ngoài|The children are playing outside.
beside|prep|bên cạnh|She sat beside her grandmother.
across|prep|băng qua, bên kia|The shop is across the street.
million|n|một triệu|About a million people live in this city.
purple|adj|màu tím|She wore a purple dress to the party.
triangle|n|hình tam giác|A triangle has three sides.
whose|det|của ai|Whose coat is this?`
}},
{ id: "clothes", icon: "👕", color: "#e0568a", title: "Clothes", vi: "Quần áo", levels: {
A1: `clothes|n|quần áo|My clothes are in the wardrobe.
dress|n|váy liền, đầm|She wears a blue dress.
skirt|n|chân váy|Her skirt is very short.
trousers|n|quần dài (US: pants)|These trousers are too long.
jeans|n|quần jean|He wears jeans every day.
t-shirt|n|áo thun|I like your white t-shirt.
jacket|n|áo khoác ngắn|Take your jacket, it is cold.
coat|n|áo khoác dài|She put on her warm coat.
jumper|n|áo len chui đầu (US: sweater)|My grandmother knitted me a jumper.
hat|n|mũ|He wears a hat in summer.
cap|n|mũ lưỡi trai|The boy has a red cap.
socks|n|tất, vớ|I need a new pair of socks.
boots|n|ủng, bốt|She wears boots in the rain.
sandals|n|dép xăng đan|I wear sandals on the beach.
shorts|n|quần short|He plays football in shorts.
pocket|n|túi áo, túi quần|My phone is in my pocket.
scarf|n|khăn quàng cổ|Wear a scarf in winter.
gloves|n|găng tay|My gloves are very warm.
uniform|n|đồng phục|Nurses wear a blue uniform.`,
A2: `shoelace|n|dây giày|I tie my shoelace before I run.
swimsuit|n|đồ bơi|I forgot my swimsuit.
suit|n|bộ com-lê|He wore a dark suit to the interview.
tie|n|cà vạt|He is wearing a green tie.
belt|n|thắt lưng|This belt is too tight.
blouse|n|áo sơ mi nữ|She wore a white blouse.
sweater|n|áo len|Put on a sweater, it is cold.
pyjamas|n|đồ ngủ (US: pajamas)|The children are in their pyjamas.
underwear|n|đồ lót|Pack some underwear for the trip.
trainers|n|giày thể thao (US: sneakers)|I bought new trainers for running.
slippers|n|dép đi trong nhà|He wore slippers at home.
umbrella|n|ô, dù|Take an umbrella, it may rain.
sleeve|n|tay áo|The sleeve of my coat is torn.
button|n|cúc áo|A button fell off my shirt.
zip|n|khoá kéo (US: zipper)|The zip on my jacket is broken.
cotton|n|vải cotton|This shirt is made of cotton.
wool|n|len|Wool keeps you warm in winter.
fit|v|vừa người|These jeans do not fit me.
raincoat|n|áo mưa|Wear a raincoat today.
tights|n|quần tất|She wore black tights.
glasses|n|kính mắt|He wears glasses to read.`,
B1: `bra|n|áo ngực|She bought a new bra.
leather|n|da thuộc|Her bag is made of leather.
silk|n|lụa|The scarf is made of pure silk.
fashion|n|thời trang|She is interested in fashion.
stylish|adj|phong cách, thời thượng|He looks stylish in that jacket.
casual|adj|giản dị, thường ngày|I wear casual clothes at weekends.
formal|adj|trang trọng|You need formal clothes for the ceremony.
tight|adj|chật, bó|These shoes are too tight.
loose|adj|rộng, lỏng|He wore a loose shirt in the heat.
dress up|phr|ăn mặc chỉnh tề|We had to dress up for the wedding.`,
B2: `tailor|n|thợ may|The tailor made my suit in a week.
fabric|n|vải|The fabric is soft and light.
waterproof|adj|chống thấm nước|I need a waterproof jacket for the hike.
accessory|n|phụ kiện|A scarf is a simple accessory.
alter|v|sửa (quần áo)|Can you alter these trousers for me?`
}},
{ id: "transport", icon: "🚌", color: "#2f80c0", title: "Transport & travel", vi: "Giao thông và đi lại", levels: {
A1: `bus stop|n|trạm xe buýt|I wait at the bus stop.
taxi|n|xe taxi|We took a taxi to the hotel.
bicycle|n|xe đạp|She rides a bicycle to school.
motorbike|n|xe máy|My uncle has a motorbike.
plane|n|máy bay|The plane is very big.
boat|n|thuyền|We crossed the river by boat.
road|n|con đường|The road is very busy.
traffic light|n|đèn giao thông|Stop at the traffic light.
drive|v|lái xe|My father can drive a bus.
ride|v|cưỡi, đi (xe đạp, xe máy)|I ride my bike to work.
fly|v|bay|We fly to Hanoi tomorrow.
get on|phr|lên xe|Get on the bus at the next stop.
get off|phr|xuống xe|Get off the train at Hue.
parking|n|chỗ đậu xe, việc đỗ xe|There is free parking here.
driver|n|tài xế|The bus driver is friendly.`,
A2: `car park|n|bãi đỗ xe|The car park is behind the shop.
baggage|n|hành lý (không đếm được)|Please watch your baggage at the station.
subway|n|tàu điện ngầm|I take the subway to work.
underground|n|tàu điện ngầm (UK)|The underground is fast in this city.
tram|n|xe điện (chạy trên đường ray)|The tram stops near my house.
lorry|n|xe tải (US: truck)|A big lorry blocked the road.
van|n|xe tải nhỏ, xe van|The van delivered our new sofa.
ferry|n|phà|The ferry leaves every hour.
platform|n|sân ga|The train leaves from platform two.
return|adj, n|khứ hồi (vé)|A return ticket is cheaper than two singles.
timetable|n|lịch trình, thời gian biểu|Check the bus timetable before you go.
seat|n|ghế ngồi|Is this seat free?
pilot|n|phi công|The pilot welcomed us on board.
petrol|n|xăng (US: gas)|We stopped to buy petrol.
speed|n|tốc độ|The car was moving at high speed.
helmet|n|mũ bảo hiểm|You must wear a helmet on a motorbike.
lane|n|làn đường|Stay in the left lane.
pavement|n|vỉa hè (US: sidewalk)|Please walk on the pavement.
airline|n|hãng hàng không|Which airline are you flying with?
suitcase|n|va li|My suitcase is very heavy.
traveller|n|du khách (US: traveler)|Every traveller needs a passport.`,
B1: `vehicle|n|phương tiện|The vehicle stopped at the red light.
rush hour|n|giờ cao điểm|Avoid the metro during rush hour.
motorway|n|đường cao tốc (US: freeway)|We drove along the motorway for two hours.
roundabout|n|bùng binh|Take the second exit at the roundabout.
junction|n|giao lộ|Turn right at the next junction.
speed limit|n|giới hạn tốc độ|Do not go over the speed limit.
driving licence|n|bằng lái xe (US: driver's license)|He passed his driving test and got his driving licence.
fuel|n|nhiên liệu|The car uses very little fuel.
seat belt|n|dây an toàn|Always fasten your seat belt.
puncture|n|lốp bị thủng|I got a puncture on my way home.
breakdown|n|sự hỏng xe|We had a breakdown on the motorway.
carriage|n|toa tàu|Our seats are in the last carriage.
fare|n|giá vé|The bus fare is very cheap.
season ticket|n|vé tháng|She bought a season ticket for the train.
gate|n|cổng (ở sân bay)|Your flight leaves from gate twelve.
runway|n|đường băng|The plane waited on the runway.
traffic jam|n|tắc đường|We were stuck in a traffic jam for an hour.
cycle lane|n|làn đường dành cho xe đạp|There is a new cycle lane on our street.`,
B2: `carpool|v, n|đi chung xe|My colleagues and I carpool to work.
hitchhike|v|đi nhờ xe dọc đường|They plan to hitchhike across the country.
pedestrian|n|người đi bộ|A pedestrian crossed the road carefully.
cyclist|n|người đi xe đạp|The cyclist wore a bright helmet.
overtake|v|vượt xe|Do not overtake on a bend.
detour|n|đường vòng|We took a detour because of road works.
road works|n|công trường sửa đường|Road works caused long delays this morning.
layover|n|thời gian quá cảnh|I had a three-hour layover in Singapore.
bypass|n|đường tránh|The new bypass keeps trucks out of the town.`,
C1: `gridlock|n|tắc nghẽn hoàn toàn|Gridlock paralysed the city centre.`
}},
{ id: "leisure", icon: "🎸", color: "#e8590c", title: "Leisure & hobbies", vi: "Giải trí và sở thích", levels: {
A1: `hobby|n|sở thích|My hobby is reading.
sport|n|thể thao|Football is my favourite sport.
football|n|bóng đá|He plays football on Sundays.
swim|v|bơi|I can swim very well.
dance|v, n|nhảy; điệu nhảy|They dance at the party.
sing|v|hát|She likes to sing in the shower.
song|n|bài hát|This is my favourite song.
guitar|n|đàn ghi-ta|My brother plays the guitar.
piano|n|đàn piano|She plays the piano every day.
movie|n|phim (US)|Let us watch a movie tonight.
holiday|n|kỳ nghỉ|We go on holiday in July.
party|n|bữa tiệc|I have a party on Saturday.
ball|n|quả bóng|The boy kicks the ball.
team|n|đội|Our team wins every week.
picnic|n|buổi dã ngoại|We have a picnic in the park.
paint|v|vẽ, sơn|She likes to paint pictures of flowers.
draw|v|vẽ (bằng bút)|I like to draw animals.`,
A2: `cycling|n|môn đạp xe|Cycling is good for your health.
tennis|n|quần vợt|My father plays tennis on Sundays.
basketball|n|bóng rổ|Basketball is popular at our school.
gym|n|phòng tập thể dục|I go to the gym after work.
jogging|n|chạy bộ|He goes jogging every morning.
concert|n|buổi hòa nhạc|We bought tickets for the concert.
band|n|ban nhạc|My favourite band is coming to town.
drums|n|bộ trống|He plays the drums in a band.
camping|n|cắm trại|We go camping every summer.
fishing|n|câu cá|My grandfather loves fishing at the lake.
board game|phr|trò chơi bàn cờ|We played a board game on a rainy day.
cartoon|n|phim hoạt hình|The children are watching a cartoon.
comedy|n|phim hài|I want to see a comedy tonight.
match|n|trận đấu|The match starts at three o'clock.
hiking|n|đi bộ đường dài|Hiking in the mountains is my favourite hobby.
photography|n|nhiếp ảnh|She studies photography at college.
nightclub|n|hộp đêm|They went to a nightclub on Saturday night.
festival|n|lễ hội|The music festival lasts three days.
skiing|n|môn trượt tuyết|We go skiing in the mountains every winter.
karaoke|n|karaoke|We sang at a karaoke bar on Saturday.`,
B1: `exhibition|n|buổi triển lãm|We visited an art exhibition in the city centre.
gallery|n|phòng trưng bày|The gallery is free on Sundays.
theatre|n|nhà hát|We saw a play at the theatre.
audience|n|khán giả|The audience clapped for a long time.
performance|n|buổi biểu diễn|The performance starts at eight.
drama|n|phim chính kịch, kịch|I prefer a serious drama to a comedy.
documentary|n|phim tài liệu|We watched a documentary about whales.
series|n|loạt phim truyền hình|I am watching a new series on TV.
episode|n|tập phim|The first episode of the series is free.
championship|n|giải vô địch|Our team won the national championship.
tournament|n|giải đấu|She won a chess tournament last year.
coach|n|huấn luyện viên|The coach trained the team every day.
member|n|thành viên|She is a member of a tennis club.
gardening|n|làm vườn|Gardening helps me relax after work.
craft|n|nghề thủ công|She teaches a craft class for children on Saturdays.
backpacking|n|du lịch bụi|He spent a year backpacking across Asia.`,
B2: `amateur|n, adj|người nghiệp dư; nghiệp dư|He is an amateur photographer who sells a few pictures.
spectator|n|khán giả (thể thao)|Every spectator in the stadium stood up and clapped.
fixture|n|trận đấu theo lịch|The next fixture is against our local rivals.
blockbuster|n|phim bom tấn|The summer blockbuster made millions in a week.
soundtrack|n|nhạc phim|The soundtrack of the film is wonderful.
leisure activity|phr|hoạt động giải trí|Walking is a cheap and healthy leisure activity.`
}},
{ id: "school", icon: "🏫", color: "#2f9e44", title: "School & study", vi: "Trường học và học tập", levels: {
A1: `classroom|n|phòng học|The classroom is big and bright.
pencil|n|bút chì|Can I borrow your pencil?
rubber|n|cục tẩy (UK; US: eraser)|Use a rubber to remove the mistake.
ruler|n|thước kẻ|I draw a line with a ruler.
board|n|cái bảng|The teacher writes on the board.
notebook|n|vở ghi chép|I write words in my notebook.
maths|n|môn toán (UK; US: math)|I like maths.
science|n|môn khoa học|We do an experiment in science.
history|n|môn lịch sử|History is my favourite subject.
art|n|môn mỹ thuật|We paint in art class.
glue|n|keo dán|I use glue to stick the paper.
scissors|n|cái kéo|Be careful with the scissors.
classmate|n|bạn cùng lớp|My classmate sits next to me.
backpack|n|ba lô|Her backpack is full of books.
alphabet|n|bảng chữ cái|Say the alphabet from A to Z.
spelling|n|chính tả|My spelling is not good.
page|n|trang sách|Open your book at page ten.
letter|n|chữ cái|The first letter is B.
playtime|n|giờ chơi|The children love playtime.`,
A2: `crayon|n|bút sáp màu|The child has a red crayon.
pencil sharpener|phr|gọt bút chì|I need a pencil sharpener.
exercise book|phr|vở bài tập|Write it in your exercise book.
break|n|giờ giải lao|We eat lunch at break.
playground|n|sân chơi|The children run in the playground.
dictionary|n|từ điển|Use a dictionary to find the meaning.
calculator|n|máy tính bỏ túi|You can use a calculator in the maths test.
geography|n|môn địa lý|We study rivers in geography.
biology|n|môn sinh học|In biology we learn about plants.
chemistry|n|môn hóa học|The chemistry lab is on the second floor.
physics|n|môn vật lý|Physics is hard but interesting.
mark|n|điểm số|She got a good mark in the test.
spell|v|đánh vần|How do you spell your name?
grade|n|điểm, lớp (US)|He always gets a good grade in science.
semester|n|học kỳ|The new semester starts in September.
pencil case|phr|hộp bút|My pencil case is on the desk.
term|n|học kỳ (UK)|The summer term ends in July.
essay|n|bài luận|I have to write an essay tonight.
project|n|dự án, bài tập nhóm|Our class project is about birds.
quiz|n|bài kiểm tra ngắn, câu đố|We have a quiz every Friday.`,
B1: `graduate|v|tốt nghiệp|He will graduate next year.`
}}
];


/* ===== file: content-library-exam.js ===== */
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


/* ===== file: content-library-med.js ===== */
/* ============================================================
   THƯ VIỆN TỪ VỰNG · Tiếng Anh y khoa cơ bản
   Lộ trình: Giải phẫu → Sinh lý → Bệnh học → Lâm sàng
   T1 = nền tảng, T2 = mở rộng.
   Mỗi dòng: thuật ngữ | từ loại | nghĩa | định nghĩa tiếng Anh đơn giản
   Nội dung phục vụ học ngôn ngữ, không phải tài liệu chuyên môn.
   ============================================================ */
const LIB_MED_GROUPS = [
  ["textbook", "Giáo trình M1–M6", "Textbook units", "📘"],
  ["anatomy", "Giải phẫu", "Anatomy", "🦴"],
  ["physiology", "Sinh lý", "Physiology", "⚙️"],
  ["pathology", "Bệnh học", "Pathology", "🔬"],
  ["clinical", "Lâm sàng", "Clinical practice", "🩺"]
];
const LIB_MED = [
/* ---------- GIÁO TRÌNH Y KHOA CƠ BẢN (M1–M6) ---------- */
{ id: "bk-molecular-cell", group: "textbook", icon: "🧬", color: "#7b4bb7", title: "Molecular Biology and the Cell", vi: "Sinh học phân tử và tế bào", levels: {
T1: `molecular biology|n|sinh học phân tử|the science of how living things work at the level of tiny chemical units
biochemistry|n|hóa sinh|the study of chemical processes in living things
genetics|n|di truyền học|the study of how features pass from parents to children
deoxyribonucleic acid|n|axit deoxyribonucleic (DNA)|the molecule that carries genetic information in living things
ribonucleic acid|n|axit ribonucleic (RNA)|a molecule that helps to copy genetic information and make proteins
gene|n|gen|a unit of inheritance that carries instructions for one feature
inheritance|n|sự di truyền|the passing of features from parents to children
genetic disorder|n|rối loạn di truyền|an illness caused by a fault in a person's genes
chromosome|n|nhiễm sắc thể|a long thread of DNA that carries many genes
prokaryote|n|sinh vật nhân sơ|a simple living thing whose cell has no nucleus
eukaryote|n|sinh vật nhân thực|a living thing whose cells have a nucleus and other compartments
organelle|n|bào quan|a small part inside a cell with its own job
nucleus|n|nhân tế bào|the part of a cell that holds the DNA
cell membrane|n|màng tế bào|the thin flexible layer that encloses the cytoplasm and controls what passes through
cell wall|n|thành tế bào|a rigid layer outside the membrane that gives a bacterium its shape
cytoplasm|n|tế bào chất|the jelly-like material inside a cell, outside the nucleus
mitochondrion|n|ty thể|an organelle that makes most of the cell's energy
ribosome|n|ribosome|a tiny structure that builds proteins
lysosome|n|lysosome (tiêu thể)|an organelle that breaks down large molecules with enzymes
adenosine triphosphate|n|adenosine triphosphate (ATP)|the chemical a cell uses as a ready source of energy
stimulus|n|kích thích|something that makes a living thing react
anabolism|n|đồng hóa|the building of complex molecules from simple ones
catabolism|n|dị hóa|the breaking down of complex molecules into simple ones
polymer|n|polyme|a long chain made of many small repeating units
biochemical test|n|xét nghiệm hóa sinh|a laboratory test that measures chemicals in body fluids
liver function test|n|xét nghiệm chức năng gan|a blood test that shows how well the organ that makes bile is working
kidney function test|n|xét nghiệm chức năng thận|a test of how well the organs that filter blood are working
regulate|v|điều hòa|to control something so that it works properly
respond|v|đáp ứng|to react to something
unicellular|adj|đơn bào|made of only one cell
multicellular|adj|đa bào|made of many cells working together
ingest|v|ăn vào, đưa vào cơ thể|to take food or drink into the body`,
T2: `population genetics|n|di truyền học quần thể|the study of how common different genes are in groups of people
molecular genetics|n|di truyền học phân tử|the study of how DNA is built, works and is copied
clinical genetics|n|di truyền học lâm sàng|the study and prevention of inherited illnesses in patients
protein biosynthesis|n|sinh tổng hợp protein|the way a cell builds large molecules from amino acids using genetic instructions
endoplasmic reticulum|n|lưới nội chất|a network of membranes in the cell where proteins and fats are made
Golgi complex|n|bộ máy Golgi|an organelle that sorts and packs proteins for delivery
vesicle|n|túi vận chuyển|a tiny bubble of membrane that carries substances inside a cell
peroxisome|n|peroxisome (thể peroxy)|an organelle that breaks down small molecules using oxygen
catalase|n|catalase|an enzyme that turns a harmful chemical into water and oxygen
hydrogen peroxide|n|hydro peroxit (H2O2)|an unstable chemical with the formula H2O2 that can damage cells
cytoskeleton|n|bộ khung tế bào|a network of fibres that gives a cell shape and moves things inside it
nucleoid|n|vùng nhân|the central area of a bacterium where its DNA lies
slime layer|n|lớp nhầy|a loose sticky coating that helps bacteria stick to surfaces
biofilm|n|màng sinh học|a thin community of bacteria stuck together on a surface
gram-positive|adj|gram dương|describing bacteria that have a thick wall
gram-negative|adj|gram âm|describing bacteria that have a thin wall
aerobic respiration|n|hô hấp hiếu khí|making energy from food with the help of oxygen
anaerobic|adj|kị khí|working without oxygen
oxidation|n|oxy hóa|a chemical change in which a substance combines with oxygen or loses electrons
heterotroph|n|sinh vật dị dưỡng|a living thing that must eat other organisms for food
genome|n|hệ gen (bộ gen)|the complete set of genetic material of a living thing
nucleotide|n|nucleotide|a basic building block of DNA or RNA
cell cycle|n|chu kỳ tế bào|the series of stages a cell passes through as it grows and divides
macromolecule|n|đại phân tử|a very large molecule such as a protein
detoxification|n|giải độc|removing harmful substances from the body or a cell
lipid|n|lipid (chất béo)|a fatty substance such as fat or oil
rough endoplasmic reticulum|n|lưới nội chất hạt|the part of the membrane network that has ribosomes on its surface
smooth endoplasmic reticulum|n|lưới nội chất trơn|the part of the membrane network without ribosomes that makes lipids and removes poisons
protist|n|sinh vật nguyên sinh|a simple living thing that is not an animal, a plant or a mushroom
desiccation|n|sự khô kiệt, mất nước|the process of drying out completely
-some|n|hậu tố -some (thể)|a word ending meaning a small body, often a tiny part inside a cell
uni-|n|tiền tố uni- (một)|a word part meaning one
karyo-|n|gốc từ karyo- (nhân)|a word part meaning the central structure that holds DNA in a cell`
}},
{ id: "bk-genes-tissues", group: "textbook", icon: "🧬", color: "#7b5ea7", title: "Genetic Mechanisms and Cells in Tissues", vi: "Cơ chế di truyền cơ bản và tế bào trong mô", levels: {
T1: `DNA|n|ADN (axit deoxyribonucleic)|the molecule in cells that stores genetic instructions
RNA|n|ARN (axit ribonucleic)|a single-stranded copy of genetic information used to make proteins
base pairing|n|sự bắt cặp bazơ|the matching of adenine with thymine and guanine with cytosine
hydrogen bond|n|liên kết hydro|a weak link between molecules that holds the two DNA strands together
double helix|n|chuỗi xoắn kép|the twisted ladder shape of two linked strands of DNA
template|n|khuôn mẫu|a strand used as a pattern for making a new matching strand
replication|n|sự sao chép (nhân đôi) ADN|the process of making an exact copy of a DNA molecule
transcription|n|sự phiên mã|the process of copying genetic information from DNA into RNA
mutation|n|đột biến|a lasting change in the order of the genetic code
mitosis|n|nguyên phân|cell division that gives two identical new cells
meiosis|n|giảm phân|cell division that makes sex cells with half the usual chromosomes
daughter cell|n|tế bào con|a new cell produced when a mother cell splits
tumor|n|khối u|an abnormal lump of cells that grows in the body
screening test|n|xét nghiệm sàng lọc|a check done on healthy people to find a disease early
chemotherapy|n|hóa trị|treatment that uses strong drugs to destroy abnormal cells
radiotherapy|n|xạ trị|treatment that uses beams of energy to destroy abnormal cells
risk factor|n|yếu tố nguy cơ|something that makes a disease more likely to happen
stem cell|n|tế bào gốc|an unspecialised cell that can become other kinds of cell
inherit|v|di truyền (thừa hưởng)|to receive a feature or disease from one's parents through genes
radiation|n|bức xạ|energy sent out as waves or particles, such as from the sun or X-rays
gene therapy|n|liệu pháp gen|treatment that changes faulty material in body cells to fight a disease
palliative care|n|chăm sóc giảm nhẹ|care that eases pain and other symptoms but does not cure`,
T2: `polymerase|n|polymerase (enzym trùng hợp)|an enzyme that builds new strands of nucleic acid
promoter|n|promoter (vùng khởi động)|a stretch of DNA that sets how often a gene is copied into RNA
start site|n|điểm bắt đầu phiên mã|the place on DNA where copying into RNA begins
stop site|n|điểm kết thúc phiên mã|the place on DNA where copying into RNA ends
semiconservative replication|n|sự sao chép bán bảo tồn|copying in which each new molecule keeps one old strand
origin of replication|n|điểm khởi đầu sao chép|the place where a DNA molecule starts to be duplicated
replication fork|n|chạc sao chép|the Y-shaped area where the DNA strands are pulled apart and copied
recombination|n|tái tổ hợp|the swapping of genetic material between two DNA molecules
homologous chromosome|n|nhiễm sắc thể tương đồng|one of a matching pair of chromosomes, one from each parent
allele|n|alen|one of the different forms of the same gene
apoptosis|n|chết tế bào theo chương trình|the planned death of a cell that is damaged or no longer needed
polymerase chain reaction|n|phản ứng chuỗi polymerase (PCR)|a laboratory method that makes millions of copies of a DNA piece
lymphocyte|n|tế bào lympho|a white blood cell that is important in the immune response
progenitor cell|n|tế bào tiền thân|a cell that is already partly committed to becoming one cell type
differentiate|v|biệt hóa|to change from a general cell into a specialised one
autologous|adj|tự thân|taken from the same person who will receive it
carcinoma|n|ung thư biểu mô|a malignant tumor that starts in the covering layer of an organ
targeted therapy|n|liệu pháp nhắm trúng đích|treatment aimed at specific features of abnormal cells
-ectomy|n|hậu tố -ectomy (cắt bỏ)|a word ending for an operation to remove a part of the body
DNA repair|n|sự sửa chữa ADN|the set of processes by which a cell finds and fixes damage in its genetic material
in vitro|adv|trong ống nghiệm (in vitro)|done artificially in a laboratory instead of inside a living body
embryonic stem cell|n|tế bào gốc phôi|an early cell from a very young embryo that can become almost any cell type
apheresis|n|tách chiết tế bào máu (apheresis)|a method that draws blood, removes certain cells and returns the rest to the donor
-ology|n|hậu tố -ology (khoa học nghiên cứu)|a word ending meaning the study of a subject
-itis|n|hậu tố -itis (viêm)|a word ending that means inflammation
-cyte|n|hậu tố -cyte (tế bào)|a word ending that refers to a cell
-otomy|n|hậu tố -otomy (rạch, mở)|a word ending for an operation that cuts into a part of the body
oncology|n|ung thư học|the branch of medicine that studies and treats tumors
epithelial cell|n|tế bào biểu mô|a cell that forms the covering layer of organs and body surfaces
osteocyte|n|tế bào xương|a mature cell living inside hard bone tissue`
}},
{ id: "bk-skin", group: "textbook", icon: "🧴", color: "#d98a6a", title: "The Skin", vi: "Da (hệ bì)", levels: {
T1: `integumentary system|n|hệ bì (hệ da)|the skin together with hair, nails and glands
hypodermis|n|hạ bì (mô dưới da)|the deepest layer of skin, made mostly of fat
adipose tissue|n|mô mỡ|fatty body material that stores energy and keeps the body warm
melanin|n|melanin (sắc tố da)|the dark pigment that gives skin its colour
melanocyte|n|tế bào hắc tố|a cell that makes the dark pigment of the skin
keratin|n|keratin|a tough protein found in hair, nails and the top of the skin
keratinization|n|sự sừng hóa|the process by which skin cells fill with hard protein and die
collagen|n|collagen|a strong protein fibre that makes skin firm and flexible
sebaceous gland|n|tuyến bã|a small organ in the skin that makes an oily liquid
sebum|n|chất bã (bã nhờn)|the oily substance that keeps skin and hair soft
sweat|n|mồ hôi|the salty liquid that comes out of the skin when you are hot
perspiration|n|sự ra mồ hôi|the process of losing water and salts through the skin
evaporation|n|sự bay hơi|the change of a liquid into a gas
fingerprint|n|vân tay|the pattern of tiny lines on the tip of a finger
blood vessel|n|mạch máu|a narrow tube through which the red body fluid flows
nerve ending|n|đầu mút thần kinh|the tip of a fibre that senses touch, pain or heat
barrier|n|hàng rào bảo vệ|something that stops harmful things from getting through
acne|n|mụn trứng cá|a skin problem with spots, common in teenagers
eczema|n|chàm (eczema)|a skin condition with red, dry and itchy patches
psoriasis|n|bệnh vảy nến|a long-lasting skin disease with thick, scaly patches
melanoma|n|u hắc tố ác tính (ung thư hắc tố)|a dangerous skin cancer that often begins in a mole
mole|n|nốt ruồi|a small dark spot on the skin
ultraviolet ray|n|tia cực tím|a harmful kind of light in sunshine that can damage skin
burn|n|bỏng|an injury to the skin caused by heat
blister|n|bọng nước (phỏng rộp)|a small bubble of fluid that forms under the top skin layer
sunburn|n|bỏng nắng|red, painful skin caused by too much sunshine
excrete|v|bài tiết|to send waste out of the body
secrete|v|tiết (chất)|to produce and release a liquid from a gland
epithelium|n|biểu mô|the tissue of flat cells that covers the surface of the body
abrasion|n|trầy xước|a shallow injury where only the top skin is rubbed off
laceration|n|vết rách|a wound with irregular, torn edges`,
T2: `stratum basale|n|lớp đáy (của thượng bì)|the deepest layer of the outer skin, where new cells form
stratum spinosum|n|lớp gai|the layer of the outer skin just above its deepest layer
stratum granulosum|n|lớp hạt|the layer of the outer skin whose cells contain dark granules
stratum corneum|n|lớp sừng|the top layer of the outer skin, made of dead flat cells
keratinocyte|n|tế bào sừng|a skin cell that produces a hard protein
Langerhans cell|n|tế bào Langerhans|a defence unit in the outer skin that helps fight germs
dermal papilla|n|nhú bì|a small finger-like bump of the middle skin layer that pushes upward
elastin|n|elastin (sợi chun)|a protein fibre that lets tissue stretch and return to shape
reticular fiber|n|sợi võng|a fine fibre that forms a net to hold tissue together
eccrine gland|n|tuyến mồ hôi tiểu tiết (eccrine)|a small organ found over most of the body that makes watery sweat
apocrine gland|n|tuyến mồ hôi đại tiết (apocrine)|a small organ in the armpits that makes thicker sweat after puberty
medulla|n|tủy tóc|the soft centre of a hair
cuticle|n|lớp vảy ngoài của thân tóc (cuticle)|the hard outer layer that covers a hair shaft
nail matrix|n|mầm móng (gốc móng)|the area of growing tissue at the base of a fingertip's hard covering
lunula|n|liềm móng|the pale half-moon shape at the base of a nail
arrector pili muscle|n|cơ dựng lông|a tiny band of tissue that makes a hair stand up
scabies|n|bệnh ghẻ|an itchy skin disease caused by tiny mites
herpes|n|bệnh mụn rộp (herpes)|a virus infection that causes painful blisters
ringworm|n|nấm da (hắc lào)|a fungal infection that makes ring-shaped scaly patches
albinism|n|bạch tạng|a condition in which the body makes little or no colour pigment
erythema|n|ban đỏ|redness of the skin caused by wider blood vessels
furuncle|n|nhọt|a painful lump under the skin caused by infection
excoriation|n|vết xước trợt (do gãi)|a mark where the skin has been scratched raw, often from itching
pressure ulcer|n|loét tì đè|a sore caused by lying in one position for too long
remission|n|thuyên giảm|a period when the signs of a disease go away
cold sore|n|mụn rộp môi|a blister near the mouth caused by a virus
incised wound|n|vết cắt (vết thương do vật sắc)|a clean cut that is longer on the surface than it is deep
penetrating wound|n|vết thương xuyên (vết đâm)|a deep injury such as a stab, deeper than it is long
contusion|n|vết bầm dập (đụng dập)|an injury in which blood leaks under unbroken skin
dermat/o|n|gốc từ chỉ da|a word root that refers to the covering of the body
kerat/o|n|gốc từ chỉ sừng (keratin)|a word root for the tough protein of hair and nails
melan/o|n|gốc từ chỉ màu đen (melanin)|a word root meaning dark or black
hidr/o|n|gốc từ chỉ mồ hôi|a word root that refers to perspiration
trich/o|n|gốc từ chỉ lông, tóc|a word root that refers to the hairs of the body`
}},
{ id: "bk-skeleton", group: "textbook", icon: "🦴", color: "#8d7b68", title: "The Skeletal System", vi: "Hệ xương", levels: {
T1: `osteoblast|n|tạo cốt bào|a cell that builds new bone
osteoclast|n|hủy cốt bào|a cell that breaks down old bone
matrix|n|chất nền (của mô)|the hard material between the cells of a tissue
periosteum|n|màng xương|the thin outer covering of a bone
compact bone|n|xương đặc|the hard, smooth and dense outer layer found in the skeleton
cancellous bone|n|xương xốp|the light, spongy tissue with many small spaces inside the skeleton's long parts
arthritis|n|viêm khớp|a disease that makes joints painful and swollen
dislocation|n|trật khớp|an injury in which a bone slips out of place at a joint
sprain|n|bong gân|an injury caused by stretching or tearing a ligament
osteo-|n|gốc từ: xương|a word part meaning bone
arthro-|n|gốc từ: khớp|a word part meaning joint
axial skeleton|n|bộ xương trục|the part made of the head bones, backbone, ribs and chest bone
appendicular skeleton|n|bộ xương chi|the part made of the limbs and the bones joining them to the trunk`,
T2: `diaphysis|n|thân xương|the long middle part of a long bone
epiphysis|n|đầu xương|the rounded end of a long bone
medullary cavity|n|ống tủy xương|the hollow space inside a long bone that holds marrow
sesamoid bone|n|xương vừng|a small, rounded piece of hard tissue that grows inside a tendon
hematopoiesis|n|quá trình tạo máu|the making of new blood cells
erythropoiesis|n|quá trình tạo hồng cầu|the making of new red blood cells
chondrocyte|n|tế bào sụn|a cell inside cartilage that keeps the tissue healthy
hyaline cartilage|n|sụn trong|smooth, glassy tissue that covers the ends of bones in joints
meniscus|n|sụn chêm|a curved pad in the knee that cushions the joint
synovial fluid|n|dịch khớp|the slippery liquid inside a joint that reduces friction
suture|n|đường khớp (khớp sọ)|a joint between head bones that does not move
hinge joint|n|khớp bản lề|a movable connection that bends in one direction only, like a door
ball-and-socket joint|n|khớp chỏm cầu|a movable connection where a round end turns in a cup, like the hip
parathyroid hormone|n|hormone tuyến cận giáp|a chemical from small neck glands that raises the calcium level in the blood
calcitonin|n|calcitonin|a chemical from the thyroid gland that lowers the calcium level in the blood
sacrum|n|xương cùng|the triangular bone at the base of the spine made of joined vertebrae
coccyx|n|xương cụt|the small tail bone at the very bottom of the spine
rickets|n|bệnh còi xương|a childhood disease with soft, bending bones, caused by lack of vitamin D
osteomalacia|n|nhuyễn xương|a condition in which adult bones become soft because minerals are lost
acromegaly|n|bệnh to đầu chi|a condition in which too much growth hormone enlarges adult hands and jaw
greenstick fracture|n|gãy cành tươi|an incomplete break in which the bone bends, mostly seen in children
gout|n|bệnh gút|a painful joint disease caused by crystals of uric acid
hematopoietic stem cell|n|tế bào gốc tạo máu|an early marrow form that can grow into any kind of blood component
red marrow|n|tủy đỏ|the blood-forming soft tissue found inside bones
carpal|n|xương cổ tay|one of the eight small bones of the wrist
tarsal|n|xương cổ chân|one of the seven bones of the ankle
phalanx|n|xương đốt ngón|a bone of a finger or toe
pectoral girdle|n|đai vai|the shoulder bones, a collarbone and a shoulder blade on each side
cervical vertebra|n|đốt sống cổ|one of the seven neck bones of the spine
cost(o)-|n|gốc từ: sườn|a word part meaning rib
crani(o)-|n|gốc từ: sọ|a word part meaning skull
spondyl(o)-|n|gốc từ: đốt sống|a word part meaning vertebra`
}},
{ id: "bk-muscle", group: "textbook", icon: "💪", color: "#c0392b", title: "The Muscular System", vi: "Hệ cơ", levels: {
T1: `organ system|n|hệ cơ quan|a group of body parts that work together for one main purpose
contraction|n|sự co cơ|the shortening and tightening of a muscle
voluntary|adj|tự ý, có ý thức|done or controlled by your own choice
involuntary|adj|không tự ý|happening without your conscious control
striated|adj|có vân|marked with light and dark stripes
origin|n|điểm bám cố định (nguyên ủy)|the end of a muscle fixed to the bone that stays still
insertion|n|điểm bám tận|the end of a muscle fixed to the bone that moves
belly|n|bụng cơ|the thick fleshy middle part of a muscle
fibre|n|sợi (sợi cơ)|a long thin thread-like cell in muscle tissue
motor neuron|n|nơron vận động|a nerve cell that sends signals to a muscle
acetylcholine|n|acetylcholin|the chemical messenger that makes skeletal muscle contract
motor end-plate|n|bản vận động (tấm cuối vận động)|the special area of a muscle cell that receives the nerve signal
metabolic rate|n|tốc độ chuyển hóa|how fast the body uses energy
paralysis|n|liệt|loss of the ability to move a part of the body
tremor|n|run|a small shaking movement that you cannot control
strain|n|căng cơ|an injury caused by stretching or tearing a muscle too far
flex|v|gập (khớp), co cơ gập|to bend a joint by tightening a muscle
pump|v|bơm|to push a liquid, such as blood, along
connective tissue|n|mô liên kết|tissue that supports and joins other parts of the body
epithelial tissue|n|mô biểu mô|tissue that covers body surfaces and lines organs
visceral muscle|n|cơ tạng (cơ trơn nội tạng)|muscle in the walls of organs such as the stomach, which works without your control
nerve tissue|n|mô thần kinh|tissue made of cells that carry signals around the body
contractility|n|tính co rút|the ability of muscle to shorten with force`,
T2: `autorhythmic|adj|tự phát nhịp|able to start its own regular beats
pacemaker|n|nút tạo nhịp|the group of heart cells that sets the beat
synaptic cleft|n|khe synap|the tiny gap between a nerve cell and its target
multinucleated|adj|nhiều nhân|having more than one nucleus in a single cell
excitability|n|tính hưng phấn (tính kích thích)|the ability to respond to a stimulus
elasticity|n|tính đàn hồi|the ability to return to the original shape after being stretched
supinate|v|xoay ngửa (cẳng tay)|to turn the hand so that the palm faces up
neuromuscular junction|n|điểm nối thần kinh – cơ|the place where a nerve cell meets a muscle cell
myopathy|n|bệnh cơ|a disease that damages muscle tissue itself
muscular dystrophy|n|loạn dưỡng cơ|an inherited disease in which muscle wastes away and is replaced by fibrous tissue
myasthenia gravis|n|bệnh nhược cơ|an illness that makes muscles weak and quickly tired because of faulty nerve-to-muscle signals
cerebral palsy|n|bại não|a lasting movement problem caused by early damage to the brain
Parkinson's disease|n|bệnh Parkinson|a brain disease that causes shaking and slow movement
dopamine|n|dopamin|a brain chemical that helps control movement
tetanus|n|uốn ván|a serious illness caused by a bacterial poison that makes muscles stiff
spore|n|bào tử|a tiny tough cell that bacteria form to survive
neurotoxin|n|độc tố thần kinh|a poison that harms nerves
tendonitis|n|viêm gân|painful swelling of the band that joins muscle to bone
extensibility|n|tính căng giãn|the ability to be stretched without tearing
myalgia|n|đau cơ|the medical word for pain felt in the muscles
lockjaw|n|cứng hàm (khít hàm)|an everyday name for the jaw stiffness seen in tetanus
polio|n|bại liệt (viêm tủy xám)|a viral illness that can attack nerves and leave muscles paralysed
masseter|n|cơ cắn|the cheek muscle that raises the lower jaw for chewing
myo-|n|cơ (gốc từ)|a word part that refers to muscle
-trophy|n|dưỡng, sự nuôi dưỡng (hậu tố)|a word ending that refers to feeding and growth of tissue
-algia|n|đau (hậu tố)|a word ending that means pain in a body part
dys-|n|loạn, rối loạn (tiền tố)|a word beginning that means bad, faulty or difficult`
}},
{ id: "bk-blood", group: "textbook", icon: "🩸", color: "#c62828", title: "Blood and Body Defences", vi: "Máu và hệ thống phòng vệ của cơ thể", levels: {
T1: `erythrocyte|n|hồng cầu|a disc-shaped cell that carries oxygen around the body
leukocyte|n|bạch cầu|a cell that helps the body fight germs and disease
transfusion|n|truyền máu|the giving of one person's blood to another person
clotting|n|sự đông máu|the process that turns liquid blood into a solid plug
clotting factor|n|yếu tố đông máu|a protein in the blood that is needed to form a clot
microorganism|n|vi sinh vật|a living thing so small that you need a lens to see it
bacterium|n|vi khuẩn|a tiny living thing with one cell, some of which cause disease
mucous membrane|n|niêm mạc|the moist lining of the nose, throat and gut
phagocyte|n|tế bào thực bào|a white cell that swallows and digests germs
vaccination|n|tiêm chủng|a medical treatment that prepares the body to resist a disease
lymph|n|bạch huyết|the clear watery fluid that flows through the vessels of the defence network
lymphatic vessel|n|mạch bạch huyết|a thin tube that carries clear fluid towards the chest
lymphatic system|n|hệ bạch huyết|the network of vessels, nodes and organs that drains tissue fluid and fights germs
tonsil|n|amiđan|a small mass of tissue at the throat that traps germs
leukaemia|n|bệnh bạch cầu (ung thư máu)|a cancer in which abnormal white cells multiply out of control
haemophilia|n|bệnh ưa chảy máu|an inherited illness in which blood lacks proteins needed to clot`,
T2: `granulocyte|n|bạch cầu hạt|a white cell that has small grains inside it
agranulocyte|n|bạch cầu không hạt|a white cell that has no visible grains inside it
neutrophil|n|bạch cầu trung tính|the most common white cell, which mainly attacks bacteria
monocyte|n|bạch cầu đơn nhân|the largest white cell, which has several jobs
macrophage|n|đại thực bào|a large white cell that eats germs and dead cells
eosinophil|n|bạch cầu ái toan|a white cell with grains that stain red, linked to allergies and parasites
basophil|n|bạch cầu ái kiềm|a white cell with grains that stain dark blue
mast cell|n|dưỡng bào (tế bào mast)|a defender in body tissue that releases histamine and joins allergic reactions
thrombocyte|n|tiểu cầu (huyết khối bào)|the scientific name for a small cell that controls bleeding
coagulation|n|sự đông máu (quá trình đông máu)|the change of liquid blood into a thick solid mass
immunoglobulin|n|globulin miễn dịch|a family of antibody proteins with different jobs
helper T cell|n|tế bào T hỗ trợ|a lymphocyte that directs the response of other immune defenders
killer T cell|n|tế bào T độc (tế bào T diệt)|a lymphocyte that destroys body cells infected by viruses or turned cancerous
innate immunity|n|miễn dịch bẩm sinh|the general protection that a person has from birth
adaptive immunity|n|miễn dịch thích nghi|protection that grows after meeting germs or a vaccine
passive immunity|n|miễn dịch thụ động|short-term protection borrowed from another source
autoimmune disease|n|bệnh tự miễn|an illness in which the body attacks its own healthy cells
immunodeficiency|n|suy giảm miễn dịch|a state in which the body's defences do not work properly
hypersensitivity|n|quá mẫn|an over-strong reaction to a substance that damages healthy tissue
anaphylactic shock|n|sốc phản vệ|a sudden life-threatening reaction to a substance such as a food or sting
leukocytosis|n|tăng bạch cầu|a higher than normal number of white cells in the blood
leukopenia|n|giảm bạch cầu|a lower than normal number of white cells in the blood
thrombocytosis|n|tăng tiểu cầu|an increased number of platelets in the blood
thrombocytopenia|n|giảm tiểu cầu|a lower than normal number of platelets in the blood
thrombus|n|cục huyết khối|a solid mass of clotted blood that stays in a vessel
pernicious anaemia|n|thiếu máu ác tính|a lack of red cells caused by poor absorption of vitamin B12
intrinsic factor|n|yếu tố nội tại|a substance made in the stomach that helps the gut absorb vitamin B12
paraesthesia|n|dị cảm (tê bì)|an odd feeling on the skin, such as tingling or pricking
biconcave|adj|lõm hai mặt|curved inwards on both sides, like a red cell
-penia|n|hậu tố -penia (giảm, thiếu)|a word ending that refers to a shortage or too few
-osis|n|hậu tố -osis (tình trạng, quá trình)|a word ending for a condition or process, often an abnormal increase
-aemia|n|hậu tố -aemia (tình trạng của máu)|a word ending that refers to a state of the blood`
}},
/* ---------- GIẢI PHẪU ---------- */
{ id: "a-regions", group: "anatomy", icon: "🧭", color: "#2e86c1", title: "Body regions & directions", vi: "Vùng cơ thể và thuật ngữ định hướng", levels: {
T1: `anterior|adj|phía trước|towards the front of the body
posterior|adj|phía sau|towards the back of the body
superior|adj|phía trên|higher, closer to the head
inferior|adj|phía dưới|lower, closer to the feet
medial|adj|phía trong (gần đường giữa)|closer to the midline of the body
lateral|adj|phía ngoài|further from the midline
proximal|adj|đầu gần|closer to where a limb joins the body
distal|adj|đầu xa|further from where a limb joins the body
superficial|adj|nông|near the surface of the body
deep|adj|sâu|further from the surface
thorax|n|lồng ngực|the chest
abdomen|n|bụng|the part of the body between the chest and the pelvis
pelvis|n|khung chậu|the bony ring at the bottom of the trunk
upper limb|n|chi trên|the arm
lower limb|n|chi dưới|the leg
supine|adj|nằm ngửa|lying on the back
prone|adj|nằm sấp|lying face down`,
T2: `midline|n|đường giữa|an imaginary line down the centre of the body
sagittal plane|n|mặt phẳng đứng dọc|divides the body into left and right
coronal plane|n|mặt phẳng đứng ngang (trán)|divides the body into front and back
transverse plane|n|mặt phẳng ngang|divides the body into upper and lower parts
ipsilateral|adj|cùng bên|on the same side
contralateral|adj|đối bên|on the opposite side
axilla|n|hố nách|the armpit
groin|n|vùng bẹn|where the thigh meets the abdomen
umbilicus|n|rốn|the navel, the belly button
epigastric region|n|vùng thượng vị|the upper middle part of the abdomen
right iliac fossa|n|hố chậu phải|the lower right part of the abdomen
flank|n|mạn sườn, hông|the side of the body between the ribs and the hip`
}},
{ id: "a-skeleton", group: "anatomy", icon: "🦴", color: "#8d7b68", title: "Bones & joints", vi: "Xương và khớp", levels: {
T1: `bone|n|xương|hard tissue that forms the skeleton
skeleton|n|bộ xương|all the bones of the body
skull|n|hộp sọ|the bones of the head
spine|n|cột sống|the column of bones down the back
vertebra|n|đốt sống (số nhiều: vertebrae)|one bone of the spine
rib|n|xương sườn|one of the curved bones of the chest
sternum|n|xương ức|the breastbone
clavicle|n|xương đòn|the collarbone
scapula|n|xương bả vai|the shoulder blade
humerus|n|xương cánh tay|the bone of the upper arm
femur|n|xương đùi|the thigh bone, the longest bone
tibia|n|xương chày|the shinbone
patella|n|xương bánh chè|the kneecap
joint|n|khớp|where two bones meet
cartilage|n|sụn|smooth tissue that covers the ends of bones
ligament|n|dây chằng|tissue that joins bone to bone
tendon|n|gân|tissue that joins muscle to bone`,
T2: `cranium|n|hộp sọ não|the part of the skull around the brain
mandible|n|xương hàm dưới|the lower jaw
radius|n|xương quay|a bone of the forearm, on the thumb side
ulna|n|xương trụ|a bone of the forearm, on the little finger side
carpal bones|n|xương cổ tay|the small bones of the wrist
phalanges|n|xương đốt ngón|the bones of the fingers and toes
fibula|n|xương mác|the thin bone on the outer side of the lower leg
calcaneus|n|xương gót|the heel bone
intervertebral disc|n|đĩa đệm|a cushion between two vertebrae
synovial joint|n|khớp hoạt dịch|a joint with fluid that allows free movement
bone marrow|n|tủy xương|soft tissue inside bones that makes blood cells`
}},
{ id: "a-muscles", group: "anatomy", icon: "💪", color: "#c0392b", title: "Muscles", vi: "Cơ", levels: {
T1: `muscle|n|cơ|tissue that contracts to move the body
skeletal muscle|n|cơ vân|muscle we move by choice
smooth muscle|n|cơ trơn|muscle in organs, not under conscious control
cardiac muscle|n|cơ tim|the muscle of the heart
biceps|n|cơ nhị đầu|the muscle at the front of the upper arm
triceps|n|cơ tam đầu|the muscle at the back of the upper arm
quadriceps|n|cơ tứ đầu đùi|the large muscle at the front of the thigh
hamstrings|n|nhóm cơ đùi sau|the muscles at the back of the thigh
diaphragm|n|cơ hoành|the muscle under the lungs used in breathing`,
T2: `deltoid|n|cơ delta|the muscle over the shoulder
pectoralis major|n|cơ ngực lớn|the large chest muscle
gluteus maximus|n|cơ mông lớn|the large muscle of the buttock
gastrocnemius|n|cơ bụng chân|the calf muscle
sphincter|n|cơ thắt|a ring of muscle that closes an opening
flexor|n|cơ gấp|a muscle that bends a joint
extensor|n|cơ duỗi|a muscle that straightens a joint
abductor|n|cơ dạng|moves a limb away from the midline
adductor|n|cơ khép|moves a limb towards the midline`
}},
{ id: "a-cardio", group: "anatomy", icon: "❤️", color: "#d63a4a", title: "Heart & blood vessels", vi: "Tim và mạch máu", levels: {
T1: `heart|n|tim|the organ that pumps blood
atrium|n|tâm nhĩ (số nhiều: atria)|an upper chamber of the heart
ventricle|n|tâm thất|a lower chamber of the heart
valve|n|van|a flap that keeps blood flowing one way
artery|n|động mạch|a vessel that carries blood away from the heart
vein|n|tĩnh mạch|a vessel that carries blood back to the heart
capillary|n|mao mạch|a tiny vessel between arteries and veins
aorta|n|động mạch chủ|the largest artery in the body
coronary artery|n|động mạch vành|an artery that supplies the heart muscle
pulse|n|mạch|the beat you can feel in an artery`,
T2: `mitral valve|n|van hai lá|the valve between the left atrium and ventricle
tricuspid valve|n|van ba lá|the valve between the right atrium and ventricle
aortic valve|n|van động mạch chủ|the valve between the left ventricle and the aorta
septum|n|vách ngăn|the wall between the left and right sides of the heart
myocardium|n|cơ tim|the muscle layer of the heart
pericardium|n|màng ngoài tim|the sac around the heart
vena cava|n|tĩnh mạch chủ|a large vein that returns blood to the heart
pulmonary artery|n|động mạch phổi|carries blood from the heart to the lungs
carotid artery|n|động mạch cảnh|a main artery in the neck
jugular vein|n|tĩnh mạch cảnh|a large vein in the neck
femoral artery|n|động mạch đùi|the main artery of the thigh`
}},
{ id: "a-resp", group: "anatomy", icon: "🫁", color: "#3a9ad9", title: "Respiratory system", vi: "Hệ hô hấp", levels: {
T1: `lung|n|phổi|one of the two organs used for breathing
airway|n|đường thở|the passage that air travels through
nasal cavity|n|hốc mũi|the space inside the nose
throat|n|họng|the passage at the back of the mouth
larynx|n|thanh quản|the voice box
trachea|n|khí quản|the windpipe
bronchus|n|phế quản (số nhiều: bronchi)|a main airway into each lung
alveolus|n|phế nang (số nhiều: alveoli)|a tiny air sac where gas exchange happens`,
T2: `pharynx|n|hầu|the space behind the nose and mouth
epiglottis|n|nắp thanh quản|a flap that stops food entering the windpipe
vocal cords|n|dây thanh âm|folds in the larynx that make sound
bronchiole|n|tiểu phế quản|a small branch of a bronchus
pleura|n|màng phổi|the thin layer around the lungs
lobe|n|thùy|a section of an organ, such as the lung
sinus|n|xoang|an air space in the bones of the face`
}},
{ id: "a-gi", group: "anatomy", icon: "🍽️", color: "#d68a1e", title: "Digestive system", vi: "Hệ tiêu hóa", levels: {
T1: `oesophagus|n|thực quản (US: esophagus)|the tube from the throat to the stomach
stomach|n|dạ dày|the organ that holds and breaks down food
small intestine|n|ruột non|where most food is absorbed
large intestine|n|ruột già|where water is absorbed and stool is formed
colon|n|đại tràng|the main part of the large intestine
rectum|n|trực tràng|the last part of the large intestine
liver|n|gan|the organ that processes nutrients and toxins
gallbladder|n|túi mật|a small sac that stores bile
pancreas|n|tụy|an organ that makes digestive juices and insulin
appendix|n|ruột thừa|a small tube attached to the large intestine`,
T2: `duodenum|n|tá tràng|the first part of the small intestine
jejunum|n|hỗng tràng|the middle part of the small intestine
ileum|n|hồi tràng|the last part of the small intestine
caecum|n|manh tràng (US: cecum)|the first part of the large intestine
anus|n|hậu môn|the opening at the end of the gut
bile duct|n|ống mật|a tube that carries bile to the intestine
peritoneum|n|phúc mạc|the lining of the abdominal cavity
salivary gland|n|tuyến nước bọt|a gland that makes saliva`
}},
{ id: "a-neuro", group: "anatomy", icon: "🧠", color: "#8e44ad", title: "Nervous system", vi: "Hệ thần kinh", levels: {
T1: `brain|n|não|the organ that controls the body
spinal cord|n|tủy sống|the bundle of nerves inside the spine
nerve|n|dây thần kinh|a fibre that carries signals
neuron|n|nơ-ron, tế bào thần kinh|a nerve cell
cerebrum|n|đại não|the largest part of the brain
cerebellum|n|tiểu não|the part of the brain that controls balance
brainstem|n|thân não|connects the brain to the spinal cord`,
T2: `cortex|n|vỏ não|the outer layer of the brain
frontal lobe|n|thùy trán|the front part of the brain
temporal lobe|n|thùy thái dương|the part of the brain near the ears
occipital lobe|n|thùy chẩm|the back part of the brain, used for vision
meninges|n|màng não|the layers that cover the brain and spinal cord
cerebrospinal fluid|n|dịch não tủy|clear fluid around the brain and spinal cord
cranial nerve|n|dây thần kinh sọ|one of 12 nerves that come from the brain
autonomic nervous system|n|hệ thần kinh tự chủ|controls automatic functions such as heart rate
hypothalamus|n|vùng dưới đồi|controls temperature, hunger and hormones`
}},
{ id: "a-uro", group: "anatomy", icon: "🫘", color: "#16a085", title: "Urinary & reproductive system", vi: "Hệ tiết niệu và sinh sản", levels: {
T1: `kidney|n|thận|an organ that filters blood and makes urine
ureter|n|niệu quản|a tube from the kidney to the bladder
bladder|n|bàng quang|the organ that stores urine
urethra|n|niệu đạo|the tube that carries urine out of the body
uterus|n|tử cung|the womb
ovary|n|buồng trứng|an organ that produces eggs
testis|n|tinh hoàn (số nhiều: testes)|an organ that produces sperm
breast|n|vú|the soft organ on the chest that makes milk in women`,
T2: `nephron|n|nephron, đơn vị thận|the filtering unit of the kidney
prostate|n|tuyến tiền liệt|a gland below the bladder in men
cervix|n|cổ tử cung|the lower part of the uterus
fallopian tube|n|vòi trứng|a tube from the ovary to the uterus
renal pelvis|n|bể thận|where urine collects inside the kidney`
}},
{ id: "a-endo", group: "anatomy", icon: "🧪", color: "#c78b16", title: "Endocrine, blood & immune organs", vi: "Nội tiết, máu và cơ quan miễn dịch", levels: {
T1: `gland|n|tuyến|an organ that makes a substance such as a hormone
thyroid gland|n|tuyến giáp|a gland in the neck that controls metabolism
pituitary gland|n|tuyến yên|a small gland under the brain that controls other glands
adrenal gland|n|tuyến thượng thận|a gland on top of each kidney
blood|n|máu|the red liquid pumped around the body by the heart
red blood cell|n|hồng cầu|a cell that carries oxygen
white blood cell|n|bạch cầu|a cell that fights infection
platelet|n|tiểu cầu|a cell fragment that helps blood clot
lymph node|n|hạch bạch huyết|a small gland that filters lymph and fights infection
spleen|n|lách|an organ that filters blood`,
T2: `plasma|n|huyết tương|the liquid part of blood
thymus|n|tuyến ức|an organ where some immune cells mature
islets of Langerhans|n|tiểu đảo tụy|cells in the pancreas that make insulin
parathyroid gland|n|tuyến cận giáp|small glands that control calcium`
}},
{ id: "a-senses", group: "anatomy", icon: "👁️", color: "#1f9e89", title: "Skin, eye & ear", vi: "Da, mắt và tai", levels: {
T1: `skin|n|da|the outer covering of the body
eye|n|mắt|the organ of the body used for seeing
pupil|n|đồng tử|the black centre of the eye
iris|n|mống mắt|the coloured part of the eye
eyelid|n|mí mắt|the fold of skin that covers and protects the eye
eardrum|n|màng nhĩ|a thin membrane inside the ear
nail|n|móng|the hard plate that covers the end of a finger or toe`,
T2: `epidermis|n|biểu bì|the outer layer of the skin
dermis|n|trung bì|the layer of skin under the epidermis
sweat gland|n|tuyến mồ hôi|a small structure in the skin that produces sweat
hair follicle|n|nang lông|a small pocket in the skin from which a hair grows
cornea|n|giác mạc|the clear front surface of the eye
lens|n|thủy tinh thể|focuses light inside the eye
retina|n|võng mạc|the layer at the back of the eye that senses light
cochlea|n|ốc tai|the spiral part of the inner ear used for hearing
middle ear|n|tai giữa|the space behind the eardrum`
}},
/* ---------- SINH LÝ ---------- */
{ id: "p-core", group: "physiology", icon: "⚙️", color: "#607d8b", title: "Core physiology", vi: "Sinh lý cơ bản", levels: {
T1: `cell|n|tế bào|the smallest unit of life
tissue|n|mô|a group of similar cells
organ|n|cơ quan|a body part with a special function
system|n|hệ (cơ quan)|a group of organs working together
metabolism|n|chuyển hóa|the chemical processes that keep us alive
homeostasis|n|cân bằng nội môi|keeping conditions inside the body stable
hormone|n|hormon, nội tiết tố|a chemical messenger carried in the blood
enzyme|n|enzym|a protein that speeds up chemical reactions
glucose|n|glucose, đường|the main sugar used for energy
insulin|n|insulin|a hormone that lowers blood sugar
oxygen|n|oxy|a gas in the air that the body needs to live
electrolyte|n|chất điện giải|a mineral such as sodium or potassium in body fluids`,
T2: `membrane|n|màng|a thin layer around a cell or organ
diffusion|n|khuếch tán|movement from high to low concentration
osmosis|n|thẩm thấu|movement of water across a membrane
receptor|n|thụ thể|a structure that receives a signal
negative feedback|n|điều hòa ngược âm tính|a response that reverses a change
glucagon|n|glucagon|a hormone that raises blood sugar
sodium|n|natri|a mineral in body fluids that helps control water balance and nerve signals
potassium|n|kali|a mineral inside cells that is vital for nerves, muscles and the heartbeat
calcium|n|canxi|a mineral needed for strong bones and teeth, muscle contraction and clotting
acid-base balance|n|cân bằng kiềm toan|keeping the blood pH normal`
}},
{ id: "p-circ", group: "physiology", icon: "💓", color: "#e74c3c", title: "Circulation & breathing", vi: "Tuần hoàn và hô hấp", levels: {
T1: `heart rate|n|nhịp tim|how many times the heart beats per minute
blood pressure|n|huyết áp|the pressure of blood against artery walls
circulation|n|tuần hoàn|the movement of blood around the body
breathing|n|hô hấp, thở|the process of taking air into the lungs and letting it out
respiratory rate|n|nhịp thở|breaths per minute
inhale|v|hít vào|to breathe in
exhale|v|thở ra|to breathe out
oxygen saturation|n|độ bão hòa oxy|how much oxygen the blood is carrying
haemoglobin|n|huyết sắc tố (US: hemoglobin)|the protein in red cells that carries oxygen`,
T2: `systolic|adj|tâm thu|the pressure when the heart contracts
diastolic|adj|tâm trương|the pressure when the heart relaxes
cardiac output|n|cung lượng tim|the amount of blood the heart pumps per minute
stroke volume|n|thể tích nhát bóp|the blood pumped in one heartbeat
perfusion|n|tưới máu|blood flow through a tissue
ventilation|n|thông khí|air moving in and out of the lungs
gas exchange|n|trao đổi khí|oxygen in, carbon dioxide out, in the lungs
carbon dioxide|n|khí CO2|a waste gas we breathe out`
}},
{ id: "p-systems", group: "physiology", icon: "🔄", color: "#27ae60", title: "Digestion, kidneys, nerves & immunity", vi: "Tiêu hóa, thận, thần kinh và miễn dịch", levels: {
T1: `digestion|n|sự tiêu hóa|breaking down food so the body can use it
absorption|n|sự hấp thu|taking nutrients into the blood
urine|n|nước tiểu|the liquid waste made by the kidneys and passed out of the body
body temperature|n|thân nhiệt|how hot or cold the inside of the body is
reflex|n|phản xạ|an automatic response
immune system|n|hệ miễn dịch|the body's defence against infection
antibody|n|kháng thể|a protein that attacks germs
fluid balance|n|cân bằng dịch|the state in which the amount of water taken in matches the amount lost`,
T2: `peristalsis|n|nhu động|waves of muscle that move food along the gut
bile|n|mật|a fluid from the liver that helps digest fat
gastric acid|n|acid dạ dày|the strong acid made in the stomach to help digest food
filtration|n|sự lọc|how the kidneys clean the blood
urine output|n|lượng nước tiểu|the amount of urine a person passes in a given time
nerve impulse|n|xung thần kinh|a signal travelling along a nerve
synapse|n|khớp thần kinh, synap|the gap between two nerve cells
neurotransmitter|n|chất dẫn truyền thần kinh|a chemical that carries a signal across a synapse
antigen|n|kháng nguyên|a substance that triggers an immune response
thermoregulation|n|điều hòa thân nhiệt|the way the body keeps its temperature steady`
}},
/* ---------- BỆNH HỌC ---------- */
{ id: "d-general", group: "pathology", icon: "🔬", color: "#6c5ce7", title: "General pathology", vi: "Bệnh học đại cương", levels: {
T1: `disease|n|bệnh|an illness with specific signs that harms the body's normal function
disorder|n|rối loạn|a condition in which a part of the body or mind does not work normally
infection|n|nhiễm trùng|illness caused by germs
inflammation|n|viêm|redness, heat, swelling and pain in tissue
acute|adj|cấp tính|starting suddenly, short-lived
chronic|adj|mạn tính|lasting a long time
tumour|n|khối u (US: tumor)|an abnormal growth of cells
benign|adj|lành tính|not cancer, does not spread
malignant|adj|ác tính|cancerous, can spread
oedema|n|phù (US: edema)|swelling caused by fluid
lesion|n|tổn thương|an area of damaged tissue
diagnosis|n|chẩn đoán|the identification of the illness a patient has, based on signs and tests
prognosis|n|tiên lượng|the likely outcome of a disease
complication|n|biến chứng|a new problem that arises during or because of an illness or treatment`,
T2: `aetiology|n|nguyên nhân bệnh (US: etiology)|the cause of a disease
pathogenesis|n|cơ chế bệnh sinh|how a disease develops
necrosis|n|hoại tử|death of tissue
ischaemia|n|thiếu máu cục bộ (US: ischemia)|not enough blood supply to a tissue
infarction|n|nhồi máu|tissue death from lack of blood supply
thrombosis|n|huyết khối|a blood clot inside a vessel
embolism|n|thuyên tắc|a blockage carried in the blood
atrophy|n|teo|wasting away of tissue
hypertrophy|n|phì đại|enlargement of cells
hyperplasia|n|tăng sản|an increase in the number of cells
neoplasm|n|tân sinh, khối u|a new abnormal growth
metastasis|n|di căn|spread of cancer to other parts of the body
fibrosis|n|xơ hóa|thickening and scarring of tissue
congenital|adj|bẩm sinh|present from birth`
}},
{ id: "d-infect", group: "pathology", icon: "🦠", color: "#2d9c7b", title: "Infection & immunity", vi: "Nhiễm trùng và miễn dịch", levels: {
T1: `bacteria|n|vi khuẩn (số ít: bacterium)|tiny single-celled living organisms, some of which cause infections
virus|n|vi-rút|a tiny infectious agent that can only multiply inside living cells
germ|n|mầm bệnh (từ thông dụng)|a general word for a tiny organism that can cause disease
fungus|n|nấm (số nhiều: fungi)|a yeast or mould-type organism that can sometimes infect the body
vaccine|n|vắc-xin|a preparation that trains the body's defences to fight a particular infection
allergy|n|dị ứng|an exaggerated reaction of the body's defences to a harmless substance
contagious|adj|dễ lây|able to be passed from one person to another by contact
antibiotic|n|kháng sinh|a medicine that kills bacteria`,
T2: `pathogen|n|tác nhân gây bệnh|any organism that can cause disease
parasite|n|ký sinh trùng|an organism that lives on or in another living thing and harms it
sepsis|n|nhiễm khuẩn huyết|a life-threatening response to infection
abscess|n|áp xe|a collection of pus
pus|n|mủ|a thick yellowish fluid made of dead white cells that forms at infected sites
incubation period|n|thời kỳ ủ bệnh|the time between catching an infection and the first signs of illness
immunity|n|miễn dịch|the body's ability to resist a particular infection or disease
autoimmune|adj|tự miễn|when the immune system attacks the body
antibiotic resistance|n|kháng kháng sinh|the ability of bacteria to survive drugs that normally kill them`
}},
{ id: "d-systems", group: "pathology", icon: "📋", color: "#b83280", title: "Common diseases by system", vi: "Bệnh thường gặp theo hệ cơ quan", levels: {
T1: `hypertension|n|tăng huyết áp|high blood pressure
diabetes|n|đái tháo đường|a condition with high blood sugar
asthma|n|hen phế quản|a condition that narrows the airways
pneumonia|n|viêm phổi|an infection of the lungs
stroke|n|đột quỵ|damage to the brain from a blocked or burst vessel
heart attack|n|cơn đau tim, nhồi máu cơ tim|the lay term for myocardial infarction
anaemia|n|thiếu máu (US: anemia)|a lack of red blood cells or haemoglobin
gastritis|n|viêm dạ dày|inflammation of the stomach lining
fracture|n|gãy xương|a broken bone
migraine|n|đau nửa đầu|a severe, throbbing headache, often one-sided
cancer|n|ung thư|a disease in which abnormal cells grow out of control and can spread`,
T2: `myocardial infarction|n|nhồi máu cơ tim|death of heart muscle from a blocked artery
heart failure|n|suy tim|the heart cannot pump well enough
angina|n|cơn đau thắt ngực|chest pain from reduced blood flow to the heart
atrial fibrillation|n|rung nhĩ|an irregular, often fast heart rhythm
COPD|n|bệnh phổi tắc nghẽn mạn tính|chronic obstructive pulmonary disease
tuberculosis|n|bệnh lao|a serious bacterial infection that mainly affects the lungs
peptic ulcer|n|loét dạ dày tá tràng|an open sore in the lining of the stomach or first part of the small intestine
cirrhosis|n|xơ gan|permanent scarring of the liver that stops it working properly
appendicitis|n|viêm ruột thừa|inflammation of the small pouch attached to the large intestine
hyperthyroidism|n|cường giáp|a condition in which the thyroid gland makes too much hormone
hypothyroidism|n|suy giáp|a condition in which the thyroid gland makes too little hormone
urinary tract infection|n|nhiễm trùng đường tiết niệu|an infection of the bladder, kidneys or the tubes that carry urine
kidney stone|n|sỏi thận|a hard lump of minerals that forms in the kidney
chronic kidney disease|n|bệnh thận mạn|a long-term, gradual loss of the kidneys' ability to filter blood
osteoarthritis|n|thoái hóa khớp|a joint disease caused by wear of the cartilage, leading to pain and stiffness
rheumatoid arthritis|n|viêm khớp dạng thấp|a long-term disease in which the immune system attacks the joints
osteoporosis|n|loãng xương|a condition in which bones become thin, weak and break easily
epilepsy|n|động kinh|a brain disorder that causes repeated seizures
dementia|n|sa sút trí tuệ|a lasting decline in memory, thinking and ability to cope with daily life
meningitis|n|viêm màng não|inflammation of the membranes that cover the brain and spinal cord
dermatitis|n|viêm da|inflammation of the skin, causing redness and itching
cataract|n|đục thủy tinh thể|clouding of the lens of the eye that makes vision dim
glaucoma|n|tăng nhãn áp, glôcôm|an eye disease in which raised pressure damages the nerve of the eye`
}},
/* ---------- LÂM SÀNG ---------- */
{ id: "c-signs", group: "clinical", icon: "🤒", color: "#e67e22", title: "Signs & symptoms", vi: "Triệu chứng và dấu hiệu", levels: {
T1: `nausea|n|buồn nôn|the unpleasant feeling that you are about to be sick
vomiting|n|nôn|the forceful emptying of the stomach contents through the mouth
diarrhoea|n|tiêu chảy (US: diarrhea)|frequent loose or watery stools
constipation|n|táo bón|difficulty passing stools, or passing them less often than normal
fatigue|n|mệt mỏi|a feeling of extreme tiredness that rest does not fully relieve
fever|n|sốt|a body temperature higher than normal
rash|n|phát ban|an area of red or irritated skin, or many small spots on the skin
itching|n|ngứa|an irritating skin sensation that makes you want to scratch
swelling|n|sưng|an abnormal enlargement of a part of the body
numbness|n|tê|loss of feeling in a part of the body
shortness of breath|n|khó thở|the feeling of not being able to get enough air
palpitations|n|hồi hộp, đánh trống ngực|feeling your heart beat fast or hard
cough|n|ho|a sudden forceful blast of air from the lungs and throat`,
T2: `chills|n|ớn lạnh|a feeling of coldness with shivering, often at the start of a fever
wheeze|n|khò khè|a whistling sound when breathing
tingling|n|cảm giác kiến bò|a pricking or pins-and-needles feeling in the skin
blurred vision|n|nhìn mờ|eyesight that is not sharp or clear
weight loss|n|sụt cân|a drop in body weight
loss of appetite|n|chán ăn|a reduced desire to eat
jaundice|n|vàng da|yellow skin and eyes
bruising|n|bầm tím|dark skin discolouration caused by blood leaking under the skin after a knock
lump|n|khối u, cục|a hard swelling or mass that can be felt under the skin
tenderness|n|ấn đau|pain when an area is pressed
dyspnoea|n|khó thở (thuật ngữ)|the medical term for shortness of breath
haemoptysis|n|ho ra máu|coughing up blood`
}},
{ id: "c-exam", group: "clinical", icon: "🩺", color: "#0a7a5f", title: "Examination & tests", vi: "Khám và xét nghiệm", levels: {
T1: `history|n|bệnh sử|what the patient tells you about the illness
examination|n|thăm khám|the careful check of a patient's body by a doctor to look for signs of illness
vital signs|n|dấu hiệu sinh tồn|pulse, blood pressure, temperature, breathing
blood test|n|xét nghiệm máu|a test on a sample of blood taken from a vein
urine test|n|xét nghiệm nước tiểu|a test on a sample of urine
X-ray|n|chụp X-quang|an image of the inside of the body made using a type of radiation
ultrasound|n|siêu âm|an image of organs made using high-frequency sound waves
scan|n|chụp chiếu (CT, MRI)|a detailed image of the inside of the body made by a machine`,
T2: `inspection|n|nhìn|looking carefully at the patient
palpation|n|sờ|examining by touch
percussion|n|gõ|tapping to hear the sound underneath
auscultation|n|nghe|listening with a stethoscope
full blood count|n|công thức máu|a blood test that measures the numbers of red cells, white cells and platelets
CT scan|n|chụp cắt lớp vi tính|a detailed body image made from many X-ray pictures combined by a computer
MRI scan|n|chụp cộng hưởng từ|a detailed body image made using strong magnets and radio waves
ECG|n|điện tâm đồ|a recording of the heart's electrical activity
biopsy|n|sinh thiết|taking a small piece of tissue to examine
endoscopy|n|nội soi|looking inside the body with a thin flexible tube that has a camera
differential diagnosis|n|chẩn đoán phân biệt|a list of possible causes`
}},
{ id: "c-treat", group: "clinical", icon: "💊", color: "#2471a3", title: "Treatment & care", vi: "Điều trị và chăm sóc", levels: {
T1: `tablet|n|viên thuốc|a small solid piece of medicine that is swallowed
dose|n|liều|the amount of a medicine taken at one time
injection|n|mũi tiêm|the act of putting a liquid medicine into the body with a needle
prescription|n|đơn thuốc|a written order from a doctor for a medicine
painkiller|n|thuốc giảm đau|a medicine that reduces or removes pain
operation|n|ca mổ|a medical procedure in which a surgeon cuts into the body to treat a problem
rest|n, v|nghỉ ngơi|time spent relaxing or sleeping to recover strength
bandage|n|băng (vết thương)|a strip of cloth wrapped around an injured part of the body
admit|v|nhập viện|We need to admit you.
discharge|v|cho xuất viện|to officially let a patient leave hospital`,
T2: `capsule|n|viên nang|a medicine in a small soluble shell that is swallowed
infusion|n|truyền dịch|the slow delivery of fluid or medicine into a vein
drip|n|chai truyền dịch|a bag of fluid that runs slowly into a patient's vein through a tube
anaesthetic|n|thuốc gây mê / gây tê|a drug that makes a patient lose feeling or consciousness during a procedure
stitches|n|mũi khâu|threads used to sew the edges of a wound or cut together
physiotherapy|n|vật lý trị liệu|treatment with exercise and movement to restore body function
referral|n|giấy chuyển viện, chuyển khám|a letter or request sending a patient to another doctor or service
contraindication|n|chống chỉ định|a reason not to give a treatment
consent|n|sự đồng ý (có hiểu biết)|a patient's agreement to treatment after being told the risks and benefits
monitoring|n|theo dõi|regularly checking a patient's condition over time
side effect|n|tác dụng phụ|an unwanted effect of a medicine in addition to its intended one`
}}
];
