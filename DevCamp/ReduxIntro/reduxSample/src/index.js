import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//middleware/provider connecting redux and react
import { Provider } from 'react-redux';

// init setup of store and reducers combined into one RootReducer
import { createStore, combineReducers } from 'redux'; //importing helper package
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//creating const with func combineReducers, takes in a obj with reducers
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(rootReducer); //takes in a reducer as the input
//wrapping the provider --> helper component that injects the store into the components
const app = (
  //property expected by the component
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
