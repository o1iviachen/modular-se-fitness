import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router';

/**
 * Navigation-aware scroll restoration.
 *
 * Uses useNavigationType() to distinguish forward vs back navigation:
 * - POP  (back/forward button or navigate(-1)) → restore previous scroll position
 * - PUSH / REPLACE (new navigation)            → scroll to top
 *
 * Key insight: When the route changes, the Outlet content swaps in the DOM,
 * which can trigger a scroll event that resets the position to 0. To avoid
 * losing the real scroll position, we track it in a ref and persist it to
 * sessionStorage during the render phase — before the DOM commit.
 */
const STORAGE_PREFIX = 'scroll_pos_';

export function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  // Track the live scroll position in a ref (updated by scroll listener)
  const scrollPosRef = useRef(0);
  const prevKeyRef = useRef(location.key);

  // Save scroll position for the PREVIOUS route during the render phase,
  // before React commits the DOM (which would change the scroll position).
  if (prevKeyRef.current !== location.key) {
    sessionStorage.setItem(
      `${STORAGE_PREFIX}${prevKeyRef.current}`,
      String(scrollPosRef.current)
    );
    prevKeyRef.current = location.key;
  }

  useEffect(() => {
    const scrollContainer = document.querySelector('.flex-1.overflow-auto') as HTMLElement;
    if (!scrollContainer) return;

    const storageKey = `${STORAGE_PREFIX}${location.key}`;
    let retryTimer: ReturnType<typeof setTimeout> | null = null;

    if (navigationType === 'POP') {
      // Back/forward navigation — restore saved position
      const saved = sessionStorage.getItem(storageKey);
      if (saved !== null) {
        const pos = parseInt(saved, 10);
        // Retry until the container is tall enough or we've tried 10 times (~500ms)
        const tryRestore = (attempt: number) => {
          scrollContainer.scrollTo(0, pos);
          if (Math.abs(scrollContainer.scrollTop - pos) > 1 && attempt < 10) {
            retryTimer = setTimeout(() => tryRestore(attempt + 1), 50);
          }
        };
        requestAnimationFrame(() => tryRestore(0));
      }
    } else {
      // PUSH or REPLACE — scroll to top
      scrollContainer.scrollTo(0, 0);
    }

    // Track scroll position in a ref (the render-phase code above reads it)
    scrollPosRef.current = scrollContainer.scrollTop;
    const handleScroll = () => {
      scrollPosRef.current = scrollContainer.scrollTop;
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      if (retryTimer !== null) clearTimeout(retryTimer);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [location.key, navigationType]);

  return null;
}
