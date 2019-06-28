import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
//this is the pre-made reducer and it will know about the 
import { firestoreReducer } from 'redux-firestore';

//importing all reducers and combining it and then passing
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});
// the key name will be the data property on the state object
export default rootReducer
