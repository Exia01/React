import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  }
}

export default ThemeToggle;
