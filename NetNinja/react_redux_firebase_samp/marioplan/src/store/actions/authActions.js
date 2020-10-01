export const signIn = (credentials) => {//this is the action creator
  //returning a function with a third object and destructuring
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase(); //initializing firebase instance
    //
    firebase.auth().signInWithEmailAndPassword( //method type of signing in
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'});// just passing type and no additional data
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err});
    });

  }
}

//no need to pass credentials
export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();//make instance

    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'}) //when complete dispatch action
    });
  }
}

//sign up action
export const signUp = (newUser) => {
  //function takes using firebase and firestore. 
  //when creating a new user in firebase, create a user in collection inside firestore
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //initializing both
    const firebase = getFirebase();
    const firestore = getFirestore();

    // generate new user
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password// communicate with firebase and create new user
    ).then(resp => {//taking response with info about user
      //storing(in or creating) with the user id and set it to a new doc so that ids match
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials:`${newUser.firstName[0]}${newUser.lastName[0]}`
      });//when completed, then send dispatch 
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'SIGNUP_ERROR', err});
    });
  }
}