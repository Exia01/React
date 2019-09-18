import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import axios from 'axios';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Yoshi',
    submitted: false
  };

  componentDidMount() {
    // If unauth => this.props.history.replace('/posts')
    console.log(`Current props in NewPost:`);
    // console.log(this.props);
  }
  postDataHandler = () => {
    const post = {
      tittle: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    axios
      .post('posts', post)
      .then(response => {
        //baseURL set on indexjs
        console.log(response);
        alert('Submitted!');
            this.props.history.push('/posts')
        // this.setState({ submitted: true });
        //redirect replaces the page on the stack
      })
      .catch(err => {
        console.log(err);
      });
  };
  //can implement onChange handler here instead of inline

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="posts" />;
    }
    //redirect embedded within div
    return (
      <div className={classes.NewPost}>
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
