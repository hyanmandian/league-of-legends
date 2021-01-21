import { create } from 'twind';
import { shim, virtualSheet, getStyleTagProperties } from 'twind/shim/server';

import twindConfig from './twind.config';

const sheet = virtualSheet();

const { tw } = create({ ...twindConfig, sheet });

export function extractStyles(html: string) {
  sheet.reset();

  shim(html, { tw });

  return getStyleTagProperties(sheet);
}
