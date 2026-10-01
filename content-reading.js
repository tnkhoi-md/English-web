/* ============================================================
   KHO LUYỆN ĐỌC (v4.5): đoạn văn ngắn do tác giả tự viết, A2 đến C1.
   Mỗi bài: lvl, topic, genre, title, text, gist (tiếng Việt), qs (5 câu hỏi có bằng chứng ev).
   ============================================================ */
const READING = [
 {
  "id": "rd-a2-a01",
  "lvl": "A2",
  "topic": "daily",
  "genre": "email",
  "title": "Can I Bring a Cake?",
  "text": "Hi Lan,\n\nThanks for your message. I would love to come to your birthday party on Saturday! What time does it start? I finish work at one o'clock on Saturday, so I can be there at three.\n\nI want to bring a cake, but I cannot cook very well. Do you prefer chocolate or fruit? I will buy it at the bakery near my house. My brother wants to come too. Is that OK? He is very quiet, so he will not make any problems.\n\nPlease tell me your address again. I lost the paper with the map.\n\nSee you soon,\nMinh",
  "gist": "Minh nhận lời đến tiệc sinh nhật của Lan, hỏi về bánh và xin lại địa chỉ.",
  "qs": [
   {
    "kind": "main",
    "q": "Why does Minh write this email?",
    "opts": [
     "To invite Lan to a party",
     "To say yes to an invitation and ask some questions",
     "To say he cannot come on Saturday",
     "To ask Lan to buy a cake"
    ],
    "a": 1,
    "ev": "I would love to come to your birthday party on Saturday!",
    "why": "Minh nhận lời đến tiệc và hỏi thêm vài điều (giờ, loại bánh, địa chỉ)."
   },
   {
    "kind": "detail",
    "q": "When can Minh get to the party?",
    "opts": [
     "At one o'clock",
     "At three o'clock",
     "At five o'clock",
     "At ten o'clock"
    ],
    "a": 1,
    "ev": "so I can be there at three",
    "why": "Anh ấy tan làm lúc một giờ nên có thể đến lúc ba giờ: \"I can be there at three\"."
   },
   {
    "kind": "detail",
    "q": "Where will Minh get the cake?",
    "opts": [
     "He will make it at home",
     "From his brother",
     "From a shop near Lan's house",
     "From a bakery near his own house"
    ],
    "a": 3,
    "ev": "I will buy it at the bakery near my house",
    "why": "Minh nói sẽ mua ở tiệm bánh gần nhà mình."
   },
   {
    "kind": "vocab",
    "q": "In the email, what does \"quiet\" mean?",
    "opts": [
     "Not noisy",
     "Very tall",
     "Very hungry",
     "Very angry"
    ],
    "a": 0,
    "ev": "He is very quiet",
    "why": "\"Quiet\" = ít nói, không ồn ào; hợp với \"will not make any problems\"."
   },
   {
    "kind": "tfng",
    "q": "Minh has a map of the way to Lan's home.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "I lost the paper with the map.",
    "why": "Minh đã làm mất tờ giấy có bản đồ, nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-a2-a02",
  "lvl": "A2",
  "topic": "education",
  "genre": "notice",
  "title": "New Opening Times at the Library",
  "text": "Green Valley Library: New Opening Times\n\nFrom 1 October, the library will open earlier on weekdays. The new times are:\n\nMonday to Friday: 8:00 a.m. to 7:00 p.m.\nSaturday: 9:00 a.m. to 4:00 p.m.\nSunday: closed\n\nChildren under ten must come with an adult. You can borrow up to six books for three weeks. If you forget to bring a book back on time, you must pay 20 cents for each day.\n\nThe new children's room is now open on the second floor. It has comfortable chairs and many picture books. Every Saturday at 10:00 a.m., a teacher reads a story for young children. It is free, and you do not need to book a place.",
  "gist": "Thông báo giờ mở cửa mới và các quy định của thư viện, cùng phòng thiếu nhi mới.",
  "qs": [
   {
    "kind": "main",
    "q": "What is this notice mainly about?",
    "opts": [
     "A school for young children",
     "A sale of old books",
     "New opening times and rules for a library",
     "A teacher who reads stories"
    ],
    "a": 2,
    "ev": "the library will open earlier on weekdays",
    "why": "Thông báo nói về giờ mở cửa mới và quy định mượn sách của thư viện."
   },
   {
    "kind": "detail",
    "q": "How long can a person keep the books?",
    "opts": [
     "One week",
     "Two weeks",
     "Three weeks",
     "Six weeks"
    ],
    "a": 2,
    "ev": "up to six books for three weeks",
    "why": "Được mượn tối đa sáu cuốn trong ba tuần; sáu là số sách, không phải số tuần."
   },
   {
    "kind": "detail",
    "q": "What happens if someone returns a book late?",
    "opts": [
     "They pay a small amount for each day",
     "They cannot borrow books again",
     "They pay 20 cents one time",
     "They must give the library another book"
    ],
    "a": 0,
    "ev": "you must pay 20 cents for each day",
    "why": "Phải trả 20 cent cho mỗi ngày trễ, không phải một lần."
   },
   {
    "kind": "inference",
    "q": "Who can visit the library without an adult?",
    "opts": [
     "A five-year-old child",
     "A seven-year-old child",
     "A nine-year-old child",
     "A twelve-year-old child"
    ],
    "a": 3,
    "ev": "Children under ten must come with an adult",
    "why": "Trẻ dưới mười tuổi phải đi cùng người lớn, nên chỉ trẻ mười hai tuổi được đi một mình."
   },
   {
    "kind": "tfng",
    "q": "People must reserve a place for the Saturday story time.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "you do not need to book a place",
    "why": "Văn bản nói không cần đặt chỗ nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-a2-a03",
  "lvl": "A2",
  "topic": "environment",
  "genre": "blog",
  "title": "My Balcony Garden",
  "text": "I live in a small flat in the city, and I do not have a garden. But last spring I started a little garden on my balcony. First, I bought four plastic boxes and some soil. Then I planted tomatoes, mint and two small flowers.\n\nThe tomatoes grew slowly. In June, they were still green. I water the plants every morning before work, and I also talk to them! My neighbour thinks this is funny. In July, I picked my first red tomato. It was small, but it tasted wonderful.\n\nNow I use the mint in my tea. Gardening is cheap and relaxing. After a long day, I sit on the balcony and look at my plants. Next year, I want to try growing carrots.",
  "gist": "Tác giả kể về khu vườn nhỏ trên ban công và niềm vui khi tự trồng cây.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's main message?",
    "opts": [
     "Tomatoes are difficult to grow",
     "Plants need a lot of water",
     "A big garden is better than a balcony",
     "You can enjoy a small garden even in a flat"
    ],
    "a": 3,
    "ev": "last spring I started a little garden on my balcony",
    "why": "Dù sống trong căn hộ, tác giả vẫn thích làm vườn nhỏ trên ban công."
   },
   {
    "kind": "detail",
    "q": "What did the writer plant?",
    "opts": [
     "Carrots, mint and tomatoes",
     "Tomatoes, mint and flowers",
     "Only tomatoes",
     "Flowers and carrots"
    ],
    "a": 1,
    "ev": "I planted tomatoes, mint and two small flowers",
    "why": "Cà chua, bạc hà và hai bông hoa; cà rốt chỉ là kế hoạch năm sau."
   },
   {
    "kind": "detail",
    "q": "When does the writer give water to the plants?",
    "opts": [
     "Before going to work",
     "After work",
     "At night",
     "Only at weekends"
    ],
    "a": 0,
    "ev": "I water the plants every morning before work",
    "why": "Tác giả tưới cây mỗi sáng trước khi đi làm."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"relaxing\" means",
    "opts": [
     "needing a lot of work",
     "very expensive",
     "making you feel calm",
     "hard to learn"
    ],
    "a": 2,
    "ev": "Gardening is cheap and relaxing",
    "why": "\"Relaxing\" = thư giãn, làm bạn thấy bình tĩnh; đi cùng \"cheap\" và việc ngồi ngắm cây."
   },
   {
    "kind": "tfng",
    "q": "The writer's neighbour helps look after the plants.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Văn bản chỉ nói người hàng xóm thấy buồn cười, không nói họ giúp chăm cây."
   }
  ]
 },
 {
  "id": "rd-a2-a04",
  "lvl": "A2",
  "topic": "travel",
  "genre": "dialogue",
  "title": "At the Ticket Office",
  "text": "Clerk: Good morning. Can I help you?\n\nTom: Yes, please. I need a ticket to Hanover for tomorrow morning.\n\nClerk: There is a train at 8:15 and another one at 10:40. The 8:15 train is faster. It takes two hours. The 10:40 train takes three hours because it stops in many towns.\n\nTom: I prefer the faster one. How much is a ticket?\n\nClerk: A single ticket is 32 euros. A return ticket is 50 euros. You can also get a cheaper ticket if you are a student.\n\nTom: I am not a student, but I will take a return ticket. I come back on Sunday.\n\nClerk: Fine. That is 50 euros. Platform 4, please.",
  "gist": "Tom mua vé tàu khứ hồi đi Hanover, chọn chuyến nhanh hơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is Tom doing in this conversation?",
    "opts": [
     "Asking about a student card",
     "Buying a train ticket",
     "Looking for Platform 4",
     "Planning a holiday in Hanover"
    ],
    "a": 1,
    "ev": "I need a ticket to Hanover for tomorrow morning.",
    "why": "Tom đến quầy để mua vé tàu đi Hanover."
   },
   {
    "kind": "detail",
    "q": "Why does the 10:40 train take longer?",
    "opts": [
     "It leaves from a different platform",
     "It is older than the other train",
     "It stops in many towns",
     "It goes to a different city"
    ],
    "a": 2,
    "ev": "it stops in many towns",
    "why": "Chuyến 10:40 lâu hơn vì dừng ở nhiều thị trấn."
   },
   {
    "kind": "detail",
    "q": "How much does Tom pay?",
    "opts": [
     "32 euros",
     "50 euros",
     "40 euros",
     "82 euros"
    ],
    "a": 1,
    "ev": "That is 50 euros.",
    "why": "Tom mua vé khứ hồi giá 50 euro; 32 euro là vé một chiều."
   },
   {
    "kind": "vocab",
    "q": "In the conversation, \"prefer\" means",
    "opts": [
     "forget about",
     "hate",
     "need to buy",
     "like better"
    ],
    "a": 3,
    "ev": "I prefer the faster one",
    "why": "\"Prefer\" = thích hơn; Tom chọn chuyến nhanh hơn."
   },
   {
    "kind": "tfng",
    "q": "Tom is travelling to Hanover for work.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Không có thông tin về lý do Tom đi Hanover."
   }
  ]
 },
 {
  "id": "rd-b1-a05",
  "lvl": "B1",
  "topic": "environment",
  "genre": "article",
  "title": "One Year of Bicycle Lanes",
  "text": "Last year, the city of Riverton opened twenty kilometres of new bicycle lanes. Many people thought the idea was a waste of money. Cars would have less space, they said, and traffic would become even worse. One year later, the results are surprising.\n\nAccording to a city survey, the number of people who cycle to work has doubled. Shops on the main streets also report that they have more customers, because cyclists stop more often than drivers do. The average journey in the city centre is now four minutes shorter, as fewer cars block the roads at busy times.\n\nNot everyone is happy, however. Some drivers complain that it is harder to find parking spaces. Delivery companies say they sometimes have to stop in the lanes to unload their vans, which makes cycling dangerous. The council has promised to build special loading areas next year.\n\nMost experts agree that the project was a good start. They say the city now needs more safe places to leave bicycles, because many riders are afraid that their bikes will be stolen.",
  "gist": "Sau một năm có làn đường xe đạp mới, thành phố thu được nhiều kết quả tốt nhưng vẫn còn vấn đề.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the article mainly about?",
    "opts": [
     "How to ride a bicycle safely",
     "The results of new bicycle lanes after one year",
     "Why shops are closing in the city",
     "A plan to ban cars in the centre"
    ],
    "a": 1,
    "ev": "One year later, the results are surprising.",
    "why": "Bài viết nói về tác động của làn xe đạp mới sau một năm."
   },
   {
    "kind": "detail",
    "q": "What does the survey say about cycling to work?",
    "opts": [
     "It has become twice as common",
     "It has increased by a fifth",
     "It has stayed the same",
     "It has become less popular"
    ],
    "a": 0,
    "ev": "the number of people who cycle to work has doubled",
    "why": "\"Doubled\" nghĩa là tăng gấp đôi."
   },
   {
    "kind": "detail",
    "q": "Why do shops on main streets have more customers?",
    "opts": [
     "Parking is cheaper there",
     "Cyclists stop more often than drivers",
     "Delivery vans bring more goods",
     "Cars drive more slowly there"
    ],
    "a": 1,
    "ev": "cyclists stop more often than drivers do",
    "why": "Người đi xe đạp dừng lại thường xuyên hơn người lái xe."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"unload\" means",
    "opts": [
     "drive slowly past",
     "park far away",
     "clean thoroughly",
     "take goods out of"
    ],
    "a": 3,
    "ev": "to unload their vans",
    "why": "\"Unload\" = dỡ hàng xuống, phù hợp với xe giao hàng."
   },
   {
    "kind": "tfng",
    "q": "The council has already built loading areas for delivery vehicles.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The council has promised to build special loading areas next year.",
    "why": "Hội đồng mới hứa sẽ xây vào năm sau, chưa xây."
   }
  ]
 },
 {
  "id": "rd-b1-a06",
  "lvl": "B1",
  "topic": "work",
  "genre": "email",
  "title": "Moving to the New Office",
  "text": "Subject: Changes to the office next month\n\nDear all,\n\nAs you know, our company is moving to the new building on Harbour Street on 3 November. I would like to explain what this means for you.\n\nThe move will take place over the weekend of 1 and 2 November, so the office will be closed on Friday afternoon. Please pack your personal items into the boxes that Facilities will give you on Wednesday. Do not pack your computer. The IT team will move all equipment themselves and will set it up before Monday morning.\n\nThe new building has no car park for staff, but there is a train station two minutes away. The company will pay half of the cost of a monthly train pass for anyone who wants one. If you would prefer to cycle, there is a secure room for bicycles on the ground floor.\n\nFinally, there will be a short tour of the new offices on Thursday at 4 p.m. It is not compulsory, but I recommend it, especially for new colleagues.\n\nIf you have any questions, please contact me.\n\nBest wishes,\nMs Weber\nOffice Manager",
  "gist": "Quản lý văn phòng thông báo kế hoạch chuyển sang tòa nhà mới và hỗ trợ đi lại.",
  "qs": [
   {
    "kind": "main",
    "q": "Why is Ms Weber writing this email?",
    "opts": [
     "To ask staff to find a new office",
     "To report problems with the IT team",
     "To invite staff to a party",
     "To give staff information about the move"
    ],
    "a": 3,
    "ev": "I would like to explain what this means for you.",
    "why": "Bà Weber giải thích cho nhân viên về việc chuyển văn phòng."
   },
   {
    "kind": "detail",
    "q": "What should staff do with their computers?",
    "opts": [
     "Leave them for the IT team to move",
     "Pack them in the boxes",
     "Carry them to the new building",
     "Take them home for the weekend"
    ],
    "a": 0,
    "ev": "Do not pack your computer.",
    "why": "Không được đóng gói máy tính; đội IT sẽ tự chuyển."
   },
   {
    "kind": "detail",
    "q": "How will the company help staff who travel by train?",
    "opts": [
     "It will give them free tickets",
     "It will pay half of a monthly pass",
     "It will pay for taxis",
     "It will move them closer to the station"
    ],
    "a": 1,
    "ev": "pay half of the cost of a monthly train pass",
    "why": "Công ty trả một nửa chi phí vé tháng."
   },
   {
    "kind": "inference",
    "q": "Which employee is most likely to have a problem at the new building?",
    "opts": [
     "Someone who rides a bicycle",
     "Someone who takes the train",
     "Someone who drives to work",
     "Someone who works in IT"
    ],
    "a": 2,
    "ev": "The new building has no car park for staff",
    "why": "Tòa nhà mới không có bãi đỗ xe cho nhân viên, nên người lái xe sẽ gặp khó."
   },
   {
    "kind": "tfng",
    "q": "All staff have to join the tour on Thursday.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "It is not compulsory",
    "why": "Chuyến tham quan không bắt buộc nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-a07",
  "lvl": "B1",
  "topic": "society",
  "genre": "story",
  "title": "The Brown Wallet",
  "text": "On Tuesday evening, Nam was walking home from the bus stop when he saw a brown wallet lying near a bench. He picked it up and looked inside. There was a bus card, a photo of a little girl, and a lot of cash. There was also a small piece of paper with a name and a phone number.\n\nNam felt nervous. He needed money for his university books, and nobody was watching. For a moment, he put the wallet in his bag. But then he thought about the photo. Somebody was probably worried at that very moment.\n\nAt home, he called the number. A man answered quickly. His voice was shaky. \"I have been searching everywhere for it,\" he said. He explained that the wallet had been his late father's, and the photo showed his daughter on her first day of school.\n\nThey met at the bench twenty minutes later. The man tried to give Nam some of the cash as a reward, but Nam refused. \"I'm just glad it is back with you,\" he said. Walking home, he felt lighter than he had all week.",
  "gist": "Nam nhặt được chiếc ví, suýt giữ lại nhưng cuối cùng trả cho chủ nhân và từ chối tiền thưởng.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the story mainly about?",
    "opts": [
     "A man who loses his job",
     "A student who needs money for books",
     "A girl's first day at school",
     "A young man who returns a lost wallet"
    ],
    "a": 3,
    "ev": "But then he thought about the photo.",
    "why": "Câu chuyện kể Nam trả lại chiếc ví dù đã bị cám dỗ giữ lại."
   },
   {
    "kind": "detail",
    "q": "How did Nam find the owner of the wallet?",
    "opts": [
     "He called a number written on a piece of paper",
     "He took it to the police",
     "He asked people at the bus stop",
     "He put a message on the bench"
    ],
    "a": 0,
    "ev": "a small piece of paper with a name and a phone number",
    "why": "Trong ví có mảnh giấy ghi tên và số điện thoại, Nam gọi số đó."
   },
   {
    "kind": "detail",
    "q": "Why did Nam decide not to keep the wallet?",
    "opts": [
     "He saw somebody watching him",
     "He already had enough money",
     "He thought about the photo and the worried owner",
     "His friend told him to call"
    ],
    "a": 2,
    "ev": "But then he thought about the photo.",
    "why": "Nghĩ đến bức ảnh và người chủ đang lo lắng khiến Nam đổi ý."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"shaky\" describes a voice that is",
    "opts": [
     "very loud",
     "not steady",
     "angry and rude",
     "slow and bored"
    ],
    "a": 1,
    "ev": "His voice was shaky.",
    "why": "\"Shaky\" = run rẩy, không vững, hợp với việc người đàn ông đang lo lắng tìm ví."
   },
   {
    "kind": "tfng",
    "q": "Nam accepted some of the cash as a reward.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "tried to give Nam some of the cash as a reward, but Nam refused",
    "why": "Nam từ chối tiền thưởng nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-a08",
  "lvl": "B1",
  "topic": "education",
  "genre": "leaflet",
  "title": "Evening Classes at Riverside",
  "text": "Riverside Community Centre: Evening Classes This Autumn\n\nLooking for a new hobby, or a way to meet people in your neighbourhood? Our autumn courses start on Monday 14 October and last eight weeks. Each class meets once a week for two hours.\n\nBeginner Photography (Mondays, 6:30 p.m.): Learn to use your camera or phone to take better pictures. Bring your own device. We will go outdoors if the weather is good.\n\nHome Cooking (Wednesdays, 7 p.m.): Prepare simple, healthy meals from fresh ingredients, then eat together. The fee includes all food, but please bring an apron.\n\nConversational Spanish (Thursdays, 6 p.m.): Practise speaking in small groups with a friendly teacher. No experience is needed.\n\nPrices: Each course costs 60 pounds. Residents of Riverside receive a 20 percent discount, and pensioners pay half price. Places are limited to twelve people per class, so please register early at the front desk or by calling 555-0142. If a course is cancelled, we will return your money in full.",
  "gist": "Tờ rơi giới thiệu ba khóa học buổi tối của trung tâm cộng đồng, kèm giá và cách đăng ký.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of this leaflet?",
    "opts": [
     "To advertise evening courses",
     "To ask for volunteer teachers",
     "To announce a new centre",
     "To explain how to cook healthy food"
    ],
    "a": 0,
    "ev": "Our autumn courses start on Monday 14 October",
    "why": "Tờ rơi quảng cáo các khóa học buổi tối mùa thu."
   },
   {
    "kind": "detail",
    "q": "What should students bring to the Home Cooking class?",
    "opts": [
     "Fresh ingredients",
     "An apron",
     "Their own camera",
     "A notebook for Spanish"
    ],
    "a": 1,
    "ev": "please bring an apron",
    "why": "Phí đã gồm thực phẩm; chỉ cần mang tạp dề."
   },
   {
    "kind": "detail",
    "q": "How many people can be in one class?",
    "opts": [
     "Eight",
     "Two",
     "Sixty",
     "Twelve"
    ],
    "a": 3,
    "ev": "limited to twelve people per class",
    "why": "Mỗi lớp tối đa mười hai người; tám là số tuần, hai là số giờ."
   },
   {
    "kind": "inference",
    "q": "How much would a Riverside resident who is not a pensioner pay for one course?",
    "opts": [
     "48 pounds",
     "30 pounds",
     "52 pounds",
     "40 pounds"
    ],
    "a": 0,
    "ev": "Each course costs 60 pounds. Residents of Riverside receive a 20 percent discount",
    "why": "Giảm 20% của 60 bảng là 12 bảng, còn 48 bảng."
   },
   {
    "kind": "tfng",
    "q": "Photography students need to take their own camera or phone to class.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 0,
    "ev": "Bring your own device.",
    "why": "Văn bản yêu cầu mang thiết bị của mình, nên câu này đúng."
   }
  ]
 },
 {
  "id": "rd-a2-b01",
  "lvl": "A2",
  "topic": "daily",
  "genre": "notice",
  "title": "Green Park Pool Is Closed for a Week",
  "text": "NOTICE: Green Park Swimming Pool\n\nThe pool will be closed from Monday 3 June to Friday 7 June. We are cleaning the water and painting the changing rooms. The pool will open again on Saturday at 8 a.m.\n\nDuring the week, you can swim at Lake Road Pool. It is five minutes by bus from Green Park. Show your Green Park card at the door and you will pay only half price.\n\nChildren under seven must always swim with an adult. Please do not run near the water.\n\nIf you have a question, call Mrs Hall at the front desk.",
  "gist": "Thông báo hồ bơi Green Park đóng cửa một tuần để làm vệ sinh và sơn phòng thay đồ, đồng thời gợi ý bơi ở hồ Lake Road với giá nửa tiền.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the notice mainly about?",
    "opts": [
     "A pool is closed for a week, and there is another place to swim.",
     "A new pool is opening on Lake Road.",
     "Swimming lessons for children are starting.",
     "Prices at Green Park are going down."
    ],
    "a": 0,
    "ev": "The pool will be closed from Monday 3 June to Friday 7 June.",
    "why": "Thông báo nói hồ đóng cửa từ thứ Hai đến thứ Sáu và gợi ý hồ khác."
   },
   {
    "kind": "detail",
    "q": "What work will be done at the pool during the closure?",
    "opts": [
     "Building a new café",
     "Fixing the roof",
     "Cleaning the water and painting some rooms",
     "Teaching new swimming classes"
    ],
    "a": 2,
    "ev": "We are cleaning the water and painting the changing rooms.",
    "why": "Văn bản nêu rõ: cleaning the water and painting the changing rooms."
   },
   {
    "kind": "detail",
    "q": "How can a Green Park member pay less at the other pool?",
    "opts": [
     "By going with a child",
     "By showing the Green Park card",
     "By arriving by bus",
     "By calling Mrs Hall first"
    ],
    "a": 1,
    "ev": "Show your Green Park card at the door and you will pay only half price.",
    "why": "Chỉ cần đưa thẻ Green Park là được nửa giá."
   },
   {
    "kind": "inference",
    "q": "What do we learn about Lake Road Pool?",
    "opts": [
     "It is closed next week.",
     "It is only for adults.",
     "It is on the same street as Mrs Hall's desk.",
     "It is a short bus ride from Green Park."
    ],
    "a": 3,
    "ev": "It is five minutes by bus from Green Park.",
    "why": "Five minutes by bus tức là rất gần."
   },
   {
    "kind": "tfng",
    "q": "Children aged six can swim alone at Green Park.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Children under seven must always swim with an adult.",
    "why": "Trẻ dưới bảy tuổi phải đi cùng người lớn nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-a2-b02",
  "lvl": "A2",
  "topic": "daily",
  "genre": "advert",
  "title": "For Sale: Blue City Bike",
  "text": "FOR SALE: Blue City Bike\n\nI am selling my blue bike because I am moving to a small flat and there is no place for it. The bike is two years old and in very good condition. It has a new front light and a strong basket. The tyres are new, too.\n\nI paid 280 euros, but I want 120 euros. You can try the bike before you buy it. I am at home every evening after 6 p.m. and all day on Sunday.\n\nPlease send a message to Tom on 0151 555 0182. I cannot answer calls at work.",
  "gist": "Quảng cáo bán xe đạp cũ màu xanh vì chủ chuyển sang căn hộ nhỏ; giá 120 euro, có thể thử xe trước khi mua.",
  "qs": [
   {
    "kind": "main",
    "q": "Why is Tom selling his bike?",
    "opts": [
     "The bike is broken.",
     "He wants a newer bike.",
     "He has no space for it in his new home.",
     "He needs money for a trip."
    ],
    "a": 2,
    "ev": "because I am moving to a small flat and there is no place for it",
    "why": "Lý do là chuyển đến căn hộ nhỏ, không có chỗ để xe."
   },
   {
    "kind": "detail",
    "q": "How much less than the first price does Tom want now?",
    "opts": [
     "160 euros",
     "120 euros",
     "280 euros",
     "400 euros"
    ],
    "a": 0,
    "ev": "I paid 280 euros, but I want 120 euros.",
    "why": "Tom mua với giá 280 euro và bây giờ muốn bán 120 euro, nên chênh lệch là 160 euro."
   },
   {
    "kind": "detail",
    "q": "When can a buyer see the bike?",
    "opts": [
     "In the mornings and on Saturdays",
     "In the evenings and on Sundays",
     "Only on Sunday evening",
     "All day while Tom is at work"
    ],
    "a": 1,
    "ev": "I am at home every evening after 6 p.m. and all day on Sunday.",
    "why": "Tom ở nhà mỗi tối sau 6 giờ và cả ngày Chủ nhật."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"condition\" means",
    "opts": [
     "how much the bike costs",
     "where the bike is from",
     "what colour the bike is",
     "how well the bike works and looks"
    ],
    "a": 3,
    "ev": "in very good condition",
    "why": "\"Condition\" là tình trạng của xe, ở đây là rất tốt."
   },
   {
    "kind": "tfng",
    "q": "Tom uses the bike to travel to his office.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Văn bản chỉ nói Tom làm việc nhưng không nói anh đi làm bằng xe đạp."
   }
  ]
 },
 {
  "id": "rd-a2-b03",
  "lvl": "A2",
  "topic": "daily",
  "genre": "dialogue",
  "title": "Plans for a River Picnic",
  "text": "Lan: Hi Minh! Are you free on Saturday?\n\nMinh: I think so. Why?\n\nLan: Nam and I want to have a picnic at the river. The weather will be sunny, so it is a good day for it.\n\nMinh: Great idea! What can I bring?\n\nLan: Please bring some drinks. Nam is making sandwiches, and I will bring fruit and a big blanket.\n\nMinh: OK. How do we get there? My car is at the garage.\n\nLan: No problem. We can take the bus at 10 o'clock from the station. It takes about twenty minutes.\n\nMinh: Perfect. I will meet you at the station at a quarter to ten.\n\nLan: See you then!",
  "gist": "Lan rủ Minh đi picnic bên sông vào thứ Bảy; họ chia nhau mang đồ và hẹn đi xe buýt lúc 10 giờ.",
  "qs": [
   {
    "kind": "main",
    "q": "What are the two friends doing?",
    "opts": [
     "Choosing a new car",
     "Planning a day out by the river",
     "Cooking dinner together",
     "Looking for a lost blanket"
    ],
    "a": 1,
    "ev": "Nam and I want to have a picnic at the river.",
    "why": "Họ đang lên kế hoạch cho buổi picnic."
   },
   {
    "kind": "detail",
    "q": "What will Minh bring to the picnic?",
    "opts": [
     "Sandwiches",
     "Fruit",
     "A big blanket",
     "Drinks"
    ],
    "a": 3,
    "ev": "Please bring some drinks.",
    "why": "Lan nhờ Minh mang đồ uống; Nam làm sandwich, còn Lan mang trái cây và chăn."
   },
   {
    "kind": "detail",
    "q": "How will the friends travel to the river?",
    "opts": [
     "By bus",
     "By car",
     "By train",
     "By bicycle"
    ],
    "a": 0,
    "ev": "We can take the bus at 10 o'clock from the station.",
    "why": "Họ đi xe buýt lúc 10 giờ."
   },
   {
    "kind": "inference",
    "q": "Why does Minh ask how they will get there?",
    "opts": [
     "He does not like buses.",
     "He lives next to the river.",
     "He has no driving licence.",
     "He cannot use his car at the moment."
    ],
    "a": 3,
    "ev": "My car is at the garage.",
    "why": "Xe của Minh đang ở garage nên anh chưa dùng được."
   },
   {
    "kind": "tfng",
    "q": "The weather forecast for Saturday is bad.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The weather will be sunny, so it is a good day for it.",
    "why": "Thời tiết nắng nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-a2-b04",
  "lvl": "A2",
  "topic": "society",
  "genre": "story",
  "title": "Ben's Red Umbrella",
  "text": "It was a rainy morning. Ben took his red umbrella and walked to the bus stop. An old woman was standing there without an umbrella. Her coat was wet and she looked cold.\n\nBen smiled and gave her his umbrella. \"Please take it,\" he said. \"My office is only two minutes from here.\" The woman said thank you many times.\n\nBen ran to his office in the rain. He was wet, but he felt happy. The next day, there was a small box on his desk. Inside there was a new umbrella and a card: \"For a kind young man. Thank you.\" Ben did not know who sent it, but he smiled all day.",
  "gist": "Ben cho một bà cụ mượn ô vào buổi sáng mưa, hôm sau anh nhận được một chiếc ô mới và tấm thiệp cảm ơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the story mainly about?",
    "opts": [
     "A man who loses his umbrella",
     "A kind action that leads to a nice surprise",
     "A bus that is late in the rain",
     "A woman who looks for her office"
    ],
    "a": 1,
    "ev": "Ben smiled and gave her his umbrella.",
    "why": "Ben giúp đỡ bà cụ và sau đó nhận quà bất ngờ."
   },
   {
    "kind": "detail",
    "q": "How far was Ben's office from the bus stop?",
    "opts": [
     "Ten minutes by bus",
     "Two streets away by bike",
     "A very short walk",
     "About twenty minutes on foot"
    ],
    "a": 2,
    "ev": "My office is only two minutes from here.",
    "why": "Văn phòng chỉ cách hai phút."
   },
   {
    "kind": "detail",
    "q": "What did Ben find on his desk the next day?",
    "opts": [
     "A box with an umbrella and a card",
     "A red coat and a letter",
     "A bus ticket and a card",
     "A cake and some flowers"
    ],
    "a": 0,
    "ev": "Inside there was a new umbrella and a card",
    "why": "Trong hộp có ô mới và một tấm thiệp."
   },
   {
    "kind": "vocab",
    "q": "In the card, \"kind\" means",
    "opts": [
     "tall and strong",
     "rich and famous",
     "quiet and shy",
     "friendly and helpful"
    ],
    "a": 3,
    "ev": "For a kind young man.",
    "why": "\"Kind\" nghĩa là tốt bụng, thân thiện và hay giúp đỡ."
   },
   {
    "kind": "tfng",
    "q": "Ben knows who left the box on his desk.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Ben did not know who sent it",
    "why": "Ben không biết ai gửi nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-b05",
  "lvl": "B1",
  "topic": "work",
  "genre": "email",
  "title": "Change of Room for Thursday's Training",
  "text": "Subject: Change of room for Thursday's training\n\nHi everyone,\n\nI'm writing to let you know that Thursday's training session on customer service has moved. Because the main meeting room is being repaired after a water leak, we will now use Room 4 on the second floor. The start time is still 9:30, but we will finish earlier, at 3:30 instead of 4:30, as the room must be locked by 4 p.m.\n\nPlease remember to bring your laptop and the booklet that was sent last week. If you have lost it, I have printed spare copies, and you can collect one from my desk. Lunch will not be provided this time, because the canteen is closed on Thursdays. However, there is a café across the street that offers a discount to our employees.\n\nIf you cannot attend because of the change, let me know by Wednesday noon so that I can book another date. Thanks for your understanding.\n\nBest wishes,\nHelen Park\nTraining Coordinator",
  "gist": "Email thông báo buổi tập huấn thứ Năm đổi sang Phòng 4, kết thúc sớm hơn, nhắc mang laptop và tài liệu, không có bữa trưa.",
  "qs": [
   {
    "kind": "main",
    "q": "Why did Helen write this email?",
    "opts": [
     "To ask for a new meeting room",
     "To cancel the training completely",
     "To tell staff about changes to a training session",
     "To explain how to use the canteen"
    ],
    "a": 2,
    "ev": "Thursday's training session on customer service has moved.",
    "why": "Email thông báo thay đổi địa điểm và giờ kết thúc."
   },
   {
    "kind": "detail",
    "q": "What caused the change of room?",
    "opts": [
     "Repairs after a leak in the usual room",
     "A booking mistake in Room 4",
     "A broken laptop projector",
     "A closed canteen"
    ],
    "a": 0,
    "ev": "the main meeting room is being repaired after a water leak",
    "why": "Phòng chính đang sửa sau khi bị rò nước."
   },
   {
    "kind": "detail",
    "q": "What should people do if they no longer have the booklet?",
    "opts": [
     "Print one at the café",
     "Ask a colleague to lend theirs",
     "Wait for a new email on Wednesday",
     "Take a spare copy from Helen's desk"
    ],
    "a": 3,
    "ev": "you can collect one from my desk",
    "why": "Helen đã in bản dự phòng để ở bàn."
   },
   {
    "kind": "inference",
    "q": "Why will the session finish earlier than planned?",
    "opts": [
     "The trainer has another meeting.",
     "The room cannot be used after 4 p.m.",
     "Fewer people will attend.",
     "Lunch will not be provided."
    ],
    "a": 1,
    "ev": "as the room must be locked by 4 p.m.",
    "why": "Phòng phải khóa lúc 4 giờ nên buổi học kết thúc sớm."
   },
   {
    "kind": "tfng",
    "q": "The session will begin later than planned.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The start time is still 9:30",
    "why": "Giờ bắt đầu vẫn là 9:30 nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-b06",
  "lvl": "B1",
  "topic": "environment",
  "genre": "article",
  "title": "A Garden on the Library Roof",
  "text": "When the Riverside Library opened a roof garden last spring, few people expected it to become the busiest part of the building. The idea came from a group of volunteers who wanted a quiet place to grow vegetables in the middle of the city. The library agreed to give them the empty space on its roof, and a local company donated wooden boxes and soil.\n\nToday about forty people take care of the garden. Some come every day before work to water the plants, while others only visit on weekends. Tomatoes, beans and herbs grow best, but the strong wind on the roof has destroyed several flowers. To solve this problem, the volunteers built a low glass wall.\n\nThe garden is not only about food. Every Saturday, a retired teacher, Mr Okoro, gives free lessons to children about plants and insects. In summer, the group also sells extra vegetables at a small market in the library hall. The money pays for new tools and seeds.\n\nNext year, the volunteers hope to add beehives, but they first need permission from the city council.",
  "gist": "Bài báo về khu vườn trên mái thư viện do tình nguyện viên lập ra, nay có khoảng 40 người chăm sóc và còn dạy trẻ em.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the article mainly about?",
    "opts": [
     "A library that sells vegetables",
     "A successful community project on top of a building",
     "A teacher who writes about insects",
     "A company that makes wooden boxes"
    ],
    "a": 1,
    "ev": "When the Riverside Library opened a roof garden last spring",
    "why": "Bài viết kể về vườn trên mái do cộng đồng làm."
   },
   {
    "kind": "detail",
    "q": "How did a local business help the project?",
    "opts": [
     "It paid the volunteers.",
     "It built the glass wall.",
     "It gave boxes and soil.",
     "It sold the vegetables."
    ],
    "a": 2,
    "ev": "a local company donated wooden boxes and soil",
    "why": "Công ty địa phương tặng hộp gỗ và đất."
   },
   {
    "kind": "detail",
    "q": "How did the volunteers deal with the wind?",
    "opts": [
     "They built a low barrier of glass.",
     "They moved the boxes to the ground floor.",
     "They covered the plants every night.",
     "They planted only herbs."
    ],
    "a": 0,
    "ev": "the volunteers built a low glass wall",
    "why": "Họ xây một bức tường kính thấp."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"donated\" means",
    "opts": [
     "sold at a low price",
     "borrowed for a short time",
     "repaired carefully",
     "gave without asking for money"
    ],
    "a": 3,
    "ev": "a local company donated wooden boxes and soil",
    "why": "\"Donated\" là tặng, cho không."
   },
   {
    "kind": "tfng",
    "q": "Bees are already kept on the roof.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Next year, the volunteers hope to add beehives",
    "why": "Tổ ong mới chỉ là kế hoạch cho năm sau nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-b07",
  "lvl": "B1",
  "topic": "daily",
  "genre": "blog",
  "title": "Three Months on Two Wheels",
  "text": "Three months ago, I sold my car and started cycling to work. My friends thought I was crazy, because my office is eleven kilometres from my flat. Honestly, I was not sure either, but the petrol prices and the traffic jams had made me tired of driving.\n\nThe first week was terrible. My legs hurt, I arrived at work sweating, and it rained twice. Then I bought a good waterproof jacket and a bag that fits on the back of the bike, and everything became easier. Now the journey takes me 35 minutes, which is only five minutes longer than by car in the morning rush hour.\n\nThe biggest surprise is how much better I feel. I sleep well, I have more energy in the afternoon, and I have saved nearly 200 euros a month. I also notice things I never saw from the car, such as a tiny bakery where I now buy bread every Friday.\n\nOf course, it is not perfect. In winter I will need warmer gloves, and I still don't enjoy strong wind. But I would recommend trying it for a month. You may be surprised, too.",
  "gist": "Blogger kể về ba tháng bán xe hơi và đạp xe đi làm: lúc đầu khó, sau đó khỏe hơn và tiết kiệm tiền.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's main purpose?",
    "opts": [
     "To complain about bad weather",
     "To sell a bicycle",
     "To explain how to repair a car",
     "To describe a lifestyle change and encourage others"
    ],
    "a": 3,
    "ev": "But I would recommend trying it for a month.",
    "why": "Tác giả kể trải nghiệm và khuyên người khác thử."
   },
   {
    "kind": "detail",
    "q": "What made the writer stop driving?",
    "opts": [
     "The cost of fuel and busy roads",
     "Advice from a doctor",
     "A new job in another city",
     "A car accident"
    ],
    "a": 0,
    "ev": "the petrol prices and the traffic jams had made me tired of driving",
    "why": "Giá xăng và kẹt xe khiến anh chán lái xe."
   },
   {
    "kind": "detail",
    "q": "How does cycling compare with driving in the morning?",
    "opts": [
     "It takes much longer.",
     "It takes the same time.",
     "It takes a little longer.",
     "It is quicker."
    ],
    "a": 2,
    "ev": "which is only five minutes longer than by car in the morning rush hour",
    "why": "Đạp xe chỉ lâu hơn 5 phút."
   },
   {
    "kind": "vocab",
    "q": "In the text, \"tiny\" means",
    "opts": [
     "very old",
     "very small",
     "very expensive",
     "very busy"
    ],
    "a": 1,
    "ev": "a tiny bakery",
    "why": "\"Tiny\" nghĩa là rất nhỏ."
   },
   {
    "kind": "tfng",
    "q": "The writer's friends supported his decision at first.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "My friends thought I was crazy",
    "why": "Bạn bè cho rằng anh điên rồ nên không ủng hộ."
   }
  ]
 },
 {
  "id": "rd-b1-b08",
  "lvl": "B1",
  "topic": "travel",
  "genre": "leaflet",
  "title": "Welcome to Hillside Farm Park",
  "text": "Welcome to Hillside Farm Park\n\nHillside Farm Park is a great day out for families. Visitors can meet more than 60 animals, including goats, ponies and rabbits. Our guides will show you how to feed the animals safely. Feeding times are at 11:00 and 3:00, and food bags cost two euros.\n\nOpening times: Tuesday to Sunday, 10 a.m. to 5 p.m. We are closed on Mondays except during school holidays. Tickets cost 9 euros for adults and 5 euros for children aged 3 to 12. Children under three enter free. Dogs are not allowed, except guide dogs, because they frighten the animals.\n\nFood and drink: The Barn Café serves soup, sandwiches and homemade cakes. You may also bring your own picnic and eat it at the tables near the pond. Please take your rubbish home or use the bins.\n\nGood to know: The paths are flat, so wheelchairs and baby buggies are welcome. Wear shoes that can get dirty, as some areas are muddy after rain. For group bookings of ten people or more, call 0151 555 0147 to get 15% off.",
  "gist": "Tờ rơi giới thiệu trang trại Hillside: giờ mở cửa, giá vé, quy định về chó, quán cà phê và lưu ý cho khách.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the leaflet for?",
    "opts": [
     "Advertising jobs for farm workers",
     "Selling animals to families",
     "Giving visitors useful information about the park",
     "Teaching people to cook"
    ],
    "a": 2,
    "ev": "Hillside Farm Park is a great day out for families.",
    "why": "Tờ rơi cung cấp thông tin cho khách tham quan."
   },
   {
    "kind": "detail",
    "q": "When can visitors learn how to feed the animals?",
    "opts": [
     "At 11:00 and 3:00",
     "At 10:00 and 5:00",
     "Only during school holidays",
     "Every hour from opening time"
    ],
    "a": 0,
    "ev": "Feeding times are at 11:00 and 3:00",
    "why": "Giờ cho ăn là 11:00 và 3:00."
   },
   {
    "kind": "detail",
    "q": "How much does an eight-year-old child pay to enter?",
    "opts": [
     "9 euros",
     "5 euros",
     "2 euros",
     "Nothing"
    ],
    "a": 1,
    "ev": "Tickets cost 9 euros for adults and 5 euros for children aged 3 to 12.",
    "why": "Trẻ 3-12 tuổi trả 5 euro."
   },
   {
    "kind": "inference",
    "q": "Which visitor would have a problem at the park?",
    "opts": [
     "A woman using a wheelchair",
     "A family with a baby buggy",
     "A group of ten adults",
     "A man bringing his pet dog"
    ],
    "a": 3,
    "ev": "Dogs are not allowed, except guide dogs",
    "why": "Chó nuôi không được vào, chỉ chó dẫn đường được phép."
   },
   {
    "kind": "tfng",
    "q": "The park offers a lower price for students.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Tờ rơi không nhắc đến giá cho sinh viên."
   }
  ]
 },
 {
  "id": "rd-b1-c01",
  "lvl": "B1",
  "topic": "work",
  "genre": "email",
  "title": "Changes to the Office Schedule",
  "text": "Subject: Changes to the office schedule\n\nHi everyone,\n\nFrom next Monday, our office will open at 8:00 instead of 9:00 and close at 4:30 instead of 5:30. The change was suggested by many of you in last month's survey, and Mr Park has agreed to try it for three months.\n\nThe new hours mean that staff who live far from the city can avoid the worst traffic. However, the customer phone line will stay open until 5:30, so two people must still be at their desks in the late afternoon. Anna and Nam will take the first month, and we will then change the list.\n\nPlease remember that the meeting room is no longer free before 10:00 because the training team will use it every morning. If you need a room for a client visit, book one by email at least two days before.\n\nIf the new hours cause any problems, tell me and I will pass your comments on to Mr Park.\n\nThanks,\nLan",
  "gist": "Email thông báo thay đổi giờ làm việc của văn phòng, kèm lịch trực điện thoại và phòng họp.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the email?",
    "opts": [
     "To inform staff about a change to office hours",
     "To ask staff to take part in a survey",
     "To explain a new rule about meeting rooms",
     "To report a problem with the phone line"
    ],
    "a": 0,
    "ev": "our office will open at 8:00 instead of 9:00",
    "why": "Email mở đầu bằng việc thông báo giờ mở cửa mới; các ý khác chỉ là chi tiết phụ."
   },
   {
    "kind": "detail",
    "q": "How will the new hours help some employees?",
    "opts": [
     "They can travel when the roads are less busy.",
     "They can take a longer lunch break.",
     "They no longer have to attend meetings.",
     "They can work from home twice a week."
    ],
    "a": 0,
    "ev": "can avoid the worst traffic",
    "why": "Văn bản nói nhân viên ở xa \"can avoid the worst traffic\", tức đi lại khi đường bớt đông."
   },
   {
    "kind": "detail",
    "q": "Who will stay late to answer calls in the first month?",
    "opts": [
     "Lan and Mr Park",
     "Anna and Nam",
     "The training team",
     "Nam and Lan"
    ],
    "a": 1,
    "ev": "Anna and Nam will take the first month",
    "why": "Câu \"Anna and Nam will take the first month\" nêu rõ hai người trực đầu tiên."
   },
   {
    "kind": "vocab",
    "q": "In the second paragraph, \"avoid\" is closest in meaning to",
    "opts": [
     "stay away from",
     "look for",
     "pay for",
     "wait in"
    ],
    "a": 0,
    "ev": "can avoid the worst traffic",
    "why": "\"Avoid\" nghĩa là tránh, tức tránh xa giờ cao điểm."
   },
   {
    "kind": "tfng",
    "q": "Staff can reserve the meeting room for a client visit on the same day they need it.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "book one by email at least two days before",
    "why": "Phải đặt phòng \"at least two days before\", nên không thể đặt trong ngày; câu này sai."
   }
  ]
 },
 {
  "id": "rd-b1-c02",
  "lvl": "B1",
  "topic": "travel",
  "genre": "blog",
  "title": "Two Days on the Coast Road",
  "text": "Last weekend my friend Minh and I cycled along the coast road for two days. We had never done a long bike trip before, so we were a little nervous. On Saturday we left the town at seven o'clock, when the air was still cool. The road was flat for the first thirty kilometres, and we stopped twice to eat fruit and take photos of the fishing boats.\n\nIn the afternoon things got harder. A strong wind blew against us, and Minh's back tyre went flat near a small village. A farmer saw us and lent us a pump, and he refused to take any money. That kindness made the whole day for me.\n\nWe slept in a simple guesthouse by the beach. The room cost only eight dollars, but there was no hot water, so the shower was a shock! On Sunday we rode back by a quieter inland road. Our legs were tired, but we felt proud. Next time we want to try a three-day trip, and I will bring a spare tyre.",
  "gist": "Blog kể về chuyến đạp xe hai ngày dọc bờ biển của hai người bạn, với khó khăn và sự giúp đỡ bất ngờ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the blog mainly about?",
    "opts": [
     "The writer's first two-day bike trip along the coast",
     "How to repair a flat bicycle tyre",
     "A comparison of two beach guesthouses",
     "Advice for people planning a three-day trip"
    ],
    "a": 0,
    "ev": "cycled along the coast road for two days",
    "why": "Cả bài kể lại chuyến đạp xe hai ngày đầu tiên của tác giả."
   },
   {
    "kind": "detail",
    "q": "Why did the friends leave the town at seven o'clock?",
    "opts": [
     "To avoid the strong wind",
     "To ride while the air was cool",
     "To buy fruit at a market",
     "To reach the guesthouse before dark"
    ],
    "a": 1,
    "ev": "when the air was still cool",
    "why": "Bài viết nói họ đi lúc bảy giờ \"when the air was still cool\"; gió chỉ nổi lên vào buổi chiều."
   },
   {
    "kind": "detail",
    "q": "How was the problem with the tyre solved?",
    "opts": [
     "Minh walked to the next town.",
     "They put on a spare tyre.",
     "A farmer lent them a pump.",
     "They paid a farmer to repair it."
    ],
    "a": 2,
    "ev": "A farmer saw us and lent us a pump",
    "why": "Người nông dân cho mượn bơm, và không nhận tiền."
   },
   {
    "kind": "inference",
    "q": "How does the writer feel about the trip as a whole?",
    "opts": [
     "Disappointed because it cost too much",
     "Bored by the flat road",
     "Angry with the farmer",
     "Pleased, even though it was hard"
    ],
    "a": 3,
    "ev": "Our legs were tired, but we felt proud",
    "why": "Dù mệt, tác giả \"felt proud\" và muốn đi chuyến dài hơn, nên cảm nhận tích cực."
   },
   {
    "kind": "tfng",
    "q": "The guesthouse served breakfast to the cyclists.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài chỉ nói phòng rẻ và không có nước nóng, không nhắc đến bữa sáng nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b2-c03",
  "lvl": "B2",
  "topic": "technology",
  "genre": "article",
  "title": "The Shortcut Problem",
  "text": "Navigation apps were meant to make journeys faster for everyone. For individual drivers, they often do. Yet some city planners now argue that the same technology is creating problems on streets that were never designed to carry heavy traffic.\n\nThe reason is simple. When a main road is congested, an app instantly suggests a shortcut through a residential neighbourhood. Thousands of drivers receive the same advice at the same moment, and a quiet street with a school and a playground suddenly fills with cars. Residents in one district, Rivermead, reported that traffic past their houses had tripled within two years of apps becoming popular.\n\nSome councils have responded by installing speed bumps, narrowing lanes, or banning turns at certain times of day. The apps, however, quickly learn about these obstacles and may still direct drivers there if the delay is judged to be small. Critics say the companies behind the software have little incentive to protect local streets, since their goal is to shorten each user's trip.\n\nTransport researchers suggest a different approach: sharing road data directly with the apps so that routes through sensitive areas are marked as closed. Early trials look promising, but they depend on cooperation that is not guaranteed. Until then, the people who live beside the shortcuts will continue to pay the price for other people's convenience.",
  "gist": "Ứng dụng chỉ đường đẩy xe cộ vào các khu dân cư yên tĩnh; các biện pháp của hội đồng thành phố chưa đủ và các nhà nghiên cứu đề xuất chia sẻ dữ liệu đường.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main point of the article?",
    "opts": [
     "Navigation apps no longer help individual drivers.",
     "Councils should ban navigation apps completely.",
     "Navigation apps can push heavy traffic onto unsuitable streets.",
     "Speed bumps are the best way to reduce traffic."
    ],
    "a": 2,
    "ev": "creating problems on streets that were never designed to carry heavy traffic",
    "why": "Bài nói công nghệ này tạo vấn đề trên những con phố không được thiết kế cho nhiều xe."
   },
   {
    "kind": "detail",
    "q": "What did residents of Rivermead report?",
    "opts": [
     "Traffic outside their homes became three times heavier.",
     "A school was closed because of danger.",
     "Traffic fell after speed bumps were built.",
     "App companies agreed to pay for repairs."
    ],
    "a": 0,
    "ev": "traffic past their houses had tripled within two years",
    "why": "\"Tripled\" nghĩa là tăng gấp ba, trong vòng hai năm."
   },
   {
    "kind": "detail",
    "q": "Why do the councils' measures often fail to stop the apps?",
    "opts": [
     "The apps cannot detect physical obstacles.",
     "Drivers deliberately ignore the apps' advice.",
     "Councils remove the obstacles after complaints.",
     "The apps may still send drivers there if the delay seems minor."
    ],
    "a": 3,
    "ev": "may still direct drivers there if the delay is judged to be small",
    "why": "Ứng dụng học được các chướng ngại nhưng vẫn dẫn xe tới nếu độ chậm trễ nhỏ."
   },
   {
    "kind": "vocab",
    "q": "In the last paragraph, \"promising\" is closest in meaning to",
    "opts": [
     "likely to succeed",
     "difficult to measure",
     "very expensive",
     "recently finished"
    ],
    "a": 0,
    "ev": "Early trials look promising",
    "why": "\"Promising\" ở đây là có triển vọng, có vẻ sẽ thành công."
   },
   {
    "kind": "tfng",
    "q": "Most drivers say they would stop using navigation apps if asked to.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không đề cập ý kiến của tài xế về việc ngừng dùng ứng dụng nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b2-c04",
  "lvl": "B2",
  "topic": "environment",
  "genre": "news",
  "title": "A Town Lets Its Grass Grow",
  "text": "The council of Aldermoor, a mid-sized town in the north of the country, has stopped mowing most of its public grass verges and parks. Instead, it has sown wildflower seed on more than forty hectares of land, a decision that surprised many residents when it was announced two summers ago.\n\nThe idea came from a local ecologist, Dr Tran, who noticed that insects were almost absent from the town's tidy lawns. After the first season, her team counted over ninety species of bees, butterflies and beetles in areas that had previously supported fewer than twenty. Birds that feed on insects have followed, and the council says it now spends roughly a third less on grass cutting and fuel.\n\nNot everyone is delighted. Some residents complain that the meadows look untidy by late summer, and a few worry that tall plants block drivers' view at junctions. The council has answered by keeping a one-metre strip beside roads and paths cut short, and by placing small signs that explain the purpose of each meadow.\n\nDr Tran admits that the project cannot solve the wider decline of insects, which is driven largely by farming methods and climate change. \"A town is only a small part of the picture,\" she says. \"But a small part, repeated in many towns, can become a very large one.\" Several neighbouring councils have already asked to visit Aldermoor to learn from its experience.",
  "gist": "Một thị trấn ngừng cắt cỏ, gieo hoa dại; côn trùng tăng mạnh và chi phí giảm, dù vẫn có người phàn nàn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the article mainly about?",
    "opts": [
     "A town's change from mown lawns to wildflower meadows",
     "The causes of insect decline across the country",
     "A dispute between a council and an ecologist",
     "New rules for drivers at road junctions"
    ],
    "a": 0,
    "ev": "has stopped mowing most of its public grass verges and parks",
    "why": "Bài tập trung vào việc thị trấn thôi cắt cỏ và gieo hoa dại cùng kết quả."
   },
   {
    "kind": "detail",
    "q": "What did Dr Tran's team find after the first season?",
    "opts": [
     "Fewer than twenty insect species in places that previously had ninety",
     "More than ninety insect species in places that previously had under twenty",
     "Ninety new bird species in the town's parks",
     "Twenty species of plants in the new meadows"
    ],
    "a": 1,
    "ev": "over ninety species of bees, butterflies and beetles in areas that had previously supported fewer than twenty",
    "why": "Số loài côn trùng tăng từ dưới 20 lên hơn 90 ở khu vực đã chuyển đổi."
   },
   {
    "kind": "detail",
    "q": "How has the council dealt with worries about visibility?",
    "opts": [
     "By removing all meadows near junctions",
     "By asking drivers to slow down",
     "By cutting every meadow before late summer",
     "By keeping the edges beside roads cut short"
    ],
    "a": 3,
    "ev": "keeping a one-metre strip beside roads and paths cut short",
    "why": "Hội đồng giữ dải rộng một mét cạnh đường được cắt ngắn."
   },
   {
    "kind": "inference",
    "q": "What does Dr Tran suggest in her final comment?",
    "opts": [
     "Her project has already ended the decline of insects.",
     "Similar projects in many towns could have a large effect.",
     "Only large cities can help insects.",
     "Towns should ignore the effects of farming."
    ],
    "a": 1,
    "ev": "a small part, repeated in many towns, can become a very large one",
    "why": "Bà ngụ ý nhiều thị trấn cùng làm thì tác động sẽ lớn."
   },
   {
    "kind": "tfng",
    "q": "The council now pays more for fuel than it did before.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "spends roughly a third less on grass cutting and fuel",
    "why": "Hội đồng chi ít hơn khoảng một phần ba cho cắt cỏ và nhiên liệu, không phải nhiều hơn."
   }
  ]
 },
 {
  "id": "rd-b2-c05",
  "lvl": "B2",
  "topic": "work",
  "genre": "dialogue",
  "title": "Sharing One Job",
  "text": "Anna: Minh, I heard you've moved to a job-share with Lan at Orion Logistics. How does that work?\n\nMinh: Basically, we split one full-time planning role. I work Monday to Wednesday morning and Lan covers the rest of the week. We have a shared notebook, and we spend thirty minutes together on Wednesday to hand everything over.\n\nAnna: Doesn't that cause confusion? Clients usually want one point of contact.\n\nMinh: That was my worry at first. But the clients now have two people who know their accounts, so if one of us is ill, nothing stops. Honestly, the biggest challenge isn't communication, it's trust. You have to accept that someone else will make decisions about your projects, and that they may do things differently.\n\nAnna: And the salary? I imagine it's halved.\n\nMinh: Roughly, yes, though our manager argued that we produce more than half each, because we're fresher. I'm not sure that's true, but I do feel less tired. I use my free days to study for a data analysis course, which I couldn't have done before.\n\nAnna: Would you recommend it?\n\nMinh: For people with a clear reason, yes. If you just want more free time without a plan, I think the lower income would become frustrating quickly. Also, it only works if your partner is reliable. I was lucky with Lan.",
  "gist": "Hội thoại về việc hai người chia sẻ một vị trí công việc: cách phối hợp, khó khăn lớn nhất, lương và lời khuyên.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the conversation?",
    "opts": [
     "To discuss Minh's experience of sharing a job",
     "To plan a handover meeting with clients",
     "To explain why a manager is unhappy",
     "To compare two data analysis courses"
    ],
    "a": 0,
    "ev": "we split one full-time planning role",
    "why": "Cả đoạn hội thoại xoay quanh trải nghiệm chia sẻ một công việc của Minh."
   },
   {
    "kind": "detail",
    "q": "What does Minh find hardest about job-sharing?",
    "opts": [
     "Explaining the work to new clients",
     "Finding time for the weekly handover",
     "Accepting that a colleague may decide things differently",
     "Learning the details of each account"
    ],
    "a": 2,
    "ev": "the biggest challenge isn't communication, it's trust",
    "why": "Minh nói thách thức lớn nhất là sự tin tưởng, chấp nhận người khác quyết định khác mình."
   },
   {
    "kind": "detail",
    "q": "What does Minh do with his days off?",
    "opts": [
     "He looks after other clients.",
     "He studies a course in data analysis.",
     "He covers Lan's shifts.",
     "He works for another company."
    ],
    "a": 1,
    "ev": "I use my free days to study for a data analysis course",
    "why": "Minh dùng ngày rảnh để học khóa phân tích dữ liệu."
   },
   {
    "kind": "inference",
    "q": "What does Minh suggest about job-sharing without a clear plan?",
    "opts": [
     "It is easy to organise.",
     "It always leads to higher pay.",
     "It is only suitable for managers.",
     "It may become disappointing because of the lower income."
    ],
    "a": 3,
    "ev": "the lower income would become frustrating quickly",
    "why": "Nếu không có kế hoạch rõ ràng, thu nhập thấp sẽ nhanh chóng gây khó chịu."
   },
   {
    "kind": "tfng",
    "q": "Minh's manager thinks job-sharers produce less than half of a full-timer's work each.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "our manager argued that we produce more than half each, because we're fresher",
    "why": "Quản lý cho rằng mỗi người làm ra hơn một nửa, trái với phát biểu."
   }
  ]
 },
 {
  "id": "rd-b2-c06",
  "lvl": "B2",
  "topic": "education",
  "genre": "article",
  "title": "Why Rereading Fails",
  "text": "Most students believe that the best way to prepare for an exam is to read their notes again and again the night before. Psychologists have known for over a century that this feels effective but works poorly. The reason is that repeated reading creates familiarity, and familiarity is easily mistaken for knowledge.\n\nA more reliable method is called spaced retrieval. Instead of studying a topic for three hours in one evening, the learner studies it for one hour on three separate days, and each time tries to recall the main points from memory before checking the notes. The short gaps allow the brain to forget a little, and the effort of remembering strengthens the connection more than simple rereading does.\n\nIn one classroom experiment, two groups of teenagers learned the same list of science terms. One group studied the list in a single session, while the other met the material in three shorter sessions a week apart. Two months later, the second group remembered almost twice as many terms. Interestingly, when asked beforehand which method they preferred, most students chose the single session.\n\nResearchers are careful to point out that the technique has limits. It requires planning, which many students find difficult, and it is less useful for understanding complex arguments than for memorising facts. Nevertheless, teachers who introduce even a small amount of spacing report that their classes perform better in tests.",
  "gist": "Đọc lại ghi chú tạo cảm giác quen thuộc chứ không phải hiểu biết; học cách quãng và tự gợi nhớ hiệu quả hơn nhưng có giới hạn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "Why students should avoid science subjects",
     "A study method that works better than rereading notes",
     "How teachers can write better exams",
     "The causes of forgetting in old age"
    ],
    "a": 1,
    "ev": "A more reliable method is called spaced retrieval",
    "why": "Bài giới thiệu spaced retrieval như phương pháp hiệu quả hơn việc đọc lại."
   },
   {
    "kind": "detail",
    "q": "Why is rereading notes an unreliable way to study?",
    "opts": [
     "It takes too many hours.",
     "It makes the material seem too difficult.",
     "It forces students to study at night.",
     "It gives a feeling of knowing that is not real knowledge."
    ],
    "a": 3,
    "ev": "familiarity is easily mistaken for knowledge",
    "why": "Đọc lại tạo sự quen thuộc, dễ bị nhầm với kiến thức thật."
   },
   {
    "kind": "detail",
    "q": "What happened in the classroom experiment?",
    "opts": [
     "Both groups remembered a similar number of terms.",
     "The single-session group remembered almost twice as many terms.",
     "The group with several shorter sessions remembered more terms.",
     "The students who preferred spacing did best."
    ],
    "a": 2,
    "ev": "the second group remembered almost twice as many terms",
    "why": "Nhóm học nhiều buổi ngắn nhớ gần gấp đôi số thuật ngữ."
   },
   {
    "kind": "vocab",
    "q": "In the second paragraph, \"reliable\" is closest in meaning to",
    "opts": [
     "more popular",
     "cheaper",
     "quicker to explain",
     "more likely to give good results"
    ],
    "a": 3,
    "ev": "A more reliable method is called spaced retrieval",
    "why": "\"Reliable\" là đáng tin cậy, thường cho kết quả tốt."
   },
   {
    "kind": "tfng",
    "q": "Most students in the experiment preferred the method that worked best.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "most students chose the single session",
    "why": "Phần lớn chọn học một buổi, là phương pháp kém hiệu quả hơn."
   }
  ]
 },
 {
  "id": "rd-b2-c07",
  "lvl": "B2",
  "topic": "culture",
  "genre": "article",
  "title": "Please Touch the Exhibit",
  "text": "For most of their history, museums have followed one unspoken rule: look, but do not touch. Glass cases, ropes and alarms protect fragile objects, and visitors learn to move quietly, hands in pockets. Yet a growing number of museums are quietly breaking that rule, at least for selected items.\n\nThe Harbour Street Museum in the city of Calden recently opened a room where visitors may handle replica tools, coins and pottery. Staff explain that the replicas are made from the same materials as the originals, so people can feel the weight of a stone axe or the roughness of ancient cloth. Curator Ms Okafor says visitors stay up to three times longer in the room than in any other gallery, and children in particular ask more questions.\n\nNot all experts agree with the trend. Some argue that handling replicas can leave visitors with the false impression that they have experienced the real thing, and that the room takes space and money away from the museum's research. Others fear that once touching is allowed in one room, visitors will begin to try it everywhere, putting priceless objects at risk.\n\nMs Okafor accepts these concerns but remains convinced. 'People remember what they do far longer than what they read on a label,' she says. 'If a replica gets them curious about the real object, then it has done its job.'",
  "gist": "Một số bảo tàng cho phép khách chạm vào bản sao; có lợi ích về sự quan tâm nhưng cũng bị chuyên gia lo ngại.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main idea of the article?",
    "opts": [
     "Museums have always let visitors touch objects.",
     "Some museums let visitors handle copies of objects, and this is debated.",
     "Replicas are more valuable than original objects.",
     "Children should not be allowed in museums."
    ],
    "a": 1,
    "ev": "a growing number of museums are quietly breaking that rule",
    "why": "Bài nói xu hướng cho chạm vào bản sao và các ý kiến trái chiều."
   },
   {
    "kind": "detail",
    "q": "What is special about the replicas in Calden?",
    "opts": [
     "They are older than the originals.",
     "They are made from the same materials as the originals.",
     "They are kept behind glass cases.",
     "They were made by visitors."
    ],
    "a": 1,
    "ev": "made from the same materials as the originals",
    "why": "Bản sao được làm từ cùng vật liệu như bản gốc."
   },
   {
    "kind": "detail",
    "q": "What does Ms Okafor say about the visitors in the new room?",
    "opts": [
     "They buy more souvenirs than other visitors.",
     "They stay only a few minutes.",
     "They spend longer there than in other galleries.",
     "They prefer it to every other museum."
    ],
    "a": 2,
    "ev": "visitors stay up to three times longer in the room than in any other gallery",
    "why": "Khách ở lại lâu hơn ở mọi phòng trưng bày khác."
   },
   {
    "kind": "vocab",
    "q": "In the last paragraph, \"convinced\" is closest in meaning to",
    "opts": [
     "slightly worried",
     "completely sure",
     "easily persuaded",
     "politely silent"
    ],
    "a": 1,
    "ev": "remains convinced",
    "why": "Bà Okafor chấp nhận lo ngại nhưng vẫn hoàn toàn tin chắc vào ý tưởng."
   },
   {
    "kind": "tfng",
    "q": "The museum has recorded a fall in visitor numbers since the room opened.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không đưa thông tin về tổng số khách giảm, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b2-c08",
  "lvl": "B2",
  "topic": "society",
  "genre": "letter",
  "title": "Save the Elm Road Centre",
  "text": "Dear Editor,\n\nI am writing in response to your recent article about the plan to close the Elm Road community centre. As someone who has lived in the area for almost thirty years, I believe the council is making a serious mistake, and I would like to explain why.\n\nThe council says that the centre costs too much to run and that few people use it. In fact, the centre is busy in the evenings and at weekends, when the council's own survey was not carried out. Its figures were collected on weekday mornings, when most residents are at work or school. Counting visitors at the wrong time naturally produces low numbers.\n\nMore importantly, the centre offers something that cannot easily be measured in money. Older neighbours who live alone meet there for lunch twice a week. Teenagers use the quiet room for homework because their flats are crowded. A group of parents even started a small repair workshop, which saves several families from buying new appliances. If the building closes, these activities will probably disappear, and the cost to public services in loneliness and poorer health could easily be greater than the savings.\n\nI am not suggesting that the council should ignore its budget. I would simply ask it to repeat the survey at suitable times and to meet residents before making a final decision.\n\nYours faithfully,\nMai Hoang",
  "gist": "Thư gửi biên tập viên phản đối kế hoạch đóng trung tâm cộng đồng, chỉ ra khảo sát sai thời điểm và lợi ích xã hội.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the letter?",
    "opts": [
     "To argue against closing a community centre",
     "To apply for a job at the council",
     "To advertise a repair workshop",
     "To thank the editor for an article"
    ],
    "a": 0,
    "ev": "I believe the council is making a serious mistake",
    "why": "Tác giả viết để phản đối kế hoạch đóng trung tâm."
   },
   {
    "kind": "detail",
    "q": "Why does the writer doubt the council's figures?",
    "opts": [
     "They were collected by untrained volunteers.",
     "They were based only on the centre's income.",
     "They included only elderly residents.",
     "They were gathered at times when few residents can visit."
    ],
    "a": 3,
    "ev": "Its figures were collected on weekday mornings",
    "why": "Số liệu thu vào sáng ngày thường khi cư dân đi làm, đi học."
   },
   {
    "kind": "detail",
    "q": "What do teenagers use the centre for?",
    "opts": [
     "Quiet study",
     "Repairing appliances",
     "Sharing lunch",
     "Weekend sports"
    ],
    "a": 0,
    "ev": "Teenagers use the quiet room for homework",
    "why": "Thanh thiếu niên dùng phòng yên tĩnh để làm bài tập."
   },
   {
    "kind": "inference",
    "q": "What does the writer suggest about closing the centre?",
    "opts": [
     "It would be against the law.",
     "It may cost more in the long run than it saves.",
     "It would please most residents.",
     "It was decided without any budget."
    ],
    "a": 1,
    "ev": "could easily be greater than the savings",
    "why": "Tác giả cho rằng chi phí xã hội có thể lớn hơn khoản tiết kiệm."
   },
   {
    "kind": "tfng",
    "q": "The writer thinks the council should spend more than it can afford.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "I am not suggesting that the council should ignore its budget",
    "why": "Tác giả nói rõ không đề nghị bỏ qua ngân sách."
   }
  ]
 },
 {
  "id": "rd-b2-d01",
  "lvl": "B2",
  "topic": "science",
  "genre": "article",
  "title": "Why We Need Sleep to Remember",
  "text": "Most people think of sleep as a time when the brain simply switches off, but research suggests the opposite. During the night, the brain is busy sorting through the information it has gathered during the day, deciding what to keep and what to discard. This process, known as memory consolidation, is one of the main reasons why a good night's rest improves learning.\n\nIn one well-known type of experiment, volunteers learn a list of word pairs in the evening. Half of them then sleep normally, while the other half stay awake all night. When both groups are tested two days later, after everyone has had a chance to recover, the people who slept immediately after learning remember significantly more. This suggests that sleep protects new memories at the moment when they are most fragile.\n\nDifferent stages of sleep appear to play different roles. Deep sleep, which dominates the first half of the night, seems to strengthen factual memories, such as vocabulary or historical dates. Rapid eye movement sleep, which becomes longer towards morning, is more closely linked to emotional memories and to creative problem solving. A person who regularly cuts their sleep short by two hours may therefore lose the very stages that matter most for certain kinds of learning.\n\nThese findings have practical implications for students. Many of them believe that staying up until dawn to revise is an effective strategy, yet the evidence indicates that it may be counterproductive. A more sensible approach is to study in the evening, sleep for a full night and review the material briefly the next morning. Researchers stress, however, that sleep is not magic: it can only strengthen information that was properly understood in the first place.",
  "gist": "Giấc ngủ giúp não củng cố trí nhớ, và các giai đoạn ngủ khác nhau củng cố các loại ký ức khác nhau; vì vậy thức đêm để ôn bài thường phản tác dụng.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main point of the passage?",
    "opts": [
     "Sleep actively helps the brain to store what has been learned.",
     "Students should avoid studying in the evening.",
     "The brain stops working completely during sleep.",
     "Creative people need less sleep than other people."
    ],
    "a": 0,
    "ev": "the brain is busy sorting through the information it has gathered during the day",
    "why": "Đoạn 1 nói não hoạt động để sắp xếp và củng cố thông tin trong khi ngủ."
   },
   {
    "kind": "detail",
    "q": "In the experiment described, when were the two groups compared?",
    "opts": [
     "Two days after the learning session, once both had recovered",
     "On the morning straight after the night without sleep",
     "Before either group had learned anything",
     "One week after the volunteers had left the laboratory"
    ],
    "a": 0,
    "ev": "When both groups are tested two days later, after everyone has had a chance to recover",
    "why": "Hai nhóm được kiểm tra sau hai ngày, khi mọi người đã hồi phục."
   },
   {
    "kind": "detail",
    "q": "According to the passage, what is deep sleep associated with?",
    "opts": [
     "Strengthening factual information",
     "Producing emotional memories",
     "Becoming longer as morning approaches",
     "Solving creative problems"
    ],
    "a": 0,
    "ev": "seems to strengthen factual memories, such as vocabulary or historical dates",
    "why": "Giấc ngủ sâu củng cố ký ức về sự kiện như từ vựng, ngày tháng."
   },
   {
    "kind": "inference",
    "q": "What can be inferred about a student who sleeps four hours before an exam?",
    "opts": [
     "They may miss a stage of sleep that helps certain learning.",
     "They will certainly fail the exam.",
     "They will remember emotional events better.",
     "They will have longer deep sleep than usual."
    ],
    "a": 0,
    "ev": "may therefore lose the very stages that matter most for certain kinds of learning",
    "why": "Cắt ngắn giấc ngủ có thể làm mất các giai đoạn quan trọng cho việc học."
   },
   {
    "kind": "tfng",
    "q": "The passage says that sleep can improve the memory of material that a student has not understood.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "it can only strengthen information that was properly understood in the first place",
    "why": "Văn bản nói giấc ngủ chỉ củng cố thông tin đã được hiểu đúng, nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b2-d02",
  "lvl": "B2",
  "topic": "society",
  "genre": "article",
  "title": "The Box That Changed Trade",
  "text": "Before the 1950s, loading a cargo ship was slow, expensive work. Goods arrived at the port in sacks, barrels and crates of every shape, and teams of dockworkers carried them aboard by hand. A ship could spend almost as many days in harbour as it did at sea, and theft and damage were common. Shipping a single television across the ocean could cost a significant proportion of its price.\n\nThe solution came from a trucking businessman in the United States, who became frustrated watching lorries wait while their goods were lifted individually onto ships. His idea was simple: put everything into a standard metal box that could be moved, without being opened, from a lorry to a ship to a train. The first voyage with such boxes took place in 1956, and it carried fewer than sixty of them.\n\nAt first, the industry resisted the change. Port workers feared for their jobs, and shipping companies did not want to invest in expensive cranes. Moreover, every country used boxes of slightly different sizes, which made them hard to exchange. Only when international organisations agreed on common dimensions in the 1960s did the system become truly global.\n\nThe effects were dramatic. Loading times fell from several days to a matter of hours, and the cost of moving goods dropped so sharply that it became cheaper to make products far from where they were sold. Factories in Asia began supplying shops in Europe and North America, and many economists argue that this change helped to create modern globalisation.\n\nYet the success of the container also has a darker side. Ports now need huge areas of land and powerful machinery, and the large ships that use them produce considerable pollution. Many traditional harbour towns lost their main source of employment and never fully recovered.",
  "gist": "Container tiêu chuẩn hóa đã làm giảm mạnh chi phí và thời gian vận chuyển, thúc đẩy toàn cầu hóa, nhưng cũng gây ô nhiễm và làm mất việc làm ở nhiều cảng cũ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly about?",
    "opts": [
     "How a standard box transformed international shipping",
     "The dangers of working in a port",
     "Why televisions became cheaper",
     "How lorries replaced ships"
    ],
    "a": 0,
    "ev": "put everything into a standard metal box",
    "why": "Cả bài nói về ý tưởng container chuẩn hóa và tác động của nó."
   },
   {
    "kind": "detail",
    "q": "Why did shipping take so long before containers?",
    "opts": [
     "Goods were handled by hand in many different shapes",
     "Ships were too small to carry heavy goods",
     "Ports were closed during the winter",
     "Customs officers inspected every sack"
    ],
    "a": 0,
    "ev": "teams of dockworkers carried them aboard by hand",
    "why": "Hàng hóa nhiều hình dạng và được bốc bằng tay nên chậm."
   },
   {
    "kind": "detail",
    "q": "What finally made the container system work worldwide?",
    "opts": [
     "An agreement on common sizes",
     "The invention of the crane",
     "A fall in the price of televisions",
     "The support of port workers"
    ],
    "a": 0,
    "ev": "agreed on common dimensions in the 1960s",
    "why": "Các tổ chức quốc tế thống nhất kích thước chung vào thập niên 1960."
   },
   {
    "kind": "vocab",
    "q": "The word \"resisted\" in paragraph 3 is closest in meaning to",
    "opts": [
     "opposed",
     "delayed",
     "copied",
     "ignored"
    ],
    "a": 0,
    "ev": "the industry resisted the change",
    "why": "Resisted = chống lại, phản đối, vì công nhân lo mất việc."
   },
   {
    "kind": "tfng",
    "q": "The first container voyage carried more than a hundred boxes.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "it carried fewer than sixty of them",
    "why": "Chuyến đầu chở ít hơn sáu mươi thùng, nên sai."
   }
  ]
 },
 {
  "id": "rd-b2-d03",
  "lvl": "B2",
  "topic": "work",
  "genre": "report",
  "title": "The Four-Day Week: What the Trials Show",
  "text": "Over the past few years, a number of companies have experimented with a shorter working week in which employees are paid the same salary for working four days instead of five. The idea once sounded unrealistic, but several large trials have now produced data that managers cannot easily ignore.\n\nIn a typical trial, participating firms agree to measure their output, staff stress and resignation rates before and after the change. In most cases, revenue stayed roughly the same or rose slightly, and the proportion of employees who left voluntarily fell. Workers reported lower levels of burnout and said that they could manage their family responsibilities more easily. Several firms also noticed that fewer people called in sick.\n\nWhy would productivity not fall when working hours do? Researchers point to a few explanations. First, people tend to waste a surprising amount of time in long meetings and unnecessary emails; when time is limited, they cut these out. Second, rested employees concentrate better and make fewer mistakes. Third, a shorter week acts as a powerful incentive, since staff want to keep the arrangement and therefore work harder to prove that it succeeds.\n\nHowever, critics urge caution. The firms that volunteer for trials are usually small, creative organisations that already trust their employees, so the results may not apply to hospitals, factories or restaurants, where a service must be provided every day. Others worry that, in some workplaces, employees simply compress five days of work into four longer and more exhausting ones. There is also the question of whether the enthusiasm shown in the first year will last.\n\nFor now, the evidence suggests that a four-day week can work well in suitable sectors, though it is unlikely to be a universal solution. The most useful lesson may be that working time should be judged by results, not by the number of hours spent at a desk.",
  "gist": "Các thử nghiệm tuần làm việc bốn ngày cho thấy năng suất thường giữ nguyên và nhân viên hài lòng hơn, nhưng kết quả có thể không áp dụng cho mọi ngành.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's overall conclusion about the four-day week?",
    "opts": [
     "It works well in some sectors but is not a universal answer.",
     "It should replace the five-day week everywhere.",
     "It has failed in most trials.",
     "It is only popular with managers."
    ],
    "a": 0,
    "ev": "it is unlikely to be a universal solution",
    "why": "Kết luận: hiệu quả ở ngành phù hợp nhưng không phải giải pháp chung."
   },
   {
    "kind": "detail",
    "q": "What happened to revenue in most of the trials?",
    "opts": [
     "It stayed about the same or increased a little",
     "It fell sharply",
     "It doubled",
     "It was not measured"
    ],
    "a": 0,
    "ev": "revenue stayed roughly the same or rose slightly",
    "why": "Doanh thu giữ nguyên hoặc tăng nhẹ."
   },
   {
    "kind": "detail",
    "q": "According to researchers, why might employees stay productive?",
    "opts": [
     "They remove wasteful activities when time is short",
     "They are paid extra for each hour",
     "They are watched more closely by managers",
     "They take fewer holidays"
    ],
    "a": 0,
    "ev": "when time is limited, they cut these out",
    "why": "Khi thời gian có hạn, họ bỏ bớt họp và email không cần thiết."
   },
   {
    "kind": "inference",
    "q": "Why do critics doubt that the results apply to hospitals?",
    "opts": [
     "A hospital must provide its service every day.",
     "Doctors dislike short weeks.",
     "Hospitals cannot measure output.",
     "Hospital staff are never stressed."
    ],
    "a": 0,
    "ev": "where a service must be provided every day",
    "why": "Bệnh viện phải phục vụ hàng ngày nên khó rút ngắn tuần làm việc."
   },
   {
    "kind": "tfng",
    "q": "The companies in the trials were required by law to take part.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "The firms that volunteer for trials",
    "why": "Văn bản nói các công ty \"volunteer\" (tự nguyện) tham gia, nên câu bị bắt buộc theo luật là sai, không phải Not given."
   }
  ]
 },
 {
  "id": "rd-b2-d04",
  "lvl": "B2",
  "topic": "technology",
  "genre": "article",
  "title": "How Noise-Cancelling Headphones Work",
  "text": "Anyone who has travelled on a long flight knows how tiring constant engine noise can be. Noise-cancelling headphones offer a solution, and they do so with a clever piece of physics rather than simply blocking sound with thick padding.\n\nSound travels as a wave of pressure that rises and falls many times per second. If a second wave with exactly the opposite pattern is produced at the same moment, the two waves meet and flatten each other out, leaving almost silence. This effect is called destructive interference. Headphones achieve it by using tiny microphones on the outside of each ear cup to detect the surrounding noise. A small electronic circuit analyses the sound and instantly creates an opposite wave, which is played through the speaker together with your music.\n\nThe technique works best with steady, low sounds such as the hum of an aircraft or the rumble of a train. These sounds are predictable, so the circuit has time to calculate the opposite wave accurately. Sudden or high-pitched noises, such as a dog barking or someone shouting, change too quickly for the system to follow, and they usually pass through. For this reason, most models combine electronic cancellation with ordinary padding that blocks higher sounds physically.\n\nThe technology is not without drawbacks. Some wearers describe a strange feeling of pressure in the ears, although no real pressure is present. The circuit also needs a battery, which makes the headphones heavier and more expensive than simple ones. Audio specialists add that the electronics can slightly change the quality of music, since the system occasionally adds a faint hiss.\n\nDespite these limitations, the devices have become popular with commuters and office workers, who use them to create a quiet space in crowded environments.",
  "gist": "Tai nghe chống ồn dùng micro và mạch điện tử tạo sóng âm ngược pha để triệt tiêu tiếng ồn đều, thấp; chúng kém hiệu quả với âm thanh đột ngột hoặc cao.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the passage?",
    "opts": [
     "To explain how a type of headphones reduces noise",
     "To compare different brands of headphones",
     "To warn people about the dangers of loud music",
     "To describe the history of air travel"
    ],
    "a": 0,
    "ev": "they do so with a clever piece of physics",
    "why": "Bài giải thích nguyên lý vật lý của tai nghe chống ồn."
   },
   {
    "kind": "detail",
    "q": "What is the job of the microphones on the outside of the ear cups?",
    "opts": [
     "To pick up the noise from the surroundings",
     "To record the wearer's voice",
     "To play the opposite wave",
     "To store the music"
    ],
    "a": 0,
    "ev": "to detect the surrounding noise",
    "why": "Micro bên ngoài dùng để phát hiện tiếng ồn xung quanh."
   },
   {
    "kind": "detail",
    "q": "Why do sudden noises usually get through?",
    "opts": [
     "They change too fast for the system to follow",
     "They are too quiet to detect",
     "They are blocked by the padding",
     "They travel as light waves"
    ],
    "a": 0,
    "ev": "change too quickly for the system to follow",
    "why": "Âm thanh đột ngột thay đổi quá nhanh để hệ thống theo kịp."
   },
   {
    "kind": "vocab",
    "q": "The word \"steady\" in paragraph 3 is closest in meaning to",
    "opts": [
     "constant",
     "loud",
     "painful",
     "musical"
    ],
    "a": 0,
    "ev": "steady, low sounds such as the hum of an aircraft",
    "why": "Steady = đều, không đổi, như tiếng ù động cơ."
   },
   {
    "kind": "tfng",
    "q": "Wearers experience real air pressure in their ears when the headphones are on.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "although no real pressure is present",
    "why": "Bài nói không có áp suất thật, chỉ là cảm giác, nên sai."
   }
  ]
 },
 {
  "id": "rd-c1-d05",
  "lvl": "C1",
  "topic": "society",
  "genre": "article",
  "title": "The Tyranny of Being Productive",
  "text": "It has become almost impossible to describe a free afternoon without a note of apology. Rest, we are told, must be earned, optimised or at least justified as preparation for more work. The language of productivity, once confined to factories, now colonises our private lives: we track our steps, schedule our hobbies and judge a weekend by how much of the to-do list it managed to clear. Leisure that produces nothing measurable is regarded as slightly shameful.\n\nThis attitude is curious, because technology was supposed to deliver the opposite. Economists in the early twentieth century confidently predicted that rising efficiency would shrink the working week to fifteen hours by now. Instead, the gains were absorbed by higher expectations. Every time a task becomes quicker, a new one expands to fill the gap, and the sense of having finished never quite arrives. The inbox, unlike the assembly line, has no natural end.\n\nDefenders of the cult of productivity argue that it reflects ambition, and that a society which values effort will achieve more. There is some truth in this; few people want to return to an age of enforced idleness. But the argument confuses activity with accomplishment. Studies of knowledge workers suggest that creative insight frequently arrives not at the desk but during walks, showers and apparently aimless daydreaming. A mind that is permanently occupied has little opportunity to make the unexpected connections on which original thinking depends.\n\nThere is, moreover, a moral cost. When worth is measured by output, those who cannot produce at a steady rate, such as the sick, the elderly or carers, are quietly demoted to the margins of respect. A culture that cannot value rest therefore struggles to value people who cannot work.\n\nNone of this requires abandoning effort. It requires distinguishing between work that gives life meaning and busyness that merely fills time. Perhaps the most radical thing one can do is to spend an afternoon doing nothing in particular, and to feel no need to explain it.",
  "gist": "Tác giả phê phán văn hóa tôn sùng năng suất: nó xâm chiếm đời sống riêng, cản trở sáng tạo và hạ thấp những người không thể làm việc đều đặn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's central argument?",
    "opts": [
     "Valuing constant productivity harms creativity and wellbeing.",
     "Technology has made people work fewer hours.",
     "Ambition is a harmful quality.",
     "Factories should be modernised."
    ],
    "a": 0,
    "ev": "A culture that cannot value rest therefore struggles to value people who cannot work.",
    "why": "Cả bài phê phán việc đo giá trị bằng năng suất và coi nhẹ nghỉ ngơi."
   },
   {
    "kind": "detail",
    "q": "Why did the predicted fifteen-hour working week not appear?",
    "opts": [
     "Higher expectations absorbed the efficiency gains",
     "Workers refused to use new technology",
     "Factories closed down",
     "Economists miscalculated wages"
    ],
    "a": 0,
    "ev": "the gains were absorbed by higher expectations",
    "why": "Lợi ích hiệu suất bị nuốt bởi kỳ vọng cao hơn."
   },
   {
    "kind": "detail",
    "q": "According to the writer, when does creative insight often occur?",
    "opts": [
     "During relaxed, unfocused moments away from the desk",
     "While answering emails",
     "In the middle of meetings",
     "Only after a long holiday"
    ],
    "a": 0,
    "ev": "during walks, showers and apparently aimless daydreaming",
    "why": "Ý tưởng sáng tạo thường đến khi đi dạo, tắm, mơ màng."
   },
   {
    "kind": "inference",
    "q": "What does the writer imply about defenders of productivity?",
    "opts": [
     "They overlook the difference between being busy and achieving something.",
     "They have never worked in an office.",
     "They want to forbid leisure.",
     "They are mostly economists."
    ],
    "a": 0,
    "ev": "But the argument confuses activity with accomplishment.",
    "why": "Tác giả cho rằng họ nhầm lẫn hoạt động với thành tựu."
   },
   {
    "kind": "tfng",
    "q": "The writer believes that people should stop working hard altogether.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "None of this requires abandoning effort.",
    "why": "Tác giả nói không cần từ bỏ nỗ lực, nên sai."
   }
  ]
 },
 {
  "id": "rd-c1-d06",
  "lvl": "C1",
  "topic": "culture",
  "genre": "article",
  "title": "The Clock and the Invention of Punctuality",
  "text": "To a modern reader, the idea that time might be experienced differently seems almost absurd. We divide the day into equal, numbered units and arrange our lives around them. Yet for most of history, time was a matter of natural rhythms: people rose with the light, worked until a task was finished and measured the day by the sun's position or the call to prayer. Precision would have been both unattainable and, for most purposes, unnecessary.\n\nThe mechanical clock changed this, though gradually. The earliest devices, installed in European monasteries and town squares from around the fourteenth century, were designed to regulate religious observance. But they soon acquired a civic role. Merchants discovered that a public bell striking the hours made it easier to coordinate markets, and employers realised that wages could be tied to hours rather than to the completion of tasks. In this sense, the clock did not merely record time; it turned time into a commodity that could be bought, sold and wasted.\n\nThe consequences became most visible with industrialisation. A factory demanded that hundreds of workers arrive together and remain at their machines for fixed periods, so lateness became a form of theft. Early factory owners fined latecomers, and some were accused of altering the clocks to extract extra labour. Schools soon adopted the same discipline, preparing children for the rhythm of employment that awaited them.\n\nThe spread of railways further tightened the grip. Each town had previously kept its own local time, set by the sun, which was tolerable when journeys were slow. Timetables made such differences impractical, and countries were obliged to adopt standard time zones. By the late nineteenth century, a traveller could rely on a single national clock.\n\nIt would be wrong to regard this transformation purely as oppression. Shared time made large-scale cooperation possible, from public transport to scientific experiment. Nevertheless, it replaced a flexible, task-based sense of time with an abstract, relentless one, and many of the anxieties of modern life, including the persistent feeling of never having enough hours, can be traced to that shift.",
  "gist": "Đồng hồ cơ khí biến thời gian thành hàng hóa, và công nghiệp hóa cùng đường sắt buộc xã hội tuân theo giờ giấc chuẩn, vừa có lợi vừa gây áp lực.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the passage mainly concerned with?",
    "opts": [
     "How clocks reshaped the way societies think about time",
     "The technical design of medieval clocks",
     "The decline of religious practice",
     "The difficulties of building railways"
    ],
    "a": 0,
    "ev": "the clock did not merely record time; it turned time into a commodity",
    "why": "Bài bàn về việc đồng hồ thay đổi quan niệm về thời gian."
   },
   {
    "kind": "detail",
    "q": "Why were the earliest mechanical clocks installed?",
    "opts": [
     "To regulate religious practice",
     "To help merchants set prices",
     "To punish late workers",
     "To help sailors navigate"
    ],
    "a": 0,
    "ev": "designed to regulate religious observance",
    "why": "Đồng hồ đầu tiên đặt để điều tiết sinh hoạt tôn giáo."
   },
   {
    "kind": "detail",
    "q": "Why did railways make local time a problem?",
    "opts": [
     "Timetables could not work if every town kept its own time",
     "Trains were too fast to be timed",
     "Stations had no clocks",
     "Passengers disliked sunlight"
    ],
    "a": 0,
    "ev": "Timetables made such differences impractical",
    "why": "Lịch tàu khiến sự khác biệt giờ địa phương không khả thi."
   },
   {
    "kind": "vocab",
    "q": "The word \"relentless\" in the final paragraph is closest in meaning to",
    "opts": [
     "never easing",
     "very accurate",
     "old-fashioned",
     "friendly"
    ],
    "a": 0,
    "ev": "an abstract, relentless one",
    "why": "Relentless = không ngừng, không nới lỏng."
   },
   {
    "kind": "tfng",
    "q": "The writer thinks that standardised time brought no benefits to society.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "It would be wrong to regard this transformation purely as oppression.",
    "why": "Tác giả nói không nên xem đó thuần túy là áp bức và nêu lợi ích hợp tác, nên sai."
   }
  ]
 },
 {
  "id": "rd-c1-d07",
  "lvl": "C1",
  "topic": "work",
  "genre": "report",
  "title": "Rethinking the Open-Plan Office",
  "text": "When open-plan offices spread in the late twentieth century, their advocates promised a transformation. Removing walls, they argued, would encourage spontaneous conversation, flatten hierarchies and spark collaboration. Employers were also drawn by a more prosaic benefit: an open floor accommodates more desks per square metre than a corridor of private rooms. Today, a considerable share of professionals work in such spaces, yet the evidence for their supposed advantages is surprisingly thin.\n\nOne much-cited study tracked two organisations before and after they dismantled their partitions. Contrary to expectations, face-to-face interaction fell by roughly two-thirds, while the volume of email and instant messaging rose. Employees, it seems, responded to the loss of privacy by withdrawing: they wore headphones, avoided eye contact and conducted important discussions in writing to prevent being overheard. The architecture intended to bring people together had, paradoxically, driven them apart.\n\nThe costs are not merely social. Open offices are associated with more frequent interruptions, and research on attention indicates that recovering from a single interruption can take many minutes. Cognitively demanding tasks, such as analysis or drafting, suffer most. Some employees also report being less satisfied with their environment and more prone to illness, as germs circulate more easily in shared air.\n\nIt would be unfair, however, to condemn open plans outright. Teams whose work consists largely of rapid, informal exchange, such as emergency dispatchers or trading desks, may genuinely benefit from sitting within earshot of one another. The difficulty arises when a single design is imposed on every function regardless of what the work requires.\n\nA more promising model is the so-called activity-based office, in which staff choose between quiet booths, meeting rooms and shared tables according to the task at hand. Early results are encouraging, though they depend heavily on whether organisations trust employees to choose and provide enough of each type of space. Without that, flexibility can degenerate into a daily competition for the few good seats.",
  "gist": "Văn phòng không vách ngăn không mang lại sự hợp tác như hứa hẹn; nhiều nghiên cứu cho thấy giao tiếp trực tiếp giảm và xao nhãng tăng, nên mô hình theo hoạt động có thể tốt hơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main idea of the passage?",
    "opts": [
     "Open-plan offices have not delivered the benefits claimed for them.",
     "Private offices are always more expensive.",
     "Email is better than conversation.",
     "Employees prefer working at home."
    ],
    "a": 0,
    "ev": "the evidence for their supposed advantages is surprisingly thin",
    "why": "Bằng chứng ủng hộ ưu điểm của văn phòng mở rất mỏng."
   },
   {
    "kind": "detail",
    "q": "What was the effect on face-to-face interaction in the study?",
    "opts": [
     "It dropped by about two-thirds",
     "It increased by two-thirds",
     "It stayed the same",
     "It was not recorded"
    ],
    "a": 0,
    "ev": "face-to-face interaction fell by roughly two-thirds",
    "why": "Giao tiếp trực tiếp giảm khoảng hai phần ba."
   },
   {
    "kind": "detail",
    "q": "Which kind of work suffers most from interruptions?",
    "opts": [
     "Work needing deep concentration",
     "Work done by dispatchers",
     "Work done in meeting rooms",
     "Work involving travel"
    ],
    "a": 0,
    "ev": "Cognitively demanding tasks, such as analysis or drafting, suffer most.",
    "why": "Công việc đòi hỏi nhận thức cao như phân tích, soạn thảo chịu ảnh hưởng nhất."
   },
   {
    "kind": "inference",
    "q": "What does the writer suggest about emergency dispatchers?",
    "opts": [
     "Sitting close together may genuinely help their work",
     "They dislike private rooms",
     "They are unaffected by noise",
     "They should wear headphones"
    ],
    "a": 0,
    "ev": "may genuinely benefit from sitting within earshot of one another",
    "why": "Công việc trao đổi nhanh, không chính thức có thể hưởng lợi từ ngồi gần."
   },
   {
    "kind": "tfng",
    "q": "Activity-based offices have been proven to work in every organisation.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Early results are encouraging, though they depend heavily on",
    "why": "Bài nói kết quả ban đầu khả quan nhưng phụ thuộc điều kiện, nên sai."
   }
  ]
 },
 {
  "id": "rd-c1-d08",
  "lvl": "C1",
  "topic": "medical",
  "genre": "article",
  "title": "The Puzzle of the Placebo",
  "text": "A placebo is, by definition, a treatment with no active ingredient: a sugar pill, a saline injection, a sham procedure. It follows that it should do nothing. Yet in clinical trials, patients who receive such inert treatments frequently improve, sometimes substantially, and the phenomenon has intrigued researchers for decades. Understanding it is not merely an academic exercise, since it affects how every new medicine is judged.\n\nPart of the apparent improvement has nothing to do with the placebo itself. Many conditions fluctuate naturally, and people tend to enrol in a trial when their symptoms are at their worst, so a recovery would probably have occurred anyway. Statisticians call this regression to the mean. Careful studies therefore compare placebo groups with patients who receive no treatment at all, in order to isolate the genuine effect.\n\nWhen this is done, a real but modest effect remains, and it is strongest for subjective experiences such as pain, nausea and fatigue. Brain imaging has shown that expecting relief can trigger the release of the body's own painkilling chemicals, suggesting that belief changes physiology rather than merely perception. By contrast, there is little evidence that placebos shrink tumours or cure infections. The effect also appears to be shaped by context: larger pills seem more powerful than small ones, and an injection more effective than a tablet. A confident, attentive doctor can heighten the response further.\n\nThis raises an ethical dilemma. If a pill containing nothing can ease suffering, might clinicians be justified in prescribing it? Most professional guidelines say no, because doing so would require deceiving the patient and would undermine trust. Interestingly, some small studies indicate that placebos may retain a measure of effectiveness even when patients are told openly what they are taking, although the findings remain preliminary and contested.\n\nWhat the placebo ultimately demonstrates is not that the mind can conquer disease, a claim often exaggerated in popular accounts, but that treatment is never purely chemical. The ritual of care, the expectation of benefit and the relationship between doctor and patient all contribute to how well a person feels.",
  "gist": "Hiệu ứng giả dược có thật nhưng khiêm tốn, mạnh nhất với triệu chứng chủ quan như đau; nó cho thấy kỳ vọng và mối quan hệ chăm sóc góp phần vào kết quả điều trị.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's main purpose?",
    "opts": [
     "To explain what the placebo effect is and how far it extends",
     "To prove that doctors deceive patients",
     "To advertise new medicines",
     "To argue that the mind can cure any disease"
    ],
    "a": 0,
    "ev": "treatment is never purely chemical",
    "why": "Bài phân tích giả dược và giới hạn của hiệu ứng này."
   },
   {
    "kind": "detail",
    "q": "According to the passage, why might patients' symptoms improve in a trial for reasons unrelated to the placebo?",
    "opts": [
     "Their symptoms often change naturally over time",
     "The pills contain hidden medicine",
     "Doctors choose healthier patients",
     "Trials are very short"
    ],
    "a": 0,
    "ev": "Many conditions fluctuate naturally",
    "why": "Nhiều bệnh tự dao động nên bệnh nhân có thể khỏi dù sao."
   },
   {
    "kind": "detail",
    "q": "For which kind of symptom is the placebo effect strongest?",
    "opts": [
     "Ones based on personal experience, such as pain",
     "Infections caused by bacteria",
     "Growths such as tumours",
     "Injuries to bones"
    ],
    "a": 0,
    "ev": "strongest for subjective experiences such as pain, nausea and fatigue",
    "why": "Hiệu ứng mạnh nhất với trải nghiệm chủ quan như đau, buồn nôn."
   },
   {
    "kind": "vocab",
    "q": "The word \"inert\" in paragraph 1 is closest in meaning to",
    "opts": [
     "having no active effect",
     "very expensive",
     "harmful",
     "newly invented"
    ],
    "a": 0,
    "ev": "such inert treatments",
    "why": "Inert = trơ, không có hoạt tính, như viên đường."
   },
   {
    "kind": "tfng",
    "q": "Younger patients respond to placebos more strongly than older patients do.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không nói gì về tuổi của bệnh nhân hay mức độ đáp ứng theo tuổi nên là Not given."
   }
  ]
 },
 {
  "id": "rd-c1-e01",
  "lvl": "C1",
  "topic": "society",
  "genre": "article",
  "title": "The Hidden Price of Convenience",
  "text": "Few would dispute that modern life has become easier. Groceries arrive at the door, directions are whispered by a phone, and a film can be summoned in seconds. Yet the cumulative effect of this frictionless existence deserves more scrutiny than it usually receives, not least because its costs are spread so thinly across time that they seldom provoke complaint. Convenience, after all, is rarely neutral: every task we hand to a service is a skill we cease to practise.\n\nConsider navigation. Studies of drivers who rely heavily on satellite guidance suggest that they form weaker mental maps of their surroundings than those who consult paper maps or simply memorise routes. The difference is not dramatic in any single journey, but it accrues, much as a muscle weakens through disuse. What is lost is not merely competence but also a certain attentiveness to place, the incidental noticing that makes a neighbourhood feel like one's own.\n\nDefenders of convenience counter, reasonably, that freed time and effort can be redirected towards more meaningful pursuits. This argument has force, yet it presumes that the saved hours are in fact reinvested rather than absorbed by further consumption. Surveys of household habits hint at the latter: the minutes recovered from cooking are more often spent scrolling than learning the violin.\n\nNone of this amounts to a case for abandoning labour-saving tools. A more defensible position is selective inconvenience: deliberately retaining friction in those activities that sustain judgement, memory or social bonds. A person might let an app plan the commute yet insist on cooking a meal from scratch each weekend. The aim is not nostalgia but stewardship, a conscious decision about which capacities one is prepared to outsource and which one is determined to keep.",
  "gist": "Tác giả cho rằng sự tiện lợi có cái giá ẩn và nên chủ động giữ lại một số việc tốn công để bảo vệ kỹ năng của mình.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's central argument?",
    "opts": [
     "People should decide which tasks to keep effortful, since convenience has hidden costs.",
     "People should give up all modern services and return to older methods.",
     "Convenience is valuable chiefly because it gives people time for meaningful pursuits.",
     "Navigation apps are too unreliable to be used for everyday journeys."
    ],
    "a": 0,
    "ev": "A more defensible position is selective inconvenience",
    "why": "Tác giả đề xuất 'selective inconvenience': giữ lại một số việc tốn công; ông không đòi bỏ hết công cụ."
   },
   {
    "kind": "detail",
    "q": "What do studies suggest about drivers who depend on satellite guidance?",
    "opts": [
     "They build less detailed internal pictures of an area.",
     "They choose slower routes than drivers with paper maps.",
     "They feel more attached to the places they drive through.",
     "They memorise routes more quickly than other drivers."
    ],
    "a": 0,
    "ev": "form weaker mental maps of their surroundings",
    "why": "Bài viết nói họ 'form weaker mental maps of their surroundings'."
   },
   {
    "kind": "detail",
    "q": "Why does the writer doubt the defenders' argument about saved time?",
    "opts": [
     "The time saved may not actually be used for worthwhile activities.",
     "Labour-saving services usually cost more than the time they save.",
     "Convenient services are too expensive for most households.",
     "Saved hours are mostly spent on housework and cooking."
    ],
    "a": 0,
    "ev": "it presumes that the saved hours are in fact reinvested rather than absorbed by further consumption",
    "why": "Lập luận kia 'presumes' thời gian được tái đầu tư, nhưng thực tế thường bị tiêu vào việc khác."
   },
   {
    "kind": "vocab",
    "q": "In the second paragraph, 'accrues' is closest in meaning to",
    "opts": [
     "builds up gradually",
     "vanishes quickly",
     "is noticed at once",
     "is put right"
    ],
    "a": 0,
    "ev": "but it accrues, much as a muscle",
    "why": "Sự khác biệt nhỏ mỗi chuyến nhưng 'accrues' như cơ yếu dần: tích tụ dần dần."
   },
   {
    "kind": "tfng",
    "q": "The writer recommends that people stop using labour-saving devices altogether.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "None of this amounts to a case for abandoning labour-saving tools.",
    "why": "Tác giả nói rõ đây không phải lý do để từ bỏ công cụ tiết kiệm sức lao động, nên câu là False."
   }
  ]
 },
 {
  "id": "rd-c1-e02",
  "lvl": "C1",
  "topic": "environment",
  "genre": "report",
  "title": "Street Tree Survey: Kestrel Bay",
  "text": "This report summarises the findings of a two-year survey of street trees in the fictional coastal town of Kestrel Bay, commissioned by the town council to inform its planting strategy. Volunteers and council officers assessed 4,200 trees across 31 neighbourhoods, recording species, estimated age, health and the condition of the surrounding pavement.\n\nThe headline finding is uneven distribution. Canopy cover averages 18 per cent townwide, but ranges from 31 per cent in the older northern districts to just 7 per cent in the dockside estates, where housing is densest and incomes lowest. Temperature readings taken on three summer afternoons showed that the least shaded streets were, on average, four degrees warmer than the best shaded ones.\n\nThe survey also revealed a worrying lack of diversity. Almost half of all trees belong to just two species, which leaves the town vulnerable should a single disease take hold. Moreover, nearly a third of the trees are over sixty years old, and few young specimens are growing to replace them. Where saplings had been planted, roughly one in five had died within three years, most often because of inadequate watering in the first summer.\n\nThe authors recommend three measures. First, new planting should be directed to the neighbourhoods with the lowest cover rather than spread evenly. Second, no single species should exceed one tenth of future plantings. Third, the council should fund a watering scheme for newly planted trees, which would cost little relative to the cost of replacing failed saplings. The report does not address whether residents would accept the loss of parking spaces that wider planting could entail, a question the authors suggest merits separate consultation. Nevertheless, they stress that the evidence gathered here gives the council a firm basis on which to act without further delay.",
  "gist": "Báo cáo khảo sát cây xanh đường phố ở một thị trấn hư cấu, chỉ ra sự phân bố không đều và đề xuất ưu tiên trồng cây.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the report?",
    "opts": [
     "To report survey findings and advise on future planting",
     "To argue that the council should remove old trees",
     "To compare Kestrel Bay with other coastal towns",
     "To ask volunteers to help water young trees"
    ],
    "a": 0,
    "ev": "The authors recommend three measures.",
    "why": "Báo cáo tóm tắt kết quả khảo sát rồi đưa ra ba đề xuất về trồng cây."
   },
   {
    "kind": "detail",
    "q": "Which part of town has the least tree cover?",
    "opts": [
     "The older northern districts",
     "The dockside estates",
     "Neighbourhoods with the highest incomes",
     "Streets with the worst pavements"
    ],
    "a": 1,
    "ev": "just 7 per cent in the dockside estates",
    "why": "Khu 'dockside estates' chỉ có 7% độ phủ tán cây, thấp nhất."
   },
   {
    "kind": "detail",
    "q": "What was the most common reason that newly planted trees failed?",
    "opts": [
     "Too little water soon after planting",
     "Disease spreading from older trees",
     "Damage to the surrounding pavement",
     "Shade from taller buildings"
    ],
    "a": 0,
    "ev": "inadequate watering in the first summer",
    "why": "Nguyên nhân thường gặp nhất là thiếu nước ('inadequate watering') trong mùa hè đầu."
   },
   {
    "kind": "vocab",
    "q": "In the last sentence, 'merits' is closest in meaning to",
    "opts": [
     "deserves",
     "rejects",
     "avoids",
     "completes"
    ],
    "a": 0,
    "ev": "a question the authors suggest merits separate consultation",
    "why": "Câu hỏi 'merits' tham vấn riêng nghĩa là xứng đáng được tham vấn riêng."
   },
   {
    "kind": "tfng",
    "q": "Residents have agreed that some parking spaces can be removed to make room for trees.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Báo cáo không nói cư dân đã đồng ý hay chưa; nó chỉ nói chưa xét vấn đề này, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-c1-e03",
  "lvl": "C1",
  "topic": "work",
  "genre": "article",
  "title": "Reading the Four-Day Week Carefully",
  "text": "Reports from organisations trialling a four-day working week have been overwhelmingly positive: staff are less stressed, absence falls, and output holds steady. It is tempting to conclude that the shorter week is a free gain. A closer reading, however, suggests the evidence is less conclusive than the headlines imply, and that enthusiasm should be tempered by some methodological caution.\n\nThe first difficulty is selection. Employers that volunteer for such trials tend to be small, flexible and already inclined to believe in the idea. A software studio with autonomous teams can compress its schedule with relative ease; a hospital ward or a manufacturing line, where tasks cannot be postponed, faces constraints that a trial in an office will never reveal. Findings from the former cannot simply be transferred to the latter.\n\nA second difficulty concerns measurement. Productivity in knowledge work is notoriously hard to quantify, and many trials rely on managers' own assessments or on self-reported wellbeing. Participants who know they are part of an experiment, and who stand to lose a cherished benefit if results disappoint, have every incentive to work harder and report favourably. Such enthusiasm may fade once the novelty wears off. Independent audits of output, which would settle the matter, remain rare.\n\nNone of this means the shorter week is a mirage. Several firms have retained it for years, which implies that at least some benefits are durable. What the evidence supports is a narrower claim than its advocates often make: that certain kinds of organisation can reduce hours without losing output, given careful redesign of meetings and workflows. Whether the arrangement would suit a whole economy remains, for now, an open question that no trial of volunteers can settle.",
  "gist": "Tác giả phân tích rằng bằng chứng về tuần làm việc bốn ngày hứa hẹn nhưng kém chắc chắn hơn những gì tiêu đề báo chí gợi ý.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's overall position on the four-day week?",
    "opts": [
     "The results are encouraging but less conclusive than often claimed.",
     "The trials have proved that it suits every economy.",
     "The trials are worthless because all employers exaggerate.",
     "It should be rejected because staff become less productive."
    ],
    "a": 0,
    "ev": "the evidence is less conclusive than the headlines imply",
    "why": "Tác giả cho rằng bằng chứng 'less conclusive than the headlines imply', nhưng không bác bỏ hoàn toàn."
   },
   {
    "kind": "detail",
    "q": "Why might results from an office trial not apply to a hospital ward?",
    "opts": [
     "Work there cannot easily be delayed or rescheduled.",
     "Hospital staff dislike working shorter weeks.",
     "Hospitals have too many managers.",
     "Hospitals measure productivity more precisely."
    ],
    "a": 0,
    "ev": "where tasks cannot be postponed",
    "why": "Bệnh viện có công việc 'cannot be postponed' nên khó nén lịch."
   },
   {
    "kind": "detail",
    "q": "What weakness does the writer find in how trials judge productivity?",
    "opts": [
     "They depend heavily on subjective reports.",
     "They use figures from only one industry.",
     "They ignore the number of days staff are absent.",
     "They compare firms with their competitors."
    ],
    "a": 0,
    "ev": "many trials rely on managers' own assessments or on self-reported wellbeing",
    "why": "Nhiều thử nghiệm dựa vào đánh giá của quản lý và tự báo cáo, tức mang tính chủ quan."
   },
   {
    "kind": "inference",
    "q": "What does the writer suggest by noting that several firms kept the shorter week for years?",
    "opts": [
     "Some of the benefits appear to be lasting.",
     "Every firm that tried it made more profit.",
     "Enthusiasm for the idea never fades.",
     "Further trials are no longer needed."
    ],
    "a": 0,
    "ev": "which implies that at least some benefits are durable",
    "why": "Tác giả nói việc giữ nhiều năm 'implies that at least some benefits are durable'."
   },
   {
    "kind": "tfng",
    "q": "The writer believes the shorter week is an illusion.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "None of this means the shorter week is a mirage.",
    "why": "Tác giả nói rõ tuần bốn ngày không phải là ảo ảnh ('mirage'), nên câu là False."
   }
  ]
 },
 {
  "id": "rd-c1-e04",
  "lvl": "C1",
  "topic": "society",
  "genre": "article",
  "title": "Why Libraries Still Matter",
  "text": "It is a common assumption that public libraries are casualties of the internet: if every text is a few taps away, why maintain buildings full of books? The assumption mistakes what libraries are for. Their core function was never simply to store information but to offer access to it on equal terms, and in that respect the digital age has made them more necessary, not less.\n\nConsider who in fact lacks easy access. Households without reliable broadband, older people unsure of online forms, and students who share a single device with siblings all depend on libraries for connection and guidance. For them, a librarian who can explain how to apply for a benefit or evaluate a dubious website provides something no search engine supplies: patient, personal help.\n\nLibraries also perform a quieter social role. They are among the few remaining public spaces where one may stay for hours without being expected to buy anything. Researchers who study community life often describe such places as social infrastructure, because they foster casual encounters between people of different ages and backgrounds who would otherwise rarely meet. When a branch closes, the savings appear on a budget sheet immediately, whereas the erosion of those encounters is slow and goes unrecorded.\n\nCritics are right that libraries must adapt, and many already have, lending tools, hosting workshops and offering study rooms. But adaptation is not a reason for withdrawal of funds. A sensible council would measure a library's value not by the number of books borrowed alone but by the range of needs it quietly meets. By that standard, even a modestly busy branch often proves to be remarkably good value for the public money it receives.",
  "gist": "Tác giả lập luận thư viện công cộng vẫn cần thiết trong thời đại số và xứng đáng được tài trợ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main point of the article?",
    "opts": [
     "Libraries remain valuable in the digital age and deserve continued funding.",
     "Libraries should stop lending books and become workshop spaces.",
     "The internet has made information equally available to everyone.",
     "Councils spend too much money on social infrastructure."
    ],
    "a": 0,
    "ev": "in that respect the digital age has made them more necessary, not less",
    "why": "Ý chính: thời đại số khiến thư viện 'more necessary, not less'."
   },
   {
    "kind": "detail",
    "q": "Who is described as having to share a device at home?",
    "opts": [
     "Students with brothers or sisters",
     "Older people with online forms",
     "Researchers of community life",
     "Council officers"
    ],
    "a": 0,
    "ev": "students who share a single device with siblings",
    "why": "Bài nêu 'students who share a single device with siblings'."
   },
   {
    "kind": "detail",
    "q": "According to the writer, why is the harm of closing a branch easy to overlook?",
    "opts": [
     "The damage to community contact is gradual and not measured.",
     "The money saved is too small to notice.",
     "Few people ever visit their local branch.",
     "Councils refuse to publish the figures."
    ],
    "a": 0,
    "ev": "the erosion of those encounters is slow and goes unrecorded",
    "why": "Tiết kiệm thấy ngay trên bảng ngân sách, còn tổn hại xã hội thì chậm và 'goes unrecorded'."
   },
   {
    "kind": "vocab",
    "q": "In the third paragraph, 'erosion' is closest in meaning to",
    "opts": [
     "gradual loss",
     "sudden growth",
     "careful study",
     "fair division"
    ],
    "a": 0,
    "ev": "the erosion of those encounters is slow",
    "why": "'Erosion' đi với 'slow' nghĩa là sự mất dần."
   },
   {
    "kind": "tfng",
    "q": "Libraries in the writer's region have recently extended their opening hours.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không đề cập giờ mở cửa, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b1-e05",
  "lvl": "B1",
  "topic": "medical",
  "genre": "leaflet",
  "title": "Sample Leaflet: Looking After Your Back",
  "text": "Sample leaflet: Looking after your back\n\nMany people have back pain at some time in their lives. For most people it is not serious and gets better within a few weeks. This sample leaflet gives some simple advice.\n\nKeep moving. Resting in bed for a long time usually makes back pain worse. Try to continue with gentle activities such as walking, and go back to your normal routine as soon as you can.\n\nLift carefully. Bend your knees, keep the object close to your body and avoid twisting. If something is too heavy, ask someone to help you.\n\nSit well. If you work at a desk, take a short break every 30 minutes to stand up and stretch. Your feet should rest flat on the floor.\n\nWhen to see a doctor. Contact your doctor if the pain lasts longer than six weeks, if it wakes you at night, or if you feel numbness in your legs. Seek help at once if you cannot control your bladder or bowels.\n\nThis leaflet is general information only and does not replace advice from your own doctor or nurse.",
  "gist": "Tờ rơi mẫu đưa lời khuyên chung về giữ lưng khỏe và khi nào cần gặp bác sĩ.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the purpose of this leaflet?",
    "opts": [
     "To give general advice about back pain",
     "To advertise a new clinic",
     "To explain how to book an appointment",
     "To describe a back operation"
    ],
    "a": 0,
    "ev": "This sample leaflet gives some simple advice.",
    "why": "Tờ rơi đưa ra lời khuyên đơn giản về đau lưng."
   },
   {
    "kind": "detail",
    "q": "What does the leaflet say about staying in bed for a long time?",
    "opts": [
     "It often makes the pain worse.",
     "It is the quickest way to recover.",
     "It is only useful at night.",
     "It is needed for six weeks."
    ],
    "a": 0,
    "ev": "Resting in bed for a long time usually makes back pain worse.",
    "why": "Nằm nghỉ lâu thường làm đau lưng nặng hơn."
   },
   {
    "kind": "detail",
    "q": "How often should a person who works at a desk stand up and stretch?",
    "opts": [
     "Every 30 minutes",
     "Every hour",
     "Every two hours",
     "Every 10 minutes"
    ],
    "a": 0,
    "ev": "take a short break every 30 minutes to stand up and stretch",
    "why": "Tờ rơi khuyên nghỉ ngắn mỗi 30 phút."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'numbness' means",
    "opts": [
     "loss of feeling",
     "strong heat",
     "a heavy weight",
     "swelling"
    ],
    "a": 0,
    "ev": "if you feel numbness in your legs",
    "why": "'Numbness' là tình trạng mất cảm giác ở chân."
   },
   {
    "kind": "tfng",
    "q": "The leaflet recommends special exercises to strengthen the back.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Tờ rơi chỉ khuyên đi bộ nhẹ, không nhắc bài tập tăng cường lưng, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b1-e06",
  "lvl": "B1",
  "topic": "medical",
  "genre": "leaflet",
  "title": "Sample Discharge Sheet: Sprained Ankle",
  "text": "Sample discharge sheet: Sprained ankle\n\nPatient: Mr Park. Seen at the Green Valley Clinic emergency desk.\n\nYou have a sprained ankle. This means the soft bands that hold the joint together have been stretched. Most sprains heal in two to six weeks.\n\nAt home\nRest your ankle for the first two days and avoid long walks. Put a cold pack, wrapped in a cloth, on the ankle for about 15 minutes several times a day. Never put ice directly on the skin. Wear the bandage during the day and take it off at night. When you sit, raise your foot on a cushion.\n\nGetting better\nAfter two days, start moving the ankle gently. Slowly walk a little further each day. Sport should wait until you can walk without pain.\n\nCome back if\n- the pain is getting worse instead of better\n- your toes turn blue, pale or very cold\n- you have a fever\n- you cannot put any weight on the foot after one week\n\nQuestions: please call the clinic reception on weekdays. This is a sample sheet and all details are fictional.",
  "gist": "Phiếu hướng dẫn xuất viện mẫu cho người bị bong gân mắt cá: chăm sóc tại nhà, hồi phục dần và khi nào cần quay lại.",
  "qs": [
   {
    "kind": "main",
    "q": "What is this sheet mainly for?",
    "opts": [
     "Telling a patient how to look after an injury at home",
     "Explaining how the clinic is organised",
     "Asking the patient to pay a bill",
     "Describing how sports injuries happen"
    ],
    "a": 0,
    "ev": "Rest your ankle for the first two days and avoid long walks.",
    "why": "Phiếu hướng dẫn cách tự chăm sóc mắt cá bị bong gân tại nhà."
   },
   {
    "kind": "detail",
    "q": "How should the cold pack be used?",
    "opts": [
     "Wrapped in a cloth, for about 15 minutes, several times a day",
     "Straight on the skin for about 15 minutes",
     "Wrapped in a cloth, all through the night",
     "Wrapped in a cloth, only once after two days"
    ],
    "a": 0,
    "ev": "Put a cold pack, wrapped in a cloth, on the ankle for about 15 minutes several times a day.",
    "why": "Gói túi lạnh bằng vải, chườm khoảng 15 phút, vài lần mỗi ngày."
   },
   {
    "kind": "detail",
    "q": "When may the patient return to sport?",
    "opts": [
     "When walking is possible without pain",
     "After exactly two days",
     "As soon as the bandage is off",
     "After the clinic telephones"
    ],
    "a": 0,
    "ev": "Sport should wait until you can walk without pain.",
    "why": "Chơi thể thao nên đợi đến khi đi lại không đau."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'raise' means",
    "opts": [
     "lift up",
     "wash",
     "bend",
     "turn"
    ],
    "a": 0,
    "ev": "raise your foot on a cushion",
    "why": "'Raise your foot' là kê chân lên cao."
   },
   {
    "kind": "tfng",
    "q": "The patient should wear the bandage during the night as well as during the day.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Wear the bandage during the day and take it off at night.",
    "why": "Phiếu bảo tháo băng vào ban đêm, nên câu là False."
   }
  ]
 },
 {
  "id": "rd-b1-e07",
  "lvl": "B1",
  "topic": "medical",
  "genre": "letter",
  "title": "A Message from Nurse Lan",
  "text": "Hello Mrs Tran,\n\nThis is Nurse Lan from Green Valley Clinic. I am writing about your blood pressure check last Tuesday. Your reading was a little higher than we would like, but there is no need to worry. One reading does not tell us very much, because blood pressure can go up when people feel nervous or have just climbed the stairs.\n\nDr Silva would like to check it again in two weeks. Please book an appointment at reception or by phone. Before you come, try to avoid coffee and heavy exercise for an hour, and sit quietly in the waiting room for a few minutes.\n\nIn the meantime, it may help to eat less salt, go for a short walk every day and try to sleep well. If you ever have a bad headache, chest pain or feel dizzy and unwell, do not wait for your appointment. Call the emergency number straight away.\n\nBest wishes,\nNurse Lan",
  "gist": "Y tá Lan nhắn bà Tran về chỉ số huyết áp hơi cao, hẹn đo lại và dặn dò lối sống cùng dấu hiệu cần gọi cấp cứu.",
  "qs": [
   {
    "kind": "main",
    "q": "Why is Nurse Lan writing to Mrs Tran?",
    "opts": [
     "To arrange another blood pressure check and give advice",
     "To report a serious illness",
     "To change the clinic's opening hours",
     "To say the doctor is away"
    ],
    "a": 0,
    "ev": "Dr Silva would like to check it again in two weeks.",
    "why": "Mục đích: hẹn đo lại huyết áp sau hai tuần và đưa lời khuyên."
   },
   {
    "kind": "detail",
    "q": "According to the message, why does one reading tell us little?",
    "opts": [
     "Blood pressure can rise for short-term reasons.",
     "The machine is often wrong.",
     "The readings depend on the season.",
     "Doctors read the results differently."
    ],
    "a": 0,
    "ev": "blood pressure can go up when people feel nervous or have just climbed the stairs",
    "why": "Huyết áp có thể tăng tạm thời khi lo lắng hoặc vừa leo cầu thang."
   },
   {
    "kind": "detail",
    "q": "What should Mrs Tran do before the next check?",
    "opts": [
     "Avoid coffee and hard exercise for an hour",
     "Stop eating salt a week earlier",
     "Take a fast walk just before the visit",
     "Eat nothing the night before"
    ],
    "a": 0,
    "ev": "avoid coffee and heavy exercise for an hour",
    "why": "Nên tránh cà phê và tập nặng trong một giờ trước khi đến."
   },
   {
    "kind": "inference",
    "q": "How does Nurse Lan seem to feel about the result?",
    "opts": [
     "Not seriously worried",
     "Very alarmed",
     "Sure that Mrs Tran is ill",
     "Angry with Mrs Tran"
    ],
    "a": 0,
    "ev": "there is no need to worry",
    "why": "Cô nói 'there is no need to worry' nên không quá lo."
   },
   {
    "kind": "tfng",
    "q": "Mrs Tran has had high blood pressure readings before.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Thư không nói bà từng có chỉ số cao trước đó, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-b1-e08",
  "lvl": "B1",
  "topic": "medical",
  "genre": "article",
  "title": "Hand Washing: A Simple Habit",
  "text": "Hand washing: a simple habit that protects everyone\n\nWashing your hands properly is one of the easiest ways to stop germs spreading. For health-care students it is the first skill to learn, and it matters just as much at home.\n\nWhen should you wash? Always wash your hands before eating or preparing food, after using the toilet, after coughing, sneezing or blowing your nose, and after touching rubbish. In a clinic, staff also wash before and after every patient.\n\nHow should you wash? Wet your hands with clean running water and apply soap. Rub your palms, the backs of your hands, between your fingers and under your nails for at least 20 seconds. Many people hum a short song to measure the time. Rinse well and dry your hands with a clean towel or paper towel, because wet hands spread germs more easily.\n\nWhat if there is no water? An alcohol-based hand gel is a good alternative, but only when your hands are not visibly dirty. Gel does not replace soap and water when hands look dirty.\n\nGood hand hygiene is cheap, quick and effective. Teach it to the children in your family early.",
  "gist": "Bài giáo dục sức khỏe giải thích khi nào và cách rửa tay đúng để ngăn vi khuẩn lây lan.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the text mostly about?",
    "opts": [
     "When and how to wash hands properly",
     "Which soap is best for clinics",
     "How germs are seen under a microscope",
     "Why children dislike washing"
    ],
    "a": 0,
    "ev": "Washing your hands properly is one of the easiest ways to stop germs spreading.",
    "why": "Bài giải thích khi nào và cách rửa tay đúng."
   },
   {
    "kind": "detail",
    "q": "How long should you rub your hands when washing?",
    "opts": [
     "At least 20 seconds",
     "About 5 seconds",
     "Exactly two minutes",
     "Until the water is warm"
    ],
    "a": 0,
    "ev": "for at least 20 seconds",
    "why": "Cần chà tay ít nhất 20 giây."
   },
   {
    "kind": "detail",
    "q": "Why does the text advise drying hands carefully?",
    "opts": [
     "Wet hands pass on germs more easily.",
     "Towels kill germs on the skin.",
     "Dry hands feel softer.",
     "Soap stays on wet skin."
    ],
    "a": 0,
    "ev": "because wet hands spread germs more easily",
    "why": "Tay ướt dễ lây vi khuẩn hơn."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'alternative' means",
    "opts": [
     "another option",
     "the same product",
     "a cheaper copy",
     "a final step"
    ],
    "a": 0,
    "ev": "An alcohol-based hand gel is a good alternative",
    "why": "'Alternative' là lựa chọn thay thế khi không có nước."
   },
   {
    "kind": "tfng",
    "q": "Hand gel can replace soap and water even when hands are very dirty.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "Gel does not replace soap and water when hands look dirty.",
    "why": "Bài nói gel không thay được xà phòng và nước khi tay bẩn, nên là False."
   }
  ]
 },
 {
  "id": "rd-b2-f01",
  "lvl": "B2",
  "topic": "medical",
  "genre": "abstract",
  "title": "Walking Groups and Blood Pressure: A Summary",
  "text": "This is a plain-language summary of a fictional pilot study carried out by a small research team at Green Valley Clinic. The team wanted to find out whether a structured walking programme could help adults with mildly raised blood pressure.\n\nSixty volunteers aged between 45 and 65 took part. They were randomly divided into two equal groups. The first group joined a walking club that met three times a week for twelve weeks, led by a trained health coach. The second group received only a printed leaflet with general lifestyle advice. Nobody was asked to change their medication, and all participants continued to see their own doctors as usual.\n\nBlood pressure was measured at the start and at the end of the programme by a nurse who did not know which group each person belonged to. At the end, the walking group showed a modest average fall in blood pressure, while the leaflet group showed almost no change. Participants in the walking club also reported feeling more energetic and said they enjoyed the social side of the sessions.\n\nThe authors stress that the results should be treated with caution. The sample was small, the study lasted only three months, and volunteers who join exercise studies may already be more motivated than the general population. In addition, the research team did not record what participants ate, so diet may have influenced the outcome.\n\nThe authors conclude that group walking is a low-cost and promising approach worth testing in a larger trial. They do not claim that walking can replace medical treatment, and they recommend that anyone with high blood pressure should follow the advice of their own health professional.",
  "gist": "Tóm tắt một nghiên cứu thí điểm giả định cho thấy đi bộ theo nhóm làm huyết áp giảm nhẹ, nhưng tác giả nhấn mạnh cần thận trọng và cần thử nghiệm lớn hơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the text?",
    "opts": [
     "To explain a small study of group walking and blood pressure and its limits",
     "To advise readers to stop taking their medication",
     "To compare several clinics' exercise programmes",
     "To describe how nurses measure blood pressure"
    ],
    "a": 0,
    "ev": "whether a structured walking programme could help adults with mildly raised blood pressure",
    "why": "Mục đích là tóm tắt nghiên cứu về chương trình đi bộ và huyết áp, kèm các hạn chế."
   },
   {
    "kind": "detail",
    "q": "How was the second group of participants treated?",
    "opts": [
     "They walked alone every day",
     "They were given only written general advice",
     "They were asked to change their medication",
     "They joined a different club twice a week"
    ],
    "a": 1,
    "ev": "received only a printed leaflet with general lifestyle advice",
    "why": "Nhóm thứ hai chỉ nhận tờ rơi in lời khuyên chung."
   },
   {
    "kind": "detail",
    "q": "Why was the nurse who took the measurements unaware of the groups?",
    "opts": [
     "The nurse was new at the clinic",
     "The groups met at different times",
     "The study wanted to avoid bias in the readings",
     "Participants refused to give their names"
    ],
    "a": 2,
    "ev": "a nurse who did not know which group each person belonged to",
    "why": "Y tá không biết ai thuộc nhóm nào để tránh thiên lệch khi đo."
   },
   {
    "kind": "vocab",
    "q": "In the text, the word 'modest' in 'a modest average fall' is closest in meaning to",
    "opts": [
     "sudden",
     "small",
     "dangerous",
     "expected"
    ],
    "a": 1,
    "ev": "a modest average fall in blood pressure",
    "why": "'Modest' ở đây là nhỏ, vừa phải, phù hợp với 'treat with caution'."
   },
   {
    "kind": "tfng",
    "q": "The researchers recorded the diet of every participant.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "the research team did not record what participants ate",
    "why": "Bài nói rõ nhóm nghiên cứu không ghi lại chế độ ăn nên câu này sai."
   }
  ]
 },
 {
  "id": "rd-b2-f02",
  "lvl": "B2",
  "topic": "medical",
  "genre": "article",
  "title": "Why Antibiotics Are Losing Their Edge",
  "text": "Antibiotics transformed medicine in the twentieth century, turning once-deadly infections into routine problems. Today, however, doctors worry that these medicines are gradually becoming less effective. The cause is antibiotic resistance, a process in which bacteria change in ways that allow them to survive the drugs designed to kill them.\n\nResistance is a natural part of evolution. When a group of bacteria is exposed to an antibiotic, most of them die, but a few may carry a chance mutation that protects them. These survivors multiply, and soon the resistant strain dominates. The more often antibiotics are used, the more opportunities bacteria have to adapt.\n\nThis is why unnecessary prescribing is such a concern. Most coughs and sore throats are caused by viruses, which antibiotics cannot treat at all. Taking them in these cases offers no benefit to the patient and encourages resistance. Another common problem is stopping a prescribed course too early because one feels better. Patients should always follow the instructions given by their pharmacist or doctor rather than deciding for themselves.\n\nResistance is not only a matter of human medicine. Antibiotics are also used in farming, and resistant bacteria can pass between animals, people and the environment. For this reason, many health authorities promote a joint approach that involves doctors, vets and farmers.\n\nWhat can ordinary people do? Simple habits make a real difference: washing hands regularly, keeping vaccinations up to date, and preparing food hygienically all reduce the number of infections that need treatment in the first place. Fewer infections mean fewer prescriptions, and fewer prescriptions slow the spread of resistance.\n\nResearchers are searching for new antibiotics, but developing them takes many years and is expensive. Experts therefore agree that protecting the medicines we already have is just as important as discovering new ones.",
  "gist": "Bài báo cho công chúng giải thích vì sao vi khuẩn kháng thuốc xuất hiện và mỗi người có thể làm gì để làm chậm quá trình này.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main message of the article?",
    "opts": [
     "New antibiotics will soon solve the problem completely",
     "Viruses are more dangerous to people than bacteria are",
     "Farmers are the only group responsible for resistance",
     "Overusing antibiotics helps resistance spread, so careful use matters"
    ],
    "a": 3,
    "ev": "The more often antibiotics are used, the more opportunities bacteria have to adapt.",
    "why": "Ý chính: dùng kháng sinh càng nhiều, vi khuẩn càng có cơ hội thích nghi nên phải dùng cẩn thận."
   },
   {
    "kind": "detail",
    "q": "According to the text, how does a resistant strain become common?",
    "opts": [
     "Survivors with a protective mutation reproduce",
     "Antibiotics change the bacteria on purpose",
     "Patients pass viruses to bacteria",
     "Vaccinations weaken the medicine"
    ],
    "a": 0,
    "ev": "These survivors multiply, and soon the resistant strain dominates.",
    "why": "Những vi khuẩn sống sót nhân lên và dòng kháng thuốc chiếm ưu thế."
   },
   {
    "kind": "detail",
    "q": "Why is it a mistake to take antibiotics for most sore throats?",
    "opts": [
     "The medicines are too expensive for most patients",
     "They are only suitable for treating young children",
     "They usually make the throat more infected",
     "Most are viral, so the medicines cannot help"
    ],
    "a": 3,
    "ev": "Most coughs and sore throats are caused by viruses, which antibiotics cannot treat at all.",
    "why": "Phần lớn viêm họng do virus nên kháng sinh vô ích."
   },
   {
    "kind": "inference",
    "q": "What can be inferred about the writer's view of new drug development?",
    "opts": [
     "It is easy but unnecessary",
     "It is slow and costly, so it cannot be the only answer",
     "It has already replaced the old antibiotics",
     "It is mainly the job of farmers"
    ],
    "a": 1,
    "ev": "developing them takes many years and is expensive",
    "why": "Phát triển thuốc mới lâu và tốn kém nên không thể là giải pháp duy nhất."
   },
   {
    "kind": "tfng",
    "q": "The article says that vaccinations can help reduce the need for antibiotic prescriptions.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 0,
    "ev": "keeping vaccinations up to date",
    "why": "Tiêm chủng đầy đủ được liệt kê trong các thói quen giảm nhiễm trùng, từ đó giảm kê đơn."
   }
  ]
 },
 {
  "id": "rd-b2-f03",
  "lvl": "B2",
  "topic": "medical",
  "genre": "notice",
  "title": "Notice to Visitors: Infection Control on Ward Floors",
  "text": "Riverside General Hospital\n\nUpdated Visiting Policy for Medical and Surgical Wards\n\nTo protect patients, many of whom have weakened immune systems, the hospital has revised its visiting arrangements. These changes take effect on Monday and will be reviewed after three months.\n\nVisiting hours\nVisitors are welcome between 2 p.m. and 7 p.m. each day. Two people may visit a patient at the same time. Children under twelve may visit only with the agreement of the nurse in charge. Patients who are close to the end of life may receive visitors outside these hours; please speak to the ward manager.\n\nHand hygiene\nEveryone must clean their hands with the gel provided when entering and leaving a ward. Staff will gladly show you the correct technique. Please do not be offended if a member of staff reminds you; the same rule applies to doctors and nurses.\n\nIf you are unwell\nPlease do not visit if you have had a fever, vomiting or diarrhoea in the past two days, or if you have cold symptoms. Contact the patient by phone or video call instead. A visit that seems kind may put another person at serious risk.\n\nFood and flowers\nBecause of the risk of infection, fresh flowers are no longer permitted on wards. Visitors may bring packaged snacks, but patients on special diets should check with the nurse first.\n\nRespecting other patients\nPlease keep conversations quiet and use the family room for longer discussions. Photographs of other patients are not allowed under any circumstances.\n\nThank you for helping us keep everyone safe. Questions about this policy can be directed to the Patient Services Office on the ground floor.",
  "gist": "Thông báo của bệnh viện về quy định thăm bệnh mới nhằm kiểm soát nhiễm khuẩn: giờ thăm, vệ sinh tay, khi bản thân ốm, đồ mang vào.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the purpose of the notice?",
    "opts": [
     "To announce new doctors on the wards",
     "To explain updated rules for hospital visitors",
     "To advertise a new family room",
     "To report an outbreak of infection"
    ],
    "a": 1,
    "ev": "the hospital has revised its visiting arrangements",
    "why": "Thông báo giải thích quy định thăm bệnh được sửa đổi."
   },
   {
    "kind": "detail",
    "q": "Who needs permission from a nurse before visiting?",
    "opts": [
     "Anyone arriving after 7 p.m.",
     "Visitors carrying snacks",
     "Young children",
     "Relatives of surgical patients"
    ],
    "a": 2,
    "ev": "Children under twelve may visit only with the agreement of the nurse in charge.",
    "why": "Trẻ dưới 12 tuổi cần sự đồng ý của y tá trưởng."
   },
   {
    "kind": "detail",
    "q": "What should a person do if they have had vomiting in the past two days?",
    "opts": [
     "Clean their hands twice",
     "Wear a mask in the family room",
     "Ask the ward manager for a special pass",
     "Stay away and contact the patient remotely"
    ],
    "a": 3,
    "ev": "Contact the patient by phone or video call instead.",
    "why": "Người từng nôn trong 2 ngày qua nên gọi điện hoặc video thay vì đến thăm."
   },
   {
    "kind": "vocab",
    "q": "In the notice, 'permitted' in 'fresh flowers are no longer permitted' is closest in meaning to",
    "opts": [
     "allowed",
     "required",
     "sold",
     "recommended"
    ],
    "a": 0,
    "ev": "fresh flowers are no longer permitted on wards",
    "why": "'Permitted' nghĩa là được cho phép; 'no longer permitted' là không còn được phép."
   },
   {
    "kind": "tfng",
    "q": "Staff members are exempt from the hand-hygiene rule.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "the same rule applies to doctors and nurses",
    "why": "Thông báo nói cùng quy định áp dụng cho cả bác sĩ và điều dưỡng, nên nhân viên không được miễn."
   }
  ]
 },
 {
  "id": "rd-b2-f04",
  "lvl": "B2",
  "topic": "medical",
  "genre": "dialogue",
  "title": "Using Teach-Back After a Diagnosis",
  "text": "Tutor Dr Hoang is discussing a recorded role-play with a student nurse, Lan.\n\nDr Hoang: In the video you explained to Mr Park how to use his new inhaler. How do you think it went?\n\nLan: I felt I covered everything. I described each step slowly and showed him the device. At the end I asked, \"Do you understand?\" and he nodded.\n\nDr Hoang: That is a very common habit, but a nod does not tell you much. Many patients say yes because they feel embarrassed or do not want to waste the nurse's time. Have you heard of teach-back?\n\nLan: Only the name. Is it where the patient repeats the information?\n\nDr Hoang: Nearly. The key is that you are checking how well you explained, not testing the patient. You might say, \"I want to be sure I was clear, so could you show me how you would use it at home?\" If he makes a mistake, the responsibility is yours, and you simply explain that step again in a different way.\n\nLan: That sounds much kinder than asking whether he understands. But would it take too long?\n\nDr Hoang: Studies of this method, including some conducted in our own hospital, suggest it adds only a minute or two. Misunderstandings, on the other hand, can lead to repeat visits and avoidable complications.\n\nLan: I also noticed that I used the word \"chronic\" without explaining it.\n\nDr Hoang: Exactly. Plain language matters. Try replacing \"chronic\" with \"long-lasting\", and avoid giving too many instructions at once. Choose the two or three points that matter most.\n\nLan: Could I try the whole conversation again next week?\n\nDr Hoang: Yes. Bring a short list of the key messages and we will record it once more.",
  "gist": "Cuộc trò chuyện giữa giảng viên và sinh viên điều dưỡng về kỹ thuật teach-back: kiểm tra xem mình giải thích có rõ không thay vì hỏi bệnh nhân có hiểu không.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main topic of the conversation?",
    "opts": [
     "How to make patients attend more appointments",
     "How to choose the right inhaler",
     "How to check that a patient has really understood",
     "How to record a video lesson"
    ],
    "a": 2,
    "ev": "The key is that you are checking how well you explained, not testing the patient.",
    "why": "Trọng tâm là cách kiểm tra bệnh nhân thật sự hiểu (teach-back)."
   },
   {
    "kind": "detail",
    "q": "Why does Dr Hoang say a nod is not reliable?",
    "opts": [
     "Patients may agree because they feel embarrassed",
     "Patients often cannot see the device",
     "Nurses rarely look at the patient",
     "Patients forget the nurse's name"
    ],
    "a": 0,
    "ev": "Many patients say yes because they feel embarrassed",
    "why": "Bệnh nhân gật đầu vì ngại, nên cái gật không đáng tin."
   },
   {
    "kind": "detail",
    "q": "What should the nurse do if the patient makes a mistake during teach-back?",
    "opts": [
     "Repeat the explanation in a different way",
     "Ask the patient to return next week",
     "Write a report for the tutor",
     "Remove the device from the patient"
    ],
    "a": 0,
    "ev": "you simply explain that step again in a different way",
    "why": "Y tá chỉ cần giải thích lại bước đó bằng cách khác."
   },
   {
    "kind": "inference",
    "q": "What does Dr Hoang suggest about the time teach-back takes?",
    "opts": [
     "It is too slow to use in practice",
     "It costs little time compared with the problems it avoids",
     "It should only be used with children",
     "It is not supported by any evidence"
    ],
    "a": 1,
    "ev": "adds only a minute or two",
    "why": "Mất thêm 1–2 phút nhưng tránh tái khám, nên tiết kiệm hơn."
   },
   {
    "kind": "tfng",
    "q": "Mr Park used the inhaler incorrectly in the recorded video.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Hội thoại chỉ nói ông Park gật đầu; không nói ông dùng ống hít đúng hay sai, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-c1-f05",
  "lvl": "C1",
  "topic": "medical",
  "genre": "email",
  "title": "Re: Transfer Request for Mr Park",
  "text": "Subject: Re: Transfer request for Mr Park, Bed 14\n\nDear Dr Nam,\n\nThank you for your message and for the thorough summary of Mr Park's case. I am writing to clarify where we stand, since I understand that the delay is causing some frustration on your side.\n\nWe are sympathetic to your request, and I would like to assure you that the decision does not reflect any doubt about the quality of your assessment. Rather, it is a matter of capacity. Our high-dependency unit is currently operating at the limit of its safe staffing levels, and admitting a further patient with Mr Park's needs would, in the view of the nurse in charge, compromise the care of those already here. I recognise that this is hardly a comforting explanation when a colleague is waiting for an answer.\n\nThat said, I do not think the situation is without options. Firstly, we expect two patients to be stepped down to the general ward by tomorrow afternoon, which should free a bed. Secondly, in the meantime, our outreach team would be glad to review Mr Park at your bedside this evening and advise on monitoring. They cannot take over his care, but their input may well reduce the risk of deterioration while he waits.\n\nIt would help me to have a few details: his most recent observations, whether his oxygen requirement has changed since this morning, and whether the family have been told that a transfer is being considered. I am wary of raising expectations before we are certain, so I would suggest they are told only that the possibility is under discussion.\n\nPlease do not hesitate to escalate to the duty consultant if his condition worsens before we speak again; that route exists precisely for situations of this kind.\n\nWith kind regards,\n\nDr Anna Weber\nCritical Care Coordinator, Riverside General Hospital",
  "gist": "Email giữa hai bác sĩ về yêu cầu chuyển bệnh: từ chối tạm thời vì thiếu năng lực, nhưng đưa ra giải pháp thay thế và cách leo thang nếu bệnh nặng hơn.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of Dr Weber's email?",
    "opts": [
     "To criticise Dr Nam's assessment of the patient",
     "To explain why the transfer is delayed and propose interim steps",
     "To tell the family that the transfer has been approved",
     "To ask Dr Nam to take over Mr Park's care"
    ],
    "a": 1,
    "ev": "it is a matter of capacity",
    "why": "Email giải thích việc chậm là do năng lực và đề xuất bước tạm thời."
   },
   {
    "kind": "detail",
    "q": "What does the outreach team offer to do this evening?",
    "opts": [
     "Move Mr Park to the general ward",
     "Examine Mr Park and advise on monitoring",
     "Assume responsibility for his treatment",
     "Inform his relatives about the transfer"
    ],
    "a": 1,
    "ev": "our outreach team would be glad to review Mr Park at your bedside this evening and advise on monitoring",
    "why": "Nhóm outreach sẽ khám tại giường và tư vấn theo dõi."
   },
   {
    "kind": "detail",
    "q": "According to Dr Weber, when might a bed become available?",
    "opts": [
     "This evening",
     "Tomorrow afternoon",
     "Next week",
     "Once the family agrees"
    ],
    "a": 1,
    "ev": "we expect two patients to be stepped down to the general ward by tomorrow afternoon",
    "why": "Dự kiến chiều mai hai bệnh nhân chuyển xuống khoa thường nên có giường."
   },
   {
    "kind": "vocab",
    "q": "In the email, 'wary of' in 'I am wary of raising expectations' is closest in meaning to",
    "opts": [
     "eager about",
     "careful about",
     "unaware of",
     "angry about"
    ],
    "a": 1,
    "ev": "I am wary of raising expectations before we are certain",
    "why": "'Wary of' là thận trọng, e ngại; hợp với 'before we are certain'."
   },
   {
    "kind": "tfng",
    "q": "Dr Weber says the delay is caused by doubts about Dr Nam's diagnosis.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "the decision does not reflect any doubt about the quality of your assessment",
    "why": "Bà nói rõ quyết định không phản ánh nghi ngờ gì về đánh giá của Dr Nam."
   }
  ]
 },
 {
  "id": "rd-c1-f06",
  "lvl": "C1",
  "topic": "medical",
  "genre": "article",
  "title": "The Quiet Value of Prevention",
  "text": "Health systems tend to reward drama. A surgeon who removes a tumour or a team that revives a patient in cardiac arrest is easily celebrated, whereas a nurse who spends twenty minutes encouraging a patient to attend a screening appointment rarely makes headlines. Yet there is a persuasive case that preventive care deserves far more attention than it receives.\n\nThe logic is straightforward. Many of the conditions that consume the largest share of health budgets, such as type 2 diabetes, heart disease and several cancers, develop over years, and their risk can be reduced by vaccination, early detection and changes in everyday habits. Treating a late-stage illness is almost always more demanding, for patient and system alike, than preventing it or catching it early.\n\nNevertheless, prevention faces structural obstacles. Its benefits are statistical rather than visible: when a screening programme works, nobody can point to the individuals who were spared. Its rewards also arrive slowly, often long after the politician or manager who funded the programme has left office. Budgets, by contrast, are planned annually, which encourages spending on immediate needs.\n\nA further difficulty is that prevention is not uniformly benign. Screening can identify abnormalities that would never have caused harm, leading to anxiety and unnecessary procedures, a phenomenon known as overdiagnosis. Responsible programmes must therefore weigh potential benefit against potential harm and communicate the uncertainty honestly instead of promising certainty.\n\nNone of this undermines the central argument; it refines it. Effective prevention depends on careful evidence, realistic messaging, and equitable access, since those who most need it are often least able to attend appointments during working hours. For students entering the health professions, the lesson is perhaps counterintuitive: some of the most valuable work you will do will be work whose success is measured by what does not happen.",
  "gist": "Bài luận lập luận rằng chăm sóc dự phòng bị đánh giá thấp vì lợi ích khó thấy, nhưng cũng nêu rủi ro như chẩn đoán quá mức và nhu cầu công bằng.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the writer's central argument?",
    "opts": [
     "Surgery brings less benefit to patients than screening does",
     "Screening should be dropped because overdiagnosis harms patients",
     "Prevention is undervalued, though it also has complications",
     "Politicians should take over the planning of hospital budgets"
    ],
    "a": 2,
    "ev": "there is a persuasive case that preventive care deserves far more attention than it receives",
    "why": "Luận điểm chính: dự phòng xứng đáng được chú ý hơn nhưng cũng có phức tạp."
   },
   {
    "kind": "detail",
    "q": "Why does the writer say the benefits of prevention are hard to see?",
    "opts": [
     "Results appear only after a long review",
     "Patients refuse to attend screenings",
     "Nobody can identify the people who were spared illness",
     "Prevention is too costly to measure"
    ],
    "a": 2,
    "ev": "nobody can point to the individuals who were spared",
    "why": "Khi sàng lọc hiệu quả, không ai chỉ ra được người được cứu khỏi bệnh."
   },
   {
    "kind": "detail",
    "q": "What problem is associated with overdiagnosis?",
    "opts": [
     "Delayed vaccination programmes",
     "Anxiety and unnecessary procedures",
     "Lower hospital budgets",
     "Fewer patients attending appointments"
    ],
    "a": 1,
    "ev": "leading to anxiety and unnecessary procedures",
    "why": "Chẩn đoán quá mức dẫn đến lo lắng và thủ thuật không cần thiết."
   },
   {
    "kind": "inference",
    "q": "What does the phrase 'it refines it' suggest about the writer's attitude to the problems of screening?",
    "opts": [
     "They make the argument more precise rather than weaker",
     "They prove the argument wrong",
     "They are exaggerated by critics",
     "They apply only to cancer"
    ],
    "a": 0,
    "ev": "None of this undermines the central argument; it refines it.",
    "why": "Các vấn đề làm lập luận chính xác hơn chứ không làm yếu nó."
   },
   {
    "kind": "tfng",
    "q": "The writer has personally worked on a screening programme.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 2,
    "ev": "",
    "why": "Bài không nói tác giả từng tham gia chương trình sàng lọc nào, nên là Not given."
   }
  ]
 },
 {
  "id": "rd-c1-f07",
  "lvl": "C1",
  "topic": "medical",
  "genre": "article",
  "title": "When Honesty Hurts: A Reflection on Disclosure",
  "text": "During my second clinical placement I watched a consultant explain a difficult diagnosis to an elderly woman and her son. The son had asked us privately, before the meeting, not to mention the word \"cancer\", insisting that his mother would lose hope. I remember how uncomfortable the team felt as we walked into the room, caught between respect for the family and our duty to the patient.\n\nThe consultant did something I have thought about ever since. She began by asking the patient what she already understood about her illness and how much detail she wished to hear. The patient, to my surprise, answered quite directly: she suspected the news was serious and preferred to know everything. The son appeared taken aback, but he did not object.\n\nThis episode challenged an assumption I had unconsciously absorbed, namely that protecting someone from distressing information is an act of kindness. In many families, and in some cultures, withholding a grave diagnosis is regarded as compassion. I do not wish to dismiss that tradition, which often springs from real love. Nevertheless, it sits uneasily with the principle that competent adults are entitled to make decisions about their own treatment, and they cannot do so without information.\n\nThe ethical solution, I now think, lies neither in blunt disclosure nor in automatic deference to relatives. It lies in discovering what the patient herself wants. Asking permission before sharing bad news, pausing frequently, and allowing silence are skills that can be practised, yet they are rarely examined in assessments.\n\nI do not claim to have settled the dilemma. Another patient might have asked us to speak to her family instead, and respecting that choice would also be a form of respect for autonomy. What the consultant taught me is that the question should be put to the person whose life it concerns.",
  "gist": "Bài suy ngẫm về đạo đức khi báo tin xấu: thay vì giấu theo yêu cầu gia đình hay nói thẳng, hãy hỏi bệnh nhân họ muốn biết bao nhiêu.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main point of the reflection?",
    "opts": [
     "Families should decide what patients are told",
     "Doctors should always give full details immediately",
     "Cancer should never be mentioned aloud",
     "The patient's own wishes should guide how bad news is shared"
    ],
    "a": 3,
    "ev": "the question should be put to the person whose life it concerns",
    "why": "Ý chính: nên hỏi chính bệnh nhân về mong muốn được biết."
   },
   {
    "kind": "detail",
    "q": "What did the consultant do first in the meeting?",
    "opts": [
     "Asked the son to leave the room",
     "Gave the diagnosis straight away",
     "Asked what the patient knew and wanted to hear",
     "Showed the family the test results"
    ],
    "a": 2,
    "ev": "asking the patient what she already understood about her illness and how much detail she wished to hear",
    "why": "Bà bắt đầu bằng việc hỏi bệnh nhân đã hiểu gì và muốn nghe bao nhiêu."
   },
   {
    "kind": "detail",
    "q": "How did the son react when his mother asked for the whole truth?",
    "opts": [
     "He left the room in anger",
     "He was surprised but raised no objection",
     "He asked the consultant to change the diagnosis",
     "He supported her immediately"
    ],
    "a": 1,
    "ev": "The son appeared taken aback, but he did not object.",
    "why": "Người con ngạc nhiên nhưng không phản đối."
   },
   {
    "kind": "inference",
    "q": "What does the writer imply about assessments of medical students?",
    "opts": [
     "They test communication skills too thoroughly",
     "They are designed by patients",
     "They tend to neglect skills for delivering bad news",
     "They forbid silence in conversations"
    ],
    "a": 2,
    "ev": "yet they are rarely examined in assessments",
    "why": "Các kỹ năng này hiếm khi được thi, tức là bị bỏ qua."
   },
   {
    "kind": "tfng",
    "q": "The writer believes that families who withhold diagnoses are acting out of cruelty.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "which often springs from real love",
    "why": "Tác giả nói truyền thống đó thường xuất phát từ tình yêu thật sự, không phải sự tàn nhẫn."
   }
  ]
 },
 {
  "id": "rd-c1-f08",
  "lvl": "C1",
  "topic": "medical",
  "genre": "report",
  "title": "Case Study: Informed Consent in a Time-Pressured Setting",
  "text": "The following fictional case is used in our professional practice module to illustrate how consent can be valid in form yet inadequate in substance.\n\nMr Minh, a 58-year-old man, attended an emergency department with abdominal pain. After investigation, the surgical team recommended an operation the same evening. A junior doctor visited him with the consent form, summarised the procedure in under two minutes, and asked him to sign. Mr Minh, who was in discomfort and anxious, signed without asking questions. Later, a nurse noticed that he seemed unsure what the operation involved and whether any alternatives existed.\n\nValid consent is generally understood to rest on three conditions: the patient must have the capacity to decide, must receive sufficient and relevant information, and must act voluntarily. In this case, capacity was not in doubt. The weaknesses lay elsewhere. The information was brief and delivered in technical language, no alternatives were discussed, and the setting arguably discouraged questions. A signature on a form is evidence that a conversation occurred; it is not, in itself, proof that understanding was achieved.\n\nThe nurse's response was instructive. Rather than challenging the junior doctor publicly, she asked Mr Minh in private what he understood and then alerted the surgical registrar, who returned to the bedside. The registrar explained the main benefits, the common risks and the option of closer monitoring, and gave Mr Minh time to think. He chose to proceed, but this time he could say why.\n\nThree lessons emerge. First, urgency does not remove the duty to inform, though it may shorten the conversation. Second, any team member who doubts a patient's understanding has a responsibility to speak up. Finally, teach-back or similar checks can turn a formality into genuine consent. Students should reflect on how they would feel and act if they were in the nurse's position.",
  "gist": "Ca tình huống giả định về đồng thuận có hiểu biết: chữ ký chưa đủ nếu bệnh nhân không hiểu; y tá phát hiện và giúp quy trình được làm lại đúng cách.",
  "qs": [
   {
    "kind": "main",
    "q": "What is the main purpose of the case study?",
    "opts": [
     "To show that consent forms are unnecessary in emergencies",
     "To illustrate that a signed form does not guarantee real understanding",
     "To criticise nurses who question doctors",
     "To describe how to perform abdominal surgery"
    ],
    "a": 1,
    "ev": "valid in form yet inadequate in substance",
    "why": "Mục đích: chỉ ra đồng thuận hợp lệ về hình thức nhưng chưa đủ về thực chất."
   },
   {
    "kind": "detail",
    "q": "What was the problem with the junior doctor's explanation?",
    "opts": [
     "It was too brief and technical, with no alternatives mentioned",
     "It was given by the wrong person",
     "It was delivered after the operation",
     "It was refused by the patient"
    ],
    "a": 0,
    "ev": "The information was brief and delivered in technical language, no alternatives were discussed",
    "why": "Thông tin ngắn, thuật ngữ, không nêu lựa chọn thay thế."
   },
   {
    "kind": "detail",
    "q": "How did the nurse first act on her concern?",
    "opts": [
     "She cancelled the operation",
     "She informed Mr Minh's family",
     "She corrected the junior doctor in front of others",
     "She asked the patient privately, then told the registrar"
    ],
    "a": 3,
    "ev": "she asked Mr Minh in private what he understood and then alerted the surgical registrar",
    "why": "Cô hỏi riêng bệnh nhân rồi báo cho bác sĩ phẫu thuật cấp cao."
   },
   {
    "kind": "vocab",
    "q": "In the text, 'instructive' in 'The nurse's response was instructive' is closest in meaning to",
    "opts": [
     "surprising",
     "rude",
     "useful to learn from",
     "unnecessary"
    ],
    "a": 2,
    "ev": "The nurse's response was instructive.",
    "why": "'Instructive' nghĩa là mang tính giáo dục, có thể học hỏi, phù hợp với đoạn 'Three lessons emerge'."
   },
   {
    "kind": "tfng",
    "q": "Mr Minh decided against the operation after the second conversation.",
    "opts": [
     "True",
     "False",
     "Not given"
    ],
    "a": 1,
    "ev": "He chose to proceed",
    "why": "Ông chọn tiếp tục phẫu thuật nên câu này sai."
   }
  ]
 }
];
