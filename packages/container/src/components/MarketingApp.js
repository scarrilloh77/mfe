import { mount } from 'marketing/MarketingApp'; // Function that takes in a reference to an HTML element.
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory(); //copy of the browser history.

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        pathname !== nextPathname && history.push(nextPathname);
      },
    });
  }, []);

  return <div ref={ref} />;
};
