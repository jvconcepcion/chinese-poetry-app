import { useMemo } from 'react';
import { ParallaxImage } from '../ui/ParallaxImage';
import { useParallax } from 'react-scroll-parallax';
import { Poem } from '@/interfaces/poem.interface';
import { useIsMobile } from '@/hooks/useIsMobile';

interface PoemCardProps {
  poem: Poem;
  index: number;
  locale?: string;
}

const PoemCard = ({ poem, index }: PoemCardProps) => {
const isMobile = useIsMobile();
const parallaxOptions = useMemo(() => {


  return {
    translateX: isMobile
      ? [0, 0] // disable on mobile
      : [0, 6 * (index % 3), 'easeInOut'] as any,
    opacity: [0.1, 2] as [number, number],
  };
}, [index]);

const cardParallax = useParallax<HTMLDivElement>(parallaxOptions);

  return (
    <div
      ref={cardParallax.ref}
      className='bg-white/60 p-4 mb-8 shadow-md rounded-xl hover:shadow-lg transition-all relative overflow-hidden group'
    >
      <ParallaxImage
        imageUrl='/assets/images/ink-splash-horizontal-final.png'
        speed={-10}
        scale={[1.65, 1]}
        repeat='repeat-x'
        size='auto 100%'
        position='left center'
        width='2000px'
        height='100%'
        className='opacity-20'
      />
      <div className='relative z-10'>
        <div className='flex justify-between items-start mb-2'>
          <div>
            <h2 className='text-xl font-semibold text-gray-800'>
              {poem.title}
              <span className='block text-sm text-gray-500 mt-1'>
                {poem.titlePinyin} · {poem.titleEnglish}
              </span>
            </h2>
            <p className='text-gray-600 mt-2'>
              {poem.author} ({poem.authorPinyin})
              <span className='block text-sm text-gray-500'>
                {poem.authorEnglish}
              </span>
            </p>
          </div>
          <span className='text-[12px] bg-red-50 text-red-600 px-3 py-1 rounded-full max-w-20 text-nowrap'>
            {poem.dynasty} ({poem.dynastyPinyin})
          </span>
        </div>

        <pre className='mt-3 font-serif text-gray-700 whitespace-pre-wrap'>
          {poem.content}
        </pre>

        <div className='mt-4 p-4 bg-gray-50/60 rounded-lg'>
          <h3 className='text-sm font-semibold text-gray-600 mb-2'>
            Translation
          </h3>
          <p className='text-gray-600 whitespace-pre-wrap'>
            {poem.translation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemCard;