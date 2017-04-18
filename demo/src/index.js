import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}
var a11y = require('react-a11y');
// if (ENV === 'development') 
a11y(React);

render(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root) })
}
