import React, { Component } from 'react';
import Pokeball from '../img/pokeball.png';
import { Link } from 'react-router-dom';

/* This WAS a class based Component*/
/* Is bassically a function we invoke it to use it */
import { connect } from 'react-redux';
/* We 'connect' to bring back the HOC('Higher order component') */
class Home extends Component {
  render() {
    console.log(this.props)
  /* Destructuring */
    const { posts } = this.props;
    /* Ternary operator */
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
  // componentDidUpdate = (prevProps, prevState) => {
  //   console.log('Component has been updated')
  //   console.log(prevProps, prevState)
  //   console.log(this.state)
  // };
}
/* Create a function --> taking the state and mapping it to the props */
const mapStateToProps = (state) => {
  return {
    /* Taking the state and grabbing the posts propperty */
    posts:state.posts
  }
}

/* We invoke it and then connect or wrapping the home component */
export default connect(mapStateToProps)(Home);
/* We then pass it to the connnect function so that it knows what to grab from the props */