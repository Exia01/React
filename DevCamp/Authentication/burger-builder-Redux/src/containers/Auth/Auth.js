import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/FormInput/FormInput';
import Button from '../../components/UI/Button/Button';

//Styling
import classes from './Auth.module.css';

import * as actions from '../../store/actions/';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: true,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 4
        },
        valid: true,
        touched: false
      }
    },
    formIsValid: false,
    isSignup:true,
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (e, controlName) => {
    //creating copy of state
    const updatedControlFormInput = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: e.target.value,
        valid: this.checkValidity(
          e.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControlFormInput });
  };

  submitHandler = e => {
    e.preventDefault();
    let  email, password;
    email = this.state.controls.email.value;
    password = this.state.controls.password.value;
    this.props.onAuth(email, password, this.state.isSignup);
  };

  switchAuthModeHandler=()=>{
    this.setState(prevState=>{
      return {isSignup:!prevState.isSignup}
    })
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.controls) {
      //creating obj from keys in orderform
      formElementArray.push({ id: key, config: this.state.controls[key] });
    }

    let formInputs = formElementArray.map(formElement => {
      // formElement.config.options.value != formElement.value
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          inValid={!formElement.config.valid} //passing the opposite
          shouldValidate={formElement.config.validation} //this will pass undefined and check true or false under props
          touched={formElement.config.touched} //checking for touched element
          valueChanged={e => this.inputChangedHandler(e, formElement.id)} //,
        />
      );
    });

    let buttonOption = this.state.isSignup ?'SignIn': 'SignUp'
    return (
      <React.Fragment>
        <div className={classes.Auth}>
          <form onSubmit={this.submitHandler}>
            {formInputs}
            <Button btnType='Success' disabled={this.state.formIsValid}>
              Submit
            </Button>
          </form>
          <Button clicked={this.switchAuthModeHandler} btnType="Danger">Switch TO {buttonOption}</Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(null, mapDispatchToProps)(Auth);
