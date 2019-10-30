import React, { Component } from 'react';
import axios from '../../../axios-orders'; //using axios instance

import uuid from 'uuid';
import Input from '../../../components/UI/Input/FormInput/FormInput';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

//Styling
import classes from './ContactData.module.css';
// import { Button as ButtonUI, TextField } from '@material-ui/core';
// import { FormControl } from '@material-ui/core';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';

// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

export class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        //defining the input element tag
        elementType: 'input',
        //confing for html Tag
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: 'Ryu Washumaru',
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: 'Sesame st #119',
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: '010101',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 10
        },
        valid: true,
        touched: false
      },
      Country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: 'Antarctica',
        validation: {
          required: true // could also implement length, properties, or type.
        },
        valid: true,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: 'test@huzzah.com',
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest!' },
            { value: 'cheapest', displayValue: 'No rush!' }
          ]
        },
        value: '',
        validation:{},
        displayValue: ''
        //could implement a required of validation field.
      }
    },
    loading: false,
    formIsValid: false
  };

  orderHandler = e => {
    e.preventDefault();
    // console.log(this.props);
    this.setState({ loading: true }); //showing loading spinner
    const formData = {}; //extracting top level and specific values --> name: value
    for (let formElementIdentifier in this.state.orderForm) {
      // for of does not work.
      //email, country
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const burgerOrder = {
      orderId: uuid.v4(),
      ingredients: this.props.ingredients,
      price: this.props.totalPrice, //would do this on the db,
      orderData: formData
    };
    const orderObj = {
      ...this.state.ingredients
    };
    console.log(`Order Obj from order continue ${orderObj}`);
    //baseURL and sub route.
    axios
      .post('/online-orders/orders.json', burgerOrder) //using .json to target the endpoint
      .then(response => {
        console.log(response);
        this.setState({ loading: false, ingredients: null });
        alert('Success! ');
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  checkValidity = (value, rules) => {
    //checking for required rule, could implement other rules.
    let isValid = true;
    //setting isValid to true, using double validation on check to ensure there is no false positive or negative

    if(!rules){
      //quick check for rules. If not then return true
      return true
    }
    if (rules.required) {
      //if required
      isValid = value.trim() !== '' && isValid; // checking true or false if the value is not empty after trimming
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
      // will only be changed if the previous check was/is true
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    // if is it not empty, meets the min and the maximum, then it is valid
    return isValid;
  };

  inputChangedHandler = (e, inputIdentifier) => {
    //creating copy of state
    const updatedOrderForm = { ...this.state.orderForm }; //nested objects would be mutated.
    let updatedFormElement = null;

    // Checking for option tags --> if false
    if (
      e.target.childNodes.length === 0 ||
      e.target.selectedOptions.length === 0
    ) {
      updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
      //pull the nested property and creates a clone
      //now properties can be updated safely
      updatedFormElement.value = e.target.value;
      updatedFormElement.valid = this.checkValidity(
        updatedFormElement.value,
        updatedFormElement.validation
      ); // passing value and validation properties to function --> true or false
      updatedFormElement.touched = true;
    } else {
      //if target is select or option
      updatedFormElement = JSON.parse(
        JSON.stringify(updatedOrderForm[inputIdentifier])
      );
      updatedFormElement.value = e.target.selectedOptions[0].value;
      updatedFormElement.displayValue = e.target.selectedOptions[0].innerHTML;
    }
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    const formIsValid = true;
    // looping through all the elements
    for (let inputIdentifier in updatedOrderForm) {
      //skipping the options tag
      if(updatedFormElement[inputIdentifier]){
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid; //will only set to true if both inputIdentifier and formIsValid are true.
      }
    }
    //setting the updatedOrderForm obj with updated property
    this.setState({ orderForm: updatedOrderForm, formIsValid });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      //creating obj from keys in orderform
      formElementArray.push({ id: key, config: this.state.orderForm[key] });
    }
    let inputsArray = formElementArray.map(formElement => {
      let selected = null;
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
          valueChanged={e => this.inputChangedHandler(e, formElement.id)} //anonymous function to pass added args --> name, address,
        />
      );
    });
    let form = (
      <form onSubmit={this.orderHandler}>
        {inputsArray}
        <Button btnType='Success' disabled={!this.state.formIsValid}>Order</Button> 
      </form>
    );
    if (this.state.loading) {
      //if true
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
// <FormControl>
// <InputLabel htmlFor='my-input'>Email address</InputLabel>
// <Input id='my-input' aria-describedby='my-helper-text' />
// <FormHelperText id='my-helper-text'>
//   We'll never share your email.
// </FormHelperText>
// </FormControl>

// How to properly clone a javascript obj:https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object

// per MDZ:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
