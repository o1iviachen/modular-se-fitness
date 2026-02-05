export interface LibraryExercise {
  id: number;
  name: string;
  source: string;
  category: string;
  duration: string;
  equipment: string;
  description: string;
  videoUrl?: string;
}

export const exerciseLibrary: LibraryExercise[] = [
  {
    id: 1,
    name: '90/90 Hip Stretch',
    source: 'stretch-affect',
    category: 'Mobility',
    duration: '3 min',
    equipment: 'None',
    description: 'Deep hip mobility work for internal and external rotation',
    videoUrl: 'https://player.vimeo.com/video/123456789'
  },
  {
    id: 2,
    name: 'Thoracic Spine Rotation',
    source: 'stretch-affect',
    category: 'Mobility',
    duration: '5 min',
    equipment: 'Foam Roller',
    description: 'Improve thoracic mobility and posture',
    videoUrl: 'https://player.vimeo.com/video/123456790'
  },
  {
    id: 3,
    name: 'Hip Flexor Stretch Series',
    source: 'stretch-affect',
    category: 'Flexibility',
    duration: '4 min',
    equipment: 'None',
    description: 'Progressive stretching for tight hip flexors',
    videoUrl: 'https://player.vimeo.com/video/123456791'
  },
  {
    id: 4,
    name: 'Snatch',
    source: 'central-athlete',
    category: 'Olympic Lifting',
    duration: 'Varies',
    equipment: 'Barbell',
    description: 'Full olympic snatch with proper technique',
    videoUrl: 'https://player.vimeo.com/video/234567890'
  },
  {
    id: 5,
    name: 'Clean & Jerk',
    source: 'central-athlete',
    category: 'Olympic Lifting',
    duration: 'Varies',
    equipment: 'Barbell',
    description: 'Complete clean and jerk movement',
    videoUrl: 'https://player.vimeo.com/video/234567891'
  },
  {
    id: 6,
    name: 'Front Squat',
    source: 'central-athlete',
    category: 'Strength',
    duration: 'Varies',
    equipment: 'Barbell',
    description: 'Quad-dominant squat with front rack position',
    videoUrl: 'https://player.vimeo.com/video/234567892'
  },
  {
    id: 7,
    name: 'Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    duration: 'Varies',
    equipment: 'Barbell',
    description: 'Conventional deadlift for posterior chain development',
    videoUrl: 'https://player.vimeo.com/video/234567893'
  },
  {
    id: 8,
    name: 'Overhead Press',
    source: 'central-athlete',
    category: 'Strength',
    duration: 'Varies',
    equipment: 'Barbell',
    description: 'Strict overhead press for shoulder strength',
    videoUrl: 'https://player.vimeo.com/video/234567894'
  },
  {
    id: 9,
    name: 'Shoulder Mobility Flow',
    source: 'stretch-affect',
    category: 'Mobility',
    duration: '6 min',
    equipment: 'Band',
    description: 'Dynamic shoulder mobility and warm-up sequence',
    videoUrl: 'https://player.vimeo.com/video/123456792'
  },
  {
    id: 10,
    name: 'Ankle Mobility Drills',
    source: 'stretch-affect',
    category: 'Mobility',
    duration: '4 min',
    equipment: 'Wall',
    description: 'Improve ankle dorsiflexion for better squat depth',
    videoUrl: 'https://player.vimeo.com/video/123456793'
  },
  {
    id: 11,
    name: 'Muscle-Up Progression',
    source: 'central-athlete',
    category: 'Gymnastics',
    duration: 'Varies',
    equipment: 'Pull-up Bar',
    description: 'Build strength and technique for muscle-ups',
    videoUrl: 'https://player.vimeo.com/video/234567895'
  },
  {
    id: 12,
    name: 'Handstand Push-Up',
    source: 'central-athlete',
    category: 'Gymnastics',
    duration: 'Varies',
    equipment: 'Wall',
    description: 'Vertical pressing movement for upper body strength',
    videoUrl: 'https://player.vimeo.com/video/234567896'
  },
  {
    id: 13,
    name: 'Barbell Squat',
    source: 'central-athlete',
    category: 'Strength',
    duration: 'Varies',
    equipment: 'Barbell',
    description: 'Back squat for lower body strength development',
    videoUrl: 'https://player.vimeo.com/video/234567897'
  },
  {
    id: 14,
    name: 'Romanian Deadlift',
    source: 'central-athlete',
    category: 'Strength',
    duration: 'Varies',
    equipment: 'Barbell',
    description: 'Hip hinge movement targeting hamstrings and glutes',
    videoUrl: 'https://player.vimeo.com/video/234567898'
  },
  {
    id: 15,
    name: 'Leg Press',
    source: 'central-athlete',
    category: 'Strength',
    duration: 'Varies',
    equipment: 'Leg Press Machine',
    description: 'Compound lower body pressing movement',
    videoUrl: 'https://player.vimeo.com/video/234567899'
  },
  {
    id: 16,
    name: 'Walking Lunges',
    source: 'central-athlete',
    category: 'Strength',
    duration: 'Varies',
    equipment: 'Dumbbells/Bodyweight',
    description: 'Unilateral leg exercise for strength and balance',
    videoUrl: 'https://player.vimeo.com/video/234567800'
  }
];