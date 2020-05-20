import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext(); //creating context

export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false); //using custom hook
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
