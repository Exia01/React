import axios from 'axios';
import * as actionTypes from '../constants/authActionTypes';
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
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
