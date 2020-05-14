import { useState, useEffect } from 'react';

function useLocalStorageState(strKey, defaultVal) {
  //piece of state, based off of the value in localStorage
  console.log(strKey, defaultVal)
  const [state, setState] = useState(() => {
    let val;
    // used try-catch if application may accidentally set the todos in localStorage to undefined
    try {
      val = JSON.parse(
        window.localStorage.getItem(strKey) || String(defaultVal)
      );
    } catch (error) {
      val = defaultVal || [];
    }
    return val;
  }); //passing a function into useState, will use func to figure init val

  //useEffect to update to localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(strKey, JSON.stringify(state));
  }, [state, strKey]);

  console.log(state, strKey);


  return [state, setState];
}
// We need to pass the key as a dependency because useEffect uses it in setItem and it does not know if it changes or not hence we need to pass it to make sure the old value is not used.

export default useLocalStorageState;

// more info: https://stackoverflow.com/questions/56425444/can-we-use-a-function-as-second-arguments-in-useeffect


// used as such = const [todos, setTodos] = useLocalStorageState('todos', [])