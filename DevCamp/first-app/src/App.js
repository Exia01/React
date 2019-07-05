import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello There</h1>
      <Person name="max" age="28"/>
      <Person name="Manu" age="23" />
      <Person name="Melanie" age="17">My hobbies: Gaming</Person>
    </div>
  );
}

export default App;
