import React, { Component } from 'react';
import Axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

//root page
class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null //initially null, wont render post info in component
  };
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      console.log(response);
      const data = response.data.slice(0, 4);
      const updatedPost = data.map(post => {
        return { ...post, author: 'Joshi' };
      });
      this.setState({ posts: updatedPost }); //needs to be called in the "then" so that the data has been fetched
    });
  }
  postSelectedHandler = id => {
    // console.log(e.target.id) could also just pass an id to the object article
    console.log(id);
    this.setState({ selectedPostId: id });
  };
  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          post={post}
          key={post.id}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
