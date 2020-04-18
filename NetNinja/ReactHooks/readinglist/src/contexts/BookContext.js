import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

// Creates the context that we use to 'provide'
export const BookContext = createContext();

const BookContextProvider = (props) => {
  // creates a 'state' with a setter
  const [books, setBooks] = useState([
    { title: 'the way of kings', author: 'Patric Rothfuss', id: 1 },
    { title: 'the name of the wind', author: 'brandon sanderson', id: 2 },
    { title: 'the final empire', author: 'Louis Rossman', id: 3 },
  ]);

  const addBook = (obj) => {
    let { title, author } = obj;
    // Taking in the entire books array with shallow copy and overriding with the new obj
    setBooks([...books, { title, author, id: uuidv1() }]);
  };
  const removeBook = (id) => {
    let newBooksObj = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooksObj);
  };
  //   Passing the books obj, addBook func, and removeBook func
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
