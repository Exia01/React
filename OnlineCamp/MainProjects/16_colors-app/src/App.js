import React from 'react';


import Pallete from './containers/Pallete';
import './App.css';

import seedColors from './utils/seedColors'

function App() {
  return (
    // <div className="App">
    <div className="">
      <Pallete pallete={{ ...seedColors[4] }} />
    </div>
  );
}

export default App;
