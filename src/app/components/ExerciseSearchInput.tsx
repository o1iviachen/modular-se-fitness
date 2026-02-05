import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { exerciseLibrary } from '../data/exerciseLibrary';

interface ExerciseSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export function ExerciseSearchInput({ value, onChange, onBlur }: ExerciseSearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter exercises based on search query
  const filteredExercises = exerciseLibrary.filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredExercises.length > 0;

  // Handle clicking outside to close dropdown
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

  const handleSelectExercise = (exerciseName: string) => {
    setSearchQuery(exerciseName);
    onChange(exerciseName);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleClear = () => {
    setSearchQuery('');
    onChange('');
    inputRef.current?.focus();
  };

  const getSourceBadgeColor = (source: string) => {
    switch (source) {
      case 'stretch-affect':
        return 'bg-purple-100 text-purple-700';
      case 'central-athlete':
        return 'bg-blue-100 text-blue-700';
      case 'custom':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getSourceName = (source: string) => {
    switch (source) {
      case 'stretch-affect':
        return 'Stretch Affect';
      case 'central-athlete':
        return 'Central Athlete';
      case 'custom':
        return 'Custom';
      default:
        return source;
    }
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
          onFocus={handleFocus}
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
          {hasResults ? (
            <div className="py-2">
              {filteredExercises.slice(0, 8).map((exercise) => (
                <button
                  key={exercise.id}
                  onClick={() => handleSelectExercise(exercise.name)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{exercise.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getSourceBadgeColor(exercise.source)}`}>
                      {getSourceName(exercise.source)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {exercise.category} • {exercise.equipment}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center">
              <p className="text-sm text-gray-500 mb-2">No exercises found in library</p>
              <p className="text-xs text-gray-400">
                Continue typing to use "{searchQuery}" as a custom exercise
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
