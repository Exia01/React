import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

// Name after the ThemeContext
class ThemeContextProvider extends Component {
  // this is the shared data that we want to supply to the different components
  state = {
    isLightTheme: true,
    // represent the color for the apps
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    // font color, ui elements, background
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };
  render() {
    //   contains the ThemeContextProvider tag value property takes in the data we want to provide
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {/* spreading out the properties into  */}
        {/* this for this component props children refers to the component the component wraps */}
        {this.props.children}
        {/* whatever the context is name provider comes attached with */}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
