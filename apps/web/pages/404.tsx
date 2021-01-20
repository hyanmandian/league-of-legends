import React, { Fragment } from 'react';
import Link from 'next/link';
import { Button } from '@league-of-legends/design-system';

function NotFound() {
  return (
    <Fragment>
      Page not found :( <br />{' '}
      <Link href="/">
        <Button>Go home</Button>
      </Link>
    </Fragment>
  );
}

export default NotFound;
