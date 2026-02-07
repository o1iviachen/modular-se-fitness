import { useState, useMemo } from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';
import { useNavigate } from 'react-router';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { exerciseLibrary } from '../../data/exerciseLibrary';
import { AssignExerciseModal } from '../../components/AssignExerciseModal';
import { EquipmentFilterModal } from '../../components/EquipmentFilterModal';
import { getSourceBadgeColor, getSourceName } from '../../utils/exerciseHelpers';

const exerciseSources = [
  { id: 'all', name: 'All Exercises' },
  { id: 'stretch-affect', name: 'Stretch Affect' },
  { id: 'central-athlete', name: 'Central Athlete' },
  { id: 'custom', name: 'My Custom Exercises' }
];

const exerciseCategories = [
  { id: 'all', name: 'All Categories' },
  { id: 'Strength', name: 'Strength' },
  { id: 'Core', name: 'Core' },
  { id: 'Mobility', name: 'Mobility' },
  { id: 'Conditioning', name: 'Conditioning' },
  { id: 'Flexibility', name: 'Flexibility' },
  { id: 'Stability', name: 'Stability' },
  { id: 'Recovery', name: 'Recovery' },
];

// Derive unique equipment list from data, with Bodyweight first
const equipmentList = (() => {
  const all = [...new Set(exerciseLibrary.map(e => e.equipment))].sort();
  const bwIndex = all.indexOf('Bodyweight');
  if (bwIndex > 0) {
    all.splice(bwIndex, 1);
    all.unshift('Bodyweight');
  }
  return all;
})();

export function CoachLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEquipment, setSelectedEquipment] = useState('all');
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const filteredExercises = useMemo(() => exerciseLibrary.filter(exercise => {
    const matchesSearch = searchQuery === '' ||
                         exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSource = selectedSource === 'all' || exercise.source === selectedSource;
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    const matchesEquipment = selectedEquipment === 'all' || exercise.equipment === selectedEquipment;
    return matchesSearch && matchesSource && matchesCategory && matchesEquipment;
  }), [searchQuery, selectedSource, selectedCategory, selectedEquipment]);

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedExercise(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">Exercise Library</h1>
        <p className="text-gray-400 text-sm">Browse and assign exercises to athletes</p>
      </div>

      {/* Search */}
      <div className="px-6 -mt-4 mb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
          />
        </div>
      </div>

      {/* Source Filter */}
      <div className="px-6 mb-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {exerciseSources.map((source) => (
            <button
              key={source.id}
              onClick={() => setSelectedSource(source.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm ${
                selectedSource === source.id
                  ? 'bg-[#FFD000] text-black'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {source.name}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-6 mb-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {exerciseCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#FFD000] text-black'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Equipment Filter */}
      <div className="px-6 mb-6">
        <button
          onClick={() => setIsEquipmentModalOpen(true)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors text-sm ${
            selectedEquipment !== 'all'
              ? 'bg-[#FFD000] text-black'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          <span>{selectedEquipment === 'all' ? 'All Equipment' : selectedEquipment}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Results Count */}
      <div className="px-6 mb-3">
        <p className="text-sm text-gray-500">{filteredExercises.length} exercises</p>
      </div>

      {/* Exercises Grid */}
      <div className="px-6">
        {filteredExercises.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-500">No exercises found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h4 className="text-black">{exercise.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getSourceBadgeColor(exercise.source)}`}>
                        {getSourceName(exercise.source)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{exercise.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">{exercise.category}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">{exercise.equipment}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  <button
                    className="flex-1 bg-[#FFD000] text-black py-2 rounded-lg hover:bg-[#FFD000]/90 transition-colors text-sm"
                    onClick={() => openModal(exercise)}
                  >
                    Assign to Athlete
                  </button>
                  <button
                    className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    onClick={() => navigate(`/coach/exercise/${exercise.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Custom Exercise Button */}
      <div className="px-6 mt-6">
        <button className="w-full bg-black text-white rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-black/90 transition-colors shadow-sm" onClick={() => navigate('/coach/create-exercise')}>
          <Plus className="w-5 h-5" />
          <span>Create Custom Exercise</span>
        </button>
      </div>

      {/* Equipment Filter Modal */}
      <EquipmentFilterModal
        isOpen={isEquipmentModalOpen}
        onClose={() => setIsEquipmentModalOpen(false)}
        selectedEquipment={selectedEquipment}
        onSelect={setSelectedEquipment}
        equipmentList={equipmentList}
      />

      {/* Assign Exercise Modal */}
      {isModalOpen && selectedExercise && (
        <AssignExerciseModal
          exercise={selectedExercise}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
