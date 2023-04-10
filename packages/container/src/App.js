import React, { lazy, Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  Redirect,
} from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));
const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    isSignedIn && history.push('/dashboard');
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

//Recuerde, cada vez que creamos un enrutador de navegador que internamente crea una instancia del historial del navegador para nosotros, necesitamos obtener accesoa esa instancia de la historia para que podamos de alguna manera redirigir programáticamente al usuario alrededor de nuestra aplicación. Para obtener acceso al historial que se crea por el enrutador del navegador, es bastante difícil hacerlo si está tratando de obtener acceso al historial en el mismo componente donde crea el enrutador del navegador. Y la forma en que solucionamos esto es creando el historial manualmente como lo hemos hecho aquí, leyendo una instancia de un enrutador genérico, y luego decirle qué copia de la historia queríamos usar. Así que de nuevo, esto es algo relacionado con reaccionar router dom nada relacionado con micro frontales ni nada por el estilo.

// So in both these scenarios, in order to change one side of this equation, in order to change say the container, we would be forced to make a change to marketing. And if we wanted to make a change to marketing, we would be forced to make a change to container.That is the exact scenario that we are trying to avoid when we make use of micro frontends.
