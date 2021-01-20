import React, { Fragment } from 'react';
import { setup } from 'twind';

type Props = {};

setup();

export const Provider: React.FC<Props> = ({ children }) => (
  <Fragment>{children}</Fragment>
);
