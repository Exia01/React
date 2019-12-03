import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//middleware/provider connecting redux and react
import { Provider } from 'react-redux';
// importing thunk to enable async middleware
import thunk from 'redux-thunk';

// init setup of store and reducers combined into one RootReducer
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; //importing helper package
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating const with func combineReducers, takes in a obj with reducers
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(
  //takes in a reducer as the input
  rootReducer,
  composeEnhancers(applyMiddleware(logActionsMiddleware, thunk))
);
//wrapping the provider --> helper component that injects the store into the components
const app = (
  //property expected by the component
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
