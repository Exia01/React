//very similar to useLocalStorageState
import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(strKey, defaultVal, reducer) {
  //receives the todo reducer
  //piece of state, based off of the value in localStorage
  // console.log(strKey, defaultVal);
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    //will return val from func
    //passing func to establish the value of the original state which runs when setting up this this reducer
    let val;
    // used try-catch if application may accidentally set the todos in localStorage to undefined
    try {
      val = JSON.parse(
        window.localStorage.getItem(strKey) || String(defaultVal) //either grab by key or set by initial val
      );
    } catch (error) {
      val = defaultVal || [];
    }
    return val;
  });

  //useEffect to update to localStorage when state changes with the reducer
  useEffect(() => {
    window.localStorage.setItem(strKey, JSON.stringify(state));
  }, [state, strKey]);

  // console.log(state, strKey);

  return [state, dispatch];
}
// We need to pass the key as a dependency because useEffect uses it in setItem and it does not know if it changes or not hence we need to pass it to make sure the old value is not used.

export default useLocalStorageReducer;

// more info: https://stackoverflow.com/questions/56425444/can-we-use-a-function-as-second-arguments-in-useeffect

// used as such = const [todos, setTodos] = useLocalStorageState('todos', [])
