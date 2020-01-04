import * as actionTypes from '../constants/authActionTypes';

import { updateObject } from '../utility';

const initialState = {
  idToken: null,
  userId: null,
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

//tokens coming from db
const authSuccess = (state, action) => {
  return updateObject(state, {
    idToken: action.payload.idToken,
    userId: action.payload.localId,
    loading: false
  });
};

const authFail = (state, action) => {
  console.log(action);
  return updateObject(state, {
    error: action.payload.err.response.data.error.message,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { idToken: null, userId: null });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authFail(state, action);

    default:
      return state;
  }
};
export default authReducer;
