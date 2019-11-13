const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  console.log('Action in Reducer: ', action);
  //setting up reducer with initial state. Will be used wth index.jss
  switch (action.type) {
    case 'STORE_RESULT':
      return {
        ...state,
        //arrays are passed by reference
        //concat is an immutable way of updating an array --> returns a new array.
        results: state.results.concat({ id: new Date(), value: action.result })
      };

    case 'DELETE_RESULT':
      // //can create a copy of the array if removing obj
      // const newArray = [...state.results]; //objs are still pointing to the same
      // newArray.splice(id, 1);

      //Using Filter doesn't touch the old one, returns new one
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      //above will filter out any without the same id as the previous one.
      return { ...state, results: updatedArray };

    default:
      console.log('No Action Type passed!!!');
      return state;
  }
};

export default reducer;

// Javascript passing value vs reference:https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

///Redux principle explanation on mutability:https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
