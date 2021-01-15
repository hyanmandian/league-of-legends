import React from 'react';

type Props = {
  show: boolean;
};

export const Loader: React.FC<Props> = ({ show }) => (
  <div aria-busy={show} aria-live="polite" aria-hidden={!show}>
    {show ? 'Loading...' : null}
  </div>
);
