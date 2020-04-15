import React, { useState } from 'react';

const NewSongForm = (props) => {
  const { addSongClickHandler } = props;
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page refresh
    addSongClickHandler(title);
    setTitle('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Song'>Song Name</label>
        <input
          type='text'
          required
          value={title}
          //   On change setting the string on the 'state' with the func from setState
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type='submit' value='Add song' />
      </form>
    </div>
  );
};

export default NewSongForm;
