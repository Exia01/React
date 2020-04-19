import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = (props) => {
  // could also destructure right when we recieve the props
  const { book } = props;
  const { dispatch } = useContext(BookContext);
  const removeBookClickHandler = () => {
    dispatch({ type: 'REMOVE_BOOK', id: book.id });
  };
  return (
    <li onClick={removeBookClickHandler}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
};

export default BookDetails;
