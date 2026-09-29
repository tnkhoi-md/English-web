
const KEY = "tnkhoi_english_v1";

const defaultState = {
  profile: { level: "A1", xp: 120, streak: 3 },
  skills: { Vocabulary: 62, Grammar: 55, Listening: 48, Speaking: 43, Reading: 51, Writing: 24, Pronunciation: 39 },
  words: {
    headache:{meaning:"đau đầu",ipa:"/ˈhedeɪk/",mastery:72,domain:"Health",status:"developing"},
    cough:{meaning:"ho",ipa:"/kɒf/ · /kɔːf/",mastery:64,domain:"Health",status:"developing"},
    fever:{meaning:"sốt",ipa:"/ˈfiːvə(r)/",mastery:58,domain:"Health",status:"developing"},
    pain:{meaning:"đau",ipa:"/peɪn/",mastery:81,domain:"Health",status:"strong"},
    throat:{meaning:"họng",ipa:"/θrəʊt/ · /θroʊt/",mastery:45,domain:"Health",status:"developing"},
    symptom:{meaning:"triệu chứng",ipa:"/ˈsɪmptəm/",mastery:32,domain:"Health",status:"recognition"}
  },
  completed: [],
  lessonEvidence: {},
  theme: "system"
};

const lesson = {
  id:"A1_HEALTH_SYMPTOMS_001",
  title:"Describing Symptoms",
  subtitle:"Say what is wrong and respond to simple health questions.",
  duration:"8 min",
  level:"A1",
  domain:"Health",
  why:"Listening recognition is developing, while several symptom words are already partly known. This lesson converts that knowledge into useful speaking.",
  steps:[
    {type:"intro", title:"A small skill with real-world value", body:"Today you will learn to describe a simple health problem, ask where it hurts, and answer a few basic questions.", vi:"Hôm nay bạn sẽ học cách mô tả một vấn đề sức khỏe đơn giản và trả lời một vài câu hỏi cơ bản."},
    {type:"vocab", word:"headache", meaning:"đau đầu", ipa:"/ˈhedeɪk/", example:"I have a headache.", vi:"Tôi bị đau đầu."},
    {type:"vocab", word:"fever", meaning:"sốt", ipa:"/ˈfiːvə(r)/", example:"I have a fever.", vi:"Tôi bị sốt."},
    {type:"vocab", word:"cough", meaning:"ho", ipa:"/kɒf/ · /kɔːf/", example:"I have a cough.", vi:"Tôi bị ho."},
    {type:"vocab", word:"sore throat", meaning:"đau/rát họng", ipa:"/sɔːr θrəʊt/", example:"I have a sore throat.", vi:"Tôi bị đau/rát họng."},
    {type:"listen", title:"Listen for the problem", script:"Doctor: What’s wrong?\\nPatient: I don’t feel well.\\nDoctor: What’s the problem?\\nPatient: I have a headache and a cough.\\nDoctor: Do you have a fever?\\nPatient: Yes, I do.\\nDoctor: Where does it hurt?\\nPatient: My throat hurts.", question:"What problems does the patient have?", choices:["A headache and a cough","A stomachache and back pain","Only a fever"], answer:0},
    {type:"grammar", title:"One useful pattern", body:"Use have + symptom to report a problem.", example:"I have a headache.\\nI have a cough.\\nI have a fever.", vi:"Dùng have + triệu chứng để nói mình đang gặp vấn đề gì."},
    {type:"pron", title:"Pronunciation focus: /θ/", body:"In throat, the first sound is /θ/. Put your tongue lightly between your teeth and let air pass.", example:"throat → /θrəʊt/", vi:"Đặt đầu lưỡi nhẹ giữa hai răng và đẩy hơi ra."},
    {type:"speak", title:"Your turn", prompt:"Imagine you don't feel well. Say two things to a doctor.", hint:"Try: I have a headache. I have a cough.", vi:"Hãy tưởng tượng bạn không khỏe. Nói hai điều với bác sĩ."},
    {type:"case", title:"Mini case", body:"Nam doesn't feel well today. He has a headache and a cough. He also has a fever.", question:"Which symptoms does Nam have?", choices:["Headache, cough and fever","Back pain and sore throat","Only a headache"], answer:0},
    {type:"mediation", title:"Tell someone else", body:"Mai has a headache and a sore throat. She also has a cough.", prompt:"Tell your friend what is wrong with Mai.", hint:"Mai isn't feeling well. She has ...", vi:"Đọc thông tin rồi nói lại cho người khác bằng tiếng Anh."},
    {type:"done", title:"Evidence captured", body:"You practiced recognition, recall, pronunciation, speaking and transfer. The system will use this evidence to decide what you should do next."}
  ]
};

