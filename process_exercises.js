const fs = require('fs');
const path = require('path');

// Read Central Athlete data from the file
const home = require('os').homedir();
const caFilePath = path.join(home, '.claude', 'projects', '-Users-oliviachen-Desktop-app-dev-modular-se-fitness', '54dab963-d516-4f38-82db-770f1aee0e59', 'tool-results', 'toolu_01Rx4i6JXyLvGvgjrmUvpU8v.txt');
const caData = fs.readFileSync(caFilePath, 'utf8');

// Parse Central Athlete lines
const caLines = caData.split('\n').filter(l => l.trim());
const caEntries = caLines.map(line => {
  // Lines may have leading whitespace and line numbers like "   123→title|||id"
  const cleaned = line.replace(/^\s*\d+[→\t]/, '');
  const parts = cleaned.split('|||');
  if (parts.length !== 2) return null;
  return { title: parts[0].trim(), videoId: parts[1].trim() };
}).filter(Boolean);

// Stretch Affect data (provided inline)
const saRawData = `Bird Dog Diagonals|||wIG0-3vqm8E
Bird Dog Hip Extension With Knee Straight|||w20SgqLKOQ4
Box Presses|||Dq2xCxt0AI4
Butt Presses|||SYKsjhUiXBA
Open Half Kneeling Adductor Eccentric Neural Grooving|||O_fg8nWlD4E
Unilateral Bilateral Quadruped Wrist Extension Eccentric Neural Grooving|||0rYhYBclC7E
Unilateral Bilateral Butterfly Eccentric Neural Grooving|||xvroIsj6BL4
Unilateral Bilateral Bear Sit Eccentric Neural Grooving|||EMcrz_8IpZw
Side Lying Hip Internal Rotation PAILs RAILs|||GdFzqfH_3Ko
T-spine rotations with stability ball adduction|||QGmS08i-vlw
Toes Elevated toe touch|||MTOK5rwuwME
Supported Pelvic Tilts in Golf Stance|||0h4i7vT37xA
supine stick single leg glute bridge|||Hc-jD-BUUA8
Supine stick shoulder raise to pulldown to press|||eol9fxB0-Yk
supine stick glute bridge|||SLi50AYHlB4
supine stick glute bridge march|||2bmugy32tV0
Supine Spinal Rotation Eccentric Neural Grooving|||K0Wnufb3VSM
Supine Pelvic Tilts|||E6rNac2Ic2Q
straight leg stick dead bug|||6FZSgT5v7wQ
Stork Turns|||_xhakfYayCo
X-Factor Stick Mobility|||9c0ypYpMjyo
wrist stir the pot|||QX_H56vK73A
wrist hinges|||-u4SZUNlZjE
Wrist Flexion Stretch|||17gtgWcZYYA
Wrist Extension Stretch|||kqH3OBrhqVM
Wide Stance Single Stick Monkey Hang Hinge and Reach Level 3|||I8C3dL0ecZQ
Wide Stance Single Stick Monkey Hang Hinge and Reach Level 2|||z-iibr1a_AE
Wide Stance Single Stick Monkey Hang Hinge and Reach Level 1|||l0GfztAypoQ
Unilateral Bilateral Shoulder Flexion Eccentric Neural Grooving|||d4JQ4FzZiKU
CatsAndDogs|||7MzCcYA5I2w
Side Lying Hip Internal Rotation Passive Range liftoff|||tUnOiV6mMFk
Side Lying Reverse Clam Shells|||lzrXOM3hxwo
Side Lying Shoulder Internal Rotation Eccentric Neural Grooving|||-T8CIz_QIbA
Side Open books|||KxkjMu-0ZLw
Single Leg Balance in golf stance with narrow base|||b01elJ9fDTk
Single Leg Balance in Golf Stance|||UMK_KihkulM
single leg deadlift stick lifts|||U-cR9huRX6s
Single Leg Deadlift Stick Mobility|||00gEFV4ZP-k
slap shot|||2lj3eoKCKYk
Spine flexion and extension|||_XlU8O2N7vc
Stick dead bug iso hold|||Ps9VqecaNZg
Stick stork turns|||MGXv29Y7Ok8
Stick taps|||oCwN1wrPV68
Palm Forearm Presses|||ZrgoF3QNaWs
Palm Presses|||iXyqsLab9mA
Pelvic Tilts in Golf Stance Find Neutral|||lwFE3anpHM0
Pendulums|||5b5TRTCj0Ns
Pigeon Hip External Rotation PAILs RAILs|||OmeU749WPao
Propeller|||eKvZM4hHFik
Push Pulls|||LExTLGHd9UI
Quad and Hip Flexor Release|||9_J_yhv7xCA
Seated Ankle Windshield Wipers|||Pt9H186Ii88
Shoulder Abduction Eccentric Neural Grooving|||ruO2yaA78mA
Side Foam Roll Glutes Hamstrings Calves|||l1B_v9Mn9fA
Side Lumbar Locked Reachbacks with External Rotation from half Prayer Position|||gqNfWA9do58
Side Lumbar Locked Reachbacks with External Rotation|||Ig_-MajuAaA
Side Lying Clam Shells|||7DcD2Iopb4I
Kneeling Hip Extension Eccentric Neural Grooving|||TzKzqlEuono
lateral lunge to rotation|||fJqUncva83o
Lateral Stick Pushes Level 1|||VgFUTjtsQ3o
Lateral Stick Pushes Level 2|||I-A6CUxr1lY
Lateral Stick Pushes Level 3|||NfhWHxGG4u8
lateral stick wall push level 1|||aok1G8fBbVk
lateral stick wall push with flex level 2|||5EoI1P0qFlA
Low Back Release Stick Mobility|||gpV3p7pisk0
lower body disassociation stick mobility|||J40u34jIqw4
Lower Leg Release Stick Mobility|||58Gghh2vxg4
Mid Back Release Stick Mobility|||lrLmOCgZe4U
Glute Bridge Palms up neutral pelvis|||WudnKcha1EU
golf posture stick wall push with rotation|||gqghLW7-mTQ
Half kneeling cervical rotation with Shoulder flexion and extension|||ewVWj9DadXo
half kneeling long turns|||MCdQfa8--d8
half kneeling monkey hang with rotation|||P3U-Ejtuqu4
hamstring release|||ydl6Gsn0D0U
Heels Elevated Toe Touch|||SmutfCSaJDQ
Hip External Rotation Eccentric Neural Grooving|||lm0ZIM4NYKA
Hip External Rotation Kinetic Stretching|||2v1GmoHSqFY
Hip Internal Rotation Eccentric Neural Grooving|||fM5r2G-eOjg
Hip Twister|||jakqZ0ZFDas
kayaking|||2Fhu-810t0g
Deer In The Headlights|||SMjHa1PuBY0
foot and ankle prep|||d5OxMMNO5c8
Foot release|||bwIj9JdNjeE
forearm release|||no4xP0p0_NQ
Frog Pose Hip Abduction PAILs and RAILs|||215FTBqYB5Y
Hip Internal Rotation Kinetic Stretching|||dsWEpHsCOHY
Thoracic Spine PAILs-RAILs with Stick|||tesZfg3vHq0
90/90 Hip External Rotation Eccentric Neural Grooving|||qawe2P1lN_A
90/90 Hip Internal Rotation Eccentric Neural Grooving|||wCpsa3dFDHk
90/90 Hip External Rotation Kinetic Stretching|||AXtN6TXQFdg
Side Lying Shoulder Internal Rotation Eccentric Neural Grooving|||XZEfw2m6-tY
Morning CARS Routine|||1lSB3GThSPU
Hip External Rotation Class 2|||Dkz3S_WYtP8
Knee and Ankle Class|||VvHS6zQhWt0
Shoulder Abduction and Adduction Class|||hcWWm5zVpUU
Shoulder Internal Rotation 2 Class|||izrqjldT0Zo
Elbow and Wrist Class|||mo0I1sLtzIM
Hip Abduction Class|||__A33odjCr4
Reach Roll Lift|||fC1wCv0Lx94
Bent Leg Calf Stretch|||KsYyQEpJTAU
Bird Dog Hip extension with knee bent|||ElMptmUQvr8
Flag Poles Stick Mobility|||yuHCecUMgBQ
Bow and Arrow Stick Mobility|||-92w_nvhFA8
dynamic stick dead bug|||6UqF--pHusE
Standing Scapula ERR|||8kTrFirxoEg
Split Kneeling Hip Abduction PAILs-RAILs|||MC07S57Q0q0
Finger Extension PRLO|||MHEanlbq7tg
Finger Extension PRH|||5CRw8CIV0lU
Finger Extension ERR|||C1zs0HSlTfo
Big Toe Extension PAILs and RAILs|||g_X_5CVKguA
Seated Ankle Inversion PAILs and RAILs|||tInd4nW8K3o
Standing Ankle Eversion w/KB PAILs and RAILs|||AJM73-sK8jE
Collapsed Kneeling Plantar Flexion PAILs and RAILs|||m6VMJnaE6bM
Seated Ankle Eversion PAILs and RAILs|||BwsvAragk70
Standing Ankle Inversion - Slant Board PAILs and RAILs|||7Z_GxKQwUmU
Standing Ankle Eversion PAILs and RAILs - Slant Board|||wpa6TQSNlbc
Quadruped Wrist Extension Pails/Rails|||0VKT3kfyLr4
Single Arm Overhead Farmers Walk|||GP5-dONUSBM
leg torso turns|||f5QeU9sFHOw
Scapula End Range Rotations from Quadruped-Modified Push-up|||Ul4qLBMrG70
Scapular ERR from 3-Point Position|||sZ7UeALRSBk
Tall Kneeling Shoulder Flexion Extension with Pattern Assistance|||KonMciB8Xi8
Quadruped Spine Extension PAILs-RAILs|||7hCSeXt5_SI
Finger Extension Hover|||XmeZ-oCu5rE
Infinity Swimmer Hover|||0R8OlpJK4YA
Wrist Flexion PRH Open Kinetic Chain|||25QrVDBdMVo
Supine Hip Flexion Multiple Angles PAILs-RAILs|||jXAtlrjMJ2k
Supine Figure 4 Hip External Rotation PAILs-RAILs|||CldQoWc6pw8
Wrist Extension PRLO|||Bk7tHb9bJw4
Wrist Flexion PRLO|||iLPyLQxO4JY
Swimmer Hover|||lZxZEvJD4h4
Bear Sit Hip Abduction PAILs-RAILs|||Xd79oZubcaM
90-90 Hip External Rotation PAILs-RAILs|||eBmRz-XGsoI
Bear Sit Hip Internal Rotation PAILs-RAILs|||uWYydG6pEFE
Butterfly Hip Abduction PAILs-RAILs|||4twJ8U3STB0
Full Swing Sequence Stick Mobility|||fLqlBO60iSY
Frog Pose Hip Abduction PAILs-RAILs|||5lzQg5_NujQ
1/2 Kneeling Hip Extension PAILs-RAILs|||wbCmCRFXlys
Side Lying Hip Internal Rotation PAILs-RAILs|||XV_kvOT0rr8
forearm release Stick Mobility|||JWH-weBYY8M
kayaking Stick Mobility|||CDEm0jN4R8w
Pigeon Hip External Rotation PAILs - RAILs|||9KhwqWp2n3Y
Stick Mobility Foot release|||YIeKnClR8-4
Side Lying Hip Internal Rotation PRLO|||TiE3SpcNbAc
Ankle Dorsiflexion PAILs-RAILs - Combat Base|||JegW1vacAfA
Standing Ankle Dorsiflexion PAILs-RAILs - Soleus Focus|||VEmRGb3BqDM
Standing Ankle Dorsiflexion PAILs-RAILs - Gastrocnemius Focus|||2-QgottaaDU
Tibial Internal Rotation Pails and Rails|||SC2zbULWBOA
Tibial External Rotation Pails and Rails|||dEQhHjoPGkM
Knee Flexion: Side Lying w/o Hip Extension PAILs-RAILs|||a3yyQPCBVXs
Knee Flexion w/Hip Extension PAILs-RAILs|||R9ZsKBTHHdk
Supine Knee Extension PAILs and RAILs|||qC9rLCdCVmI
Standing Knee Extension PAILs and RAILs|||taG3Ight3rI
90/90 Hip Internal Rotation PAILS/ RAILS|||2FVc-g0wLsA
Standing Hip Flexion PRLO|||G-Wo40tF15U
90/90 Hip Internal Rotation - Hover|||BWNI1gkn5EU
Collapsed Quadruped Hip Extension PRLO|||gVudmjAwYrQ
Standing Hip Flexion - Hover|||Kp_GolfVpu4
Standing Hip Flexion Abduction PRLO|||ngSKnWRSRhQ
90/90 Hip Abduction PRLO|||o1liMbMWuKo
Side Lying Hip Adduction ERR|||OD3Xhq6gOfg
Split Kneeling Hip Abduction PRLO|||QjjxHg6itlg
Kneeling Knee Flexion PRH|||2mSMdAAsFVU
Prone Cervical Extension PRLO|||Vc1sF00uJhs
90/90 Hip Abduction PRLO Knee Hinge|||wM3IdaIn7kI
Side Lying Hip Adduction PRLO Knee Hinge|||NYLzn3Lp8g4
Supine Cervical Flexion PRH|||KGxkrsaRAXg
Seated Cervical Flexion PRLO|||hNXLxFiahWU
Seated Cervical Rotation PRH|||8JUPT9mUMqU
Side Lying Cervical Lateral Flexion PRH|||eImX4rmou70
Seated Cervical Rotation PRLO|||_VKEta1NQSw
Side Lying Hip Adduction PRLO|||pshgsvuzS38
Tibial External Rotation PRH|||STpCqPrNEK8
Tibial Internal Rotation PRLO|||_ZyySDM1nqY
Tibial Internal Rotation PRH|||qsfo57Euxq4
Standing Hip Flexion ERR|||x3f4mQ_RmP8
Side Lying Hip Adduction - Hover|||f4QaDI1HqJ8
Tall Kneeling Spine ERR w/ MedBall and Yoga Block|||giLWARzfLDA
Split Base Spine ERR with MedBall|||P_SseLdewGE
Tibial Internal External Rotation - Hover|||6RK5fnCmFRU
Prone Knee Flexion PRLO|||ZOB7-iiGmuE
Tibial External Rotation PRLO|||hHu69QZUPrg
Side Lying Knee Flexion PRH|||B1fExQyedUo
Half Kneeling Knee Flexion PRLO|||opPf_XUCv6c
Side Lying Knee Flexion PRLO|||kT4gb1yy0gQ
Supine Hip Flexion PRLO|||4POS97FJE84
Prone Knee Flexion PRH|||DmNACKU9BSM
Half Kneeling Knee Flexion and Tibial Internal/External Rotation - Hover|||f9Fx-T9XsTI
Bear Sit Hip Flexion PRLO|||S4hCXKqzWxU
Bear Sit PRLO|||Q83Zxe76fPQ
Supine Hip Flexion PRH|||9FI-FYMFeAc
Supine Hip Flexion ERR|||ftOcuztVhtY
Bear Sit PRH|||jXtbnsyWbvU
Bear Sit Hip Flexion ERR|||Clo2eyVD_bM
Butterfly PRH|||gDY1gQweK3o
Bear Sit Hip Flexion Hover|||sAB2MBUi3-c
Prone Shoulder Extension ERR|||DYltX96MTQM
Half Kneeling Shoulder Extension PRH|||_a6NQUMEdLc
Bilateral Shoulder Extension PRH Bent-Leg and Pike|||eHRtRPeo-nQ
Half Kneeling Shoulder Extension PRLO|||0uHGhzpxn8I
Shoulder Flexion PRLO on Ball w/Stick|||41XCo0YvGuo
Prone Shoulder Flexion PRLO|||2rSLDvNSh00
Prone Shoulder Flexion/Abduction PRLO|||ObJbUt6nvCo
Shoulder Flexion PRH on Ball w/Stick|||lc16hf_Xc4M
Shoulder External Rotation PRLO|||ar5kLEguv3o
Prone Shoulder External Rotation PRLO|||xY0QMYsnnbw
Prone Shoulder Flexion ERR|||PjPqRm8dAyM
Shoulder Adduction PRH|||Qs2NicE6wbg
Shoulder Adduction PRLO|||zBWh64FeOT0
Standing Shoulder Abduction PRH on Wall|||pDD7pxh1lUM
Shoulder External Rotation PRLO w/Stick on ball|||W2Ew7z6LYzc
Shoulder External Rotation PRH|||Rtu85QT51ZA
Side-Lying Shoulder Internal Rotation PRH|||yydVdegWmwI
Butterfly PRLO|||MyHzd5yWaxc
Shoulder External Rotation PRH w/Stick on ball|||Je4Cw6tKQNc
Scapular Retraction PRH on wall|||xL0InmsipPw
Elbow Pronation PRLO|||BoQE3ONqgmI
Elbow Supination PRH|||BPe-bFMD6x4
Elbow Flexion PRLO|||4J5IpD9SOHc
Elbow Supination PRLO|||YyhqbfXprj8
Elbow Flexion PRH|||FQRpAvZgUR8
Prone Shoulder Extension - Hover|||2k5AUwxc4Ms
Side-Lying Shoulder Internal Rotation PRLO|||3vbJ7I1oap0
Prone Shoulder External Rotation - Hover|||Mz-WMVJJyBA
Standing Shoulder Abduction PRLO on Wall|||wzeHg8wlAp8
Scapular Retraction PRLO on Wall|||bx9lcGErs84
Prone Shoulder Flexion - Hover|||atq4KiuOtAY
Elbow Pronation PRH|||_W0fO-QNUMU
1/2 Kneeling Hip Extension PAILs/RAILs|||oI5iZySd0w4
90/90 Hip External Rotation PAILs/RAILs|||swe7HDHzgYQ
Bear Sit Hip Abduction PAILs/RAILs|||1vuaPkTd7Ww
Butterfly Hip Abduction PAILs/RAILs|||NyNvtyosjB4
Finger Extension - Hover|||y22Hq1S57E0
Finger Extension PRH|||ydy81MdGo0M
Finger Extension PRLO|||4BLhAQg-EN0
Frog Pose Hip Abduction PAILs/RAILs|||x9PWcYVgO1o
Infinity Swimmer - Hover|||-4Z6xHM_bm8
Pigeon Hip External Rotation PAILs/RAILs|||IAEjNmmdtXU
Finger Extension End Range Rotations|||s5LW7BPfYVs
Scapula End Range Rotations - 3 Point Position|||SAFAqHmE430
Scapula End Range Rotations - Modified Quadruped/Push-up|||X69YA49kYic
Bear Sit Hip Internal Rotation PAILs/RAILs|||V8J7jI2RgqI
Split Kneeling Hip Abduction PAILs/RAILs|||t3btKWyJebE
Standing Scapula End Range Rotations w/KB|||diWI11OcxC4
Quadruped Spine Extension PAILs/RAILs|||pLWnSk0IJog
Collapsed Kneeling Wrist Extension PRH|||laAcYatq3Qw
Collapsed Kneeling Wrist Extension PRLO|||PI3D2lCjNrQ
Supine Figure 4 Hip ER PAILs-RAILs|||tmzXXkw4uis
Wrist Flexion PRLO - open chain|||EGWTwAH5ik4
Supine Hip Flexion multi angle PAILs/RAILs|||-GS5gddt0WI
Wrist Flexion PRH - open chain|||LjYuy-00AEw
Wrist Extension PRLO - open chain|||OXFpdeZimpw
Thoracic Spine - PAILs RAILs w/Stick|||ruEjdQOirJo
Swimmer Hover - Collapsed Kneeling|||-xLYPvcVpG0
Wrist Extension PRH - Open Chain|||RixXxeszwWo
Whole Body CARS|||dnhlDlukksQ
Shoulder Rotation - Internal/External|||ZI63QzZUB7I
Hip Flexion/Extension|||o7ipY9awQu8
Shoulder Flexion/Extension|||wJMay-UaTmY
Hip Abduction/Adduction|||zy-FN2V04Jk
Hip Rotation Internal/External|||vwSBGaTeawE
Hip CAR How to|||Ka4RvoTR4EQ
Scapula CAR How To|||yWs29k8QieQ
Elbow CAR How To|||joctcnrlK9I
Knee CAR How To|||aADibS2k-jA
Toe CAR How to|||4wtMzHLcPZ4
Neck CAR How to|||sxqM0tFKUD4
Thoracic-Lumber CAR How To|||emjgTjlG2kI
Wrist CAR How to|||xDpJOoAXYwc
Shoulder CAR How-to|||GW1o6PQlW0I
Ankle CAR How To|||yMErrNllYz4
Banana Stretch|||pXBISGALCVo
Varied arm position Pec stretch on wall|||VRNM_lh3vSc
Lat Stretch Against wall - advanced|||z64fUIFAb9c
PAILS RAILS - Lat against wall|||_mJCEG1RtuU
PAILS RAILS Pectoralis/Bicep: straight arm|||fSLTs4vGERg
PAILS RAILS - Pectoralis 90 degree elbow|||pVUBtiXGm00
PAILS RAILS - Neck Rotators|||M2L6d0RCeLU
Jaw Self Massage|||LnbOS4eadYQ
PAILs and RAILs - Back of Neck|||L7hN8G8SJCQ
Pails and Rails - Side of Neck|||yXl0sAOgYbs
PAILS RAILS - posterior shoulder standing|||U4S06wqn_SA
Standing lat stretch side to side with sticks|||FH6wWRdIYbY
Pails Rails Triceps|||0PqiUjCksoE
Standing Lat Stretch with Sticks|||sDWcGO9G4Jg
Clockwise and Counterclockwise Pelvic Circles|||fV0vj0IGRFc
Standing Pelvic Tilt|||McKAyeToPSM`;

