import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = (props) => {
  const { books } = useContext(BookContext);
//   Ternary if the books have lenght
  return books.length ? (
    <div className='book-list'>
      {books.map((book) => {
        return <BookDetails book={book} key={book.id} />;
      })}
    </div>
  ) : (
    <div className='empty'> Noo books to read. Hello free time :)</div>
  );
};

export default BookList;
