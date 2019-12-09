//Utility step function?
export const saveResult = result => {
    const updatedResult = result * result // logic could be exced on the reducer. the async code goes on the reducer
  return { type: 'STORE_RESULT', payload: { result } };
};
//Action Creator
export const storeResult = result => {
  return function(dispatch, getState) { //second arg that can be passed
    //allows execution of async code, could do as dispatch =>{}
    setTimeout(() => {
      //emulating reaching out to a db or other codebase
      //   executing function
      const oldCounter = getState().ctr.counter; //ties into the mapping from combine reducers
      console.log(oldCounter)
      dispatch(saveResult(result)); //thunk enables a dispatch func that will fire off the previous func
    }, 2000);
  };
};
