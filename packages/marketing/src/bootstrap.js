import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history'; // React router internally use this history library for get access to history related material.

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  onNavigate && history.listen(onNavigate); // Then, every time a user clicks on the link, we're going to update our memory history and the memory history will automatically call the callback.
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      // This is being called by the history.listen function.
      const { pathname } = history.location;
      pathname !== nextPathname && history.push(nextPathname);
    },
  };
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {}); // {} because onNavigate not exits in isolation running.
  }
}

// We are running through container and we should export the mount function
export { mount };
