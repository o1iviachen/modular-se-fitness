import { useState, useRef, useEffect } from 'react';
import { Search, X, Plus } from 'lucide-react';
import { useNavigate } from 'react-router';
import { exerciseLibrary, LibraryExercise } from '../data/exerciseLibrary';
import { getSourceBadgeColor, getSourceName } from '../utils/exerciseHelpers';
import { formatCategory } from '../utils/helpers';

interface ExerciseSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSelectExercise?: (data: { name: string; videoUrl?: string }) => void;
  onBlur?: () => void;
  customExercises?: LibraryExercise[];
}

export function ExerciseSearchInput({ value, onChange, onSelectExercise, onBlur, customExercises = [] }: ExerciseSearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const allExercises = [...exerciseLibrary, ...customExercises];

  const filteredExercises = allExercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onBlur?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onBlur]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    onChange(newValue);
    setIsOpen(true);
  };

  const handleSelectExercise = (exercise: { name: string; videoUrl?: string }) => {
    setSearchQuery(exercise.name);
    onChange(exercise.name);
    onSelectExercise?.(exercise);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleClear = () => {
    setSearchQuery('');
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full pl-10 pr-8 py-2 bg-transparent font-medium focus:outline-none"
          placeholder="Search exercise library..."
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-64 overflow-y-auto z-50"
        >
          {filteredExercises.length > 0 ? (
            <div className="py-2">
              {filteredExercises.slice(0, 8).map((exercise) => (
                <button
                  key={exercise.id}
                  onClick={() => handleSelectExercise({ name: exercise.name, videoUrl: exercise.videoUrl })}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{exercise.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getSourceBadgeColor(exercise.source)}`}>
                      {getSourceName(exercise.source)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatCategory(exercise.category)} • {exercise.equipment}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center">
              <p className="text-sm text-gray-500 mb-2">No exercises found</p>
              <p className="text-xs text-gray-400">
                Continue typing to use "{searchQuery}" as a custom name
              </p>
            </div>
          )}
          {/* Create Custom Exercise */}
          <button
            onClick={() => navigate('/coach/create-exercise')}
            className="w-full px-4 py-3 text-left border-t border-gray-100 hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm text-[#b8960a] font-medium"
          >
            <Plus className="w-4 h-4" />
            Create Custom Exercise
          </button>
        </div>
      )}
    </div>
  );
}
