import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import burgerReducer from './store/reducers/burger_reducer';
import orderReducer from './store/reducers/order_reducer';
import authReducer from './store/reducers/auth_reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  brg: burgerReducer,
  order: orderReducer,
  auth: authReducer
});

//simple middleware --logs every action
const logActionsMiddleware = store => {
  //func returns another func
  return next => {
    //this is a function that lets the action continue onto the reducer
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
      //lets the action continue onto the reducer
    };
  };
};

//REACT DEV TOOL ENHANCER, conmpose allows us to combine enhacers
let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
// will be able to access only in development env

console.log(composeEnhancers);
//can pass multiple middleware, will be execd in order
const store = createStore(
  rootReducer,
  //compose enhacers is emapDispatchToPropsssentially compose
  composeEnhancers(applyMiddleware(thunk, logActionsMiddleware))
); //if single reducer, can pass directly here

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