const saEntries = saRawData.split('\n').filter(l => l.trim()).map(line => {
  const parts = line.trim().split('|||');
  if (parts.length !== 2) return null;
  return { title: parts[0].trim(), videoId: parts[1].trim() };
}).filter(Boolean);

// ======== FILTERING ========

// Central Athlete exclusions
const caExcludeTitles = [
  'More Than Strength Training',
  'How to Grow!!',
  'Central Health Launch',
  'HEALTH is Most Important',
  'Consistency Trumps Everything',
  'What CA Owner and Founder Loves to Ask Everyone!',
  'What BioMarkers YOU Should be Paying Attention To',
  'The Missing Link with Personal Training & Group Classes',
  'The Impact of a Central Athlete Assessment',
  'The Principles of Lifting You Need to Follow',
  "If you're not assessing, you're guessing.",
  'Episode 4: Signs Something is Off',
  'Talking Pain',
  'Leverage Your Bloodwork to Boost Vitality and Performance',
  'Intensity in Your Training Is a Necessity',
  'Why You Should Get Comprehensive Bloodwork',
  'Do We Really Have an Obesity Epidemic?',
  'Breaking Down Strength Training',
  'Is Autonomy the Best Skill a Coach Can Give a Client?',
  'Coach JJ Intro',
  'Tempos 101',
  'August Community Workout',
  'Central Athlete Morning Crew with Senior Coach Steven',
  'Central Athlete March Community Workout',
  'Coach Gretchen Intro',
  'Virtual Discussion: Principles of Body Composition',
  'Q&A with Kyle Stewart',
  'Virtual Discussion: The Power of Sunshine',
  'Virtual Discussion: Principles of Strength Training',
  'Virtual Discussion: Orders of Food Quality',
  'Virtual Discussion: Optimizing Your Environment to Support Long Term Consistency',
  'Q&A: Lisa Baker, LCSW-S',
  'Q&A: Natalie Higby of The Durable Athlete',
  'Virtual Discussion: Sleep & Immune Function',
  'Virtual Discussions: Food Allergies & Intolerances',
  'Virtual Discussions: Habits',
  'Virtual Discussions: Alcohol & Immune Health',
  'Virtual Discussions: Basic Lifestyle Guidelines',
  'Virtual Discussions: Nutrition & Immunity Maintenance',
  'HOW TO GROW: BELIEF',
  'HOW TO GROW: REBUILD',
  'How to Grow: Recovery',
  'How to Grow: Breakdown',
  'How to Grow: Central Nervous System',
  'Progressive Overload',
  'Three Keystone Habits for Fitness and Wealth',
  'Optimizing Body Composition',
  'How Your Friends Influence Your Physique',
  'Nutrition for Mental Acuity',
  'What Is Your BMW?',
  'Fitness Is A 401k For Your Body',
  'Nutrition on the Go',
  'Pre-Workout Nutrition',
  'Fasting',
  '5 Reasons to Reconsider Personal Training',
  '8 Reasons Why You Want to Manage Blood Sugar',
  'Nutrition On The Go',
  'Why Exercise is Bad for You',
  'German Volume Training',
  'The Most Effective Method of Communicating with Fitness Clients',
  'Rowing Technique 101',
  'Body Composition Training - German Body Comp',
  'Why Personal Training is Dead',
  'What is On-Site Training',
  'Gaining Muscle - Running Insulin',
  'Gaining Muscle - Functional Resistance Training',
  'The Problem with Online Training Programs',
  'How Training Will Make You More Successful',
  'What Is Your Body Fat and What Does It Mean?',
  'Central Athlete - Remote Coaching',
  'Determining Your Ideal Carbohydrate Intake',
  'Time Restricted Eating',
  'Hacking Alcohol',
  'Eliminating Dadbod',
  'Create Your Definition of Fitness',
  'My Why: Justin Krause',
  "Sick of not Getting Results... There's a Better Way!",
  'Why Train?',
  'How to Effectively Manipulate Body Composition',
  'Transitioning From a Trainer to a Health Coach',
  'Ashlie',
  'Andy',
  'Centurion',
  'Figure Competitor Does CrossFit',
  'Basic Lifestyle Guidelines On the Road',
  'Training on the Go',
  'Nutrition on the Go',
  'Stress - Shift Your Paradigm',
  'The Central Athlete Story',
  'The Power of Protein',
  'The 6 Ways to Improve Sleep',
  'Sunlight: The Next Frontier for Weight Loss',
  'Optimal Hydration',
  'The Principle of N.E.A.T.',
  'Why is an Assessment Crucial to Your Success?',
  'Fitness Is a Journey',
  'Functional Resistance Training: What is it?',
  'Strength E-Book',
  'Building A Program',
  'A New Model of Fitness',
  '8-Week Training Program',
  '3 Reasons Why Resistance Training is Beneficial for You',
  'Does Being Sore Mean You Had a Good Workout',
  "Why You Can't Do A Pull-Up",
  'Why You Hit Plateaus in Your Training and How to Break Them',
  'Coach Bio: Justin',
  'Coach Bio: Jesse',
  'Coach Bio: Amanda',
  'How to Choose a Coach',
  'Hip vs Knee Bender',
  'What Makes a Well Rounded Training Program',
  'Craig Video (Short)',
  'Craig Video (Full)',
  'Hollow body progressions',
  'Kristin',
  'Gymnastic Strength Training',
  'Thank You',
  'Central Athlete Anthem',
  'Central Athlete Trailer',
  'How to Create an Individualized Strength Plan',
  'Why Supplements are Crucial to Build Muscle',
  'Why Protein is Crucial for Building Muscle',
  'Why Sleep Is Crucial to Build Muscle',
];

