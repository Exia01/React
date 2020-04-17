import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuth: false,
    tokeId: '34s&'
  };
  toggleAuth = () => {
    console.log('clicked!');

    this.setState((prevState) => {
      return { isAuth: !prevState.isAuth };
    });
  };
  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
