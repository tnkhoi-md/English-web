/* Bài nghe hiểu bổ sung: A1 (lc-111..116), A2 (lc-121..126) và C1 (lc-131..140), nạp sau content-study.js */
LC_SETS.push(...[
{
"id": "lc-111",
"lvl": "A1",
"kind": "conversation",
"title": "Meeting a new friend",
"script": [
[
"Anna",
"Hello, I'm Anna. Nice to meet you."
],
[
"Tom",
"Hi Anna, I'm Tom. Where are you from?"
],
[
"Anna",
"I'm from Leeds. I live with my family."
],
[
"Tom",
"Oh, nice. Have you got a big family?"
],
[
"Anna",
"Yes. I've got two brothers and one sister."
],
[
"Tom",
"How old is your sister?"
],
[
"Anna",
"She is twelve. My brothers are twenty and twenty-two."
]
],
"qs": [
{
"q": "What are the two people doing?",
"opts": [
"Buying a gift for a sister",
"Saying hello and talking about family",
"Looking for a house in Leeds",
"Asking the way to a school"
],
"a": 1,
"kind": "gist",
"why": "Hai người chào nhau lần đầu (Nice to meet you) rồi hỏi về quê quán và gia đình, nên đây là cuộc trò chuyện làm quen và nói về gia đình.",
"wrong": {
"Buying a gift for a sister": "Không ai nói về việc mua quà; em gái chỉ được nhắc đến khi Tom hỏi tuổi cô ấy.",
"Looking for a house in Leeds": "Leeds chỉ là nơi Anna đến từ, hai người không hề đi tìm nhà ở đó.",
"Asking the way to a school": "Không ai hỏi đường; Tom chỉ hỏi Anna đến từ đâu và có gia đình lớn không."
}
},
{
"q": "Where is Anna from?",
"opts": [
"London",
"York",
"Leeds",
"Oxford"
],
"a": 2,
"kind": "detail",
"why": "Anna nói \"I'm from Leeds\", nghĩa là cô ấy đến từ Leeds; các thành phố khác không được nhắc đến trong bài.",
"wrong": {
"London": "London không xuất hiện trong bài; Anna nói rõ cô ấy đến từ Leeds.",
"York": "York không có trong bài nghe, Anna chỉ nói một tên thành phố là Leeds.",
"Oxford": "Oxford không được ai nhắc đến; câu trả lời của Anna là Leeds."
}
},
{
"q": "How old is Anna's sister?",
"opts": [
"Twelve",
"Twenty",
"Twenty-two",
"Two"
],
"a": 0,
"kind": "number",
"why": "Anna nói \"She is twelve\" khi Tom hỏi tuổi em gái, nên em gái 12 tuổi; hai con số còn lại là tuổi của các anh em trai.",
"wrong": {
"Twenty": "Số 20 là tuổi của một người anh trai, không phải tuổi của em gái.",
"Twenty-two": "Số 22 là tuổi của người anh trai còn lại, em gái mới 12 tuổi.",
"Two": "Số 2 là số lượng anh em trai (two brothers), không phải tuổi của em gái."
}
}
]
},
{
"id": "lc-112",
"lvl": "A1",
"kind": "conversation",
"title": "Buying a bag",
"script": [
[
"Clerk",
"Hello. Can I help you?"
],
[
"Customer",
"Yes, please. How much is this blue bag?"
],
[
"Clerk",
"It is twenty-five pounds."
],
[
"Customer",
"Oh, that is a lot. Have you got a red bag?"
],
[
"Clerk",
"Yes. The red bag is eighteen pounds."
],
[
"Customer",
"Good. I like it. I'll take the red one."
],
[
"Clerk",
"Great. Eighteen pounds, please."
]
],
"qs": [
{
"q": "What does the customer want to buy?",
"opts": [
"A coat",
"A hat",
"A pair of shoes",
"A bag"
],
"a": 3,
"kind": "gist",
"why": "Khách hỏi \"How much is this blue bag?\" và sau đó mua chiếc túi màu đỏ, nên món đồ khách muốn mua là một chiếc túi.",
"wrong": {
"A coat": "Không có áo khoác nào được nhắc đến; khách chỉ hỏi về túi xách.",
"A hat": "Mũ không xuất hiện trong bài; hai người chỉ nói về chiếc túi xanh và túi đỏ.",
"A pair of shoes": "Giày không được nhắc đến; khách hỏi giá túi xanh rồi chọn túi đỏ."
}
},
{
"q": "How much is the red bag?",
"opts": [
"25 pounds",
"18 pounds",
"15 pounds",
"80 pounds"
],
"a": 1,
"kind": "number",
"why": "Nhân viên nói \"The red bag is eighteen pounds\", tức 18 bảng; 25 bảng là giá của chiếc túi xanh.",
"wrong": {
"25 pounds": "25 bảng là giá chiếc túi xanh, còn túi đỏ rẻ hơn.",
"15 pounds": "15 bảng không được nhắc đến; eighteen là 18, không phải fifteen là 15.",
"80 pounds": "80 bảng dễ nhầm với eighteen (18) nhưng giá thật của túi đỏ là 18 bảng."
}
},
{
"q": "What will the customer do next?",
"opts": [
"Look at more blue bags",
"Go to another shop",
"Pay for the red bag",
"Ask for a cheaper hat"
],
"a": 2,
"kind": "next-step",
"why": "Khách nói sẽ lấy chiếc túi đỏ và nhân viên đòi 18 bảng, nên bước tiếp theo là khách trả tiền cho chiếc túi đỏ.",
"wrong": {
"Look at more blue bags": "Khách thấy túi xanh quá đắt và đã chọn túi đỏ, nên không xem thêm túi xanh.",
"Go to another shop": "Khách đã quyết định mua ở cửa hàng này (I'll take the red one), không đi nơi khác.",
"Ask for a cheaper hat": "Không ai nhắc đến mũ; khách chỉ mua chiếc túi đỏ."
}
}
]
},
{
"id": "lc-113",
"lvl": "A1",
"kind": "announcement",
"title": "English class this week",
"script": [
[
"Teacher",
"Good morning, everyone. This message is about our English class."
],
[
"Teacher",
"The class is on Tuesday and Thursday."
],
[
"Teacher",
"It starts at six in the evening."
],
[
"Teacher",
"The room is number twelve, on the second floor."
],
[
"Teacher",
"Please come ten minutes early."
],
[
"Teacher",
"Bring a pen and a book."
],
[
"Teacher",
"Again, room twelve, at six o'clock. Thank you."
]
],
"qs": [
{
"q": "What is the message about?",
"opts": [
"A language lesson",
"A job interview",
"A football game",
"A birthday party"
],
"a": 0,
"kind": "gist",
"why": "Người nói mở đầu bằng \"our English class\" rồi cho biết ngày, giờ và phòng học, nên thông báo nói về một lớp học tiếng Anh.",
"wrong": {
"A job interview": "Không có buổi phỏng vấn xin việc nào; thông báo chỉ nói về lớp tiếng Anh.",
"A football game": "Không có trận bóng đá nào được nhắc đến, chỉ có giờ và phòng của lớp học.",
"A birthday party": "Không có tiệc sinh nhật; người nói chỉ nhắc học viên mang bút và sách."
}
},
{
"q": "Which room is the class in?",
"opts": [
"Room 2",
"Room 6",
"Room 10",
"Room 12"
],
"a": 3,
"kind": "number",
"why": "Người nói nhắc hai lần \"room twelve\", tức phòng 12; số 2 là tầng, số 6 là giờ học.",
"wrong": {
"Room 2": "Số 2 là tầng hai (second floor), không phải số phòng.",
"Room 6": "Số 6 là giờ bắt đầu lớp (six o'clock), không phải số phòng.",
"Room 10": "Phòng 10 không có trong bài; mười phút (ten minutes) là thời gian đến sớm."
}
},
{
"q": "What should students bring?",
"opts": [
"A phone and a bag",
"Something to write with and a book",
"Some food and water",
"A computer and a pen"
],
"a": 1,
"kind": "detail",
"why": "Người nói dặn \"Bring a pen and a book\", nghĩa là mang một cây bút để viết và một quyển sách.",
"wrong": {
"A phone and a bag": "Điện thoại và túi không được nhắc đến; chỉ có bút và sách.",
"Some food and water": "Thức ăn và nước không được nhắc đến trong lời dặn của giáo viên.",
"A computer and a pen": "Máy tính không được nhắc đến; giáo viên chỉ nói mang bút và sách."
}
}
]
},
{
"id": "lc-114",
"lvl": "A1",
"kind": "voicemail",
"title": "Meeting on Saturday",
"script": [
[
"Ben",
"Hi Mia, it's Ben."
],
[
"Ben",
"Let's meet on Saturday."
],
[
"Ben",
"We can meet at the bus station."
],
[
"Ben",
"Please come at half past ten."
],
[
"Ben",
"Then we can go to the park."
],
[
"Ben",
"The park is near the station."
],
[
"Ben",
"Call me if there is a problem. Bye."
]
],
"qs": [
{
"q": "Where will Ben and Mia meet?",
"opts": [
"At the park gate",
"At Mia's house",
"At the place where buses stop",
"At a shop in town"
],
"a": 2,
"kind": "detail",
"why": "Ben nói \"We can meet at the bus station\", tức gặp ở bến xe buýt; công viên chỉ là nơi họ đi sau đó.",
"wrong": {
"At the park gate": "Công viên là nơi họ đi sau khi gặp nhau, không phải chỗ hẹn gặp.",
"At Mia's house": "Ben không nhắc đến nhà của Mia; chỗ hẹn là bến xe buýt.",
"At a shop in town": "Không có cửa hàng nào được nhắc đến; họ gặp nhau ở bến xe."
}
},
{
"q": "What time will they meet?",
"opts": [
"10:30",
"10:00",
"11:30",
"9:30"
],
"a": 0,
"kind": "number",
"why": "Ben nói \"half past ten\", nghĩa là 10 giờ 30; các giờ khác không được nhắc đến trong tin nhắn.",
"wrong": {
"10:00": "10:00 là \"ten o'clock\"; Ben nói half past ten, tức 10 giờ rưỡi.",
"11:30": "11:30 không có trong bài; half past ten là 10:30, không phải 11:30.",
"9:30": "9:30 không được nhắc đến; Ben hẹn lúc half past ten."
}
},
{
"q": "What will they do after they meet?",
"opts": [
"Go shopping",
"Have lunch",
"Watch a film",
"Visit the park"
],
"a": 3,
"kind": "next-step",
"why": "Ben nói \"Then we can go to the park\", nên sau khi gặp nhau họ sẽ đi công viên.",
"wrong": {
"Go shopping": "Ben không nhắc đến việc đi mua sắm; kế hoạch là đi công viên.",
"Have lunch": "Không có bữa trưa nào được nhắc đến trong tin nhắn của Ben.",
"Watch a film": "Không có phim nào được nhắc đến; họ định đến công viên gần bến xe."
}
}
]
},
{
"id": "lc-115",
"lvl": "A1",
"kind": "conversation",
"title": "A rainy morning",
"script": [
[
"Jo",
"Hi Sam. What do you do in the morning?"
],
[
"Sam",
"I get up at six. I have breakfast at seven."
],
[
"Jo",
"Do you go to work by bus?"
],
[
"Sam",
"Yes, I do. The bus is at half past seven."
],
[
"Jo",
"But today it's raining."
],
[
"Sam",
"Yes. Today I take a taxi. I don't like rain."
],
[
"Jo",
"Good idea. Have a nice day."
]
],
"qs": [
{
"q": "What are Jo and Sam talking about?",
"opts": [
"A holiday",
"Sam's morning",
"A new job",
"Their lunch"
],
"a": 1,
"kind": "gist",
"why": "Jo hỏi Sam làm gì buổi sáng, và Sam kể giờ dậy, giờ ăn sáng và cách đi làm, nên họ nói về buổi sáng của Sam.",
"wrong": {
"A holiday": "Không ai nói về kỳ nghỉ; họ nói về giờ dậy và đi làm.",
"A new job": "Sam đã có việc rồi, họ chỉ nói cách Sam đi làm mỗi sáng.",
"Their lunch": "Không có bữa trưa nào được nhắc đến, chỉ có bữa sáng lúc bảy giờ."
}
},
{
"q": "When does Sam have breakfast?",
"opts": [
"At six",
"At half past seven",
"At seven",
"At eight"
],
"a": 2,
"kind": "number",
"why": "Sam nói \"I have breakfast at seven\", tức 7 giờ; 6 giờ là giờ dậy và 7:30 là giờ xe buýt.",
"wrong": {
"At six": "6 giờ là lúc Sam thức dậy (get up), không phải giờ ăn sáng.",
"At half past seven": "7:30 là giờ xe buýt chạy, không phải giờ ăn sáng.",
"At eight": "8 giờ không được nhắc đến trong bài; Sam ăn sáng lúc bảy giờ."
}
},
{
"q": "How does Sam go to work today?",
"opts": [
"In a taxi",
"By bus",
"On foot",
"By bike"
],
"a": 0,
"kind": "inference",
"why": "Hôm nay trời mưa và Sam nói \"Today I take a taxi\", nên hôm nay Sam đi làm bằng taxi dù thường đi xe buýt.",
"wrong": {
"By bus": "Xe buýt là cách Sam đi thường ngày, nhưng hôm nay trời mưa nên anh đổi sang taxi.",
"On foot": "Đi bộ không được nhắc đến; Sam không thích mưa và đi taxi.",
"By bike": "Xe đạp không có trong bài; Sam nói rõ hôm nay anh đi taxi."
}
}
]
},
{
"id": "lc-116",
"lvl": "A1",
"kind": "conversation",
"title": "At the pharmacy",
"script": [
[
"Pharmacist",
"Good afternoon. Can I help you?"
],
[
"Customer",
"Yes. I feel ill. My head hurts."
],
[
"Pharmacist",
"Is it only your head?"
],
[
"Customer",
"No. My back and my stomach hurt too."
],
[
"Pharmacist",
"Take this medicine two times a day."
],
[
"Customer",
"Two times a day. Thank you."
],
[
"Pharmacist",
"Drink water and rest at home."
]
],
"qs": [
{
"q": "What else hurts?",
"opts": [
"Hand and head",
"Hand and back",
"Hand and stomach",
"Back and stomach"
],
"a": 3,
"kind": "detail",
"why": "Người khách nói \"My back and my stomach hurt too\", nên ngoài đầu còn đau lưng và bụng; tay không được nhắc đến.",
"wrong": {
"Hand and head": "Đầu đau từ đầu, và tay không hề được nhắc đến trong bài.",
"Hand and back": "Lưng có đau nhưng tay thì không được nhắc đến; phần đau còn lại là bụng.",
"Hand and stomach": "Bụng có đau nhưng tay không được nhắc đến; phần đau còn lại là lưng."
}
},
{
"q": "How often should the customer take the medicine?",
"opts": [
"One time a day",
"Twice every day",
"Three times a day",
"Four times a day"
],
"a": 1,
"kind": "number",
"why": "Dược sĩ nói \"two times a day\", tức hai lần mỗi ngày, đúng với \"twice every day\".",
"wrong": {
"One time a day": "Một lần một ngày sai với \"two times a day\" của dược sĩ.",
"Three times a day": "Ba lần một ngày không được nhắc đến; dược sĩ nói hai lần.",
"Four times a day": "Bốn lần một ngày không có trong bài; dược sĩ nói hai lần mỗi ngày."
}
},
{
"q": "What does the pharmacist tell the customer to do?",
"opts": [
"Go back to work",
"Visit the hospital",
"Rest and have some water",
"Play some sport"
],
"a": 2,
"kind": "next-step",
"why": "Dược sĩ dặn \"Drink water and rest at home\", nghĩa là uống nước và nghỉ ngơi ở nhà.",
"wrong": {
"Go back to work": "Dược sĩ bảo nghỉ ở nhà, không bảo quay lại làm việc.",
"Visit the hospital": "Không ai nhắc đến bệnh viện; dược sĩ chỉ đưa thuốc và dặn nghỉ ngơi.",
"Play some sport": "Chơi thể thao không được nhắc đến; khách đang ốm nên được dặn nghỉ ngơi."
}
}
]
},
{
"id": "lc-121",
"lvl": "A2",
"kind": "conversation",
"title": "Buying a rucksack",
"script": [
[
"Assistant",
"Good morning. Can I help you?"
],
[
"Customer",
"Yes, please. I'm looking for a rucksack for school. Something not too big."
],
[
"Assistant",
"This blue one is popular. It's twenty-eight pounds, and it has a pocket for water."
],
[
"Customer",
"It's nice, but a bit expensive. Do you have anything cheaper?"
],
[
"Assistant",
"The grey one is twenty-two pounds. It's smaller, but it's very strong."
],
[
"Customer",
"Grey is fine. I need space for my laptop. Can it fit?"
],
[
"Assistant",
"Yes, a small laptop fits in the back pocket."
],
[
"Customer",
"Great, I'll take it. Can I pay by card?"
],
[
"Assistant",
"Of course. Please put your card in the machine."
]
],
"qs": [
{
"q": "What does the customer decide to do?",
"opts": [
"Buy the blue rucksack",
"Buy the grey rucksack",
"Look in another shop",
"Ask for a bigger bag"
],
"a": 1,
"kind": "gist",
"why": "Khách nói cần thứ rẻ hơn, nghe giá ba lô xám rồi nói \"I'll take it\", nghĩa là quyết định mua chiếc màu xám.",
"wrong": {
"Buy the blue rucksack": "Khách thấy chiếc xanh hơi đắt và hỏi món rẻ hơn nên không chọn nó.",
"Look in another shop": "Khách nói \"I'll take it\" và hỏi trả bằng thẻ, tức là mua ngay tại cửa hàng này.",
"Ask for a bigger bag": "Khách muốn thứ \"not too big\"; chiếc xám còn nhỏ hơn nhưng khách vẫn đồng ý."
}
},
{
"q": "How much is the grey rucksack?",
"opts": [
"£12",
"£20",
"£28",
"£22"
],
"a": 3,
"kind": "number",
"why": "Nhân viên nói \"The grey one is twenty-two pounds\", tức 22 bảng; 28 bảng là giá chiếc xanh.",
"wrong": {
"£12": "Không có giá mười hai bảng nào trong đoạn hội thoại, giá chiếc xám là hai mươi hai.",
"£20": "Nhân viên nêu rõ hai mươi hai bảng, không phải hai mươi.",
"£28": "Hai mươi tám bảng là giá chiếc ba lô xanh, khách đã chê là hơi đắt."
}
},
{
"q": "What does the customer want to carry in the bag?",
"opts": [
"A laptop",
"A water bottle",
"A lunch box",
"A camera"
],
"a": 0,
"kind": "detail",
"why": "Khách nói \"I need space for my laptop\" và nhân viên xác nhận máy tính nhỏ vừa ngăn sau.",
"wrong": {
"A water bottle": "Ngăn đựng nước chỉ là điểm của chiếc xanh; khách không nói cần mang chai nước.",
"A lunch box": "Không ai nhắc đến hộp cơm trong đoạn hội thoại.",
"A camera": "Khách không đề cập máy ảnh; thứ khách cần chỗ để là máy tính xách tay."
}
}
]
},
{
"id": "lc-122",
"lvl": "A2",
"kind": "announcement",
"title": "A school trip reminder",
"script": [
[
"Head teacher",
"Good afternoon, everyone. This is a reminder about Friday's school trip to the science museum."
],
[
"Head teacher",
"The bus leaves at eight thirty, so please arrive at the school gate by eight fifteen."
],
[
"Head teacher",
"Students should wear their school uniform and bring their own lunch."
],
[
"Head teacher",
"There is no need to bring money, because the museum tickets are already paid."
],
[
"Head teacher",
"If it rains, we will still go, so please bring a coat."
],
[
"Head teacher",
"We will be back at school at three o'clock, and parents can collect children at the main gate."
],
[
"Head teacher",
"Thank you for listening."
]
],
"qs": [
{
"q": "What is the announcement mainly about?",
"opts": [
"A change to the school uniform",
"A new rule about lunch",
"Arrangements for a visit on Friday",
"The cancellation of a trip"
],
"a": 2,
"kind": "gist",
"why": "Cả thông báo nhắc về chuyến đi bảo tàng vào thứ Sáu: giờ xe, đồ mang theo, giờ về.",
"wrong": {
"A change to the school uniform": "Đồng phục chỉ được nhắc một lần như yêu cầu, không có thay đổi nào.",
"A new rule about lunch": "Bữa trưa chỉ là một đồ cần mang, không phải nội dung chính.",
"The cancellation of a trip": "Người nói nói rõ nếu mưa vẫn đi, nên chuyến đi không bị hủy."
}
},
{
"q": "What time should students be at the gate?",
"opts": [
"8.15",
"8.30",
"9.15",
"3.00"
],
"a": 0,
"kind": "number",
"why": "Người nói bảo đến cổng trước tám giờ mười lăm; 8.30 là giờ xe chạy.",
"wrong": {
"8.30": "Tám giờ ba mươi là lúc xe buýt rời đi, học sinh phải đến sớm hơn.",
"9.15": "Không có giờ chín giờ mười lăm nào trong thông báo.",
"3.00": "Ba giờ là lúc cả đoàn về đến trường, không phải giờ tập trung."
}
},
{
"q": "What do students NOT need to bring?",
"opts": [
"A coat",
"Their own lunch",
"School uniform",
"Money for tickets"
],
"a": 3,
"kind": "detail",
"why": "Người nói bảo \"no need to bring money\" vì vé bảo tàng đã trả trước.",
"wrong": {
"A coat": "Người nói dặn mang áo khoác vì nếu mưa vẫn đi.",
"Their own lunch": "Học sinh được dặn mang bữa trưa của mình.",
"School uniform": "Học sinh được dặn phải mặc đồng phục."
}
}
]
},
{
"id": "lc-123",
"lvl": "A2",
"kind": "voicemail",
"title": "A restaurant booking problem",
"script": [
[
"Maria",
"Hello, this is Maria from the Green Table restaurant, calling for Mr Evans."
],
[
"Maria",
"You asked for a table for six people on Saturday at seven o'clock."
],
[
"Maria",
"I'm sorry, but we have a private party that evening, so the big room is not free."
],
[
"Maria",
"We can offer a table at six o'clock, or a table at eight thirty."
],
[
"Maria",
"Both tables are in the garden."
],
[
"Maria",
"Please call me back before Thursday and tell me which one you prefer."
],
[
"Maria",
"Thank you, and sorry again."
]
],
"qs": [
{
"q": "Why is Maria calling Mr Evans?",
"opts": [
"The time he asked for is not available",
"To thank him for a booking",
"To ask him to pay a deposit",
"To change the day to Sunday"
],
"a": 0,
"kind": "gist",
"why": "Maria xin lỗi vì có tiệc riêng nên phòng lớn không trống vào giờ bảy giờ tối thứ Bảy.",
"wrong": {
"To thank him for a booking": "Cô xin lỗi và đưa phương án khác, không phải cảm ơn.",
"To ask him to pay a deposit": "Trong tin nhắn không hề nhắc đến tiền đặt cọc.",
"To change the day to Sunday": "Cô đề nghị đổi giờ (sáu giờ hoặc tám giờ rưỡi), không đổi sang Chủ nhật."
}
},
{
"q": "How many people is the booking for?",
"opts": [
"Four",
"Seven",
"Six",
"Eight"
],
"a": 2,
"kind": "number",
"why": "Maria nói \"a table for six people\", tức bàn cho sáu người.",
"wrong": {
"Four": "Không có bàn bốn người nào được nhắc đến.",
"Seven": "Bảy giờ là giờ khách yêu cầu, không phải số người.",
"Eight": "Tám giờ rưỡi là giờ được đề nghị, không phải số người."
}
},
{
"q": "What should Mr Evans do?",
"opts": [
"Go to the restaurant on Thursday",
"Choose a time and call back",
"Book a table in the big room",
"Wait for another message"
],
"a": 1,
"kind": "next-step",
"why": "Maria dặn gọi lại trước thứ Năm để nói thích giờ nào trong hai giờ được đề nghị.",
"wrong": {
"Go to the restaurant on Thursday": "Thứ Năm chỉ là hạn chót để gọi lại, không phải ngày đến nhà hàng.",
"Book a table in the big room": "Phòng lớn không trống vì có tiệc riêng, nên không thể đặt.",
"Wait for another message": "Maria yêu cầu ông chủ động gọi lại, chứ không chờ tin khác."
}
}
]
},
{
"id": "lc-124",
"lvl": "A2",
"kind": "conversation",
"title": "A cough at the pharmacy",
"script": [
[
"Pharmacist",
"Hello. How can I help you?"
],
[
"Customer",
"Hi. I've had a cough for three days, and my throat hurts."
],
[
"Pharmacist",
"Do you have a fever?"
],
[
"Customer",
"No, but I feel tired, and I can't sleep well."
],
[
"Pharmacist",
"I'd suggest this cough syrup. Take two spoons after meals, three times a day."
],
[
"Customer",
"Is it safe to drive after taking it?"
],
[
"Pharmacist",
"Yes, it's fine. But drink lots of water and rest. If you're still ill after a week, see your doctor."
],
[
"Customer",
"OK, thank you. How much is it?"
],
[
"Pharmacist",
"It's six pounds fifty."
]
],
"qs": [
{
"q": "What problem does the customer have?",
"opts": [
"A high fever",
"A bad headache",
"A stomach ache",
"A cough and a sore throat"
],
"a": 3,
"kind": "gist",
"why": "Khách nói ho ba ngày và đau họng; không có sốt.",
"wrong": {
"A high fever": "Khách trả lời \"No\" khi được hỏi có sốt không.",
"A bad headache": "Khách không nhắc đến đau đầu, chỉ nói ho và đau họng.",
"A stomach ache": "Không có triệu chứng đau bụng nào trong hội thoại."
}
},
{
"q": "How often should she take the medicine?",
"opts": [
"Once a day",
"Three times a day",
"Twice a day",
"Every night only"
],
"a": 1,
"kind": "detail",
"why": "Dược sĩ dặn uống hai thìa sau bữa ăn, ba lần một ngày.",
"wrong": {
"Once a day": "Dược sĩ nói ba lần mỗi ngày, không phải một lần.",
"Twice a day": "Hai là số thìa mỗi lần uống, không phải số lần trong ngày.",
"Every night only": "Thuốc uống sau các bữa ăn, không chỉ vào buổi tối."
}
},
{
"q": "When should she see a doctor?",
"opts": [
"Right now",
"After three days",
"If she is not better after seven days",
"When the bottle is empty"
],
"a": 2,
"kind": "next-step",
"why": "Dược sĩ nói nếu sau một tuần vẫn còn ốm thì nên đi khám bác sĩ.",
"wrong": {
"Right now": "Dược sĩ cho rằng siro là đủ lúc này, chưa cần đi khám ngay.",
"After three days": "Ba ngày là thời gian khách đã bị ho, không phải mốc đi khám.",
"When the bottle is empty": "Dược sĩ chỉ nêu mốc một tuần, không nói đến lúc hết thuốc."
}
}
]
},
{
"id": "lc-125",
"lvl": "A2",
"kind": "conversation",
"title": "Finishing the group project",
"script": [
[
"Lena",
"Hi, Tom. Is our group project ready? We present on Wednesday."
],
[
"Tom",
"Almost. I finished the slides last night, but I still need pictures for the last page."
],
[
"Lena",
"I have some photos from the factory visit. I'll send them to you this afternoon."
],
[
"Tom",
"Thanks. Also, the teacher wants a printed report, not just slides."
],
[
"Lena",
"Really? The library printer is cheap, but it closes at four."
],
[
"Tom",
"I have a class until four thirty, so I can't go."
],
[
"Lena",
"No problem. I finish at three, so I'll print it tomorrow."
],
[
"Tom",
"Perfect. I'll send you the file before noon."
]
],
"qs": [
{
"q": "What does Tom still need for the project?",
"opts": [
"More slides about the factory",
"Pictures for the final page",
"A new presentation day",
"A printer for the slides"
],
"a": 1,
"kind": "detail",
"why": "Tom nói đã xong slide nhưng vẫn cần ảnh cho trang cuối.",
"wrong": {
"More slides about the factory": "Tom đã làm xong các slide; chỉ thiếu ảnh cho trang cuối.",
"A new presentation day": "Ngày thuyết trình là thứ Tư và không ai muốn đổi.",
"A printer for the slides": "Máy in là cho bản báo cáo chứ không phải slide, và Tom không nhờ tìm máy in."
}
},
{
"q": "Why can't Tom print the report himself?",
"opts": [
"His class ends after the library closes",
"The printer is too expensive",
"He has no photos to print",
"The teacher wants slides only"
],
"a": 0,
"kind": "inference",
"why": "Tom học đến bốn giờ rưỡi, còn máy in thư viện đóng cửa lúc bốn giờ nên anh không kịp.",
"wrong": {
"The printer is too expensive": "Lena nói máy in thư viện rẻ, nên giá không phải lý do.",
"He has no photos to print": "Ảnh là thứ Lena sẽ gửi; lý do của Tom là giờ học trùng giờ đóng cửa.",
"The teacher wants slides only": "Giáo viên muốn có báo cáo in, không chỉ slide."
}
},
{
"q": "What will Tom do before noon tomorrow?",
"opts": [
"Print the report at the library",
"Visit the factory again",
"Send the report file to Lena",
"Give the presentation"
],
"a": 2,
"kind": "next-step",
"why": "Tom nói \"I'll send you the file before noon\" để Lena in.",
"wrong": {
"Print the report at the library": "Lena mới là người sẽ in báo cáo vào ngày mai.",
"Visit the factory again": "Chuyến thăm nhà máy đã xảy ra rồi, Lena đã có ảnh.",
"Give the presentation": "Buổi thuyết trình diễn ra vào thứ Tư, không phải trước trưa ngày mai."
}
}
]
},
{
"id": "lc-126",
"lvl": "A2",
"kind": "conversation",
"title": "Buying bus tickets",
"script": [
[
"Clerk",
"Next, please. Where would you like to go?"
],
[
"Traveller",
"Two tickets to Oakford, please. Today, if possible."
],
[
"Clerk",
"The next bus leaves at one fifteen and takes about an hour and a half."
],
[
"Traveller",
"Good. How much is a ticket?"
],
[
"Clerk",
"A single is eight pounds, but a return is twelve. Children under ten travel free."
],
[
"Traveller",
"We're two adults, and we're coming back tonight, so two returns, please."
],
[
"Clerk",
"That's twenty-four pounds. The bus leaves from platform four."
],
[
"Traveller",
"Thank you. I'll pay by card."
]
],
"qs": [
{
"q": "What does the traveller buy?",
"opts": [
"Two one-way tickets",
"A ticket for a child",
"A day pass for the bus",
"Two round-trip tickets"
],
"a": 3,
"kind": "gist",
"why": "Khách nói \"two returns\" vì hai người lớn sẽ quay về trong tối nay.",
"wrong": {
"Two one-way tickets": "Khách đi về trong ngày nên chọn vé khứ hồi, không phải vé một chiều.",
"A ticket for a child": "Cả hai khách đều là người lớn, không có trẻ em.",
"A day pass for the bus": "Nhân viên không nhắc đến loại vé ngày nào."
}
},
{
"q": "How much does the traveller pay in total?",
"opts": [
"£8",
"£12",
"£24",
"£16"
],
"a": 2,
"kind": "number",
"why": "Hai vé khứ hồi, mỗi vé 12 bảng, tổng 24 bảng như nhân viên nói.",
"wrong": {
"£8": "Tám bảng là giá một vé một chiều, khách mua hai vé khứ hồi.",
"£12": "Mười hai bảng là giá một vé khứ hồi, khách mua hai vé.",
"£16": "Mười sáu sẽ là hai vé một chiều, nhưng khách mua vé khứ hồi nên tổng là hai mươi bốn."
}
},
{
"q": "Where does the bus leave from?",
"opts": [
"Platform four",
"Platform one",
"Platform two",
"Platform three"
],
"a": 0,
"kind": "detail",
"why": "Nhân viên nói xe chạy từ \"platform four\", tức bến số bốn.",
"wrong": {
"Platform one": "Số một không được nhắc; một giờ mười lăm chỉ là giờ xe chạy.",
"Platform two": "Số hai chỉ xuất hiện như số lượng vé, không phải bến.",
"Platform three": "Không có bến số ba trong hội thoại."
}
}
]
},
{
"id": "lc-131",
"lvl": "C1",
"kind": "talk",
"title": "Why testing beats re-reading",
"script": [
[
"Lecturer",
"Good morning. Today I want to challenge an assumption that most of you probably hold about revision. Ask a room of first-year students how they prepare for an exam, and the majority will say they read their notes again, perhaps highlighting the important parts."
],
[
"Lecturer",
"The trouble is that re-reading feels productive precisely because the material looks familiar. Familiarity, however, is not the same as being able to recall something. Psychologists call this the illusion of fluency, and it can leave students badly overconfident."
],
[
"Lecturer",
"Now consider a well-known experiment. One group studied a short passage four times in a row. A second group studied it once and then spent the remaining time trying to write down everything they could remember."
],
[
"Lecturer",
"Five minutes later, the first group actually performed slightly better. Had the researchers stopped there, re-reading might have looked like the winner. But when both groups were tested again a week later, the picture reversed completely."
],
[
"Lecturer",
"The students who had practised retrieval remembered roughly half as much again as the re-readers. This is what we call the testing effect: the act of pulling information out of memory strengthens it more than putting it in again."
],
[
"Lecturer",
"I should add a caveat. Retrieval practice works best when it is a little difficult. If the questions are so easy that every answer comes instantly, the benefit shrinks. Mistakes, surprisingly, are not a problem, provided you check the correct answer afterwards."
],
[
"Lecturer",
"What surprised many teachers was that this does not require formal tests. Writing a quick summary from memory, or explaining a concept aloud to a friend, achieves much the same thing."
],
[
"Lecturer",
"So, for next week, I am not asking you to read chapter six again. Instead, close the book, write down five questions about it, and answer them without looking. We will compare how that went in our next session."
]
],
"qs": [
{
"q": "What is the main point the lecturer makes about re-reading?",
"opts": [
"It is the most reliable way to prepare for any exam.",
"It creates a feeling of knowing that does not match real recall.",
"It works well only when notes are highlighted carefully.",
"It helps students most when they study in groups."
],
"a": 1,
"kind": "gist",
"why": "Giảng viên nói đọc lại 'feels productive' vì tài liệu trông quen, và gọi đó là ảo giác lưu loát, tức cảm giác biết nhưng chưa chắc nhớ được.",
"wrong": {
"It is the most reliable way to prepare for any exam.": "Bài giảng nói đọc lại chỉ tạo cảm giác quen thuộc, không phải cách đáng tin cậy nhất; thí nghiệm sau một tuần còn cho thấy kết quả ngược lại.",
"It works well only when notes are highlighted carefully.": "Người nói chỉ nhắc việc tô đậm như thói quen phổ biến, không hề nói rằng tô đậm kỹ sẽ làm cho việc đọc lại hiệu quả.",
"It helps students most when they study in groups.": "Bài giảng không đề cập đến học nhóm; nhóm trong thí nghiệm chỉ là hai nhóm đối chiếu, không liên quan đến cách đọc lại."
}
},
{
"q": "What happened when both groups were tested a week later?",
"opts": [
"The group that studied four times remembered more.",
"Both groups remembered about the same amount.",
"Neither group could recall the passage at all.",
"The group that practised recalling remembered clearly more."
],
"a": 3,
"kind": "detail",
"why": "Sau năm phút nhóm đọc lại hơn một chút, nhưng sau một tuần bức tranh đảo ngược và nhóm luyện nhớ lại nhớ nhiều hơn khoảng một nửa.",
"wrong": {
"The group that studied four times remembered more.": "Kết quả đảo ngược sau một tuần: nhóm đọc lại bốn lần chỉ hơn ở bài kiểm tra sau năm phút, chứ không phải sau một tuần.",
"Both groups remembered about the same amount.": "Giảng viên nói bức tranh 'reversed completely' và nhóm luyện nhớ lại nhớ nhiều hơn khoảng một nửa, nên hai nhóm không hề bằng nhau.",
"Neither group could recall the passage at all.": "Nhóm luyện nhớ lại vẫn nhớ khá nhiều, nên không thể nói cả hai nhóm đều không nhớ được gì sau một tuần."
}
},
{
"q": "What does the lecturer ask the students to do before the next session?",
"opts": [
"Quiz themselves on a chapter without using the book.",
"Read chapter six once more and highlight it.",
"Take a formal test written by their teacher.",
"Explain the experiment to a friend in writing."
],
"a": 0,
"kind": "next-step",
"why": "Cuối bài người nói bảo đóng sách, viết năm câu hỏi về chương sáu và trả lời mà không nhìn tài liệu, rồi sẽ so sánh ở buổi sau.",
"wrong": {
"Read chapter six once more and highlight it.": "Giảng viên nói rõ không yêu cầu đọc lại chương sáu, mà bảo đóng sách lại và tự trả lời câu hỏi.",
"Take a formal test written by their teacher.": "Người nói nhấn mạnh việc này không cần bài kiểm tra chính thức; sinh viên tự viết năm câu hỏi và tự trả lời.",
"Explain the experiment to a friend in writing.": "Giải thích cho bạn chỉ được nhắc như một ví dụ về luyện nhớ lại, còn bài tập về nhà là tự viết và trả lời năm câu hỏi."
}
}
]
},
{
"id": "lc-132",
"lvl": "C1",
"kind": "interview",
"title": "Restoring seagrass meadows",
"script": [
[
"Presenter",
"My guest today is Dr Hale, a marine ecologist who has spent a decade trying to bring back seagrass meadows along our coast. Dr Hale, why should anyone care about what is, frankly, underwater grass?"
],
[
"Dr Hale",
"Well, that is exactly the perception problem. Seagrass stores carbon, shelters young fish and calms the water so the seabed doesn't wash away. Pound for pound, it locks away carbon faster than many forests, although people rarely hear that."
],
[
"Presenter",
"And yet we have lost a great deal of it."
],
[
"Dr Hale",
"Roughly a third in this region, mostly through pollution and boat anchors. For years the assumption was that if you simply planted seeds, the meadows would return. Our early trials, I'm afraid, were rather humbling. Most of the seedlings were eaten or buried within weeks."
],
[
"Presenter",
"So what changed?"
],
[
"Dr Hale",
"We stopped treating it as a gardening exercise. We spent a year just watching: which spots had the right currents, where the sediment was stable. When we replanted in carefully chosen patches, survival went from about ten per cent to nearly sixty."
],
[
"Presenter",
"That sounds like a success story."
],
[
"Dr Hale",
"Cautiously, yes. What worries me is the funding cycle. Most grants last three years, whereas a meadow needs closer to ten to become self-sustaining. If monitoring stops too early, we may never know whether the work has really lasted."
],
[
"Presenter",
"Is there anything the public can do?"
],
[
"Dr Hale",
"Honestly, the most useful thing is modest: avoid anchoring in the beds. Some harbours now provide mooring buoys, and a few boat owners have even volunteered to help us count shoots each summer. That sort of local pride matters more than any one big donation."
]
],
"qs": [
{
"q": "According to Dr Hale, what was the main reason the early trials struggled?",
"opts": [
"The seeds were too expensive to plant widely.",
"Pollution had already killed all the meadows.",
"Seedlings were placed in spots where they could not survive.",
"Volunteers damaged the seedlings by anchoring boats."
],
"a": 2,
"kind": "detail",
"why": "Sau một năm quan sát dòng chảy và độ ổn định của trầm tích, tỷ lệ sống tăng mạnh, nghĩa là trước đó cây bị trồng sai chỗ.",
"wrong": {
"The seeds were too expensive to plant widely.": "Dr Hale không nhắc đến giá hạt giống; vấn đề là cây con bị ăn hoặc bị vùi lấp do chọn sai vị trí.",
"Pollution had already killed all the meadows.": "Ông nói đã mất khoảng một phần ba thảm cỏ biển, không phải tất cả, và lý do thử nghiệm đầu thất bại là vị trí trồng.",
"Volunteers damaged the seedlings by anchoring boats.": "Neo thuyền được nhắc như nguyên nhân gây mất thảm cỏ, còn thử nghiệm đầu thất bại vì cây con bị ăn hoặc bị vùi."
}
},
{
"q": "What is Dr Hale most concerned about?",
"opts": [
"Projects may be judged before the meadows are secure.",
"Too many boat owners are volunteering for the work.",
"People now believe seagrass is less useful than forests.",
"The new planting method has a low survival rate."
],
"a": 0,
"kind": "inference",
"why": "Ông lo nguồn tài trợ chỉ kéo dài ba năm trong khi thảm cỏ cần gần mười năm, nên việc theo dõi có thể dừng quá sớm.",
"wrong": {
"Too many boat owners are volunteering for the work.": "Ông nói tình nguyện viên là điều tích cực; mối lo thật sự là thời gian tài trợ quá ngắn.",
"People now believe seagrass is less useful than forests.": "Ông nói rằng cỏ biển hấp thụ carbon nhanh hơn nhiều khu rừng; vấn đề là ít người biết điều đó, chứ không phải bị coi là kém giá trị.",
"The new planting method has a low survival rate.": "Tỷ lệ sống đã tăng từ khoảng mười lên gần sáu mươi phần trăm, nên đó không phải điều ông lo ngại."
}
},
{
"q": "What does Dr Hale say is the most helpful thing for the public to do?",
"opts": [
"Give one large donation to the research team.",
"Plant seeds along the shoreline themselves.",
"Stay away from the coast during the summer.",
"Keep boats from dropping anchor on the seagrass."
],
"a": 3,
"kind": "detail",
"why": "Ông nói việc hữu ích nhất khá khiêm tốn là tránh thả neo trong các thảm cỏ, và nhiều bến cảng đã có phao neo.",
"wrong": {
"Give one large donation to the research team.": "Ông nói niềm tự hào địa phương quan trọng hơn bất kỳ khoản quyên góp lớn nào.",
"Plant seeds along the shoreline themselves.": "Ông nói thử nghiệm trồng hạt đơn giản đã thất bại, và không khuyên công chúng tự trồng.",
"Stay away from the coast during the summer.": "Không có chi tiết nào về việc tránh bờ biển; ông còn nhắc tình nguyện viên đếm chồi mỗi mùa hè."
}
}
]
},
{
"id": "lc-133",
"lvl": "C1",
"kind": "conversation",
"title": "Launching the new booking system",
"script": [
[
"Priya",
"Callum, I've read your proposal for switching every branch to the new booking system on the first of March, and I have to be honest, I'm not comfortable with it."
],
[
"Callum",
"I did expect that. But think about the alternative. If we run two systems side by side for months, staff will have to enter every appointment twice. That's a recipe for errors."
],
[
"Priya",
"I understand the risk of duplication, but a full launch in one go is a much bigger gamble. If something breaks, all twelve branches are affected at once, and it's the busiest period of the year."
],
[
"Callum",
"The vendor has promised round-the-clock support for the first fortnight. And honestly, a pilot would only delay the training we need to do anyway."
],
[
"Priya",
"Promises are one thing. What worries me is that the test version still crashes when two people edit the same booking. Until that's fixed, I wouldn't put it in front of customers."
],
[
"Callum",
"Fair point, I hadn't realised that was still open. Though I'd argue that's an argument for fixing it quickly, not for slowing everything down."
],
[
"Priya",
"Why not both? Start with the two smallest branches in March. If they run smoothly for three weeks, the rest could follow in April. The delay is minor, and we would learn what actually goes wrong."
],
[
"Callum",
"Hmm. My concern is that the director is expecting a single date. Moving it would mean explaining why we changed our minds."
],
[
"Priya",
"I'd rather explain a cautious start than a failure. Let me draft a short note for her, and you can check whether the numbers hold up."
],
[
"Callum",
"All right, send it over. I'm not fully convinced, but I'd like to see the plan on paper before I object any further."
]
],
"qs": [
{
"q": "What is Priya's main objection to the original plan?",
"opts": [
"Staff would have to be trained twice.",
"Starting everywhere at once carries too much risk.",
"The vendor refuses to offer any support.",
"The date clashes with the director's schedule."
],
"a": 1,
"kind": "gist",
"why": "Priya nói nếu hệ thống hỏng thì cả mười hai chi nhánh bị ảnh hưởng cùng lúc, trong thời điểm bận nhất năm.",
"wrong": {
"Staff would have to be trained twice.": "Callum mới là người nói về việc nhập đôi dữ liệu; Priya phản đối vì rủi ro khi ra mắt đồng loạt cả mười hai chi nhánh.",
"The vendor refuses to offer any support.": "Nhà cung cấp đã hứa hỗ trợ suốt ngày đêm trong hai tuần đầu, nên đó không phải lý do phản đối của Priya.",
"The date clashes with the director's schedule.": "Chỉ Callum lo giám đốc mong một ngày duy nhất; Priya không phản đối vì lịch của giám đốc."
}
},
{
"q": "What problem with the test version does Priya mention?",
"opts": [
"It cannot store more than twelve branches.",
"It deletes appointments entered twice.",
"It fails when two users change one booking.",
"It is too slow to use during busy periods."
],
"a": 2,
"kind": "detail",
"why": "Priya nói bản thử vẫn bị treo khi hai người cùng chỉnh sửa một lượt đặt, và Callum thừa nhận mình chưa biết lỗi này.",
"wrong": {
"It cannot store more than twelve branches.": "Con số mười hai chỉ là số chi nhánh; không có giới hạn lưu trữ nào được nhắc đến.",
"It deletes appointments entered twice.": "Việc nhập đôi chỉ là rủi ro nếu chạy hai hệ thống song song; lỗi của bản thử lại là treo khi hai người sửa cùng lúc.",
"It is too slow to use during busy periods.": "Tốc độ không được nói đến; lỗi được nêu là bị treo khi hai người cùng sửa một lượt đặt chỗ."
}
},
{
"q": "What will probably happen next?",
"opts": [
"Priya will write a note proposing a gradual start.",
"Callum will tell the vendor to cancel the project.",
"Both colleagues will launch in all branches in March.",
"The director will test the system with customers."
],
"a": 0,
"kind": "next-step",
"why": "Priya nói sẽ soạn một ghi chú ngắn cho giám đốc về việc khởi đầu thận trọng, còn Callum sẽ kiểm tra các con số.",
"wrong": {
"Callum will tell the vendor to cancel the project.": "Callum vẫn muốn tiếp tục dự án, chỉ nói muốn xem kế hoạch trên giấy trước khi phản đối thêm.",
"Both colleagues will launch in all branches in March.": "Priya đề xuất bắt đầu với hai chi nhánh nhỏ trước, và Callum chưa đồng ý ra mắt đồng loạt.",
"The director will test the system with customers.": "Giám đốc chỉ được nhắc là người mong một ngày ra mắt duy nhất, và sẽ nhận ghi chú giải thích."
}
}
]
},
{
"id": "lc-134",
"lvl": "C1",
"kind": "conversation",
"title": "Planning a stroke patient's pathway",
"script": [
[
"Dr Okafor",
"Before the ward round, can we go through Mr Brennan's pathway? He's day six after the stroke, and his weakness on the left side has improved quite a bit."
],
[
"Nurse Lindqvist",
"Yes, physio say he can now stand with support for two minutes. His swallowing is the concern, though. The speech therapist saw him this morning and still wants him on thickened fluids."
],
[
"Dr Okafor",
"Understood. That does limit our options for discharge. His daughter has been asking whether he can go home at the weekend."
],
[
"Nurse Lindqvist",
"I did explain that it's too soon, but I don't think she fully accepted it. She works full-time and she's worried about leaving him alone during the day."
],
[
"Dr Okafor",
"That's reasonable, and it matters. What I'd suggest is a transfer to the rehabilitation unit rather than home. He'd get daily therapy, and we could reassess in two to three weeks."
],
[
"Nurse Lindqvist",
"The unit has a bed on Thursday, but there's a catch. They need his blood pressure stable for forty-eight hours first, and yesterday's reading was a little high."
],
[
"Dr Okafor",
"Then let's adjust his medication this afternoon and recheck tomorrow. If the readings settle, we can confirm the Thursday bed."
],
[
"Nurse Lindqvist",
"Should I speak to the daughter, or would you prefer to do it?"
],
[
"Dr Okafor",
"I'll see her myself after the round, because she'll want to ask about the long-term outlook. Could you make sure the social worker has the family's contact details? We will need a home assessment eventually."
],
[
"Nurse Lindqvist",
"Of course. I'll page her straight away and note that the transfer depends on his blood pressure."
]
],
"qs": [
{
"q": "Why is Mr Brennan not ready to go home at the weekend?",
"opts": [
"He cannot stand up even with any support.",
"His daughter has refused to take him home.",
"The rehabilitation unit has no beds this week.",
"His swallowing problem still needs specialist management."
],
"a": 3,
"kind": "inference",
"why": "Người nói nhắc nhà trị liệu ngôn ngữ vẫn muốn dùng chất lỏng đặc, tức vấn đề nuốt khiến việc xuất viện cuối tuần là quá sớm.",
"wrong": {
"He cannot stand up even with any support.": "Vật lý trị liệu nói ông đã đứng được hai phút khi có hỗ trợ, nên không phải hoàn toàn không đứng được.",
"His daughter has refused to take him home.": "Con gái chỉ lo lắng vì phải đi làm cả ngày; không có chi tiết nào cho thấy cô từ chối đón ông.",
"The rehabilitation unit has no beds this week.": "Đơn vị phục hồi có giường vào thứ Năm, nhưng điều kiện là huyết áp ổn định."
}
},
{
"q": "What must happen before the Thursday bed can be confirmed?",
"opts": [
"The social worker must complete a home visit.",
"His blood pressure must stay steady for two days.",
"His daughter must sign the transfer papers.",
"He must walk unaided for several minutes."
],
"a": 1,
"kind": "detail",
"why": "Y tá nói đơn vị phục hồi cần huyết áp ổn định bốn mươi tám giờ, tức hai ngày, và hôm qua chỉ số hơi cao.",
"wrong": {
"The social worker must complete a home visit.": "Đánh giá tại nhà sẽ cần sau này; nó không phải điều kiện cho giường vào thứ Năm.",
"His daughter must sign the transfer papers.": "Không có giấy tờ nào của con gái được nhắc; điều kiện duy nhất là huyết áp ổn định.",
"He must walk unaided for several minutes.": "Ông mới đứng được hai phút khi có hỗ trợ, và việc đi bộ không phải điều kiện chuyển khoa."
}
},
{
"q": "What will the doctor do after the ward round?",
"opts": [
"Page the social worker about the home assessment.",
"Change the speech therapist's treatment plan.",
"Meet the daughter to discuss his future recovery.",
"Increase the patient's therapy sessions himself."
],
"a": 2,
"kind": "next-step",
"why": "Bác sĩ nói sẽ tự gặp con gái sau khi đi buồng bệnh vì cô sẽ hỏi về tiên lượng lâu dài của cha.",
"wrong": {
"Page the social worker about the home assessment.": "Việc gọi nhân viên xã hội là do y tá đảm nhận, không phải bác sĩ.",
"Change the speech therapist's treatment plan.": "Bác sĩ chấp nhận ý kiến nhà trị liệu về chất lỏng đặc và không nói sẽ thay đổi kế hoạch của họ.",
"Increase the patient's therapy sessions himself.": "Bác sĩ chỉ đề xuất chuyển sang đơn vị phục hồi, không nói sẽ tự tăng số buổi trị liệu."
}
}
]
},
{
"id": "lc-135",
"lvl": "C1",
"kind": "conversation",
"title": "Should town centres ban cars?",
"script": [
[
"Presenter",
"Welcome back. Tonight we are asking whether town centres should be closed to private cars. With me is Marta Quill, who studies urban transport. Marta, is a ban realistic?"
],
[
"Marta Quill",
"It can be, but it rarely works as a sudden ban. Where it has succeeded, towns have usually closed a few streets first, then expanded once people got used to the change."
],
[
"Presenter",
"Shopkeepers always warn that customers will vanish."
],
[
"Marta Quill",
"That fear is understandable, although the evidence is mixed in a rather interesting way. Shop owners typically overestimate how many customers arrive by car. Counts show that most visitors walk, cycle or take the bus."
],
[
"Presenter",
"So the shops are wrong?"
],
[
"Marta Quill",
"Not entirely. Delivery access matters, and people with limited mobility need to reach the centre. A scheme that ignores those groups deserves the criticism it gets."
],
[
"Presenter",
"What about the drivers who live outside the town?"
],
[
"Marta Quill",
"That's the hardest part. If there are no frequent buses, you are effectively telling them to stay away. I'd say the transport has to improve first, and the restrictions come second, not the other way round."
],
[
"Presenter",
"Some people argue the whole idea is simply anti-car."
],
[
"Marta Quill",
"I see why it looks that way, but I think the real aim is more modest: giving the space back to people. Once the first street becomes a coffee area, opposition tends to soften considerably."
],
[
"Presenter",
"A final thought for councils listening?"
],
[
"Marta Quill",
"Start small, publish the numbers openly, and be willing to adjust. Credibility counts for more than speed."
]
],
"qs": [
{
"q": "What does Marta say about the way successful bans have been introduced?",
"opts": [
"They began with a few streets and grew gradually.",
"They were imposed on the whole centre overnight.",
"They started only after shops had agreed to them.",
"They were limited to evenings and weekends."
],
"a": 0,
"kind": "detail",
"why": "Marta nói thành công thường bắt đầu bằng việc đóng vài con phố rồi mở rộng khi người dân đã quen.",
"wrong": {
"They were imposed on the whole centre overnight.": "Marta nói hiếm khi thành công nếu cấm đột ngột; các thị trấn thành công thường đóng vài con phố trước.",
"They started only after shops had agreed to them.": "Cô không nói cửa hàng phải đồng ý trước; cô còn nói chủ cửa hàng thường đánh giá quá cao số khách đi ô tô.",
"They were limited to evenings and weekends.": "Không có chi tiết nào về giới hạn buổi tối hay cuối tuần; điểm chính là mở rộng dần từ vài con phố."
}
},
{
"q": "What is Marta's attitude to shopkeepers' concerns?",
"opts": [
"She believes they are entirely mistaken.",
"She thinks they should be ignored by councils.",
"She thinks they are partly valid but exaggerated.",
"She is mainly concerned about their delivery costs."
],
"a": 2,
"kind": "inference",
"why": "Cô nói chủ cửa hàng đánh giá quá cao khách đi ô tô nhưng vẫn có lý về giao hàng, tức một phần đúng và một phần phóng đại.",
"wrong": {
"She believes they are entirely mistaken.": "Cô nói 'Not entirely' và thừa nhận vấn đề giao hàng và người khó đi lại là những mối lo có cơ sở.",
"She thinks they should be ignored by councils.": "Cô nói một kế hoạch phớt lờ các nhóm đó xứng đáng bị chỉ trích, nên không khuyên bỏ qua.",
"She is mainly concerned about their delivery costs.": "Cô chỉ nhắc quyền tiếp cận giao hàng như một ví dụ chính đáng, chứ không nói về chi phí của cửa hàng."
}
},
{
"q": "What order of change does Marta recommend?",
"opts": [
"Add restrictions and improve transport at once.",
"Close the centre first and then add bus routes.",
"Open cafés first and then close the streets.",
"Improve public transport before adding restrictions."
],
"a": 3,
"kind": "next-step",
"why": "Cô nói giao thông phải được cải thiện trước, hạn chế đến sau, vì người sống ngoài thị trấn cần xe buýt thường xuyên.",
"wrong": {
"Add restrictions and improve transport at once.": "Cô nói rõ giao thông công cộng phải cải thiện trước, còn hạn chế đến sau, chứ không đồng thời.",
"Close the centre first and then add bus routes.": "Cô nói 'not the other way round', tức không đóng cửa trung tâm trước rồi mới thêm tuyến xe buýt.",
"Open cafés first and then close the streets.": "Khu cà phê chỉ xuất hiện sau khi phố đầu tiên được đóng; cô không nói mở quán trước để đóng đường."
}
}
]
},
{
"id": "lc-136",
"lvl": "C1",
"kind": "announcement",
"title": "A change to the conference programme",
"script": [
[
"Organiser",
"Good morning, everyone, and welcome to the second day of the regional teaching conference. Before we begin, I have a few updates to the printed programme, so please take a pen."
],
[
"Organiser",
"Nothing is changing for registration, which stays open at the front desk all day."
],
[
"Organiser",
"First, the opening keynote on digital assessment will start at nine thirty, as printed, in the main hall. The speaker has asked me to say that her slides will be shared online after the session, so there's no need to photograph them."
],
[
"Organiser",
"Now, the programme says the workshop on classroom feedback takes place in Room Four at eleven. That is no longer correct. Room Four is being used for a catering delivery, so the workshop has moved to the library annexe, which is across the courtyard."
],
[
"Organiser",
"Sorry, I should be more precise about the time as well. It will still begin at eleven, but it will now finish at twelve fifteen rather than twelve, because the facilitator has asked for extra time for discussion."
],
[
"Organiser",
"Lunch is therefore served from twelve thirty instead of twelve fifteen. Vegetarian and gluten-free options are labelled, and anyone with a serious allergy should speak to a member of the catering team at the front desk."
],
[
"Organiser",
"Finally, a reminder about the evening event. Earlier this week, we told you that the dinner would be on the riverside terrace. Because of the forecast, we have decided to hold it indoors in the main hall, and you will not need to bring a coat."
],
[
"Organiser",
"If you have any questions, look for a volunteer wearing a green badge. Thank you, and enjoy the day."
]
],
"qs": [
{
"q": "Where will the feedback workshop now be held?",
"opts": [
"In Room Four, as the programme says.",
"In a smaller building across the courtyard.",
"In the main hall beside the keynote.",
"On the riverside terrace near the coffee stand."
],
"a": 1,
"kind": "detail",
"why": "Hội thảo chuyển sang khu nhà phụ của thư viện, nằm bên kia sân trong; đây là sửa đổi so với chương trình in.",
"wrong": {
"In Room Four, as the programme says.": "Người nói nói rõ thông tin trong chương trình in không còn đúng vì phòng số bốn dùng cho việc giao đồ ăn.",
"In the main hall beside the keynote.": "Sảnh chính là nơi diễn ra bài phát biểu mở đầu và sau này là bữa tối, không phải hội thảo phản hồi.",
"On the riverside terrace near the coffee stand.": "Sân thượng ven sông chỉ liên quan đến bữa tối, vốn cũng đã được chuyển vào trong nhà."
}
},
{
"q": "What is the new finishing time of the workshop?",
"opts": [
"A quarter past twelve",
"Twelve o'clock",
"Half past twelve",
"Eleven fifteen"
],
"a": 0,
"kind": "number",
"why": "Người nói sửa lại giờ kết thúc từ mười hai giờ thành mười hai giờ mười lăm vì người điều phối cần thêm thời gian thảo luận.",
"wrong": {
"Twelve o'clock": "Mười hai giờ là giờ kết thúc cũ trong chương trình in, đã được người nói sửa lại.",
"Half past twelve": "Mười hai giờ ba mươi là giờ bắt đầu bữa trưa mới chứ không phải giờ kết thúc hội thảo.",
"Eleven fifteen": "Mười một giờ là giờ bắt đầu hội thảo, không có mốc mười một giờ mười lăm nào trong thông báo."
}
},
{
"q": "What can be inferred about the evening dinner?",
"opts": [
"It was cancelled because of the catering delivery.",
"It will take place on the terrace as announced.",
"It was moved because of the weather forecast.",
"It will start earlier than first planned."
],
"a": 2,
"kind": "inference",
"why": "Người nói nói vì dự báo thời tiết nên bữa tối chuyển từ sân thượng ven sông vào sảnh chính, nên khách không cần mang áo khoác.",
"wrong": {
"It was cancelled because of the catering delivery.": "Việc giao đồ ăn chỉ liên quan đến phòng số bốn; bữa tối vẫn diễn ra nhưng ở trong sảnh.",
"It will take place on the terrace as announced.": "Địa điểm ngoài trời đã được thông báo trước đó nhưng nay đổi sang sảnh chính do dự báo thời tiết.",
"It will start earlier than first planned.": "Thông báo không đổi giờ bữa tối, chỉ nói đổi địa điểm vào trong nhà."
}
}
]
},
{
"id": "lc-137",
"lvl": "C1",
"kind": "talk",
"title": "How the circulatory system works",
"script": [
[
"Lecturer",
"Good morning. Today I want to look at the circulatory system, and I'd like to start with a common misconception: that the heart is simply a pump pushing blood round a loop. It is a pump, of course, but it is really two pumps working side by side, and that distinction explains almost everything else we'll cover."
],
[
"Lecturer",
"The right side of the heart receives blood that has already travelled round the body and sends it to the lungs, where it picks up oxygen. The left side then takes that oxygen-rich blood and drives it out to everything else, from the brain to the stomach."
],
[
"Lecturer",
"Vessels leaving the heart are called arteries. Their walls are thick and elastic, because they have to withstand high pressure with every beat. Veins, which carry blood back, have thinner walls, and what surprises most students is that they contain small valves to stop blood sliding backwards, particularly in the legs."
],
[
"Lecturer",
"Between the two lie the capillaries, which are so narrow that red cells pass through almost in single file. This is where oxygen and nutrients actually leave the blood and enter the tissues. Although arteries and veins get most of the attention, the capillaries are where the real exchange happens."
],
[
"Lecturer",
"Now, a point about the pulse. When you feel a pulse at your wrist, you are not feeling blood rushing past; you are feeling the artery wall stretching and recoiling as a pressure wave travels along it. That wave moves far faster than the blood itself."
],
[
"Lecturer",
"Blood pressure is the next idea. It is given as two numbers: the higher one is measured as the heart contracts, the lower one as it relaxes between beats. A reading that is slightly high on a single occasion is not alarming; doctors look for a consistent pattern over several visits."
],
[
"Lecturer",
"Finally, for next week, please read the chapter on the digestive system. We will see how the stomach and the intestines depend on a good blood supply after meals, which is why you may feel sluggish after a very large lunch."
],
[
"Lecturer",
"Before you go, one practical point. The lab session on measuring pulse rates will take place on Thursday rather than Wednesday, so please check the timetable."
]
],
"qs": [
{
"q": "What point does the lecturer make about the heart at the start?",
"opts": [
"It consists of two pumps operating together",
"It is a single pump sending blood round a loop",
"It sends blood only to the lungs and stomach",
"It matters less than the vessels around it"
],
"a": 0,
"kind": "gist",
"why": "Người giảng mở đầu bằng cách bác bỏ quan niệm sai về một bơm duy nhất; câu 'really two pumps working side by side' cho thấy tim gồm hai bơm hoạt động song song.",
"wrong": {
"It is a single pump sending blood round a loop": "Đây chính là quan niệm sai mà người giảng nêu ra rồi bác bỏ khi nói tim thực chất là hai bơm cạnh nhau.",
"It sends blood only to the lungs and stomach": "Bên phải gửi máu tới phổi, còn bên trái đẩy máu đi khắp cơ thể, từ não đến dạ dày, nên không chỉ có hai nơi này.",
"It matters less than the vessels around it": "Bài giảng không so sánh tầm quan trọng; người giảng còn nói sự phân biệt hai bơm giải thích hầu hết nội dung còn lại."
}
},
{
"q": "What does the lecturer suggest about the pulse felt at the wrist?",
"opts": [
"It shows how fast the blood is travelling",
"It is caused by valves closing inside the veins",
"It is strongest in people with high blood pressure",
"It is the artery wall responding to a pressure wave"
],
"a": 3,
"kind": "inference",
"why": "Người giảng nói ta không cảm nhận máu chảy qua mà cảm nhận thành động mạch giãn ra và co lại khi sóng áp lực đi qua, nên mạch phản ánh phản ứng của thành động mạch.",
"wrong": {
"It shows how fast the blood is travelling": "Người giảng nói rõ sóng áp lực di chuyển nhanh hơn nhiều so với bản thân dòng máu, nên mạch không cho biết tốc độ máu.",
"It is caused by valves closing inside the veins": "Van được nhắc đến ở tĩnh mạch để ngăn máu chảy ngược, còn mạch ở cổ tay liên quan đến thành động mạch, không phải van.",
"It is strongest in people with high blood pressure": "Bài giảng không hề so sánh mạch của người huyết áp cao; huyết áp chỉ được nói riêng ở phần sau."
}
},
{
"q": "What are students asked to read before the next lecture?",
"opts": [
"A chapter about the heart's two sides",
"A chapter about how food is processed",
"A chapter about measuring pulse rates",
"A chapter about how lungs absorb oxygen"
],
"a": 1,
"kind": "next-step",
"why": "Cuối bài người giảng yêu cầu đọc chương về hệ tiêu hóa cho tuần sau, tức chương nói về cách thức ăn được xử lý, gồm dạ dày và ruột.",
"wrong": {
"A chapter about the heart's two sides": "Phần về hai bên của tim đã được giảng trong bài hôm nay, không phải bài đọc cho tuần sau.",
"A chapter about measuring pulse rates": "Đo nhịp mạch là buổi thực hành dời sang thứ Năm, người giảng không giao chương đọc về chủ đề này.",
"A chapter about how lungs absorb oxygen": "Phổi chỉ được nhắc khi nói về máu nhận oxy, và không có chương riêng nào về phổi được giao đọc."
}
}
]
},
{
"id": "lc-138",
"lvl": "C1",
"kind": "interview",
"title": "Teenagers and school start times",
"script": [
[
"Interviewer",
"Dr Marlow, you've spent three years studying what happens when secondary schools start later. What prompted the research?"
],
[
"Dr Marlow",
"Mainly a puzzle, really. Teachers kept telling us that students were drowsy in first lessons, and the usual explanation was that they stayed up too late on their phones. We wanted to test whether biology might be the larger factor."
],
[
"Interviewer",
"And what did you find?"
],
[
"Dr Marlow",
"Adolescents' body clocks shift later during puberty, so asking a sixteen-year-old to concentrate at eight o'clock is a bit like asking an adult to concentrate at five in the morning. In the six schools that moved their start from eight to a quarter past nine, attendance improved by roughly four percent, which is modest but consistent."
],
[
"Interviewer",
"Four percent doesn't sound dramatic."
],
[
"Dr Marlow",
"No, and I'd caution against overselling it. What surprised us was that exam results barely changed in the first year. The benefit showed up elsewhere, in fewer reports of low mood and fewer late arrivals."
],
[
"Interviewer",
"So should every school simply push back its day?"
],
[
"Dr Marlow",
"I'd stop short of that. Later starts mean later finishes, and that collides with sports, part-time jobs and, for some families, childcare. One school we studied had to cut its after-school clubs, and parents were far from happy."
],
[
"Interviewer",
"What would you advise a head teacher who is tempted?"
],
[
"Dr Marlow",
"Pilot it for a term before committing, and ask the students themselves. We'll be publishing a short guide for schools in the spring, and the full data should be available online by the end of this month."
]
],
"qs": [
{
"q": "Why did the researchers begin the study?",
"opts": [
"To find out whether phones were damaging exam results",
"To test whether drowsiness had a biological cause",
"To measure how childcare affects late arrivals",
"To compare attendance in schools abroad"
],
"a": 1,
"kind": "detail",
"why": "Dr Marlow nói giáo viên giải thích sự buồn ngủ bằng việc thức khuya vì điện thoại, còn nhóm muốn kiểm tra xem yếu tố sinh học có lớn hơn không.",
"wrong": {
"To find out whether phones were damaging exam results": "Điện thoại chỉ là lời giải thích thông thường của giáo viên; nhóm nghiên cứu muốn kiểm tra giả thuyết sinh học, không phải tác hại lên kết quả thi.",
"To measure how childcare affects late arrivals": "Việc trông trẻ chỉ được nhắc như một khó khăn của giờ tan học muộn, không phải lý do khởi đầu nghiên cứu.",
"To compare attendance in schools abroad": "Bài chỉ nói đến sáu trường đã dời giờ vào học, không hề so sánh với các trường ở nước ngoài."
}
},
{
"q": "How does Dr Marlow feel about the attendance improvement?",
"opts": [
"She sees it as a dramatic breakthrough",
"She thinks it proves exam results will rise",
"She finds it encouraging but modest",
"She regards it as too small to be useful"
],
"a": 2,
"kind": "inference",
"why": "Bà gọi mức tăng khoảng bốn phần trăm là 'modest but consistent' và cảnh báo đừng thổi phồng, nghĩa là bà thấy khả quan nhưng khiêm tốn.",
"wrong": {
"She sees it as a dramatic breakthrough": "Bà đồng ý với người phỏng vấn rằng con số không ấn tượng và nói mình sẽ cảnh báo chống việc thổi phồng kết quả.",
"She thinks it proves exam results will rise": "Bà nói điểm thi hầu như không đổi trong năm đầu, nên không thể nói nó chứng minh điểm sẽ tăng.",
"She regards it as too small to be useful": "Bà gọi nó là nhỏ nhưng đều đặn và nêu thêm các lợi ích khác như ít buồn bã hơn, nên không coi là vô dụng."
}
},
{
"q": "When will the full data be published online?",
"opts": [
"Before the month is over",
"In the spring",
"After a one-term pilot",
"At the end of the school year"
],
"a": 0,
"kind": "number",
"why": "Cuối cuộc phỏng vấn bà nói dữ liệu đầy đủ sẽ có trực tuyến vào cuối tháng này, tức trước khi tháng kết thúc.",
"wrong": {
"In the spring": "Mùa xuân là thời điểm xuất bản bản hướng dẫn ngắn cho các trường, không phải dữ liệu đầy đủ.",
"After a one-term pilot": "Thử nghiệm một học kỳ là lời khuyên dành cho hiệu trưởng, không liên quan đến lịch công bố dữ liệu.",
"At the end of the school year": "Không có chỗ nào nhắc đến cuối năm học; bà chỉ nói dữ liệu sẽ có vào cuối tháng này."
}
}
]
},
{
"id": "lc-139",
"lvl": "C1",
"kind": "conversation",
"title": "Negotiating a report deadline",
"script": [
[
"Priya",
"Tom, have you got a minute? It's about the client report. I know Friday was the plan, but I'm not sure I can hand over the final figures before Monday."
],
[
"Tom",
"Monday is tricky, Priya. The client is expecting it first thing Tuesday, and I need a full day to check and format everything."
],
[
"Priya",
"I understand. The problem is that the regional sales data arrived two days late, and I'd rather not send you numbers I haven't properly verified."
],
[
"Tom",
"Fair enough. Could you send me the sections that are finished so I can start on the layout in the meantime?"
],
[
"Priya",
"That's possible. The summary and the first two chapters are done, so I could email those by Thursday afternoon. The sales analysis would follow on Monday morning."
],
[
"Tom",
"Monday morning works if it's before ten. After that I have the budget review, and I wouldn't be able to touch the report until the afternoon."
],
[
"Priya",
"Ten might be ambitious. How about noon, and I ask Dana whether she can help check the formatting?"
],
[
"Tom",
"Dana's on leave until Wednesday, so that wouldn't help. Look, what if we tell the client Wednesday morning instead of Tuesday? I'm fairly sure they wouldn't object, as long as we warn them today."
],
[
"Priya",
"I'd feel more comfortable with that. Shall I draft a short email, or would you rather phone them?"
],
[
"Tom",
"I'll phone. Clients tend to take a delay better when they hear it from a person. Just send me the key points so I don't forget anything."
],
[
"Priya",
"Will do. Thanks for being flexible, Tom."
],
[
"Tom",
"No problem. But let's not make a habit of this."
]
],
"qs": [
{
"q": "What are the speakers mainly doing?",
"opts": [
"Deciding which parts of a report to remove",
"Arguing about who caused a delay",
"Agreeing a revised schedule for a report",
"Planning the agenda for a budget review"
],
"a": 2,
"kind": "gist",
"why": "Hai đồng nghiệp bàn cách xử lý việc số liệu đến muộn và thống nhất lịch mới: gửi từng phần trước và báo khách hàng dời sang sáng thứ Tư.",
"wrong": {
"Deciding which parts of a report to remove": "Không phần nào bị loại bỏ; Priya chỉ đề nghị gửi trước các phần đã xong và gửi phần phân tích bán hàng sau.",
"Arguing about who caused a delay": "Cuộc trò chuyện hợp tác và lịch sự; Tom nói 'Fair enough' và cảm ơn sự linh hoạt, không ai đổ lỗi cho ai.",
"Planning the agenda for a budget review": "Buổi họp ngân sách chỉ được Tom nhắc để giải thích vì sao anh bận sau mười giờ sáng thứ Hai."
}
},
{
"q": "Why does Tom say Dana cannot help with the formatting?",
"opts": [
"She is working on the budget review",
"She has not seen the regional data",
"She is unfamiliar with the layout",
"She is away until midweek"
],
"a": 3,
"kind": "detail",
"why": "Tom nói Dana nghỉ phép đến thứ Tư, tức đang vắng mặt đến giữa tuần nên không thể giúp kiểm tra định dạng vào sáng thứ Hai.",
"wrong": {
"She is working on the budget review": "Buổi họp ngân sách là việc của Tom vào sáng thứ Hai, không ai nói Dana tham gia việc đó.",
"She has not seen the regional data": "Không có chi tiết nào về việc Dana đã xem dữ liệu hay chưa; lý do duy nhất Tom đưa ra là cô đang nghỉ phép.",
"She is unfamiliar with the layout": "Priya đề xuất nhờ Dana vì cô có thể kiểm tra định dạng; Tom không nghi ngờ khả năng mà chỉ nói cô vắng mặt."
}
},
{
"q": "What will Tom do about the client?",
"opts": [
"Write a short email explaining the delay",
"Speak to them by phone about the change",
"Ask them to accept the Tuesday date",
"Send them the finished chapters today"
],
"a": 1,
"kind": "next-step",
"why": "Tom từ chối soạn email và nói sẽ gọi điện vì khách hàng dễ chấp nhận chậm trễ hơn khi nghe trực tiếp từ một người.",
"wrong": {
"Write a short email explaining the delay": "Đó là phương án Priya đưa ra, nhưng Tom chọn gọi điện thay vì email.",
"Ask them to accept the Tuesday date": "Ngày thứ Ba là thời hạn khách mong đợi ban đầu; kế hoạch mới là báo họ rằng sẽ giao vào sáng thứ Tư.",
"Send them the finished chapters today": "Các chương đã xong sẽ được Priya gửi cho Tom vào chiều thứ Năm để làm bố cục, không gửi cho khách hàng."
}
}
]
},
{
"id": "lc-140",
"lvl": "C1",
"kind": "announcement",
"title": "A flu clinic update",
"script": [
[
"Announcer",
"This is a public health notice for residents of the Eastbrook area, brought to you on behalf of the local health partnership."
],
[
"Announcer",
"From next week, the annual flu vaccination programme will be delivered differently. Instead of booking through your doctor's surgery, adults over sixty-five and those with long-term conditions such as asthma or heart disease will be invited to attend one of three community clinics."
],
[
"Announcer",
"The main clinic will run at the Greenfield Library from Monday the fourteenth, between nine and four each day."
],
[
"Announcer",
"Sorry, I need to correct that. The main clinic will be held at the Town Hall, not the library, because the library's lift is out of order and many patients struggle with the stairs. The dates and hours are unchanged."
],
[
"Announcer",
"Please bring your invitation letter if you have received one, and wear a short-sleeved top so the nurse can reach your upper arm easily."
],
[
"Announcer",
"If you have had a severe reaction to a vaccine in the past, or if you have a fever on the day, you should postpone and call the helpline instead."
],
[
"Announcer",
"Anyone who cannot travel will not be forgotten. Home visits can be arranged through the helpline, although you should expect to wait up to two weeks, as the nursing team is stretched at present."
],
[
"Announcer",
"The helpline number is on your letter, and the lines are open on weekdays until six in the evening. We would ask you not to call just to check the clinic address, since the information is repeated on our website and in the local paper."
],
[
"Announcer",
"Finally, a reminder that the vaccine takes around ten to fourteen days to give full protection, so the sooner you attend, the better prepared you will be before the cold weather arrives. Thank you for listening."
]
],
"qs": [
{
"q": "What is the main purpose of the announcement?",
"opts": [
"To explain a new way of giving flu vaccinations",
"To announce a new library opening in Eastbrook",
"To warn residents about a shortage of nurses",
"To ask people to book through their surgery"
],
"a": 0,
"kind": "gist",
"why": "Thông báo nói chương trình tiêm cúm năm nay sẽ được thực hiện khác đi, với các phòng khám cộng đồng thay vì đặt lịch qua bác sĩ gia đình.",
"wrong": {
"To announce a new library opening in Eastbrook": "Thư viện chỉ xuất hiện trong phần đính chính địa điểm, và nó bị loại vì thang máy hỏng, không phải một cơ sở mới mở.",
"To warn residents about a shortage of nurses": "Đội y tá bị quá tải chỉ được nhắc ngắn khi nói về thời gian chờ thăm khám tại nhà, không phải mục đích chính.",
"To ask people to book through their surgery": "Bản tin nói ngược lại: thay vì đặt lịch qua phòng khám bác sĩ, người dân sẽ được mời đến các điểm tiêm cộng đồng."
}
},
{
"q": "Why does the speaker change the location of the main clinic?",
"opts": [
"The library has closed permanently",
"The Town Hall has longer opening hours",
"A piece of equipment at the library is not working",
"Too many patients live near the Town Hall"
],
"a": 2,
"kind": "detail",
"why": "Người nói đính chính rằng phòng khám chính ở Town Hall vì thang máy của thư viện đang hỏng và nhiều bệnh nhân khó leo cầu thang.",
"wrong": {
"The library has closed permanently": "Chỉ có thang máy đang hỏng; không có thông tin nào nói thư viện đóng cửa vĩnh viễn.",
"The Town Hall has longer opening hours": "Người nói nhấn mạnh ngày và giờ không thay đổi, nên giờ mở cửa không phải lý do đổi địa điểm.",
"Too many patients live near the Town Hall": "Lý do được nêu là khả năng tiếp cận do thang máy hỏng, không có lời nào về nơi cư trú của bệnh nhân."
}
},
{
"q": "How long might someone wait for a home visit?",
"opts": [
"Up to a week",
"Around ten days",
"About a month",
"As long as a fortnight"
],
"a": 3,
"kind": "number",
"why": "Người nói cho biết thời gian chờ thăm khám tại nhà có thể lên tới hai tuần, tương đương một fortnight.",
"wrong": {
"Up to a week": "Thời gian chờ được nêu là tối đa hai tuần, dài hơn một tuần.",
"Around ten days": "Mười đến mười bốn ngày là thời gian vắc-xin cần để bảo vệ đầy đủ, không phải thời gian chờ thăm khám tại nhà.",
"About a month": "Bản tin chỉ nói tối đa hai tuần vì đội y tá quá tải, không nhắc đến một tháng."
}
}
]
}
]);
