import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Loader } from '@league-of-legends/design-system';

const LazyHome = lazy(() => import('./pages/home'));
const LazyNotFound = lazy(() => import('./pages/not-found'));

export const PAGE = {
  HOME: () => '/',
};

export const Routes: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader show />}>
      <Switch>
        <Route exact path={PAGE.HOME()} component={LazyHome} />
        <Route path="*" component={LazyNotFound} />
      </Switch>
    </Suspense>
  </Router>
);
