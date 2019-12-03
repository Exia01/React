export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_INCREMENT = 'ADD_INCREMENT';
export const SUBTRACT_INCREMENT = 'SUBTRACT_INCREMENT';

//Utility step function?
export const saveResult = result => {
  return { type: 'STORE_RESULT', payload: { result } };
};

//Action Creator
export const storeResult = result => {
  return function(dispatch) {
    //allows execution of async code, could do as dispatch =>{}
    setTimeout(() => {
      //emulating reaching out to a db or other codebase
      //   executing function
      dispatch(saveResult(result)); //thunk enables a dispatch func that will fire off the previous func
    }, 2000);
  };
};
