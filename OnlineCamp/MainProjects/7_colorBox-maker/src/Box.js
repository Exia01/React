import React from 'react';

const Box = (props) => {
  const {width, height, backgroundColor} = props.boxPropsObj
  let styleClasses = {width: `${width}px`, height: `${height}px`, backgroundColor}
  console.log(props)
  return (
    <div className='ColorBox' style={styleClasses}>
      <button onClick={()=>props.removeBox(props.boxPropsObj.id)}>remove</button>
    </div>

  );
};

export default Box;
