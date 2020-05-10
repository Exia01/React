import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import Palette from './containers/Palette/Palette';
import PaletteList from './containers/PaletteList/PaletteList';
import './App.css';

import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';
import SingleColorPalette from './containers/SinglePalette/SingleColorPalette';
import NewPaletteForm from './containers/NewPaletteForm/NewPaletteForm';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes')); //parsing from string
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  // Takes id from param  could move into utils
  const findPalette = (id) => {
    const foundPalette = palettes.find((palette) => {
      return palette.id === id;
    });
    // console.log(foundPalette);
    // generates the full spectrum of colors
    return generatePalette(foundPalette);
  };
  const savePalette = (newPaletteOBj) => {
    console.log('addingPallete');
    console.log(newPaletteOBj);
    setPalettes([...palettes, newPaletteOBj]);
  };
  const deletePalette = (paletteId) => {
    setTimeout(() => {
      let tempPalettesOj = palettes.filter((palette) => {
        return palette.id !== paletteId;
      });
      setPalettes(tempPalettesOj);
    }, 500);
  };
  // To then save to local storage after the state has been saved we need to use the "useEffect" hook:
  React.useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  return (
    <Switch>
      {/* leaving on top to prevent the second route triggering */}
      {/* Passing routeProps to enable use in component */}
      <Route
        exact
        path='/palette/new'
        render={(routeProps) => (
          <NewPaletteForm
            savePalette={savePalette}
            palettes={palettes}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path='/'
        // passing routeProps to enable use in PaletteList
        component={(routeProps) => (
          <PaletteList
            palettes={palettes}
            deletePalette={deletePalette}
            {...routeProps}
          />
        )}
      />
      {/* Passing route props and extracting param */}
      <Route
        exact
        path='/palette/:id'
        // route props enables the usage of the props from route
        render={(routeProps) => (
          <Palette palette={findPalette(routeProps.match.params.id)} />
        )}
      />

      <Route
        exact
        path='/palette/:paletteId/:colorId'
        render={(routeProps) => (
          <SingleColorPalette
            // Passing that one whole palette list with all colors included
            // Will isolate that specific color in the individual palette
            palette={findPalette(routeProps.match.params.paletteId)}
            //passing colorId to identify color, could also move to with router
            colorId={routeProps.match.params.colorId}
          //
          />
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
// useCallback hook
// https://medium.com/@infinitypaul/reactjs-useeffect-usecallback-simplified-91e69fb0e7a3
