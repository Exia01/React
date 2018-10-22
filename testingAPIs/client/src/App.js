import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Link } from 'react-router-dom';

import './App.css';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Donate from './components/Donate';
import About from './components/AboutComponent/About';

// this is our root componet
class App extends Component {
  title = 'Hello, I am a body component'; // we dont even have to use let. crazy!
  ComponentDidMount() {}

  render() {
    return (
      // HashRouter this handles the routing equivalent to router-outlet
      // the footer and header don't have a route path, they will always load
      // line

      // header needs to be inside hash router because it has links
      <div>
        <HashRouter>
          <div className="App">
            <Header />

            <Route exact path="/" component={Body} />

            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/donate" component={Donate} />
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
