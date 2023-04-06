import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

// So in both these scenarios, in order to change one side of this equation, in order to change say the container, we would be forced to make a change to marketing. And if we wanted to make a change to marketing, we would be forced to make a change to container.That is the exact scenario that we are trying to avoid when we make use of micro frontends.
