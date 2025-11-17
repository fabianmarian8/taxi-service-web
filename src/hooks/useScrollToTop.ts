import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook that scrolls window to top whenever the route changes
 */
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}
