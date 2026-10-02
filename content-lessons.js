/* ============================================================
   NỘI DUNG BÀI HỌC: 12 bài học (phổ thông và y khoa), ca bệnh ảo, hình vị, 10 tình huống phòng khám sàng lọc.
   Gộp từ: content-general.js, content-medical.js, content-extra.js, content-clinic-screen.js.
   Mỗi phần bắt đầu bằng dòng "===== file: ... =====".
   ============================================================ */

/* ===== file: content-general.js ===== */
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
    { t: "cloze", k: "grammar", s: "I ___ a medical student.", opts: ["am", "is", "are"], a: 0, why: "Chủ ngữ I đi với am." },
    { t: "cloze", k: "grammar", s: "She ___ from Japan.", opts: ["am", "is", "are"], a: 1, why: "He / she / it đi với is." },
    { t: "order", k: "grammar", vi: "Bạn đến từ đâu?", tiles: ["Where", "are", "you", "from?"] },
    { t: "dict", k: "listening", s: "Nice to meet you.", vi: "Rất vui được gặp bạn." },
    { t: "pairs", set: "finals" },
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
    { t: "speak", title: "Say no nicely", prompt: "A friend says: Would you like to have dinner tomorrow? Say no politely, give a reason and suggest another day.",
      vi: "Bạn bè mời ăn tối ngày mai. Từ chối lịch sự, nêu lý do và gợi ý ngày khác.",
      models: ["Thanks for inviting me, but I can't.", "I'm going to work late tomorrow.", "How about Friday?"],
      kw: [["thanks", "thank you", "sorry", "i'd love to"], ["going to", "busy", "work", "study"], ["how about", "what about", "maybe", "another"]], labels: ["mở đầu lịch sự", "lý do", "đề xuất khác"] }
  ]
}
];


/* ===== file: content-medical.js ===== */
/* ============================================================
   CONTENT · Medical English track
   Đi từ phía bệnh nhân (M1) sang phía bác sĩ (M2–M6), bám khung
   hỏi bệnh SOCRATES và tiêu chí giao tiếp lâm sàng kiểu OET.
   ============================================================ */
