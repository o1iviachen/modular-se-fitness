import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router';
import { ArrowLeft, Plus, Trash2, GripVertical, Play, Link2, Unlink, MessageSquare, Copy, Check } from 'lucide-react';
import { WorkoutComments } from '../../components/WorkoutComments';
import { CopyWorkoutModal } from '../../components/CopyWorkoutModal';

import { ExerciseSearchInput } from '../../components/ExerciseSearchInput';
import { saveWorkout, getWorkout, copyWorkout, deleteWorkout, WorkoutExercise, type ResultMedia } from '../../lib/workoutService';
import { isoToDisplayDate, getExerciseLabels } from '../../utils/helpers';
import { exerciseLibrary, LibraryExercise } from '../../data/exerciseLibrary';
import { useAuth } from '../../context/AuthContext';
import { ConfirmModal } from '../../components/ConfirmModal';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface Exercise {
  id: number;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  notes: string;
  videoUrl?: string;
  supersetWithPrev: boolean;
  completed?: boolean;
  result?: string;
  resultMedia?: ResultMedia[];
}

export function WorkoutDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { workoutId } = useParams();
  const { workoutDate = '', workoutDay = '', athleteId = '', exerciseToAdd = null, cameFromLibrary = false } = location.state || {};
  const cameFromCreateExercise = !!exerciseToAdd;

  const doGoBack = () => {
    if (cameFromLibrary) {
      navigate('/coach/library');
    } else if (cameFromCreateExercise && athleteId) {
      navigate(`/coach/athlete/${athleteId}/workouts`);
    } else {
      navigate(-1);
    }
  };

  const getSnapshot = (exs: { name: string; sets?: string; reps?: string; weight?: string; notes?: string; videoUrl?: string; supersetWithPrev?: boolean }[], notes: string) =>
    JSON.stringify(exs.map(e => ({ name: e.name, sets: e.sets, reps: e.reps, weight: e.weight, notes: e.notes, videoUrl: e.videoUrl, supersetWithPrev: e.supersetWithPrev }))) + '||' + notes;

  const hasChanges = () => exercises.length > 0 && getSnapshot(exercises, workoutNotes) !== savedSnapshotRef.current;

  const handleBack = () => {
    if (hasChanges()) {
      setShowUnsavedModal(true);
      return;
    }
    doGoBack();
  };

  const { user } = useAuth();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [copying, setCopying] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [customExercises, setCustomExercises] = useState<LibraryExercise[]>([]);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [dropPosition, setDropPosition] = useState<number | null>(null);
  const [expandedResults, setExpandedResults] = useState<Set<number>>(new Set());
  const [lightboxMedia, setLightboxMedia] = useState<{ url: string; type: string } | null>(null);
  const [showUnsavedModal, setShowUnsavedModal] = useState(false);
  const savedSnapshotRef = useRef('');

  // Load custom exercises from Firestore
  useEffect(() => {
    if (!user?.id) return;
    const q = query(
      collection(db, 'users', user.id, 'customExercises'),
      orderBy('createdAt', 'desc')
    );
    return onSnapshot(q, (snap) => {
      setCustomExercises(snap.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id as any,
          name: data.name,
          source: 'custom',
          category: data.category,
          description: data.description,
          videoUrl: data.videoUrl || undefined,
        };
      }));
    });
  }, [user?.id]);

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
          videoUrl: ex.videoUrl || exerciseLibrary.find(lib => lib.name === ex.name)?.videoUrl,
          supersetWithPrev: ex.supersetWithPrev || false,
          completed: ex.completed || false,
          result: ex.result || '',
          resultMedia: ex.resultMedia || [],
        }));
        const loadedNotes = existing.workoutNotes || '';
        // Set snapshot BEFORE adding exerciseToAdd so hasChanges() detects the new exercise
        savedSnapshotRef.current = getSnapshot(loadedExercises, loadedNotes);
        // If exerciseToAdd, append it
        if (exerciseToAdd && !loadedExercises.some(e => e.name === exerciseToAdd.name)) {
          loadedExercises.push({ ...exerciseToAdd, id: Date.now(), supersetWithPrev: false });
        }
        setExercises(loadedExercises);
        setWorkoutNotes(loadedNotes);
      } else if (exerciseToAdd) {
        setExercises([{ ...exerciseToAdd, id: Date.now(), supersetWithPrev: false }]);
      }
      setLoading(false);
    }).catch((err) => {
      console.error('Failed to load workout:', err);
      if (exerciseToAdd) {
        setExercises([{ ...exerciseToAdd, id: Date.now(), supersetWithPrev: false }]);
      }
      setLoading(false);
    });
  }, [athleteId, workoutDate]);

  // If no workout date provided, redirect back
  if (!workoutDate) {
    doGoBack();
    return null;
  }

  const handleAddExercise = () => {
    const newExercise: Exercise = {
      id: Date.now(),
      name: '',
      sets: '',
      reps: '',
      weight: '',
      notes: '',
      supersetWithPrev: false,
    };
    setExercises([...exercises, newExercise]);
  };

  const handleToggleSuperset = (id: number) => {
    setExercises(exercises.map(ex =>
      ex.id === id ? { ...ex, supersetWithPrev: !ex.supersetWithPrev } : ex
    ));
  };

  const handleDeleteExercise = (id: number) => {
    const idx = exercises.findIndex(ex => ex.id === id);
    const updated = exercises.filter(ex => ex.id !== id);
    // The exercise that falls into the deleted slot loses its superset link
    if (idx < updated.length) {
      updated[idx] = { ...updated[idx], supersetWithPrev: false };
    }
    setExercises(updated);
  };

  const handleUpdateExercise = (id: number, field: keyof Exercise, value: string) => {
    setExercises(exercises.map(ex => ex.id === id ? { ...ex, [field]: value } : ex));
  };

  const handleReorder = (fromIdx: number, toPosition: number) => {
    if (toPosition === fromIdx || toPosition === fromIdx + 1) return;
    const newExercises = [...exercises];
    const [moved] = newExercises.splice(fromIdx, 1);
    // The exercise that fell into the removed slot loses its superset link
    if (fromIdx < newExercises.length) {
      newExercises[fromIdx] = { ...newExercises[fromIdx], supersetWithPrev: false };
    }
    const targetIdx = toPosition > fromIdx ? toPosition - 1 : toPosition;
    moved.supersetWithPrev = false;
    newExercises.splice(targetIdx, 0, moved);
    // The exercise right after the inserted one loses its superset link
    if (targetIdx + 1 < newExercises.length) {
      newExercises[targetIdx + 1] = { ...newExercises[targetIdx + 1], supersetWithPrev: false };
    }
    // First exercise can never be supersetted
    if (newExercises.length > 0) {
      newExercises[0] = { ...newExercises[0], supersetWithPrev: false };
    }
    setExercises(newExercises);
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
        supersetWithPrev: ex.supersetWithPrev || false,
      }));
      await saveWorkout(athleteId, workoutDate, firestoreExercises, workoutNotes);
      doGoBack();
    } catch (err) {
      console.error('Failed to save workout:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleCopy = async (targetDates: string[]) => {
    setCopying(true);
    try {
      await copyWorkout(athleteId, targetDates, exercises, workoutNotes);
      setShowCopyModal(false);
    } catch (err) {
      console.error('Failed to copy workout:', err);
    } finally {
      setCopying(false);
    }
  };

  const handleDeleteWorkout = async () => {
    if (!athleteId || !workoutDate) return;
    await deleteWorkout(athleteId, workoutDate);
    doGoBack();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-black text-white px-6 py-8">
          <button onClick={doGoBack} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
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
        <div className="flex items-center justify-between mb-4">
          <button onClick={handleBack} className="text-white hover:text-[#FFD000] transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowCopyModal(true)} className="text-white hover:text-[#FFD000] transition-colors" title="Copy workout to other dates">
              <Copy className="w-5 h-5" />
            </button>
            <button onClick={() => setShowDeleteConfirm(true)} className="text-white hover:text-red-500 transition-colors" title="Delete workout">
              <Trash2 className="w-5 h-5" />
            </button>
            <button onClick={() => setShowComments(true)} className="text-white hover:text-[#FFD000] transition-colors">
              <MessageSquare className="w-6 h-6" />
            </button>
          </div>
        </div>
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">Assign Workout</h1>
        {workoutDay && workoutDate && <p className="text-gray-400 text-sm mt-1">{isoToDisplayDate(workoutDate)} · {workoutDay}</p>}
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
            {(() => {
              const labels = getExerciseLabels(exercises);
              return exercises.map((exercise, idx) => (
              <div
                key={exercise.id}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = 'move';
                  const rect = e.currentTarget.getBoundingClientRect();
                  const midY = rect.top + rect.height / 2;
                  setDropPosition(e.clientY < midY ? idx : idx + 1);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (dragIdx !== null && dropPosition !== null) {
                    handleReorder(dragIdx, dropPosition);
                  }
                  setDragIdx(null);
                  setDropPosition(null);
                }}
              >
                {/* Drop indicator */}
                {dropPosition === idx && dragIdx !== null && dragIdx !== idx && dragIdx !== idx - 1 && (
                  <div className="h-1 bg-[#FFD000] rounded-full mb-2" />
                )}
                {/* Superset toggle between exercises */}
                {idx > 0 && (
                  <button
                    onClick={() => handleToggleSuperset(exercise.id)}
                    className={`w-full flex items-center justify-center gap-2 py-1.5 mb-3 rounded-lg text-xs font-medium transition-colors ${
                      exercise.supersetWithPrev
                        ? 'text-[#FFD000] bg-[#FFD000]/10'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {exercise.supersetWithPrev ? (
                      <><Link2 className="w-3.5 h-3.5" /> Supersetted</>
                    ) : (
                      <><Unlink className="w-3.5 h-3.5" /> Superset with above</>
                    )}
                  </button>
                )}
                <div className={`bg-white rounded-xl p-4 shadow-sm ${exercise.supersetWithPrev ? 'border-l-4 border-[#FFD000]' : ''} ${dragIdx === idx ? 'opacity-50' : ''} transition-opacity`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex flex-col items-center gap-1 mt-2">
                    <div className="w-7 h-7 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold text-gray-700">
                      {labels[idx]}
                    </div>
                    <div
                      draggable
                      onDragStart={(e) => {
                        setDragIdx(idx);
                        e.dataTransfer.effectAllowed = 'move';
                      }}
                      onDragEnd={() => {
                        setDragIdx(null);
                        setDropPosition(null);
                      }}
                      className="cursor-grab active:cursor-grabbing p-1 -m-1"
                    >
                      <GripVertical className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <ExerciseSearchInput
                      value={exercise.name}
                      onChange={(value) => handleUpdateExercise(exercise.id, 'name', value)}
                      customExercises={customExercises}
                      workoutContext={{ athleteId, workoutDate, workoutDay }}
                      onSelectExercise={(data) => {
                        setExercises(prev => prev.map(ex =>
                          ex.id === exercise.id ? { ...ex, name: data.name, videoUrl: data.videoUrl } : ex
                        ));
                      }}
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
                      placeholder="Notes"
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
                    {(exercise.result || (exercise.resultMedia && exercise.resultMedia.length > 0)) && (
                      <div className="mt-3 bg-green-50 border border-green-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedResults(prev => {
                            const next = new Set(prev);
                            if (next.has(exercise.id)) next.delete(exercise.id);
                            else next.add(exercise.id);
                            return next;
                          })}
                          className="w-full flex items-center justify-between px-3 py-2 hover:bg-green-100 transition-colors"
                        >
                          <span className="text-xs font-medium text-green-700">Athlete's Result</span>
                          <svg className={`w-4 h-4 text-green-600 transition-transform ${expandedResults.has(exercise.id) ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {expandedResults.has(exercise.id) && (
                          <div className="px-3 pb-3">
                            {exercise.result && (
                              <p className="text-sm text-green-900 whitespace-pre-wrap mb-2">{exercise.result}</p>
                            )}
                            {exercise.resultMedia && exercise.resultMedia.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {exercise.resultMedia.map((media, mediaIdx) => (
                                  <button
                                    key={mediaIdx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setLightboxMedia({ url: media.url, type: media.type });
                                    }}
                                    className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-200 hover:opacity-80 transition-opacity"
                                  >
                                    {media.type === 'video' ? (
                                      <>
                                        <video src={media.url} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </div>
                                      </>
                                    ) : (
                                      <img src={media.url} alt={`Result ${mediaIdx + 1}`} className="w-full h-full object-cover" />
                                    )}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => handleDeleteExercise(exercise.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${exercise.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              ));
            })()}
            {dropPosition === exercises.length && dragIdx !== null && dragIdx !== exercises.length - 1 && (
              <div className="h-1 bg-[#FFD000] rounded-full mt-2" />
            )}
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
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button
            onClick={handleBack}
            className="flex-1 bg-white border border-gray-300 text-black rounded-xl py-3 hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Workout Comments Modal */}
      {showComments && athleteId && workoutDate && (
        <WorkoutComments
          athleteId={athleteId}
          workoutDate={workoutDate}
          displayDate={isoToDisplayDate(workoutDate)}
          onClose={() => setShowComments(false)}
        />
      )}

      {/* Copy Workout Modal */}
      <CopyWorkoutModal
        isOpen={showCopyModal}
        sourceDate={workoutDate}
        onCopy={handleCopy}
        onClose={() => setShowCopyModal(false)}
        copying={copying}
      />

      {/* Delete Workout Confirm Modal */}
      <ConfirmModal
        isOpen={showDeleteConfirm}
        title="Delete Workout"
        message={`Are you sure you want to delete this workout for ${workoutDay} (${isoToDisplayDate(workoutDate)})? This cannot be undone.`}
        onConfirm={handleDeleteWorkout}
        onCancel={() => setShowDeleteConfirm(false)}
      />

      {/* Media Lightbox */}
      {lightboxMedia && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxMedia(null)}
        >
          <button
            onClick={() => setLightboxMedia(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          {lightboxMedia.type === 'video' ? (
            <video
              src={lightboxMedia.url}
              controls
              autoPlay
              className="max-w-full max-h-[85vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightboxMedia.url}
              alt="Result media"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}

      <ConfirmModal
        isOpen={showUnsavedModal}
        title="Unsaved Changes"
        message="You have unsaved changes. Are you sure you want to leave?"
        confirmText="Discard"
        cancelText="Stay"
        variant="danger"
        onConfirm={doGoBack}
        onCancel={() => setShowUnsavedModal(false)}
      />
    </div>
  );
}
