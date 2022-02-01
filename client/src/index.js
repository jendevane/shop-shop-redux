import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Redux/rootReducer'
import App from './App'

import store from "./Redux/store"
import './index.css';

import * as serviceWorker from './serviceWorker';
const shopStore = createStore(rootReducer)
render(

  <React.StrictMode>
    <Provider store={shopStore}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
