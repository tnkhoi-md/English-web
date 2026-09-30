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
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write a short symptom report in 3–4 sentences. Say the main symptom, where it is, when it started, and one associated symptom.", "vi": "Viết 3–4 câu mô tả triệu chứng: triệu chứng chính, vị trí, thời điểm khởi phát và một triệu chứng kèm theo.", "minWords": 3, "maxWords": 80, "model": "I have a headache. It started yesterday. I also have a sore throat and a cough.", "kw": ["headache", "started", "throat", "cough", "pain"]},
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
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write the opening of a consultation. Greet the patient, introduce yourself, confirm their identity, and ask an open question.", "vi": "Viết phần mở đầu một buổi khám: chào bệnh nhân, giới thiệu, xác nhận danh tính và hỏi một câu mở.", "minWords": 3, "maxWords": 80, "model": "Good morning. My name is Dr. Minh. Could I check your name and date of birth? What brought you in today?", "kw": ["hello", "name", "date of birth", "help", "today", "brought"]},
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
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write 3–4 questions about the timing of a symptom. Ask when it started, whether it is changing, and how often it happens.", "vi": "Viết 3–4 câu hỏi về thời gian của một triệu chứng: bắt đầu khi nào, có thay đổi không và xảy ra bao lâu một lần.", "minWords": 3, "maxWords": 80, "model": "When did the cough start? How long have you had it? How often does it happen? Has it got worse?", "kw": ["when", "started", "how long", "often", "changed", "worse"]},
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
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write four simple questions about pain using four SOCRATES areas: site, character, aggravating factors, and severity.", "vi": "Viết bốn câu hỏi đơn giản về đau, dùng bốn thành phần SOCRATES: vị trí, tính chất, yếu tố làm nặng và mức độ.", "minWords": 3, "maxWords": 80, "model": "Where exactly is the pain? What does it feel like? Does anything make it worse? On a scale of zero to ten, how bad is it?", "kw": ["where", "feel like", "worse", "better", "scale", "pain"]},
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
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write a two-sentence patient-friendly explanation of one medical word. Use a plain-English meaning rather than only the technical term.", "vi": "Viết hai câu giải thích một thuật ngữ y khoa cho bệnh nhân bằng tiếng Anh đời thường, không chỉ lặp lại thuật ngữ.", "minWords": 4, "maxWords": 80, "model": "Gastritis means that the lining of your stomach is inflamed. It can cause a burning pain.", "kw": ["means", "stomach", "heart", "inflamed", "pain", "fast"]},
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
    {"t": "write", "k": "writing", "title": "Short writing", "prompt": "Write a short medication explanation. Include how often to take it, one precaution, and a teach-back question.", "vi": "Viết lời dặn thuốc ngắn: tần suất dùng, một điều cần lưu ý và một câu teach-back.", "minWords": 4, "maxWords": 80, "model": "Take one tablet twice a day. It is important to avoid alcohol for now. Could you tell me how you’ll take it?", "kw": ["take", "twice", "avoid", "important", "tell", "how"]},
    { t: "speak", title: "Give advice and check", prompt: "Tell a patient how to take a painkiller (three times a day, after food), give one piece of advice, and check understanding.",
      vi: "Dặn cách uống thuốc giảm đau (ngày ba lần, sau ăn), thêm một lời khuyên, rồi kiểm tra bệnh nhân hiểu chưa.",
      models: ["You should take one painkiller three times a day, after food.", "Try to rest and drink plenty of water.", "Could you tell me how you'll take them?"],
      kw: [["three times a day", "three times"], ["after food", "after meals", "after eating", "with food"], ["should", "try to", "avoid", "it's important"], ["could you tell me", "can you tell me", "explain back", "how you'll take", "how you will take"]], labels: ["liều", "thời điểm", "lời khuyên", "teach-back"] }
  ]
}
];
