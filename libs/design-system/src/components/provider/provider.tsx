import React, { Fragment } from 'react';
import { setup } from 'twind';

import twindConfig from '../../twind.config';

type Props = {};

if (typeof window !== 'undefined') {
  setup(twindConfig);
}

export const Provider: React.FC<Props> = ({ children }) => (
  <Fragment>{children}</Fragment>
);
