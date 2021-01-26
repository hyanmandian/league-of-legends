import React, { Fragment } from 'react';
import { TrashIcon } from '@league-of-legends/icons';
import { Button } from '@league-of-legends/design-system';

import { Link } from '../components/link';

function Home() {
  return (
    <Fragment>
      Home{' '}
      <Button as={Link} href="/asdasdsadsa">
        Go Not Found <TrashIcon />
      </Button>
    </Fragment>
  );
}

export default Home;
