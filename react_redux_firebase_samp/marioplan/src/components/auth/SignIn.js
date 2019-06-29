import React, { Component } from "react";
//connect to redux
import { connect } from "react-redux";
//sign in action
import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state); //passing the credentials
  };
  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

//mapping to props to get auth error back
const mapStateToProps = state => {
  return {
    authError: state.auth.authError // attaching error property to props
  };
};

//takes in the action or "dispatch"
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)) //what we are attaching to the props to the components
  };
};
//mapdispatch for actions, mapstatetoprops to sync the state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
