const initState = {
  authError: null // if error it will change from the switchded
}

//the first time this reducer runs and does not have a state. Need to pass 
const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('Login error')
      return {
        ...state, // spreading state and adding property
        authError: 'Login failed' //property
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      //need to reset the auth error to be successful 
      return {
        ...state,
        authError: null
      }
    default: // just in case none match the action
      return state
  }
};


export default authReducer;