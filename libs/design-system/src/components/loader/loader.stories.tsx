import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { Loader } from './';

export default { title: 'Loader' };

export const show = () => <Loader show={boolean('Show', true)} />;
