import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NotFoundComponent from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         
          <nav>
            <ul>
              <li className="test">
                <NavLink to="/" exact activeClassName="">
                  Home
                </NavLink>
              </li>
              <li className="test">
                <NavLink to="/Users" exact activeClassName="">
                  Users
                </NavLink>
              </li>
              <li className="test">
                <NavLink to="/Courses" exact activeClassName="">
                  Courses
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
          <Route path="/Users" component={Users} />
          <Route path="/Courses" component={Courses} />
          <Route path="/Courses" component={Courses} />
          <Route path="/" component={()=><h1>Home</h1>} />
            <Route render={NotFoundComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
