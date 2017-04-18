import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import a11y from 'react-a11y';

import Root from './containers/Root';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

// if (ENV === 'development');
a11y(React);

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root); });
}
