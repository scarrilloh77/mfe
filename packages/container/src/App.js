import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Progress from './components/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

export default () => {
  return (
    <BrowserRouter>
      {/* Con el BrowserRouter se esta haciendo uso del historial del navegador! */}
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

// So in both these scenarios, in order to change one side of this equation, in order to change say the container, we would be forced to make a change to marketing. And if we wanted to make a change to marketing, we would be forced to make a change to container.That is the exact scenario that we are trying to avoid when we make use of micro frontends.
