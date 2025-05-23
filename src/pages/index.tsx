import PoemCard from '@/components/poem/PoemCard';
import i18nConfig from '../../next-i18next.config';
import { useTranslation } from 'next-i18next';
import { useState, useRef } from 'react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useRouter } from 'next/router';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { InfiniteScrollObserver } from '@/components/ui/InfiniteScrollObserver';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParallaxImage } from '@/components/ui/ParallaxImage';


export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  const [searchTerm, setSearchTerm] = useState<string>('');
  const { poems, hasMore, isLoading, loadMore } = useInfiniteScroll(searchTerm);

  const contentRef = useRef<HTMLDivElement>(null);


  return (
    <div className='min-h-screen flex flex-col relative overflow-hidden'>
      <Header />

      <ParallaxImage
        imageUrl='/assets/images/landscape-painting.jpg'
        speed={-20}
        opacity={[2, 0.5]}
      />

      <main
        ref={contentRef}
        className='flex-1 container mx-auto px-4 py-8 max-w-6xl relative z-10'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {poems.map((poem, index) => (
            <PoemCard
              key={poem.id}
              poem={poem}
              index={index}
              locale={locale}
            />
          ))}
        </div>

        {isLoading && <LoadingSkeleton />}

        {hasMore && (
          <InfiniteScrollObserver
            onIntersect={loadMore}
            rootMargin='400px'
          />
        )}

        {!hasMore && poems.length > 0 && (
          <div className='text-center py-1 text-white font-semibold'>
            ---- {t('header.all_loaded')} ----
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'zh', ['common'], i18nConfig)),
    },
  };
};