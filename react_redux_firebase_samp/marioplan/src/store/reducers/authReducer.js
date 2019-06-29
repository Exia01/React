const initState = {
  authError: null // if error it will change from the switchded
}

//the first time this reducer runs and does not have a state. Need to pass 
const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log(action.type.err);
      return {
        ...state,
        authError: 'Login failed' //property
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        authError: null
      }
    default:
      return state
  }
};


export default authReducer;