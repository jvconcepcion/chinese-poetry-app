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
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onIntersect(),
      { rootMargin }
    );

    const sentinel = document.createElement('div');
    sentinel.style.height = '1px';
    document.body.appendChild(sentinel);
    observer.observe(sentinel);

    return () => {
      observer.unobserve(sentinel);
      sentinel.remove();
    };
  }, [onIntersect, rootMargin]);

  return null;
};