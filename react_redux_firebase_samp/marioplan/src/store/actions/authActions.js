export const signIn = (credentials) => {//this is the action creator
  //returning a function with a third object and destructuring
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase(); //initializing firebase instance
    //
    firebase.auth().signInWithEmailAndPassword( //method type of signing in
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });// just passing type and no additional data
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}