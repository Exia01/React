import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import burgerReducer from './store/reducers/burger_reducer';

const rootReducer = combineReducers({
  brg: burgerReducer
});

const store = createStore(rootReducer); //if single reducer, can pass directly here

// wrapping on const ad passing back
const app = (
  <Provider store={store}>
    {/*Provider wraps up the browser router by standard?*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
