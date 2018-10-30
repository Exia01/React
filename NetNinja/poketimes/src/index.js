import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
/* Importing the reducer file */
import rootReducer from './reducers/rootReducer'


/* Importing redux as a store or "container"/"Box" to hold the data */
/* This is a good location for this because this is where we render the app to the "DOM"*/
import { createStore } from 'redux';

/* instantiate a store */
const store = createStore(rootReducer);
/* The provider is going to wrapp the root app component, we then provide the store to the provder*/
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
