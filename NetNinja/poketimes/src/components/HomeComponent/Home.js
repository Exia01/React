import React, { Component } from 'react';
import axios from 'axios';
/* This is a class based Component*/
class Home extends Component {
  state = {
    posts: []
  };
  /* */
  componentDidMount() {
    // let calls = 9;
    /* Returns a promise */
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({
        /* only taking in the first 10 posts */
        posts: res.data.slice(0, 10)
      });
    }).catch(res => {
      console.log(res)
    });
    /*  for (let num = 1; num <= calls; num += 2) {
      console.log(num);
      axios.get('https://pokeapi.co/api/v2/pokemon/' + num).then(res => {
        console.log(res);
      });
    } */
  }
  render() {
    /* Destructuring */
    const {posts} = this.state;
    /* Ternary operator */
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
