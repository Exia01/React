// ====================================================
// IF YOU ARE LOOKING FOR THE 'fake' ROUTING EXAMPLE...
// I MOVED THE CODE INTO FakeRouting.js
// ====================================================
import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          {/* Renders as an a tag, different from NavLink, which does not have active className */}
          <NavLink exact activeClassName='active-link' to='/'>
            About
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>
            Contact
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/dog'>
            Dog
          </NavLink>

          {/* THESE LAST TWO LINKS ARE FROM THE LAST VIDEO IN THE SECTION! */}
          {/* ============================================================ */}
          <NavLink activeClassName='active-link' to='/dog/r'>
            Dog(r)
          </NavLink>
          <NavLink activeClassName='active-link' to='/dog/c'>
            Dog(c)
          </NavLink>
        </nav>

        <Switch>
          {/* Switch renders one case or "Route" */}
          <Route exact path='/' component={About} />
          {/* exact ensures no other route gets match  */}
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/dog' component={Dog} />
          <Route exact path='/dog/hater' component={Hater} />

          {/* ======================================================== */}
          {/* Renders two separate components with props */}
          {/* Component will instantiate a new Dog every time can harm performance!!! */}
          <Route exact path='/dog/c' component={() => <Dog name='Muffins' />} />
          {/* Render will re-use the existing dog component, better practice?  no remounting and mounting*/}

          {/* if passing props it is preferable to use render */}
          <Route exact path='/dog/r' render={() => <Dog name='Biscuits' />} />
        </Switch>
      </div>
    );
  }
}

export default App;

// Router Info
// https://stackoverflow.com/questions/47879663/root-navlink-always-get-active-class-react-router-dom
