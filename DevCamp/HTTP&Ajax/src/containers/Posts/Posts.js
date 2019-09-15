import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from '../../axios';
import classes from './Posts.module.css'; //reusing css
// import { Link } from 'react-router-dom';

export class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    // console.log(`Current props in Posts:`);
    // console.log(this.props);
    axios
      .get('/posts')
      .then(response => {
        // console.log(response);
        const data = response.data.slice(0, 4);
        const updatedPost = data.map(post => {
          return { ...post, author: 'Joshua' };
        });
        this.setState({ posts: updatedPost }); //needs to be called in the "then" so that the data has been fetched
      })
      .catch(err => {
        console.log('Error!! ', err);
        // this.setState({ errors: true });
      });
  }
  postSelectedHandler = id => {
    // console.log(e.target.id) could also just pass an id to the object article
    // console.log(id);
    this.setState({ selectedPostId: id });
    //navigating programmatically
    let location = {pathname:`/${id}`}
    // this.props.history.push(`/${id`)
    this.props.history.push(location)
  };
  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went sideways!</p>;
    if (!this.state.errors) {
      //if there aren't errors
      posts = this.state.posts.map(post => {
        return (
          //<Link to={`/${post.id}`} key={post.id}>
            <Post
            key={post.id}
              post={post}
              clicked={() => this.postSelectedHandler(post.id)}
            />
         // </Link>
        );
      });
    }
    return <section className={classes.Posts}>{posts}</section>;
  }
}

export default Posts;
