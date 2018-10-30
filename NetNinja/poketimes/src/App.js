import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* Using BrowserRouter instead of HashRouter. Switch renders one route at a time */
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
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
