import React from 'react';


import Pallete from './containers/Palette/Palette';
import './App.css';

import seedColors from './utils/seedColors'
import { generatePalette } from './utils/colorHelpers'

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    // <div className="App">

    < div >
      <Pallete pallete={{ ...seedColors[2] }} />
    </div >
  );
}

export default App;
