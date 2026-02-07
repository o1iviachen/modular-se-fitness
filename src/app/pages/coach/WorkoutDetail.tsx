import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router';
import { ArrowLeft, Plus, Trash2, GripVertical, Play } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { ExerciseSearchInput } from '../../components/ExerciseSearchInput';
import { saveWorkout, getWorkout, WorkoutExercise } from '../../lib/workoutService';
import { isoToDisplayDate } from '../../utils/helpers';

interface Exercise {
  id: number;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  notes: string;
  videoUrl?: string;
}

export function WorkoutDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { workoutId } = useParams();
  const { workoutDate = '', workoutDay = '', athleteId = '', exerciseToAdd = null } = location.state || {};

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load existing workout from Firestore on mount
  useEffect(() => {
    if (!athleteId || !workoutDate) {
      setLoading(false);
      return;
    }

    getWorkout(athleteId, workoutDate).then((existing) => {
      if (existing && existing.exercises.length > 0) {
        let loadedExercises = existing.exercises.map((ex, i) => ({
          id: i + 1,
          name: ex.name,
          sets: ex.sets,
          reps: ex.reps,
          weight: ex.weight,
          notes: ex.notes,
          videoUrl: ex.videoUrl,
        }));
        // If exerciseToAdd, append it
        if (exerciseToAdd && !loadedExercises.some(e => e.name === exerciseToAdd.name)) {
          loadedExercises.push({ ...exerciseToAdd, id: Date.now() });
        }
        setExercises(loadedExercises);
        setWorkoutNotes(existing.workoutNotes || '');
      } else if (exerciseToAdd) {
        setExercises([{ ...exerciseToAdd, id: Date.now() }]);
      }
      setLoading(false);
    }).catch((err) => {
      console.error('Failed to load workout:', err);
      if (exerciseToAdd) {
        setExercises([{ ...exerciseToAdd, id: Date.now() }]);
      }
      setLoading(false);
    });
  }, [athleteId, workoutDate]);

  // If no workout date provided, redirect back
  if (!workoutDate) {
    navigate(-1);
    return null;
  }

  const handleAddExercise = () => {
    const newExercise: Exercise = {
      id: Date.now(),
      name: 'New Exercise',
      sets: '3',
      reps: '10',
      weight: '',
      notes: ''
    };
    setExercises([...exercises, newExercise]);
  };

  const handleDeleteExercise = (id: number) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  const handleUpdateExercise = (id: number, field: keyof Exercise, value: string) => {
    setExercises(exercises.map(ex => ex.id === id ? { ...ex, [field]: value } : ex));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const firestoreExercises: WorkoutExercise[] = exercises.map(ex => ({
        name: ex.name,
        sets: ex.sets,
        reps: ex.reps,
        weight: ex.weight,
        notes: ex.notes,
        videoUrl: ex.videoUrl || '',
        completed: false,
      }));
      await saveWorkout(athleteId, workoutDate, firestoreExercises, workoutNotes);
      navigate(-1);
    } catch (err) {
      console.error('Failed to save workout:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-black text-white px-6 py-8">
          <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        </div>
        <div className="flex items-center justify-center py-12">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white px-6 py-8">
        <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        {workoutDay && workoutDate && <h1 className="text-lg font-semibold">{workoutDay} <span className="text-sm">·</span> {isoToDisplayDate(workoutDate)}</h1>}
      </div>

      <div className="px-6 py-6">
        {/* Workout Notes - above exercises */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Workout Notes</h3>
          <textarea
            value={workoutNotes}
            onChange={(e) => setWorkoutNotes(e.target.value)}
            className="w-full bg-white rounded-xl px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFD000] resize-none shadow-sm"
            placeholder="Add notes about this workout..."
          />
        </div>

        {/* Exercises */}
        <div className="mb-6">
          <h3 className="font-semibold mb-4">Exercises ({exercises.length})</h3>
          <div className="space-y-3">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-gray-400 mt-2">
                    <GripVertical className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <ExerciseSearchInput
                      value={exercise.name}
                      onChange={(value) => handleUpdateExercise(exercise.id, 'name', value)}
                    />
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Sets</label>
                        <input
                          type="text"
                          value={exercise.sets}
                          onChange={(e) => handleUpdateExercise(exercise.id, 'sets', e.target.value)}
                          className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Reps</label>
                        <input
                          type="text"
                          value={exercise.reps}
                          onChange={(e) => handleUpdateExercise(exercise.id, 'reps', e.target.value)}
                          className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Weight</label>
                        <input
                          type="text"
                          value={exercise.weight}
                          onChange={(e) => handleUpdateExercise(exercise.id, 'weight', e.target.value)}
                          className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      value={exercise.notes}
                      onChange={(e) => handleUpdateExercise(exercise.id, 'notes', e.target.value)}
                      className="w-full bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                      placeholder="Notes (optional)"
                    />
                    {exercise.videoUrl && (
                      <button
                        className="mt-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                        onClick={() => window.open(exercise.videoUrl, '_blank')}
                      >
                        <Play className="w-4 h-4 inline-block mr-1" />
                        Watch Video
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteExercise(exercise.id)}
                    className="text-red-500 hover:text-red-700 transition-colors mt-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleAddExercise}
            className="w-full mt-3 border-2 border-dashed border-gray-300 rounded-xl py-3 flex items-center justify-center gap-2 text-gray-600 hover:border-[#FFD000] hover:text-[#FFD000] transition-colors bg-white"
          >
            <Plus className="w-5 h-5" />
            <span>Add Exercise</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 bg-[#FFD000] text-black rounded-xl py-3 hover:bg-[#FFD000]/90 transition-colors font-medium disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-white border border-gray-300 text-black rounded-xl py-3 hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
