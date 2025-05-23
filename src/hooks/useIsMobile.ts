import { useEffect, useState } from 'react';

export const useIsMobile = (maxWidth = 767) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined'
      ? window.innerWidth <= maxWidth
      : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [maxWidth]);

  return isMobile;
};
