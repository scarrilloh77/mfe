import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history'; // React router internally use this history library for get access to history related material.

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    }); // if we were given a default history, let's use it. I'm going to assign that to history. Otherwise, if we did not get one, we will default to creating our own memory history.
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
    mount(devRoot, { defaultHistory: createBrowserHistory() }); // {} because onNavigate not exits in isolation running.
    // So in short, whenever we call the mount function when we are in isolation, we're going to create a browser history instance and provide it on the options object as a property called default history. We are only providing a default history if we are in development.
  }
}

// We are running through container and we should export the mount function
export { mount };
