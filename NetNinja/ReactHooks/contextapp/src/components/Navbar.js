import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
class Navbar extends Component {
  // importing the constant declared at top and attaching to the all the instances
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {/* // ThemeContext.Consumer expects a function and can be used in a functional component */}
            {/* Using the consumer and consume the context by using it inside the function */}
            {(themeContext) => {
              // Get access to the authContext
              const { isAuth, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark; //is it dark or light theme
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div>
                    {isAuth ? <p>Logged in</p> : <p>Logged Out</p>}
                    <button onClick={toggleAuth}>Toggle here</button>
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
