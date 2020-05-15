//call useState
import { useState } from 'react';

//creates a generic simple toggling state
function useToggle(initialVal = false) {
  // call useState 'reserve piece of state'
  const [state, setState] = useState(initialVal);

  // turning into a generic toggle with use of state
  function toggle() {
    setState(!state);
  }

  // return piece of state and func to toggle it
  return [state, toggle];
}

export default useToggle;
