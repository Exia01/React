import React from 'react';


import Pallete from './containers/Palette/Palette';
import './App.css';

import seedColors from './utils/seedColors'

function App() {
  return (
    // <div className="App">
    <div className="App">
      <Pallete pallete={{ ...seedColors[2] }} />
    </div>
  );
}

export default App;
