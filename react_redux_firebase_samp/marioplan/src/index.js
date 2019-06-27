import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// create store and provider 
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
// redux middleware
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'


// creating a store(named store) and passing all combined reducers
const store = createStore(rootReducer, applyMiddleware(thunk));
// applyMiddleware takes in a list of applyMiddlewares

//passing the provider the component and wrap it around the app and pass the store to the application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
