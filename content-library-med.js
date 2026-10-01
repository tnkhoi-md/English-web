/* ============================================================
   THƯ VIỆN TỪ VỰNG · Tiếng Anh y khoa cơ bản
   Lộ trình: Giải phẫu → Sinh lý → Bệnh học → Lâm sàng
   T1 = nền tảng, T2 = mở rộng.
   Mỗi dòng: thuật ngữ | từ loại | nghĩa | định nghĩa tiếng Anh đơn giản
   Nội dung phục vụ học ngôn ngữ, không phải tài liệu chuyên môn.
   ============================================================ */
const LIB_MED_GROUPS = [
  ["anatomy", "Giải phẫu", "Anatomy", "🦴"],
  ["physiology", "Sinh lý", "Physiology", "⚙️"],
  ["pathology", "Bệnh học", "Pathology", "🔬"],
  ["clinical", "Lâm sàng", "Clinical practice", "🩺"]
];
const LIB_MED = [
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
