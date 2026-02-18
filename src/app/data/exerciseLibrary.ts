export interface LibraryExercise {
  id: number;
  name: string;
  source: string;
  category: string | string[];
  equipment: string;
  description: string;
  videoUrl?: string;
}

export const exerciseLibrary: LibraryExercise[] = [
  {
    id: 1,
    name: 'Squat with Thoracic Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ltr48PaVh3Q'
  },
  {
    id: 2,
    name: 'Supinated Chin Over Vertical Plane Tuck Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/6mfKkqJSIxc'
  },
  {
    id: 3,
    name: 'Single Arm Seated Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/pp1Dc5A_qmE'
  },
  {
    id: 4,
    name: 'Hip Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5yUwOtYPCH8'
  },
  {
    id: 5,
    name: 'Goblet Crossover Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/BCDxYOTwwHM'
  },
  {
    id: 6,
    name: 'Full Squat Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/jwDYxL4DsB8'
  },
  {
    id: 7,
    name: 'Front Rack In Place Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/VYD9uPukzcA'
  },
  {
    id: 8,
    name: 'Dumbbell Hang Split Snatch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/amQfbL6NVog'
  },
  {
    id: 9,
    name: 'Dumbbell Cheat Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/fG6lhXP9OAE'
  },
  {
    id: 10,
    name: 'Barbell on Knee Dorsiflexion',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eyg_QuIVnic'
  },
  {
    id: 11,
    name: 'Banded Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/A17keZKOWAA'
  },
  {
    id: 12,
    name: 'Banded March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-Ezi_iPGt78'
  },
  {
    id: 13,
    name: 'Banded Lat Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A stretching exercise targeting the lat for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/Fee0vucvtf4'
  },
  {
    id: 14,
    name: 'Banded Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/F3LM8_pbw1g'
  },
  {
    id: 15,
    name: 'Banded Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/lHt4JIGQvNM'
  },
  {
    id: 16,
    name: 'Band Pull Through',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/t9_DBEA7wsM'
  },
  {
    id: 17,
    name: 'Band Pull Apart',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Pg0twB3KkOc'
  },
  {
    id: 18,
    name: 'Backward Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KzxxWL6rJtE'
  },
  {
    id: 19,
    name: 'Backward Run',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SN897rN97M0'
  },
  {
    id: 20,
    name: 'Backward Jump Rope',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/6Gw-6nR60o4'
  },
  {
    id: 21,
    name: 'Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/GxNs6Uz6EMM'
  },
  {
    id: 22,
    name: 'Back Rack Yoke Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kOcCQpiAZfQ'
  },
  {
    id: 23,
    name: 'Back Rack Yoke Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3QhkoU0wbf0'
  },
  {
    id: 24,
    name: 'Axle Bar Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/98kOx8eL_dI'
  },
  {
    id: 25,
    name: 'Axle Bar Continental Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/R_6LsYnToNQ'
  },
  {
    id: 26,
    name: 'Assault Bike',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Assault Bike',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XoBd7ZPXdgE'
  },
  {
    id: 27,
    name: 'Arrested Superman',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GigwD6yiWLA'
  },
  {
    id: 28,
    name: 'Arm Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zvXre0PVRNM'
  },
  {
    id: 29,
    name: 'Arch Rock',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YA_n-EWzw3c'
  },
  {
    id: 30,
    name: 'Arch Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0SjzBHm7aZA'
  },
  {
    id: 31,
    name: 'Anchored Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9DHIIxh2g4A'
  },
  {
    id: 32,
    name: 'American Kettlebell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ExboSxTGIEM'
  },
  {
    id: 33,
    name: 'Alternating Single Arm Passive Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/YnDYJ4BFAOM'
  },
  {
    id: 34,
    name: 'Alternating Scratch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BVCuggz2QzE'
  },
  {
    id: 35,
    name: 'Alternating Cable Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yEyzhes02D0'
  },
  {
    id: 36,
    name: 'Airdyne',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Airdyne',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nCHBLBz68Dc'
  },
  {
    id: 37,
    name: 'Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/wrbr_Sqe1-8'
  },
  {
    id: 38,
    name: 'Active Thoracic Extension',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/21exVJmlZUA'
  },
  {
    id: 39,
    name: 'Active Hollow Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PDtGOC0d80E'
  },
  {
    id: 40,
    name: 'Accordion Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/f730g90qrYg'
  },
  {
    id: 41,
    name: 'Abmat Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wmJZzaynFe4'
  },
  {
    id: 42,
    name: 'Ab Rollout',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QFkNY-0Kw-M'
  },
  {
    id: 43,
    name: 'Supine Toe Touch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0_7iz91tfQc'
  },
  {
    id: 44,
    name: 'Supine Cross Connect',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2Bd7MI5mjP8'
  },
  {
    id: 45,
    name: 'Standing Wall Supported Reach',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QEp26wYTD9Q'
  },
  {
    id: 46,
    name: 'Seated Shoulder Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/N0_hOk3G5Xw'
  },
  {
    id: 47,
    name: 'Seated Scapular Wall Slide',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/doXqErGSiaQ'
  },
  {
    id: 48,
    name: 'Seated Rear Delt Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PcLncfPd27M'
  },
  {
    id: 49,
    name: 'Seated Pike Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/6JSB2y2lOKM'
  },
  {
    id: 50,
    name: 'Seated Pike Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NTVx88QJBmU'
  },
  {
    id: 51,
    name: 'Seated Overhead Dumbbell Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/tuAOzKjfwEM'
  },
  {
    id: 52,
    name: 'Seated Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Py-vSGsd8Jw'
  },
  {
    id: 53,
    name: 'Seated Box Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/9cnY2O6zToc'
  },
  {
    id: 54,
    name: 'Seated Barbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/cO55ngq-g7I'
  },
  {
    id: 55,
    name: 'Russian Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/juPXDCYAoj4'
  },
  {
    id: 56,
    name: 'Quadruped Hip Internal Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/IyNagSkFwmY'
  },
  {
    id: 57,
    name: 'Overhead In Place Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/l020dJaxsNU'
  },
  {
    id: 58,
    name: 'Mixed Overhead Suitcase Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DHHBK5WwXp0'
  },
  {
    id: 59,
    name: 'Long Range Incline Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/aFWRkltJKmQ'
  },
  {
    id: 60,
    name: 'Kneeling Single Arm Landmine Press with Extension Focus',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Y1xBwLEV1_w'
  },
  {
    id: 61,
    name: 'Flexbar Wrist Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Flexbar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Abze972pVLE'
  },
  {
    id: 62,
    name: 'Flexbar Wrist Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Flexbar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sHwDURUrIr0'
  },
  {
    id: 63,
    name: 'Feet Elevated Sumo Dumbbell Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/zlLrqXytvhs'
  },
  {
    id: 64,
    name: 'Dumbbell Single Leg Hip Extension on 45-Degree Hyperextension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/n-9z8WcLfyc'
  },
  {
    id: 65,
    name: 'Dumbbell Front Rack Cossack Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/_lYRBr0XHaI'
  },
  {
    id: 66,
    name: 'Dumbbell Curtis P',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6QEo7e4WLP0'
  },
  {
    id: 67,
    name: 'Double Pause Pronated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/gj7poOzq3ZM'
  },
  {
    id: 68,
    name: 'DNS Low Bear',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WJbnStdfwCw'
  },
  {
    id: 69,
    name: 'Deficit Glute Loop Dumbbell Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/0FrP0qGjmHk'
  },
  {
    id: 70,
    name: 'Banded Shoulder Flexion + External Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/j_KR9yW0LD0'
  },
  {
    id: 71,
    name: 'Ankle Dorsiflexion Pulse',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/oTzpJB-M0RQ'
  },
  {
    id: 72,
    name: '3 Way Dumbbell Incline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/I3ixYHrjFds'
  },
  {
    id: 73,
    name: 'Front Rack Kettlebell Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/cqFeYM7i35c'
  },
  {
    id: 74,
    name: 'EZ Bar Cheat Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/V2KC6-iLuvQ'
  },
  {
    id: 75,
    name: 'Elevator Supine Toes to Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zn1jlI9Nsmc'
  },
  {
    id: 76,
    name: 'Toe Touch to Reach',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Z6uXdr57lmQ'
  },
  {
    id: 77,
    name: 'Thread the Needle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/I6a2n7HSdtE'
  },
  {
    id: 78,
    name: 'Tall Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/dn2tPFu37h8'
  },
  {
    id: 79,
    name: 'Sumo Inchworm',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/UcN-vgwgowg'
  },
  {
    id: 80,
    name: 'Suitcase Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/Pnm_mc289V8'
  },
  {
    id: 81,
    name: 'Staggered Stance Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/ns1H0cWjPg0'
  },
  {
    id: 82,
    name: 'Split Squat Pulse',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/p9O2EOcoJZk'
  },
  {
    id: 83,
    name: 'Side Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/LFmIRu1WYvA'
  },
  {
    id: 84,
    name: 'Side Plank Hip Dip',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/9V_tpU7zFgs'
  },
  {
    id: 85,
    name: 'Seated Single Arm Arnold Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/v7afhmKO7KU'
  },
  {
    id: 86,
    name: 'Sampson Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/n5SI7aoIq_c'
  },
  {
    id: 87,
    name: 'Ring Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/-C-BAolMzJY'
  },
  {
    id: 88,
    name: 'Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/g0qW9r70GHQ'
  },
  {
    id: 89,
    name: 'Quadruped Thoracic Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/yViqmWzpspU'
  },
  {
    id: 90,
    name: 'Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/rwmbVC2UNW8'
  },
  {
    id: 91,
    name: 'Ostrich Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6Bn3P7e-KTM'
  },
  {
    id: 92,
    name: 'Mountain Climber',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-S-H_tDzD6g'
  },
  {
    id: 93,
    name: 'Jumping Jack',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/-s82xVAcjLE'
  },
  {
    id: 94,
    name: 'Inch Worm',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ulX4xnqjEmY'
  },
  {
    id: 95,
    name: 'High Knees In Place',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/N4TZIKBIP0Q'
  },
  {
    id: 96,
    name: 'Half Kneeling Dumbbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/yN7T4riwKGg'
  },
  {
    id: 97,
    name: 'Goblet Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/C9wAtjrZybw'
  },
  {
    id: 98,
    name: 'Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/kc9RsIWIXWM'
  },
  {
    id: 99,
    name: 'Glute Bridge Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/Rkn8O1hndBM'
  },
  {
    id: 100,
    name: 'Forearm Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/g0kVsy47u_Q'
  },
  {
    id: 101,
    name: 'Elevated Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/EoByCXhYsAM'
  },
  {
    id: 102,
    name: 'Elevated Dumbbell Plank Row',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/8tN6zAOYAso'
  },
  {
    id: 103,
    name: 'Dumbbell Single Leg Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/ljdD67fhMpg'
  },
  {
    id: 104,
    name: 'Dumbbell Single Arm Glute Bridge Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/tMskctT-Utg'
  },
  {
    id: 105,
    name: 'Dumbbell Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/xMycNYu4dC8'
  },
  {
    id: 106,
    name: 'Dumbbell Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/R_VUc1smnis'
  },
  {
    id: 107,
    name: 'Dumbbell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/nsHMMaUOmGE'
  },
  {
    id: 108,
    name: 'Dumbbell Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/cQ4CiE81Mwg'
  },
  {
    id: 109,
    name: 'Dumbbell Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/tsf8qljTUpg'
  },
  {
    id: 110,
    name: 'Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ehNbexZnwWM'
  },
  {
    id: 111,
    name: 'Child\'s Pose',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/D_bUx_SatLY'
  },
  {
    id: 112,
    name: 'Chainsaw Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/CJvlX8ARnUQ'
  },
  {
    id: 113,
    name: 'Cat-Cow',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KnwrDDCrgUs'
  },
  {
    id: 114,
    name: 'Bottom of Squat Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/3f0T5WsznvI'
  },
  {
    id: 115,
    name: 'Bird-Dog',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yVX4eHkrNXs'
  },
  {
    id: 116,
    name: 'Bent Hollow Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/pvJ701OJ95M'
  },
  {
    id: 117,
    name: '3 Point Dumbbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/qU84avYPrW8'
  },
  {
    id: 118,
    name: 'Dumbbell Deficit Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/gKSfQqfEwt8'
  },
  {
    id: 119,
    name: 'Door Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/kBNCZuL8XKI'
  },
  {
    id: 120,
    name: 'Voodoo Floss Elbow',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3mg_dgDFbT8'
  },
  {
    id: 121,
    name: 'Tall Kneeling Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/1Id8fvqnKWs'
  },
  {
    id: 122,
    name: 'Supine Wall Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Ewe1KaiFV7c'
  },
  {
    id: 123,
    name: 'Single Leg Leg Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/2qM_Eqyjzm0'
  },
  {
    id: 124,
    name: 'Single Leg Box Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/kNhGEBUAmJY'
  },
  {
    id: 125,
    name: 'Single Arm Chin Over Ring Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/amr1jWhYRwM'
  },
  {
    id: 126,
    name: 'Side Lying Hip Adduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/46FdRV7oKOA'
  },
  {
    id: 127,
    name: 'Reverse Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/8vkeZduLU8I'
  },
  {
    id: 128,
    name: 'Pulsing Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/k7AAo7SiNRM'
  },
  {
    id: 129,
    name: 'Pause Trap Bar Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/f7CNij7FbYw'
  },
  {
    id: 130,
    name: 'Non-Wall Facing Handstand Shoulder Tap',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/Q0B9BC_qLVA'
  },
  {
    id: 131,
    name: 'Kipping Ring Knee to Elbow',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SfKyNGTjxYI'
  },
  {
    id: 132,
    name: 'Kipping Ring Knee to Chest',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fSbQd_TZvb4'
  },
  {
    id: 133,
    name: 'Jump to Target',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/7VilvoZCmwE'
  },
  {
    id: 134,
    name: 'Calcaneus Soft Tissue Work',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sL9HMExdyns'
  },
  {
    id: 135,
    name: 'Box Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/OMQ81Ac3_jI'
  },
  {
    id: 136,
    name: 'Barbell Lateral Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/eUt1BRnY2PU'
  },
  {
    id: 137,
    name: 'Barbell Front Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4jLLzkRb390'
  },
  {
    id: 138,
    name: 'Around the World Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/0OIokEXhv5A'
  },
  {
    id: 139,
    name: 'Wrist Extension Lean',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wx3_DghpYfo'
  },
  {
    id: 140,
    name: 'Wrist Extension Backward Lean',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OYpR0PblNiU'
  },
  {
    id: 141,
    name: 'Single Leg Romanian Deadlift to Target',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/YHCOCOc7ENU'
  },
  {
    id: 142,
    name: 'Single Leg Dumbbell Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/gkb44Ou8y_I'
  },
  {
    id: 143,
    name: 'Single Dumbbell Box Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/Fp_lY5P6S2s'
  },
  {
    id: 144,
    name: 'Single Arm Overhead Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/xCFsKYb5Igo'
  },
  {
    id: 145,
    name: 'Single Arm Kettlebell Overhead Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/1cp5Ht0CnNM'
  },
  {
    id: 146,
    name: 'Single Arm Bicep Curl to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/gmRWV7x51fE'
  },
  {
    id: 147,
    name: 'Seated Side Bend',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mqvZssWju_o'
  },
  {
    id: 148,
    name: 'Quadruped Rock',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/IlrC0EdfvzI'
  },
  {
    id: 149,
    name: 'Pause Low Bar Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/t3sNo9q4Psw'
  },
  {
    id: 150,
    name: 'Long Range Bicep Curl on Box',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/bBar3BqHDn8'
  },
  {
    id: 151,
    name: 'Lacrosse Ball on Levator Scapulae',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Lacrosse Ball',
    description: 'Soft tissue release work targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/09GFVxD15dY'
  },
  {
    id: 152,
    name: 'Kettlebell Straddle Jefferson Curl',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FG_QPKAHmlU'
  },
  {
    id: 153,
    name: 'Incline Bench EZ Bar Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/okgRUF0OM0w'
  },
  {
    id: 154,
    name: 'Hook Lying Hamstring Bridge with Low Reach',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/bxQ8TuJk7v8'
  },
  {
    id: 155,
    name: 'Hip Bridge Alternating Dumbbell Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/lYPyocv1oJY'
  },
  {
    id: 156,
    name: 'Single Arm Doorway Pec Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the pec for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/iJ_QxGM0ZBg'
  },
  {
    id: 157,
    name: 'Cross Leg Side Bend',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/pj9A3o4rkyE'
  },
  {
    id: 158,
    name: 'Bent Over Kettlebell Row with Rotation',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/52rtCEWNbPc'
  },
  {
    id: 159,
    name: 'Banded Tricep Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/n5TTnk-Eap8'
  },
  {
    id: 160,
    name: 'Single Arm Preacher Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/UnwpdZZAMTY'
  },
  {
    id: 161,
    name: 'Single Arm Devil\'s Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/OGqm2WluTjI'
  },
  {
    id: 162,
    name: 'Seated Barbell Wrist Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/JOgXIEQkdVE'
  },
  {
    id: 163,
    name: 'Seal Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4AWSuUKuNQM'
  },
  {
    id: 164,
    name: 'Scapular Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XaQOAQwmNQ8'
  },
  {
    id: 165,
    name: 'Scapular Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/IVAZ4gnPcu4'
  },
  {
    id: 166,
    name: 'Safety Bar Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Tpm0Xn0FnRg'
  },
  {
    id: 167,
    name: 'Safety Bar Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/B11k-n6bR4s'
  },
  {
    id: 168,
    name: 'Russian Twist',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/T6J5SKor1kY'
  },
  {
    id: 169,
    name: 'Russian Kettlebell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fuG751qJ0pI'
  },
  {
    id: 170,
    name: 'Run',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1Py9Wr_x8I8'
  },
  {
    id: 171,
    name: 'Rumble Roll Lats',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the lat.',
    videoUrl: 'https://www.youtube.com/embed/_6PVMFT1J4c'
  },
  {
    id: 172,
    name: 'Row',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/aQM-OVmLIZs'
  },
  {
    id: 173,
    name: 'Rope Climb',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Se25OdqKdj8'
  },
  {
    id: 174,
    name: 'Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/rPmC2YBsdKQ'
  },
  {
    id: 175,
    name: 'Ring L Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/5BKIWk3_mj8'
  },
  {
    id: 176,
    name: 'Pause Incline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/oaZWp234xvI'
  },
  {
    id: 177,
    name: 'Pause Frog Stance Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/hLHTv6FpMLw'
  },
  {
    id: 178,
    name: 'Pause Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/FsebxwOAIJE'
  },
  {
    id: 179,
    name: 'Monkey Foot Hip Flexor Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eJCPazsN-LI'
  },
  {
    id: 180,
    name: 'Landmine Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/JrJOv5Exp94'
  },
  {
    id: 181,
    name: 'Incline Dumbbell French Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/bdbYqtB08EU'
  },
  {
    id: 182,
    name: 'Half Kneeling Hip Flexor Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the hip for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/Kx4rptJUbtM'
  },
  {
    id: 183,
    name: 'Dumbbell Seesaw Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/jRCq7WVnWfM'
  },
  {
    id: 184,
    name: 'Dumbbell Jefferson Curl',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/8XCYRfHAAWk'
  },
  {
    id: 185,
    name: 'Dumbbell Foam Roller Squat',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/t52o_JvD_Bs'
  },
  {
    id: 186,
    name: 'Dumbbell 6 Way Shoulder Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mhZrfCIOlbM'
  },
  {
    id: 187,
    name: 'Chest Supported Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/I1ImF6TwV6s'
  },
  {
    id: 188,
    name: 'Bent Over Dumbbell Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5q8i73IyhJA'
  },
  {
    id: 189,
    name: 'Axle Bar Snatch Grip Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/aWMnEX9wYMk'
  },
  {
    id: 190,
    name: 'Axle Bar Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/_Wzj1aIc6_M'
  },
  {
    id: 191,
    name: '2 Part Pause Split Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/x36JIKNz6Fc'
  },
  {
    id: 192,
    name: 'Lateral Beast Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RYmUQ-ktd5M'
  },
  {
    id: 193,
    name: 'Kneeling Spinal Wave',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1cioSdDdt5I'
  },
  {
    id: 194,
    name: 'Downward Facing Dog',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wQM3K5usSfQ'
  },
  {
    id: 195,
    name: 'Crawl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XdZn7T16pCU'
  },
  {
    id: 196,
    name: 'Crab Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4F0ay0dw_u0'
  },
  {
    id: 197,
    name: 'Crab Reacher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_DdBEdQewys'
  },
  {
    id: 198,
    name: 'Crab Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BBL0RBu8D-w'
  },
  {
    id: 199,
    name: 'Close Grip Bench Press with Chains',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/nMCfR5R3LCE'
  },
  {
    id: 200,
    name: 'Cambered Bar Zercher Yoke Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OlsUklgrfkk'
  },
  {
    id: 201,
    name: 'Cage Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/eskJaxqxY7Y'
  },
  {
    id: 202,
    name: 'Beast',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4juPLOvYvQ8'
  },
  {
    id: 203,
    name: 'Beast Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zBjlggktvnc'
  },
  {
    id: 204,
    name: 'Bear Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Tgg8gYfSDkg'
  },
  {
    id: 205,
    name: 'Bear Squat to Lizard Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Y41YNEF3kYU'
  },
  {
    id: 206,
    name: 'Banded Trap 3 Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GM2X6KfXxTc'
  },
  {
    id: 207,
    name: 'Banded Toe Tap',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-YR5olQP-KY'
  },
  {
    id: 208,
    name: 'Banded Barbell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/oEc6rDi9-z4'
  },
  {
    id: 209,
    name: 'Band Assisted Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/n3c9SOo-rd8'
  },
  {
    id: 210,
    name: 'Arm Corkscrew',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9LbH2mIA-0M'
  },
  {
    id: 211,
    name: 'Anchored Reverse Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6MuGXqMr7I0'
  },
  {
    id: 212,
    name: 'Active Lizard Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/UET3gF3VXdY'
  },
  {
    id: 213,
    name: '90/90 Switch Level 2',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/62zXKy7F-Xs'
  },
  {
    id: 214,
    name: '90/90 Switch Level 1',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/afk4Q-5wPsA'
  },
  {
    id: 215,
    name: '90/90 Internal Rotation Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the hip for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/ckDJsTiRN2E'
  },
  {
    id: 216,
    name: '90/90 Front Leg Lift Off',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PFb8ZU28z38'
  },
  {
    id: 217,
    name: '90/90 Front Leg Hover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/FbPsXsmP7O8'
  },
  {
    id: 218,
    name: '90/90 External Rotation Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the hip for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/lJv0Xvh1NA8'
  },
  {
    id: 219,
    name: '90/90 Back Leg Lift Off',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4LTb-_lZiuE'
  },
  {
    id: 220,
    name: '90/90 Back Leg Hover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/bfgmYeEewwg'
  },
  {
    id: 221,
    name: '90/90 Back Leg External Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/RgogT2yfF3c'
  },
  {
    id: 222,
    name: 'Thomas Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/-LZ8y-nBRoU'
  },
  {
    id: 223,
    name: 'Supinated Dumbbell Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/oHTdHczSFk8'
  },
  {
    id: 224,
    name: 'Single Arm Supinated Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/piHLfcTk7uo'
  },
  {
    id: 225,
    name: 'Single Arm Cable Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Bx5OKUNXNVY'
  },
  {
    id: 226,
    name: 'Rear Foot Elevated Kettlebell Rack Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/zC4ZgM5WOAc'
  },
  {
    id: 227,
    name: 'Pike Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/rWBw0haBob4'
  },
  {
    id: 228,
    name: 'Pancake',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NRewMiFvbUQ'
  },
  {
    id: 229,
    name: 'Medium Grip Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-m4OQ3N902Y'
  },
  {
    id: 230,
    name: 'Lying Reverse Grip Cable Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/-r4PimZKc-g'
  },
  {
    id: 231,
    name: 'Loaded Thomas Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/RNITuFABwgA'
  },
  {
    id: 232,
    name: 'Kadillac Bar Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/-w30DuX7c_c'
  },
  {
    id: 233,
    name: 'Incline Garhammer Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mix-I4K8gU4'
  },
  {
    id: 234,
    name: 'Horizontal Punch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KP7EiEXVmys'
  },
  {
    id: 235,
    name: 'Half Kneeling Kettlebell Clean + Windmill Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ompijZm2sTc'
  },
  {
    id: 236,
    name: 'Good Morning Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/1INObENoO3I'
  },
  {
    id: 237,
    name: 'Elevated Thoracic Bridge Hip Tap',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/LXsWtjnv23A'
  },
  {
    id: 238,
    name: 'Dumbbell Squat Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0ztUyuqXOIg'
  },
  {
    id: 239,
    name: 'Dumbbell Forward Lunge to Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6KzTH_q_2xI'
  },
  {
    id: 240,
    name: 'Box Hip Flexor Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A stretching exercise targeting the hip for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/8UDvV_pYgWA'
  },
  {
    id: 241,
    name: 'ATG Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/7G0991Bv5hw'
  },
  {
    id: 242,
    name: 'Trap Bar Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/jbLPUG4p-Io'
  },
  {
    id: 243,
    name: 'Toe Flexion Mobilization',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FL5Qjzc2c4I'
  },
  {
    id: 244,
    name: 'Push-Up on Ball of Kettlebell',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/wxjoxWLF7sg'
  },
  {
    id: 245,
    name: 'Pause Cyclist Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/FBYVAV8lokg'
  },
  {
    id: 246,
    name: 'Mixed Rack Suitcase Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/HbzLQWJObBc'
  },
  {
    id: 247,
    name: 'Kneeling Toe Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/h6_fPW2G2rk'
  },
  {
    id: 248,
    name: 'Kettlebell Switch Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/8Q8x-IeRSWM'
  },
  {
    id: 249,
    name: 'Kettlebell Suitcase Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4MZqOsaG80M'
  },
  {
    id: 250,
    name: 'Kettlebell Front Rack Box Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/zvMfOo3F6tY'
  },
  {
    id: 251,
    name: 'Half Kneeling Anti-Rotation Kettlebell Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/MoSFANLGzm4'
  },
  {
    id: 252,
    name: 'Forward to Backward Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/RgMf7q3CLeI'
  },
  {
    id: 253,
    name: 'Dumbbell Front Rack Box Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/mNkdKiBEXto'
  },
  {
    id: 254,
    name: 'Dumbbell Box Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/03Oghddz01o'
  },
  {
    id: 255,
    name: 'Alternating Single Leg Hanging Knee Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/IjIVOtz_Ah8'
  },
  {
    id: 256,
    name: 'Alternating Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/_Fh0fVl89QQ'
  },
  {
    id: 257,
    name: 'Trap Bar Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Ses05bciVlc'
  },
  {
    id: 258,
    name: 'Trap Bar Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/nUAAdmIV0eI'
  },
  {
    id: 259,
    name: 'Supine Cable Crossover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kHmjOVs16DE'
  },
  {
    id: 260,
    name: 'Strict Alternating Toe to Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/R0OkB85zFlI'
  },
  {
    id: 261,
    name: 'Straight Arm Dumbbell Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/51RODUxYAyI'
  },
  {
    id: 262,
    name: 'Spiderman Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/PzatigKtQOM'
  },
  {
    id: 263,
    name: 'Single Leg Romanian Deadlift + Leg Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/cm9xrYjQ_mo'
  },
  {
    id: 264,
    name: 'Single Arm Straight Arm Cable Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/W1UizLBBF1w'
  },
  {
    id: 265,
    name: 'Single Arm Overhead Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/I55mb6rZgKM'
  },
  {
    id: 266,
    name: 'Single Arm Landmine Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/few9YmEErXc'
  },
  {
    id: 267,
    name: 'Single Arm Landmine Meadows Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/vHU_a4GVu-U'
  },
  {
    id: 268,
    name: 'Shinbox Switch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xp2Sn1edAkk'
  },
  {
    id: 269,
    name: 'Shinbox Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3jxBYhdy1Sk'
  },
  {
    id: 270,
    name: 'Seated Safety Bar Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/e1UBNo5UZq8'
  },
  {
    id: 271,
    name: 'Seated Dumbbell Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KVH1oizjBlg'
  },
  {
    id: 272,
    name: 'Seated Dumbbell Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XCvPtj_fl14'
  },
  {
    id: 273,
    name: 'Seated Banded Zercher Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/L3ZKPAwoJ64'
  },
  {
    id: 274,
    name: 'Seated Banded Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/K0RFso7_Uks'
  },
  {
    id: 275,
    name: 'Safety Bar Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/sUwlHcDpERw'
  },
  {
    id: 276,
    name: 'Russian Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/cXgJnOA3CUY'
  },
  {
    id: 277,
    name: 'Rear Foot Elevated Front Rack Dumbbell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/POkgRs3pJdw'
  },
  {
    id: 278,
    name: 'Pulsing Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/PpkMMcBUxMk'
  },
  {
    id: 279,
    name: 'Plank Spinal Wave',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/PMigkpss17Y'
  },
  {
    id: 280,
    name: 'Pause Weighted Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/5YML6_w7o00'
  },
  {
    id: 281,
    name: 'Pause Sumo Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/5muo2OmMkbM'
  },
  {
    id: 282,
    name: 'Pause Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/NGQc47X72Yk'
  },
  {
    id: 283,
    name: 'Pause Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/Gw2uMUmSc_0'
  },
  {
    id: 284,
    name: 'Monkey Foot Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/lEKF1pX_6Rs'
  },
  {
    id: 285,
    name: 'Medicine Ball Shoulder Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Rp-Pp26hCa0'
  },
  {
    id: 286,
    name: 'Leg Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sibKCA90uPU'
  },
  {
    id: 287,
    name: 'Kick Sit',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KOM1Wjq2y7Y'
  },
  {
    id: 288,
    name: 'Kettlebell Clean to Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/FLEUwauD0EU'
  },
  {
    id: 289,
    name: 'Isometric Side Split',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4zVgLrd5VPs'
  },
  {
    id: 290,
    name: 'Isometric Front Split',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CiPATlN8JQ0'
  },
  {
    id: 291,
    name: 'Incline Dumbbell Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/xVknmZgnZz0'
  },
  {
    id: 292,
    name: 'Goblet Heel Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZGBWVpCvZMM'
  },
  {
    id: 293,
    name: 'Dumbbell Hang Clean + Push Jerk',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/xNTh7fFXv5g'
  },
  {
    id: 294,
    name: 'Dumbbell Clean to Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XkwBgO63BoY'
  },
  {
    id: 295,
    name: 'Decline Kadillac Bar Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Xa0_BNUHy1A'
  },
  {
    id: 296,
    name: 'Dead Stop Kettlebell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KnmRbaGPqEY'
  },
  {
    id: 297,
    name: 'Crossover Scapation',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/L_44HzJe-b8'
  },
  {
    id: 298,
    name: 'Cliffhanger Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Qib11rZ0nUA'
  },
  {
    id: 299,
    name: 'Clean High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/94bqmQV79a4'
  },
  {
    id: 300,
    name: 'Cable Cross Body Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/F_5ngMCAeeQ'
  },
  {
    id: 301,
    name: 'Burpee Over Wall',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/uWHcRk72D80'
  },
  {
    id: 302,
    name: 'Broomstick Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/xFC-9gtcFaA'
  },
  {
    id: 303,
    name: 'Box Elevated Pistol',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/enIFuAnRht4'
  },
  {
    id: 304,
    name: 'Bodyweight Man Maker',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YMyH3AUsH5c'
  },
  {
    id: 305,
    name: 'Bent Knee Copenhagen Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dxwY050tp2k'
  },
  {
    id: 306,
    name: 'Banded Russian Kettlebell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WR9Q7N-1puI'
  },
  {
    id: 307,
    name: 'Banded Pancake Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OKgj9xWr5g0'
  },
  {
    id: 308,
    name: 'Backward Sled Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ui0FcOKrypg'
  },
  {
    id: 309,
    name: 'Assisted Front Split Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/7YLOjrsy4Jc'
  },
  {
    id: 310,
    name: 'Arch Hold on Reverse Hyper',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2vs-pEUVUVo'
  },
  {
    id: 311,
    name: '90/90 Hip External Rotation Hover Extension',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/LX1CgDSPI4w'
  },
  {
    id: 312,
    name: '45º Hip Extension in Rack',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ML0PN4kULa4'
  },
  {
    id: 313,
    name: 'Wrist CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the wrist.',
    videoUrl: 'https://www.youtube.com/embed/-WC1PPUnnuc'
  },
  {
    id: 314,
    name: 'Wrist CAR Level 2',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the wrist.',
    videoUrl: 'https://www.youtube.com/embed/uA-kNAAx7_U'
  },
  {
    id: 315,
    name: 'Toe Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/elOk456O4ZY'
  },
  {
    id: 316,
    name: 'Tipping Bird',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PdlPzNFS_pk'
  },
  {
    id: 317,
    name: 'T-Spine CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the spine.',
    videoUrl: 'https://www.youtube.com/embed/nbucrLKUxiA'
  },
  {
    id: 318,
    name: 'Standing Knee CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the knee.',
    videoUrl: 'https://www.youtube.com/embed/yl6i11MnUZQ'
  },
  {
    id: 319,
    name: 'Standing Hip CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the hip.',
    videoUrl: 'https://www.youtube.com/embed/oOXW1RX1TVQ'
  },
  {
    id: 320,
    name: 'Neck CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the neck.',
    videoUrl: 'https://www.youtube.com/embed/gjHsTnbMEQM'
  },
  {
    id: 321,
    name: 'Shoulder CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/2FQToBWVKGQ'
  },
  {
    id: 322,
    name: 'Shoulder Capsular CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/OQmvPy6vxsI'
  },
  {
    id: 323,
    name: 'Seated Knee CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the knee.',
    videoUrl: 'https://www.youtube.com/embed/s3vbzO7e_9Q'
  },
  {
    id: 324,
    name: 'Scapular CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the scapula.',
    videoUrl: 'https://www.youtube.com/embed/jzyOlkt1__c'
  },
  {
    id: 325,
    name: 'Quadruped Spinal Segmentation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/u8lL9ONRm54'
  },
  {
    id: 326,
    name: 'Overhead Scapular CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the scapula.',
    videoUrl: 'https://www.youtube.com/embed/nuwW4FRdp7c'
  },
  {
    id: 327,
    name: 'Lateral Hip Tuck',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/coWkR59slmA'
  },
  {
    id: 328,
    name: 'Kneeling Spinal Segmentation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/u6DFTMpnvZ4'
  },
  {
    id: 329,
    name: 'Hip Tuck',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xoXg4zkDRZg'
  },
  {
    id: 330,
    name: 'Hanging Scapular CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Pull-up Bar',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the scapula.',
    videoUrl: 'https://www.youtube.com/embed/J3e0P5J9394'
  },
  {
    id: 331,
    name: 'Half Kneeling Shoulder CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/lpLZfpP2O_Q'
  },
  {
    id: 332,
    name: 'Half 90 Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/NTlS5of5tRw'
  },
  {
    id: 333,
    name: 'Front Raised Scapular CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the scapula.',
    videoUrl: 'https://www.youtube.com/embed/2QsyPIla3o8'
  },
  {
    id: 334,
    name: 'Flexed Elbow Shoulder CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/KtIZAf9vjag'
  },
  {
    id: 335,
    name: 'Flexed Elbow Scapular CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the elbow.',
    videoUrl: 'https://www.youtube.com/embed/Dr5DdxDVOuw'
  },
  {
    id: 336,
    name: 'Elbow CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the elbow.',
    videoUrl: 'https://www.youtube.com/embed/QYTSaz_666A'
  },
  {
    id: 337,
    name: 'Deep Squat Single Hip Abduction and Adduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lEUDLAnu-1I'
  },
  {
    id: 338,
    name: 'Deep Squat Reach',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/rZgn_EfVpUM'
  },
  {
    id: 339,
    name: 'Deep Squat Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/qjfNJWGOrhc'
  },
  {
    id: 340,
    name: 'Deep Squat Hip Abduction and Adduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lssVoHs51YU'
  },
  {
    id: 341,
    name: 'Circular Hip Tuck',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yEr5q9gjldY'
  },
  {
    id: 342,
    name: '90/90 ER Hinge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/77pIha68tAU'
  },
  {
    id: 343,
    name: 'Windshield Wiper with Medicine Ball',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Medicine Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wxgpA56NT1o'
  },
  {
    id: 344,
    name: 'Ukranian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/2yLrKcbHcOQ'
  },
  {
    id: 345,
    name: 'Toe Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Vy5FX9kW7-c'
  },
  {
    id: 346,
    name: 'Strict Hanging Knee to Elbow',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/jR1I03aEb1g'
  },
  {
    id: 347,
    name: 'Standing Spinal Wave',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/i7esHZ__7pI'
  },
  {
    id: 348,
    name: 'Standing Lateral Spinal Wave',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Jk42rIHEZ-4'
  },
  {
    id: 349,
    name: 'Single Arm Trap 3 Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bB2kbVG-s-g'
  },
  {
    id: 350,
    name: 'Shinbox',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/o3A_aRvwNqE'
  },
  {
    id: 351,
    name: 'Shinbox Single Arm Hip Lift',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3QCVZPL8BcY'
  },
  {
    id: 352,
    name: 'Shinbox Hip Lift',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7JKMOppDMC4'
  },
  {
    id: 353,
    name: 'Shinbox Extension',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TIk3-m8LiwY'
  },
  {
    id: 354,
    name: 'Seated Straddle Fold',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vfaS45iibKc'
  },
  {
    id: 355,
    name: 'Seated Forward Fold',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SeE6zXDQpYM'
  },
  {
    id: 356,
    name: 'Reverse Table Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WFy3buYBJds'
  },
  {
    id: 357,
    name: 'Reaching Lizard Twist',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/BCmJdvtmtDc'
  },
  {
    id: 358,
    name: 'Narrow Stance Incline Leg Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/w4b_g1cO57Q'
  },
  {
    id: 359,
    name: 'Mace Switch Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Mace',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/MFlbRvgz69o'
  },
  {
    id: 360,
    name: 'Mace Switch Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Mace',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/hWVY9UPSQkw'
  },
  {
    id: 361,
    name: 'Mace Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Mace',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/aq1E9IYjCXM'
  },
  {
    id: 362,
    name: 'Mace Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Mace',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6Yi6Zg-XijI'
  },
  {
    id: 363,
    name: 'Mace Forward Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Mace',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/30ehbYENdjM'
  },
  {
    id: 364,
    name: 'Mace Ballistic Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Mace',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/zjUXXhEGNVo'
  },
  {
    id: 365,
    name: 'Lying Tricep Extension with Chains',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/izWAIYNWplA'
  },
  {
    id: 366,
    name: 'Lying Ball Knee Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_50JLy1G5DU'
  },
  {
    id: 367,
    name: 'Low Lunge with Lateral Arm Driver',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/oLlglm8uVc0'
  },
  {
    id: 368,
    name: 'Low Lunge Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/SuBx7iFNRfM'
  },
  {
    id: 369,
    name: 'Lizard Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/FegbwDIQxKI'
  },
  {
    id: 370,
    name: 'Lateral Crab Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Q_4dCxkLjMw'
  },
  {
    id: 371,
    name: 'Towel Internal Rotation Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Towel',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/gmX7KS14e4A'
  },
  {
    id: 372,
    name: 'Top Hip Thrust Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/ZCmzqbqtC98'
  },
  {
    id: 373,
    name: 'Top Down Alternating Kettlebell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/BUFeOwrQ6R8'
  },
  {
    id: 374,
    name: 'Tib Bar Tibialis Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/372NpH5xj4Q'
  },
  {
    id: 375,
    name: 'Tib Bar Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/TkkX8cA90B8'
  },
  {
    id: 376,
    name: 'Supine Hip Internal Rotation Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the hip for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/345MeL7qLgg'
  },
  {
    id: 377,
    name: 'Supinated Cable Tricep Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3ifXSw_JWAc'
  },
  {
    id: 378,
    name: 'Standing Dislocate',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fRbM4Hc7Ov4'
  },
  {
    id: 379,
    name: 'Stall Bar L-Hang',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/0yQzTPxYk70'
  },
  {
    id: 380,
    name: 'Squatting Thoracic Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/fDuNR0-J-jY'
  },
  {
    id: 381,
    name: 'Split Stance Kettlebell Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/oFtEAF3QxI8'
  },
  {
    id: 382,
    name: 'Spidercrawl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/b5Rq4ZpvHZg'
  },
  {
    id: 383,
    name: 'Single Leg Pogo Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/FstOkMCXAGA'
  },
  {
    id: 384,
    name: 'Single Leg KOT Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/495fCac857Y'
  },
  {
    id: 385,
    name: 'Single Leg Jump Rope',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/8o0RLrgRxAA'
  },
  {
    id: 386,
    name: 'Single Leg Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/y2AV_rnEhag'
  },
  {
    id: 387,
    name: 'Side Over Arch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ng7AzZnl51U'
  },
  {
    id: 388,
    name: 'Single Arm Shoulder Capsular CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/_T1iojV891Q'
  },
  {
    id: 389,
    name: 'Shoulder Bridge Rock',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/6FlktNh0OeQ'
  },
  {
    id: 390,
    name: 'Seated Straddle to Standing Straddle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/rgm9A-P0mM0'
  },
  {
    id: 391,
    name: 'Safety Squat Bar Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/c03CNfJ2Ctg'
  },
  {
    id: 392,
    name: 'Rower Tuck-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rower',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/LWn3Xe4KbDw'
  },
  {
    id: 393,
    name: 'Quadruped Scapular Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/iYADQFlV_J8'
  },
  {
    id: 394,
    name: 'Prone Hip Internal Rotation End Range Lift Off',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/zTZoQJL5ffM'
  },
  {
    id: 395,
    name: 'Lateral Medicine Ball Hop Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/5ir2TUe8wW8'
  },
  {
    id: 396,
    name: 'Kettlebell L-Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kLucNItcnWo'
  },
  {
    id: 397,
    name: 'Incline Dumbbell Front Delt Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_3eIgiZ_3Yg'
  },
  {
    id: 398,
    name: 'Incline Bench Elevated Pigeon',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nDY7CMmqZQE'
  },
  {
    id: 399,
    name: 'Hip Capsular CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the hip.',
    videoUrl: 'https://www.youtube.com/embed/69Z-YcEnijQ'
  },
  {
    id: 400,
    name: 'Globe Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Tr6jAuRjnEE'
  },
  {
    id: 401,
    name: 'Gliding Leg Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/kRKgiknPbRE'
  },
  {
    id: 402,
    name: 'Front Leaning Theraband Lateral Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/shcjds9LnL4'
  },
  {
    id: 403,
    name: 'Front Leaning Rest Kettlebell Pull Through',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mThBIR8TScU'
  },
  {
    id: 404,
    name: 'Front Body Line Drill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XIEWjADlERs'
  },
  {
    id: 405,
    name: 'Four Position Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TJ_tuWpElTE'
  },
  {
    id: 406,
    name: 'Elevated Pigeon Good Morning',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WDAoVK_-3mU'
  },
  {
    id: 407,
    name: 'Elevated Front Leaning Rest',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Und54TtDCA4'
  },
  {
    id: 408,
    name: 'Dynamic Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PEB4QBEp7tc'
  },
  {
    id: 409,
    name: 'Dumbbell Wrist Pronation and Supination',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/m1rDJA9e6AQ'
  },
  {
    id: 410,
    name: 'Dumbbell Partial Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XO05HZw82Cs'
  },
  {
    id: 411,
    name: 'Dumbbell L-Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Muib7oPxW50'
  },
  {
    id: 412,
    name: 'Deadbug Single Leg Drop',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3X3vsuFA8YI'
  },
  {
    id: 413,
    name: 'Decline Football Bar Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/I4xOx-B_fSU'
  },
  {
    id: 414,
    name: 'Chest Supported IYT Complex',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7nK0xBUTgDg'
  },
  {
    id: 415,
    name: 'Chest Supported Dumbbell Reverse Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/objOmWlrSw4'
  },
  {
    id: 416,
    name: 'Chest Supported Butterfly Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/ngVxbTD279Q'
  },
  {
    id: 417,
    name: 'Cable Fly Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/u-IK6UNeG68'
  },
  {
    id: 418,
    name: 'Cable Drag Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/JtEFL0fRCic'
  },
  {
    id: 419,
    name: 'Burpee Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/T86U_5NWvqY'
  },
  {
    id: 420,
    name: 'Bodyweight Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EGwNQn37y-M'
  },
  {
    id: 421,
    name: 'Bent Hollow Hold with Band Pulldown',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/I6R6ZtLWE88'
  },
  {
    id: 422,
    name: 'Barbell Side Bend',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LM4P1u5rcNg'
  },
  {
    id: 423,
    name: 'Bar Dip Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/CzCgAaEVeGg'
  },
  {
    id: 424,
    name: 'Banded Incline Dumbbell Tate Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/_Xv_96p5nR8'
  },
  {
    id: 425,
    name: 'Banded Hamstring Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Rings',
    description: 'A stretching exercise targeting the hamstring for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/PCKtzqSITi8'
  },
  {
    id: 426,
    name: 'Banded Elevated Pigeon',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JbcB2FI-RVg'
  },
  {
    id: 427,
    name: 'Back Body Line Drill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RVBSwE5mI3g'
  },
  {
    id: 428,
    name: 'Arm Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5r6hf1O4SUc'
  },
  {
    id: 429,
    name: 'Arm Circle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hH9Y3UoapS8'
  },
  {
    id: 430,
    name: 'Active Pigeon',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/L5bUu1B-MZk'
  },
  {
    id: 431,
    name: 'Weighted Parallette Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/7TOlxeeEu-Y'
  },
  {
    id: 432,
    name: 'Top Partial Dumbbell Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wWq8piVxJXg'
  },
  {
    id: 433,
    name: 'Toes Elevated Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/-paWxAzirH0'
  },
  {
    id: 434,
    name: 'Thumbs Up Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/rttrkyW8Rt4'
  },
  {
    id: 435,
    name: 'Sumo Stance Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0_pvF1A09bk'
  },
  {
    id: 436,
    name: 'Suitcase Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/B3xQY554VY4'
  },
  {
    id: 437,
    name: 'Single Arm Rear Delt Cable Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/A5mrYT4yDTE'
  },
  {
    id: 438,
    name: 'Single Arm Dumbbell Front Rack Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NFsyLgslccY'
  },
  {
    id: 439,
    name: 'Seated Around the World',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CA8Yhw7KB8s'
  },
  {
    id: 440,
    name: 'Rear Delt Band Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gYiTBZIxtvk'
  },
  {
    id: 441,
    name: 'Prone Bent Leg Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CZXSCB9tCK0'
  },
  {
    id: 442,
    name: 'Plate Turkish Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Plate',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/o8_rnHotwYg'
  },
  {
    id: 443,
    name: 'Plate Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Plate',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xBLZlyKmDUc'
  },
  {
    id: 444,
    name: 'Pause Chain Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/eJxgB_j-fJw'
  },
  {
    id: 445,
    name: 'All you really need to do to improve your health.',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ic-ViqBX_kk'
  },
  {
    id: 446,
    name: 'Partial Dumbbell Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1ULDFWEr2fE'
  },
  {
    id: 447,
    name: 'Overhead Squat Balancing PVC Pipe',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/DGhZHmBuB2M'
  },
  {
    id: 448,
    name: 'Modified Barbell Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/skerMJvU2JQ'
  },
  {
    id: 449,
    name: 'Low Cable Crossover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DgP8OVJ6qgI'
  },
  {
    id: 450,
    name: 'Lateral Walking Banded Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/FFSEyEoMMGk'
  },
  {
    id: 451,
    name: 'Kettlebell Suitcase Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/roEnOh5UZzA'
  },
  {
    id: 452,
    name: 'Kettlebell Snatch From Floor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/2_mMyKQju-w'
  },
  {
    id: 453,
    name: 'Kettlebell Side Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/5B9kxfnvBUQ'
  },
  {
    id: 454,
    name: 'Kettlebell Goblet Sumo Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4HH-5zjT8_c'
  },
  {
    id: 455,
    name: 'Kadillac Bar Prone Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/u1aM84nhsXA'
  },
  {
    id: 456,
    name: 'Kadillac Bar Pin Seated Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/QpINM3h8vC0'
  },
  {
    id: 457,
    name: 'Kadillac Bar Pin Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/l1ncvajJFjk'
  },
  {
    id: 458,
    name: 'Kadillac Bar Paused Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/8NYDL_GBr-w'
  },
  {
    id: 459,
    name: 'Kadillac Bar Paused Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/6d9hBrRXTE8'
  },
  {
    id: 460,
    name: 'Kadillac Bar Paused Incline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/K2KijyNLzHQ'
  },
  {
    id: 461,
    name: 'Kadillac Bar Paused Decline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/coTab-k-Ipc'
  },
  {
    id: 462,
    name: 'Kadillac Bar Incline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Sk9iCNgrhRc'
  },
  {
    id: 463,
    name: 'Kadillac Bar Decline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Rt4tueSoXhQ'
  },
  {
    id: 464,
    name: 'Kadillac Bar Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/4gXvN-g82sA'
  },
  {
    id: 465,
    name: 'Kadillac Bar Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Mz8p9cK1yg4'
  },
  {
    id: 466,
    name: 'Inverted Skull Crusher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nPClMAaxuPE'
  },
  {
    id: 467,
    name: 'Hatfield Front Foot Elevated Suitcase Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/OrigNxb6QXQ'
  },
  {
    id: 468,
    name: 'Half Turkish Get-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/oJSeED8Rl48'
  },
  {
    id: 469,
    name: 'Half Kneeling Front Rack Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/S5uMyDMO16E'
  },
  {
    id: 470,
    name: 'Front Leaning Rest Knee to Elbow',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kx6AVdsctX0'
  },
  {
    id: 471,
    name: 'Feet Elevated Dumbbell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/GJL_qnZnsIM'
  },
  {
    id: 472,
    name: 'Dumbbell Tall Kneeling Rack to Standing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/p3HeplHyT40'
  },
  {
    id: 473,
    name: 'Dumbbell Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/L0yfpMUUPUA'
  },
  {
    id: 474,
    name: 'Dumbbell Bear Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/7Z6lnQ5ooI4'
  },
  {
    id: 475,
    name: 'Dumbbell ATG Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ftG8gO4jTkk'
  },
  {
    id: 476,
    name: 'Dual Kettlebell Front Leaning Rest',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6TqoxWecy9s'
  },
  {
    id: 477,
    name: 'Dual Dumbbell Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/K6PcwM-6StI'
  },
  {
    id: 478,
    name: 'Crush Grip Kettlebell L Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/K2IEzRZM31g'
  },
  {
    id: 479,
    name: 'Cobra Curtsy Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/UinwDcRqVkk'
  },
  {
    id: 480,
    name: 'Clmbr',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gIEeAzFTlrg'
  },
  {
    id: 481,
    name: 'Candlestick Roll Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1y-0FpsidXE'
  },
  {
    id: 482,
    name: 'Burpee to Tuck Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/YSXSjeDzqxo'
  },
  {
    id: 483,
    name: 'Bodyweight Turkish Get-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MORaA69DKjc'
  },
  {
    id: 484,
    name: 'Bodyweight Kang Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/C53oY2cF1wQ'
  },
  {
    id: 485,
    name: 'Bodyweight ATG Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6p-epvBK08Q'
  },
  {
    id: 486,
    name: 'Barbell Suitcase Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nwRJtV65YcA'
  },
  {
    id: 487,
    name: 'Banded Single Arm Rear Delt Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/mWd9N27Wmvk'
  },
  {
    id: 488,
    name: 'Banded Kang Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6pHsSErGIOM'
  },
  {
    id: 489,
    name: 'Banded Hip Hinge Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zMfbYPDKu4w'
  },
  {
    id: 490,
    name: 'Banded Glute Bridge Hip Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/ucYuPw6vfdw'
  },
  {
    id: 491,
    name: 'Banded Curl to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/6YbaNj6YgL8'
  },
  {
    id: 492,
    name: 'Alternating Seated Zottman Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/4r0VyqnFrFk'
  },
  {
    id: 493,
    name: 'Alternating Kettlebell Z Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/0VurPyHoZrk'
  },
  {
    id: 494,
    name: 'Air Bike',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Airdyne',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xUYk_a9rLsU'
  },
  {
    id: 495,
    name: '90/90 Banded Kettlebell Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ySiU86GlGMg'
  },
  {
    id: 496,
    name: 'Seated Bicep Cable Curl with Straight Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/3SePqFdvfBg'
  },
  {
    id: 497,
    name: 'Reverse Hyper Skullcrusher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/t-bJrejWbcM'
  },
  {
    id: 498,
    name: 'Reverse Hyper Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/o7QY0VVMoIQ'
  },
  {
    id: 499,
    name: 'Reverse Hyper Quadruped Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9M59nvWgpNA'
  },
  {
    id: 500,
    name: 'Reverse Hyper Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/nap7PjTHA70'
  },
  {
    id: 501,
    name: '90 Degree Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/7ZlgtW8PgVA'
  },
  {
    id: 502,
    name: 'Wrist Push Up on Knees',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/IPzcFWDVBXg'
  },
  {
    id: 503,
    name: 'Wrist Push Up Against Wall',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ejpnT-gtVJc'
  },
  {
    id: 504,
    name: 'Wide Grip Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ke2KCbigq6A'
  },
  {
    id: 505,
    name: 'Wide Grip Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/_--ECHGFxNk'
  },
  {
    id: 506,
    name: 'Weighted Supinated Pull Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/utzrUcxP7v0'
  },
  {
    id: 507,
    name: 'Weighted Dumbbell Decline Bench Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/v-y_kfxuZdQ'
  },
  {
    id: 508,
    name: 'Weighted Supinated Narrow Grip Pull Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/HUj8ZxDu_rU'
  },
  {
    id: 509,
    name: 'Weighted Ring Push Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Ut6V0-0r7gA'
  },
  {
    id: 510,
    name: 'Wall Psoas March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kjNJhsd1X3Y'
  },
  {
    id: 511,
    name: 'Uneven Trap Bar Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/i6dMEWtZaHc'
  },
  {
    id: 512,
    name: 'Top Down Alternating Dumbbell Prone Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/efHqVJ1FewU'
  },
  {
    id: 513,
    name: 'Toes Elevated Dumbbell Jefferson Curl',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/b-JLOmPOx-o'
  },
  {
    id: 514,
    name: 'Toe Sit',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ep8uqYjISLU'
  },
  {
    id: 515,
    name: 'Three Way Delt Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XCwiqhugNks'
  },
  {
    id: 516,
    name: 'Tall Kneeling Landmine Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/zUUQenp3Lk8'
  },
  {
    id: 517,
    name: 'Theraband Quadruped Crawl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/IUmEGu5C3u4'
  },
  {
    id: 518,
    name: 'Tall Kneeling Kettlebell Horn Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/dy9clsmIO34'
  },
  {
    id: 519,
    name: 'Tall Kneeling Kettlebell Horn Grip Alternating Press Out',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/z5umWqjRHKs'
  },
  {
    id: 520,
    name: 'Swiss Ball Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Stability Ball',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/GkLXWDd6iQk'
  },
  {
    id: 521,
    name: 'Supinated Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/XxQaiPb2qfs'
  },
  {
    id: 522,
    name: 'Straight Leg Kettlebell Russian Twist',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wO0ybO1qPrg'
  },
  {
    id: 523,
    name: 'Straight Arm Russion Twist',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YjJcoyF-rmA'
  },
  {
    id: 524,
    name: 'Straight Arm Kettlebell Russian Twist',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/R_KXgofEAxY'
  },
  {
    id: 525,
    name: 'Standing Straight Bar Cable Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gl22qCqz4lo'
  },
  {
    id: 526,
    name: 'Standing Low Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ZOh4b1UOf_Q'
  },
  {
    id: 527,
    name: 'Standing Kettlebell Horn Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/HLDEYD3lrls'
  },
  {
    id: 528,
    name: 'Standing Dumbbell Curl to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/0SVuq3mKBII'
  },
  {
    id: 529,
    name: 'Standing Dumbbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/BPZXgwKsph0'
  },
  {
    id: 530,
    name: 'Standing Cable Rear Delt Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/6M6-tZ21tYk'
  },
  {
    id: 531,
    name: 'Standing Banded Shoulder Complex (T,W,Y)',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1b27ThDnHOY'
  },
  {
    id: 532,
    name: 'Sprawl Box Jump Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/9MzvzUzwgTg'
  },
  {
    id: 533,
    name: 'Sprawl Box Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/tGAgXwttbP4'
  },
  {
    id: 534,
    name: 'Snatch From Power Position',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/IKcoItr3xYU'
  },
  {
    id: 535,
    name: 'Sissy Squat to Elevated Surface',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XF0tVCDS7Ww'
  },
  {
    id: 536,
    name: 'Single Leg Wall RDL',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/2EbUvkNGc0c'
  },
  {
    id: 537,
    name: 'Single Leg Toe to Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/J07Fg-tpUgA'
  },
  {
    id: 538,
    name: 'Single Leg Seated Hamstring Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Rings',
    description: 'A stretching exercise targeting the hamstring for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/I-nhmnzTJn0'
  },
  {
    id: 539,
    name: 'Single Leg Landmine Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/iRUY1g7CSpo'
  },
  {
    id: 540,
    name: 'Single Arm Single Leg Glute Bridge Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/FKvhGOi-2Q4'
  },
  {
    id: 541,
    name: 'Single Arm Dumbbell Front Rack Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/W1-aAuaV6qI'
  },
  {
    id: 542,
    name: 'Single Arm Barbell Suitcase Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/VUlUzle6znk'
  },
  {
    id: 543,
    name: 'Side Star Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/gXLddG9Bock'
  },
  {
    id: 544,
    name: 'Seated Top Half Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/slIvqBHGoiQ'
  },
  {
    id: 545,
    name: 'Prone Football Bar Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/9Y6De_-8eWE'
  },
  {
    id: 546,
    name: 'Paused Strict Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/W7kab8vQy3w'
  },
  {
    id: 547,
    name: 'Scaled Ring Dip (Heel Assist)',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/PZAoEqJnHTQ'
  },
  {
    id: 548,
    name: 'Pause Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/LQf-8PANawo'
  },
  {
    id: 549,
    name: 'Partner Resisted Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/KJjuWft7Fv4'
  },
  {
    id: 550,
    name: 'One and a Quarter Kettlebell Goblet Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ejDzgD-bEGU'
  },
  {
    id: 551,
    name: 'One and a Quarter Tall Kneeling Kettlebell French Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Q3ThwO-Kkhc'
  },
  {
    id: 552,
    name: 'One and a Quarter Kettlebell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/uE-mrsLDBk4'
  },
  {
    id: 553,
    name: 'Neutral Grip Incline Dumbbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/LSD6ZRUK0Ho'
  },
  {
    id: 554,
    name: 'Multi Grip Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/39IYUgViw74'
  },
  {
    id: 555,
    name: 'Mixed Grip Pendlay Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/a0-4m9TONnY'
  },
  {
    id: 556,
    name: 'Mixed Grip Barbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/YGQa3FPfDGI'
  },
  {
    id: 557,
    name: 'Low Handle Sled Push',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kk0U6NfXZYY'
  },
  {
    id: 558,
    name: 'Lateral Single Arm Half Kneeling Cable Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/OYAhISbNeTg'
  },
  {
    id: 559,
    name: 'Larsen Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/lYrVlEyw3YY'
  },
  {
    id: 560,
    name: 'Knees Over Toes Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/JQoRBgCMbXE'
  },
  {
    id: 561,
    name: 'Kneeling Wrist Walk',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/v4ZYOI3sP88'
  },
  {
    id: 562,
    name: 'Kneeling Cable Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yTFoKSOVMN0'
  },
  {
    id: 563,
    name: 'Kneeling Box Handstand Hold with Single Leg Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/tIJ-njhsaIQ'
  },
  {
    id: 564,
    name: 'Kettlebell Sumo Squat Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/L1Xh6vplUZU'
  },
  {
    id: 565,
    name: 'Kettlebell Marching Farmer Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/bQ8S43zjhxo'
  },
  {
    id: 566,
    name: 'Kettlebell Horn Z Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/m4v2-yEILtQ'
  },
  {
    id: 567,
    name: 'Kettlebell Goblet Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/im8r_3vGh-o'
  },
  {
    id: 568,
    name: 'Kettlebell Crush Grip L-Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/By6oX8fAEVM'
  },
  {
    id: 569,
    name: 'Kettlebell Cross Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/8H_jU34BKhQ'
  },
  {
    id: 570,
    name: 'Kettlebell Cross Body Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/dcobwUz3BAA'
  },
  {
    id: 571,
    name: 'Kettle Bear Complex',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/J9Kxwvl6nyI'
  },
  {
    id: 572,
    name: 'Isometric Kettlebell Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2Ng8lyatgcs'
  },
  {
    id: 573,
    name: 'Isometric Banded Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0rObkJc6yA0'
  },
  {
    id: 574,
    name: 'Incline Football Bar Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/GXZwdoRgwe8'
  },
  {
    id: 575,
    name: 'Incline Dumbbell Curl with Offset Grip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/SpxbThg8NFs'
  },
  {
    id: 576,
    name: 'Incline Bench Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/yAExvHQYULM'
  },
  {
    id: 577,
    name: 'Narrow Stance Kettlebell Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/EB5M4PyGuL0'
  },
  {
    id: 578,
    name: 'Hooklying Banded Clamshell',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/AS96hH6iwV8'
  },
  {
    id: 579,
    name: 'Elevated Extended Bridge Kettlebell Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/FVGP5qPKm-E'
  },
  {
    id: 580,
    name: 'Alternating Elevated Extended Bridge Kettlebell Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/oOVZNZdhIyg'
  },
  {
    id: 581,
    name: 'Half Kneeling Thoracic Rotation with Lift Off',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/WHK-PX_Ss8w'
  },
  {
    id: 582,
    name: 'Half Kneeling Horn Curl to Halo Flow',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/o-arTcHja_I'
  },
  {
    id: 583,
    name: 'GHD Reverse Preacher Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/rGfOfV1XYiA'
  },
  {
    id: 584,
    name: 'Floating Snatch Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/ksoBJeDKI94'
  },
  {
    id: 585,
    name: 'Floating Clean Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/LpnSo31aRlM'
  },
  {
    id: 586,
    name: 'Fingertip Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xGYDO0_SaQk'
  },
  {
    id: 587,
    name: 'Elevated Couch Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/ePovQNraFvc'
  },
  {
    id: 588,
    name: 'Elephant Walk Step',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3FfVduJkV-Q'
  },
  {
    id: 589,
    name: 'Dumbbell Goblet Squat Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/7ZGuhHFAy3o'
  },
  {
    id: 590,
    name: 'Dumbbell Tuck Sit',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/oKYNHiKnKfw'
  },
  {
    id: 591,
    name: 'Dumbbell Tuck Planche',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0vaOz3dHfJ8'
  },
  {
    id: 592,
    name: 'Dumbbell Supinated Skull Crusher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_7esriC1Iw0'
  },
  {
    id: 593,
    name: 'Dumbbell Marching Farmer Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/AOZVa-_d_jY'
  },
  {
    id: 594,
    name: 'Dumbbell L-Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/onFYNZy0emY'
  },
  {
    id: 595,
    name: 'Dumbbell Bent Over T\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_RpA7jp38Tw'
  },
  {
    id: 596,
    name: 'Dual Kettlebell Swing to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/lv97-CH4dTw'
  },
  {
    id: 597,
    name: 'Dual Kettlebell Front Rack Walking Lunges',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/39jcEjK7ZKE'
  },
  {
    id: 598,
    name: 'Dual Kettlebell Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/uyDp-b4txE8'
  },
  {
    id: 599,
    name: 'Kettlebell Bottoms Up Clean from Floor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/KM8Np0NZMPc'
  },
  {
    id: 600,
    name: 'Diagonal Skater Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/CfLrE1x7Tbg'
  },
  {
    id: 601,
    name: 'Deficit Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/KDrdOQ2ZyMM'
  },
  {
    id: 602,
    name: 'Crush Grip Tall Kneeling Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ip64ETSSFw8'
  },
  {
    id: 603,
    name: 'Clean Segmented Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/akxX8p9baqU'
  },
  {
    id: 604,
    name: 'Clean From Power Position',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/x-Owblt5fyk'
  },
  {
    id: 605,
    name: 'Chest Supported Incline Rear Delt Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XqJx0EaM5ak'
  },
  {
    id: 606,
    name: 'Chest Supported Dumbbell T\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ci2aGorNCwA'
  },
  {
    id: 607,
    name: 'Cable Lying Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/OBMMBlnt1Sc'
  },
  {
    id: 608,
    name: 'Cable Abducted Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/-3-0XB1QzPk'
  },
  {
    id: 609,
    name: 'Burpee Over Medicine Ball',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/4PXLvEekxvA'
  },
  {
    id: 610,
    name: 'Burpee Over Kettlebell',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/hUoF6uUSMa8'
  },
  {
    id: 611,
    name: 'Bulgarian Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/iHPPvGkGxtc'
  },
  {
    id: 612,
    name: 'Bent Over Snow Angel',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BZNLZuNnzN0'
  },
  {
    id: 613,
    name: 'Barbell Windshield Wiper',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RrTSC419boM'
  },
  {
    id: 614,
    name: 'Banded Supinated Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FzUJPHBHFAA'
  },
  {
    id: 615,
    name: 'Banded Reverse Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/IyARtTqX1w0'
  },
  {
    id: 616,
    name: 'Banded Pallof Lateral Walk',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gTTilQOc5_M'
  },
  {
    id: 617,
    name: 'Banded Frog Pump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qhOoaW8ynKA'
  },
  {
    id: 618,
    name: 'Banded Face Pull to Y',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/v9B1kWFSIc0'
  },
  {
    id: 619,
    name: 'Banded Bodyweight Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/9gBP8Kz4rgQ'
  },
  {
    id: 620,
    name: 'Banded Bodyweight Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/CFmwiAzdsQM'
  },
  {
    id: 621,
    name: 'Back Squat with Chains',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/rMt49eINbCM'
  },
  {
    id: 622,
    name: 'Axle Bar Incline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/LEhNS2olwqI'
  },
  {
    id: 623,
    name: 'ATG Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lFMEWK9nJHg'
  },
  {
    id: 624,
    name: 'Arm Hug',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eacHaQg-gh0'
  },
  {
    id: 625,
    name: 'Arnold Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/xfnBJH4xCZY'
  },
  {
    id: 626,
    name: 'Alternating Kettlebell Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/CIg3ERVCUmo'
  },
  {
    id: 627,
    name: 'Alternating Decline Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/EK3tHzgVya8'
  },
  {
    id: 628,
    name: '90/90 Supine Kettebell Horn Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/49jdhC0-MN0'
  },
  {
    id: 629,
    name: '3 Way Ab Roll Out',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ayfXeT7YNz4'
  },
  {
    id: 630,
    name: 'Medicine Ball Spilt Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/SpeDsIbu4eY'
  },
  {
    id: 631,
    name: 'Gravity Boot Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/7zBRTuCKlAc'
  },
  {
    id: 632,
    name: 'One and a Quater Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/gC328ueBU44'
  },
  {
    id: 633,
    name: 'One and a Quater Dumbbell French Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/MtLW6oDpuY8'
  },
  {
    id: 634,
    name: 'Reverse Scott Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/BbGlm9o2mCA'
  },
  {
    id: 635,
    name: 'Single Arm Banded Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/50q5BcJQvZQ'
  },
  {
    id: 636,
    name: 'Stall Bar Knee Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4MIgtj9rMxE'
  },
  {
    id: 637,
    name: 'Staggered Stance Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/3OB4kKehknw'
  },
  {
    id: 638,
    name: 'Single Arm Banded Incline Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/PjBYgBrQCvY'
  },
  {
    id: 639,
    name: 'No Jump No Clap Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/p2X-7aCtRZ8'
  },
  {
    id: 640,
    name: 'Multi Grip Bar Decline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/5F-JmG6wnLg'
  },
  {
    id: 641,
    name: 'Kettlebell Tall Kneeling Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/ig2IitGM7rU'
  },
  {
    id: 642,
    name: 'Goblet Jump Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/gxzqTc62eHM'
  },
  {
    id: 643,
    name: 'Doorway Pec Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the pec for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/QIXkfjdhQso'
  },
  {
    id: 644,
    name: 'Bench Plank Kettlebell Row',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/y-Z6pkKoygU'
  },
  {
    id: 645,
    name: 'Bench Plank Dumbbell Row',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/MoUBn1NOMdo'
  },
  {
    id: 646,
    name: 'Underswitch to Crab Reach',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eaDsGSqdP2Y'
  },
  {
    id: 647,
    name: 'Top Down Barbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/85oqdXbfjVc'
  },
  {
    id: 648,
    name: 'Sumo Stance Plank Walkout',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/d2v13DgAeOM'
  },
  {
    id: 649,
    name: 'Straight Leg Hip Bridge March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/SfxiYTdSPgM'
  },
  {
    id: 650,
    name: 'Star Plank Hip Tap',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/tZmm3TzLris'
  },
  {
    id: 651,
    name: 'Split Stance Dumbbell Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/8QwyGoUCJZA'
  },
  {
    id: 652,
    name: 'Single Leg Lateral Hop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/unHU0qFUSyg'
  },
  {
    id: 653,
    name: 'Single Leg Dumbbell RDL',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/HQiWAgOpMb8'
  },
  {
    id: 654,
    name: 'Single Leg Deadlift to Banded Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/Y6_wc0N6YqA'
  },
  {
    id: 655,
    name: 'Seated Curl to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/FIriaRw9_Og'
  },
  {
    id: 656,
    name: 'Scorpion',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DnAG3Nhpwvw'
  },
  {
    id: 657,
    name: 'Prone Swimmer',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/HK7xPJtbgb8'
  },
  {
    id: 658,
    name: 'Pinwheel Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/9_phm_pYROg'
  },
  {
    id: 659,
    name: 'Parallette Hammer Grip Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Ar3jA86O1Uk'
  },
  {
    id: 660,
    name: 'Offset Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/UXH5tC4eWnQ'
  },
  {
    id: 661,
    name: 'Oblique Tuck-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0ylktQ2L_VA'
  },
  {
    id: 662,
    name: 'Neutral Grip Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/LCNZ7X-TX20'
  },
  {
    id: 663,
    name: 'Low Dragon Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/qNyDFvOeFCA'
  },
  {
    id: 664,
    name: 'Lateral Bear Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MySQkUYO7O0'
  },
  {
    id: 665,
    name: 'Hollow Body Narrow Grip Dumbbell Floor Press',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/VQZzqyKjnec'
  },
  {
    id: 666,
    name: 'Hanging Oblique Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/weEOrfuGNeQ'
  },
  {
    id: 667,
    name: 'Hand Supported Suitcase Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/qXF-oU2k4M4'
  },
  {
    id: 668,
    name: 'Single Leg Hand Supported Kettlebell RDL',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/x8UkNufa7x0'
  },
  {
    id: 669,
    name: 'Single Leg Hand Supported Dumbbell RDL',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/Fmhup6_MuhM'
  },
  {
    id: 670,
    name: 'Half Kneeling Bodyweight Windmill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/oG7cp0cimV0'
  },
  {
    id: 671,
    name: 'Half Kneeling Crush Grip Dumbbell  Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/xoDrJp6s71A'
  },
  {
    id: 672,
    name: 'Groiner',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/rkVadNuQ6_U'
  },
  {
    id: 673,
    name: 'Feet Supported Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/BUj4vQko3JM'
  },
  {
    id: 674,
    name: 'Feet Elevated Ring Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/7VwRDkhZCf4'
  },
  {
    id: 675,
    name: 'Feet Elevated Parallette Push Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/pVtwRMhUFv4'
  },
  {
    id: 676,
    name: 'Burpee Over Dumbbell',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/VX6RwYI35dI'
  },
  {
    id: 677,
    name: 'Dumbbell Suitcase Reverse Lunge to Dumbbell Single Leg RDL',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/ItUzGg9k8qY'
  },
  {
    id: 678,
    name: 'Dumbbell Suitcase Deficit Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/NM2E6feVwoo'
  },
  {
    id: 679,
    name: 'Dumbbell Straight Arm Kickback',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-y8Qu6kCkpI'
  },
  {
    id: 680,
    name: 'Dumbbell Split Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/a4emjjWr-8I'
  },
  {
    id: 681,
    name: 'Dumbbell Quadruped Pull Through',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1heoJQx1gGE'
  },
  {
    id: 682,
    name: 'Dumbbell Muscle Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/8zR0ln58YE8'
  },
  {
    id: 683,
    name: 'Dumbbell Front Rack Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/5dGP1lAqGF8'
  },
  {
    id: 684,
    name: 'Dumbbell Deficit Curtsy Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/hXAZWTsfYe4'
  },
  {
    id: 685,
    name: 'Dumbbell Crush Grip Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2guUgGIAtpY'
  },
  {
    id: 686,
    name: 'Dumbbell Crossbody Step Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/U6MLakBkhYA'
  },
  {
    id: 687,
    name: 'Dumbbell Cross Body Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/dKGNehcDrP8'
  },
  {
    id: 688,
    name: 'Dumbbell Bear Complex',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OUsl4_xNzSQ'
  },
  {
    id: 689,
    name: 'Dual Dumbbell Windshield Wipers',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/x0su3Qpee9Q'
  },
  {
    id: 690,
    name: 'Dual Dumbbell Hollow Flutter Kicks',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Zk7fQGPo55Y'
  },
  {
    id: 691,
    name: 'Dual Dumbbell Sumo Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/OcwZMgtQJW8'
  },
  {
    id: 692,
    name: 'D-Ball Shoulder Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/HyPbyn0e-dw'
  },
  {
    id: 693,
    name: 'Bodyweight Side Bend',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/u2mabKGrrMI'
  },
  {
    id: 694,
    name: 'Bodyweight Slideboard Curtsy Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/A1EbHX3hSDg'
  },
  {
    id: 695,
    name: 'Burpee Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/HSRJe9b_Aik'
  },
  {
    id: 696,
    name: 'D-Ball Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/KVacfxe1lqE'
  },
  {
    id: 697,
    name: 'Bodyweight Overhead Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5VJpR9CYb1Y'
  },
  {
    id: 698,
    name: 'Bodyweight Overhead Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/sZaJyFotm_s'
  },
  {
    id: 699,
    name: 'Bodyweight Deficit Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/mlAaOIP9BwI'
  },
  {
    id: 700,
    name: 'Bodyweight Cross Body Jefferson Curl',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/szd4zTavE7U'
  },
  {
    id: 701,
    name: 'Beast to Alternating Leg Through',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GSOW4LFGHZQ'
  },
  {
    id: 702,
    name: 'Banded Wrist Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/q_d5suQwFyk'
  },
  {
    id: 703,
    name: 'Banded Tate Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/SzRqtz98Q9Y'
  },
  {
    id: 704,
    name: 'Banded Standing Decline Chest Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/tMeut_TcNM0'
  },
  {
    id: 705,
    name: 'Banded Rear Delt Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/yYwpr72z6vk'
  },
  {
    id: 706,
    name: 'Alternating Standing Dumbbell Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/TUhC873MuQ4'
  },
  {
    id: 707,
    name: 'Back Supported Alternating Dumbbell Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/VxTdZWGiWRo'
  },
  {
    id: 708,
    name: 'Banded Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/GsMDLcWI7GY'
  },
  {
    id: 709,
    name: 'Banded Dumbbell Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/JTJwX0tI1MA'
  },
  {
    id: 710,
    name: 'Banded Incline Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/76yCAzqjwps'
  },
  {
    id: 711,
    name: 'Alternating Seated Dumbbell Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/uPuKk2mspuQ'
  },
  {
    id: 712,
    name: 'Alternating Deficit Dumbbell Curtsy Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/4eA08uuktFw'
  },
  {
    id: 713,
    name: '90/90 Crush Grip Dumbbell Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/6dqJxwbIrNc'
  },
  {
    id: 714,
    name: 'One and a Quarter Dumbbell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/CKlTnMxZ7jA'
  },
  {
    id: 715,
    name: 'One and a Quarter Goblet Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/7eGocmgc9yk'
  },
  {
    id: 716,
    name: 'Single Leg Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/377SA3SSxJQ'
  },
  {
    id: 717,
    name: 'Skipping A\'s',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ieE2HfrDZWQ'
  },
  {
    id: 718,
    name: 'Staggered Stance Kettlebell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/9S3PvThW2Kw'
  },
  {
    id: 719,
    name: 'Staggered Stance Single Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/ClBt4aQUSn8'
  },
  {
    id: 720,
    name: 'Staggered Stance Trap Bar Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/T8l8KCi9QoA'
  },
  {
    id: 721,
    name: 'Stall Bar Isometric Hanging Knee to Chest',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/zMyjYZ8GmnQ'
  },
  {
    id: 722,
    name: 'Stall Bar Knee Raise with High Low Grip',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ge1XXycJOB0'
  },
  {
    id: 723,
    name: 'Standing Dumbbell Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/CSkA78LE5D4'
  },
  {
    id: 724,
    name: 'Static Back',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LE4QHouNkNI'
  },
  {
    id: 725,
    name: 'Suitcase Rear Foot Elevated Kettlebell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/-Pj6wHdwB7A'
  },
  {
    id: 726,
    name: 'Tall Kneeling to Standing with Knee Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hdOA-L_qjFE'
  },
  {
    id: 727,
    name: 'Tall Plank Knee to Elbow',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/csMbjToFkyU'
  },
  {
    id: 728,
    name: 'Theraband Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/BNODC9AqqJE'
  },
  {
    id: 729,
    name: 'Theraband Single Leg Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/UMj4LXwz45U'
  },
  {
    id: 730,
    name: 'Toe Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ezzOkXNeemk'
  },
  {
    id: 731,
    name: 'Wall Angel',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2PSxsXqsY6o'
  },
  {
    id: 732,
    name: 'Wall Sit Banded Clamshell',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/D1tlwT-dzv8'
  },
  {
    id: 733,
    name: '3 Way Banded Cha Cha',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TSoAqzRoPDo'
  },
  {
    id: 734,
    name: 'Bodyweight Russian Twist',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Fzsy5lIghOs'
  },
  {
    id: 735,
    name: 'Cocky Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RS7ojFIHulg'
  },
  {
    id: 736,
    name: 'Horse Stance Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/chzrS75C8a4'
  },
  {
    id: 737,
    name: 'Isometric Banded Clamshell',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3Uh3tvs62ps'
  },
  {
    id: 738,
    name: 'Lateral Bench Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/tuc7wUP0FzM'
  },
  {
    id: 739,
    name: 'Single Leg Medicine Ball Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/zDZ71-VVbdA'
  },
  {
    id: 740,
    name: 'Staggered Stance Single Kettlebell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/-GKa0-wS5s4'
  },
  {
    id: 741,
    name: 'Standing Pigeon',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0sQCxJONsvg'
  },
  {
    id: 742,
    name: 'Side Plank Banded Row',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/707scOHTLt8'
  },
  {
    id: 743,
    name: 'Side Lying Leg Abduction with Extra Range',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EOeJ-WJLEJ4'
  },
  {
    id: 744,
    name: 'Side Lying Hip CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the hip.',
    videoUrl: 'https://www.youtube.com/embed/cI-jENBquNc'
  },
  {
    id: 745,
    name: 'Scapular Inverted Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/7qIV177Hx7U'
  },
  {
    id: 746,
    name: 'Saddle Pose',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wR5b1aMKQzM'
  },
  {
    id: 747,
    name: 'Reverse Scapular Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/-RSX6kAk2pw'
  },
  {
    id: 748,
    name: 'Reverse Plank Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/lUues52P9qQ'
  },
  {
    id: 749,
    name: 'Reverse Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/0dPT44WuZS0'
  },
  {
    id: 750,
    name: 'Rear Foot Elevated Rock Back',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YcuK25vKoz4'
  },
  {
    id: 751,
    name: 'Quadruped Breathing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DyWc66FsVZ0'
  },
  {
    id: 752,
    name: 'Prone Scapular Retraction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ENkxPsjp9Q4'
  },
  {
    id: 753,
    name: 'One and a Quarter Dumbbell Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yGcTa0sKex0'
  },
  {
    id: 754,
    name: 'One and a Quarter Dumbbell Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/EfaKXgIC3TY'
  },
  {
    id: 755,
    name: 'One and a Quarter Banded Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QAGTah0orIM'
  },
  {
    id: 756,
    name: 'Mixed Rack Farmer Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/svOylNvwo6Q'
  },
  {
    id: 757,
    name: 'Knee Over Toe Single Leg Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0F347Sbd458'
  },
  {
    id: 758,
    name: 'Isometric Wall Lean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Rcogk1VD8Dk'
  },
  {
    id: 759,
    name: 'Isometric Banded Clamshell Side Plank',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/ZqY-23JR7eQ'
  },
  {
    id: 760,
    name: 'Horse Stance Kettlebell Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ZZ1piVHgy_8'
  },
  {
    id: 761,
    name: 'Hip Internal Rotation Mobility',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/CO1z01TzyX0'
  },
  {
    id: 762,
    name: 'Heel Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/a5t3tulSFgw'
  },
  {
    id: 763,
    name: 'Hamstring Walkout',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dSLBQ1JyHeA'
  },
  {
    id: 764,
    name: 'Half Kneeling Banded Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/OUXhgfkEkKM'
  },
  {
    id: 765,
    name: 'Front Foot Elevated Safety Bar Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/DmMCAdzTHck'
  },
  {
    id: 766,
    name: 'Forearm Plank Army Crawler',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/QAh12b6G0bc'
  },
  {
    id: 767,
    name: 'Dumbbell Sumo Jump Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/z2an21YDG98'
  },
  {
    id: 768,
    name: 'Dual Dumbbell Hang Snatch High Pull',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/puLilBOOiW4'
  },
  {
    id: 769,
    name: 'Single Leg Eccentric Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fZXyKf5D6tQ'
  },
  {
    id: 770,
    name: 'Feet Elevated Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/U6m4bKlLpVM'
  },
  {
    id: 771,
    name: 'Feet Elevated Side Plank Hip Tap',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/jDQ-fC8DjMw'
  },
  {
    id: 772,
    name: 'Dual Dumbbell Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/aNnFo33YxbI'
  },
  {
    id: 773,
    name: 'Dual Dumbbell Power Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/pQKzXVtIybY'
  },
  {
    id: 774,
    name: 'Dual Dumbbell Hang Power Snatch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/M9bmDNQ-PEw'
  },
  {
    id: 775,
    name: 'Dual Dumbbell Front Rack Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/OwQ6qKEBisI'
  },
  {
    id: 776,
    name: 'Cross Body V-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-BQBDbc_2Pw'
  },
  {
    id: 777,
    name: 'Anti-Extension Deadbug Heel Tap',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NiWmI9Q7gVo'
  },
  {
    id: 778,
    name: 'Ankle CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the ankle.',
    videoUrl: 'https://www.youtube.com/embed/AMTX0Bv6l78'
  },
  {
    id: 779,
    name: 'Banded Split Stance Low to High Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/hHcf8dDog5A'
  },
  {
    id: 780,
    name: 'Banded Lateral Lunge with High to Low Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Dpm27JhVoMA'
  },
  {
    id: 781,
    name: 'Banded Kang Box Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5Qh6FAov5DE'
  },
  {
    id: 782,
    name: 'Banded GHD Oblique Punch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/I_xG69Dnohg'
  },
  {
    id: 783,
    name: 'Banded Chainsaw Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/0EFzZ8-FPQ0'
  },
  {
    id: 784,
    name: 'Deficit Bodyweight Curtsy Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/_8Wq74gvIY8'
  },
  {
    id: 785,
    name: 'Staggered Stance Bodyweight Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CJurcCTMWRQ'
  },
  {
    id: 786,
    name: 'Bounding',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/nZLdyOIZ1-w'
  },
  {
    id: 787,
    name: 'Anchored Weighted Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Zk-P8eixc6s'
  },
  {
    id: 788,
    name: 'Sprawl Over Rower',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rower',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/5iGPu2nRWqk'
  },
  {
    id: 789,
    name: 'Supine Toes to Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wAM2K_C5BzA'
  },
  {
    id: 790,
    name: 'Stall Bar Leg Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/u5T-4WjxNHA'
  },
  {
    id: 791,
    name: 'Single Leg Depth Drop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PdvLilSjKzM'
  },
  {
    id: 792,
    name: 'Suitcase Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/jrTAPRwDAZs'
  },
  {
    id: 793,
    name: 'Split Stance Cable Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/xySjUfGJy8k'
  },
  {
    id: 794,
    name: 'Weighted Glute Ham Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zV-RL6g_m5Q'
  },
  {
    id: 795,
    name: 'Weighted GHD Back Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/x41VCXfn500'
  },
  {
    id: 796,
    name: 'Uneven Kettlebell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/PbZJGkQSDTU'
  },
  {
    id: 797,
    name: 'Single Kettlebell Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/l2tQKh1P8KI'
  },
  {
    id: 798,
    name: 'Single Arm Kettlebell Prone Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Te7vXrseCr4'
  },
  {
    id: 799,
    name: 'Single Arm Kettlebell Clean from Floor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/8eirc-XzXJw'
  },
  {
    id: 800,
    name: 'Single Arm Isometric Kettlebell Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/AYJpgp2pcpw'
  },
  {
    id: 801,
    name: 'Single Arm Isometric Dumbbell Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/yZMHMJcRUyY'
  },
  {
    id: 802,
    name: 'Wrist Extension with Distraction Self Mobilization',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YREmnmcKcEY'
  },
  {
    id: 803,
    name: 'Forward Roll',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jk62QZBKAbQ'
  },
  {
    id: 804,
    name: 'Pause Squat Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/xEFA0jTD7oU'
  },
  {
    id: 805,
    name: 'Segemental Cat Cow',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/pTYjNr9Zl7w'
  },
  {
    id: 806,
    name: 'GHD Preacher Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/MBXni1sgLA0'
  },
  {
    id: 807,
    name: 'Pause Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ahtVQ2EnIZI'
  },
  {
    id: 808,
    name: 'One and a Quarter Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/7jOwIoKhqso'
  },
  {
    id: 809,
    name: 'Pallof Speed Switch',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CUzrjtdOn-o'
  },
  {
    id: 810,
    name: 'Front Squat with Chains',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/frRY_VBeKOY'
  },
  {
    id: 811,
    name: 'Pike Handstand Shoulder Tap',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/FY7pefd3HfM'
  },
  {
    id: 812,
    name: 'Single Arm Dumbbell Prone Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/4g4WOUm-tcc'
  },
  {
    id: 813,
    name: 'Isometric Dumbbell Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/J2dqDF4i_TM'
  },
  {
    id: 814,
    name: 'Isometric Kettlebell Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Y-CS3qPra9A'
  },
  {
    id: 815,
    name: 'Single Arm Incline Dumbbell Prone Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ysdfSZCfOO8'
  },
  {
    id: 816,
    name: 'Incline Kettlebell Prone Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/QpGxbPTYs78'
  },
  {
    id: 817,
    name: 'Seated Behind the Neck Press with Chains',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Lu5_-CPB87s'
  },
  {
    id: 818,
    name: 'Dumbbell Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/VEs4oqQjxU8'
  },
  {
    id: 819,
    name: 'Barbell Cheat Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/oijf5bpMepU'
  },
  {
    id: 820,
    name: 'Bench Press with Chains',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Q55TR95BWos'
  },
  {
    id: 821,
    name: 'Banded Seated Behind the Neck Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/IK0A9Odmbdk'
  },
  {
    id: 822,
    name: 'Banded Reverse Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/8cfNcHhM6K4'
  },
  {
    id: 823,
    name: 'Banded Single Leg Deadlift to Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/8lh8wMs5-j0'
  },
  {
    id: 824,
    name: 'Assisted Pistol Mobilization',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TGoQYxwf4hg'
  },
  {
    id: 825,
    name: 'Archer Ring Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/RB1EfKwh4dY'
  },
  {
    id: 826,
    name: 'Band Resisted Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Zu30xXQJD3k'
  },
  {
    id: 827,
    name: 'Banded Bent Over Reverse Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/pM8FoGg0lMk'
  },
  {
    id: 828,
    name: 'Chaos Hanging Knee Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/ZGmIVq5zehY'
  },
  {
    id: 829,
    name: 'Kipping Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/edqJ_JRt73Y'
  },
  {
    id: 830,
    name: 'One and a Quarter Weighted Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/9imgzWPg11o'
  },
  {
    id: 831,
    name: 'Parallette Box Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5YXBq7G4Mxs'
  },
  {
    id: 832,
    name: 'Anti-Rotation Split Squat',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Q2dudMVw9eE'
  },
  {
    id: 833,
    name: 'Abdominal Crunch with Curved Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0Cg11lVusMI'
  },
  {
    id: 834,
    name: 'Banded Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/GmjyMFHJDEQ'
  },
  {
    id: 835,
    name: 'Band Stamp',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ILYMBek3D48'
  },
  {
    id: 836,
    name: 'Banded Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/HDE2PcVIqks'
  },
  {
    id: 837,
    name: 'Banded Leg Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gUZshzSamkY'
  },
  {
    id: 838,
    name: 'Banded Pull Through',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ypWQzJk4qu4'
  },
  {
    id: 839,
    name: 'Banded Strict Ring Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/fkg1LuEW2-Y'
  },
  {
    id: 840,
    name: 'Cable Lunge with Handles',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/FMyfCa3WKxI'
  },
  {
    id: 841,
    name: 'Cable Squat with Handles',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/j9S2hpNM2u0'
  },
  {
    id: 842,
    name: 'Candlestick',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4fcOOIwSTIU'
  },
  {
    id: 843,
    name: 'Close Grip Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4QBLl7QW45o'
  },
  {
    id: 844,
    name: 'Curl-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Tig1N-wZzTE'
  },
  {
    id: 845,
    name: 'Single Leg Deficit Landmine Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/x0USXaITzik'
  },
  {
    id: 846,
    name: 'Theraband Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0ExAZL26oG4'
  },
  {
    id: 847,
    name: 'Single Leg Deficit Dumbbell Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/CDGIhreWKIk'
  },
  {
    id: 848,
    name: 'Elevated Cat Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/-h4wpcY6ZME'
  },
  {
    id: 849,
    name: 'Elevator Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Buwunhxc46g'
  },
  {
    id: 850,
    name: 'Half Kneeling Rip Trainer Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/VjoBGRBpkYg'
  },
  {
    id: 851,
    name: 'False Grip Bar Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/uvojGxFIqK8'
  },
  {
    id: 852,
    name: 'False Grip Chest to Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/R9bBgTgmU14'
  },
  {
    id: 853,
    name: 'Handstand Hold Against the Wall on Parallettes',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/ywy3tjrJaXw'
  },
  {
    id: 854,
    name: 'Handstand Shoulder Taps on Box',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/U4sprYfI9Gg'
  },
  {
    id: 855,
    name: 'Hanging Oblique Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/c1pZVXgWpLc'
  },
  {
    id: 856,
    name: 'Incline Cable Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/apdA0s8UtGs'
  },
  {
    id: 857,
    name: 'Jumping Ring Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/8RcXjN_1yPw'
  },
  {
    id: 858,
    name: 'Kettlebell Side Bend',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/R-RqcCCExqM'
  },
  {
    id: 859,
    name: 'Kettlebell Waiter Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eBxzwWW4JPo'
  },
  {
    id: 860,
    name: 'Kettlebell Zercher Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/KzDPc-b9UYE'
  },
  {
    id: 861,
    name: 'Knee Touch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yoY4G03pR4o'
  },
  {
    id: 862,
    name: 'L-Sit Ring Muscle-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/AfRs9Qc2DHk'
  },
  {
    id: 863,
    name: 'Single Leg Landmine Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/ag2AYbN_D40'
  },
  {
    id: 864,
    name: 'Long Hollow Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/thTOVkXGbDg'
  },
  {
    id: 865,
    name: 'Middle Two Open Hangboard',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/R4LkUavXyHY'
  },
  {
    id: 866,
    name: 'Negative Hanging Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/a9f8Y7jfLZU'
  },
  {
    id: 867,
    name: 'Pronation Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DEZlhQl1UR4'
  },
  {
    id: 868,
    name: 'Banded Prone Shoulder Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fqYx9UjwhyY'
  },
  {
    id: 869,
    name: 'Single Arm Pulley Assisted Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/VEiG3ZcGKBQ'
  },
  {
    id: 870,
    name: 'Pulse Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/9WK5YZnGFiI'
  },
  {
    id: 871,
    name: 'Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/nLbkCvcf5Fo'
  },
  {
    id: 872,
    name: 'Pulse Prisoner Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5QWHp-SR4yc'
  },
  {
    id: 873,
    name: 'Reverse Curl-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/DuC8Yo_EeJY'
  },
  {
    id: 874,
    name: 'Sandbag Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/wD4GyreTQGc'
  },
  {
    id: 875,
    name: 'Sandbag Hug Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/q8iYhtvr1Gs'
  },
  {
    id: 876,
    name: 'Seated Cable Bicep Curl with Straight Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/iWyvxI5A1cA'
  },
  {
    id: 877,
    name: 'Seated Cable Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/F8bfnYgzIRs'
  },
  {
    id: 878,
    name: 'Seated Cable Tricep Extension with Curved Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/tkq7vux-y5A'
  },
  {
    id: 879,
    name: 'Side Plank Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/Rk7dZ3flB-8'
  },
  {
    id: 880,
    name: 'Side to Side Single Leg Hop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/hTjGTwe_fVQ'
  },
  {
    id: 881,
    name: 'Single Arm Bent Over Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/x1T5E86W2SQ'
  },
  {
    id: 882,
    name: 'Single Arm Dumbbell Skull Crusher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DdCL2zW1VBw'
  },
  {
    id: 883,
    name: 'Single Arm Reverse Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/YuadwCkxv7w'
  },
  {
    id: 884,
    name: 'Single Bar Inverted Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/pOCzSQ1WbHA'
  },
  {
    id: 885,
    name: 'Single Leg Cable Kickback',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iDpJ7FMiFag'
  },
  {
    id: 886,
    name: 'Single Leg Standing Cable Leg Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/42sOVeN3J1E'
  },
  {
    id: 887,
    name: 'Skin the Cat From the Floor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/AWG7z7nLBrY'
  },
  {
    id: 888,
    name: 'Banded Speed Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/zCRBzu1Wp0A'
  },
  {
    id: 889,
    name: 'Standing Cable Chest Press Punch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/qnzT0Dp-ZPc'
  },
  {
    id: 890,
    name: 'Standing Core Rotation with Handle',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/tZbd1XLXDwc'
  },
  {
    id: 891,
    name: 'Standing Core Rotation with Straight Bar',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/7zLVTjOJk-c'
  },
  {
    id: 892,
    name: 'Standing March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Dcmgt-nrnAk'
  },
  {
    id: 893,
    name: 'Straddle Z-Press with Plate',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/rfNEDC89SqA'
  },
  {
    id: 894,
    name: 'Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/D2SLKcvBZVw'
  },
  {
    id: 895,
    name: 'Sumo Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/sEviwjy7k-w'
  },
  {
    id: 896,
    name: 'Supinated Sternum Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/27zznEeMFHc'
  },
  {
    id: 897,
    name: 'Supination Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MNYLXardrOc'
  },
  {
    id: 898,
    name: 'Supine Cable Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/K2ZySqc-0kg'
  },
  {
    id: 899,
    name: 'Supine Thoracic Band Pull',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ra1WYHpqLgw'
  },
  {
    id: 900,
    name: 'Toe Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/jiY017Sk5V0'
  },
  {
    id: 901,
    name: 'Tuck Front Lever Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hgOvBOmNpV0'
  },
  {
    id: 902,
    name: 'Trap Bar Farmers Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eVCwgklgFG8'
  },
  {
    id: 903,
    name: 'Wide Grip Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6UQi7ZjVFK8'
  },
  {
    id: 904,
    name: 'Kettlebell Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/PPDwNOjqD1Q'
  },
  {
    id: 905,
    name: 'Kettlebell Hip Thrust on Bench',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/lBqFm11e0Ok'
  },
  {
    id: 906,
    name: 'Banded Trap Bar Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/pPtxZ0Jgs3c'
  },
  {
    id: 907,
    name: 'Copenhagen Plank at Knee Level',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/LBNh-9IdrWc'
  },
  {
    id: 908,
    name: 'Single Leg Shoulder and Feet Elevated Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/o_UiAFtXqjo'
  },
  {
    id: 909,
    name: 'Parallette Shoot Through',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/p5z_QQ3Atk0'
  },
  {
    id: 910,
    name: 'Dead Hang Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/nD0E3-1zOZg'
  },
  {
    id: 911,
    name: 'Medicine Ball Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/k-_vf7A9vM4'
  },
  {
    id: 912,
    name: 'Double Push-Up Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/QeVWQy3jm78'
  },
  {
    id: 913,
    name: 'GHD Bent Knee Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Y7EUaiulLEw'
  },
  {
    id: 914,
    name: 'Kneeling Jump to Broad Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/rcWU-9wtkEo'
  },
  {
    id: 915,
    name: 'Barbell Patrick Step Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/NSVSiIll2R4'
  },
  {
    id: 916,
    name: 'Patrick Step Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/V-ssviWAkH0'
  },
  {
    id: 917,
    name: 'Externally Rotated Wrist Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the wrist for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/SzPwoSJzxcM'
  },
  {
    id: 918,
    name: 'Dumbbell Turkish Get-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-NTwcpD3ZBI'
  },
  {
    id: 919,
    name: 'Footwork Speed Steps',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wigAF0VY3Aw'
  },
  {
    id: 920,
    name: 'Lateral Bench Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/YLBIJMVGsX0'
  },
  {
    id: 921,
    name: 'Nordic Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/zwPKWKpk0d4'
  },
  {
    id: 922,
    name: 'Ring Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/y1eNmATegeQ'
  },
  {
    id: 923,
    name: 'Hamstring Bridge Hold on Foam Roller',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the hamstring.',
    videoUrl: 'https://www.youtube.com/embed/w7fese1uJjI'
  },
  {
    id: 924,
    name: 'Hamstring Bridge on Foam Roller',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the hamstring.',
    videoUrl: 'https://www.youtube.com/embed/4QwuK2E4Q2o'
  },
  {
    id: 925,
    name: 'Fulcrum Sternum Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/_luoO8lhFgY'
  },
  {
    id: 926,
    name: 'High Knee Single Unders',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/pTwC_Qep9ck'
  },
  {
    id: 927,
    name: 'Rack Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WFmBkFqSjYo'
  },
  {
    id: 928,
    name: 'Legless Pegboard',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dvqsMY2djz4'
  },
  {
    id: 929,
    name: 'Pegboard',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FHthd0A6amY'
  },
  {
    id: 930,
    name: 'Russian Dip off Box',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/R0ZTSI8j16M'
  },
  {
    id: 931,
    name: 'Kneeling Thoracic Bridge',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/_OVgcKsS6oQ'
  },
  {
    id: 932,
    name: 'High Hang Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/NgT2gC2sxjc'
  },
  {
    id: 933,
    name: 'Self Spot Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/3YA6vZBl-cI'
  },
  {
    id: 934,
    name: 'Komodo Crawl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1fTfIXItijc'
  },
  {
    id: 935,
    name: 'Shoulders Elevated Bridged Abduction Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/3PJ79UMSzJ0'
  },
  {
    id: 936,
    name: 'Single Arm Alternating Cable Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JdRrdA5zZBE'
  },
  {
    id: 937,
    name: 'Single Arm Bias Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/4dI_XHv0L2o'
  },
  {
    id: 938,
    name: 'Single Arm Landmine Roll Out Push-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/d6CRlLmSsrE'
  },
  {
    id: 939,
    name: 'Medicine Ball Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/RhDmH9FkWT4'
  },
  {
    id: 940,
    name: 'Single Arm Kettlebell Rack Tall Kneeling to Standing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wauT4lmZIHk'
  },
  {
    id: 941,
    name: 'Sissy Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/gyuKEoSKPRk'
  },
  {
    id: 942,
    name: 'Supine Wall 90/90 Breathing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/r2X7D1698UE'
  },
  {
    id: 943,
    name: 'Tuck Sit on Dip Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/wtKoWvAVRJQ'
  },
  {
    id: 944,
    name: 'Tuck Up in Ring Support',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/k70qexnfvxk'
  },
  {
    id: 945,
    name: 'Tuck Up on Dip Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/cL6rsIW5T_4'
  },
  {
    id: 946,
    name: 'Weighted False Grip Chest to Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/o9YgTPrH24A'
  },
  {
    id: 947,
    name: 'Typewriter Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/DA3VjdUgeQM'
  },
  {
    id: 948,
    name: 'Duffin Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/gix2D_9hf7k'
  },
  {
    id: 949,
    name: 'Dynamic Straddle Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/6YhmXk5wT0U'
  },
  {
    id: 950,
    name: 'Half Kneeling Cable Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/yhzdiYkWWUA'
  },
  {
    id: 951,
    name: 'Single Arm Half Kneeling Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/asTQOSU0qKM'
  },
  {
    id: 952,
    name: 'Infrared Sauna',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/E2ceyv6Do2E'
  },
  {
    id: 953,
    name: 'EZ Bar Reverse Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/0l1Siao5E2M'
  },
  {
    id: 954,
    name: 'Single Arm Elbow on Knee Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/380wS_7t8U4'
  },
  {
    id: 955,
    name: 'Elbow Isometrics',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GoqSEQ9Nkqg'
  },
  {
    id: 956,
    name: 'Internal Rotation Passive Hang',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Pull-up Bar',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/R_cuyGYAp8E'
  },
  {
    id: 957,
    name: 'Jammer Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/YNUT0a60zuc'
  },
  {
    id: 958,
    name: 'Jettison Curls',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/BMEqdK-3SSw'
  },
  {
    id: 959,
    name: 'Kettlebell Farmers Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/AaMMXVLInAM'
  },
  {
    id: 960,
    name: 'Lacrosse Ball on Rhomboids',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Lacrosse Ball',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/fwHl_Fymd7c'
  },
  {
    id: 961,
    name: 'Groin Squats',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/7K-T5XeAAX4'
  },
  {
    id: 962,
    name: 'GHD Sit-Up Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3MBUgTPeRVA'
  },
  {
    id: 963,
    name: 'Lateral Landmine Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/apb5lY2j1lE'
  },
  {
    id: 964,
    name: 'Medicine Ball Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Medicine Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gNF8Xdva-00'
  },
  {
    id: 965,
    name: 'Nordic Razor Curl on GHD',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/N_jZzObyGxE'
  },
  {
    id: 966,
    name: 'Pancake Against Wall',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ps8c4leCodw'
  },
  {
    id: 967,
    name: 'Barbell Rotational Gait Cycle',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Barbell',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/YLcXJfSNXuY'
  },
  {
    id: 968,
    name: 'Prisoner Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/tKRBC7hzNoI'
  },
  {
    id: 969,
    name: 'Prisoner Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/nA_XknP63sI'
  },
  {
    id: 970,
    name: 'Prisoner Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/G7Z7t1mVhn8'
  },
  {
    id: 971,
    name: 'Prisoner Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/OY5u2YlWGpQ'
  },
  {
    id: 972,
    name: 'Prisoner Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/wc1-E-DVO8I'
  },
  {
    id: 973,
    name: 'Prone Posterior Capsule Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/QvdIWzrNmEk'
  },
  {
    id: 974,
    name: 'Safety Squat Bar Box Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/hvc0_Znj8UM'
  },
  {
    id: 975,
    name: 'Seated Banded Low Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/Hh3Stdfjai0'
  },
  {
    id: 976,
    name: 'Seated Single Arm Cable Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/skoVPkJPx6U'
  },
  {
    id: 977,
    name: 'Serratus Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/zmCAVP77YVg'
  },
  {
    id: 978,
    name: 'Dumbbell Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/Z4dYsS5RxME'
  },
  {
    id: 979,
    name: 'Shoulders Elevated Single Leg Banded Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/sMjWBqTnyOo'
  },
  {
    id: 980,
    name: 'Side Lying Banded Bent Knee Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PjF5j3pz9ME'
  },
  {
    id: 981,
    name: 'Side Lying Hip Internal Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/FacI84DRO7o'
  },
  {
    id: 982,
    name: 'Single Arm Abducted Banded Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/dX7aT8vdlMY'
  },
  {
    id: 983,
    name: 'Single Leg Leg Extension on Reverse Hyper',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/UuFa4wqTrbY'
  },
  {
    id: 984,
    name: 'Single Leg Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/oLv_M4Gg7q8'
  },
  {
    id: 985,
    name: 'Skiers On Slideboard',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/t0erkyqsXrs'
  },
  {
    id: 986,
    name: 'Slingshot Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/VBoCPGHOJLo'
  },
  {
    id: 987,
    name: 'Snatch Pull Under',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/toyFFbFdIh8'
  },
  {
    id: 988,
    name: 'Standing Belly Breathing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/X0RaG6uBb7s'
  },
  {
    id: 989,
    name: 'Squat Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/01MfgjhpyFI'
  },
  {
    id: 990,
    name: 'Standing Split Stance Medicine Ball Throw',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ND0_x0cF4Mw'
  },
  {
    id: 991,
    name: 'Standing Split Stance Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/lqn8Z329Rko'
  },
  {
    id: 992,
    name: 'Supinated Rear Delt Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/ZXo1I1wDiz8'
  },
  {
    id: 993,
    name: 'Tall Kneeling Single Arm Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/cpmB8ZmOrhI'
  },
  {
    id: 994,
    name: 'Theraband Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nq--l-LwzJg'
  },
  {
    id: 995,
    name: 'Tibialis Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nn0avIe473A'
  },
  {
    id: 996,
    name: 'Vibrated Plate',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7n0FXYcOKJE'
  },
  {
    id: 997,
    name: 'Weighted Single Unders',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7MwdGcnGkEo'
  },
  {
    id: 998,
    name: 'Cable Internal Thoracic Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Cable',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/Sx2yqwUGmQo'
  },
  {
    id: 999,
    name: 'Cable External Thoracic Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Cable',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/KGDScp36_4c'
  },
  {
    id: 1000,
    name: 'Kneeling Jump to Box Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/5fIXllTF3hw'
  },
  {
    id: 1001,
    name: 'Kettlebell Hang Power Clean + Push Press',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/2bTbHKugch4'
  },
  {
    id: 1002,
    name: 'Behind the Back Kettlebell Hip Hinge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ODTrg2Ypfbc'
  },
  {
    id: 1003,
    name: 'Hip External Rotation Skip',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/-bNvML_9Z1w'
  },
  {
    id: 1004,
    name: 'Hip Airplane',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gXdmb7yrvlU'
  },
  {
    id: 1005,
    name: 'Hatfield Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Zxe7P5gQZVI'
  },
  {
    id: 1006,
    name: 'Grasshopper',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/io7CQhs0I_U'
  },
  {
    id: 1007,
    name: 'Foam Roll Spinal Erectors',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the spine.',
    videoUrl: 'https://www.youtube.com/embed/1Cb6zYkFO9A'
  },
  {
    id: 1008,
    name: 'GHD Dumbbell Preacher Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/PhhllTEwjA4'
  },
  {
    id: 1009,
    name: 'False Grip Scapular Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/RuR5uWODqTo'
  },
  {
    id: 1010,
    name: 'Eccentric Towel Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/jeJ46eZbtBg'
  },
  {
    id: 1011,
    name: 'Dumbbell Waiter Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0Zvepzyjd38'
  },
  {
    id: 1012,
    name: 'Dumbbell Reverse Preacher Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/WF2J72Ix0dg'
  },
  {
    id: 1013,
    name: 'Single Arm Dumbbell Hang Power Clean',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/ZMtbbF7JwJo'
  },
  {
    id: 1014,
    name: 'Double Limb Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SNSD4Olyoxg'
  },
  {
    id: 1015,
    name: 'Donkey Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iovwyIP7laQ'
  },
  {
    id: 1016,
    name: 'DNS Star',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jM6Wl8vR-34'
  },
  {
    id: 1017,
    name: 'Single Leg Decline Glute Bridge Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/dabSTvtPjko'
  },
  {
    id: 1018,
    name: 'Deadbug to Side Plank Clamshell Roll',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/uGaJhf4ZsKU'
  },
  {
    id: 1019,
    name: 'Cuban Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/VDz8M9iZarY'
  },
  {
    id: 1020,
    name: 'Knees Over Toes Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/HFJbkwGdws4'
  },
  {
    id: 1021,
    name: 'Leg Extension on Reverse Hyper',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XBdpxxDs3-E'
  },
  {
    id: 1022,
    name: 'Lopsided Single Dumbbell Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/usdYRm4YAZE'
  },
  {
    id: 1023,
    name: 'Medicine Ball Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/qZ1L0jhSHRc'
  },
  {
    id: 1024,
    name: 'Medicine Ball Toe Touch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Medicine Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/cs_U0pkGleA'
  },
  {
    id: 1025,
    name: 'Natural Glute Ham Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ki13FcUePoE'
  },
  {
    id: 1026,
    name: 'Neutral Grip Pull-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/zrPgFHEKh7E'
  },
  {
    id: 1027,
    name: 'Partial Range Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0FgrGqjCOXY'
  },
  {
    id: 1028,
    name: 'Pause Close Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/OyggF5EaYRM'
  },
  {
    id: 1029,
    name: 'Plank Rotation',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/fdpbyd8l93g'
  },
  {
    id: 1030,
    name: 'Posterior Capsule Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/dzhjcwlKa2E'
  },
  {
    id: 1031,
    name: 'Quadruped Hip CAR',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the hip.',
    videoUrl: 'https://www.youtube.com/embed/ZTII3rm0XoQ'
  },
  {
    id: 1032,
    name: 'Roller Squat Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/T1cMFzJqTiI'
  },
  {
    id: 1033,
    name: 'Scapular Push-Up on Elbows',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/CoV-nz0_OYc'
  },
  {
    id: 1034,
    name: 'Seated Medicine Ball Chest Pass',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nRUK0iPDXEQ'
  },
  {
    id: 1035,
    name: 'Single Arm Kettlebell Clean + Cossack Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/hW9r9wS_MaY'
  },
  {
    id: 1036,
    name: 'Single Kettlebell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/oCya8OXtxio'
  },
  {
    id: 1037,
    name: 'Single Leg Towel Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/HI3Bb1SAru8'
  },
  {
    id: 1038,
    name: 'Snap to Hollow',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Q5rcU8VYN6I'
  },
  {
    id: 1039,
    name: 'Stall Bar Tuck Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/ZjOpEqu1_7I'
  },
  {
    id: 1040,
    name: 'Strict Push-Up Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/yeafo1CIWMg'
  },
  {
    id: 1041,
    name: 'Supine Chain Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/ZV_UTxzs178'
  },
  {
    id: 1042,
    name: 'Twisting Sit-Up on Decline Bench',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Jj6sqOQtoqw'
  },
  {
    id: 1043,
    name: 'Waiters Bow',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dedQnxfE7Ks'
  },
  {
    id: 1044,
    name: 'Weighted Chinese Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/P3p_6-7N-bU'
  },
  {
    id: 1045,
    name: 'Weighted Narrow Grip Supinated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/to1YWY45qsk'
  },
  {
    id: 1046,
    name: 'Weighted Wide Grip Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/pP2jtrxkB3U'
  },
  {
    id: 1047,
    name: 'Wide Grip Neutral Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/bmLebjupmCQ'
  },
  {
    id: 1048,
    name: 'Crab Slider',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0WUMTtJoI-0'
  },
  {
    id: 1049,
    name: 'Chinese Front Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/nbI54Cb7fiI'
  },
  {
    id: 1050,
    name: 'Cable Wrist Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dud5h3ev0DM'
  },
  {
    id: 1051,
    name: 'Band Assisted Glute Ham Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TgeiXPgrx3Q'
  },
  {
    id: 1052,
    name: 'Bear Roll',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YKqE8WzsQas'
  },
  {
    id: 1053,
    name: 'Backward Reach Run',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ai-jpxJq0bI'
  },
  {
    id: 1054,
    name: 'Axle Bar Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/YEyzfnNUGqI'
  },
  {
    id: 1055,
    name: 'ATG Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/SpOUihF3DCw'
  },
  {
    id: 1056,
    name: 'Assisted Hip Airplane',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/HB6N3qzD5N4'
  },
  {
    id: 1057,
    name: 'Dumbbell Tibialis Anterior Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dmeQSJWoLPQ'
  },
  {
    id: 1058,
    name: 'Dumbbell Upper Back Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1BIujW7aIQE'
  },
  {
    id: 1059,
    name: 'Dumbbell Upward Crossover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iBdWHhHZbTQ'
  },
  {
    id: 1060,
    name: 'Front Foot Elevated Front Rack Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/HHg-EYTxqX0'
  },
  {
    id: 1061,
    name: 'Front Foot Elevated Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/y2oZOuwxS2U'
  },
  {
    id: 1062,
    name: 'Goblet Duck Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/stJKCex7SbA'
  },
  {
    id: 1063,
    name: 'Goblet Short Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/MjAJVRp1Dqg'
  },
  {
    id: 1064,
    name: 'Incline Chest Supported Barbell Face Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/51JZSpXiiYk'
  },
  {
    id: 1065,
    name: 'Isometric Split Squat + Single Arm Kettlebell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/QOnC8hMpAHM'
  },
  {
    id: 1066,
    name: 'Kettlebell Death March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MJ-YjzDQGmw'
  },
  {
    id: 1067,
    name: 'Koji Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/iNzBsJlHhnA'
  },
  {
    id: 1068,
    name: 'Lu Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/VKvqsq-c3-0'
  },
  {
    id: 1069,
    name: 'Overhead Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/1yCQxmT4uOA'
  },
  {
    id: 1070,
    name: 'Plate Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/3TNolMhmHbA'
  },
  {
    id: 1071,
    name: 'Plate Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/clDfUEbp5h8'
  },
  {
    id: 1072,
    name: 'Power Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/E-YJ7GawZ0E'
  },
  {
    id: 1073,
    name: 'Prone Cable Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/EEnVdAQ8LnM'
  },
  {
    id: 1074,
    name: 'Reverse Lunge + Knee Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/MQwf9TEYAFk'
  },
  {
    id: 1075,
    name: 'Single Arm Barbell Shrug',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LfWRbBA3FOM'
  },
  {
    id: 1076,
    name: 'Single Arm Cobra Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bhKpTaGPVRk'
  },
  {
    id: 1077,
    name: 'Single Arm Curl + Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/CF4jOIN8BGg'
  },
  {
    id: 1078,
    name: 'Single Arm Incline Bench Dumbbell Preacher Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/SjeiKv49Izg'
  },
  {
    id: 1079,
    name: 'Single Arm Kettlebell Front Rack Box Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/MrPcBVpkXmo'
  },
  {
    id: 1080,
    name: 'Single Arm Kettlebell Rack Front Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/yqTbtDUxXdQ'
  },
  {
    id: 1081,
    name: 'Single Arm Zottman Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/C1h78NfLng8'
  },
  {
    id: 1082,
    name: 'Slider Curtsy Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lRYmUu2gFnM'
  },
  {
    id: 1083,
    name: 'Sumo Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/bFJ9uHP-Tmo'
  },
  {
    id: 1084,
    name: 'Supinated Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zKgHppdVnZM'
  },
  {
    id: 1085,
    name: 'Single Kettlebell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/fo-JbxrvwCM'
  },
  {
    id: 1086,
    name: 'Zercher Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-6RXU8L4eao'
  },
  {
    id: 1087,
    name: 'Dumbbell Seated Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/y1OkbrIvR9I'
  },
  {
    id: 1088,
    name: 'Kettlebell Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/1FiTH-pD6N0'
  },
  {
    id: 1089,
    name: 'Kettlebell Burpee Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/m6MYpkYkTgI'
  },
  {
    id: 1090,
    name: 'Reverse Dumbbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/3CHuN_R_4GI'
  },
  {
    id: 1091,
    name: 'Curtsy Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/c2KYHiSxaxw'
  },
  {
    id: 1092,
    name: 'Bent Over Plate Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/6xBh-hw-5Hk'
  },
  {
    id: 1093,
    name: 'Barbell Reverse Curl to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/jhcjONTAyIo'
  },
  {
    id: 1094,
    name: 'Barbell Curtsy Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/_SVhZ2EnA4Y'
  },
  {
    id: 1095,
    name: 'Back Supported Kettlebell Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/rg0s9S5e44Y'
  },
  {
    id: 1096,
    name: 'Front Foot Elevated Barbell Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/QJbHbd9Y_Zc'
  },
  {
    id: 1097,
    name: 'Kettlebell Turkish Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/VxDHPo4klYw'
  },
  {
    id: 1098,
    name: 'Standing Tricep Extension on Cable Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/-T66XHhmNJI'
  },
  {
    id: 1099,
    name: 'Pin Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/VeRmg8tjsCo'
  },
  {
    id: 1100,
    name: 'Banded Lateral Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QW3z7WCCeD8'
  },
  {
    id: 1101,
    name: 'Banded Prone Hip Internal Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/6nS_KqRpC7g'
  },
  {
    id: 1102,
    name: 'Axle Bar Power Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/mroGR6UH5Cw'
  },
  {
    id: 1103,
    name: 'Axle Bar Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/UTRCue9rGaE'
  },
  {
    id: 1104,
    name: 'Roller Pistol to Single Leg Vertical Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/DANmETgRwJE'
  },
  {
    id: 1105,
    name: 'L-Sit to Tuck Planche on Parallettes',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NUvTsZxo5nk'
  },
  {
    id: 1106,
    name: 'L-Sit to Shoulder Stand on Parallettes',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qQoKKh-dLXU'
  },
  {
    id: 1107,
    name: 'Strict Toes Through Rings',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PrL7m43WCTE'
  },
  {
    id: 1108,
    name: 'Straddle Tuck L-Sit on Parallettes',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0OWzF_-Ftsc'
  },
  {
    id: 1109,
    name: 'Contralateral Front Foot Elevated Single Arm Kettlebell Rack Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/g1HzdBvWgIE'
  },
  {
    id: 1110,
    name: 'Kettlebell French Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Nv8_Zhxfkmg'
  },
  {
    id: 1111,
    name: 'Kettlebell Concentration Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/7MDEjmUDSrA'
  },
  {
    id: 1112,
    name: 'Kettlebell L-Sit Lift Over',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JCXur0V040I'
  },
  {
    id: 1113,
    name: 'Frog Stand on Parallettes',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NjUziX2ZEZA'
  },
  {
    id: 1114,
    name: 'Decline Kettlebell Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/ozedwrb_fuA'
  },
  {
    id: 1115,
    name: 'Axle Bar Hip Thrust on Bench',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/_c2iDgnIPhU'
  },
  {
    id: 1116,
    name: 'Cross Body Single Arm Dumbbell Snatch to Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/KsJc0gVPwL8'
  },
  {
    id: 1117,
    name: 'Decline Barbell Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/YucSbAMSOmA'
  },
  {
    id: 1118,
    name: 'Elevator Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/G8DTF8H4qvU'
  },
  {
    id: 1119,
    name: 'Decline Parallette Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/UgwZtY0f-rQ'
  },
  {
    id: 1120,
    name: 'Dumbbell Jump Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5qxc3bAxCVk'
  },
  {
    id: 1121,
    name: 'Hanging Hip Tap',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/UE_NK6Y86lg'
  },
  {
    id: 1122,
    name: 'Incline Bench Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hONeo_YLoyM'
  },
  {
    id: 1123,
    name: 'Hollow Side Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lPMgDhESwrw'
  },
  {
    id: 1124,
    name: 'Supine Barbell Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/5H1jv2ulSUw'
  },
  {
    id: 1125,
    name: 'Lean Away Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/ikuR_VmxxZU'
  },
  {
    id: 1126,
    name: 'Modified Thomas Test',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MVoNH89GzjQ'
  },
  {
    id: 1127,
    name: 'Xiaopeng Forward',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FbHuLbifCI4'
  },
  {
    id: 1128,
    name: 'Bent Over Dumbbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Hh8Y5HT56P0'
  },
  {
    id: 1129,
    name: 'Alternating Tuck Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jNKz885A6Kc'
  },
  {
    id: 1130,
    name: 'Alternating V-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/V6zE3y5yTQ0'
  },
  {
    id: 1131,
    name: 'Wall Facing Hip Tap',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BRxsqgRYfQs'
  },
  {
    id: 1132,
    name: 'Russian Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/8hklN9p8v1M'
  },
  {
    id: 1133,
    name: 'Pronated to Supinated Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/5UH4nk2m84o'
  },
  {
    id: 1134,
    name: 'One and a Quarter Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/VdQfDA9qEMk'
  },
  {
    id: 1135,
    name: 'Poliquin Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/TiY1Z2X9rNM'
  },
  {
    id: 1136,
    name: 'Pause Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/fRb8lNJsvC0'
  },
  {
    id: 1137,
    name: 'Pizza Z-Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/RIP9c6fn3BA'
  },
  {
    id: 1138,
    name: 'Pause Safety Bar Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Sj3Zh_rGREI'
  },
  {
    id: 1139,
    name: 'Narrow Grip Supinated Pull-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/4UICwSmBMPA'
  },
  {
    id: 1140,
    name: 'Neutral Grip Dumbbell Spider Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/4uN6KGj7PAc'
  },
  {
    id: 1141,
    name: 'Narrow Stance Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/IWu7zkWYI5M'
  },
  {
    id: 1142,
    name: 'Side Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hytaIuQcv9M'
  },
  {
    id: 1143,
    name: 'Single Arm Kettlebell Sumo Deadlift High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/CaMfrijTp-0'
  },
  {
    id: 1144,
    name: 'Standing Barbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/WcAYy5UrFUI'
  },
  {
    id: 1145,
    name: 'Single Arm Pizza Z Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/dbN9-TOqEPA'
  },
  {
    id: 1146,
    name: 'Supinated Banded Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vHf0fVqO-W4'
  },
  {
    id: 1147,
    name: 'Turtle Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JhWYzi46WHA'
  },
  {
    id: 1148,
    name: 'Weighted GHD Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_mad_Td1RF8'
  },
  {
    id: 1149,
    name: 'Shawarma',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/b5JpA-_2vNQ'
  },
  {
    id: 1150,
    name: 'Half Kneeling Kettlebell Chop + Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/jKlK5nfLZkA'
  },
  {
    id: 1151,
    name: 'Heels Elevated Dumbbell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/N6yAcqDbv7o'
  },
  {
    id: 1152,
    name: 'Heels Elevated Kettlebell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/BSRDnIGnEKQ'
  },
  {
    id: 1153,
    name: 'High Hang Muscle Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/VgtuKJzMDM0'
  },
  {
    id: 1154,
    name: 'Incline Dumbbell Bench Press on Swiss Ball',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Stability Ball',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/0ZfCLCqq8Po'
  },
  {
    id: 1155,
    name: 'Incline Kettlebell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/7QOuv7bVAHU'
  },
  {
    id: 1156,
    name: 'Kettlebell Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/tWvJoEBhQCk'
  },
  {
    id: 1157,
    name: 'Front Rack Kettlebell Step-Up to Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/yY95_s-ne4o'
  },
  {
    id: 1158,
    name: 'Dumbbell Rack Reverse Lunge to Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/sDq9cvprYns'
  },
  {
    id: 1159,
    name: 'Kettlebell Squat Clean Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/J_iFPMAX214'
  },
  {
    id: 1160,
    name: 'Segmented Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/IsyX3vlVfTs'
  },
  {
    id: 1161,
    name: 'Banded Rotation with Pallof Squat',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XD_fQVWZKds'
  },
  {
    id: 1162,
    name: 'Half Kneeling Barbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/DVK-03_bVPE'
  },
  {
    id: 1163,
    name: 'No Contact Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/BLHEWMajKLM'
  },
  {
    id: 1164,
    name: 'Lateral Box Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/A-npLEYkQ-Y'
  },
  {
    id: 1165,
    name: 'Medicine Ball Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kFJhWWYPmtc'
  },
  {
    id: 1166,
    name: 'Medicine Ball Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/lS1ppiTzI_w'
  },
  {
    id: 1167,
    name: 'Kettlebell Shrug',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/llmy5cmxYHs'
  },
  {
    id: 1168,
    name: 'No Contact No Feet Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/3g4o1unqjdc'
  },
  {
    id: 1169,
    name: 'Kettlebell Hollow Hold Flutter Kick',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/x0oLjSX_qhg'
  },
  {
    id: 1170,
    name: 'No Contact No Feet Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/V2omtW-Ue8Y'
  },
  {
    id: 1171,
    name: 'Banded Hip External Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/uUhVJPJijoM'
  },
  {
    id: 1172,
    name: 'Kettlebell Devil Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/bTFwPOliipk'
  },
  {
    id: 1173,
    name: 'Single Arm Banded Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/KT2VwdgDbNY'
  },
  {
    id: 1174,
    name: 'Side Plank Knee Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/mKJ36S9dIVA'
  },
  {
    id: 1175,
    name: 'Side Plank Hip LIft',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/VfYpMF57WhA'
  },
  {
    id: 1176,
    name: 'Seated Single Arm Kettlebell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ymdxW0VPNt0'
  },
  {
    id: 1177,
    name: 'Single Arm Cuban Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/tfPEh9oKBxk'
  },
  {
    id: 1178,
    name: 'Single Arm Banded Tricep Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/imZuGYVi-vk'
  },
  {
    id: 1179,
    name: 'Banded Floor Chest Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/kU5wXRcohsQ'
  },
  {
    id: 1180,
    name: 'Banded A\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jjleeeQ5vig'
  },
  {
    id: 1181,
    name: 'Banded Hammer Curl to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/UjGhQDCFuWo'
  },
  {
    id: 1182,
    name: 'Banded Glute March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DmAnlts-XBw'
  },
  {
    id: 1183,
    name: 'Scapular Ring Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/9R9gXT6qPMY'
  },
  {
    id: 1184,
    name: 'Resistance Band Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/t-4kW4W9ZdY'
  },
  {
    id: 1185,
    name: 'Prone Single Leg Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/uBTjsxExLzE'
  },
  {
    id: 1186,
    name: 'Prone on Elbows',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6nTfPw_OpDU'
  },
  {
    id: 1187,
    name: 'Prone Glute Squeeze',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SzdwrGsyc80'
  },
  {
    id: 1188,
    name: 'Prone Contralateral Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3tO1SqKDNwg'
  },
  {
    id: 1189,
    name: 'Powell Raise on Floor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SOhqfTqv_Ks'
  },
  {
    id: 1190,
    name: 'Parallette Shoulder Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ay123F2HpAA'
  },
  {
    id: 1191,
    name: 'Parallette Plank Supported Dumbbell Row',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/6eS1kqgaV3M'
  },
  {
    id: 1192,
    name: 'One and a Quarter Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ceswRXk4uQM'
  },
  {
    id: 1193,
    name: 'No Contact Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/_EdWMunxWNs'
  },
  {
    id: 1194,
    name: 'Dumbbell Turkish Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/L7E_VZeRJqs'
  },
  {
    id: 1195,
    name: 'Dumbbell Overhead Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/HTF5VPuOXpI'
  },
  {
    id: 1196,
    name: 'Deficit Isometric Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/1NmeeFI45Qg'
  },
  {
    id: 1197,
    name: 'Dip Support Oblique Knee Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/PMGnlV-CEDY'
  },
  {
    id: 1198,
    name: 'Deficit Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/2nIL9k79jLw'
  },
  {
    id: 1199,
    name: 'Cross Body Dumbbell Muscle Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/qVDLyu3ccNw'
  },
  {
    id: 1200,
    name: 'Cook Band Assisted Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/LFWfMbupmWc'
  },
  {
    id: 1201,
    name: 'Close Grip Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/fyRkS_EScy0'
  },
  {
    id: 1202,
    name: 'Cable Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/P02Hz-SfL8I'
  },
  {
    id: 1203,
    name: 'Box Assisted Ring Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/sCBagJzpTvo'
  },
  {
    id: 1204,
    name: 'Banded Tricep Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/z6Rw0As2sms'
  },
  {
    id: 1205,
    name: 'Bike Erg',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bike Erg',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Iz7uYgdLUPQ'
  },
  {
    id: 1206,
    name: 'Bicycle Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/udtuZlqsrGU'
  },
  {
    id: 1207,
    name: 'Dumbbell Bent Over Close Grip Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/lK0lmvxA8Bg'
  },
  {
    id: 1208,
    name: 'Bent Over Band Pull Apart',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RzfT0OEUmD8'
  },
  {
    id: 1209,
    name: 'Bench Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/U3i6jhSLwhw'
  },
  {
    id: 1210,
    name: 'Bear Scapular Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/sym68d-cWkw'
  },
  {
    id: 1211,
    name: 'Banded Scapular Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/pmr3waPx-Uk'
  },
  {
    id: 1212,
    name: 'Banded Upright Row to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/gf78I-uhka8'
  },
  {
    id: 1213,
    name: 'Banded Single Arm Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/FbeuQKNLFT0'
  },
  {
    id: 1214,
    name: 'Banded Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/UxjGNHQjGcU'
  },
  {
    id: 1215,
    name: 'Banded Supine Psoas March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3ImsONRu-cM'
  },
  {
    id: 1216,
    name: 'Dumbbell Burpee Box Step Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/kWFIZPSbDr4'
  },
  {
    id: 1217,
    name: 'Dumbbell Hang Power Clean',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/KLtDgLLlhCU'
  },
  {
    id: 1218,
    name: 'Dumbbell Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/F0--ixFZkAQ'
  },
  {
    id: 1219,
    name: 'Earthquake Bar Back Rack Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NIr1IMtsGkE'
  },
  {
    id: 1220,
    name: 'Dumbbell Muscle Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/9D8l66-ZH2Q'
  },
  {
    id: 1221,
    name: 'Earthquake Bar Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/A6qx7lVbxas'
  },
  {
    id: 1222,
    name: 'Half Kneeling Banded Behind the Neck Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/6jy0Eeoq-MU'
  },
  {
    id: 1223,
    name: 'Half Kneeling Front Rack Tactile Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/1lPudgJUro0'
  },
  {
    id: 1224,
    name: 'Hollow Hold Hang on Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/iAyk7UhJTO8'
  },
  {
    id: 1225,
    name: 'Isometric Cossack Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/EJ_cFw7qK6Y'
  },
  {
    id: 1226,
    name: 'Hollow Hold Hang on Rings',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/LoniyO7Vt_A'
  },
  {
    id: 1227,
    name: 'Half Kneeling Cable Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5sfRj8EKLQ8'
  },
  {
    id: 1228,
    name: 'Kettlebell Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/R9XkqenV6ns'
  },
  {
    id: 1229,
    name: 'Kettlebell Chainsaw Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ltcm414I1j8'
  },
  {
    id: 1230,
    name: 'Elevator Pronated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/AS1lDv3p48Y'
  },
  {
    id: 1231,
    name: 'Elevator Ring Push Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/-fPqpsGpLe4'
  },
  {
    id: 1232,
    name: 'Elevator Strict Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/z8zOtinPBeA'
  },
  {
    id: 1233,
    name: 'Front Leaning Quadruped Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/K00edvpCdyo'
  },
  {
    id: 1234,
    name: 'Frog Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/n3wY9KKiqm4'
  },
  {
    id: 1235,
    name: 'Foam Roller Squat',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/rYhxkWz-d4E'
  },
  {
    id: 1236,
    name: 'Earthquake Bar Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/w5pqC2REeM8'
  },
  {
    id: 1237,
    name: 'Elevator Dumbbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/7_4M__h-n2k'
  },
  {
    id: 1238,
    name: 'Earthquake Bar Overhead Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OsisbhKvfRU'
  },
  {
    id: 1239,
    name: 'Earthquake Bar Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/c02myvYwrLE'
  },
  {
    id: 1240,
    name: 'Earthquake Bar Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/z1L7TZeXdMg'
  },
  {
    id: 1241,
    name: 'Earthquake Bar Front Rack Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zKjYFKlM2CA'
  },
  {
    id: 1242,
    name: 'Earthquake Bar Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/KJeGS6Cw3IQ'
  },
  {
    id: 1243,
    name: 'Kettlebell Cross Body Reverse Lunge to Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/a9ZNUFmRG6Q'
  },
  {
    id: 1244,
    name: 'Kettlebell Copenhagen Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/vYpsixm7ETY'
  },
  {
    id: 1245,
    name: 'Kettlebell Dip to Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/ZRtbm7bkrAI'
  },
  {
    id: 1246,
    name: 'Kettlebell Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/aGiAvWpeyAI'
  },
  {
    id: 1247,
    name: 'Kettlebell Skull Crusher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Mp-pFo48AUY'
  },
  {
    id: 1248,
    name: 'Leg Lowering with Support',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WCjEi1RVbC4'
  },
  {
    id: 1249,
    name: 'Knee Slide Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qEMg6uMITBI'
  },
  {
    id: 1250,
    name: 'Lying Cable Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/M37VEWgqDAM'
  },
  {
    id: 1251,
    name: 'McGill Curl-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/A66JQaQTFFA'
  },
  {
    id: 1252,
    name: 'Medicine Ball Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/WgD6ATXH2eQ'
  },
  {
    id: 1253,
    name: 'Medicine Ball Slam',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/G01nrJGJEc4'
  },
  {
    id: 1254,
    name: 'Pronated Dumbbell Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/K1D-mkzNWbs'
  },
  {
    id: 1255,
    name: 'Prone Y on Floor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Nplv53CUdCw'
  },
  {
    id: 1256,
    name: 'Quadruped Hip Circle',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FWi-Dz6nXzA'
  },
  {
    id: 1257,
    name: 'Quadruped Limb Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/seZyikQu5-0'
  },
  {
    id: 1258,
    name: 'Reach Underneath',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qFsnagouleg'
  },
  {
    id: 1259,
    name: 'Reverse Cable Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/RwWJGaz5Eb0'
  },
  {
    id: 1260,
    name: 'Ring Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/d-DyoyBtrTU'
  },
  {
    id: 1261,
    name: 'Ring Muscle-Up 3 Position Drill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/mWvkSVEi1gw'
  },
  {
    id: 1262,
    name: 'Wall Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/HMqiTgJf0T0'
  },
  {
    id: 1263,
    name: 'Half Kneeling Kettlebell Windmill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/L_d-8NnmbLs'
  },
  {
    id: 1264,
    name: 'Handcuffed Hip Hinge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2kyNEdrlgog'
  },
  {
    id: 1265,
    name: 'Ring Transition From Toes',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mMp2g_sopMc'
  },
  {
    id: 1266,
    name: 'Rower Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/bb_YgWFu2cE'
  },
  {
    id: 1267,
    name: 'Sartorius Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/hPYfwHnjj4M'
  },
  {
    id: 1268,
    name: 'Scaled Russian Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/zwKHyIYNOi8'
  },
  {
    id: 1269,
    name: 'Seal Rock',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JWo3GJH5kXo'
  },
  {
    id: 1270,
    name: 'Semicircle Mountain Climber',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qysMkcHeHkg'
  },
  {
    id: 1271,
    name: 'Prisoner Waiter\'s Bow',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/k0g3GJRaC90'
  },
  {
    id: 1272,
    name: 'Poliquin Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iA7lijqoriM'
  },
  {
    id: 1273,
    name: 'Plate Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/kR_aukMbBFw'
  },
  {
    id: 1274,
    name: 'Plate Loaded Lateral Box Step Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/WT1SU5eGQd4'
  },
  {
    id: 1275,
    name: 'Plate Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Nnhc9HdsIuY'
  },
  {
    id: 1276,
    name: 'Plate Kang Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/bg-oGC65ucI'
  },
  {
    id: 1277,
    name: 'Plate Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WxKYAliD2X4'
  },
  {
    id: 1278,
    name: 'Palms Up Band Pull Apart',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ah5N9t_1ck0'
  },
  {
    id: 1279,
    name: 'Overhead Opener',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qV4BqcCQ-Jw'
  },
  {
    id: 1280,
    name: 'One and a Quarter Dumbbell Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/zD_qX576qfc'
  },
  {
    id: 1281,
    name: 'Neutral Grip Seated Dumbbell Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/-Oe03t8wxc0'
  },
  {
    id: 1282,
    name: 'One and a Quarter Incline Dumbbell Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/xy8JU8Vcc4c'
  },
  {
    id: 1283,
    name: 'One and a Quarter Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Kd_-XTX70R8'
  },
  {
    id: 1284,
    name: 'One and a Quarter Ring Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/LJgF996SVNo'
  },
  {
    id: 1285,
    name: 'Seated Banded Row Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Jku2qM4qvZs'
  },
  {
    id: 1286,
    name: 'Shoulder Internal Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/u7uL7lTPDOE'
  },
  {
    id: 1287,
    name: 'Side Plank External Rotation',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/oQrGW_bkDMo'
  },
  {
    id: 1288,
    name: 'Single Arm Drag Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/i3jLGppPJSg'
  },
  {
    id: 1289,
    name: 'Single Arm Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/wBRwoAJUX4Y'
  },
  {
    id: 1290,
    name: 'Single Arm Kettlebell Front Rack Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lVTkKLAy9nw'
  },
  {
    id: 1291,
    name: 'Single Arm Kettlebell Suitcase Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/KPT8Qd_xbGY'
  },
  {
    id: 1292,
    name: 'Single Arm Single Leg Glute Bridge Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/83pkcGO4xDI'
  },
  {
    id: 1293,
    name: 'Single Arm Renegade Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/-ycSEF-WhXo'
  },
  {
    id: 1294,
    name: 'Single Dumbbell Close Grip Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/2cE4oUxMwf8'
  },
  {
    id: 1295,
    name: 'Single Dumbbell Decline Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/hpX0XXtcqm0'
  },
  {
    id: 1296,
    name: 'Single Kettlebell Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/03FS1YOetXA'
  },
  {
    id: 1297,
    name: 'Single Arm Dumbbell Man Maker',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mQBTZT3Ajrg'
  },
  {
    id: 1298,
    name: 'Split Squat Kettlebell Switch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/c2XHTM2XqbE'
  },
  {
    id: 1299,
    name: 'Swiss Ball Dumbbell Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Stability Ball',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/GHXuutU8xdE'
  },
  {
    id: 1300,
    name: 'Swiss Ball Dumbbell Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Stability Ball',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/mFbh3zR13vE'
  },
  {
    id: 1301,
    name: 'Standing Band Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/oUluYV7mlnc'
  },
  {
    id: 1302,
    name: 'Single Kettlebell Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/6Ak9lUPeMxo'
  },
  {
    id: 1303,
    name: 'Contralateral Kettlebell Suitcase + Waiter\'s Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hhYaPaSVwDc'
  },
  {
    id: 1304,
    name: 'Supine Figure Four Glute Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the glute for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/20oj5K0ee6k'
  },
  {
    id: 1305,
    name: 'Supine Single Leg Leg Lowering',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CNt8PrpR79M'
  },
  {
    id: 1306,
    name: 'Supine Shoulder Extension Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/cqFTx3cl9TE'
  },
  {
    id: 1307,
    name: 'TFL IT Band Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/-7V8bWhtTSI'
  },
  {
    id: 1308,
    name: 'Toe Spot Ring Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/ylTEUdAcFO0'
  },
  {
    id: 1309,
    name: 'Trap Bar Shrug',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vEpnOixbilA'
  },
  {
    id: 1310,
    name: 'Wall Sit with Banded Abduction',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5yp2lV7v5jg'
  },
  {
    id: 1311,
    name: 'Clean Grip Axle Bar Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/hMdRD8WyPR4'
  },
  {
    id: 1312,
    name: 'Axle Bar Military Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/WXvOqcXPbpA'
  },
  {
    id: 1313,
    name: 'Barbell Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/6gbWIjOa98Y'
  },
  {
    id: 1314,
    name: 'Banded High to Low Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/ZmbI_AtGX30'
  },
  {
    id: 1315,
    name: 'Banded Row to Neck',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/zYD8ajdwxo4'
  },
  {
    id: 1316,
    name: 'Barbell Hack Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/BfAK1Rs_6mw'
  },
  {
    id: 1317,
    name: 'Bicycle Toe Touch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/oE_dSCfeK4c'
  },
  {
    id: 1318,
    name: 'Bowler Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/pEpPT5vuTUE'
  },
  {
    id: 1319,
    name: 'Cable Standing Hip Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JSbq3lv0uUY'
  },
  {
    id: 1320,
    name: 'Cable Standing Hip Adduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9uG7liHYDR8'
  },
  {
    id: 1321,
    name: 'Cable Underhand Front Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/inG9jmtiD3Q'
  },
  {
    id: 1322,
    name: 'Calf Raise on Leg Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/c3S0UQdb_4M'
  },
  {
    id: 1323,
    name: 'Decline Barbell Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/I7u-CaMibfQ'
  },
  {
    id: 1324,
    name: 'Decline Barbell Wrist Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/N1fhD4m0dNk'
  },
  {
    id: 1325,
    name: 'Decline Close Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/UWD-mpupcBw'
  },
  {
    id: 1326,
    name: 'Decline Dumbbell Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/t_j9ZrkLzk0'
  },
  {
    id: 1327,
    name: 'Decline Dumbbell Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/_ZH9qxVggPg'
  },
  {
    id: 1328,
    name: 'Decline Dumbbell Wrist Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/uMPpmUOzRO0'
  },
  {
    id: 1329,
    name: 'Decline Narrow Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/F02FqiGBgjA'
  },
  {
    id: 1330,
    name: 'Decline Tricep EZ Bar Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/hYupAIjEon8'
  },
  {
    id: 1331,
    name: 'Front Rack Kettlebell Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XbHusmgbWfc'
  },
  {
    id: 1332,
    name: 'Dip Support Knee Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/bN1o-Ffoxi4'
  },
  {
    id: 1333,
    name: 'Supine Dumbbell Around the World',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ACfJWc-6AVk'
  },
  {
    id: 1334,
    name: 'Dumbbell Burpee Box Step Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/EOyq6ApDbJk'
  },
  {
    id: 1335,
    name: 'Dumbbell Scott Reverse Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/MihsQXgykTQ'
  },
  {
    id: 1336,
    name: 'Dumbbell Side Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/0fZ-d5D2ZU8'
  },
  {
    id: 1337,
    name: 'Feet Elevated Barbell Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NpQu0sdVIC0'
  },
  {
    id: 1338,
    name: 'Goblet Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/N3V1R6pGCsU'
  },
  {
    id: 1339,
    name: 'Goblet Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iJ7dveMTtm0'
  },
  {
    id: 1340,
    name: 'Hang Clean + Split Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/O588VuzYN2g'
  },
  {
    id: 1341,
    name: 'Half Kneeling Hitchhiker',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ARb_ZSpqD-M'
  },
  {
    id: 1342,
    name: 'Inverted Cat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hVDwIJMl6GU'
  },
  {
    id: 1343,
    name: 'Kettlebell Figure Eight',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/n4e5ZU58Snk'
  },
  {
    id: 1344,
    name: 'Kettlebell Snatch Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/p_1eksURYFI'
  },
  {
    id: 1345,
    name: 'Lat Pulldown to Sternum',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MJDyZdHo4jM'
  },
  {
    id: 1346,
    name: 'Low Cable Pull In',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OL7frfPGh8o'
  },
  {
    id: 1347,
    name: 'Low Rope Supinated Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rope',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/13kvuaf4-og'
  },
  {
    id: 1348,
    name: 'Narrow Grip Pronated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/2DoR17b6kvs'
  },
  {
    id: 1349,
    name: 'Narrow Stance Leg Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/P3BKVY63XtI'
  },
  {
    id: 1350,
    name: 'Narrow Grip Supinated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/2sR74jQMAUY'
  },
  {
    id: 1351,
    name: 'Neutral Grip Chest to Bar Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/cNQEYHtQjkI'
  },
  {
    id: 1352,
    name: 'Neutral Grip Lean Away Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/usDqbk6os24'
  },
  {
    id: 1353,
    name: 'One and a Quarter Cable French Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/2XHXoQ-z0Bg'
  },
  {
    id: 1354,
    name: 'One and a Quarter Front Rack Dumbbell Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/MBmVJDL3n-Y'
  },
  {
    id: 1355,
    name: 'Pronated Cable Tricep Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FGFZ1lk_0eo'
  },
  {
    id: 1356,
    name: 'Prone Kettlebell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/q787Rc6z8IA'
  },
  {
    id: 1357,
    name: 'Prone Trap Bar Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/jORem4OzNkc'
  },
  {
    id: 1358,
    name: 'Prone Y on Bench',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LilXF3894i4'
  },
  {
    id: 1359,
    name: 'Rock and Roll',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/n3dxdiu2240'
  },
  {
    id: 1360,
    name: 'Rope Cable Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/5HtMbiS8TSk'
  },
  {
    id: 1361,
    name: 'Scott Narrow Grip Barbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/cI9D3d9WmsM'
  },
  {
    id: 1362,
    name: 'Scott Reverse Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/4oCf4lmxWXE'
  },
  {
    id: 1363,
    name: 'Seated Dumbbell Around the World',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/pUFA_clWNKA'
  },
  {
    id: 1364,
    name: 'One and a Quarter Wall Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/wXjZ4GkdJd4'
  },
  {
    id: 1365,
    name: 'Seated EZ Bar French Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/2GEHI4-Al3M'
  },
  {
    id: 1366,
    name: 'Seated Half Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/q0C0BaHITAc'
  },
  {
    id: 1367,
    name: 'Seated Hip Internal Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/f1CiV_9Q7ZU'
  },
  {
    id: 1368,
    name: 'Segmented Clean Grip Deadlift - 2 Pauses',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/ByUP0RCJQ_c'
  },
  {
    id: 1369,
    name: 'Segmented Snatch Grip Deadlift - 2 Pauses',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/FOp-Bkn5Ohk'
  },
  {
    id: 1370,
    name: 'Seated Front Rack Press with Chains',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/HV6-UOgB5hw'
  },
  {
    id: 1371,
    name: 'Single Arm Dumbbell Power Clean + Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/yiajgUypK2Y'
  },
  {
    id: 1372,
    name: 'Single Arm Kettlebell Incline Bench Press on Swiss Ball',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Stability Ball',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Ciky4-DxCck'
  },
  {
    id: 1373,
    name: 'Single Arm Kettlebell Split Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/Ei3Karf5efs'
  },
  {
    id: 1374,
    name: 'Single Arm Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/svPewAavEHE'
  },
  {
    id: 1375,
    name: 'Single Arm Split Stance Dumbbell Power Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/a7gWHHajbZE'
  },
  {
    id: 1376,
    name: 'Single Arm Turkish Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/utuBb9MM4fI'
  },
  {
    id: 1377,
    name: 'Supinated Banded Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/urPZtLMy8so'
  },
  {
    id: 1378,
    name: 'Tall Kneeling Single Arm Kettlebell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/fobDDGPxoM8'
  },
  {
    id: 1379,
    name: 'Tall Kneeling Single Arm Kettlebell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ZDV4dyyB8EE'
  },
  {
    id: 1380,
    name: 'Alternating Dumbbell Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/FJwZhUfR4XM'
  },
  {
    id: 1381,
    name: 'Alternating Single Arm Passive Ring Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/P_B8KzAnw5o'
  },
  {
    id: 1382,
    name: 'Alternating 2 Point Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/XjzBtCcPZeY'
  },
  {
    id: 1383,
    name: 'Banded Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/62IYRzkncSo'
  },
  {
    id: 1384,
    name: 'Supinated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/6Jb1J3eqxqc'
  },
  {
    id: 1385,
    name: 'Towel Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Towel',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/i_e1R-XYy3k'
  },
  {
    id: 1386,
    name: 'Half Kneeling Band Pull Apart',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FXJAAKt46K4'
  },
  {
    id: 1387,
    name: 'Goblet Deficit Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/1KEksmj-T3o'
  },
  {
    id: 1388,
    name: 'Xiaopeng Backward',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lM1VNv23SP0'
  },
  {
    id: 1389,
    name: 'Zercher Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/bzoJVQfomMI'
  },
  {
    id: 1390,
    name: 'Weighted Neutral Grip Chest to Bar Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/7DoNzzLc3Sk'
  },
  {
    id: 1391,
    name: 'Wide Stance Leg Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/0ebzdLTbj9E'
  },
  {
    id: 1392,
    name: 'Weighted Mixed Grip Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/QPUCcnBP6C0'
  },
  {
    id: 1393,
    name: 'Twisting Crunches on Swiss Ball',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Stability Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4BeiYaCt-GU'
  },
  {
    id: 1394,
    name: 'Swiss Ball Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Stability Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5aqqK52El80'
  },
  {
    id: 1395,
    name: 'Supine Trap Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/ZMBg-_OMcWs'
  },
  {
    id: 1396,
    name: 'Supine Hip Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7MjH9zMizfk'
  },
  {
    id: 1397,
    name: 'Tall Kneeling Band Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SP6DoszGLQo'
  },
  {
    id: 1398,
    name: 'Supine Cable Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/IqhX-VXLhu4'
  },
  {
    id: 1399,
    name: 'Towel Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/RwSoLLgcaPU'
  },
  {
    id: 1400,
    name: 'Standing Single Leg Dumbbell Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Bm4gNwc0YjY'
  },
  {
    id: 1401,
    name: 'Standing Rope French Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rope',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/iSC42Fn4VT0'
  },
  {
    id: 1402,
    name: 'Standing EZ Bar Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/v_k5MH_uS6U'
  },
  {
    id: 1403,
    name: 'Standing Barbell French Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/2hcZY4E4n-o'
  },
  {
    id: 1404,
    name: 'Split Stance Cable Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KWlBH7qZcqo'
  },
  {
    id: 1405,
    name: 'Split Stance Band Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0ytvckDmw0E'
  },
  {
    id: 1406,
    name: 'Single Leg Wall Assisted Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Bo9VSYEAYn8'
  },
  {
    id: 1407,
    name: 'Single Leg Wall Assisted Waiter\'s Bow',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_G2UJsqmUTA'
  },
  {
    id: 1408,
    name: 'Single Leg Wall Assisted Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/HqWqHV5uGfk'
  },
  {
    id: 1409,
    name: 'Single Leg Kettlebell Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/8uBOg6s8J00'
  },
  {
    id: 1410,
    name: 'Single Arm Kettlebell Drop Lunge to Knee Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/vjx8BrTT-a0'
  },
  {
    id: 1411,
    name: 'Side Lying Leg Adduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/M2wvAGTV_0c'
  },
  {
    id: 1412,
    name: 'Dumbbell Single Leg Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/Ee73JvfmJ94'
  },
  {
    id: 1413,
    name: 'Dumbbell Side Plank Rotation',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/e7Y3u7iVYtA'
  },
  {
    id: 1414,
    name: 'Dumbbell Power Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/CpLkyMvb7tk'
  },
  {
    id: 1415,
    name: 'Dumbbell Power Clean + Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/LzMURNqFrDM'
  },
  {
    id: 1416,
    name: 'Dumbbell Iron Cross',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lMQ6YMgRSm8'
  },
  {
    id: 1417,
    name: 'Dumbbell Iron Cross Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/25YnarL0nmk'
  },
  {
    id: 1418,
    name: 'Front Rack Dumbbell Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/DfW8ilS3OF0'
  },
  {
    id: 1419,
    name: 'Front Foot Elevated Front Rack Dumbbell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/gkmUqzTM260'
  },
  {
    id: 1420,
    name: 'Kettlebell Gorilla Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/nLCIvSbSAtI'
  },
  {
    id: 1421,
    name: 'Dumbbell Clean + Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ZWAO47gSx3Q'
  },
  {
    id: 1422,
    name: 'Drop Lunge to Knee Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/DrfJ3-_ozoQ'
  },
  {
    id: 1423,
    name: 'Cyclist Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/8owCPkF0IQk'
  },
  {
    id: 1424,
    name: 'Contralateral Rack Reverse Kettlebell Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/4Vbe46KFNlE'
  },
  {
    id: 1425,
    name: 'Banded Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Bs0GE7Z1uo4'
  },
  {
    id: 1426,
    name: 'Barbell Shrug',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vVfClNqwHNA'
  },
  {
    id: 1427,
    name: 'Banded Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/6ibWr3Z6Ayo'
  },
  {
    id: 1428,
    name: 'Isometric Bent Over Banded Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ssnonGDxuxo'
  },
  {
    id: 1429,
    name: 'Banded Reverse Curl to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/eA2y6jLtCSE'
  },
  {
    id: 1430,
    name: 'Front Foot Elevated Barbell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ezsa--3T4iI'
  },
  {
    id: 1431,
    name: '4 Position Hang Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/Iyk6QUiAUNI'
  },
  {
    id: 1432,
    name: 'Contralateral Kettlebell Single Leg Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/S0P7TeoPgAg'
  },
  {
    id: 1433,
    name: 'Alternating Dumbbell Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NI9qL5UlxUI'
  },
  {
    id: 1434,
    name: 'Reverse Hyper Skullcrushers',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/S6FzY-oO9Vg'
  },
  {
    id: 1435,
    name: 'Reverse Hyper Rows',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/71mJUg2wRBs'
  },
  {
    id: 1436,
    name: 'Reverse Hyper Hammer Curls',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/4b9pSbd-vIE'
  },
  {
    id: 1437,
    name: 'Reverse Hyper Earthquake Pallof Hold',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6WxdjfFU80c'
  },
  {
    id: 1438,
    name: 'Split Stance Single Arm Kettlebell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/Ay5EYOU6zKM'
  },
  {
    id: 1439,
    name: 'Split Stance Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/NbpYMm5qT-k'
  },
  {
    id: 1440,
    name: 'Standing Isometric Banded Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/sv1Fn1EmH7o'
  },
  {
    id: 1441,
    name: 'Tall Kneeling Behind the Neck Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/fPcWTocTvDI'
  },
  {
    id: 1442,
    name: 'Tall Kneeling Trap Bar Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ILFSDv6TaiY'
  },
  {
    id: 1443,
    name: 'Three Point Kettlebell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/wQC4xIxyb-o'
  },
  {
    id: 1444,
    name: 'Trap Bar Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/NzQCT3mj4_8'
  },
  {
    id: 1445,
    name: 'Trap Bar Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/XOKsr0bpYZg'
  },
  {
    id: 1446,
    name: 'Two Point Kettlebell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/8r49wW9BBc4'
  },
  {
    id: 1447,
    name: 'Wall Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/gOwHHrhe5h8'
  },
  {
    id: 1448,
    name: 'Weighted Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ROlYty_qmyw'
  },
  {
    id: 1449,
    name: 'Weighted GHD Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/faAxegiiUKE'
  },
  {
    id: 1450,
    name: 'Single Leg Squat Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/aGU5BBQ0LiQ'
  },
  {
    id: 1451,
    name: 'Single Kettlebell Hang Clean',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/IbUVXWsNCb4'
  },
  {
    id: 1452,
    name: 'Single Arm Kettlebell Incline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/FyOXeSIMHEk'
  },
  {
    id: 1453,
    name: 'Single Arm Kettlebell High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DdEioQPV95Y'
  },
  {
    id: 1454,
    name: 'Single Arm Kettlebell Gorilla Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/rmBAeY0FnuE'
  },
  {
    id: 1455,
    name: 'Single Arm Kettlebell Clean + Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/uNBizwaazCk'
  },
  {
    id: 1456,
    name: 'Single Arm Kettlebell Bench on Stability Ball',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Stability Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/J7URSrfkzmI'
  },
  {
    id: 1457,
    name: 'Single Arm Kettlbell Z Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/3E2oJf6KF20'
  },
  {
    id: 1458,
    name: 'Single Arm Chest Supported Incline Dumbbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/tlGl_Svh6Mk'
  },
  {
    id: 1459,
    name: 'Single Arm Front Rack Kettlebell Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5yjrVIEl2nE'
  },
  {
    id: 1460,
    name: 'Single Arm Dumbbell Hang Power Clean + Press',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/rcvVDKj0g_o'
  },
  {
    id: 1461,
    name: 'Single Arm Bottoms Up Kettlebell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/HViVfeKnNMc'
  },
  {
    id: 1462,
    name: 'Single Arm Bottoms Up Kettlebell Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EEXvrI3oAe4'
  },
  {
    id: 1463,
    name: 'Single Arm Kettlebell Front Rack Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/10FM4Ano0Zo'
  },
  {
    id: 1464,
    name: 'Seated Alternating Kettlebell Arnold Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/jNSmYvnPSi8'
  },
  {
    id: 1465,
    name: 'Seated Single Leg Hamstring Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Rings',
    description: 'A stretching exercise targeting the hamstring for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/F4PtUWhNnl0'
  },
  {
    id: 1466,
    name: 'Seated Plate Overhead Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/bQoKtfKdhYU'
  },
  {
    id: 1467,
    name: 'Seated Alternating Dumbbell Arnold Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/DlPDyxdZhsU'
  },
  {
    id: 1468,
    name: 'Pronated Narrow Grip Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/UNkQl91u3oU'
  },
  {
    id: 1469,
    name: 'Prisoner Kang Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/9XNwvZN88mY'
  },
  {
    id: 1470,
    name: 'Prisoner Death March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6pJrGAWYtKE'
  },
  {
    id: 1471,
    name: 'Passive Ring Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/KHz_kNM7U9c'
  },
  {
    id: 1472,
    name: 'One and Quarter Single Arm Kettlebell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/W7-Ck5aNy9g'
  },
  {
    id: 1473,
    name: 'One and a Quarter Dumbbell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/eRR2i2xkRXE'
  },
  {
    id: 1474,
    name: 'Long Step Dumbbell Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/NXq0V9BwjXU'
  },
  {
    id: 1475,
    name: 'Lean Away Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/lKZyoTWhw48'
  },
  {
    id: 1476,
    name: 'Kettlebell Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/vBw5Nc0Z-kg'
  },
  {
    id: 1477,
    name: 'Seated Overhead Kettlebell Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/bvCa5-w0hvo'
  },
  {
    id: 1478,
    name: 'Front Rack Kettlebell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/helH3K310Io'
  },
  {
    id: 1479,
    name: 'Kettlebell Jefferson Curl',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XCXivxlEV-I'
  },
  {
    id: 1480,
    name: 'Kettlebell Front Rack Deficit Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/RR5M7wGGFbg'
  },
  {
    id: 1481,
    name: 'Front Rack Kettlebell Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/DkF6h1x1iIs'
  },
  {
    id: 1482,
    name: 'Single Arm Kettlebell Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/_u80dmriQJM'
  },
  {
    id: 1483,
    name: 'Single Arm Incline Bench Kettlebell Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/xlDABORoAVk'
  },
  {
    id: 1484,
    name: 'Half Kneeling Trap Bar Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/hYbMMyRwmAo'
  },
  {
    id: 1485,
    name: 'Goblet Sumo Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/75IBIB8xSpI'
  },
  {
    id: 1486,
    name: 'Goblet Spanish Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/gzMJ6XOsXcU'
  },
  {
    id: 1487,
    name: 'Front Rack Front Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/drGacl5jgaU'
  },
  {
    id: 1488,
    name: 'Frog Stance Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/xCNGqir_Eis'
  },
  {
    id: 1489,
    name: 'Farmers Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/rm0sKmUSjQA'
  },
  {
    id: 1490,
    name: 'False Grip Ring Pull-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/E-K265dX8k0'
  },
  {
    id: 1491,
    name: 'Dumbbell Front Rack Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/7FGy_u_-7cs'
  },
  {
    id: 1492,
    name: 'Dumbbell Front Rack Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/fak3dWS-n_U'
  },
  {
    id: 1493,
    name: 'Suitcase Dumbbell Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6Odkbnp-WrI'
  },
  {
    id: 1494,
    name: 'Dumbbell Bent Over Row to External Rotation',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/72hRPJBXdXc'
  },
  {
    id: 1495,
    name: 'Kettlebell Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/nBzsqtxfc4k'
  },
  {
    id: 1496,
    name: 'Kettlebell Hang Power Clean',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/NPFMyW3bBFM'
  },
  {
    id: 1497,
    name: 'Dumbbell Gorilla Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/RKeoxMMRlt4'
  },
  {
    id: 1498,
    name: 'Kettlebell Z-Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ZIh57nsCSPE'
  },
  {
    id: 1499,
    name: 'D-Ball March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xsx0rl85ypA'
  },
  {
    id: 1500,
    name: 'Cyclist Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/O9eBSqWDeh8'
  },
  {
    id: 1501,
    name: 'Cross Body Kettlebell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/P793RrT5VhM'
  },
  {
    id: 1502,
    name: 'Cross Body Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/o1LpJ2BUa7g'
  },
  {
    id: 1503,
    name: 'Contralateral Dumbbell Single Leg Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/QEhDXVJRmCM'
  },
  {
    id: 1504,
    name: 'Close Grip Parallette Tricep Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/hDH5pliNKoM'
  },
  {
    id: 1505,
    name: 'Chest Supported Reverse Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/8O9rCK1l7XU'
  },
  {
    id: 1506,
    name: 'Chest Supported Incline Kettlebell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ajvUK42u6fs'
  },
  {
    id: 1507,
    name: 'Burpee High Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/jxwYSmqTByY'
  },
  {
    id: 1508,
    name: 'Bumper Plate Bicep Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Vo7oOf3tCyU'
  },
  {
    id: 1509,
    name: 'Box Assisted False Grip Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/fSx5DS60_Ns'
  },
  {
    id: 1510,
    name: 'Barbell Rollout',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/X3l-H3Ufstc'
  },
  {
    id: 1511,
    name: 'Banded Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/E68AHjg1vqY'
  },
  {
    id: 1512,
    name: 'Archer Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Wbgwx1lpYfo'
  },
  {
    id: 1513,
    name: 'Alternating Kettlebell Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PStxLm0V3hc'
  },
  {
    id: 1514,
    name: 'Alternating Plate Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/wGNFfEbgO-Q'
  },
  {
    id: 1515,
    name: 'Alternating Dumbbell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/zZ_cSh4hVOg'
  },
  {
    id: 1516,
    name: 'Alternating Dumbbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/b2J2wuZVqKk'
  },
  {
    id: 1517,
    name: 'Supinated Chest to Bar Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RpwuAPGdPGs'
  },
  {
    id: 1518,
    name: 'Strict Single Leg Leg Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/E9bZ2deHyP0'
  },
  {
    id: 1519,
    name: 'Strict Hanging Leg Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/z1oF36cdb4w'
  },
  {
    id: 1520,
    name: 'Standing Flexion Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/VnI0LvXposc'
  },
  {
    id: 1521,
    name: 'Standing Banded Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DTI8bmilzjY'
  },
  {
    id: 1522,
    name: 'Squatting Quad',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/IkDhme258JY'
  },
  {
    id: 1523,
    name: 'Squatting Quad Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/QVJI3kTQ6kk'
  },
  {
    id: 1524,
    name: 'Squatting Quad Snatch Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/2_HNV6hmiVc'
  },
  {
    id: 1525,
    name: 'Squatting Quad Snatch Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/HxU1LNHOMpk'
  },
  {
    id: 1526,
    name: 'Squatting Quad Power Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/pyDj_KA6oyc'
  },
  {
    id: 1527,
    name: 'Squatting Quad Muscle Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/dDBlbot8ZCg'
  },
  {
    id: 1528,
    name: 'Squatting Quad Muscle Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5Mnt-EydHF4'
  },
  {
    id: 1529,
    name: 'Squatting Quad Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/PGUyXmq5aSw'
  },
  {
    id: 1530,
    name: 'Split Jerk Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/cH0R-A3OfZM'
  },
  {
    id: 1531,
    name: 'Snatch Squatting Quad',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/8l3Du1xVvj4'
  },
  {
    id: 1532,
    name: 'Sled Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/TlT_5sl7H2A'
  },
  {
    id: 1533,
    name: 'Sled Face Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/IZA9Fuq0Kck'
  },
  {
    id: 1534,
    name: 'Single Leg Reverse Hyper Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BiKzSK_icYE'
  },
  {
    id: 1535,
    name: 'Single Arm Landmine Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/nkgdbZ_ixPQ'
  },
  {
    id: 1536,
    name: 'Single Arm Cable Tricep Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-idIoNT_d3o'
  },
  {
    id: 1537,
    name: 'Side Plank Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/mvYtlqobHGU'
  },
  {
    id: 1538,
    name: 'Safety Bar Squat With Chains',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ne6eRTzPkBo'
  },
  {
    id: 1539,
    name: 'Renegade Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/GoH69pNJTyk'
  },
  {
    id: 1540,
    name: 'Overhead Barbell Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FhdQ-luFSXQ'
  },
  {
    id: 1541,
    name: 'Knee Jump To Vertical Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/4mHDSb7Ardw'
  },
  {
    id: 1542,
    name: 'Front Rack Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RzxVvgczz4g'
  },
  {
    id: 1543,
    name: '3 Position Hang Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/9YhwT6w8AUU'
  },
  {
    id: 1544,
    name: '3 Position Hang Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/DSV4LfplrN4'
  },
  {
    id: 1545,
    name: '3 Position Muscle Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/2081RUACY9k'
  },
  {
    id: 1546,
    name: '3 Position Power Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/7HxiP1fUMyU'
  },
  {
    id: 1547,
    name: '3 Position Snatch Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/zrI8_sGQ9uo'
  },
  {
    id: 1548,
    name: '3 Position Snatch Grip High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/fdPgUuHa3Do'
  },
  {
    id: 1549,
    name: '3 Position Snatch Grip Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/x3_3IXY1Pqs'
  },
  {
    id: 1550,
    name: '3 Position Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/bWeIiL-n1IY'
  },
  {
    id: 1551,
    name: 'Banded Safety Bar Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/vop6WTK9XE0'
  },
  {
    id: 1552,
    name: 'Banded Tall Kneeling Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Kinco0AEX6k'
  },
  {
    id: 1553,
    name: 'Bent Over Dumbbell Reverse Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/KpY5R2wb12U'
  },
  {
    id: 1554,
    name: 'Bottom of Front Squat Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/OiIEs9VV9yI'
  },
  {
    id: 1555,
    name: 'Cable Internal Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Cable',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/HqqrwQq7Tfw'
  },
  {
    id: 1556,
    name: 'Curtsy Box Step Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/HHb6ypPt09o'
  },
  {
    id: 1557,
    name: 'Plate Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/7B9vbTqzesk'
  },
  {
    id: 1558,
    name: 'Power Clean to Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/M9rN-35nuyc'
  },
  {
    id: 1559,
    name: 'Quadruped Hip Extension on Bench',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/c4WcxzxiRhU'
  },
  {
    id: 1560,
    name: 'Seated Leg Tuck on Bench',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4WdRNlgZbzU'
  },
  {
    id: 1561,
    name: 'Seated Twist',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_SxueR-nXtE'
  },
  {
    id: 1562,
    name: 'Snatch A\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/neDQuciP6G0'
  },
  {
    id: 1563,
    name: 'Snatch B\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/kw6TzrDrJkM'
  },
  {
    id: 1564,
    name: 'Snatch C\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/8g1RPDxCEE8'
  },
  {
    id: 1565,
    name: 'Split Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/WhVpvqj67vk'
  },
  {
    id: 1566,
    name: 'Twisting Knee to Chest',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eAmP-e59Xo4'
  },
  {
    id: 1567,
    name: '3 Part Pause Split Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/QiQ_TV4jdsE'
  },
  {
    id: 1568,
    name: '10 Month Position Barbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/KSP_7dv6Cx0'
  },
  {
    id: 1569,
    name: 'Back Roll to Toe Touch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iWIVX-Ss7f0'
  },
  {
    id: 1570,
    name: 'Bent Knee Back Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eE9l01cS5nw'
  },
  {
    id: 1571,
    name: 'Bent Knee Front Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/VH3Hko8qPsQ'
  },
  {
    id: 1572,
    name: 'Bottoms Up Side Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/zJeHjAbq6YM'
  },
  {
    id: 1573,
    name: 'Chaos Farmers Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OZKsIdpFQEo'
  },
  {
    id: 1574,
    name: 'Clean A\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/2s5UUjAUqms'
  },
  {
    id: 1575,
    name: 'Clean B\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/W9GHoUCKqSc'
  },
  {
    id: 1576,
    name: 'Clean C\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/oj3v9Sawk5g'
  },
  {
    id: 1577,
    name: 'Front Rack ATG Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/x-C9fvgY2RA'
  },
  {
    id: 1578,
    name: 'Hollow Body Single Arm Dumbbell Floor Press',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/4_1xKQodpi4'
  },
  {
    id: 1579,
    name: 'Inchworm to Standing',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/skGvXkzlChM'
  },
  {
    id: 1580,
    name: 'Kettlebell Butt Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XjptlyRceOM'
  },
  {
    id: 1581,
    name: 'Single Leg Table Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/umo4G4BjYWw'
  },
  {
    id: 1582,
    name: 'Supine Stability Ball Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Stability Ball',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/vmu__FtCIiQ'
  },
  {
    id: 1583,
    name: 'Supine Foam Roller Balance',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/nk5nhXoctmE'
  },
  {
    id: 1584,
    name: 'Slideboard Leg Curl Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/RYMKXU3ce6k'
  },
  {
    id: 1585,
    name: 'Unilateral Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/M8tiJDNSZA4'
  },
  {
    id: 1586,
    name: 'Snatch Grip Behind the Neck Split Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/bS8Y5jIazrE'
  },
  {
    id: 1587,
    name: 'Snatch Grip Overhead Walking Lunges',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/8Sow5AYpqAo'
  },
  {
    id: 1588,
    name: 'Koji Back Rack Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XHPp-ikn6-w'
  },
  {
    id: 1589,
    name: 'Single Leg Depth Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/0XSOjnaZ8-4'
  },
  {
    id: 1590,
    name: 'Hip Bridge Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/oZS3KkEm15c'
  },
  {
    id: 1591,
    name: 'Koji Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lvqlN1SEbas'
  },
  {
    id: 1592,
    name: 'Plate Flip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FbDkGYyq0Hg'
  },
  {
    id: 1593,
    name: 'Ring Dip Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/zyR21RSAp4U'
  },
  {
    id: 1594,
    name: 'Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/okpDOTeMCvg'
  },
  {
    id: 1595,
    name: 'Single Arm Supinated Pull-Up Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/fPaBv0k_kPk'
  },
  {
    id: 1596,
    name: 'Shoulder Elevated Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/_14XBc-ui-Y'
  },
  {
    id: 1597,
    name: 'Jerk Grip Overhead Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/OQaMvyPNNm4'
  },
  {
    id: 1598,
    name: 'Ring Body Saw',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JLdTphcVhes'
  },
  {
    id: 1599,
    name: 'Jump Rope',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/Fyc5QqXEEQE'
  },
  {
    id: 1600,
    name: 'Koji Front Rack Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/EXz6l29M_lk'
  },
  {
    id: 1601,
    name: 'Single Arm Supinated Dumbbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/36cUk2ISE8Q'
  },
  {
    id: 1602,
    name: 'Dumbbell Death March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bw-TeaxSDhA'
  },
  {
    id: 1603,
    name: 'Dumbbell Bench Press with Hip Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/URqDUkIQsDg'
  },
  {
    id: 1604,
    name: 'Forearm Plank Band Row',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/LAAQ9WP6QGE'
  },
  {
    id: 1605,
    name: 'Bent Over Supinated Dumbbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/J_TiOh8gX4E'
  },
  {
    id: 1606,
    name: 'Dumbbell Front Rack Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/BWJ2wY9WfZU'
  },
  {
    id: 1607,
    name: 'Front Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/68LrMLD6mus'
  },
  {
    id: 1608,
    name: 'Alternating Single Unders',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fX9M8riC_Mg'
  },
  {
    id: 1609,
    name: 'Dumbbell Tricep Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/cLisDskxj0o'
  },
  {
    id: 1610,
    name: '3 Point Dumbbell Reverse Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/JPVbGC7jxXw'
  },
  {
    id: 1611,
    name: 'Bicep Curl Forced Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/HBTUM8YbW8Y'
  },
  {
    id: 1612,
    name: 'Anderson Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/AkzyWd4u14I'
  },
  {
    id: 1613,
    name: 'Dumbbell Cuban Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Dumbbell',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/7iLOWDaf1as'
  },
  {
    id: 1614,
    name: 'Cambered Bar Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/66hjBzYjwac'
  },
  {
    id: 1615,
    name: 'Front Leaning Rest Plank Band Row',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/2VpC-mtn_d4'
  },
  {
    id: 1616,
    name: 'Sled Pull Power Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/oIFLQFIhgqQ'
  },
  {
    id: 1617,
    name: 'Single Arm Bent Over Cable Reverse Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/iETvCc71FtQ'
  },
  {
    id: 1618,
    name: 'Supine Leg Crossover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TMt_08Jhr_I'
  },
  {
    id: 1619,
    name: 'Single Arm Seated Dumbbell Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/RZqbq6qnqmo'
  },
  {
    id: 1620,
    name: 'Wall Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/QktjpR1sYhk'
  },
  {
    id: 1621,
    name: 'Medicine Ball Deck Squat to Wall Ball',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/QfV1_qitsmI'
  },
  {
    id: 1622,
    name: 'Single Arm Cable Reverse Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PweRBBMIN7Q'
  },
  {
    id: 1623,
    name: 'Standing Shoulder Internal Rotation Stretch with Towel',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Towel',
    description: 'A stretching exercise targeting the shoulder for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/EbXSRBEFYp4'
  },
  {
    id: 1624,
    name: 'Safety Bar Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/BNPP2kaXIkk'
  },
  {
    id: 1625,
    name: 'Standing Shoulder External Rotation AAROM with Dowel',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/8hFpttM00B8'
  },
  {
    id: 1626,
    name: 'Pallof Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6JCsTilMmNw'
  },
  {
    id: 1627,
    name: 'Single Leg Balance with Forward Lean',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5xWMjowCBdk'
  },
  {
    id: 1628,
    name: 'Prone Half Straddle Planche Leg Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sOGeqWdGre4'
  },
  {
    id: 1629,
    name: 'Ring Turnout on Knees',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qfKf94Itg5g'
  },
  {
    id: 1630,
    name: 'Shoulders Elevated Banded Abductions',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iJxACXHs2zQ'
  },
  {
    id: 1631,
    name: 'Straddle Press Handstand Against Wall',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/b9OAwpvz9Jo'
  },
  {
    id: 1632,
    name: 'Side V-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/X66Xz-ltSyU'
  },
  {
    id: 1633,
    name: 'Tall Snatch High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/TnV2TOTblCM'
  },
  {
    id: 1634,
    name: 'Straddle Roll Downs',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/O9Ct6oPGIWI'
  },
  {
    id: 1635,
    name: 'Medicine Ball Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/NGgiBJ_yJts'
  },
  {
    id: 1636,
    name: 'Strict Hanging Knee to Tricep',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/GPD_iZq7lXQ'
  },
  {
    id: 1637,
    name: 'Ring Half Straddle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/F16u4pAo-VQ'
  },
  {
    id: 1638,
    name: 'Side Tuck Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BT9_N_1eff4'
  },
  {
    id: 1639,
    name: 'Side Lever Inverted Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/B150Ke2DgsM'
  },
  {
    id: 1640,
    name: 'Quadruped Serratus Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the quad.',
    videoUrl: 'https://www.youtube.com/embed/76AbfMI6MzE'
  },
  {
    id: 1641,
    name: 'Waiter\'s Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/6cxA_KaEeEc'
  },
  {
    id: 1642,
    name: 'Reverse Salamander',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/r8IDvKH9Ues'
  },
  {
    id: 1643,
    name: 'Tall Kneeling Half Moon',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/muuxcm90g5I'
  },
  {
    id: 1644,
    name: 'Rotational Medicine Ball Throw',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ka2z3PqXDUQ'
  },
  {
    id: 1645,
    name: 'Single Leg Broad Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/1mc85vCPJpU'
  },
  {
    id: 1646,
    name: 'Supinated Seated Single Arm Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/zyJHTED1xZo'
  },
  {
    id: 1647,
    name: 'Straddle Roll Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qraBnXeEgyQ'
  },
  {
    id: 1648,
    name: 'Seated Rope Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/o3vNBc-cYqM'
  },
  {
    id: 1649,
    name: 'Single Leg Deadlift to Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/kyU0E39d_u8'
  },
  {
    id: 1650,
    name: 'Single Arm Dumbbell Clean and Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/dba51IbckWg'
  },
  {
    id: 1651,
    name: 'Single Arm Preacher Zottman Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/aZnMfjnX3AY'
  },
  {
    id: 1652,
    name: 'Single Leg Negative Body Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZLPYW5I8eUc'
  },
  {
    id: 1653,
    name: 'Tall Kneeling Step Out Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/V8hH5frHxe0'
  },
  {
    id: 1654,
    name: 'Straddle Back Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SyerOIbLGz0'
  },
  {
    id: 1655,
    name: 'Passive Hang on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/RNTVyt5Ey24'
  },
  {
    id: 1656,
    name: 'Weighted Double Unders',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LnrLDbolZ9w'
  },
  {
    id: 1657,
    name: 'Rebounding Glute Ham Raise',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/LHrKGApSOZA'
  },
  {
    id: 1658,
    name: 'Single Leg Front Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Hal3FCmIghQ'
  },
  {
    id: 1659,
    name: 'Standing Alternating Cable Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/G1RsV2596w4'
  },
  {
    id: 1660,
    name: 'Supinated Single Arm Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/8vpFqzimLyg'
  },
  {
    id: 1661,
    name: 'Medicine Ball Sit-Up Throw',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Medicine Ball',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/pCj7hd-ldro'
  },
  {
    id: 1662,
    name: 'Supine Kettlebell Press Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/lStab1XPGp8'
  },
  {
    id: 1663,
    name: 'Single Arm Kettlebell Front Rack Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lMHqu7Tj8MI'
  },
  {
    id: 1664,
    name: 'Preacher Zottman Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/UgYJ6KWAXQE'
  },
  {
    id: 1665,
    name: 'Supinated Pull Up Negative on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/QykyoV4fqQI'
  },
  {
    id: 1666,
    name: 'Overhead Step to Split',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OeYjOcDcZ7Y'
  },
  {
    id: 1667,
    name: 'Radial Nerve Glide',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/HCYWtBHvfp0'
  },
  {
    id: 1668,
    name: 'Static Pistol Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BOqV735gkBc'
  },
  {
    id: 1669,
    name: 'Seated Overhead Cable Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/ws8zL-PAzOA'
  },
  {
    id: 1670,
    name: 'Standing Single Arm Cable Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/w6dObU_DhQQ'
  },
  {
    id: 1671,
    name: 'Standing Single Arm Cable Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/r0o54R_LLTE'
  },
  {
    id: 1672,
    name: 'Middle Split Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QG4PIJ61Zms'
  },
  {
    id: 1673,
    name: 'Multi Grip Incline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/3vUK8xDum0o'
  },
  {
    id: 1674,
    name: 'Quadruped Isometric Leg Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/36Qh3Jfg9NU'
  },
  {
    id: 1675,
    name: 'Cable Overhead Side Bend and Reach',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_g6j7YBV-lk'
  },
  {
    id: 1676,
    name: 'Assisted Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ky4-DPWUDiI'
  },
  {
    id: 1677,
    name: 'Forearm Pronation and Supination Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/hj1VPQ04PdU'
  },
  {
    id: 1678,
    name: 'Body Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/asbL-H-gV1o'
  },
  {
    id: 1679,
    name: 'Advanced Frog Stand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3HM6fVp5vo4'
  },
  {
    id: 1680,
    name: 'Banded Pallof Isometric Split Squat',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/vm__OXj1puI'
  },
  {
    id: 1681,
    name: 'GHD Mace Russian Twist',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Mace',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vhvoa6Tob30'
  },
  {
    id: 1682,
    name: 'Bench Scapular Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/vIw9cBMkQ5g'
  },
  {
    id: 1683,
    name: 'Bar Forward Roll',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/tqLSMUtBTBU'
  },
  {
    id: 1684,
    name: 'Dumbbell Overhead Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nmHo7wMDlQI'
  },
  {
    id: 1685,
    name: 'Forward Roll Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/l5V_0MR5deU'
  },
  {
    id: 1686,
    name: 'Butterfly Chest to Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/bXZh9au4Mx8'
  },
  {
    id: 1687,
    name: 'Dumbbell Split Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/ax_SOKBf5oQ'
  },
  {
    id: 1688,
    name: 'Jerk Rack Support',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/ZJ8WompnxxM'
  },
  {
    id: 1689,
    name: 'Gravity Booth Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/WfkkS__iJes'
  },
  {
    id: 1690,
    name: 'Axle Bar Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Tfr_jalGvZg'
  },
  {
    id: 1691,
    name: 'Cable Standing Trap   3 Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TfE0CakZ6qc'
  },
  {
    id: 1692,
    name: 'Behind the Neck Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RGVH3umZ77Y'
  },
  {
    id: 1693,
    name: 'Hang Power Clean + Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/KB1TJtyA71E'
  },
  {
    id: 1694,
    name: 'Ice Cream Maker',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/E5IP_8whrfQ'
  },
  {
    id: 1695,
    name: 'Hang Power Clean + Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/wdlkGhhVHJk'
  },
  {
    id: 1696,
    name: 'Kettlebell Clean + Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/tia8pZ3oAIU'
  },
  {
    id: 1697,
    name: 'Log Clean and Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/she1llm4R90'
  },
  {
    id: 1698,
    name: 'Elephant Walk',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/o2WcZi5nEjU'
  },
  {
    id: 1699,
    name: 'Bodyweight Box Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/jfKujG7rD_U'
  },
  {
    id: 1700,
    name: 'Cambered Bar Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/YBilEY_6DvM'
  },
  {
    id: 1701,
    name: 'Banded Lateral Step Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/UHz8azpZg3Y'
  },
  {
    id: 1702,
    name: 'Incline Prone Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TA8cTNKRLEg'
  },
  {
    id: 1703,
    name: 'Low Rope Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rope',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/IbTnyuBQ6-s'
  },
  {
    id: 1704,
    name: 'Feet Elevated Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/9FThDKed-PE'
  },
  {
    id: 1705,
    name: 'Kettlebell Clean + Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/8lHG_atTSCQ'
  },
  {
    id: 1706,
    name: 'Log Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/68E96fO6D9w'
  },
  {
    id: 1707,
    name: 'Externally Rotated Kettlebell Farmers Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2psak8iM8Lc'
  },
  {
    id: 1708,
    name: 'Log Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/2KTb36NasZ0'
  },
  {
    id: 1709,
    name: 'Air Chair Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/-6sR4d45qqI'
  },
  {
    id: 1710,
    name: 'Banded Foam Roller Wall Slide',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/S6-pZonbMfA'
  },
  {
    id: 1711,
    name: 'Cable Seated Trap   3 Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qrowbr7HNko'
  },
  {
    id: 1712,
    name: 'Bent Knee Copenhagen Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/obtdLUWZi-Y'
  },
  {
    id: 1713,
    name: 'Banded Chest Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/dii63Gtove0'
  },
  {
    id: 1714,
    name: 'Feet Elevated Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_m1KWTxHAwE'
  },
  {
    id: 1715,
    name: 'Kettlebell Front Rack Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ZqpdLkOuP1Y'
  },
  {
    id: 1716,
    name: 'Kettlebell Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/VRDZde-aCOo'
  },
  {
    id: 1717,
    name: 'Banded Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NJwcvF51uHg'
  },
  {
    id: 1718,
    name: 'Cable Powell Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NGvGAUIHVZk'
  },
  {
    id: 1719,
    name: 'Dumbbell Rollover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JgQDzl6YwEg'
  },
  {
    id: 1720,
    name: 'Kettlebell Clean + Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/Gdfz-ZrUyyc'
  },
  {
    id: 1721,
    name: 'Block Power Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/4HBhwhOfm-8'
  },
  {
    id: 1722,
    name: 'Block Power Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/Y5B6a480w_I'
  },
  {
    id: 1723,
    name: 'Banded Sumo Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/q8VW2o2FU4Q'
  },
  {
    id: 1724,
    name: 'Active Shoulder Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/grnGZDuVPUY'
  },
  {
    id: 1725,
    name: 'Bottoms Up Kettlebell Windill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fBNibSs4IYg'
  },
  {
    id: 1726,
    name: 'Bodyweight Windmill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dFNSTeASnso'
  },
  {
    id: 1727,
    name: 'Quadruped Single Leg Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Xl6dIdcuWpw'
  },
  {
    id: 1728,
    name: 'Dumbbell Front Rack Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XCcUmDCr_jA'
  },
  {
    id: 1729,
    name: 'Back Rack Jump to Split',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/OvblIM8Ga3E'
  },
  {
    id: 1730,
    name: 'Dumbbell Face Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MhflmshwSSk'
  },
  {
    id: 1731,
    name: 'Jerk Support in Split',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/KMWA4IvBsVM'
  },
  {
    id: 1732,
    name: 'Banded External Rotation with Abduction',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/FpUbWnczSB0'
  },
  {
    id: 1733,
    name: 'Lacrosse Ball Behind Knee Squat',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Lacrosse Ball',
    description: 'Soft tissue release work targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/AslYtI_FuOQ'
  },
  {
    id: 1734,
    name: 'Incline Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/1Sd7QANFv1E'
  },
  {
    id: 1735,
    name: 'Dumbbell Shoulders Elevated Single Leg Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/0IjmBe0OxvA'
  },
  {
    id: 1736,
    name: 'Cable Golf Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-kt_MvH_V5c'
  },
  {
    id: 1737,
    name: 'Dumbbell Banded Face Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bP9VoglchQ0'
  },
  {
    id: 1738,
    name: '3 Way Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/RZRAaPeBwKU'
  },
  {
    id: 1739,
    name: 'Anterior Pathway Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/L3sz2DeKcv0'
  },
  {
    id: 1740,
    name: 'Assisted Sissy Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/IkPraRU_zD8'
  },
  {
    id: 1741,
    name: 'Axle Bar Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/BwydffJ1oS0'
  },
  {
    id: 1742,
    name: 'Banded Plank Row',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/cN1p-MGgdzE'
  },
  {
    id: 1743,
    name: 'Banded Kettlebell Jump Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/bCzTxBlJQRc'
  },
  {
    id: 1744,
    name: 'Banded Pull Apart',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/arCKkoY9aiU'
  },
  {
    id: 1745,
    name: 'Banded Pushdown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ElEx8KVIVyY'
  },
  {
    id: 1746,
    name: 'Banded Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/8Kjeu5ZYDJA'
  },
  {
    id: 1747,
    name: 'Banded Incline Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/38L89ItaFM8'
  },
  {
    id: 1748,
    name: 'Barbell Lateral Jump Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/l5mPeoUJWTQ'
  },
  {
    id: 1749,
    name: 'Body Saw',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bfRjYZz_6kE'
  },
  {
    id: 1750,
    name: 'Banded Face Pull Apart',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QQiqvpvVkeI'
  },
  {
    id: 1751,
    name: 'Cable Rope Face Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/OX4fcc4OtZA'
  },
  {
    id: 1752,
    name: 'Barbell V Leg Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GJwu-SiX1xI'
  },
  {
    id: 1753,
    name: 'Chest Supported Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/tKSZWiP9xnE'
  },
  {
    id: 1754,
    name: 'Eccentric Single Leg Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sr3bJhy4Xao'
  },
  {
    id: 1755,
    name: 'Kettlebell Sumo Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/mHsrKouaXNU'
  },
  {
    id: 1756,
    name: 'Elevated Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/ev5ezgYycoE'
  },
  {
    id: 1757,
    name: 'Eagle Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/VxE3g_lYTaU'
  },
  {
    id: 1758,
    name: 'Deadbug Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/RcLdhhNeAdI'
  },
  {
    id: 1759,
    name: 'Deltoid Release with Lacross Ball',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Bodyweight',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/QZh4jl5vtUQ'
  },
  {
    id: 1760,
    name: 'Front Rack Box Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/PFir1dHy3ic'
  },
  {
    id: 1761,
    name: 'Deadbug Dumbbell Floor Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/OND08jjay_8'
  },
  {
    id: 1762,
    name: 'Frog Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the hip for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/KJJ0qmVGxEk'
  },
  {
    id: 1763,
    name: 'Cross Body Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/KIXaQlHQnAw'
  },
  {
    id: 1764,
    name: 'Feet Elevated Sumo Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/FcPp9F6o9Is'
  },
  {
    id: 1765,
    name: 'Chain Rack Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EQXUF7kcziU'
  },
  {
    id: 1766,
    name: 'Chain Sumo Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Chains',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/7JDHRV3NwKM'
  },
  {
    id: 1767,
    name: 'Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0fhaRa_NIsM'
  },
  {
    id: 1768,
    name: 'Isometric Deadbug Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/vjCfHgZbWR8'
  },
  {
    id: 1769,
    name: 'Single Arm Alternating Kettlebell Clean + Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/tMt68VFppcM'
  },
  {
    id: 1770,
    name: 'Jumping Chest to Bar Pull Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/cIHBBe5UWjA'
  },
  {
    id: 1771,
    name: 'Octagon Drill',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EUZlclp9wq0'
  },
  {
    id: 1772,
    name: 'Isometric Deadbug Dumbbell Floor Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/C2pf3wf6QQQ'
  },
  {
    id: 1773,
    name: 'Hatfield Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/BZ69hod7q-Y'
  },
  {
    id: 1774,
    name: 'Power Skip',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/8KqiGrorXiI'
  },
  {
    id: 1775,
    name: 'Quadruped Shoulder Tap',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2GMWbKqrlAU'
  },
  {
    id: 1776,
    name: 'Reactive Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/1OGe8v7i5cg'
  },
  {
    id: 1777,
    name: 'Heel Squeeze Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1JX-e3wle08'
  },
  {
    id: 1778,
    name: 'Oblique Twist Wood Chop',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/ndUUSjorME4'
  },
  {
    id: 1779,
    name: 'Quadruped Bird Dog Rotational Row',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/k8MI882vuWk'
  },
  {
    id: 1780,
    name: 'L-Sit on Parallettes',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PRWbVx6KAgQ'
  },
  {
    id: 1781,
    name: 'Pencil Roll',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LoY9bs6Ewzg'
  },
  {
    id: 1782,
    name: 'Incline Dumbbell Tate Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/L7uWOyDJFK4'
  },
  {
    id: 1783,
    name: 'Cable Low to High Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/x5EUyh8SdFw'
  },
  {
    id: 1784,
    name: 'Extended Range, Side Lying Hip Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/s6API4Yeqxs'
  },
  {
    id: 1785,
    name: 'Single Arm Cable Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/kiCRfAbxvPg'
  },
  {
    id: 1786,
    name: 'Narrow Single Arm Pinch Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/fdGg-B61g7s'
  },
  {
    id: 1787,
    name: 'Half Kneeling Single Arm Banded Pull Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WcgMtbHMZwo'
  },
  {
    id: 1788,
    name: 'Assisted Pistol Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/SEWsBHDVWig'
  },
  {
    id: 1789,
    name: 'Isometric Pallof Press Walkout',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/P0bKstEcodQ'
  },
  {
    id: 1790,
    name: 'Barbell Soft Tissue Work Quads',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Lj50T0cIDF4'
  },
  {
    id: 1791,
    name: 'Dumbbell Crossover Step Up and Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/LY82Ak8DqhA'
  },
  {
    id: 1792,
    name: 'Wide Pinch Grip Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/F2m_K7vL0wM'
  },
  {
    id: 1793,
    name: 'Banded Pull Overs',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/E1-RVzJRhao'
  },
  {
    id: 1794,
    name: '5 Month Side Lying to Oblique Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3OOJDOB-gb4'
  },
  {
    id: 1795,
    name: 'Standing Terminal Knee Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/j6s9FIGWOPE'
  },
  {
    id: 1796,
    name: 'Cable High to Low Chop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/blXR9rgp0SU'
  },
  {
    id: 1797,
    name: 'Sleeper Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/-inQFFcNPlM'
  },
  {
    id: 1798,
    name: 'Narrow Pinch Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/po92C_KVHVU'
  },
  {
    id: 1799,
    name: 'Seated Barbell Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iLm6ebPFNs8'
  },
  {
    id: 1800,
    name: 'Kneeling Banded Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/i5HbrODEHMA'
  },
  {
    id: 1801,
    name: 'Wide Single Arm Pinch Grip Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YXumlDKtiM4'
  },
  {
    id: 1802,
    name: 'Split Stance Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ukw9cvx_pt4'
  },
  {
    id: 1803,
    name: 'Overhead Walk with Unstable Load',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/UXMul8AEsck'
  },
  {
    id: 1804,
    name: 'Partner Assisted Pull Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/G5yxVPrgBDk'
  },
  {
    id: 1805,
    name: 'PVP Pipe Wrist Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/D3CBIC496Xs'
  },
  {
    id: 1806,
    name: 'Supine Straight Leg Hip Extension with Alternate Hip Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/A9TcKHS2liM'
  },
  {
    id: 1807,
    name: 'Medicine Ball Cross Body Throw',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/9ki3Jov1vvo'
  },
  {
    id: 1808,
    name: 'Wide Pinch Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/9QdRzLxjD58'
  },
  {
    id: 1809,
    name: 'Staggered Stance Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/4FDdtXxvDB8'
  },
  {
    id: 1810,
    name: 'Wide Single Arm Pinch Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/1oCq_pq93JE'
  },
  {
    id: 1811,
    name: 'Side Lying Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-szhUOmxfRo'
  },
  {
    id: 1812,
    name: 'Banded Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ftNw3y9XemE'
  },
  {
    id: 1813,
    name: 'Front and Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/eWlMJuSh9ZI'
  },
  {
    id: 1814,
    name: 'Bottoms Up Single Arm Kettlebell Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/_0VCfzAv2PM'
  },
  {
    id: 1815,
    name: 'Kettlebell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/XivN4H7KhoA'
  },
  {
    id: 1816,
    name: 'Single Arm Kettlebell Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/UhXuO_0ZQyk'
  },
  {
    id: 1817,
    name: 'One and Quarter Incline Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/TQZOm-DAnxc'
  },
  {
    id: 1818,
    name: 'Feet Elevated Ring Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Niaiq8GUMqI'
  },
  {
    id: 1819,
    name: 'Assisted Passive Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/GMiQ0rx99dc'
  },
  {
    id: 1820,
    name: 'Pronated Tuck Sit Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/7DA42ZXfeiA'
  },
  {
    id: 1821,
    name: 'Supinated Tuck Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/wknUNaHsDhM'
  },
  {
    id: 1822,
    name: 'Landmine Rotational Punch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/WCtfcEqptCo'
  },
  {
    id: 1823,
    name: 'D Ball Carry on Shoulder',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OUt61OC0JiY'
  },
  {
    id: 1824,
    name: 'Snatch Grip Overhead Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KBYHpKcWlJI'
  },
  {
    id: 1825,
    name: 'Supinated Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Es1Urxbpr0M'
  },
  {
    id: 1826,
    name: 'Suitcase Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/7EziKna25lU'
  },
  {
    id: 1827,
    name: 'Dumbbell Single Leg Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/tJ7GCgZefcE'
  },
  {
    id: 1828,
    name: 'Banded Single Arm Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/hzPi41193GI'
  },
  {
    id: 1829,
    name: 'Single Arm Cable Preacher Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Kx03EfVF0pU'
  },
  {
    id: 1830,
    name: 'Chaos Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/7Hzn5RDHp1U'
  },
  {
    id: 1831,
    name: 'One and a Quarter Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/6At-8OIx5pM'
  },
  {
    id: 1832,
    name: 'Prisoner GHD Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5lA_j2BZ9HQ'
  },
  {
    id: 1833,
    name: 'Prisoner Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0wBCL7aZFEg'
  },
  {
    id: 1834,
    name: 'Serratus Wall Slide',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/0qgXMYhiHac'
  },
  {
    id: 1835,
    name: 'Lateral Box Jump Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/0WN1G3WUh_U'
  },
  {
    id: 1836,
    name: 'Copenhagen Windmill Side Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/sPC9PAwYpwo'
  },
  {
    id: 1837,
    name: 'Ring Chest Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Rings',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/qXDQRMWCKjE'
  },
  {
    id: 1838,
    name: 'Single Leg Glute Bridge on Foam Roller',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the glute.',
    videoUrl: 'https://www.youtube.com/embed/nfSSFHtQ4BU'
  },
  {
    id: 1839,
    name: 'Hip Internal Rotation on Box',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/hDtIRQ_D4Zc'
  },
  {
    id: 1840,
    name: 'Squatting Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/a4xIDs69hi8'
  },
  {
    id: 1841,
    name: 'Half L-Sit on Rings',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JG9NI4jldBI'
  },
  {
    id: 1842,
    name: 'Pause Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/FrIHb3RRJBM'
  },
  {
    id: 1843,
    name: 'Isometric Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EMy3NsqdSUw'
  },
  {
    id: 1844,
    name: 'Seated Upright Cable Chest Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/DUjqg0U-XqY'
  },
  {
    id: 1845,
    name: 'Supinated Inverted Row Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/6pgCGmdZN5Y'
  },
  {
    id: 1846,
    name: 'Vertical Pike Pull on Stall Bars',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2xhXTsMBquQ'
  },
  {
    id: 1847,
    name: 'Single Arm Banded Seated Chest Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/0HSczJ4qydY'
  },
  {
    id: 1848,
    name: 'Standing Dumbbell Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vmDQHXHwllc'
  },
  {
    id: 1849,
    name: 'Seated Single Arm Cable Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/oboK-_7s6CI'
  },
  {
    id: 1850,
    name: 'Standing Single Arm Abducted Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/c_5FmEY4S_s'
  },
  {
    id: 1851,
    name: 'Single Leg V-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/E0GO4zuZtdA'
  },
  {
    id: 1852,
    name: 'Steering Wheel',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Bv0WzgS_i2c'
  },
  {
    id: 1853,
    name: 'Standing Single Arm Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/36woeKuHAVk'
  },
  {
    id: 1854,
    name: 'Banded High Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/y-hpKo2PefI'
  },
  {
    id: 1855,
    name: 'RNT Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/nkMLy8rvCTE'
  },
  {
    id: 1856,
    name: 'Seated Banded Low Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/mgbRdGxwoPU'
  },
  {
    id: 1857,
    name: 'Russian Dumbbell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/loID-_o1U5g'
  },
  {
    id: 1858,
    name: 'Banded Thoracic Mobility',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kr_eOfFSIks'
  },
  {
    id: 1859,
    name: 'Football Bar Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/hfVNDnMeQZA'
  },
  {
    id: 1860,
    name: 'Inverted Row Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/hdEpF62-Jb8'
  },
  {
    id: 1861,
    name: 'Football Bar Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/dADHn0iMgvE'
  },
  {
    id: 1862,
    name: 'Football Bar Seated Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/bXPr1sqqI9s'
  },
  {
    id: 1863,
    name: 'Parallel Bar Straight Leg Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YWu-RmqiJGI'
  },
  {
    id: 1864,
    name: 'Ring Row Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Uzi1hbwP1RQ'
  },
  {
    id: 1865,
    name: 'Dumbbell Row to Kickback',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/UjQZkhzfG-g'
  },
  {
    id: 1866,
    name: 'Kroc Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Pxcq8OLuu_o'
  },
  {
    id: 1867,
    name: 'Banded Lat Pull-Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EYg2AdanBCw'
  },
  {
    id: 1868,
    name: 'American Dumbbell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4_yMe3UBYLA'
  },
  {
    id: 1869,
    name: 'Wide Cable Bent Over Rows',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/s-I5mHk0Spo'
  },
  {
    id: 1870,
    name: 'Wide Grip Seated Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ohI-kn5lKfw'
  },
  {
    id: 1871,
    name: 'Seated Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/htfs1wG0OgM'
  },
  {
    id: 1872,
    name: 'Single Arm Cable Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/ZbMOK_6b8Ak'
  },
  {
    id: 1873,
    name: 'Single Arm Kettlebell Clean and Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/PSwmzX872QQ'
  },
  {
    id: 1874,
    name: 'Supinated Chin Over Ring Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/FmqbqFenntg'
  },
  {
    id: 1875,
    name: 'Plate Pinch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mis-3pfycmk'
  },
  {
    id: 1876,
    name: 'Block Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/ghkQ4aaFKqU'
  },
  {
    id: 1877,
    name: 'Dumbbell Forward Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XNiKpU_WIpE'
  },
  {
    id: 1878,
    name: 'Foam Roll T-Spine',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the spine.',
    videoUrl: 'https://www.youtube.com/embed/RNgZ0XNzD0k'
  },
  {
    id: 1879,
    name: 'Decline Dumbbell Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/NyRPXwFkXNE'
  },
  {
    id: 1880,
    name: 'Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MuBXHVOAXNo'
  },
  {
    id: 1881,
    name: 'Block Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/MpOvT1pf85E'
  },
  {
    id: 1882,
    name: 'Pause Clean Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/MHNSNBMLrjI'
  },
  {
    id: 1883,
    name: 'Heel Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/L7Heh_aKPcI'
  },
  {
    id: 1884,
    name: 'Incline Cable Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/JI_dNIJdNTE'
  },
  {
    id: 1885,
    name: 'Close Grip Kneeling Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/IHZdv6aq0zc'
  },
  {
    id: 1886,
    name: 'Rear Delt Cable Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FxolTAGCSlY'
  },
  {
    id: 1887,
    name: 'Front Squat with Straps',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/FOOQiex6yFQ'
  },
  {
    id: 1888,
    name: 'Reverse Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DHxCkq4C20o'
  },
  {
    id: 1889,
    name: '2 Position Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/3rlRw9RVkBE'
  },
  {
    id: 1890,
    name: 'Anterior RNT Front Rack Kettlebell Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Jyah1ostgxw'
  },
  {
    id: 1891,
    name: 'Anterior RNT Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/QbI2hUGQ0Wk'
  },
  {
    id: 1892,
    name: 'Copenhagen Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/Uni6W3RUeUw'
  },
  {
    id: 1893,
    name: 'Front Foot Elevated Dumbbell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Td5J-9Sq4OY'
  },
  {
    id: 1894,
    name: 'Dumbbell High Box Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/kLquDAz5Fm8'
  },
  {
    id: 1895,
    name: 'Frog Pump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OZi7EKSSKac'
  },
  {
    id: 1896,
    name: 'Half Kneeling Single Arm Banded High Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/M2wl4x2HbDk'
  },
  {
    id: 1897,
    name: 'Half Kneeling Single Arm Cable High Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/-9f2DcstuhI'
  },
  {
    id: 1898,
    name: 'Incline Close Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/h_qoIVAE2U8'
  },
  {
    id: 1899,
    name: 'Medicine Ball Squat Press to Throw',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/vCKCMmyJoXI'
  },
  {
    id: 1900,
    name: 'Plyometric Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/SjW9Fzo9Hcg'
  },
  {
    id: 1901,
    name: 'Shuttle Run',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7gxdoc3ACoU'
  },
  {
    id: 1902,
    name: 'Single Arm Dumbbell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/hUNe-VW0qgQ'
  },
  {
    id: 1903,
    name: 'Single Arm Seated Cable Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/mgpT36y1lFI'
  },
  {
    id: 1904,
    name: 'Single Leg Deadlift with Hand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/qkO1NMhuqMs'
  },
  {
    id: 1905,
    name: 'Single Leg Deadlift with Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/xXFPlfVNy84'
  },
  {
    id: 1906,
    name: 'Single Leg Squat to Box',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/c6aHletfv9c'
  },
  {
    id: 1907,
    name: 'Split Stance Medicine Ball Throw',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/h09Vz1fkqLI'
  },
  {
    id: 1908,
    name: 'Wrist Rock on Knees',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wqZiZQwxpt0'
  },
  {
    id: 1909,
    name: 'Weighted Ring Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/75_9ltBSx8o'
  },
  {
    id: 1910,
    name: 'Wrist Rock on Toes',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/60-OXRNjha8'
  },
  {
    id: 1911,
    name: 'Kipping Deficit HSPU',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WRJGPl8lapY'
  },
  {
    id: 1912,
    name: 'RNT Front Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Mtm9Js5jHJk'
  },
  {
    id: 1913,
    name: 'Banded Frog',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Z2U4zwF9j0g'
  },
  {
    id: 1914,
    name: 'RNT Dumbbell Front Foot Elevated Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/w_m7e5znhYg'
  },
  {
    id: 1915,
    name: 'Toes to Bar on Stall Bars',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/p-vXnRHAgKc'
  },
  {
    id: 1916,
    name: 'Cable Seated Single Arm Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/mrHp3UqmQng'
  },
  {
    id: 1917,
    name: 'RNT Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Z9-vkWkd5KE'
  },
  {
    id: 1918,
    name: 'Wrist Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/L6i73vM_pNE'
  },
  {
    id: 1919,
    name: 'Standing Weighted Pike Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/7r46yutO3ns'
  },
  {
    id: 1920,
    name: 'Cable Tricep Pushdown with Straight Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/68kjoCtOBbA'
  },
  {
    id: 1921,
    name: 'Single Leg Kettlebell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/1bAi304kd7s'
  },
  {
    id: 1922,
    name: 'Hanging Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/zsEMqd_3JGo'
  },
  {
    id: 1923,
    name: 'Barbell Finger Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/qnV2nvwc4Dg'
  },
  {
    id: 1924,
    name: 'Landmine Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/q77gVO6khx4'
  },
  {
    id: 1925,
    name: 'RNT Dumbbell Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/nYRsad1n1ik'
  },
  {
    id: 1926,
    name: 'External Rotation Passive Hang',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Pull-up Bar',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/fO6ekKZMHWg'
  },
  {
    id: 1927,
    name: 'Seated Cable Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/WIyRdcauQVE'
  },
  {
    id: 1928,
    name: 'Cable Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/VUHDRPvSm1I'
  },
  {
    id: 1929,
    name: 'Landmine Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RkL_vAvmNIg'
  },
  {
    id: 1930,
    name: 'Kipping Deficit Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Lx-QT3fCx-I'
  },
  {
    id: 1931,
    name: 'Cable Standing Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Lt2FzwtXR0A'
  },
  {
    id: 1932,
    name: 'RNT Dumbbell Front Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/AaCYlr5zSiQ'
  },
  {
    id: 1933,
    name: 'Cable Standing Single Arm Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/0RZCV2m2774'
  },
  {
    id: 1934,
    name: 'Landmine Romanian Deadlift with Viper Handles',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/-N0UMbKVlh0'
  },
  {
    id: 1935,
    name: 'Hip Flexor Triangle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/cpF_Biru65M'
  },
  {
    id: 1936,
    name: 'Pelvic Tilt Against Wall',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xwwA8tOUG-M'
  },
  {
    id: 1937,
    name: 'Kettlebell Pronation to Supination',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/w0y-BCpK-V0'
  },
  {
    id: 1938,
    name: 'Foam Roll Adductors',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/swGbSruHmL0'
  },
  {
    id: 1939,
    name: 'Blackburns',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/r1s2WnNZWOw'
  },
  {
    id: 1940,
    name: 'The Tactical Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/jubxzAShN1A'
  },
  {
    id: 1941,
    name: 'Mace Front Press to Static Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Mace',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/jDv4UnSLBsY'
  },
  {
    id: 1942,
    name: 'Sandbag Clean and Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/fCdzGNbQFSY'
  },
  {
    id: 1943,
    name: 'Barbell Reverse Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/eGMP9i0tnL8'
  },
  {
    id: 1944,
    name: 'Sprawl Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/anlPhnFTdH0'
  },
  {
    id: 1945,
    name: 'Incline Bench Reverse Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Yv85ASaQzLE'
  },
  {
    id: 1946,
    name: 'Side to Side Knee Ups',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YcQUOMeiLR0'
  },
  {
    id: 1947,
    name: 'Front Plank Reach',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/XgQgjd3MbXY'
  },
  {
    id: 1948,
    name: 'Decline Bench Sit-Up to Medicine Ball Throw',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Medicine Ball',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/VH5RBbYEYC0'
  },
  {
    id: 1949,
    name: 'Kneeling Dumbbell Zottman Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/TsdT33U-ThA'
  },
  {
    id: 1950,
    name: 'Glute Bridge on Foam Roller',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the glute.',
    videoUrl: 'https://www.youtube.com/embed/OPtoWBZ1aS4'
  },
  {
    id: 1951,
    name: 'Lateral Medicine Ball Slam',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BVraDjcHCpg'
  },
  {
    id: 1952,
    name: 'Banded Barbell Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/1SMcV-yzl4w'
  },
  {
    id: 1953,
    name: 'Standing Barbell Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-zJsdaS13fk'
  },
  {
    id: 1954,
    name: 'Weighted Pronated Pull-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/vMyEKdTHMXQ'
  },
  {
    id: 1955,
    name: 'V-Sit Stretch with Wall',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/ufayIPZeZIU'
  },
  {
    id: 1956,
    name: 'Standing Thoracic Extension',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/uI_IcazDG7Y'
  },
  {
    id: 1957,
    name: 'Kipping Knee to Chest',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/p_qScfiEa6g'
  },
  {
    id: 1958,
    name: 'Alternating Isometric Dumbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/lyCZjmCtntQ'
  },
  {
    id: 1959,
    name: 'Foam Roller Wall Slides',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/jrr17yGoA2E'
  },
  {
    id: 1960,
    name: 'Front Rack Yoke Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hWsiTp72hgE'
  },
  {
    id: 1961,
    name: 'Neutral Grip Single Arm Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/dzn5RQa5KIw'
  },
  {
    id: 1962,
    name: 'Glute Bridge Single Arm Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/c_QAfo0tNpQ'
  },
  {
    id: 1963,
    name: 'Ring L-Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bdjw4c6GWyo'
  },
  {
    id: 1964,
    name: 'Rolling Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/b7jSQPO2FDs'
  },
  {
    id: 1965,
    name: 'Standing Banded Hip Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XpU4UCuayxw'
  },
  {
    id: 1966,
    name: 'Tuck L-Sit on Rings',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Vuc-nodHS0Y'
  },
  {
    id: 1967,
    name: 'Hollow Body Pull-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Ua_FgtvQVog'
  },
  {
    id: 1968,
    name: 'Viper Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/PdF2aPp4qXU'
  },
  {
    id: 1969,
    name: 'Dumbbell Front Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/NjBxnCsIRsI'
  },
  {
    id: 1970,
    name: 'D-Ball Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/LiX09b6grAQ'
  },
  {
    id: 1971,
    name: 'Side Arch Body Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KzHDk5oaNR4'
  },
  {
    id: 1972,
    name: 'Single Arm Dumbbell Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/KXq1Ijofcjc'
  },
  {
    id: 1973,
    name: 'Rolling Thunder Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/BI0D6UYZdY0'
  },
  {
    id: 1974,
    name: 'Weighted Neutral Grip Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/2qU5WpYU5t0'
  },
  {
    id: 1975,
    name: 'Bodyweight Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/2dBaF1Gzrbg'
  },
  {
    id: 1976,
    name: 'Single Arm Overhead Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/yYlxk67JAd4'
  },
  {
    id: 1977,
    name: 'Stagger Stance Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/wPlErl40yYA'
  },
  {
    id: 1978,
    name: 'Heel Elevated Dumbbell Sissy Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/tzUvbRp18f0'
  },
  {
    id: 1979,
    name: 'Seated Single Leg Pike Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ojOGl3Pc_p0'
  },
  {
    id: 1980,
    name: 'Alternating Tuck Sit',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nIr464sJ6m8'
  },
  {
    id: 1981,
    name: 'Hollow Body Strict Ring Dip',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/j5LuZd1b-lQ'
  },
  {
    id: 1982,
    name: 'Dual Kettlebell Windmill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/j3U1nLy-dZo'
  },
  {
    id: 1983,
    name: 'Rear Foot Elevated Barbell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/eBNCmHPHYTs'
  },
  {
    id: 1984,
    name: 'Wrist Walk',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZdQLFSiWVyk'
  },
  {
    id: 1985,
    name: 'Vertical Pike Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Wcwjj1Nc9AY'
  },
  {
    id: 1986,
    name: 'Single Arm Dumbbell Overhead Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Vbmxic6B9cE'
  },
  {
    id: 1987,
    name: 'Single Arm Seated Dumbbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/U9nVlxhe5jk'
  },
  {
    id: 1988,
    name: 'Elbow Circles',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/T-C7XIu9IDg'
  },
  {
    id: 1989,
    name: 'Counterbalance Skater Squat',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/PoewgCIGNH0'
  },
  {
    id: 1990,
    name: 'Bench Pike Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ICHO3dd2b2A'
  },
  {
    id: 1991,
    name: 'Wide Stance Box Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/DUay_XwLSzQ'
  },
  {
    id: 1992,
    name: 'Single Arm Dumbbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/CGTQkXfXvcM'
  },
  {
    id: 1993,
    name: 'Banded Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/9mklrUcruWk'
  },
  {
    id: 1994,
    name: 'First Knuckle Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7VAYg_DyQ7A'
  },
  {
    id: 1995,
    name: 'Negative Single Leg Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/13Q5cTwQ8AQ'
  },
  {
    id: 1996,
    name: 'Marching Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/0ALFGYGl020'
  },
  {
    id: 1997,
    name: 'Jumping Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Bu8KhFSaY8c'
  },
  {
    id: 1998,
    name: 'Foam Roll IT Band',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/w4GnEJaUQX8'
  },
  {
    id: 1999,
    name: 'Ring Side Splits',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/q4ZACFVmiCg'
  },
  {
    id: 2000,
    name: 'Zercher Yoke Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/pBvb607QGOQ'
  },
  {
    id: 2001,
    name: 'Zercher Yoke Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/k2NTqnXi2nk'
  },
  {
    id: 2002,
    name: 'Deadbug Heel Tap',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hKI7Pvqc9zk'
  },
  {
    id: 2003,
    name: 'Prone Heel to Butt',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fmdRiTUwJWY'
  },
  {
    id: 2004,
    name: 'Toe Touch to Squat',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/awLc73ajzF8'
  },
  {
    id: 2005,
    name: 'Single Arm Ring Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/_y1cFc7ob_4'
  },
  {
    id: 2006,
    name: 'Single Leg Lying Leg Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/PE83aF3Wbt4'
  },
  {
    id: 2007,
    name: 'Assisted Cossack Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/P2rVFn2DfxQ'
  },
  {
    id: 2008,
    name: 'Single Arm Kettlebell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/HSya3z4VuHc'
  },
  {
    id: 2009,
    name: 'Dual Dumbbell Hang Snatch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/G95Vjjk9cuM'
  },
  {
    id: 2010,
    name: 'Rear Foot Elevated Dumbbell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ElARe3QH9Zs'
  },
  {
    id: 2011,
    name: 'Toes Elevated Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/5vu4oytOYjw'
  },
  {
    id: 2012,
    name: 'Single Arm Bent Over Kettlebell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/5KaGrpXwSsY'
  },
  {
    id: 2013,
    name: 'Supine Leg Raise on Flat Bench',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/06xrA19aMnA'
  },
  {
    id: 2014,
    name: 'Fist Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lzCXU4PiCLk'
  },
  {
    id: 2015,
    name: 'Static Single Leg Squat with Counterbalance',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/_GtIKzm00GA'
  },
  {
    id: 2016,
    name: 'Dual Dumbbell Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/I_TYTnq7FEM'
  },
  {
    id: 2017,
    name: 'Weighted Sorenson',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/rgGdan93Z60'
  },
  {
    id: 2018,
    name: 'Safety Bar Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zpE5bjEBu-8'
  },
  {
    id: 2019,
    name: '6 Point Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/yhXLZlCeIxk'
  },
  {
    id: 2020,
    name: 'Reverse Bear Crawl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/x_SFXx-ShG4'
  },
  {
    id: 2021,
    name: 'Single Arm Kettlebell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vC3LMO3TTuQ'
  },
  {
    id: 2022,
    name: 'Hollow Body Push-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/nLXLfW0qxjk'
  },
  {
    id: 2023,
    name: 'Cyclist Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/mf_A5BWJxfA'
  },
  {
    id: 2024,
    name: 'Reverse Quadruped Crawl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/km8sm5_0Pz8'
  },
  {
    id: 2025,
    name: 'Half Kneeling Single Arm Dumbbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/dvbutfYH2JU'
  },
  {
    id: 2026,
    name: 'Single Arm Dumbbell Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/aTXDk8Uz7Dk'
  },
  {
    id: 2027,
    name: 'Single Arm Alternating Kettlebell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WNSVFvCr7vs'
  },
  {
    id: 2028,
    name: 'Deficit Clean Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/VChlBS6nwFc'
  },
  {
    id: 2029,
    name: 'Seated Dumbbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/SR4rzOnA0gw'
  },
  {
    id: 2030,
    name: 'Reverse Crunch to Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ROPssKqC4Q0'
  },
  {
    id: 2031,
    name: 'Deficit Clean Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/MKHYEAvmFtI'
  },
  {
    id: 2032,
    name: 'Offset Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MCM5__e-LuE'
  },
  {
    id: 2033,
    name: 'Hang Snatch High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/Lush__XeI4A'
  },
  {
    id: 2034,
    name: 'Banded EZ Bar Skull Crusher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FixuaUT_UxU'
  },
  {
    id: 2035,
    name: 'Front Foot Eleveated Trap Bar Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/F4mE1AUUYYU'
  },
  {
    id: 2036,
    name: 'Weighted Forearm Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/E2pK5NvSxAQ'
  },
  {
    id: 2037,
    name: 'Dual Kettlebell Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/CHYr99LBpvQ'
  },
  {
    id: 2038,
    name: 'Deficit Snatch Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/BPSgu4oIPEU'
  },
  {
    id: 2039,
    name: 'Deficit Snatch Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/A1fnUiyPb-U'
  },
  {
    id: 2040,
    name: 'RNT Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/5l7Iq2SHzrY'
  },
  {
    id: 2041,
    name: 'Front Foot Elevated Trap Bar Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5Hb9MPhXWqs'
  },
  {
    id: 2042,
    name: 'Safety Bar Sumo Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3m2YujZ5rD8'
  },
  {
    id: 2043,
    name: 'Barbell Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0yU2u8iEdug'
  },
  {
    id: 2044,
    name: 'Single Leg Deadlift with Hand Support',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/-TjbO_yYMQQ'
  },
  {
    id: 2045,
    name: 'Tall Kneeling Dumbbell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ysZ8hzQEo6E'
  },
  {
    id: 2046,
    name: 'Wide Stance Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/yUc6OjaMt-Q'
  },
  {
    id: 2047,
    name: 'Supinated Knee Tuck Chin Over Vertical Plane Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/wHRALwvcrls'
  },
  {
    id: 2048,
    name: 'Single Leg Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/uRyk_ZN2ya0'
  },
  {
    id: 2049,
    name: 'Squat to Palloff Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/u9SpIj8k9bE'
  },
  {
    id: 2050,
    name: 'Snatch Lift Off',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/q7lVf3QuHWs'
  },
  {
    id: 2051,
    name: 'Sumo Goodmorning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jTNe-ZZUMeY'
  },
  {
    id: 2052,
    name: 'Stall Bar Knee to Chest',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/c8inPETfiXE'
  },
  {
    id: 2053,
    name: 'Supinated L Pull Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/bqCjl5c2frw'
  },
  {
    id: 2054,
    name: 'Straddle Legless Rope Climb',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ai7KFEse4zk'
  },
  {
    id: 2055,
    name: 'Neutral Grip Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XEy54AD0r_0'
  },
  {
    id: 2056,
    name: 'Supinated L Pull Up Chin Over Vertical Plane Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/UkCSUd_ZnfE'
  },
  {
    id: 2057,
    name: 'Tall Kneeling Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/TmJ5OvnOcA8'
  },
  {
    id: 2058,
    name: 'Trap 3 Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/OToGZz8I-A8'
  },
  {
    id: 2059,
    name: 'Wall Facing Single Arm Handstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/OMD9ozFhPtk'
  },
  {
    id: 2060,
    name: 'Tall Kneeling Alternating  Dumbbell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/O1_9brRY0gU'
  },
  {
    id: 2061,
    name: 'T Push up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/NW86tPhCWTc'
  },
  {
    id: 2062,
    name: 'Single Arm Kettlebell Overhead Alternating Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/LMStE_hD9E4'
  },
  {
    id: 2063,
    name: 'Skipping',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LEdTXRwEsSE'
  },
  {
    id: 2064,
    name: 'Tuck Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/IzduTQ_q-5E'
  },
  {
    id: 2065,
    name: 'Single Arm Kettlebell Overhead Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ISqPSQmGxIo'
  },
  {
    id: 2066,
    name: 'Single Arm Kettlebell Overhead Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/HaVkueN5VXY'
  },
  {
    id: 2067,
    name: 'Single Arm Walking Overhead Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Gs6Z-Wm8FvQ'
  },
  {
    id: 2068,
    name: 'Slow Box Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/FqdeeafOXag'
  },
  {
    id: 2069,
    name: 'Tall Kneeling Single Arm Dumbbell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/9_x80I9CgOo'
  },
  {
    id: 2070,
    name: 'Single Leg Sorenson',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/94d4gTNAmHY'
  },
  {
    id: 2071,
    name: 'Single Arm Overhead Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6vAUEuDERyY'
  },
  {
    id: 2072,
    name: 'Single Arm Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/5bh8h2pbKtg'
  },
  {
    id: 2073,
    name: 'Yoga Push Up',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0SQoK7VFcz0'
  },
  {
    id: 2074,
    name: 'Pronated Knee Tuck Chin Over Vertical Plane Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/usA77QzIPuM'
  },
  {
    id: 2075,
    name: 'Running Single Leg Hop',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/tk6WcuH-s2Y'
  },
  {
    id: 2076,
    name: 'Prisoner Jump Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/fRTBTftem4I'
  },
  {
    id: 2077,
    name: 'Single Arm Front Rack Kettlebell Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/fLUVSUIrDD4'
  },
  {
    id: 2078,
    name: 'Single Arm Front Leaning Rest',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/f1kE7SCadOU'
  },
  {
    id: 2079,
    name: 'Single Arm Dumbbell Overhead Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/d2KA4d1GqAo'
  },
  {
    id: 2080,
    name: 'Prone Banded Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Y1ngtMZ0pQo'
  },
  {
    id: 2081,
    name: 'Shoulder Elevated Banded Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/SzsUB9r6504'
  },
  {
    id: 2082,
    name: 'Prisoner Jump Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Mfs1O6hY2lQ'
  },
  {
    id: 2083,
    name: 'Single Arm Dumbbell Overhead Alternating Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Eq3HrZj9bRw'
  },
  {
    id: 2084,
    name: 'Parallette Handstand Push-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/AXIf6_cORoE'
  },
  {
    id: 2085,
    name: 'Single Arm Banded Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/8ZxYAAXhmAM'
  },
  {
    id: 2086,
    name: 'Single Arm Front Leaning Rest on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7RcbXHBL38U'
  },
  {
    id: 2087,
    name: 'Pause Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/7-FyP0dg7Wo'
  },
  {
    id: 2088,
    name: 'Short Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/3jO80IcDlNY'
  },
  {
    id: 2089,
    name: 'Pronated L Pull-Up Chin Over Vertical Plane Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/3H7KTVjK7mk'
  },
  {
    id: 2090,
    name: 'Single Arm Floor Press with Single Leg Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/2U5elZbL0Co'
  },
  {
    id: 2091,
    name: 'Short Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/1nGWnEQluBI'
  },
  {
    id: 2092,
    name: 'Forward Sled Drag',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zcJrOB2DoFo'
  },
  {
    id: 2093,
    name: 'Medicine Ball Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/xweAYObpwDk'
  },
  {
    id: 2094,
    name: 'Kettlebell Front Rack Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/xNp1QzNOM7s'
  },
  {
    id: 2095,
    name: 'Front Rack Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/wQzUHucOdGU'
  },
  {
    id: 2096,
    name: 'High Hang Clean Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/vZuxdBLS8aU'
  },
  {
    id: 2097,
    name: 'Hang Clean Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/ug99NXyF8KA'
  },
  {
    id: 2098,
    name: 'Goblet Cossack Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/tNSzF4X-LDg'
  },
  {
    id: 2099,
    name: 'Hammer Curl to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/p-k89-kRTHg'
  },
  {
    id: 2100,
    name: 'Goblet Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/mfzLx8704u8'
  },
  {
    id: 2101,
    name: 'Close Grip Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/jsHE2plMPxY'
  },
  {
    id: 2102,
    name: 'Front Rack Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/jQasI-i3BRE'
  },
  {
    id: 2103,
    name: 'Feet Elevated Ring Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/ish2c7zxxfI'
  },
  {
    id: 2104,
    name: 'Goblet Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/epD5Xd5nN2M'
  },
  {
    id: 2105,
    name: 'Dumbbell Glute Bridge Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/dxxx-kB6tYM'
  },
  {
    id: 2106,
    name: 'Lateral Shuffle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dgZmOvgVJ6k'
  },
  {
    id: 2107,
    name: 'Garhammer Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bovkhy1S-20'
  },
  {
    id: 2108,
    name: 'Lying Leg Curl on Swiss Ball',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Stability Ball',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/bPuoiuKgV68'
  },
  {
    id: 2109,
    name: 'Hang Snatch Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/Vt0o0z8QKKo'
  },
  {
    id: 2110,
    name: 'High Box Step Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/V_GXrG-JXEs'
  },
  {
    id: 2111,
    name: 'Foam Roll Hamstrings',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the hamstring.',
    videoUrl: 'https://www.youtube.com/embed/UtGRLosmUug'
  },
  {
    id: 2112,
    name: 'GHD Hollow Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/U4X-oXyhl2M'
  },
  {
    id: 2113,
    name: 'Kettlebell Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/SXuy46ZdVUA'
  },
  {
    id: 2114,
    name: 'Single Arm Dumbbell Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/R1nQeHumVGM'
  },
  {
    id: 2115,
    name: 'Kipping Chest to Bar Pull Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/PiF53ZOB83E'
  },
  {
    id: 2116,
    name: 'Overhead Medicine Ball Throw',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/LL6VVXerjT8'
  },
  {
    id: 2117,
    name: 'Feet Elevated Side Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/LG8Yd_NXveA'
  },
  {
    id: 2118,
    name: 'Pause Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/L-bwTGiPMkg'
  },
  {
    id: 2119,
    name: 'Dumbbell Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Jm6qPioJhdA'
  },
  {
    id: 2120,
    name: 'Jumping Pull up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/JZ2AyFCr9hA'
  },
  {
    id: 2121,
    name: 'High Hang Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/HB874GSuwgI'
  },
  {
    id: 2122,
    name: 'Dumbbell  Wrist Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/EXpCT1cjcLs'
  },
  {
    id: 2123,
    name: 'Parallette Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/CMlWH_7crjY'
  },
  {
    id: 2124,
    name: 'Glute Ham Raise Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/74d_8ggU3SE'
  },
  {
    id: 2125,
    name: 'Hamstring Curl on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/6NCkHTG4lHc'
  },
  {
    id: 2126,
    name: 'Incline Dumbbell Close Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/3DjDESzY-M4'
  },
  {
    id: 2127,
    name: 'Kettlebell Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2rYqTvUlU2k'
  },
  {
    id: 2128,
    name: 'Lateral Step Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/2bOei8bM9bU'
  },
  {
    id: 2129,
    name: 'Single Leg Feet Elevated Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/-mYkhSf2tps'
  },
  {
    id: 2130,
    name: 'False Grip Chest to Ring Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-0HUijsEn94'
  },
  {
    id: 2131,
    name: 'Dual Kettlebell Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/pYozWeU1g-0'
  },
  {
    id: 2132,
    name: 'Dumbbell Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/YgU65VH1tjk'
  },
  {
    id: 2133,
    name: 'Clean Transition Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/08JDdYSSG10'
  },
  {
    id: 2134,
    name: 'Bent Over Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wTwRHd52Yrk'
  },
  {
    id: 2135,
    name: 'Bench Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/rGNZKSu0UbY'
  },
  {
    id: 2136,
    name: 'Curtsy Step Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/owKya53kNR4'
  },
  {
    id: 2137,
    name: 'Dual Kettlebell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/oKU-xNiKpqY'
  },
  {
    id: 2138,
    name: 'Dual Kettlebell Overhead Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/npyYZD6f4Nk'
  },
  {
    id: 2139,
    name: 'Banded Skydiver',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/msHSCSqM1mQ'
  },
  {
    id: 2140,
    name: 'Dual Dumbbell Rack Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ksIdhmISQWo'
  },
  {
    id: 2141,
    name: 'Barbell Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/kgFVdnCNaqk'
  },
  {
    id: 2142,
    name: 'Barbell Forward Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/k-E4onRcLkY'
  },
  {
    id: 2143,
    name: 'Cat Cow',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jztNVejxnIw'
  },
  {
    id: 2144,
    name: 'Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/iL2CNyZy5vI'
  },
  {
    id: 2145,
    name: 'Decline Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/hNhR5O754ow'
  },
  {
    id: 2146,
    name: 'Burpee Over Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/g2DiuvyZaDY'
  },
  {
    id: 2147,
    name: 'Banded Dislocate',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ddGqVY8mdKE'
  },
  {
    id: 2148,
    name: 'Decline Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dLW-6JUbIrc'
  },
  {
    id: 2149,
    name: 'Bottom of Dip Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/d8hSypNS92Y'
  },
  {
    id: 2150,
    name: 'Bridge Walkout',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/c4w_V7wnN3M'
  },
  {
    id: 2151,
    name: 'Burpee Bar Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/bZx0ERSQHTU'
  },
  {
    id: 2152,
    name: 'Backpedal',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_jouQLuVsdM'
  },
  {
    id: 2153,
    name: 'Box Handstand Push Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/_0qwtwKjEi8'
  },
  {
    id: 2154,
    name: 'Burpee Over Rower',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rower',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Ym9VfAnyRq8'
  },
  {
    id: 2155,
    name: 'Dip Shrug',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/Y_wG9Xx7WVc'
  },
  {
    id: 2156,
    name: 'Box Handstand Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/Y74MP0IpKOE'
  },
  {
    id: 2157,
    name: 'Back Supported Dumbbell Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/NZtnoU301Qk'
  },
  {
    id: 2158,
    name: 'Butterfly Chest to Bar Pull Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/MJv_oZgruHE'
  },
  {
    id: 2159,
    name: 'Dumbbell Devil Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Lg5kpoILfMU'
  },
  {
    id: 2160,
    name: 'Decline Dumbbell Close Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/KvYJq7YfvgY'
  },
  {
    id: 2161,
    name: 'Dumbbell Shrug',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KAzSSURxdE8'
  },
  {
    id: 2162,
    name: 'Banded Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Jb8-qTipmWA'
  },
  {
    id: 2163,
    name: 'Bottom of Push Up Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/GFRexD-7q80'
  },
  {
    id: 2164,
    name: 'Dual Kettlebell Rack Drop Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/E18b12jwYNA'
  },
  {
    id: 2165,
    name: 'Bar Facing Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/AphhjyjiVeg'
  },
  {
    id: 2166,
    name: 'Concentration Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/AYJpepUJ2J0'
  },
  {
    id: 2167,
    name: 'Burpee Ring Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/7gyet9_vp8I'
  },
  {
    id: 2168,
    name: 'Dumbbell Hang Clean Thruster',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/70KcUMIjSOo'
  },
  {
    id: 2169,
    name: '3 Way Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-REeqQhn9No'
  },
  {
    id: 2170,
    name: '10 Month Position Dumbbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/z03wi63jUy0'
  },
  {
    id: 2171,
    name: 'Double Stag Handstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/xlagAkMuO94'
  },
  {
    id: 2172,
    name: 'Single Arm Tall Kneeling Dumbbell Arnold Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/xUjN7zjubtQ'
  },
  {
    id: 2173,
    name: 'Cossack Squat to Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/wJ0ViEJ-52Q'
  },
  {
    id: 2174,
    name: 'Dumbbell Skull Cusher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vDwCEtv1KHA'
  },
  {
    id: 2175,
    name: 'L Handstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/mxZ5NPj-i9c'
  },
  {
    id: 2176,
    name: 'Offset Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/_hvfgC_PsbQ'
  },
  {
    id: 2177,
    name: 'Split Dumbbell Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/_RfYK0NGuHA'
  },
  {
    id: 2178,
    name: 'Deadbug with Theraband',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YjlOAC2KRJw'
  },
  {
    id: 2179,
    name: 'Single Leg RDL Hold Kettlebell Swap',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/RK5LiICAuI0'
  },
  {
    id: 2180,
    name: 'Dual Kettlebell Bottoms Up Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/RFeBBucI1zQ'
  },
  {
    id: 2181,
    name: 'Cartwheel',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QtEK-8OdFLg'
  },
  {
    id: 2182,
    name: 'Split Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/J5MivJFv8BA'
  },
  {
    id: 2183,
    name: 'Dual Dumbbell Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/FCBSBNIXo0U'
  },
  {
    id: 2184,
    name: 'Ring Flutter',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Bo3D8EYLomg'
  },
  {
    id: 2185,
    name: 'Side Plank Abduction',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/BgtQe3MAzB0'
  },
  {
    id: 2186,
    name: 'Foam Roller Deadbug',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/82zXmgeZrE4'
  },
  {
    id: 2187,
    name: 'Split Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/6HoSU84jyMQ'
  },
  {
    id: 2188,
    name: 'Handstand Shoulder Flexion Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/0LgAxZ0cdi4'
  },
  {
    id: 2189,
    name: 'Banded Hip Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-YA5TloO4Yo'
  },
  {
    id: 2190,
    name: 'Offset Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/-5BBmgiPbDQ'
  },
  {
    id: 2191,
    name: 'Kneeling Founder',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mw_ihELy7Z8'
  },
  {
    id: 2192,
    name: 'Tall Kneeling Filly Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/yenEUut_Acw'
  },
  {
    id: 2193,
    name: 'Filly Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/xJeA7iXKpwY'
  },
  {
    id: 2194,
    name: 'Dumbbell Squat Clean + Split Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/qmHwG7Rsofc'
  },
  {
    id: 2195,
    name: 'Clean Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/qA64bY50Fz0'
  },
  {
    id: 2196,
    name: 'Dumbbell Squat Clean + Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/pNA7sf55o7g'
  },
  {
    id: 2197,
    name: 'Snatch Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/iBgx3WyXDE0'
  },
  {
    id: 2198,
    name: 'Dumbbell Powell Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gEGeNSk8QtM'
  },
  {
    id: 2199,
    name: 'Standing Pike Stretch Toes Heels',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the extremities for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/fITNHCi8pt4'
  },
  {
    id: 2200,
    name: 'Dumbbell Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/dfmq1UOuUXo'
  },
  {
    id: 2201,
    name: 'Standing Founder',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_t04ca4nmM8'
  },
  {
    id: 2202,
    name: 'Strict Hanging Knee to Chest',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/_r4RMHlYMCw'
  },
  {
    id: 2203,
    name: 'Dumbbell Squat Clean Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/_n4TtD4k6lE'
  },
  {
    id: 2204,
    name: 'Dumbbell Hang Power Clean + Push Press',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ZVywozD5Tac'
  },
  {
    id: 2205,
    name: 'Dumbbell Ground to Overhead',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YGvKXan0m0s'
  },
  {
    id: 2206,
    name: 'Front Squat Eccentric with Back Squat Concentric Anderson Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Ts4FKuQh5G0'
  },
  {
    id: 2207,
    name: 'Standing Single Arm Arnold Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/THNyH2E9mDI'
  },
  {
    id: 2208,
    name: 'Supinated Pull-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/PDZIqoW3Bbs'
  },
  {
    id: 2209,
    name: 'Lateral Leg Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NTN3e6m7uLg'
  },
  {
    id: 2210,
    name: 'Half Kneeling Arnold Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Ijp8kJ-yKjM'
  },
  {
    id: 2211,
    name: 'Goblet Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/EUHaKY3aA1Q'
  },
  {
    id: 2212,
    name: 'Rear Foot Elevated Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/EJnbINqzCyg'
  },
  {
    id: 2213,
    name: 'Stability Ball Deadbug',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Stability Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2WN2Kw2zC80'
  },
  {
    id: 2214,
    name: 'Forward Leg Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/25ET51u9oAc'
  },
  {
    id: 2215,
    name: 'Lunge Matrix',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0tZROg_AgrU'
  },
  {
    id: 2216,
    name: 'Rear Foot Elevated Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/0g6B-mPmiVM'
  },
  {
    id: 2217,
    name: 'Barbell Hip Thrust on Floor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/soGI_iVLya0'
  },
  {
    id: 2218,
    name: 'Butterfly Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/Wh9hdGIUkVw'
  },
  {
    id: 2219,
    name: 'Front Rack Barbell Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Ou-kq9ereuk'
  },
  {
    id: 2220,
    name: 'Barbell Hip Thrust on Bench',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/OgDxMvKDiZY'
  },
  {
    id: 2221,
    name: 'Clean Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/JLuBhNV4Se4'
  },
  {
    id: 2222,
    name: 'Belly Breath in 3 Month Position',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1CbkqGQJk2Q'
  },
  {
    id: 2223,
    name: 'Barbell Drag Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/hT-ajSSNNHM'
  },
  {
    id: 2224,
    name: 'Banded Oblique Twist',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/J6Ah54RiCh8'
  },
  {
    id: 2225,
    name: 'Assisted Freestanding Handstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/AI4eHdoEGPI'
  },
  {
    id: 2226,
    name: 'Assisted Dip with Partner',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/pS2NAn-ygAI'
  },
  {
    id: 2227,
    name: 'All Four Belly Breathing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/16HynwYVKTA'
  },
  {
    id: 2228,
    name: '7 Way Hip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/X7U3uwLY21o'
  },
  {
    id: 2229,
    name: '5 Way Hip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/S5LaSzpLBNk'
  },
  {
    id: 2230,
    name: 'Bradford Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/YlGlSX50DL0'
  },
  {
    id: 2231,
    name: 'Hinge Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/OZqmg4O4YB0'
  },
  {
    id: 2232,
    name: 'Half Hanging Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/GwsOlCiefY4'
  },
  {
    id: 2233,
    name: 'Fire Hydrant',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9Urj31VEWUc'
  },
  {
    id: 2234,
    name: 'Fingertip Push Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/KrOjqvEKVGQ'
  },
  {
    id: 2235,
    name: 'Downward Dog',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/f0wDagdWGl8'
  },
  {
    id: 2236,
    name: 'Negative Body Lever Straddle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eyfgDAxT4hI'
  },
  {
    id: 2237,
    name: 'Externally Rotated Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/KySOTKFZlHY'
  },
  {
    id: 2238,
    name: 'Neutral Grip Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/3bt8gEDXDGw'
  },
  {
    id: 2239,
    name: 'Parallel Bar Walks',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZhZZSOfbaAU'
  },
  {
    id: 2240,
    name: 'Prone Incline Reverse Superman',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YAWGHSSKDPs'
  },
  {
    id: 2241,
    name: 'Single Leg Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/V1SRy5CcIbA'
  },
  {
    id: 2242,
    name: 'Pronated Pull Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/OmRceMHjdUw'
  },
  {
    id: 2243,
    name: 'Powell Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/A1vhs1QSoD0'
  },
  {
    id: 2244,
    name: 'Single Arm Braced DB Shoulder Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/70T7iQBpcrw'
  },
  {
    id: 2245,
    name: 'Bent Knee Reverse Hyper',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ldsWyKQdW38'
  },
  {
    id: 2246,
    name: 'Banded Seated Hip Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fMrw3DFRzFk'
  },
  {
    id: 2247,
    name: 'Banded Standing Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Y1MfAPXswt0'
  },
  {
    id: 2248,
    name: 'Banded Quadruped Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Bm0nt44UdH4'
  },
  {
    id: 2249,
    name: 'Active Straight Leg Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XU-z-hsXfOU'
  },
  {
    id: 2250,
    name: 'Clapping Pull Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/ky-g2yEu-pw'
  },
  {
    id: 2251,
    name: 'RKC Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/c68p1KJ2n-E'
  },
  {
    id: 2252,
    name: 'Captain of Crush',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LSKBt4QWjzg'
  },
  {
    id: 2253,
    name: 'Clapping Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0Pn8sWCVVxU'
  },
  {
    id: 2254,
    name: 'Elevator Ring Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/tEyV6Zf1g2A'
  },
  {
    id: 2255,
    name: 'Static Sled Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/t9p_YPOTgFw'
  },
  {
    id: 2256,
    name: 'Elevator Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/nTgv-vOmfg8'
  },
  {
    id: 2257,
    name: 'Dip Support on Straight Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/d-a322FzO0g'
  },
  {
    id: 2258,
    name: 'Duck Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MftHDUQKWgw'
  },
  {
    id: 2259,
    name: 'Top Down Supinated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/xB18qCO9d3o'
  },
  {
    id: 2260,
    name: 'Pancake Arch Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vFuqW0g7WxE'
  },
  {
    id: 2261,
    name: 'Stir The Pot',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/uPOSQgt5QTE'
  },
  {
    id: 2262,
    name: 'Kneeling Barbell Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ro-Wv8mh2Dk'
  },
  {
    id: 2263,
    name: 'Psoas March',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nvwe_d_r9Nw'
  },
  {
    id: 2264,
    name: 'Heel Elevated Assisted Sissy Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/g8TdTnbQDME'
  },
  {
    id: 2265,
    name: 'Shoulder Opener Drill',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/cBR1KQ1gpvY'
  },
  {
    id: 2266,
    name: 'RNT Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ZB_WM6NczoU'
  },
  {
    id: 2267,
    name: 'RNT Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/UuYWqd8bLUw'
  },
  {
    id: 2268,
    name: 'Kettlebell Duck Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/T2pyu9k1w8g'
  },
  {
    id: 2269,
    name: 'Marching Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/OjJ2axf1VCU'
  },
  {
    id: 2270,
    name: 'Ski Erg',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Ski Erg',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/O4AuL2FUMFM'
  },
  {
    id: 2271,
    name: 'Change Plate Cuban Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Plate',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/MH9phNpW19g'
  },
  {
    id: 2272,
    name: 'Weighted Side Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/IL2kSuNvrII'
  },
  {
    id: 2273,
    name: 'Press Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/1FpiUuTSv4I'
  },
  {
    id: 2274,
    name: 'Partial Wall Handstand Rep',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/XvzGssUZYl4'
  },
  {
    id: 2275,
    name: 'Broad Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/7GjhAmmbImA'
  },
  {
    id: 2276,
    name: 'Pinch Grip Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yvrrCPcRSKI'
  },
  {
    id: 2277,
    name: 'Paused Pistol',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vd-j2axDJu8'
  },
  {
    id: 2278,
    name: 'Weighted Reverse Snow Angel',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ivkP865HrA8'
  },
  {
    id: 2279,
    name: 'Single Arm Overhead Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/WB7DVQtQmBw'
  },
  {
    id: 2280,
    name: 'Quadruped Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OMFwAKhSgWs'
  },
  {
    id: 2281,
    name: 'Stall Bar Half Windshield Wiper',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/8h9Te3cb4JA'
  },
  {
    id: 2282,
    name: 'Hip Internal Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/vfk-srdrPxw'
  },
  {
    id: 2283,
    name: 'Hip Flexion With Pulse',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/rue0zyTQGmw'
  },
  {
    id: 2284,
    name: 'Bulgarian Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/hHSgKb-S2oA'
  },
  {
    id: 2285,
    name: 'Bridge Wall Walk With Hands',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/ODewmYIy5Ks'
  },
  {
    id: 2286,
    name: 'Clean Lift-Off',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/KsKOvDjIz2k'
  },
  {
    id: 2287,
    name: 'Hip Flexion On Bench with Pulse',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3j-nPR8oSCk'
  },
  {
    id: 2288,
    name: 'Seated Pike Leg Lifts',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_WaG0U3blkw'
  },
  {
    id: 2289,
    name: 'Top Down Pronated Pull Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/JXz-REBMQqA'
  },
  {
    id: 2290,
    name: 'Seated Dumbbell Overhead Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/zX-H5d_YYmI'
  },
  {
    id: 2291,
    name: 'Goblet Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/smDMsePPxQU'
  },
  {
    id: 2292,
    name: 'Dual Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/GMdsa4WoTNY'
  },
  {
    id: 2293,
    name: 'Dual KB Front Rack Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9yBnMm0RDW0'
  },
  {
    id: 2294,
    name: 'Dual KB Sumo Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/9KO-tIYXABk'
  },
  {
    id: 2295,
    name: 'Bird-Dog Off Bench',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jGx1ZsN4eu0'
  },
  {
    id: 2296,
    name: 'Assisted Ring Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/en91Csr2VU8'
  },
  {
    id: 2297,
    name: 'Bench Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/W0QANwRvgFA'
  },
  {
    id: 2298,
    name: 'Ab Roll Out',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2Jq47mqx2Xw'
  },
  {
    id: 2299,
    name: 'Outside Inside Outside',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/AMpBumdZyaY'
  },
  {
    id: 2300,
    name: 'Triple Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/acnSCk_RuEY'
  },
  {
    id: 2301,
    name: 'Dumbbell Frog Pump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PZYKc80w9SQ'
  },
  {
    id: 2302,
    name: 'Circle Arch Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EcfIX0ZnqEc'
  },
  {
    id: 2303,
    name: 'Bow and Bend',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/E5qy0rzBqqY'
  },
  {
    id: 2304,
    name: 'Reverse Leg Lift on Rings',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/8-Gb93lSEks'
  },
  {
    id: 2305,
    name: 'Straddle Toe Drag',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5e4HXixh9YI'
  },
  {
    id: 2306,
    name: 'Frog Stand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/z1DZ0ZThsxc'
  },
  {
    id: 2307,
    name: 'Depth Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/yZkHaVYmWy8'
  },
  {
    id: 2308,
    name: 'Overhead Axle Bar Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dgxufxKlAxo'
  },
  {
    id: 2309,
    name: 'Burpee Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Y-P4DhRqTP4'
  },
  {
    id: 2310,
    name: 'Muscle-Up Negative + Kipping Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/MbWlpr5R7R0'
  },
  {
    id: 2311,
    name: 'V-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/B4_vvNzWaNQ'
  },
  {
    id: 2312,
    name: 'Overhead Barbell Hold with Unstable Weight Attached',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2tqZtmOCg7Y'
  },
  {
    id: 2313,
    name: 'Fingerboard Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/yGYHUveYDOw'
  },
  {
    id: 2314,
    name: 'Weighted Arch Hold on Reverse Hyper',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/tgEKREjLz90'
  },
  {
    id: 2315,
    name: 'Shoulder and Feet Elevated Hip Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/ndJXFhcmtRY'
  },
  {
    id: 2316,
    name: 'Handstand Hold Against Wall',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/j7QMn9O_5vA'
  },
  {
    id: 2317,
    name: 'Beat Swings on Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/F6v3dYvYOoU'
  },
  {
    id: 2318,
    name: 'Hanging Single Leg L Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/sJAkvMzSsys'
  },
  {
    id: 2319,
    name: 'High Hang Snatch High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/QTOSc_qW1HQ'
  },
  {
    id: 2320,
    name: 'Glute Ham Raise Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yPlWSg4NSLw'
  },
  {
    id: 2321,
    name: 'Hanging Single Leg Tuck Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/UgSgdM1aR2M'
  },
  {
    id: 2322,
    name: 'Standing Arnold Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/vJiAyjAMUgQ'
  },
  {
    id: 2323,
    name: 'Standing Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ibDR0Ql5wGE'
  },
  {
    id: 2324,
    name: 'Staggered Stance Barbell Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SEFwcIwMBsM'
  },
  {
    id: 2325,
    name: 'Strict Toe to Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6l5B35GtoJg'
  },
  {
    id: 2326,
    name: 'Reverse Seal Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zLQtSlenrQE'
  },
  {
    id: 2327,
    name: 'Single Leg Lateral Step Down and Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/unjKY4li1Kc'
  },
  {
    id: 2328,
    name: 'Single Arm Kettlebell Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ttQsFYDLQO0'
  },
  {
    id: 2329,
    name: 'Shoulders Elevated Single Leg Hip Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/gQQuBBkv2eE'
  },
  {
    id: 2330,
    name: 'Single Leg Hip Extension Isometric',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WRR0ELL9D2k'
  },
  {
    id: 2331,
    name: 'Dumbbell Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vNQ7-WBDUKA'
  },
  {
    id: 2332,
    name: 'Incline Chest Press Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/nna4gQD-v9Y'
  },
  {
    id: 2333,
    name: 'Prone Machine Hamstring Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Zhnhz1r_u-Y'
  },
  {
    id: 2334,
    name: 'Chest Supported Incline DB Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/LL9YlELlBaY'
  },
  {
    id: 2335,
    name: 'Leg Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/IqjbBRNqJps'
  },
  {
    id: 2336,
    name: 'T Bar Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/AgxCPp37waQ'
  },
  {
    id: 2337,
    name: 'Dumbbell Frontal Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7rBxeUNd5tA'
  },
  {
    id: 2338,
    name: 'Hack Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6teL-OyXuQs'
  },
  {
    id: 2339,
    name: 'Wide Grip Seated Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/JlPrEJydcLw'
  },
  {
    id: 2340,
    name: 'Neutral Grip Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JGgHbjyvFRI'
  },
  {
    id: 2341,
    name: 'Standing Cable Tricep Extension with V-Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/bGyuC_5Wtcs'
  },
  {
    id: 2342,
    name: 'Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_edsRrSFlOg'
  },
  {
    id: 2343,
    name: 'Standing Cable Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/ZoKRsg8jNmk'
  },
  {
    id: 2344,
    name: 'Dumbbell Pullover',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/UZ5K1-iTawA'
  },
  {
    id: 2345,
    name: 'Seated Chest Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/QrnVDLSBdMo'
  },
  {
    id: 2346,
    name: 'Seated Hip Abduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/HROBe0rbObg'
  },
  {
    id: 2347,
    name: 'Reverse Grip Lat Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DpYCRotiUUc'
  },
  {
    id: 2348,
    name: 'Seated Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Df7XjoeVrIA'
  },
  {
    id: 2349,
    name: 'Seated Hip Adduction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CfTZfTILu3U'
  },
  {
    id: 2350,
    name: 'Seated Bicep Curl Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/-Rzppjmt6ag'
  },
  {
    id: 2351,
    name: 'Standing Rope Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rope',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/z7gqbcjkzU0'
  },
  {
    id: 2352,
    name: 'Standing Double Arm Face Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/tZN8KYDSCRo'
  },
  {
    id: 2353,
    name: 'Standing Reverse Grip Cable Tricep Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A tricep isolation exercise for arm strength.',
    videoUrl: 'https://www.youtube.com/embed/nXjMCrdYVro'
  },
  {
    id: 2354,
    name: 'Standing Single Arm Cable Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/Q-wMUbwAkNc'
  },
  {
    id: 2355,
    name: 'Standing Calf Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ELCimJnir4M'
  },
  {
    id: 2356,
    name: 'Standing Rope Bicep Curl on Cable Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/2BFzjygU1Ic'
  },
  {
    id: 2357,
    name: 'Standing Bicep Curl on Cable Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/obFKEQEAink'
  },
  {
    id: 2358,
    name: 'Single Arm Seated Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/mstC6eav7YY'
  },
  {
    id: 2359,
    name: 'Stairmaster',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Stairmaster',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZcI3KaYykOo'
  },
  {
    id: 2360,
    name: 'Smith Machine Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Nyk_I5-_tIA'
  },
  {
    id: 2361,
    name: 'Single Leg Prone Hamstring Curls',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/2H2owTMT2To'
  },
  {
    id: 2362,
    name: 'Single Leg   Leg Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/0Fq2Y6HHEm0'
  },
  {
    id: 2363,
    name: 'Single Arm Lateral Raise on Cable Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/hrHdBATGcS8'
  },
  {
    id: 2364,
    name: 'Seated Shoulder Press Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/q4vXt6ozfJc'
  },
  {
    id: 2365,
    name: 'Seated Knee Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GV-l6fjYHOc'
  },
  {
    id: 2366,
    name: 'Seated Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/C_va5FQdyI8'
  },
  {
    id: 2367,
    name: 'Single Leg Seated Leg Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5j5nnaRpslk'
  },
  {
    id: 2368,
    name: 'Seated Lat Pull Down Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/nfFBucEfwtI'
  },
  {
    id: 2369,
    name: 'Seated Row Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/3wcaZqSfP0A'
  },
  {
    id: 2370,
    name: 'Seated Tricep Extension Machine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/0IYKZKNqlmU'
  },
  {
    id: 2371,
    name: 'Front Foot Elevated Lunge with Knee Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/yB1zlnnQ_ig'
  },
  {
    id: 2372,
    name: 'Negative Vertical Body Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/g-l_ibujaWw'
  },
  {
    id: 2373,
    name: 'Glute Medius Ladder Activation',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bRMRcBgH1Kk'
  },
  {
    id: 2374,
    name: 'Two Way Touch Adductor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SjHniM-Dh54'
  },
  {
    id: 2375,
    name: 'Two Way Touch Front and Back',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5y6XcM50xJA'
  },
  {
    id: 2376,
    name: 'Tick Tocks',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/bBL_ttnc3SI'
  },
  {
    id: 2377,
    name: 'Stability Ball Birddog',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Stability Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OXzW2GvB8AE'
  },
  {
    id: 2378,
    name: 'Two Way Touch Abductor',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GjEYPQwS35M'
  },
  {
    id: 2379,
    name: 'Turkish Get-Up with Holds and Presses',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/5CyzlZYWR3g'
  },
  {
    id: 2380,
    name: 'Ski Jumps',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/Hr9M_-sw6n8'
  },
  {
    id: 2381,
    name: 'Reverse Sled Drag',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zLrtxym3U_s'
  },
  {
    id: 2382,
    name: 'Ring Face Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/rIpWyPV45PU'
  },
  {
    id: 2383,
    name: 'Push-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/CzAbOH8F9nM'
  },
  {
    id: 2384,
    name: 'Ring Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/1kqvd7yyIvs'
  },
  {
    id: 2385,
    name: 'Front Foot Elevated Goblet Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/tszjHbnJnZw'
  },
  {
    id: 2386,
    name: 'Front Foot Elevated Dumbbell Reverse Lunge with Knee Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/daXhAvePQpQ'
  },
  {
    id: 2387,
    name: 'Front Foot Elevated Dumbbell Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/XG_aQNIeqUs'
  },
  {
    id: 2388,
    name: 'Front Foot Elevated Goblet Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/4yFiKTCJk6s'
  },
  {
    id: 2389,
    name: 'Barefoot Standing Pike: Toe to Heel',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/n47Rd5VDDQA'
  },
  {
    id: 2390,
    name: 'Back Lever',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YVCZuHez84Y'
  },
  {
    id: 2391,
    name: 'Standing Barbell Shoulder Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Q2NUbu17ZEQ'
  },
  {
    id: 2392,
    name: 'Reverse Leg Lift on Stall Bars',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/m_LVEc_TACk'
  },
  {
    id: 2393,
    name: 'Front Rack Sandbag Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/iqgZiRaVeZg'
  },
  {
    id: 2394,
    name: 'Heaving Snatch Balance',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/OJwmQzbmkUA'
  },
  {
    id: 2395,
    name: 'Walking Barbell Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/F-8M9nCsdjs'
  },
  {
    id: 2396,
    name: 'Kipping Toe to Ring',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/r6KiszEQP_g'
  },
  {
    id: 2397,
    name: 'Modified Deck Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/VaZQU9K_h0U'
  },
  {
    id: 2398,
    name: 'Single Arm Incline Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/pa_mtuyrtNE'
  },
  {
    id: 2399,
    name: 'Hanging 1/2 Leg Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/jknZagJmtwU'
  },
  {
    id: 2400,
    name: 'Single Arm Landmine Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/YbHpJbCV1G0'
  },
  {
    id: 2401,
    name: 'Single Arm Batwing Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JGKeZX6iY5o'
  },
  {
    id: 2402,
    name: 'Hanging 1/2 Leg Raise on Stall Bars',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/I4Qe3GOOCDE'
  },
  {
    id: 2403,
    name: 'Pinch Grip Single Arm Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/e4DX9J91rLc'
  },
  {
    id: 2404,
    name: 'Dumbbell Sumo Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/vK2b4IMom0E'
  },
  {
    id: 2405,
    name: 'Behind the Neck Strict Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/kkSjGKv4WUs'
  },
  {
    id: 2406,
    name: 'Banded Running In Place',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/i5j31a5KzPg'
  },
  {
    id: 2407,
    name: 'Standing Bicep Curl with E-Z Curl Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/VyXnunscKuk'
  },
  {
    id: 2408,
    name: 'D-Ball Over Shoulder',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/VBAUXbXnl3k'
  },
  {
    id: 2409,
    name: 'Box Walk Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/H1NNppo5E4w'
  },
  {
    id: 2410,
    name: 'Strict Wall Facing Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Dd4uflLAlw0'
  },
  {
    id: 2411,
    name: 'Barbell Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/8tNuP-1aQgg'
  },
  {
    id: 2412,
    name: 'Deficit Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/8JrOCpcMDvo'
  },
  {
    id: 2413,
    name: 'Crossover Victory',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/rkHapIZ9KMc'
  },
  {
    id: 2414,
    name: 'Crossover Incline Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Ku2sjsVL34A'
  },
  {
    id: 2415,
    name: 'Crossover 90/90',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/f0zPB7zJA1g'
  },
  {
    id: 2416,
    name: 'Crossover Pulldown',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Fe8Wuy9QQfI'
  },
  {
    id: 2417,
    name: 'Crossover Reverse Fly',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An isolation exercise targeting the chest or shoulder muscles.',
    videoUrl: 'https://www.youtube.com/embed/GNJYBxhsuNU'
  },
  {
    id: 2418,
    name: 'Crossover Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/HHLK5Hlg9h8'
  },
  {
    id: 2419,
    name: 'Forward Punch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Orhn7rRvUdM'
  },
  {
    id: 2420,
    name: 'Lateral Punch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9qy_M7J6s08'
  },
  {
    id: 2421,
    name: 'Cuff Isolation',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/h4nCPeU6r5Q'
  },
  {
    id: 2422,
    name: 'Field Goals',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jcaYt2oAvRA'
  },
  {
    id: 2423,
    name: 'T\'s on Box',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jbakKPOW0Rw'
  },
  {
    id: 2424,
    name: 'Modified Push-Up Wide Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/BVLTQRqmN7Q'
  },
  {
    id: 2425,
    name: 'Side Plank Reverse Fly',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/dGRih4r6NwQ'
  },
  {
    id: 2426,
    name: 'Overhead Yoke Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zyOCp2_O4jA'
  },
  {
    id: 2427,
    name: 'Overhead Yoke Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/o7Vhf1UOkik'
  },
  {
    id: 2428,
    name: 'Hang Muscle Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/hco5rsRVUVs'
  },
  {
    id: 2429,
    name: 'Supinated Glute Contraction',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/c19EFO3dHzk'
  },
  {
    id: 2430,
    name: 'Pronated Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/Iap2bSeJUHU'
  },
  {
    id: 2431,
    name: 'Supinated Barbell Bent Over Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/8ajG0DGCoLU'
  },
  {
    id: 2432,
    name: 'Single Leg Glute-Ham Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nHC1GHxAOBE'
  },
  {
    id: 2433,
    name: 'Star Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/WL6N6U3UNfc'
  },
  {
    id: 2434,
    name: 'Stone to Shoulder',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LakxKWapzm4'
  },
  {
    id: 2435,
    name: 'Dead Hang to Invert on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/KNwLNo4FW4E'
  },
  {
    id: 2436,
    name: 'Prone T',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5Om7p4AKx6Y'
  },
  {
    id: 2437,
    name: 'Windshield Wipers',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ug-ZGV0v-Q0'
  },
  {
    id: 2438,
    name: 'Dumbbell Tate Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Dy1LCsOlUlA'
  },
  {
    id: 2439,
    name: 'Curtis P',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CJk6iyO--1k'
  },
  {
    id: 2440,
    name: 'Front Leaning Rest Against Wall',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lNP3tydJ100'
  },
  {
    id: 2441,
    name: 'Goblet Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/iOlQJldSUDQ'
  },
  {
    id: 2442,
    name: 'Man Maker',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fz2BvoqP3iE'
  },
  {
    id: 2443,
    name: 'Prone Single Leg Reverse Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0Y3pRZ9Jh_k'
  },
  {
    id: 2444,
    name: 'Cobra Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/MzqRbCCbWl4'
  },
  {
    id: 2445,
    name: 'Sandbag Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/IFNDR6D0Nzk'
  },
  {
    id: 2446,
    name: 'Sandbag Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/GL96zYVsS5A'
  },
  {
    id: 2447,
    name: 'Single Arm Sled Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/AYYTOjhOOTk'
  },
  {
    id: 2448,
    name: 'Punter Kick',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wvZ4W5kR_B0'
  },
  {
    id: 2449,
    name: 'Single Arm Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/bKQsPlWZu3w'
  },
  {
    id: 2450,
    name: 'Weighted Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1uOOhJaG--g'
  },
  {
    id: 2451,
    name: 'Single Arm Kettlebell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/1-GAorjRlxg'
  },
  {
    id: 2452,
    name: 'Supinated Ring Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/yX_jmmRaigY'
  },
  {
    id: 2453,
    name: 'False Grip Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/gpNkZWG_gFo'
  },
  {
    id: 2454,
    name: 'Hang Muscle Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/KZ7DjW5wPR8'
  },
  {
    id: 2455,
    name: 'Barbell Cuban Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Barbell',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/iBx0-JkFK1o'
  },
  {
    id: 2456,
    name: 'See-Saw Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Vn21SBrAuVc'
  },
  {
    id: 2457,
    name: 'Ring Row Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/yWay8AbSAWo'
  },
  {
    id: 2458,
    name: 'Weighted Pistol',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/h1RBtiAYYBA'
  },
  {
    id: 2459,
    name: 'Curtsy Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/DYcpHhwQrhg'
  },
  {
    id: 2460,
    name: 'Prone Thoracic Band Pull',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MUW-2pd-eXc'
  },
  {
    id: 2461,
    name: 'Plank Walkout',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/iBWmnXM3w5I'
  },
  {
    id: 2462,
    name: 'Zercher Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6vccFiQ0UjA'
  },
  {
    id: 2463,
    name: 'Cossack Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/sFnwqhbOMu0'
  },
  {
    id: 2464,
    name: 'Overhead Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/L8AzeXTBjAg'
  },
  {
    id: 2465,
    name: 'Single Arm Overhead Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/f6O1PYm5zdM'
  },
  {
    id: 2466,
    name: 'Sandbag Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/AtbmEGX7SFI'
  },
  {
    id: 2467,
    name: 'Landmine Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/uD4GuRe-bOs'
  },
  {
    id: 2468,
    name: 'Sandbag Zercher Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DT4ntDM9YAU'
  },
  {
    id: 2469,
    name: 'Sandbag Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BARVS0cXbhg'
  },
  {
    id: 2470,
    name: 'Theraband Lateral Walks',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/np9J_psgbgs'
  },
  {
    id: 2471,
    name: 'Single Leg Suitcase Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/h8KZJKXm6xA'
  },
  {
    id: 2472,
    name: 'Dual Kettlebell Overhead Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/E7Q1Q7esSTA'
  },
  {
    id: 2473,
    name: 'Paralette Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/kJeTiKXZbZ4'
  },
  {
    id: 2474,
    name: 'Skull Crusher',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/k8KH84637Rw'
  },
  {
    id: 2475,
    name: 'Kipping Parallette Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Kuu15MtF_00'
  },
  {
    id: 2476,
    name: 'One Quarter Kettlebell Turkish Get-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-MB4UStTK98'
  },
  {
    id: 2477,
    name: 'Dumbbell Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lza02GzUC9g'
  },
  {
    id: 2478,
    name: 'Dual Kettlebell Rack Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jkpWZwxSlUE'
  },
  {
    id: 2479,
    name: 'Weighted Strict Pronated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/_U5vqJocrbA'
  },
  {
    id: 2480,
    name: 'Pronated Chest to Bar Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2062NFaeDi8'
  },
  {
    id: 2481,
    name: 'Jane Fonda Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/w9gixz8jqKI'
  },
  {
    id: 2482,
    name: 'Side Plank Clamshell',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/W0bi_6eUf3s'
  },
  {
    id: 2483,
    name: 'Flutter Kick',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/J_9H0KPTz90'
  },
  {
    id: 2484,
    name: 'Dumbbell Reverse Lunge (Not Walking)',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/GtFOR8qPvyc'
  },
  {
    id: 2485,
    name: 'Hanging Leg Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/cqN6dmNSDcg'
  },
  {
    id: 2486,
    name: 'Hanging Knee Raise',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/UiSwzt5qSbE'
  },
  {
    id: 2487,
    name: 'Lateral Box Walk Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/HtQ2VK0Lea4'
  },
  {
    id: 2488,
    name: 'Behind the Neck Pull-Up Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/0iGUGhIYUk0'
  },
  {
    id: 2489,
    name: 'Double Single Double',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zraOViDdZ2M'
  },
  {
    id: 2490,
    name: 'Incline Dumbbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/nvqJUDs9EXQ'
  },
  {
    id: 2491,
    name: 'Banded Bar Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/QuvrFa-Hd-c'
  },
  {
    id: 2492,
    name: 'Incline Barbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/4tPP-4K5kMQ'
  },
  {
    id: 2493,
    name: 'Wall Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DggraO72_hU'
  },
  {
    id: 2494,
    name: 'Diamond Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/6K5n0Lja4Uc'
  },
  {
    id: 2495,
    name: 'Kettlebell On Knee Dorsiflexion',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5nYrRx0KSSk'
  },
  {
    id: 2496,
    name: 'Sled Push',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-eNCsR2FCW4'
  },
  {
    id: 2497,
    name: 'Single Arm Bench With Hip Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/ybR_Dm9P-sU'
  },
  {
    id: 2498,
    name: 'Weighted Russian Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/tjuBbhSKaDo'
  },
  {
    id: 2499,
    name: 'Forearm Headstand Against Wall',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/WGeUlZ37RC0'
  },
  {
    id: 2500,
    name: 'Rear Foot Elevated Safety Bar Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/OPzqdjOcgoU'
  },
  {
    id: 2501,
    name: 'Dual Kettlebell Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/MY8Q82YjgD8'
  },
  {
    id: 2502,
    name: 'Weighted Plank',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/3T_ezzspFT4'
  },
  {
    id: 2503,
    name: 'Bench Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/_mby7bboEUw'
  },
  {
    id: 2504,
    name: 'Supinated Narrow Grip Hang From Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/XheGJkKETJ8'
  },
  {
    id: 2505,
    name: 'Pronated Narrow Grip Hang From Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/6GMnnsMw7ig'
  },
  {
    id: 2506,
    name: 'Front Leaning Rest on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PfM1MfBpJVM'
  },
  {
    id: 2507,
    name: 'Chin Over Ring Hold with False Grip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/wtPqNRhnfl8'
  },
  {
    id: 2508,
    name: 'Chest Supported Dumbbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/nRWvZxbMUgE'
  },
  {
    id: 2509,
    name: 'Vertical Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/UH-3LUWzBpU'
  },
  {
    id: 2510,
    name: 'Barbell Walk Out',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2SKhzVLT2Ws'
  },
  {
    id: 2511,
    name: 'Front Rack Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/wsLvwBug9IM'
  },
  {
    id: 2512,
    name: 'Dumbbell Reverse Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/spMBVDPRfbI'
  },
  {
    id: 2513,
    name: 'Multi Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/YM89FX7s3JU'
  },
  {
    id: 2514,
    name: 'No Push-Up Burpee to Plate',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/W5RNhbIoxeI'
  },
  {
    id: 2515,
    name: 'Burpee to Plate',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/74X0zlxFY0Q'
  },
  {
    id: 2516,
    name: 'Zercher Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6QgWkA9DGmc'
  },
  {
    id: 2517,
    name: 'Feet Elevated in Rings Front Leaning Rest',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XYRFp6NKiEo'
  },
  {
    id: 2518,
    name: 'Supinated Chest to Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/X79fhGl9bn0'
  },
  {
    id: 2519,
    name: 'Snatch Grip Rows',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/LEY-lRq5pqc'
  },
  {
    id: 2520,
    name: 'Pronated Chest to Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/tOI_nKqOyvY'
  },
  {
    id: 2521,
    name: 'Hand Release Push-Up',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Bodyweight',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/ScplcTOzCNg'
  },
  {
    id: 2522,
    name: 'Jump Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/AWJ_whP4Rhc'
  },
  {
    id: 2523,
    name: 'No Push-Up Burpee to 6" Target',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lHovot52UVw'
  },
  {
    id: 2524,
    name: 'Bottoms Up Overhead Dual Kettlebell Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xFJao6Eksps'
  },
  {
    id: 2525,
    name: 'Oblique Hold with Pulse Carry',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YLtcd-k1w-Q'
  },
  {
    id: 2526,
    name: 'Contralateral Core Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/j4fl0ODbh6o'
  },
  {
    id: 2527,
    name: 'Bottoms Up Single Arm Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/R9UiEWwCqXw'
  },
  {
    id: 2528,
    name: 'Bottoms Up Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/PylGJW76yfo'
  },
  {
    id: 2529,
    name: 'Jump Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/1-Mum4hyIJ0'
  },
  {
    id: 2530,
    name: '1 and a Quarter Air Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/obYzw332f5s'
  },
  {
    id: 2531,
    name: 'One and a Quarter Barbell Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/f6tRgCHjpKI'
  },
  {
    id: 2532,
    name: 'One and a Quarter Barbell Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/MxLzVnlZVY0'
  },
  {
    id: 2533,
    name: 'One and a Quarter Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/9UvEIWW7RNw'
  },
  {
    id: 2534,
    name: 'Deck Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/PDB7q_gmm7Q'
  },
  {
    id: 2535,
    name: 'One and a Quarter Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/A5emLMlaILY'
  },
  {
    id: 2536,
    name: 'Medicine Ball Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/hh4OuvESwSo'
  },
  {
    id: 2537,
    name: 'Tire Flip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZVYfrKju-Ik'
  },
  {
    id: 2538,
    name: 'Jefferson Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/AB7rjJCDcc4'
  },
  {
    id: 2539,
    name: 'Jumping Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/8Vz_g1G2vo8'
  },
  {
    id: 2540,
    name: 'Teeter-Totter',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/giJk9OLtlpg'
  },
  {
    id: 2541,
    name: 'Half Kneeling Band Lift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/HM9r719Owb8'
  },
  {
    id: 2542,
    name: '3 Position Front Squat Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0jn3Vj3FoBA'
  },
  {
    id: 2543,
    name: 'Deficit Handstand Push-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/lFtv8KjisX4'
  },
  {
    id: 2544,
    name: 'JM Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/a8A08H4j7vc'
  },
  {
    id: 2545,
    name: 'Single Arm Bottoms Up Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YaKpfN71ACI'
  },
  {
    id: 2546,
    name: 'Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/FFZEHk0yKVo'
  },
  {
    id: 2547,
    name: 'Single-Arm Hammer Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/dDGh2BrvoRI'
  },
  {
    id: 2548,
    name: 'Hanging Knee to Elbow',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/cCNRk8BLoN4'
  },
  {
    id: 2549,
    name: 'Single Arm Bicep Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/ZXwoJ7GzqEE'
  },
  {
    id: 2550,
    name: 'Single Arm Reverse Dumbbell Curl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A curl variation targeting the biceps and forearm muscles.',
    videoUrl: 'https://www.youtube.com/embed/AabEqbB-41E'
  },
  {
    id: 2551,
    name: 'Supine Pallof Belly Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/zXZrUa1abJQ'
  },
  {
    id: 2552,
    name: 'Single Arm Kettlebell Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_i73jABXXtk'
  },
  {
    id: 2553,
    name: 'Kipping Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/GH2qJr6k2Ak'
  },
  {
    id: 2554,
    name: 'Tall Kneeling To Standing Overhead Dumbbell Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/57L_GO4ps4k'
  },
  {
    id: 2555,
    name: 'Kipping Ring Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/0n1hZ0SsN4U'
  },
  {
    id: 2556,
    name: 'Contralateral Tall Kneeling to Standing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5E3ylmfTWjo'
  },
  {
    id: 2557,
    name: 'Snatch Grip Pendlay Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/OzJ1BhbwnGg'
  },
  {
    id: 2558,
    name: 'Front Rack Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Gjq6a8oGbRk'
  },
  {
    id: 2559,
    name: 'Subscapularis Pull-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/GJ2pqbawf5Y'
  },
  {
    id: 2560,
    name: 'Burpee to Target',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/FToMxgFU3v8'
  },
  {
    id: 2561,
    name: 'Headstand Straddle Reverse Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/AI92QDwGO4g'
  },
  {
    id: 2562,
    name: 'Skiers',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9A8EEfSzrNs'
  },
  {
    id: 2563,
    name: 'Headstand Straddle Reverse Leg Lift Against Wall',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7sqOKbnBRbU'
  },
  {
    id: 2564,
    name: 'Dumbbell Cuban Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/26oaoUPHWlo'
  },
  {
    id: 2565,
    name: 'Behind the Neck Split Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/V6wncvPoo-I'
  },
  {
    id: 2566,
    name: 'Modified Push-Up Shoulder Flexion',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/QsdtWlRz104'
  },
  {
    id: 2567,
    name: 'Single Arm Rear-Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/e3LUjppiy84'
  },
  {
    id: 2568,
    name: 'Split Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/boYdk3Rfoi0'
  },
  {
    id: 2569,
    name: 'Subscapularis Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/gFcNeNhu0VM'
  },
  {
    id: 2570,
    name: 'Dumbbell Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/mpg_qmBdmxc'
  },
  {
    id: 2571,
    name: 'Pressing Snatch Balance',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/kUZEKy6vQ5M'
  },
  {
    id: 2572,
    name: 'Standing Dumbbell External Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Dumbbell',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/jocoGEpV3OY'
  },
  {
    id: 2573,
    name: 'Elbow Bridge Rock',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/z4BQYYYbFpk'
  },
  {
    id: 2574,
    name: 'Box Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/xubJ5Jo-v6E'
  },
  {
    id: 2575,
    name: 'Straddle Reverse Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/r5oP4Zt5uYA'
  },
  {
    id: 2576,
    name: 'Bretzel',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/qUSVi7qdwTw'
  },
  {
    id: 2577,
    name: 'Wrist Push-Up Against Wall',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0JUMGbK0FbQ'
  },
  {
    id: 2578,
    name: 'Wrist Push-Ups on Knees',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/IsUanzdFvHQ'
  },
  {
    id: 2579,
    name: 'Single Leg Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/FFyNcvirQXg'
  },
  {
    id: 2580,
    name: 'Theraband Goblet Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/BJA9JWhHScM'
  },
  {
    id: 2581,
    name: 'Bent Over Barbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/B4Zydi-lMnA'
  },
  {
    id: 2582,
    name: 'Glute Bridge Kettlebell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/AvrSSwSSPFI'
  },
  {
    id: 2583,
    name: 'First Knuckle Push-Up on Knees',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/87tsmoygYO4'
  },
  {
    id: 2584,
    name: 'Wrist Push-Up',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/-hcPcR16Sxg'
  },
  {
    id: 2585,
    name: 'First Knuckle Push-Up Against Wall',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/SxX2uyou2ek'
  },
  {
    id: 2586,
    name: 'Single Arm Kettlebell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/P_Etny2m79A'
  },
  {
    id: 2587,
    name: 'First Knuckle Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/l19_fBuNBYw'
  },
  {
    id: 2588,
    name: 'Handstand Push-Up Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/yVNHVnhyjF0'
  },
  {
    id: 2589,
    name: 'Half Kneeling Single Arm Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/qTmyA4iVYuI'
  },
  {
    id: 2590,
    name: 'Jerk Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/pHlZlBiFEeY'
  },
  {
    id: 2591,
    name: 'Weighted Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/R8x3Q_pcbtg'
  },
  {
    id: 2592,
    name: 'Supinated Passive Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/PP-pktbKDjI'
  },
  {
    id: 2593,
    name: 'Box Shoulder Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A stretching exercise targeting the shoulder for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/iuvOSKxm50Y'
  },
  {
    id: 2594,
    name: 'Z-Dislocates',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KcEQ2-AxmQ0'
  },
  {
    id: 2595,
    name: 'Single Arm Front Rack Kettlebell Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/JrxSbtxH1VA'
  },
  {
    id: 2596,
    name: 'High Knees',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gh4OeFlkJp8'
  },
  {
    id: 2597,
    name: 'Box Jump Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/XmAVVkA0X58'
  },
  {
    id: 2598,
    name: 'Supine Leg-Lowering',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FUFMvLzDzOM'
  },
  {
    id: 2599,
    name: 'Single Leg L-Hang',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/BZfve_nsQMY'
  },
  {
    id: 2600,
    name: 'Goblet Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/9UL2dmLyrdI'
  },
  {
    id: 2601,
    name: 'Single Arm Overhead Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/2K2Xxuf95Kw'
  },
  {
    id: 2602,
    name: 'Single Arm Overhead Bottoms Up Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/UE1yvifpKzQ'
  },
  {
    id: 2603,
    name: 'Butt Kickers',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TMqkEDlSfzk'
  },
  {
    id: 2604,
    name: 'Weighted Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/11cDML5e7zw'
  },
  {
    id: 2605,
    name: 'Pause Air Squat Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0CLrqXr4zSw'
  },
  {
    id: 2606,
    name: 'Weighted Strict Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/lB0pjhTQ5tY'
  },
  {
    id: 2607,
    name: 'Walk',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RtKJe9mPCpI'
  },
  {
    id: 2608,
    name: 'Single Leg Elbow Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/rPtcawtvPX0'
  },
  {
    id: 2609,
    name: 'Chest to Bar Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/ptmw9iSoGYA'
  },
  {
    id: 2610,
    name: 'Weighted Reverse Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/vPtFZRG3vkA'
  },
  {
    id: 2611,
    name: 'Reverse Lunges',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/yloxXt44epk'
  },
  {
    id: 2612,
    name: 'Diagonal Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/0YeRLcR_YNU'
  },
  {
    id: 2613,
    name: 'Tall Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/6kJVRrqH-J0'
  },
  {
    id: 2614,
    name: 'Slowly Lower From Invert on Rings in Straddle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Aodc2mKGWuU'
  },
  {
    id: 2615,
    name: 'Jerk Balance',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/8ajbZnZ0gnU'
  },
  {
    id: 2616,
    name: 'Slowly Lower From Invert on Rings in Tuck',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DzdWI5xc3aY'
  },
  {
    id: 2617,
    name: 'Tall Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/DgyPskFqIt0'
  },
  {
    id: 2618,
    name: 'Glute Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/b6hV2AP6rkA'
  },
  {
    id: 2619,
    name: 'Dip Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/a0jgUkBQyK4'
  },
  {
    id: 2620,
    name: 'Overhead Poor Man\'s Leg Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YDxsXfgTxrs'
  },
  {
    id: 2621,
    name: 'Cambered Bar Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/XutB6_LwqBc'
  },
  {
    id: 2622,
    name: 'Bent Knee Calf Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the knee for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/X3GBFOw7cac'
  },
  {
    id: 2623,
    name: 'Single Unders',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/W2h0bSVav9Q'
  },
  {
    id: 2624,
    name: 'Chest to Ring Ring Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/V5zO39wyLJ0'
  },
  {
    id: 2625,
    name: 'Single Leg Hip Extension Moving',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SHnPCsgWnuc'
  },
  {
    id: 2626,
    name: 'Poor Man\'s Leg Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QSaM43NNFbM'
  },
  {
    id: 2627,
    name: 'Chest to Ring Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Me1RRNtBmGU'
  },
  {
    id: 2628,
    name: 'Twisting Arch-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/P1R8q6hPGQU'
  },
  {
    id: 2629,
    name: 'Slowly Lower From Invert on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/O-HbU4d_Xrk'
  },
  {
    id: 2630,
    name: 'Chest to Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/NlwOQ5gql5k'
  },
  {
    id: 2631,
    name: 'Cambered Bar Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Lj-fjetfopc'
  },
  {
    id: 2632,
    name: 'Reverse Hyper',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FEowmzhGAlY'
  },
  {
    id: 2633,
    name: 'Six Inches',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dKQPeU2_lf8'
  },
  {
    id: 2634,
    name: 'Hips to Ring',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/iSnVsFhRO-o'
  },
  {
    id: 2635,
    name: 'Front Leaning Rest on Top of Hand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/hws24DyoeEI'
  },
  {
    id: 2636,
    name: 'T\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jd6NC-rJ4rA'
  },
  {
    id: 2637,
    name: 'Rear Foot Elevated Frankenstein Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/iqpqVUax3cE'
  },
  {
    id: 2638,
    name: 'Dual Russian Kettlebell Swing',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/r7MHn0qFCVU'
  },
  {
    id: 2639,
    name: 'Straddle Leg Lift Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kiXsufeahqo'
  },
  {
    id: 2640,
    name: 'Frankenstein Rear Foot Elevated Axle Bar Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ydzif1Nildg'
  },
  {
    id: 2641,
    name: 'Bar Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/ubFc5i5oS70'
  },
  {
    id: 2642,
    name: 'Single Under Jumps',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/pVc7iIhu8ZY'
  },
  {
    id: 2643,
    name: 'Double Unders',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/21wLeswUKWw'
  },
  {
    id: 2644,
    name: 'Dual Dumbbell Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/wh5l3pRDMYI'
  },
  {
    id: 2645,
    name: 'Starfish',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/nSUBKwg7XIs'
  },
  {
    id: 2646,
    name: 'Straddle Hollow Body Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZZrpHcIoSKA'
  },
  {
    id: 2647,
    name: 'Straddle Arrested Superman',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/UtRSnxFFxqg'
  },
  {
    id: 2648,
    name: 'Tuck Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/XWIXu6EJzd0'
  },
  {
    id: 2649,
    name: 'Front Rack Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/C_dGGHioq1U'
  },
  {
    id: 2650,
    name: 'Headstand Reverse Leg Lift Against Wall',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Iv1lTPlFEEw'
  },
  {
    id: 2651,
    name: 'Plank Walk-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/ALQ5fdMEqzs'
  },
  {
    id: 2652,
    name: 'Headstand Reverse Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9QGQilcRFXw'
  },
  {
    id: 2653,
    name: 'Straight Leg Calf Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the calf for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/uqnfxg_TTo4'
  },
  {
    id: 2654,
    name: 'L-Hang to L-Straddle',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/cO1cy3uTOXk'
  },
  {
    id: 2655,
    name: 'Straddle Table Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/8vx7ap34SZU'
  },
  {
    id: 2656,
    name: 'L-Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Um1FpofqVhs'
  },
  {
    id: 2657,
    name: 'Jane Fonda',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/J32K2PjekrQ'
  },
  {
    id: 2658,
    name: 'Bent Over Dual Kettlebell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/5j_dP8nT54w'
  },
  {
    id: 2659,
    name: 'L-Hold Straddle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4L3Ma2X_-mY'
  },
  {
    id: 2660,
    name: 'Double Under Jumps',
    source: 'central-athlete',
    category: 'Conditioning',
    equipment: 'Jump Rope',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/LWS_JBCrh-A'
  },
  {
    id: 2661,
    name: 'Deadlift to Knee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/zFSpP7BsBaY'
  },
  {
    id: 2662,
    name: 'Externally Rotated Front Leaning Rest',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-s-L1aRGeZI'
  },
  {
    id: 2663,
    name: 'Prone Plate Drag',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Plate',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/cw6j2o113q8'
  },
  {
    id: 2664,
    name: 'Straddle Hollow Rock',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SR8oiYyXjEI'
  },
  {
    id: 2665,
    name: 'Pull-Up Head to Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/CKrtuteHHp8'
  },
  {
    id: 2666,
    name: 'Knee Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/TBpk09QuVN8'
  },
  {
    id: 2667,
    name: 'Supine Single Leg Hamstring Mobilization',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PaqH3eV3xkk'
  },
  {
    id: 2668,
    name: 'Prone Cobra',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/umioU9cOLP0'
  },
  {
    id: 2669,
    name: 'Weighted Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/qEmCuapE3M0'
  },
  {
    id: 2670,
    name: 'Arch Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2a4Bdo-lpIM'
  },
  {
    id: 2671,
    name: 'Glute Ham Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KeHz_pcv84k'
  },
  {
    id: 2672,
    name: 'Straddle Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/CvPXT_4AglQ'
  },
  {
    id: 2673,
    name: 'Jerk Grip Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/522v--FLypQ'
  },
  {
    id: 2674,
    name: 'Supinated Narrow Grip Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/dN5DqMhO18s'
  },
  {
    id: 2675,
    name: 'Hollow Rock',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZcuL8x1wgko'
  },
  {
    id: 2676,
    name: 'Foam Roller Plantar Fascia',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/BZEgqilQ044'
  },
  {
    id: 2677,
    name: 'Elbow Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/7EmlxIuz2MY'
  },
  {
    id: 2678,
    name: 'Bear Crawl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/63IBkFSR6PY'
  },
  {
    id: 2679,
    name: 'Instep Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/1-XNmHSc9VE'
  },
  {
    id: 2680,
    name: 'Seated Behind the Neck Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/s4aFRNUNVCo'
  },
  {
    id: 2681,
    name: 'False Grip Passive Hang on Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/DjOeQOpPMKo'
  },
  {
    id: 2682,
    name: 'Hurdler Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/6LYSIXjuXi8'
  },
  {
    id: 2683,
    name: 'Single Arm Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/r40QSRVPspI'
  },
  {
    id: 2684,
    name: 'Walking Table',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FiB_5l3LOxQ'
  },
  {
    id: 2685,
    name: 'Strict Dips',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/JxEhqdVSEm8'
  },
  {
    id: 2686,
    name: 'Supine Straddle Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/zYgFwhquNuA'
  },
  {
    id: 2687,
    name: 'Contralateral Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/so3M4VIYILE'
  },
  {
    id: 2688,
    name: 'Dumbbell Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/JRbBMTBDV3g'
  },
  {
    id: 2689,
    name: 'Supinated Behind the Back Lateral Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9Zj81ZF_qZ0'
  },
  {
    id: 2690,
    name: 'Standing Hollow Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/1mb6izZ87qI'
  },
  {
    id: 2691,
    name: 'Snatch Grip Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/uhf93YpV6mA'
  },
  {
    id: 2692,
    name: 'Behind the Neck Step Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/qbn0cFgtJZY'
  },
  {
    id: 2693,
    name: 'Front Rack Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/g1g4EOWeLwU'
  },
  {
    id: 2694,
    name: 'Single Arm Front Rack Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/NI7d_hOCOv4'
  },
  {
    id: 2695,
    name: 'Dual Dumbbell Prone Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/1Ao4iwzigjo'
  },
  {
    id: 2696,
    name: 'Trap Bar Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/lcaWjAw75vw'
  },
  {
    id: 2697,
    name: 'Reverse Sled Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sled',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NgrwToEY48g'
  },
  {
    id: 2698,
    name: 'Sumo Deadlift High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/96LYzIm8Pz0'
  },
  {
    id: 2699,
    name: 'Halting Clean Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/fFiIbz3qgBU'
  },
  {
    id: 2700,
    name: 'Single Arm Dumbbell Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/uht_H0Y7C34'
  },
  {
    id: 2701,
    name: 'Weighted Strict Supinated Chest to Bar Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/gj7Vm0pnCkk'
  },
  {
    id: 2702,
    name: 'Weighted Strict Pronated Chest to Bar Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/_cVMV-sPRB8'
  },
  {
    id: 2703,
    name: 'Segmented Snatch Grip Deadlift - 3 Pauses',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/DvorXFZjLjw'
  },
  {
    id: 2704,
    name: 'Halting Snatch Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/8jE5LCmHiNY'
  },
  {
    id: 2705,
    name: 'Segmented Clean Grip Deadlift - 3 Pauses',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/-BkbMvf8PD8'
  },
  {
    id: 2706,
    name: 'Scapular Pull-Ups',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/m8iXV5vJe4E'
  },
  {
    id: 2707,
    name: 'Seated Single Leg Hip Flexes',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kc02HdhpnN8'
  },
  {
    id: 2708,
    name: 'Front Rack Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/PXe6NnmiUQg'
  },
  {
    id: 2709,
    name: 'Single Leg GHD Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/j6sQlDcEBuo'
  },
  {
    id: 2710,
    name: 'Behind the Neck Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/yllmAR-GexI'
  },
  {
    id: 2711,
    name: 'GHD Side Crunch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sI6tYl12mKY'
  },
  {
    id: 2712,
    name: 'Dumbbell Elbowing Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/efJIssqJ_VE'
  },
  {
    id: 2713,
    name: 'Behind the Neck Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TJBPypP1rW0'
  },
  {
    id: 2714,
    name: 'Single Arm Dumbbell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/2mFB6Jv3rWQ'
  },
  {
    id: 2715,
    name: 'Wall Slide',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/y2hFQEaXUck'
  },
  {
    id: 2716,
    name: 'MedBall Cleans',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/J29wQl7jShM'
  },
  {
    id: 2717,
    name: 'Wall Ball',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Medicine Ball',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Z0FEpeCyFJs'
  },
  {
    id: 2718,
    name: 'Single Arm Rope Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/UxnHYzrc4gc'
  },
  {
    id: 2719,
    name: 'Supine Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Q0Fbgsjhiwc'
  },
  {
    id: 2720,
    name: 'Sorenson',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MOxTs_zgaUk'
  },
  {
    id: 2721,
    name: 'Contraption Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/0Ey5fFT4UO4'
  },
  {
    id: 2722,
    name: 'Single Arm Active Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/sFXVGvbnZjw'
  },
  {
    id: 2723,
    name: 'Single Arm Passive Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/YTqL_YBmxKg'
  },
  {
    id: 2724,
    name: 'Muscle Clean From Hip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/RhWMX1s8qtg'
  },
  {
    id: 2725,
    name: 'Legless Rope Climb',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/4OzbYX3iy54'
  },
  {
    id: 2726,
    name: 'Box Shoulder Stretch Against Wall',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Box',
    description: 'A stretching exercise targeting the shoulder for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/0peYbCDrP7E'
  },
  {
    id: 2727,
    name: 'Single Dumbbell Seated Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/KnGdVtHPFK8'
  },
  {
    id: 2728,
    name: 'Strict Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/721soPhMhs8'
  },
  {
    id: 2729,
    name: 'Dual Dumbbell Seated Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/C6NaHhnQavs'
  },
  {
    id: 2730,
    name: 'Muscle-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An advanced gymnastic movement combining a pull-up with a dip transition.',
    videoUrl: 'https://www.youtube.com/embed/21mAbr_o1p8'
  },
  {
    id: 2731,
    name: 'Ring Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/i8tpN3KPXLE'
  },
  {
    id: 2732,
    name: 'Staircase Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dLkph3RnKtM'
  },
  {
    id: 2733,
    name: 'Toes to Bar',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/TqvyzFu7B9Q'
  },
  {
    id: 2734,
    name: 'Beat Swings on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OEbTnKKff6Q'
  },
  {
    id: 2735,
    name: 'Toes Through Rings',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2RiAOCtrYmQ'
  },
  {
    id: 2736,
    name: 'Straddle Leg Lift',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sbKOvOOnc4s'
  },
  {
    id: 2737,
    name: 'Deficit Push-Ups',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/nLnrNuQFlao'
  },
  {
    id: 2738,
    name: 'Standing Hip Circle',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gTnWCdgiAOA'
  },
  {
    id: 2739,
    name: 'Tall Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/F9-fTnG7wh8'
  },
  {
    id: 2740,
    name: 'Straddle Hip Circle',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/87pb7mV7DkY'
  },
  {
    id: 2741,
    name: 'Archer Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/wAdyK_lAfPo'
  },
  {
    id: 2742,
    name: 'Archer Ring Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/g62uFt0ZW20'
  },
  {
    id: 2743,
    name: 'Pancake Overhead Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YFb_kAh9s3U'
  },
  {
    id: 2744,
    name: 'Split Presses',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/GRocI32_6vk'
  },
  {
    id: 2745,
    name: 'Switch Grip Hanging Routine',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/0t4XK8ZuXAs'
  },
  {
    id: 2746,
    name: 'Hanging Knee to Chest Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/rUQGHBrIjbA'
  },
  {
    id: 2747,
    name: 'Prone Thoracic Extension',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gmHS30StD5E'
  },
  {
    id: 2748,
    name: 'Toe to Bar Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Pull-up Bar',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/g7UdzJOlUhY'
  },
  {
    id: 2749,
    name: 'Side Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/EG0ikUlnds4'
  },
  {
    id: 2750,
    name: 'Prone Shoulder Flexion with Weighted Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wCDCIXTRHIg'
  },
  {
    id: 2751,
    name: 'Standing Straddle Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/vWw2ISphDP4'
  },
  {
    id: 2752,
    name: 'Table Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/dllWvp9NaGU'
  },
  {
    id: 2753,
    name: 'Drop Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/bfI1YepyW5U'
  },
  {
    id: 2754,
    name: 'Outside Inside Outside Back',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/YYmpttQY8dU'
  },
  {
    id: 2755,
    name: 'Supinated L-Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/uwabVEF5QEs'
  },
  {
    id: 2756,
    name: 'Pronated L Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/BKrJB5hLS2U'
  },
  {
    id: 2757,
    name: 'Ring Support',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/U_PF3XJEemE'
  },
  {
    id: 2758,
    name: 'L-Hang',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/rulWtpNeK6M'
  },
  {
    id: 2759,
    name: 'Tuck L-Sit on Parallettes',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Y27Jy1u4ZcY'
  },
  {
    id: 2760,
    name: 'Single Leg Parallette L-Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Parallettes',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZZ2YxGlmY8U'
  },
  {
    id: 2761,
    name: 'Strict Ring Dip',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'An upper body pressing exercise targeting the chest, shoulders, and triceps.',
    videoUrl: 'https://www.youtube.com/embed/4X9fFSTMDJ4'
  },
  {
    id: 2762,
    name: 'L-Sit on Floor',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/U4Fqdb4qv30'
  },
  {
    id: 2763,
    name: 'L-Sit on Rings',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Gb-O1Q6MLVw'
  },
  {
    id: 2764,
    name: 'Couch Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/aMrjDm2Kh9w'
  },
  {
    id: 2765,
    name: 'Lacrosse Ball in Hip External Rotator',
    source: 'central-athlete',
    category: 'Recovery',
    equipment: 'Lacrosse Ball',
    description: 'Soft tissue release work targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/FbNdwhWJTlk'
  },
  {
    id: 2766,
    name: 'False Grip Ring Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/EtLL4QtQRHI'
  },
  {
    id: 2767,
    name: 'Overhead Barbell Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/irjECoe8uRQ'
  },
  {
    id: 2768,
    name: 'Squat Clean Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/EnBY8jqGB9Y'
  },
  {
    id: 2769,
    name: 'Barbell Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6_6S0O-TebU'
  },
  {
    id: 2770,
    name: 'Single Arm Dumbbell Sumo Deadlift High Pull',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/qsiLH1QwTsM'
  },
  {
    id: 2771,
    name: 'Single Arm Dumbbell Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/DXX3O9zSUtk'
  },
  {
    id: 2772,
    name: 'Thoracic Bridge',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/PbnnNSNkDKo'
  },
  {
    id: 2773,
    name: 'Front Lever Tuck Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NQ-k1JtKt0Q'
  },
  {
    id: 2774,
    name: 'Front Lever Single Leg Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/8GnlREHC7C0'
  },
  {
    id: 2775,
    name: 'Front Lever Straddle Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ck8K-JS50Tk'
  },
  {
    id: 2776,
    name: 'Front Lever Negative',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/V0n_rHkmNX8'
  },
  {
    id: 2777,
    name: 'Pull Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/g4qeCUF_CNY'
  },
  {
    id: 2778,
    name: 'Snatch Grip Behind the Neck Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/zWkQ6PBY6dU'
  },
  {
    id: 2779,
    name: 'Front Rack Walkout',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zLN3112Bbp4'
  },
  {
    id: 2780,
    name: 'Front Rack Yoke Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Yoke',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/pns7n94-KOE'
  },
  {
    id: 2781,
    name: 'Dumbbell Power Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/_W2VUDurE7k'
  },
  {
    id: 2782,
    name: 'High Bar Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Uk8XQ8g5yW0'
  },
  {
    id: 2783,
    name: 'Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/UcZVX7Sc9YI'
  },
  {
    id: 2784,
    name: 'Seated Straddle Stretch',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/T8bM64l9s5U'
  },
  {
    id: 2785,
    name: 'Supinated Chin Over Vertical Plane Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/jBbgioY1O1A'
  },
  {
    id: 2786,
    name: 'Arching Active Pronated Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/zfTy72Hfwsk'
  },
  {
    id: 2787,
    name: 'Strict Pronated Behind The Neck Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/xDZ38NvRcBY'
  },
  {
    id: 2788,
    name: 'Swan Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/UTKj4ZE1eFY'
  },
  {
    id: 2789,
    name: 'Active Bar Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/HSQlHf_9dYk'
  },
  {
    id: 2790,
    name: 'Sumo Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/q4iR6UTFw-o'
  },
  {
    id: 2791,
    name: 'Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/_623N1DEJMA'
  },
  {
    id: 2792,
    name: 'Snatch Grip Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/O0FNejnnvvs'
  },
  {
    id: 2793,
    name: 'Strict Pronated Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/7ht8tmdAyqw'
  },
  {
    id: 2794,
    name: 'Straddle Low Bar Good Morning',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GUqoppYiWuU'
  },
  {
    id: 2795,
    name: 'Single Arm Kettlebell Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5gvOrYp97xc'
  },
  {
    id: 2796,
    name: 'Single Arm Dumbbell Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5599O8M_Azw'
  },
  {
    id: 2797,
    name: 'Kettlebell Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NTbLQhptrOQ'
  },
  {
    id: 2798,
    name: 'Commando Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/4cGZFQxpueA'
  },
  {
    id: 2799,
    name: 'Mixed Grip Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/HzANPEYSzYo'
  },
  {
    id: 2800,
    name: 'Towel Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/L9Yy9mArjfc'
  },
  {
    id: 2801,
    name: 'Low Bar Back Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/p_ql0Rwcy-Y'
  },
  {
    id: 2802,
    name: 'Clean and Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/G_oX3jGEr60'
  },
  {
    id: 2803,
    name: 'Single Leg Barbell Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/oipFqptnLC4'
  },
  {
    id: 2804,
    name: 'Pendlay Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/3DMRYKFPw54'
  },
  {
    id: 2805,
    name: 'Snatch Balance',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/iEPtqCYiBFM'
  },
  {
    id: 2806,
    name: 'Snatch Drop',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/KtoUxIhfyOc'
  },
  {
    id: 2807,
    name: 'Behind the Neck Snatch Grip Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/QxSxsGnw3Zc'
  },
  {
    id: 2808,
    name: 'Behind the Neck Snatch Grip Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/NIjvNTzfVNM'
  },
  {
    id: 2809,
    name: 'Dumbbell Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OXn2s-6vCz0'
  },
  {
    id: 2810,
    name: 'Barbell Thruster',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Pb_tUPpU-UA'
  },
  {
    id: 2811,
    name: 'Sprawl',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/a3B66hLGS3Q'
  },
  {
    id: 2812,
    name: 'No Push-Up Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/V_vQAYSFoNA'
  },
  {
    id: 2813,
    name: 'Burpee',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/NRMhb6imSoA'
  },
  {
    id: 2814,
    name: 'Close Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/3LZDS0vOzdk'
  },
  {
    id: 2815,
    name: 'Floor Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/_OnuJCypUkI'
  },
  {
    id: 2816,
    name: 'Barbell Supinated Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/kXLK2dmrazM'
  },
  {
    id: 2817,
    name: 'Dual Dumbbell Neutral Grip Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/5uTZdruNHjs'
  },
  {
    id: 2818,
    name: 'Barbell Bench Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/iBdF89xBAxA'
  },
  {
    id: 2819,
    name: 'Kettlebell Hang Power Snatch',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Kettlebell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/D9FQpUiLBMk'
  },
  {
    id: 2820,
    name: 'Frankenstein Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/q4B4HWbC4Rw'
  },
  {
    id: 2821,
    name: 'Power Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/_iEuEVmRCrc'
  },
  {
    id: 2822,
    name: 'Belt Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/ZEm3PbtuC5Q'
  },
  {
    id: 2823,
    name: 'Dumbbell Squat Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/F15-8Q4BFYc'
  },
  {
    id: 2824,
    name: 'Dumbbell Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/jCvtW-aBuQk'
  },
  {
    id: 2825,
    name: 'Dumbell Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/HOnv9PkxhMw'
  },
  {
    id: 2826,
    name: 'Dumbbell Hang Clean',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Dumbbell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/WTc8U9ypcp0'
  },
  {
    id: 2827,
    name: 'Isometric Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/US-ziYRVKp4'
  },
  {
    id: 2828,
    name: 'Single Arm Elbow on Knee External Rotation',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/R9J4hyxxqC0'
  },
  {
    id: 2829,
    name: 'Kipping Pull-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/hH1m5B90TBs'
  },
  {
    id: 2830,
    name: 'Butterfly Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/l8AFbHsA2xQ'
  },
  {
    id: 2831,
    name: 'Pronated Pull-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/0wScGKPC5fA'
  },
  {
    id: 2832,
    name: 'Jefferson Curl',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/kto7wVtmXac'
  },
  {
    id: 2833,
    name: 'False Grip Passive Hang on Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/6qgtI2XbmUc'
  },
  {
    id: 2834,
    name: 'Hollow Body Kip On Rings With False Grip',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/8DXte-ggzpE'
  },
  {
    id: 2835,
    name: 'Passive Hang',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/NGndVbG1ofI'
  },
  {
    id: 2836,
    name: 'Banded Hip Thrust',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/z8z0biVVaQY'
  },
  {
    id: 2837,
    name: 'Standing Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/6d0JoQvG-OU'
  },
  {
    id: 2838,
    name: 'Split Stance Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/FyOOKJhuktc'
  },
  {
    id: 2839,
    name: 'Kneeling Pallof Press',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/dFLw_zazfqc'
  },
  {
    id: 2840,
    name: 'Seated Scapular Wall Slides',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/spdjr7xbHXM'
  },
  {
    id: 2841,
    name: 'Monster Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lQ1UAB22L0s'
  },
  {
    id: 2842,
    name: 'Power Splits in Rings',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Rings',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Qb3pdGB7GLM'
  },
  {
    id: 2843,
    name: 'Dynamic Seated to Standing Straddle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/djsG5p7auQ4'
  },
  {
    id: 2844,
    name: 'Barbell Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/Dux7qHaa_6w'
  },
  {
    id: 2845,
    name: 'Single Arm Upright Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/RK8gswWipG8'
  },
  {
    id: 2846,
    name: 'Pronated Chin Over Vertical Plane Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/-yXWwayaUNc'
  },
  {
    id: 2847,
    name: 'Barefoot Squat Sit',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/xrIA5LzdymI'
  },
  {
    id: 2848,
    name: 'Side Plank Rotation',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/eEojhtdzew0'
  },
  {
    id: 2849,
    name: 'Bent Over A\'s',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ji6lnhZGGrE'
  },
  {
    id: 2850,
    name: 'Trap-3 Raise',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sh-tM_LmYhc'
  },
  {
    id: 2851,
    name: 'Table Inside Out',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/RPCzwSCPypg'
  },
  {
    id: 2852,
    name: 'Elevated Pigeon',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ah1NGD5meGQ'
  },
  {
    id: 2853,
    name: 'Skin the Cat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/on6KcgkdWaA'
  },
  {
    id: 2854,
    name: 'Single Arm Supinated Pull-Up Pulley System',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Pull-up Bar',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/qr-1HONTzSg'
  },
  {
    id: 2855,
    name: 'Chinese Handstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An upper body pulling exercise targeting the back and arm muscles.',
    videoUrl: 'https://www.youtube.com/embed/P0m0CDFGgU8'
  },
  {
    id: 2856,
    name: 'Dynamic Seated To Assisted Standing Straddle Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/T4BmF1B_dFw'
  },
  {
    id: 2857,
    name: 'Forearm Supported Handstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/zWNIoTGzBQ0'
  },
  {
    id: 2858,
    name: 'Burpee Broad Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/kkOSqoYOePg'
  },
  {
    id: 2859,
    name: 'Knee Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/OPEQZfYbnH8'
  },
  {
    id: 2860,
    name: 'Single Leg Box Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/DUOv1ZcndWo'
  },
  {
    id: 2861,
    name: 'Burpee Box Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/X8u9MgLMhTA'
  },
  {
    id: 2862,
    name: 'Dumbbell Burpee Box Jump Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/yT_yzLZlSzo'
  },
  {
    id: 2863,
    name: 'Burpee Box Jump Over',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A full-body conditioning exercise combining a squat, push-up, and explosive movement.',
    videoUrl: 'https://www.youtube.com/embed/ayYlao8C5bQ'
  },
  {
    id: 2864,
    name: 'Dynamic Seated Box Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/xMwXErDakCg'
  },
  {
    id: 2865,
    name: 'Russian Step Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/n_LW20fkvtA'
  },
  {
    id: 2866,
    name: 'Box Jump Step Down',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/-MJyEtCaUCI'
  },
  {
    id: 2867,
    name: 'Box Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A unilateral lower body exercise that builds leg strength and balance.',
    videoUrl: 'https://www.youtube.com/embed/gMQ2id4MYjE'
  },
  {
    id: 2868,
    name: 'Touch and Go Box Jump',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Box',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/P0VQFYM8xGg'
  },
  {
    id: 2869,
    name: 'Barbell Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/GsMNm9GGlE8'
  },
  {
    id: 2870,
    name: 'Freestanding Paralette Handstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Parallettes',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/R_ywv0HNWcM'
  },
  {
    id: 2871,
    name: 'Freestanding Handstand Straddle',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/1euUbrXJDdE'
  },
  {
    id: 2872,
    name: 'Suspended Arch/Hollow Pull',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/V04UzH2kNno'
  },
  {
    id: 2873,
    name: 'Supine Posterior Pelvic Tilt Lower',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/r0IX5r3YPyg'
  },
  {
    id: 2874,
    name: 'Elevated Supine Pelvic Tilt',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JIlpGB52vj8'
  },
  {
    id: 2875,
    name: 'Front Leaning Rest Posterior Pelvic Tilt',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Vs-UHI5Qc5I'
  },
  {
    id: 2876,
    name: 'Forearm Plank Posterior Pelvic Tilt',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A plank variation that builds core stability and anti-extension strength.',
    videoUrl: 'https://www.youtube.com/embed/Eqx3Vh--y3A'
  },
  {
    id: 2877,
    name: 'Supine Posterior Pelvic Tilt',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-v-YvVwAT8Y'
  },
  {
    id: 2878,
    name: 'Supine Knees Bent Posterior Pelvic Tilt',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/C0ptknoyBQ0'
  },
  {
    id: 2879,
    name: 'Prone Posterior Pelvic Tilt',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/y8tC4T0VuRM'
  },
  {
    id: 2880,
    name: 'Standing Straddle Static Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/mTUeEG68vTo'
  },
  {
    id: 2881,
    name: 'Standing Pelvic Tilt',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/B11wlDmmnxw'
  },
  {
    id: 2882,
    name: 'Standing Pike Static Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FMRHzptwyM4'
  },
  {
    id: 2883,
    name: 'Prone Overgrip Dislocate with Weighted Bar',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/aZ50zZ1e3O4'
  },
  {
    id: 2884,
    name: 'Standing Undergrip Dislocate With Weighted Bar',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/UhKVjO6waso'
  },
  {
    id: 2885,
    name: 'Prone Floor Handstand Pulses with Weighted Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/pc7q7tUNqQs'
  },
  {
    id: 2886,
    name: 'Weighted Bar Standing Dislocate',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/vxO0Xky3kyA'
  },
  {
    id: 2887,
    name: 'Forearm Headstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0hH4NyfZQEg'
  },
  {
    id: 2888,
    name: 'Headstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/BBwBuz2mK3g'
  },
  {
    id: 2889,
    name: 'Tripod',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/InuzSbX-7ts'
  },
  {
    id: 2890,
    name: 'Table Rock',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yv_HtCyK5H8'
  },
  {
    id: 2891,
    name: 'Handstand Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/293wBbrMuKw'
  },
  {
    id: 2892,
    name: 'Hollow Body Wall Walk',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sjvJHNm0exk'
  },
  {
    id: 2893,
    name: 'Strict Handstand Push-up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/Y5bm2s_6Hmg'
  },
  {
    id: 2894,
    name: 'Deficit Handstand Push-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A push-up variation for upper body pushing strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/EwIMg1s4PDI'
  },
  {
    id: 2895,
    name: 'Bridge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/DSs_kBVjTDA'
  },
  {
    id: 2896,
    name: 'Freestanding Handstand',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/E2s-D009x6E'
  },
  {
    id: 2897,
    name: 'Z-Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/hYat2hUpN40'
  },
  {
    id: 2898,
    name: 'Jumping Step-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A plyometric exercise that develops lower body power and explosiveness.',
    videoUrl: 'https://www.youtube.com/embed/pNN4RLBV_90'
  },
  {
    id: 2899,
    name: 'Static Seated Shoulder Flexion With Weighted Bar',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ixyIlgm9BHs'
  },
  {
    id: 2900,
    name: 'Wall Facing Handstand Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A handstand exercise that builds shoulder strength, stability, and body control.',
    videoUrl: 'https://www.youtube.com/embed/h2z0Y0NAetM'
  },
  {
    id: 2901,
    name: 'Suitcase Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/b72FEx6GLUg'
  },
  {
    id: 2902,
    name: 'Wall Facing Shoulder Taps',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/xTEveQ6deYg'
  },
  {
    id: 2903,
    name: 'Single Arm Overhead Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yfSIIj4Le9U'
  },
  {
    id: 2904,
    name: 'Front Rack Barbell Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2a49QTJUFkQ'
  },
  {
    id: 2905,
    name: 'Single Arm Rack Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZVts0BTFtFk'
  },
  {
    id: 2906,
    name: 'Farmers Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/3R3yu-LhQr4'
  },
  {
    id: 2907,
    name: 'Suitcase Carry',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/P6QN472jxUE'
  },
  {
    id: 2908,
    name: 'Atlas Stone to Shoulder',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Sandbag/Odd Object',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fcRXtB629Gc'
  },
  {
    id: 2909,
    name: 'Clamshell',
    source: 'central-athlete',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ShOPQe5FDXo'
  },
  {
    id: 2910,
    name: 'Straddle Glute Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/JfJPwDmzyKM'
  },
  {
    id: 2911,
    name: 'Prone Undergrip Dislocate',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/PH5e88q673E'
  },
  {
    id: 2912,
    name: 'Prone Overgrip Dislocate',
    source: 'central-athlete',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/y1gFDt4I6hY'
  },
  {
    id: 2913,
    name: 'Eccentric Single Leg Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/BpcXrvmsFuc'
  },
  {
    id: 2914,
    name: 'Lateral Banded Walk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Band',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wn9IpSl3WbQ'
  },
  {
    id: 2915,
    name: 'Painter',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/cLvk1MRYCgE'
  },
  {
    id: 2916,
    name: 'Batwing Hold',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/DesGrIU1y4k'
  },
  {
    id: 2917,
    name: 'Rear Foot Elevated Split Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/YtzdcxjEb8s'
  },
  {
    id: 2918,
    name: 'Single Arm Dumbbell Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/5Yf-RXNjDK8'
  },
  {
    id: 2919,
    name: 'Waiter\'s Bow',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ZJwQll5b7n0'
  },
  {
    id: 2920,
    name: 'Barbell Single Leg Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Barbell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/nTm9YV-MVRk'
  },
  {
    id: 2921,
    name: 'GHD Hip Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/dizQOJZwTDw'
  },
  {
    id: 2922,
    name: 'GHD Back Extension',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/n5mZkx0daJc'
  },
  {
    id: 2923,
    name: 'Behind the Neck Push Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/UbgE9coVAf8'
  },
  {
    id: 2924,
    name: 'Kettlebell Windmill',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/OdMr-Y5zoJs'
  },
  {
    id: 2925,
    name: 'Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/jDSKi9vIt34'
  },
  {
    id: 2926,
    name: 'Dumbbell Row',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Dumbbell',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/GiA0PQrhzPk'
  },
  {
    id: 2927,
    name: 'Sumo Kettlebell Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/3lVA-pvV6fg'
  },
  {
    id: 2928,
    name: 'Single Arm Kettlebell Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/353HiQKHZ4A'
  },
  {
    id: 2929,
    name: 'Single Arm Kettlebell Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/ARsoNpzupPs'
  },
  {
    id: 2930,
    name: 'Turkish Get-Up',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ixEdyKBR6zY'
  },
  {
    id: 2931,
    name: 'Kettlebell Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Kettlebell',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/QEEupLkPq_c'
  },
  {
    id: 2932,
    name: 'Wall Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/y7BynsP29JI'
  },
  {
    id: 2933,
    name: 'Snatch Grip Sotts Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/1nDV4xBr44k'
  },
  {
    id: 2934,
    name: 'Sotts Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Zq3Yy0Babj0'
  },
  {
    id: 2935,
    name: 'Pistol',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/sCTHnqLXepk'
  },
  {
    id: 2936,
    name: 'Hollow Body Rock',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/FnNO7zDalkA'
  },
  {
    id: 2937,
    name: 'Bent Hollow Rock',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_SRYaZUKeLc'
  },
  {
    id: 2938,
    name: 'Strict Anchored Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/F56ixR54w68'
  },
  {
    id: 2939,
    name: 'Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/EbWuGUru3Jo'
  },
  {
    id: 2940,
    name: 'Table',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Dc4HO05W8f0'
  },
  {
    id: 2941,
    name: 'Hollow Body Hold',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/IEPL464V4_4'
  },
  {
    id: 2942,
    name: 'Front Leaning Rest',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KOERfj4QPtk'
  },
  {
    id: 2943,
    name: 'Behind the Neck Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/i67t0ooRYxw'
  },
  {
    id: 2944,
    name: 'L-Sit',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/gBY5zwHJIvg'
  },
  {
    id: 2945,
    name: 'Hang Power Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/R432wA_jUEA'
  },
  {
    id: 2946,
    name: 'Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Qh2cLIY3YOw'
  },
  {
    id: 2947,
    name: 'Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/s0-Q9CDTS_E'
  },
  {
    id: 2948,
    name: 'Behind the Neck Split Jerk',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A jerk variation that develops overhead explosive strength.',
    videoUrl: 'https://www.youtube.com/embed/phB1Qk_523o'
  },
  {
    id: 2949,
    name: 'Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/h1xZIRmFtV4'
  },
  {
    id: 2950,
    name: 'GHD Sit-Up',
    source: 'central-athlete',
    category: 'Core',
    equipment: 'GHD',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/A6LyWwuBHK4'
  },
  {
    id: 2951,
    name: 'Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/1ruk1-_BcLk'
  },
  {
    id: 2952,
    name: 'Close Grip Overhead Squat',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A squat variation that builds lower body strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/viHbTSmzxa8'
  },
  {
    id: 2953,
    name: 'Hang Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/hFSSi-xG5tY'
  },
  {
    id: 2954,
    name: 'Hang Power Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/HcUON4pNyxg'
  },
  {
    id: 2955,
    name: 'Walking Lunge',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/zsy1vvEPyik'
  },
  {
    id: 2956,
    name: 'Hang Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/yFwYmnsnzj4'
  },
  {
    id: 2957,
    name: 'Snatch',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A snatch variation that builds explosive overhead power and coordination.',
    videoUrl: 'https://www.youtube.com/embed/x-SVg-l9lZw'
  },
  {
    id: 2958,
    name: 'Strict Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/uPhkTOQ4wek'
  },
  {
    id: 2959,
    name: 'Power Clean',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'An Olympic lifting movement or variation that develops explosive power.',
    videoUrl: 'https://www.youtube.com/embed/aiWaW-xT_8I'
  },
  {
    id: 2960,
    name: 'Behind the Neck Push Press',
    source: 'central-athlete',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/IilHaDtaZQM'
  },
  {
    id: 2961,
    name: 'Bird Dog Diagonals',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wIG0-3vqm8E'
  },
  {
    id: 2962,
    name: 'Bird Dog Hip Extension With Knee Straight',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/w20SgqLKOQ4'
  },
  {
    id: 2963,
    name: 'Box Presses',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Box',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/Dq2xCxt0AI4'
  },
  {
    id: 2964,
    name: 'Butt Presses',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/SYKsjhUiXBA'
  },
  {
    id: 2965,
    name: 'Open Half Kneeling Adductor Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the knee.',
    videoUrl: 'https://www.youtube.com/embed/O_fg8nWlD4E'
  },
  {
    id: 2966,
    name: 'Unilateral Bilateral Quadruped Wrist Extension Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the wrist.',
    videoUrl: 'https://www.youtube.com/embed/0rYhYBclC7E'
  },
  {
    id: 2967,
    name: 'Unilateral Bilateral Butterfly Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the lat.',
    videoUrl: 'https://www.youtube.com/embed/xvroIsj6BL4'
  },
  {
    id: 2968,
    name: 'Unilateral Bilateral Bear Sit Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the lat.',
    videoUrl: 'https://www.youtube.com/embed/EMcrz_8IpZw'
  },
  {
    id: 2969,
    name: 'Side Lying Hip Internal Rotation PAILs RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/GdFzqfH_3Ko'
  },
  {
    id: 2970,
    name: 'T-spine rotations with stability ball adduction',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stability Ball',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/QGmS08i-vlw'
  },
  {
    id: 2971,
    name: 'Toes Elevated toe touch',
    source: 'stretch-affect',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MTOK5rwuwME'
  },
  {
    id: 2972,
    name: 'Supported Pelvic Tilts in Golf Stance',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/0h4i7vT37xA'
  },
  {
    id: 2973,
    name: 'supine stick single leg glute bridge',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/Hc-jD-BUUA8'
  },
  {
    id: 2974,
    name: 'Supine stick shoulder raise to pulldown to press',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Cable',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/eol9fxB0-Yk'
  },
  {
    id: 2975,
    name: 'supine stick glute bridge',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/SLi50AYHlB4'
  },
  {
    id: 2976,
    name: 'supine stick glute bridge march',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/2bmugy32tV0'
  },
  {
    id: 2977,
    name: 'Supine Spinal Rotation Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the spine.',
    videoUrl: 'https://www.youtube.com/embed/K0Wnufb3VSM'
  },
  {
    id: 2978,
    name: 'Supine Pelvic Tilts',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/E6rNac2Ic2Q'
  },
  {
    id: 2979,
    name: 'straight leg stick dead bug',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6FZSgT5v7wQ'
  },
  {
    id: 2980,
    name: 'Stork Turns',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_xhakfYayCo'
  },
  {
    id: 2981,
    name: 'X-Factor Stick Mobility',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/9c0ypYpMjyo'
  },
  {
    id: 2982,
    name: 'wrist stir the pot',
    source: 'stretch-affect',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/QX_H56vK73A'
  },
  {
    id: 2983,
    name: 'wrist hinges',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/-u4SZUNlZjE'
  },
  {
    id: 2984,
    name: 'Wrist Flexion Stretch',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the wrist for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/17gtgWcZYYA'
  },
  {
    id: 2985,
    name: 'Wrist Extension Stretch',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the wrist for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/kqH3OBrhqVM'
  },
  {
    id: 2986,
    name: 'Wide Stance Single Stick Monkey Hang Hinge and Reach Level 3',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/I8C3dL0ecZQ'
  },
  {
    id: 2987,
    name: 'Wide Stance Single Stick Monkey Hang Hinge and Reach Level 2',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/z-iibr1a_AE'
  },
  {
    id: 2988,
    name: 'Wide Stance Single Stick Monkey Hang Hinge and Reach Level 1',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hanging exercise that builds grip strength and shoulder health.',
    videoUrl: 'https://www.youtube.com/embed/l0GfztAypoQ'
  },
  {
    id: 2989,
    name: 'Unilateral Bilateral Shoulder Flexion Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/d4JQ4FzZiKU'
  },
  {
    id: 2990,
    name: 'CatsAndDogs',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7MzCcYA5I2w'
  },
  {
    id: 2991,
    name: 'Side Lying Hip Internal Rotation Passive Range liftoff',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/tUnOiV6mMFk'
  },
  {
    id: 2992,
    name: 'Side Lying Reverse Clam Shells',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lzrXOM3hxwo'
  },
  {
    id: 2993,
    name: 'Side Lying Shoulder Internal Rotation Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/-T8CIz_QIbA'
  },
  {
    id: 2994,
    name: 'Side Open books',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KxkjMu-0ZLw'
  },
  {
    id: 2995,
    name: 'Single Leg Balance in golf stance with narrow base',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/b01elJ9fDTk'
  },
  {
    id: 2996,
    name: 'Single Leg Balance in Golf Stance',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/UMK_KihkulM'
  },
  {
    id: 2997,
    name: 'single leg deadlift stick lifts',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/U-cR9huRX6s'
  },
  {
    id: 2998,
    name: 'Single Leg Deadlift Stick Mobility',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A deadlift variation targeting the posterior chain for strength and control.',
    videoUrl: 'https://www.youtube.com/embed/00gEFV4ZP-k'
  },
  {
    id: 2999,
    name: 'slap shot',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2lj3eoKCKYk'
  },
  {
    id: 3000,
    name: 'Spine flexion and extension',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/_XlU8O2N7vc'
  },
  {
    id: 3001,
    name: 'Stick dead bug iso hold',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Ps9VqecaNZg'
  },
  {
    id: 3002,
    name: 'Stick stork turns',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MGXv29Y7Ok8'
  },
  {
    id: 3003,
    name: 'Stick taps',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/oCwN1wrPV68'
  },
  {
    id: 3004,
    name: 'Palm Forearm Presses',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/ZrgoF3QNaWs'
  },
  {
    id: 3005,
    name: 'Palm Presses',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A pressing movement that develops upper body pushing strength.',
    videoUrl: 'https://www.youtube.com/embed/iXyqsLab9mA'
  },
  {
    id: 3006,
    name: 'Pelvic Tilts in Golf Stance Find Neutral',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/lwFE3anpHM0'
  },
  {
    id: 3007,
    name: 'Pendulums',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5b5TRTCj0Ns'
  },
  {
    id: 3008,
    name: 'Pigeon Hip External Rotation PAILs RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/OmeU749WPao'
  },
  {
    id: 3009,
    name: 'Propeller',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Rope',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/eKvZM4hHFik'
  },
  {
    id: 3010,
    name: 'Push Pulls',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/LExTLGHd9UI'
  },
  {
    id: 3011,
    name: 'Quad and Hip Flexor Release',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Bodyweight',
    description: 'Soft tissue release work targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/9_J_yhv7xCA'
  },
  {
    id: 3012,
    name: 'Seated Ankle Windshield Wipers',
    source: 'stretch-affect',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/Pt9H186Ii88'
  },
  {
    id: 3013,
    name: 'Shoulder Abduction Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/ruO2yaA78mA'
  },
  {
    id: 3014,
    name: 'Side Foam Roll Glutes Hamstrings Calves',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Foam Roller',
    description: 'Soft tissue release work targeting the glute.',
    videoUrl: 'https://www.youtube.com/embed/l1B_v9Mn9fA'
  },
  {
    id: 3015,
    name: 'Side Lumbar Locked Reachbacks with External Rotation from half Prayer Position',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/gqNfWA9do58'
  },
  {
    id: 3016,
    name: 'Side Lumbar Locked Reachbacks with External Rotation',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/Ig_-MajuAaA'
  },
  {
    id: 3017,
    name: 'Side Lying Clam Shells',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/7DcD2Iopb4I'
  },
  {
    id: 3018,
    name: 'Kneeling Hip Extension Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/TzKzqlEuono'
  },
  {
    id: 3019,
    name: 'lateral lunge to rotation',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A lunge variation that develops single-leg strength and stability.',
    videoUrl: 'https://www.youtube.com/embed/fJqUncva83o'
  },
  {
    id: 3020,
    name: 'Lateral Stick Pushes Level 1',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/VgFUTjtsQ3o'
  },
  {
    id: 3021,
    name: 'Lateral Stick Pushes Level 2',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/I-A6CUxr1lY'
  },
  {
    id: 3022,
    name: 'Lateral Stick Pushes Level 3',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/NfhWHxGG4u8'
  },
  {
    id: 3023,
    name: 'lateral stick wall push level 1',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/aok1G8fBbVk'
  },
  {
    id: 3024,
    name: 'lateral stick wall push with flex level 2',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/5EoI1P0qFlA'
  },
  {
    id: 3025,
    name: 'Low Back Release Stick Mobility',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Stick',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/gpV3p7pisk0'
  },
  {
    id: 3026,
    name: 'lower body disassociation stick mobility',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/J40u34jIqw4'
  },
  {
    id: 3027,
    name: 'Lower Leg Release Stick Mobility',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Stick',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/58Gghh2vxg4'
  },
  {
    id: 3028,
    name: 'Mid Back Release Stick Mobility',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Stick',
    description: 'Soft tissue release work targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/lrLmOCgZe4U'
  },
  {
    id: 3029,
    name: 'Glute Bridge Palms up neutral pelvis',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A hip extension exercise that targets the glutes and posterior chain.',
    videoUrl: 'https://www.youtube.com/embed/WudnKcha1EU'
  },
  {
    id: 3030,
    name: 'golf posture stick wall push with rotation',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/gqghLW7-mTQ'
  },
  {
    id: 3031,
    name: 'Half kneeling cervical rotation with Shoulder flexion and extension',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/ewVWj9DadXo'
  },
  {
    id: 3032,
    name: 'half kneeling long turns',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/MCdQfa8--d8'
  },
  {
    id: 3033,
    name: 'half kneeling monkey hang with rotation',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/P3U-Ejtuqu4'
  },
  {
    id: 3034,
    name: 'hamstring release',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Rings',
    description: 'Soft tissue release work targeting the hamstring.',
    videoUrl: 'https://www.youtube.com/embed/ydl6Gsn0D0U'
  },
  {
    id: 3035,
    name: 'Heels Elevated Toe Touch',
    source: 'stretch-affect',
    category: 'Core',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SmutfCSaJDQ'
  },
  {
    id: 3036,
    name: 'Hip External Rotation Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/lm0ZIM4NYKA'
  },
  {
    id: 3037,
    name: 'Hip External Rotation Kinetic Stretching',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Active kinetic stretching drill to improve range of motion in the hip.',
    videoUrl: 'https://www.youtube.com/embed/2v1GmoHSqFY'
  },
  {
    id: 3038,
    name: 'Hip Internal Rotation Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/fM5r2G-eOjg'
  },
  {
    id: 3039,
    name: 'Hip Twister',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/jakqZ0ZFDas'
  },
  {
    id: 3040,
    name: 'kayaking',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/2Fhu-810t0g'
  },
  {
    id: 3041,
    name: 'Deer In The Headlights',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/SMjHa1PuBY0'
  },
  {
    id: 3042,
    name: 'foot and ankle prep',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/d5OxMMNO5c8'
  },
  {
    id: 3043,
    name: 'Foot release',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Bodyweight',
    description: 'Soft tissue release work targeting the foot.',
    videoUrl: 'https://www.youtube.com/embed/bwIj9JdNjeE'
  },
  {
    id: 3044,
    name: 'forearm release',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Bodyweight',
    description: 'Soft tissue release work targeting the forearm.',
    videoUrl: 'https://www.youtube.com/embed/no4xP0p0_NQ'
  },
  {
    id: 3045,
    name: 'Frog Pose Hip Abduction PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/215FTBqYB5Y'
  },
  {
    id: 3046,
    name: 'Hip Internal Rotation Kinetic Stretching',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Active kinetic stretching drill to improve range of motion in the hip.',
    videoUrl: 'https://www.youtube.com/embed/dsWEpHsCOHY'
  },
  {
    id: 3047,
    name: 'Thoracic Spine PAILs-RAILs with Stick',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Stick',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the spine.',
    videoUrl: 'https://www.youtube.com/embed/tesZfg3vHq0'
  },
  {
    id: 3048,
    name: '90/90 Hip External Rotation Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/qawe2P1lN_A'
  },
  {
    id: 3049,
    name: '90/90 Hip Internal Rotation Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/wCpsa3dFDHk'
  },
  {
    id: 3050,
    name: '90/90 Hip External Rotation Kinetic Stretching',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Active kinetic stretching drill to improve range of motion in the hip.',
    videoUrl: 'https://www.youtube.com/embed/AXtN6TXQFdg'
  },
  {
    id: 3051,
    name: 'Side Lying Shoulder Internal Rotation Eccentric Neural Grooving',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Eccentric neural grooving exercise to build end-range control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/XZEfw2m6-tY'
  },
  {
    id: 3052,
    name: 'Reach Roll Lift',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fC1wCv0Lx94'
  },
  {
    id: 3053,
    name: 'Bent Leg Calf Stretch',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the calf for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/KsYyQEpJTAU'
  },
  {
    id: 3054,
    name: 'Bird Dog Hip extension with knee bent',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/ElMptmUQvr8'
  },
  {
    id: 3055,
    name: 'Flag Poles Stick Mobility',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/yuHCecUMgBQ'
  },
  {
    id: 3056,
    name: 'Bow and Arrow Stick Mobility',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A rowing movement that strengthens the upper back and pulling muscles.',
    videoUrl: 'https://www.youtube.com/embed/-92w_nvhFA8'
  },
  {
    id: 3057,
    name: 'dynamic stick dead bug',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/6UqF--pHusE'
  },
  {
    id: 3058,
    name: 'Standing Scapula ERR',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/8kTrFirxoEg'
  },
  {
    id: 3059,
    name: 'Split Kneeling Hip Abduction PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/MC07S57Q0q0'
  },
  {
    id: 3060,
    name: 'Finger Extension PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the extremities.',
    videoUrl: 'https://www.youtube.com/embed/MHEanlbq7tg'
  },
  {
    id: 3061,
    name: 'Finger Extension PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the extremities.',
    videoUrl: 'https://www.youtube.com/embed/5CRw8CIV0lU'
  },
  {
    id: 3062,
    name: 'Finger Extension ERR',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the extremities.',
    videoUrl: 'https://www.youtube.com/embed/C1zs0HSlTfo'
  },
  {
    id: 3063,
    name: 'Big Toe Extension PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the extremities.',
    videoUrl: 'https://www.youtube.com/embed/g_X_5CVKguA'
  },
  {
    id: 3064,
    name: 'Seated Ankle Inversion PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the ankle.',
    videoUrl: 'https://www.youtube.com/embed/tInd4nW8K3o'
  },
  {
    id: 3065,
    name: 'Standing Ankle Eversion w/KB PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Kettlebell',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the ankle.',
    videoUrl: 'https://www.youtube.com/embed/AJM73-sK8jE'
  },
  {
    id: 3066,
    name: 'Collapsed Kneeling Plantar Flexion PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/m6VMJnaE6bM'
  },
  {
    id: 3067,
    name: 'Seated Ankle Eversion PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the ankle.',
    videoUrl: 'https://www.youtube.com/embed/BwsvAragk70'
  },
  {
    id: 3068,
    name: 'Standing Ankle Inversion - Slant Board PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Slant Board',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the ankle.',
    videoUrl: 'https://www.youtube.com/embed/7Z_GxKQwUmU'
  },
  {
    id: 3069,
    name: 'Standing Ankle Eversion PAILs and RAILs - Slant Board',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Slant Board',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the ankle.',
    videoUrl: 'https://www.youtube.com/embed/wpa6TQSNlbc'
  },
  {
    id: 3070,
    name: 'Quadruped Wrist Extension Pails/Rails',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the wrist.',
    videoUrl: 'https://www.youtube.com/embed/0VKT3kfyLr4'
  },
  {
    id: 3071,
    name: 'Single Arm Overhead Farmers Walk',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A loaded carry exercise that builds grip strength, core stability, and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/GP5-dONUSBM'
  },
  {
    id: 3072,
    name: 'leg torso turns',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/f5QeU9sFHOw'
  },
  {
    id: 3073,
    name: 'Scapula End Range Rotations from Quadruped-Modified Push-up',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/Ul4qLBMrG70'
  },
  {
    id: 3074,
    name: 'Scapular ERR from 3-Point Position',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/sZ7UeALRSBk'
  },
  {
    id: 3075,
    name: 'Tall Kneeling Shoulder Flexion Extension with Pattern Assistance',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/KonMciB8Xi8'
  },
  {
    id: 3076,
    name: 'Quadruped Spine Extension PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the spine.',
    videoUrl: 'https://www.youtube.com/embed/7hCSeXt5_SI'
  },
  {
    id: 3077,
    name: 'Finger Extension Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the extremities.',
    videoUrl: 'https://www.youtube.com/embed/XmeZ-oCu5rE'
  },
  {
    id: 3078,
    name: 'Infinity Swimmer Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/0R8OlpJK4YA'
  },
  {
    id: 3079,
    name: 'Wrist Flexion PRH Open Kinetic Chain',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Chains',
    description: 'Progressive range hold exercise targeting the wrist.',
    videoUrl: 'https://www.youtube.com/embed/25QrVDBdMVo'
  },
  {
    id: 3080,
    name: 'Supine Hip Flexion Multiple Angles PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/jXAtlrjMJ2k'
  },
  {
    id: 3081,
    name: 'Supine Figure 4 Hip External Rotation PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/CldQoWc6pw8'
  },
  {
    id: 3082,
    name: 'Wrist Extension PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the wrist.',
    videoUrl: 'https://www.youtube.com/embed/Bk7tHb9bJw4'
  },
  {
    id: 3083,
    name: 'Wrist Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the wrist.',
    videoUrl: 'https://www.youtube.com/embed/iLPyLQxO4JY'
  },
  {
    id: 3084,
    name: 'Swimmer Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/lZxZEvJD4h4'
  },
  {
    id: 3085,
    name: 'Bear Sit Hip Abduction PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/Xd79oZubcaM'
  },
  {
    id: 3086,
    name: '90-90 Hip External Rotation PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/eBmRz-XGsoI'
  },
  {
    id: 3087,
    name: 'Bear Sit Hip Internal Rotation PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/uWYydG6pEFE'
  },
  {
    id: 3088,
    name: 'Butterfly Hip Abduction PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/4twJ8U3STB0'
  },
  {
    id: 3089,
    name: 'Full Swing Sequence Stick Mobility',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A ballistic hip hinge movement that develops power and conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fLqlBO60iSY'
  },
  {
    id: 3090,
    name: 'Frog Pose Hip Abduction PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/5lzQg5_NujQ'
  },
  {
    id: 3091,
    name: '1/2 Kneeling Hip Extension PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/wbCmCRFXlys'
  },
  {
    id: 3092,
    name: 'Side Lying Hip Internal Rotation PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/XV_kvOT0rr8'
  },
  {
    id: 3093,
    name: 'forearm release Stick Mobility',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Stick',
    description: 'Soft tissue release work targeting the forearm.',
    videoUrl: 'https://www.youtube.com/embed/JWH-weBYY8M'
  },
  {
    id: 3094,
    name: 'kayaking Stick Mobility',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/CDEm0jN4R8w'
  },
  {
    id: 3095,
    name: 'Pigeon Hip External Rotation PAILs - RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/9KhwqWp2n3Y'
  },
  {
    id: 3096,
    name: 'Stick Mobility Foot release',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Stick',
    description: 'Soft tissue release work targeting the foot.',
    videoUrl: 'https://www.youtube.com/embed/YIeKnClR8-4'
  },
  {
    id: 3097,
    name: 'Side Lying Hip Internal Rotation PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/TiE3SpcNbAc'
  },
  {
    id: 3098,
    name: 'Ankle Dorsiflexion PAILs-RAILs - Combat Base',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the ankle.',
    videoUrl: 'https://www.youtube.com/embed/JegW1vacAfA'
  },
  {
    id: 3099,
    name: 'Standing Ankle Dorsiflexion PAILs-RAILs - Soleus Focus',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the ankle.',
    videoUrl: 'https://www.youtube.com/embed/VEmRGb3BqDM'
  },
  {
    id: 3100,
    name: 'Standing Ankle Dorsiflexion PAILs-RAILs - Gastrocnemius Focus',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the ankle.',
    videoUrl: 'https://www.youtube.com/embed/2-QgottaaDU'
  },
  {
    id: 3101,
    name: 'Tibial Internal Rotation Pails and Rails',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the tibia.',
    videoUrl: 'https://www.youtube.com/embed/SC2zbULWBOA'
  },
  {
    id: 3102,
    name: 'Tibial External Rotation Pails and Rails',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the tibia.',
    videoUrl: 'https://www.youtube.com/embed/dEQhHjoPGkM'
  },
  {
    id: 3103,
    name: 'Knee Flexion: Side Lying w/o Hip Extension PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/a3yyQPCBVXs'
  },
  {
    id: 3104,
    name: 'Knee Flexion w/Hip Extension PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/R9ZsKBTHHdk'
  },
  {
    id: 3105,
    name: 'Supine Knee Extension PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/qC9rLCdCVmI'
  },
  {
    id: 3106,
    name: 'Standing Knee Extension PAILs and RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/taG3Ight3rI'
  },
  {
    id: 3107,
    name: '90/90 Hip Internal Rotation PAILS/ RAILS',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/2FVc-g0wLsA'
  },
  {
    id: 3108,
    name: 'Standing Hip Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/G-Wo40tF15U'
  },
  {
    id: 3109,
    name: '90/90 Hip Internal Rotation - Hover',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/BWNI1gkn5EU'
  },
  {
    id: 3110,
    name: 'Collapsed Quadruped Hip Extension PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/gVudmjAwYrQ'
  },
  {
    id: 3111,
    name: 'Standing Hip Flexion - Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/Kp_GolfVpu4'
  },
  {
    id: 3112,
    name: 'Standing Hip Flexion Abduction PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/ngSKnWRSRhQ'
  },
  {
    id: 3113,
    name: '90/90 Hip Abduction PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/o1liMbMWuKo'
  },
  {
    id: 3114,
    name: 'Side Lying Hip Adduction ERR',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/OD3Xhq6gOfg'
  },
  {
    id: 3115,
    name: 'Split Kneeling Hip Abduction PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/QjjxHg6itlg'
  },
  {
    id: 3116,
    name: 'Kneeling Knee Flexion PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/2mSMdAAsFVU'
  },
  {
    id: 3117,
    name: 'Prone Cervical Extension PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/Vc1sF00uJhs'
  },
  {
    id: 3118,
    name: '90/90 Hip Abduction PRLO Knee Hinge',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/wM3IdaIn7kI'
  },
  {
    id: 3119,
    name: 'Side Lying Hip Adduction PRLO Knee Hinge',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/NYLzn3Lp8g4'
  },
  {
    id: 3120,
    name: 'Supine Cervical Flexion PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/KGxkrsaRAXg'
  },
  {
    id: 3121,
    name: 'Seated Cervical Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/hNXLxFiahWU'
  },
  {
    id: 3122,
    name: 'Seated Cervical Rotation PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/8JUPT9mUMqU'
  },
  {
    id: 3123,
    name: 'Side Lying Cervical Lateral Flexion PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/eImX4rmou70'
  },
  {
    id: 3124,
    name: 'Seated Cervical Rotation PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/_VKEta1NQSw'
  },
  {
    id: 3125,
    name: 'Side Lying Hip Adduction PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/pshgsvuzS38'
  },
  {
    id: 3126,
    name: 'Tibial External Rotation PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the tibia.',
    videoUrl: 'https://www.youtube.com/embed/STpCqPrNEK8'
  },
  {
    id: 3127,
    name: 'Tibial Internal Rotation PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the tibia.',
    videoUrl: 'https://www.youtube.com/embed/_ZyySDM1nqY'
  },
  {
    id: 3128,
    name: 'Tibial Internal Rotation PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the tibia.',
    videoUrl: 'https://www.youtube.com/embed/qsfo57Euxq4'
  },
  {
    id: 3129,
    name: 'Standing Hip Flexion ERR',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/x3f4mQ_RmP8'
  },
  {
    id: 3130,
    name: 'Side Lying Hip Adduction - Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/f4QaDI1HqJ8'
  },
  {
    id: 3131,
    name: 'Tall Kneeling Spine ERR w/ MedBall and Yoga Block',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Medicine Ball',
    description: 'End range rotation exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/giLWARzfLDA'
  },
  {
    id: 3132,
    name: 'Split Base Spine ERR with MedBall',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Medicine Ball',
    description: 'End range rotation exercise targeting the spine.',
    videoUrl: 'https://www.youtube.com/embed/P_SseLdewGE'
  },
  {
    id: 3133,
    name: 'Tibial Internal External Rotation - Hover',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the tibia.',
    videoUrl: 'https://www.youtube.com/embed/6RK5fnCmFRU'
  },
  {
    id: 3134,
    name: 'Prone Knee Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/ZOB7-iiGmuE'
  },
  {
    id: 3135,
    name: 'Tibial External Rotation PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the tibia.',
    videoUrl: 'https://www.youtube.com/embed/hHu69QZUPrg'
  },
  {
    id: 3136,
    name: 'Side Lying Knee Flexion PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/B1fExQyedUo'
  },
  {
    id: 3137,
    name: 'Half Kneeling Knee Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/opPf_XUCv6c'
  },
  {
    id: 3138,
    name: 'Side Lying Knee Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/kT4gb1yy0gQ'
  },
  {
    id: 3139,
    name: 'Supine Hip Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/4POS97FJE84'
  },
  {
    id: 3140,
    name: 'Prone Knee Flexion PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/DmNACKU9BSM'
  },
  {
    id: 3141,
    name: 'Half Kneeling Knee Flexion and Tibial Internal/External Rotation - Hover',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the knee.',
    videoUrl: 'https://www.youtube.com/embed/f9Fx-T9XsTI'
  },
  {
    id: 3142,
    name: 'Bear Sit Hip Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/S4hCXKqzWxU'
  },
  {
    id: 3143,
    name: 'Bear Sit PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/Q83Zxe76fPQ'
  },
  {
    id: 3144,
    name: 'Supine Hip Flexion PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/9FI-FYMFeAc'
  },
  {
    id: 3145,
    name: 'Supine Hip Flexion ERR',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/ftOcuztVhtY'
  },
  {
    id: 3146,
    name: 'Bear Sit PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/jXtbnsyWbvU'
  },
  {
    id: 3147,
    name: 'Bear Sit Hip Flexion ERR',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/Clo2eyVD_bM'
  },
  {
    id: 3148,
    name: 'Butterfly PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/gDY1gQweK3o'
  },
  {
    id: 3149,
    name: 'Bear Sit Hip Flexion Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the hip.',
    videoUrl: 'https://www.youtube.com/embed/sAB2MBUi3-c'
  },
  {
    id: 3150,
    name: 'Prone Shoulder Extension ERR',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/DYltX96MTQM'
  },
  {
    id: 3151,
    name: 'Half Kneeling Shoulder Extension PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/_a6NQUMEdLc'
  },
  {
    id: 3152,
    name: 'Bilateral Shoulder Extension PRH Bent-Leg and Pike',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/eHRtRPeo-nQ'
  },
  {
    id: 3153,
    name: 'Half Kneeling Shoulder Extension PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/0uHGhzpxn8I'
  },
  {
    id: 3154,
    name: 'Shoulder Flexion PRLO on Ball w/Stick',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Stick',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/41XCo0YvGuo'
  },
  {
    id: 3155,
    name: 'Prone Shoulder Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/2rSLDvNSh00'
  },
  {
    id: 3156,
    name: 'Prone Shoulder Flexion/Abduction PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/ObJbUt6nvCo'
  },
  {
    id: 3157,
    name: 'Shoulder Flexion PRH on Ball w/Stick',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Stick',
    description: 'Progressive range hold exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/lc16hf_Xc4M'
  },
  {
    id: 3158,
    name: 'Shoulder External Rotation PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/ar5kLEguv3o'
  },
  {
    id: 3159,
    name: 'Prone Shoulder External Rotation PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/xY0QMYsnnbw'
  },
  {
    id: 3160,
    name: 'Prone Shoulder Flexion ERR',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/PjPqRm8dAyM'
  },
  {
    id: 3161,
    name: 'Shoulder Adduction PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/Qs2NicE6wbg'
  },
  {
    id: 3162,
    name: 'Shoulder Adduction PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/zBWh64FeOT0'
  },
  {
    id: 3163,
    name: 'Standing Shoulder Abduction PRH on Wall',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/pDD7pxh1lUM'
  },
  {
    id: 3164,
    name: 'Shoulder External Rotation PRLO w/Stick on ball',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Stick',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/W2Ew7z6LYzc'
  },
  {
    id: 3165,
    name: 'Shoulder External Rotation PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/Rtu85QT51ZA'
  },
  {
    id: 3166,
    name: 'Side-Lying Shoulder Internal Rotation PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/yydVdegWmwI'
  },
  {
    id: 3167,
    name: 'Butterfly PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/MyHzd5yWaxc'
  },
  {
    id: 3168,
    name: 'Shoulder External Rotation PRH w/Stick on ball',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Stick',
    description: 'Progressive range hold exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/Je4Cw6tKQNc'
  },
  {
    id: 3169,
    name: 'Scapular Retraction PRH on wall',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/xL0InmsipPw'
  },
  {
    id: 3170,
    name: 'Elbow Pronation PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the elbow.',
    videoUrl: 'https://www.youtube.com/embed/BoQE3ONqgmI'
  },
  {
    id: 3171,
    name: 'Elbow Supination PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the elbow.',
    videoUrl: 'https://www.youtube.com/embed/BPe-bFMD6x4'
  },
  {
    id: 3172,
    name: 'Elbow Flexion PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the elbow.',
    videoUrl: 'https://www.youtube.com/embed/4J5IpD9SOHc'
  },
  {
    id: 3173,
    name: 'Elbow Supination PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the elbow.',
    videoUrl: 'https://www.youtube.com/embed/YyhqbfXprj8'
  },
  {
    id: 3174,
    name: 'Elbow Flexion PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the elbow.',
    videoUrl: 'https://www.youtube.com/embed/FQRpAvZgUR8'
  },
  {
    id: 3175,
    name: 'Prone Shoulder Extension - Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/2k5AUwxc4Ms'
  },
  {
    id: 3176,
    name: 'Side-Lying Shoulder Internal Rotation PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/3vbJ7I1oap0'
  },
  {
    id: 3177,
    name: 'Prone Shoulder External Rotation - Hover',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/Mz-WMVJJyBA'
  },
  {
    id: 3178,
    name: 'Standing Shoulder Abduction PRLO on Wall',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/wzeHg8wlAp8'
  },
  {
    id: 3179,
    name: 'Scapular Retraction PRLO on Wall',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/bx9lcGErs84'
  },
  {
    id: 3180,
    name: 'Prone Shoulder Flexion - Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/atq4KiuOtAY'
  },
  {
    id: 3181,
    name: 'Elbow Pronation PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the elbow.',
    videoUrl: 'https://www.youtube.com/embed/_W0fO-QNUMU'
  },
  {
    id: 3182,
    name: '1/2 Kneeling Hip Extension PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/oI5iZySd0w4'
  },
  {
    id: 3183,
    name: '90/90 Hip External Rotation PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/swe7HDHzgYQ'
  },
  {
    id: 3184,
    name: 'Bear Sit Hip Abduction PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/1vuaPkTd7Ww'
  },
  {
    id: 3185,
    name: 'Butterfly Hip Abduction PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/NyNvtyosjB4'
  },
  {
    id: 3186,
    name: 'Finger Extension - Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the extremities.',
    videoUrl: 'https://www.youtube.com/embed/y22Hq1S57E0'
  },
  {
    id: 3187,
    name: 'Finger Extension PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the extremities.',
    videoUrl: 'https://www.youtube.com/embed/ydy81MdGo0M'
  },
  {
    id: 3188,
    name: 'Finger Extension PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the extremities.',
    videoUrl: 'https://www.youtube.com/embed/4BLhAQg-EN0'
  },
  {
    id: 3189,
    name: 'Frog Pose Hip Abduction PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/x9PWcYVgO1o'
  },
  {
    id: 3190,
    name: 'Infinity Swimmer - Hover',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/-4Z6xHM_bm8'
  },
  {
    id: 3191,
    name: 'Pigeon Hip External Rotation PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/IAEjNmmdtXU'
  },
  {
    id: 3192,
    name: 'Finger Extension End Range Rotations',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the extremities.',
    videoUrl: 'https://www.youtube.com/embed/s5LW7BPfYVs'
  },
  {
    id: 3193,
    name: 'Scapula End Range Rotations - 3 Point Position',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/SAFAqHmE430'
  },
  {
    id: 3194,
    name: 'Scapula End Range Rotations - Modified Quadruped/Push-up',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'End range rotation exercise targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/X69YA49kYic'
  },
  {
    id: 3195,
    name: 'Bear Sit Hip Internal Rotation PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/V8J7jI2RgqI'
  },
  {
    id: 3196,
    name: 'Split Kneeling Hip Abduction PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/t3btKWyJebE'
  },
  {
    id: 3197,
    name: 'Standing Scapula End Range Rotations w/KB',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Kettlebell',
    description: 'End range rotation exercise targeting the scapula.',
    videoUrl: 'https://www.youtube.com/embed/diWI11OcxC4'
  },
  {
    id: 3198,
    name: 'Quadruped Spine Extension PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the spine.',
    videoUrl: 'https://www.youtube.com/embed/pLWnSk0IJog'
  },
  {
    id: 3199,
    name: 'Collapsed Kneeling Wrist Extension PRH',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range hold exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/laAcYatq3Qw'
  },
  {
    id: 3200,
    name: 'Collapsed Kneeling Wrist Extension PRLO',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive range lift-off exercise targeting the knee.',
    videoUrl: 'https://www.youtube.com/embed/PI3D2lCjNrQ'
  },
  {
    id: 3201,
    name: 'Supine Figure 4 Hip ER PAILs-RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/tmzXXkw4uis'
  },
  {
    id: 3202,
    name: 'Wrist Flexion PRLO - open chain',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Chains',
    description: 'Progressive range lift-off exercise targeting the wrist.',
    videoUrl: 'https://www.youtube.com/embed/EGWTwAH5ik4'
  },
  {
    id: 3203,
    name: 'Supine Hip Flexion multi angle PAILs/RAILs',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the hip.',
    videoUrl: 'https://www.youtube.com/embed/-GS5gddt0WI'
  },
  {
    id: 3204,
    name: 'Wrist Flexion PRH - open chain',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Chains',
    description: 'Progressive range hold exercise targeting the wrist.',
    videoUrl: 'https://www.youtube.com/embed/LjYuy-00AEw'
  },
  {
    id: 3205,
    name: 'Wrist Extension PRLO - open chain',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Chains',
    description: 'Progressive range lift-off exercise targeting the wrist.',
    videoUrl: 'https://www.youtube.com/embed/OXFpdeZimpw'
  },
  {
    id: 3206,
    name: 'Thoracic Spine - PAILs RAILs w/Stick',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Stick',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the spine.',
    videoUrl: 'https://www.youtube.com/embed/ruEjdQOirJo'
  },
  {
    id: 3207,
    name: 'Swimmer Hover - Collapsed Kneeling',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Isometric hover exercise to build active control in the knee.',
    videoUrl: 'https://www.youtube.com/embed/-xLYPvcVpG0'
  },
  {
    id: 3208,
    name: 'Wrist Extension PRH - Open Chain',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Chains',
    description: 'Progressive range hold exercise targeting the wrist.',
    videoUrl: 'https://www.youtube.com/embed/RixXxeszwWo'
  },
  {
    id: 3209,
    name: 'Whole Body CARS',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/dnhlDlukksQ'
  },
  {
    id: 3210,
    name: 'Shoulder Rotation - Internal/External',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/ZI63QzZUB7I'
  },
  {
    id: 3211,
    name: 'Hip Flexion/Extension',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/o7ipY9awQu8'
  },
  {
    id: 3212,
    name: 'Shoulder Flexion/Extension',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/wJMay-UaTmY'
  },
  {
    id: 3213,
    name: 'Hip Abduction/Adduction',
    source: 'stretch-affect',
    category: 'Strength',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/zy-FN2V04Jk'
  },
  {
    id: 3214,
    name: 'Hip Rotation Internal/External',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A rotational exercise that improves mobility and movement quality.',
    videoUrl: 'https://www.youtube.com/embed/vwSBGaTeawE'
  },
  {
    id: 3215,
    name: 'Hip CAR How to',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the hip.',
    videoUrl: 'https://www.youtube.com/embed/Ka4RvoTR4EQ'
  },
  {
    id: 3216,
    name: 'Scapula CAR How To',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the scapula.',
    videoUrl: 'https://www.youtube.com/embed/yWs29k8QieQ'
  },
  {
    id: 3217,
    name: 'Elbow CAR How To',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the elbow.',
    videoUrl: 'https://www.youtube.com/embed/joctcnrlK9I'
  },
  {
    id: 3218,
    name: 'Knee CAR How To',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the knee.',
    videoUrl: 'https://www.youtube.com/embed/aADibS2k-jA'
  },
  {
    id: 3219,
    name: 'Toe CAR How to',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the extremities.',
    videoUrl: 'https://www.youtube.com/embed/4wtMzHLcPZ4'
  },
  {
    id: 3220,
    name: 'Neck CAR How to',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the neck.',
    videoUrl: 'https://www.youtube.com/embed/sxqM0tFKUD4'
  },
  {
    id: 3221,
    name: 'Thoracic-Lumber CAR How To',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the spine.',
    videoUrl: 'https://www.youtube.com/embed/emjgTjlG2kI'
  },
  {
    id: 3222,
    name: 'Wrist CAR How to',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the wrist.',
    videoUrl: 'https://www.youtube.com/embed/xDpJOoAXYwc'
  },
  {
    id: 3223,
    name: 'Shoulder CAR How-to',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/GW1o6PQlW0I'
  },
  {
    id: 3224,
    name: 'Ankle CAR How To',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'Controlled articular rotation exercise to maintain and improve joint health in the ankle.',
    videoUrl: 'https://www.youtube.com/embed/yMErrNllYz4'
  },
  {
    id: 3225,
    name: 'Banana Stretch',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the targeted area for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/pXBISGALCVo'
  },
  {
    id: 3226,
    name: 'Varied arm position Pec stretch on wall',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the pec for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/VRNM_lh3vSc'
  },
  {
    id: 3227,
    name: 'Lat Stretch Against wall - advanced',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Bodyweight',
    description: 'A stretching exercise targeting the lat for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/z64fUIFAb9c'
  },
  {
    id: 3228,
    name: 'PAILS RAILS - Lat against wall',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the lat.',
    videoUrl: 'https://www.youtube.com/embed/_mJCEG1RtuU'
  },
  {
    id: 3229,
    name: 'PAILS RAILS Pectoralis/Bicep: straight arm',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the pec.',
    videoUrl: 'https://www.youtube.com/embed/fSLTs4vGERg'
  },
  {
    id: 3230,
    name: 'PAILS RAILS - Pectoralis 90 degree elbow',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the elbow.',
    videoUrl: 'https://www.youtube.com/embed/pVUBtiXGm00'
  },
  {
    id: 3231,
    name: 'PAILS RAILS - Neck Rotators',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/M2L6d0RCeLU'
  },
  {
    id: 3232,
    name: 'Jaw Self Massage',
    source: 'stretch-affect',
    category: 'Recovery',
    equipment: 'Bodyweight',
    description: 'Soft tissue release work targeting the jaw.',
    videoUrl: 'https://www.youtube.com/embed/LnbOS4eadYQ'
  },
  {
    id: 3233,
    name: 'PAILs and RAILs - Back of Neck',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/L7hN8G8SJCQ'
  },
  {
    id: 3234,
    name: 'Pails and Rails - Side of Neck',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the neck.',
    videoUrl: 'https://www.youtube.com/embed/yXl0sAOgYbs'
  },
  {
    id: 3235,
    name: 'PAILS RAILS - posterior shoulder standing',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the shoulder.',
    videoUrl: 'https://www.youtube.com/embed/U4S06wqn_SA'
  },
  {
    id: 3236,
    name: 'Standing lat stretch side to side with sticks',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A stretching exercise targeting the lat for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/FH6wWRdIYbY'
  },
  {
    id: 3237,
    name: 'Pails Rails Triceps',
    source: 'stretch-affect',
    category: 'Flexibility',
    equipment: 'Bodyweight',
    description: 'Progressive angular isometric loading and regressive angular isometric loading drill targeting the targeted area.',
    videoUrl: 'https://www.youtube.com/embed/0PqiUjCksoE'
  },
  {
    id: 3238,
    name: 'Standing Lat Stretch with Sticks',
    source: 'stretch-affect',
    category: 'Mobility',
    equipment: 'Stick',
    description: 'A stretching exercise targeting the lat for improved flexibility.',
    videoUrl: 'https://www.youtube.com/embed/sDWcGO9G4Jg'
  },
  {
    id: 3239,
    name: 'Clockwise and Counterclockwise Pelvic Circles',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/fV0vj0IGRFc'
  },
  {
    id: 3240,
    name: 'Standing Pelvic Tilt',
    source: 'stretch-affect',
    category: 'Stability',
    equipment: 'Bodyweight',
    description: 'A fitness exercise targeting strength, mobility, or conditioning.',
    videoUrl: 'https://www.youtube.com/embed/McKAyeToPSM'
  },
];
