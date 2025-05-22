import PoemCard from '@/components/poem/PoemCard';
import i18nConfig from '../../next-i18next.config';
import { useState } from 'react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useRouter } from 'next/router';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { InfiniteScrollObserver } from '@/components/ui/InfiniteScrollObserver';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  const [searchTerm, setSearchTerm] = useState('');
  const { poems, hasMore, isLoading, loadMore } = useInfiniteScroll(searchTerm);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {poems.map(poem => (
            <PoemCard 
              key={poem.id} 
              poem={poem}
              locale={locale}
            />
          ))}
        </div>

        {isLoading && <LoadingSkeleton />}

        {hasMore && (
          <InfiniteScrollObserver 
            onIntersect={loadMore}
            rootMargin="200px"
          />
        )}

        {!hasMore && poems.length > 0 && (
          <div className="text-center py-10 text-gray-500">
            已加载全部 {poems.length} 首诗词
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