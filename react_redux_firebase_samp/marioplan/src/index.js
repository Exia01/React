import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// create store and provider 
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
// redux middleware
import thunk from 'redux-thunk'
//alows for firebase use
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/firebaseConfig'
import rootReducer from './store/reducers/rootReducer'


// creating a store(named store) and passing all combined reducers
//thunk with extra args. two objs are passed
const store = createStore(rootReducer,
    //compose function allows for multiple store enhancers like rootreducer combining several store enhancer
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(fbConfig), // redux binding for firebase and passing config so that store knows what to connect to
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
);
// applyMiddleware takes in a list of applyMiddlewares

//passing the provider the component and wrap it around the app and pass the store to the application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
