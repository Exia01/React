import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
/* Using BrowserRouter instead of HashRouter */
import './App.css';
/* Props are being passed via "Route" */
import About from './components/AboutComponent/About';
import Contact from './components/Contact/Contact';
import Home from './components/HomeComponent/Home';
import Navbar from './components/NavbarComponent/Navbar';
import Post from './components/PostComponent/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:post_id" component={Post} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
