import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Check, Play } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

interface Exercise {
  id: number;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  notes: string;
  videoUrl?: string;
  completed: boolean;
}

const mockWorkoutData: { [key: string]: Exercise[] } = {
  '1': [
    { id: 1, name: 'Barbell Squat', sets: '4', reps: '8-10', weight: '185 lbs', notes: 'Focus on depth', completed: false },
    { id: 2, name: 'Romanian Deadlift', sets: '3', reps: '10-12', weight: '135 lbs', notes: '', videoUrl: 'https://player.vimeo.com/video/234567892', completed: false },
    { id: 3, name: 'Leg Press', sets: '3', reps: '12-15', weight: '270 lbs', notes: 'Slow tempo', videoUrl: 'https://player.vimeo.com/video/234567899', completed: false },
    { id: 4, name: 'Walking Lunges', sets: '3', reps: '20 steps', weight: 'Bodyweight', notes: '', videoUrl: 'https://player.vimeo.com/video/234567800', completed: true }
  ]
};

export function AthleteWorkoutDetail() {
  const navigate = useNavigate();
  const { workoutId } = useParams();

  const [exercises, setExercises] = useState<Exercise[]>(mockWorkoutData[workoutId || '1'] || []);
  const [workoutNotes] = useState('Remember to warm up with 10 min cardio and dynamic stretching');

  const toggleExerciseComplete = (id: number) => {
    setExercises(exercises.map(ex => ex.id === id ? { ...ex, completed: !ex.completed } : ex));
  };

  const completedCount = exercises.filter(ex => ex.completed).length;
  const progress = exercises.length > 0 ? Math.round((completedCount / exercises.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-black text-white px-6 py-8">
        <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <div className="text-sm text-gray-400 mb-1">Monday • Feb 5, 2026</div>
        <h1 className="text-xl font-semibold mb-3">Lower Body Strength</h1>
        
        <div className="bg-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Progress</span>
            <span className="text-sm">{completedCount}/{exercises.length} exercises</span>
          </div>
          <div className="w-full bg-black/30 rounded-full h-2">
            <div className="bg-[#FFD000] h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="mb-6">
          <h3 className="font-semibold mb-4">Exercises</h3>
          <div className="space-y-3">
            {exercises.map((exercise) => (
              <div key={exercise.id} className={`bg-white rounded-xl p-4 shadow-sm transition-all ${exercise.completed ? 'opacity-60' : ''}`}>
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleExerciseComplete(exercise.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                      exercise.completed ? 'bg-[#FFD000] border-[#FFD000]' : 'border-gray-300 hover:border-[#FFD000]'
                    }`}
                  >
                    {exercise.completed && <Check className="w-4 h-4 text-black" />}
                  </button>
                  
                  <div className="flex-1">
                    <h4 className={`text-black mb-2 ${exercise.completed ? 'line-through' : ''}`}>{exercise.name}</h4>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Sets</div>
                        <div className="text-sm font-medium">{exercise.sets}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Reps</div>
                        <div className="text-sm font-medium">{exercise.reps}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Weight</div>
                        <div className="text-sm font-medium">{exercise.weight}</div>
                      </div>
                    </div>
                    {exercise.notes && (
                      <div className="text-xs text-gray-600 bg-gray-50 rounded-lg px-3 py-2 mb-2">{exercise.notes}</div>
                    )}
                    {exercise.videoUrl && (
                      <button
                        className="text-sm text-gray-600 hover:text-black transition-colors flex items-center gap-1"
                        onClick={() => window.open(exercise.videoUrl, '_blank')}
                      >
                        <Play className="w-4 h-4" />
                        Watch Video
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {workoutNotes && (
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Workout Notes</h3>
            <div className="bg-white rounded-xl px-4 py-3 shadow-sm text-gray-700">{workoutNotes}</div>
          </div>
        )}

        <button
          className={`w-full py-4 rounded-xl font-medium transition-colors ${
            progress === 100 ? 'bg-[#FFD000] text-black hover:bg-[#FFD000]/90' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={progress !== 100}
        >
          {progress === 100 ? 'Complete Workout' : `Complete ${exercises.length - completedCount} more exercises`}
        </button>
      </div>
    </div>
  );
}
