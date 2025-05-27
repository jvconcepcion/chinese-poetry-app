import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { SearchPoetryContext } from '@/lib/context';
import Svg from '@/components/ui/Svg';
import Image from 'next/image';

export const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const searchContext = useContext(SearchPoetryContext);

  if (!searchContext) {
    throw new Error('SearchPoetryContext is missing in the component tree');
  };

  const { searchTerm, setSearchTerm } = searchContext;
  const [localSearch, setLocalSearch] = useState(searchTerm);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(localSearch);
  };

  return (
    <header
      className='sticky top-0 bg-gradient-to-r from-[#5e5d62]/50 via-white/30 to-blue-950/20 z-10 w-full'
    >
      <div className='container mx-auto px-4 py-4 md:py-8 max-w-4xl flex gap-10'>
        <Image
          className='hidden md:block'
          src={'/assets/images/site-icon.png'}
          width={100}
          height={100}
          alt=''
        />
        <div className='w-full'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-lg md:text-4xl font-bold text-red-800 flex gap-1 items-center text-outline-white'>
              <Image
                className='w-14 h-14 block md:hidden'
                src={'/assets/images/site-icon.png'}
                width={100}
                height={100}
                alt=''
              />
              {t('header.navTitle')}
            </h1>
            <select
              onChange={changeLanguage}
              className='rounded-lg px-2 py-1 outline-none'
              value={router.locale}
            >
              <option value='en'>EN</option>
              <option value='zh'>中文</option>
            </select>

          </div>
           <form onSubmit={handleSearch}  className='flex bg-white rounded-lg shadow-sm py-2'>
            <input
              type='text'
              placeholder={t('header.search_placeholder')}
              className='w-full p-3 focus:outline-none border-r'
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <button className='px-6 hover:text-red-800'><Svg component='magnifier' /></button>
          </form>
        </div>
      </div>
    </header>
  );
};