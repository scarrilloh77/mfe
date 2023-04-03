import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <div>
      <h1>Hi there for everyone here v2!</h1>
      <MarketingApp />
    </div>
  );
};

// So in both these scenarios, in order to change one side of this equation, in order to change say the container, we would be forced to make a change to marketing. And if we wanted to make a change to marketing, we would be forced to make a change to container.That is the exact scenario that we are trying to avoid when we make use of micro frontends.
