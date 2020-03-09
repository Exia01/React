import React from 'react';
import { withRouter } from 'react-router-dom';

export const Soda = props => {
  const backButtonClickHandler = () => {
    let history;
    if (props.history) {
      history = props.history;
    }
    console.log(props.history);
    // console.log(history)
    // if(history) history.push('/home') else  this.props.history.goBack();
    if (history !== null || history !== undefined) history.push('/');
    else window.location.href = '/soda';
  };
  return (
    <div className='soda'>
      <div className='soda-image'>
        <img
          src='https://cdn.shopify.com/s/files/1/1509/5104/products/818i_2BQm07UL._SL1500_1024x1024.jpg?v=1530943896'
          alt='coke can'
        />
      </div>
      <div className='soda-textbox'>
        <h1 className='soda-title'>Soda!</h1>
        <div className='soda-button-section'>
          <button onClick={backButtonClickHandler}>Go Back</button>
        </div>
      </div>
      <div className='soda-image'>
        <img
          src='https://cdn.shopify.com/s/files/1/1509/5104/products/818i_2BQm07UL._SL1500_1024x1024.jpg?v=1530943896'
          alt='coke can'
        />
      </div>
    </div>
  );
};

export default withRouter(Soda);
