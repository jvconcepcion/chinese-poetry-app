import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-base md:text-2xl font-bold text-red-800">
            {t('header.title')}
          </h1>
          <select 
            onChange={changeLanguage}
            className="border rounded-lg px-3 py-1"
            value={router.locale}
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </div>
        <input
          type="text"
          placeholder={t('header.search_placeholder')}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </header>
  );
};