const MEDICAL = [
{
  id: "M1", track: "med", level: "A1", min: 15,
  title: "Describing symptoms", vi: "Mô tả triệu chứng",
  can: "Nói mình bị gì, chỗ nào đau, và thuật lại triệu chứng của người khác.",
  words: [
    { w: "headache", us: "/ˈhedeɪk/", uk: "/ˈhedeɪk/", syl: ["head", "ache"], st: 0, pos: "noun", vi: "đau đầu", ex: "I have a headache.", exvi: "Tôi bị đau đầu.", parts: [["head", "đầu"], ["ache", "cơn đau âm ỉ"]], tip: "ache đọc /eɪk/, âm /k/ cuối phải bật ra rõ." },
    { w: "fever", us: "/ˈfiːvɚ/", uk: "/ˈfiːvə/", syl: ["fe", "ver"], st: 0, pos: "noun", vi: "sốt", ex: "She has a high fever.", exvi: "Cô ấy sốt cao." },
    { w: "cough", us: "/kɑːf/", uk: "/kɒf/", syl: ["cough"], st: 0, pos: "noun / verb", vi: "ho", ex: "I have a dry cough.", exvi: "Tôi bị ho khan.", tip: "gh ở đây đọc /f/. Người Việt hay bỏ mất âm /f/ cuối." },
    { w: "sore throat", us: "/ˌsɔːr ˈθroʊt/", uk: "/ˌsɔː ˈθrəʊt/", syl: ["sore", "throat"], st: 1, pos: "noun", vi: "đau họng", ex: "I have a sore throat.", exvi: "Tôi bị đau họng." },
    { w: "hurt", us: "/hɝːt/", uk: "/hɜːt/", syl: ["hurt"], st: 0, pos: "verb", vi: "đau (bộ phận nào đó)", ex: "My back hurts.", exvi: "Lưng tôi đau." },
    { w: "dizzy", us: "/ˈdɪzi/", uk: "/ˈdɪzi/", syl: ["diz", "zy"], st: 0, pos: "adjective", vi: "chóng mặt", ex: "I feel dizzy when I stand up.", exvi: "Tôi thấy chóng mặt khi đứng dậy.", tip: "Đi với feel: I feel dizzy. Không nói I have dizzy." }
  ],
  steps: [
    { t: "pattern", title: "Have + symptom, body part + hurts", rule: "I have a headache / a cough / a fever / a sore throat. Không có a: back pain, diarrhoea, nausea. Chỉ chỗ đau: My throat hurts. It hurts here.",
      vi: "Chữ 'bị' trong tiếng Việt không dịch thành be. Ngôi thứ ba dùng has: She has a cough.",
      ex: [["I have a headache and a cough.", "Tôi bị đau đầu và ho."], ["She has a sore throat.", "Cô ấy bị đau họng."], ["My stomach hurts.", "Tôi đau bụng."], ["Where does it hurt?", "Đau ở đâu?"]],
      pit: [["I am headache.", "I have a headache.", "'Bị' không phải là be."], ["I have a back pain.", "I have back pain.", "Pain (đau nói chung) thường không đi với a."], ["She have a fever.", "She has a fever.", "Ngôi thứ ba: has."]] },
    { t: "listen", k: "listening", title: "In the clinic",
      who: { D: "Doctor", P: "Patient" },
      lines: [
        ["D", "Hello. What seems to be the problem?", "Chào anh. Anh bị làm sao?"],
        ["P", "I don't feel well. I have a headache and a cough.", "Tôi thấy không khỏe. Tôi bị đau đầu và ho."],
        ["D", "Do you have a fever?", "Anh có sốt không?"],
        ["P", "Yes, I do. And my throat hurts.", "Có. Và họng tôi đau."],
        ["D", "I see. Do you feel dizzy?", "Tôi hiểu. Anh có thấy chóng mặt không?"],
        ["P", "No, I don't.", "Không."]
      ],
      qs: [
        { q: "What problems does the patient have?", opts: ["A headache, a cough, a fever and a sore throat", "A stomachache and back pain", "Only a fever and dizziness"], a: 0, why: "Bệnh nhân nói có headache, cough, fever và throat hurts." },
        { q: "Does the patient feel dizzy?", opts: ["Yes, he does.", "No, he doesn't."], a: 1, why: "Do you feel dizzy? – No, I don't." }
      ] },
    { t: "read", k: "reading", title: "A short case",
      text: "Nam is 21. He doesn't feel well today. He has a headache and a dry cough. He also has a fever, but his throat doesn't hurt.",
      vi: "Nam 21 tuổi. Hôm nay cậu ấy thấy không khỏe. Cậu bị đau đầu và ho khan. Cậu cũng sốt nhưng không đau họng.",
      qs: [
        { q: "Which symptoms does Nam have?", opts: ["Headache, dry cough and fever", "Headache and sore throat", "Only a fever"], a: 0, why: "…a headache and a dry cough. He also has a fever." },
        { q: "Does Nam have a sore throat?", opts: ["Yes", "No"], a: 1, why: "…his throat doesn't hurt." }
      ] },
    { t: "cloze", k: "grammar", s: "She ___ a sore throat.", opts: ["have", "has", "is"], a: 1, why: "She + has." },
    { t: "cloze", k: "grammar", s: "I have ___ back pain.", opts: ["a", "an", "(không có mạo từ)"], a: 2, why: "Back pain là danh từ không đếm được: I have back pain." },
    { t: "order", k: "grammar", vi: "Đau ở đâu?", tiles: ["Where", "does", "it", "hurt?"] },
    { t: "dict", k: "listening", s: "I have a headache and a sore throat.", vi: "Tôi bị đau đầu và đau họng." },
    { t: "pairs", set: "th-t" },
    { t: "speak", title: "Tell someone else", prompt: "Mai has a headache and a sore throat. She also has a cough. Tell the doctor what is wrong with Mai.",
      vi: "Thuật lại cho bác sĩ tình trạng của Mai (dùng she has).",
      models: ["Mai isn't feeling well.", "She has a headache and a sore throat.", "She also has a cough."],
      kw: [["she has", "she's got", "mai has"], ["headache"], ["throat"], ["cough"]], labels: ["she has", "headache", "sore throat", "cough"] }
  ]
},
{
  id: "M2", track: "med", level: "A2", min: 18, pre: ["M1"],
  title: "Opening the consultation", vi: "Mở đầu buổi khám",
  can: "Chào bệnh nhân, giới thiệu vai trò, xác nhận danh tính và hỏi lý do đến khám bằng câu hỏi mở.",
  words: [
    { w: "patient", us: "/ˈpeɪʃənt/", uk: "/ˈpeɪʃənt/", syl: ["pa", "tient"], st: 0, pos: "noun", vi: "bệnh nhân", ex: "The patient is waiting in room three.", exvi: "Bệnh nhân đang chờ ở phòng số ba.", tip: "Tính từ patient nghĩa là kiên nhẫn." },
    { w: "appointment", us: "/əˈpɔɪntmənt/", uk: "/əˈpɔɪntmənt/", syl: ["ap", "point", "ment"], st: 1, pos: "noun", vi: "lịch hẹn", ex: "I have an appointment at ten.", exvi: "Tôi có lịch hẹn lúc mười giờ." },
    { w: "date of birth", us: "/ˌdeɪt əv ˈbɝːθ/", uk: "/ˌdeɪt əv ˈbɜːθ/", syl: ["date", "of", "birth"], st: 2, pos: "noun", vi: "ngày sinh", ex: "Could you confirm your date of birth?", exvi: "Anh/chị xác nhận ngày sinh giúp tôi nhé?" },
    { w: "symptom", us: "/ˈsɪmptəm/", uk: "/ˈsɪmptəm/", syl: ["symp", "tom"], st: 0, pos: "noun", vi: "triệu chứng", ex: "What symptoms have you noticed?", exvi: "Anh/chị đã thấy những triệu chứng gì?" },
    { w: "worried", us: "/ˈwɝːid/", uk: "/ˈwʌrid/", syl: ["wor", "ried"], st: 0, pos: "adjective", vi: "lo lắng", ex: "Is there anything you're worried about?", exvi: "Có điều gì khiến anh/chị lo không?" },
    { w: "take a seat", us: "/ˌteɪk ə ˈsiːt/", uk: "/ˌteɪk ə ˈsiːt/", syl: ["take", "a", "seat"], st: 2, pos: "phrase", vi: "mời ngồi", ex: "Please take a seat.", exvi: "Mời anh/chị ngồi.", tip: "Lịch sự hơn Sit down." }
  ],
  steps: [
    { t: "pattern", title: "Open, then listen", rule: "Chào + tên + vai trò → xác nhận danh tính → câu hỏi mở. Câu hỏi mở bắt đầu bằng What, How, Tell me about. Câu hỏi đóng bắt đầu bằng Do, Is, Have và chỉ nhận yes/no.",
      vi: "Mở đầu bằng câu hỏi mở để bệnh nhân tự kể. Câu hỏi đóng dùng sau, khi cần kiểm tra chi tiết cụ thể.",
      ex: [["Good morning. I'm Dr Khoi, one of the junior doctors.", "Chào buổi sáng. Tôi là bác sĩ Khôi, bác sĩ nội trú."], ["Could you tell me your full name and date of birth, please?", "Anh/chị cho tôi biết họ tên và ngày sinh nhé?"], ["What brings you in today?", "Hôm nay anh/chị đến khám vì chuyện gì?"], ["Tell me more about that.", "Anh/chị kể thêm cho tôi nghe."]],
      pit: [["What's your problem?", "What brings you in today?", "Nghe cộc lốc, dễ gây khó chịu."], ["Sit down.", "Please take a seat.", "Câu mệnh lệnh trống không thiếu lịch sự."]] },
    { t: "listen", k: "listening", title: "First minute",
      who: { D: "Dr Khoi", P: "Ms Miller" },
      lines: [
        ["D", "Good morning. I'm Dr Khoi, one of the junior doctors. Please take a seat.", "Chào buổi sáng. Tôi là bác sĩ Khôi, bác sĩ nội trú. Mời chị ngồi."],
        ["P", "Thank you.", "Cảm ơn bác sĩ."],
        ["D", "Could you tell me your full name and date of birth, please?", "Chị cho tôi biết họ tên và ngày sinh nhé?"],
        ["P", "It's Sarah Miller. The twelfth of March, nineteen ninety.", "Sarah Miller. Ngày 12 tháng 3 năm 1990."],
        ["D", "Thank you, Ms Miller. What brings you in today?", "Cảm ơn chị Miller. Hôm nay chị đến khám vì chuyện gì?"],
        ["P", "I've had a bad headache for three days, and I'm a bit worried.", "Tôi bị đau đầu nhiều ba ngày nay và hơi lo."],
        ["D", "I'm sorry to hear that. Let's talk about it.", "Tôi rất tiếc. Mình cùng nói về chuyện đó nhé."]
      ],
      qs: [
        { q: "What is the patient's main problem?", opts: ["A headache for three days", "A cough for three days", "She missed an appointment"], a: 0, why: "I've had a bad headache for three days." },
        { q: "How does the doctor respond to her worry?", opts: ["Don't worry.", "I'm sorry to hear that. Let's talk about it.", "That's normal."], a: 1, why: "Thể hiện đồng cảm rồi mời bệnh nhân kể tiếp." }
      ] },
    { t: "mcq", k: "clinical", q: "Which is the best way to start after greeting the patient?", opts: ["What's your problem?", "How can I help you today?", "Why are you here?"], a: 1, why: "Câu hỏi mở, lịch sự, để bệnh nhân tự kể." },
    { t: "classify", k: "clinical", title: "Open or closed?", q: "Đây là câu hỏi mở hay đóng?",
      opts: ["Open", "Closed"],
      items: [["What brings you in today?", 0], ["Do you have a fever?", 1], ["Tell me more about the pain.", 0], ["Is it worse at night?", 1], ["How has it affected your work?", 0]],
      why: "Câu hỏi mở cho bệnh nhân kể tự do. Câu hỏi đóng chỉ nhận có hoặc không." },
    { t: "order", k: "grammar", vi: "Hôm nay anh/chị đến khám vì chuyện gì?", tiles: ["What", "brings", "you", "in", "today?"] },
    { t: "dict", k: "listening", s: "Could you tell me your full name and date of birth, please?", vi: "Anh/chị cho tôi biết họ tên và ngày sinh nhé?" },
    { t: "mcq", k: "pron", q: "Which syllable is stressed in appointment?", opts: ["AP-point-ment", "ap-POINT-ment", "ap-point-MENT"], a: 1, why: "ap-POINT-ment /əˈpɔɪntmənt/. Âm đầu đọc nhẹ /ə/." },
    { t: "speak", title: "Open a consultation", prompt: "Greet the patient, say who you are, check their name and date of birth, then ask an open question.",
      vi: "Chào, giới thiệu vai trò, xác nhận danh tính, rồi hỏi một câu mở.",
      models: ["Good morning. I'm Dr Khoi, one of the doctors.", "Could you tell me your full name and date of birth, please?", "What brings you in today?"],
      kw: [["good morning", "good afternoon", "hello", "hi"], ["i'm dr", "i am dr", "doctor", "i'm doctor"], ["date of birth", "full name", "your name"], ["what brings", "how can i help", "tell me"]], labels: ["chào", "vai trò", "danh tính", "câu hỏi mở"] }
  ]
},
{
  id: "M3", track: "med", level: "A2", min: 18, pre: ["M2"],
  title: "Onset and duration", vi: "Khởi phát và thời gian",
  can: "Hỏi bệnh bắt đầu khi nào, bao lâu rồi, đột ngột hay từ từ, đang đỡ hay nặng lên.",
  words: [
    { w: "onset", us: "/ˈɑːnset/", uk: "/ˈɒnset/", syl: ["on", "set"], st: 0, pos: "noun", vi: "khởi phát", ex: "The onset of the pain was sudden.", exvi: "Cơn đau khởi phát đột ngột.", tip: "Từ dùng trong bệnh án. Với bệnh nhân hãy hỏi: When did it start?" },
    { w: "suddenly", us: "/ˈsʌdənli/", uk: "/ˈsʌdənli/", syl: ["sud", "den", "ly"], st: 0, pos: "adverb", vi: "đột ngột", ex: "The pain started suddenly.", exvi: "Cơn đau bắt đầu đột ngột." },
    { w: "gradually", us: "/ˈɡrædʒuəli/", uk: "/ˈɡrædʒuəli/", syl: ["grad", "u", "al", "ly"], st: 0, pos: "adverb", vi: "từ từ", ex: "It got worse gradually.", exvi: "Nó nặng dần lên." },
    { w: "since", us: "/sɪns/", uk: "/sɪns/", syl: ["since"], st: 0, pos: "preposition", vi: "từ (mốc thời gian)", ex: "I've had this cough since Monday.", exvi: "Tôi bị ho từ thứ Hai.", tip: "since + mốc (since Monday). for + khoảng (for three days)." },
    { w: "worse", us: "/wɝːs/", uk: "/wɜːs/", syl: ["worse"], st: 0, pos: "adjective", vi: "tệ hơn, nặng hơn", ex: "Is it getting better or worse?", exvi: "Nó đang đỡ hơn hay nặng hơn?", tip: "bad → worse → worst." },
    { w: "constant", us: "/ˈkɑːnstənt/", uk: "/ˈkɒnstənt/", syl: ["con", "stant"], st: 0, pos: "adjective", vi: "liên tục", ex: "Is the pain constant, or does it come and go?", exvi: "Đau liên tục hay từng cơn?" }
  ],
  steps: [
    { t: "pattern", title: "When, how long, how", rule: "When did it start? → It started three days ago / on Monday / last night. How long have you had it? → I've had it for three days / since Monday. Did it come on suddenly or gradually? Is it getting better or worse?",
      vi: "Hỏi 'bao lâu rồi' dùng hiện tại hoàn thành như một cụm cố định: How long have you had…? Không cần học hết thì này ngay.",
      ex: [["When did the pain start?", "Cơn đau bắt đầu khi nào?"], ["How long have you had the cough?", "Anh/chị bị ho bao lâu rồi?"], ["I've had it for two weeks.", "Tôi bị hai tuần rồi."], ["Did it start suddenly or gradually?", "Nó bắt đầu đột ngột hay từ từ?"]],
      pit: [["since three days", "for three days", "Khoảng thời gian dùng for."], ["I have it for three days.", "I've had it for three days.", "Cụm 'bị… bao lâu' dùng have had."], ["It started before three days.", "It started three days ago.", "'Cách đây' là ago, đứng sau."]] },
    { t: "listen", k: "listening", title: "Timing the headache",
      who: { D: "Doctor", P: "Patient" },
      lines: [
        ["D", "When did the headache start?", "Cơn đau đầu bắt đầu khi nào?"],
        ["P", "It started on Monday morning.", "Nó bắt đầu sáng thứ Hai."],
        ["D", "Did it start suddenly or gradually?", "Nó đến đột ngột hay từ từ?"],
        ["P", "Gradually. It was mild at first.", "Từ từ. Lúc đầu chỉ hơi đau."],
        ["D", "And is it getting better or worse?", "Hiện đang đỡ hơn hay nặng hơn?"],
        ["P", "Worse, I think. It's almost constant now.", "Tôi nghĩ là nặng hơn. Giờ gần như đau liên tục."]
      ],
      qs: [
        { q: "How did the headache start?", opts: ["Suddenly", "Gradually", "After an accident"], a: 1, why: "Gradually. It was mild at first." },
        { q: "How is it changing?", opts: ["It's getting better.", "It's getting worse.", "It has stopped."], a: 1, why: "Worse, I think. It's almost constant now." }
      ] },
    { t: "cloze", k: "grammar", s: "I've had a cough ___ two weeks.", opts: ["for", "since", "ago"], a: 0, why: "Two weeks là khoảng thời gian → for." },
    { t: "cloze", k: "grammar", s: "The pain has been there ___ last Friday.", opts: ["for", "since", "ago"], a: 1, why: "Last Friday là mốc → since." },
    { t: "cloze", k: "grammar", s: "It started three days ___.", type: true, a: ["ago"], why: "Cách đây: … ago." },
    { t: "order", k: "grammar", vi: "Anh/chị bị bao lâu rồi?", tiles: ["How", "long", "have", "you", "had", "it?"] },
    { t: "dict", k: "listening", s: "It started suddenly two hours ago.", vi: "Nó bắt đầu đột ngột cách đây hai giờ." },
    { t: "pairs", set: "finals" },
    { t: "speak", title: "Ask about timing", prompt: "Ask a patient three questions about when their cough started and how it is changing.",
      vi: "Hỏi bệnh nhân ba câu về thời điểm bắt đầu và diễn tiến của cơn ho.",
      models: ["When did the cough start?", "How long have you had it?", "Is it getting better or worse?"],
      kw: [["when did", "when"], ["how long"], ["better or worse", "getting worse", "getting better", "suddenly", "gradually"]], labels: ["when", "how long", "diễn tiến"] }
  ]
},
{
  id: "M4", track: "med", level: "A2", min: 20, pre: ["M3"],
  title: "Describing pain: SOCRATES", vi: "Khai thác cơn đau theo SOCRATES",
  can: "Hỏi đủ 8 khía cạnh của cơn đau và hiểu bệnh nhân mô tả tính chất đau.",
  words: [
    { w: "sharp", us: "/ʃɑːrp/", uk: "/ʃɑːp/", syl: ["sharp"], st: 0, pos: "adjective", vi: "nhói, sắc", ex: "I felt a sharp pain in my side.", exvi: "Tôi thấy đau nhói ở bên hông." },
    { w: "dull", us: "/dʌl/", uk: "/dʌl/", syl: ["dull"], st: 0, pos: "adjective", vi: "âm ỉ", ex: "It's a dull ache in my lower back.", exvi: "Đó là cơn đau âm ỉ ở thắt lưng." },
    { w: "burning", us: "/ˈbɝːnɪŋ/", uk: "/ˈbɜːnɪŋ/", syl: ["burn", "ing"], st: 0, pos: "adjective", vi: "nóng rát", ex: "I have a burning feeling in my stomach.", exvi: "Tôi thấy nóng rát ở dạ dày." },
    { w: "throbbing", us: "/ˈθrɑːbɪŋ/", uk: "/ˈθrɒbɪŋ/", syl: ["throb", "bing"], st: 0, pos: "adjective", vi: "đau giật theo nhịp", ex: "A migraine often causes a throbbing headache.", exvi: "Đau nửa đầu thường gây đau giật theo nhịp mạch." },
    { w: "spread", us: "/spred/", uk: "/spred/", syl: ["spread"], st: 0, pos: "verb", vi: "lan ra", ex: "Does the pain spread to your arm?", exvi: "Cơn đau có lan ra cánh tay không?", tip: "Thuật ngữ trong bệnh án: radiate /ˈreɪdieɪt/." },
    { w: "severe", us: "/səˈvɪr/", uk: "/sɪˈvɪə/", syl: ["se", "vere"], st: 1, pos: "adjective", vi: "dữ dội, nặng", ex: "The pain is severe at night.", exvi: "Cơn đau dữ dội về đêm.", tip: "mild – moderate – severe: nhẹ – vừa – nặng." }
  ],
  steps: [
    { t: "pattern", title: "SOCRATES in plain English", rule: "Site: Where exactly is the pain?\nOnset: When did it start?\nCharacter: What does it feel like?\nRadiation: Does it spread anywhere?\nAssociations: Have you noticed anything else?\nTime course: Does it come and go?\nExacerbating / relieving: Does anything make it better or worse?\nSeverity: On a scale of 0 to 10, how bad is it?",
      vi: "SOCRATES là khung nhớ để không bỏ sót. Khi nói với bệnh nhân, dùng từ đời thường, không nói tên khung.",
      ex: [["Where exactly is the pain?", "Chính xác là đau ở đâu?"], ["What does the pain feel like?", "Cơn đau có cảm giác thế nào?"], ["Does anything make it better or worse?", "Có gì làm đỡ hoặc nặng hơn không?"], ["On a scale of zero to ten, how bad is it?", "Trên thang 0 đến 10, đau mức nào?"]],
      pit: [["What is the character of the pain?", "What does the pain feel like?", "Character là từ trong bệnh án, bệnh nhân khó hiểu."], ["How much pain?", "How bad is the pain?", "Câu thiếu cấu trúc, nghe cụt."]] },
    { t: "listen", k: "listening", title: "Stomach pain",
      who: { D: "Doctor", P: "Patient" },
      lines: [
        ["D", "Where exactly is the pain?", "Chính xác là đau ở đâu?"],
        ["P", "Here, in the middle of my stomach.", "Ở đây, giữa bụng."],
        ["D", "What does it feel like?", "Cảm giác thế nào?"],
        ["P", "It's a burning pain.", "Đau nóng rát."],
        ["D", "Does it spread anywhere?", "Có lan đi đâu không?"],
        ["P", "Sometimes it goes up to my chest.", "Đôi khi lan lên ngực."],
        ["D", "On a scale of zero to ten, how bad is it?", "Trên thang 0 đến 10, đau mức nào?"],
        ["P", "About six.", "Khoảng sáu."],
        ["D", "Does anything make it better or worse?", "Có gì làm đỡ hoặc nặng hơn không?"],
        ["P", "It's worse after spicy food. Milk makes it a little better.", "Ăn cay thì nặng hơn. Uống sữa thì đỡ một chút."]
      ],
      qs: [
        { q: "What does the pain feel like?", opts: ["Sharp", "Burning", "Throbbing"], a: 1, why: "It's a burning pain." },
        { q: "How severe is the pain?", opts: ["3 out of 10", "6 out of 10", "9 out of 10"], a: 1, why: "About six." },
        { q: "What makes it worse?", opts: ["Milk", "Spicy food", "Lying down"], a: 1, why: "It's worse after spicy food." }
      ] },
    { t: "classify", k: "clinical", title: "Match the SOCRATES letter", q: "Câu hỏi này thuộc chữ nào?",
      opts: ["Site", "Character", "Radiation", "Severity"],
      items: [["Does the pain go into your back?", 2], ["Can you point to where it hurts?", 0], ["Is it sharp or dull?", 1], ["How bad is it, from 0 to 10?", 3]],
      why: "Radiation = lan. Site = vị trí. Character = tính chất. Severity = mức độ." },
    { t: "cloze", k: "vocab", s: "Does the pain ___ to your left arm?", opts: ["spread", "hurt", "start"], a: 0, why: "spread to = lan tới." },
    { t: "order", k: "grammar", vi: "Cơn đau có cảm giác thế nào?", tiles: ["What", "does", "the", "pain", "feel", "like?"] },
    { t: "dict", k: "listening", s: "On a scale of zero to ten, how bad is the pain?", vi: "Trên thang 0 đến 10, cơn đau ở mức nào?" },
    { t: "pairs", set: "sh-s" },
    { t: "speak", title: "Four SOCRATES questions", prompt: "A patient says: I have a pain in my knee. Ask four questions: where, what it feels like, what makes it worse, and how bad it is.",
      vi: "Bệnh nhân đau gối. Hỏi bốn câu: vị trí, tính chất, yếu tố làm nặng, mức độ.",
      models: ["Where exactly is the pain?", "What does it feel like?", "Does anything make it worse?", "On a scale of zero to ten, how bad is it?"],
      kw: [["where"], ["feel like", "sharp", "dull", "describe"], ["worse", "better"], ["scale", "how bad", "out of ten", "severe"]], labels: ["vị trí", "tính chất", "yếu tố", "mức độ"] }
  ]
},
{
  id: "M5", track: "med", level: "A2", min: 20, pre: ["M1"],
  title: "Building medical words", vi: "Ghép thuật ngữ y khoa",
  can: "Tách thuật ngữ thành tiền tố, gốc, hậu tố để đoán nghĩa, và đọc đúng trọng âm.",
  words: [
    { w: "gastritis", us: "/ɡæˈstraɪtɪs/", uk: "/ɡæˈstraɪtɪs/", syl: ["gas", "tri", "tis"], st: 1, pos: "noun", vi: "viêm dạ dày", ex: "Gastritis can cause a burning pain in the stomach.", exvi: "Viêm dạ dày có thể gây đau rát vùng thượng vị.", parts: [["gastr", "dạ dày"], ["itis", "viêm"]], lay: "stomach inflammation" },
    { w: "cardiology", us: "/ˌkɑːrdiˈɑːlədʒi/", uk: "/ˌkɑːdiˈɒlədʒi/", syl: ["car", "di", "ol", "o", "gy"], st: 2, pos: "noun", vi: "tim mạch học", ex: "She works in cardiology.", exvi: "Cô ấy làm ở khoa tim mạch.", parts: [["cardi", "tim"], ["o", "nguyên âm nối"], ["logy", "môn học"]], lay: "the study of the heart" },
    { w: "neuralgia", us: "/nʊˈrældʒə/", uk: "/njʊəˈrældʒə/", syl: ["neu", "ral", "gia"], st: 1, pos: "noun", vi: "đau dây thần kinh", ex: "He has neuralgia in his face.", exvi: "Anh ấy bị đau dây thần kinh ở mặt.", parts: [["neur", "thần kinh"], ["algia", "đau"]], lay: "nerve pain" },
    { w: "hepatitis", us: "/ˌhepəˈtaɪtɪs/", uk: "/ˌhepəˈtaɪtɪs/", syl: ["hep", "a", "ti", "tis"], st: 2, pos: "noun", vi: "viêm gan", ex: "Hepatitis B is a liver infection.", exvi: "Viêm gan B là bệnh nhiễm trùng ở gan.", parts: [["hepat", "gan"], ["itis", "viêm"]], lay: "liver inflammation" },
    { w: "tonsillectomy", us: "/ˌtɑːnsəˈlektəmi/", uk: "/ˌtɒnsəˈlektəmi/", syl: ["ton", "sil", "lec", "to", "my"], st: 2, pos: "noun", vi: "cắt amiđan", ex: "She had a tonsillectomy as a child.", exvi: "Cô ấy đã cắt amiđan khi còn nhỏ.", parts: [["tonsill", "amiđan"], ["ectomy", "cắt bỏ"]], lay: "an operation to take out the tonsils" },
    { w: "tachycardia", us: "/ˌtækɪˈkɑːrdiə/", uk: "/ˌtækɪˈkɑːdiə/", syl: ["tach", "y", "car", "di", "a"], st: 2, pos: "noun", vi: "nhịp tim nhanh", ex: "Tachycardia means a fast heart rate.", exvi: "Tachycardia nghĩa là tim đập nhanh.", parts: [["tachy", "nhanh"], ["card", "tim"], ["ia", "tình trạng"]], lay: "a fast heartbeat" }
  ],
  steps: [
    { t: "pattern", title: "Prefix + root + suffix", rule: "Tiền tố (tachy- nhanh) + gốc (card tim) + hậu tố (-itis viêm, -algia đau, -ectomy cắt bỏ, -logy môn học, -scopy soi). Nguyên âm nối -o- dùng khi hậu tố bắt đầu bằng phụ âm: cardi-o-logy.",
      vi: "Hậu tố thường quyết định trọng âm: -itis nhấn vào 'i' (gas-TRI-tis), -logy nhấn âm ngay trước (car-di-OL-o-gy), -ectomy nhấn 'ec' (ton-sil-LEC-to-my).",
      ex: [["gastr + itis → gastritis", "viêm dạ dày"], ["arthr + algia → arthralgia", "đau khớp"], ["gastr + o + scopy → gastroscopy", "nội soi dạ dày"], ["brady + card + ia → bradycardia", "nhịp tim chậm"]],
      pit: [["You have gastritis.", "The lining of your stomach is inflamed.", "Với bệnh nhân, giải thích bằng từ đời thường."], ["CAR-di-o-lo-gy", "car-di-OL-o-gy", "Trọng âm rơi vào âm trước -logy."]] },
    { t: "read", k: "reading", title: "Reading a term",
      text: "Many medical words are built from smaller parts. Hepat means liver, and -itis means inflammation, so hepatitis is inflammation of the liver. Cardi means heart. Tachy means fast, and brady means slow. So tachycardia is a fast heart rate, and bradycardia is a slow one.",
      vi: "Nhiều từ y khoa được ghép từ phần nhỏ. Hepat là gan, -itis là viêm, nên hepatitis là viêm gan. Cardi là tim. Tachy là nhanh, brady là chậm. Vậy tachycardia là nhịp nhanh, bradycardia là nhịp chậm.",
      qs: [
        { q: "What does bradycardia mean?", opts: ["A fast heart rate", "A slow heart rate", "Heart inflammation"], a: 1, why: "brady = slow, card = heart." },
        { q: "Which part means inflammation?", opts: ["hepat", "-itis", "tachy"], a: 1, why: "-itis = inflammation." }
      ] },
    { t: "order", k: "vocab", vi: "Ghép thuật ngữ: đau khớp", tiles: ["arthr", "algia"], extra: ["itis", "cardi"], join: "" },
    { t: "order", k: "vocab", vi: "Ghép thuật ngữ: nội soi dạ dày", tiles: ["gastr", "o", "scopy"], extra: ["ectomy", "hepat"], join: "" },
    { t: "mcq", k: "vocab", q: "A nephrectomy is…", opts: ["inflammation of the kidney", "surgical removal of a kidney", "kidney pain"], a: 1, why: "nephr = thận, -ectomy = cắt bỏ." },
    { t: "mcq", k: "pron", q: "Where is the stress in cardiology?", opts: ["CAR-di-ol-o-gy", "car-DI-ol-o-gy", "car-di-OL-o-gy"], a: 2, why: "Với -logy, trọng âm rơi vào âm ngay trước: car-di-OL-o-gy." },
    { t: "mcq", k: "clinical", q: "Which explanation is best for a patient?", opts: ["You have hepatitis secondary to viral aetiology.", "Your liver is inflamed. It's probably caused by a virus.", "It's a liver thing."], a: 1, why: "Rõ ràng, dùng từ đời thường, vẫn chính xác." },
    { t: "dict", k: "listening", s: "Tachycardia means a fast heart rate.", vi: "Tachycardia nghĩa là tim đập nhanh." },
    { t: "speak", title: "Explain a term", prompt: "Explain the word gastritis to a patient in simple English. Then say one symptom it can cause.",
      vi: "Giải thích từ gastritis cho bệnh nhân bằng tiếng Anh đơn giản, rồi nêu một triệu chứng.",
      models: ["Gastritis means the lining of your stomach is inflamed.", "It can cause a burning pain in your stomach."],
      kw: [["stomach"], ["inflamed", "inflammation", "irritated", "swollen", "sore"], ["pain", "burning", "sick", "nausea"]], labels: ["stomach", "viêm", "triệu chứng"] }
  ]
},
{
  id: "M6", track: "med", level: "A2", min: 20, pre: ["M4"],
  title: "Explaining and advising", vi: "Giải thích và dặn dò",
  can: "Dặn cách dùng thuốc, đưa lời khuyên, tránh thuật ngữ và kiểm tra bệnh nhân đã hiểu (teach-back).",
  words: [
    { w: "prescribe", us: "/prɪˈskraɪb/", uk: "/prɪˈskraɪb/", syl: ["pre", "scribe"], st: 1, pos: "verb", vi: "kê đơn", ex: "I'm going to prescribe some tablets.", exvi: "Tôi sẽ kê cho anh/chị một ít thuốc viên." },
    { w: "side effect", us: "/ˈsaɪd ɪˌfekt/", uk: "/ˈsaɪd ɪˌfekt/", syl: ["side", "ef", "fect"], st: 0, pos: "noun", vi: "tác dụng phụ", ex: "Are there any side effects?", exvi: "Có tác dụng phụ nào không?" },
    { w: "twice a day", us: "/ˌtwaɪs ə ˈdeɪ/", uk: "/ˌtwaɪs ə ˈdeɪ/", syl: ["twice", "a", "day"], st: 2, pos: "phrase", vi: "ngày hai lần", ex: "Take one tablet twice a day.", exvi: "Uống một viên, ngày hai lần.", tip: "once – twice – three times a day." },
    { w: "avoid", us: "/əˈvɔɪd/", uk: "/əˈvɔɪd/", syl: ["a", "void"], st: 1, pos: "verb", vi: "tránh", ex: "Try to avoid spicy food.", exvi: "Cố gắng tránh đồ cay.", tip: "avoid + V-ing: avoid drinking alcohol." },
    { w: "painkiller", us: "/ˈpeɪnˌkɪlɚ/", uk: "/ˈpeɪnˌkɪlə/", syl: ["pain", "kill", "er"], st: 0, pos: "noun", vi: "thuốc giảm đau", ex: "You can take a painkiller if you need it.", exvi: "Anh/chị có thể uống thuốc giảm đau nếu cần.", tip: "Từ đời thường thay cho analgesic." },
    { w: "follow-up", us: "/ˈfɑːloʊ ʌp/", uk: "/ˈfɒləʊ ʌp/", syl: ["fol", "low", "up"], st: 0, pos: "noun", vi: "tái khám", ex: "Let's book a follow-up in two weeks.", exvi: "Mình đặt lịch tái khám sau hai tuần nhé." }
  ],
  steps: [
    { t: "pattern", title: "Advice, signposting, teach-back", rule: "Lời khuyên: You should… / You need to… / It's important to… / Try to avoid… Dẫn dắt: First… Then… Finally… Kiểm tra hiểu: Just to make sure I explained that clearly, could you tell me how you'll take them?",
      vi: "Teach-back là nhờ bệnh nhân nhắc lại bằng lời của họ. Đó là trách nhiệm của bác sĩ giải thích rõ, không phải bài kiểm tra bệnh nhân.",
      ex: [["You should take one tablet twice a day.", "Anh/chị nên uống một viên, ngày hai lần."], ["It's important to avoid alcohol for now.", "Quan trọng là tạm thời tránh rượu."], ["Your blood pressure is higher than normal.", "Huyết áp của anh/chị cao hơn bình thường."]],
      pit: [["You must to take it.", "You need to take it.", "Không có to sau must."], ["You have hypertension.", "Your blood pressure is higher than it should be.", "Thuật ngữ nên đổi thành từ đời thường."], ["Do you understand?", "Could you tell me how you'll take them?", "Hỏi 'hiểu không' thường chỉ nhận được 'yes'."]] },
    { t: "listen", k: "listening", title: "Giving a plan",
      who: { D: "Doctor", P: "Patient" },
      lines: [
        ["D", "I'm going to prescribe some tablets for your stomach. You should take one tablet twice a day, before breakfast and before dinner.", "Tôi sẽ kê thuốc dạ dày. Anh nên uống một viên ngày hai lần, trước bữa sáng và trước bữa tối."],
        ["P", "Are there any side effects?", "Có tác dụng phụ không?"],
        ["D", "Some people get a mild headache, but it usually goes away. It's also important to avoid spicy food and alcohol for now.", "Một số người hơi đau đầu, nhưng thường tự hết. Anh cũng cần tạm tránh đồ cay và rượu."],
        ["P", "OK.", "Vâng."],
        ["D", "Just to make sure I explained that clearly, could you tell me how you'll take the tablets?", "Để chắc tôi giải thích rõ, anh nhắc lại cách uống giúp tôi nhé?"],
        ["P", "One tablet twice a day, before breakfast and dinner.", "Một viên ngày hai lần, trước bữa sáng và bữa tối."],
        ["D", "Perfect. Let's book a follow-up in two weeks.", "Chính xác. Mình hẹn tái khám sau hai tuần."]
      ],
      qs: [
        { q: "How often should the patient take the tablets?", opts: ["Once a day", "Twice a day", "Three times a day"], a: 1, why: "One tablet twice a day." },
        { q: "What does the doctor do to check understanding?", opts: ["Asks 'Do you understand?'", "Asks the patient to explain the plan back", "Gives a leaflet"], a: 1, why: "Teach-back: could you tell me how you'll take the tablets?" }
      ] },
    { t: "mcq", k: "clinical", q: "Which sentence is best for a patient?", opts: ["You have hypertension.", "Your blood pressure is higher than it should be.", "Your BP is elevated."], a: 1, why: "Từ đời thường, không viết tắt." },
    { t: "cloze", k: "grammar", s: "Try to avoid ___ alcohol for two weeks.", type: true, a: ["drinking"], why: "avoid + V-ing." },
    { t: "cloze", k: "grammar", s: "You ___ take this medicine with food.", opts: ["should", "should to", "must to"], a: 0, why: "should + động từ nguyên mẫu." },
    { t: "order", k: "grammar", vi: "Anh/chị nên uống một viên, ngày hai lần.", tiles: ["You", "should", "take", "one", "tablet", "twice", "a", "day."] },
    { t: "dict", k: "listening", s: "It's important to avoid spicy food.", vi: "Điều quan trọng là tránh đồ cay." },
    { t: "mcq", k: "pron", q: "Where is the stress in prescribe?", opts: ["PRE-scribe", "pre-SCRIBE"], a: 1, why: "pre-SCRIBE /prɪˈskraɪb/. Âm đầu đọc nhẹ /prɪ/." },
    { t: "speak", title: "Give advice and check", prompt: "Tell a patient how to take a painkiller (three times a day, after food), give one piece of advice, and check understanding.",
      vi: "Dặn cách uống thuốc giảm đau (ngày ba lần, sau ăn), thêm một lời khuyên, rồi kiểm tra bệnh nhân hiểu chưa.",
      models: ["You should take one painkiller three times a day, after food.", "Try to rest and drink plenty of water.", "Could you tell me how you'll take them?"],
      kw: [["three times a day", "three times"], ["after food", "after meals", "after eating", "with food"], ["should", "try to", "avoid", "it's important"], ["could you tell me", "can you tell me", "explain back", "how you'll take", "how you will take"]], labels: ["liều", "thời điểm", "lời khuyên", "teach-back"] }
  ]
}
];


