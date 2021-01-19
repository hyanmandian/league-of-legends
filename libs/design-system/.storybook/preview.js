import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Provider } from '../src';

addDecorator(withKnobs);

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
];
