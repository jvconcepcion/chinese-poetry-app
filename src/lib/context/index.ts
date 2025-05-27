import { createContext } from 'react';

export interface SearchPoetryType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchPoetryContext = createContext<SearchPoetryType | null>(null);