import React, { useEffect, useMemo, useState } from 'react';
import { tw } from 'twind';

import { Color } from '../../types';

type Props = {
  icon: string;
  size?: 16 | 24 | 32;
  color?: Color;
  className?: string;
  appearance?: 'outline' | 'solid';
};

export const Icon = ({
  icon,
  size = 24,
  color = 'current',
  className,
  appearance = 'outline',
}: Props) => {
  const style = useMemo(() => ({ width: size, height: size }), [size]);

  const [internalIcon, setInternalIcon] = useState(<span style={style} />);

  useEffect(() => {
    import(`!!@svgr/webpack?-svgo!./icons/${appearance}/${icon}.svg`).then(
      (module) => {
        const Component = module.default;

        setInternalIcon(
          <Component style={style} className={tw`text-${color} ${className}`} />
        );
      }
    );
  }, [icon, appearance]);

  return internalIcon;
};
