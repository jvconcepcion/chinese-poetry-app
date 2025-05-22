import poemsData from '@/data/poems.json';
import { Poem, PoemListResponse } from '@/interfaces/poem.interface';

const PAGE_SIZE = 5;
const SEARCH_DELAY = 300;

// Type assertion for imported JSON data
const typedPoemsData = poemsData as Poem[];

export const fetchPoems = async (
  searchTerm: string = '',
  page: number = 1
): Promise<PoemListResponse> => {
  await new Promise(resolve => setTimeout(resolve, SEARCH_DELAY));

  const filtered = typedPoemsData.filter(poem => {
    const searchLower = searchTerm.toLowerCase();
    return (
      poem.title.toLowerCase().includes(searchLower) ||
      poem.author.toLowerCase().includes(searchLower) ||
      poem.titlePinyin.toLowerCase().includes(searchLower) ||
      poem.titleEnglish.toLowerCase().includes(searchLower)
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