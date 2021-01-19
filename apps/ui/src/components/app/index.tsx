import React from 'react';
import { Provider } from '@league-of-legends/design-system';

import { Routes } from '../../routes';

export const App = () => (
  <Provider>
    <Routes />
  </Provider>
);
