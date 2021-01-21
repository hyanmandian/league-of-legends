import React from 'react';
import NextLink, { LinkProps } from 'next/link';

type Props = LinkProps;

export const Link: React.FC<Props> = ({
  as,
  href,
  scroll,
  locale,
  replace,
  shallow,
  passHref,
  prefetch,
  ...props
}) => {
  return (
    <NextLink
      as={as}
      href={href}
      scroll={scroll}
      locale={locale}
      replace={replace}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
    >
      <a {...props} />
    </NextLink>
  );
};
