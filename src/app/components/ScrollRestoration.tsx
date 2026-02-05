import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

// Store scroll positions for each route
const scrollPositions: { [key: string]: number } = {};

export function ScrollRestoration() {
  const location = useLocation();
  const previousPath = useRef<string>('');
  
  useEffect(() => {
    // Get the current path
    const path = location.pathname;
    
    // Find the scrollable container (the main content area)
    const scrollContainer = document.querySelector('.flex-1.overflow-auto') as HTMLElement;
    
    if (!scrollContainer) return;
    
    // Check if we have a stored scroll position for this path
    const savedPosition = scrollPositions[path];
    
    // If we're returning to a page we've visited, restore position
    // Otherwise scroll to top (new page)
    if (savedPosition !== undefined && previousPath.current !== '') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollContainer.scrollTo(0, savedPosition);
      }, 0);
    } else {
      scrollContainer.scrollTo(0, 0);
    }
    
    previousPath.current = path;
    
    // Save scroll position when scrolling
    const handleScroll = () => {
      scrollPositions[path] = scrollContainer.scrollTop;
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      // Save one last time before unmounting
      scrollPositions[path] = scrollContainer.scrollTop;
    };
  }, [location.pathname]);
  
  return null;
}