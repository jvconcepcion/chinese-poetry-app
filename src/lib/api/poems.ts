import poemsData from '@/data/poems.json';
import { Poem, PoemListResponse } from '@/interfaces/poem.interface';

const PAGE_SIZE = 3;
const SEARCH_DELAY = 300;

export const fetchPoems = async (
  searchTerm: string = '',
  page: number = 1
): Promise<PoemListResponse> => {
  await new Promise(resolve => setTimeout(resolve, SEARCH_DELAY));

  // Search across multiple fields
  const filtered = poemsData.filter(poem => {
    const searchLower = searchTerm.toLowerCase();
    return (
      poem.title.toLowerCase().includes(searchLower) ||
      poem.author.toLowerCase().includes(searchLower) ||
      poem.titlePinyin.toLowerCase().includes(searchLower) ||
      poem.titleEnglish.toLowerCase().includes(searchLower) ||
      poem.dynasty.toLowerCase().includes(searchLower) ||
      poem.dynastyPinyin.toLowerCase().includes(searchLower)
    );
  });

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  return {
    poems: filtered.slice(startIndex, endIndex),
    total: filtered.length,
    hasMore: endIndex < filtered.length
  };
};