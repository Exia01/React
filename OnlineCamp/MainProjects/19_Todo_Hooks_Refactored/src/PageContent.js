import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
// importing the use context

export default function PageContent(props) {
  // consuming context
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    height: '100vh',
    width: '100vw',
  };
  return <div style={styles}>{props.children}</div>;
}
