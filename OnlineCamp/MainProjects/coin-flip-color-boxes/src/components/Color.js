import React from 'react';

const Color = props => {
  let bgColor = props.colorObj.color;
  let id = props.colorObj.id;
  return (
    <div
      id={id}
      className='color-item'
      style={{ backgroundColor: bgColor }}
      onClick={props.colorClickedHandler}
    ></div>
  );
};

export default Color;
