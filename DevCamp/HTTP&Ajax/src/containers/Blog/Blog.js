import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import BlogCss from './Blogcss.module.css';
import axios from '../../axios'; //could rename to AxiosInstanceName or other if necessary
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';

//root page
class Blog extends Component {
  state = {
    selectedPostId: null, //initially null, wont render post info in component
    errors: false
  };

  render() {
    return (
      <React.Fragment>
        <header className={BlogCss.BlogCss}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search:'?quick-submit=true'
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={()=><h1>Home</h1>}/>
        <Route path="/" render={()=><h1>Home2</h1>}/>  */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
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
