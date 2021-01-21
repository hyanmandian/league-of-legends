import React from 'react';
import { tw } from 'twind';

type Props = {
  show: boolean;
};

export const Loader = ({ show }: Props) => (
  <div
    aria-busy={show}
    aria-live="polite"
    aria-label="Loading..."
    aria-hidden={!show}
    className={tw`transition-all bg-gray-500 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center w-screen h-screen ${
      !show ? 'invisible opacity-0' : ''
    }`}
  >
    <div>{show ? 'Loading...' : null}</div>
  </div>
);
