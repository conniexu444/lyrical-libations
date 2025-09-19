import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design that tracks window width with debouncing
 * to prevent excessive re-renders during window resize events.
 *
 * @param query - CSS media query string (e.g., '(max-width: 768px)')
 * @param debounceMs - Debounce delay in milliseconds (default: 100ms)
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string, debounceMs: number = 100): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    // Initialize with current match state if window is available
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    let timeoutId: number;

    const handleChange = (event: MediaQueryListEvent) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setMatches(event.matches);
      }, debounceMs);
    };

    // Set initial value
    setMatches(mediaQuery.matches);

    // Add listener with proper event handling
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      window.clearTimeout(timeoutId);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query, debounceMs]);

  return matches;
}

/**
 * Convenience hook for detecting mobile devices (screen width < 768px)
 * Uses the same breakpoint as Tailwind's 'md' breakpoint for consistency.
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}