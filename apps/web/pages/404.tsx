import React, { Fragment } from 'react';
import { TrashIcon } from '@league-of-legends/icons';
import { Button } from '@league-of-legends/design-system';

import { Link } from '../components/link';

function NotFound() {
  return (
    <Fragment>
      Page not found :( <br />{' '}
      <Button as={Link} href="/">
        Go home <TrashIcon title="Trash :("/>
      </Button>
    </Fragment>
  );
}

export default NotFound;
