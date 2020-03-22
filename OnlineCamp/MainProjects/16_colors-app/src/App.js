import React from 'react';


import Palette from './containers/Palette/Palette';
import './App.css';

import seedColors from './utils/seedColors'
import { generatePalette } from './utils/colorHelpers'

function App() {
  return (
    // <div className="App">
    
    < div >
      <Palette palette={generatePalette(seedColors[4])} />
    </div >
  );
}

export default App;

// Shows what is being passed
// console.log(generatePalette(seedColors[4]))