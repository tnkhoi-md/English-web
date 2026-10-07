/* Luyện nói theo tình huống: 29 mẫu, từ A1 đến C1 (có phần y khoa). Nạp trước app.js. */
const SPEAK_TPL = [
{
"id": "sp-greet",
"title": "Chào hỏi và tự giới thiệu",
"en": "Greeting people and introducing yourself",
"lvl": "A1",
"track": "gen",
"register": "informal",
"when": "Bạn gặp một bạn học hoặc người mới và cần chào, nói tên, quê quán, nghề nghiệp. Mục tiêu là mở đầu cuộc trò chuyện thân thiện, ngắn gọn.",
"parts": [
{
"name": "Greeting",
"vi": "Chào người đối diện và hỏi hoặc nói tên.",
"ex": "Hi! I'm Anna. What's your name?"
},
{
"name": "Introducing yourself",
"vi": "Nói tên bạn và câu xã giao khi gặp lần đầu.",
"ex": "I'm Minh. Nice to meet you."
},
{
"name": "Country and job",
"vi": "Nói bạn đến từ đâu và làm gì hoặc học gì.",
"ex": "I'm from Vietnam. I'm a student."
},
{
"name": "How are you",
"vi": "Hỏi thăm và trả lời ngắn, rồi hỏi lại.",
"ex": "How are you today? I'm fine, thank you. And you?"
}
],
"phrases": [
{
"en": "What's your name?",
"vi": "Bạn tên là gì?",
"use": "Greeting"
},
{
"en": "Nice to meet you",
"vi": "Rất vui được gặp bạn",
"use": "Introducing yourself"
},
{
"en": "Where are you from?",
"vi": "Bạn đến từ đâu?",
"use": "Country and job"
},
{
"en": "I'm from Vietnam",
"vi": "Tôi đến từ Việt Nam",
"use": "Country and job"
},
{
"en": "What do you do?",
"vi": "Bạn làm nghề gì?",
"use": "Country and job"
},
{
"en": "I'm a student",
"vi": "Tôi là sinh viên",
"use": "Country and job"
},
{
"en": "How are you today?",
"vi": "Hôm nay bạn thế nào?",
"use": "How are you"
},
{
"en": "I'm fine, thank you",
"vi": "Tôi khỏe, cảm ơn",
"use": "How are you"
},
{
"en": "And you?",
"vi": "Còn bạn thì sao?",
"use": "How are you"
}
],
"model": {
"type": "dialogue",
"roles": [
"Anna (classmate)",
"You"
],
"lines": [
{
"who": 0,
"en": "Hi! I'm Anna. What's your name?",
"vi": "Chào! Mình là Anna. Bạn tên gì?",
"hint": ""
},
{
"who": 1,
"en": "Hi, Anna. I'm Minh. Nice to meet you.",
"vi": "Chào Anna. Mình là Minh. Rất vui được gặp bạn.",
"hint": "Chào lại, nói tên bạn và nói rất vui được gặp. [Hi / I'm / nice to meet you]"
},
{
"who": 0,
"en": "Nice to meet you too. Where are you from?",
"vi": "Mình cũng rất vui. Bạn đến từ đâu?",
"hint": ""
},
{
"who": 1,
"en": "I'm from Vietnam. And you?",
"vi": "Mình đến từ Việt Nam. Còn bạn?",
"hint": "Nói bạn đến từ Việt Nam rồi hỏi lại. [I'm from / and you]"
},
{
"who": 0,
"en": "I'm from Canada. What do you do?",
"vi": "Mình đến từ Canada. Bạn làm gì?",
"hint": ""
},
{
"who": 1,
"en": "I'm a student. I study nursing.",
"vi": "Mình là sinh viên. Mình học điều dưỡng.",
"hint": "Nói bạn là sinh viên và học ngành gì. [I'm a student / I study]"
},
{
"who": 0,
"en": "Cool! How are you today?",
"vi": "Hay quá! Hôm nay bạn thế nào?",
"hint": ""
},
{
"who": 1,
"en": "I'm fine, thank you. And you?",
"vi": "Mình khỏe, cảm ơn. Còn bạn?",
"hint": "Trả lời là bạn khỏe, cảm ơn, rồi hỏi lại. [I'm fine / thank you / and you]"
},
{
"who": 0,
"en": "I'm good, thanks. Let's sit together.",
"vi": "Mình ổn, cảm ơn. Mình ngồi cùng nhau nhé.",
"hint": ""
},
{
"who": 1,
"en": "Yes, great idea. Thank you!",
"vi": "Ừ, ý hay đấy. Cảm ơn bạn!",
"hint": "Đồng ý và cảm ơn. [yes / great idea / thank you]"
}
],
"notes": [
{
"line": 1,
"vi": "“Nice to meet you” là câu chuẩn khi gặp lần đầu. Chỉ dùng lần đầu, lần sau nói “Good to see you”."
},
{
"line": 3,
"vi": "Hỏi lại bằng “And you?” giúp cuộc trò chuyện không bị dừng, rất tự nhiên với người mới học."
},
{
"line": 5,
"vi": "Với nghề nghiệp dùng “I'm a ...” có mạo từ “a”: “I'm a student”, không nói “I'm student”."
},
{
"line": 7,
"vi": "“I'm fine, thank you” là câu trả lời an toàn; người bản xứ cũng hay nói “I'm good”."
}
]
},
"pron": [
{
"en": "Nice to meet you",
"tip": "Nối “to” và “meet”: /naɪs tə miːt juː/. Đọc rõ âm cuối /s/ của “nice” và /t/ của “meet”."
},
{
"en": "Where are you from?",
"tip": "Giọng đi xuống ở cuối câu hỏi Wh-. “from” đọc yếu /frəm/."
},
{
"en": "And you?",
"tip": "Giọng đi lên ở “you” vì là câu hỏi ngắn. “And” đọc nhẹ /ən/."
},
{
"en": "I'm a student",
"tip": "Đọc rõ âm /t/ ở cuối “student” và /s/ đầu từ, đừng bỏ âm cuối."
}
],
"mistakes": [
{
"x": "I am Minh, nice meet you.",
"v": "I'm Minh. Nice to meet you.",
"why": "Thiếu “to” trước “meet”; nói “I'm” cho tự nhiên hơn “I am”."
},
{
"x": "I from Vietnam.",
"v": "I'm from Vietnam.",
"why": "Tiếng Anh cần động từ “be” (am) trước “from”; tiếng Việt thì không."
},
{
"x": "I am student.",
"v": "I'm a student.",
"why": "Danh từ nghề nghiệp số ít cần mạo từ “a”."
},
{
"x": "How you are?",
"v": "How are you?",
"why": "Câu hỏi đảo động từ “are” lên trước chủ ngữ “you”."
}
],
"task": {
"scenario": "You are at a language course. A new classmate sits next to you. Introduce yourself and ask them about their name, country and job or study.",
"scenario_vi": "Bạn đang ở một lớp học ngôn ngữ. Một bạn mới ngồi cạnh. Hãy tự giới thiệu và hỏi bạn ấy về tên, quê quán, công việc hoặc ngành học.",
"points": [
"Say hello and give your name",
"Say where you are from",
"Say what you do or study",
"Ask your classmate two questions",
"Ask how they are and say goodbye"
],
"seconds": [
30,
60
],
"self": [
"Mình đã chào và nói tên rõ ràng",
"Mình đã nói mình đến từ đâu bằng “I'm from ...”",
"Mình đã dùng “a” trước nghề nghiệp",
"Mình đã hỏi lại bạn ít nhất hai câu",
"Mình đã phát âm rõ âm cuối như /t/ và /s/"
]
}
},
{
"id": "sp-order",
"title": "Gọi đồ ăn và đồ uống",
"en": "Ordering food and drink in a cafe",
"lvl": "A1",
"track": "gen",
"register": "neutral",
"when": "Bạn vào quán cà phê hoặc nhà hàng và cần xin thực đơn, gọi món, hỏi giá và trả tiền. Mục tiêu là gọi món lịch sự bằng câu ngắn.",
"parts": [
{
"name": "Getting a table",
"vi": "Chào nhân viên và xin thực đơn.",
"ex": "Table for one? Can I see the menu, please?"
},
{
"name": "Ordering",
"vi": "Nói món bạn muốn với “I'd like ... please”.",
"ex": "I'd like a tea, please. And a cheese sandwich."
},
{
"name": "Asking the price",
"vi": "Hỏi giá tiền.",
"ex": "How much is it?"
},
{
"name": "Paying",
"vi": "Đưa tiền hoặc hỏi trả bằng thẻ, rồi cảm ơn.",
"ex": "Here you are. Can I pay by card?"
}
],
"phrases": [
{
"en": "Table for one?",
"vi": "Bàn cho một người phải không?",
"use": "Getting a table"
},
{
"en": "Can I see the menu?",
"vi": "Cho tôi xem thực đơn được không?",
"use": "Getting a table"
},
{
"en": "What would you like?",
"vi": "Bạn muốn dùng gì?",
"use": "Ordering"
},
{
"en": "I'd like a tea, please",
"vi": "Cho tôi một ly trà",
"use": "Ordering"
},
{
"en": "Anything else?",
"vi": "Bạn dùng thêm gì không?",
"use": "Ordering"
},
{
"en": "That's all",
"vi": "Chỉ vậy thôi",
"use": "Ordering"
},
{
"en": "How much is it?",
"vi": "Cái này bao nhiêu tiền?",
"use": "Asking the price"
},
{
"en": "Here you are",
"vi": "Của bạn đây",
"use": "Paying"
},
{
"en": "Can I pay by card?",
"vi": "Tôi trả bằng thẻ được không?",
"use": "Paying"
}
],
"model": {
"type": "dialogue",
"roles": [
"Waiter",
"Customer"
],
"lines": [
{
"who": 0,
"en": "Good morning! Table for one?",
"vi": "Chào buổi sáng! Bàn cho một người ạ?",
"hint": ""
},
{
"who": 1,
"en": "Yes, please. Can I see the menu?",
"vi": "Vâng. Cho tôi xem thực đơn được không?",
"hint": "Nói đúng và xin xem thực đơn. [yes please / see / menu]"
},
{
"who": 0,
"en": "Of course. Here you are. What would you like?",
"vi": "Tất nhiên. Của bạn đây. Bạn muốn dùng gì?",
"hint": ""
},
{
"who": 1,
"en": "A tea and a cheese sandwich, please.",
"vi": "Cho tôi một trà và một bánh mì kẹp phô mai.",
"hint": "Gọi một thức uống và một món ăn. [tea / cheese sandwich / please]"
},
{
"who": 0,
"en": "Sure. Anything else?",
"vi": "Vâng. Bạn dùng thêm gì không?",
"hint": ""
},
{
"who": 1,
"en": "No, thank you. That's all.",
"vi": "Không, cảm ơn. Chỉ vậy thôi.",
"hint": "Nói không cần thêm gì nữa. [no thank you / that's all]"
},
{
"who": 0,
"en": "Here is your food. Enjoy!",
"vi": "Đồ ăn của bạn đây. Chúc ngon miệng!",
"hint": ""
},
{
"who": 1,
"en": "Thank you. How much is it?",
"vi": "Cảm ơn. Hết bao nhiêu tiền ạ?",
"hint": "Cảm ơn và hỏi giá. [thank you / how much]"
},
{
"who": 0,
"en": "That's seven euros fifty, please.",
"vi": "Bảy euro rưỡi ạ.",
"hint": ""
},
{
"who": 1,
"en": "Here you are. Can I pay by card?",
"vi": "Của bạn đây. Tôi trả bằng thẻ được không?",
"hint": "Đưa tiền và hỏi có trả thẻ được không. [here you are / pay / card]"
},
{
"who": 0,
"en": "Yes, of course. Thank you!",
"vi": "Vâng, tất nhiên. Cảm ơn bạn!",
"hint": ""
},
{
"who": 1,
"en": "Thank you. Goodbye!",
"vi": "Cảm ơn. Tạm biệt!",
"hint": "Cảm ơn và chào tạm biệt. [thank you / goodbye]"
}
],
"notes": [
{
"line": 1,
"vi": "“Can I ... ?” là cách xin phép lịch sự, ngắn gọn, rất hợp với người mới học."
},
{
"line": 3,
"vi": "Luôn thêm “please” khi gọi món. Dùng “a” trước tên món: “a tea”, “a sandwich”."
},
{
"line": 5,
"vi": "“That's all” báo cho nhân viên biết bạn đã gọi xong."
},
{
"line": 9,
"vi": "“Here you are” dùng khi đưa thứ gì cho người khác, như tiền hoặc thẻ."
}
]
},
"pron": [
{
"en": "Can I see the menu?",
"tip": "“see” đọc /siː/ kéo dài. Giọng đi lên ở cuối câu hỏi Yes/No."
},
{
"en": "A tea and a cheese sandwich",
"tip": "“and” đọc yếu /ən/. Đọc rõ âm cuối /s/ trong “cheese” và /tʃ/ trong “sandwich”."
},
{
"en": "How much is it?",
"tip": "Nhấn vào “much”. Nối “is it” thành /ɪzɪt/."
},
{
"en": "Can I pay by card?",
"tip": "“Can” đọc yếu /kən/. Giọng đi lên ở “card”."
}
],
"mistakes": [
{
"x": "I want coffee.",
"v": "I'd like a coffee, please.",
"why": "“I want” nghe thô trong quán; dùng “I'd like” và thêm “please”, “a”."
},
{
"x": "How much it is?",
"v": "How much is it?",
"why": "Câu hỏi đảo “is” lên trước “it”."
},
{
"x": "I pay by card can?",
"v": "Can I pay by card?",
"why": "Trật tự từ: “Can” đứng đầu câu hỏi, không đặt cuối như tiếng Việt “được không”."
},
{
"x": "Give me the menu.",
"v": "Can I see the menu, please?",
"why": "“Give me” là câu mệnh lệnh, nghe thiếu lịch sự."
}
],
"task": {
"scenario": "You are in a small cafe with a friend. You want a drink and a cake. Order for yourself, ask about the price and pay.",
"scenario_vi": "Bạn ở một quán cà phê nhỏ cùng bạn. Bạn muốn một đồ uống và một bánh ngọt. Hãy gọi món cho mình, hỏi giá và trả tiền.",
"points": [
"Greet the waiter and ask for the menu",
"Order a drink and a cake",
"Say that is all",
"Ask how much it is",
"Pay and say thank you"
],
"seconds": [
30,
60
],
"self": [
"Mình đã xin thực đơn bằng “Can I see the menu?”",
"Mình đã gọi món với “I'd like ... please”",
"Mình đã hỏi giá bằng “How much is it?”",
"Mình đã nói “Here you are” khi trả tiền",
"Mình đã nói cảm ơn và chào lịch sự"
]
}
},
{
"id": "sp-directions",
"title": "Hỏi và chỉ đường",
"en": "Asking for and giving directions in a town",
"lvl": "A1",
"track": "gen",
"register": "neutral",
"when": "Bạn đang ở trong thành phố và cần hỏi đường tới một nơi, hoặc chỉ đường cho người khác. Mục tiêu là hỏi rõ và chỉ đường bằng câu ngắn.",
"parts": [
{
"name": "Getting attention",
"vi": "Dùng “Excuse me” để thu hút sự chú ý một cách lịch sự.",
"ex": "Excuse me. Where is the bank?"
},
{
"name": "Giving directions",
"vi": "Chỉ đường bằng câu mệnh lệnh ngắn: đi thẳng, rẽ trái, rẽ phải.",
"ex": "Go straight. Turn left at the lights."
},
{
"name": "Describing the place",
"vi": "Nói nơi đó gần hay xa và ở cạnh đâu.",
"ex": "It's near. It's next to the library."
},
{
"name": "Thanking",
"vi": "Cảm ơn và đáp lại lời cảm ơn.",
"ex": "Thank you very much! You're welcome."
}
],
"phrases": [
{
"en": "Excuse me",
"vi": "Xin lỗi (để hỏi người lạ)",
"use": "Getting attention"
},
{
"en": "Where is the bank?",
"vi": "Ngân hàng ở đâu?",
"use": "Getting attention"
},
{
"en": "Go straight",
"vi": "Đi thẳng",
"use": "Giving directions"
},
{
"en": "Turn left at the lights",
"vi": "Rẽ trái ở đèn giao thông",
"use": "Giving directions"
},
{
"en": "Turn right",
"vi": "Rẽ phải",
"use": "Giving directions"
},
{
"en": "Is it far?",
"vi": "Chỗ đó có xa không?",
"use": "Describing the place"
},
{
"en": "It's near",
"vi": "Nó ở gần đây",
"use": "Describing the place"
},
{
"en": "It's next to the library",
"vi": "Nó ở cạnh thư viện",
"use": "Describing the place"
},
{
"en": "You're welcome",
"vi": "Không có gì",
"use": "Thanking"
}
],
"model": {
"type": "dialogue",
"roles": [
"Local person",
"You"
],
"lines": [
{
"who": 1,
"en": "Excuse me. Where is the bank?",
"vi": "Xin lỗi. Ngân hàng ở đâu ạ?",
"hint": "Gây chú ý rồi hỏi ngân hàng ở đâu. [excuse me / where / bank]"
},
{
"who": 0,
"en": "Go straight. Turn left at the lights.",
"vi": "Đi thẳng. Rẽ trái ở đèn giao thông.",
"hint": ""
},
{
"who": 1,
"en": "Turn left at the lights. Is it far?",
"vi": "Rẽ trái ở đèn. Chỗ đó có xa không?",
"hint": "Nhắc lại hướng đi rồi hỏi có xa không. [turn left / lights / far]"
},
{
"who": 0,
"en": "No, it's near. It's next to the library.",
"vi": "Không, gần thôi. Nó cạnh thư viện.",
"hint": ""
},
{
"who": 1,
"en": "Thank you very much!",
"vi": "Cảm ơn bạn rất nhiều!",
"hint": "Cảm ơn thật nhiệt tình. [thank you / very much]"
},
{
"who": 0,
"en": "No problem. Can you help me too? Where's the park?",
"vi": "Không có gì. Bạn giúp mình nữa nhé? Công viên ở đâu?",
"hint": ""
},
{
"who": 1,
"en": "Go straight. Turn right at the school.",
"vi": "Đi thẳng. Rẽ phải ở trường học.",
"hint": "Chỉ đường tới công viên: đi thẳng, rẽ phải ở trường. [straight / right / school]"
},
{
"who": 0,
"en": "Turn right at the school. Is it near?",
"vi": "Rẽ phải ở trường. Có gần không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, it's near. It's next to the river.",
"vi": "Có, gần thôi. Nó ở cạnh con sông.",
"hint": "Nói là gần và ở cạnh con sông. [yes / near / next to / river]"
},
{
"who": 0,
"en": "Great, thank you!",
"vi": "Tuyệt, cảm ơn bạn!",
"hint": ""
},
{
"who": 1,
"en": "You're welcome. Have a nice day!",
"vi": "Không có gì. Chúc bạn một ngày tốt lành!",
"hint": "Đáp lại lời cảm ơn và chúc một ngày tốt lành. [you're welcome / nice day]"
}
],
"notes": [
{
"line": 0,
"vi": "“Excuse me” dùng trước khi hỏi người lạ. Đừng bắt đầu ngay bằng “Where...”."
},
{
"line": 1,
"vi": "Chỉ đường dùng động từ nguyên mẫu (câu mệnh lệnh): “Go straight”, “Turn left”."
},
{
"line": 3,
"vi": "“next to” nghĩa là “bên cạnh”. Các từ cùng nhóm: “near”, “opposite”, “behind”."
},
{
"line": 6,
"vi": "Nhắc lại hướng đi để kiểm tra mình hiểu đúng, hoặc để người kia xác nhận."
}
]
},
"pron": [
{
"en": "Excuse me",
"tip": "Nhấn âm 2: /ɪkˈskjuːz miː/. Đọc rõ âm cuối /z/."
},
{
"en": "Turn left at the lights",
"tip": "Nối “left at” thành /leftət/. Đọc rõ /t/ trong “left”, và /s/ cuối “lights”."
},
{
"en": "Is it far?",
"tip": "Giọng đi lên ở cuối câu hỏi Yes/No. Đọc rõ âm /f/ ở đầu “far”."
},
{
"en": "It's next to the library",
"tip": "“to” đọc yếu /tə/. Nhấn “next” và “library” (/ˈlaɪbrəri/)."
}
],
"mistakes": [
{
"x": "Where the bank is?",
"v": "Where is the bank?",
"why": "Câu hỏi trực tiếp phải đảo “is” lên trước “the bank”."
},
{
"x": "You go straight and turn left on the lights.",
"v": "Go straight and turn left at the lights.",
"why": "Dùng “at” cho đèn giao thông; câu mệnh lệnh ngắn gọn hơn."
},
{
"x": "It near the library.",
"v": "It's near the library.",
"why": "Thiếu động từ “be”: “It's” (It is)."
},
{
"x": "Turn to the left.",
"v": "Turn left.",
"why": "Người bản xứ nói “Turn left” trực tiếp, không cần “to the”."
}
],
"task": {
"scenario": "You are in a new town. A tourist asks you how to get to the train station from the town square. First ask a passer-by for a cafe, then give directions to the tourist.",
"scenario_vi": "Bạn ở một thị trấn mới. Một du khách hỏi đường từ quảng trường tới ga tàu. Trước hết bạn hỏi người qua đường chỗ tìm quán cà phê, rồi chỉ đường cho du khách.",
"points": [
"Say excuse me and ask where the cafe is",
"Repeat the directions you hear",
"Ask if it is far",
"Tell the tourist to go straight and turn left or right",
"Say where the station is, for example next to the bank"
],
"seconds": [
30,
70
],
"self": [
"Mình đã nói “Excuse me” trước khi hỏi",
"Mình đã dùng đúng “left”, “right”, “straight”",
"Mình đã dùng “next to” hoặc “near” để mô tả nơi đó",
"Mình đã nhắc lại hướng đi một lần",
"Mình đã nói chậm và rõ từng bước"
]
}
},
{
"id": "sp-shop",
"title": "Mua quần áo và đồ nhỏ",
"en": "Shopping for clothes or small items",
"lvl": "A1",
"track": "gen",
"register": "neutral",
"when": "Bạn vào cửa hàng quần áo hoặc đồ nhỏ và cần nói bạn tìm gì, hỏi cỡ, màu, giá, thử đồ và trả tiền. Mục tiêu là mua hàng bằng những câu ngắn.",
"parts": [
{
"name": "Explaining what you want",
"vi": "Nói bạn đang tìm món gì, màu gì.",
"ex": "I'm looking for a blue shirt."
},
{
"name": "Size and trying on",
"vi": "Nói cỡ của bạn và xin thử đồ.",
"ex": "I'm size medium. Can I try it on?"
},
{
"name": "Giving an opinion",
"vi": "Nói đồ có vừa không, nhờ đổi cỡ.",
"ex": "It's too big. Do you have a small?"
},
{
"name": "Price and paying",
"vi": "Hỏi giá, quyết định mua và trả tiền.",
"ex": "How much is it? I'll take it."
}
],
"phrases": [
{
"en": "Can I help you?",
"vi": "Bạn cần gì không ạ?",
"use": "Explaining what you want"
},
{
"en": "I'm looking for a blue shirt",
"vi": "Tôi đang tìm một chiếc áo sơ mi xanh",
"use": "Explaining what you want"
},
{
"en": "What size are you?",
"vi": "Bạn mặc cỡ nào?",
"use": "Size and trying on"
},
{
"en": "Can I try it on?",
"vi": "Tôi thử được không?",
"use": "Size and trying on"
},
{
"en": "It's too big",
"vi": "Nó rộng quá",
"use": "Giving an opinion"
},
{
"en": "Do you have a small?",
"vi": "Bạn có cỡ nhỏ không?",
"use": "Giving an opinion"
},
{
"en": "How much is it?",
"vi": "Cái này bao nhiêu tiền?",
"use": "Price and paying"
},
{
"en": "I'll take it",
"vi": "Tôi lấy cái này",
"use": "Price and paying"
},
{
"en": "Can I pay by card?",
"vi": "Tôi trả bằng thẻ được không?",
"use": "Price and paying"
}
],
"model": {
"type": "dialogue",
"roles": [
"Shop assistant",
"Customer"
],
"lines": [
{
"who": 0,
"en": "Hello. Can I help you?",
"vi": "Xin chào. Tôi giúp gì được cho bạn?",
"hint": ""
},
{
"who": 1,
"en": "Yes, please. I'm looking for a blue shirt.",
"vi": "Vâng. Tôi đang tìm một chiếc áo sơ mi xanh.",
"hint": "Nói bạn đang tìm áo sơ mi màu xanh. [yes please / looking for / blue shirt]"
},
{
"who": 0,
"en": "Here is a blue shirt. What size are you?",
"vi": "Đây là một chiếc áo xanh. Bạn mặc cỡ nào?",
"hint": ""
},
{
"who": 1,
"en": "I'm size medium. Can I try it on?",
"vi": "Tôi cỡ M. Tôi thử được không?",
"hint": "Nói cỡ M và xin thử đồ. [size medium / try it on]"
},
{
"who": 0,
"en": "Yes, the changing room is there.",
"vi": "Được, phòng thử đồ ở đằng kia.",
"hint": ""
},
{
"who": 1,
"en": "It's too big. Do you have a small?",
"vi": "Nó rộng quá. Bạn có cỡ nhỏ không?",
"hint": "Nói áo rộng quá và hỏi cỡ nhỏ. [too big / do you have / small]"
},
{
"who": 0,
"en": "Yes, here you are.",
"vi": "Có, của bạn đây.",
"hint": ""
},
{
"who": 1,
"en": "It's good. How much is it?",
"vi": "Vừa rồi. Bao nhiêu tiền ạ?",
"hint": "Nói áo vừa và hỏi giá. [good / how much]"
},
{
"who": 0,
"en": "It's twenty pounds.",
"vi": "Hai mươi bảng.",
"hint": ""
},
{
"who": 1,
"en": "OK, I'll take it. Can I pay by card?",
"vi": "Được, tôi lấy nó. Tôi trả bằng thẻ được không?",
"hint": "Quyết định mua và hỏi trả thẻ. [I'll take it / pay / card]"
},
{
"who": 0,
"en": "Yes, of course.",
"vi": "Vâng, tất nhiên.",
"hint": ""
}
],
"notes": [
{
"line": 1,
"vi": "“I'm looking for ...” là cách nói bạn cần tìm gì mà không bị thúc ép; tự nhiên hơn “I want ...”."
},
{
"line": 3,
"vi": "Cỡ áo: small, medium, large. Nói “I'm size medium” hoặc “I'm a medium”."
},
{
"line": 5,
"vi": "“too + tính từ” nghĩa là “quá ... (không ổn)”: “too big” rộng quá, “too small” chật quá."
},
{
"line": 9,
"vi": "“I'll take it” là câu quyết định mua rất thông dụng trong cửa hàng."
}
]
},
"pron": [
{
"en": "I'm looking for a blue shirt",
"tip": "Nối “looking for” thành /lʊkɪŋ fər/. “blue shirt” nhấn cả hai từ, đọc rõ /ʃ/ và /t/."
},
{
"en": "Can I try it on?",
"tip": "“Can” đọc yếu. Nối “try it on” gần như /traɪɪtɒn/. Giọng đi lên ở cuối."
},
{
"en": "It's too big",
"tip": "Kéo dài “too” /tuː/ và nhấn “big”. Đọc rõ /g/ cuối."
},
{
"en": "I'll take it",
"tip": "Nối “take it” thành /teɪkɪt/. “I'll” đọc nhẹ /aɪl/."
}
],
"mistakes": [
{
"x": "I find a blue shirt.",
"v": "I'm looking for a blue shirt.",
"why": "“find” là tìm thấy; khi đang tìm thì dùng “look for”."
},
{
"x": "It big too.",
"v": "It's too big.",
"why": "“too” đứng trước tính từ và cần “It's”."
},
{
"x": "How much this?",
"v": "How much is it?",
"why": "Thiếu động từ “is”; tiếng Anh không bỏ “be”."
},
{
"x": "I take it, can pay card?",
"v": "I'll take it. Can I pay by card?",
"why": "Cần “I'll”, “I” và giới từ “by”; tách thành hai câu ngắn."
}
],
"task": {
"scenario": "You are in a small shop. You want a red scarf as a gift for a friend. Ask for it, ask about the colour and the price, and pay.",
"scenario_vi": "Bạn ở một cửa hàng nhỏ. Bạn muốn mua một chiếc khăn đỏ làm quà cho bạn. Hãy hỏi mua, hỏi màu và giá, rồi trả tiền.",
"points": [
"Say what you are looking for",
"Ask if they have another colour",
"Ask how much it is",
"Say you will take it",
"Ask how you can pay and say thank you"
],
"seconds": [
30,
60
],
"self": [
"Mình đã nói mình đang tìm gì bằng “I'm looking for ...”",
"Mình đã hỏi màu hoặc cỡ bằng “Do you have ...?”",
"Mình đã hỏi giá bằng “How much is it?”",
"Mình đã nói “I'll take it” để quyết định mua",
"Mình đã cảm ơn người bán hàng"
]
}
},
{
"id": "sp-phone-appt",
"title": "Đặt lịch hẹn qua điện thoại",
"en": "Making an appointment by phone",
"lvl": "A2",
"track": "gen",
"register": "neutral",
"when": "Bạn gọi điện cho nha sĩ hoặc tiệm cắt tóc để đặt lịch. Mục tiêu là nói rõ ngày, giờ, tên, đánh vần tên, đọc số điện thoại và xác nhận lại.",
"parts": [
{
"name": "Stating your purpose",
"vi": "Nói bạn muốn đặt lịch hẹn.",
"ex": "Hello. I'd like to make an appointment, please."
},
{
"name": "Choosing a day and time",
"vi": "Hỏi ngày giờ phù hợp và đồng ý.",
"ex": "Is Thursday morning possible? How about ten o'clock?"
},
{
"name": "Giving your details",
"vi": "Nói tên, đánh vần và đọc số điện thoại.",
"ex": "It's Linh Tran. L-I-N-H, T-R-A-N."
},
{
"name": "Confirming",
"vi": "Nhắc lại ngày giờ và kết thúc cuộc gọi.",
"ex": "So that's Thursday at ten o'clock. See you then!"
}
],
"phrases": [
{
"en": "How can I help you?",
"vi": "Tôi giúp gì được cho bạn?",
"use": "Stating your purpose"
},
{
"en": "I'd like to make an appointment",
"vi": "Tôi muốn đặt lịch hẹn",
"use": "Stating your purpose"
},
{
"en": "Which day is good for you?",
"vi": "Ngày nào thì tiện cho bạn?",
"use": "Choosing a day and time"
},
{
"en": "Is Thursday morning possible?",
"vi": "Sáng thứ Năm có được không?",
"use": "Choosing a day and time"
},
{
"en": "How about ten o'clock?",
"vi": "Mười giờ thì sao?",
"use": "Choosing a day and time"
},
{
"en": "Can I have your name, please?",
"vi": "Cho tôi xin tên của bạn?",
"use": "Giving your details"
},
{
"en": "Could you spell that, please?",
"vi": "Bạn đánh vần giúp tôi được không?",
"use": "Giving your details"
},
{
"en": "And your phone number?",
"vi": "Và số điện thoại của bạn?",
"use": "Giving your details"
},
{
"en": "So that's Thursday at ten o'clock",
"vi": "Vậy là thứ Năm lúc mười giờ",
"use": "Confirming"
},
{
"en": "See you then",
"vi": "Hẹn gặp bạn lúc đó",
"use": "Confirming"
}
],
"model": {
"type": "dialogue",
"roles": [
"Receptionist",
"Caller"
],
"lines": [
{
"who": 0,
"en": "Good morning, Bright Smile Dental. How can I help you?",
"vi": "Chào buổi sáng, phòng khám Bright Smile. Tôi giúp gì được cho bạn?",
"hint": ""
},
{
"who": 1,
"en": "Hello. I'd like to make an appointment, please.",
"vi": "Xin chào. Tôi muốn đặt lịch hẹn.",
"hint": "Chào và nói bạn muốn đặt lịch hẹn. [hello / I'd like / appointment]"
},
{
"who": 0,
"en": "Of course. Which day is good for you?",
"vi": "Tất nhiên. Ngày nào thì tiện cho bạn?",
"hint": ""
},
{
"who": 1,
"en": "Is Thursday morning possible?",
"vi": "Sáng thứ Năm có được không ạ?",
"hint": "Hỏi xem sáng thứ Năm có được không. [Thursday / morning / possible]"
},
{
"who": 0,
"en": "Yes. How about ten o'clock?",
"vi": "Được. Mười giờ thì sao?",
"hint": ""
},
{
"who": 1,
"en": "Ten o'clock is fine, thank you.",
"vi": "Mười giờ được, cảm ơn.",
"hint": "Đồng ý với mười giờ và cảm ơn. [ten o'clock / fine / thank you]"
},
{
"who": 0,
"en": "Can I have your name, please?",
"vi": "Cho tôi xin tên của bạn?",
"hint": ""
},
{
"who": 1,
"en": "It's Linh Tran.",
"vi": "Tên tôi là Linh Tran.",
"hint": "Nói họ tên của bạn. [it's / name]"
},
{
"who": 0,
"en": "Could you spell that, please?",
"vi": "Bạn đánh vần giúp tôi được không?",
"hint": ""
},
{
"who": 1,
"en": "Yes. L-I-N-H, T-R-A-N.",
"vi": "Vâng. L-I-N-H, T-R-A-N.",
"hint": "Đánh vần tên theo từng chữ cái. [yes / spell / letters]"
},
{
"who": 0,
"en": "Thank you. And your phone number?",
"vi": "Cảm ơn. Và số điện thoại của bạn?",
"hint": ""
},
{
"who": 1,
"en": "It's zero nine one two, three four five, six seven eight.",
"vi": "Số của tôi là 0912 345 678.",
"hint": "Đọc số điện thoại theo nhóm, mỗi chữ số một lần. [zero / nine / numbers in groups]"
},
{
"who": 0,
"en": "So that's Thursday at ten o'clock. See you then!",
"vi": "Vậy là thứ Năm lúc mười giờ. Hẹn gặp bạn!",
"hint": ""
},
{
"who": 1,
"en": "Thank you. Goodbye!",
"vi": "Cảm ơn. Tạm biệt!",
"hint": "Cảm ơn và chào tạm biệt. [thank you / goodbye]"
}
],
"notes": [
{
"line": 1,
"vi": "“I'd like to ...” lịch sự hơn “I want to ...” khi nói với lễ tân hoặc nhân viên."
},
{
"line": 3,
"vi": "Hỏi bằng “Is ... possible?” để đề xuất ngày giờ mà không nghe quá cứng."
},
{
"line": 9,
"vi": "Đánh vần từng chữ cái, nghỉ một nhịp giữa họ và tên. Nhớ: A /eɪ/, E /iː/, I /aɪ/, R /ɑː/."
},
{
"line": 11,
"vi": "Khi đọc số điện thoại, chia thành nhóm 3-4 số và đọc “zero” hoặc “oh” cho số 0."
}
]
},
"pron": [
{
"en": "I'd like to make an appointment",
"tip": "“I'd like to” đọc /aɪd laɪk tə/. Nhấn “appointment” ở âm 2: /əˈpɔɪntmənt/."
},
{
"en": "Thursday morning",
"tip": "“Thursday” /ˈθɜːzdeɪ/: lưỡi đặt giữa răng cho /θ/. Nhấn âm đầu."
},
{
"en": "L-I-N-H, T-R-A-N",
"tip": "Đọc rõ từng chữ cái, giọng hơi đi lên ở cuối mỗi nhóm, đi xuống ở nhóm cuối."
},
{
"en": "So that's Thursday at ten o'clock",
"tip": "Nối “that's Thursday” rõ /s/. Giọng đi xuống ở cuối câu xác nhận."
}
],
"mistakes": [
{
"x": "I want make appointment.",
"v": "I'd like to make an appointment.",
"why": "Cần “I'd like to”, “make”, và mạo từ “an” trước “appointment”."
},
{
"x": "I come on Thursday morning is OK?",
"v": "Is Thursday morning possible?",
"why": "Hỏi đúng cấu trúc “Is ... possible?” thay vì ghép câu như tiếng Việt."
},
{
"x": "My name is spell L-I-N-H.",
"v": "My name is Linh. That's L-I-N-H.",
"why": "Không dùng “spell” như danh từ; nói tên rồi “That's ...” và đọc chữ cái."
},
{
"x": "My phone number is zero nine one two three four five six seven eight.",
"v": "It's zero nine one two, three four five, six seven eight.",
"why": "Đọc theo nhóm cho người nghe dễ ghi; không đọc liền một mạch."
}
],
"task": {
"scenario": "You call a hairdresser to book a haircut for next week. You want an afternoon appointment. Choose a day and time, give and spell your name and phone number, and confirm everything.",
"scenario_vi": "Bạn gọi cho tiệm cắt tóc để đặt lịch cắt tóc tuần sau, vào buổi chiều. Hãy chọn ngày giờ, nói và đánh vần tên, đọc số điện thoại và xác nhận lại.",
"points": [
"Say you would like to make an appointment",
"Ask if a day and time are possible",
"Give your name and spell it",
"Say your phone number in groups",
"Repeat the day and time to confirm"
],
"seconds": [
40,
90
],
"self": [
"Mình đã nói rõ mình muốn đặt lịch hẹn",
"Mình đã đề xuất ngày giờ bằng câu hỏi lịch sự",
"Mình đã đánh vần tên đúng từng chữ cái",
"Mình đã đọc số điện thoại theo nhóm",
"Mình đã nhắc lại ngày giờ để xác nhận"
]
}
},
{
"id": "sp-weekend",
"title": "Nói về cuối tuần và kế hoạch",
"en": "Talking about your weekend and plans",
"lvl": "A2",
"track": "gen",
"register": "informal",
"when": "Bạn trò chuyện với đồng nghiệp vào đầu tuần: kể bạn đã làm gì cuối tuần qua và sắp làm gì. Mục tiêu là kể ngắn bằng quá khứ đơn và dùng “going to” cho kế hoạch.",
"parts": [
{
"name": "Asking about the weekend",
"vi": "Hỏi hoặc trả lời mở đầu về cuối tuần.",
"ex": "Hi Mai! How was your weekend?"
},
{
"name": "Saying what you did",
"vi": "Kể một hai việc đã làm bằng quá khứ đơn.",
"ex": "I visited my aunt. We cooked lunch and watched a film."
},
{
"name": "Asking back",
"vi": "Hỏi đồng nghiệp bạn ấy đã làm gì.",
"ex": "Did you see your friends?"
},
{
"name": "Talking about plans",
"vi": "Nói kế hoạch sắp tới bằng “going to”.",
"ex": "I'm going to go to the beach with my friends."
},
{
"name": "Closing",
"vi": "Chúc vui và kết thúc cuộc trò chuyện.",
"ex": "Have fun!"
}
],
"phrases": [
{
"en": "How was your weekend?",
"vi": "Cuối tuần của bạn thế nào?",
"use": "Asking about the weekend"
},
{
"en": "I visited my aunt",
"vi": "Tôi đã đến thăm dì",
"use": "Saying what you did"
},
{
"en": "What did you do there?",
"vi": "Bạn đã làm gì ở đó?",
"use": "Saying what you did"
},
{
"en": "We cooked lunch",
"vi": "Chúng tôi đã nấu bữa trưa",
"use": "Saying what you did"
},
{
"en": "Did you see your friends?",
"vi": "Bạn có gặp bạn bè không?",
"use": "Asking back"
},
{
"en": "What are you doing this weekend?",
"vi": "Cuối tuần này bạn làm gì?",
"use": "Talking about plans"
},
{
"en": "I'm going to go to the beach",
"vi": "Tôi sẽ đi biển",
"use": "Talking about plans"
},
{
"en": "It's going to be sunny",
"vi": "Trời sẽ nắng",
"use": "Talking about plans"
},
{
"en": "I hope so",
"vi": "Mình hy vọng vậy",
"use": "Talking about plans"
},
{
"en": "Have fun!",
"vi": "Chúc vui nhé!",
"use": "Closing"
}
],
"model": {
"type": "dialogue",
"roles": [
"Colleague",
"You"
],
"lines": [
{
"who": 0,
"en": "Hi Mai! How was your weekend?",
"vi": "Chào Mai! Cuối tuần của bạn thế nào?",
"hint": ""
},
{
"who": 1,
"en": "It was nice, thank you. I visited my aunt.",
"vi": "Vui lắm, cảm ơn bạn. Mình đã đến thăm dì.",
"hint": "Nói cuối tuần vui và bạn đã đi thăm ai. [nice / visited / aunt]"
},
{
"who": 0,
"en": "Lovely! What did you do there?",
"vi": "Hay quá! Bạn đã làm gì ở đó?",
"hint": ""
},
{
"who": 1,
"en": "We cooked lunch and watched a film.",
"vi": "Bọn mình đã nấu bữa trưa và xem phim.",
"hint": "Kể hai việc đã làm: nấu ăn và xem phim. [cooked / lunch / watched / film]"
},
{
"who": 0,
"en": "Sounds fun. I stayed home and slept a lot!",
"vi": "Nghe vui đấy. Mình ở nhà và ngủ rất nhiều!",
"hint": ""
},
{
"who": 1,
"en": "Sounds relaxing! Did you see your friends?",
"vi": "Nghe thư giãn quá! Bạn có gặp bạn bè không?",
"hint": "Nhận xét là thư giãn và hỏi có gặp bạn bè không. [relaxing / did you see / friends]"
},
{
"who": 0,
"en": "Yes, on Sunday. What are you doing this weekend?",
"vi": "Có, vào Chủ nhật. Cuối tuần này bạn làm gì?",
"hint": ""
},
{
"who": 1,
"en": "I'm going to go to the beach with my friends.",
"vi": "Mình sẽ đi biển với bạn bè.",
"hint": "Nói kế hoạch đi biển với bạn bè. [going to / beach / friends]"
},
{
"who": 0,
"en": "Nice! Is the weather going to be good?",
"vi": "Hay đấy! Thời tiết có đẹp không?",
"hint": ""
},
{
"who": 1,
"en": "I hope so. It's going to be sunny.",
"vi": "Mình hy vọng vậy. Trời sẽ nắng.",
"hint": "Nói bạn hy vọng thế và dự báo nắng. [I hope so / going to / sunny]"
},
{
"who": 0,
"en": "Great. Have fun!",
"vi": "Tuyệt. Chúc vui nhé!",
"hint": ""
},
{
"who": 1,
"en": "Thanks! Have a good evening.",
"vi": "Cảm ơn! Chúc bạn buổi tối vui vẻ.",
"hint": "Cảm ơn và chúc bạn ấy buổi tối tốt. [thanks / have a good evening]"
}
],
"notes": [
{
"line": 1,
"vi": "Kể việc đã làm dùng quá khứ đơn: “visited”, “cooked”, “watched” thêm “-ed”."
},
{
"line": 5,
"vi": "“Did you ...?” là câu hỏi quá khứ; sau “did” động từ về nguyên mẫu: “Did you see ...?”."
},
{
"line": 7,
"vi": "“I'm going to + động từ” nói kế hoạch đã dự định, ví dụ “I'm going to go to the beach”."
},
{
"line": 9,
"vi": "“I hope so” trả lời ngắn khi bạn mong điều đó xảy ra, tự nhiên và lịch sự."
}
]
},
"pron": [
{
"en": "How was your weekend?",
"tip": "Nhấn “weekend” ở âm đầu /ˈwiːkend/. Giọng đi xuống ở cuối câu hỏi Wh-."
},
{
"en": "visited my aunt",
"tip": "“visited” có 3 âm tiết /ˈvɪzɪtɪd/; “aunt” đọc /ɑːnt/ (Anh) hoặc /ænt/ (Mỹ), đừng bỏ /t/."
},
{
"en": "cooked lunch",
"tip": "“cooked” kết thúc bằng /t/, đọc nhanh và nối sang “lunch”: /kʊkt lʌntʃ/."
},
{
"en": "I'm going to go to the beach",
"tip": "Trong lời nói nhanh, “going to” thường thành /ˈɡənə/ nhưng ở mức A2 hãy đọc rõ. Nhấn “beach”."
}
],
"mistakes": [
{
"x": "Last weekend I visit my aunt.",
"v": "Last weekend I visited my aunt.",
"why": "Việc đã xảy ra cần động từ quá khứ “visited”, thêm “-ed”."
},
{
"x": "Did you saw your friends?",
"v": "Did you see your friends?",
"why": "Sau “did”, động từ về nguyên mẫu “see”, không chia quá khứ."
},
{
"x": "I go to the beach tomorrow with my friends.",
"v": "I'm going to go to the beach tomorrow with my friends.",
"why": "Kế hoạch tương lai gần nên dùng “going to” thay vì hiện tại đơn."
},
{
"x": "Weekend I stay at home.",
"v": "I stayed at home at the weekend.",
"why": "Cần chủ ngữ và giới từ “at the weekend”, và động từ ở quá khứ “stayed”."
}
],
"task": {
"scenario": "It is Monday morning in the office kitchen. A colleague asks about your weekend. Tell them what you did, ask about theirs, and talk about your plans for next weekend.",
"scenario_vi": "Sáng thứ Hai trong bếp văn phòng. Một đồng nghiệp hỏi về cuối tuần của bạn. Hãy kể bạn đã làm gì, hỏi lại bạn ấy và nói về kế hoạch cuối tuần sau.",
"points": [
"Say how your weekend was",
"Say two things you did in the past tense",
"Ask your colleague what they did",
"Say what you are going to do next weekend",
"Finish with a friendly closing phrase"
],
"seconds": [
40,
90
],
"self": [
"Mình đã dùng quá khứ đơn cho việc đã làm",
"Mình đã dùng “going to” cho kế hoạch",
"Mình đã hỏi lại đồng nghiệp ít nhất một câu",
"Mình đã phát âm âm cuối “-ed” như /t/ và /d/",
"Mình đã nói trôi chảy, không dừng quá lâu"
]
}
},
{
"id": "sp-hotel",
"title": "Đặt phòng và nhận phòng khách sạn",
"en": "Booking a room and checking in at a hotel",
"lvl": "A2",
"track": "gen",
"register": "neutral",
"when": "Bạn cần đặt phòng hoặc nhận phòng tại quầy lễ tân khách sạn khi đi du lịch hay công tác. Mục tiêu là nói rõ ngày ở, loại phòng, giá, bữa sáng và hỏi về Wi-Fi, giờ trả phòng.",
"parts": [
{
"name": "Request",
"vi": "Chào lễ tân và nói bạn muốn đặt phòng.",
"ex": "Hello. I'd like to book a room, please."
},
{
"name": "Dates and room",
"vi": "Nói rõ loại phòng và số đêm bạn ở.",
"ex": "A double room for two nights, from Friday."
},
{
"name": "Price and breakfast",
"vi": "Hỏi giá và xem bữa sáng có gồm trong giá không.",
"ex": "How much is breakfast, please?"
},
{
"name": "Check-in",
"vi": "Nói tên để nhận phòng và nhận chìa khóa.",
"ex": "My name is Linh Tran."
},
{
"name": "Extra questions",
"vi": "Hỏi thêm về Wi-Fi và giờ trả phòng, rồi cảm ơn.",
"ex": "Is there Wi-Fi in the room? What time is check-out?"
}
],
"phrases": [
{
"en": "I'd like to book a room",
"vi": "Tôi muốn đặt một phòng",
"use": "Request"
},
{
"en": "A double room for two nights",
"vi": "Một phòng đôi trong hai đêm",
"use": "Dates and room"
},
{
"en": "Breakfast is not included",
"vi": "Chưa bao gồm bữa sáng",
"use": "Price and breakfast"
},
{
"en": "How much is breakfast?",
"vi": "Bữa sáng giá bao nhiêu?",
"use": "Price and breakfast"
},
{
"en": "Yes, please",
"vi": "Vâng, làm ơn (đồng ý một cách lịch sự)",
"use": "Price and breakfast"
},
{
"en": "My name is",
"vi": "Tên tôi là",
"use": "Check-in"
},
{
"en": "Here is your key",
"vi": "Đây là chìa khóa của bạn",
"use": "Check-in"
},
{
"en": "Yes, it's free",
"vi": "Có, miễn phí",
"use": "Extra questions"
},
{
"en": "Enjoy your stay",
"vi": "Chúc bạn lưu trú vui vẻ",
"use": "Extra questions"
},
{
"en": "Thank you very much",
"vi": "Cảm ơn rất nhiều",
"use": "Extra questions"
}
],
"model": {
"type": "dialogue",
"roles": [
"Receptionist",
"You"
],
"lines": [
{
"who": 0,
"en": "Good evening. Welcome to the Riverside Hotel. How can I help you?",
"vi": "Chào buổi tối. Chào mừng đến khách sạn Riverside. Tôi có thể giúp gì cho bạn?",
"hint": ""
},
{
"who": 1,
"en": "Hello. I'd like to book a room, please.",
"vi": "Xin chào. Tôi muốn đặt một phòng.",
"hint": "Chào và nói bạn muốn đặt phòng. [Hello / book / room]"
},
{
"who": 0,
"en": "Of course. For which dates, and what type of room?",
"vi": "Được ạ. Cho những ngày nào, và loại phòng nào?",
"hint": ""
},
{
"who": 1,
"en": "A double room for two nights, from Friday.",
"vi": "Một phòng đôi, hai đêm, từ thứ Sáu.",
"hint": "Nói loại phòng, số đêm và ngày bắt đầu. [double room / two nights / Friday]"
},
{
"who": 0,
"en": "We have one for 80 euros a night. Breakfast is not included.",
"vi": "Chúng tôi có một phòng giá 80 euro một đêm. Chưa gồm bữa sáng.",
"hint": ""
},
{
"who": 1,
"en": "How much is breakfast, please?",
"vi": "Bữa sáng giá bao nhiêu vậy?",
"hint": "Hỏi giá bữa sáng. [how much / breakfast]"
},
{
"who": 0,
"en": "It's seven euros each morning. Would you like it?",
"vi": "Bảy euro mỗi sáng. Bạn có muốn dùng không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, please. My name is Linh Tran.",
"vi": "Có, làm ơn. Tên tôi là Linh Trần.",
"hint": "Đồng ý và nói tên của bạn. [yes / please / name]"
},
{
"who": 0,
"en": "Thank you, Ms Tran. Here is your key. Room 305.",
"vi": "Cảm ơn cô Trần. Đây là chìa khóa của cô. Phòng 305.",
"hint": ""
},
{
"who": 1,
"en": "Thank you. Is there Wi-Fi in the room?",
"vi": "Cảm ơn. Trong phòng có Wi-Fi không?",
"hint": "Cảm ơn rồi hỏi phòng có Wi-Fi không. [thank you / Wi-Fi / room]"
},
{
"who": 0,
"en": "Yes, it's free. The password is on the card.",
"vi": "Có, miễn phí. Mật khẩu ở trên tấm thẻ.",
"hint": ""
},
{
"who": 1,
"en": "What time is check-out on Sunday?",
"vi": "Chủ nhật mấy giờ phải trả phòng?",
"hint": "Hỏi giờ trả phòng vào chủ nhật. [what time / check-out / Sunday]"
},
{
"who": 0,
"en": "Check-out is at eleven. Enjoy your stay!",
"vi": "Trả phòng lúc mười một giờ. Chúc bạn lưu trú vui vẻ!",
"hint": ""
},
{
"who": 1,
"en": "Thank you very much. Good night!",
"vi": "Cảm ơn nhiều. Chúc ngủ ngon!",
"hint": "Cảm ơn và chúc ngủ ngon. [thank you / good night]"
}
],
"notes": [
{
"line": 1,
"vi": "“I'd like to ...” lịch sự hơn “I want ...”. Dùng khi đặt phòng, gọi món hay yêu cầu dịch vụ."
},
{
"line": 3,
"vi": "Nói “for two nights” (không phải “two night”). Danh từ sau số từ hai trở lên phải thêm -s."
},
{
"line": 5,
"vi": "“How much is ...?” dùng để hỏi giá một thứ cụ thể. Thêm “please” để nghe nhẹ nhàng hơn."
},
{
"line": 9,
"vi": "“Is there ...?” là cách hỏi “có ... không?” về đồ vật hay tiện nghi, ví dụ Wi-Fi, bãi đỗ xe."
}
]
},
"pron": [
{
"en": "I'd like to book a room",
"tip": "Nối “like to” thành /laɪk tə/, “to” đọc yếu. Đừng bỏ âm /k/ cuối của “book”."
},
{
"en": "A double room for two nights",
"tip": "Phát âm rõ âm /s/ cuối ở “nights”. Nhấn mạnh “double” và “nights”."
},
{
"en": "How much is breakfast?",
"tip": "Câu hỏi Wh- xuống giọng ở cuối. “Breakfast” nhấn âm đầu: BREAK-fast, và đọc rõ /st/ cuối."
},
{
"en": "Is there Wi-Fi in the room?",
"tip": "Câu hỏi Yes/No lên giọng ở cuối câu. Nối “Wi-Fi in” thành một dòng liền mạch."
}
],
"mistakes": [
{
"x": "I want book a room.",
"v": "I'd like to book a room.",
"why": "Cần “to” trước động từ nguyên mẫu, và “I'd like to” lịch sự hơn “I want”."
},
{
"x": "I stay two night.",
"v": "I'm staying for two nights.",
"why": "Thiếu “be” và “for”, và danh từ sau “two” phải ở dạng số nhiều “nights”."
},
{
"x": "The breakfast is include?",
"v": "Is breakfast included?",
"why": "Câu hỏi đảo “is” lên đầu, và dùng bị động “included”; không cần “the” khi nói chung."
},
{
"x": "Have Wi-Fi in the room?",
"v": "Is there Wi-Fi in the room?",
"why": "Tiếng Việt nói “có ... không” nhưng tiếng Anh dùng “Is there ...?”, không dùng “Have”."
}
],
"task": {
"scenario": "You are at the reception desk of a hotel in another city. You booked a single room for three nights, but you want one more night and a quiet room. Ask about the price and the check-out time.",
"scenario_vi": "Bạn đang ở quầy lễ tân một khách sạn ở thành phố khác. Bạn đã đặt phòng đơn ba đêm nhưng muốn ở thêm một đêm và cần phòng yên tĩnh. Hãy hỏi giá và giờ trả phòng.",
"points": [
"Say your name and that you have a booking",
"Ask to stay one more night",
"Ask for a quiet room",
"Ask about the price and breakfast",
"Ask what time check-out is"
],
"seconds": [
40,
90
],
"self": [
"Mình đã chào và nói tên rõ ràng",
"Mình đã dùng “I'd like to” khi yêu cầu",
"Mình nói đúng “nights” với âm /s/ cuối",
"Mình đã hỏi giá và giờ trả phòng",
"Mình dùng “please” và “thank you” lịch sự"
]
}
},
{
"id": "sp-about-me",
"title": "Giới thiệu bản thân, gia đình và một ngày bình thường",
"en": "Describing yourself, your family, your work and your day",
"lvl": "A2",
"track": "gen",
"register": "neutral",
"when": "Bạn cần giới thiệu bản thân với người mới quen, bạn học hoặc đồng nghiệp. Mục tiêu là nói được vài câu ngắn rõ ràng về tên, gia đình, công việc hoặc việc học, một ngày bình thường và sở thích.",
"parts": [
{
"name": "Who you are",
"vi": "Chào, nói tên, tuổi và quê quán.",
"ex": "Hello, my name is Hoa. I come from Da Nang."
},
{
"name": "Family",
"vi": "Nói gia đình có mấy người và nghề của họ.",
"ex": "There are four people in my family."
},
{
"name": "Work or study",
"vi": "Nói bạn làm gì hoặc học gì, ở đâu.",
"ex": "I work in a small office. I'm an accountant."
},
{
"name": "Daily routine",
"vi": "Kể một ngày bình thường theo giờ giấc.",
"ex": "On a normal day, I get up at six."
},
{
"name": "Hobbies",
"vi": "Nói sở thích và việc bạn làm lúc rảnh.",
"ex": "In my free time, I like reading."
}
],
"phrases": [
{
"en": "My name is",
"vi": "Tên mình là",
"use": "Who you are"
},
{
"en": "I come from",
"vi": "Mình đến từ (nơi nào)",
"use": "Who you are"
},
{
"en": "years old",
"vi": "... tuổi",
"use": "Who you are"
},
{
"en": "There are four people in my family",
"vi": "Gia đình mình có bốn người",
"use": "Family"
},
{
"en": "My father is a driver",
"vi": "Bố mình là tài xế",
"use": "Family"
},
{
"en": "I work in a small office",
"vi": "Mình làm việc ở một văn phòng nhỏ",
"use": "Work or study"
},
{
"en": "I study English two evenings a week",
"vi": "Mình học tiếng Anh hai buổi tối mỗi tuần",
"use": "Work or study"
},
{
"en": "On a normal day",
"vi": "Vào một ngày bình thường",
"use": "Daily routine"
},
{
"en": "I start work at eight",
"vi": "Mình bắt đầu làm việc lúc tám giờ",
"use": "Daily routine"
},
{
"en": "In my free time, I like",
"vi": "Lúc rảnh, mình thích ...",
"use": "Hobbies"
}
],
"model": {
"type": "monologue",
"roles": [
"Audience",
"You"
],
"lines": [
{
"who": 1,
"en": "Hello, my name is Hoa. I'm twenty-six years old.",
"vi": "Xin chào, tên mình là Hoa. Mình hai mươi sáu tuổi.",
"hint": "Chào và nói tên, tuổi của bạn. [hello / name / years old]"
},
{
"who": 1,
"en": "I come from Da Nang, but now I live in Hanoi.",
"vi": "Mình đến từ Đà Nẵng, nhưng bây giờ mình sống ở Hà Nội.",
"hint": "Nói quê bạn ở đâu và hiện sống ở đâu. [come from / but / live in]"
},
{
"who": 1,
"en": "There are four people in my family. I have a brother.",
"vi": "Gia đình mình có bốn người. Mình có một anh trai.",
"hint": "Nói gia đình có mấy người và bạn có anh/chị/em không. [four people / family / brother]"
},
{
"who": 1,
"en": "My father is a driver and my mother is a teacher.",
"vi": "Bố mình là tài xế còn mẹ mình là giáo viên.",
"hint": "Nói nghề của bố và mẹ. [father / driver / mother / teacher]"
},
{
"who": 1,
"en": "I work in a small office. I'm an accountant.",
"vi": "Mình làm việc ở một văn phòng nhỏ. Mình là kế toán.",
"hint": "Nói bạn làm ở đâu và nghề gì. [work in / office / accountant]"
},
{
"who": 1,
"en": "I also study English two evenings a week.",
"vi": "Mình cũng học tiếng Anh hai buổi tối mỗi tuần.",
"hint": "Nói thêm bạn còn học tiếng Anh. [also / study English / evenings]"
},
{
"who": 1,
"en": "On a normal day, I get up at six.",
"vi": "Vào một ngày bình thường, mình dậy lúc sáu giờ.",
"hint": "Kể bạn dậy lúc mấy giờ và làm gì buổi sáng. [normal day / get up / six]"
},
{
"who": 1,
"en": "I start work at eight and finish at five.",
"vi": "Mình bắt đầu làm lúc tám giờ và xong lúc năm giờ.",
"hint": "Nói giờ bắt đầu và kết thúc công việc. [start work / eight / finish / five]"
},
{
"who": 1,
"en": "In my free time, I like reading and playing badminton.",
"vi": "Lúc rảnh, mình thích đọc sách và chơi cầu lông.",
"hint": "Nói sở thích của bạn. [free time / like / reading / badminton]"
},
{
"who": 1,
"en": "On weekends, I often meet friends for coffee.",
"vi": "Cuối tuần, mình thường gặp bạn bè đi cà phê.",
"hint": "Nói cuối tuần bạn hay làm gì. [weekends / often / friends / coffee]"
}
],
"notes": [
{
"line": 1,
"vi": "Dùng “come from” cho quê gốc và “live in” cho nơi đang sống. Chú ý “but” để nối hai ý trái nhau."
},
{
"line": 2,
"vi": "Mẫu “There are ... people in my family” là cách tự nhiên để nói số người trong gia đình."
},
{
"line": 6,
"vi": "“On a normal day” báo hiệu bạn sắp kể thói quen. Dùng thì hiện tại đơn: get up, start, finish."
},
{
"line": 8,
"vi": "Sau “like” dùng danh động từ (-ing): “like reading”, “like playing”."
}
]
},
"pron": [
{
"en": "I'm twenty-six years old",
"tip": "“Twenty” nhấn âm đầu, “six” kết thúc bằng /ks/ rõ. Nối “six years” liền nhau, đừng bỏ âm /s/."
},
{
"en": "My father is a driver",
"tip": "“Father” có âm /ð/ (lưỡi giữa hai hàm răng), không đọc thành /d/ hay /f/. Nhấn “FA-ther”, “DRI-ver”."
},
{
"en": "I start work at eight and finish at five",
"tip": "Nối “start work” và “finish at”. “And” đọc yếu thành /ən/. Đọc rõ âm /t/ cuối “eight” và âm /v/ trong “five”."
},
{
"en": "I like reading and playing badminton",
"tip": "Phát âm đủ âm /ŋ/ cuối trong “reading”, “playing”. Nhấn “BAD-min-ton”."
}
],
"mistakes": [
{
"x": "I am live in Hanoi.",
"v": "I live in Hanoi.",
"why": "Không dùng “am” trước động từ thường; “live” đã là động từ chính."
},
{
"x": "I have 26 years old.",
"v": "I'm 26 years old.",
"why": "Nói tuổi dùng “be” (am/is/are), không dùng “have” như tiếng Việt “mình có”."
},
{
"x": "My father work as driver.",
"v": "My father works as a driver.",
"why": "Chủ ngữ ngôi thứ ba số ít cần -s ở động từ, và cần mạo từ “a” trước nghề nghiệp."
},
{
"x": "I very like reading.",
"v": "I really like reading.",
"why": "“Very” không đứng trước động từ; dùng “really” hoặc “like ... a lot”."
}
],
"task": {
"scenario": "You join an English club and meet new people. The group leader asks you to introduce yourself. Talk about who you are, your family, your job or studies, a normal day and your hobbies.",
"scenario_vi": "Bạn tham gia một câu lạc bộ tiếng Anh và gặp nhiều người mới. Trưởng nhóm mời bạn tự giới thiệu. Hãy nói về bản thân, gia đình, công việc hoặc việc học, một ngày bình thường và sở thích.",
"points": [
"Say your name, age and where you come from",
"Say who is in your family",
"Say what you do for work or study",
"Describe a normal day with times",
"Say what you like doing in your free time"
],
"seconds": [
45,
90
],
"self": [
"Mình đã nói tên, tuổi và quê quán rõ ràng",
"Mình dùng đúng “I live / I work” và thêm -s với “he/she”",
"Mình nói giờ giấc trong ngày bình thường",
"Mình dùng “like + -ing” khi nói sở thích",
"Mình nói chậm và đọc rõ âm cuối"
]
}
},
{
"id": "sp-return-item",
"title": "Trả hoặc đổi hàng ở cửa hàng",
"en": "Returning or exchanging an item in a shop",
"lvl": "A2",
"track": "gen",
"register": "neutral",
"when": "Bạn mua món đồ bị hỏng, không vừa hoặc không đúng ý và cần trả lại hoặc đổi ở cửa hàng. Mục tiêu là giải thích vấn đề, đưa hóa đơn và nói rõ bạn muốn hoàn tiền hay đổi hàng.",
"parts": [
{
"name": "Say what you want",
"vi": "Chào và nói bạn muốn trả hoặc đổi món đồ.",
"ex": "I'd like to return this jacket."
},
{
"name": "Explain the problem",
"vi": "Nói ngắn gọn vấn đề của món đồ.",
"ex": "It's too small, and the zip is broken."
},
{
"name": "Show the receipt",
"vi": "Đưa hóa đơn và nói bạn mua khi nào.",
"ex": "Here it is. I bought it last week."
},
{
"name": "Ask for a refund or exchange",
"vi": "Nói rõ bạn muốn hoàn tiền hay đổi hàng.",
"ex": "Can I have a refund, please?"
},
{
"name": "Close",
"vi": "Hỏi thêm chi tiết nếu cần rồi cảm ơn.",
"ex": "How long does it take? Thank you for your help."
}
],
"phrases": [
{
"en": "I'd like to return this",
"vi": "Tôi muốn trả lại món này",
"use": "Say what you want"
},
{
"en": "What's the problem with it?",
"vi": "Món này có vấn đề gì?",
"use": "Explain the problem"
},
{
"en": "It's too small",
"vi": "Nó quá nhỏ",
"use": "Explain the problem"
},
{
"en": "The zip is broken",
"vi": "Khóa kéo bị hỏng",
"use": "Explain the problem"
},
{
"en": "Do you have the receipt?",
"vi": "Bạn có hóa đơn không?",
"use": "Show the receipt"
},
{
"en": "Here it is",
"vi": "Đây ạ (khi đưa món gì cho ai)",
"use": "Show the receipt"
},
{
"en": "I bought it",
"vi": "Tôi đã mua nó",
"use": "Show the receipt"
},
{
"en": "A refund or an exchange",
"vi": "Hoàn tiền hay đổi hàng",
"use": "Ask for a refund or exchange"
},
{
"en": "Can I have a refund?",
"vi": "Cho tôi hoàn tiền được không?",
"use": "Ask for a refund or exchange"
},
{
"en": "How long does it take?",
"vi": "Việc đó mất bao lâu?",
"use": "Close"
}
],
"model": {
"type": "dialogue",
"roles": [
"Shop assistant",
"You"
],
"lines": [
{
"who": 0,
"en": "Hi there. Can I help you?",
"vi": "Chào bạn. Tôi có thể giúp gì không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, please. I'd like to return this jacket.",
"vi": "Vâng. Tôi muốn trả lại chiếc áo khoác này.",
"hint": "Nói bạn muốn trả lại chiếc áo khoác. [I'd like to / return / jacket]"
},
{
"who": 0,
"en": "Of course. What's the problem with it?",
"vi": "Được ạ. Chiếc áo có vấn đề gì vậy?",
"hint": ""
},
{
"who": 1,
"en": "It's too small, and the zip is broken.",
"vi": "Nó quá nhỏ, và khóa kéo bị hỏng.",
"hint": "Nói áo quá nhỏ và khóa kéo hỏng. [too small / zip / broken]"
},
{
"who": 0,
"en": "I'm sorry about that. Do you have the receipt?",
"vi": "Tôi rất tiếc. Bạn có hóa đơn không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, here it is. I bought it last week.",
"vi": "Có, đây ạ. Tôi mua nó tuần trước.",
"hint": "Đưa hóa đơn và nói bạn mua tuần trước. [here it is / bought / last week]"
},
{
"who": 0,
"en": "Thank you. Would you like a refund or an exchange?",
"vi": "Cảm ơn bạn. Bạn muốn hoàn tiền hay đổi hàng?",
"hint": ""
},
{
"who": 1,
"en": "Can I have a refund, please?",
"vi": "Cho tôi hoàn tiền được không?",
"hint": "Xin được hoàn tiền một cách lịch sự. [can I / refund / please]"
},
{
"who": 0,
"en": "Yes. The money goes back to your card. Is that okay?",
"vi": "Được. Tiền sẽ về thẻ của bạn. Như vậy ổn chứ?",
"hint": ""
},
{
"who": 1,
"en": "Yes, that's fine. How long does it take?",
"vi": "Vâng, được ạ. Mất bao lâu?",
"hint": "Đồng ý và hỏi mất bao lâu. [that's fine / how long / take]"
},
{
"who": 0,
"en": "About three to five working days.",
"vi": "Khoảng ba đến năm ngày làm việc.",
"hint": ""
},
{
"who": 1,
"en": "Great. Thank you for your help.",
"vi": "Tuyệt. Cảm ơn sự giúp đỡ của bạn.",
"hint": "Nói tốt rồi cảm ơn. [great / thank you / help]"
},
{
"who": 0,
"en": "No problem. Have a nice day!",
"vi": "Không có gì. Chúc bạn một ngày tốt lành!",
"hint": ""
}
],
"notes": [
{
"line": 1,
"vi": "“I'd like to return ...” là cách mở đầu lịch sự và rõ ràng. Nói ngay mục đích để nhân viên hiểu nhanh."
},
{
"line": 3,
"vi": "“Too small” nghĩa là nhỏ hơn mức cần; “broken” là tính từ nghĩa “bị hỏng”, đừng nói “broke”."
},
{
"line": 5,
"vi": "“Bought” là quá khứ của “buy”. Dùng quá khứ đơn khi nói rõ thời điểm: “last week”."
},
{
"line": 7,
"vi": "“Can I have ..., please?” là cách xin điều gì đó lịch sự và thân thiện, không đòi hỏi."
}
]
},
"pron": [
{
"en": "I'd like to return this jacket",
"tip": "“Return” nhấn âm sau: re-TURN. “Jacket” nhấn âm đầu: JA-cket, và đọc rõ /t/ cuối."
},
{
"en": "It's too small, and the zip is broken",
"tip": "Nối “it's too”. Đọc rõ /s/ ở “it's” và /n/ cuối ở “broken” (BRO-ken)."
},
{
"en": "Would you like a refund or an exchange?",
"tip": "Câu hỏi lựa chọn: lên giọng ở “refund”, xuống giọng ở “exchange”. Nối “or an” thành “o-ran”."
},
{
"en": "How long does it take?",
"tip": "Câu hỏi Wh- xuống giọng cuối câu. Đọc rõ /z/ ở “does” và /k/ ở “take”."
}
],
"mistakes": [
{
"x": "I want return this jacket.",
"v": "I'd like to return this jacket.",
"why": "Thiếu “to” trước “return”, và “I'd like to” lịch sự hơn “I want” khi nói với nhân viên."
},
{
"x": "It is broke.",
"v": "It's broken.",
"why": "Sau “be” cần tính từ “broken”, không dùng “broke” (quá khứ của “break”)."
},
{
"x": "I buy it yesterday.",
"v": "I bought it yesterday.",
"why": "Có “yesterday” thì động từ phải ở quá khứ: “bought”."
},
{
"x": "Can you give me back money?",
"v": "Can I have a refund, please?",
"why": "Nói “a refund” hoặc “my money back”; “give me back money” nghe thiếu tự nhiên và hơi thô."
}
],
"task": {
"scenario": "You bought a pair of headphones online and they stopped working after three days. You do not have the paper receipt, but you have the order email on your phone. Go to the shop and ask for an exchange.",
"scenario_vi": "Bạn mua một đôi tai nghe trực tuyến và chúng hỏng sau ba ngày. Bạn không có hóa đơn giấy nhưng có email đặt hàng trên điện thoại. Hãy đến cửa hàng và xin đổi hàng.",
"points": [
"Say you want to return or exchange the headphones",
"Explain the problem clearly",
"Say when you bought them",
"Explain that you have the email but no paper receipt",
"Ask for an exchange politely"
],
"seconds": [
40,
90
],
"self": [
"Mình đã nói rõ mục đích: trả hoặc đổi hàng",
"Mình mô tả vấn đề bằng câu ngắn và đúng",
"Mình dùng quá khứ đơn khi nói ngày mua",
"Mình dùng “Can I ... please?” lịch sự",
"Mình đã cảm ơn ở cuối"
]
}
},
{
"id": "sp-invite",
"title": "Mời bạn đi chơi, nhận lời và từ chối lịch sự",
"en": "Inviting a friend out, accepting and declining politely",
"lvl": "A2",
"track": "gen",
"register": "informal",
"when": "Bạn muốn rủ bạn bè đi chơi, hoặc trả lời khi ai đó mời bạn. Mục tiêu là mời, nhận lời hoặc từ chối lịch sự, rồi thống nhất giờ và địa điểm.",
"parts": [
{
"name": "Check availability",
"vi": "Hỏi bạn có rảnh vào ngày đó không.",
"ex": "Are you free on Saturday?"
},
{
"name": "Invite",
"vi": "Đưa ra lời mời cụ thể.",
"ex": "Would you like to see a film with me?"
},
{
"name": "Agree a time",
"vi": "Đề nghị giờ giấc và thống nhất với bạn.",
"ex": "How about seven o'clock? Can we go at nine?"
},
{
"name": "Agree a place",
"vi": "Chọn nơi gặp nhau.",
"ex": "Let's meet at the cinema."
},
{
"name": "Decline politely",
"vi": "Từ chối một lời mời phụ, nói lý do ngắn gọn và xin lỗi.",
"ex": "I'd love to, but I have to study. Sorry!"
}
],
"phrases": [
{
"en": "Are you free on Saturday?",
"vi": "Thứ Bảy bạn có rảnh không?",
"use": "Check availability"
},
{
"en": "Would you like to see a film with me?",
"vi": "Bạn có muốn đi xem phim với mình không?",
"use": "Invite"
},
{
"en": "Do you want to have dinner",
"vi": "Bạn có muốn ăn tối không?",
"use": "Invite"
},
{
"en": "That sounds great",
"vi": "Nghe hay đấy",
"use": "Agree a time"
},
{
"en": "How about seven o'clock?",
"vi": "Bảy giờ thì sao?",
"use": "Agree a time"
},
{
"en": "Can we go at nine?",
"vi": "Mình đi lúc chín giờ được không?",
"use": "Agree a time"
},
{
"en": "Let's meet at the cinema",
"vi": "Mình gặp nhau ở rạp nhé",
"use": "Agree a place"
},
{
"en": "I'd love to, but",
"vi": "Mình rất muốn, nhưng ...",
"use": "Decline politely"
},
{
"en": "I have to study",
"vi": "Mình phải học bài",
"use": "Decline politely"
},
{
"en": "See you on Saturday",
"vi": "Hẹn gặp thứ Bảy",
"use": "Agree a place"
}
],
"model": {
"type": "dialogue",
"roles": [
"Friend",
"You"
],
"lines": [
{
"who": 0,
"en": "Hi! Long time no see. How are you?",
"vi": "Chào! Lâu quá không gặp. Bạn khỏe không?",
"hint": ""
},
{
"who": 1,
"en": "I'm good, thanks. Are you free on Saturday?",
"vi": "Mình khỏe, cảm ơn. Thứ Bảy bạn có rảnh không?",
"hint": "Trả lời khỏe rồi hỏi bạn có rảnh thứ Bảy không. [good / free / Saturday]"
},
{
"who": 0,
"en": "I think so. Why?",
"vi": "Chắc là rảnh. Sao vậy?",
"hint": ""
},
{
"who": 1,
"en": "Would you like to see a film with me?",
"vi": "Bạn có muốn đi xem phim với mình không?",
"hint": "Mời bạn đi xem phim cùng. [would you like / film / with me]"
},
{
"who": 0,
"en": "That sounds great! What time?",
"vi": "Nghe hay đấy! Mấy giờ?",
"hint": ""
},
{
"who": 1,
"en": "How about seven o'clock? The film starts at half past seven.",
"vi": "Bảy giờ được không? Phim bắt đầu lúc bảy rưỡi.",
"hint": "Đề nghị lúc bảy giờ và nói giờ phim bắt đầu. [how about / seven / starts / half past]"
},
{
"who": 0,
"en": "Sorry, I have a class until eight. Can we go at nine?",
"vi": "Xin lỗi, mình có lớp đến tám giờ. Mình đi lúc chín giờ được không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, nine is fine. Let's meet at the cinema.",
"vi": "Được, chín giờ ổn. Mình gặp nhau ở rạp nhé.",
"hint": "Đồng ý chín giờ và hẹn gặp ở rạp. [nine / fine / let's meet / cinema]"
},
{
"who": 0,
"en": "Perfect. Do you want to have dinner before the film?",
"vi": "Tuyệt. Bạn có muốn ăn tối trước khi xem phim không?",
"hint": ""
},
{
"who": 1,
"en": "I'd love to, but I have to study. Sorry!",
"vi": "Mình rất muốn, nhưng mình phải học bài. Xin lỗi nhé!",
"hint": "Từ chối lịch sự lời mời ăn tối vì phải học. [I'd love to / but / have to study / sorry]"
},
{
"who": 0,
"en": "No problem. See you at the cinema at nine.",
"vi": "Không sao. Hẹn gặp ở rạp lúc chín giờ.",
"hint": ""
},
{
"who": 1,
"en": "See you on Saturday. Bye!",
"vi": "Hẹn gặp thứ Bảy. Tạm biệt!",
"hint": "Chào tạm biệt và hẹn gặp thứ Bảy. [see you / Saturday / bye]"
}
],
"notes": [
{
"line": 1,
"vi": "“Are you free on ...?” là cách hỏi lịch trình tự nhiên trước khi mời. Dùng “on” với thứ trong tuần."
},
{
"line": 3,
"vi": "“Would you like to ...?” là lời mời lịch sự. Với bạn thân có thể nói “Do you want to ...?”."
},
{
"line": 6,
"vi": "Khi không tiện giờ đó, hãy xin lỗi rồi đưa lý do và đề nghị giờ khác: “Can we go at nine?”."
},
{
"line": 9,
"vi": "Từ chối nhẹ nhàng: “I'd love to, but ...” + lý do + “Sorry!”. Tránh nói thẳng “No, I can't”."
}
]
},
"pron": [
{
"en": "Are you free on Saturday?",
"tip": "Câu hỏi Yes/No lên giọng ở cuối. “Are you” nối thành /ɑːjə/, “Saturday” nhấn âm đầu: SA-tur-day."
},
{
"en": "How about seven o'clock?",
"tip": "“Seven” nhấn âm đầu: SE-ven. “How about” nối thành “how-a-bout”, lên giọng nhẹ ở cuối."
},
{
"en": "Let's meet at the cinema",
"tip": "Đọc rõ /ts/ cuối “let's”. “Cinema” nhấn âm đầu: CI-ne-ma. Nối “meet at” thành “mee-tat”."
},
{
"en": "I'd love to, but I have to study",
"tip": "“Love” có âm /ʌ/ ngắn, không kéo dài. “Have to” đọc là “hafta”. Ngắt một nhịp sau “but”."
}
],
"mistakes": [
{
"x": "Do you free on Saturday?",
"v": "Are you free on Saturday?",
"why": "“Free” là tính từ nên dùng với “be” (are), không dùng trợ động từ “do”."
},
{
"x": "Let's we meet at nine.",
"v": "Let's meet at nine.",
"why": "“Let's” đã có nghĩa “chúng ta”, không thêm “we”, và theo sau là động từ nguyên mẫu."
},
{
"x": "Can't, I busy.",
"v": "Sorry, I can't. I'm busy.",
"why": "Thiếu “be” trước tính từ “busy”, và nên mở đầu bằng “Sorry” để từ chối lịch sự."
},
{
"x": "We meet where?",
"v": "Where shall we meet?",
"why": "Câu hỏi tiếng Anh đặt từ hỏi “where” lên đầu và đảo trợ động từ trước chủ ngữ."
}
],
"task": {
"scenario": "Your classmate has just finished a hard exam. You want to invite them to a cafe on Sunday afternoon. Agree a time and a place. Then your classmate invites you to a party on Friday, but you cannot go.",
"scenario_vi": "Bạn cùng lớp vừa thi xong một bài khó. Bạn muốn mời họ đi cà phê vào chiều Chủ nhật, thống nhất giờ và địa điểm. Sau đó họ mời bạn dự tiệc tối thứ Sáu nhưng bạn không đi được.",
"points": [
"Ask if your friend is free on Sunday",
"Invite them to a cafe",
"Agree a time and a place",
"Politely decline the Friday party",
"Give a short reason and say sorry"
],
"seconds": [
40,
90
],
"self": [
"Mình đã hỏi bạn có rảnh trước khi mời",
"Mình dùng “Would you like to ...?” để mời",
"Mình thống nhất giờ và địa điểm rõ ràng",
"Mình từ chối bằng “I'd love to, but ...” và xin lỗi",
"Mình nói giọng thân thiện và lên giọng ở câu hỏi"
]
}
},
{
"id": "sp-interview",
"title": "Phỏng vấn xin việc cơ bản",
"en": "A basic job interview",
"lvl": "B1",
"track": "gen",
"register": "formal",
"when": "Bạn tham gia phỏng vấn xin việc bằng tiếng Anh và cần tạo ấn tượng tốt. Mục tiêu là giới thiệu bản thân, nói điểm mạnh và kinh nghiệm, giải thích vì sao muốn làm công việc này và đặt một câu hỏi ở cuối.",
"parts": [
{
"name": "Greeting",
"vi": "Chào, cảm ơn vì được mời và tỏ ra thân thiện.",
"ex": "Good morning. Thank you for inviting me. It's nice to meet you."
},
{
"name": "About you",
"vi": "Giới thiệu ngắn gọn nghề nghiệp và kinh nghiệm.",
"ex": "I'm a marketing assistant with three years of experience."
},
{
"name": "Strengths",
"vi": "Nêu điểm mạnh kèm một ví dụ cụ thể.",
"ex": "I'm well organised and I work well in a team. For example, I planned our posts."
},
{
"name": "Motivation",
"vi": "Giải thích vì sao bạn muốn công việc này và mục tiêu của bạn.",
"ex": "I'd like to learn more, and your company has a very good reputation."
},
{
"name": "Your question",
"vi": "Hỏi một câu thông minh về công việc, rồi kết thúc lịch sự.",
"ex": "What does a typical day in this role look like?"
}
],
"phrases": [
{
"en": "Thank you for inviting me",
"vi": "Cảm ơn vì đã mời tôi",
"use": "Greeting"
},
{
"en": "with three years of experience",
"vi": "với ba năm kinh nghiệm",
"use": "About you"
},
{
"en": "I'm well organised",
"vi": "Tôi làm việc có tổ chức",
"use": "Strengths"
},
{
"en": "I work well in a team",
"vi": "Tôi làm việc nhóm tốt",
"use": "Strengths"
},
{
"en": "For example, I planned",
"vi": "Ví dụ, tôi đã lên kế hoạch ...",
"use": "Strengths"
},
{
"en": "I'd like to learn more",
"vi": "Tôi muốn học hỏi thêm",
"use": "Motivation"
},
{
"en": "Your company has a very good reputation",
"vi": "Công ty có danh tiếng rất tốt",
"use": "Motivation"
},
{
"en": "I hope to be",
"vi": "Tôi hy vọng sẽ trở thành ...",
"use": "Motivation"
},
{
"en": "What does a typical day in this role look like?",
"vi": "Một ngày làm việc điển hình ở vị trí này như thế nào?",
"use": "Your question"
},
{
"en": "I look forward to hearing from you",
"vi": "Tôi mong sớm nhận được phản hồi từ anh chị",
"use": "Your question"
}
],
"model": {
"type": "dialogue",
"roles": [
"Interviewer",
"You"
],
"lines": [
{
"who": 0,
"en": "Good morning, and thank you for coming. Please, take a seat.",
"vi": "Chào buổi sáng, cảm ơn bạn đã đến. Mời bạn ngồi.",
"hint": ""
},
{
"who": 1,
"en": "Good morning. Thank you for inviting me. It's nice to meet you.",
"vi": "Chào buổi sáng. Cảm ơn vì đã mời tôi. Rất vui được gặp anh chị.",
"hint": "Chào, cảm ơn vì được mời và nói rất vui được gặp. [good morning / thank you / inviting / nice to meet]"
},
{
"who": 0,
"en": "Could you start by telling me a little about yourself?",
"vi": "Bạn có thể bắt đầu bằng việc giới thiệu đôi chút về bản thân không?",
"hint": ""
},
{
"who": 1,
"en": "Of course. I'm a marketing assistant with three years of experience in a small online company.",
"vi": "Dĩ nhiên. Tôi là trợ lý marketing với ba năm kinh nghiệm ở một công ty trực tuyến nhỏ.",
"hint": "Nói nghề, số năm kinh nghiệm và nơi làm. [marketing assistant / three years / experience / online company]"
},
{
"who": 0,
"en": "What would you say are your main strengths?",
"vi": "Theo bạn, điểm mạnh chính của bạn là gì?",
"hint": ""
},
{
"who": 1,
"en": "I'm well organised and I work well in a team. For example, I planned our posts.",
"vi": "Tôi làm việc có tổ chức và làm việc nhóm tốt. Ví dụ, tôi đã lên kế hoạch cho các bài đăng.",
"hint": "Nói hai điểm mạnh và cho một ví dụ ngắn. [organised / team / for example / planned]"
},
{
"who": 0,
"en": "Why are you interested in this job?",
"vi": "Vì sao bạn quan tâm đến công việc này?",
"hint": ""
},
{
"who": 1,
"en": "I'd like to learn more, and your company has a very good reputation.",
"vi": "Tôi muốn học hỏi thêm, và công ty có danh tiếng rất tốt.",
"hint": "Nói bạn muốn học thêm và công ty có tiếng tốt. [learn more / company / reputation]"
},
{
"who": 0,
"en": "And where do you see yourself in five years?",
"vi": "Và bạn thấy mình ở đâu trong năm năm tới?",
"hint": ""
},
{
"who": 1,
"en": "I hope to be a marketing manager, leading a small team.",
"vi": "Tôi hy vọng trở thành quản lý marketing, dẫn dắt một nhóm nhỏ.",
"hint": "Nói mục tiêu nghề nghiệp sau năm năm. [hope / marketing manager / leading / team]"
},
{
"who": 0,
"en": "Thank you. Do you have any questions for us?",
"vi": "Cảm ơn bạn. Bạn có câu hỏi nào cho chúng tôi không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, I do. What does a typical day in this role look like?",
"vi": "Có ạ. Một ngày làm việc điển hình ở vị trí này như thế nào?",
"hint": "Nói có và hỏi một ngày làm việc điển hình ra sao. [yes / typical day / role / look like]"
},
{
"who": 0,
"en": "Good question. You'd start with a team meeting, then work on your own projects.",
"vi": "Câu hỏi hay. Bạn sẽ bắt đầu bằng cuộc họp nhóm, rồi làm các dự án của mình.",
"hint": ""
},
{
"who": 1,
"en": "Thank you very much. I look forward to hearing from you.",
"vi": "Cảm ơn rất nhiều. Tôi mong nhận được phản hồi từ anh chị.",
"hint": "Cảm ơn và nói bạn mong sớm nhận được tin. [thank you / look forward / hearing]"
}
],
"notes": [
{
"line": 3,
"vi": "Giữ phần giới thiệu ngắn: nghề, số năm kinh nghiệm, nơi làm. Dùng “with three years of experience” cho gọn."
},
{
"line": 5,
"vi": "Nêu điểm mạnh rồi đưa ví dụ với “For example”. Ví dụ cụ thể thuyết phục hơn tính từ chung chung."
},
{
"line": 7,
"vi": "Nói lý do liên quan đến công ty, không chỉ lương. “Reputation” cho thấy bạn đã tìm hiểu trước."
},
{
"line": 11,
"vi": "Luôn chuẩn bị một câu hỏi cuối buổi; điều đó cho thấy bạn quan tâm. “What does ... look like?” là mẫu hữu ích."
}
]
},
"pron": [
{
"en": "What are your main strengths?",
"tip": "“Strengths” có cụm phụ âm /streŋθs/; luyện chậm, đừng thêm nguyên âm. Xuống giọng ở cuối câu hỏi Wh-."
},
{
"en": "I'm well organised",
"tip": "“Organised” nhấn âm đầu: OR-ga-nized, âm cuối là /d/ nhẹ. Nối “I'm well” liền mạch."
},
{
"en": "What does a typical day in this role look like?",
"tip": "Nhấn “TYP-i-cal” và “ROLE”. “Does a” nối nhẹ. Xuống giọng ở “look like”."
},
{
"en": "I look forward to hearing from you",
"tip": "“To” và “from” đọc yếu (/tə/, /frəm/). Nhấn “FOR-ward” và “HEAR-ing”, và đọc rõ âm /ŋ/ cuối."
}
],
"mistakes": [
{
"x": "I have three years experience.",
"v": "I have three years of experience.",
"why": "Cần giới từ “of” giữa số năm và “experience”."
},
{
"x": "I am good in teamwork.",
"v": "I'm good at teamwork.",
"why": "Sau “good” dùng giới từ “at” khi nói về kỹ năng, không dùng “in”."
},
{
"x": "I look forward to hear from you.",
"v": "I look forward to hearing from you.",
"why": "Trong “look forward to”, “to” là giới từ nên theo sau là danh động từ (-ing)."
},
{
"x": "I'm working here since 2021.",
"v": "I've worked here since 2021.",
"why": "Hành động kéo dài từ quá khứ đến nay dùng hiện tại hoàn thành, không dùng hiện tại tiếp diễn với “since”."
}
],
"task": {
"scenario": "You are applying for a job as a receptionist in a clinic. The interviewer asks about your experience, your strengths and why you want to work there. At the end, you must ask a question.",
"scenario_vi": "Bạn ứng tuyển vị trí lễ tân tại một phòng khám. Người phỏng vấn hỏi về kinh nghiệm, điểm mạnh và lý do bạn muốn làm việc ở đó. Cuối buổi, bạn cần hỏi lại một câu.",
"points": [
"Greet the interviewer and thank them",
"Describe your experience and background briefly",
"Give two strengths and one example",
"Explain why you want this job",
"Ask a question about the job or the team"
],
"seconds": [
60,
120
],
"self": [
"Mình đã chào và cảm ơn lịch sự",
"Mình giới thiệu kinh nghiệm ngắn gọn, rõ ràng",
"Mình nêu điểm mạnh kèm một ví dụ",
"Mình giải thích lý do chọn công việc",
"Mình đã đặt một câu hỏi ở cuối",
"Mình dùng giọng trang trọng và nói không quá nhanh"
]
}
},
{
"id": "sp-experience",
"title": "Kể về một trải nghiệm trong quá khứ",
"en": "Telling a story about a past experience",
"lvl": "B1",
"track": "gen",
"register": "informal",
"when": "Bạn muốn kể cho bạn bè, đồng nghiệp hoặc giám khảo nghe về một chuyến đi hay một sự cố bạn đã giải quyết. Mục tiêu là kể mạch lạc theo trình tự, dùng thì quá khứ đúng và nói về cảm xúc.",
"parts": [
{
"name": "Introduce the story",
"vi": "Mở đầu bằng việc nói bạn sắp kể chuyện gì và khi nào.",
"ex": "I'd like to tell you about a trip I took to Sa Pa last year."
},
{
"name": "Set the scene",
"vi": "Kể bối cảnh ban đầu theo trình tự, dùng quá khứ đơn.",
"ex": "First, we took a night bus, and we arrived early in the morning."
},
{
"name": "The problem",
"vi": "Kể vấn đề xảy ra, dùng quá khứ tiếp diễn cho hành động đang diễn ra.",
"ex": "While we were walking to our hostel, my cousin lost her phone."
},
{
"name": "What happened next",
"vi": "Kể bạn đã giải quyết thế nào, dùng từ nối thứ tự.",
"ex": "Then I stayed calm. Luckily, a shop owner had found it."
},
{
"name": "Feelings and lesson",
"vi": "Nói cảm xúc, kết quả và điều bạn học được.",
"ex": "In the end, we were so relieved. That day taught me to stay calm."
}
],
"phrases": [
{
"en": "I'd like to tell you about",
"vi": "Mình muốn kể cho bạn nghe về ...",
"use": "Introduce the story"
},
{
"en": "First, we took",
"vi": "Đầu tiên, tụi mình đi/bắt ...",
"use": "Set the scene"
},
{
"en": "While we were walking",
"vi": "Trong lúc tụi mình đang đi bộ",
"use": "The problem"
},
{
"en": "At first, I felt really worried",
"vi": "Lúc đầu mình rất lo lắng",
"use": "Feelings and lesson"
},
{
"en": "Then I stayed calm",
"vi": "Sau đó mình giữ bình tĩnh",
"use": "What happened next"
},
{
"en": "Luckily, a shop owner had found it",
"vi": "May mắn là một chủ cửa hàng đã nhặt được",
"use": "What happened next"
},
{
"en": "In the end",
"vi": "Cuối cùng",
"use": "Feelings and lesson"
},
{
"en": "we were so relieved",
"vi": "tụi mình rất nhẹ nhõm",
"use": "Feelings and lesson"
},
{
"en": "since then",
"vi": "từ đó đến nay",
"use": "Feelings and lesson"
},
{
"en": "taught me to stay calm",
"vi": "dạy mình giữ bình tĩnh",
"use": "Feelings and lesson"
}
],
"model": {
"type": "monologue",
"roles": [
"Audience",
"You"
],
"lines": [
{
"who": 1,
"en": "I'd like to tell you about a trip I took to Sa Pa last year.",
"vi": "Mình muốn kể cho bạn nghe về chuyến đi Sa Pa năm ngoái.",
"hint": "Mở đầu: nói bạn sẽ kể về chuyến đi Sa Pa năm ngoái. [I'd like to tell / trip / Sa Pa / last year]"
},
{
"who": 1,
"en": "First, we took a night bus, and we arrived early in the morning.",
"vi": "Đầu tiên, tụi mình đi xe buýt đêm và đến nơi vào sáng sớm.",
"hint": "Kể bắt đầu bằng xe buýt đêm và đến sớm. [first / night bus / arrived / early]"
},
{
"who": 1,
"en": "While we were walking to our hostel, my cousin lost her phone.",
"vi": "Trong lúc tụi mình đang đi bộ đến nhà nghỉ, em họ mình làm mất điện thoại.",
"hint": "Kể vấn đề xảy ra khi đang đi bộ: em họ mất điện thoại. [while / walking / hostel / cousin / lost]"
},
{
"who": 1,
"en": "At first, I felt really worried because we needed it for the map.",
"vi": "Lúc đầu mình rất lo vì tụi mình cần nó để xem bản đồ.",
"hint": "Nói cảm xúc ban đầu và lý do. [at first / felt worried / because / map]"
},
{
"who": 1,
"en": "Then I stayed calm, and we walked back along the same road.",
"vi": "Sau đó mình giữ bình tĩnh, và tụi mình đi ngược lại con đường cũ.",
"hint": "Nói bạn bình tĩnh và quay lại đường cũ. [then / stayed calm / walked back / same road]"
},
{
"who": 1,
"en": "Luckily, a shop owner had found it and kept it behind the counter.",
"vi": "May mắn là một chủ cửa hàng đã nhặt được và giữ nó sau quầy.",
"hint": "Nói may mắn có người nhặt được và giữ giúp. [luckily / shop owner / found / kept]"
},
{
"who": 1,
"en": "In the end, we got it back, and we were so relieved.",
"vi": "Cuối cùng tụi mình lấy lại được, và rất nhẹ nhõm.",
"hint": "Kết thúc: lấy lại được và nhẹ nhõm. [in the end / got it back / relieved]"
},
{
"who": 1,
"en": "I've been back to Sa Pa twice since then, and nothing has gone wrong.",
"vi": "Từ đó mình đã quay lại Sa Pa hai lần, và không có gì trục trặc.",
"hint": "Nói từ đó bạn đã quay lại hai lần, không sao. [been back / twice / since then / nothing wrong]"
},
{
"who": 1,
"en": "That day taught me to stay calm when something goes wrong.",
"vi": "Ngày hôm đó dạy mình giữ bình tĩnh khi có chuyện không may.",
"hint": "Nói bài học: giữ bình tĩnh khi có sự cố. [taught me / stay calm / goes wrong]"
}
],
"notes": [
{
"line": 1,
"vi": "Từ nối “First”, “Then”, “In the end” giúp người nghe theo dõi trình tự. Hành động hoàn tất dùng quá khứ đơn: took, arrived."
},
{
"line": 2,
"vi": "“While we were walking” (quá khứ tiếp diễn) là hành động đang diễn ra; “lost” (quá khứ đơn) là sự việc xen vào."
},
{
"line": 5,
"vi": "“Had found” (quá khứ hoàn thành) chỉ việc xảy ra trước các việc khác; B1 có thể dùng cụm này như một mẫu cố định."
},
{
"line": 7,
"vi": "“I've been back ... since then” dùng hiện tại hoàn thành để nối quá khứ với hiện tại: “twice”, “since then”."
}
]
},
"pron": [
{
"en": "While we were walking to our hostel",
"tip": "“Were” đọc yếu /wə/. Nhấn “WALK-ing” và “HOS-tel”; đọc rõ âm /ŋ/ cuối “walking” và đừng bỏ /t/ ở “hostel”."
},
{
"en": "At first, I felt really worried",
"tip": "“Worried” có /ɜː/ (WUR-eed), không đọc như “wo-ri”. Nhấn “REAL-ly” và “WOR-ried”, và đọc rõ âm /d/ cuối."
},
{
"en": "Luckily, a shop owner had found it",
"tip": "Nhấn “LUCK-i-ly”. “Had” đọc yếu /həd/. Nối “found it” thành “foun-dit”, đừng bỏ /d/."
},
{
"en": "I've been back to Sa Pa twice since then",
"tip": "“I've” viết tắt đọc nhanh /aɪv/. Nhấn “TWICE” và “THEN”. Đọc đủ /s/ cuối trong “twice”."
}
],
"mistakes": [
{
"x": "I go to Sa Pa last year.",
"v": "I went to Sa Pa last year.",
"why": "Có “last year” là quá khứ, nên động từ phải ở quá khứ đơn: “went”."
},
{
"x": "I have been to Sa Pa last year.",
"v": "I went to Sa Pa last year.",
"why": "Hiện tại hoàn thành không đi với mốc thời gian đã qua như “last year”; dùng quá khứ đơn."
},
{
"x": "I was feel very worry.",
"v": "I felt very worried.",
"why": "Không dùng “was” trước động từ chính; “worry” là động từ, cần tính từ “worried”."
},
{
"x": "When we arrived, my cousin lose her phone.",
"v": "When we arrived, my cousin lost her phone.",
"why": "Cả câu kể chuyện quá khứ, nên “lose” phải chuyển thành quá khứ “lost”."
}
],
"task": {
"scenario": "You are talking to a new colleague about a time when something went wrong while you were travelling or working, and you solved the problem. Tell the story from the beginning to the end and say how you felt.",
"scenario_vi": "Bạn đang nói chuyện với một đồng nghiệp mới về lần có chuyện không may khi bạn đi du lịch hoặc đang làm việc, và bạn đã giải quyết được. Hãy kể từ đầu đến cuối và nói bạn cảm thấy thế nào.",
"points": [
"Say what the story is about and when it happened",
"Describe the situation with past simple and past continuous",
"Explain the problem and what you did",
"Use sequencing words (first, then, in the end)",
"Say how you felt and what you learned"
],
"seconds": [
60,
120
],
"self": [
"Mình đã mở đầu rõ ràng bằng “I'd like to tell you about ...”",
"Mình kể theo trình tự với first, then, in the end",
"Mình dùng quá khứ đơn và quá khứ tiếp diễn đúng",
"Mình nói được cảm xúc của mình",
"Mình dùng ít nhất một câu hiện tại hoàn thành",
"Mình kết thúc bằng điều đã học được"
]
}
},
{
"id": "sp-opinion",
"title": "Nêu ý kiến và đồng ý/không đồng ý lịch sự",
"en": "Giving an opinion and agreeing or disagreeing politely",
"lvl": "B1",
"track": "gen",
"register": "neutral",
"when": "Khi bạn trò chuyện về một chủ đề như làm việc tại nhà hay phương tiện công cộng và muốn nói rõ quan điểm của mình mà vẫn lịch sự với người đối diện.",
"parts": [
{
"name": "Give your opinion",
"vi": "Nói quan điểm của bạn bằng một cụm mở đầu rõ ràng.",
"ex": "Personally, I think working from home is better."
},
{
"name": "Give a reason",
"vi": "Đưa lý do và ví dụ để ý kiến thuyết phục hơn.",
"ex": "It saves time and money. For example, I don't have to pay for the bus."
},
{
"name": "Agree partly",
"vi": "Ghi nhận điểm đúng của người kia trước khi nói thêm ý của mình.",
"ex": "I see what you mean. You're right about that."
},
{
"name": "Disagree politely",
"vi": "Không đồng ý nhẹ nhàng, tránh nói thẳng “No”.",
"ex": "I don't completely agree. On the other hand, driving in traffic is stressful."
}
],
"phrases": [
{
"en": "Personally, I think",
"vi": "Cá nhân tôi thì nghĩ rằng",
"use": "Give your opinion"
},
{
"en": "In my opinion",
"vi": "Theo ý kiến của tôi",
"use": "Give your opinion"
},
{
"en": "For example",
"vi": "Ví dụ như",
"use": "Give a reason"
},
{
"en": "I see what you mean",
"vi": "Tôi hiểu ý bạn",
"use": "Agree partly"
},
{
"en": "You're right about that",
"vi": "Bạn nói đúng về điều đó",
"use": "Agree partly"
},
{
"en": "I don't completely agree",
"vi": "Tôi không hoàn toàn đồng ý",
"use": "Disagree politely"
},
{
"en": "On the other hand",
"vi": "Mặt khác",
"use": "Disagree politely"
},
{
"en": "Fair enough",
"vi": "Cũng có lý",
"use": "Agree partly"
},
{
"en": "I think we both agree",
"vi": "Tôi nghĩ cả hai ta đều đồng ý",
"use": "Agree partly"
}
],
"model": {
"type": "dialogue",
"roles": [
"Mia",
"You"
],
"lines": [
{
"who": 0,
"en": "So, do you think working from home is better than working in an office?",
"vi": "Vậy bạn có nghĩ làm việc ở nhà tốt hơn làm ở văn phòng không?",
"hint": ""
},
{
"who": 1,
"en": "Personally, I think it's better, because you save time and money on travelling.",
"vi": "Cá nhân tôi nghĩ nó tốt hơn, vì bạn tiết kiệm thời gian và tiền đi lại.",
"hint": "Nêu ý kiến của bạn và một lý do. [personally / better / save time]"
},
{
"who": 0,
"en": "That's a good point, but I feel lonely when I work at home. I miss my colleagues.",
"vi": "Ý hay đấy, nhưng tôi thấy cô đơn khi làm ở nhà. Tôi nhớ đồng nghiệp.",
"hint": ""
},
{
"who": 1,
"en": "I see what you mean. For example, I sometimes feel alone too, but I call my team every day.",
"vi": "Tôi hiểu ý bạn. Ví dụ, đôi khi tôi cũng thấy cô đơn, nhưng ngày nào tôi cũng gọi cho nhóm.",
"hint": "Đồng ý một phần và đưa ví dụ cá nhân. [I see what you mean / for example / call]"
},
{
"who": 0,
"en": "Hmm, but don't you think it's harder to focus at home? There are so many distractions.",
"vi": "Hmm, nhưng bạn không nghĩ ở nhà khó tập trung hơn sao? Có quá nhiều thứ gây xao nhãng.",
"hint": ""
},
{
"who": 1,
"en": "I don't completely agree. I actually concentrate better at home because it's quiet.",
"vi": "Tôi không hoàn toàn đồng ý. Thật ra tôi tập trung tốt hơn ở nhà vì yên tĩnh.",
"hint": "Lịch sự không đồng ý và giải thích. [don't completely agree / concentrate / quiet]"
},
{
"who": 0,
"en": "Fair enough. What about public transport? Would you say it's better than driving to work?",
"vi": "Cũng có lý. Còn phương tiện công cộng thì sao? Bạn có nói nó tốt hơn lái xe đi làm không?",
"hint": ""
},
{
"who": 1,
"en": "In my opinion, yes. The bus is cheaper, and I can read a book on the way.",
"vi": "Theo tôi thì có. Xe buýt rẻ hơn, và tôi có thể đọc sách trên đường.",
"hint": "Nêu ý kiến về phương tiện công cộng kèm lý do. [in my opinion / cheaper / read]"
},
{
"who": 0,
"en": "True, but buses are often late and very crowded in the morning.",
"vi": "Đúng, nhưng xe buýt thường trễ và rất đông vào buổi sáng.",
"hint": ""
},
{
"who": 1,
"en": "You're right about that. On the other hand, driving in traffic is really stressful.",
"vi": "Bạn nói đúng về điều đó. Mặt khác, lái xe trong cảnh kẹt xe thật sự rất căng thẳng.",
"hint": "Đồng ý rồi đưa ra mặt đối lập. [you're right / on the other hand / stressful]"
},
{
"who": 0,
"en": "I agree with that. Maybe the best solution is a mix of both.",
"vi": "Tôi đồng ý. Có lẽ giải pháp tốt nhất là kết hợp cả hai.",
"hint": ""
},
{
"who": 1,
"en": "Exactly. I think we both agree that flexibility is the most important thing.",
"vi": "Đúng vậy. Tôi nghĩ cả hai ta đều đồng ý rằng sự linh hoạt là quan trọng nhất.",
"hint": "Tóm tắt điều hai người đồng ý. [exactly / both agree / flexibility]"
}
],
"notes": [
{
"line": 1,
"vi": "“Personally, I think…” + “because…” là cấu trúc cơ bản: ý kiến trước, lý do ngay sau đó."
},
{
"line": 3,
"vi": "“I see what you mean” cho thấy bạn lắng nghe; thêm “For example” để làm ý cụ thể hơn."
},
{
"line": 5,
"vi": "“I don't completely agree” nhẹ hơn nhiều so với “I disagree”; luôn kèm lý do."
},
{
"line": 9,
"vi": "“On the other hand” giúp nêu mặt đối lập sau khi đã công nhận ý của người kia."
}
]
},
"pron": [
{
"en": "Personally, I think it's better",
"tip": "Nhấn mạnh âm tiết đầu của “personally” (PER-so-nal-ly). Đọc rõ âm cuối /k/ trong “think” và /t/ ở “it's”."
},
{
"en": "I don't completely agree",
"tip": "Nhấn vào “completely” và “agree”. Giọng đi xuống ở cuối câu; đừng bỏ âm /t/ trong “don't”."
},
{
"en": "On the other hand",
"tip": "Nối âm “on-the-other-hand” liền mạch; “the” đọc yếu /ðə/, nhấn vào “other” và “hand”."
},
{
"en": "You're right about that",
"tip": "“You're” đọc yếu /jɔr/, nhấn “right”. Nối “about that” và phát âm rõ /t/ cuối “right”."
}
],
"mistakes": [
{
"x": "I am agree with you.",
"v": "I agree with you.",
"why": "“Agree” là động từ thường, không dùng “am” trước nó như trong tiếng Việt “tôi đồng ý”."
},
{
"x": "In my opinion, working from home it is better.",
"v": "In my opinion, working from home is better.",
"why": "Không lặp chủ ngữ bằng “it”; “working from home” đã là chủ ngữ."
},
{
"x": "I think public transport is more cheap than driving.",
"v": "I think public transport is cheaper than driving.",
"why": "Tính từ ngắn như “cheap” thêm “-er” thay vì dùng “more”."
},
{
"x": "I disagree with you, you are wrong.",
"v": "I don't completely agree. I think there's another side.",
"why": "Nói thẳng “you are wrong” nghe thô lỗ; hãy làm nhẹ bằng “I don't completely agree”."
}
],
"task": {
"scenario": "Your friend says that cities should ban cars from the centre. You have a different opinion. Give your view, explain your reasons with an example, and respond politely to your friend's point.",
"scenario_vi": "Bạn của bạn nói rằng thành phố nên cấm ô tô vào khu trung tâm. Bạn có ý kiến khác. Hãy nêu quan điểm, giải thích bằng lý do và ví dụ, và đáp lại ý của bạn một cách lịch sự.",
"points": [
"Say clearly what you think",
"Give at least one reason",
"Give an example from your own life",
"Agree with one of your friend's points",
"Disagree politely with another point"
],
"seconds": [
40,
90
],
"self": [
"Mình đã nêu ý kiến bằng cụm như “I think” hoặc “In my opinion”.",
"Mình đã đưa ít nhất một lý do với “because”.",
"Mình đã có một ví dụ cụ thể với “for example”.",
"Mình đã công nhận một ý của người kia trước khi phản đối.",
"Mình đã không nói thẳng “you are wrong”."
]
}
},
{
"id": "sp-patient-abroad",
"title": "Mô tả triệu chứng với bác sĩ hoặc dược sĩ khi ở nước ngoài",
"en": "Describing symptoms as a patient abroad",
"lvl": "B1",
"track": "gen",
"register": "neutral",
"when": "Khi bạn bị ốm lúc đi du lịch hoặc du học và cần nói với bác sĩ hay dược sĩ chỗ đau, thời gian đau và thuốc bạn bị dị ứng để được giúp đúng cách.",
"parts": [
{
"name": "Main problem",
"vi": "Nói ngay vấn đề chính và chỗ đau.",
"ex": "I have a sore throat and a headache."
},
{
"name": "Duration",
"vi": "Cho biết triệu chứng bắt đầu từ khi nào và kéo dài bao lâu.",
"ex": "It started three days ago."
},
{
"name": "Better or worse",
"vi": "Nói điều gì làm đỡ hơn hoặc nặng hơn.",
"ex": "It gets worse when I swallow. Warm tea makes it better."
},
{
"name": "Allergies and medicine",
"vi": "Nói về dị ứng thuốc và thuốc bạn đang dùng.",
"ex": "I'm allergic to penicillin. I'm not taking any other medicine."
}
],
"phrases": [
{
"en": "I have a sore throat",
"vi": "Tôi bị đau họng",
"use": "Main problem"
},
{
"en": "It hurts here",
"vi": "Tôi đau ở chỗ này",
"use": "Main problem"
},
{
"en": "It started three days ago",
"vi": "Nó bắt đầu cách đây ba ngày",
"use": "Duration"
},
{
"en": "It gets worse when I swallow",
"vi": "Nó nặng hơn khi tôi nuốt",
"use": "Better or worse"
},
{
"en": "warm tea makes it better",
"vi": "trà ấm làm nó đỡ hơn",
"use": "Better or worse"
},
{
"en": "I'm allergic to penicillin",
"vi": "Tôi bị dị ứng với penicillin",
"use": "Allergies and medicine"
},
{
"en": "I'm not taking any other medicine",
"vi": "Tôi không dùng thuốc nào khác",
"use": "Allergies and medicine"
},
{
"en": "How often should I take it",
"vi": "Tôi nên uống thuốc bao nhiêu lần",
"use": "Allergies and medicine"
},
{
"en": "Could you explain that again",
"vi": "Bạn có thể giải thích lại không",
"use": "Better or worse"
}
],
"model": {
"type": "dialogue",
"roles": [
"Dr Patel",
"You"
],
"lines": [
{
"who": 0,
"en": "Good morning. What seems to be the problem?",
"vi": "Chào buổi sáng. Bạn gặp vấn đề gì vậy?",
"hint": ""
},
{
"who": 1,
"en": "Good morning. I have a sore throat and a headache, and I feel tired.",
"vi": "Chào buổi sáng. Tôi bị đau họng và đau đầu, và thấy mệt.",
"hint": "Chào và nói hai triệu chứng chính. [sore throat / headache / tired]"
},
{
"who": 0,
"en": "I see. When did it start?",
"vi": "Tôi hiểu. Nó bắt đầu khi nào?",
"hint": ""
},
{
"who": 1,
"en": "It started three days ago. It hurts here, on the right side.",
"vi": "Nó bắt đầu cách đây ba ngày. Tôi đau ở đây, bên phải.",
"hint": "Nói thời gian bắt đầu và chỉ chỗ đau. [started / three days / hurts here]"
},
{
"who": 0,
"en": "Is there anything that makes it better or worse?",
"vi": "Có điều gì làm nó đỡ hơn hay nặng hơn không?",
"hint": ""
},
{
"who": 1,
"en": "It gets worse when I swallow, but warm tea makes it better.",
"vi": "Nó nặng hơn khi tôi nuốt, nhưng trà ấm làm nó đỡ hơn.",
"hint": "Nói khi nào nặng hơn và cái gì làm đỡ. [worse / swallow / warm tea]"
},
{
"who": 0,
"en": "Do you have a fever? And are you allergic to any medicines?",
"vi": "Bạn có sốt không? Và bạn có dị ứng với loại thuốc nào không?",
"hint": ""
},
{
"who": 1,
"en": "I'm allergic to penicillin. I'm not taking any other medicine.",
"vi": "Tôi bị dị ứng với penicillin. Tôi không dùng thuốc nào khác.",
"hint": "Nói dị ứng thuốc và việc không dùng thuốc khác. [allergic / penicillin / not taking]"
},
{
"who": 0,
"en": "Thank you for telling me. I'll give you something safe for you. Take one tablet twice a day after food.",
"vi": "Cảm ơn bạn đã cho biết. Tôi sẽ kê loại thuốc an toàn cho bạn. Uống một viên hai lần mỗi ngày sau ăn.",
"hint": ""
},
{
"who": 1,
"en": "Sorry, could you explain that again? How often should I take it?",
"vi": "Xin lỗi, bạn có thể giải thích lại không? Tôi nên uống bao nhiêu lần?",
"hint": "Xin nhắc lại và hỏi số lần uống. [sorry / explain again / how often]"
},
{
"who": 0,
"en": "Of course. Twice a day, morning and evening. Come back if you're not better in three days.",
"vi": "Tất nhiên. Hai lần một ngày, sáng và tối. Hãy quay lại nếu ba ngày nữa vẫn chưa đỡ.",
"hint": ""
}
],
"notes": [
{
"line": 1,
"vi": "Nói triệu chứng chính ngay từ đầu: “I have a…” giúp bác sĩ hiểu nhanh vấn đề."
},
{
"line": 5,
"vi": "“It gets worse when…” và “…makes it better” là mẫu câu rất hữu ích để mô tả diễn biến."
},
{
"line": 7,
"vi": "Luôn nói rõ tên thuốc bị dị ứng; “allergic to” đi với giới từ “to”."
},
{
"line": 9,
"vi": "Nếu chưa nghe rõ, lịch sự hỏi lại bằng “Could you explain that again?” thay vì im lặng."
}
]
},
"pron": [
{
"en": "I have a sore throat",
"tip": "Nối “sore throat” gọn; âm “th” /θ/ đặt đầu lưỡi giữa răng, đừng đọc thành /t/ hay /s/."
},
{
"en": "It started three days ago",
"tip": "Đọc rõ âm cuối /d/ trong “started” (/ɪd/) và âm /s/ cuối “days”; nhấn “three” và “days”."
},
{
"en": "I'm allergic to penicillin",
"tip": "Nhấn âm 2 của “allergic” (a-LER-gic) và âm 3 của “penicillin” (pen-i-CIL-lin)."
},
{
"en": "Could you explain that again?",
"tip": "Giọng lên ở cuối câu hỏi lịch sự; “could you” nối thành /kʊdʒə/."
}
],
"mistakes": [
{
"x": "I have pain in my throat since three days.",
"v": "I've had a sore throat for three days.",
"why": "Với khoảng thời gian dùng “for” và thì hiện tại hoàn thành, không dùng “since three days”."
},
{
"x": "I am allergy to penicillin.",
"v": "I'm allergic to penicillin.",
"why": "“Allergy” là danh từ; sau “be” cần tính từ “allergic”."
},
{
"x": "My stomach is hurting me very much.",
"v": "I have a bad stomach ache.",
"why": "Tiếng Anh tự nhiên nói “I have a stomach ache” hoặc “My stomach hurts”, không nói “hurting me”."
},
{
"x": "I take medicine no.",
"v": "I'm not taking any medicine.",
"why": "Phủ định phải dùng trợ động từ “not” trước động từ, không đặt “no” ở cuối câu."
}
],
"task": {
"scenario": "You are travelling in Canada and you have had a bad stomach ache and diarrhoea since yesterday. You go to a pharmacy and talk to the pharmacist. Describe your problem and answer questions about allergies.",
"scenario_vi": "Bạn đang đi du lịch ở Canada và bị đau bụng, tiêu chảy từ hôm qua. Bạn đến hiệu thuốc nói chuyện với dược sĩ. Hãy mô tả vấn đề và trả lời các câu hỏi về dị ứng.",
"points": [
"Say what the problem is and where it hurts",
"Say when it started",
"Say what makes it better or worse",
"Mention any allergies or medicines",
"Ask how to take the medicine"
],
"seconds": [
40,
90
],
"self": [
"Mình đã nói rõ triệu chứng chính và chỗ đau.",
"Mình đã nói triệu chứng bắt đầu từ khi nào.",
"Mình đã nói điều làm đỡ hơn hoặc nặng hơn.",
"Mình đã nói về dị ứng thuốc.",
"Mình đã hỏi lại khi chưa hiểu cách dùng thuốc."
]
}
},
{
"id": "sp-teamwork",
"title": "Giao tiếp hằng ngày ở nơi làm việc",
"en": "Everyday teamwork: asking for help, offering help, agreeing deadlines",
"lvl": "B1",
"track": "gen",
"register": "neutral",
"when": "Khi bạn làm việc với đồng nghiệp: nhờ giúp đỡ, đề nghị giúp, thống nhất hạn chót và hỏi lại khi chưa hiểu để tránh nhầm lẫn.",
"parts": [
{
"name": "Ask for help",
"vi": "Nhờ đồng nghiệp lịch sự, nói rõ bạn cần gì.",
"ex": "Do you have a minute? Could you help me with this report?"
},
{
"name": "Offer help",
"vi": "Chủ động đề nghị giúp khi thấy người khác bận.",
"ex": "I can help you with the slides if you like."
},
{
"name": "Agree a deadline",
"vi": "Thống nhất ngày giờ cụ thể.",
"ex": "Can you send it by Thursday afternoon?"
},
{
"name": "Check understanding",
"vi": "Hỏi lại hoặc nhắc lại để chắc chắn mình hiểu đúng.",
"ex": "Sorry, could you say that again? So you need it by Thursday, right?"
}
],
"phrases": [
{
"en": "Do you have a minute",
"vi": "Bạn có rảnh một chút không",
"use": "Ask for help"
},
{
"en": "Could you help me with this",
"vi": "Bạn giúp tôi việc này được không",
"use": "Ask for help"
},
{
"en": "I can help you with",
"vi": "Tôi có thể giúp bạn việc",
"use": "Offer help"
},
{
"en": "if you like",
"vi": "nếu bạn muốn",
"use": "Offer help"
},
{
"en": "Can you send it by Thursday",
"vi": "Bạn gửi trước thứ Năm được không",
"use": "Agree a deadline"
},
{
"en": "That works for me",
"vi": "Như vậy được với tôi",
"use": "Agree a deadline"
},
{
"en": "Could you say that again",
"vi": "Bạn có thể nói lại được không",
"use": "Check understanding"
},
{
"en": "So you need it by Thursday, right",
"vi": "Vậy bạn cần nó trước thứ Năm, đúng không",
"use": "Check understanding"
},
{
"en": "Thanks a lot",
"vi": "Cảm ơn bạn nhiều",
"use": "Agree a deadline"
}
],
"model": {
"type": "dialogue",
"roles": [
"Tom",
"You"
],
"lines": [
{
"who": 0,
"en": "Hi, how's it going? You look busy.",
"vi": "Chào, dạo này sao rồi? Trông bạn bận quá.",
"hint": ""
},
{
"who": 1,
"en": "Yes, a bit. Do you have a minute? Could you help me with this sales report?",
"vi": "Vâng, hơi bận. Bạn có rảnh một chút không? Bạn giúp tôi báo cáo bán hàng này được không?",
"hint": "Hỏi xem anh ấy rảnh không và nhờ giúp báo cáo. [do you have a minute / help / report]"
},
{
"who": 0,
"en": "Sure. What's the problem?",
"vi": "Được chứ. Vấn đề là gì?",
"hint": ""
},
{
"who": 1,
"en": "I'm not sure how to make the charts. I can help you with the slides if you like, in exchange.",
"vi": "Tôi không chắc cách làm biểu đồ. Nếu bạn muốn, tôi có thể giúp bạn làm slide để đổi lại.",
"hint": "Nói bạn gặp khó với biểu đồ và đề nghị giúp slide. [charts / help with slides / if you like]"
},
{
"who": 0,
"en": "That would be great. I need to finish my slides by Friday.",
"vi": "Thế thì tuyệt. Tôi cần làm xong slide trước thứ Sáu.",
"hint": ""
},
{
"who": 1,
"en": "OK. Can you show me the charts today, and I'll finish the report by Thursday?",
"vi": "Được. Hôm nay bạn chỉ tôi làm biểu đồ nhé, và tôi sẽ hoàn thành báo cáo trước thứ Năm?",
"hint": "Đề xuất hôm nay học làm biểu đồ và hạn chót thứ Năm. [show me / today / by Thursday]"
},
{
"who": 0,
"en": "Yes, that works for me. But I'm out of the office on Wednesday, so we should do the main part now.",
"vi": "Được, tôi thấy ổn. Nhưng thứ Tư tôi không ở văn phòng, nên chúng ta nên làm phần chính ngay bây giờ.",
"hint": ""
},
{
"who": 1,
"en": "Sorry, could you say that again? So you're away on Wednesday, right?",
"vi": "Xin lỗi, bạn nói lại được không? Vậy thứ Tư bạn vắng mặt, đúng không?",
"hint": "Xin nói lại và xác nhận mình hiểu thứ Tư anh ấy vắng. [say that again / away / Wednesday]"
},
{
"who": 0,
"en": "Exactly. So let's start in ten minutes?",
"vi": "Chính xác. Vậy bắt đầu sau mười phút nhé?",
"hint": ""
},
{
"who": 1,
"en": "Perfect. Thanks a lot, Tom. I'll bring my laptop.",
"vi": "Tuyệt. Cảm ơn nhiều, Tom. Tôi sẽ mang laptop.",
"hint": "Đồng ý, cảm ơn và nói bạn sẽ mang gì. [perfect / thanks / laptop]"
}
],
"notes": [
{
"line": 1,
"vi": "“Do you have a minute?” là cách mở lời lịch sự trước khi nhờ; sau đó dùng “Could you…?”."
},
{
"line": 3,
"vi": "“I can help you with… if you like” là cách đề nghị giúp mềm mại, không ép buộc."
},
{
"line": 5,
"vi": "Nêu ngày giờ cụ thể (“by Thursday”) để tránh hiểu nhầm về hạn chót."
},
{
"line": 7,
"vi": "Khi chưa nghe rõ, hỏi lại rồi nhắc lại thông tin với “So…, right?” để xác nhận."
}
]
},
"pron": [
{
"en": "Do you have a minute?",
"tip": "“Do you” nối thành /dʒə/; nhấn âm đầu của “minute” (MIN-it). Giọng lên cuối câu."
},
{
"en": "Could you say that again?",
"tip": "“Could you” đọc /kʊdʒə/ rất nhanh; nhấn “say” và “again”, giọng lên nhẹ ở cuối."
},
{
"en": "Can you send it by Thursday?",
"tip": "“Thursday” có âm /θ/ ở đầu và âm /z/ ở giữa; đừng bỏ âm /d/ cuối “send”, nối “send it”."
},
{
"en": "That works for me",
"tip": "Nhấn “works” và “me”; “for” đọc yếu /fə/. Đọc rõ âm /s/ cuối “works”."
}
],
"mistakes": [
{
"x": "Can you help me this work?",
"v": "Can you help me with this work?",
"why": "Sau “help someone” khi nói về việc cần giúp thì dùng giới từ “with”."
},
{
"x": "I finish the report until Friday.",
"v": "I'll finish the report by Friday.",
"why": "“By” chỉ hạn chót; “until” chỉ việc kéo dài đến một thời điểm."
},
{
"x": "I no understand. Say again.",
"v": "Sorry, I didn't understand. Could you say that again?",
"why": "Cần câu đầy đủ có trợ động từ và “could you” để lịch sự hơn."
},
{
"x": "I will to help you tomorrow.",
"v": "I'll help you tomorrow.",
"why": "Sau “will” dùng động từ nguyên mẫu không “to”."
}
],
"task": {
"scenario": "You and a colleague are preparing a team meeting for next week. You are behind with your part and need help. Ask your colleague for help, offer something in return, agree a deadline and check you understood.",
"scenario_vi": "Bạn và đồng nghiệp đang chuẩn bị cho cuộc họp nhóm tuần sau. Phần việc của bạn đang chậm và bạn cần giúp đỡ. Hãy nhờ đồng nghiệp, đề nghị giúp lại điều gì đó, thống nhất hạn chót và xác nhận bạn hiểu đúng.",
"points": [
"Ask if your colleague has a minute",
"Explain what you need help with",
"Offer to help with something in return",
"Agree a clear deadline",
"Check understanding by repeating the time or day"
],
"seconds": [
40,
90
],
"self": [
"Mình đã mở lời lịch sự trước khi nhờ giúp.",
"Mình đã nói rõ mình cần giúp việc gì.",
"Mình đã đề nghị giúp lại hoặc cảm ơn.",
"Mình đã thống nhất ngày giờ cụ thể.",
"Mình đã hỏi lại hoặc nhắc lại để xác nhận."
]
}
},
{
"id": "sp-service-complaint",
"title": "Phàn nàn lịch sự về dịch vụ và đề nghị giải pháp",
"en": "Making a polite complaint about a service",
"lvl": "B1",
"track": "gen",
"register": "formal",
"when": "Khi giao hàng trễ, nhận sai đơn hoặc bị làm phiền ở khách sạn, và bạn muốn phàn nàn rõ ràng nhưng lịch sự để được giải quyết.",
"parts": [
{
"name": "State the problem",
"vi": "Nói rõ vấn đề và những gì đã xảy ra.",
"ex": "I'm calling about my order. It was supposed to arrive on Monday, but it hasn't come yet."
},
{
"name": "Express feelings",
"vi": "Bày tỏ sự thất vọng nhưng giữ giọng lịch sự.",
"ex": "I'm afraid I'm quite disappointed, because I needed it for a gift."
},
{
"name": "Ask for a solution",
"vi": "Nêu rõ điều bạn muốn: đổi, hoàn tiền hay giải quyết ngay.",
"ex": "Could you send a new one today? If not, I'd like a refund."
},
{
"name": "Confirm and close",
"vi": "Xác nhận cách giải quyết và cảm ơn.",
"ex": "So you'll send it tomorrow morning. Thank you for your help."
}
],
"phrases": [
{
"en": "I'm calling about",
"vi": "Tôi gọi về việc",
"use": "State the problem"
},
{
"en": "it hasn't come yet",
"vi": "nó vẫn chưa đến",
"use": "State the problem"
},
{
"en": "I'm afraid there's a problem",
"vi": "Tôi e là có vấn đề",
"use": "State the problem"
},
{
"en": "I'm quite disappointed",
"vi": "Tôi khá thất vọng",
"use": "Express feelings"
},
{
"en": "Could you send a new one",
"vi": "Bạn có thể gửi cái mới được không",
"use": "Ask for a solution"
},
{
"en": "I'd like a refund",
"vi": "Tôi muốn được hoàn tiền",
"use": "Ask for a solution"
},
{
"en": "What can you do about it",
"vi": "Bạn có thể làm gì về việc này",
"use": "Ask for a solution"
},
{
"en": "I'd appreciate it if",
"vi": "Tôi sẽ rất biết ơn nếu",
"use": "Ask for a solution"
},
{
"en": "Thank you for your help",
"vi": "Cảm ơn sự giúp đỡ của bạn",
"use": "Confirm and close"
}
],
"model": {
"type": "dialogue",
"roles": [
"Customer service agent",
"You"
],
"lines": [
{
"who": 0,
"en": "Good afternoon, Fastline Delivery. How can I help you?",
"vi": "Chào buổi chiều, Fastline Delivery đây. Tôi có thể giúp gì cho bạn?",
"hint": ""
},
{
"who": 1,
"en": "Hello. I'm calling about my order. I'm afraid there's a problem: it hasn't come yet.",
"vi": "Xin chào. Tôi gọi về đơn hàng của mình. Tôi e là có vấn đề: nó vẫn chưa đến.",
"hint": "Nói bạn gọi về đơn hàng và nó chưa đến. [calling about / order / hasn't come]"
},
{
"who": 0,
"en": "I'm sorry to hear that. Could I have your order number, please?",
"vi": "Tôi rất tiếc khi nghe vậy. Cho tôi xin mã đơn hàng được không?",
"hint": ""
},
{
"who": 1,
"en": "It's 4521. It was supposed to arrive on Monday, and today is Thursday.",
"vi": "Là 4521. Đơn hàng lẽ ra phải đến vào thứ Hai, mà hôm nay đã thứ Năm.",
"hint": "Đọc mã đơn và nói ngày lẽ ra phải đến. [4521 / supposed to / Monday]"
},
{
"who": 0,
"en": "Let me check. Yes, I can see a delay at our warehouse. I apologise for that.",
"vi": "Để tôi kiểm tra. Vâng, tôi thấy có sự chậm trễ ở kho. Tôi xin lỗi về việc đó.",
"hint": ""
},
{
"who": 1,
"en": "I'm quite disappointed, because I needed it for a birthday gift. What can you do about it?",
"vi": "Tôi khá thất vọng, vì tôi cần nó làm quà sinh nhật. Bạn có thể làm gì về việc này?",
"hint": "Nói bạn thất vọng vì cần làm quà và hỏi giải pháp. [disappointed / gift / what can you do]"
},
{
"who": 0,
"en": "I can send a new parcel with express delivery, or I can give you a refund.",
"vi": "Tôi có thể gửi một gói mới bằng giao hàng nhanh, hoặc hoàn tiền cho bạn.",
"hint": ""
},
{
"who": 1,
"en": "I'd appreciate it if you could send a new one tomorrow morning.",
"vi": "Tôi sẽ rất biết ơn nếu bạn có thể gửi cái mới vào sáng mai.",
"hint": "Lịch sự yêu cầu gửi cái mới vào sáng mai. [appreciate / new one / tomorrow morning]"
},
{
"who": 0,
"en": "Of course. I'll arrange express delivery, and it will be free of charge.",
"vi": "Tất nhiên. Tôi sẽ sắp xếp giao nhanh và miễn phí.",
"hint": ""
},
{
"who": 1,
"en": "Thank you for your help. Could you send me a confirmation by email?",
"vi": "Cảm ơn sự giúp đỡ của bạn. Bạn có thể gửi cho tôi xác nhận qua email không?",
"hint": "Cảm ơn và xin email xác nhận. [thank you / confirmation / email]"
}
],
"notes": [
{
"line": 1,
"vi": "“I'm afraid there's a problem” là cách mở đầu mềm mại, lịch sự để báo vấn đề."
},
{
"line": 5,
"vi": "Nói cảm xúc bằng “I'm quite disappointed” rồi hỏi “What can you do about it?” để chuyển sang giải pháp."
},
{
"line": 7,
"vi": "“I'd appreciate it if you could…” lịch sự và trang trọng hơn “Please do…”."
},
{
"line": 3,
"vi": "“Was supposed to” diễn tả điều lẽ ra phải xảy ra theo kế hoạch nhưng đã không xảy ra."
}
]
},
"pron": [
{
"en": "I'm calling about my order",
"tip": "Nhấn “calling” và “order”; nối “about my” gọn. Đọc rõ âm /r/ trong “order” (kết thúc bằng /ər/)."
},
{
"en": "I'm quite disappointed",
"tip": "Nhấn âm 3 của “disappointed” (dis-ap-POINT-ed); âm cuối /ɪd/. Giọng đi xuống để nghe bình tĩnh, lịch sự."
},
{
"en": "What can you do about it?",
"tip": "Nối “can you” thành /kənjə/; nhấn “do”; giọng đi xuống ở cuối câu hỏi Wh."
},
{
"en": "I'd appreciate it if you could",
"tip": "“I'd” đọc rõ /aɪd/, nhấn “appreciate” (a-PREE-shi-ate); âm /ʃ/ như trong “she”."
}
],
"mistakes": [
{
"x": "My order is not coming yet.",
"v": "My order hasn't arrived yet.",
"why": "Dùng hiện tại hoàn thành với “yet”, không dùng “is not coming” cho sự việc đã chậm."
},
{
"x": "You must give me money back now.",
"v": "I'd like a refund, please.",
"why": "“You must” nghe ra lệnh, thô lỗ; dùng “I'd like…” để lịch sự hơn."
},
{
"x": "I very disappointed about your service.",
"v": "I'm very disappointed with your service.",
"why": "Thiếu động từ “be”, và “disappointed” đi với giới từ “with”."
},
{
"x": "The room next to me is make noise.",
"v": "The room next to mine is very noisy.",
"why": "Không dùng “is make”; dùng tính từ “noisy” hoặc “is making noise”."
}
],
"task": {
"scenario": "You are staying at a hotel. The guests in the next room are very loud every night and you cannot sleep. You go to reception to complain. Explain the problem, say how you feel and ask for a solution.",
"scenario_vi": "Bạn đang ở khách sạn. Khách phòng bên cạnh ồn ào mỗi đêm và bạn không ngủ được. Bạn xuống quầy lễ tân để phàn nàn. Hãy nêu vấn đề, nói cảm giác của bạn và đề nghị giải pháp.",
"points": [
"Say who you are and which room you are in",
"Explain the problem clearly",
"Say how it affects you politely",
"Ask for a solution, such as changing rooms",
"Thank the receptionist"
],
"seconds": [
40,
90
],
"self": [
"Mình đã mở đầu lịch sự với “I'm afraid…” hoặc “Excuse me”.",
"Mình đã nói rõ vấn đề và thời gian xảy ra.",
"Mình đã bày tỏ sự thất vọng mà không nặng lời.",
"Mình đã nêu giải pháp cụ thể mình muốn.",
"Mình đã cảm ơn ở cuối."
]
}
},
{
"id": "sp-presentation",
"title": "Thuyết trình ngắn hai phút",
"en": "Giving a short two-minute presentation",
"lvl": "B2",
"track": "gen",
"register": "neutral",
"when": "Khi bạn phải trình bày ngắn trước lớp hoặc nhóm: mở đầu, nêu dàn ý, đưa các ý chính kèm ví dụ, kết luận và mời người nghe đặt câu hỏi.",
"parts": [
{
"name": "Opening",
"vi": "Chào, giới thiệu chủ đề và thu hút sự chú ý.",
"ex": "Good morning, everyone. Today I'd like to talk about why our cities need more green spaces."
},
{
"name": "Outline",
"vi": "Cho người nghe biết bài nói gồm những phần nào.",
"ex": "I'll cover three points: health, climate and community."
},
{
"name": "Main points",
"vi": "Trình bày từng ý chính, kèm ví dụ và dùng từ nối chuyển ý.",
"ex": "Let me start with health. For instance, studies show that people who live near parks feel less stressed."
},
{
"name": "Conclusion",
"vi": "Tóm tắt ý chính và kết thúc rõ ràng.",
"ex": "To sum up, green spaces make cities healthier, cooler and friendlier."
},
{
"name": "Invite questions",
"vi": "Mời khán giả đặt câu hỏi và cảm ơn.",
"ex": "Thank you for listening. I'd be happy to take any questions."
}
],
"phrases": [
{
"en": "I'd like to talk about",
"vi": "Tôi muốn nói về",
"use": "Opening"
},
{
"en": "I'll cover three points",
"vi": "Tôi sẽ trình bày ba ý",
"use": "Outline"
},
{
"en": "Let me start with",
"vi": "Để tôi bắt đầu với",
"use": "Main points"
},
{
"en": "For instance",
"vi": "Chẳng hạn như",
"use": "Main points"
},
{
"en": "Moving on to",
"vi": "Chuyển sang phần",
"use": "Main points"
},
{
"en": "Another key point is",
"vi": "Một điểm quan trọng khác là",
"use": "Main points"
},
{
"en": "To sum up",
"vi": "Tóm lại",
"use": "Conclusion"
},
{
"en": "Thank you for listening",
"vi": "Cảm ơn mọi người đã lắng nghe",
"use": "Invite questions"
},
{
"en": "I'd be happy to take any questions",
"vi": "Tôi sẵn lòng trả lời mọi câu hỏi",
"use": "Invite questions"
}
],
"model": {
"type": "monologue",
"roles": [
"Audience",
"You"
],
"lines": [
{
"who": 1,
"en": "Good morning, everyone. Today I'd like to talk about why our cities need more green spaces.",
"vi": "Chào buổi sáng mọi người. Hôm nay tôi muốn nói về lý do các thành phố cần nhiều không gian xanh hơn.",
"hint": "Chào, giới thiệu chủ đề bài nói. [good morning / talk about / green spaces]"
},
{
"who": 1,
"en": "I'll cover three points: the benefits for health, the effect on the climate, and the role of the local community.",
"vi": "Tôi sẽ trình bày ba ý: lợi ích cho sức khỏe, tác động đến khí hậu và vai trò của cộng đồng địa phương.",
"hint": "Nêu dàn ý ba phần. [cover three points / health / climate / community]"
},
{
"who": 1,
"en": "Let me start with health. For instance, studies show that people who live near parks feel less stressed and exercise more.",
"vi": "Để tôi bắt đầu với sức khỏe. Chẳng hạn, các nghiên cứu cho thấy người sống gần công viên ít căng thẳng hơn và tập thể dục nhiều hơn.",
"hint": "Bắt đầu ý thứ nhất, đưa ví dụ về công viên. [let me start / for instance / less stressed]"
},
{
"who": 1,
"en": "This is important, because stress is one of the main causes of illness in big cities.",
"vi": "Điều này quan trọng, vì căng thẳng là một trong những nguyên nhân chính gây bệnh ở các thành phố lớn.",
"hint": "Giải thích vì sao ý này quan trọng. [important / stress / illness]"
},
{
"who": 1,
"en": "Moving on to the climate. Trees can reduce the temperature in a street by several degrees, which makes summers much more bearable.",
"vi": "Chuyển sang khí hậu. Cây xanh có thể làm nhiệt độ một con phố giảm vài độ, khiến mùa hè dễ chịu hơn nhiều.",
"hint": "Chuyển ý sang khí hậu và nói về tác dụng của cây. [moving on / trees / temperature]"
},
{
"who": 1,
"en": "Another key point is the community. A shared garden gives neighbours a place to meet, and that builds trust.",
"vi": "Một điểm quan trọng khác là cộng đồng. Một khu vườn chung cho hàng xóm nơi gặp gỡ, và điều đó xây dựng lòng tin.",
"hint": "Nêu ý thứ ba về cộng đồng và khu vườn chung. [another key point / garden / neighbours]"
},
{
"who": 1,
"en": "To sum up, green spaces make cities healthier, cooler and friendlier, so they deserve more investment.",
"vi": "Tóm lại, không gian xanh làm thành phố khỏe mạnh, mát mẻ và thân thiện hơn, nên chúng xứng đáng được đầu tư nhiều hơn.",
"hint": "Tóm tắt ba ý và nêu kết luận. [to sum up / healthier / investment]"
},
{
"who": 1,
"en": "Thank you for listening. I'd be happy to take any questions.",
"vi": "Cảm ơn mọi người đã lắng nghe. Tôi sẵn lòng trả lời mọi câu hỏi.",
"hint": "Cảm ơn và mời hỏi. [thank you / happy / questions]"
}
],
"notes": [
{
"line": 1,
"vi": "Dàn ý ngay từ đầu giúp khán giả theo dõi; dùng số lượng rõ ràng như “three points”."
},
{
"line": 2,
"vi": "“Let me start with…” kết hợp “For instance” là cách chuyển vào ý chính và đưa ví dụ tự nhiên."
},
{
"line": 4,
"vi": "“Moving on to…” và “Another key point is…” là các từ báo hiệu (signposting) giúp người nghe biết bạn đang chuyển ý."
},
{
"line": 6,
"vi": "“To sum up” báo hiệu phần kết; nhắc lại ba ý chính trong một câu."
}
]
},
"pron": [
{
"en": "I'll cover three points",
"tip": "Nhấn “cover” và “three”; âm /θ/ của “three” đặt lưỡi giữa răng. Đọc rõ âm /s/ cuối “points”."
},
{
"en": "Let me start with health",
"tip": "Ngắt nhẹ sau “health”. Âm cuối /θ/ của “health” đặt lưỡi giữa răng; nhiều người Việt bỏ âm này."
},
{
"en": "Moving on to the climate",
"tip": "Nhấn “climate” (CLI-mate), âm /aɪ/ dài. Giọng xuống nhẹ và dừng ngắn trước khi chuyển ý để người nghe kịp theo."
},
{
"en": "To sum up, green spaces make cities healthier",
"tip": "Dừng sau “up” bằng giọng xuống; ngắt theo cụm ý. Đọc rõ âm /s/ cuối “spaces” (/ɪz/) và “cities” (/z/)."
}
],
"mistakes": [
{
"x": "Today I will talk about to you the green spaces.",
"v": "Today I'd like to talk about green spaces.",
"why": "“Talk about” không đi với “to you” chen giữa theo cách này; chủ đề đặt thẳng sau “about”, thường không cần “the”."
},
{
"x": "There are three point in my presentation.",
"v": "There are three points in my presentation.",
"why": "Sau số lượng lớn hơn một, danh từ phải ở dạng số nhiều: “points”."
},
{
"x": "Firstly, I want to tell you about the health. Secondly, about the climate.",
"v": "Firstly, I want to talk about health. Secondly, I'll talk about the climate.",
"why": "Danh từ chung như “health” không cần “the”, và mỗi ý nên là một câu đầy đủ."
},
{
"x": "That is all. Do you have any question?",
"v": "That's all from me. Do you have any questions?",
"why": "“Any” thường đi với danh từ số nhiều “questions”; “That is all” một mình nghe cộc lốc."
}
],
"task": {
"scenario": "You have two minutes to give a short presentation to your class on 'Why students should learn a second language'. Use a clear opening, an outline, two or three main points with examples, a conclusion and an invitation for questions.",
"scenario_vi": "Bạn có hai phút để thuyết trình ngắn trước lớp với chủ đề “Vì sao sinh viên nên học ngoại ngữ thứ hai”. Hãy có mở đầu, dàn ý, hai hoặc ba ý chính kèm ví dụ, kết luận và lời mời đặt câu hỏi.",
"points": [
"Open and introduce the topic",
"Give an outline of your points",
"Develop two or three main points with an example each",
"Use signposting words to move between points",
"Conclude and invite questions"
],
"seconds": [
90,
150
],
"self": [
"Mình đã mở đầu và nêu rõ chủ đề.",
"Mình đã nêu dàn ý trước khi vào ý chính.",
"Mình đã có ví dụ cho mỗi ý chính.",
"Mình đã dùng từ báo hiệu như “Moving on to…” để chuyển ý.",
"Mình đã tóm tắt và mời mọi người đặt câu hỏi.",
"Mình nói chậm, rõ và ngắt nghỉ đúng chỗ."
]
}
},
{
"id": "sp-discussion",
"title": "Tham gia thảo luận nhóm",
"en": "Joining a group discussion",
"lvl": "B2",
"track": "gen",
"register": "neutral",
"when": "Khi thảo luận nhóm ở lớp hoặc cuộc họp: bạn cần giành lượt nói, ngắt lời lịch sự, phát triển ý người khác, phản biện và tóm tắt.",
"parts": [
{
"name": "Take a turn",
"vi": "Xin lượt nói hoặc đưa ý kiến đầu tiên một cách tự nhiên.",
"ex": "If I could just say something here, I think a four-day week could work."
},
{
"name": "Interrupt politely",
"vi": "Ngắt lời nhẹ nhàng khi cần bổ sung hay làm rõ.",
"ex": "Sorry to interrupt, but could I add something?"
},
{
"name": "Build on ideas",
"vi": "Nối tiếp và phát triển ý của người khác.",
"ex": "Building on what Lena said, shorter weeks might also reduce sick leave."
},
{
"name": "Disagree",
"vi": "Phản biện có lý lẽ nhưng vẫn tôn trọng.",
"ex": "I see your point, but I'm not convinced it would work for every industry."
},
{
"name": "Summarise",
"vi": "Tóm tắt các ý đã thống nhất để kết thúc.",
"ex": "So, to sum up, we agree it's promising, but needs a trial."
}
],
"phrases": [
{
"en": "If I could just say something",
"vi": "Cho phép tôi nói đôi lời",
"use": "Take a turn"
},
{
"en": "Sorry to interrupt, but",
"vi": "Xin lỗi vì ngắt lời, nhưng",
"use": "Interrupt politely"
},
{
"en": "Could I add something",
"vi": "Tôi có thể bổ sung một điều không",
"use": "Interrupt politely"
},
{
"en": "Building on what Lena said",
"vi": "Phát triển từ điều Lena nói",
"use": "Build on ideas"
},
{
"en": "That's a good point",
"vi": "Ý hay đấy",
"use": "Build on ideas"
},
{
"en": "I see your point, but",
"vi": "Tôi hiểu ý bạn, nhưng",
"use": "Disagree"
},
{
"en": "I'm not convinced that",
"vi": "Tôi chưa bị thuyết phục rằng",
"use": "Disagree"
},
{
"en": "To sum up",
"vi": "Tóm lại",
"use": "Summarise"
},
{
"en": "That's fair",
"vi": "Cũng hợp lý",
"use": "Disagree"
}
],
"model": {
"type": "dialogue",
"roles": [
"Sam and Lena",
"You"
],
"lines": [
{
"who": 0,
"en": "Our topic today is the four-day working week. Sam, would you like to start?",
"vi": "Chủ đề hôm nay là tuần làm việc bốn ngày. Sam, bạn bắt đầu nhé?",
"hint": ""
},
{
"who": 1,
"en": "If I could just say something here, I think a four-day week could work. People would be more focused and less tired.",
"vi": "Cho phép tôi nói đôi lời, tôi nghĩ tuần làm việc bốn ngày có thể hiệu quả. Mọi người sẽ tập trung và ít mệt mỏi hơn.",
"hint": "Xin lượt nói và nêu ý kiến ủng hộ kèm lý do. [if I could just say / could work / focused]"
},
{
"who": 0,
"en": "Hmm, in theory yes, but a lot of companies need staff five days a week. Customers expect service, and they get annoyed if we are closed.",
"vi": "Hmm, về lý thuyết thì đúng, nhưng nhiều công ty cần nhân viên cả năm ngày. Khách hàng mong có dịch vụ, và họ khó chịu nếu chúng ta đóng cửa.",
"hint": ""
},
{
"who": 1,
"en": "Sorry to interrupt, but could I add something? Some companies already offer longer days instead, so the total hours stay the same.",
"vi": "Xin lỗi vì ngắt lời, nhưng tôi có thể bổ sung không? Một số công ty đã cho làm ngày dài hơn, nên tổng số giờ vẫn như cũ.",
"hint": "Ngắt lời lịch sự và bổ sung một giải pháp. [sorry to interrupt / add / longer days]"
},
{
"who": 0,
"en": "That's a good point. Building on that, shorter weeks might reduce sick leave too. I've read that people take fewer days off.",
"vi": "Ý hay đấy. Tiếp nối ý đó, tuần ngắn hơn cũng có thể giảm nghỉ ốm. Tôi đọc thấy người ta nghỉ ít ngày hơn.",
"hint": ""
},
{
"who": 1,
"en": "Building on what Lena said, that would save money in the long run, which could balance higher costs for employers.",
"vi": "Tiếp nối điều Lena nói, điều đó sẽ tiết kiệm tiền về lâu dài, có thể bù lại chi phí cao hơn cho chủ doanh nghiệp.",
"hint": "Phát triển ý của Lena về chi phí. [building on / save money / employers]"
},
{
"who": 0,
"en": "But what about hospitals or shops? They can't simply close on Fridays. Surely this only works in offices?",
"vi": "Nhưng còn bệnh viện hay cửa hàng thì sao? Họ không thể nghỉ thứ Sáu. Chắc chỉ áp dụng được ở văn phòng?",
"hint": ""
},
{
"who": 1,
"en": "I see your point, but I'm not convinced it's only for offices. They could use shifts, so staff still work four days each.",
"vi": "Tôi hiểu ý bạn, nhưng tôi chưa tin là chỉ dành cho văn phòng. Họ có thể chia ca, nên mỗi người vẫn làm bốn ngày.",
"hint": "Phản biện lịch sự và đề xuất làm theo ca. [I see your point / not convinced / shifts]"
},
{
"who": 0,
"en": "That's fair. We're nearly out of time. Could someone summarise?",
"vi": "Cũng hợp lý. Chúng ta sắp hết giờ. Ai tóm tắt giúp được không?",
"hint": ""
},
{
"who": 1,
"en": "Sure. To sum up, we agree a four-day week is promising, but we need a trial first, especially in service jobs.",
"vi": "Được. Tóm lại, chúng ta đồng ý tuần bốn ngày đầy hứa hẹn, nhưng cần chạy thử trước, nhất là ở ngành dịch vụ.",
"hint": "Tóm tắt điều nhóm đã thống nhất. [to sum up / promising / trial]"
}
],
"notes": [
{
"line": 1,
"vi": "“If I could just say something” là cách xin lượt rất mềm; sau đó nêu ngay ý chính để giữ lượt."
},
{
"line": 3,
"vi": "Ngắt lời đúng lúc nhưng lịch sự: “Sorry to interrupt, but…” rồi chỉ nói điều ngắn và liên quan."
},
{
"line": 7,
"vi": "“I see your point, but I'm not convinced…” công nhận ý đối phương rồi phản biện với lý lẽ."
},
{
"line": 9,
"vi": "Khi tóm tắt, dùng “To sum up” và nhắc cả điều thống nhất lẫn điều còn cần làm."
}
]
},
"pron": [
{
"en": "Sorry to interrupt, but",
"tip": "Nhấn “inter-RUPT” ở âm cuối; giọng lên nhẹ ở “but” để người kia nhường lời. Đọc rõ /t/ cuối “interrupt”."
},
{
"en": "I'm not convinced it's only for offices",
"tip": "Nhấn “convinced” (con-VINCED); âm cuối /st/ trong “convinced” và “offices” (/ɪz/) rất hay bị bỏ — hãy đọc rõ."
},
{
"en": "Building on what Lena said",
"tip": "Nối “building on” thành /ˈbɪldɪŋɒn/; nhấn “Building” và “said”; “what” đọc yếu."
},
{
"en": "To sum up, we agree it's promising",
"tip": "Ngắt giọng sau “up”; nhấn “agree” và “PROM-is-ing”. Âm /r/ trong “promising” đọc rõ."
}
],
"mistakes": [
{
"x": "I am not agree with you.",
"v": "I'm not sure I agree with you.",
"why": "“Agree” là động từ thường nên không dùng “am” trước nó; nói “I'm not sure I agree” nghe lịch sự hơn."
},
{
"x": "Stop! I want to speak now.",
"v": "Sorry to interrupt, but could I say something?",
"why": "Ngắt lời trực tiếp bằng mệnh lệnh nghe thô; cần dùng cụm xin lỗi và câu hỏi lịch sự."
},
{
"x": "I am agree with Lena opinion.",
"v": "I agree with Lena's opinion.",
"why": "Không dùng “am” trước “agree”, và sở hữu cần “'s” (Lena's opinion)."
},
{
"x": "In conclusion, we discuss many things.",
"v": "To sum up, we've discussed several things.",
"why": "Dùng thì hiện tại hoàn thành để tóm tắt điều đã bàn, và “discuss” cần chia “discussed”."
}
],
"task": {
"scenario": "You are in a group discussion about whether universities should offer more online courses. Join in: share your opinion, politely interrupt once, build on someone's idea, disagree with a point, and summarise at the end.",
"scenario_vi": "Bạn đang tham gia nhóm thảo luận về việc các trường đại học có nên mở nhiều khóa học trực tuyến hơn không. Hãy tham gia: nêu ý kiến, ngắt lời lịch sự một lần, phát triển ý của người khác, phản biện một ý và tóm tắt ở cuối.",
"points": [
"Take a turn and give your opinion with a reason",
"Interrupt politely to add something",
"Build on another person's idea",
"Disagree with one point respectfully",
"Summarise what the group agreed"
],
"seconds": [
60,
120
],
"self": [
"Mình đã xin lượt nói lịch sự và nêu ý kiến rõ.",
"Mình đã ngắt lời bằng cụm xin lỗi và nói ngắn gọn.",
"Mình đã nhắc ý của người khác trước khi nói thêm.",
"Mình đã phản biện có lý do mà không gay gắt.",
"Mình đã tóm tắt điều nhóm thống nhất bằng “To sum up”."
]
}
},
{
"id": "sp-negotiate",
"title": "Thương lượng và từ chối lịch sự",
"en": "Negotiating and politely refusing",
"lvl": "B2",
"track": "gen",
"register": "neutral",
"when": "Khi sếp hoặc đồng nghiệp yêu cầu dời hạn chót, giao thêm việc mà bạn không nhận nổi. Mục tiêu là giữ quan hệ tốt, nói rõ giới hạn và đưa ra phương án thỏa hiệp.",
"parts": [
{
"name": "Acknowledging",
"vi": "Ghi nhận yêu cầu và lý do của đối phương trước khi nói không, để họ thấy bạn không phản đối vô cớ.",
"ex": "I understand why that's important, but I'm afraid Wednesday is very tight."
},
{
"name": "Giving a reason",
"vi": "Nêu lý do cụ thể, ngắn gọn và khách quan thay vì chỉ nói “không thể”.",
"ex": "I'm still waiting for the sales figures, and I already have three projects this week."
},
{
"name": "Declining politely",
"vi": "Từ chối nhẹ nhàng bằng cách mở đầu mềm, rồi nói rõ điều bạn không làm được.",
"ex": "I'd love to help, but I can't take on the audit right now."
},
{
"name": "Proposing a compromise",
"vi": "Đưa ra phương án giữa chừng và hỏi xem đối phương có chấp nhận không.",
"ex": "How about this: I could send you a draft on Wednesday. Would that work for you?"
},
{
"name": "Confirming",
"vi": "Chốt lại thỏa thuận bằng lời và hứa gửi email xác nhận.",
"ex": "Let's go with that. I'll write it up this afternoon, and thanks for being flexible."
}
],
"phrases": [
{
"en": "I understand why that's important",
"vi": "Tôi hiểu vì sao việc đó quan trọng",
"use": "Acknowledging"
},
{
"en": "I'm afraid Wednesday is very tight",
"vi": "Tôi e là thứ Tư thì quá gấp",
"use": "Acknowledging"
},
{
"en": "I'd love to help, but",
"vi": "Tôi rất muốn giúp, nhưng…",
"use": "Declining politely"
},
{
"en": "I can't take on the audit",
"vi": "Tôi không thể nhận thêm việc kiểm toán",
"use": "Declining politely"
},
{
"en": "I'm still waiting for the sales figures",
"vi": "Tôi vẫn đang chờ số liệu bán hàng",
"use": "Giving a reason"
},
{
"en": "How about this",
"vi": "Hay là thế này nhé",
"use": "Proposing a compromise"
},
{
"en": "I could send you a draft",
"vi": "Tôi có thể gửi anh/chị bản nháp",
"use": "Proposing a compromise"
},
{
"en": "Would that work for you?",
"vi": "Như vậy anh/chị thấy có ổn không?",
"use": "Proposing a compromise"
},
{
"en": "Perhaps ... could do it",
"vi": "Hay là… có thể làm việc đó",
"use": "Proposing a compromise"
},
{
"en": "Let's go with that",
"vi": "Vậy mình chọn phương án đó",
"use": "Confirming"
}
],
"model": {
"type": "dialogue",
"roles": [
"Helen (manager)",
"Minh (analyst)"
],
"lines": [
{
"who": 0,
"en": "Hi Minh, thanks for coming in. I wanted to ask whether you could finish the client report by Wednesday instead of Friday.",
"vi": "Chào Minh, cảm ơn em đã qua. Chị muốn hỏi em có thể xong báo cáo cho khách vào thứ Tư thay vì thứ Sáu được không.",
"hint": ""
},
{
"who": 1,
"en": "I understand why that's important, but I'm afraid Wednesday is very tight, because I'm still waiting for the sales figures.",
"vi": "Em hiểu vì sao việc đó quan trọng, nhưng em e là thứ Tư rất gấp vì em vẫn đang chờ số liệu bán hàng.",
"hint": "Nói bạn hiểu việc quan trọng nhưng thứ Tư quá gấp vì chưa có số liệu. [understand / important / tight / sales figures]"
},
{
"who": 0,
"en": "Hmm. The client moved their meeting forward, so we don't have much choice. Could you take on the supplier audit as well?",
"vi": "Ừm. Khách dời cuộc họp sớm hơn nên mình không có nhiều lựa chọn. Em có thể nhận thêm việc kiểm toán nhà cung cấp luôn không?",
"hint": ""
},
{
"who": 1,
"en": "I'd love to help, but I can't take on the audit right now. I already have three projects with deadlines this week.",
"vi": "Em rất muốn giúp, nhưng lúc này em không nhận thêm việc kiểm toán được. Tuần này em đã có ba dự án đến hạn rồi.",
"hint": "Từ chối nhẹ nhàng việc kiểm toán và nêu lý do đang có ba dự án. [love to help / can't take on / three projects]"
},
{
"who": 0,
"en": "I see. So what do you suggest?",
"vi": "Chị hiểu rồi. Vậy em đề xuất gì?",
"hint": ""
},
{
"who": 1,
"en": "How about this: I could send you a draft on Wednesday and the final version on Thursday morning. Would that work for you?",
"vi": "Hay là thế này: em gửi chị bản nháp vào thứ Tư và bản cuối vào sáng thứ Năm. Chị thấy có ổn không?",
"hint": "Đề xuất gửi bản nháp thứ Tư, bản cuối sáng thứ Năm, rồi hỏi sếp có ổn không. [how about / draft / final version / work for you]"
},
{
"who": 0,
"en": "A draft on Wednesday... that might be enough for the meeting. But who would do the audit?",
"vi": "Bản nháp thứ Tư… có thể đủ cho cuộc họp. Nhưng ai sẽ làm kiểm toán đây?",
"hint": ""
},
{
"who": 1,
"en": "Perhaps Linh could do it? If she's free, I'd be happy to brief her for half an hour so she can get started.",
"vi": "Hay là Linh làm được? Nếu cô ấy rảnh, em sẵn lòng hướng dẫn cô ấy nửa tiếng để bắt đầu.",
"hint": "Gợi ý Linh làm và đề nghị hướng dẫn cô ấy nửa tiếng. [perhaps / Linh / brief / get started]"
},
{
"who": 0,
"en": "That sounds reasonable. Let's go with that. Can you confirm it by email?",
"vi": "Nghe hợp lý đấy. Vậy mình làm thế. Em xác nhận qua email được không?",
"hint": ""
},
{
"who": 1,
"en": "Of course. I'll write it up this afternoon, and thanks for being flexible.",
"vi": "Dĩ nhiên ạ. Chiều nay em sẽ viết email, và cảm ơn chị đã linh hoạt.",
"hint": "Đồng ý gửi email chiều nay và cảm ơn sếp đã linh hoạt. [of course / write up / flexible]"
}
],
"notes": [
{
"line": 1,
"vi": "“I'm afraid” làm câu từ chối mềm hơn nhiều; “I understand… but” thể hiện bạn đã nghe đối phương trước."
},
{
"line": 3,
"vi": "“I'd love to help, but…” rồi mới nói “can't”: lời từ chối đi kèm thiện chí và lý do cụ thể."
},
{
"line": 5,
"vi": "“How about this” + câu hỏi “Would that work?” biến lời từ chối thành thương lượng chứ không phải đối đầu."
},
{
"line": 7,
"vi": "Đề xuất người thay thế và hỗ trợ một phần cho thấy bạn vẫn hợp tác dù không nhận việc."
}
]
},
"pron": [
{
"en": "I'm afraid Wednesday is very tight",
"tip": "Nhấn “afraid” và “tight”; giọng đi xuống ở cuối câu. Đọc rõ âm /t/ cuối “tight”, đừng nuốt âm."
},
{
"en": "Would that work for you?",
"tip": "Nối “would that” thành /wʊdðət/, “work for” nối nhẹ; giọng lên ở cuối vì là câu hỏi yes/no."
},
{
"en": "I can't take on the audit",
"tip": "“can't” đọc rõ /kɑːnt/ và nhấn mạnh hơn “can” để người nghe không nhầm là khẳng định; nối “take on”."
},
{
"en": "Let's go with that",
"tip": "Đọc rõ âm /s/ cuối “let's” và /t/ cuối “that”; nối “go with” cho tự nhiên."
}
],
"mistakes": [
{
"x": "I can not do this work because I am busy.",
"v": "I'm afraid I can't take this on right now because I already have a lot on.",
"why": "Nói “can not do” và “busy” quá cộc; cần mở đầu mềm và nêu lý do cụ thể hơn."
},
{
"x": "Wednesday is impossible for me, you must change the deadline.",
"v": "I'm afraid Wednesday is very tight. Could we look at Thursday?",
"why": "“must” và “impossible” nghe như ra lệnh; nên dùng “I'm afraid” và đề xuất lựa chọn."
},
{
"x": "I will to send you the draft on Wednesday.",
"v": "I could send you the draft on Wednesday.",
"why": "Sau “will/could” dùng động từ nguyên mẫu không “to”; “could” cũng mềm hơn khi đề xuất."
},
{
"x": "It is depend on the sales figures.",
"v": "It depends on the sales figures.",
"why": "“depend” là động từ thường, không đi với “is”; ngôi thứ ba cần “depends”."
}
],
"task": {
"scenario": "Your team leader asks you to present at next week's staff meeting and to organise the office party. You already have a heavy workload. Politely refuse one request, accept the other with a condition and propose a compromise.",
"scenario_vi": "Trưởng nhóm nhờ bạn thuyết trình ở buổi họp nhân viên tuần sau và còn tổ chức tiệc văn phòng. Bạn đang rất bận. Hãy từ chối lịch sự một việc, nhận việc kia kèm điều kiện và đề xuất phương án thỏa hiệp.",
"points": [
"Acknowledge why the request matters",
"Decline one task politely and give a reason",
"Accept the other task with a clear condition",
"Propose a compromise and check it with Would that work for you?",
"Confirm the agreement"
],
"seconds": [
45,
90
],
"self": [
"Mình đã ghi nhận yêu cầu của đối phương trước khi từ chối.",
"Mình dùng cách nói mềm như “I'm afraid” hoặc “I'd love to, but”.",
"Mình nêu lý do cụ thể, không chỉ nói “no”.",
"Mình đưa ra một phương án thỏa hiệp và hỏi ý kiến đối phương.",
"Mình chốt lại thỏa thuận ở cuối.",
"Giọng mình đi xuống ở câu khẳng định và đi lên ở câu hỏi."
]
}
},
{
"id": "sp-handover",
"title": "Bàn giao ca điều dưỡng theo SBAR",
"en": "Clinical handover using SBAR",
"lvl": "B2",
"track": "med",
"register": "neutral",
"when": "Khi bạn hết ca và phải bàn giao bệnh nhân cho điều dưỡng ca sau. Mục tiêu là nói ngắn, đủ và theo thứ tự S-B-A-R, rồi trả lời câu hỏi của người nhận.",
"parts": [
{
"name": "Situation",
"vi": "Nói ngay bệnh nhân là ai, ở giường nào và vấn đề hiện tại là gì.",
"ex": "I'm handing over Mr Tom Hale in bed 12. The situation is that his oxygen saturation dropped to 90 percent."
},
{
"name": "Background",
"vi": "Nêu lý do nhập viện, bệnh nền, dị ứng và điều trị đang dùng.",
"ex": "Background: he was admitted two days ago with pneumonia. He's allergic to penicillin."
},
{
"name": "Assessment",
"vi": "Mô tả tình trạng hiện tại: sinh hiệu, can thiệp đã làm và kết quả.",
"ex": "His saturation is now 94 percent on two litres of oxygen."
},
{
"name": "Recommendation",
"vi": "Nói rõ người nhận cần làm gì, khi nào và khi nào phải báo bác sĩ.",
"ex": "Please repeat his observations every hour. I'd escalate if his saturation falls below 92."
},
{
"name": "Questions",
"vi": "Mời đặt câu hỏi và kết thúc bàn giao rõ ràng.",
"ex": "Any other questions? Otherwise, he's all yours."
}
],
"phrases": [
{
"en": "I'm handing over",
"vi": "Tôi đang bàn giao…",
"use": "Situation"
},
{
"en": "The situation is that",
"vi": "Tình huống là…",
"use": "Situation"
},
{
"en": "Background: he was admitted",
"vi": "Bệnh cảnh: anh ấy nhập viện…",
"use": "Background"
},
{
"en": "He's allergic to penicillin",
"vi": "Anh ấy dị ứng penicillin",
"use": "Background"
},
{
"en": "His saturation is now",
"vi": "Hiện độ bão hòa oxy của anh ấy là…",
"use": "Assessment"
},
{
"en": "Please repeat his observations",
"vi": "Xin hãy đo lại sinh hiệu của anh ấy",
"use": "Recommendation"
},
{
"en": "Ask the doctor to review him",
"vi": "Nhờ bác sĩ đến đánh giá lại anh ấy",
"use": "Recommendation"
},
{
"en": "I'd escalate if",
"vi": "Tôi sẽ báo cấp trên/bác sĩ nếu…",
"use": "Recommendation"
},
{
"en": "Any other questions?",
"vi": "Bạn còn câu hỏi nào khác không?",
"use": "Questions"
},
{
"en": "He's all yours",
"vi": "Giờ bệnh nhân giao lại cho bạn",
"use": "Questions"
}
],
"model": {
"type": "dialogue",
"roles": [
"Anna (receiving nurse)",
"Sara (outgoing nurse)"
],
"lines": [
{
"who": 0,
"en": "Morning, Sara. I'm ready for handover when you are.",
"vi": "Chào buổi sáng Sara. Khi nào bạn sẵn sàng thì mình nhận bàn giao nhé.",
"hint": ""
},
{
"who": 1,
"en": "Thanks, Anna. I'm handing over Mr Tom Hale in bed 12, a 68-year-old man. The situation is that his oxygen saturation dropped to 90 percent on room air at five this morning.",
"vi": "Cảm ơn Anna. Mình bàn giao ông Tom Hale giường 12, nam 68 tuổi. Tình huống là sáng nay lúc năm giờ độ bão hòa oxy của ông giảm còn 90 phần trăm khi thở khí phòng.",
"hint": "Giới thiệu bệnh nhân giường 12, 68 tuổi; SpO2 tụt còn 90% lúc 5 giờ sáng. [handing over / situation / saturation / room air]"
},
{
"who": 0,
"en": "Got it. What's his background?",
"vi": "Rõ rồi. Bệnh nền của ông ấy thế nào?",
"hint": ""
},
{
"who": 1,
"en": "Background: he was admitted two days ago with pneumonia. He has COPD and type 2 diabetes, and he's allergic to penicillin, so he's on doxycycline.",
"vi": "Bệnh cảnh: ông nhập viện hai ngày trước vì viêm phổi. Ông có COPD và tiểu đường típ 2, dị ứng penicillin nên đang dùng doxycycline.",
"hint": "Nói lý do nhập viện, bệnh nền và dị ứng penicillin. [admitted / pneumonia / COPD / allergic]"
},
{
"who": 0,
"en": "And how is he now?",
"vi": "Còn bây giờ ông ấy thế nào?",
"hint": ""
},
{
"who": 1,
"en": "I put him on two litres of oxygen and his saturation is now 94 percent. His respiratory rate is 22, his temperature is 37.8, and he's alert but a bit breathless when he talks.",
"vi": "Mình cho ông thở oxy hai lít và độ bão hòa hiện là 94 phần trăm. Nhịp thở 22, nhiệt độ 37,8, ông tỉnh nhưng hơi khó thở khi nói.",
"hint": "Mô tả oxy đã cho, SpO2 hiện tại, nhịp thở, nhiệt độ, ý thức. [two litres / respiratory rate / alert / breathless]"
},
{
"who": 0,
"en": "Okay. What do you need me to do?",
"vi": "Được. Bạn cần mình làm gì?",
"hint": ""
},
{
"who": 1,
"en": "Please repeat his observations every hour, and ask the doctor to review him at eight about a chest X-ray. I'd escalate if his saturation falls below 92.",
"vi": "Xin hãy đo lại sinh hiệu mỗi giờ và nhờ bác sĩ khám lúc tám giờ để xem chụp X-quang ngực. Mình sẽ báo ngay nếu SpO2 xuống dưới 92.",
"hint": "Nhờ đo sinh hiệu mỗi giờ, nhờ bác sĩ khám lúc 8h, nêu ngưỡng báo động. [repeat observations / doctor / review / escalate]"
},
{
"who": 0,
"en": "Is he on any fluids, and what about his sugars?",
"vi": "Ông ấy có truyền dịch không, còn đường huyết thì sao?",
"hint": ""
},
{
"who": 1,
"en": "He has no drip at the moment and he's drinking well. His blood sugar was 9.4 at midnight, and the next check is due at six, so please do that first.",
"vi": "Hiện ông không truyền dịch và uống tốt. Đường huyết lúc nửa đêm là 9,4, lần kiểm tra kế tiếp lúc sáu giờ, nên bạn làm việc đó trước nhé.",
"hint": "Trả lời: không truyền dịch, uống tốt, đường huyết 9,4, cần kiểm tra lúc 6h. [no drip / blood sugar / next check / first]"
},
{
"who": 0,
"en": "Does he know the plan? And is the family aware?",
"vi": "Ông ấy biết kế hoạch chưa? Và gia đình có biết không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, I explained it to him, and his daughter is coming at ten. Any other questions? Otherwise, he's all yours.",
"vi": "Rồi, mình đã giải thích cho ông, và con gái ông sẽ đến lúc mười giờ. Bạn còn câu hỏi nào không? Nếu không thì ông ấy giao lại cho bạn.",
"hint": "Nói đã giải thích, con gái đến 10h, hỏi còn câu hỏi và kết thúc. [explained / daughter / other questions / all yours]"
}
],
"notes": [
{
"line": 1,
"vi": "Mở đầu bằng “The situation is that…” giúp người nghe biết ngay vấn đề chính trước khi nghe chi tiết."
},
{
"line": 3,
"vi": "Bệnh nền và dị ứng thuộc phần Background; nói dị ứng kèm thuốc đang dùng giúp người nhận an toàn hơn."
},
{
"line": 7,
"vi": "Phần Recommendation cần có hành động cụ thể, thời gian và ngưỡng báo động (“I'd escalate if…”)."
},
{
"line": 11,
"vi": "Kết thúc rõ ràng bằng “Any other questions?” và “He's all yours” cho thấy bàn giao đã hoàn tất."
}
]
},
"pron": [
{
"en": "oxygen saturation",
"tip": "Nhấn âm 1 của “OXygen” (/ˈɒksɪdʒən/) và âm 2 của “saTURAtion”; đọc rõ /tʃ/ trong “saturation”."
},
{
"en": "type 2 diabetes",
"tip": "“diabetes” nhấn âm 2: /ˌdaɪəˈbiːtiːz/; đọc rõ /z/ cuối. Đừng quên âm /s/ trong “type” khi nối với “two”."
},
{
"en": "I'd escalate if his saturation falls below 92",
"tip": "Nhấn “ESCalate” ở âm đầu; “I'd” là /aɪd/, đừng nuốt /d/. Giọng đi xuống ở cuối câu."
},
{
"en": "Any other questions?",
"tip": "Giọng lên ở cuối; “questions” đọc /ˈkwestʃənz/, đừng bỏ âm /z/ cuối."
}
],
"mistakes": [
{
"x": "He admitted two days ago with pneumonia.",
"v": "He was admitted two days ago with pneumonia.",
"why": "Bệnh nhân là đối tượng bị nhập viện nên dùng bị động “was admitted”."
},
{
"x": "He have COPD and diabetes.",
"v": "He has COPD and diabetes.",
"why": "Ngôi thứ ba số ít dùng “has”, không dùng “have”."
},
{
"x": "Patient allergy to penicillin.",
"v": "He is allergic to penicillin.",
"why": "“allergy” là danh từ; sau “be” cần tính từ “allergic” + “to”, và câu cần chủ ngữ rõ ràng."
},
{
"x": "I want you check his observation every hour.",
"v": "Please check his observations every hour.",
"why": "Sau “want” cần “to” (I want you to check) và “observations” là danh từ số nhiều; dùng “Please” lịch sự hơn."
}
],
"task": {
"scenario": "You are finishing a night shift. You must hand over Mrs Lan Pham in bed 5, who is one day after a hip operation and has new pain and a mild fever. Give an SBAR handover to the morning nurse, then answer a question about her pain relief.",
"scenario_vi": "Bạn sắp hết ca đêm. Bạn bàn giao bà Lan Pham giường 5, ngày thứ nhất sau mổ thay khớp háng, vừa đau tăng và sốt nhẹ. Hãy bàn giao theo SBAR cho điều dưỡng ca sáng rồi trả lời một câu hỏi về thuốc giảm đau.",
"points": [
"State the situation: who she is and what changed",
"Give the background: operation, allergies, medicines",
"Give your assessment with observations and what you did",
"Make a clear recommendation and say when to escalate",
"Invite questions and close the handover"
],
"seconds": [
60,
120
],
"self": [
"Mình đã nói đủ bốn phần S-B-A-R theo đúng thứ tự.",
"Mình nêu ngay vấn đề chính ở phần Situation.",
"Mình có nói dị ứng và thuốc đang dùng.",
"Mình đưa ra hành động cụ thể và ngưỡng báo bác sĩ.",
"Mình dùng “was admitted/has/is allergic to” đúng ngữ pháp.",
"Mình kết thúc bằng lời mời đặt câu hỏi."
]
}
},
{
"id": "sp-history",
"title": "Hỏi bệnh sử bệnh nhân",
"en": "Taking a patient's history",
"lvl": "B2",
"track": "med",
"register": "neutral",
"when": "Khi bạn là bác sĩ hoặc điều dưỡng khám bệnh nhân lần đầu. Mục tiêu là hỏi đủ và có trật tự: lý do đến khám, khởi phát, tính chất đau, triệu chứng kèm theo, tiền sử, thuốc, dị ứng, rồi tóm tắt lại.",
"parts": [
{
"name": "Opening",
"vi": "Chào, giới thiệu bản thân và dùng câu hỏi mở để bệnh nhân tự kể lý do đến khám.",
"ex": "Hello Mrs Lim, I'm Dr Nguyen. What brings you in today?"
},
{
"name": "Onset and duration",
"vi": "Hỏi bắt đầu khi nào, kéo dài bao lâu, liên tục hay từng cơn.",
"ex": "When did it start, and has it been constant or does it come and go?"
},
{
"name": "Character and associated symptoms",
"vi": "Hỏi tính chất cơn đau, lan đi đâu và các triệu chứng đi kèm.",
"ex": "Can you describe the pain? Have you vomited?"
},
{
"name": "Past history and medicines",
"vi": "Hỏi bệnh nền, phẫu thuật, thuốc đang dùng và dị ứng.",
"ex": "Do you have any medical problems? Are you allergic to anything?"
},
{
"name": "Summarising",
"vi": "Tóm tắt lại bằng lời của mình và hỏi bệnh nhân xem có đúng không.",
"ex": "So to summarise: three days of burning pain. Have I got that right?"
}
],
"phrases": [
{
"en": "What brings you in today?",
"vi": "Hôm nay bác đến khám vì lý do gì ạ?",
"use": "Opening"
},
{
"en": "I'm sorry to hear that",
"vi": "Tôi rất tiếc khi nghe vậy",
"use": "Opening"
},
{
"en": "When did it start?",
"vi": "Nó bắt đầu từ khi nào?",
"use": "Onset and duration"
},
{
"en": "Does it come and go?",
"vi": "Nó có lúc có lúc không phải không?",
"use": "Onset and duration"
},
{
"en": "Can you describe the pain?",
"vi": "Bác mô tả cơn đau giúp tôi được không?",
"use": "Character and associated symptoms"
},
{
"en": "Does it spread anywhere?",
"vi": "Cơn đau có lan đi đâu không?",
"use": "Character and associated symptoms"
},
{
"en": "Have you vomited?",
"vi": "Bác có nôn không?",
"use": "Character and associated symptoms"
},
{
"en": "Do you have any medical problems?",
"vi": "Bác có bệnh lý nào khác không?",
"use": "Past history and medicines"
},
{
"en": "Are you allergic to anything?",
"vi": "Bác có dị ứng với gì không?",
"use": "Past history and medicines"
},
{
"en": "Have I got that right?",
"vi": "Tôi nói vậy đã đúng chưa ạ?",
"use": "Summarising"
}
],
"model": {
"type": "dialogue",
"roles": [
"Mrs Lim (patient)",
"Dr Nguyen"
],
"lines": [
{
"who": 1,
"en": "Hello Mrs Lim, I'm Dr Nguyen. What brings you in today?",
"vi": "Chào bà Lim, tôi là bác sĩ Nguyen. Hôm nay bà đến khám vì lý do gì ạ?",
"hint": "Chào, giới thiệu tên và hỏi bằng câu hỏi mở lý do bà đến khám. [hello / Dr Nguyen / brings you in]"
},
{
"who": 0,
"en": "I've had a bad pain in my upper tummy, and it's getting worse.",
"vi": "Tôi bị đau dữ dội ở phần bụng trên và càng lúc càng nặng.",
"hint": ""
},
{
"who": 1,
"en": "I'm sorry to hear that. When did it start, and does it come and go or is it constant?",
"vi": "Tôi rất tiếc khi nghe vậy. Cơn đau bắt đầu khi nào, và nó có lúc có lúc không hay đau liên tục?",
"hint": "Nói thông cảm, rồi hỏi khởi phát khi nào và đau từng cơn hay liên tục. [sorry / start / come and go / constant]"
},
{
"who": 0,
"en": "About three days ago. It comes and goes, mostly after meals.",
"vi": "Khoảng ba ngày trước. Đau từng cơn, chủ yếu sau bữa ăn.",
"hint": ""
},
{
"who": 1,
"en": "Can you describe the pain? Is it sharp, burning or crampy, and does it spread anywhere?",
"vi": "Bà mô tả cơn đau giúp tôi được không? Đau nhói, rát hay quặn, và có lan đi đâu không?",
"hint": "Nhờ mô tả cơn đau: nhói, rát hay quặn, và có lan đi đâu không. [describe / sharp / burning / spread]"
},
{
"who": 0,
"en": "It's burning, like acid. Sometimes it goes up into my chest, and I feel sick.",
"vi": "Đau rát như axit. Thỉnh thoảng nó lan lên ngực và tôi thấy buồn nôn.",
"hint": ""
},
{
"who": 1,
"en": "Have you vomited, noticed any black stools, or lost weight recently?",
"vi": "Gần đây bà có nôn, thấy phân đen hoặc sụt cân không?",
"hint": "Hỏi triệu chứng kèm theo: nôn, phân đen, sụt cân. [vomited / black stools / lost weight]"
},
{
"who": 0,
"en": "No vomiting, no black stools, and my weight is the same. But I've had heartburn on and off for a year.",
"vi": "Không nôn, không có phân đen, cân nặng vẫn vậy. Nhưng tôi bị ợ nóng thỉnh thoảng đã một năm rồi.",
"hint": ""
},
{
"who": 1,
"en": "Thank you. Do you have any medical problems, or have you had any operations? And are you taking any medicines, and are you allergic to anything?",
"vi": "Cảm ơn bà. Bà có bệnh lý nào khác hoặc từng phẫu thuật không? Và bà có đang dùng thuốc nào, có dị ứng gì không?",
"hint": "Hỏi bệnh nền, phẫu thuật, thuốc đang dùng và dị ứng. [medical problems / operations / medicines / allergic]"
},
{
"who": 0,
"en": "I have high blood pressure and I take amlodipine. I also take ibuprofen for my knee, and I'm allergic to penicillin.",
"vi": "Tôi bị cao huyết áp và uống amlodipine. Tôi cũng uống ibuprofen cho đầu gối, và tôi dị ứng penicillin.",
"hint": ""
},
{
"who": 1,
"en": "That's helpful. So to summarise: three days of burning upper abdominal pain after meals, with nausea and a long history of heartburn, and you take ibuprofen. Have I got that right?",
"vi": "Rất hữu ích. Tóm lại: ba ngày đau rát vùng bụng trên sau bữa ăn, kèm buồn nôn, tiền sử ợ nóng lâu năm, và bà có dùng ibuprofen. Tôi nói vậy đã đúng chưa?",
"hint": "Tóm tắt: ba ngày đau rát bụng trên sau ăn, buồn nôn, ợ nóng lâu, dùng ibuprofen; hỏi lại cho chắc. [summarise / burning / heartburn / right]"
},
{
"who": 0,
"en": "Yes, that's right.",
"vi": "Vâng, đúng rồi.",
"hint": ""
}
],
"notes": [
{
"line": 0,
"vi": "Câu hỏi mở “What brings you in today?” để bệnh nhân tự kể, thay vì hỏi dồn bằng câu Có/Không."
},
{
"line": 2,
"vi": "Một câu thông cảm ngắn trước khi hỏi tiếp giúp bệnh nhân yên tâm và dễ trả lời hơn."
},
{
"line": 4,
"vi": "Đưa sẵn các lựa chọn (“sharp, burning or crampy”) giúp bệnh nhân khó diễn tả cơn đau vẫn trả lời được."
},
{
"line": 10,
"vi": "Tóm tắt rồi hỏi “Have I got that right?” là cách kiểm tra bạn đã hiểu đúng và cho bệnh nhân cơ hội sửa."
}
]
},
"pron": [
{
"en": "What brings you in today?",
"tip": "Giọng đi xuống ở cuối vì là câu hỏi Wh-; nối “brings you” và “in today” thành một nhịp, nhấn “brings”."
},
{
"en": "Is it sharp, burning or crampy?",
"tip": "Câu liệt kê: “sharp” và “burning” lên giọng nhẹ, “crampy” xuống giọng; đọc rõ /p/ cuối “sharp”."
},
{
"en": "Are you allergic to anything?",
"tip": "“allergic” nhấn âm 2 /əˈlɜːdʒɪk/; nối “allergic to”; giọng lên ở cuối vì là câu hỏi Yes/No."
},
{
"en": "Have I got that right?",
"tip": "“Have I” nối thành /hævaɪ/; nhấn “right” và lên giọng ở cuối; đọc rõ /t/ trong “that”."
}
],
"mistakes": [
{
"x": "What is your problem?",
"v": "What brings you in today?",
"why": "“What is your problem?” nghe thô và thiếu tế nhị trong khám bệnh; dùng câu hỏi mở lịch sự hơn."
},
{
"x": "Since when you have the pain?",
"v": "How long have you had the pain?",
"why": "Câu hỏi cần trợ động từ đứng trước chủ ngữ và thì hiện tại hoàn thành, không dịch từng chữ từ tiếng Việt."
},
{
"x": "Do you have allergy?",
"v": "Are you allergic to anything?",
"why": "“allergy” là danh từ cần mạo từ; cách nói tự nhiên là “be allergic to”."
},
{
"x": "You vomit or not?",
"v": "Have you vomited?",
"why": "Không dùng “or not” kiểu tiếng Việt; hỏi trải nghiệm đã xảy ra nên dùng hiện tại hoàn thành."
}
],
"task": {
"scenario": "A new patient, Mr Joe Walker, aged 34, has had a headache for two days. You are the doctor. Take a full history: start with an open question, then ask about onset, the type of pain, associated symptoms, past history, medicines and allergies, and summarise.",
"scenario_vi": "Bệnh nhân mới, ông Joe Walker, 34 tuổi, bị đau đầu hai ngày nay. Bạn là bác sĩ. Hãy hỏi bệnh sử đầy đủ: mở đầu bằng câu hỏi mở, rồi hỏi khởi phát, tính chất đau, triệu chứng kèm theo, tiền sử, thuốc và dị ứng, rồi tóm tắt.",
"points": [
"Greet the patient and ask an open question",
"Ask when it started and how it has changed",
"Ask about the character and location of the pain",
"Ask about associated symptoms such as nausea or fever",
"Ask about medical history, medicines and allergies, then summarise"
],
"seconds": [
60,
120
],
"self": [
"Mình đã chào, giới thiệu tên và hỏi bằng câu hỏi mở.",
"Mình hỏi rõ khởi phát và thời gian kéo dài.",
"Mình hỏi tính chất cơn đau và triệu chứng kèm theo.",
"Mình hỏi bệnh nền, thuốc và dị ứng.",
"Mình tóm tắt lại và hỏi “Have I got that right?”.",
"Mình dùng câu hỏi đúng ngữ pháp (Have you…? Are you allergic to…?)."
]
}
},
{
"id": "sp-explain-plan",
"title": "Giải thích chẩn đoán và kế hoạch điều trị",
"en": "Explaining a diagnosis and treatment plan",
"lvl": "B2",
"track": "med",
"register": "neutral",
"when": "Khi bạn cần giải thích cho bệnh nhân họ bị bệnh gì và sẽ điều trị ra sao bằng lời dễ hiểu. Mục tiêu là kiểm tra bệnh nhân đã hiểu và dặn khi nào cần quay lại.",
"parts": [
{
"name": "Diagnosis",
"vi": "Nói tên bệnh bằng ngôn ngữ đơn giản, nói rõ mức độ nặng nhẹ để trấn an.",
"ex": "You have a urinary tract infection, which is a common infection of the bladder. It's not serious."
},
{
"name": "Cause",
"vi": "Giải thích ngắn nguyên nhân và xóa bỏ cảm giác tự trách của bệnh nhân.",
"ex": "It isn't something you did wrong."
},
{
"name": "Treatment",
"vi": "Nói rõ thuốc, liều, thời gian dùng và những việc có thể làm ở nhà.",
"ex": "I'm going to prescribe an antibiotic. Please finish the whole course."
},
{
"name": "Checking understanding",
"vi": "Nhờ bệnh nhân nhắc lại bằng lời của họ để biết họ đã hiểu.",
"ex": "Just so I know I've explained it clearly, could you tell me in your own words how you'll take the tablets?"
},
{
"name": "Safety-netting",
"vi": "Dặn rõ dấu hiệu nguy hiểm và khi nào phải quay lại hoặc gọi.",
"ex": "Please come back or call us if you get a fever."
}
],
"phrases": [
{
"en": "It's not serious",
"vi": "Bệnh này không nghiêm trọng",
"use": "Diagnosis"
},
{
"en": "a common infection of the bladder",
"vi": "một nhiễm trùng thường gặp ở bàng quang",
"use": "Diagnosis"
},
{
"en": "It isn't something you did wrong",
"vi": "Đây không phải lỗi của bạn",
"use": "Cause"
},
{
"en": "I'm going to prescribe",
"vi": "Tôi sẽ kê đơn…",
"use": "Treatment"
},
{
"en": "Please finish the whole course",
"vi": "Xin hãy dùng hết cả liệu trình",
"use": "Treatment"
},
{
"en": "You should feel better within",
"vi": "Bạn sẽ thấy đỡ trong vòng…",
"use": "Treatment"
},
{
"en": "Just so I know I've explained it clearly",
"vi": "Để chắc là tôi đã giải thích rõ ràng",
"use": "Checking understanding"
},
{
"en": "in your own words",
"vi": "bằng lời của chính bạn",
"use": "Checking understanding"
},
{
"en": "come back or call us",
"vi": "quay lại hoặc gọi cho chúng tôi",
"use": "Safety-netting"
},
{
"en": "if you get a fever",
"vi": "nếu bạn bị sốt",
"use": "Safety-netting"
}
],
"model": {
"type": "dialogue",
"roles": [
"Ms Silva (patient)",
"Doctor"
],
"lines": [
{
"who": 0,
"en": "So what's wrong with me, doctor? Is it serious?",
"vi": "Vậy tôi bị làm sao hả bác sĩ? Có nghiêm trọng không?",
"hint": ""
},
{
"who": 1,
"en": "From your symptoms and the urine test, you have a urinary tract infection, which is a common infection of the bladder. It's not serious, and it's easy to treat.",
"vi": "Dựa vào triệu chứng và xét nghiệm nước tiểu, chị bị nhiễm trùng đường tiết niệu, một nhiễm trùng thường gặp ở bàng quang. Không nghiêm trọng và dễ điều trị.",
"hint": "Giải thích: nhiễm trùng đường tiết niệu, thường gặp ở bàng quang, không nặng, dễ chữa. [urine test / urinary tract infection / common / easy to treat]"
},
{
"who": 0,
"en": "Okay. How did I get it?",
"vi": "Vâng. Sao tôi lại bị vậy?",
"hint": ""
},
{
"who": 1,
"en": "Bacteria from the skin or bowel can get into the bladder. It's very common, and it isn't something you did wrong.",
"vi": "Vi khuẩn từ da hoặc ruột có thể vào bàng quang. Rất phổ biến và đây không phải lỗi của chị.",
"hint": "Giải thích vi khuẩn từ da hoặc ruột vào bàng quang và trấn an không phải lỗi bệnh nhân. [bacteria / bladder / common / did wrong]"
},
{
"who": 0,
"en": "What do I need to do?",
"vi": "Tôi cần làm gì?",
"hint": ""
},
{
"who": 1,
"en": "I'm going to prescribe an antibiotic called nitrofurantoin. Take one tablet twice a day with food for three days, and please finish the whole course.",
"vi": "Tôi sẽ kê một loại kháng sinh tên là nitrofurantoin. Uống một viên hai lần mỗi ngày cùng bữa ăn trong ba ngày, và xin chị uống hết cả liệu trình.",
"hint": "Nói kê kháng sinh, uống một viên hai lần mỗi ngày cùng ăn trong ba ngày, dặn uống hết. [prescribe / antibiotic / twice a day / whole course]"
},
{
"who": 0,
"en": "Anything else I can do at home?",
"vi": "Ở nhà tôi còn làm được gì nữa không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, drink plenty of water and take paracetamol if it hurts. You should feel better within two days.",
"vi": "Có, chị uống nhiều nước và dùng paracetamol nếu đau. Chị sẽ thấy đỡ trong vòng hai ngày.",
"hint": "Dặn uống nhiều nước, dùng paracetamol nếu đau, và sẽ đỡ trong hai ngày. [plenty of water / paracetamol / feel better / two days]"
},
{
"who": 0,
"en": "Okay, that makes sense.",
"vi": "Vâng, tôi hiểu rồi.",
"hint": ""
},
{
"who": 1,
"en": "Just so I know I've explained it clearly, could you tell me in your own words how you'll take the tablets?",
"vi": "Để chắc là tôi đã giải thích rõ, chị có thể nói lại bằng lời của mình cách chị sẽ uống thuốc không?",
"hint": "Nhờ bệnh nhân nhắc lại bằng lời của họ để chắc đã giải thích rõ. [explained clearly / tell me / own words / tablets]"
},
{
"who": 0,
"en": "Twice a day with food for three days, and lots of water.",
"vi": "Hai lần mỗi ngày cùng bữa ăn trong ba ngày, và uống thật nhiều nước.",
"hint": ""
},
{
"who": 1,
"en": "Perfect. Now, please come back or call us if you get a fever, pain in your back or side, blood in your urine, or if you're not better in three days.",
"vi": "Chính xác. Bây giờ, chị hãy quay lại hoặc gọi chúng tôi nếu bị sốt, đau lưng hoặc đau hông, có máu trong nước tiểu, hoặc nếu ba ngày mà chưa đỡ.",
"hint": "Dặn quay lại hoặc gọi nếu sốt, đau lưng, tiểu ra máu hoặc ba ngày chưa đỡ. [come back / call us / fever / blood in urine]"
},
{
"who": 0,
"en": "Okay, I'll do that. Thank you.",
"vi": "Vâng, tôi sẽ làm vậy. Cảm ơn bác sĩ.",
"hint": ""
}
],
"notes": [
{
"line": 1,
"vi": "Nói tên bệnh bằng từ phổ thông rồi giải thích ngay (“which is a common infection…”), và trấn an mức độ nặng nhẹ."
},
{
"line": 3,
"vi": "Câu “It isn't something you did wrong” giúp bệnh nhân bớt tự trách, rất hữu ích với bệnh dễ gây xấu hổ."
},
{
"line": 9,
"vi": "“Just so I know I've explained it clearly” đặt lỗi ở người giải thích, không ở bệnh nhân, nên bớt gây áp lực."
},
{
"line": 11,
"vi": "Phần dặn dò (safety-netting) nên nêu dấu hiệu cụ thể và mốc thời gian để bệnh nhân biết khi nào phải quay lại."
}
]
},
"pron": [
{
"en": "urinary tract infection",
"tip": "“URinary” nhấn âm đầu /ˈjʊərɪnəri/; “infection” nhấn âm 2; đọc rõ /kt/ trong “tract” và /ʃ/ trong “infection”."
},
{
"en": "Please finish the whole course",
"tip": "Nhấn “finish” và “whole”; “whole” đọc /həʊl/ (không phải “hole” kéo dài); “course” đọc /kɔːs/, đừng bỏ âm cuối."
},
{
"en": "in your own words",
"tip": "Nối “in your” thành /ɪnjɔː/, nhấn “own”; đọc rõ /dz/ cuối “words”."
},
{
"en": "come back or call us",
"tip": "Nhấn “back” và “call”; “or” đọc yếu /ə/; nối “call us” thành /kɔːlʌs/."
}
],
"mistakes": [
{
"x": "You have infection in your bladder.",
"v": "You have an infection in your bladder.",
"why": "“infection” là danh từ đếm được, số ít nên cần mạo từ “an”."
},
{
"x": "You must to finish all the antibiotic.",
"v": "Please make sure you finish the whole course of antibiotics.",
"why": "“must” không đi với “to”; “make sure” + “the whole course” cũng nhẹ nhàng và tự nhiên hơn."
},
{
"x": "If you have fever, you are coming back.",
"v": "If you get a fever, please come back.",
"why": "Dùng hiện tại đơn cho lời dặn, “come back” ở dạng mệnh lệnh lịch sự; “a fever” cần mạo từ."
},
{
"x": "You understand or not?",
"v": "Could you tell me in your own words how you'll take it?",
"why": "Hỏi “Do you understand?” nghe như kiểm tra; nhờ bệnh nhân nhắc lại bằng lời của họ vừa lịch sự vừa kiểm tra được."
}
],
"task": {
"scenario": "Your patient, Mr Ben Carter, aged 52, has just been diagnosed with high blood pressure. You need to explain what it means, the plan (a daily tablet, less salt and a walk each day) and when he should seek help.",
"scenario_vi": "Bệnh nhân của bạn, ông Ben Carter, 52 tuổi, vừa được chẩn đoán cao huyết áp. Bạn cần giải thích đó là gì, kế hoạch (một viên thuốc mỗi ngày, ăn ít muối, đi bộ mỗi ngày) và khi nào ông nên đi khám gấp.",
"points": [
"Explain the diagnosis in plain language and say how serious it is",
"Explain the treatment plan: tablet, diet and exercise",
"Say what he can expect and by when",
"Check his understanding without sounding like a test",
"Safety-net: say exactly when to come back or call"
],
"seconds": [
60,
120
],
"self": [
"Mình dùng từ đơn giản, tránh thuật ngữ khó.",
"Mình nói rõ mức độ nặng nhẹ để bệnh nhân yên tâm.",
"Mình nêu rõ thuốc, liều và thời gian dùng.",
"Mình nhờ bệnh nhân nhắc lại bằng lời của họ.",
"Mình dặn dấu hiệu cụ thể cần quay lại hoặc gọi.",
"Giọng mình chậm, rõ và thân thiện."
]
}
},
{
"id": "sp-bad-news",
"title": "Thông báo tin xấu một cách đồng cảm",
"en": "Breaking bad news with empathy",
"lvl": "C1",
"track": "med",
"register": "formal",
"when": "Khi bạn phải báo kết quả nặng cho bệnh nhân như chẩn đoán ung thư. Dùng khung SPIKES để chuẩn bị bối cảnh, hỏi họ đã biết gì, báo tin trung thực, đón nhận cảm xúc và đưa ra kế hoạch tiếp theo.",
"parts": [
{
"name": "Setting",
"vi": "Chuẩn bị không gian riêng, không bị làm phiền, mời người thân cùng ngồi và hỏi họ có thoải mái không.",
"ex": "I've set aside half an hour so we won't be interrupted."
},
{
"name": "Perception and invitation",
"vi": "Hỏi bệnh nhân hiểu gì về tình trạng của mình và xin phép trước khi nói kết quả.",
"ex": "Can you tell me what you understand so far? Would it be all right if I shared the results now?"
},
{
"name": "Knowledge",
"vi": "Nói trước một câu báo hiệu, rồi báo tin ngắn gọn, rõ ràng, không dùng thuật ngữ.",
"ex": "I'm afraid the news isn't what we were hoping for."
},
{
"name": "Emotions",
"vi": "Im lặng, cho thời gian, gọi tên cảm xúc và hỏi bệnh nhân đang nghĩ gì.",
"ex": "Please take all the time you need. What's going through your mind?"
},
{
"name": "Strategy",
"vi": "Nói trung thực về những gì chưa biết, nêu bước tiếp theo và hẹn liên lạc lại.",
"ex": "I'll phone you on Friday to see how you're doing."
}
],
"phrases": [
{
"en": "I've set aside half an hour",
"vi": "Tôi đã dành nửa tiếng",
"use": "Setting"
},
{
"en": "Can you tell me what you understand",
"vi": "Bà/ông cho tôi biết bà/ông hiểu thế nào về…",
"use": "Perception and invitation"
},
{
"en": "Would it be all right if",
"vi": "Nếu tôi… thì có được không ạ?",
"use": "Perception and invitation"
},
{
"en": "How much detail would you like?",
"vi": "Bà/ông muốn biết chi tiết đến mức nào?",
"use": "Perception and invitation"
},
{
"en": "I'm afraid the news isn't",
"vi": "Tôi e là tin này không như chúng ta mong",
"use": "Knowledge"
},
{
"en": "I'm very sorry to have to tell you",
"vi": "Tôi rất tiếc phải nói với bà/ông điều này",
"use": "Knowledge"
},
{
"en": "Please take all the time you need",
"vi": "Xin cứ dành bao nhiêu thời gian cũng được",
"use": "Emotions"
},
{
"en": "It's natural to feel",
"vi": "Cảm thấy… là điều tự nhiên",
"use": "Emotions"
},
{
"en": "What's going through your mind?",
"vi": "Lúc này ông/bà đang nghĩ gì?",
"use": "Emotions"
},
{
"en": "I won't pretend it isn't serious",
"vi": "Tôi sẽ không giả vờ là nó không nghiêm trọng",
"use": "Strategy"
}
],
"model": {
"type": "dialogue",
"roles": [
"Mr Adeyemi (patient)",
"Doctor"
],
"lines": [
{
"who": 1,
"en": "Mr Adeyemi, thank you for coming in with your wife. I've set aside half an hour so we won't be interrupted. Before we begin, are you both comfortable?",
"vi": "Ông Adeyemi, cảm ơn ông đã đến cùng vợ. Tôi đã dành nửa tiếng để mình không bị làm phiền. Trước khi bắt đầu, hai vị có thoải mái không?",
"hint": "Cảm ơn ông bà đến, nói đã dành nửa tiếng để không bị làm phiền, hỏi họ có thoải mái không. [thank you / set aside / interrupted / comfortable]"
},
{
"who": 0,
"en": "Yes, we're fine. I've been dreading this appointment, to be honest.",
"vi": "Vâng, chúng tôi ổn. Thật lòng thì tôi đã lo sợ buổi hẹn này.",
"hint": ""
},
{
"who": 1,
"en": "I can imagine. Can you tell me what you understand so far about why we did the scan and the biopsy?",
"vi": "Tôi có thể hình dung. Ông cho tôi biết cho đến giờ ông hiểu thế nào về lý do chúng ta chụp phim và sinh thiết?",
"hint": "Thông cảm, rồi hỏi bệnh nhân hiểu gì về lý do chụp phim và sinh thiết. [imagine / tell me / understand / biopsy]"
},
{
"who": 0,
"en": "Well, I know they found something on my lung. I'm hoping it's just an infection.",
"vi": "À, tôi biết họ thấy gì đó ở phổi. Tôi hy vọng chỉ là nhiễm trùng.",
"hint": ""
},
{
"who": 1,
"en": "Thank you for telling me. Would it be all right if I shared the results with you now? And how much detail would you like?",
"vi": "Cảm ơn ông đã cho tôi biết. Tôi chia sẻ kết quả với ông bây giờ có được không? Và ông muốn nghe chi tiết đến mức nào?",
"hint": "Cảm ơn, xin phép nói kết quả và hỏi ông muốn nghe chi tiết đến đâu. [thank you / all right / results / how much detail]"
},
{
"who": 0,
"en": "Yes, please tell me everything. I'd rather know.",
"vi": "Vâng, xin cứ nói hết. Tôi thà biết còn hơn.",
"hint": ""
},
{
"who": 1,
"en": "I'm afraid the news isn't what we were hoping for. The biopsy shows that the spot on your lung is cancer. I'm very sorry to have to tell you this.",
"vi": "Tôi e là tin này không như chúng ta mong. Kết quả sinh thiết cho thấy khối ở phổi của ông là ung thư. Tôi rất tiếc phải nói với ông điều này.",
"hint": "Nói trước là tin không tốt, báo sinh thiết cho thấy ung thư, bày tỏ sự tiếc nuối. [afraid / news / biopsy / cancer / sorry]"
},
{
"who": 0,
"en": "Cancer... I wasn't expecting that. I don't know what to say.",
"vi": "Ung thư… Tôi không ngờ. Tôi không biết nói gì.",
"hint": ""
},
{
"who": 1,
"en": "Please take all the time you need. This is a lot to take in, and it's natural to feel shocked or frightened. What's going through your mind?",
"vi": "Xin ông cứ dành thời gian. Tin này rất nặng nề, và thấy sốc hay sợ hãi là điều tự nhiên. Lúc này ông đang nghĩ gì?",
"hint": "Cho ông thời gian, nói thấy sốc hay sợ là tự nhiên, hỏi ông đang nghĩ gì. [take your time / a lot / natural / mind]"
},
{
"who": 0,
"en": "I'm scared. Is it going to kill me? How long have I got?",
"vi": "Tôi sợ. Nó có giết tôi không? Tôi còn sống được bao lâu?",
"hint": ""
},
{
"who": 1,
"en": "That's an understandable question, and I won't pretend it isn't serious. We need one more scan to see whether it has spread before we can talk about the outlook.",
"vi": "Đó là câu hỏi dễ hiểu, và tôi sẽ không giả vờ rằng nó không nghiêm trọng. Chúng ta cần chụp thêm một lần để xem nó có lan không rồi mới nói về tiên lượng.",
"hint": "Công nhận câu hỏi, nói thật là nghiêm trọng, cần chụp thêm để biết đã lan chưa. [understandable / pretend / serious / spread / outlook]"
},
{
"who": 0,
"en": "Okay. And what happens now?",
"vi": "Vâng. Vậy bây giờ sẽ thế nào?",
"hint": ""
},
{
"who": 1,
"en": "Next week you'll meet the cancer team to talk through treatment options, and I'll phone you on Friday to see how you're doing. Is there anything you'd like to ask now?",
"vi": "Tuần sau ông sẽ gặp nhóm ung bướu để bàn các lựa chọn điều trị, và thứ Sáu tôi sẽ gọi hỏi thăm ông. Bây giờ ông có điều gì muốn hỏi không?",
"hint": "Nêu bước tiếp theo: gặp nhóm ung bướu, hẹn gọi thứ Sáu, hỏi còn muốn hỏi gì. [next week / cancer team / phone / ask]"
},
{
"who": 0,
"en": "No, not now. Thank you for being honest with me.",
"vi": "Không, bây giờ thì chưa. Cảm ơn bác sĩ đã nói thật với tôi.",
"hint": ""
}
],
"notes": [
{
"line": 0,
"vi": "Chuẩn bị bối cảnh (thời gian, không bị làm phiền, người thân) là bước S của SPIKES; nó cho thấy bạn tôn trọng bệnh nhân."
},
{
"line": 4,
"vi": "Xin phép (“Would it be all right if…”) và hỏi mức độ chi tiết giúp bệnh nhân giữ quyền kiểm soát."
},
{
"line": 6,
"vi": "“I'm afraid…” là “warning shot” báo trước tin xấu; sau đó nói ngắn, rõ, không vòng vo."
},
{
"line": 10,
"vi": "Trả lời trung thực về tiên lượng: không hứa hẹn suông, không phủ nhận, và chỉ nói điều đã biết."
}
]
},
"pron": [
{
"en": "I'm afraid the news isn't what we were hoping for",
"tip": "Nói chậm, dừng một nhịp sau “afraid”; nhấn “news” và “hoping”; giọng hạ thấp và đều, không lên cao."
},
{
"en": "I'm very sorry to have to tell you this",
"tip": "Nhấn “very” và “sorry”; đọc “to have to” thành /təhæftə/ nối nhẹ; giọng xuống ở cuối, ấm và chậm."
},
{
"en": "What's going through your mind?",
"tip": "Nhấn “going” và “mind”; “through” đọc /θruː/ (đặt lưỡi giữa răng); giọng đi xuống nhẹ nhàng."
},
{
"en": "Please take all the time you need",
"tip": "Nối “take all” thành /teɪkɔːl/; nhấn “time” và “need”; đọc chậm để tạo cảm giác không vội."
}
],
"mistakes": [
{
"x": "I have bad news for you, you are having cancer.",
"v": "I'm afraid the biopsy shows that you have cancer.",
"why": "“have” là động từ trạng thái nên không dùng “are having”; cũng cần báo trước nhẹ nhàng thay vì nói thẳng."
},
{
"x": "Don't worry, everything will be okay.",
"v": "I can see this is very hard. Let's take it one step at a time.",
"why": "Trấn an suông là sai về mặt giao tiếp; cần ghi nhận cảm xúc và không hứa điều chưa chắc chắn."
},
{
"x": "I'm very sorry for tell you this.",
"v": "I'm very sorry to have to tell you this.",
"why": "Sau “sorry” dùng “to + động từ” (hoặc “for + V-ing”), không dùng “for + động từ nguyên mẫu”."
},
{
"x": "I will phone to you on Friday.",
"v": "I'll phone you on Friday.",
"why": "“phone” là động từ có tân ngữ trực tiếp nên không có “to”."
}
],
"task": {
"scenario": "You are a doctor meeting Mrs Eva Novak, aged 47, and her sister. Her blood tests show that her kidneys are failing and she will need dialysis planning. Break the news using the SPIKES steps and respond kindly to her reaction.",
"scenario_vi": "Bạn là bác sĩ gặp bà Eva Novak, 47 tuổi, và chị gái bà. Xét nghiệm cho thấy thận của bà đang suy và cần chuẩn bị chạy thận. Hãy báo tin theo các bước SPIKES và đáp lại phản ứng của bà một cách tử tế.",
"points": [
"Set up the meeting and check she is comfortable",
"Ask what she already understands and ask permission to share the results",
"Give a warning shot, then the news in plain language",
"Respond to her emotions and allow silence",
"Explain the next steps and offer follow-up honestly"
],
"seconds": [
75,
150
],
"self": [
"Mình đã chuẩn bị bối cảnh và hỏi bệnh nhân có thoải mái không.",
"Mình hỏi bệnh nhân hiểu gì và xin phép trước khi báo tin.",
"Mình dùng câu báo trước như “I'm afraid…” rồi nói tin ngắn gọn.",
"Mình ghi nhận cảm xúc và cho bệnh nhân thời gian.",
"Mình trung thực, không hứa suông, và nêu bước tiếp theo.",
"Giọng mình chậm, ấm và hạ thấp ở những câu quan trọng."
]
}
},
{
"id": "sp-case-present",
"title": "Trình bày ca bệnh khi đi buồng với bác sĩ cấp trên",
"en": "Presenting a case on a ward round",
"lvl": "C1",
"track": "med",
"register": "formal",
"when": "Khi bạn phải trình bày bệnh nhân cho bác sĩ cấp trên lúc đi buồng. Cần nói gọn, đúng thứ tự, rồi trả lời các câu hỏi vặn của họ một cách tự tin và trung thực.",
"parts": [
{
"name": "One-line summary",
"vi": "Mở đầu bằng một câu: tuổi, giới, lý do nhập viện và bệnh nền quan trọng.",
"ex": "This is Mrs Joan Park, a 72-year-old retired teacher admitted last night with worsening shortness of breath, on a background of atrial fibrillation."
},
{
"name": "History",
"vi": "Kể bệnh sử có chọn lọc: triệu chứng chính, triệu chứng âm tính quan trọng, thuốc đang dùng.",
"ex": "She reports orthopnoea, but denies chest pain or fever."
},
{
"name": "Examination and investigations",
"vi": "Nêu dấu hiệu sinh tồn, khám thực thể rồi các kết quả xét nghiệm, hình ảnh quan trọng.",
"ex": "On examination she was afebrile, with bibasal crackles. The ECG confirmed atrial fibrillation."
},
{
"name": "Impression and plan",
"vi": "Nêu chẩn đoán gợi ý, nguyên nhân khả dĩ và kế hoạch điều trị cụ thể.",
"ex": "My impression is acute decompensated heart failure. I'd like to treat with intravenous furosemide."
},
{
"name": "Answering questions",
"vi": "Trả lời câu hỏi vặn bằng lý do ngắn gọn, thừa nhận điều chưa chắc.",
"ex": "I'm not certain of the exact threshold, so I'd check the local guideline."
}
],
"phrases": [
{
"en": "admitted last night with",
"vi": "nhập viện đêm qua vì…",
"use": "One-line summary"
},
{
"en": "on a background of",
"vi": "trên nền bệnh…",
"use": "One-line summary"
},
{
"en": "She reports",
"vi": "Bà ấy cho biết…",
"use": "History"
},
{
"en": "She denies chest pain",
"vi": "Bà ấy phủ nhận đau ngực",
"use": "History"
},
{
"en": "On examination she was afebrile",
"vi": "Khám thấy bà không sốt",
"use": "Examination and investigations"
},
{
"en": "The ECG confirmed",
"vi": "Điện tâm đồ xác nhận…",
"use": "Examination and investigations"
},
{
"en": "My impression is",
"vi": "Nhận định của tôi là…",
"use": "Impression and plan"
},
{
"en": "most likely precipitated by",
"vi": "nhiều khả năng do… khởi phát",
"use": "Impression and plan"
},
{
"en": "I'd like to treat with",
"vi": "Tôi muốn điều trị bằng…",
"use": "Impression and plan"
},
{
"en": "I'm not certain of",
"vi": "Tôi không chắc về…",
"use": "Answering questions"
}
],
"model": {
"type": "dialogue",
"roles": [
"Consultant",
"Dr Tran"
],
"lines": [
{
"who": 0,
"en": "Right, bed seven. Whenever you're ready.",
"vi": "Được rồi, giường bảy. Bạn sẵn sàng thì bắt đầu nhé.",
"hint": ""
},
{
"who": 1,
"en": "This is Mrs Joan Park, a 72-year-old retired teacher admitted last night with a two-day history of worsening shortness of breath and ankle swelling, on a background of atrial fibrillation and hypertension.",
"vi": "Đây là bà Joan Park, 72 tuổi, giáo viên đã nghỉ hưu, nhập viện đêm qua vì khó thở nặng dần và phù cổ chân hai ngày, trên nền rung nhĩ và tăng huyết áp.",
"hint": "Một câu tóm tắt: tên, 72 tuổi, nhập viện đêm qua vì khó thở và phù chân hai ngày, nền rung nhĩ và tăng huyết áp. [admitted last night / shortness of breath / on a background of]"
},
{
"who": 0,
"en": "Okay, carry on with the history.",
"vi": "Được, tiếp tục với bệnh sử đi.",
"hint": ""
},
{
"who": 1,
"en": "She reports orthopnoea and paroxysmal nocturnal dyspnoea, but denies chest pain or fever. She takes apixaban, ramipril and bisoprolol, and stopped her furosemide a week ago because of urinary urgency.",
"vi": "Bà cho biết khó thở khi nằm và khó thở kịch phát về đêm, nhưng phủ nhận đau ngực hay sốt. Bà dùng apixaban, ramipril, bisoprolol, và đã ngừng furosemide một tuần trước vì tiểu gấp.",
"hint": "Kể bệnh sử: khó thở khi nằm và về đêm, không đau ngực hay sốt, thuốc đang dùng, đã ngừng furosemide. [reports / denies / takes / stopped]"
},
{
"who": 0,
"en": "And on examination?",
"vi": "Còn khi khám thì sao?",
"hint": ""
},
{
"who": 1,
"en": "On examination she was afebrile, with a heart rate of 96 in atrial fibrillation, blood pressure 138 over 82 and saturations of 91 percent on air. She had bibasal crackles, a raised JVP and pitting oedema to the knees.",
"vi": "Khám bà không sốt, tim 96 lần một phút do rung nhĩ, huyết áp 138 trên 82 và SpO2 91 phần trăm khi thở khí phòng. Bà có ran ẩm hai đáy phổi, tĩnh mạch cổ nổi và phù ấn lõm đến gối.",
"hint": "Nêu khám: không sốt, mạch 96 rung nhĩ, huyết áp 138/82, SpO2 91%, ran đáy phổi, JVP cao, phù đến gối. [afebrile / heart rate / crackles / oedema]"
},
{
"who": 0,
"en": "Investigations?",
"vi": "Các xét nghiệm?",
"hint": ""
},
{
"who": 1,
"en": "Her BNP was markedly elevated at 2,400, creatinine was 118 and potassium 4.1. The chest X-ray showed pulmonary congestion with small bilateral effusions, and the ECG confirmed atrial fibrillation at around 100.",
"vi": "BNP tăng rõ ở mức 2.400, creatinine 118 và kali 4,1. X-quang ngực cho thấy ứ huyết phổi kèm tràn dịch nhỏ hai bên, và điện tâm đồ xác nhận rung nhĩ khoảng 100 lần một phút.",
"hint": "Nêu kết quả: BNP rất cao, creatinine 118, kali 4,1, X-quang ứ huyết phổi, ECG rung nhĩ khoảng 100. [BNP / creatinine / chest X-ray / ECG confirmed]"
},
{
"who": 0,
"en": "So what's your impression?",
"vi": "Vậy nhận định của bạn là gì?",
"hint": ""
},
{
"who": 1,
"en": "My impression is acute decompensated heart failure, most likely precipitated by stopping her diuretic. I'd like to treat with intravenous furosemide, restrict fluids, monitor daily weights and renal function, and request an echocardiogram.",
"vi": "Nhận định của tôi là suy tim mất bù cấp, nhiều khả năng do ngừng thuốc lợi tiểu. Tôi muốn điều trị bằng furosemide tĩnh mạch, hạn chế dịch, theo dõi cân nặng và chức năng thận hằng ngày, và chỉ định siêu âm tim.",
"hint": "Nêu chẩn đoán: suy tim mất bù cấp do ngừng lợi tiểu; kế hoạch: furosemide tĩnh mạch, hạn chế dịch, theo dõi, siêu âm tim. [impression / precipitated / treat with / echocardiogram]"
},
{
"who": 0,
"en": "Why intravenous rather than oral? And how confident are you that this isn't a pulmonary embolism?",
"vi": "Sao lại tĩnh mạch mà không uống? Và bạn chắc đến đâu rằng đây không phải thuyên tắc phổi?",
"hint": ""
},
{
"who": 1,
"en": "Her gut may be oedematous, so oral absorption is unreliable. As for PE, she's anticoagulated, so it's less likely, but I'd arrange a CTPA if she doesn't improve.",
"vi": "Ruột bà có thể bị phù nên hấp thu đường uống không đáng tin. Còn thuyên tắc phổi thì bà đang dùng thuốc chống đông nên ít khả năng hơn, nhưng tôi sẽ chỉ định CT mạch phổi nếu bà không cải thiện.",
"hint": "Giải thích vì sao dùng đường tĩnh mạch và vì sao thuyên tắc phổi ít khả năng; chụp CTPA nếu không đỡ. [gut oedematous / absorption / anticoagulated / CTPA]"
},
{
"who": 0,
"en": "What if her creatinine rises on diuresis?",
"vi": "Nếu creatinine của bà tăng khi lợi tiểu thì sao?",
"hint": ""
},
{
"who": 1,
"en": "I'd recheck it daily and slow the diuresis if it rose by more than 30 percent. I'm not certain of the exact threshold, so I'd check the local guideline.",
"vi": "Tôi sẽ kiểm tra lại hằng ngày và giảm tốc độ lợi tiểu nếu creatinine tăng hơn 30 phần trăm. Tôi không chắc về ngưỡng chính xác, nên tôi sẽ xem hướng dẫn của đơn vị.",
"hint": "Trả lời: kiểm tra mỗi ngày, giảm lợi tiểu nếu tăng trên 30%, thừa nhận chưa chắc ngưỡng, sẽ xem hướng dẫn. [recheck / slow / not certain / guideline]"
}
],
"notes": [
{
"line": 1,
"vi": "Câu mở đầu gói gọn tuổi, lý do nhập viện và bệnh nền; cấp trên có thể nghe được bức tranh tổng thể trong vài giây."
},
{
"line": 3,
"vi": "Dùng “reports/denies” để nói triệu chứng dương và âm tính; kể thuốc và việc ngừng furosemide vì nó liên quan trực tiếp đến nguyên nhân."
},
{
"line": 9,
"vi": "“My impression is…” và “most likely precipitated by…” là cách nêu chẩn đoán có mức chắc chắn vừa phải, không khẳng định quá."
},
{
"line": 13,
"vi": "Khi không chắc, nói “I'm not certain of…” rồi nêu cách bạn sẽ kiểm tra; cấp trên đánh giá cao sự trung thực này."
}
]
},
"pron": [
{
"en": "orthopnoea and paroxysmal nocturnal dyspnoea",
"tip": "“orthopnoea” /ˌɔːθɒpˈniːə/ nhấn âm 3; “paroxysmal” nhấn âm 3 /ˌpærəkˈsɪzməl/; “dyspnoea” /dɪspˈniːə/ – âm “p” đọc nhẹ."
},
{
"en": "a 72-year-old retired teacher",
"tip": "“seventy-two” nhấn “SEV”; “year-old” nối liền /jɪərəʊld/ và đọc rõ /d/ cuối; “retired” nhấn âm 2."
},
{
"en": "On examination she was afebrile",
"tip": "“afebrile” /eɪˈfiːbraɪl/ nhấn âm 2; nhấn “exa-MI-NA-tion” ở âm 3 và nối “was afebrile” cho trơn tru."
},
{
"en": "I'm not certain of the exact threshold",
"tip": "“certain” /ˈsɜːtn/ – âm cuối “n” nhẹ; “threshold” /ˈθreʃhəʊld/ đặt lưỡi giữa răng ở “th” và đọc rõ /d/ cuối."
}
],
"mistakes": [
{
"x": "She have shortness of breath since two days.",
"v": "She has had shortness of breath for two days.",
"why": "Ngôi thứ ba dùng “has”; khoảng thời gian dùng “for” và thì hiện tại hoàn thành, “since” dùng với mốc thời gian."
},
{
"x": "She is 72 years old woman, admit last night.",
"v": "She is a 72-year-old woman admitted last night.",
"why": "Tuổi làm tính từ phải viết “72-year-old” (không có “s”) với mạo từ “a”; “admitted” là quá khứ phân từ bị động."
},
{
"x": "I want to give her intravenous furosemide, is it okay?",
"v": "I'd like to start intravenous furosemide, if you agree.",
"why": "Với cấp trên cần dùng cách nói lịch sự, đề xuất và xin ý kiến thay vì “I want… is it okay?”."
},
{
"x": "She stopped to take furosemide a week ago.",
"v": "She stopped taking furosemide a week ago.",
"why": "“stop to take” nghĩa là dừng lại để uống; “stop taking” mới là ngừng dùng thuốc."
}
],
"task": {
"scenario": "On a ward round, you must present Mr Daniel Hughes, a 58-year-old taxi driver admitted with central chest pain. His troponin is raised and the ECG shows ST depression. Present the case to your consultant, then answer a challenging question about your plan.",
"scenario_vi": "Trong buổi đi buồng, bạn phải trình bày ông Daniel Hughes, 58 tuổi, tài xế taxi, nhập viện vì đau ngực giữa. Troponin tăng và điện tâm đồ có ST chênh xuống. Hãy trình bày ca bệnh cho bác sĩ cấp trên, rồi trả lời một câu hỏi vặn về kế hoạch.",
"points": [
"Give a one-line summary with age, presenting complaint and key background",
"Summarise the history including relevant negatives and medicines",
"Report examination findings and key investigations",
"State your impression and a clear plan",
"Answer a difficult question and admit uncertainty where needed"
],
"seconds": [
75,
150
],
"self": [
"Mình mở đầu bằng một câu tóm tắt ngắn gọn.",
"Mình kể bệnh sử có chọn lọc, gồm cả triệu chứng âm tính.",
"Mình nêu khám và xét nghiệm theo đúng thứ tự.",
"Mình nêu chẩn đoán và kế hoạch rõ ràng.",
"Mình dùng “my impression is” và các cách nói thận trọng.",
"Mình trả lời câu hỏi vặn bình tĩnh và thừa nhận khi chưa chắc."
]
}
},
{
"id": "sp-conference",
"title": "Trình bày nghiên cứu tại hội thảo và trả lời câu hỏi",
"en": "Presenting research and answering questions at a conference",
"lvl": "C1",
"track": "gen",
"register": "formal",
"when": "Khi bạn báo cáo kết quả nghiên cứu ở hội thảo hoặc seminar rồi trả lời phản biện. Mục tiêu là trình bày mạch lạc, dùng cách nói thận trọng và xử lý khéo câu hỏi khó.",
"parts": [
{
"name": "Opening",
"vi": "Chào, nêu chủ đề và mục tiêu của bài nói; cho khán giả biết khi nào được hỏi.",
"ex": "Today I'll present our findings on how sleep affects exam performance."
},
{
"name": "Methods",
"vi": "Mô tả ngắn cách làm nghiên cứu, chỉ vào slide khi cần.",
"ex": "As you can see on this slide, we used wrist-worn trackers for fourteen days."
},
{
"name": "Results",
"vi": "Chuyển sang kết quả bằng từ nối rõ ràng và nêu con số chính.",
"ex": "Moving on to the results: students who slept fewer than six hours scored lower."
},
{
"name": "Conclusion",
"vi": "Tóm tắt kết luận bằng ngôn ngữ thận trọng và nói rõ giới hạn.",
"ex": "To sum up, our data suggest that short sleep may reduce exam performance, but we can't claim causation."
},
{
"name": "Handling questions",
"vi": "Ghi nhận câu hỏi khó, thừa nhận hạn chế và nêu hướng nghiên cứu tiếp theo.",
"ex": "That's a fair point. I accept that it can't be fully ruled out."
}
],
"phrases": [
{
"en": "Today I'll present",
"vi": "Hôm nay tôi sẽ trình bày…",
"use": "Opening"
},
{
"en": "I'd be glad to take questions",
"vi": "Tôi rất sẵn lòng nhận câu hỏi",
"use": "Opening"
},
{
"en": "As you can see on this slide",
"vi": "Như quý vị thấy trên slide này",
"use": "Methods"
},
{
"en": "Moving on to the results",
"vi": "Chuyển sang phần kết quả",
"use": "Results"
},
{
"en": "our data suggest that",
"vi": "dữ liệu của chúng tôi cho thấy rằng…",
"use": "Conclusion"
},
{
"en": "we can't claim causation",
"vi": "chúng tôi không thể khẳng định quan hệ nhân quả",
"use": "Conclusion"
},
{
"en": "That's a fair point",
"vi": "Đó là một nhận xét hợp lý",
"use": "Handling questions"
},
{
"en": "That's a really good question",
"vi": "Đó là câu hỏi rất hay",
"use": "Handling questions"
},
{
"en": "I accept that it can't be fully ruled out",
"vi": "Tôi thừa nhận không thể loại trừ hoàn toàn",
"use": "Handling questions"
},
{
"en": "please do get in touch",
"vi": "xin cứ liên hệ với tôi",
"use": "Handling questions"
}
],
"model": {
"type": "dialogue",
"roles": [
"Chair / audience",
"Dr Tran (speaker)"
],
"lines": [
{
"who": 0,
"en": "Our next speaker is Dr Mai Tran, who'll present her work on sleep and exam performance. Dr Tran, whenever you're ready.",
"vi": "Diễn giả tiếp theo là tiến sĩ Mai Tran, người sẽ trình bày nghiên cứu về giấc ngủ và thành tích thi. Tiến sĩ Tran, mời chị bắt đầu.",
"hint": ""
},
{
"who": 1,
"en": "Thank you, and good afternoon, everyone. Today I'll present our findings on how sleep affects exam performance among 400 university students, and I'll leave time for questions at the end.",
"vi": "Xin cảm ơn, chào quý vị buổi chiều. Hôm nay tôi sẽ trình bày kết quả về tác động của giấc ngủ lên thành tích thi của 400 sinh viên đại học, và tôi sẽ dành thời gian hỏi đáp ở cuối.",
"hint": "Cảm ơn, chào mọi người, nêu chủ đề về giấc ngủ và thành tích thi của 400 sinh viên, hẹn hỏi đáp ở cuối. [thank you / present / findings / questions at the end]"
},
{
"who": 0,
"en": "Before you go on, could you tell us how you measured sleep?",
"vi": "Trước khi chị tiếp tục, chị có thể cho biết chị đo giấc ngủ bằng cách nào không?",
"hint": ""
},
{
"who": 1,
"en": "Of course. As you can see on this slide, we used wrist-worn trackers for fourteen days, and students also completed a daily sleep diary.",
"vi": "Dĩ nhiên ạ. Như quý vị thấy trên slide này, chúng tôi dùng thiết bị đeo cổ tay trong mười bốn ngày, và sinh viên cũng ghi nhật ký giấc ngủ hằng ngày.",
"hint": "Trả lời cách đo, chỉ vào slide: thiết bị đeo cổ tay 14 ngày và nhật ký giấc ngủ. [of course / slide / trackers / diary]"
},
{
"who": 0,
"en": "Thanks. Please continue.",
"vi": "Cảm ơn. Mời chị tiếp tục.",
"hint": ""
},
{
"who": 1,
"en": "Moving on to the results: students who slept fewer than six hours scored on average eight points lower, and this difference remained significant after we adjusted for study time.",
"vi": "Chuyển sang kết quả: sinh viên ngủ dưới sáu giờ có điểm trung bình thấp hơn tám điểm, và khác biệt này vẫn có ý nghĩa sau khi chúng tôi hiệu chỉnh thời gian học.",
"hint": "Chuyển sang kết quả: ngủ dưới sáu giờ thì điểm thấp hơn tám điểm, vẫn có ý nghĩa sau khi hiệu chỉnh thời gian học. [moving on / fewer than six hours / eight points / adjusted]"
},
{
"who": 0,
"en": "We have about ten minutes left, so please summarise your conclusions.",
"vi": "Chúng ta còn khoảng mười phút, nên xin chị tóm tắt kết luận.",
"hint": ""
},
{
"who": 1,
"en": "To sum up, our data suggest that short sleep may reduce exam performance, although this is an observational study, so we can't claim causation. I'd be glad to take questions.",
"vi": "Tóm lại, dữ liệu cho thấy ngủ ít có thể làm giảm thành tích thi, tuy đây là nghiên cứu quan sát nên chúng tôi không thể khẳng định quan hệ nhân quả. Tôi rất sẵn lòng nhận câu hỏi.",
"hint": "Kết luận thận trọng: ngủ ít có thể giảm điểm, nghiên cứu quan sát nên không khẳng định nhân quả; mời hỏi. [to sum up / suggest / may / causation]"
},
{
"who": 0,
"en": "Your sample was all from one university. Isn't it a bit of a stretch to generalise these results?",
"vi": "Mẫu của chị đều từ một trường đại học. Suy rộng kết quả này có hơi quá không?",
"hint": ""
},
{
"who": 1,
"en": "That's a fair point, and it's certainly a limitation. We can't be sure the results hold elsewhere, but the effect was consistent across all four faculties, so it seems plausible.",
"vi": "Đó là nhận xét hợp lý và chắc chắn là một hạn chế. Chúng tôi không thể chắc kết quả đúng ở nơi khác, nhưng hiệu ứng nhất quán ở cả bốn khoa nên có vẻ hợp lý.",
"hint": "Công nhận đó là hạn chế, nói không chắc áp dụng nơi khác nhưng hiệu ứng nhất quán ở bốn khoa. [fair point / limitation / consistent / plausible]"
},
{
"who": 0,
"en": "But couldn't stressed students simply sleep less and also perform worse? Isn't that confounding?",
"vi": "Nhưng chẳng phải sinh viên căng thẳng có thể vừa ngủ ít vừa thi tệ hơn sao? Đó không phải là yếu tố gây nhiễu à?",
"hint": ""
},
{
"who": 1,
"en": "That's a really good question. We adjusted for self-reported stress, but I accept that it can't be fully ruled out. A longitudinal design would help, and that's our next step.",
"vi": "Đó là câu hỏi rất hay. Chúng tôi đã hiệu chỉnh theo mức căng thẳng tự báo cáo, nhưng tôi thừa nhận không thể loại trừ hoàn toàn. Thiết kế theo dõi dọc sẽ giúp ích, và đó là bước tiếp theo.",
"hint": "Khen câu hỏi, nói đã hiệu chỉnh căng thẳng nhưng không loại trừ hoàn toàn, bước tiếp theo là nghiên cứu theo dõi dọc. [good question / adjusted / ruled out / longitudinal]"
},
{
"who": 0,
"en": "Thank you. Unfortunately, we're out of time. Let's thank Dr Tran once more.",
"vi": "Cảm ơn chị. Rất tiếc đã hết giờ. Xin cùng cảm ơn tiến sĩ Tran một lần nữa.",
"hint": ""
},
{
"who": 1,
"en": "Thank you all, and please do get in touch if you'd like to discuss this further.",
"vi": "Cảm ơn tất cả quý vị, và xin cứ liên hệ với tôi nếu muốn trao đổi thêm.",
"hint": "Cảm ơn mọi người và mời liên hệ nếu muốn trao đổi thêm. [thank you all / get in touch / discuss]"
}
],
"notes": [
{
"line": 1,
"vi": "Mở bài nêu chủ đề, quy mô mẫu và cách tổ chức hỏi đáp để khán giả biết mình sẽ nghe gì."
},
{
"line": 3,
"vi": "“As you can see on this slide” dẫn khán giả nhìn vào slide, nhờ đó phần giải thích ngắn hơn."
},
{
"line": 7,
"vi": "“suggest / may / although” là cách nói thận trọng (hedging), tránh khẳng định quá mức khi thiết kế chưa cho phép."
},
{
"line": 11,
"vi": "Với câu hỏi khó: ghi nhận (“That's a really good question”), thừa nhận hạn chế, rồi nêu hướng giải quyết."
}
]
},
"pron": [
{
"en": "As you can see on this slide",
"tip": "“As you” nối thành /əzjuː/; nhấn “see” và “slide”; “can” đọc yếu /kən/; đọc rõ /d/ cuối “slide”."
},
{
"en": "our data suggest that",
"tip": "“data” có thể đọc /ˈdeɪtə/; nhấn “DAta” và “sugGEST”; “that” yếu /ðət/ khi là liên từ."
},
{
"en": "we can't claim causation",
"tip": "“can't” /kɑːnt/ nhấn mạnh hơn “can”; “causation” /kɔːˈzeɪʃn/ nhấn âm 2; đọc rõ /m/ trong “claim”."
},
{
"en": "That's a really good question",
"tip": "Nhấn “REALLY” và “GOOD”; “question” /ˈkwestʃən/ – đọc /tʃ/ chứ không phải /ʃ/; giọng xuống ở cuối."
}
],
"mistakes": [
{
"x": "Our study prove that sleeping less cause low scores.",
"v": "Our study suggests that sleeping less may lead to lower scores.",
"why": "Chủ ngữ số ít cần “-s”, và “prove… cause” khẳng định nhân quả quá mức; nên dùng “suggests… may lead to”."
},
{
"x": "As you see in this slide, the difference is significantly.",
"v": "As you can see on this slide, the difference is significant.",
"why": "Dùng “on this slide”; sau “is” cần tính từ “significant”, không phải trạng từ “significantly”."
},
{
"x": "Your question is very difficult, I don't know.",
"v": "That's a fair point. I'm not sure we can fully answer that yet.",
"why": "Nói “I don't know” cộc lốc trong hội thảo; nên ghi nhận câu hỏi và thừa nhận giới hạn một cách chuyên nghiệp."
},
{
"x": "Thank you for listening my presentation.",
"v": "Thank you for listening.",
"why": "“listen” cần giới từ “to” (listening to my presentation); cách nói gọn “Thank you for listening” là tự nhiên nhất."
}
],
"task": {
"scenario": "You are presenting a small study at a university seminar: a survey of 250 commuters about why they switched from cars to bicycles. Give a two-minute summary, then respond to an audience member who says your sample was too small.",
"scenario_vi": "Bạn trình bày một nghiên cứu nhỏ ở seminar đại học: khảo sát 250 người đi làm về lý do họ chuyển từ ô tô sang xe đạp. Hãy tóm tắt trong hai phút, rồi đáp lại một khán giả nói mẫu của bạn quá nhỏ.",
"points": [
"Open the talk and state your aim",
"Describe your method and refer to a slide",
"Report your main result with a number",
"Draw a cautious conclusion using hedging language",
"Respond to the criticism that the sample was too small"
],
"seconds": [
75,
150
],
"self": [
"Mình đã mở bài và nêu mục tiêu rõ ràng.",
"Mình nhắc tới slide bằng “As you can see on this slide”.",
"Mình nêu số liệu chính và dùng từ nối như “Moving on to…”.",
"Mình dùng cách nói thận trọng như “suggest” và “may”.",
"Mình ghi nhận câu hỏi khó và thừa nhận hạn chế.",
"Mình nói chậm, ngắt nghỉ đúng chỗ và không đọc từ slide."
]
}
},
{
"id": "sp-chair-meeting",
"title": "Chủ trì một cuộc họp công việc",
"en": "Chairing a business meeting",
"lvl": "C1",
"track": "gen",
"register": "formal",
"when": "Bạn là người điều hành cuộc họp và cần mở đầu, đi qua chương trình, kiểm soát thời gian và các ý kiến. Mục tiêu là kết thúc với quyết định và việc cần làm rõ ràng.",
"parts": [
{
"name": "Opening",
"vi": "Bắt đầu đúng giờ, cảm ơn mọi người và nêu mục tiêu của cuộc họp.",
"ex": "Right, let's make a start. Thanks everyone for coming. Today we need to settle the launch date."
},
{
"name": "Agenda",
"vi": "Nêu các mục trong chương trình và thứ tự sẽ bàn.",
"ex": "There are three items on the agenda. Let's take the launch date first."
},
{
"name": "Managing contributions",
"vi": "Mời người khác phát biểu, lịch sự ngắt lời khi ai đó nói quá dài.",
"ex": "Can I stop you there for a moment? Could you give us the main risk in one sentence?"
},
{
"name": "Keeping to time",
"vi": "Nhắc giới hạn thời gian và hoãn các vấn đề lạc đề sang lần sau.",
"ex": "We'll finish by ten to eleven at the latest. Let's park the hiring plan until next week."
},
{
"name": "Summarising",
"vi": "Tóm tắt quyết định, người phụ trách và hạn chót, rồi kết thúc họp.",
"ex": "So, to sum up: we're moving the launch to March. I'll send the minutes this afternoon."
}
],
"phrases": [
{
"en": "Right, let's make a start",
"vi": "Nào, chúng ta bắt đầu thôi",
"use": "Opening"
},
{
"en": "There are three items on the agenda",
"vi": "Chương trình có ba mục",
"use": "Agenda"
},
{
"en": "Let's take the launch date first",
"vi": "Ta bàn ngày ra mắt trước",
"use": "Agenda"
},
{
"en": "Can I stop you there for a moment?",
"vi": "Cho phép tôi ngắt anh một chút nhé?",
"use": "Managing contributions"
},
{
"en": "Could you give us the main risk in one sentence?",
"vi": "Anh có thể nêu rủi ro chính trong một câu không?",
"use": "Managing contributions"
},
{
"en": "We'll finish by ten to eleven at the latest",
"vi": "Muộn nhất là mười một giờ kém mười ta sẽ kết thúc",
"use": "Keeping to time"
},
{
"en": "Let's park the hiring plan until next week",
"vi": "Tạm gác kế hoạch tuyển dụng sang tuần sau",
"use": "Keeping to time"
},
{
"en": "Are we agreed on March, then?",
"vi": "Vậy chúng ta thống nhất tháng Ba chứ?",
"use": "Summarising"
},
{
"en": "So, to sum up",
"vi": "Vậy, tóm lại",
"use": "Summarising"
},
{
"en": "I'll send the minutes this afternoon",
"vi": "Chiều nay tôi sẽ gửi biên bản họp",
"use": "Summarising"
}
],
"model": {
"type": "dialogue",
"roles": [
"Mark (colleague)",
"You (chair)"
],
"lines": [
{
"who": 1,
"en": "Right, let's make a start, as we're a few minutes behind. Thanks everyone for coming. Today we need to settle the launch date.",
"vi": "Nào, chúng ta bắt đầu thôi vì đã trễ vài phút. Cảm ơn mọi người đã đến. Hôm nay ta cần chốt ngày ra mắt.",
"hint": "Mở đầu, cảm ơn mọi người và nêu mục tiêu hôm nay. [make a start / thanks / settle / launch date]"
},
{
"who": 0,
"en": "Sounds good. Before we begin, could I just check how long we have? I've got a client call at eleven.",
"vi": "Nghe ổn. Trước khi bắt đầu, tôi hỏi chúng ta có bao lâu được không? Tôi có cuộc gọi với khách hàng lúc mười một giờ.",
"hint": ""
},
{
"who": 1,
"en": "We'll finish by ten to eleven at the latest. There are three items on the agenda: the launch date, the budget and the hiring plan. Let's take the launch date first.",
"vi": "Muộn nhất là mười một giờ kém mười ta sẽ xong. Có ba mục: ngày ra mắt, ngân sách và kế hoạch tuyển dụng. Ta bàn ngày ra mắt trước.",
"hint": "Nói giờ kết thúc, nêu ba mục chương trình và bắt đầu mục đầu. [finish by / three items / take first]"
},
{
"who": 0,
"en": "Well, I think we should delay the launch until March. The testing is nowhere near finished, and a rushed release would damage our reputation, especially with the larger clients.",
"vi": "Tôi nghĩ nên hoãn ra mắt đến tháng Ba. Việc kiểm thử còn lâu mới xong, và phát hành vội sẽ hại uy tín, nhất là với các khách hàng lớn.",
"hint": ""
},
{
"who": 1,
"en": "That's a valid concern, Mark. Can I stop you there for a moment? We only have ten minutes for this item, so could you give us the main risk in one sentence?",
"vi": "Đó là mối lo chính đáng, Mark. Cho tôi ngắt anh một chút nhé? Mục này chỉ có mười phút, anh nêu rủi ro chính trong một câu được không?",
"hint": "Ghi nhận ý kiến, lịch sự ngắt lời, nhắc chỉ có mười phút và xin một câu. [valid concern / stop you / ten minutes / main risk]"
},
{
"who": 0,
"en": "Sure. The main risk is that two critical bugs are still open, and fixing them could take six weeks.",
"vi": "Được. Rủi ro chính là hai lỗi nghiêm trọng vẫn chưa xử lý, và sửa có thể mất sáu tuần.",
"hint": ""
},
{
"who": 1,
"en": "Thank you, that's very clear. Let's park the hiring plan until next week, because it depends on the date. Are we agreed on March, then?",
"vi": "Cảm ơn, rất rõ ràng. Tạm gác kế hoạch tuyển dụng sang tuần sau vì nó phụ thuộc vào ngày. Vậy ta thống nhất tháng Ba chứ?",
"hint": "Cảm ơn, hoãn mục tuyển dụng sang tuần sau và hỏi mọi người có đồng ý tháng Ba không. [park / next week / depends / agreed]"
},
{
"who": 0,
"en": "I'm happy with March, as long as we tell the clients early. Otherwise they'll assume we've missed a deadline.",
"vi": "Tôi đồng ý tháng Ba, miễn là báo sớm cho khách hàng. Nếu không họ sẽ nghĩ ta trễ hạn.",
"hint": ""
},
{
"who": 1,
"en": "Agreed. So, to sum up: we're moving the launch to March, Mark will list the open bugs by Friday, and I'll inform the clients on Monday. Is that right?",
"vi": "Đồng ý. Vậy tóm lại: ta dời ra mắt sang tháng Ba, Mark liệt kê các lỗi chưa xử lý trước thứ Sáu, và tôi báo khách hàng vào thứ Hai. Đúng chứ?",
"hint": "Tóm tắt quyết định và việc từng người làm kèm hạn, rồi hỏi xác nhận. [sum up / March / by Friday / Monday / right]"
},
{
"who": 0,
"en": "Yes, that covers it. Though I'd also like someone to own the client message, in case questions come back.",
"vi": "Vâng, vậy là đủ. Nhưng tôi muốn có người chịu trách nhiệm thông điệp gửi khách, phòng khi họ hỏi lại.",
"hint": ""
},
{
"who": 1,
"en": "Good idea. I'll take that on myself. We're out of time, so thanks for your input, everyone. I'll send the minutes this afternoon, and we'll meet again next Tuesday.",
"vi": "Ý hay. Tôi sẽ nhận việc đó. Hết giờ rồi, cảm ơn đóng góp của mọi người. Chiều nay tôi gửi biên bản, và thứ Ba tuần sau ta họp lại.",
"hint": "Nhận việc đó, báo hết giờ, cảm ơn, hứa gửi biên bản chiều nay và hẹn họp lại. [take on / out of time / minutes / next Tuesday]"
},
{
"who": 0,
"en": "Perfect. Thanks for keeping us on track.",
"vi": "Tuyệt. Cảm ơn bạn đã giữ cho cuộc họp đi đúng hướng.",
"hint": ""
}
],
"notes": [
{
"line": 0,
"vi": "“Right, let's make a start” báo hiệu cuộc họp bắt đầu; nêu ngay mục tiêu giúp mọi người tập trung."
},
{
"line": 4,
"vi": "Ghi nhận trước (“That's a valid concern”) rồi mới ngắt bằng “Can I stop you there?” giúp bạn kiểm soát mà không thô lỗ."
},
{
"line": 6,
"vi": "“Park” nghĩa là tạm gác một vấn đề; đây là cách gọn để tránh lạc đề mà không gạt bỏ ý kiến của ai."
},
{
"line": 8,
"vi": "Bản tóm tắt tốt có ba phần: quyết định, người phụ trách và hạn chót, kết thúc bằng câu xác nhận “Is that right?”."
}
]
},
"pron": [
{
"en": "Right, let's make a start",
"tip": "Nhấn mạnh “start” và đọc rõ âm cuối /t/ trong “let's” và “start”; người Việt hay bỏ âm cuối này."
},
{
"en": "Can I stop you there for a moment?",
"tip": "Lên giọng ở cuối câu hỏi; “can” là dạng yếu /kən/, nhấn “stop” và “moment”."
},
{
"en": "So, to sum up",
"tip": "Ngắt nhẹ sau “So”, nhấn “sum”; nối “sum up” thành /sʌmˈʌp/ nghe liền mạch."
},
{
"en": "Are we agreed on March, then?",
"tip": "Xuống giọng rồi lên nhẹ ở “then”; phát âm rõ /tʃ/ trong “March” và âm cuối /d/ của “agreed”."
}
],
"mistakes": [
{
"x": "We have three item in the agenda.",
"v": "We have three items on the agenda.",
"why": "Danh từ số nhiều cần -s, và “on the agenda” mới là giới từ đúng."
},
{
"x": "Let's discuss about the budget.",
"v": "Let's discuss the budget.",
"why": "“Discuss” là ngoại động từ, không đi với “about”."
},
{
"x": "Please you stop talking, we have not much time.",
"v": "Could I stop you there? We don't have much time.",
"why": "Cách nói này quá cộc; hãy dùng câu hỏi lịch sự và “don't have much time”."
},
{
"x": "I will summary the decisions now.",
"v": "I'll summarise the decisions now.",
"why": "“Summary” là danh từ; động từ là “summarise”."
}
],
"task": {
"scenario": "You are chairing a weekly team meeting about a delayed office move. Two colleagues disagree about the new date, and one keeps talking for too long. You must keep the meeting on time and end with clear action points.",
"scenario_vi": "Bạn chủ trì cuộc họp nhóm hằng tuần về việc dời văn phòng bị trễ. Hai đồng nghiệp bất đồng về ngày mới, và một người nói quá dài. Bạn phải giữ đúng giờ và kết thúc với các việc cần làm rõ ràng.",
"points": [
"Open the meeting and state the goal",
"Present a short agenda with timings",
"Politely interrupt someone who talks too long",
"Park an off-topic issue for later",
"Summarise decisions and action points with names and deadlines"
],
"seconds": [
90,
150
],
"self": [
"Mình đã mở đầu và nêu rõ mục tiêu cuộc họp",
"Mình đã nêu chương trình và giới hạn thời gian",
"Mình ngắt lời một cách lịch sự, không thô lỗ",
"Mình đã hoãn một vấn đề lạc đề bằng “park”",
"Mình tóm tắt quyết định, người phụ trách và hạn chót",
"Mình phát âm rõ âm cuối như /t/, /d/, /s/"
]
}
},
{
"id": "sp-debate-position",
"title": "Lập luận và bảo vệ quan điểm trong tranh biện",
"en": "Arguing and defending a position in a debate",
"lvl": "C1",
"track": "gen",
"register": "formal",
"when": "Bạn cần trình bày và bảo vệ một quan điểm trước người phản biện, dùng bằng chứng, nhượng bộ khi cần và phản bác thuyết phục. Mục tiêu là giữ lập luận chặt chẽ và lịch sự.",
"parts": [
{
"name": "Position",
"vi": "Nêu rõ quan điểm của bạn ngay từ đầu.",
"ex": "I'll argue that cities should ban private cars from their centres."
},
{
"name": "Evidence",
"vi": "Đưa số liệu hoặc ví dụ cụ thể và nêu nguồn.",
"ex": "According to the council's own figures, pollution fell by a third."
},
{
"name": "Concession",
"vi": "Thừa nhận điểm hợp lý của đối phương để tăng uy tín, rồi quay lại lập luận.",
"ex": "I concede that point. However, a ban can include exemptions."
},
{
"name": "Rebuttal",
"vi": "Phản bác lập luận của đối phương bằng lý lẽ hoặc dữ kiện.",
"ex": "I'd challenge that. Enforcement costs are modest compared with health costs."
},
{
"name": "Closing",
"vi": "Tóm lại lập luận chính và kêu gọi ủng hộ.",
"ex": "To conclude, the benefits clearly outweigh the costs."
}
],
"phrases": [
{
"en": "Thank you, chair",
"vi": "Xin cảm ơn chủ tọa",
"use": "Position"
},
{
"en": "I'll argue that",
"vi": "Tôi sẽ lập luận rằng",
"use": "Position"
},
{
"en": "According to the council's own figures",
"vi": "Theo số liệu của chính hội đồng thành phố",
"use": "Evidence"
},
{
"en": "The evidence says otherwise",
"vi": "Bằng chứng cho thấy điều ngược lại",
"use": "Evidence"
},
{
"en": "I concede that point",
"vi": "Tôi thừa nhận điểm đó",
"use": "Concession"
},
{
"en": "I'd challenge that",
"vi": "Tôi xin phản bác điều đó",
"use": "Rebuttal"
},
{
"en": "That's possible in the short term, but",
"vi": "Điều đó có thể xảy ra trong ngắn hạn, nhưng",
"use": "Rebuttal"
},
{
"en": "To conclude",
"vi": "Để kết luận",
"use": "Closing"
},
{
"en": "The benefits clearly outweigh the costs",
"vi": "Lợi ích rõ ràng lớn hơn chi phí",
"use": "Closing"
},
{
"en": "I urge you to support this motion",
"vi": "Tôi kêu gọi quý vị ủng hộ đề xuất này",
"use": "Closing"
}
],
"model": {
"type": "dialogue",
"roles": [
"Opponent",
"You"
],
"lines": [
{
"who": 1,
"en": "Thank you, chair. I'll argue that cities should ban private cars from their centres, because it is the most realistic way to cut pollution.",
"vi": "Xin cảm ơn chủ tọa. Tôi sẽ lập luận rằng các thành phố nên cấm xe cá nhân vào trung tâm, vì đó là cách thực tế nhất để giảm ô nhiễm.",
"hint": "Cảm ơn chủ tọa, nêu quan điểm: cấm xe cá nhân ở trung tâm, vì giảm ô nhiễm. [I'll argue / ban / realistic way / pollution]"
},
{
"who": 0,
"en": "But a ban would hurt shops and disabled residents. Surely most people simply can't manage without a car in the centre?",
"vi": "Nhưng lệnh cấm sẽ gây hại cho cửa hàng và người khuyết tật. Chẳng lẽ hầu hết mọi người không thể sống thiếu xe ở trung tâm sao?",
"hint": ""
},
{
"who": 1,
"en": "The evidence says otherwise. When Varden closed its centre to cars, nitrogen dioxide fell by a third and shop sales rose, according to the council's own figures.",
"vi": "Bằng chứng cho thấy ngược lại. Khi Varden cấm xe ở trung tâm, khí nitơ đioxit giảm một phần ba và doanh thu cửa hàng tăng, theo số liệu của chính hội đồng.",
"hint": "Phản bác bằng ví dụ thành phố Varden: ô nhiễm giảm, doanh thu tăng, nêu nguồn. [evidence / Varden / fell by a third / according to]"
},
{
"who": 0,
"en": "That's one city. And disabled people rely on cars, which you haven't addressed at all.",
"vi": "Đó mới chỉ là một thành phố. Và người khuyết tật phụ thuộc vào xe, điều mà bạn hoàn toàn chưa đề cập.",
"hint": ""
},
{
"who": 1,
"en": "I concede that point: access for disabled residents matters. However, a ban can include exemptions, so it doesn't undermine the principle.",
"vi": "Tôi thừa nhận điểm đó: việc đi lại của người khuyết tật rất quan trọng. Tuy nhiên, lệnh cấm có thể có ngoại lệ, nên không làm lung lay nguyên tắc.",
"hint": "Thừa nhận điểm về người khuyết tật, rồi nói lệnh cấm có thể có ngoại lệ. [concede / access / exemptions / principle]"
},
{
"who": 0,
"en": "Exemptions would be abused, and enforcement is expensive. Your plan sounds good on paper, but not in practice.",
"vi": "Ngoại lệ sẽ bị lạm dụng, và việc thực thi rất tốn kém. Kế hoạch của bạn nghe hay trên giấy nhưng không khả thi.",
"hint": ""
},
{
"who": 1,
"en": "I'd challenge that. Enforcement costs are modest compared with the health costs of pollution, and cameras already work well in other cities.",
"vi": "Tôi xin phản bác. Chi phí thực thi không đáng kể so với chi phí y tế do ô nhiễm, và camera đã hoạt động tốt ở các thành phố khác.",
"hint": "Phản bác: chi phí thực thi nhỏ so với chi phí sức khỏe, camera đã hiệu quả. [challenge / enforcement / health costs / cameras]"
},
{
"who": 0,
"en": "Fine, but people will simply move their shopping to out-of-town malls.",
"vi": "Được thôi, nhưng người ta sẽ chuyển sang mua sắm ở các trung tâm thương mại ngoại ô.",
"hint": ""
},
{
"who": 1,
"en": "That's possible in the short term, but combined with cheap public transport, most shoppers would return, as Varden's experience suggests.",
"vi": "Điều đó có thể xảy ra trong ngắn hạn, nhưng kết hợp với giao thông công cộng giá rẻ, hầu hết khách sẽ quay lại, như kinh nghiệm của Varden cho thấy.",
"hint": "Thừa nhận ngắn hạn có thể, nhưng có giao thông công cộng rẻ thì khách quay lại. [short term / public transport / return / Varden]"
},
{
"who": 0,
"en": "Thank you both. Please make your closing statement.",
"vi": "Cảm ơn cả hai. Xin mời đưa ra phát biểu kết thúc.",
"hint": ""
},
{
"who": 1,
"en": "To conclude, a car ban improves health, safety and the local economy. Yes, it needs exemptions and investment, but the benefits clearly outweigh the costs. I urge you to support this motion.",
"vi": "Để kết luận, lệnh cấm xe cải thiện sức khỏe, an toàn và kinh tế địa phương. Đúng, nó cần ngoại lệ và đầu tư, nhưng lợi ích rõ ràng lớn hơn chi phí. Tôi kêu gọi quý vị ủng hộ đề xuất này.",
"hint": "Kết luận: lợi ích về sức khỏe, an toàn, kinh tế, thừa nhận chi phí, kêu gọi ủng hộ. [conclude / outweigh / costs / urge / motion]"
}
],
"notes": [
{
"line": 0,
"vi": "Nêu quan điểm trong một câu bằng “I'll argue that”, kèm một lý do chính, để người nghe biết ngay bạn bảo vệ điều gì."
},
{
"line": 2,
"vi": "Nêu nguồn (“according to…”) làm bằng chứng đáng tin hơn; “The evidence says otherwise” phản bác mà vẫn lịch sự."
},
{
"line": 4,
"vi": "Nhượng bộ có chọn lọc (“I concede… However…”) cho thấy bạn công bằng, rồi chuyển lại thành lập luận có lợi cho mình."
},
{
"line": 6,
"vi": "“I'd challenge that” là cách phản bác trang trọng, tấn công lập luận chứ không công kích cá nhân."
}
]
},
"pron": [
{
"en": "I concede that point",
"tip": "Nhấn “concede” ở âm tiết thứ hai /kənˈsiːd/ và đọc rõ âm cuối /t/ của “point”."
},
{
"en": "The evidence says otherwise",
"tip": "Nhấn “EV” trong “evidence” và “OTH” trong “otherwise”; đọc /ð/ bằng cách đặt lưỡi giữa răng."
},
{
"en": "The benefits clearly outweigh the costs",
"tip": "Nhấn “benefits”, “clearly”, “outweigh”; đọc rõ âm cuối /ts/ trong “benefits” và “costs”."
},
{
"en": "To conclude",
"tip": "“To” đọc yếu /tə/, nhấn “clude” /kənˈkluːd/ và xuống giọng để báo hiệu phần kết."
}
],
"mistakes": [
{
"x": "I am agree with this motion.",
"v": "I agree with this motion.",
"why": "“Agree” là động từ, không dùng với “am”."
},
{
"x": "The pollution is decrease after the ban.",
"v": "Pollution decreased after the ban.",
"why": "Cần động từ chia thì quá khứ, không dùng “is” cộng động từ nguyên mẫu; “pollution” không cần “the”."
},
{
"x": "You are wrong, this is stupid idea.",
"v": "I'd challenge that; I think the idea is sound.",
"why": "Công kích trực tiếp quá thô lỗ trong tranh biện; hãy phản bác lập luận và nhớ mạo từ."
},
{
"x": "In my opinion, I think that the benefit is more big than cost.",
"v": "In my view, the benefits are greater than the costs.",
"why": "Không nói “in my opinion, I think” cùng lúc; dùng “greater”, không dùng “more big”, và danh từ số nhiều."
}
],
"task": {
"scenario": "You are in a university debate and must argue for or against the motion that remote work should become the default for office jobs. State your position, support it with evidence, concede one point and rebut your opponent. Then close persuasively.",
"scenario_vi": "Bạn tham gia một buổi tranh biện ở đại học và phải ủng hộ hoặc phản đối đề xuất rằng làm việc từ xa nên là mặc định cho công việc văn phòng. Nêu quan điểm, dùng bằng chứng, nhượng bộ một điểm và phản bác đối thủ, rồi kết thúc thuyết phục.",
"points": [
"State your position clearly",
"Give one piece of evidence and its source",
"Concede one fair point from your opponent",
"Rebut an opposing argument",
"Close with a summary and a call to support you"
],
"seconds": [
90,
150
],
"self": [
"Mình nêu quan điểm rõ ràng ngay từ đầu",
"Mình đưa ra bằng chứng cụ thể và nêu nguồn",
"Mình thừa nhận một điểm hợp lý của đối phương",
"Mình phản bác lập luận chứ không công kích cá nhân",
"Mình kết luận ngắn gọn và kêu gọi ủng hộ",
"Mình nhấn đúng các từ khóa và đọc rõ âm cuối"
]
}
},
{
"id": "sp-appraisal-feedback",
"title": "Góp ý và nhận góp ý trong buổi đánh giá hiệu suất",
"en": "Giving and receiving feedback in a performance review",
"lvl": "C1",
"track": "gen",
"register": "formal",
"when": "Bạn cần trao đổi với sếp hoặc nhân viên trong buổi đánh giá hiệu suất. Mục tiêu là góp ý thẳng thắn nhưng khéo léo, phản hồi bình tĩnh và thống nhất bước tiếp theo.",
"parts": [
{
"name": "Opening positively",
"vi": "Mở đầu bằng điều tích cực và ghi nhận thành quả cụ thể.",
"ex": "I'd like to start by saying how impressed I've been with your work on the Hamburg account."
},
{
"name": "Specific examples",
"vi": "Đưa ví dụ cụ thể thay vì nhận xét chung chung.",
"ex": "You brought in three new clients, and that's made a real difference to the team."
},
{
"name": "Raising a concern",
"vi": "Nêu vấn đề một cách ngoại giao, tập trung vào hành vi chứ không phải con người.",
"ex": "One concern, though: in a couple of meetings you held back your ideas until afterwards."
},
{
"name": "Responding to criticism",
"vi": "Ghi nhận góp ý, không phòng thủ, thể hiện bạn hiểu vấn đề.",
"ex": "That's fair, and I appreciate you telling me."
},
{
"name": "Agreeing next steps",
"vi": "Thống nhất hành động cụ thể, người phụ trách và thời hạn, rồi tóm tắt lại.",
"ex": "To sum up, I'll prepare points before meetings, and you'll arrange the coaching session."
}
],
"phrases": [
{
"en": "I'd like to start by saying",
"vi": "Trước hết tôi muốn nói rằng",
"use": "Opening positively"
},
{
"en": "That's made a real difference",
"vi": "Điều đó đã tạo ra khác biệt thực sự",
"use": "Specific examples"
},
{
"en": "One concern, though",
"vi": "Tuy nhiên có một điều tôi băn khoăn",
"use": "Raising a concern"
},
{
"en": "I'd like to hear them in the room",
"vi": "Tôi muốn nghe chúng ngay trong cuộc họp",
"use": "Raising a concern"
},
{
"en": "That's fair, and I appreciate you telling me",
"vi": "Anh/chị nói có lý, và tôi cảm ơn vì đã nói với tôi",
"use": "Responding to criticism"
},
{
"en": "I can see how it comes across as",
"vi": "Tôi hiểu vì sao điều đó bị nhìn nhận là",
"use": "Responding to criticism"
},
{
"en": "Would that help?",
"vi": "Như vậy có giúp được không?",
"use": "Agreeing next steps"
},
{
"en": "Is there anything you'd like more support with",
"vi": "Anh/chị có muốn tôi hỗ trợ thêm điều gì không",
"use": "Agreeing next steps"
},
{
"en": "I'd really value some coaching on",
"vi": "Tôi rất mong được kèm cặp về",
"use": "Agreeing next steps"
},
{
"en": "To sum up",
"vi": "Tóm lại",
"use": "Agreeing next steps"
}
],
"model": {
"type": "dialogue",
"roles": [
"Manager (Helen)",
"You (Minh)"
],
"lines": [
{
"who": 0,
"en": "Thanks for making time, Minh. I'd like to start by saying how impressed I've been with the way you took over the Hamburg account this year.",
"vi": "Cảm ơn em đã dành thời gian, Minh. Trước hết chị muốn nói là chị rất ấn tượng với cách em tiếp quản tài khoản Hamburg năm nay.",
"hint": ""
},
{
"who": 1,
"en": "Thank you, that's good to hear. It was a steep learning curve at first, but I've really enjoyed the challenge.",
"vi": "Cảm ơn chị, em rất vui khi nghe vậy. Lúc đầu khá khó khăn, nhưng em thực sự thích thử thách này.",
"hint": "Cảm ơn và nói lúc đầu rất khó nhưng bạn thích thử thách. [steep learning curve / enjoyed / challenge]"
},
{
"who": 0,
"en": "You brought in three new clients, and your reports have been consistently clear. That's made a real difference to the team.",
"vi": "Em mang về ba khách hàng mới, và báo cáo của em luôn rõ ràng. Điều đó đã tạo ra khác biệt thực sự cho cả nhóm.",
"hint": ""
},
{
"who": 1,
"en": "I'm glad they've been useful. I've tried to keep them short, because I know people don't have much time to read.",
"vi": "Em mừng vì chúng hữu ích. Em cố viết ngắn gọn vì biết mọi người không có nhiều thời gian đọc.",
"hint": "Nói bạn mừng vì báo cáo hữu ích và giải thích vì sao bạn viết ngắn. [glad / useful / short / time to read]"
},
{
"who": 0,
"en": "Exactly. One concern, though: in a couple of meetings you held back your ideas until afterwards. I'd like to hear them in the room.",
"vi": "Đúng vậy. Nhưng chị có một băn khoăn: trong vài cuộc họp em giữ ý kiến lại đến sau. Chị muốn nghe ngay trong cuộc họp.",
"hint": ""
},
{
"who": 1,
"en": "That's fair, and I appreciate you telling me. I sometimes worry about interrupting, but I can see how it comes across as being passive.",
"vi": "Chị nói có lý, và em cảm ơn chị đã nói. Đôi khi em ngại ngắt lời, nhưng em hiểu vì sao điều đó bị xem là thụ động.",
"hint": "Nhận góp ý, cảm ơn, giải thích bạn ngại ngắt lời nhưng hiểu vấn đề. [fair / appreciate / interrupting / comes across / passive]"
},
{
"who": 0,
"en": "Perhaps you could prepare one or two points before each meeting. Would that help?",
"vi": "Có lẽ em có thể chuẩn bị một hai ý trước mỗi cuộc họp. Như vậy có giúp được không?",
"hint": ""
},
{
"who": 1,
"en": "Yes, definitely. I could send you my main points the evening before, and then raise at least one of them during the meeting.",
"vi": "Chắc chắn rồi ạ. Em có thể gửi chị các ý chính vào tối hôm trước, rồi nêu ít nhất một ý trong cuộc họp.",
"hint": "Đồng ý và đề xuất gửi ý chính tối hôm trước, phát biểu ít nhất một ý. [definitely / evening before / raise / at least one]"
},
{
"who": 0,
"en": "That sounds like a good plan. Is there anything you'd like more support with from me over the next six months?",
"vi": "Nghe là một kế hoạch tốt. Trong sáu tháng tới em có muốn chị hỗ trợ thêm điều gì không?",
"hint": ""
},
{
"who": 1,
"en": "I'd really value some coaching on presenting to senior stakeholders. I'd like to take on more of that responsibility.",
"vi": "Em rất mong được kèm cặp về thuyết trình trước các bên liên quan cấp cao. Em muốn đảm nhận nhiều hơn việc đó.",
"hint": "Xin được kèm cặp về thuyết trình với lãnh đạo cấp cao, muốn nhận thêm trách nhiệm. [coaching / presenting / senior stakeholders / responsibility]"
},
{
"who": 0,
"en": "Let's set that up. I'll arrange a session with Priya in the next fortnight, and we can review progress in March.",
"vi": "Vậy mình sắp xếp nhé. Chị sẽ đặt một buổi với Priya trong hai tuần tới, và mình xem lại tiến độ vào tháng Ba.",
"hint": ""
},
{
"who": 1,
"en": "Perfect. To sum up, I'll prepare points before meetings, and you'll arrange the coaching session. Thanks for the honest feedback.",
"vi": "Tuyệt ạ. Tóm lại, em sẽ chuẩn bị ý trước các cuộc họp, còn chị sắp xếp buổi kèm cặp. Cảm ơn chị đã góp ý thẳng thắn.",
"hint": "Tóm tắt hai việc của hai bên và cảm ơn vì góp ý thẳng thắn. [sum up / prepare points / arrange / honest feedback]"
}
],
"notes": [
{
"line": 0,
"vi": "Mở đầu bằng “I'd like to start by saying” và một thành tích cụ thể giúp buổi nói chuyện bớt căng thẳng và nghe trang trọng, chuyên nghiệp."
},
{
"line": 4,
"vi": "“One concern, though” và “I'd like to hear them in the room” nêu vấn đề qua hành vi cụ thể, không chỉ trích con người nên nghe ngoại giao."
},
{
"line": 5,
"vi": "“That's fair” kết hợp “I can see how” cho thấy bạn nhận góp ý mà không phòng thủ, đồng thời vẫn giải thích được lý do của mình."
},
{
"line": 11,
"vi": "Tóm tắt cuối buổi bằng “To sum up” xác nhận hai bên hiểu giống nhau về việc cần làm và người chịu trách nhiệm."
}
]
},
"pron": [
{
"en": "One concern, though",
"tip": "Nhấn mạnh “con-cern”, xuống giọng ở “though” và dừng nhẹ sau dấu phẩy. Đọc rõ âm cuối /n/ của “concern”."
},
{
"en": "That's fair, and I appreciate you telling me",
"tip": "“and” đọc yếu thành /ən/ hoặc /n/. Nhấn “ap-PRE-ci-ate”, phát âm /ʃ/ trong “appreciate” chứ không đọc “si”."
},
{
"en": "I can see how it comes across as being passive",
"tip": "Nối “comes across as” thành một cụm liền mạch, nhấn “a-CROSS” và đừng bỏ âm /s/ cuối ở “passive” và “comes”."
},
{
"en": "I'd really value some coaching on",
"tip": "Nhấn “VAL-ue” và “COACH-ing”; “I'd” đọc nhẹ. Âm cuối /tʃ/ của “coach” cần bật rõ trước khi sang “ing”."
}
],
"mistakes": [
{
"x": "I am very appreciate your feedback.",
"v": "I really appreciate your feedback.",
"why": "“Appreciate” là động từ nên không dùng “am” trước nó; dùng trạng từ “really” để nhấn mạnh."
},
{
"x": "I think you have a problem in the meeting.",
"v": "I have one concern about how you contribute in meetings.",
"why": "Nói “you have a problem” nghe gay gắt; nên diễn đạt nhẹ nhàng qua “concern” và nói về hành vi cụ thể."
},
{
"x": "Your report is very good, I want you continue.",
"v": "Your reports are very good, and I'd like you to continue.",
"why": "Sau “want/would like” cần “you to + động từ”, và “report” nên dùng số nhiều khi nói chung."
},
{
"x": "I will improve it from next month on, I promise to you.",
"v": "I'll start improving it next month, I promise.",
"why": "“Promise” không đi với “to you” theo cách này, và “from next month on” không tự nhiên; dùng “start … next month”."
}
],
"task": {
"scenario": "You are the team leader and it is time for your colleague Tom's annual review. He is very reliable, but he often misses deadlines when he takes on extra projects. Give him feedback and agree on next steps.",
"scenario_vi": "Bạn là trưởng nhóm và đến lúc đánh giá thường niên của đồng nghiệp tên Tom. Anh ấy rất đáng tin cậy nhưng hay trễ hạn khi nhận thêm dự án. Hãy góp ý và thống nhất bước tiếp theo.",
"points": [
"Open with something positive and give a specific example",
"Raise the problem of missed deadlines diplomatically",
"Respond to a defensive comment from Tom calmly",
"Agree on at least two concrete next steps",
"Summarise what you have agreed"
],
"seconds": [
90,
150
],
"self": [
"Mình đã mở đầu bằng điều tích cực và có ví dụ cụ thể",
"Mình nêu vấn đề một cách ngoại giao, nói về hành vi chứ không chỉ trích con người",
"Mình đã dùng ít nhất hai cụm như “One concern, though” hoặc “That's fair”",
"Mình thống nhất được các bước tiếp theo rõ ràng",
"Mình đã tóm tắt lại bằng “To sum up” hoặc cách nói tương tự",
"Mình nói trôi chảy, giọng điệu lịch sự và bình tĩnh"
]
}
},
{
"id": "sp-explain-anatomy",
"title": "Giải thích cơ thể người cho người không chuyên",
"en": "Explaining how a body system works to non-specialists",
"lvl": "C1",
"track": "med",
"register": "neutral",
"when": "Bạn cần giải thích cho bệnh nhân, người nhà hoặc sinh viên cách một hệ cơ quan hoạt động. Mục tiêu là dùng thuật ngữ cơ bản chính xác, ví von dễ hiểu và kiểm tra xem họ đã hiểu chưa.",
"parts": [
{
"name": "Setting the scene",
"vi": "Bắt đầu bằng hình ảnh tổng quát dễ hình dung.",
"ex": "Think of the heart as a pump, about the size of a fist."
},
{
"name": "Naming the parts",
"vi": "Gọi tên các cơ quan bằng từ cơ bản và giải thích ngắn gọn chức năng.",
"ex": "Blood travels through tubes called blood vessels."
},
{
"name": "Using an analogy",
"vi": "Dùng phép so sánh với đồ vật quen thuộc.",
"ex": "Arteries are thick and muscular, like hoses under pressure."
},
{
"name": "Correcting misunderstandings",
"vi": "Nhẹ nhàng sửa quan niệm sai thường gặp.",
"ex": "That's a common misunderstanding. The heart is still working."
},
{
"name": "Checking understanding",
"vi": "Hỏi xem người nghe đã hiểu chưa và mời họ hỏi thêm.",
"ex": "Does that make sense so far, or shall I go over anything again?"
}
],
"phrases": [
{
"en": "Think of the heart as",
"vi": "Hãy hình dung tim như là",
"use": "Setting the scene"
},
{
"en": "tubes called blood vessels",
"vi": "những ống gọi là mạch máu",
"use": "Naming the parts"
},
{
"en": "It's a figure of eight",
"vi": "Nó giống như số tám",
"use": "Naming the parts"
},
{
"en": "pick up oxygen",
"vi": "nhận oxy",
"use": "Naming the parts"
},
{
"en": "like hoses under pressure",
"vi": "giống như ống nước chịu áp lực",
"use": "Using an analogy"
},
{
"en": "that's a common misunderstanding",
"vi": "đó là một hiểu lầm khá phổ biến",
"use": "Correcting misunderstandings"
},
{
"en": "fluid can build up in",
"vi": "dịch có thể tích tụ ở",
"use": "Correcting misunderstandings"
},
{
"en": "Does that make sense so far",
"vi": "Đến đây bác/anh/chị có hiểu không",
"use": "Checking understanding"
},
{
"en": "shall I go over anything again",
"vi": "tôi có cần giải thích lại phần nào không",
"use": "Checking understanding"
},
{
"en": "a very clear way to put it",
"vi": "một cách diễn đạt rất rõ ràng",
"use": "Checking understanding"
}
],
"model": {
"type": "dialogue",
"roles": [
"Relative (Mrs Okafor)",
"You (doctor)"
],
"lines": [
{
"who": 0,
"en": "Doctor, my father has just been told he has heart failure. I don't really understand what's going on inside his body. Could you explain it simply?",
"vi": "Bác sĩ, bố tôi vừa được báo là bị suy tim. Tôi không hiểu bên trong cơ thể ông đang xảy ra chuyện gì. Bác sĩ giải thích đơn giản giúp tôi được không?",
"hint": ""
},
{
"who": 1,
"en": "Of course. Think of the heart as a pump, about the size of a fist, that sends blood around the body through tubes called blood vessels.",
"vi": "Tất nhiên rồi. Hãy hình dung tim như một cái bơm to bằng nắm tay, đẩy máu đi khắp cơ thể qua những ống gọi là mạch máu.",
"hint": "Đồng ý giải thích, ví tim như cái bơm cỡ nắm tay đẩy máu qua mạch máu. [think of / pump / size of a fist / blood vessels]"
},
{
"who": 0,
"en": "So how does the blood actually travel? Does it just go round in one big circle?",
"vi": "Vậy máu đi như thế nào? Có phải nó chỉ đi vòng một vòng lớn không?",
"hint": ""
},
{
"who": 1,
"en": "Almost. It's a figure of eight. The right side sends blood to the lungs to pick up oxygen, and the left side pumps it around the body.",
"vi": "Gần đúng. Nó giống số tám. Bên phải đưa máu lên phổi để nhận oxy, còn bên trái bơm máu đi khắp cơ thể.",
"hint": "Nói máu đi theo hình số tám: phải lên phổi lấy oxy, trái bơm đi cơ thể. [figure of eight / right side / lungs / left side]"
},
{
"who": 0,
"en": "And the tubes, are they all the same?",
"vi": "Còn các ống đó thì sao, chúng có giống nhau không?",
"hint": ""
},
{
"who": 1,
"en": "No. Arteries carry oxygen-rich blood away from the heart and are thick and muscular, like hoses under pressure. Veins bring it back and are thinner and softer.",
"vi": "Không. Động mạch mang máu giàu oxy rời khỏi tim, dày và nhiều cơ, như ống nước chịu áp lực. Tĩnh mạch đưa máu trở về, mỏng và mềm hơn.",
"hint": "So sánh động mạch (dày, như ống nước) với tĩnh mạch (mỏng, đưa máu về). [arteries / away / hoses / veins / thinner]"
},
{
"who": 0,
"en": "I see. So what goes wrong in heart failure? Has the heart stopped?",
"vi": "Tôi hiểu rồi. Vậy suy tim là hỏng ở chỗ nào? Tim đã ngừng đập rồi sao?",
"hint": ""
},
{
"who": 1,
"en": "No, that's a common misunderstanding. The heart is still working, but the muscle is weaker, so fluid can build up in the lungs and legs.",
"vi": "Không, đó là hiểu lầm khá phổ biến. Tim vẫn hoạt động, nhưng cơ tim yếu hơn nên dịch có thể tích tụ ở phổi và chân.",
"hint": "Sửa hiểu lầm: tim vẫn chạy nhưng cơ yếu, dịch tích ở phổi và chân. [common misunderstanding / muscle weaker / fluid / lungs]"
},
{
"who": 0,
"en": "That explains why he's so breathless and his ankles are swollen.",
"vi": "Thế thì giải thích được vì sao ông ấy khó thở và sưng mắt cá chân.",
"hint": ""
},
{
"who": 1,
"en": "Exactly. Medicines can help the heart pump more easily and remove extra fluid. Does that make sense so far, or shall I go over anything again?",
"vi": "Chính xác. Thuốc có thể giúp tim bơm dễ hơn và loại bớt dịch thừa. Đến đây bác có hiểu không, hay tôi giải thích lại phần nào?",
"hint": "Xác nhận, nói thuốc giúp tim bơm dễ và loại dịch thừa, rồi hỏi bà đã hiểu chưa. [medicines / pump / extra fluid / make sense / again]"
},
{
"who": 0,
"en": "I think so. The heart is a pump, and his pump is tired, so the fluid backs up.",
"vi": "Tôi nghĩ là hiểu. Tim là cái bơm, bơm của ông mệt rồi nên dịch bị ứ lại.",
"hint": ""
},
{
"who": 1,
"en": "That's exactly right, and a very clear way to put it. Please ask me anything else at any time, and we can draw a diagram together.",
"vi": "Hoàn toàn đúng, và là cách diễn đạt rất rõ ràng. Bà cứ hỏi tôi bất cứ lúc nào, và chúng ta có thể cùng vẽ sơ đồ.",
"hint": "Khen cách diễn đạt của bà, mời hỏi thêm và đề nghị cùng vẽ sơ đồ. [exactly right / clear way / ask / diagram]"
}
],
"notes": [
{
"line": 1,
"vi": "“Think of the heart as a pump” là phép ví von quen thuộc giúp người không chuyên có hình dung ngay; câu ngắn và tránh thuật ngữ khó."
},
{
"line": 5,
"vi": "So sánh với “hoses under pressure” giúp giải thích vì sao động mạch dày hơn tĩnh mạch mà không cần dùng thuật ngữ về huyết áp."
},
{
"line": 7,
"vi": "“That's a common misunderstanding” sửa quan niệm sai mà không làm người nghe thấy mình sai hay ngốc."
},
{
"line": 9,
"vi": "Hỏi kiểm tra bằng “Does that make sense so far” và “shall I go over anything again” đặt trách nhiệm lên người giải thích, không phải người nghe."
}
]
},
"pron": [
{
"en": "tubes called blood vessels",
"tip": "Nhấn “TUBES” và “VES-sels”; đọc rõ âm cuối /z/ ở “tubes” và “vessels”, đừng bỏ âm cuối như tiếng Việt."
},
{
"en": "It's a figure of eight",
"tip": "“figure” đọc /ˈfɪɡjər/, nhấn âm đầu. Nối “of eight” thành /əvˈeɪt/ và nhấn từ “EIGHT”, đừng bỏ âm /t/ cuối."
},
{
"en": "Arteries carry oxygen-rich blood",
"tip": "“ARteries” nhấn âm đầu, “OXygen” nhấn âm đầu. Giọng đi lên nhẹ ở “carry” rồi xuống ở “blood”; đọc rõ âm cuối /d/."
},
{
"en": "Does that make sense so far",
"tip": "Câu hỏi Yes/No nên lên giọng ở cuối: “so FAR ↗”. “Does that” đọc nhanh, nối thành /dəz ðət/."
}
],
"mistakes": [
{
"x": "The heart it pumps the blood to all body.",
"v": "The heart pumps blood around the whole body.",
"why": "Không lặp chủ ngữ bằng “it”, không dùng “the” cho “blood” nói chung, và “whole body” cần “around the”."
},
{
"x": "Artery carry blood go out from heart.",
"v": "Arteries carry blood away from the heart.",
"why": "Cần dạng số nhiều “arteries”, động từ “carry” đứng riêng và dùng “away from” thay vì “go out from”."
},
{
"x": "Your father heart is weak so he is short breath.",
"v": "Your father's heart is weak, so he is short of breath.",
"why": "Sở hữu cần “'s” và cụm cố định là “short of breath”, không phải “short breath”."
},
{
"x": "You understand what I say?",
"v": "Does that make sense so far?",
"why": "Hỏi thẳng “You understand?” nghe như kiểm tra người nghe; hãy dùng câu hỏi nhẹ nhàng, đúng ngữ pháp."
}
],
"task": {
"scenario": "A student volunteer in your clinic has asked you how digestion works. Explain it simply, from the moment food is swallowed until waste leaves the body. Use clear everyday comparisons and check that they understand.",
"scenario_vi": "Một sinh viên tình nguyện ở phòng khám nhờ bạn giải thích quá trình tiêu hóa hoạt động như thế nào. Hãy giải thích đơn giản, từ lúc nuốt thức ăn đến khi chất thải rời cơ thể, dùng ví von quen thuộc và kiểm tra xem bạn ấy đã hiểu chưa.",
"points": [
"Name the stomach, small intestine, large intestine and liver correctly",
"Use at least one everyday analogy",
"Explain the role of each organ in one or two sentences",
"Correct one common misunderstanding",
"Check understanding and invite questions"
],
"seconds": [
90,
150
],
"self": [
"Mình dùng đúng tên các cơ quan: stomach, intestine, liver",
"Mình có ít nhất một phép ví von dễ hiểu",
"Mình giải thích theo thứ tự rõ ràng từ đầu đến cuối",
"Mình dùng câu ngắn, ít thuật ngữ khó",
"Mình đã kiểm tra người nghe bằng “Does that make sense?” hoặc tương tự",
"Mình nói trôi chảy và nhấn đúng âm cuối của từ"
]
}
}
];
