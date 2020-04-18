import React, { createContext, useState } from 'react';

export const BookContext = createContext();

//passing props to render props children
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'the way of kings', id: 1 },
    { title: 'the name of the wind', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the hero of  ages', id: 4 },
  ]);
  return (
    //   passing just books as values, could even have a func or more and pass along in the value
    <BookContext.Provider value={{ test: 'hello',books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;


// Quick article explaining in detail: https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c