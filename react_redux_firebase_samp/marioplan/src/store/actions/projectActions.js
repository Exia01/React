export const createProject = (project) => {
  //using thunk to create function
  console.log("Passing to firebase")
  //get state if needed
  return (dispatch, getState, {getFirebase, getFirestore}) => { //dispatches and action to the reducer
    
    /* normally would be this. but thunk enables us to return a "function"
    return {
      type: 'ADD_PROJECT',
      project:project
    } */
    const firestore = getFirestore();
    const profile = getState().firebase.profile; //state obj
    const authorId = getState().firebase.auth.uid; //grabbing id
    // make async call to database to the database name
    //spreading the project, then adding an "author details"
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  };
};
