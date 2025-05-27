import { ReactNode, useState } from 'react';
import { SearchPoetryContext } from '@/lib/context';
import { ParallaxProvider } from 'react-scroll-parallax';

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <SearchPoetryContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchPoetryContext.Provider>
  )
};

export const Provider = ({ children }: { children: ReactNode }) => (
  <ParallaxProvider>
    <SearchProvider>
      {children}
    </SearchProvider>
  </ParallaxProvider>
)
