import React, { useContext, useState } from 'react'; //use state to keep a temp obj to add to the BookContent
import { BookContext } from './../contexts/BookContext';

const NewBookForm = () => {
  //defining two pieces of the 'state'
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { addBook } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        id=''
        placeholder='Book Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        name='author'
        id=''
        placeholder='Author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type='submit'>Add Book</button>
    </form>
  );
};

export default NewBookForm;
