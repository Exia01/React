import React, { createContext, useReducer, useEffect } from 'react'; //useEffect will run everytime the data updates
import { v1 as uuidv1 } from 'uuid';
import { bookReducer } from '../reducers/BookReducer';

// Creates the context that we use to 'provide'
export const BookContext = createContext();

const BookContextProvider = (props) => {

  //getting original list of books if there are any and passing to the reducer, which will ignore the empty arr in the second arg
  const getLocalStorageBooks = () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : [] //parsing the string json and turning into json obj
  }

  // creating a initial state for a reducer, and passing the reducer that we are using
  const [books, dispatch] = useReducer(bookReducer, [], getLocalStorageBooks);
  // runs when first rendered, then runs every time


  useEffect(() => {
    // localStorage only stores Strings and can be retrieved with a key, using JSON.stringify to store
    localStorage.setItem('books', JSON.stringify(books)) //setting everytime we update the list
  }, [books])//whenever the books data changes, then run this hook

  return (
    // Passing the books arr and the reducer
    < BookContext.Provider value={{ books, dispatch }
    }>
      {props.children}
    </BookContext.Provider >
  );
};

export default BookContextProvider;

// { title: 'the way of kings', author: 'Patric Rothfuss', id: 1 },
// { title: 'the name of the wind', author: 'brandon sanderson', id: 2 },
// { title: 'the final empire', author: 'Louis Rossman', id: 3 },