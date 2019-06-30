const initState = {
  authError: null, // if error it will change from the switch
}

//the first time this reducer runs and does not have a state. Need to pass
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('Login error')
      return {
        ...state, // spreading state and adding property
        authError: 'Login failed', //property
      }
    case 'LOGIN_SUCCESS':
      console.log('login success')
      //need to reset the auth error to be successful
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      // just in case none match the action
      return state
  }
}

export default authReducer
