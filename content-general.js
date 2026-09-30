/* ============================================================
   CONTENT · General English track (A1 → A2)
   Mỗi bài: can-do rõ ràng, 6 từ, 1 mẫu câu, nghe, luyện, phát âm, nói.
   ============================================================ */
const GENERAL = [
{
  id: "G1", track: "gen", level: "A1", min: 15,
  title: "Meeting people", vi: "Gặp gỡ và giới thiệu bản thân",
  can: "Chào hỏi, nói tên, quê quán, nghề nghiệp và hỏi lại người khác.",
  words: [
    { w: "name", us: "/neɪm/", uk: "/neɪm/", syl: ["name"], st: 0, pos: "noun", vi: "tên", ex: "My name is Minh.", exvi: "Tên tôi là Minh." },
    { w: "student", us: "/ˈstuːdənt/", uk: "/ˈstjuːdənt/", syl: ["stu", "dent"], st: 0, pos: "noun", vi: "sinh viên", ex: "I'm a medical student.", exvi: "Tôi là sinh viên y khoa.", tip: "Nghề nghiệp luôn cần a/an: I'm a student, I'm an engineer." },
    { w: "from", us: "/frʌm/", uk: "/frɒm/", syl: ["from"], st: 0, pos: "preposition", vi: "đến từ", ex: "I'm from Vietnam.", exvi: "Tôi đến từ Việt Nam.", tip: "Khi nói nhanh, from thường đọc nhẹ thành /frəm/." },
    { w: "work", us: "/wɝːk/", uk: "/wɜːk/", syl: ["work"], st: 0, pos: "verb", vi: "làm việc", ex: "I work at a hospital.", exvi: "Tôi làm việc ở một bệnh viện.", tip: "Đừng nhầm với walk /wɔːk/ (đi bộ)." },
    { w: "live", us: "/lɪv/", uk: "/lɪv/", syl: ["live"], st: 0, pos: "verb", vi: "sống", ex: "I live in Da Nang.", exvi: "Tôi sống ở Đà Nẵng.", tip: "live /lɪv/ (sống) khác leave /liːv/ (rời đi): nguyên âm ngắn và dài." },
    { w: "nice to meet you", us: "/ˌnaɪs tə ˈmiːt juː/", uk: "/ˌnaɪs tə ˈmiːt juː/", syl: ["nice", "to", "meet", "you"], st: 2, pos: "phrase", vi: "rất vui được gặp bạn", ex: "Hi, I'm Anna. Nice to meet you.", exvi: "Chào, tôi là Anna. Rất vui được gặp bạn." }
  ],
  steps: [
    { t: "pattern", title: "The verb be", rule: "I am, you are, he / she is. Nói nhanh: I'm, you're, she's.",
      vi: "Tiếng Việt không bắt buộc có động từ 'là' trong câu như 'Tôi sinh viên'. Tiếng Anh thì luôn cần be.",
      ex: [["I'm Minh.", "Tôi là Minh."], ["She's a nurse.", "Cô ấy là y tá."], ["Where are you from?", "Bạn đến từ đâu?"], ["What do you do?", "Bạn làm nghề gì?"]],
      pit: [["I student.", "I'm a student.", "Thiếu be và thiếu mạo từ a."], ["She from Japan.", "She's from Japan.", "Câu nào cũng cần một động từ."]] },
    { t: "listen", k: "listening", title: "At the hospital café",
      who: { A: "Anna", B: "Minh" },
      lines: [
        ["A", "Hi, I'm Anna. What's your name?", "Chào, mình là Anna. Bạn tên gì?"],
        ["B", "Hi, Anna. My name is Minh. Nice to meet you.", "Chào Anna. Mình tên Minh. Rất vui được gặp bạn."],
        ["A", "Nice to meet you too. Where are you from, Minh?", "Mình cũng vậy. Minh đến từ đâu?"],
        ["B", "I'm from Vietnam. I'm a medical student.", "Mình đến từ Việt Nam. Mình là sinh viên y."],
        ["A", "Oh, really? I'm a nurse. I work at City Hospital.", "Ồ, thật à? Mình là y tá. Mình làm ở Bệnh viện Thành phố."]
      ],
      qs: [
        { q: "What does Minh do?", opts: ["He's a medical student.", "He's a nurse.", "He's a teacher."], a: 0, why: "Minh nói: I'm a medical student." },
        { q: "Where does Anna work?", opts: ["At a school", "At City Hospital", "At a pharmacy"], a: 1, why: "Anna nói: I work at City Hospital." }
      ] },
    { t: "read", k: "reading", title: "A new classmate",
      text: "Anna meets Minh at the hospital café. Minh is a medical student from Vietnam. Anna is a nurse at City Hospital. They talk about where they live and what they do.",
      vi: "Anna gặp Minh ở quán cà phê của bệnh viện. Minh là sinh viên y khoa đến từ Việt Nam. Anna là y tá tại Bệnh viện Thành phố. Họ nói về nơi mình sống và công việc.",
      qs: [
        { q: "Where do Anna and Minh meet?", opts: ["At a school", "At a hospital café", "At a pharmacy"], a: 1, why: "They meet at the hospital café." },
        { q: "What does Anna do?", opts: ["She is a nurse.", "She is a student.", "She is a doctor."], a: 0, why: "Anna says she is a nurse at City Hospital." }
      ] },
    { t: "cloze", k: "grammar", s: "I ___ a medical student.", opts: ["am", "is", "are"], a: 0, why: "Chủ ngữ I đi với am." },
    { t: "cloze", k: "grammar", s: "She ___ from Japan.", opts: ["am", "is", "are"], a: 1, why: "He / she / it đi với is." },
    { t: "order", k: "grammar", vi: "Bạn đến từ đâu?", tiles: ["Where", "are", "you", "from?"] },
    { t: "dict", k: "listening", s: "Nice to meet you.", vi: "Rất vui được gặp bạn." },
    { t: "pairs", set: "finals" },
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write a short self-introduction of 3–4 sentences. Include your name, where you are from, what you do, and one extra detail.", "vi": "Viết 3–4 câu giới thiệu bản thân: tên, quê quán, nghề nghiệp và một thông tin thêm.", "minWords": 3, "maxWords": 80, "model": "Hi, my name is Khoi. I’m from Vietnam. I’m a medical student. I live in Ho Chi Minh City.", "kw": ["name", "from", "student", "work", "live"]},
    { t: "speak", title: "Introduce yourself", prompt: "Introduce yourself in three sentences: your name, where you're from and what you do.",
      vi: "Giới thiệu bản thân trong ba câu: tên, quê, nghề.",
      models: ["Hi, my name is Khoi.", "I'm from Vietnam.", "I'm a medical student."],
      kw: [["name", "i'm", "i am"], ["from"], ["student", "work", "doctor", "nurse"]], labels: ["tên", "đến từ", "nghề"] }
  ]
},
{
  id: "G2", track: "gen", level: "A1", min: 15, pre: ["G1"],
  title: "My day", vi: "Một ngày của tôi",
  can: "Kể thói quen hằng ngày, dùng đúng động từ ngôi thứ ba (she works).",
  words: [
    { w: "get up", us: "/ˌɡet ˈʌp/", uk: "/ˌɡet ˈʌp/", syl: ["get", "up"], st: 1, pos: "phrasal verb", vi: "thức dậy", ex: "I get up at six.", exvi: "Tôi thức dậy lúc sáu giờ.", tip: "Đọc nối: get up nghe như ge-tup." },
    { w: "breakfast", us: "/ˈbrekfəst/", uk: "/ˈbrekfəst/", syl: ["break", "fast"], st: 0, pos: "noun", vi: "bữa sáng", ex: "I have breakfast at home.", exvi: "Tôi ăn sáng ở nhà.", tip: "Không dùng the: have breakfast, have lunch." },
    { w: "usually", us: "/ˈjuːʒuəli/", uk: "/ˈjuːʒuəli/", syl: ["u", "su", "al", "ly"], st: 0, pos: "adverb", vi: "thường thường", ex: "She usually walks to work.", exvi: "Cô ấy thường đi bộ đi làm." },
    { w: "always", us: "/ˈɔːlweɪz/", uk: "/ˈɔːlweɪz/", syl: ["al", "ways"], st: 0, pos: "adverb", vi: "luôn luôn", ex: "He always drinks coffee in the morning.", exvi: "Anh ấy luôn uống cà phê vào buổi sáng." },
    { w: "shift", us: "/ʃɪft/", uk: "/ʃɪft/", syl: ["shift"], st: 0, pos: "noun", vi: "ca làm việc", ex: "My night shift starts at nine.", exvi: "Ca đêm của tôi bắt đầu lúc chín giờ." },
    { w: "tired", us: "/ˈtaɪɚd/", uk: "/ˈtaɪəd/", syl: ["tired"], st: 0, pos: "adjective", vi: "mệt", ex: "I feel tired after work.", exvi: "Tôi thấy mệt sau giờ làm." }
  ],
  steps: [
    { t: "pattern", title: "Present simple for routines", rule: "I / you / we / they work. He / she / it works. Trạng từ tần suất đứng trước động từ thường: She usually works.",
      vi: "Động từ tiếng Việt không đổi theo người nói. Tiếng Anh thêm -s hoặc -es khi chủ ngữ là he, she, it.",
      ex: [["I get up at six.", "Tôi dậy lúc sáu giờ."], ["She gets up at five thirty.", "Cô ấy dậy lúc năm rưỡi."], ["He doesn't work on Sundays.", "Anh ấy không làm việc ngày Chủ nhật."]],
      pit: [["She work at night.", "She works at night.", "Ngôi thứ ba số ít cần -s."], ["He always is late.", "He is always late.", "Với be, trạng từ đứng sau."]] },
    { t: "listen", k: "listening", title: "Linh's day",
      who: { N: "Narrator" },
      lines: [
        ["N", "Linh is a nurse. She usually gets up at five thirty.", "Linh là y tá. Cô ấy thường dậy lúc năm rưỡi."],
        ["N", "She has breakfast at six and starts her shift at seven.", "Cô ấy ăn sáng lúc sáu giờ và bắt đầu ca lúc bảy giờ."],
        ["N", "She always feels tired after a night shift.", "Cô ấy luôn thấy mệt sau ca đêm."],
        ["N", "On Sundays, she doesn't work. She sleeps late.", "Chủ nhật cô ấy không làm việc. Cô ấy ngủ muộn."]
      ],
      qs: [
        { q: "When does Linh start her shift?", opts: ["At six", "At seven", "At five thirty"], a: 1, why: "…starts her shift at seven." },
        { q: "How does she feel after a night shift?", opts: ["Happy", "Hungry", "Tired"], a: 2, why: "She always feels tired after a night shift." }
      ] },
    { t: "cloze", k: "grammar", s: "He ___ up at six every day.", type: true, a: ["gets"], why: "He + động từ thêm -s: gets." },
    { t: "cloze", k: "grammar", s: "She never ___ coffee.", opts: ["drink", "drinks", "drinking"], a: 1, why: "She + drinks. Never đứng trước động từ." },
    { t: "order", k: "grammar", vi: "Tôi thường ăn sáng lúc bảy giờ.", tiles: ["I", "usually", "have", "breakfast", "at", "seven."] },
    { t: "dict", k: "listening", s: "She starts her shift at seven.", vi: "Cô ấy bắt đầu ca lúc bảy giờ." },
    { t: "classify", k: "pron", title: "How do you say -s?", q: "Đuôi -s được đọc thế nào?",
      opts: ["/s/", "/z/", "/ɪz/"],
      items: [["works", 0], ["lives", 1], ["washes", 2], ["gets", 0], ["plays", 1], ["finishes", 2]],
      why: "Sau âm vô thanh (/k/, /t/, /p/, /f/) đọc /s/. Sau âm hữu thanh và nguyên âm đọc /z/. Sau /s/, /z/, /ʃ/, /tʃ/, /dʒ/ đọc /ɪz/." },
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write 4 sentences about your weekday routine. Use at least two frequency words such as usually, always, or never.", "vi": "Viết 4 câu về một ngày trong tuần. Dùng ít nhất hai từ chỉ tần suất như usually, always hoặc never.", "minWords": 3, "maxWords": 80, "model": "I usually get up at six. I always have breakfast at home. I start work at seven. I never drink coffee at night.", "kw": ["usually", "always", "get up", "breakfast", "work", "study"]},
    { t: "speak", title: "Your morning", prompt: "Describe your morning in three sentences. Use usually or always.",
      vi: "Kể buổi sáng của bạn trong ba câu, có dùng usually hoặc always.",
      models: ["I usually get up at six.", "I always have breakfast at home.", "I start work at seven thirty."],
      kw: [["usually", "always", "often"], ["get up", "wake up", "breakfast"], ["work", "study", "class", "start"]], labels: ["tần suất", "hoạt động sáng", "công việc"] }
  ]
},
{
  id: "G3", track: "gen", level: "A1", min: 15, pre: ["G2"],
  title: "Food and drink", vi: "Gọi món và ăn uống",
  can: "Gọi món lịch sự, hỏi về món ăn và nói mình bị dị ứng gì.",
  words: [
    { w: "menu", us: "/ˈmenjuː/", uk: "/ˈmenjuː/", syl: ["men", "u"], st: 0, pos: "noun", vi: "thực đơn", ex: "Can I see the menu, please?", exvi: "Cho tôi xem thực đơn được không?" },
    { w: "order", us: "/ˈɔːrdɚ/", uk: "/ˈɔːdə/", syl: ["or", "der"], st: 0, pos: "verb", vi: "gọi món", ex: "Are you ready to order?", exvi: "Anh/chị gọi món chưa?" },
    { w: "bill", us: "/bɪl/", uk: "/bɪl/", syl: ["bill"], st: 0, pos: "noun", vi: "hóa đơn", ex: "Could I have the bill, please?", exvi: "Cho tôi xin hóa đơn.", tip: "Anh-Mỹ hay nói check." },
    { w: "glass", us: "/ɡlæs/", uk: "/ɡlɑːs/", syl: ["glass"], st: 0, pos: "noun", vi: "cái ly, cốc", ex: "A glass of water, please.", exvi: "Cho tôi một ly nước." },
    { w: "spicy", us: "/ˈspaɪsi/", uk: "/ˈspaɪsi/", syl: ["spi", "cy"], st: 0, pos: "adjective", vi: "cay", ex: "Is this soup spicy?", exvi: "Món súp này có cay không?" },
    { w: "allergic", us: "/əˈlɝːdʒɪk/", uk: "/əˈlɜːdʒɪk/", syl: ["al", "ler", "gic"], st: 1, pos: "adjective", vi: "bị dị ứng", ex: "I'm allergic to peanuts.", exvi: "Tôi bị dị ứng đậu phộng.", tip: "allergic TO something. Danh từ allergy /ˈælɚdʒi/ có trọng âm ở âm đầu." }
  ],
  steps: [
    { t: "pattern", title: "Polite requests", rule: "Could I have …, please? / I'd like … / Would you like …?",
      vi: "Nói I want hoặc Give me nghe khá cộc. Người bản xứ dùng Could I have hoặc I'd like khi gọi món.",
      ex: [["Could I have the chicken soup, please?", "Cho tôi món súp gà."], ["I'd like some water.", "Tôi muốn một ít nước."], ["Would you like something to drink?", "Anh/chị uống gì không?"]],
      pit: [["Give me a coffee.", "Could I have a coffee, please?", "Mệnh lệnh nghe thiếu lịch sự."], ["I'd like a water.", "I'd like some water. / a glass of water.", "Water không đếm được."]] },
    { t: "listen", k: "listening", title: "Ordering lunch",
      who: { W: "Waiter", C: "Customer" },
      lines: [
        ["W", "Hi, are you ready to order?", "Chào anh, anh gọi món chưa?"],
        ["C", "Yes. Could I have the chicken soup, please?", "Rồi. Cho tôi món súp gà."],
        ["W", "Sure. Would you like something to drink?", "Vâng. Anh uống gì không?"],
        ["C", "I'd like a glass of water, please. Is the curry spicy?", "Cho tôi một ly nước. Món cà ri có cay không?"],
        ["W", "Yes, it's quite spicy.", "Có, khá cay đấy."],
        ["C", "OK, no curry then. Oh, and I'm allergic to peanuts.", "Vậy thôi không lấy cà ri. À, tôi bị dị ứng đậu phộng."],
        ["W", "No problem. I'll tell the kitchen.", "Không sao. Tôi sẽ báo nhà bếp."]
      ],
      qs: [
        { q: "What does the customer drink?", opts: ["Coffee", "Water", "Juice"], a: 1, why: "I'd like a glass of water." },
        { q: "What is the customer allergic to?", opts: ["Chicken", "Curry", "Peanuts"], a: 2, why: "I'm allergic to peanuts." }
      ] },
    { t: "cloze", k: "grammar", s: "___ I have the bill, please?", opts: ["Could", "Do", "Am"], a: 0, why: "Could I have… là cách xin lịch sự." },
    { t: "cloze", k: "grammar", s: "I'd like ___ water, please.", opts: ["a", "an", "some"], a: 2, why: "Water không đếm được nên dùng some." },
    { t: "order", k: "grammar", vi: "Anh/chị uống gì không?", tiles: ["Would", "you", "like", "something", "to", "drink?"] },
    { t: "dict", k: "listening", s: "Could I have the bill, please?", vi: "Cho tôi xin hóa đơn." },
    { t: "pairs", set: "z-s" },
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write a short food order. Ask for one main dish and one drink, then mention one food you are allergic to.", "vi": "Viết một đoạn gọi món ngắn: gọi một món chính, một đồ uống và nói bạn dị ứng với một loại thực phẩm.", "minWords": 3, "maxWords": 80, "model": "Could I have the chicken, please? And a glass of water. I’m allergic to peanuts.", "kw": ["order", "menu", "glass", "water", "allergic"]},
    { t: "speak", title: "Order a meal", prompt: "Order a meal and a drink politely. Say one food you are allergic to.",
      vi: "Gọi một món ăn và đồ uống thật lịch sự, nói mình dị ứng với gì.",
      models: ["Could I have the fish, please?", "I'd like a glass of orange juice.", "I'm allergic to shrimp."],
      kw: [["could i have", "i'd like", "i would like", "can i have"], ["drink", "water", "juice", "coffee", "tea", "glass"], ["allergic"]], labels: ["xin lịch sự", "đồ uống", "dị ứng"] }
  ]
},
{
  id: "G4", track: "gen", level: "A1", min: 15, pre: ["G3"],
  title: "Finding your way", vi: "Hỏi và chỉ đường",
  can: "Hỏi có nơi nào gần đây không, hiểu và đưa ra chỉ dẫn đơn giản.",
  words: [
    { w: "pharmacy", us: "/ˈfɑːrməsi/", uk: "/ˈfɑːməsi/", syl: ["phar", "ma", "cy"], st: 0, pos: "noun", vi: "hiệu thuốc", ex: "Is there a pharmacy near here?", exvi: "Gần đây có hiệu thuốc không?" },
    { w: "next to", us: "/ˈnekst tə/", uk: "/ˈnekst tə/", syl: ["next", "to"], st: 0, pos: "preposition", vi: "bên cạnh", ex: "The café is next to the lift.", exvi: "Quán cà phê ở cạnh thang máy." },
    { w: "opposite", us: "/ˈɑːpəzɪt/", uk: "/ˈɒpəzɪt/", syl: ["op", "po", "site"], st: 0, pos: "preposition", vi: "đối diện", ex: "The bank is opposite the hospital.", exvi: "Ngân hàng ở đối diện bệnh viện." },
    { w: "turn left", us: "/ˌtɝːn ˈleft/", uk: "/ˌtɜːn ˈleft/", syl: ["turn", "left"], st: 1, pos: "phrase", vi: "rẽ trái", ex: "Turn left at the corner.", exvi: "Rẽ trái ở góc đường." },
    { w: "straight", us: "/streɪt/", uk: "/streɪt/", syl: ["straight"], st: 0, pos: "adverb", vi: "thẳng", ex: "Go straight for about fifty metres.", exvi: "Đi thẳng khoảng năm mươi mét." },
    { w: "floor", us: "/flɔːr/", uk: "/flɔː/", syl: ["floor"], st: 0, pos: "noun", vi: "tầng", ex: "The X-ray department is on the second floor.", exvi: "Khoa X-quang ở tầng hai.", tip: "Anh-Anh: ground floor là tầng trệt, first floor là tầng trên nó. Anh-Mỹ: first floor là tầng trệt." }
  ],
  steps: [
    { t: "pattern", title: "There is / there are", rule: "There is a + danh từ số ít. There are + danh từ số nhiều. Hỏi: Is there a …? Are there any …?",
      vi: "Người Việt hay dịch 'có' thành have: 'Have a pharmacy near here?'. Muốn nói một nơi tồn tại, tiếng Anh dùng there is / there are.",
      ex: [["There is a pharmacy on the ground floor.", "Có một hiệu thuốc ở tầng trệt."], ["There are two lifts.", "Có hai thang máy."], ["Is there a toilet on this floor?", "Tầng này có nhà vệ sinh không?"]],
      pit: [["Have a pharmacy near here?", "Is there a pharmacy near here?", "Dịch từng chữ từ 'có'."], ["There is two lifts.", "There are two lifts.", "Số nhiều dùng are."]] },
    { t: "listen", k: "listening", title: "At reception",
      who: { V: "Visitor", R: "Receptionist" },
      lines: [
        ["V", "Excuse me, is there a pharmacy in the hospital?", "Xin lỗi, trong bệnh viện có hiệu thuốc không?"],
        ["R", "Yes, there is. It's on the ground floor.", "Có. Nó ở tầng trệt."],
        ["V", "How do I get there?", "Tôi đi đến đó thế nào?"],
        ["R", "Take the lift down, turn left and go straight. The pharmacy is next to the café, opposite the main entrance.", "Đi thang máy xuống, rẽ trái rồi đi thẳng. Hiệu thuốc ở cạnh quán cà phê, đối diện cổng chính."],
        ["V", "Thank you so much.", "Cảm ơn nhiều."]
      ],
      qs: [
        { q: "Which floor is the pharmacy on?", opts: ["The ground floor", "The first floor", "The second floor"], a: 0, why: "It's on the ground floor." },
        { q: "What is next to the pharmacy?", opts: ["The main entrance", "The café", "The lift"], a: 1, why: "…next to the café, opposite the main entrance." }
      ] },
    { t: "cloze", k: "grammar", s: "There ___ two lifts in this building.", opts: ["is", "are", "have"], a: 1, why: "Two lifts là số nhiều." },
    { t: "cloze", k: "grammar", s: "___ there a toilet on this floor?", type: true, a: ["is"], why: "Câu hỏi: Is there a …?" },
    { t: "order", k: "grammar", vi: "Gần đây có hiệu thuốc không?", tiles: ["Is", "there", "a", "pharmacy", "near", "here?"] },
    { t: "dict", k: "listening", s: "Turn left and go straight.", vi: "Rẽ trái rồi đi thẳng." },
    { t: "pairs", set: "l-n" },
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write simple directions from a familiar place to another place. Use at least three location or direction expressions.", "vi": "Viết hướng dẫn đường đi đơn giản từ một địa điểm quen thuộc đến một địa điểm khác. Dùng ít nhất ba cụm chỉ vị trí hoặc phương hướng.", "minWords": 3, "maxWords": 80, "model": "Go straight for two minutes. Turn left at the bank. The pharmacy is next to the hospital.", "kw": ["turn", "left", "right", "next to", "opposite", "straight"]},
    { t: "speak", title: "Give directions", prompt: "A visitor asks you: Is there a café near here? Answer and give simple directions.",
      vi: "Một người hỏi gần đây có quán cà phê không. Trả lời và chỉ đường đơn giản.",
      models: ["Yes, there is.", "Go straight and turn left.", "It's next to the pharmacy."],
      kw: [["there is", "there's", "yes"], ["turn", "go straight", "straight"], ["next to", "opposite", "floor", "on the"]], labels: ["there is", "chỉ hướng", "vị trí"] }
  ]
},
{
  id: "G5", track: "gen", level: "A2", min: 18, pre: ["G4"],
  title: "Last weekend", vi: "Kể chuyện cuối tuần",
  can: "Kể lại việc đã xảy ra bằng thì quá khứ đơn, hỏi Did you…?",
  words: [
    { w: "yesterday", us: "/ˈjestɚdeɪ/", uk: "/ˈjestədeɪ/", syl: ["yes", "ter", "day"], st: 0, pos: "adverb", vi: "hôm qua", ex: "I was very busy yesterday.", exvi: "Hôm qua tôi rất bận." },
    { w: "went", us: "/went/", uk: "/went/", syl: ["went"], st: 0, pos: "verb (past of go)", vi: "đã đi", ex: "We went to the beach last weekend.", exvi: "Cuối tuần trước chúng tôi đi biển.", tip: "Quá khứ bất quy tắc: go → went." },
    { w: "visited", us: "/ˈvɪzɪtɪd/", uk: "/ˈvɪzɪtɪd/", syl: ["vis", "it", "ed"], st: 0, pos: "verb (past)", vi: "đã thăm", ex: "I visited my grandparents.", exvi: "Tôi đã về thăm ông bà.", tip: "Sau /t/ hoặc /d/, đuôi -ed đọc /ɪd/." },
    { w: "stayed", us: "/steɪd/", uk: "/steɪd/", syl: ["stayed"], st: 0, pos: "verb (past)", vi: "đã ở lại", ex: "She stayed at home all day.", exvi: "Cô ấy ở nhà cả ngày.", tip: "Sau nguyên âm, -ed đọc /d/, không thêm âm tiết." },
    { w: "watched", us: "/wɑːtʃt/", uk: "/wɒtʃt/", syl: ["watched"], st: 0, pos: "verb (past)", vi: "đã xem", ex: "We watched a film on Saturday.", exvi: "Chúng tôi xem phim hôm thứ Bảy.", tip: "Một âm tiết. Không đọc thành watch-ed." },
    { w: "ago", us: "/əˈɡoʊ/", uk: "/əˈɡəʊ/", syl: ["a", "go"], st: 1, pos: "adverb", vi: "cách đây, trước", ex: "I started this course two weeks ago.", exvi: "Tôi bắt đầu khóa này hai tuần trước.", tip: "Ago đứng sau khoảng thời gian: two days ago." }
  ],
  steps: [
    { t: "pattern", title: "Past simple", rule: "Có quy tắc: + -ed (stayed). Bất quy tắc: go → went, have → had. Phủ định và câu hỏi dùng did + động từ nguyên mẫu.",
      vi: "Tiếng Việt dùng 'đã', 'hôm qua' để chỉ quá khứ và động từ không đổi. Tiếng Anh phải đổi động từ.",
      ex: [["I visited my grandparents.", "Tôi đã về thăm ông bà."], ["We had lunch together.", "Chúng tôi ăn trưa cùng nhau."], ["Did you go out? – No, I didn't.", "Bạn có ra ngoài không? – Không."]],
      pit: [["I go to the market yesterday.", "I went to the market yesterday.", "Có 'yesterday' vẫn phải chia quá khứ."], ["Did you went out?", "Did you go out?", "Sau did dùng động từ nguyên mẫu."]] },
    { t: "listen", k: "listening", title: "How was your weekend?",
      who: { A: "Tom", B: "Hoa" },
      lines: [
        ["A", "Hi, Hoa. How was your weekend?", "Chào Hoa. Cuối tuần của bạn thế nào?"],
        ["B", "Great! On Saturday I visited my grandparents. We had lunch together.", "Tuyệt! Thứ Bảy mình về thăm ông bà. Cả nhà ăn trưa cùng nhau."],
        ["A", "Nice. Did you go out on Sunday?", "Hay nhỉ. Chủ nhật bạn có đi đâu không?"],
        ["B", "No, I didn't. I stayed at home and watched a film. I was really tired.", "Không. Mình ở nhà xem phim. Mình mệt lắm."]
      ],
      qs: [
        { q: "What did Hoa do on Saturday?", opts: ["She watched a film.", "She visited her grandparents.", "She went to work."], a: 1, why: "On Saturday I visited my grandparents." },
        { q: "Why did she stay at home on Sunday?", opts: ["She was tired.", "It was raining.", "She was ill."], a: 0, why: "I was really tired." }
      ] },
    { t: "cloze", k: "grammar", s: "I ___ to the market yesterday.", type: true, a: ["went"], why: "go → went." },
    { t: "cloze", k: "grammar", s: "Did you ___ breakfast this morning?", opts: ["have", "had", "has"], a: 0, why: "Sau did dùng nguyên mẫu: have." },
    { t: "order", k: "grammar", vi: "Tối qua bạn có đi chơi không?", tiles: ["Did", "you", "go", "out", "last", "night?"] },
    { t: "dict", k: "listening", s: "I stayed at home and watched a film.", vi: "Tôi ở nhà và xem phim." },
    { t: "classify", k: "pron", title: "How do you say -ed?", q: "Đuôi -ed được đọc thế nào?",
      opts: ["/t/", "/d/", "/ɪd/"],
      items: [["watched", 0], ["stayed", 1], ["visited", 2], ["worked", 0], ["played", 1], ["needed", 2]],
      why: "Sau âm vô thanh (/k/, /p/, /s/, /ʃ/, /tʃ/) đọc /t/. Sau âm hữu thanh và nguyên âm đọc /d/. Sau /t/ và /d/ đọc /ɪd/." },
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write 4–5 sentences about last weekend. Use at least three past-tense verbs and one time expression.", "vi": "Viết 4–5 câu về cuối tuần trước. Dùng ít nhất ba động từ quá khứ và một cụm chỉ thời gian.", "minWords": 4, "maxWords": 80, "model": "Last Saturday, I visited my friend. We went to a café. We talked for an hour and watched a film.", "kw": ["last", "Saturday", "went", "visited", "watched", "yesterday"]},
    { t: "speak", title: "Your weekend", prompt: "Tell me about your last weekend in three sentences.",
      vi: "Kể về cuối tuần vừa rồi trong ba câu.",
      models: ["On Saturday I went to the cinema.", "I had dinner with my family.", "On Sunday I stayed at home and studied."],
      kw: [["saturday", "sunday", "weekend", "yesterday"], ["went", "had", "visited", "watched", "stayed", "studied", "played", "was"], ["with", "at home", "family", "friends"]], labels: ["thời gian", "động từ quá khứ", "chi tiết"] }
  ]
},
{
  id: "G6", track: "gen", level: "A2", min: 18, pre: ["G5"],
  title: "Making plans", vi: "Lên kế hoạch và lời mời",
  can: "Nói dự định với be going to, mời, nhận lời và từ chối lịch sự.",
  words: [
    { w: "free", us: "/friː/", uk: "/friː/", syl: ["free"], st: 0, pos: "adjective", vi: "rảnh; miễn phí", ex: "Are you free on Saturday?", exvi: "Thứ Bảy bạn có rảnh không?" },
    { w: "busy", us: "/ˈbɪzi/", uk: "/ˈbɪzi/", syl: ["bus", "y"], st: 0, pos: "adjective", vi: "bận", ex: "Sorry, I'm busy tomorrow.", exvi: "Xin lỗi, mai mình bận.", tip: "Chữ u ở đây đọc /ɪ/, gần giống 'bi-zi'." },
    { w: "plan", us: "/plæn/", uk: "/plæn/", syl: ["plan"], st: 0, pos: "noun", vi: "kế hoạch", ex: "What are your plans for the weekend?", exvi: "Bạn có kế hoạch gì cho cuối tuần?" },
    { w: "tomorrow", us: "/təˈmɑːroʊ/", uk: "/təˈmɒrəʊ/", syl: ["to", "mor", "row"], st: 1, pos: "adverb", vi: "ngày mai", ex: "I'm going to study tomorrow morning.", exvi: "Sáng mai mình sẽ học bài." },
    { w: "invite", us: "/ɪnˈvaɪt/", uk: "/ɪnˈvaɪt/", syl: ["in", "vite"], st: 1, pos: "verb", vi: "mời", ex: "Thanks for inviting me.", exvi: "Cảm ơn bạn đã mời mình." },
    { w: "maybe", us: "/ˈmeɪbi/", uk: "/ˈmeɪbi/", syl: ["may", "be"], st: 0, pos: "adverb", vi: "có lẽ", ex: "Maybe next time.", exvi: "Có lẽ để lần sau." }
  ],
  steps: [
    { t: "pattern", title: "Going to and invitations", rule: "be going to + động từ: dự định đã có. Mời: Would you like to …? / How about + V-ing? Nhận lời: I'd love to. Từ chối: Sorry, I can't. I'm …",
      vi: "Từ chối trong tiếng Anh thường có ba phần: cảm ơn hoặc xin lỗi, lý do, đề xuất khác.",
      ex: [["I'm going to see a film.", "Mình định đi xem phim."], ["Would you like to come?", "Bạn có muốn đi cùng không?"], ["I'd love to, but I'm busy. How about Sunday?", "Mình rất muốn, nhưng mình bận. Chủ nhật được không?"]],
      pit: [["Tomorrow I will to go.", "Tomorrow I'm going to go.", "Không có to sau will."], ["How about go for coffee?", "How about going for coffee?", "Sau how about là V-ing."]] },
    { t: "listen", k: "listening", title: "Are you free?",
      who: { A: "Lan", B: "James" },
      lines: [
        ["A", "Are you free on Saturday?", "Thứ Bảy bạn rảnh không?"],
        ["B", "Maybe. Why?", "Có thể. Sao vậy?"],
        ["A", "I'm going to see a film. Would you like to come?", "Mình định đi xem phim. Bạn muốn đi cùng không?"],
        ["B", "I'd love to, but I'm going to study in the morning. How about the evening?", "Mình rất muốn, nhưng buổi sáng mình phải học. Buổi tối được không?"],
        ["A", "Sure. Let's meet at seven.", "Được. Hẹn bảy giờ nhé."]
      ],
      qs: [
        { q: "What is James going to do on Saturday morning?", opts: ["See a film", "Study", "Work"], a: 1, why: "I'm going to study in the morning." },
        { q: "When will they meet?", opts: ["At seven in the evening", "In the morning", "On Sunday"], a: 0, why: "How about the evening? – Let's meet at seven." }
      ] },
    { t: "cloze", k: "grammar", s: "I'm going ___ visit my parents.", opts: ["to", "for", "–"], a: 0, why: "be going to + động từ." },
    { t: "cloze", k: "grammar", s: "How about ___ coffee after class?", type: true, a: ["having", "getting"], why: "How about + V-ing." },
    { t: "order", k: "grammar", vi: "Bạn có muốn đi cùng không?", tiles: ["Would", "you", "like", "to", "come?"] },
    { t: "dict", k: "listening", s: "Sorry, I can't. I'm busy tomorrow.", vi: "Xin lỗi, mình không đi được. Mai mình bận." },
    { t: "pairs", set: "i-ee" },
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write a short message about your plans for tomorrow. Include a time, an activity, and a polite change or suggestion.", "vi": "Viết một tin nhắn ngắn về kế hoạch ngày mai. Có thời gian, hoạt động và một đề nghị hoặc thay đổi lịch sự.", "minWords": 4, "maxWords": 80, "model": "Are you free tomorrow evening? I’m planning to study at seven. Could we meet on Friday instead?", "kw": ["tomorrow", "plan", "meet", "free", "could", "another"]},
    { t: "speak", title: "Say no nicely", prompt: "A friend says: Would you like to have dinner tomorrow? Say no politely, give a reason and suggest another day.",
      vi: "Bạn bè mời ăn tối ngày mai. Từ chối lịch sự, nêu lý do và gợi ý ngày khác.",
      models: ["Thanks for inviting me, but I can't.", "I'm going to work late tomorrow.", "How about Friday?"],
      kw: [["thanks", "thank you", "sorry", "i'd love to"], ["going to", "busy", "work", "study"], ["how about", "what about", "maybe", "another"]], labels: ["mở đầu lịch sự", "lý do", "đề xuất khác"] }
  ]
}
];
