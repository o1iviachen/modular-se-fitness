import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export function usePageState<T>(key: string, initialState: T): [T, (value: T) => void] {
  const location = useLocation();
  const storageKey = `page_state_${key}_${location.pathname}`;

  // Initialize state from localStorage or use initial state
  const [state, setState] = useState<T>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : initialState;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, setState];
}
