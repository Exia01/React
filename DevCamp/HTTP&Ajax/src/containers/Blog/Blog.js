import React, { Component } from 'react';
import Axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

//root page
class Blog extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      console.log(response);
      const data = response.data.slice(0,4)
      const updatedPost = data.map(post=>{
          return {...post, author:'Joshi'}
      })
      this.setState({ posts: updatedPost }); //needs to be called in the "then" so that the data has been fetched
    });
  }
  render() {
    const posts = this.state.posts.map(post => {
      return <Post post={post}/>;
    });
    return (
      <div>
        <section className="Posts">
        {posts}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
