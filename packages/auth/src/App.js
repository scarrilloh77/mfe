import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Singin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({ productionPrefix: 'au' });

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Singin} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
