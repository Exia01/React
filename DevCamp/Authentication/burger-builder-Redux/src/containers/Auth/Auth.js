import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/FormInput/FormInput';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

//Styling
import classes from './Auth.module.css';

import * as actions from '../../store/actions/';
import { Redirect } from 'react-router-dom';

import { updateObject } from '../../shared/utility';

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
    isSignup: true
  };
  componentDidMount() {
    //this enables different urls by setting them in auth store
    if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath('/'); //if reached page while not building a burger
    }
  }

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
    /* could utilize this method but leaving out for explicit declaration*/
    /* const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(...this.state.controls[controlName], {
        valid: this.checkValidity(
          e.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      })
    });*/

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
    let email, password;
    email = this.state.controls.email.value;
    password = this.state.controls.password.value;
    this.props.onAuth(email, password, this.state.isSignup);
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };

  render() {
    let homeRedirect = null;
    let buttonOption = this.state.isSignup ? 'SignIn' : 'SignUp';
    let errorMessage = null;
    let formElementArray = [];
    let formInputs = null;
    for (let key in this.state.controls) {
      //creating obj from keys in orderform
      formElementArray.push({ id: key, config: this.state.controls[key] });
    }
    if (this.props.loading) {
      formInputs = <Spinner />;
    } else {
      formInputs = formElementArray.map(formElement => {
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
    }

    if (this.props.error) {
      errorMessage = <p>{this.props.error}</p>;
    }
    if (this.props.isAuth) {
      homeRedirect = <Redirect to={this.props.authRedirectPath} />; //setup in the auth reducer;
    }

    return (
      <React.Fragment>
        {homeRedirect}
        <div className={classes.Auth}>
          {errorMessage}
          <form onSubmit={this.submitHandler}>
            {formInputs}
            <Button btnType='Success' disabled={this.state.formIsValid}>
              Submit
            </Button>
          </form>
          <Button clicked={this.switchAuthModeHandler} btnType='Danger'>
            Switch TO {buttonOption}
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.idToken != null,
    buildingBurger: state.brg.buildingBurger, //comes in as boolean
    authRedirectPath: state.auth.authRedirectPath //sets the next page act after authenticating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)), //handles sign up and sign in
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
