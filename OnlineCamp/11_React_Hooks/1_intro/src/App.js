import React from 'react';
import './App.css';

import CounterHooks from './CounterHooks';
import Toggler from './Toggler';

import SimpleFormInputHook from './SimpleFormInputHook';

function App() {
  return (
    <div className='App'>
      <CounterHooks />
      <Toggler />
      <SimpleFormInputHook/>
    </div>
  );
}

export default App;
