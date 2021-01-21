import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { Icon } from './';

export default { title: 'Icon' };

export const standard = () => (
  <Icon
    icon={text('Icon', 'trash')}
    size={select('Size', [16, 24, 32], 24)}
    color={text('Color', 'currentColor') as any}
    appearance={select('Appearance', ['outline', 'solid'], 'outline')}
  />
);
