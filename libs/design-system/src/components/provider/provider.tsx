import React, { Fragment, createElement } from 'react';
import { setup } from 'goober/macro';
import { GlobalStyles } from 'twin.macro/macro';

type Props = {};

setup(createElement);

export const Provider: React.FC<Props> = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    {children}
  </Fragment>
);
