import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// BEFORE
// class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return (
//       <div>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//       </div>
//     );
//   }
// }

const ThemeToggle = () => {
  // 'hooking' the ThemeContext with the useContext hook
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