// Assessment exclusions for Central Athlete
const caAssessmentKeywords = ['Assessment', 'Test'];

function isCaExcluded(title) {
  // Check exact exclusion list
  for (const ex of caExcludeTitles) {
    if (title === ex || title.replace(/\s*💪🏻/, '') === ex) return true;
  }
  // Check if it ends with Assessment but is actually an exercise assessment (keep those that are clearly exercises)
  if (title.includes('Assessment') && !title.startsWith('Movement Breakdown')) {
    // These are assessment videos, exclude them
    return true;
  }
  // Check if it's the heel drop test or butt to heel test - these are tests not exercises
  if (title === 'Heel Drop Test' || title === 'Kneeling Butt to Heel Test' || title === 'Ankle Dorsiflexion Test') {
    return true;
  }
  return false;
}

// Filter Central Athlete
const caFiltered = caEntries.filter(e => !isCaExcluded(e.title)).map(e => {
  let name = e.title;
  // Strip "Movement Breakdown: " prefix
  if (name.startsWith('Movement Breakdown: ')) {
    name = name.replace('Movement Breakdown: ', '');
  }
  return { name, videoId: e.videoId, source: 'central-athlete' };
});

// Remove duplicates from CA (keep first occurrence)
const caUnique = [];
const caSeenNames = new Set();
for (const ex of caFiltered) {
  const key = ex.name.toLowerCase();
  if (!caSeenNames.has(key)) {
    caSeenNames.add(key);
    caUnique.push(ex);
  }
}

