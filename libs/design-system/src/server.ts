import { setup } from 'twind';
import { virtualSheet, getStyleTagProperties } from 'twind/sheets';

import twindConfig from './twind.config';

const sheet = virtualSheet();

setup({ ...twindConfig, sheet });

export function extractStyles() {
  sheet.reset();

  return getStyleTagProperties(sheet);
}
