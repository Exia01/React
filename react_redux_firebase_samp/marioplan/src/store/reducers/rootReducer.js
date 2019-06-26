import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

//importing all reducers and combining it and then passing
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});
// the key name will be the data property on the state object

export default rootReducer
