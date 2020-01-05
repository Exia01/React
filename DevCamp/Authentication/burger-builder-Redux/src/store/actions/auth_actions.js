import axios from 'axios';
import * as actionTypes from '../constants/authActionTypes';
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  //gets the token
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: { ...authData } //spreading properties and passing all
  };
};

export const authFail = err => {
  console.log('Auth fail err', err);
  return {
    type: actionTypes.AUTH_FAIL,
    payload: { err }
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  console.log('Expiration timeout is ', expirationTime);
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000); //since the timeout expects milliseconds
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    //...authenticate user
    dispatch(authStart());
    const authData = {
      email: email,
      password,
      returnSecureToken: true
    };
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOXV5GV-geBsKNWgv9dVl2Wl7DueOjHKw'; //signupUrl
    if (!isSignup) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOXV5GV-geBsKNWgv9dVl2Wl7DueOjHKw';
    }
    axios
      .post(url, authData)
      .then(response => {
        console.log(response);
        //getting current date + expiration time * 1k because javascript time works in milliseconds
        // getting current time of the date by getTime() and turning into a date Obj
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        console.log(expirationDate);
        localStorage.setItem('token', response.data.idToken); //idToken in reducer
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId); //userId in reducer could fetch in apy when validating localStorage
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        console.log('Error in Auth Action', err);
        dispatch(authFail(err));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    payload: { path }
  };
};

//utility action creator
export const authCheckState = () => {
  return dispatch => {
    //not running async code but sending multiple actions
    const token = localStorage.getItem('token'); //getting the IdToken saved if any
    if (!token) {
      // if there is no token saved.
      dispatch(logout()); //shouldn't be needed could just return but applying anyway
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate')); //converting string to new date Obj
      if (expirationDate <= new Date()) {
        // if expiration date is equal or less than current date?
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess({ token,  userId })); // we know we are logged and time not expired
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 10000
          )
        ); //amount of seconds till we are logged out
        // future date in milliseconds - the current milliseconds
        // then dividing in seconds
      }
    }
  };
};
