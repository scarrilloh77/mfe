import { mount } from 'marketing/MarketingApp'; // Function that takes in a reference to an HTML element.
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory(); //copy of the browser history.

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        pathname !== nextPathname && history.push(nextPathname);
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
