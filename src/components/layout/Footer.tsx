import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Svg from '../ui/Svg';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className='bg-gradient-to-l from-[#5e5d62]/40 to-blue-950/40 shadow-md'>
      <div className='container mx-auto p-2 max-w-4xl text-center text-white'>
        <ul className='flex items-center justify-center gap-5'>
          <li className='pt-4'>
            <Link href='https://www.facebook.com/i.am.ye.xiu' target='_blank'><Svg component='facebook' /></Link>
          </li>
          <li className='pt-4'>
            <Link href='https://twitter.com/DBAnathan' target='_blank'><Svg component='twitter' /></Link>
          </li>
          <li className='pt-4'>
            <Link href='https://www.instagram.com/darth.nathan/' target='_blank'><Svg component='instagram' /></Link>
          </li>
          <li className='pt-4'>
            <Link href='#' target='_blank'><Svg component='spotify' /></Link>
          </li>
        </ul>
        <p className='mt-4'>{t('footer.text')}</p>
      </div>
    </footer>
  );
};