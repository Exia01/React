import React, { useContext } from 'react';
import { BookContext } from './../contexts/BookContext';

const Navbar = (props) => {
  // pulling values from the context
  const { books } = useContext(BookContext);
  return (
    <div className='Navbar'>
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through</p>
    </div>
  );
};

export default Navbar;
