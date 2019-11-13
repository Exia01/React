import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import {personReducer} from './store/reducers/PersonReducer';

const rootReducer = combineReducers({
  prsn: personReducer
});

const store = createStore(rootReducer);

const app = (
  //property expected by the component
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