// Stretch Affect exclusions
const saExcludeTitles = [
  'Morning CARS Routine',
  'Hip External Rotation Class 2',
  'Knee and Ankle Class',
  'Shoulder Abduction and Adduction Class',
  'Shoulder Internal Rotation 2 Class',
  'Elbow and Wrist Class',
  'Hip Abduction Class',
];

function isSaExcluded(title) {
  if (saExcludeTitles.includes(title)) return true;
  return false;
}

const saFiltered = saEntries.filter(e => !isSaExcluded(e.title)).map(e => {
  return { name: e.title, videoId: e.videoId, source: 'stretch-affect' };
});

// ======== CATEGORIZATION ========

function getCategory(name) {
  const lower = name.toLowerCase();

  // Recovery first (foam roll, release, tissue, lacrosse ball, massage)
  if (lower.includes('foam roll') || lower.includes('release') || lower.includes('lacrosse ball') || lower.includes('voodoo') || lower.includes('rumble roll') || lower.includes('massage') || lower.includes('soft tissue') || lower.includes('tissue exploration')) {
    return 'Recovery';
  }

  // Conditioning
  if (lower.includes('assault bike') || lower.includes('airdyne') || lower.includes('air bike') || lower.includes('bike erg') || lower.includes('jump rope') || lower.includes('single unders') || lower.includes('double unders') || lower.includes('double under') || lower.includes('single under') || lower === 'run' || lower === 'row' || lower.includes('shuttle run') || lower.includes('ski erg') || lower.includes('stairmaster') || lower.includes('skipping') || lower.includes('high knees in place') || lower.includes('high knee single') || lower.includes('bounding') || lower.includes('sprint') || lower === 'walk' || lower.includes('backward run') || lower.includes('backpedal') || lower.includes('running single leg hop') || lower.includes('power skip') || lower.includes('clmbr') || lower.includes('rower') && !lower.includes('row') || lower.includes('octagon drill') || lower.includes('footwork speed')) {
    return 'Conditioning';
  }

  // Flexibility (PAILs/RAILs, Eccentric Neural Grooving, Kinetic Stretching, passive range, stretching specific)
  if (lower.includes('pails') || lower.includes('rails') || lower.includes('eccentric neural grooving') || lower.includes('kinetic stretching') || lower.includes('passive range') || lower.includes('prlo') || lower.includes('prh') || lower.includes('err') && (lower.includes('end range rotation') || lower.includes('scapula err') || lower.includes('scapular err') || lower.includes('standing scapula err'))) {
    return 'Flexibility';
  }

  // More specific flexibility checks
  if (lower.includes(' prlo') || lower.includes(' prh') || lower.includes(' err') || lower.endsWith(' prlo') || lower.endsWith(' prh') || lower.endsWith(' err')) {
    return 'Flexibility';
  }

  // Check for ERR, PRLO, PRH as standalone tokens
  const tokens = name.split(/[\s/()-]+/);
  for (const t of tokens) {
    if (t === 'PRLO' || t === 'PRH' || t === 'ERR') return 'Flexibility';
  }

  // Stability
  if (lower.includes('bird dog') || lower.includes('bird-dog') || lower.includes('clam shell') || lower.includes('clamshell') || lower.includes('pelvic tilt') || lower.includes('pelvic circles') || lower.includes('dns') || lower.includes('balance') || lower.includes('pallof') || lower.includes('anti-rotation') || lower.includes('deadbug') || lower.includes('dead bug')) {
    return 'Stability';
  }

  // Core
  if (lower.includes('plank') || lower.includes('hollow') || lower.includes('sit-up') || lower.includes('sit up') || lower.includes('crunch') || lower.includes('v-up') || lower.includes('tuck up') || lower.includes('tuck-up') || lower.includes('rollout') || lower.includes('roll out') || lower.includes('roll-out') || lower.includes('leg raise') || lower.includes('leg lift') || lower.includes('leg lower') || lower.includes('toe to bar') || lower.includes('toes to bar') || lower.includes('toes through ring') || lower.includes('knee to elbow') || lower.includes('knee to chest') || lower.includes('knee raise') || lower.includes('l-sit') || lower.includes('l sit') || lower.includes('l-hang') || lower.includes('l hang') || lower.includes('russian twist') || lower.includes('oblique') || lower.includes('side bend') || lower.includes('windshield wiper') || lower.includes('curl-up') || lower.includes('curl up') || lower.includes('six inches') || lower.includes('flutter kick') || lower.includes('rock and roll') || lower.includes('arch rock') || lower.includes('hollow rock') || lower.includes('arch hold') || lower.includes('arch up') || lower.includes('pencil roll') || lower.includes('straddle hollow') || lower.includes('side v-up') || lower.includes('side tuck up') || lower.includes('garhammer') || lower.includes('toe touch') && !lower.includes('deadlift') || lower.includes('mountain climber') || lower.includes('body saw') || lower.includes('stir the pot') || lower.includes('contralateral core') || lower.includes('supine pallof')) {
    return 'Core';
  }

  // Mobility (CARs, rotations, spine work, mobility, stretches)
  if (lower.includes(' car ') || lower.includes(' car') && lower.endsWith('car') || lower.includes('cars') || lower.includes('c.a.r') || lower.includes('controlled articular') || lower.includes('thoracic') || lower.includes('t-spine') || lower.includes('spinal') || lower.includes('spine') || lower.includes('cervical') || lower.includes('dorsiflexion') || lower.includes('dislocate') || lower.includes('z-dislocate') || lower.includes('opener') || lower.includes('mobility') || lower.includes('rotation') && !lower.includes('press') && !lower.includes('row') && !lower.includes('curl') && !lower.includes('raise') || lower.includes('stretch') || lower.includes('couch stretch') || lower.includes('pigeon') && !lower.includes('pails') && !lower.includes('rails') || lower.includes('bretzel') || lower.includes('scorpion') || lower.includes('cat cow') || lower.includes('cat-cow') || lower.includes('cats and dogs') || lower.includes('catsanddogs') || lower.includes('child\'s pose') || lower.includes('downward') || lower.includes('lizard') && lower.includes('stretch') || lower.includes('yoga push') || lower.includes('jefferson curl') || lower.includes('pancake') && !lower.includes('good morning') || lower.includes('straddle fold') || lower.includes('forward fold') || lower.includes('inchworm') || lower.includes('inch worm') || lower.includes('elephant walk') || lower.includes('groiner') || lower.includes('shinbox') && !lower.includes('good morning') || lower.includes('hip airplane') || lower.includes('hip circle') || lower.includes('hip tuck') || lower.includes('ankle prep') || lower.includes('wrist rock') || lower.includes('wrist walk') || lower.includes('wrist push up') || lower.includes('wrist push-up') || lower.includes('wrist extension lean') || lower.includes('wrist extension backward') || lower.includes('wall slide') || lower.includes('wall angel') || lower.includes('shoulder opener') || lower.includes('heel sit') || lower.includes('toe sit') || lower.includes('kneeling founder') || lower.includes('standing founder') || lower.includes('xiaopeng') || lower.includes('open books') || lower.includes('stork turn')) {
    return 'Mobility';
  }

  // Check for CAR pattern more carefully
  if (/\bcar\b/i.test(name) || /\bcars\b/i.test(name)) {
    return 'Mobility';
  }

  // Hover exercises from Stretch Affect are Flexibility/Mobility
  if (lower.includes('hover') && !lower.includes('front lever') && !lower.includes('back leg hover') && !lower.includes('front leg hover')) {
    return 'Flexibility';
  }

  // Default to Strength for everything else
  return 'Strength';
}

