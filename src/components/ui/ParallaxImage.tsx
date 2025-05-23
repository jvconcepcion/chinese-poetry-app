import { useParallax } from 'react-scroll-parallax';

interface ParallaxImageProps {
  imageUrl: string;
  speed?: number;
  translateX?: [number, number];
  translateY?: [number, number];
  scale?: [number, number];
  repeat?: string;
  size?: string;
  position?: string;
  className?: string;
  width?: string;
  height?: string;
  easing?: any;
  opacity?: [number, number];

}

export const ParallaxImage = ({
  imageUrl,
  speed = 0,
  translateX,
  translateY,
  scale,
  repeat = 'no-repeat',
  size = 'cover',
  position = 'center',
  width = '100%',
  height = '100%',
  className = '',
  easing,
  opacity,
}: ParallaxImageProps) => {
  const parallax = useParallax<HTMLDivElement>({
    speed,
    translateX,
    translateY,
    scale,
    easing,
    opacity,
  });
  return (
    <div
      ref={parallax.ref}
      className={`absolute -z-10 ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: repeat,
        backgroundSize: size,
        backgroundPosition: position,
        width,
        height,
      }}
    />
  );
};
