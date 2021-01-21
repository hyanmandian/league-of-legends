import React from 'react';
import { tw } from 'twind';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = ({ className, ...props }: Props) => (
  <img
    {...props}
    className={tw`rounded-full h-24 w-24 border-2 border-gray-400 p-1 ${className}`}
  />
);
