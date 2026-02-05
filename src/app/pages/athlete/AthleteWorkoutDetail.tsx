import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Check, MessageSquare } from 'lucide-react';
import { WorkoutComments } from '../../components/WorkoutComments';

interface Exercise {
  id: string;
  letter: string;
  type: string;
  name: string;
  sets: string;
  videoUrl?: string;
  videoThumbnail?: string;
  completed: boolean;
}

const mockWorkoutData: { [key: string]: { date: string; day: string; exercises: Exercise[] } } = {
  '1': {
    date: 'February 4, 2026',
    day: 'Tuesday',
    exercises: [
      { 
        id: '1',
        letter: 'A',
        type: 'SINGLE',
        name: 'Bench Press',
        sets: '4x8',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        completed: false
      },
      { 
        id: '2',
        letter: 'B',
        type: 'SINGLE',
        name: 'Barbell Rows',
        sets: '4x8',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
        completed: false
      },
      { 
        id: '3',
        letter: 'C',
        type: 'SINGLE',
        name: 'Overhead Press',
        sets: '3x10',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80',
        completed: false
      },
      { 
        id: '4',
        letter: 'D',
        type: 'SINGLE',
        name: 'Pull-ups',
        sets: '3x8',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80',
        completed: false
      }
    ]
  },
  '2': {
    date: 'February 5, 2026',
    day: 'Wednesday',
    exercises: [
      { 
        id: '1',
        letter: 'A',
        type: 'SINGLE',
        name: 'Moving Pogos',
        sets: '3x12',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80',
        completed: false
      },
      { 
        id: '2',
        letter: 'B',
        type: 'SINGLE',
        name: 'Lateral Moving Pogo Hops',
        sets: '3x10',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
        completed: false
      },
      { 
        id: '3',
        letter: 'C',
        type: 'SINGLE',
        name: 'A marches',
        sets: '3x20',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1584863231364-2e1d1b8b0c1d?w=800&q=80',
        completed: true
      },
      { 
        id: '4',
        letter: 'D',
        type: 'SINGLE',
        name: 'Lateral Bound with Mini Bounce',
        sets: '3x8',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
        completed: false
      },
      { 
        id: '5',
        letter: 'E',
        type: 'SINGLE',
        name: 'Chin-Up',
        sets: '4x6',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=800&q=80',
        completed: false
      },
      { 
        id: '6',
        letter: 'F',
        type: 'SINGLE',
        name: 'Barbell Bench Press',
        sets: '4x8',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        completed: false
      },
      { 
        id: '7',
        letter: 'G',
        type: 'SINGLE',
        name: 'Wide Grip Seated Row',
        sets: '3x12',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
        completed: false
      }
    ]
  },
  '10': {
    date: 'February 3, 2026',
    day: 'Monday',
    exercises: [
      { 
        id: '1',
        letter: 'A',
        type: 'SINGLE',
        name: 'Back Squats',
        sets: '4x8',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
        completed: true
      },
      { 
        id: '2',
        letter: 'B',
        type: 'SINGLE',
        name: 'Romanian Deadlifts',
        sets: '3x10',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80',
        completed: true
      },
      { 
        id: '3',
        letter: 'C',
        type: 'SINGLE',
        name: 'Leg Press',
        sets: '3x12',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800&q=80',
        completed: true
      }
    ]
  }
};

