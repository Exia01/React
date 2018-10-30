import React, { Component } from 'react';
import axios from 'axios';
/* Container component */
/* Props have been inherited from the Route Component */
class Post extends Component {
  /* First initialize -> then grab from the resquest */
  state = {
    post: null
  };

  componentDidMount() {
    /* console.log(this.props) */
    let id = this.props.match.params.post_id;
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        });
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  }
  render() {
    /* First check if post exist with ternary*/
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading Post...</div>
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;
