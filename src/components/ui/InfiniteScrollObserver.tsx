import { useEffect } from 'react';

interface InfiniteScrollObserverProps {
  onIntersect: () => void;
  rootMargin?: string;
}

export const InfiniteScrollObserver = ({
  onIntersect,
  rootMargin = '100px'
}: InfiniteScrollObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onIntersect();
      }
    }, { rootMargin });

    const sentinel = document.createElement('div');
    document.body.appendChild(sentinel);
    observer.observe(sentinel);

    return () => {
      observer.unobserve(sentinel);
      sentinel.remove();
    };
  }, [onIntersect, rootMargin]);

  return null;
};