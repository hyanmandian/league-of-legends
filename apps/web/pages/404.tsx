import React, { Fragment } from 'react';
import { Icon, Button } from '@league-of-legends/design-system';

import { Link } from '../components/link';

function NotFound() {
  return (
    <Fragment>
      Page not found :( <br />{' '}
      <Button as={Link} href="/">
        Go home <Icon icon="trash" />
      </Button>
    </Fragment>
  );
}

export default NotFound;