function getEquipment(name) {
  const lower = name.toLowerCase();

  if (lower.includes('assault bike')) return 'Assault Bike';
  if (lower.includes('airdyne') || lower.includes('air bike')) return 'Airdyne';
  if (lower.includes('jump rope') || lower.includes('single unders') || lower.includes('double unders') || lower.includes('single under jump') || lower.includes('double under jump')) return 'Jump Rope';
  if (lower.includes('slant board')) return 'Slant Board';
  if (lower.includes('flexbar')) return 'Flexbar';
  if (lower.includes('yoke')) return 'Yoke';
  if (lower.includes('foam roll') || lower.includes('rumble roll')) return 'Foam Roller';
  if (lower.includes('stability ball') || lower.includes('swiss ball')) return 'Stability Ball';
  if (lower.includes('ring')) return 'Rings';
  if (lower.includes('pull-up') || lower.includes('pull up') || lower.includes('chin over') || lower.includes('chin to') || lower.includes('passive hang') || lower.includes('active hang') || lower.includes('dead hang') || lower.includes('hang from bar') || lower.includes('beat swing') && lower.includes('bar') || lower.includes('toes to bar') || lower.includes('toe to bar') || lower.includes('bar muscle') || lower.includes('stall bar') || lower.includes('hanging')) return 'Pull-up Bar';
  if (lower.includes('cable') || lower.includes('pulldown') || lower.includes('lat pull')) return 'Cable';
  if (lower.includes('kettlebell') || lower.includes('kettle bell') || lower.includes(' kb ') || lower.includes('w/kb')) return 'Kettlebell';
  if (lower.includes('dumbbell') || lower.includes('dumbell') || lower.includes(' db ')) return 'Dumbbell';
  if (lower.includes('ez bar') || lower.includes('ez curl')) return 'Barbell';
  if (lower.includes('barbell') || lower.includes('axle bar') || lower.includes('trap bar') || lower.includes('cambered bar') || lower.includes('kadillac bar') || lower.includes('safety bar') || lower.includes('safety squat bar') || lower.includes('football bar') || lower.includes('multi grip bar') || lower.includes('multi grip bench') || lower.includes('multi grip incline') || lower.includes('multi grip floor') || lower.includes('log ') || lower.includes('earthquake bar')) return 'Barbell';
  if (lower.includes('band') || lower.includes('theraband') || lower.includes('resistance band')) return 'Band';
  if (lower.includes('stick mobility') || lower.includes('stick ') && (lower.includes('dead bug') || lower.includes('push') || lower.includes('stork') || lower.includes('lifts') || lower.includes('taps') || lower.includes('wall')) || lower.includes('x-factor stick') || lower.includes('flag pole') || lower.includes('bow and arrow stick') || lower.includes('full swing sequence stick') || lower.includes('forearm release stick') || lower.includes('kayaking stick') || lower.includes('stick mobility')) return 'Stick';
  if (lower.includes('supine stick') || lower.includes('straight leg stick') || lower.includes('dynamic stick')) return 'Stick';
  if (lower.includes('box') && !lower.includes('mailbox')) return 'Box';
  if (lower.includes('sled')) return 'Sled';
  if (lower.includes('parallette') || lower.includes('paralette')) return 'Parallettes';
  if (lower.includes('medicine ball') || lower.includes('medball') || lower.includes('med ball') || lower.includes('wall ball')) return 'Medicine Ball';
  if (lower.includes('d-ball') || lower.includes('d ball') || lower.includes('sandbag') || lower.includes('atlas stone') || lower.includes('stone to shoulder')) return 'Sandbag/Odd Object';
  if (lower.includes('mace')) return 'Mace';
  if (lower.includes('plate') && !lower.includes('template')) return 'Plate';
  if (lower.includes('rower') || lower.includes('rowing')) return 'Rower';
  if (lower.includes('ghd') || lower.includes('reverse hyper') && !lower.includes('reverse hyper extension')) return 'GHD';
  if (lower.includes('rope') && !lower.includes('jump rope')) return 'Rope';
  if (lower.includes('towel')) return 'Towel';
  if (lower.includes('lacrosse ball')) return 'Lacrosse Ball';
  if (lower.includes('chain')) return 'Chains';
  if (lower.includes('w/stick') || lower.includes('with stick') || lower.includes('with sticks')) return 'Stick';
  if (lower.includes('ski erg')) return 'Ski Erg';
  if (lower.includes('stairmaster')) return 'Stairmaster';
  if (lower.includes('bike erg')) return 'Bike Erg';

  return 'Bodyweight';
}

