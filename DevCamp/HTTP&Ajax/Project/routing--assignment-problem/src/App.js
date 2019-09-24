import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

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
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="test">
                <NavLink to="/Users" exact>
                  Users
                </NavLink>
              </li>
              <li className="test">
                <NavLink to="/Courses" exact>
                  Courses
                </NavLink>
              </li>
              <li className="test">
                <NavLink to="/meow/unkwon/" exact>
                  test link
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} /> 
          <Route exact path="/Users"  component={Users} />
          <Route path="/Courses" component={Courses} />
          <Route exact Path="/all-courses"  redirect="/Courses/" />
            <Route component={NotFoundComponent} />
            {/*<Route path="/" component={() => <h1>Home</h1>} />*/}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
