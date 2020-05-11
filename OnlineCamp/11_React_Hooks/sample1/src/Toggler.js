import React, { useState } from 'react';
//convention to name the useage
import useToggle from './hooks/useToggle';

function Toggler() {
  //making reusable piece of stateful logic with useToggle
  const [isHappy, SetIsHappy] = useToggle(true);
  const [isSleepy, setIsSleepy] = useToggle(true);
  const [isBanana, setBanana] = useToggle(true);

  return (
    <React.Fragment>
      {/* passing the set toggle in useToggle as ref and calling when clicked */}
      <h1 onClick={SetIsHappy}>{isHappy ? '😊' : '😑'} </h1>
      <h1 onClick={setIsSleepy}>{isSleepy ? '😶' : '😴'} </h1>
      <h1 onClick={setBanana}>{isBanana ? '🤡' : '👻'} </h1>
    </React.Fragment>
  );
}

export default Toggler;
