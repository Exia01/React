import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class GithubUserInfo extends Component {
  constructor(props) {
    console.log("Inside Contructor");

    super(props);
    this.state = {
      user: {}, // declaring, better than setting null on renders
      isLoaded: false
    };
  }
  //async version
  async componentDidMount() {
    console.log("Component Mounted");

    setTimeout(async () => {
      const url = `https://api.github.com/users/${this.props.username}`;
      let response = await axios.get(url);
      let user = response.data;
      this.setState({ user, isLoaded: true });
    }, 2000);
  }
  //     componentDidMount(){
  //         axios.get('https://api.github.com/users/elie')
  //          .then(response => {
  //              let user = response.data
  //              this.setState({ user });
  //          });
  //    }

  // after update, send to database or something
  componentDidUpdate() {
    console.log("component updated");
  }

  render() {
    let userInfoDiv;
    this.state.isLoaded
      ? (userInfoDiv = (
          <div>
            <h1>{this.state.user.name}</h1>
            <p>{this.state.user.bio}</p>
            <img src={this.state.user.avatar_url} />
          </div>
        ))
      : (userInfoDiv = <div className="sbl-circ-path"></div>);
    return <React.Fragment>{userInfoDiv}</React.Fragment>;
  }
}

export default GithubUserInfo;
