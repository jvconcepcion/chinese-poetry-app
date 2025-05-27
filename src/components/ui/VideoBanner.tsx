import React from 'react';
import clsx from 'clsx';
import { useParallax } from 'react-scroll-parallax';

interface VideoBanner {
  title?: string,
  subtitle?: string,
  video?: string,
  className?: string,
};

export const VideoBanner: React.FC<VideoBanner> = ({
  title = 'Title',
  subtitle = 'Subtitle',
  video = '/assets/videos/poetry-banner',
  className = 'flex items-center justify-center text-center',
}) => {
  const { ref } = useParallax<HTMLDivElement>({
    speed: -10,
    opacity: [1, 0],
  });

  return (
    <>
      {/* Video Background */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <video
          autoPlay
          muted
          loop
          className=' w-full h-full object-cover'
          poster='/assets/images/chinese-poetry-poster.png'
        >
          <source src={`${video}.mp4`} type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/40' />
      </div>

      <div className='absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/60 to-black/30' />

      {/* Header Text Overlay */}
      <div ref={ref} className={`relative z-10 h-full ${className}`}>
        <div className='max-w-4xl px-4 md:mb-96'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up md:w-36'>
            {title}
          </h1>
          <p className='text-base md:text-2xl text-white/90 font-serif mb-8 animate-fade-in-up delay-100'>
            {subtitle}
          </p>
        </div>
      </div>
    </>
  )
}
