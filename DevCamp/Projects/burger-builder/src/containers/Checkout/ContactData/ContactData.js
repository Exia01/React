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
    oderForm: {
      name: {
        //defining the input element tag
        elementType: 'input',
        //confing for html Tag
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: 'Ryu Washumaru'
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: 'Sesame st #119'
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: '010101'
      },
      Country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: 'Antarctica'
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: 'test@huzzah.com'
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest!' },
            { value: 'cheapest', displayValue: 'No rush!' }
          ]
        },
        value: ''
      }
    },
    loading: false
  };

  orderHandler = e => {
    e.preventDefault();
    console.log('Props on Contact Data');
    // console.log(this.props);
    this.setState({ loading: true }); //showing loading spinner
    const burgerOrder = {
      orderId: uuid.v4(),
      ingredients: this.props.ingredients,
      price: this.props.totalPrice //would do this on the db
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
  inputChangedHandler = (e, inputIdentifier) => {
    //creating copy of state 
    const updatedOrderForm = {...this.state.oderForm} //nested objects would be mutated.

    //pull the nested property and creates a clone 
    const updatedFormElement= {...updatedOrderForm[inputIdentifier]}
    //now properties can be updated safely
    updatedFormElement.value = e.target.value
    
   //setting the updatedOrderForm obj with updated property 
   updatedOrderForm[inputIdentifier] = updatedFormElement
   this.setState({ oderForm: updatedOrderForm });
  };  
  render() {
    const formElementArray = [];
    for (let key in this.state.oderForm) {
      //creating obj from keys in orderform
      formElementArray.push({ id: key, config: this.state.oderForm[key] });
    }
    let inputsArray = formElementArray.map(formElement => {
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          valueChanged={(e) => this.inputChangedHandler(e,formElement.id)} //anonymous function to pass added args --> name, address, 
        />
      );
    });
    let form = (
      <form>
        {inputsArray}
        <Button btnType='Success' clicked={this.orderHandler}>
          Order
        </Button>
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