function getDescription(name) {
  const lower = name.toLowerCase();

  // PAILs/RAILs
  if (lower.includes('pails') && lower.includes('rails')) {
    return `Progressive angular isometric loading and regressive angular isometric loading drill targeting the ${getBodyPart(name)}.`;
  }

  // Eccentric Neural Grooving
  if (lower.includes('eccentric neural grooving')) {
    return `Eccentric neural grooving exercise to build end-range control in the ${getBodyPart(name)}.`;
  }

  // Kinetic Stretching
  if (lower.includes('kinetic stretching')) {
    return `Active kinetic stretching drill to improve range of motion in the ${getBodyPart(name)}.`;
  }

  // CARs
  if (/\bcar\b/i.test(name) || /\bcars\b/i.test(name) || lower.includes('car how')) {
    return `Controlled articular rotation exercise to maintain and improve joint health in the ${getBodyPart(name)}.`;
  }

  // PRLO/PRH/ERR
  if (lower.includes('prlo')) return `Progressive range lift-off exercise targeting the ${getBodyPart(name)}.`;
  if (lower.includes('prh')) return `Progressive range hold exercise targeting the ${getBodyPart(name)}.`;
  if (lower.includes('err') || lower.includes('end range rotation')) return `End range rotation exercise targeting the ${getBodyPart(name)}.`;

  // Hover
  if (lower.includes('hover')) return `Isometric hover exercise to build active control in the ${getBodyPart(name)}.`;

  // Stretch
  if (lower.includes('stretch')) return `A stretching exercise targeting the ${getBodyPart(name)} for improved flexibility.`;

  // Release
  if (lower.includes('release') || lower.includes('foam roll') || lower.includes('rumble roll') || lower.includes('lacrosse ball') || lower.includes('massage')) return `Soft tissue release work targeting the ${getBodyPart(name)}.`;

  // Squat variants
  if (lower.includes('squat')) return `A squat variation that builds lower body strength and stability.`;

  // Deadlift variants
  if (lower.includes('deadlift') || lower.includes('rdl') || lower.includes('romanian')) return `A deadlift variation targeting the posterior chain for strength and control.`;

  // Press variants
  if (lower.includes('press') && !lower.includes('compress')) return `A pressing movement that develops upper body pushing strength.`;

  // Row variants
  if (lower.includes('row')) return `A rowing movement that strengthens the upper back and pulling muscles.`;

  // Curl variants
  if (lower.includes('curl') && !lower.includes('jefferson curl')) return `A curl variation targeting the biceps and forearm muscles.`;

  // Lunge variants
  if (lower.includes('lunge')) return `A lunge variation that develops single-leg strength and stability.`;

  // Pull-up/Chin variants
  if (lower.includes('pull-up') || lower.includes('pull up') || lower.includes('chin')) return `An upper body pulling exercise targeting the back and arm muscles.`;

  // Push-up variants
  if (lower.includes('push-up') || lower.includes('push up')) return `A push-up variation for upper body pushing strength and stability.`;

  // Plank variants
  if (lower.includes('plank')) return `A plank variation that builds core stability and anti-extension strength.`;

  // Carry variants
  if (lower.includes('carry') || lower.includes('walk') && (lower.includes('farmer') || lower.includes('suitcase') || lower.includes('overhead') || lower.includes('rack'))) return `A loaded carry exercise that builds grip strength, core stability, and conditioning.`;

  // Swing variants
  if (lower.includes('swing')) return `A ballistic hip hinge movement that develops power and conditioning.`;

  // Clean variants
  if (lower.includes('clean')) return `An Olympic lifting movement or variation that develops explosive power.`;

  // Snatch variants
  if (lower.includes('snatch')) return `A snatch variation that builds explosive overhead power and coordination.`;

  // Jerk variants
  if (lower.includes('jerk')) return `A jerk variation that develops overhead explosive strength.`;

  // Bridge variants
  if (lower.includes('bridge') || lower.includes('hip thrust')) return `A hip extension exercise that targets the glutes and posterior chain.`;

  // Rotation exercises
  if (lower.includes('rotation')) return `A rotational exercise that improves mobility and movement quality.`;

  // Burpee variants
  if (lower.includes('burpee')) return `A full-body conditioning exercise combining a squat, push-up, and explosive movement.`;

  // Jump variants
  if (lower.includes('jump') || lower.includes('hop') || lower.includes('bound')) return `A plyometric exercise that develops lower body power and explosiveness.`;

  // Dip variants
  if (lower.includes('dip')) return `An upper body pressing exercise targeting the chest, shoulders, and triceps.`;

  // Muscle-up variants
  if (lower.includes('muscle-up') || lower.includes('muscle up')) return `An advanced gymnastic movement combining a pull-up with a dip transition.`;

  // Handstand variants
  if (lower.includes('handstand')) return `A handstand exercise that builds shoulder strength, stability, and body control.`;

  // Hang variants
  if (lower.includes('hang')) return `A hanging exercise that builds grip strength and shoulder health.`;

  // Step-up variants
  if (lower.includes('step-up') || lower.includes('step up') || lower.includes('step over') || lower.includes('step down')) return `A unilateral lower body exercise that builds leg strength and balance.`;

  // Fly variants
  if (lower.includes('fly') || lower.includes('flye')) return `An isolation exercise targeting the chest or shoulder muscles.`;

  // Extension variants
  if (lower.includes('extension') && (lower.includes('tricep') || lower.includes('skull'))) return `A tricep isolation exercise for arm strength.`;

  // Default
  return `A fitness exercise targeting strength, mobility, or conditioning.`;
}

