import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Palette from './containers/Palette/Palette';
import PaletteList from './containers/PaletteList/PaletteList';
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
      <Route
        exact
        path='/'
        // passing routeProps to enable use in PaletteList
        component={routeProps => (
          <PaletteList palettes={seedColors} {...routeProps} />
        )}
      />
      {/* Passing route props and extracting param */}
      <Route
        exact
        path='/palette/:id'
        // route props enables the usage of the props from route
        render={routeProps => (
          <Palette palette={findPalette(routeProps.match.params.id)} />
        )}
      />

      <Route
        exact
        path='/palette/:paletteId/:colorId'
        render={() => <h1>Single Color Page</h1>}
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
