import { useState, useEffect } from 'react';
import { Poem, PoemListResponse } from '@/interfaces/poem.interface';
import { fetchPoems } from '@/lib/api/poems';

export const useInfiniteScroll = (searchTerm: string) => {
  const [page, setPage] = useState(1);
  const [poems, setPoems] = useState<Poem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadPoems = async () => {
      setIsLoading(true);
      try {
        const response: PoemListResponse = await fetchPoems(searchTerm, page);
        
        setPoems(prev => 
          page === 1 
            ? response.poems 
            : [...prev, ...response.poems]
        );
        
        setHasMore(response.hasMore);
      } finally {
        setIsLoading(false);
      }
    };

    loadPoems();
  }, [searchTerm, page]);

  return {
    poems,
    hasMore,
    isLoading,
    loadMore: () => setPage(p => p + 1)
  };
};