/* ===== file: content-extra.js ===== */
/* ============================================================
   CONTENT · Phòng khám ảo (virtual patients)
   Mỗi câu hỏi có: cat (nhóm), q (cách hỏi tốt), a (bệnh nhân trả lời),
   kw (nhóm từ khóa để nhận dạng câu hỏi tự nói/tự gõ), key (bắt buộc).
   bad: cách hỏi chưa phù hợp (thuật ngữ, phán xét, dẫn dắt).
   Nội dung phục vụ học ngôn ngữ, không phải hướng dẫn điều trị.
   ============================================================ */
const SOCRATES_CATS = [
  ["open", "Mở đầu"], ["S", "Site (vị trí)"], ["O", "Onset (khởi phát)"], ["C", "Character (tính chất)"],
  ["R", "Radiation (lan)"], ["A", "Associations (triệu chứng kèm)"], ["T", "Time course (diễn tiến)"],
  ["E", "Exacerbating / relieving (yếu tố)"], ["V", "Severity (mức độ)"], ["RF", "Red flags (dấu hiệu cảnh báo)"],
  ["PMH", "Past history (tiền sử)"], ["DH", "Drugs & allergies (thuốc, dị ứng)"], ["SH", "Social (xã hội)"], ["ICE", "Ideas, concerns, expectations"]
];

