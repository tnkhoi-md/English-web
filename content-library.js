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
divorced|adj|đã ly hôn|My aunt is divorced and lives alone.
kid|n|đứa trẻ, trẻ con|The kid is playing football in the park.
lady|n|quý bà, phụ nữ|That lady over there is my English teacher.
guest|n|khách mời|We have a guest coming to dinner tonight.
waiter|n|người phục vụ bàn|The waiter brought us the menu and some water.
partner|n|bạn đời, đối tác|She lives with her partner in a small flat.
`,
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
grow apart|phr|dần xa cách nhau|Old friends can grow apart when they live in different cities.
toddler|n|trẻ mới biết đi|The toddler ran across the room laughing.
widow|n|góa phụ|The widow lived alone after her husband died.
pensioner|n|người về hưu|A pensioner can get a cheaper ticket on the bus.
youngster|n|thanh thiếu niên|The youngster was nervous on his first day.
childhood|n|thời thơ ấu|I had a happy childhood in a small village.
best friend|n|bạn thân nhất|My best friend always tells me the truth.
stepfather|n|cha dượng|My stepfather taught me how to drive.
grow old|phr|già đi|I want to grow old with someone I love.
bachelor|n|người đàn ông độc thân|He stayed a bachelor until he was forty.
godmother|n|mẹ đỡ đầu|My godmother sends me a card every birthday.
`,
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
orphan|n|trẻ mồ côi|The orphan was raised by his aunt.
offspring|n|con cái, con cháu|Many animals protect their offspring from danger.
newlywed|n|người mới cưới|The newlywed couple left for their honeymoon on Sunday.
foster parent|n|cha mẹ nuôi tạm thời|The foster parent cared for the boy for two years.
widower|n|người đàn ông góa vợ|The widower raised his three children alone.
companion|n|bạn đồng hành|The old man's dog was his only companion.
idol|n|thần tượng|The singer is an idol to many teenagers.
confidant|n|người tâm phúc|She told her secrets only to her closest confidant.
adolescent|n|thiếu niên|Every adolescent needs support from family and friends.
stepchild|n|con riêng của vợ/chồng|He treats his stepchild as if she were his own.
fellow|adj|đồng (cùng loại)|He shared the prize with his fellow students.
`,
C1: `kinship|n|quan hệ họ hàng|Strong kinship ties hold the village together.
lineage|n|dòng dõi|She can trace her lineage back to the 1700s.
elder|n|người lớn tuổi, bậc trưởng lão|The village elder settled the argument between the two farmers.
namesake|n|người trùng tên|He was named after his grandfather, his namesake.
compatriot|n|đồng hương|Far from home, she was glad to meet a compatriot.
`,
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
make the bed|phr|dọn giường|I always make the bed before I leave.
mirror|n|cái gương|She looked at herself in the mirror.
sink|n|bồn rửa|There are dirty plates in the sink.
bin|n|thùng rác|Please put the paper in the bin.
cushion|n|cái gối tựa|I put a cushion behind my back.
drawer|n|ngăn kéo|The keys are in the top drawer.
`,
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
air conditioning|n|điều hòa không khí|The air conditioning keeps the room cool in summer.
wardrobe|n|tủ quần áo|He hung his shirts in the wardrobe.
sweep|v|quét (nhà)|I sweep the floor every morning before work.
mop|v|lau (sàn)|She had to mop the kitchen after the spill.
broom|n|cái chổi|He kept the broom behind the kitchen door.
bucket|n|cái xô|Fill the bucket with warm water and soap.
light bulb|n|bóng đèn|The light bulb in the hall has stopped working.
plug in|phr|cắm điện|Please plug in the kettle and make some tea.
switch off|phr|tắt (thiết bị)|Don't forget to switch off the lights when you leave.
hang up|phr|treo lên|Hang up your coat when you come in.
tidy up|phr|dọn dẹp cho gọn|Let's tidy up the living room before the guests arrive.
`,
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
tenancy|n|thời hạn thuê nhà|Her tenancy ends in June.
declutter|v|dọn bớt đồ lộn xộn|We decided to declutter the house and give things away.
clutter|n|đồ đạc bừa bộn|There was too much clutter on the desk.
pantry|n|tủ đựng thức ăn|She keeps rice and flour in the pantry.
hallway|n|hành lang trong nhà|Leave your muddy shoes in the hallway.
oversleep|v|ngủ quên, ngủ dậy muộn|If I oversleep, I will miss the first bus.
doze off|phr|thiếp đi, ngủ gật|Grandpa tends to doze off in front of the television.
unplug|v|rút phích cắm|Always unplug the iron when you finish using it.
thermostat|n|bộ điều chỉnh nhiệt độ|She turned down the thermostat to save energy.
insulation|n|vật liệu cách nhiệt|Good insulation keeps the house warm in winter.
odd job|n|việc vặt|He did an odd job around the house every weekend.
`,
C1: `dwelling|n|chỗ ở, nhà ở|The old dwelling had only two small rooms.
residence|n|nơi cư trú|The family's main residence is in the countryside.
upkeep|n|chi phí và việc bảo dưỡng|The upkeep of an old house can be expensive.
refurbish|v|tân trang, sửa sang lại|They plan to refurbish the whole apartment next year.
lodger|n|người thuê phòng|They let a lodger live in the spare room.
`,
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
roast|v|quay, nướng (lò)|We roast a chicken on Sundays.
sausage|n|xúc xích|He fried a sausage for breakfast.
salad|n|món rau trộn|I ordered a salad and a glass of water.
pizza|n|bánh pizza|We shared a large pizza on Friday night.
biscuit|n|bánh quy|She had a biscuit with her tea.
ice cream|n|kem|The children asked for ice cream after dinner.
`,
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
allergic|adj|bị dị ứng|He is allergic to nuts.
beef|n|thịt bò|We had beef and vegetables for dinner.
pork|n|thịt lợn|She doesn't eat pork for religious reasons.
lamb|n|thịt cừu non|The restaurant is famous for its roast lamb.
seafood|n|hải sản|We ate fresh seafood by the beach.
shrimp|n|tôm|He added shrimp to the fried rice.
mushroom|n|nấm|I added one mushroom to the soup for extra flavour.
cabbage|n|bắp cải|The soup was full of cabbage and carrots.
cucumber|n|dưa chuột|He cut a cucumber into thin slices.
yogurt|n|sữa chua|I have yogurt with fruit every morning.
vinegar|n|giấm|Add a little vinegar to the salad.
`,
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
dietary|adj|thuộc chế độ ăn|The hospital asks about dietary needs before surgery.
marinate|v|ướp (thịt, cá)|You should marinate the chicken for an hour.
simmer|v|đun nhỏ lửa|Let the sauce simmer for twenty minutes.
whisk|v|đánh (trứng, kem)|Whisk the eggs until they are light and fluffy.
sprinkle|v|rắc, rải|Sprinkle some cheese on top of the pasta.
garnish|v|trang trí món ăn|He decided to garnish the dish with fresh herbs.
fillet|n|miếng phi lê|She grilled a salmon fillet with lemon.
dough|n|bột nhào|Knead the dough for ten minutes before baking.
broth|n|nước dùng|The broth was hot and full of flavour.
stew|n|món hầm|Grandma made a beef stew for the whole family.
tender|adj|mềm (thịt)|The meat was so tender that it fell off the bone.
`,
C1: `gourmet|adj|dành cho người sành ăn|They opened a gourmet restaurant in the city centre.
palatable|adj|ngon miệng, dễ ăn|The sauce made the plain rice more palatable.
devour|v|ăn ngấu nghiến|The hungry boys will devour the whole pizza in minutes.
culinary|adj|thuộc ẩm thực, nấu nướng|She studied culinary arts in Paris.
succulent|adj|mọng nước, ngon|The succulent steak melted in his mouth.
`,
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
until|prep, conj|cho đến khi|Wait here until I come back.
weekday|n|ngày trong tuần (thứ Hai đến thứ Sáu)|I get up at six on every weekday.
sunrise|n|bình minh, lúc mặt trời mọc|We watched the sunrise from the top of the hill.
sunset|n|hoàng hôn, lúc mặt trời lặn|The sunset over the sea was beautiful.
midday|n|giữa trưa|We usually eat lunch at midday.
`,
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
up to date|adj|cập nhật, mới nhất|Please keep your records up to date.
a while|phr|một lúc, một thời gian|Please wait here for a while.
for ages|phr|rất lâu rồi|I have not seen my cousin for ages.
in time|phr|kịp lúc|We got to the station in time for the train.
at the moment|phr|lúc này, hiện giờ|My father is cooking at the moment.
afterwards|adv|sau đó|We had dinner and went for a walk afterwards.
once in a while|phr|thỉnh thoảng|I go to the cinema once in a while.
ever since|phr|kể từ đó|Ever since that day, we have been close friends.
every other day|phr|cách một ngày|He goes jogging every other day.
in a moment|phr|một lát nữa|I will call you back in a moment.
`,
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
lifespan|n|tuổi thọ, vòng đời|The average lifespan has increased in the last century.
at once|phr|ngay lập tức|Call the doctor at once!
for the time being|phr|tạm thời, trong lúc này|You can stay with us for the time being.
by the time|phr|đến lúc, vào lúc|By the time we arrived, the film had started.
prompt|adj|nhanh chóng, đúng giờ|Thank you for your prompt reply to my email.
straight away|phr|ngay lập tức|Tell me straight away if there is a problem.
timely|adj|kịp thời|The rescue team gave timely help to the village.
span|n|khoảng thời gian|A short span of attention makes studying hard.
at short notice|phr|vào phút chót, báo trước ít|They asked me to speak at short notice.
`,
C1: `in due course|phr|đúng lúc, vào thời điểm thích hợp|You will receive your results in due course.
transient|adj|thoáng qua, ngắn ngủi|Fame can be transient, and soon people forget you.
in retrospect|phr|nhìn lại, khi xem xét lại|In retrospect, leaving so early was a mistake.
`,
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
zoo|n|sở thú|The children loved the zoo.
bakery|n|tiệm bánh mì|The bakery on our street opens at six.
bookshop|n|hiệu sách|I bought this novel at the bookshop.
stadium|n|sân vận động|Thousands of fans filled the stadium.
`,
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
monument|n|đài tưởng niệm, di tích|The monument is in the centre of the city.
downtown|n|trung tâm thành phố|Most of the big shops are downtown.
post office|n|bưu điện|I need to go to the post office to send this parcel.
high street|n|phố mua sắm chính|The high street is full of shops and cafes.
sightseeing tour|n|chuyến tham quan|We took a sightseeing tour of the old town.
entrance|n|lối vào|Meet me at the main entrance of the museum.
exit|n|lối ra|The nearest exit is behind you.
pier|n|bến tàu, cầu tàu|We walked to the end of the pier.
canyon|n|hẻm núi|The river cut a deep canyon through the rock.
waterfall|n|thác nước|We swam below the waterfall.
cliff|n|vách đá|The house stands at the edge of a cliff.
lighthouse|n|hải đăng|The lighthouse guides ships at night.
shopping mall|n|trung tâm thương mại|The shopping mall has a cinema and many cafes.
`,
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
ancient|adj|cổ xưa|We walked around the ancient city walls.
residential area|n|khu dân cư|It is a quiet residential area with many trees.
industrial area|n|khu công nghiệp|The factory is in an industrial area outside the city.
outskirts|n|vùng ngoại ô|We live on the outskirts of Hanoi.
seafront|n|dải bờ biển (khu phố ven biển)|We had dinner at a cafe on the seafront.
relocate|v|chuyển đến nơi khác|My company wants to relocate to Singapore next year.
tourist trap|n|nơi bẫy du khách (đắt đỏ)|That restaurant is a tourist trap, so the prices are high.
hotspot|n|điểm nóng, địa điểm nổi tiếng|The island is a popular hotspot for divers.
district|n|quận, khu vực|She lives in a busy district of the capital.
town hall|n|tòa thị chính|The wedding took place at the town hall.
nightlife|n|cuộc sống về đêm|The city is famous for its lively nightlife.
`,
C1: `vicinity|n|vùng lân cận|There are no shops in the vicinity of our house.
secluded|adj|hẻo lánh, biệt lập|They found a secluded beach with no other people.
bustling|adj|nhộn nhịp, tấp nập|The bustling streets were full of stalls and noise.
periphery|n|vùng ven, rìa|Many factories are on the periphery of the city.
metropolitan|adj|thuộc đô thị lớn|The metropolitan area has over ten million people.
`,
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
receptionist|n|nhân viên lễ tân|The receptionist answered the phone.
working hours|phr|giờ làm việc|Our working hours are from nine to five.
day off|phr|ngày nghỉ|Tomorrow is my day off, so I will sleep late.
clerk|n|nhân viên văn phòng|The clerk typed my name into the computer.
job offer|phr|lời mời nhận việc|She was happy to get a job offer from a bank.
bonus|n|tiền thưởng|Everyone received a small bonus before the holiday.
`,
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
profession|n|nghề nghiệp (đòi hỏi chuyên môn)|Teaching is a respected profession.
sick leave|phr|nghỉ ốm|He is on sick leave until next Monday.
trainee|n|thực tập sinh, người học việc|The trainee watched the chef carefully all morning.
pension|n|lương hưu|My grandmother lives on a small pension.
cover letter|phr|thư xin việc|Send a short cover letter with your application form.
lay off|phr|cho nghỉ việc|The firm had to lay off ten workers last month.
quit|v|bỏ việc|He decided to quit and start his own business.
self-employed|adj|tự kinh doanh|My aunt is self-employed and works from home.
business trip|phr|chuyến công tác|I am going on a business trip to Hanoi.
dress code|phr|quy định trang phục|The office has a strict dress code on Fridays.
paperwork|n|giấy tờ, thủ tục hành chính|I spent the whole morning doing paperwork.
`,
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
freelance|adj, adv|làm tự do|He works freelance as a translator.
negotiate|v|thương lượng|She managed to negotiate a higher salary.
work ethic|phr|đạo đức làm việc|His strong work ethic impressed everyone in the team.
team leader|phr|trưởng nhóm|The team leader divided the work between us.
job satisfaction|phr|sự hài lòng với công việc|High pay is not the only source of job satisfaction.
workplace culture|phr|văn hóa nơi làm việc|A friendly workplace culture makes people stay longer.
take on|phr|nhận (việc, trách nhiệm)|I cannot take on any more projects this month.
get promoted|phr|được thăng chức|If you work hard, you may get promoted soon.
clock in|phr|chấm công vào|All workers must clock in before eight o'clock.
overworked|adj|làm việc quá sức|The nurses are overworked and badly need more help.
workstation|n|vị trí làm việc|Each workstation has a computer and a phone.
`,
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
vocation|n|thiên hướng nghề nghiệp, sứ mệnh|Nursing is more than a job; it is a vocation.
entitlement|n|quyền lợi|Employees have an entitlement to four weeks of paid holiday.
downsize|v|cắt giảm quy mô|The company had to downsize after losing its biggest client.
efficiency|n|hiệu quả làm việc|The new system has increased our efficiency a lot.
breadwinner|n|trụ cột kinh tế gia đình|He became the family breadwinner after his father died.
`
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
tablet|n|viên thuốc|Take one tablet after each meal.
ankle|n|mắt cá chân|I twisted my ankle while playing football.
throat|n|cổ họng|I have a sore throat and I cannot sing today.
forehead|n|trán|She kissed the baby on the forehead.
eyebrow|n|lông mày|He raised one eyebrow and smiled at me.
nail|n|móng tay|I broke a nail while opening the box.
`,
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
stitch|n|mũi khâu|The doctor put one stitch in his hand.
breathe|v|thở|Try to breathe slowly and stay calm.
swallow|v|nuốt|It hurts when I swallow because of my cold.
blood|n|máu|Blood ran down his knee after he fell.
sneeze|v|hắt hơi|The dust made me sneeze three times.
cough|v|ho|He began to cough loudly during the film.
sweat|n|mồ hôi|Sweat was dripping from his face after the run.
scar|n|vết sẹo|He has a small scar on his chin from a fall.
fist|n|nắm đấm|He closed his fist and tried to stay calm.
blink|v|chớp mắt|Don't blink when the photographer takes the picture.
yawn|v|ngáp|I always yawn when I am tired or bored.
`,
B2: `symptom|n|triệu chứng|A high temperature is a common symptom of flu.
condition|n|tình trạng bệnh|The doctor explained that his condition is not serious.
chronic|adj|mạn tính|Her chronic back pain makes it hard to sit for long.
prescription|n|đơn thuốc|The pharmacist needs a prescription before giving you this medicine.
side effect|n|tác dụng phụ|One side effect of this medicine is feeling sleepy.
wellbeing|n|sự khỏe mạnh toàn diện|Regular sleep is important for your mental wellbeing.
dehydration|n|sự mất nước|Dehydration can cause headaches and dizziness.
nutrition|n|dinh dưỡng|Good nutrition is important for recovery.
posture|n|tư thế|Bad posture can cause back pain.
hygiene|n|vệ sinh|Good hygiene helps prevent infection.
joint|n|khớp|My knee joint hurts when I climb stairs.
spine|n|cột sống|Sitting badly all day can damage your spine.
skeleton|n|bộ xương|The museum has a whole skeleton of a dinosaur.
organ|n|cơ quan (trong cơ thể)|The liver is an important organ in the body.
reflex|n|phản xạ|Pulling your hand from a hot pan is a reflex.
stamina|n|sức bền|Marathon runners need a lot of stamina.
metabolism|n|sự trao đổi chất|Exercise can speed up your metabolism.
physique|n|vóc dáng|The swimmer has a strong, athletic physique.
digestion|n|sự tiêu hóa|Walking after dinner can help your digestion.
circulation|n|sự tuần hoàn máu|Cold hands can be a sign of poor circulation.
`,
C1: `agility|n|sự nhanh nhẹn|The cat jumped onto the shelf with great agility.
dexterity|n|sự khéo tay|Playing the piano requires a lot of manual dexterity.
endurance|n|sức chịu đựng|Long-distance cycling tests your endurance.
coordination|n|sự phối hợp cơ thể|Young children are still developing their coordination.
vitality|n|sức sống|The old man was full of vitality and energy.
`,
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
sleepy|adj|buồn ngủ|The sleepy child went to bed early.
scared|adj|sợ hãi|I was scared when I heard a noise downstairs.
unhappy|adj|không vui|She looks unhappy today, so I asked her why.
pleased|adj|hài lòng|I am very pleased to meet you.
cry|v|khóc|The baby began to cry in the middle of the night.
smile|v|mỉm cười|Please smile for the camera!
`,
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
disgusted|adj|ghê tởm|She felt disgusted by the smell.
ashamed|adj|xấu hổ|He felt ashamed of the lie he had told.
delighted|adj|rất vui mừng|She was delighted with her birthday present.
relieved|adj|nhẹ nhõm|I felt relieved when the exam was finally over.
thrilled|adj|phấn khích|We were thrilled to win the first prize.
furious|adj|giận dữ|My father was furious when he saw the broken window.
terrified|adj|khiếp sợ|She was terrified of flying in small planes.
hopeful|adj|đầy hy vọng|We are hopeful that the weather will improve soon.
annoyed|adj|bực mình|He was annoyed because the train was late again.
miserable|adj|khổ sở, buồn bã|I felt miserable standing in the cold rain.
confused|adj|bối rối, lúng túng|I am confused because the instructions are not clear.
`,
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
content|adj|hài lòng|She felt content with a quiet life.
envious|adj|ghen tị|She felt envious of her friend's beautiful house.
homesick|adj|nhớ nhà|I felt homesick during my first month abroad.
nostalgic|adj|hoài niệm|Old photos make him feel nostalgic about his childhood.
self-esteem|n|lòng tự trọng|Praise from teachers can build a child's self-esteem.
anxiety|n|sự lo âu|She felt great anxiety before the job interview.
sensitive|adj|nhạy cảm|He is very sensitive and cries at sad films.
fed up|phr|chán ngấy|I am fed up with this noisy neighbourhood.
mixed feelings|phr|cảm xúc lẫn lộn|I have mixed feelings about moving to a new city.
cope with|phr|đương đầu với|How do you cope with so much stress?
bottle up|phr|kìm nén (cảm xúc)|Don't bottle up your anger; talk to someone about it.
`,
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
detached|adj|xa cách, khách quan|Doctors must stay emotionally detached but caring.
melancholy|n|nỗi u sầu|A deep melancholy filled him as autumn came.
exasperated|adj|bực tức đến cùng cực|The teacher grew exasperated with the noisy class.
euphoric|adj|phấn chấn tột độ|The fans were euphoric after the team's last-minute goal.
remorse|n|sự hối hận|He felt deep remorse for hurting his sister.
bewildered|adj|bối rối, hoang mang|The tourist looked bewildered by the busy station.
`
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
wallet|n|ví tiền|He lost his wallet on the bus.
shopping list|phr|danh sách đồ cần mua|Don't forget the shopping list when you go out.
mall|n|trung tâm mua sắm lớn|We walked around the mall all afternoon.
store|n|cửa hàng|The store opens at nine every morning.
clothes shop|phr|cửa hàng quần áo|There is a small clothes shop next to the bank.
`,
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
purchase|n, v|việc mua; mua|I made an online purchase yesterday.
complaint|n|lời phàn nàn|She made a complaint about the broken toaster.
shopping centre|phr|trung tâm thương mại|The new shopping centre has over a hundred shops.
window shopping|phr|đi dạo ngắm hàng|We did some window shopping but bought nothing.
shopping trolley|phr|xe đẩy hàng|The shopping trolley was full of fruit and milk.
special offer|phr|khuyến mãi đặc biệt|There is a special offer on coffee this week.
pay back|phr|trả lại tiền|I will pay back the money next week.
label|n|nhãn mác|Check the label to see how to wash it.
shopper|n|người mua sắm|Every shopper wanted to enter the shop on the first day.
price tag|phr|thẻ giá|He forgot to remove the price tag from the gift.
take back|phr|mang trả lại|I need to take back these shoes.
`,
B2: `insurance|n|bảo hiểm|health insurance
expenditure|n|khoản chi tiêu|The family's monthly expenditure on food has risen sharply this year.
out of pocket|phr|tự chi trả|The company did not cover the trip, so I paid out of pocket.
consumer|n|người tiêu dùng|Every consumer has the right to ask for a refund on faulty goods.
overpriced|adj|bị định giá quá cao|The souvenirs at the airport are overpriced.
impulse buy|n|món mua bốc đồng|The chocolate at the till was an impulse buy.
loyalty card|n|thẻ khách hàng thân thiết|I collect points with my loyalty card.
haggle|v|mặc cả|Tourists often haggle in the market.
retailer|n|nhà bán lẻ|The retailer offers free returns on all orders.
wholesale|adj|(bán) sỉ|Wholesale prices are much lower than shop prices.
extravagant|adj|xa hoa, tốn kém|It was an extravagant gift for a first date.
overspend|v|chi tiêu quá mức|Many students overspend during their first month away.
subscription|n|sự đăng ký dài hạn (báo, dịch vụ)|I cancelled my subscription to the magazine.
rip-off|n|sự bán giá cắt cổ|Fifty euros for a sandwich is a rip-off!
good value|phr|đáng đồng tiền|This restaurant is good value for families.
bulk|n|số lượng lớn|Rice is cheaper if you buy it in bulk.
price range|phr|khoảng giá|These laptops are in a lower price range.
`,
C1: `frugal|adj|tiết kiệm, căn cơ|My grandmother was frugal and never wasted food.
consumerism|n|chủ nghĩa tiêu dùng|Critics say consumerism makes people buy things they don't need.
lavish|adj|xa xỉ, hào phóng|The couple organised a lavish wedding for five hundred guests.
markup|n|mức tăng giá bán|Shops often add a high markup to imported goods.
`,
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
wave|n|sóng biển|The big wave hit the beach.
animal|n|động vật|Every animal on the farm has a name.
plant|n|cây, thực vật|This plant needs a lot of water and light.
leaf|n|chiếc lá|A red leaf fell on my head.
rock|n|tảng đá|The children climbed onto a large rock.
sand|n|cát|The sand was too hot to walk on.
`,
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
pollute|v|gây ô nhiễm|Factories must not pollute the river.
insect|n|côn trùng|An insect landed on my arm.
valley|n|thung lũng|A small river runs through the green valley.
desert|n|sa mạc|Very few plants can grow in the desert.
volcano|n|núi lửa|The volcano erupted and covered the town in ash.
earthquake|n|trận động đất|The earthquake shook buildings across the whole city.
coast|n|bờ biển|They drove along the coast for three hours.
rainfall|n|lượng mưa|Rainfall was unusually low this spring.
scenery|n|phong cảnh|The scenery in the mountains was beautiful.
wild|adj|hoang dã|Wild horses still live in these hills.
tide|n|thủy triều|The tide comes in quickly on this beach.
`,
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
ozone layer|phr|tầng ozone|The ozone layer protects us from harmful sun rays.
species|n|loài (sinh vật)|Many species of birds live in this forest.
predator|n|động vật săn mồi|The lion is a powerful predator.
glacier|n|sông băng|The glacier is shrinking a little each year.
erosion|n|sự xói mòn|Heavy rain caused erosion of the river bank.
fertile|adj|màu mỡ|The river leaves behind fertile soil for farmers.
tropical|adj|nhiệt đới|They spent a week on a tropical island.
vegetation|n|thảm thực vật|Thick vegetation covered the hillside.
nocturnal|adj|hoạt động về đêm|Owls are nocturnal, so they sleep during the day.
migrate|v|di cư (động vật)|Many birds migrate south before winter begins.
hurricane|n|bão lớn|The hurricane destroyed hundreds of homes on the coast.
`,
C1: `biodiversity|n|đa dạng sinh học|Protecting wetlands helps preserve biodiversity because many species live there.
deforestation|n|nạn phá rừng|Deforestation destroys the homes of thousands of animals every year.
mitigate|v|giảm nhẹ|Planting trees in cities can help mitigate the effects of extreme heat.
ecosystem|n|hệ sinh thái|Pollution can destroy a delicate ecosystem within a few years.
depletion|n|sự cạn kiệt|The depletion of fish stocks threatens many coastal communities.
degradation|n|sự suy thoái|Soil degradation reduces the amount of food farmers can grow.
resilience|n|khả năng phục hồi, sức chống chịu|Wetlands increase a region's resilience to flooding.
conserve|v|bảo tồn, giữ gìn|Governments must act to conserve scarce water supplies.
irreversible|adj|không thể đảo ngược|Scientists warn that some damage to the ice sheets may be irreversible.
carbon neutral|phr|trung hòa carbon|The city hopes to become carbon neutral by 2040.
ecological|adj|thuộc sinh thái|The oil spill caused serious ecological damage to the bay.
pristine|adj|nguyên sơ, trong lành|We camped beside a pristine mountain lake.
preservation|n|sự bảo tồn|The preservation of old forests is a priority.
indigenous|adj|bản địa|Indigenous plants need less water than imported ones.
devastation|n|sự tàn phá|The flood left devastation across the whole valley.
`
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
chat|v, n|trò chuyện (trực tuyến)|We chat online every evening.
laptop|n|máy tính xách tay|She works on her laptop at the café.
headphones|n|tai nghe|He wore headphones on the bus.
mouse|n|chuột máy tính|The mouse stopped working yesterday.
selfie|n|ảnh tự chụp|She took a selfie in front of the tower.
smartwatch|n|đồng hồ thông minh|His smartwatch counts his steps every day.
`,
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
memory|n|bộ nhớ|My phone has no memory left for new photos.
technology|n|công nghệ|New technology has changed the way we work.
invention|n|phát minh|The telephone was an important invention.
gadget|n|thiết bị nhỏ tiện ích|He loves any new kitchen gadget.
connect|v|kết nối|Can you connect your phone to the speaker?
virtual|adj|ảo|We had a virtual meeting instead of travelling.
offline|adv|không có mạng|You can watch the film offline once it is saved.
folder|n|thư mục|Put all the photos in one folder.
hard drive|phr|ổ cứng|My hard drive is almost full.
crash|v|bị sập, ngừng hoạt động đột ngột|I am afraid my computer will crash while I am writing.
scan|v|quét|Please scan the document and email it to me.
`,
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
malware|n|phần mềm độc hại|The email contained malware that damaged the computer.
upgrade|v|nâng cấp|You should upgrade your software before the trip.
glitch|n|trục trặc nhỏ|A small glitch delayed the launch of the app.
server|n|máy chủ|The website went down when the server crashed.
interface|n|giao diện|The app has a clean and simple interface.
compatible|adj|tương thích|This charger is not compatible with older phones.
cutting-edge|adj|tiên tiến nhất|The lab uses cutting-edge equipment for its research.
router|n|bộ định tuyến|Restart the router if the signal is weak.
open-source|adj|mã nguồn mở|The team used open-source software to save money.
patch|n|bản vá lỗi|The company released a patch to fix the problem.
user-friendly|adj|dễ sử dụng|The new app is simple and user-friendly.
`,
C1: `algorithm|n|thuật toán|The video app uses an algorithm to decide which clips you see next.
misinformation|n|thông tin sai lệch|Misinformation about health can spread quickly on social networks.
encryption|n|mã hóa|Encryption protects your messages so strangers cannot read them.
authentication|n|sự xác thực|Two-step authentication makes your account much harder to hack.
surveillance|n|sự giám sát|Critics argue that mass surveillance threatens personal freedom.
proliferation|n|sự gia tăng nhanh chóng|The proliferation of fake accounts makes online fraud harder to stop.
digital literacy|phr|năng lực số|Schools should teach digital literacy as early as possible.
disruptive|adj|mang tính đột phá, gây xáo trộn|Disruptive technologies can transform whole industries almost overnight.
anonymity|n|sự ẩn danh|Online anonymity can encourage both honest debate and abuse.
ubiquitous|adj|có mặt khắp nơi|Smartphones have become ubiquitous in modern cities.
cyberattack|n|tấn công mạng|The hospital's records were lost in a cyberattack.
sophisticated|adj|tinh vi, phức tạp|The bank uses sophisticated software to detect fraud.
redundant|adj|lỗi thời, không còn cần thiết|Typewriters became redundant once computers arrived.
scalable|adj|có thể mở rộng|They built a scalable system that handles millions of users.
`
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
protest|n, v|cuộc biểu tình; phản đối|Thousands of people joined the protest against the new law.
society|n|xã hội|A healthy society takes care of its older people.
culture|n|văn hóa|Food is an important part of culture.
charity|n|tổ chức từ thiện|She runs a charity that helps homeless people.
homeless|adj|vô gia cư|The city built new shelters for homeless people.
custom|n|phong tục|It is a local custom to remove shoes before entering.
generation gap|phr|khoảng cách thế hệ|There is a big generation gap between me and my uncle.
wealthy|adj|giàu có|A wealthy family built the new hospital.
lifestyle choice|phr|lựa chọn lối sống|Living without a car is a lifestyle choice for many people.
multicultural|adj|đa văn hóa|London is a multicultural city with many languages.
community centre|phr|trung tâm cộng đồng|The community centre runs classes for retired people.
`,
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
refugee|n|người tị nạn|The charity helps every refugee find a home and work.
minority|n|nhóm thiểu số|Only a small minority of students voted against the plan.
prejudice|n|định kiến|Prejudice against older workers is still common.
stereotype|n|khuôn mẫu định kiến|The film breaks the stereotype of the lazy teenager.
authority|n|chính quyền, nhà chức trách|Local authority workers repaired the road quickly.
corruption|n|tham nhũng|The minister resigned after a corruption scandal.
privilege|n|đặc quyền|Education should be a right, not a privilege.
social class|phr|tầng lớp xã hội|Social class still affects the schools children attend.
ageing population|phr|dân số già hóa|An ageing population puts pressure on the health system.
integration|n|sự hòa nhập|Language courses help the integration of new arrivals.
public opinion|phr|dư luận|Public opinion turned against the new tax.
`,
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
demographic|n|nhóm dân số|Young adults are the key demographic for this health campaign.
socioeconomic|adj|thuộc kinh tế xã hội|Socioeconomic background strongly affects children's success at school.
grassroots|adj|cơ sở, từ người dân|The grassroots campaign began in a small village.
solidarity|n|sự đoàn kết|Thousands marched in solidarity with the striking workers.
scrutiny|n|sự xem xét kỹ lưỡng|The new law faced intense public scrutiny.
mainstream|adj|chính thống, phổ biến|The idea soon became mainstream among young voters.
`,
A2: `rich|adj|giàu|The rich man gave money to the school.
poor|adj|nghèo|Many poor families live in this area.
crowd|n|đám đông|A big crowd waited outside the theatre.
foreigner|n|người nước ngoài|A foreigner can easily get lost in this big city.
homeless person|phr|người vô gia cư|A homeless person asked me for food.
`,
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
give back|phr|trả lại|Please give back my pen.
write down|phr|ghi lại|Please write down your phone number here.
throw away|phr|vứt đi|Do not throw away that old bag yet.
slow down|phr|chậm lại|Please slow down; the road is wet.
hand in|phr|nộp|Students must hand in their homework on Friday.
`,
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
get along|phr|hòa thuận|I get along well with my new colleagues.
move in|phr|dọn vào ở|The new neighbours will move in next week.
get back|phr|trở về; lấy lại|When did you get back from your trip?
put away|phr|cất đi|Please put away your toys before dinner.
keep up with|phr|theo kịp|It is hard to keep up with the news these days.
sign up|phr|đăng ký|I want to sign up for a cooking class.
let down|phr|làm thất vọng|Please do not let down your team this time.
stick to|phr|giữ đúng, bám theo|You should stick to the plan we agreed on.
drop off|phr|đưa tới, thả xuống|Can you drop off the children at school today?
fill up|phr|đổ đầy|We stopped to fill up the car with petrol.
`,
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
put up with|phr|chịu đựng|I cannot put up with the noise any longer.
make up for|phr|bù đắp|He bought flowers to make up for being late.
take over|phr|tiếp quản|A larger firm plans to take over the company.
hold back|phr|kìm lại, ngăn lại|She tried to hold back her tears at the ceremony.
fall apart|phr|tan vỡ, sụp đổ|The old chair began to fall apart after years of use.
stand for|phr|viết tắt cho; đại diện cho|What does this symbol stand for on the map?
get away with|phr|thoát tội|He will never get away with cheating on the test.
catch up with|phr|bắt kịp|I ran fast to catch up with my friends.
come across|phr|tình cờ thấy|If you come across my keys, please tell me.
turn into|phr|biến thành|Tadpoles turn into frogs after a few weeks.
point out|phr|chỉ ra|I want to point out one small mistake.
run into|phr|tình cờ gặp|If you run into Anna, say hello for me.
`,
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
tie in with|phr|phù hợp, ăn khớp với|These results tie in with earlier findings on sleep and memory.
crack down on|phr|trấn áp, siết chặt|The city plans to crack down on illegal parking.
iron out|phr|giải quyết (trục trặc)|We still need to iron out a few small problems.
play down|phr|hạ thấp tầm quan trọng|The minister tried to play down the seriousness of the error.
scale back|phr|cắt giảm quy mô|The company had to scale back its plans because of costs.
`
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
findings|n|những phát hiện|The findings of the study were published last month.
statistics|n|số liệu thống kê|The statistics show that more people now work from home.
emphasis|n|sự nhấn mạnh|The course puts great emphasis on speaking skills.
specific|adj|cụ thể|Can you give me a specific example of this?
evaluate|v|đánh giá|Teachers evaluate each student at the end of term.
justify|v|biện minh|Nothing can justify such rude behaviour.
exclude|v|loại trừ|We should not exclude anyone from the discussion.
modify|v|điều chỉnh, sửa đổi|We had to modify the plan because of the weather.
implement|v|thực hiện, triển khai|The school will implement the new rules in May.
illustrate|v|minh hoạ|This story helps to illustrate the point clearly.
equivalent|n|vật tương đương|A kilometre is the equivalent of about 0.6 miles.
contradict|v|mâu thuẫn|His words contradict what he did yesterday.
transform|v|biến đổi|Technology can transform the way we learn.
monitor|v|theo dõi|Nurses monitor the patients all night.
logic|n|tính logic, lập luận hợp lý|I cannot follow the logic of your argument.
`,
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
theoretical|adj|thuộc lý thuyết|The study is mainly theoretical and has no practical results yet.
substantiate|v|chứng minh bằng chứng cứ|You must substantiate your claims with real data.
elaborate|v|nói rõ thêm|Could you elaborate on your second point?
manipulate|v|thao túng|Some adverts try to manipulate how we feel.
accumulate|v|tích luỹ|Dust can accumulate quickly in an empty house.
incorporate|v|kết hợp, đưa vào|The designer chose to incorporate old ideas into the new model.
scope|n|phạm vi|That question is outside the scope of this course.
abstract|adj|trừu tượng|Freedom is an abstract idea that is hard to define.
attribute|v|cho là do|Many people attribute her success to hard work.
`,
B1: `summary|n|bản tóm tắt|Write a short summary of the story in your own words.
chart|n|biểu đồ|The chart shows how sales changed each month.
diagram|n|sơ đồ|The teacher drew a diagram on the board.
predict|v|dự đoán|Scientists predict that summers will become hotter.
volume|n|lưu lượng, khối lượng|The volume of traffic increases at rush hour.
criticism|n|lời phê bình|The film received a lot of criticism.
investigate|v|điều tra, nghiên cứu|Police will investigate the cause of the fire.
overview|n|cái nhìn tổng quan|The first chapter gives a short overview of the topic.
`,
}},
{ id: "discourse", icon: "🧩", color: "#b0582b", title: "Linking & discourse", vi: "Từ nối và diễn ngôn", levels: {
A2: `and|conj|và|Anna bought bread and milk at the market.
but|conj|nhưng|I like tea, but my sister prefers coffee.
because|conj|vì|Minh stayed home because he was ill.
so|conj|nên|It was raining, so we took a taxi.
then|adv|sau đó|First wash your hands, then sit down to eat.
also|adv|cũng|Lan speaks English and she also speaks French.
after that|phr|sau đó|We had lunch, and after that we went for a walk.
or|conj|hoặc|Do you want tea or coffee?
lastly|adv|cuối cùng|Lastly, I want to thank all my friends.
such as|phr|chẳng hạn như|I like fruit such as apples and grapes.
at first|phr|lúc đầu|At first, I did not like the city.
anyway|adv|dù sao đi nữa|It rained, but we went out anyway.
`,
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
in short|phr|tóm lại|In short, the plan did not work.
for instance|phr|ví dụ|Many cities, for instance Hanoi, are very crowded.
in conclusion|phr|tóm lại|In conclusion, exercise is good for everyone.
as well as|phr|cũng như|She speaks French as well as English.
what is more|phr|hơn nữa|The hotel was clean, and what is more, it was cheap.
after all|phr|rốt cuộc, dù sao|Let's go out; it is the weekend after all.
by the way|phr|nhân tiện|By the way, did you call your mother?
in the end|phr|cuối cùng|We tried many ideas, and in the end we won.
to be honest|phr|thành thật mà nói|To be honest, I did not enjoy the film.
so far|phr|cho đến nay|So far, I have read three chapters of the book.
`,
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
on the whole|phr|nhìn chung|On the whole, the trip was a success.
to begin with|phr|trước hết|To begin with, the room is too small.
above all|phr|trên hết|Above all, stay calm and do not run.
on the contrary|phr|ngược lại|I am not angry; on the contrary, I am pleased.
as for|phr|còn về|As for dinner, I will cook tonight.
apart from|phr|ngoài ra, trừ|Apart from Tom, everyone came to the party.
even so|phr|dù vậy|The test was hard; even so, most students passed.
in general|phr|nói chung|In general, people here are friendly and helpful.
in particular|phr|đặc biệt|I love sweet food, chocolate in particular.
`,
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
as opposed to|phr|trái với, thay vì|The study compared home care as opposed to hospital care.
all things considered|phr|xét mọi mặt|All things considered, it was a successful trip.
by and large|phr|nhìn chung|By and large, the plan worked well.
to a certain extent|phr|ở một mức độ nào đó|To a certain extent, I agree with your idea.
for the most part|phr|phần lớn|For the most part, the students were polite.
`
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
make sure|phr|đảm bảo|Make sure you lock the door when you leave.
give it a try|phr|thử xem|I have never cooked fish, but I will give it a try.
do your best|phr|cố gắng hết sức|Just do your best and do not worry.
on purpose|phr|cố ý|He did not break it on purpose.
in a mess|phr|bừa bộn, rối tung|Your room is in a mess again.
by heart|phr|thuộc lòng|She learned the whole poem by heart.
for a while|phr|một lúc|Let's sit here for a while and rest.
take your time|phr|cứ từ từ|Take your time; there is no rush.
take a chance|phr|liều thử|I decided to take a chance and apply.
change your mind|phr|đổi ý|If you change your mind, just call me.
`,
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
call it a day|phr|nghỉ, dừng làm việc hôm nay|We are all tired, so let us call it a day.
keep an eye on|phr|để mắt tới|Could you keep an eye on my bag, please?
hit the nail on the head|phr|nói trúng phóc|You hit the nail on the head with that comment.
out of the blue|phr|bất ngờ|He called me out of the blue last night.
spill the beans|phr|lỡ tiết lộ bí mật|Please do not spill the beans about the party.
get the hang of|phr|nắm được cách làm|You will soon get the hang of this machine.
let off steam|phr|xả bực dọc|Running helps me let off steam after work.
look on the bright side|phr|nhìn mặt tích cực|Try to look on the bright side of things.
sit on the fence|phr|đứng giữa, không chọn bên|Stop trying to sit on the fence and choose.
in no time|phr|rất nhanh|The food will be ready in no time.
make a difference|phr|tạo nên khác biệt|Small acts of kindness can make a difference.
miss the point|phr|không hiểu ý chính|Please do not miss the point of my story.
go the extra mile|phr|nỗ lực hơn mức cần thiết|I always try to go the extra mile for my clients.
`,
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
come to terms with|phr|chấp nhận, thích nghi với|It took her a long time to come to terms with the diagnosis.
jump the gun|phr|hành động vội vàng|Do not jump the gun before you hear the facts.
go back to the drawing board|phr|làm lại từ đầu|The plan failed, so we must go back to the drawing board.
the elephant in the room|phr|vấn đề lớn không ai nhắc tới|Money was the elephant in the room at the meeting.
a leap of faith|phr|bước đi liều dựa vào niềm tin|Moving abroad was a leap of faith for her.
throw in the towel|phr|bỏ cuộc|Do not throw in the towel after one failure.
`,
A2: `have fun|phr|vui chơi|We always have fun at the beach.
take care|phr|bảo trọng; cẩn thận|Take care and call me when you arrive.
in a hurry|phr|vội vã|I am in a hurry, so I cannot talk now.
by mistake|phr|do nhầm lẫn|I took your phone by mistake this morning.
`,
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
no|excl|không|No, thank you.
forty|n|số bốn mươi|My grandfather is forty years older than me.
fifty|n|số năm mươi|The ticket costs fifty euros.
sixty|n|số sáu mươi|There are sixty minutes in an hour.
seventy|n|số bảy mươi|The bus carries about seventy people.
bottom|n|đáy, phần dưới cùng|The answer is at the bottom of the page.
top|n|đỉnh, phía trên cùng|We climbed to the top of the hill.
fourteen|n|số mười bốn|My sister is fourteen years old.
zero|n|số không|The temperature fell to zero last night.
`,
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
whose|det|của ai|Whose coat is this?
eighty|n|số tám mươi|My grandmother is eighty years old.
ninety|n|số chín mươi|The test lasts ninety minutes.
gold|n|vàng; màu vàng kim|She wore a ring made of gold.
silver|n|bạc; màu bạc|He won a silver medal at the games.
rectangle|n|hình chữ nhật|A door is usually shaped like a rectangle.
middle|n|giữa|There is a table in the middle of the room.
fraction|n|phân số, một phần nhỏ|A fraction of the class arrived late today.
`
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
glasses|n|kính mắt|He wears glasses to read.
sweatshirt|n|áo nỉ|He wore a grey sweatshirt and old jeans.
shoe|n|chiếc giày|I lost a shoe while running for the bus.
hoodie|n|áo hoodie|She wore a warm hoodie on the cold morning.
necklace|n|vòng cổ|My mother gave me a silver necklace.
`,
B1: `bra|n|áo ngực|She bought a new bra.
leather|n|da thuộc|Her bag is made of leather.
silk|n|lụa|The scarf is made of pure silk.
fashion|n|thời trang|She is interested in fashion.
stylish|adj|phong cách, thời thượng|He looks stylish in that jacket.
casual|adj|giản dị, thường ngày|I wear casual clothes at weekends.
formal|adj|trang trọng|You need formal clothes for the ceremony.
tight|adj|chật, bó|These shoes are too tight.
loose|adj|rộng, lỏng|He wore a loose shirt in the heat.
dress up|phr|ăn mặc chỉnh tề|We had to dress up for the wedding.
bracelet|n|vòng tay|She wore a gold bracelet on her wrist.
earring|n|bông tai|She lost an earring at the party.
purse|n|ví nhỏ đựng tiền|I think I left my purse at home.
handbag|n|túi xách|She kept her phone in her handbag.
sunglasses|n|kính râm|He put on sunglasses because the sun was strong.
collar|n|cổ áo|He turned up the collar of his coat against the wind.
hanger|n|móc treo quần áo|Put your jacket on a hanger so it doesn't get creased.
outfit|n|bộ trang phục|She chose a smart outfit for the party.
ring|n|chiếc nhẫn|He gave her a ring on her birthday.
`,
B2: `tailor|n|thợ may|The tailor made my suit in a week.
fabric|n|vải|The fabric is soft and light.
waterproof|adj|chống thấm nước|I need a waterproof jacket for the hike.
accessory|n|phụ kiện|A scarf is a simple accessory.
alter|v|sửa (quần áo)|Can you alter these trousers for me?
fashionable|adj|hợp thời trang|These shoes are very fashionable this year.
baggy|adj|rộng thùng thình|He liked wearing baggy jeans and a loose shirt.
trendy|adj|thời thượng|They went to a trendy shop in the city centre.
garment|n|y phục, quần áo|Each garment is checked before it leaves the factory.
hem|n|đường viền gấu|The hem of her skirt was torn.
thread|n|sợi chỉ|She sewed the button on with strong thread.
lining|n|lớp lót|The coat has a warm lining inside.
button up|phr|cài khuy|Button up your coat because it is freezing outside.
`,
C1: `attire|n|trang phục|Formal attire is required at the wedding.
apparel|n|quần áo, hàng may mặc|The company sells sports apparel in many countries.
threadbare|adj|sờn rách|He wore a threadbare coat that had seen better days.
ensemble|n|bộ trang phục phối hợp|Her ensemble of a blue jacket and matching skirt looked elegant.
`,
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
traveller|n|du khách (US: traveler)|Every traveller needs a passport.
bus station|n|bến xe buýt|The bus station is near the market.
train station|n|ga tàu|I will meet you at the train station at noon.
one-way|adj|một chiều|I bought a one-way ticket to Da Nang.
truck|n|xe tải|A big truck stopped in front of the shop.
ticket office|n|phòng bán vé|The ticket office opens at eight.
`,
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
cycle lane|n|làn đường dành cho xe đạp|There is a new cycle lane on our street.
land|v|hạ cánh|Our plane will land in about twenty minutes.
check-in desk|n|quầy làm thủ tục|The queue at the check-in desk was very long.
get a lift|phr|được cho đi nhờ xe|Can I get a lift to school with you?
pull over|phr|tấp xe vào lề|The police asked him to pull over.
run out of petrol|phr|hết xăng|Fill the tank so you do not run out of petrol.
engine|n|động cơ|The engine of my car is very loud.
tyre|n|lốp xe|I need to change a flat tyre.
zebra crossing|n|vạch qua đường|Always cross at the zebra crossing.
cabin|n|khoang (máy bay, tàu)|The cabin was quiet and comfortable.
`,
B2: `carpool|v, n|đi chung xe|My colleagues and I carpool to work.
hitchhike|v|đi nhờ xe dọc đường|They plan to hitchhike across the country.
pedestrian|n|người đi bộ|A pedestrian crossed the road carefully.
cyclist|n|người đi xe đạp|The cyclist wore a bright helmet.
overtake|v|vượt xe|Do not overtake on a bend.
detour|n|đường vòng|We took a detour because of road works.
road works|n|công trường sửa đường|Road works caused long delays this morning.
layover|n|thời gian quá cảnh|I had a three-hour layover in Singapore.
bypass|n|đường tránh|The new bypass keeps trucks out of the town.
transit|n|sự vận chuyển (trên đường đi)|The goods were lost in transit.
on board|phr|trên tàu, trên máy bay|There were two hundred passengers on board.
toll|n|phí cầu đường|You have to pay a toll to use this bridge.
reverse|v|lùi xe|He had to reverse the car into the narrow garage.
brake|n|phanh|I pressed the brake when the child ran across the road.
steering wheel|n|vô lăng|She kept both hands on the steering wheel.
accelerate|v|tăng tốc|Press the pedal gently to accelerate smoothly.
sat nav|n|thiết bị dẫn đường GPS|My sat nav showed a faster way home.
public transit|n|giao thông công cộng|Many people in big cities rely on public transit.
windscreen|n|kính chắn gió|Rain hit the windscreen hard.
crew|n|phi hành đoàn, thủy thủ đoàn|The crew welcomed us on the plane.
seat reservation|n|đặt chỗ ngồi|A seat reservation is required on this train.
`,
C1: `gridlock|n|tắc nghẽn hoàn toàn|Gridlock paralysed the city centre.
congested|adj|tắc nghẽn|The congested roads made me late for the meeting.
gridlocked|adj|kẹt cứng|The gridlocked streets did not move for an hour.
navigate|v|tìm đường, điều hướng|It is easy to navigate the city with a good map.
aviation|n|hàng không|He works in the aviation industry.
`
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
karaoke|n|karaoke|We sang at a karaoke bar on Saturday.
free time|n|thời gian rảnh|What do you do in your free time?
chess|n|cờ vua|My grandfather taught me how to play chess.
video game|n|trò chơi điện tử|My brother plays a video game every evening.
puzzle|n|trò chơi giải đố|This puzzle has a thousand small pieces.
`,
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
backpacking|n|du lịch bụi|He spent a year backpacking across Asia.
hang out|phr|đi chơi, tụ tập|I often hang out with my friends after school.
stay in|phr|ở nhà|I am tired, so I will stay in tonight.
entertainment|n|giải trí|There is live entertainment at the hotel every night.
enjoyable|adj|thú vị, dễ chịu|It was a very enjoyable evening.
amusement park|n|công viên giải trí|We spent the day at the amusement park.
mess around|phr|nghịch ngợm, chơi vẩn vơ|We just mess around at the park on Sundays.
chat room|n|phòng trò chuyện trực tuyến|He met many friends in an online chat room.
outdoors|adv|ngoài trời|We love to eat outdoors in the summer.
karaoke bar|n|quán karaoke|We sang all night at a karaoke bar.
roller coaster|n|tàu lượn siêu tốc|The roller coaster was fast and scary.
`,
B2: `amateur|n, adj|người nghiệp dư; nghiệp dư|He is an amateur photographer who sells a few pictures.
spectator|n|khán giả (thể thao)|Every spectator in the stadium stood up and clapped.
fixture|n|trận đấu theo lịch|The next fixture is against our local rivals.
blockbuster|n|phim bom tấn|The summer blockbuster made millions in a week.
soundtrack|n|nhạc phim|The soundtrack of the film is wonderful.
leisure activity|phr|hoạt động giải trí|Walking is a cheap and healthy leisure activity.
pastime|n|trò tiêu khiển|Reading is her favourite pastime.
unwind|v|thư giãn, xả hơi|A hot bath helps me unwind after work.
recreation|n|sự giải trí, thư giãn|The park offers space for sport and recreation.
stage|n|sân khấu|The singer walked onto the stage.
rehearse|v|diễn tập, tập dượt|The actors rehearse every evening before the show.
admission|n|phí vào cửa|Admission to the museum is free on Sundays.
thrilling|adj|hồi hộp, li kỳ|The film has a thrilling ending.
gig|n|buổi biểu diễn nhạc trực tiếp|We went to a rock gig last Friday.
stroll|n|cuộc đi dạo|We took a slow stroll along the river.
binge-watch|v|xem liền một mạch nhiều tập|I like to binge-watch comedy series on rainy days.
`,
C1: `hobbyist|n|người chơi theo sở thích|He is a keen hobbyist who builds model planes.
leisurely|adj|thong thả, nhàn nhã|We had a leisurely breakfast on the balcony.
pursuit|n|thú vui, hoạt động theo đuổi|Golf is a popular pursuit among older people.
spectacle|n|cảnh tượng ngoạn mục|The fireworks were an amazing spectacle.
diversion|n|trò giải khuây|Music was a welcome diversion from his studies.
dabble|v|thử làm (cho vui)|I like to dabble in painting at the weekend.
`,
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
quiz|n|bài kiểm tra ngắn, câu đố|We have a quiz every Friday.
canteen|n|căng tin|We eat lunch together in the canteen at noon.
lunchtime|n|giờ ăn trưa|We play football in the playground at lunchtime.
school bag|phr|cặp sách|My school bag is too heavy to carry.
school trip|phr|chuyến đi của trường|Our school trip to the zoo is on Friday.
nursery|n|nhà trẻ|Her baby goes to nursery three days a week.
`,
B1: `graduate|v|tốt nghiệp|He will graduate next year.
attendance|n|sự có mặt, tỉ lệ đi học|The teacher checks attendance at the start of each class.
textbook|n|sách giáo khoa|Please open your textbook at page forty.
kindergarten|n|trường mẫu giáo|My little sister goes to kindergarten in the morning.
primary school|phr|trường tiểu học|He started primary school when he was six.
secondary school|phr|trường trung học|She goes to secondary school by bus every day.
principal|n|hiệu trưởng|The principal gave a speech at the opening ceremony.
tuition|n|học phí, sự giảng dạy|Tuition at this university is quite expensive.
detention|n|phạt ở lại sau giờ học|He got detention for talking in class.
report card|phr|phiếu điểm, học bạ|My parents were proud of my report card.
boarding school|phr|trường nội trú|She lives at boarding school during the week.
`,
B2: `seminar|n|buổi hội thảo chuyên đề|We discuss the reading in a weekly seminar.
lecturer|n|giảng viên|The lecturer spoke for an hour about modern art.
graduation|n|lễ tốt nghiệp|Her parents came to her graduation in June.
diploma|n|văn bằng, chứng chỉ|He received a diploma in business after two years.
mock exam|phr|kỳ thi thử|We have a mock exam in January to practise.
revision|n|sự ôn tập|I did four hours of revision for the chemistry test.
cheat|v|gian lận|Students who cheat in exams may be sent away.
bully|v|bắt nạt|Nobody should bully another child at school.
distance learning|phr|học từ xa|Distance learning lets people study without leaving home.
multiple choice|phr|trắc nghiệm|The test was multiple choice, so it was easy to mark.
`,
C1: `academic|adj|thuộc học thuật|Her academic record is excellent.
thesis|n|luận án|He defended his thesis in front of three professors.
undergraduate|n|sinh viên đại học (chưa tốt nghiệp)|As an undergraduate, she studied law for three years.
postgraduate|adj|sau đại học|She is doing a postgraduate course in economics.
faculty|n|khoa (đại học)|She teaches in the faculty of science at the university.
`,
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
reach|v|với tới; đến được|We reach the village before dark.
pull|v|kéo|He had to pull the heavy door to open it.
push|v|đẩy|Please push the button and wait for the lift.
pick|v|chọn; nhặt|You can pick any book from the shelf.
hide|v|giấu, trốn|The child tried to hide behind the curtain.
pour|v|rót, đổ|Please pour some water into my glass.
`,
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
warn|v|cảnh báo|The doctor will warn him about the risks.
attract|v|thu hút|The festival will attract visitors from all over the country.
depend|v|phụ thuộc|The price will depend on the size of the room.
divide|v|chia|The teacher will divide the class into four small groups.
ignore|v|phớt lờ|He chose to ignore the noise from the street.
last|v|kéo dài|The film will last about two hours.
rely|v|dựa vào, tin cậy|You can rely on me to arrive on time.
represent|v|đại diện|She was chosen to represent her country at the games.
repeat|v|lặp lại|Could you repeat the question, please?
reply|v|trả lời|I will reply to your email tomorrow morning.
recommend|v|giới thiệu, khuyên|Can you recommend a good restaurant near here?
`,
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
imply|v|ngụ ý, hàm ý|His silence seemed to imply that he disagreed.
accomplish|v|hoàn thành, đạt được|They managed to accomplish the whole task in one week.
acquire|v|có được, tiếp thu|Children acquire language very quickly in their first years.
commit|v|cam kết, dành (thời gian, công sức)|He promised to commit more time to his studies.
confirm|v|xác nhận|Please confirm your booking by email before Friday.
resolve|v|giải quyết|They met to resolve the problem between the two teams.
regulate|v|điều chỉnh, quản lý|The government wants to regulate the price of water.
reveal|v|tiết lộ, để lộ|The report will reveal how the money was spent.
undergo|v|trải qua|The old bridge will undergo major repairs next year.
tackle|v|giải quyết (vấn đề)|The government plans to tackle unemployment this year.
overlook|v|bỏ sót, không để ý|It is easy to overlook small mistakes when you are tired.
`,
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
warrant|v|đáng, biện minh cho|The situation does not warrant such a strong response.
bolster|v|củng cố, hỗ trợ|New evidence will bolster the case against the company.
disrupt|v|làm gián đoạn|Heavy snow can disrupt trains and flights for days.
perceive|v|nhận thức, cảm nhận|Many people perceive this change as a threat.
reinforce|v|củng cố, tăng cường|The results reinforce our belief that the plan is right.
scrutinise|v|xem xét kỹ lưỡng|Experts will scrutinise every detail of the contract.
`
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
famous|adj|nổi tiếng|She is a famous singer.
clumsy|adj|vụng về|He is clumsy and often drops his cup.
silly|adj|ngớ ngẩn|It was a silly mistake, and we all laughed.
lucky|adj|may mắn|You are lucky to have such kind neighbours.
messy|adj|bừa bộn|His desk was messy, with papers everywhere.
weak|adj|yếu|After the long illness, he felt weak for weeks.
`,
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
generally|adv|nói chung, thường thì|People generally eat dinner at seven here.
awkward|adj|khó xử, ngượng ngùng|There was an awkward silence after his strange question.
hesitant|adj|do dự|He was hesitant to speak in front of the class.
reasonably|adv|khá, một cách hợp lý|The room was reasonably clean for such a cheap hotel.
cautious|adj|thận trọng|Be cautious when you cross the busy road.
reasonable|adj|hợp lý, phải chăng|The hotel offers rooms at a reasonable price.
ordinary|adj|bình thường|It was an ordinary day until the phone rang.
optional|adj|không bắt buộc|The extra lesson on Friday is optional.
convenient|adj|thuận tiện|The shop is convenient because it is next to the station.
properly|adv|đúng cách|You should chew your food properly before you swallow.
hardly|adv|hầu như không|I was so tired that I could hardly keep my eyes open.
`,
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
substantial|adj|đáng kể, lớn|She received a substantial amount of money.
ambitious|adj|tham vọng|She is an ambitious young woman with big plans.
vague|adj|mơ hồ, không rõ ràng|His answer was vague, so nobody understood his plan.
tough|adj|khó khăn; cứng rắn|It was a tough decision for the whole family.
genuine|adj|chân thật, thật|She showed genuine interest in everything I said.
mutual|adj|lẫn nhau, chung|They ended the contract by mutual agreement.
rapidly|adv|nhanh chóng|The town has grown rapidly over the last ten years.
widespread|adj|phổ biến, lan rộng|There is widespread support for the new law.
versatile|adj|đa năng|A versatile tool can be used for many different jobs.
dramatic|adj|đột ngột, ấn tượng|There was a dramatic change in the weather overnight.
inadequate|adj|không đủ, kém|The old equipment was inadequate for the new job.
`,
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
ultimately|adv|cuối cùng, xét cho cùng|Ultimately, the decision belongs to the patient.
meticulous|adj|tỉ mỉ, cẩn thận|He kept meticulous records of every payment.
stringent|adj|nghiêm ngặt|The country has stringent rules about food safety.
rigorous|adj|nghiêm ngặt, chặt chẽ|The test is rigorous and only a few students pass.
elusive|adj|khó nắm bắt|Success remained elusive despite years of hard work.
fleeting|adj|thoáng qua|I only caught a fleeting glimpse of the famous singer.
`
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
trouble|n|rắc rối, phiền toái|I am in trouble with my teacher.
souvenir|n|quà lưu niệm|I bought a small souvenir from the market.
ladder|n|cái thang|He climbed the ladder to fix the roof.
shortcut|n|đường tắt|We took a shortcut through the park to save time.
goal|n|mục tiêu|My goal is to speak English fluently next year.
`,
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
pressure|n|áp lực; sức ép|Many students feel pressure before exams.
boundary|n|ranh giới|A tall fence marks the boundary of the farm.
limit|n|giới hạn|There is a limit to how much weight the bridge can hold.
version|n|phiên bản|The new version of the app is much faster.
tool|n|công cụ|A good dictionary is a useful tool for learners.
fault|n|lỗi, trách nhiệm cho điều sai|The accident was not my fault.
impact|n|tác động|The new road had a big impact on local shops.
standard|n|tiêu chuẩn, mức|The school has a very high standard for its students.
recommendation|n|lời khuyên, đề xuất|The doctor made a recommendation to rest for a week.
structure|n|cấu trúc|The structure of the essay was clear and simple.
tendency|n|xu hướng, thiên hướng|He has a tendency to arrive late for meetings.
`,
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
strategy|n|chiến lược|We need a clear strategy to reduce costs.
gap|n|khoảng trống, chênh lệch|There is a big gap between rich and poor families.
foundation|n|nền tảng, cơ sở|Good habits are the foundation of a healthy life.
barrier|n|rào cản|Language can be a barrier when you move abroad.
evaluation|n|sự đánh giá|The teacher made an evaluation of each student's progress.
milestone|n|cột mốc|Learning to read is a major milestone for a child.
dispute|n|tranh chấp|The two neighbours had a long dispute about the fence.
initiative|n|sáng kiến|The city launched a new initiative to plant more trees.
misconception|n|quan niệm sai|It is a common misconception that carrots help you see in the dark.
hazard|n|mối nguy hiểm|A wet floor can be a hazard for visitors.
phenomenon|n|hiện tượng|Rainbows are a natural phenomenon that people love to watch.
reputation|n|danh tiếng|The restaurant has a good reputation for fresh food.
`,
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
catalyst|n|chất xúc tác, tác nhân thúc đẩy|The crisis was a catalyst for change in the health system.
anomaly|n|điều bất thường|The warm weather in January was a strange anomaly.
inertia|n|sự trì trệ, quán tính|Inertia kept the old system in place for many years.
ethos|n|tinh thần, đặc trưng|The company's ethos is based on honesty and teamwork.
hurdle|n|trở ngại|Getting the money was the first big hurdle for the project.
repercussion|n|hậu quả|The decision may have a serious repercussion for the whole region.
`
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
reception|n|quầy lễ tân|Please wait at reception until someone comes.
copy|v|sao chép, photo|Please copy this letter for everyone in the team.
stapler|n|cái dập ghim|Could I borrow your stapler for a minute?
envelope|n|phong bì|Put the letter in an envelope and seal it.
cabinet|n|tủ hồ sơ|The old files are in the filing cabinet by the door.
`,
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
get back to|phr|trả lời lại, liên hệ lại|I will get back to you by Friday.
photocopier|n|máy photocopy|The photocopier is out of paper again.
brainstorm|v|động não nghĩ ý tưởng|Let us brainstorm some ideas before the meeting ends.
follow up|phr|theo dõi tiếp|I will follow up with the client tomorrow.
attend|v|tham dự|All managers must attend the meeting on Thursday.
assign|v|giao việc|The boss will assign a new task to each of us.
stationery|n|văn phòng phẩm|We ordered new stationery for the whole office.
cubicle|n|ngăn làm việc|Each worker has a small cubicle with a computer.
forward|v|chuyển tiếp (thư)|Can you forward the email to the whole team?
handout|n|tài liệu phát tay|She gave each person a handout at the start.
`,
B2: `branch|n|chi nhánh|She works at the company's branch in the next town.
subsidiary|n|công ty con|The firm opened a subsidiary overseas to serve local customers.
merger|n|sáp nhập|After the merger, the two companies shared one office.
facilitate|v|tạo điều kiện|A good leader should facilitate discussion rather than dominate it.
delegate|v|giao việc, ủy quyền|A busy manager must learn to delegate small tasks to the team.
on behalf of|phr|thay mặt cho|I'm writing on behalf of my manager.
in charge of|phr|phụ trách|Nam is in charge of training the new staff.
as of|phr|kể từ (ngày)|As of Monday, the office opens at 8.
stakeholder|n|bên liên quan|We must inform every stakeholder before the change.
streamline|v|tinh gọn quy trình|The company wants to streamline its ordering process.
prioritize|v|ưu tiên|You need to prioritize your tasks before the busy week begins.
collaborate|v|hợp tác|Our two teams collaborate closely on every new design.
take minutes|phr|ghi biên bản|Could you take minutes during today's discussion?
time management|phr|quản lý thời gian|Good time management helps me finish work before the deadline.
multitask|v|làm nhiều việc cùng lúc|I cannot multitask when I am writing important emails.
ground rules|phr|quy tắc cơ bản|We agreed on some ground rules for our meetings.
action item|phr|đầu việc cần làm|The last action item is to book a room.
wrap up|phr|kết thúc|Let us wrap up the meeting before five o'clock.
`,
C1: `reconvene|v|họp lại|The committee will reconvene after a short lunch break.
take on board|phr|tiếp thu|The manager promised to take on board our suggestions.
ramifications|n|hệ quả|The ramifications of the decision are still unclear.
delegation|n|việc giao quyền|Good delegation gives managers more time to plan.
`,
}},
{ id: "t-hr", sec: "toeic", exam: ["TOEIC"], icon: "🧑‍💼", color: "#7b52c9", title: "Hiring & human resources", vi: "Tuyển dụng và nhân sự", levels: {
A2: `apply|v|nộp đơn|You can apply for this position online before Friday.
staff|n|nhân viên (tập thể)|The staff are very friendly here.
holiday pay|phr|lương ngày nghỉ|We get full holiday pay in August.
training course|phr|khóa đào tạo|I took a training course in first aid.
work hours|phr|giờ làm việc|My work hours are from nine to five.
`,
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
maternity leave|n|nghỉ thai sản|She returns from maternity leave next month.
recruitment|n|việc tuyển dụng|The company has started a recruitment campaign for new nurses.
dismiss|v|sa thải|The company had to dismiss two workers for being late.
work experience|phr|kinh nghiệm làm việc|The job requires two years of work experience.
shortlist|v|chọn vào danh sách rút gọn|We will shortlist five people for the final interview.
notice period|phr|thời gian báo trước khi nghỉ việc|My notice period is one month.
raise|n|sự tăng lương|He asked his boss for a raise after one year.
flexible hours|phr|giờ làm linh hoạt|We have flexible hours, so I start late on Mondays.
skilled|adj|có tay nghề|The factory is looking for skilled workers.
`,
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
turnover|n|tỷ lệ nghỉ việc (nhân sự); doanh thu|High staff turnover is costly for the company.
probationary|adj|thử việc|She is still in her probationary period at the firm.
onboarding|n|quá trình hội nhập nhân viên mới|Good onboarding helps new workers feel welcome on day one.
job description|phr|bản mô tả công việc|The job description lists all the main duties of the role.
dismissal|n|việc sa thải|The workers complained about the unfair dismissal of their friend.
talent|n|nhân tài, năng khiếu|Our company wants to attract the best young talent.
probation period|phr|thời gian thử việc|Your probation period lasts three months.
headcount|n|tổng số nhân sự|The company plans to increase its headcount by ten percent.
job security|phr|sự ổn định việc làm|Many people prefer job security to a higher salary.
career path|phr|lộ trình nghề nghiệp|The firm shows young staff a clear career path.
disciplinary|adj|mang tính kỷ luật|He faced a disciplinary meeting after the argument.
`,
C1: `grievance|n|khiếu nại, bất bình|She filed a grievance about the way she was treated.
severance|n|trợ cấp thôi việc|He received a month of severance pay when he left.
headhunt|v|săn đầu người|A large bank tried to headhunt our best engineer.
poach|v|lôi kéo người từ công ty khác|Rival firms often poach skilled staff with higher pay.
`,
}},
{ id: "t-finance", sec: "toeic", exam: ["TOEIC", "IELTS"], icon: "💹", color: "#1f8f5f", title: "Finance & budgets", vi: "Tài chính và ngân sách", levels: {
A2: `cost|n, v|chi phí; có giá|The cost of the repair was very high.
profit|n|lợi nhuận|The shop made a small profit last month.
tax|n|thuế|You must pay tax on your income.
credit card|n|thẻ tín dụng|Can I pay by credit card?
total|n|tổng cộng|The total is fifty dollars.
owe|v|nợ|I owe my brother ten euros.
bank account|phr|tài khoản ngân hàng|I opened a bank account when I got my first job.
`,
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
interest rate|n|lãi suất|The bank has raised the interest rate again.
savings|n|tiền tiết kiệm|She spent all her savings on a trip abroad.
overdraft|n|thấu chi|The bank charges a fee when you go into overdraft.
bank statement|phr|sao kê ngân hàng|Check your bank statement for any strange payments.
instalment|n|khoản trả góp|I pay each instalment for my laptop on the first day.
fee|n|phí|There is a small fee for each transfer.
wages|n|tiền công|The workers collect their wages on Friday.
cheque|n|séc|She paid for the repairs with a cheque.
transfer|n|chuyển khoản|I made a transfer to my landlord this morning.
fund|n|quỹ|The school set up a fund to help poor students.
accountant|n|kế toán|Our accountant prepares the tax forms every spring.
`,
B2: `reimburse|v|hoàn trả chi phí|The company will reimburse your travel costs.
audit|n|kiểm toán|An outside company will carry out an audit of our accounts.
investment|n|khoản đầu tư|Buying new machines was a smart investment for the factory.
shareholder|n|cổ đông|Every shareholder received an invitation to the annual meeting.
forecast|n, v|dự báo|The sales forecast for next quarter looks very positive.
deficit|n|thâm hụt|The city has a budget deficit because it spent more than it earned.
fiscal year|n|năm tài chính|Our fiscal year ends in March, not in December.
asset|n|tài sản|The building is the company's biggest asset.
liability|n|khoản nợ phải trả|Every liability must be listed in the annual report.
cash flow|n|dòng tiền|Poor cash flow forced the shop to close.
capital|n|vốn|They need more capital to open a second shop.
dividend|n|cổ tức|The company pays a dividend to its owners every year.
break even|phr|hòa vốn|The café hopes to break even by the end of the year.
overhead|n|chi phí chung|The overhead for a small shop is mostly rent and heating.
bankrupt|adj|phá sản|The restaurant went bankrupt after only one year.
tax return|phr|tờ khai thuế|I send my tax return every April.
credit score|phr|điểm tín dụng|A low credit score makes it hard to get a loan.
financial|adj|thuộc tài chính|The firm has serious financial problems this year.
`,
C1: `depreciation|n|sự khấu hao, mất giá|The depreciation of the car was higher than expected.
liquidity|n|tính thanh khoản|The firm had serious problems with liquidity last winter.
surplus|n|thặng dư|The city ended the year with a budget surplus.
embezzle|v|biển thủ|The clerk was caught trying to embezzle money from the firm.
accrue|v|tích lũy dần|Interest will accrue on the loan every month.
`,
}},
{ id: "t-marketing", sec: "toeic", exam: ["TOEIC"], icon: "📣", color: "#d64f7a", title: "Sales & marketing", vi: "Bán hàng và tiếp thị", levels: {
A2: `product|n|sản phẩm|This new product is cheap and easy to use.
advertise|v|quảng cáo|The shop will advertise its sale on the radio.
poster|n|áp phích|They put a poster on the wall.
advert|n|quảng cáo|I saw an advert for cheap flights online.
logo|n|biểu tượng thương hiệu|The logo on the box is red and white.
`,
B1: `client|n|khách hàng (dịch vụ)|Our lawyer is meeting a new client this afternoon.
launch|v, n|ra mắt|The new product will launch in May.
survey|n|khảo sát|The company sent a survey to ask customers about the new menu.
competitor|n|đối thủ cạnh tranh|Our main competitor just lowered its prices.
brochure|n|tờ quảng cáo|The travel agent gave us a colourful brochure about the island.
customer service|n|dịch vụ khách hàng|I called customer service because my order never arrived.
slogan|n|khẩu hiệu quảng cáo|The company has a catchy slogan.
promote|v|quảng bá, thúc đẩy|They use social media to promote their new phone.
retail|n|bán lẻ|She has ten years of experience in retail.
free of charge|phr|miễn phí|Delivery is free of charge for orders over fifty euros.
commercial|n|quảng cáo trên truyền hình|The commercial for the new phone made everyone laugh.
loyalty|n|lòng trung thành|The store gives points to reward customer loyalty.
sales figures|phr|doanh số|The sales figures for March were better than expected.
billboard|n|biển quảng cáo|A huge billboard stands next to the road.
flyer|n|tờ rơi|Someone gave me a flyer about the new gym.
best-seller|n|sản phẩm bán chạy|This book was the best-seller of the year.
sales team|phr|đội ngũ bán hàng|Our sales team meets every Monday morning.
newsletter|n|bản tin|Sign up for our newsletter to get new offers.
promotional|adj|mang tính khuyến mãi|She wore a promotional T-shirt at the fair.
packaging design|phr|thiết kế bao bì|The packaging design makes the product stand out.
customer base|phr|tập khách hàng|The shop has a loyal customer base in the village.
`,
B2: `market share|n|thị phần|The company wants to increase its market share in Asia.
target audience|n|khách hàng mục tiêu|Young parents are the target audience for this advert.
campaign|n|chiến dịch|The new campaign helped the company reach younger buyers.
feedback|n|phản hồi|We read every piece of customer feedback to improve our service.
promotion|n|khuyến mại|The shop is running a promotion: buy one, get one free.
competitive|adj|cạnh tranh|The mobile phone market is very competitive these days.
exceed|v|vượt quá|Sales exceeded expectations.
endorsement|n|sự chứng thực, quảng cáo bởi người nổi tiếng|The athlete's endorsement boosted sales of the shoes.
target market|phr|thị trường mục tiêu|Our target market is young people who like sport.
branding|n|xây dựng thương hiệu|Strong branding makes a small company easy to remember.
word of mouth|phr|truyền miệng|Most of our new customers hear about us by word of mouth.
differentiate|v|tạo sự khác biệt|The firm must differentiate its product from cheaper copies.
upselling|n|bán thêm sản phẩm đắt hơn|Upselling is common when you buy a new phone.
market research|phr|nghiên cứu thị trường|Market research showed that people wanted a smaller model.
niche|n|thị trường ngách|The company found a niche selling tools for left-handed people.
rebranding|n|việc đổi thương hiệu|The rebranding included a new name and logo.
`,
C1: `saturate|v|làm bão hòa|Too many new cafés will saturate the market in this area.
consumer behaviour|phr|hành vi người tiêu dùng|Consumer behaviour changed quickly during the economic crisis.
lucrative|adj|sinh lợi|Selling online turned out to be a very lucrative idea.
rebrand|v|đổi thương hiệu|The bank decided to rebrand itself to attract younger clients.
`,
}},
{ id: "t-logistics", sec: "toeic", exam: ["TOEIC"], icon: "🚚", color: "#8a5a2b", title: "Orders, shipping & purchasing", vi: "Đặt hàng, vận chuyển và mua hàng", levels: {
A2: `order|n, v|đơn hàng; đặt hàng|Lan wants to order two books online.
deliver|v|giao hàng|The shop will deliver the sofa to your home on Monday.
box|n|thùng, hộp|Please put the glasses carefully into the box.
parcel|n|bưu kiện|A parcel arrived for you this morning.
address|n|địa chỉ|Please write your address on the form.
package|n|gói hàng|The package is too heavy to carry.
post|v|gửi bưu điện|I will post the letter on my way to work.
mail|n|thư từ|The mail usually arrives before noon.
stamp|n|tem|I need a stamp to send this card abroad.
courier service|phr|dịch vụ chuyển phát|We use a courier service for urgent letters.
`,
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
damaged|adj|bị hư hỏng|The goods arrived damaged, so we asked for a refund.
track|v|theo dõi (đơn hàng)|You can track your parcel on our website.
ship|v|vận chuyển hàng|We ship all orders within two working days.
stock|n|hàng tồn kho|We have plenty of stock in the back of the shop.
shipping cost|phr|phí vận chuyển|The shipping cost depends on the weight of the parcel.
tracking number|phr|mã theo dõi vận đơn|Enter your tracking number to see where the parcel is.
shelf life|phr|thời hạn bảo quản|Fresh milk has a short shelf life.
forklift|n|xe nâng|The worker drove a forklift across the warehouse.
pallet|n|pallet, tấm kê hàng|Twenty boxes fit on one pallet.
container|n|công-ten-nơ|Each container holds about twenty tons of goods.
`,
B2: `inventory|n|hàng tồn kho|Staff count the inventory in the shop at the end of every year.
quote|n|báo giá|Could you send me a quote for fifty office chairs?
procurement|n|mua sắm (doanh nghiệp)|The procurement team compares prices from several suppliers before buying.
backorder|n|đơn hàng chờ bổ sung|The blue model is on backorder and will arrive in three weeks.
dispatch|v|gửi đi|We will dispatch your parcel as soon as the payment arrives.
expedite|v|xúc tiến, làm nhanh|Can you expedite my order? I need it by Friday.
freight|n|hàng hóa vận chuyển|Air freight is faster but more expensive than shipping by sea.
backlog|n|lượng công việc tồn đọng|A backlog of orders delayed the deliveries.
logistics|n|hậu cần|Logistics is the hardest part of running an online shop.
distributor|n|nhà phân phối|The distributor delivers our products to shops across the country.
lead time|phr|thời gian chờ giao hàng|The lead time for this item is about six weeks.
bulk order|phr|đơn hàng số lượng lớn|A bulk order of fifty chairs gets a lower price.
tariff|n|thuế quan|A new tariff made imported steel more expensive.
supply chain|phr|chuỗi cung ứng|Bad weather caused problems in the supply chain.
restock|v|nhập thêm hàng|We need to restock the shelves before the weekend.
`,
C1: `consignment|n|lô hàng gửi|The consignment arrived at the port on Monday.
consolidate|v|gom hàng, hợp nhất|We consolidate small orders into one large shipment.
bottleneck|n|điểm nghẽn|The old port has become a bottleneck for all our exports.
reconcile|v|đối chiếu|The clerk must reconcile the delivery list with the invoices.
just-in-time|adj|vừa đúng lúc (hàng tồn tối thiểu)|The factory uses a just-in-time system to save storage space.
`,
}},
{ id: "t-travel", sec: "toeic", exam: ["TOEIC"], icon: "🧳", color: "#1b8fb3", title: "Business travel & events", vi: "Công tác và sự kiện", levels: {
A2: `flight|n|chuyến bay|My flight to London leaves at six o'clock.
book|v|đặt (vé, phòng)|Please book a double room for two nights.
trip|n|chuyến đi|Minh is on a business trip to Hanoi this week.
pack|v|đóng gói hành lý|I need to pack my bags tonight.
tour|n|chuyến tham quan|We joined a tour of the old city.
arrive|v|đến nơi|The train will arrive at six o'clock.
single room|phr|phòng đơn|I would like a single room for two nights.
double room|phr|phòng đôi|We booked a double room with a sea view.
guide|n|hướng dẫn viên|The guide showed us the old town.
`,
B1: `reservation|n|sự đặt chỗ|I made a reservation for a table for four at eight.
boarding pass|n|thẻ lên máy bay|Show your boarding pass and passport at the gate.
conference|n|hội nghị|Anna is giving a talk at an international conference in May.
venue|n|địa điểm tổ chức|The venue for the wedding is a beautiful garden near the lake.
attendee|n|người tham dự|Each attendee received a name badge and a free notebook.
registration|n|đăng ký|Registration for the conference opens at eight, so please arrive early.
catering|n|dịch vụ ăn uống|The catering at the event was excellent, especially the vegetarian dishes.
customs|n|hải quan|We had to go through customs at the airport.
visa|n|thị thực|You need a visa to enter that country.
expense report|phr|báo cáo chi phí|Please send me your expense report by Friday.
conference pass|phr|thẻ tham dự hội nghị|Show your conference pass at the door to enter.
carry-on|n|hành lý xách tay|My carry-on is small enough to fit above the seat.
terminal|n|nhà ga hàng không|Our flight leaves from the second terminal.
currency exchange|phr|đổi tiền|There is a currency exchange near the main hall.
time zone|phr|múi giờ|The time zone here is two hours behind home.
travel agency|phr|công ty du lịch|The travel agency found us a cheap hotel.
visitor|n|khách tham quan|Every visitor must sign in at the front desk.
sleeper train|phr|tàu giường nằm|We took a sleeper train from Berlin to Vienna.
`,
B2: `keynote speaker|n|diễn giả chính|The keynote speaker opened the conference with a talk about the future of work.
workshop|n|hội thảo thực hành|Anna signed up for a workshop where participants practise presenting in small groups.
reimbursement|n|sự hoàn trả chi phí|Please send your receipts to Finance to get reimbursement for the taxi fares.
round trip|n|khứ hồi|A round trip to Hanoi from here costs less if you book early.
connecting flight|phr|chuyến bay nối chuyến|I missed my connecting flight in Frankfurt.
business class|phr|hạng thương gia|The manager always flies business class on long trips.
per diem|phr|phụ cấp công tác phí hằng ngày|The firm gives us a per diem for meals on trips.
overbook|v|nhận đặt quá chỗ|Airlines sometimes overbook flights, so some passengers stay behind.
keynote|n|bài phát biểu chủ đạo|His keynote opened the whole conference.
trade fair|phr|hội chợ thương mại|We showed our new machines at a trade fair.
name badge|phr|thẻ tên|Please wear your name badge at all times.
travel insurance|phr|bảo hiểm du lịch|The travel insurance covered the cost of my lost bag.
red-eye|n|chuyến bay đêm|He took the red-eye from New York to London.
boarding gate|phr|cửa lên máy bay|Go to the boarding gate at least thirty minutes early.
`,
C1: `plenary|n|phiên họp toàn thể|The plenary begins at nine with a speech from the president.
forfeit|v|mất quyền, bị mất|You will forfeit your deposit if you cancel late.
`,
}},
/* ---------- IELTS & VSTEP ---------- */
{ id: "i-education", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🏫", color: "#3a5fc8", title: "Education", vi: "Giáo dục", levels: {
A2: `university|n|đại học|Minh wants to study medicine at university.
campus|n|khuôn viên trường|The university campus has a large library and a café.
certificate|n|chứng chỉ|She received a certificate after finishing the course.
blackboard|n|bảng đen|The teacher wrote the new words on the blackboard.
vocabulary|n|từ vựng|I learn new vocabulary by reading short stories.
grammar|n|ngữ pháp|English grammar can be difficult for beginners.
`,
B1: `course|n|khóa học|Lan is taking an English course on Saturday mornings.
degree|n|bằng cấp|After four years, Nam finally received his degree in engineering.
online learning|n|học trực tuyến|Online learning lets you study from home at any time.
tuition fee|n|học phí|The tuition fee for this semester is due at the end of the month.
scholarship|n|học bổng|She won a scholarship to study in Germany.
assignment|n|bài tập lớn, nhiệm vụ|The teacher gave us a long assignment.
dormitory|n|ký túc xá|Most first-year students live in a dormitory.
headteacher|n|hiệu trưởng|The headteacher welcomed the new pupils on the first day.
tutorial|n|buổi học nhóm nhỏ, hướng dẫn|We have a tutorial every Thursday afternoon.
pronunciation|n|cách phát âm|Her pronunciation of English words is very clear.
laboratory|n|phòng thí nghiệm|The students worked in the laboratory on Tuesday.
experiment|n|thí nghiệm|We did a simple experiment with water and salt.
`,
B2: `curriculum|n|chương trình giảng dạy|The school is updating its curriculum to include more practical subjects.
academic performance|n|kết quả học tập|Getting enough sleep can improve your academic performance during exam season.
critical thinking|n|tư duy phản biện|Good teachers encourage critical thinking instead of asking students to memorise facts.
lifelong learning|n|học tập suốt đời|Lifelong learning helps people adapt to new jobs as technology changes.
vocational training|n|đào tạo nghề|After school, Nam chose vocational training to become an electrician.
compulsory|adj|bắt buộc|Education is compulsory for all children until the age of sixteen.
tertiary education|n|giáo dục đại học|Tertiary education has become more affordable for families in recent years.
plagiarism|n|đạo văn|Plagiarism can get a student expelled.
literacy|n|khả năng đọc viết|The programme aims to improve adult literacy.
peer pressure|n|áp lực từ bạn bè|Peer pressure can make teenagers try risky things.
educated|adj|có học thức|She comes from a well educated family.
gifted|adj|có năng khiếu|The school has a special programme for gifted children.
illiterate|adj|mù chữ|Many adults in the village were illiterate in the past.
motivation|n|động lực|Students need motivation to keep studying for long hours.
concentration|n|sự tập trung|Noise in the room made concentration very difficult.
memorise|v|ghi nhớ, học thuộc|I try to memorise ten new words every day.
bilingual|adj|song ngữ|Our school offers a bilingual programme in English and Spanish.
`,
C1: `rote learning|n|học vẹt|Rote learning rarely helps students understand ideas deeply.
scholar|n|học giả|The scholar spent decades studying ancient languages.
specialise|v|chuyên về, chuyên môn hóa|She plans to specialise in marine biology.
`,
}},
{ id: "i-environment", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🌍", color: "#2f9a55", title: "Environment & energy", vi: "Môi trường và năng lượng", levels: {
A2: `plastic|n|nhựa|Plastic bags are bad for the sea.
nature|n|thiên nhiên|I love walking in nature at the weekend.
ocean|n|đại dương|Plastic bottles are polluting the ocean.
electricity|n|điện|The storm cut off the electricity for two hours.
coal|n|than đá|Many old power stations still burn coal.
`,
B1: `waste|n, v|rác thải; lãng phí|Households throw away too much food waste every week.
energy|n|năng lượng|Turning off lights saves energy and lowers your electricity bill.
rubbish|n|rác (US: trash)|Please put your rubbish in the bin, not on the street.
solar power|n|năng lượng mặt trời|Solar power is cheap and clean in sunny countries.
litter|n|rác vứt bừa bãi|There is too much litter in the park after weekends.
reuse|v|tái sử dụng|You can reuse glass jars to store food.
damage|v|gây hại, làm hư hại|Heavy rain can damage crops and houses.
preserve|v|bảo tồn, gìn giữ|We must preserve the forest for future generations.
rainforest|n|rừng mưa nhiệt đới|The rainforest is home to millions of species.
chemical|n|hóa chất|The factory leaked a dangerous chemical into the river.
harm|n|tác hại|Smoke from the factory does great harm to local people.
`,
B2: `emission|n|khí thải|The emission from old factories harms the air we breathe.
renewable energy|n|năng lượng tái tạo|The island gets most of its power from renewable energy such as wind and sun.
fossil fuel|n|nhiên liệu hóa thạch|Burning fossil fuel, such as coal and oil, harms the atmosphere.
conservation|n|sự bảo tồn|Conservation of wild animals depends on protecting their natural homes.
carbon footprint|n|dấu chân carbon|Flying less is one way to reduce your carbon footprint.
global warming|n|nóng lên toàn cầu|Scientists warn that global warming is causing sea levels to rise.
single-use plastic|n|nhựa dùng một lần|Many shops now charge extra for single-use plastic bags.
biodegradable|adj|có thể phân hủy sinh học|Biodegradable bags break down naturally.
wind turbine|n|tua-bin gió|A new wind turbine now powers the whole village.
extinction|n|sự tuyệt chủng|Hunting has pushed several species close to extinction.
toxic|adj|độc hại|Toxic waste was found near the river.
pesticide|n|thuốc trừ sâu|Farmers are using less pesticide than before.
compost|n|phân ủ, phân hữu cơ|We put vegetable peel into the compost to feed our garden.
smog|n|khói bụi (sương mù ô nhiễm)|Thick smog covered the city for several days.
nuclear|adj|hạt nhân|The country built a new nuclear power station.
recyclable|adj|có thể tái chế|Make sure the packaging is recyclable before you buy it.
threat|n|mối đe dọa|Rising seas are a serious threat to island nations.
`,
C1: `overexploitation|n|sự khai thác quá mức|Overexploitation of fish stocks has harmed local fishermen.
`,
}},
{ id: "i-technology", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🤖", color: "#4d5bd6", title: "Technology & the internet", vi: "Công nghệ và Internet", levels: {

B1: `digital|adj|kỹ thuật số|Lan prefers reading digital books on her phone to carrying paper ones.
smartphone|n|điện thoại thông minh|Most students own a smartphone today.
search engine|n|công cụ tìm kiếm|A search engine helps you find information in seconds.
virus|n|vi-rút máy tính|My computer got a virus from a strange email.
spam|n|thư rác|Most of my emails each morning are just spam.
plug|n|phích cắm|The plug does not fit this socket.
charger|n|bộ sạc|I left my charger at the hotel.
inbox|n|hộp thư đến|My inbox is full of unread messages.
emoji|n|biểu tượng cảm xúc|She ended her message with a smiling emoji.
`,
B2: `innovation|n|sự đổi mới|Constant innovation keeps the company ahead of its competitors.
automation|n|tự động hóa|Automation in factories means machines now do many repetitive tasks.
rely on|phr|phụ thuộc vào|Many people rely on their phones to find directions in new cities.
screen time|n|thời gian dùng màn hình|Doctors advise parents to limit their children's screen time before bed.
cyberbullying|n|bắt nạt trên mạng|The school has a clear policy against cyberbullying in class group chats.
breakthrough|n|bước đột phá|Researchers announced a breakthrough in battery technology this week.
cyber security|n|an ninh mạng|Banks spend a lot of money on cyber security.
data breach|n|vụ rò rỉ dữ liệu|A data breach exposed the details of millions of customers.
hack|v|xâm nhập trái phép, tấn công mạng|Someone tried to hack into my email account.
outdated|adj|lỗi thời|My old laptop is outdated and runs very slowly.
virtual reality|n|thực tế ảo|Virtual reality lets students explore ancient cities from the classroom.
broadband|n|internet băng thông rộng|Our village finally has fast broadband.
podcast|n|podcast, chương trình âm thanh|I listen to a history podcast on my way to work.
firewall|n|tường lửa|The firewall blocked the suspicious connection.
phishing|n|lừa đảo qua mạng|Be careful of phishing emails that ask for your bank details.
wearable|adj|đeo được|Wearable devices can count your steps and measure your sleep.
`,
A2: `robot|n|người máy|A small robot cleans the floor in our house.
speaker|n|loa|I connected my phone to the speaker and played music.
cable|n|dây cáp|I need a longer cable to charge my laptop.
`,
C1: `cybercrime|n|tội phạm mạng|Cybercrime costs companies billions of dollars each year.
biometric|adj|sinh trắc học|Biometric data such as fingerprints is used to unlock phones.
`,
}},
{ id: "i-health", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🥗", color: "#d9486b", title: "Health & lifestyle", vi: "Sức khỏe và lối sống", levels: {
A2: `fit|adj|khỏe mạnh, cân đối|He runs every day to stay fit.
yoga|n|yoga|I do yoga every morning before breakfast.
stretch|v|giãn cơ, duỗi người|Always stretch your legs before you run.
sugar|n|đường|I do not take sugar in my tea.
`,
B1: `habit|n|thói quen|Drinking a glass of water every morning is a good habit.
junk food|n|đồ ăn vặt kém lành mạnh|Eating too much junk food can make you gain weight.
balanced diet|n|chế độ ăn cân bằng|A balanced diet includes fruit, vegetables and protein.
lifestyle|n|lối sống|A healthy lifestyle can prevent many diseases.
vitamin|n|vi-ta-min|Oranges are full of vitamin C.
gain weight|phr|tăng cân|He started to gain weight after he stopped playing football.
vaccine|n|vắc-xin|Children receive a vaccine to protect them against measles.
painkiller|n|thuốc giảm đau|He took a painkiller for his headache.
overweight|adj|thừa cân|The doctor said he was a little overweight.
recovery|n|sự hồi phục|Her recovery after the operation was faster than expected.
fatigue|n|sự mệt mỏi|Long flights often cause fatigue and headaches.
`,
B2: `obesity|n|béo phì|Doctors say that obesity increases the risk of heart disease.
sedentary|adj|ít vận động|a sedentary lifestyle
well-being|n|sự khỏe mạnh, hạnh phúc|Spending time outdoors is good for your well-being.
prevention|n|phòng ngừa|Prevention is better than cure, so wash your hands often.
life expectancy|n|tuổi thọ trung bình|Better healthcare has raised the average life expectancy in many countries.
mental health|n|sức khỏe tâm thần|Talking to friends can improve your mental health when life is difficult.
healthcare system|n|hệ thống y tế|The healthcare system in this country gives everyone access to a doctor.
awareness|n|nhận thức|The campaign aims to increase public awareness of the dangers of smoking.
addiction|n|chứng nghiện|Phone addiction is increasing among teenagers.
preventive|adj|mang tính phòng ngừa|Regular check-ups are a preventive measure against serious illness.
physical activity|n|hoạt động thể chất|Children need an hour of physical activity every day.
wellness|n|sức khỏe toàn diện|The hotel offers a wellness programme with yoga and healthy meals.
insomnia|n|chứng mất ngủ|Stress at work gave him insomnia for months.
meditation|n|thiền|Ten minutes of meditation every day helps me stay calm.
mindfulness|n|chánh niệm|Mindfulness teaches you to pay attention to the present moment.
dehydrated|adj|mất nước|You will get dehydrated if you do not drink enough water.
flexibility|n|sự dẻo dai|Swimming improves your strength and flexibility.
`,
C1: `sedentary lifestyle|n|lối sống ít vận động|A sedentary lifestyle increases the risk of heart problems.
holistic|adj|toàn diện|She prefers a holistic approach that treats the whole person.
immunity|n|khả năng miễn dịch|Vaccines give the body immunity against many diseases.
sanitary|adj|hợp vệ sinh|Poor sanitary conditions lead to the spread of illness.
`,
}},
{ id: "i-urban", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "🏙️", color: "#6b7a8f", title: "Cities, housing & transport", vi: "Đô thị, nhà ở và giao thông", levels: {

B1: `traffic|n|giao thông|The traffic was so bad that I arrived late to work.
public transport|n|giao thông công cộng|Public transport in this city is cheap, clean and reliable.
population|n|dân số|The population of the city has doubled in twenty years.
countryside|n|nông thôn|My grandparents live in the countryside, surrounded by fields and hills.
crowded|adj|đông đúc|The bus was so crowded that nobody could find a seat.
skyscraper|n|nhà chọc trời|This skyscraper is the tallest building in the city.
apartment block|n|tòa chung cư|They live on the fifth floor of an apartment block.
highway|n|đường cao tốc|We drove along the highway for three hours.
resident|n|cư dân|Each resident of the building has a parking space.
shelter|n|nơi trú ẩn|The city opened a shelter for people with nowhere to sleep.
skyline|n|đường chân trời của thành phố|The city skyline looks beautiful at night.
`,
B2: `urban|adj|thuộc đô thị|Urban areas usually have more jobs, hospitals and universities than villages.
rural|adj|thuộc nông thôn|Many young people leave rural villages to look for work in cities.
urbanisation|n|đô thị hóa (US: urbanization)|Rapid urbanisation has put pressure on schools and hospitals in the city.
affordable housing|n|nhà ở giá phải chăng|The council plans to build affordable housing for young families.
infrastructure|n|cơ sở hạ tầng|Good roads and bridges are an important part of a country's infrastructure.
commuter|n|người đi làm xa hằng ngày|Every morning, thousands of commuter passengers take the train into the city.
high-rise|adj|cao tầng|They live in a high-rise apartment with a view of the river.
slum|n|khu ổ chuột|Many families still live in a slum near the river.
residential|adj|thuộc khu dân cư|This is a quiet residential area with no factories.
pedestrian zone|n|khu vực dành cho người đi bộ|The old town is now a pedestrian zone.
overcrowded|adj|quá đông đúc|The trains are overcrowded in the morning.
urban sprawl|n|sự lan rộng đô thị|Urban sprawl is swallowing up farmland around the city.
redevelop|v|tái phát triển, cải tạo|The council plans to redevelop the old harbour.
homelessness|n|tình trạng vô gia cư|Homelessness is rising in many large cities.
flyover|n|cầu vượt|A new flyover will reduce traffic at the junction.
pothole|n|ổ gà|The bus bounced over a deep pothole on the road.
demolish|v|phá dỡ|They will demolish the old cinema next month.
developer|n|nhà phát triển bất động sản|A property developer wants to build flats on the old farm.
`,
C1: `gentrification|n|quá trình tân trang khu dân cư (đẩy giá lên)|Gentrification has made the old district too expensive for locals.
zoning|n|quy hoạch phân khu|Strict zoning rules stop factories being built near homes.
dilapidated|adj|đổ nát, xuống cấp|The dilapidated house at the corner will be pulled down.
megacity|n|siêu đô thị|Many people move to a megacity like Tokyo to find work.
municipal|adj|thuộc thành phố, đô thị|The municipal government is building a new library.
lease|n|hợp đồng thuê|They signed a two-year lease on the flat.
`,
A2: `tunnel|n|đường hầm|The train goes through a long tunnel under the river.
sidewalk|n|vỉa hè (Mỹ)|Children were playing on the sidewalk outside our house.
`,
}},
{ id: "i-crime", sec: "ielts", exam: ["IELTS"], icon: "⚖️", color: "#7a4e3a", title: "Crime & law", vi: "Tội phạm và pháp luật", levels: {
A2: `thief|n|kẻ trộm|The thief ran away with my bag.
robber|n|kẻ cướp|The robber ran out of the bank with a bag.
illegal|adj|bất hợp pháp|It is illegal to drive without a licence.
gang|n|băng nhóm tội phạm|The police caught a gang of young thieves.
`,
B1: `police|n|cảnh sát|Call the police if you see someone breaking into a car.
prison|n|nhà tù|The man spent two years in prison for his crime.
punish|v|trừng phạt|Parents should explain rules clearly before they punish a child.
steal|v|ăn trộm|Someone tried to steal her bag on the crowded train.
victim|n|nạn nhân|The victim told the police what had happened.
fine|n|tiền phạt|He had to pay a fine for speeding.
witness|n|nhân chứng|A witness saw the man leave the shop.
arrest|v|bắt giữ|Police officers can arrest anyone who breaks the law.
burglary|n|vụ trộm đột nhập|There was a burglary in our street last night.
suspect|n|nghi phạm|The suspect was taken to the police station.
innocent|adj|vô tội|He said he was innocent and had done nothing wrong.
trial|n|phiên xét xử|The trial will start in court next month.
lawyer|n|luật sư|Her lawyer told her not to speak to anyone.
security|n|an ninh, bảo vệ|Security at the airport is very strict.
shoplift|v|ăn trộm trong cửa hàng|Two teenagers tried to shoplift some sweets from the shop.
criminal|n|tội phạm|The criminal was sent to prison for ten years.
`,
B2: `offender|n|người phạm tội|A first-time offender may receive a lighter penalty than someone who repeats the crime.
punishment|n|hình phạt|Many people think the punishment should match the seriousness of the crime.
rehabilitation|n|sự cải tạo, phục hồi|Rehabilitation programmes help former prisoners learn new skills and find jobs.
deter|v|răn đe|Cameras in the street can deter people from committing crimes.
juvenile crime|n|tội phạm vị thành niên|Experts believe juvenile crime falls when young people have after-school activities.
sentence|n, v|bản án; tuyên án|The judge gave him a two-year sentence for the robbery.
community service|n|lao động công ích|Instead of going to prison, she had to do community service cleaning parks.
law enforcement|n|thực thi pháp luật|Law enforcement agencies are working together to catch the gang.
deterrent|n|biện pháp răn đe|Heavy fines can be an effective deterrent.
fraud|n|gian lận, lừa đảo|He was jailed for credit card fraud.
convict|v|kết án|The jury may convict him if the evidence is strong.
prosecute|v|truy tố|The police said they would prosecute anyone who breaks the law.
verdict|n|phán quyết|The jury reached a verdict after two days.
jury|n|bồi thẩm đoàn|The jury listened carefully to all the witnesses.
vandalism|n|hành vi phá hoại|Vandalism in the park has cost the city a lot of money.
smuggle|v|buôn lậu|They tried to smuggle cigarettes across the border.
bribery|n|hối lộ|The minister lost his job because of bribery.
offence|n|hành vi phạm pháp|Driving without insurance is a serious offence.
`,
C1: `acquit|v|tuyên trắng án|The court decided to acquit her because of a lack of proof.
perpetrator|n|thủ phạm|The perpetrator of the attack has not been found yet.
accomplice|n|đồng phạm|The thief and his accomplice escaped in a stolen car.
`,
}},
{ id: "i-economy", sec: "ielts", exam: ["IELTS", "TOEIC"], icon: "🌐", color: "#1b7f8c", title: "Globalisation & economy", vi: "Toàn cầu hóa và kinh tế", levels: {

B1: `economy|n|nền kinh tế|The economy grows when more people have jobs and spend money.
trade|n, v|thương mại; buôn bán|Trade between the two countries has increased in recent years.
company|n|công ty|My uncle works for a company that makes furniture.
international|adj|quốc tế|Lan wants a job at an international company so she can use English every day.
unemployment|n|thất nghiệp|Unemployment is high in towns where the main factory has closed.
export|v|xuất khẩu|Vietnam will export more rice this year.
industry|n|ngành công nghiệp|Tourism is an important industry in this region.
inflation|n|lạm phát|High inflation makes food and rent more expensive.
import|v|nhập khẩu|Many countries import oil from other parts of the world.
wage|n|tiền lương theo giờ|The minimum wage will rise next year.
tourism|n|ngành du lịch|Tourism is the main source of income on the island.
employment|n|việc làm|The new factory will bring employment to the town.
boom|n|thời kỳ bùng nổ|The town enjoyed a boom when the factory opened.
trade union|phr|công đoàn|The trade union asked for better working hours.
`,
B2: `globalisation|n|toàn cầu hóa (US: globalization)|Globalisation means that products made in one country are sold all over the world.
workforce|n|lực lượng lao động|The factory has a young and skilled workforce of about two hundred people.
invest|v|đầu tư|Nam decided to invest his savings in a small business.
demand|n|nhu cầu|Demand for electric cars is rising as petrol becomes more expensive.
supply|n|nguồn cung|A shortage of supply has pushed up the price of rice.
multinational|adj|đa quốc gia|She works for a multinational firm with offices in twelve countries.
recession|n|suy thoái kinh tế|Many people lost their jobs during the recession.
outsource|v|thuê ngoài|Many firms outsource customer service to other countries.
cost of living|n|chi phí sinh hoạt|The cost of living in big cities is rising fast.
monopoly|n|sự độc quyền|The company has a monopoly on train services here.
subsidy|n|khoản trợ cấp|Farmers receive a subsidy from the government.
economic growth|phr|tăng trưởng kinh tế|Economic growth has slowed down in recent years.
stock market|phr|thị trường chứng khoán|The stock market fell sharply after the news.
labour market|phr|thị trường lao động|Young graduates often find the labour market difficult.
downturn|n|sự suy giảm kinh tế|A downturn in sales forced the shop to close.
trade deficit|phr|thâm hụt thương mại|The trade deficit grew because imports rose sharply.
import duty|phr|thuế nhập khẩu|Travellers must pay import duty on expensive goods.
price war|phr|cuộc chiến giá cả|A price war between the two shops helped customers.
`,
A2: `pocket money|phr|tiền tiêu vặt|He spends his pocket money on comics.
pay rise|phr|tăng lương|I asked my boss for a pay rise.
piggy bank|phr|con heo đất|The boy put every coin into his piggy bank.
`,
C1: `austerity|n|chính sách thắt lưng buộc bụng|Years of austerity left many public services underfunded.
fiscal|adj|thuộc tài chính công, thuế khóa|The government announced a new fiscal policy this week.
stagnation|n|sự trì trệ|Years of stagnation left the town with few jobs.
`,
}},
{ id: "i-media", sec: "ielts", exam: ["IELTS", "VSTEP"], icon: "📰", color: "#c2552e", title: "Media & advertising", vi: "Truyền thông và quảng cáo", levels: {
B1: `advertisement|n|quảng cáo|I saw an advertisement for a new phone on the bus.
newspaper|n|báo|My father reads the newspaper with his coffee every morning.
channel|n|kênh|Which channel shows the football match tonight?
article|n|bài báo|Did you read the article about healthy eating in today's paper?
headline|n|tiêu đề báo|The headline on the front page shocked everyone.
journalist|n|nhà báo|The journalist interviewed the mayor.
broadcast|v|phát sóng|The BBC will broadcast the match live tonight.
publish|v|xuất bản|The newspaper will publish the full story tomorrow.
reporter|n|phóng viên|A reporter asked the mayor about the new road.
subscribe|v|đăng ký theo dõi|You can subscribe to the channel for free.
media|n|truyền thông|The media reported the accident within minutes.
blog|n|blog, nhật ký trực tuyến|She writes a blog about her trips to Asia.
subtitle|n|phụ đề|I turn on the English subtitle when the actors speak fast.
news bulletin|phr|bản tin|The news bulletin starts at six every evening.
`,
B2: `mass media|n|truyền thông đại chúng|The mass media, including television and radio, shapes how people see the news.
influence|n, v|ảnh hưởng|Social media can influence what young people buy and wear.
biased|adj|thiên vị|Some readers think the report is biased because it only shows one side.
censorship|n|kiểm duyệt|Many writers oppose censorship because they want to publish freely.
celebrity|n|người nổi tiếng|The shop hired a famous celebrity to promote its new perfume.
fake news|n|tin giả|Check the source before sharing a story, because fake news spreads quickly.
propaganda|n|tuyên truyền|The state used propaganda to control public opinion.
clickbait|n|tiêu đề giật gân câu view|Clickbait headlines often exaggerate the story.
editor|n|biên tập viên|The editor changed the title of my article.
coverage|n|việc đưa tin|The coverage of the election lasted all night.
tabloid|n|báo lá cải|The tabloid printed a shocking story about the singer.
press freedom|phr|tự do báo chí|Press freedom is important in every democratic country.
sponsor|v|tài trợ|A local bank will sponsor the football tournament.
viral|adj|lan truyền chóng mặt|The funny video went viral within a few hours.
hoax|n|trò lừa bịp|The story about the monster turned out to be a hoax.
press release|phr|thông cáo báo chí|The company sent out a press release about its new product.
`,
A2: `magazine|n|tạp chí|She bought a fashion magazine at the station.
radio|n|đài phát thanh|He listens to the radio while he cooks dinner.
programme|n|chương trình|My favourite programme starts at eight o'clock.
`,
C1: `impartial|adj|khách quan, vô tư|A good journalist should stay impartial when reporting a conflict.
defamation|n|sự phỉ báng|The singer sued the magazine for defamation.
editorial|n|bài xã luận|The editorial criticised the government's plan to close schools.
`,
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
go on holiday|phr|đi nghỉ|We usually go on holiday in August.
have a shower|phr|tắm vòi sen|I usually have a shower before breakfast.
make a phone call|phr|gọi điện thoại|I need to make a phone call before dinner.
have a rest|phr|nghỉ ngơi|You look tired, so have a rest.
have a chat|phr|trò chuyện|Let's have a chat about your plans over coffee.
`,
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
make sense|phr|có lý, dễ hiểu|Your explanation does not make sense to me.
pay a visit|phr|đến thăm|We will pay a visit to my grandparents on Sunday.
take a risk|phr|chấp nhận rủi ro|You have to take a risk if you want to succeed.
set a goal|phr|đặt mục tiêu|It helps to set a goal before you start studying.
break the rules|phr|vi phạm quy tắc|Students who break the rules will be sent home.
make a complaint|phr|khiếu nại|I want to make a complaint about the noisy neighbours.
give advice|phr|đưa ra lời khuyên|My uncle likes to give advice about money.
do research|phr|nghiên cứu|Scientists do research to find new medicines.
get a refund|phr|được hoàn tiền|You can get a refund if the product is damaged.
pay by credit card|phr|thanh toán bằng thẻ tín dụng|You can pay by credit card at the front desk.
`,
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
gain access to|phr|có được quyền tiếp cận|Poor families struggle to gain access to quality healthcare.
draw a conclusion|phr|rút ra kết luận|It is too early to draw a conclusion from this small study.
make a profit|phr|kiếm lợi nhuận|The café began to make a profit after six months.
reach an agreement|phr|đạt được thỏa thuận|The two sides hope to reach an agreement after long talks.
meet the requirements|phr|đáp ứng các yêu cầu|Applicants must meet the requirements to enter the competition.
come to a conclusion|phr|đi đến kết luận|We need to come to a conclusion before the meeting ends.
make a contribution|phr|đóng góp|Each member can make a contribution to the project.
take responsibility for|phr|chịu trách nhiệm về|Managers must take responsibility for their team's mistakes.
take the initiative|phr|chủ động|She decided to take the initiative and call the client.
`,
C1: `strike a balance|phr|tìm sự cân bằng|It is hard to strike a balance between work and family.
shed light on|phr|làm sáng tỏ|The new report may shed light on the cause of the fire.
turn a blind eye to|phr|nhắm mắt làm ngơ|Some teachers turn a blind eye to small acts of cheating.
call into question|phr|đặt nghi vấn|The new results call into question the old theory.
`,
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
