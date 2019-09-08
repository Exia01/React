import React, { Component } from 'react';
// import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from '../../axios' //could rename to AxiosInstanceName or other if necessary

import './Blog.css';

//root page
class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null, //initially null, wont render post info in component
    errors: false
  };
  componentDidMount() {
    axios
      .get('posts')
      .then(response => {
        console.log(response);
        const data = response.data.slice(0, 4);
        const updatedPost = data.map(post => {
          return { ...post, author: 'Joshua' };
        });
        this.setState({ posts: updatedPost }); //needs to be called in the "then" so that the data has been fetched
      })
      .catch(err => {
        console.log('Error!! ', err);
        this.setState({ errors: true });
      });
  }
  postSelectedHandler = id => {
    // console.log(e.target.id) could also just pass an id to the object article
    console.log(id);
    this.setState({ selectedPostId: id });
    // axios
    //   .get('posts')
  };
  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went sideways!</p>;
    if (!this.state.errors) {
      //if there aren't errors
       posts = this.state.posts.map(post => {
        return (
          <Post
            post={post}
            key={post.id}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
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
