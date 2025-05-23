import { SvgComponentProps } from '@/interfaces/svg.interface';
import React from 'react';

const ArrowDown: React.FC<SvgComponentProps> = ({
  color = 'none'
}) => {
  return (
    <>
      <svg width='24'
        height='24'
        fill={color}
        xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd'
          clipRule='evenodd'
          d='M7.47 9.47a.75.75 0 0 1 1.06 0L12 12.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z'
          fill='currentColor'></path>
      </svg>
    </>
  )
}

export default ArrowDown