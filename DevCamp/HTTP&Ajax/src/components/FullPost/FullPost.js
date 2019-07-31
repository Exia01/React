import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidUpdate(prevProps, prevState) {
    // first check is to check if we have a props id to move forward
    if (this.props.id) {
      // Second check will stop infinite loop from executing otherwise it would change state and update the component
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        //additional check helps ensure we check the first time around for sending a call
        axios
          .get(`/posts/${this.props.id}`)
          .then(response => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }
  deletePostHandler =() => {
    axios
      .delete(`/posts/${this.props.id}`)
      .then(response => {
        console.log('Success! ', response);
      })
      .catch(err => {
        console.log('Something went wrong! ', err);
      });
  };
  render() {
    //Truthy... checks if post.id, if ID we render it
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.props.id) {
      post = <p syle={{ textAlign: 'center' }}>....Loading...!</p>;
    }

    if (this.state.loadedPost) {
      // initially null so evaluates as false
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
