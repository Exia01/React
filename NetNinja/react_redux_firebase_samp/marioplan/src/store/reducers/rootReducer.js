import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
//this is the pre-made reducer and it will know about the about the firebase project. from the fbconfig
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

//importing all reducers and combining it and then passing
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, // connected to the whole database
  firebase: firebaseReducer // connecting auth status to the auth 

});
// the key name will be the data property on the state object
export default rootReducer
