import React from 'react';
import { tw } from 'twind';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: any;
  [key: string]: any;
};

export const Button: React.FC<Props> = ({
  as: Component = 'button',
  className,
  ...props
}) => (
  <Component
    type={Component === 'button' ? 'button' : undefined}
    {...props}
    className={tw`inline-block rounded bg-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 hover:bg-gray-300 hover:focus:ring-gray-300 ${className}`}
  />
);
