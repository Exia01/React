import React, { useState } from 'react';

function CounterHooks() {
  // using state 'hook' with a const or array destructuring
  const [count, setCount] = useState(0); //defined as an array, reference to state and func

  function increaseByOne() {
    let tempNum = count + 1;
    setCount(tempNum);
  }
  return (
    <React.Fragment>
      <h1>The Count is {count}</h1>
      <button onClick={increaseByOne}>Click to increment by 1</button>
    </React.Fragment>
  );
}

export default CounterHooks;
