import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

/**
 * Navigation-aware page state hook.
 *
 * - Forward navigation (new location.key) → uses initialState (fresh page)
 * - Back navigation (same location.key)   → restores previous selections
 *
 * State is stored in sessionStorage keyed by location.key, so it
 * survives back/forward but resets on fresh visits.
 */
export function usePageState<T>(key: string, initialState: T): [T, (value: T) => void] {
  const location = useLocation();
  const storageKey = `page_state_${key}_${location.key}`;

  const [state, setState] = useState<T>(() => {
    const saved = sessionStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : initialState;
  });

  // Persist state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, setState];
}
