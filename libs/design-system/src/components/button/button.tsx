import React from 'react';
import { tw } from 'twind';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ className, ...props }) => (
  <button
    {...props}
    className={`${tw`rounded bg-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 hover:bg-gray-300 hover:focus:ring-gray-300`} ${className}`}
  />
);