function getBodyPart(name) {
  const lower = name.toLowerCase();
  if (lower.includes('hip')) return 'hip';
  if (lower.includes('shoulder')) return 'shoulder';
  if (lower.includes('ankle')) return 'ankle';
  if (lower.includes('knee')) return 'knee';
  if (lower.includes('wrist')) return 'wrist';
  if (lower.includes('elbow')) return 'elbow';
  if (lower.includes('spine') || lower.includes('spinal') || lower.includes('thoracic') || lower.includes('t-spine') || lower.includes('lumbar')) return 'spine';
  if (lower.includes('cervical') || lower.includes('neck')) return 'neck';
  if (lower.includes('scapula') || lower.includes('scapular')) return 'scapula';
  if (lower.includes('finger') || lower.includes('toe') || lower.includes('big toe')) return 'extremities';
  if (lower.includes('tibial') || lower.includes('tibia')) return 'tibia';
  if (lower.includes('lat') || lower.includes('pec') || lower.includes('quad') || lower.includes('hamstring') || lower.includes('calf') || lower.includes('glute') || lower.includes('forearm') || lower.includes('foot') || lower.includes('jaw')) return lower.match(/(lat|pec|quad|hamstring|calf|glute|forearm|foot|jaw)/i)?.[0]?.toLowerCase() || 'targeted area';
  if (lower.includes('butterfly') || lower.includes('pigeon') || lower.includes('frog') || lower.includes('bear sit') || lower.includes('90/90') || lower.includes('90-90')) return 'hip';
  if (lower.includes('swimmer')) return 'shoulder';
  return 'targeted area';
}

