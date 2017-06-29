import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM, { render } from 'react-dom';

import _Root from './components/_Root/_Root';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  console.log('and my axe');
  axe(React, ReactDOM, 1000);
}

render(
  <AppContainer>
    <_Root />
  </AppContainer>,
  document.getElementById('root-entry')
);

if (module.hot) {
  module.hot.accept('./components/_Root/_Root', () => {
    const NextApp = require('./components/_Root/_Root').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root-entry')
    );
  });
}