const CASES = [
{
  id: "C1", title: "Headache", vi: "Đau đầu", rec: ["M2", "M3", "M4"],
  patient: { name: "Ms Sarah Miller", age: 34, job: "accountant", av: "SM" },
  setting: "General practice clinic",
  task: "Bạn là bác sĩ đa khoa. Chị Miller đến khám vì đau đầu. Hãy khai thác cơn đau theo SOCRATES, sàng lọc dấu hiệu cảnh báo, hỏi tiền sử, thuốc, dị ứng, yếu tố xã hội và tìm hiểu mối lo của chị.",
  cats: SOCRATES_CATS,
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Hello, I'm Dr Khoi. What brings you in today?", a: "Hi, doctor. I've had a headache for three days, and it isn't going away.", kw: [["how can i help", "help you", "bring", "brings", "help", "problem", "wrong", "matter", "come in"]] },
    { id: "s1", cat: "S", key: 1, q: "Where exactly is the headache?", a: "It's all around my head. It feels like a tight band.", kw: [["where", "which part", "point", "location"]] },
    { id: "on1", cat: "O", key: 1, q: "When did it start, and how did it come on?", a: "It started on Monday afternoon at work. It came on slowly.", kw: [["when", "start", "started", "begin", "began", "come on", "how long"]] },
    { id: "c1", cat: "C", key: 1, q: "What does the pain feel like?", a: "It's a dull, pressing pain. It isn't throbbing.", kw: [["feel like", "pain like", "it like", "describe", "kind of", "type of", "sort of", "what is it like"]] },
    { id: "r1", cat: "R", key: 1, q: "Does the pain spread anywhere else?", a: "My neck and shoulders feel tight, but that's all.", kw: [["spread", "radiate", "anywhere else", "move", "go anywhere"]] },
    { id: "a1", cat: "A", key: 1, q: "Have you noticed any other symptoms, like feeling sick or problems with your eyes?", a: "I don't feel sick. My eyes feel tired after a long day at the computer, but my vision is fine.", kw: [["other symptoms", "anything else", "noticed", "sick", "nausea", "vision", "eyes"]] },
    { id: "t1", cat: "T", key: 1, q: "Is it there all the time, or does it come and go?", a: "It's usually better in the morning and worse by the afternoon.", kw: [["all the time", "come and go", "constant", "time of day", "pattern"]] },
    { id: "e1", cat: "E", key: 1, q: "Does anything make it better or worse?", a: "Paracetamol helps a little. Stress at work makes it worse.", kw: [["better", "worse", "relieve", "help it", "trigger"]] },
    { id: "v1", cat: "V", key: 1, q: "On a scale of zero to ten, how bad is the pain?", a: "About five out of ten.", kw: [["scale", "how bad", "severe", "out of ten", "score", "zero to ten"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Is this the worst headache you've ever had?", a: "No. I've had headaches like this before, just not for so long.", kw: [["worst"]] },
    { id: "rf2", cat: "RF", key: 1, q: "Have you had a fever, or does bright light bother your eyes?", a: "No fever, and light doesn't bother me.", kw: [["fever", "temperature", "bright light", "light"]] },
    { id: "rf3", cat: "RF", key: 1, q: "Have you noticed any weakness, numbness or trouble speaking?", a: "No, nothing like that.", kw: [["weak", "weakness", "numb", "numbness", "speaking", "speech", "tingling"]] },
    { id: "p1", cat: "PMH", key: 0, q: "Do you have any medical problems?", a: "No, I'm usually healthy. I sometimes get headaches when I'm stressed.", kw: [["medical problem", "medical condition", "health problem", "conditions", "illness", "history"]] },
    { id: "d1", cat: "DH", key: 1, q: "Are you taking any medicines at the moment?", a: "Only paracetamol. Two tablets, about three times a day since Monday.", kw: [["medicine", "medication", "tablets", "drugs", "taking anything"]] },
    { id: "d2", cat: "DH", key: 1, q: "Are you allergic to any medicines?", a: "No, I'm not allergic to anything.", kw: [["allergic to", "allergic", "allergy", "allergies"]] },
    { id: "sh1", cat: "SH", key: 1, q: "Can you tell me a bit about your work and your sleep?", a: "I'm an accountant. It's our busy season, so I work long hours at the computer. I only sleep about five hours a night.", kw: [["work", "job", "sleep", "stress", "lifestyle"]] },
    { id: "sh2", cat: "SH", key: 0, q: "Do you smoke or drink alcohol?", a: "I don't smoke. I have a glass of wine at the weekend.", kw: [["smoke", "alcohol", "drink"]] },
    { id: "i1", cat: "ICE", key: 1, q: "Is there anything in particular you're worried about?", a: "Honestly, I'm scared it might be a brain tumour. My friend's aunt had one.", kw: [["worried", "worry", "concern", "concerned", "afraid", "scared", "causing", "think it is"]] },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping we could do for you today?", a: "I'd like to know it's nothing serious. And maybe something stronger for the pain.", kw: [["hoping", "hope", "expect", "expecting", "like us to do", "want us", "would you like"]] }
  ],
  bad: [
    { cat: "open", q: "What's your problem?", a: "Um… I have a headache.", why: "Nghe cộc lốc, dễ làm bệnh nhân khó chịu ngay từ đầu.", better: "What brings you in today?" },
    { cat: "RF", q: "Do you have photophobia?", a: "Sorry, I don't know that word.", why: "Thuật ngữ chuyên môn. Bệnh nhân không hiểu.", better: "Does bright light bother your eyes?" },
    { cat: "RF", q: "Any focal neurological deficits?", a: "Focal… what? I'm sorry, I don't understand.", why: "Ngôn ngữ bệnh án, không dành cho bệnh nhân.", better: "Have you noticed any weakness, numbness or trouble speaking?" },
    { cat: "O", q: "Why did you wait three days to come in?", a: "I… I thought it would go away.", why: "Nghe như trách móc, làm hỏng quan hệ.", better: "When did it start, and how did it come on?" },
    { cat: "ICE", q: "Don't worry, it's nothing serious.", a: "Oh… OK.", why: "Trấn an quá sớm khi chưa khai thác xong và bỏ qua mối lo của bệnh nhân.", better: "Is there anything in particular you're worried about?" }
  ],
  summary: {
    scaffold: "Ms Sarah Miller is a …-year-old … who presents with a …-day history of …",
    model: "Ms Sarah Miller is a 34-year-old accountant who presents with a three-day history of a gradual-onset, dull, band-like headache, five out of ten in severity. It is worse in the afternoon and with stress, and partly relieved by paracetamol. There are no red flag features: no fever, no sensitivity to light and no neurological symptoms. She is sleeping about five hours a night. She is worried it might be a brain tumour.",
    kw: [["34", "thirty-four"], ["three-day", "3-day", "three days", "3 days"], ["gradual", "slowly", "slow"], ["dull", "pressing", "band", "tight"], ["five", "5"], ["stress"], ["paracetamol"], ["no fever", "red flag", "neurolog", "no weakness"], ["sleep", "five hours", "5 hours"], ["worried", "tumour", "tumor", "concern"]],
    labels: ["tuổi", "thời gian", "khởi phát", "tính chất", "mức độ", "yếu tố tăng", "thuốc", "cờ đỏ âm tính", "giấc ngủ", "mối lo"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Tension-type headache", "Migraine", "Meningitis", "Subarachnoid haemorrhage"], a: 0,
    why: "Đau âm ỉ như dải băng quanh đầu, khởi phát từ từ, nặng khi stress và thiếu ngủ, không có dấu hiệu cảnh báo → phù hợp đau đầu căng thẳng. Migraine thường đau giật theo nhịp, một bên, kèm buồn nôn hoặc sợ ánh sáng. Viêm màng não có sốt, cứng gáy, sợ ánh sáng. Xuất huyết dưới nhện khởi phát đột ngột, 'đau nhất đời'." },
  explain: { q: "Which explanation is best for Ms Miller?", opts: [
      "You have a tension-type cephalalgia secondary to psychosocial stressors.",
      "From what you've told me, this sounds like a tension headache. It's very common, and nothing you've described suggests a tumour. Stress and short sleep can trigger it.",
      "It's just stress. There's nothing to worry about."], a: 1,
    why: "Dùng từ đời thường, trả lời thẳng vào mối lo 'u não' mà không gạt đi cảm xúc của bệnh nhân." }
},
{
  id: "C2", title: "Stomach pain", vi: "Đau thượng vị", rec: ["M4", "M5"],
  patient: { name: "Mr David Tran", age: 45, job: "taxi driver", av: "DT" },
  setting: "General practice clinic",
  task: "Bạn là bác sĩ đa khoa. Anh Tran đau bụng vài tuần. Hãy khai thác cơn đau, hỏi các dấu hiệu cảnh báo tiêu hóa, thuốc đang dùng, thói quen và điều anh lo lắng.",
  cats: SOCRATES_CATS,
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Good afternoon. How can I help you today?", a: "I've had pain in my stomach for about three weeks.", kw: [["how can i help", "help you", "bring", "brings", "help", "problem", "wrong", "come in"]] },
    { id: "s1", cat: "S", key: 1, q: "Can you show me where the pain is?", a: "Here, just below my ribs, in the middle.", kw: [["where", "show me", "point", "which part"]] },
    { id: "on1", cat: "O", key: 1, q: "When did it start?", a: "About three weeks ago. It came on slowly.", kw: [["when", "start", "started", "begin", "how long"]] },
    { id: "c1", cat: "C", key: 1, q: "What does the pain feel like?", a: "It's a burning pain, like acid.", kw: [["feel like", "pain like", "it like", "describe", "kind of", "type of", "sort of"]] },
    { id: "r1", cat: "R", key: 1, q: "Does it spread anywhere?", a: "Sometimes it goes up into my chest after a big meal.", kw: [["spread", "radiate", "anywhere", "go up", "move"]] },
    { id: "a1", cat: "A", key: 1, q: "Have you had any other symptoms, like feeling sick or bloating?", a: "I feel bloated, and sometimes a little sick, but I haven't vomited.", kw: [["other symptoms", "anything else", "sick", "nausea", "bloat", "bloating"]] },
    { id: "t1", cat: "T", key: 1, q: "Does it come and go, or is it there all the time?", a: "It comes and goes. It's often bad at night and a few hours after eating.", kw: [["come and go", "all the time", "constant", "night", "pattern"]] },
    { id: "e1", cat: "E", key: 1, q: "Does anything make it better or worse?", a: "Spicy food and coffee make it worse. Milk and antacids help for a while.", kw: [["better", "worse", "relieve", "help", "trigger"]] },
    { id: "v1", cat: "V", key: 1, q: "On a scale of zero to ten, how bad is it?", a: "About six, when it's bad.", kw: [["scale", "how bad", "severe", "out of ten", "score"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Have you vomited any blood, or noticed black stools?", a: "No, nothing like that.", kw: [["blood", "black", "stool", "stools", "poo"]] },
    { id: "rf2", cat: "RF", key: 1, q: "Have you lost any weight without trying?", a: "No, my weight is the same.", kw: [["weight"]] },
    { id: "rf3", cat: "RF", key: 1, q: "Do you have any difficulty swallowing?", a: "No, swallowing is fine.", kw: [["swallow", "swallowing"]] },
    { id: "p1", cat: "PMH", key: 0, q: "Do you have any other medical problems?", a: "Only back pain, from driving all day.", kw: [["medical problem", "medical condition", "health problem", "conditions", "history"]] },
    { id: "d1", cat: "DH", key: 1, q: "Are you taking any medicines at the moment?", a: "Yes. I take ibuprofen for my back, usually three times a day.", kw: [["medicine", "medication", "tablets", "drugs", "painkiller", "taking"]] },
    { id: "d2", cat: "DH", key: 1, q: "Are you allergic to any medicines?", a: "Yes, penicillin. It gave me a rash.", kw: [["allergic to", "allergic", "allergy", "allergies"]] },
    { id: "sh1", cat: "SH", key: 1, q: "Do you smoke or drink alcohol?", a: "I smoke about ten cigarettes a day, and I have a few beers most evenings.", kw: [["smoke", "cigarette", "alcohol", "drink", "beer"]] },
    { id: "sh2", cat: "SH", key: 0, q: "What do you do for work?", a: "I'm a taxi driver. I often eat late and very quickly.", kw: [["work", "job", "do for a living"]] },
    { id: "i1", cat: "ICE", key: 1, q: "What do you think might be causing it?", a: "My father had stomach cancer. I'm afraid it's the same thing.", kw: [["causing", "think it is", "worried", "worry", "concern", "afraid"]] },
    { id: "i2", cat: "ICE", key: 1, q: "What would you like us to do today?", a: "I need something to stop the pain. I can't miss work.", kw: [["hoping", "hope", "expect", "like us to do", "want us", "would you like"]] }
  ],
  bad: [
    { cat: "RF", q: "Have you had any haematemesis or melaena?", a: "I'm sorry, I don't know those words.", why: "Thuật ngữ chuyên môn.", better: "Have you vomited any blood, or noticed black stools?" },
    { cat: "RF", q: "Any dysphagia?", a: "Any… what?", why: "Thuật ngữ chuyên môn.", better: "Do you have any difficulty swallowing?" },
    { cat: "SH", q: "You should stop smoking right now. It's very bad for you.", a: "I know, I know…", why: "Khuyên răn khi chưa khai thác xong, nghe như phán xét.", better: "Do you smoke or drink alcohol?" },
    { cat: "E", q: "It's worse after food, isn't it?", a: "Er… yes, I suppose so.", why: "Câu hỏi dẫn dắt, gợi sẵn câu trả lời.", better: "Does anything make it better or worse?" }
  ],
  summary: {
    scaffold: "Mr David Tran is a …-year-old … with a …-week history of …",
    model: "Mr David Tran is a 45-year-old taxi driver with a three-week history of burning epigastric pain, six out of ten, which is worse at night and after spicy food and coffee, and relieved by milk and antacids. He takes ibuprofen three times a day for back pain and is allergic to penicillin. He smokes ten cigarettes a day and drinks alcohol most evenings. There are no red flags: no vomiting of blood, no black stools, no weight loss and no difficulty swallowing. He is worried about stomach cancer because of his father's history.",
    kw: [["45", "forty-five"], ["three-week", "3-week", "three weeks", "3 weeks"], ["burning"], ["epigastric", "upper abdom", "stomach", "below the ribs"], ["six", "6"], ["spicy", "coffee", "night"], ["ibuprofen"], ["penicillin"], ["smok"], ["no blood", "black", "weight", "swallow", "red flag"], ["cancer", "father", "worried"]],
    labels: ["tuổi", "thời gian", "tính chất", "vị trí", "mức độ", "yếu tố tăng", "ibuprofen", "dị ứng", "hút thuốc", "cờ đỏ âm tính", "mối lo"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Gastritis or peptic ulcer, likely linked to ibuprofen", "Acute appendicitis", "Gallstones (biliary colic)", "Heart attack"], a: 0,
    why: "Đau rát thượng vị, liên quan bữa ăn, đỡ khi dùng antacid, dùng ibuprofen kéo dài, hút thuốc và uống rượu → nghĩ tới viêm dạ dày hoặc loét dạ dày tá tràng liên quan NSAID. Viêm ruột thừa đau cấp, dời xuống hố chậu phải. Sỏi mật đau hạ sườn phải sau bữa nhiều mỡ. Đau lan lên ngực thì vẫn phải loại trừ nguyên nhân tim trong thực tế." },
  explain: { q: "Which explanation is best for Mr Tran?", opts: [
      "You've got NSAID-induced peptic ulcer disease.",
      "It sounds like the lining of your stomach is irritated, probably by the ibuprofen. There are no warning signs today, but I understand your worry about your father, so let's talk about a test to look inside your stomach.",
      "It's only gastritis, not cancer. Just stop the ibuprofen."], a: 1,
    why: "Giải thích bằng từ đời thường, nêu nguyên nhân có thể, thừa nhận mối lo và đưa ra hướng tiếp theo cùng bệnh nhân." }
},
{
  id: "C3", title: "Cough and fever", vi: "Ho và sốt", rec: ["M3", "M6"],
  patient: { name: "Mrs Mary Brown", age: 68, job: "retired teacher", av: "MB" },
  setting: "General practice clinic",
  task: "Bạn là bác sĩ đa khoa. Bà Brown bị ho và sốt. Hãy khai thác ho, đờm, khó thở, đau ngực, sốt, dấu hiệu cảnh báo, bệnh nền, thuốc, hoàn cảnh sống và mong muốn của bà.",
  cats: [["open", "Mở đầu"], ["CO", "Cough (ho)"], ["SP", "Sputum (đờm)"], ["BR", "Breathing (thở)"], ["CP", "Chest pain (đau ngực)"], ["FE", "Fever (sốt)"], ["RF", "Red flags (dấu hiệu cảnh báo)"], ["PMH", "Past history (tiền sử)"], ["DH", "Drugs & allergies (thuốc, dị ứng)"], ["SH", "Social (xã hội)"], ["ICE", "Ideas, concerns, expectations"]],
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Good morning, Mrs Brown. How can I help you today?", a: "I've had a bad cough and a fever for four days.", kw: [["how can i help", "help you", "bring", "brings", "help", "problem", "wrong", "come in"]] },
    { id: "co1", cat: "CO", key: 1, q: "When did the cough start?", a: "Four days ago. It started with a sore throat, and then the cough got worse.", kw: [["when", "start", "started", "how long"]] },
    { id: "sp1", cat: "SP", key: 1, q: "Are you coughing anything up?", a: "Yes, thick yellow-green phlegm.", kw: [["coughing up", "anything up", "cough up", "phlegm", "sputum", "mucus", "bring up"]] },
    { id: "sp2", cat: "RF", key: 1, q: "Have you coughed up any blood?", a: "No, no blood.", kw: [["blood"]] },
    { id: "br1", cat: "BR", key: 1, q: "Do you feel short of breath?", a: "Yes, when I climb the stairs. I have to stop halfway.", kw: [["short of breath", "breathless", "breathing", "breath"]] },
    { id: "br2", cat: "BR", key: 0, q: "Are you short of breath when you're resting?", a: "No, only when I walk or climb the stairs.", kw: [["short of breath", "breath", "breathless", "breathing"], ["resting", "at rest", "sitting", "rest"]] },
    { id: "cp1", cat: "CP", key: 1, q: "Do you have any chest pain?", a: "Yes, on the right side. It's sharp when I breathe in deeply.", kw: [["chest pain", "chest", "pain"]] },
    { id: "fe1", cat: "FE", key: 1, q: "Have you had a fever or shivers?", a: "Yes, I've had a temperature, and bad shivers at night.", kw: [["fever", "temperature", "shiver", "shivers", "hot", "cold"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Have you felt confused, or has your family noticed anything different about you?", a: "No. My daughter says I'm fine, just very tired.", kw: [["confused", "confusion", "different", "family noticed"]] },
    { id: "rf2", cat: "RF", key: 0, q: "Have you had any swelling or pain in your legs?", a: "No, my legs are fine.", kw: [["leg", "legs", "calf", "swelling", "swollen"]] },
    { id: "p1", cat: "PMH", key: 1, q: "Do you have any long-term health problems?", a: "I have type 2 diabetes and high blood pressure.", kw: [["long-term", "medical problem", "health problem", "conditions", "history", "illness"]] },
    { id: "d1", cat: "DH", key: 1, q: "What medicines do you take?", a: "Metformin and amlodipine. I also tried some cough syrup.", kw: [["medicine", "medication", "tablets", "drugs", "take"]] },
    { id: "d2", cat: "DH", key: 1, q: "Are you allergic to any medicines?", a: "No, none that I know of.", kw: [["allergic to", "allergic", "allergy", "allergies"]] },
    { id: "sh1", cat: "SH", key: 1, q: "Do you smoke, or have you smoked in the past?", a: "I used to. I stopped ten years ago, after smoking for thirty years.", kw: [["smoke", "smoked", "cigarette"]] },
    { id: "sh2", cat: "SH", key: 1, q: "Who's at home with you?", a: "I live alone, but my daughter lives nearby.", kw: [["home", "live", "alone", "with you", "family"]] },
    { id: "i1", cat: "ICE", key: 1, q: "What's worrying you most about this?", a: "I don't want to go into hospital. My husband went in with pneumonia and never came home.", kw: [["worry", "worried", "worrying", "concern", "afraid", "scared"]] },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping for today?", a: "I think I need antibiotics. That's what I came for.", kw: [["hoping", "hope", "expect", "like us to do", "want us", "would you like"]] }
  ],
  bad: [
    { cat: "SP", q: "Is your cough productive of purulent sputum?", a: "Pardon? Do you mean phlegm?", why: "Ngôn ngữ bệnh án.", better: "Are you coughing anything up?" },
    { cat: "ICE", q: "At your age, you'll probably need to go to hospital.", a: "Oh… that's very upsetting.", why: "Thiếu tế nhị, kết luận quá sớm, gây sợ hãi.", better: "What's worrying you most about this?" },
    { cat: "BR", q: "Do you have dyspnoea on exertion?", a: "I'm sorry, I don't follow.", why: "Thuật ngữ chuyên môn.", better: "Do you feel short of breath when you walk or climb stairs?" }
  ],
  summary: {
    scaffold: "Mrs Mary Brown is a …-year-old … with a …-day history of …",
    model: "Mrs Mary Brown is a 68-year-old retired teacher with a four-day history of a cough productive of yellow-green phlegm, fever and shivers, sharp right-sided chest pain on deep breathing, and shortness of breath on climbing stairs. She has not coughed up blood and is not confused. She has type 2 diabetes and high blood pressure, takes metformin and amlodipine, and is an ex-smoker. She lives alone and is very worried about being admitted to hospital.",
    kw: [["68", "sixty-eight"], ["four-day", "4-day", "four days", "4 days"], ["phlegm", "sputum", "productive"], ["fever", "shiver", "temperature"], ["chest pain", "right"], ["breath"], ["no blood", "not confused", "confus"], ["diabetes"], ["smoker", "smok"], ["alone", "hospital", "worried"]],
    labels: ["tuổi", "thời gian", "đờm", "sốt", "đau ngực", "khó thở", "cờ đỏ", "bệnh nền", "hút thuốc", "hoàn cảnh, mối lo"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Community-acquired pneumonia", "Asthma attack", "Pulmonary embolism", "Heart failure"], a: 0,
    why: "Sốt, rét run, ho đờm mủ, đau ngực kiểu màng phổi và khó thở khi gắng sức trong 4 ngày → phù hợp viêm phổi cộng đồng. Tuổi từ 65 là một điểm trong CURB-65; cần khám thêm nhịp thở, huyết áp, độ bão hòa oxy để cùng bệnh nhân quyết định điều trị ở nhà hay nhập viện. Thuyên tắc phổi thường khó thở đột ngột và ít khi có đờm mủ." },
  explain: { q: "Which response is best for Mrs Brown?", opts: [
      "You have pneumonia, so you must be admitted.",
      "I think you may have a chest infection called pneumonia. I understand hospital is frightening after what happened to your husband. First I'd like to check your breathing, oxygen level and blood pressure, and then we can decide together what's safest.",
      "Don't worry, antibiotics will sort it out."], a: 1,
    why: "Nêu chẩn đoán bằng từ dễ hiểu, ghi nhận nỗi sợ của bà, giải thích bước tiếp theo và cùng quyết định." }
}
];

/* ============================================================
   CONTENT · Cặp âm tối thiểu (lỗi phổ biến của người Việt)
   ============================================================ */
const PAIRS = {
  "th-t": { title: "/θ/ và /t/", sample: "three / tree", tip: "Đặt đầu lưỡi nhẹ giữa hai hàm răng rồi thổi hơi ra. Đừng bật hơi như chữ 'th' tiếng Việt, đó gần với /t/.", pairs: [["three", "tree"], ["thin", "tin"], ["thank", "tank"], ["bath", "bat"], ["path", "pat"], ["thigh", "tie"]] },
  "dh-d": { title: "/ð/ và /d/", sample: "they / day", tip: "Giống /θ/ nhưng rung dây thanh. Đặt tay lên cổ để cảm nhận độ rung.", pairs: [["they", "day"], ["then", "den"], ["there", "dare"], ["breathe", "breed"], ["though", "dough"]] },
  "sh-s": { title: "/ʃ/ và /s/", sample: "ship / sip", tip: "/ʃ/ tròn môi, lưỡi lùi về sau một chút. /s/ môi dẹt, hơi đi qua khe hẹp sau răng.", pairs: [["ship", "sip"], ["she", "see"], ["shock", "sock"], ["sheet", "seat"], ["shave", "save"]] },
  "i-ee": { title: "/ɪ/ và /iː/", sample: "ship / sheep", tip: "/ɪ/ ngắn và thả lỏng. /iː/ dài, căng môi như đang cười. sick /sɪk/ và seek /siːk/ khác nghĩa hoàn toàn.", pairs: [["ship", "sheep"], ["sick", "seek"], ["live", "leave"], ["fill", "feel"], ["bit", "beat"], ["hit", "heat"]] },
  "l-n": { title: "/l/ và /n/", sample: "light / night", tip: "/l/: đầu lưỡi chạm lợi trên, hơi thoát hai bên lưỡi, không qua mũi. /n/: hơi thoát qua mũi. Bịt mũi khi nói /l/, âm vẫn phải rõ.", pairs: [["light", "night"], ["low", "no"], ["lot", "not"], ["lead", "need"], ["line", "nine"]] },
  "z-s": { title: "/z/ và /s/ ở cuối từ", sample: "rise / rice", tip: "/z/ rung dây thanh và nguyên âm phía trước kéo dài hơn một chút. /s/ không rung.", pairs: [["rise", "rice"], ["prize", "price"], ["eyes", "ice"], ["plays", "place"], ["peas", "peace"]] },
  "finals": { title: "Âm cuối", sample: "why / white", tip: "Tiếng Việt ít phụ âm cuối nên ta hay bỏ chúng. Trong tiếng Anh, bỏ âm cuối có thể đổi hẳn nghĩa: no /noʊ/ và nose /noʊz/.", pairs: [["why", "white"], ["see", "seed"], ["no", "nose"], ["bay", "bake"], ["tie", "tight"], ["row", "road"]] }
};

/* ============================================================
   CONTENT · Hình vị y khoa và thuật ngữ ghép
   ============================================================ */
const MORPHEMES = [
  ["prefix", "tachy-", "fast", "nhanh", "tachycardia"], ["prefix", "brady-", "slow", "chậm", "bradycardia"],
  ["prefix", "hyper-", "above normal", "tăng, quá mức", "hyperglycaemia"], ["prefix", "hypo-", "below normal", "giảm, dưới", "hypotension"],
  ["prefix", "dys-", "difficult, abnormal", "khó, rối loạn", "dyspnoea"], ["prefix", "a- / an-", "without", "không, mất", "anaemia"],
  ["prefix", "peri-", "around", "quanh", "pericarditis"], ["prefix", "endo-", "inside", "bên trong", "endoscopy"],
  ["prefix", "poly-", "many, much", "nhiều", "polyuria"],
  ["root", "cardi / card", "heart", "tim", "cardiology"], ["root", "gastr", "stomach", "dạ dày", "gastritis"],
  ["root", "hepat", "liver", "gan", "hepatitis"], ["root", "nephr / ren", "kidney", "thận", "nephrectomy"],
  ["root", "neur", "nerve", "thần kinh", "neuralgia"], ["root", "derm / dermat", "skin", "da", "dermatology"],
  ["root", "pneum / pulmon", "lung, air", "phổi, khí", "pneumonia"], ["root", "oste", "bone", "xương", "osteoporosis"],
  ["root", "arthr", "joint", "khớp", "arthritis"], ["root", "cephal", "head", "đầu", "cephalalgia"],
  ["root", "glyc", "sugar", "đường", "hyperglycaemia"], ["root", "tonsill", "tonsil", "amiđan", "tonsillectomy"],
  ["suffix", "-itis", "inflammation", "viêm", "arthritis"], ["suffix", "-algia", "pain", "đau", "arthralgia"],
  ["suffix", "-ectomy", "surgical removal", "cắt bỏ", "appendectomy"], ["suffix", "-scopy", "looking inside", "soi", "gastroscopy"],
  ["suffix", "-logy", "study of", "môn học", "neurology"], ["suffix", "-aemia / -emia", "blood condition", "tình trạng máu", "anaemia"],
  ["suffix", "-megaly", "enlargement", "to ra", "hepatomegaly"], ["suffix", "-pnoea / -pnea", "breathing", "thở", "dyspnoea"],
  ["suffix", "-uria", "urine", "nước tiểu", "polyuria"], ["suffix", "-osis", "abnormal condition", "tình trạng bệnh", "osteoporosis"]
];

const TERMS = [
  { t: "gastritis", p: ["gastr", "itis"], m: "inflammation of the stomach", vi: "viêm dạ dày" },
  { t: "hepatitis", p: ["hepat", "itis"], m: "inflammation of the liver", vi: "viêm gan" },
  { t: "arthritis", p: ["arthr", "itis"], m: "inflammation of a joint", vi: "viêm khớp" },
  { t: "pericarditis", p: ["peri", "card", "itis"], m: "inflammation around the heart", vi: "viêm màng ngoài tim" },
  { t: "neuralgia", p: ["neur", "algia"], m: "nerve pain", vi: "đau dây thần kinh" },
  { t: "arthralgia", p: ["arthr", "algia"], m: "joint pain", vi: "đau khớp" },
  { t: "nephrectomy", p: ["nephr", "ectomy"], m: "surgical removal of a kidney", vi: "cắt bỏ thận" },
  { t: "gastroscopy", p: ["gastr", "o", "scopy"], m: "looking inside the stomach", vi: "nội soi dạ dày" },
  { t: "cardiology", p: ["cardi", "o", "logy"], m: "the study of the heart", vi: "tim mạch học" },
  { t: "dermatology", p: ["dermat", "o", "logy"], m: "the study of the skin", vi: "da liễu học" },
  { t: "tachycardia", p: ["tachy", "card", "ia"], m: "a fast heart rate", vi: "nhịp tim nhanh" },
  { t: "bradycardia", p: ["brady", "card", "ia"], m: "a slow heart rate", vi: "nhịp tim chậm" },
  { t: "dyspnoea", p: ["dys", "pnoea"], m: "difficult breathing", vi: "khó thở" },
  { t: "hepatomegaly", p: ["hepat", "o", "megaly"], m: "an enlarged liver", vi: "gan to" },
  { t: "hyperglycaemia", p: ["hyper", "glyc", "aemia"], m: "high blood sugar", vi: "tăng đường huyết" },
  { t: "polyuria", p: ["poly", "uria"], m: "passing a lot of urine", vi: "đa niệu" }
];
const TERM_PARTS = ["gastr", "hepat", "arthr", "peri", "card", "cardi", "neur", "nephr", "dermat", "tachy", "brady", "dys", "hyper", "glyc", "poly", "o", "itis", "algia", "ectomy", "scopy", "logy", "ia", "pnoea", "megaly", "aemia", "uria"];


/* ===== file: content-clinic-screen.js ===== */
/* ============================================================
   v4.1 · PHÒNG KHÁM SÀNG LỌC BAN ĐẦU: 10 tình huống thường gặp
   Chọn theo dữ liệu lý do khám thường gặp ở tuyến chăm sóc ban đầu
   (Finley 2018, Can Fam Physician). Nội dung bám NICE (NG84, NG136,
   NG59, NG226, CG95, CKS/UKHSA UTI) và tiêu chuẩn WHO về đái tháo đường.
   Phục vụ học ngôn ngữ, không phải hướng dẫn điều trị. Phác đồ tại
   Việt Nam có thể khác.
   ============================================================ */
const ICE_KW = [["hoping", "expect", "expecting", "like us to do", "want us", "would you like"]];
const WORRY_KW = [["worrying", "worried", "worry", "worries", "concern", "afraid", "scared"]];
const OPEN_KW = [["how can i help", "help you", "bring", "brings", "help", "problem", "come in"]];
const MED_KW = [["medicine", "medicines", "medication", "tablets", "taking anything", "taking"]];
const ALLERGY_KW = [["allergic to", "allergic", "allergy", "allergies"]];
const SCALE_KW = [["scale", "how bad", "out of ten", "severe", "zero to ten"]];
const SCREEN_CASES = [
{
  id: "C4", group: "screen", title: "Sore throat", vi: "Đau họng", rec: ["M1", "M2"],
  patient: { name: "Ms Anna Nguyen", age: 24, job: "university student", av: "AN" },
  setting: "Primary care screening clinic",
  task: "Chị Anna đau họng ba ngày. Hãy khai thác triệu chứng, sàng lọc dấu hiệu nguy hiểm đường thở, hỏi dị ứng thuốc và giải thích vì sao có thể không cần kháng sinh.",
  cats: [["open", "Mở đầu"], ["HX", "History (bệnh sử)"], ["SYM", "Associated symptoms (triệu chứng kèm)"], ["RF", "Red flags (dấu hiệu cảnh báo)"], ["PMH", "Past history (tiền sử)"], ["DH", "Drugs & allergies (thuốc, dị ứng)"], ["SH", "Social (xã hội)"], ["ICE", "Ideas, concerns, expectations"]],
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Hello, I'm Dr Khoi. What brings you in today?", a: "I've had a really sore throat for three days.", kw: OPEN_KW },
    { id: "h1", cat: "HX", key: 1, q: "When did it start?", a: "On Saturday. It's getting a bit worse each day.", kw: [["when", "start", "started", "how long"]] },
    { id: "h2", cat: "SYM", key: 1, q: "Have you had a fever?", a: "Yes, I felt hot last night, so I took paracetamol.", kw: [["fever", "temperature"]] },
    { id: "h3", cat: "SYM", key: 1, q: "Have you got a cough or a runny nose?", a: "Yes, a bit of both, and my nose is blocked.", kw: [["cough", "runny nose", "blocked nose", "runny"]] },
    { id: "h4", cat: "SYM", key: 1, q: "Can you swallow food and drinks?", a: "It hurts, but I can eat soft food and drink normally.", kw: [["swallow", "swallowing"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Do you have any difficulty breathing, or are you drooling?", a: "No, my breathing is fine.", kw: [["breathing", "breathe", "drooling"]] },
    { id: "rf2", cat: "RF", key: 1, q: "Can you open your mouth fully, and is one side much more swollen?", a: "Yes, I can open it. Both sides feel the same.", kw: [["open your mouth", "one side", "swollen"]] },
    { id: "p1", cat: "PMH", key: 0, q: "Do you have any medical problems, or get tonsillitis often?", a: "No. I had tonsillitis once as a child.", kw: [["medical problem", "tonsillitis", "health problem", "conditions"]] },
    { id: "d1", cat: "DH", key: 1, q: "Are you taking any medicines at the moment?", a: "Just paracetamol and throat lozenges.", kw: MED_KW },
    { id: "d2", cat: "DH", key: 1, q: "Are you allergic to any medicines?", a: "Yes, penicillin gives me a rash.", kw: ALLERGY_KW },
    { id: "s1", cat: "SH", key: 0, q: "Do you smoke or drink alcohol?", a: "I don't smoke. I have a drink sometimes at weekends.", kw: [["smoke", "alcohol"]] },
    { id: "i1", cat: "ICE", key: 1, q: "What do you think might be causing it?", a: "I think it's strep throat. My roommate had it last month.", kw: [["causing", "think it is", "worried", "worry"]] },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping we could do today?", a: "I was hoping for antibiotics. I have exams next week.", kw: ICE_KW }
  ],
  bad: [
    { cat: "SYM", q: "Do you have odynophagia?", a: "Sorry, I don't know that word.", why: "Thuật ngữ chuyên môn.", better: "Does it hurt when you swallow?" },
    { cat: "ICE", q: "You don't need antibiotics, so don't ask for them.", a: "Oh… OK.", why: "Gạt đi mong muốn của bệnh nhân khi chưa giải thích.", better: "What were you hoping we could do today?" }
  ],
  summary: {
    scaffold: "Ms Anna Nguyen is a …-year-old … with a …-day history of …",
    model: "Ms Anna Nguyen is a 24-year-old student with a three-day history of sore throat, fever, cough and a runny, blocked nose. She can swallow fluids and has no difficulty breathing or one-sided swelling. She is allergic to penicillin. She is worried it is strep throat and hopes for antibiotics before her exams.",
    kw: [["24", "twenty-four"], ["three-day", "3-day", "three days", "3 days"], ["sore throat"], ["fever", "temperature"], ["cough", "runny", "nose"], ["swallow"], ["breathing"], ["penicillin", "allerg"], ["strep", "worried"], ["antibiotic", "exam"]],
    labels: ["tuổi", "thời gian", "đau họng", "sốt", "ho, sổ mũi", "nuốt", "thở", "dị ứng penicillin", "mối lo", "mong muốn"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Viral pharyngitis (throat infection)", "Bacterial tonsillitis needing immediate antibiotics", "Quinsy (peritonsillar abscess)", "Epiglottitis"], a: 0,
    why: "Có ho, sổ mũi, nghẹt mũi nên nghiêng về vi-rút. Theo điểm FeverPAIN (NICE NG84): 0–1 điểm không cần kháng sinh; 2–3 điểm cân nhắc không dùng hoặc kê đơn dự phòng; 4–5 điểm mới cân nhắc kháng sinh. Quinsy: sưng một bên, khó há miệng, giọng như ngậm khoai. Viêm nắp thanh quản: khó thở, chảy nước dãi, không nuốt được nước bọt, là cấp cứu." },
  explain: { q: "Which explanation is best for Anna?", opts: [
      "You have acute pharyngitis; antibiotics are contraindicated.",
      "This looks like a viral throat infection, and antibiotics don't work against viruses. It usually settles in about a week. Paracetamol or ibuprofen, plenty of fluids and rest will help. Please come back if it gets worse or you can't swallow.",
      "It's nothing. Just go home."], a: 1,
    why: "Giải thích bằng từ đời thường vì sao không cần kháng sinh, hướng dẫn chăm sóc và dặn khi nào quay lại (safety-netting)." }
},
{
  id: "C5", group: "screen", title: "Blood pressure check", vi: "Tầm soát tăng huyết áp", rec: ["M2", "M6"],
  patient: { name: "Mr Minh Hoang", age: 52, job: "bank manager", av: "MH" },
  setting: "Primary care screening clinic",
  task: "Anh Minh có huyết áp 156/98 mmHg khi khám sức khỏe ở công ty. Hãy khai thác triệu chứng, yếu tố nguy cơ tim mạch, thuốc đang dùng, lối sống và mối lo của anh.",
  cats: [["open", "Mở đầu"], ["HX", "Readings (các lần đo)"], ["SYM", "Symptoms (triệu chứng)"], ["RF", "Red flags (dấu hiệu cảnh báo)"], ["PMH", "Past history (tiền sử)"], ["DH", "Drugs (thuốc)"], ["FH", "Family history (gia đình)"], ["SH", "Lifestyle (lối sống)"], ["ICE", "Ideas, concerns, expectations"]],
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Good morning. What brings you in today?", a: "My blood pressure was high at a work health check. It was 156 over 98.", kw: OPEN_KW },
    { id: "h1", cat: "HX", key: 1, q: "Have you had your blood pressure checked before?", a: "Once, two years ago. They said it was a bit high, but I didn't follow it up.", kw: [["checked before", "before", "previous"]] },
    { id: "y1", cat: "SYM", key: 1, q: "Have you had any headaches, blurred vision or chest pain?", a: "Sometimes a headache in the morning, but no chest pain or problems with my eyes.", kw: [["headache", "headaches", "blurred", "vision", "chest pain"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Have you had any shortness of breath, confusion or weakness on one side?", a: "No, nothing like that.", kw: [["shortness of breath", "breathless", "confusion", "weakness", "one side"]] },
    { id: "p1", cat: "PMH", key: 1, q: "Do you have any other health problems, like diabetes or kidney problems?", a: "Not that I know of. I haven't had a blood test for years.", kw: [["health problem", "health problems", "diabetes", "kidney", "medical problem"]] },
    { id: "d1", cat: "DH", key: 1, q: "Are you taking any medicines, including painkillers or cold remedies?", a: "I take ibuprofen for my knee a few times a week.", kw: [["medicine", "medicines", "medication", "painkiller", "painkillers", "remedies", "taking"]] },
    { id: "f1", cat: "FH", key: 1, q: "Does anyone in your family have high blood pressure, heart disease or stroke?", a: "My father had a stroke when he was sixty.", kw: [["family", "father", "mother", "parents"]] },
    { id: "s1", cat: "SH", key: 1, q: "Do you smoke or drink alcohol?", a: "I smoke ten a day, and I drink beer with clients two or three times a week.", kw: [["smoke", "alcohol", "cigarettes"]] },
    { id: "s2", cat: "SH", key: 1, q: "Can you tell me about your diet and exercise? How much salt do you use?", a: "I eat out a lot and I love fish sauce. I don't really exercise.", kw: [["diet", "exercise", "salt"]] },
    { id: "i1", cat: "ICE", key: 1, q: "What do you think about the reading, and is anything worrying you?", a: "I feel fine, so I'm not sure it's a problem. But I don't want a stroke like my dad.", kw: WORRY_KW },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping we could do today?", a: "Honestly, I don't want tablets for the rest of my life.", kw: ICE_KW }
  ],
  bad: [
    { cat: "SYM", q: "Do you have any target organ damage?", a: "Target what? Sorry?", why: "Thuật ngữ chuyên môn.", better: "Have you had any chest pain, breathlessness or problems with your eyes?" },
    { cat: "SH", q: "You must stop smoking and drinking right now.", a: "Well… it's not that easy.", why: "Khuyên răn khi chưa khai thác xong, nghe như phán xét.", better: "Do you smoke or drink alcohol?" }
  ],
  summary: {
    scaffold: "Mr Minh Hoang is a …-year-old … whose blood pressure was …",
    model: "Mr Minh Hoang is a 52-year-old bank manager whose blood pressure was 156/98 at a work health check. He has occasional morning headaches but no chest pain, visual or neurological symptoms. He takes ibuprofen regularly, smokes ten cigarettes a day, drinks alcohol several times a week and eats a high-salt diet with little exercise. His father had a stroke at sixty. He is worried about stroke but reluctant to take lifelong medication.",
    kw: [["52", "fifty-two"], ["156", "blood pressure"], ["headache"], ["chest pain", "no chest"], ["ibuprofen"], ["smok"], ["alcohol", "beer", "drink"], ["salt", "fish sauce", "diet"], ["father", "stroke"], ["tablet", "medication", "reluctant", "lifelong"]],
    labels: ["tuổi", "chỉ số huyết áp", "đau đầu", "không đau ngực", "ibuprofen", "hút thuốc", "rượu bia", "ăn mặn", "tiền sử gia đình", "mong muốn"]
  },
  dx: { q: "What is the best next step?", opts: ["Confirm with home or ambulatory blood pressure monitoring, and check cardiovascular risk", "Start two blood pressure drugs today", "Send him to the emergency department now", "Tell him the reading is normal for his age"], a: 0,
    why: "Theo NICE NG136, huyết áp phòng khám ≥140/90 cần xác nhận bằng đo tại nhà hoặc Holter huyết áp (ngưỡng ≥135/85). Chỉ cần đánh giá chuyên khoa trong ngày khi ≥180/120 kèm dấu hiệu tổn thương cơ quan đích hoặc triệu chứng đe dọa tính mạng. Làm thêm xét nghiệm nguy cơ tim mạch (đường huyết, mỡ máu, chức năng thận, nước tiểu, ECG). Ibuprofen dùng thường xuyên có thể làm tăng huyết áp." },
  explain: { q: "Which explanation is best for Mr Hoang?", opts: [
      "Your hypertension requires lifelong antihypertensives.",
      "High blood pressure often has no symptoms, but over time it can damage the heart, brain and kidneys. I understand why you're worried after your father's stroke. First, let's check it properly at home for a week. Then we can decide together about lifestyle changes and whether you need medicine.",
      "One high reading means nothing. Don't worry about it."], a: 1,
    why: "Ghi nhận mối lo, giải thích bằng từ đời thường, nêu bước tiếp theo và cùng bệnh nhân ra quyết định." }
},
{
  id: "C6", group: "screen", title: "Tiredness and thirst", vi: "Mệt, khát nhiều (tầm soát đái tháo đường)", rec: ["M2", "M3"],
  patient: { name: "Mrs Hoa Tran", age: 48, job: "shop owner", av: "HT" },
  setting: "Primary care screening clinic",
  task: "Chị Hoa mệt và khát nhiều hai tháng. Hãy khai thác triệu chứng tăng đường huyết, sàng lọc dấu hiệu cấp cứu, tiền sử, gia đình, chế độ ăn và điều chị lo lắng.",
  cats: [["open", "Mở đầu"], ["SYM", "Symptoms (triệu chứng)"], ["RF", "Red flags (dấu hiệu cảnh báo)"], ["PMH", "Past history (tiền sử)"], ["DH", "Drugs & allergies (thuốc, dị ứng)"], ["FH", "Family history (gia đình)"], ["SH", "Diet & lifestyle (ăn uống, lối sống)"], ["ICE", "Ideas, concerns, expectations"]],
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Hello, Mrs Tran. How can I help you today?", a: "I've been very thirsty and tired for about two months.", kw: OPEN_KW },
    { id: "y1", cat: "SYM", key: 1, q: "Are you passing urine more often, even at night?", a: "Yes, I get up two or three times every night.", kw: [["urine", "passing water", "toilet"]] },
    { id: "y2", cat: "SYM", key: 1, q: "Have you lost any weight without trying?", a: "Maybe a little. My clothes feel a bit loose.", kw: [["weight"]] },
    { id: "y3", cat: "SYM", key: 1, q: "Have you noticed blurred vision, slow-healing cuts or numbness in your feet?", a: "A small cut on my foot took a long time to heal, and my feet sometimes tingle.", kw: [["blurred", "vision", "cuts", "heal", "numbness", "feet", "tingling"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Have you had any vomiting, stomach pain or fast breathing?", a: "No, none of those.", kw: [["vomiting", "stomach pain", "fast breathing"]] },
    { id: "p1", cat: "PMH", key: 1, q: "Do you have any other health problems, like high blood pressure or high cholesterol?", a: "My blood pressure is a bit high. And I had diabetes in my last pregnancy.", kw: [["health problem", "health problems", "blood pressure", "cholesterol", "medical problem"]] },
    { id: "d1", cat: "DH", key: 1, q: "Are you taking any medicines at the moment?", a: "Only amlodipine for my blood pressure.", kw: MED_KW },
    { id: "d2", cat: "DH", key: 0, q: "Are you allergic to any medicines?", a: "No, I'm not.", kw: ALLERGY_KW },
    { id: "f1", cat: "FH", key: 1, q: "Does anyone in your family have diabetes?", a: "Yes, my mother and my older brother.", kw: [["family", "mother", "father"]] },
    { id: "s1", cat: "SH", key: 1, q: "Can you tell me what you usually eat and drink in a day?", a: "Rice three times a day, and I love sweet milk tea, two cups a day.", kw: [["eat", "diet", "food"]] },
    { id: "s2", cat: "SH", key: 1, q: "How active are you, and do you smoke?", a: "I sit in my shop all day. I don't smoke.", kw: [["active", "exercise", "smoke"]] },
    { id: "i1", cat: "ICE", key: 1, q: "What do you think might be going on?", a: "I'm afraid it's diabetes, like my mother. She lost her eyesight.", kw: [["going on", "causing", "think it is"]] },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping for from today's visit?", a: "I want to know for sure. And I'm scared of insulin injections.", kw: ICE_KW }
  ],
  bad: [
    { cat: "SYM", q: "Any polyuria or polydipsia?", a: "Poly… sorry, what does that mean?", why: "Thuật ngữ chuyên môn.", better: "Are you passing urine more often, or feeling very thirsty?" },
    { cat: "ICE", q: "This is what happens when you eat so much rice and sugar.", a: "…", why: "Đổ lỗi, làm bệnh nhân xấu hổ và ngại chia sẻ.", better: "What do you think might be going on?" }
  ],
  summary: {
    scaffold: "Mrs Hoa Tran is a …-year-old … with a …-month history of …",
    model: "Mrs Hoa Tran is a 48-year-old shop owner with a two-month history of thirst, tiredness, passing urine at night and mild weight loss. A cut on her foot healed slowly and her feet tingle. She has high blood pressure, had gestational diabetes, and her mother and brother have diabetes. Her diet is high in rice and sweet drinks and she is not very active. There are no features of ketoacidosis. She is worried about diabetes and afraid of insulin.",
    kw: [["48", "forty-eight"], ["two-month", "2-month", "two months", "2 months"], ["thirst"], ["urine", "night"], ["weight"], ["foot", "feet", "heal"], ["blood pressure", "hypertension"], ["gestational", "pregnancy"], ["mother", "brother", "family"], ["insulin", "worried"]],
    labels: ["tuổi", "thời gian", "khát", "tiểu đêm", "sụt cân", "bàn chân", "tăng huyết áp", "đái tháo đường thai kỳ", "gia đình", "mối lo"]
  },
  dx: { q: "What is the most likely diagnosis, and how is it confirmed?", opts: ["Type 2 diabetes, confirmed with HbA1c or fasting blood glucose", "Type 1 diabetes needing insulin today", "Diabetic ketoacidosis", "Urinary tract infection"], a: 0,
    why: "Khát, tiểu nhiều, mệt, sụt cân, vết thương lâu lành cùng yếu tố nguy cơ (đái tháo đường thai kỳ, gia đình, tăng huyết áp, ít vận động) → nghĩ đái tháo đường típ 2. Chẩn đoán theo WHO: HbA1c ≥ 48 mmol/mol (6,5%) hoặc glucose đói ≥ 7,0 mmol/L; không có triệu chứng thì cần xét nghiệm lại để khẳng định. Không nôn, không đau bụng, không thở nhanh → không gợi ý nhiễm toan ceton." },
  explain: { q: "Which explanation is best for Mrs Tran?", opts: [
      "You have hyperglycaemia secondary to insulin resistance.",
      "Your symptoms could be caused by diabetes, which means the body can't control the sugar in your blood properly. A blood test will tell us for sure. Most people with type 2 diabetes don't start with insulin. Diet, activity and tablets usually come first, and they help protect your eyes, kidneys and feet.",
      "You will need insulin, just like your mother."], a: 1,
    why: "Trả lời đúng vào nỗi sợ tiêm insulin và mất thị lực, dùng từ dễ hiểu, nêu bước kiểm tra tiếp theo." }
},
{
  id: "C7", group: "screen", title: "Low back pain", vi: "Đau thắt lưng", rec: ["M4"],
  patient: { name: "Mr Nam Vo", age: 38, job: "warehouse worker", av: "NV" },
  setting: "Primary care screening clinic",
  task: "Anh Nam đau thắt lưng sau khi bê hàng. Hãy khai thác cơn đau theo SOCRATES, sàng lọc đầy đủ dấu hiệu cảnh báo (hội chứng chùm đuôi ngựa, nhiễm trùng, ung thư, gãy xương) và mong muốn của anh.",
  cats: SOCRATES_CATS,
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Hello, I'm Dr Khoi. What brings you in today?", a: "I hurt my lower back lifting boxes at work four days ago.", kw: OPEN_KW },
    { id: "s1", cat: "S", key: 1, q: "Where exactly is the pain?", a: "Across my lower back, a bit more on the right.", kw: [["where", "point", "which part"]] },
    { id: "on1", cat: "O", key: 1, q: "How did it start?", a: "Suddenly, when I lifted a heavy box.", kw: [["how did it start", "start", "started", "when"]] },
    { id: "c1", cat: "C", key: 1, q: "What does the pain feel like?", a: "Like a tight, aching muscle. It catches when I bend.", kw: [["feel like", "describe", "kind of", "type of"]] },
    { id: "r1", cat: "R", key: 1, q: "Does the pain go down your leg, below the knee?", a: "No, it stays in my back.", kw: [["below the knee", "go down", "spread", "leg"]] },
    { id: "e1", cat: "E", key: 1, q: "Does anything make it better or worse?", a: "Bending and sitting for a long time make it worse. Moving around gently helps.", kw: [["better", "worse", "relieve"]] },
    { id: "v1", cat: "V", key: 1, q: "On a scale of zero to ten, how bad is it?", a: "About six at the moment.", kw: SCALE_KW },
    { id: "rf1", cat: "RF", key: 1, q: "Any numbness around your bottom or between your legs?", a: "No, nothing like that.", kw: [["between your legs", "around your bottom", "numbness", "saddle"]] },
    { id: "rf2", cat: "RF", key: 1, q: "Any problems passing urine or controlling your bowels?", a: "No, everything is normal.", kw: [["urine", "bowels", "bladder"]] },
    { id: "rf3", cat: "RF", key: 1, q: "Any fever, weight loss, or a history of cancer?", a: "No fever, my weight is stable and I've never had cancer.", kw: [["fever", "weight loss", "cancer"]] },
    { id: "rf4", cat: "RF", key: 1, q: "Any weakness in your legs?", a: "No, my legs feel strong.", kw: [["weakness", "weak"]] },
    { id: "d1", cat: "DH", key: 1, q: "What have you taken for the pain so far?", a: "Ibuprofen three times a day. It helps a bit.", kw: [["taken", "painkiller", "painkillers", "medicine", "medication"]] },
    { id: "d2", cat: "DH", key: 0, q: "Are you allergic to any medicines?", a: "No.", kw: ALLERGY_KW },
    { id: "sh1", cat: "SH", key: 1, q: "What does your job involve, and can you work at the moment?", a: "I lift boxes all day. I've been off work for two days.", kw: [["job", "work"]] },
    { id: "i1", cat: "ICE", key: 1, q: "Is there anything that worries you about it?", a: "My uncle has a slipped disc. I'm worried I've damaged my spine.", kw: WORRY_KW },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping for today?", a: "I think I need an X-ray, and a note for work.", kw: ICE_KW }
  ],
  bad: [
    { cat: "RF", q: "Any saddle anaesthesia or urinary retention?", a: "Sorry, I don't understand.", why: "Thuật ngữ chuyên môn.", better: "Any numbness around your bottom, or problems passing urine?" },
    { cat: "ICE", q: "You just need to rest in bed for two weeks.", a: "Two weeks in bed?", why: "Lời khuyên sai: nằm nghỉ lâu làm hồi phục chậm hơn; lại trả lời trước khi hỏi mong muốn.", better: "What were you hoping for today?" }
  ],
  summary: {
    scaffold: "Mr Nam Vo is a …-year-old … with a …-day history of …",
    model: "Mr Nam Vo is a 38-year-old warehouse worker with a four-day history of sudden lower back pain after lifting a heavy box. The pain is aching, six out of ten, worse with bending and sitting and does not go down the leg. There are no red flags: no saddle numbness, no bladder or bowel problems, no leg weakness, and no fever, weight loss or history of cancer. He takes ibuprofen. He is worried about a slipped disc and hopes for an X-ray and a sick note.",
    kw: [["38", "thirty-eight"], ["four-day", "4-day", "four days", "4 days"], ["lift", "box"], ["lower back", "back pain"], ["six", "6"], ["bend", "sitting"], ["leg"], ["red flag", "saddle", "bladder", "bowel", "numb"], ["ibuprofen"], ["x-ray", "disc", "worried"]],
    labels: ["tuổi", "thời gian", "cơ chế", "vị trí", "mức độ", "yếu tố tăng", "không lan chân", "cờ đỏ âm tính", "thuốc", "mối lo, mong muốn"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Non-specific (mechanical) low back pain", "Cauda equina syndrome", "Kidney stone", "Spinal fracture"], a: 0,
    why: "Khởi phát sau nâng vật nặng, đau kiểu cơ học, không lan xuống chân, không có dấu hiệu cảnh báo → đau thắt lưng không đặc hiệu. NICE NG59: không chụp X-quang thường quy; khuyên duy trì vận động nhẹ; có thể dùng NSAID ngắn ngày nếu không có chống chỉ định. Hội chứng chùm đuôi ngựa (tê vùng yên ngựa, rối loạn tiểu tiện hoặc đại tiện, yếu hai chân) là cấp cứu." },
  explain: { q: "Which explanation is best for Mr Vo?", opts: [
      "You have a lumbar strain. Imaging is not indicated.",
      "This sounds like a strained back muscle. It's very common and usually gets better within a few weeks. An X-ray wouldn't show the muscle and wouldn't change the treatment. Staying gently active helps more than bed rest. Come back straight away if you get numbness between your legs or problems passing urine.",
      "It's just a pulled muscle. Go back to work tomorrow."], a: 1,
    why: "Giải thích vì sao không chụp X-quang, trấn an có căn cứ, khuyên vận động và dặn dấu hiệu cần quay lại ngay." }
},
{
  id: "C8", group: "screen", title: "Painful urination", vi: "Tiểu buốt", rec: ["M2", "M3"],
  patient: { name: "Ms Mai Le", age: 29, job: "office worker", av: "ML" },
  setting: "Primary care screening clinic",
  task: "Chị Mai tiểu buốt từ hôm qua. Hãy khai thác triệu chứng tiết niệu, loại trừ viêm thận bể thận, hỏi khả năng có thai, khí hư, và tôn trọng sự riêng tư khi hỏi các câu nhạy cảm.",
  cats: [["open", "Mở đầu"], ["SYM", "Urinary symptoms (triệu chứng tiết niệu)"], ["RF", "Red flags (dấu hiệu cảnh báo)"], ["GYN", "Gynaecology (phụ khoa)"], ["PMH", "Past history (tiền sử)"], ["DH", "Drugs & allergies (thuốc, dị ứng)"], ["ICE", "Ideas, concerns, expectations"]],
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Good afternoon. How can I help you today?", a: "It burns when I pass urine. It started yesterday.", kw: OPEN_KW },
    { id: "u1", cat: "SYM", key: 1, q: "Are you going to the toilet more often than usual?", a: "Yes, every hour, and I only pass a little.", kw: [["more often", "toilet", "frequently"]] },
    { id: "u2", cat: "SYM", key: 1, q: "Do you have to get up at night to pass urine?", a: "Yes, twice last night. That's not normal for me.", kw: [["at night", "get up", "night"]] },
    { id: "u3", cat: "SYM", key: 1, q: "Does your urine look cloudy, or have you seen any blood?", a: "It's a bit cloudy. No blood.", kw: [["cloudy", "blood"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Have you had a fever, shivering, or pain in your back or side?", a: "No fever and no back pain.", kw: [["fever", "shivering", "your back", "side"]] },
    { id: "rf2", cat: "RF", key: 0, q: "Have you been vomiting?", a: "No.", kw: [["vomiting", "vomit", "been sick"]] },
    { id: "g1", cat: "GYN", key: 1, q: "Have you noticed any unusual vaginal discharge or itching?", a: "No, nothing like that.", kw: [["discharge", "itching", "itchy"]] },
    { id: "g2", cat: "GYN", key: 1, q: "Is there any chance you could be pregnant?", a: "No, I had my period last week.", kw: [["pregnant", "period"]] },
    { id: "p1", cat: "PMH", key: 0, q: "Have you had urine infections before?", a: "Once, about two years ago.", kw: [["infections before", "before", "previous"]] },
    { id: "d1", cat: "DH", key: 1, q: "Are you taking any medicines, including the pill?", a: "Just the contraceptive pill.", kw: [["medicine", "medicines", "medication", "pill", "taking"]] },
    { id: "d2", cat: "DH", key: 1, q: "Are you allergic to any medicines?", a: "Not that I know of.", kw: ALLERGY_KW },
    { id: "i1", cat: "ICE", key: 1, q: "What do you think might be causing it?", a: "I don't drink much water at work. Or could it be something from my boyfriend?", kw: [["causing", "think it is", "worried", "worry"]] },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping we could do today?", a: "Something to stop the burning quickly. I have a big presentation on Friday.", kw: ICE_KW }
  ],
  bad: [
    { cat: "SYM", q: "Do you have dysuria, frequency and nocturia?", a: "Sorry, can you say that in normal words?", why: "Thuật ngữ chuyên môn.", better: "Does it burn when you pass urine? Are you going more often, or at night?" },
    { cat: "GYN", q: "Are you sleeping around?", a: "Excuse me?", why: "Câu hỏi phán xét, xúc phạm. Hỏi về quan hệ tình dục cần trung lập và giải thích lý do hỏi.", better: "I ask everyone this: have you had any new sexual partners recently?" }
  ],
  summary: {
    scaffold: "Ms Mai Le is a …-year-old … with a …-day history of …",
    model: "Ms Mai Le is a 29-year-old office worker with a one-day history of burning when passing urine, frequency, getting up at night and cloudy urine. She has no fever, back pain, vomiting or vaginal discharge, and is not pregnant. She takes the contraceptive pill and has had one previous urine infection. She wonders if it is caused by low fluid intake and hopes for quick relief before a presentation.",
    kw: [["29", "twenty-nine"], ["one-day", "1-day", "yesterday", "one day"], ["burn", "pain"], ["often", "frequency"], ["night"], ["cloudy"], ["fever", "back"], ["discharge"], ["pregnant"], ["pill", "contracept"]],
    labels: ["tuổi", "thời gian", "tiểu buốt", "tiểu nhiều lần", "tiểu đêm", "nước tiểu đục", "không sốt, không đau lưng", "không khí hư", "không có thai", "thuốc tránh thai"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Lower urinary tract infection (cystitis)", "Kidney infection (pyelonephritis)", "Vaginal thrush", "Chlamydia"], a: 0,
    why: "Có từ 2 trong 3 dấu hiệu (tiểu buốt, tiểu đêm mới xuất hiện, nước tiểu đục) ở phụ nữ dưới 65 tuổi, không có thai → nhiễm khuẩn tiết niệu dưới khả năng cao, có thể điều trị không cần que thử (UKHSA/NICE). Không sốt, không đau hông lưng, không nôn → không nghĩ viêm thận bể thận. Không khí hư → ít nghĩ viêm âm đạo hoặc bệnh lây truyền qua đường tình dục." },
  explain: { q: "Which explanation is best for Ms Le?", opts: [
      "You have cystitis, most likely caused by E. coli.",
      "This looks like a bladder infection. It's very common in women and isn't a sign that you've done anything wrong. A short course of antibiotics should clear it within a few days, and drinking enough fluids helps. Please come back if you get a fever or pain in your back.",
      "Just drink more water. It's nothing."], a: 1,
    why: "Trấn an mối lo liên quan bạn trai mà không phán xét, giải thích điều trị và dặn dấu hiệu viêm thận cần quay lại." }
},
{
  id: "C9", group: "screen", title: "Chest pain", vi: "Đau ngực (sàng lọc hội chứng vành cấp)", rec: ["M4"],
  patient: { name: "Mr Quang Do", age: 58, job: "taxi company owner", av: "QD" },
  setting: "Primary care screening clinic",
  task: "Anh Quang đến vì đau ngực. Hãy khai thác nhanh nhưng đủ theo SOCRATES, hỏi yếu tố nguy cơ tim mạch, và nhận ra khi nào đây là tình huống cấp cứu.",
  cats: SOCRATES_CATS,
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Hello, I'm Dr Khoi. What brings you in today?", a: "I've been getting chest pain, doctor. I've got some now.", kw: OPEN_KW },
    { id: "on1", cat: "O", key: 1, q: "When did it start, and is it there now?", a: "About forty minutes ago, walking up the stairs. It's still there, but a bit less.", kw: [["when", "start", "started", "there now", "right now"]] },
    { id: "c1", cat: "C", key: 1, q: "What does the pain feel like?", a: "Heavy, like someone is sitting on my chest.", kw: [["feel like", "describe", "kind of"]] },
    { id: "s1", cat: "S", key: 1, q: "Can you show me where it is?", a: "Here, in the middle of my chest.", kw: [["where", "show me", "point"]] },
    { id: "r1", cat: "R", key: 1, q: "Does the pain spread to your arm, neck or jaw?", a: "Yes, into my left arm.", kw: [["spread", "arm", "neck", "jaw", "radiate"]] },
    { id: "a1", cat: "A", key: 1, q: "Have you felt sweaty, sick or short of breath?", a: "I was very sweaty and a bit breathless.", kw: [["sweaty", "sweating", "short of breath", "breathless"]] },
    { id: "t1", cat: "T", key: 1, q: "Have you had pain like this before?", a: "Twice this week when I walked fast. It went away when I rested.", kw: [["before", "this week"]] },
    { id: "v1", cat: "V", key: 1, q: "On a scale of zero to ten, how bad is it?", a: "It was eight. Now it's about five.", kw: SCALE_KW },
    { id: "rf1", cat: "RF", key: 0, q: "Is the pain tearing, and does it go through to your back?", a: "No, it's not like that.", kw: [["tearing", "through to your back"]] },
    { id: "p1", cat: "PMH", key: 1, q: "Do you have high blood pressure, diabetes or high cholesterol?", a: "High blood pressure and cholesterol, but I stopped my tablets months ago.", kw: [["blood pressure", "diabetes", "cholesterol", "medical problem", "health problem"]] },
    { id: "d1", cat: "DH", key: 0, q: "Are you taking any medicines at the moment?", a: "None at the moment.", kw: MED_KW },
    { id: "d2", cat: "DH", key: 0, q: "Are you allergic to any medicines?", a: "No.", kw: ALLERGY_KW },
    { id: "f1", cat: "SH", key: 1, q: "Does anyone in your family have heart problems?", a: "My brother had a heart attack at fifty-two.", kw: [["family", "brother", "father", "mother"]] },
    { id: "sh1", cat: "SH", key: 1, q: "Do you smoke?", a: "Yes, a packet a day for thirty years.", kw: [["smoke", "cigarette", "cigarettes"]] },
    { id: "i1", cat: "ICE", key: 1, q: "What's worrying you most?", a: "I thought it was just gas, but my wife made me come. Is it my heart?", kw: WORRY_KW }
  ],
  bad: [
    { cat: "C", q: "Is it pleuritic or crushing?", a: "Sorry, I don't understand.", why: "Thuật ngữ chuyên môn.", better: "What does the pain feel like?" },
    { cat: "ICE", q: "It's probably just indigestion. Take an antacid.", a: "Oh, OK…", why: "Trấn an sai, nguy hiểm: đau ngực kiểu tim đang diễn ra cần xử trí cấp cứu.", better: "What's worrying you most?" }
  ],
  summary: {
    scaffold: "Mr Quang Do is a …-year-old man with …",
    model: "Mr Quang Do is a 58-year-old man with central, heavy chest pain that started forty minutes ago on exertion and is still present, spreading to the left arm, with sweating and breathlessness. He has had exertional chest pain twice this week. He has high blood pressure and high cholesterol but stopped his tablets, smokes a packet a day, and his brother had a heart attack at fifty-two. This could be an acute coronary syndrome and needs emergency assessment.",
    kw: [["58", "fifty-eight"], ["heavy", "central", "middle"], ["forty minutes", "40 minutes", "still"], ["arm"], ["sweat"], ["breath"], ["this week", "before", "exertion"], ["blood pressure", "cholesterol"], ["smok"], ["brother", "family"]],
    labels: ["tuổi", "tính chất, vị trí", "đang đau", "lan tay", "vã mồ hôi", "khó thở", "đau khi gắng sức", "yếu tố nguy cơ", "hút thuốc", "gia đình"]
  },
  dx: { q: "What should happen now?", opts: ["Possible acute coronary syndrome: call an ambulance, ECG now and emergency transfer", "Book a routine exercise test next week", "Give an antacid and review in two weeks", "Reassure him and restart his tablets"], a: 0,
    why: "Đau ngực đang diễn ra hoặc trong 12 giờ qua có tính chất gợi ý tim (NICE CG95): đè nặng, lan tay trái, vã mồ hôi, khó thở, nhiều yếu tố nguy cơ → nghĩ hội chứng vành cấp. Gọi cấp cứu, làm ECG ngay và chuyển viện khẩn; không xử trí như ca thường quy. Đây là đáp án duy nhất an toàn." },
  explain: { q: "What is the best thing to say to Mr Do?", opts: [
      "You're probably having an MI, so we need troponins.",
      "Your pain could be coming from your heart, so to be safe we need to do a heart tracing now and get you to hospital by ambulance straight away. I'll stay with you while we arrange it.",
      "It's probably gas, but let's check next week."], a: 1,
    why: "Nói rõ, bình tĩnh, không thuật ngữ, nêu ngay hành động khẩn và trấn an bằng sự hiện diện." }
},
{
  id: "C10", group: "screen", title: "Diarrhoea and vomiting", vi: "Tiêu chảy, nôn", rec: ["M3"],
  patient: { name: "Ms Thu Bui", age: 31, job: "teacher", av: "TB" },
  setting: "Primary care screening clinic",
  task: "Chị Thu bị tiêu chảy và nôn từ hôm qua. Hãy khai thác tính chất phân, mức độ mất nước, dấu hiệu cảnh báo, yếu tố phơi nhiễm và điều chị mong muốn.",
  cats: [["open", "Mở đầu"], ["SYM", "Stool (phân)"], ["HYD", "Fluids & dehydration (dịch, mất nước)"], ["RF", "Red flags (dấu hiệu cảnh báo)"], ["EXP", "Exposure (yếu tố phơi nhiễm)"], ["PMH", "Past history (tiền sử)"], ["DH", "Drugs & allergies (thuốc, dị ứng)"], ["ICE", "Ideas, concerns, expectations"]],
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Good morning. How can I help you today?", a: "I've had diarrhoea since yesterday, and I was sick last night.", kw: OPEN_KW },
    { id: "st1", cat: "SYM", key: 1, q: "How many times have you been to the toilet today?", a: "About six times since this morning. It's very watery.", kw: [["how many times", "toilet"]] },
    { id: "st2", cat: "RF", key: 1, q: "Have you seen any blood or mucus in your stool?", a: "No, no blood.", kw: [["blood", "mucus"]] },
    { id: "h1", cat: "HYD", key: 1, q: "Are you able to keep fluids down?", a: "Yes. Since this morning I can drink water.", kw: [["keep fluids", "fluids", "keep"]] },
    { id: "h2", cat: "HYD", key: 1, q: "Are you passing urine as usual, and do you feel dizzy when you stand up?", a: "Less urine than normal, and I'm a little dizzy.", kw: [["urine", "dizzy", "stand up"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Have you had a high fever or severe tummy pain?", a: "A little crampy pain, and a mild temperature last night.", kw: [["fever", "tummy", "abdominal", "stomach pain", "temperature"]] },
    { id: "x1", cat: "EXP", key: 1, q: "Has anyone who ate with you been ill too?", a: "Yes, my sister. We had seafood at a street stall on Saturday.", kw: [["ate with you", "anyone", "ill too"]] },
    { id: "x2", cat: "EXP", key: 1, q: "Have you travelled recently, taken antibiotics or been in hospital?", a: "No, none of those.", kw: [["travelled", "traveled", "travel", "antibiotics", "hospital"]] },
    { id: "p1", cat: "PMH", key: 0, q: "Do you have any medical conditions?", a: "No, I'm usually healthy.", kw: [["medical condition", "medical conditions", "medical problem", "health problem"]] },
    { id: "d1", cat: "DH", key: 1, q: "Have you taken anything for it?", a: "I bought some loperamide, but I haven't taken it yet.", kw: [["taken anything", "taken"]] },
    { id: "d2", cat: "DH", key: 0, q: "Are you allergic to any medicines?", a: "No.", kw: ALLERGY_KW },
    { id: "i1", cat: "ICE", key: 1, q: "What's your main worry?", a: "I have to teach tomorrow. And was it the seafood?", kw: WORRY_KW },
    { id: "i2", cat: "ICE", key: 1, q: "What would you like us to do today?", a: "Something to stop it quickly.", kw: ICE_KW }
  ],
  bad: [
    { cat: "HYD", q: "Are you clinically dehydrated?", a: "How would I know?", why: "Hỏi thẳng kết luận chuyên môn mà bệnh nhân không tự đánh giá được.", better: "Are you passing urine as usual, and do you feel dizzy when you stand up?" },
    { cat: "ICE", q: "Well, you shouldn't eat street food.", a: "…Right.", why: "Phán xét, không giúp ích.", better: "What's your main worry?" }
  ],
  summary: {
    scaffold: "Ms Thu Bui is a …-year-old … with a …-day history of …",
    model: "Ms Thu Bui is a 31-year-old teacher with a one-day history of watery diarrhoea, about six times today, and vomiting last night, after eating seafood from a street stall. Her sister has similar symptoms. There is no blood in the stool, only mild cramps and a mild fever. She can keep fluids down but is passing less urine and feels a little dizzy. She has not travelled, taken antibiotics or been in hospital. She wants something to stop it so she can work.",
    kw: [["31", "thirty-one"], ["one-day", "yesterday", "one day"], ["watery", "diarrhoea", "diarrhea"], ["six", "6"], ["vomit", "sick"], ["seafood", "street"], ["sister"], ["blood"], ["fluid", "urine", "dizzy"], ["travel", "antibiotic"]],
    labels: ["tuổi", "thời gian", "phân nước", "số lần", "nôn", "thức ăn nghi ngờ", "người ăn cùng", "không máu", "mất nước", "phơi nhiễm khác"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Acute gastroenteritis, probably food-related", "Inflammatory bowel disease", "Appendicitis", "C. difficile infection"], a: 0,
    why: "Tiêu chảy cấp phân nước, nôn, người ăn cùng cũng bị, không máu, không sốt cao → viêm dạ dày ruột cấp, nhiều khả năng do thức ăn, thường tự khỏi. Quan trọng nhất là bù nước bằng dung dịch oresol. Không dùng thuốc cầm tiêu chảy khi phân có máu hoặc sốt cao. C. difficile cần nghĩ tới khi mới dùng kháng sinh hoặc nằm viện." },
  explain: { q: "Which explanation is best for Ms Bui?", opts: [
      "You have infective gastroenteritis; oral rehydration therapy is indicated.",
      "It's most likely a stomach bug from the food, and it usually settles in a few days. The most important thing is to replace the fluid you're losing with oral rehydration solution, little and often. Wash your hands well so it doesn't spread. Come back if you see blood, or if you can't keep fluids down.",
      "Just take the loperamide and go to work."], a: 1,
    why: "Tập trung vào việc quan trọng nhất (bù nước), phòng lây lan và dặn dấu hiệu cần quay lại." }
},
{
  id: "C11", group: "screen", title: "Itchy rash", vi: "Ngứa, phát ban", rec: ["M2"],
  patient: { name: "Ms Linh Dang", age: 22, job: "university student", av: "LD" },
  setting: "Primary care screening clinic",
  task: "Chị Linh bị ban ngứa tái phát. Hãy khai thác vị trí, tính chất, yếu tố khởi phát, tiền sử dị ứng, dấu hiệu nhiễm trùng, và tìm hiểu nỗi lo về thuốc bôi corticoid.",
  cats: [["open", "Mở đầu"], ["SK", "The rash (tổn thương da)"], ["TRG", "Triggers (yếu tố khởi phát)"], ["RF", "Red flags (dấu hiệu cảnh báo)"], ["PMH", "Past & family history (tiền sử)"], ["DH", "Drugs & allergies (thuốc, dị ứng)"], ["ICE", "Ideas, concerns, expectations"]],
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Hi, I'm Dr Khoi. What brings you in today?", a: "I've got an itchy rash on my arms and legs. It keeps coming back.", kw: OPEN_KW },
    { id: "k1", cat: "SK", key: 1, q: "Where is the rash, and when did it start this time?", a: "In the creases of my elbows and behind my knees. This time it's been two weeks.", kw: [["where is the rash", "where", "this time"]] },
    { id: "k2", cat: "SK", key: 1, q: "Is it itchy, and is it worse at night?", a: "Very itchy, especially at night. I scratch it in my sleep.", kw: [["itchy", "itch", "at night"]] },
    { id: "k3", cat: "SK", key: 1, q: "What does it look like? Is it red, dry or weeping?", a: "Red and dry. Sometimes it cracks.", kw: [["look like", "weeping", "dry"]] },
    { id: "t1", cat: "TRG", key: 1, q: "Have you used any new soaps, creams or washing powder?", a: "I started a new shower gel last month.", kw: [["soap", "soaps", "washing powder", "shower gel", "new"]] },
    { id: "t2", cat: "TRG", key: 1, q: "Does anything make it worse, like stress or hot weather?", a: "Exams and hot weather make it much worse.", kw: [["worse", "stress", "hot weather"]] },
    { id: "rf1", cat: "RF", key: 1, q: "Have you had any painful blisters, a fever, or skin that is hot and spreading?", a: "No, nothing like that.", kw: [["blisters", "fever", "spreading"]] },
    { id: "p1", cat: "PMH", key: 1, q: "Do you or your family have asthma or hay fever?", a: "I had asthma as a child. My mother has hay fever.", kw: [["asthma", "hay fever"]] },
    { id: "p2", cat: "PMH", key: 0, q: "Does anyone at home have an itchy rash too?", a: "No, only me.", kw: [["anyone at home", "at home"]] },
    { id: "d1", cat: "DH", key: 1, q: "What have you tried for it so far?", a: "A cream from the pharmacy. I don't know what it was.", kw: [["tried", "so far"]] },
    { id: "d2", cat: "DH", key: 0, q: "Are you allergic to any medicines?", a: "No.", kw: ALLERGY_KW },
    { id: "i1", cat: "ICE", key: 1, q: "Is there anything worrying you about it?", a: "Is it contagious? My roommate keeps asking.", kw: WORRY_KW },
    { id: "i2", cat: "ICE", key: 1, q: "How do you feel about using a steroid cream?", a: "I'm scared of steroids. I heard they make the skin thin.", kw: [["steroid", "steroids"]] }
  ],
  bad: [
    { cat: "SK", q: "Is the pruritus nocturnal?", a: "Sorry?", why: "Thuật ngữ chuyên môn.", better: "Is it itchy, and is it worse at night?" },
    { cat: "ICE", q: "Everyone gets eczema. It's nothing.", a: "But it's really affecting my sleep…", why: "Xem nhẹ ảnh hưởng tới chất lượng sống của bệnh nhân.", better: "Is there anything worrying you about it?" }
  ],
  summary: {
    scaffold: "Ms Linh Dang is a …-year-old … with …",
    model: "Ms Linh Dang is a 22-year-old student with a recurrent, very itchy, red and dry rash in the elbow and knee creases, this time for two weeks. It is worse at night, with stress and hot weather, and may be aggravated by a new shower gel. She had asthma as a child and her mother has hay fever. There are no signs of infection. She is worried it is contagious and is afraid of steroid creams.",
    kw: [["22", "twenty-two"], ["itch"], ["elbow", "knee", "crease"], ["two weeks", "2 weeks", "recurrent"], ["night"], ["red", "dry"], ["stress", "hot"], ["shower gel", "soap"], ["asthma", "hay fever"], ["contagious", "steroid"]],
    labels: ["tuổi", "ngứa", "vị trí nếp gấp", "thời gian, tái phát", "về đêm", "đỏ, khô", "yếu tố tăng", "sữa tắm mới", "cơ địa dị ứng", "mối lo"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Atopic eczema", "Scabies", "Fungal infection (tinea)", "Psoriasis"], a: 0,
    why: "Ngứa nhiều, tái phát, ở nếp gấp khuỷu và khoeo, có tiền sử bản thân và gia đình về cơ địa dị ứng (hen, viêm mũi dị ứng) → viêm da cơ địa. Ghẻ: ngứa về đêm, người trong nhà cũng bị, tổn thương ở kẽ ngón tay. Nấm: mảng hình vòng, bờ rõ. Vảy nến: mảng dày có vảy bạc ở mặt duỗi. Cảnh báo: mụn nước đau mọc thành cụm kèm sốt (eczema herpeticum) cần khám trong ngày." },
  explain: { q: "Which explanation is best for Ms Dang?", opts: [
      "You have atopic dermatitis. Apply a topical corticosteroid twice daily.",
      "This is eczema, a dry and sensitive skin condition that often runs in families. It isn't contagious. Using a moisturiser every day and a soap substitute helps prevent flare-ups. For flare-ups, a steroid cream used for a short time as directed is safe and won't thin your skin.",
      "It's just dry skin. Buy any lotion."], a: 1,
    why: "Trả lời cả hai mối lo (lây, corticoid làm mỏng da), hướng dẫn chăm sóc nền và cách dùng thuốc an toàn." }
},
{
  id: "C12", group: "screen", title: "Knee pain", vi: "Đau khớp gối", rec: ["M4"],
  patient: { name: "Mrs Lan Pham", age: 63, job: "retired accountant", av: "LP" },
  setting: "Primary care screening clinic",
  task: "Bà Lan đau gối phải một năm nay. Hãy khai thác cơn đau, cứng khớp buổi sáng, dấu hiệu viêm nhiễm, ảnh hưởng sinh hoạt, thuốc đang dùng và nỗi lo của bà.",
  cats: SOCRATES_CATS,
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Good morning. How can I help you today?", a: "My right knee has been painful for about a year, and it's getting worse.", kw: OPEN_KW },
    { id: "s1", cat: "S", key: 1, q: "Where exactly is the pain?", a: "On the inside of my right knee.", kw: [["where", "point", "which part"]] },
    { id: "on1", cat: "O", key: 1, q: "How did it start? Did you injure it?", a: "Slowly. There was no injury.", kw: [["how did it start", "injure", "injury", "start", "started"]] },
    { id: "c1", cat: "C", key: 1, q: "What does the pain feel like?", a: "An aching pain, and it sometimes clicks.", kw: [["feel like", "describe", "kind of"]] },
    { id: "t1", cat: "T", key: 1, q: "Is it stiff in the morning, and for how long?", a: "A little stiff, but only for ten minutes or so.", kw: [["stiff", "morning"]] },
    { id: "e1", cat: "E", key: 1, q: "Does anything make it better or worse?", a: "Walking far and going down stairs make it worse. Rest helps.", kw: [["better", "worse", "relieve"]] },
    { id: "v1", cat: "V", key: 0, q: "On a scale of zero to ten, how bad is it?", a: "About five.", kw: SCALE_KW },
    { id: "rf1", cat: "RF", key: 1, q: "Is the knee ever hot, red or very swollen, or have you had a fever?", a: "It swells a little after a long walk, but it's never hot or red.", kw: [["hot", "red", "swollen", "fever"]] },
    { id: "rf2", cat: "RF", key: 1, q: "Does it ever lock or give way?", a: "No, it's never locked.", kw: [["lock", "give way"]] },
    { id: "p1", cat: "PMH", key: 1, q: "Do you have any other health problems?", a: "High blood pressure. And I'm a bit overweight.", kw: [["health problem", "health problems", "medical problem", "conditions"]] },
    { id: "d1", cat: "DH", key: 1, q: "What have you taken for the pain?", a: "Paracetamol, and sometimes ibuprofen tablets.", kw: [["taken", "painkiller", "painkillers", "medication"]] },
    { id: "d2", cat: "DH", key: 0, q: "Are you allergic to any medicines?", a: "No.", kw: ALLERGY_KW },
    { id: "sh1", cat: "SH", key: 1, q: "How is it affecting your daily life?", a: "I've stopped my morning walks with my friends.", kw: [["daily life", "affecting", "affect"]] },
    { id: "i1", cat: "ICE", key: 1, q: "Is anything worrying you about it?", a: "I'm worried I'll end up in a wheelchair, like my mother.", kw: WORRY_KW },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping for today?", a: "Maybe an injection? Or should I stop exercising?", kw: ICE_KW }
  ],
  bad: [
    { cat: "C", q: "Is there any crepitus or effusion?", a: "I'm not sure what you mean.", why: "Thuật ngữ chuyên môn.", better: "Does it click or grate, and does it swell?" },
    { cat: "ICE", q: "At your age, knees just wear out.", a: "So there's nothing I can do?", why: "Thái độ buông xuôi, sai về chuyên môn: vận động và giảm cân giúp cải thiện rõ.", better: "Is anything worrying you about it?" }
  ],
  summary: {
    scaffold: "Mrs Lan Pham is a …-year-old … with a …-year history of …",
    model: "Mrs Lan Pham is a 63-year-old retired accountant with a one-year history of gradually worsening aching pain on the inside of her right knee, worse with walking and stairs and better with rest. Morning stiffness lasts about ten minutes. There is mild swelling after walking but no heat, redness, fever, locking or giving way. She has high blood pressure, is overweight and takes paracetamol and ibuprofen. She has stopped walking and is worried about ending up in a wheelchair.",
    kw: [["63", "sixty-three"], ["one-year", "a year", "one year"], ["knee"], ["walk", "stairs"], ["ten minutes", "10 minutes", "stiff"], ["hot", "red", "lock", "fever"], ["blood pressure", "hypertension"], ["overweight", "weight"], ["ibuprofen", "paracetamol"], ["wheelchair", "worried"]],
    labels: ["tuổi", "thời gian", "vị trí", "yếu tố tăng", "cứng khớp sáng", "không dấu hiệu viêm nhiễm", "tăng huyết áp", "thừa cân", "thuốc", "mối lo"]
  },
  dx: { q: "What is the most likely diagnosis?", opts: ["Knee osteoarthritis", "Septic arthritis", "Gout", "Rheumatoid arthritis"], a: 0,
    why: "Tuổi từ 45, đau liên quan vận động, cứng khớp buổi sáng không quá 30 phút → chẩn đoán lâm sàng thoái hóa khớp gối (NICE NG226), không cần X-quang. Điều trị chính: tập mạnh cơ, giảm cân, NSAID bôi tại chỗ. NICE không khuyến cáo dùng thường quy paracetamol hay opioid yếu. Ibuprofen uống kéo dài không tốt cho người tăng huyết áp. Khớp nóng, đỏ, sưng kèm sốt → nghĩ viêm khớp nhiễm khuẩn, cấp cứu." },
  explain: { q: "Which explanation is best for Mrs Pham?", opts: [
      "You have OA with degenerative changes; imaging isn't required.",
      "This sounds like osteoarthritis, which is wear and repair in the joint. It's very common and doesn't usually lead to a wheelchair. Strengthening exercises and keeping active are the best treatment, and losing a little weight takes pressure off the knee. A painkiller gel rubbed on the knee is safer for your stomach and blood pressure than ibuprofen tablets.",
      "It's your age. There's nothing we can do."], a: 1,
    why: "Trấn an nỗi sợ ngồi xe lăn, khuyến khích tiếp tục vận động và giải thích an toàn thuốc." }
},
{
  id: "C13", group: "screen", title: "Low mood", vi: "Buồn chán, mất hứng thú (sàng lọc trầm cảm)", rec: ["M2", "M6"],
  patient: { name: "Mr Bao Tran", age: 27, job: "software developer", av: "BT" },
  setting: "Primary care screening clinic",
  task: "Anh Bảo thấy buồn chán hai tháng nay. Hãy hỏi theo PHQ-2, giấc ngủ, sinh hoạt, và bắt buộc hỏi về ý nghĩ tự hại một cách tế nhị. Tôn trọng mong muốn giữ bí mật của anh.",
  cats: [["open", "Mở đầu"], ["MOOD", "Mood (tâm trạng)"], ["FUNC", "Sleep & daily life (giấc ngủ, sinh hoạt)"], ["RISK", "Risk (nguy cơ)"], ["PMH", "Past history (tiền sử)"], ["DH", "Drugs & alcohol (thuốc, rượu)"], ["SH", "Support (hỗ trợ)"], ["ICE", "Ideas, concerns, expectations"]],
  qs: [
    { id: "o1", cat: "open", key: 1, q: "Hello, I'm Dr Khoi. What brings you in today?", a: "I've been feeling really down for the last couple of months. I'm not sure why.", kw: OPEN_KW },
    { id: "m1", cat: "MOOD", key: 1, q: "Over the last two weeks, how often have you felt down, depressed or hopeless?", a: "Most days, to be honest.", kw: [["depressed", "hopeless", "felt down"]] },
    { id: "m2", cat: "MOOD", key: 1, q: "Have you lost interest or pleasure in things you used to enjoy?", a: "Yes. I used to play football, but I just can't be bothered now.", kw: [["interest", "pleasure", "enjoy"]] },
    { id: "m3", cat: "MOOD", key: 0, q: "Do you feel anxious or on edge a lot of the time?", a: "I worry about work all the time. My heart races on Sunday nights.", kw: [["anxious", "anxiety", "on edge", "nervous"]] },
    { id: "f1", cat: "FUNC", key: 1, q: "How are you sleeping and eating?", a: "I wake up at four and can't get back to sleep. I've lost my appetite.", kw: [["sleeping", "sleep", "eating", "appetite"]] },
    { id: "f2", cat: "FUNC", key: 1, q: "How are things at work and at home?", a: "I'm behind at work. I live alone and I've stopped seeing my friends.", kw: [["at work", "at home", "friends"]] },
    { id: "r1", cat: "RISK", key: 1, q: "Sometimes when people feel this low, they have thoughts of harming themselves or ending their life. Have you had any thoughts like that?", a: "Sometimes I think everyone would be better off without me. But I have no plans. I wouldn't do anything.", kw: [["harming", "harm", "ending their life", "end your life", "suicide", "suicidal", "hurt yourself"]] },
    { id: "r2", cat: "RISK", key: 1, q: "Have you made any plans, or ever tried to hurt yourself in the past?", a: "No, never.", kw: [["made any plans", "plans", "ever tried", "tried to hurt"]] },
    { id: "p1", cat: "PMH", key: 0, q: "Have you had problems with your mood before, or any other health problems?", a: "No. I had a thyroid test years ago, and it was normal.", kw: [["mood before", "health problems", "health problem"]] },
    { id: "d1", cat: "DH", key: 1, q: "Are you taking any medicines, or using alcohol or drugs to cope?", a: "I drink four or five beers most nights to help me sleep.", kw: [["alcohol", "drugs", "cope", "medicines"]] },
    { id: "s1", cat: "SH", key: 1, q: "Who do you have for support?", a: "My sister. She's the one who told me to come.", kw: [["support", "who do you have"]] },
    { id: "i1", cat: "ICE", key: 1, q: "What do you think is going on?", a: "Maybe I'm just weak. I'm embarrassed to be here.", kw: [["going on", "think it is", "causing"]] },
    { id: "i2", cat: "ICE", key: 1, q: "What were you hoping we could do today?", a: "I don't want tablets. And I don't want my company to find out.", kw: ICE_KW }
  ],
  bad: [
    { cat: "MOOD", q: "Do you have anhedonia?", a: "What's that?", why: "Thuật ngữ chuyên môn.", better: "Have you lost interest or pleasure in things you used to enjoy?" },
    { cat: "ICE", q: "Just try to think positively and exercise more.", a: "I've tried…", why: "Xem nhẹ, khiến bệnh nhân cảm thấy không được lắng nghe.", better: "What do you think is going on?" },
    { cat: "RISK", q: "You're not going to do anything stupid, are you?", a: "…No.", why: "Câu hỏi dẫn dắt và mang tính phán xét, khiến bệnh nhân khó nói thật.", better: "Sometimes when people feel this low, they have thoughts of harming themselves or ending their life. Have you had any thoughts like that?" }
  ],
  summary: {
    scaffold: "Mr Bao Tran is a …-year-old … with …",
    model: "Mr Bao Tran is a 27-year-old software developer with two months of low mood most days, loss of interest, early morning waking and poor appetite. He worries about work, lives alone and has withdrawn from friends. He has passive thoughts that others would be better off without him, but no plans and no previous self-harm. He drinks four or five beers most nights. His sister supports him. He feels embarrassed, does not want medication, and is worried about confidentiality at work.",
    kw: [["27", "twenty-seven"], ["two months", "2 months", "couple of months"], ["low mood", "down", "depress"], ["interest"], ["sleep", "waking", "wake"], ["appetite"], ["alone", "friends"], ["thought", "plan", "better off", "suicid"], ["beer", "alcohol", "drink"], ["tablet", "medication", "confidential", "company"]],
    labels: ["tuổi", "thời gian", "khí sắc", "mất hứng thú", "giấc ngủ", "ăn uống", "thu mình", "đánh giá nguy cơ", "rượu", "mong muốn, bí mật"]
  },
  dx: { q: "What is the most important next step?", opts: ["Assess and document suicide risk and agree a safety plan, alongside a likely diagnosis of depression", "Prescribe an antidepressant and review in six months", "Tell him it's normal stress and he'll be fine", "Refer him to cardiology for his palpitations"], a: 0,
    why: "PHQ-2 dương tính (buồn chán và mất hứng thú hầu hết các ngày) kèm rối loạn giấc ngủ, ăn uống → nghĩ trầm cảm, có lo âu đi kèm; rượu làm nặng thêm. Có ý nghĩ thụ động về cái chết → phải hỏi rõ kế hoạch, phương tiện, yếu tố bảo vệ, lập kế hoạch an toàn và hẹn tái khám sớm. Ý nghĩ tự sát có kế hoạch cụ thể → chuyển chuyên khoa khẩn." },
  explain: { q: "Which response is best for Mr Tran?", opts: [
      "You have major depressive disorder, so I'll start an SSRI.",
      "Thank you for telling me. That took courage. What you're describing sounds like depression. It's a common illness, not a weakness, and it can get better. There are options besides tablets, like talking therapy and slowly doing more of the things you used to enjoy. What we talk about here stays confidential. Let's make a plan for what to do if the dark thoughts get stronger, and I'd like to see you again next week.",
      "Everyone feels like this sometimes. Just cheer up."], a: 1,
    why: "Ghi nhận cảm xúc, bình thường hóa mà không xem nhẹ, tôn trọng mong muốn không dùng thuốc, bảo đảm bí mật và có kế hoạch an toàn." }
}
];
CASES.push(...SCREEN_CASES);
