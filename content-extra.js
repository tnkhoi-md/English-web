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
