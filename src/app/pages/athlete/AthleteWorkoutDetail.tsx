import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Check, MessageSquare, Camera, Video, X, Loader2 } from 'lucide-react';
import { WorkoutComments } from '../../components/WorkoutComments';
import { useAuth } from '../../context/AuthContext';
import { getWorkout, toggleExerciseCompletion, completeWorkout as firestoreCompleteWorkout, saveExerciseResult, uploadResultMedia, deleteResultMedia, type ResultMedia } from '../../lib/workoutService';
import { isoToDisplayDate, isoToDayName, getExerciseLabels, toEmbedUrl } from '../../utils/helpers';
import { exerciseLibrary } from '../../data/exerciseLibrary';

interface Exercise {
  id: string;
  index: number;
  letter: string;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  notes: string;
  videoUrl?: string;
  completed: boolean;
  supersetWithPrev?: boolean;
  result?: string;
  resultMedia?: ResultMedia[];
}

export function AthleteWorkoutDetail() {
  const navigate = useNavigate();
  const { workoutId: dateString } = useParams(); // workoutId is actually ISO date string
  const { user } = useAuth();
  const [showCompletion, setShowCompletion] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [loading, setLoading] = useState(true);

  const displayDate = dateString ? isoToDisplayDate(dateString) : '';
  const dayName = dateString ? isoToDayName(dateString) : '';

  // Load workout from Firestore
  useEffect(() => {
    if (!user?.id || !dateString) {
      setLoading(false);
      return;
    }

    getWorkout(user.id, dateString).then((workout) => {
      if (workout && workout.exercises.length > 0) {
        const labels = getExerciseLabels(workout.exercises);
        const loaded: Exercise[] = workout.exercises.map((ex, i) => ({
          id: String(i),
          index: i,
          letter: labels[i],
          name: ex.name,
          sets: ex.sets,
          reps: ex.reps,
          weight: ex.weight,
          notes: ex.notes,
          videoUrl: ex.videoUrl || exerciseLibrary.find(lib => lib.name === ex.name)?.videoUrl,
          completed: ex.completed,
          supersetWithPrev: ex.supersetWithPrev,
          result: ex.result || '',
          resultMedia: ex.resultMedia || [],
        }));
        setExercises(loaded);
        setWorkoutNotes(workout.workoutNotes || '');
      }
      setLoading(false);
    }).catch((err) => {
      console.error('Failed to load workout:', err);
      setLoading(false);
    });
  }, [user?.id, dateString]);

  const handleCompleteWorkout = async () => {
    if (!user?.id || !dateString) return;
    await firestoreCompleteWorkout(user.id, dateString);
    setExercises(exercises.map(ex => ({ ...ex, completed: true })));
    setShowCompletion(true);
  };

  const handleCloseCompletion = () => {
    setShowCompletion(false);
    navigate('/athlete/home');
  };

  const toggleExerciseComplete = async (exerciseId: string) => {
    const idx = exercises.findIndex(ex => ex.id === exerciseId);
    if (idx === -1) return;

    const newCompleted = !exercises[idx].completed;
    setExercises(exercises.map(ex =>
      ex.id === exerciseId ? { ...ex, completed: newCompleted } : ex
    ));

    if (user?.id && dateString) {
      await toggleExerciseCompletion(user.id, dateString, idx, newCompleted);
    }
  };

  const handleAddResults = (exercise: Exercise) => {
    setSelectedExercise(exercise);
  };

  const handleSaveResult = async (exerciseId: string, result: string, media?: ResultMedia[]) => {
    const ex = exercises.find(e => e.id === exerciseId);
    if (!ex || !user?.id || !dateString) return;

    setExercises(exercises.map(e => e.id === exerciseId ? { ...e, result, resultMedia: media || e.resultMedia } : e));
    await saveExerciseResult(user.id, dateString, ex.index, result, media);
  };

  const handleBackFromExerciseDetail = () => {
    setSelectedExercise(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-[#1a1a1a] text-white px-4 pt-6 pb-6">
          <button onClick={() => navigate(-1)} className="text-white hover:text-[#FFD000] transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center justify-center py-12">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // If an exercise is selected, show the detail view
  if (selectedExercise) {
    return <ExerciseDetailView
      exercise={selectedExercise}
      athleteId={user?.id || ''}
      dateString={dateString || ''}
      onBack={handleBackFromExerciseDetail}
      onToggleComplete={toggleExerciseComplete}
      onSaveResult={handleSaveResult}
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
          <div className="text-gray-400 text-sm mb-0.5 font-semibold">{dayName}</div>
          <div className="text-white text-xl font-semibold">{displayDate}</div>
          <div className="text-gray-400 text-sm mt-1">{exercises.length} Exercises</div>
        </div>
      </div>

      {/* Workout Notes (if any) */}
      {workoutNotes && (
        <div className="px-4 pt-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Coach Notes</h3>
            <p className="text-gray-600 text-sm">{workoutNotes}</p>
          </div>
        </div>
      )}

      {/* Exercises */}
      <div className="px-4 pt-4 pb-2">{exercises.map((exercise, idx) => {
        const connectedAbove = exercise.supersetWithPrev;
        const connectedBelow = exercises[idx + 1]?.supersetWithPrev;
        return (
        <div key={exercise.id} className="flex gap-0">
          {/* Connector column */}
          <div className="flex flex-col items-center" style={{ width: '1.25rem' }}>
            <div className={`w-1 rounded-full flex-1 ${connectedAbove ? 'bg-gray-200' : ''}`} />
            <div className={`w-1 rounded-full flex-1 ${connectedBelow ? 'bg-gray-200' : ''}`} />
          </div>
          <div className={`flex-1 bg-white rounded-2xl shadow-sm overflow-hidden ${!connectedAbove ? 'mt-4' : 'mt-1'}`}>
          {/* Exercise Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">{exercise.letter}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{exercise.name}</span>
            </div>
            <div className="flex items-center gap-3">
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

            {/* Video Embed */}
            {exercise.videoUrl && (
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <iframe
                  src={toEmbedUrl(exercise.videoUrl!)}
                  title={exercise.name}
                  className="w-full h-48"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Sets x Reps summary */}
            {(exercise.sets || exercise.reps) && (
              <p className="text-gray-500 text-sm mb-3">
                {exercise.sets && exercise.reps
                  ? `${exercise.sets} x ${exercise.reps}`
                  : exercise.sets
                    ? `${exercise.sets} sets`
                    : `${exercise.reps} reps`}
                {exercise.weight ? ` @ ${exercise.weight}` : ''}
              </p>
            )}

            {/* Coach Notes */}
            {exercise.notes && (
              <div className="mb-3">
                <h4 className="text-black font-medium mb-2">Coach Notes</h4>
                <p className="text-gray-700 text-sm">{exercise.notes}</p>
              </div>
            )}

            {/* Athlete Result (if saved) */}
            {exercise.result && (
              <div className="mb-3">
                <h4 className="text-black font-medium mb-2">Your Result</h4>
                <p className="text-gray-700 text-sm whitespace-pre-wrap">{exercise.result}</p>
              </div>
            )}

            {/* Result Media (if any) */}
            {exercise.resultMedia && exercise.resultMedia.length > 0 && (
              <div className="mb-3 flex gap-2 flex-wrap">
                {exercise.resultMedia.map((media, mediaIdx) => (
                  <div key={mediaIdx} className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                    {media.type === 'image' ? (
                      <img src={media.url} alt="Result" className="w-full h-full object-cover" />
                    ) : (
                      <video src={media.url} className="w-full h-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Add/Edit Results Button */}
            <button
              onClick={() => handleAddResults(exercise)}
              className="w-full py-3 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors"
            >
              {exercise.result ? 'Edit results' : 'Add results'} for {exercise.letter}
            </button>
          </div>
        </div>
        </div>
        );
      })}</div>

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
      {showComments && user?.id && dateString && (
        <WorkoutComments
          athleteId={user.id}
          workoutDate={dateString}
          displayDate={displayDate}
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
  athleteId,
  dateString,
  onBack,
  onToggleComplete,
  onSaveResult,
}: {
  exercise: Exercise;
  athleteId: string;
  dateString: string;
  onBack: () => void;
  onToggleComplete: (id: string) => void;
  onSaveResult: (id: string, result: string, media?: ResultMedia[]) => void;
}) {
  const [results, setResults] = useState(exercise.result || '');
  const [isComplete, setIsComplete] = useState(exercise.completed);
  const [saving, setSaving] = useState(false);
  const [media, setMedia] = useState<ResultMedia[]>(exercise.resultMedia || []);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasUnsavedResults = results !== (exercise.result || '') || media.length !== (exercise.resultMedia?.length || 0);

  const handleBackWithCheck = () => {
    if (hasUnsavedResults) {
      if (!window.confirm('You have unsaved results. Are you sure you want to leave?')) return;
    }
    onBack();
  };

  const handleToggleComplete = () => {
    setIsComplete(!isComplete);
    onToggleComplete(exercise.id);
  };

  const handleSave = async () => {
    setSaving(true);
    await onSaveResult(exercise.id, results, media);
    setSaving(false);
    onBack();
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !athleteId || !dateString) return;

    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const uploaded = await uploadResultMedia(athleteId, dateString, exercise.index, file);
        setMedia(prev => [...prev, uploaded]);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleRemoveMedia = async (idx: number) => {
    const item = media[idx];
    try {
      await deleteResultMedia(item.storagePath);
    } catch {
      // File may already be deleted
    }
    setMedia(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white px-4 py-4 flex items-center">
        <button onClick={handleBackWithCheck} className="text-white hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium flex-1 text-center mr-6">{exercise.name}</h1>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Exercise Info */}
        <div className="bg-white rounded-xl p-4 mb-6">
          {(exercise.sets || exercise.reps) && (
            <div className="mb-3">
              <h2 className="text-black text-lg font-semibold mb-1">Prescription</h2>
              <p className="text-gray-800">
                {exercise.sets && exercise.reps
                  ? `${exercise.sets} x ${exercise.reps}`
                  : exercise.sets
                    ? `${exercise.sets} sets`
                    : `${exercise.reps} reps`}
                {exercise.weight ? ` @ ${exercise.weight}` : ''}
              </p>
            </div>
          )}
          {exercise.notes && (
            <div>
              <h2 className="text-black text-lg font-semibold mb-1">Coach Notes</h2>
              <p className="text-gray-800">{exercise.notes}</p>
            </div>
          )}
          {!exercise.sets && !exercise.reps && !exercise.notes && (
            <p className="text-gray-500">No instructions provided</p>
          )}
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

        {/* Media Upload */}
        <div className="mb-6">
          <h2 className="text-black text-lg font-semibold mb-3">Photos and Videos</h2>

          {/* Existing media */}
          {media.length > 0 && (
            <div className="flex gap-3 flex-wrap mb-3">
              {media.map((item, idx) => (
                <div key={idx} className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 group">
                  {item.type === 'image' ? (
                    <img src={item.url} alt="Result" className="w-full h-full object-cover" />
                  ) : (
                    <video src={item.url} className="w-full h-full object-cover" />
                  )}
                  <button
                    onClick={() => handleRemoveMedia(idx)}
                    className="absolute top-1 right-1 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                  {item.type === 'video' && (
                    <div className="absolute bottom-1 left-1">
                      <Video className="w-4 h-4 text-white drop-shadow" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Upload buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              {uploading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Camera className="w-4 h-4" />
              )}
              {uploading ? 'Uploading...' : 'Add Photo / Video'}
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFileSelect}
            className="hidden"
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

        {/* Save Results Button */}
        <button
          onClick={handleSave}
          disabled={saving || uploading}
          className="w-full py-4 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-black/90 transition-colors disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save results'}
        </button>
      </div>
    </div>
  );
}
