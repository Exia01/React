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
  console.log(err);
  return {
    type: actionTypes.AUTH_FAIL,
    payload: { err }
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
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
