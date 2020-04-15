import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  // useState takes in value for the initial piece of state, defining prop of state
  const [songs, setSongs] = useState([
    //  func returns two values, the obj itself and the setter func. Using arr destructuring to get
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ]);

  const addSongClickHandler = (title) => {
    //taking title from newForm
    //   Using setSongs value from useState to change the 'state'
    setSongs([...songs, { title, id: uuidv1() }]);
    //obj will replace whatever is it stored in there. Passing whole obj and updating values
  };

  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSongClickHandler={addSongClickHandler} />
    </div>
  );
};

export default SongList;
