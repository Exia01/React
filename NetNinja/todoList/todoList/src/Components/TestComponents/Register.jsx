import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        fName: '',
        lName: '',
        email: '',
        password: '',
        passConfirm: ''
      }
    };
  }
  render() {
    return 
    <div className="form-group register-form">
      <h1>Create an account</h1>
      First Name: <input type="text" className="form-control"/>
      
      
    </div>
  }
}
export default Register;
