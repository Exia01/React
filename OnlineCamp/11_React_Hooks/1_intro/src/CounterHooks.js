import React, { useState, useEffect } from 'react';

function CounterHooks() {
  // using state 'hook' with a const or array destructuring
  const [count, setCount] = useState(0); //defined as an array, reference to state and func

  function increaseByOne() {
    let tempNum = count + 1;
    setCount(tempNum);
  }

  // There is no callback when updating the state, this use effect hooks will run at render and when state is updated. Can all pass an array of elements to watch at end to be specific
  useEffect(() => {
    console.log('something Changed');
    document.title = `You clicked ${count} times`;
  },); //we could pass an arr with states to keep an eye on for changes and then run funcs inside of it

  return (
    <React.Fragment>
      <h1>The Count is {count}</h1>
      <button onClick={increaseByOne}>Click to increment by 1</button>
    </React.Fragment>
  );
}

export default CounterHooks;