// Combine all
const allExercises = [];
let id = 1;

for (const ex of caUnique) {
  allExercises.push({
    id: id++,
    name: ex.name,
    source: ex.source,
    category: getCategory(ex.name),
    equipment: getEquipment(ex.name),
    description: getDescription(ex.name),
    videoUrl: `https://www.youtube.com/embed/${ex.videoId}`
  });
}

for (const ex of saFiltered) {
  allExercises.push({
    id: id++,
    name: ex.name,
    source: ex.source,
    category: getCategory(ex.name),
    equipment: getEquipment(ex.name),
    description: getDescription(ex.name),
    videoUrl: `https://www.youtube.com/embed/${ex.videoId}`
  });
}

// Generate TypeScript
let ts = `export interface LibraryExercise {
  id: number;
  name: string;
  source: string;
  category: string;
  equipment: string;
  description: string;
  videoUrl?: string;
}

export const exerciseLibrary: LibraryExercise[] = [\n`;

for (const ex of allExercises) {
  const escapedName = ex.name.replace(/'/g, "\\'");
  const escapedDesc = ex.description.replace(/'/g, "\\'");
  ts += `  {
    id: ${ex.id},
    name: '${escapedName}',
    source: '${ex.source}',
    category: '${ex.category}',
    equipment: '${ex.equipment}',
    description: '${escapedDesc}',
    videoUrl: '${ex.videoUrl}'
  },\n`;
}

ts += `];\n`;

const outPath = path.join('/Users/oliviachen/Desktop/app dev/modular-se-fitness', 'src', 'app', 'data', 'exerciseLibrary.ts');
fs.writeFileSync(outPath, ts);
console.log(`Total exercises: ${allExercises.length}`);
console.log(`Central Athlete: ${allExercises.filter(e => e.source === 'central-athlete').length}`);
console.log(`Stretch Affect: ${allExercises.filter(e => e.source === 'stretch-affect').length}`);

// Print category breakdown
const cats = {};
for (const ex of allExercises) {
  cats[ex.category] = (cats[ex.category] || 0) + 1;
}
console.log('\nCategory breakdown:');
for (const [cat, count] of Object.entries(cats).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${cat}: ${count}`);
}

// Print equipment breakdown
const equip = {};
for (const ex of allExercises) {
  equip[ex.equipment] = (equip[ex.equipment] || 0) + 1;
}
console.log('\nEquipment breakdown:');
for (const [eq, count] of Object.entries(equip).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${eq}: ${count}`);
}
