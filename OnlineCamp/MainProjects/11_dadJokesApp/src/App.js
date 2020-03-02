import React from 'react';
import './App.css';

import SideBar from './components/SideBar';
import JokeList from './containers/JokeList';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <JokeList/>
    </div>
  );
}

export default App;
