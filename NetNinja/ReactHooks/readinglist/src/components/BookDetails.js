import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = (props) => {
  // could also destructure right when we recieve the props
  const { book } = props;
  const { removeBook } = useContext(BookContext);
  const removeBookClickHandler = () => {
    removeBook(book.id);
  };
  return (
    <li onClick={removeBookClickHandler}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
};

export default BookDetails;
