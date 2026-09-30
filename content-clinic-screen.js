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
