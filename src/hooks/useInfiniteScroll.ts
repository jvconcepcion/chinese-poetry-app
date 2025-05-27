import { useState, useEffect } from 'react';
import { Poem, PoemListResponse } from '@/interfaces/poem.interface';
import { fetchPoems } from '@/lib/api/poems';

export const useInfiniteScroll = (searchTerm: string) => {
  const [page, setPage] = useState(1);
  const [poems, setPoems] = useState<Poem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Reset to first page when search term changes
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  useEffect(() => {
    const loadPoems = async () => {
      setIsLoading(true);
      try {
        const response = await fetchPoems(searchTerm, page);
        
        setPoems(prev => {
          // Reset results when page is 1 (new search or initial load)
          if (page === 1) return response.poems;
          
          // Merge while preventing duplicates
          const existingIds = new Set(prev.map(p => p.id));
          const newPoems = response.poems.filter(p => !existingIds.has(p.id));
          return [...prev, ...newPoems];
        });
        
        setHasMore(response.hasMore);
      } finally {
        setIsLoading(false);
      }
    };

    loadPoems();
  }, [searchTerm, page]);

  return { poems, hasMore, isLoading, loadMore: () => setPage(p => p + 1) };
};