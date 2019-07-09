import React, {Component} from 'react';

class UserInput extends Component {
  state = {
    emailValue:[..."",this.props.currentEmail] //Not sure if need to spread before. Props are read only??
  }
  handleChange = (e) => {
    this.setState({
      emailValue: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      emailValue: ''
    })
    this.props.inputValueSubmitHandler(this.state.emailValue)
    setTimeout(() => {
      this.props.history.push('/output')
    }, 2000);
   
  }
  render() {
    const formStyle = {
      width: "500px"
    }
    return (
      <div>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} value={this.state.emailValue} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default UserInput


//router pass multiple props: https://tylermcginnis.com/react-router-pass-props-to-components/
//props: https://flaviocopes.com/react-props/