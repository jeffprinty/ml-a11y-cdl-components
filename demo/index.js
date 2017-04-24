import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import _Root from './components/_Root/_Root';

render(
  <AppContainer>
    <_Root />
  </AppContainer>,
  document.getElementById('root-entry')
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./components/_Root/_Root', () => {
    //If we receive a HMR request for our App container, then
    //reload it using require (we can't do this dynamically with import)
    const NextApp = require('./components/_Root/_Root').default;

    // And render it into the root element again
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root-entry')
    );
  });
}
