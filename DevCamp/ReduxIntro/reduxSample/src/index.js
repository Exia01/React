import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//middleware/provider connecting redux and react
import { Provider } from 'react-redux';

// init setup of store and reducer
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer); //takes in a reducer as the input
//wrapping the provider --> helper component that injects the store into the components
const app = (
  //property expected by the component
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
