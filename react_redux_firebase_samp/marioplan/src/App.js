import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar'

function App() {
  // BrowserRouter enables links
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="App">
        <h1>Hello!</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
