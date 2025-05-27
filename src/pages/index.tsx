import i18nConfig from '../../next-i18next.config';
import { useContext, useState, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SearchPoetryContext } from '@/lib/context';
import {
  Header,
  Footer,
  VideoBanner,
  ParallaxImage,
  InfiniteScrollObserver,
  LoadingSkeleton,
  PoemCard,
} from '@/components';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');
  const searchContext = useContext(SearchPoetryContext);

  if (!searchContext) {
    throw new Error('SearchPoetryContext is missing in the component tree');
  };

  const { searchTerm } = searchContext;
  // const [searchTerm, setSearchTerm] = useState<string>('');
  const { poems, hasMore, isLoading, loadMore } = useInfiniteScroll(searchTerm);

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main className=''>
        <section className='relative h-screen'>
          <VideoBanner
            title={t('header.title')}
            subtitle={t('header.subtitle')}
            className='flex items-center justify-center md:justify-start ml-4 md:ml-8'
          />
        </section>

        <section className='min-h-screen flex flex-col relative overflow-hidden'>
          <Header />
          <ParallaxImage
            imageUrl='/assets/images/landscape-painting.jpg'
            speed={-20}
            opacity={[2, 0.5]}
          />

          <article
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
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'zh', ['common'], i18nConfig)),
    },
  };
};