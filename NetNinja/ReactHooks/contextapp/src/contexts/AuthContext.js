import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuth: true,
  };
  toggleAuth = () => {
    this.setState((prevState) => {
      return { isAuth: !prevState.isAuth };
    });
  };
  render() {
    return (
      <AuthContext.Provider value={this.state.isAuth}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
