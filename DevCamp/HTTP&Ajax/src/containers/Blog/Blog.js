import React, { Component } from 'react';
// import axios from 'axios';

import BlogCss from './Blogcss.module.css';
import axios from '../../axios'; //could rename to AxiosInstanceName or other if necessary
import Posts from '../Posts/Posts';

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Posts />
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
