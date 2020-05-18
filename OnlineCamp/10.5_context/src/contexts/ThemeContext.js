import React, { Component, createContext } from 'react';

// Saving to a variable
export const ThemeContext = createContext(); //can pass a default val
//need to export both
export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: false };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode }); //toggling
  }
  render() {
    return (
      // Setting the provider, other components will consume
      <ThemeContext.Provider
        // passing the two values, whole obj state and func
        value={{ ...this.state, toggleTheme: this.toggleTheme }} //can put in array of obj
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
