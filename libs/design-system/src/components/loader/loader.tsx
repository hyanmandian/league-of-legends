import React from 'react';

type Props = {
  show: boolean;
};

export const Loader = ({ show }: Props) => (
  <div aria-busy={show} aria-live="polite" aria-hidden={!show}>
    {show ? 'Loading...' : null}
  </div>
);
