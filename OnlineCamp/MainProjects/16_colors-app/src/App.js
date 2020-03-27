import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Palette from './containers/Palette/Palette';
import './App.css';

import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';

function App() {
  // Takes id from param  could move into utils
  const findPalette = id => {
    const foundPalette = seedColors.find(palette => {
      return palette.id === id;
    });
    // console.log(foundPalette);

    // generates the full spectrum of colors
    return generatePalette(foundPalette);
  };

  return (
    <Switch>
      <Route exact path='/' component={() => <h1>Palette List Goes here</h1>} />
      {/* Passing route props and extracting param */}
      <Route
        exact
        path='/palette/:id'
        render={routeProps => (
          <Palette palette={findPalette(routeProps.match.params.id)} />
        )}
      />
    </Switch>
    //   <div>
    //     <Palette palette={generatePalette(seedColors[4])} />
    // </div >
  );
}

export default App;

// Shows what is being passed
// console.log(generatePalette(seedColors[4]))
