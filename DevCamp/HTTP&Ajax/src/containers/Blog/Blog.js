import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// navlink enables extra styling, switch enables rendering one at a time

import classes from './Blogcss.module.css';
// import axios from '../../axios'; //could rename to AxiosInstanceName or other if necessary
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
// import FullPost from '../FullPost/FullPost';

//root page
class Blog extends Component {
  state ={
    auth:true
  }
  state = {
    selectedPostId: null, //initially null, wont render post info in component
    errors: false
  };

  render() {
    let newPostRoute = null
    if(this.state.auth){
      newPostRoute = <Route path="/new-post" component={NewPost} />
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
          <Redirect from="/" to="/posts" />
          <Route render={()=> <h1>Not Found?</h1>}/>
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Blog;

// <section>
//           <FullPost id={this.state.selectedPostId} />
//         </section>
//         <section>
//           <NewPost />
//         </section>
//       </div>
//</section>

// Router Links: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md
