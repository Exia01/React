import React, { Component,  } from 'react';
// import axios from 'axios';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent';

import Posts from '../Posts/Posts';
// navlink enables extra styling, switch enables rendering one at a time
import classes from './Blogcss.module.css';
import  NotFoundComponent from '../../components/NotFound/NotFound'

const AsyncNewPost = asyncComponent(() => {
  return import('../NewPost/NewPost'); //dynamic import syntax only when anonymous func is fired
});

//root page
class Blog extends Component {
  state = {
    selectedPostId: null, //initially null, wont render post info in component
    errors: false,
    auth: true
  };

  render() {
    let newPostRoute
    if (this.state.auth) {
      newPostRoute = <Route path="/new-post" component={AsyncNewPost} />;
    }
    return (
      <React.Fragment>
        <header className={classes.BlogCss}>
          <nav>
            <ul>
              <li className="test">
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="Blogcss_active__2e6Pm"
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={()=><h1>Home</h1>}/>
        <Route path="/" render={()=><h1>Home2</h1>}/>  */}
        <Switch>
          {newPostRoute}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to='/posts'/>
          <Route render={NotFoundComponent} />
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Blog;

// Router Links: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md
// Using React Lazy: https://reactjs.org/docs/code-splitting.html