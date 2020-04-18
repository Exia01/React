import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from './../contexts/BookContext';



export const BookList = () => {
  //consuming ThemeContext and destructuring
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  //not destructuring since it is only one value
  const { books } = useContext(BookContext)

  const theme = isLightTheme ? light : dark; //is it dark or light theme

  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(book => {
          return <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>
        })}
      </ul>
    </div>
  );
}

export default BookList;




