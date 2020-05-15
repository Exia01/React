import React from 'react';
import './App.css';

import CounterHooks from './CounterHooks';
import Toggler from './Toggler';

import SimpleFormInputHook from './SimpleFormInputHook';
import SWMovies from './SWMovies/SWMovies';

function App() {
  return (
    <div className='App'>
      <SWMovies />
      {/* <CounterHooks />
      <Toggler />
      <SimpleFormInputHook/> */}
    </div>
  );
}

export default App;