let state = loadState();
let view = "today";
let lessonStep = 0;
let lessonResults = {};
let toastTimer;

function loadState(){
  try{
    const saved = JSON.parse(localStorage.getItem(KEY));
    return saved ? {...defaultState,...saved,skills:{...defaultState.skills,...saved.skills},words:{...defaultState.words,...saved.words}} : structuredClone(defaultState);
  }catch(e){ return structuredClone(defaultState); }
}
function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }
function esc(s){ return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function toast(msg){
  clearTimeout(toastTimer);
  document.querySelector(".toast")?.remove();
  const el=document.createElement("div");el.className="toast";el.textContent=msg;document.body.appendChild(el);
  toastTimer=setTimeout(()=>el.remove(),2200);
}
function setView(v){ view=v; render(); window.scrollTo({top:0,behavior:"smooth"}); }
function toggleTheme(){
  state.theme = state.theme==="dark" ? "light" : "dark"; save(); render();
}
function applyTheme(){
  const dark = state.theme==="dark" || (state.theme==="system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark",dark);
}
function navItems(){
  return [["today","Today"],["learn","Learn"],["input","Input"],["words","My Word"],["profile","Profile"]];
}
function render(){
  applyTheme();
  const app=document.getElementById("app");
  if(view==="lesson") app.innerHTML=renderLesson();
  else app.innerHTML=renderShell(renderView(view));
  bind();
}
function renderShell(content){
  const nav=navItems();
  return `<div class="app-shell">
    <header class="topbar"><div class="topbar-inner">
      <div class="brand">Tnkhoi English</div>
      <div class="profile-pill"><span class="dot"></span>${esc(state.profile.level)} · ${state.profile.xp} XP</div>
    </div></header>
    <div class="layout">
      <aside class="sidebar"><div class="nav">${nav.map(([id,label])=>`<button class="${view===id?"active":""}" data-nav="${id}">${label}</button>`).join("")}</div></aside>
      <main>${content}</main>
    </div>
    <nav class="bottom-nav">${nav.map(([id,label])=>`<button class="${view===id?"active":""}" data-nav="${id}">${label}</button>`).join("")}</nav>
  </div>`;
}
function renderView(v){
  if(v==="today") return renderToday();
  if(v==="learn") return renderLearn();
  if(v==="input") return renderInput();
  if(v==="words") return renderWords();
  return renderProfile();
}
function renderToday(){
  const completed=state.completed.includes(lesson.id);
  const nextTitle=completed ? "Talking About Duration" : lesson.title;
  const nextSub=completed ? "A1 Health · 8 min" : lesson.subtitle;
  return `<section class="hero">
    <div class="eyebrow">GOOD ${new Date().getHours()<12?"MORNING":new Date().getHours()<18?"AFTERNOON":"EVENING"}</div>
    <h1>Your next useful step.</h1>
    <p class="muted">Current profile: <strong>${esc(state.profile.level)}</strong>. The system chooses a session from your gaps, goals and recent evidence.</p>
  </section>
  <div class="card next-card">
    <div class="eyebrow">NEXT BEST LESSON</div>
    <h2>${esc(nextTitle)}</h2>
    <p>${esc(nextSub)}</p>
    <div class="badges"><span class="badge dark">${completed?"NEXT":"8 MIN"}</span><span class="badge">Health</span><span class="badge">Listening + Speaking</span></div>
    <p class="muted"><strong>Why this?</strong> ${completed?"You completed the core symptom lesson. The next concept is duration.":"Your listening and speaking are developing, while symptom vocabulary is already partly familiar."}</p>
    <div class="button-row"><button class="btn primary" data-start-lesson>${completed?"Preview next lesson":"Start lesson"}</button><button class="btn secondary" data-nav="learn">Explore curriculum</button></div>
  </div>
  <div class="grid grid-3" style="margin-top:16px">
    ${statCard("Current level",state.profile.level,"A0 → C1")}
    ${statCard("Streak",state.profile.streak+" days","Consistency, not punishment")}
    ${statCard("XP",state.profile.xp,"Learning evidence")}
  </div>
  <div class="grid grid-2" style="margin-top:16px">
    <div class="card"><h3>What your profile says</h3>${Object.entries(state.skills).map(([k,v])=>skillRow(k,v)).join("")}</div>
    <div class="card"><h3>Today's options</h3>
      <div class="word-list">
        <div class="word-item"><div><strong>🎧 Listening</strong><div class="word-meta">8 min · symptom dialogue</div></div><button class="btn small secondary" data-start-lesson>Start</button></div>
        <div class="word-item"><div><strong>🗣 Speaking</strong><div class="word-meta">2 min · describe a problem</div></div><button class="btn small secondary" data-start-lesson>Start</button></div>
        <div class="word-item"><div><strong>🔁 Quick review</strong><div class="word-meta">3 items need evidence</div></div><button class="btn small secondary" data-nav="words">Open</button></div>
      </div>
    </div>
  </div>`;
}
function statCard(a,b,c){return `<div class="card"><div class="eyebrow">${a}</div><div class="stat"><div class="number">${b}</div></div><div class="muted" style="font-size:12px;margin-top:5px">${c}</div></div>`}
function skillRow(k,v){return `<div class="skill-row"><span>${esc(k)}</span><div class="skill-bar"><div style="width:${v}%"></div></div><strong>${v}</strong></div>`}
function renderLearn(){
  return `<section class="hero"><div class="eyebrow">CURRICULUM</div><h1>Learn.</h1><p class="muted">A0 → C1. The map is structured, but your path is adaptive.</p></section>
  <div class="grid grid-2">
    <div class="card"><div class="eyebrow">CURRENT</div><h2>A1 · Health</h2><p>Build a useful communication spine from symptoms to basic health interaction.</p>
      <div class="progress"><div style="width:32%"></div></div><p class="muted">2 / 6 core learning objects explored</p>
      <button class="btn primary" data-start-lesson>Continue</button>
    </div>
    <div class="card"><div class="eyebrow">FOUNDATION</div><h2>A0 · Core English</h2><p>Sound, identity, everyday objects, essential actions, time, place and survival communication.</p><div class="badges"><span class="badge">Vocabulary</span><span class="badge">Grammar</span><span class="badge">Pronunciation</span></div></div>
  </div>
  <div class="card" style="margin-top:16px"><h3>Learning spine</h3>
    ${["A0 Foundation","A1 Functional English","A2 Independent English","B1 Communication","B2 Professional & Academic","C1 Advanced / Medical / Research"].map((x,i)=>`<div class="word-item" style="margin-top:10px"><div><strong>${x}</strong><div class="word-meta">${i<2?"Available now":"Future level · unlocked by evidence"}</div></div><span class="badge">${i===1?"CURRENT":i===0?"FOUNDATION":"LOCKED"}</span></div>`).join("")}
  </div>`;
}
function renderInput(){
  return `<section class="hero"><div class="eyebrow">ENGLISH INPUT</div><h1>Bring the real world in.</h1><p class="muted">This area will turn articles, papers, videos and other content into calibrated learning experiences.</p></section>
  <div class="grid grid-2">
    <div class="card"><h3>Controlled input</h3><p>Short dialogues, graded stories and level-calibrated listening.</p><button class="btn secondary" data-start-lesson>Try a dialogue</button></div>
    <div class="card"><h3>Bring Anything</h3><p>In the next build, paste a URL, upload a PDF or add text. The engine will identify what is worth learning for you.</p><button class="btn ghost" data-demo-import>Preview workflow</button></div>
  </div>
  <div class="card" style="margin-top:16px"><h3>Input pipeline</h3><p class="muted">SOURCE → DIFFICULTY → KEY LANGUAGE → PREREQUISITES → LEARNING OBJECTS → PERSONAL LESSON</p></div>`;
}
function renderWords(){
  const words=Object.entries(state.words);
  return `<section class="hero"><div class="eyebrow">PERSONAL LEXICAL KNOWLEDGE BASE</div><h1>My Word.</h1><p class="muted">Not a word list. A memory of what you know, how well you know it, and where you have encountered it.</p></section>
  <div class="kpi">
    ${statCard("Words tracked",words.length,"Across your learning")}
    ${statCard("Strong",words.filter(([_,w])=>w.mastery>=75).length,"High confidence")}
    ${statCard("Developing",words.filter(([_,w])=>w.mastery<75).length,"Needs evidence")}
  </div>
  <div class="card" style="margin-top:16px"><div class="word-list">${words.map(([word,w])=>`
    <div class="word-item">
      <div class="word-main"><strong>${esc(word)}</strong><div class="word-meta">${esc(w.meaning)} · ${esc(w.domain)} · ${esc(w.ipa)}</div></div>
      <div style="text-align:right"><strong>${w.mastery}%</strong><div class="word-meta">${w.status}</div></div>
    </div>`).join("")}</div></div>`;
}
function renderProfile(){
  return `<section class="hero"><div class="eyebrow">LEARNER MODEL</div><h1>Your profile.</h1><p class="muted">The system tracks evidence across skills rather than reducing you to one number.</p></section>
  <div class="grid grid-2">
    <div class="card"><h3>Current profile</h3><div class="number" style="font-size:44px">${esc(state.profile.level)}</div><p class="muted">General English foundation with a growing Health / Medical bridge.</p><div class="badges"><span class="badge dark">${state.profile.xp} XP</span><span class="badge">${state.profile.streak}-day streak</span></div></div>
    <div class="card"><h3>Theme</h3><p class="muted">Follows your device by default. You can override it here.</p><div class="button-row"><button class="btn secondary" data-theme>Toggle dark / light</button><button class="btn ghost" data-reset>Reset demo data</button></div></div>
  </div>
  <div class="card" style="margin-top:16px"><h3>Skill profile</h3>${Object.entries(state.skills).map(([k,v])=>skillRow(k,v)).join("")}</div>
  <div class="card" style="margin-top:16px"><h3>Design principle</h3><p>Complexity belongs inside the engine, not in the interface. The system should remember everything relevant without turning memory into a backlog.</p></div>`;
}
function renderLesson(){
  const s=lesson.steps[lessonStep];
  const total=lesson.steps.length;
  return `<div class="lesson-shell">
    <div class="lesson-header"><button class="back" data-exit-lesson>← Exit</button><div class="step">${lessonStep+1} / ${total}</div></div>
    <div class="badges"><span class="badge dark">${lesson.level}</span><span class="badge">${lesson.domain}</span><span class="badge">${lesson.duration}</span></div>
    <div class="card lesson-card"><div class="content">${renderLessonStep(s)}</div></div>
    <div class="footer-note">Evidence is saved locally on this device for this prototype.</div>
  </div>`;
}
function renderLessonStep(s){
  if(s.type==="intro") return `<div class="eyebrow">TODAY'S SKILL</div><h2>${esc(s.title)}</h2><p style="font-size:20px">${esc(s.body)}</p><p class="vi">${esc(s.vi)}</p><div class="button-row"><button class="btn primary" data-next>Start</button></div>`;
  if(s.type==="vocab") return `<div class="eyebrow">VOCABULARY</div><div class="big-word">${esc(s.word)}</div><div class="ipa">${esc(s.ipa)}</div><p>${esc(s.meaning)}</p><div class="example">${esc(s.example)}</div><p class="vi">${esc(s.vi)}</p><div class="audio-box"><button class="btn secondary" data-speak="${esc(s.word)}">🔊 Hear word</button><span class="muted">Browser speech · audio is a fallback in this prototype</span></div><div class="button-row"><button class="btn primary" data-next>Got it</button></div>`;
  if(s.type==="listen") return `<div class="eyebrow">LISTENING</div><h2>${esc(s.title)}</h2><div class="audio-box"><button class="btn secondary" data-speak="${esc(s.script.replace(/\\n/g," "))}">🔊 Play dialogue</button><span class="muted">Listen first, then answer.</span></div><p>${esc(s.question)}</p><div class="choice-grid">${s.choices.map((c,i)=>`<button type="button" class="choice ${lessonResults[lessonStep]!==undefined?(i===s.answer?"correct":lessonResults[lessonStep]===i?"wrong":""):""}" data-choice="${i}">${esc(c)}</button>`).join("")}</div>${lessonResults[lessonStep]!==undefined?`<div class="feedback">${lessonResults[lessonStep]===s.answer?"Correct. Your listening evidence is stronger.":"Not quite. Listen again and focus on the symptoms."}</div><div class="button-row"><button type="button" class="btn primary" data-next>${lessonStep===total-1?"Finish":"Continue"}</button></div>`:`<div class="footer-note">Tap one answer to continue.</div>`}${lessonResults[lessonStep]===undefined?"":""}`;
  if(s.type==="grammar") return `<div class="eyebrow">LANGUAGE PATTERN</div><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p><div class="example">${esc(s.example).replace(/\\n/g,"<br>")}</div><p class="vi">${esc(s.vi)}</p><div class="button-row"><button class="btn primary" data-next>Practice</button></div>`;
  if(s.type==="pron") return `<div class="eyebrow">PRONUNCIATION</div><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p><div class="example">${esc(s.example)}</div><p class="vi">${esc(s.vi)}</p><div class="audio-box"><button class="btn secondary" data-speak="throat">🔊 Listen</button><button class="btn secondary" data-speak="My throat hurts.">🔊 Phrase</button></div><div class="button-row"><button class="btn primary" data-next>I can say it</button></div>`;
  if(s.type==="speak") return `<div class="eyebrow">SPEAKING</div><h2>${esc(s.title)}</h2><p style="font-size:18px">${esc(s.prompt)}</p><textarea id="speakInput" rows="4" placeholder="Type what you would say, then say it aloud..."></textarea><p class="muted">${esc(s.hint)}</p><p class="vi">${esc(s.vi)}</p><div class="button-row"><button class="btn secondary" data-speak-input>🔊 Hear model</button><button class="btn primary" data-submit-speak>Submit evidence</button></div>`;
  if(s.type==="case") return `<div class="eyebrow">TRANSFER</div><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p><p><strong>${esc(s.question)}</strong></p><div class="choice-grid">${s.choices.map((c,i)=>`<button type="button" class="choice ${lessonResults[lessonStep]!==undefined?(i===s.answer?"correct":lessonResults[lessonStep]===i?"wrong":""):""}" data-choice="${i}">${esc(c)}</button>`).join("")}</div>${lessonResults[lessonStep]!==undefined?`<div class="feedback">${lessonResults[lessonStep]===s.answer?"Correct. This is transfer evidence.":"Try again. Re-read the case and identify all the symptoms."}</div><div class="button-row"><button type="button" class="btn primary" data-next>Continue</button></div>`:`<div class="footer-note">Tap one answer to continue.</div>`}`;
  if(s.type==="mediation") return `<div class="eyebrow">MEDIATION</div><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p><p style="font-size:18px">${esc(s.prompt)}</p><textarea id="medInput" rows="4" placeholder="Tell the person what is wrong..."></textarea><p class="muted">${esc(s.hint)}</p><p class="vi">${esc(s.vi)}</p><div class="button-row"><button class="btn primary" data-submit-med>Capture evidence</button></div>`;
  return `<div class="eyebrow">DONE</div><h2>${esc(s.title)}</h2><p style="font-size:19px">${esc(s.body)}</p><div class="card" style="background:var(--surface2);margin-top:18px"><h3>Your next step</h3><p>${lessonStep<lesson.steps.length-1?"Continue building the Health spine.":"The system will use today's evidence to choose your next session."}</p></div><div class="button-row"><button class="btn primary" data-finish>Finish lesson</button></div>`;
}
function next(){
  if(lessonStep < lesson.steps.length-1){ lessonStep++; render(); window.scrollTo({top:0,behavior:"smooth"}); }
}
function startLesson(){lessonStep=0;lessonResults={};view="lesson";render();}
function finishLesson(){
  if(!state.completed.includes(lesson.id)) state.completed.push(lesson.id);
  state.profile.xp += 25;
  state.skills.Listening=Math.min(100,state.skills.Listening+5);
  state.skills.Speaking=Math.min(100,state.skills.Speaking+5);
  state.skills.Vocabulary=Math.min(100,state.skills.Vocabulary+3);
  ["headache","cough","fever","throat","symptom"].forEach(w=>{
    if(state.words[w]) state.words[w].mastery=Math.min(100,state.words[w].mastery+8);
  });
  state.lessonEvidence[lesson.id]={completedAt:new Date().toISOString(),results:lessonResults};
  save();toast("Lesson evidence saved");view="today";render();
}
function bind(){
  document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>setView(b.dataset.nav));
  document.querySelectorAll("[data-start-lesson]").forEach(b=>b.onclick=startLesson);
  document.querySelectorAll("[data-next]").forEach(b=>b.onclick=next);
  document.querySelectorAll("[data-exit-lesson]").forEach(b=>b.onclick=()=>{view="today";render()});
  document.querySelectorAll("[data-choice]").forEach(b=>b.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    const s=lesson.steps[lessonStep];
    lessonResults[lessonStep]=Number(b.dataset.choice);
    render();
    window.scrollTo({top:0,behavior:"smooth"});
  },{passive:false}));
  document.querySelectorAll("[data-speak]").forEach(b=>b.onclick=()=>speech(b.dataset.speak));
  document.querySelectorAll("[data-speak-input]").forEach(b=>b.onclick=()=>{
    const text=document.getElementById("speakInput")?.value || "I have a headache. I have a cough.";
    speech(text);
  });
  document.querySelectorAll("[data-submit-speak]").forEach(b=>b.onclick=()=>{
    const text=(document.getElementById("speakInput")?.value||"").trim();
    if(text.length<5){toast("Try saying at least one complete sentence.");return}
    state.skills.Speaking=Math.min(100,state.skills.Speaking+3);state.lessonEvidence.tempSpeak=true;save();toast("Speaking evidence captured");next();
  });
  document.querySelectorAll("[data-submit-med]").forEach(b=>b.onclick=()=>{
    const text=(document.getElementById("medInput")?.value||"").trim();
    if(text.length<8){toast("Try one complete sentence.");return}
    state.skills.Reading=Math.min(100,state.skills.Reading+2);state.skills.Speaking=Math.min(100,state.skills.Speaking+2);save();toast("Mediation evidence captured");next();
  });
  document.querySelectorAll("[data-finish]").forEach(b=>b.onclick=finishLesson);
  document.querySelectorAll("[data-theme]").forEach(b=>b.onclick=toggleTheme);
  document.querySelectorAll("[data-reset]").forEach(b=>b.onclick=()=>{
    if(confirm("Reset the local demo progress?")){localStorage.removeItem(KEY);state=loadState();render();toast("Demo reset");}
  });
  document.querySelectorAll("[data-demo-import]").forEach(b=>b.onclick=()=>toast("Bring Anything is reserved for the next build."));
}
function speech(text){
  if(!("speechSynthesis" in window)){toast("Speech is not supported on this browser.");return}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=.86;speechSynthesis.speak(u);
}
render();
