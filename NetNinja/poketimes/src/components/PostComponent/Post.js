import React, {Component} from 'react';
import {deletePost} from'../../actions/PostActions'
import { connect } from 'react-redux';
/* We import the connect  */
/* was Container component */
class Post extends Component {
  /* Create the function to initiate the dispatch */
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    // console.log(this.props.history)
    /* We can add this to the stack to redirect them*/
    this.props.history.push('/')
  };
  render() {
    /* First check if post exist with ternary*/
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
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
  let id = parseInt(ownProps.match.params.post_id, 10); 
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

/* Creating a mapping the function dispatch from the "store" */
const mapDispatchToProps = (dispatch) => {
  return {
    /* This is an action or function */
    deletePost: (id) => {
      dispatch(deletePost(id));
    
    }
  };
};

/* passing down the mapStateToProps and mapDispatchToProps */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
/* Returns a hoc or higher order component and wraps the posts */
