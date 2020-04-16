import React, { useState, useEffect } from 'react';
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

  const [age, setAge] = useState(20); //can have more than one 'useState'

  // useEffect takes a callback function, runs every time it re renders(data changes) or originally renders
  useEffect(() => {
    console.log('useEffect hook ran', songs);
  }, [songs]); //second arg is arr of data we want to watch and only run when the data inside of it changes
  useEffect(() => {
    console.log('useEffect hook ran', age);
  }, [age]);//only run this useEffect when age state changes

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
      {/* clicking the button will update the age state but not the songs, will still run the use effect */}
      <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
    </div>
  );
};

export default SongList;
