import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header
      className='sticky top-0 bg-transparent z-10 w-full'
    >
      <div className='container mx-auto px-4 pt-8 max-w-4xl flex gap-10'>
        <Image
          className='hidden md:block'
          src={'/assets/images/site-icon.png'}
          width={100}
          height={100}
          alt=''
        />
        <div className='w-full'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-base md:text-2xl font-bold text-red-800 flex gap-1 items-center'>
              <Image
                className='w-14 h-14 block md:hidden'
                src={'/assets/images/site-icon.png'}
                width={100}
                height={100}
                alt=''
              />
              {t('header.title')}
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
          <input
            type='text'
            placeholder={t('header.search_placeholder')}
            className='w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500'
          />
        </div>
      </div>
    </header>
  );
};