const redux = require('redux');
//create stores but does not call it immediately / instantiate it
const creatStore = redux.createStore;



//creates initial state
const initialState = {
  counter: 0,
  nestedObj: {
    aEmbeddedProperty: "10", //can still shallow copy
    b: {
      c: "P" // will copy by reference
    },
    bEmbeddedProperty: "XYZ",
  }
};

//Reducer --> only thing that may change the state
//using es6+ defining the state to initializeState variable if state == undefined
const rootReducer = (state = initialState, action) => {
  //receives two args(current state, action )
  if (action.type == "INC_COUNTER") {
    //State needs to be changed in a "immutable manner" --> NEVER MUTATE THE STATE directly
    //copying obj with shallow copying
    let newState = {...state, counter: state.counter + 1} //state in this case is read only???
    console.log("oldstate", initialState)
    console.log("newState", newState)
    return newState
  }

  if (action.type == "ADD_COUNTER") {
    // console.log(action)
    let tempState = {...state, counter: state.counter + action.payload.value}

    // let testCopyOBk = {...tempState}
    // testCopyOBk["nestedObj"].b="123"`
    // console.log(testCopyOBk)`
    // console.log(initialState)
    return tempState
  }
  // returns updated state
  return state;
};

//Store
const store = creatStore(rootReducer); // initializes the store and passes the reducer

//Subscription --> automatically gets the state usually setup after setting the store
let log = (state = undefined) => {
  console.log('Subscription', store.getState())
}
store.subscribe(log)//subscribe takes in any func with want to execute gets triggered when state updates 


// console.log(store.getState()); //gets state from store

//Dispatching Action
// store.dispatch({type: 'INC_COUNTER'}) //takes in obj with property "type" --> Action is all uppercase by convention
store.dispatch({type: 'ADD_COUNTER', payload: {value: 10}}) //takes in obj with property "type" --> Action is all uppercase by convention
//can also pass properties individually. 





// Mutable and Immutable:https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2

// https://medium.com/@ibraheemabukaff/mutability-immutability-in-javascript-48022d660015

//https://thecodebarbarian.com/object-assign-vs-object-spread.html