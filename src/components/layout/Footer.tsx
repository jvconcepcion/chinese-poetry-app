import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="border-t border-gray-100 mt-0">
      <div className="container mx-auto px-4 py-8 max-w-4xl text-center text-gray-600">
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  );
};