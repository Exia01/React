export const createProject = (project) => {
  //get state if needed
  return (dispatch, getState) => { //dispatches and action to the reducer
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
    /* normally would be this. but thunk enables us to return a "function"
    return {
      type: 'ADD_PROJECT',
      project:project
    } */
  };
};