export function AthleteWorkoutDetail() {
  const navigate = useNavigate();
  const { workoutId } = useParams();
  const [showCompletion, setShowCompletion] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>(mockWorkoutData[workoutId || '2']?.exercises || mockWorkoutData['2'].exercises);

  const workoutData = mockWorkoutData[workoutId || '2'] || mockWorkoutData['2'];

  const handleCompleteWorkout = () => {
    setShowCompletion(true);
  };

  const handleCloseCompletion = () => {
    setShowCompletion(false);
    navigate('/athlete/home');
  };

  const toggleExerciseComplete = (exerciseId: string) => {
    setExercises(exercises.map(ex => 
      ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex
    ));
  };

  const handleAddResults = (exercise: Exercise) => {
    setSelectedExercise(exercise);
  };

  const handleBackFromExerciseDetail = () => {
    setSelectedExercise(null);
  };

  // If an exercise is selected, show the detail view
  if (selectedExercise) {
    return <ExerciseDetailView 
      exercise={selectedExercise} 
      onBack={handleBackFromExerciseDetail}
      onToggleComplete={toggleExerciseComplete}
    />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-2">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="text-white hover:text-[#FFD000] transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button onClick={() => setShowComments(true)} className="text-white hover:text-[#FFD000] transition-colors">
            <MessageSquare className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center">
          <div className="text-gray-400 text-sm mb-0.5 font-semibold">{workoutData.day}</div>
          <div className="text-white text-xl font-semibold">{workoutData.date}</div>
          <div className="text-gray-400 text-sm mt-1">{exercises.length} Exercises</div>
        </div>
      </div>

      {/* Exercises */}
      <div className="px-4 pt-4 space-y-4 pb-2">{exercises.map((exercise) => (
        <div key={exercise.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Exercise Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">{exercise.type}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">{exercise.letter}</span>
              </div>
              <button 
                onClick={() => toggleExerciseComplete(exercise.id)}
                className="transition-colors"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  exercise.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  <Check className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Exercise Content */}
          <div className="p-4">
            <h3 className="text-black text-lg font-semibold mb-4">{exercise.name}</h3>

            {/* Video Thumbnail */}
            {exercise.videoThumbnail && (
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <img 
                  src={exercise.videoThumbnail} 
                  alt={exercise.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="mb-3">
              <h4 className="text-black font-medium mb-2">Instructions</h4>
              <p className="text-gray-700 text-sm">{exercise.sets}</p>
            </div>

            {/* Add Results Button */}
            <button 
              onClick={() => handleAddResults(exercise)}
              className="w-full py-3 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors"
            >
              Add results for {exercise.letter}
            </button>
          </div>
        </div>
      ))}</div>

      {/* Complete Workout Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={handleCompleteWorkout}
          className="w-full py-4 bg-[#FFD000] text-black font-semibold rounded-xl hover:bg-[#FFD000]/90 transition-colors"
        >
          Complete Workout
        </button>
      </div>

      {/* Completion Animation Modal */}
      {showCompletion && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center animate-scale-in">
            <div className="mb-6">
              <div className="w-20 h-20 bg-[#FFD000] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Workout Complete!</h2>
              <p className="text-gray-600">Great job! You crushed today's workout.</p>
            </div>
            
            <button
              onClick={handleCloseCompletion}
              className="w-full py-3 bg-black text-white font-medium rounded-xl hover:bg-black/90 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Workout Comments Modal */}
      {showComments && (
        <WorkoutComments
          workoutId={workoutId || '2'}
          workoutDate={workoutData.date}
          onClose={() => setShowComments(false)}
        />
      )}

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes bounce-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out 0.1s backwards;
        }
      `}</style>
    </div>
  );
}

// Exercise Detail View Component
function ExerciseDetailView({ 
  exercise, 
  onBack,
  onToggleComplete 
}: { 
  exercise: Exercise; 
  onBack: () => void;
  onToggleComplete: (id: string) => void;
}) {
  const [results, setResults] = useState('');
  const [isComplete, setIsComplete] = useState(exercise.completed);

  const handleToggleComplete = () => {
    const newCompleteState = !isComplete;
    setIsComplete(newCompleteState);
    onToggleComplete(exercise.id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white px-4 py-4 flex items-center">
        <button onClick={onBack} className="text-white hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium flex-1 text-center mr-6">{exercise.name}</h1>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Instructions */}
        <div className="bg-white rounded-xl p-4 mb-6">
          <h2 className="text-black text-lg font-semibold mb-3">Instructions</h2>
          <p className="text-gray-800">{exercise.sets}</p>
        </div>

        {/* Your Result */}
        <div className="mb-6">
          <h2 className="text-black text-lg font-semibold mb-3">Your result</h2>
          <textarea
            value={results}
            onChange={(e) => setResults(e.target.value)}
            placeholder="Type your results..."
            className="w-full h-48 bg-white rounded-xl p-4 border border-gray-200 resize-none focus:outline-none focus:border-gray-300"
          />
        </div>

        {/* Mark Complete Toggle */}
        <div className="bg-white rounded-xl p-4 mb-6 flex items-center justify-between">
          <span className="text-black font-medium">Mark this activity complete?</span>
          <button
            onClick={handleToggleComplete}
            className={`w-12 h-7 rounded-full transition-colors relative ${
              isComplete ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
              isComplete ? 'translate-x-5' : 'translate-x-0.5'
            }`} />
          </button>
        </div>

        {/* Add Results Button */}
        <button className="w-full py-4 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-black/90 transition-colors">
          Add results for {exercise.letter}
        </button>
      </div>
    </div>
  );
}