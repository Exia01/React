import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class Navbar extends Component {
  // importing the constant declared at top and attaching to the all the instances
  render() {
    return (
      // ThemeContext.Consumer expects a function and can be used in a functional component
      <ThemeContext.Consumer>
        {/* Using the consumer and consume the context by using it inside the function */}
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark; //is it dark or light theme
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
