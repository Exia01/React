import React from 'react';

const coin = props => {
  return (
    <div className='coin'>
      <img src={props.currentCoin.imgSrc} alt={props.currentCoin.side} />
    </div>
  );
};

export default coin;
