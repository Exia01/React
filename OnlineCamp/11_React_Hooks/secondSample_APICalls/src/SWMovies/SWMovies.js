import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SWMovies() {
  let [number, setNumber] = useState(1);
  let [movie, setMovie] = useState({});
  let [apiCallErr, setApiCallErr] = useState({});
  const totalMovies = [1, 2, 3, 4, 5, 6, 7];

  function handleSelect(e) {
    setNumber(e.target.value);
  }

  //multiple useEffects can be implemented
  // useEffect must return a function writing inside the block and calling
  useEffect(() => {
    async function getData() {
      // If not careful it will run an infinite loop due to updating the state inside and re-rendering
      try {
        const response = await axios.get(
          `https://swapi.dev/api/films/${number}/`
        );
        setMovie(response.data);
        setApiCallErr(false);
      } catch (err) {
        setApiCallErr(err.response);
      }
    }
    getData();
    // This will only run when number is selected
  }, [number]); //can pass any number of things in the state, if they change, useEffect to run
  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>
        You Chose {number} and the Title is: {movie.title}
      </h4>
      <p>{movie.opening_crawl}</p>
      <select name='movieSelection' value={number} onChange={handleSelect}>
        {totalMovies.map((num) => {
          return <option value={num}>Movie {num}</option>;
        })}
      </select>
    </div>
  );
}
