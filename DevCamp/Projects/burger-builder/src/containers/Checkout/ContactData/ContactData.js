import React, { Component } from 'react';
import axios from '../../../axios-orders'; //using axios instance
import uuid from 'uuid';
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
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = e => {
    e.preventDefault();
    // console.log('Props on Contact Data');
    // console.log(this.props);
    this.setState({ loading: true }); //showing loading spinner
    const burgerOrder = {
      orderId: uuid.v4(),
      ingredients: this.props.ingredients,
      price: this.props.totalPrice, //would do this on the db
      customer: {
        name: 'Ryu Washumaru',
        address: {
          street: 'Sesame st #119',
          zipCode: '010101',
          Country: 'Antarctica'
        },
        email: 'test@huzzah.com'
      },
      deliveryMethod: 'Del/ASAP'
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
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <input
          className={classes.Input}
          type='email'
          name='email'
          placeholder='Your email'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Street'
        />
        <input
          className={classes.Input}
          type='text'
          name='zipCode'
          placeholder='ZIp Code'
        />
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
