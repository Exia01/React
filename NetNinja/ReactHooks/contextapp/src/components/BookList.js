import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';



export const BookList = () => {
  //consuming ThemeContext and destructuring
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark; //is it dark or light theme
  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </ul>
    </div>
  );
}

export default BookList;




