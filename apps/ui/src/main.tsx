import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
