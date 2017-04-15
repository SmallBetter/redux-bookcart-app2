/* eslint-disable import/no-extraneous-dependencies,no-underscore-dangle,global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { rootReducers } from './reducers'
import { initialStore } from './store'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducers,
  initialStore,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default)
  })
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').rootReducers)
  })
}