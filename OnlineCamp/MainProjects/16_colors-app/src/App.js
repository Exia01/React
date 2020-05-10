import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Palette from './containers/Palette/Palette';
import PaletteList from './containers/PaletteList/PaletteList';
import SingleColorPalette from './containers/SinglePalette/SingleColorPalette';
import NewPaletteForm from './containers/NewPaletteForm/NewPaletteForm';
import PageComponent from './components/PageComponent/PageComponent';

import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes')); //parsing from string
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  // Takes id from param  could move into utils
  function findPalette(id) {
    const foundPalette = palettes.find((palette) => {
      return palette.id === id;
    });
    // console.log(foundPalette);
    // generates the full spectrum of colors
    return generatePalette(foundPalette);
  }
  function savePalette(newPaletteOBj) {
    console.log('addingPallete');
    console.log(newPaletteOBj);
    setPalettes([...palettes, newPaletteOBj]);
  }
  function deletePalette(paletteId) {
    setTimeout(() => {
      let tempPalettesOj = palettes.filter((palette) => {
        return palette.id !== paletteId;
      });
      setPalettes(tempPalettesOj);
    }, 500);
  }
  // To then save to local storage after the state has been saved we need to use the "useEffect" hook:
  React.useEffect(
    function () {
      window.localStorage.setItem('palettes', JSON.stringify(palettes));
    },
    [palettes]
  );

  console.log('rendering');
  return (
    // route will always render the switch, enables transitions
    // grabbing the location from props and passing to render
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames='page' timeout={500} key={location.key}>
            {/* locations informs the switch of where we are on the app */}
            <Switch location={location}>
              {/* leaving on top to prevent the second route triggering */}
              {/* Passing routeProps to enable use in component */}
              <Route
                exact
                path='/palette/new'
                render={(routeProps) => (
                  // being added to all the components and give class to style transition
                  <PageComponent>
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </PageComponent>
                )}
              />
              <Route
                exact
                path='/'
                // passing routeProps to enable use in PaletteList
                component={(routeProps) => (
                  <PageComponent>
                    <PaletteList
                      palettes={palettes}
                      deletePalette={deletePalette}
                      {...routeProps}
                    />
                  </PageComponent>
                )}
              />
              {/* Passing route props and extracting param */}
              <Route
                exact
                path='/palette/:id'
                // route props enables the usage of the props from route
                render={(routeProps) => (
                  <PageComponent>
                    <Palette
                      palette={findPalette(routeProps.match.params.id)}
                    />
                  </PageComponent>
                )}
              />

              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={(routeProps) => (
                  <PageComponent>
                    <SingleColorPalette
                      // Passing that one whole palette list with all colors included
                      // Will isolate that specific color in the individual palette
                      palette={findPalette(routeProps.match.params.paletteId)}
                      //passing colorId to identify color, could also move to with router
                      colorId={routeProps.match.params.colorId}
                      //
                    />
                  </PageComponent>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        //   <div>
        //     <Palette palette={generatePalette(seedColors[4])} />
        // </div >
      )}
    />
  );
}

export default App;

// Shows what is being passed
// console.log(generatePalette(seedColors[4]))
// useCallback hook
// https://medium.com/@infinitypaul/reactjs-useeffect-usecallback-simplified-91e69fb0e7a3
