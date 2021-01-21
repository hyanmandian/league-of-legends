type ColorVariations = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type ColorName<N extends string> = `${N}-${ColorVariations}`;

export type Color =
  | 'black'
  | 'white'
  | 'current'
  | 'transparent'
  | ColorName<'rose'>
  | ColorName<'pink'>
  | ColorName<'fuchsia'>
  | ColorName<'purple'>
  | ColorName<'violet'>
  | ColorName<'indigo'>
  | ColorName<'blue'>
  | ColorName<'lightBlue'>
  | ColorName<'cyan'>
  | ColorName<'teal'>
  | ColorName<'emerald'>
  | ColorName<'green'>
  | ColorName<'lime'>
  | ColorName<'yellow'>
  | ColorName<'amber'>
  | ColorName<'orange'>
  | ColorName<'red'>
  | ColorName<'warmGray'>
  | ColorName<'trueGray'>
  | ColorName<'gray'>
  | ColorName<'coolGray'>
  | ColorName<'blueGray'>;
