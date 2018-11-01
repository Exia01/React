import React, { Component } from 'react';
import { connect } from 'react-redux';
/* We import the connect  */
/* was Container component */
class Post extends Component {
  render() {
    /* First check if post exist with ternary*/
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading Post...</div>
    );
    return <div className="container">{post}</div>;
  }
}
/* state is the props from redux, ownProps is the props from this component before attaching the additional*/
const mapStateToProps = (state, ownProps) => {
  /* This prop is coming from the app.js --> "post_id" */
  /* console.Log(ownProps) */
  let id = ownProps.match.params.post_id;
  return {
    /* we're taking the state that is coming in from redux */
    post: state.posts.find(post => post.id === id)
    /* short version:
    (post =>{
    return post.id ==id})
    })
    */
  };
};
/* passing down the mapStateToProps */
export default connect(mapStateToProps)(Post);
/* Returns a hoc or higher order component and wraps the posts */
