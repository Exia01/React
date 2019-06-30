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
        reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}), // redux binding for firebase and passing config so that store knows what to connect to
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
);
// applyMiddleware takes in a list of applyMiddlewares

//passing the provider the component and wrap it around the app and pass the store to the application
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
  });


//Newer base implementation for firebase:https://stackoverflow.com/questions/53872757/react-redux-v6-a-v3-version-of-react-redux-firebase-is-required

// http://docs.react-redux-firebase.com/history/v3.0.0/