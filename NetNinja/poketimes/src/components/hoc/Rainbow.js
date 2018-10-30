import React from 'react';

/* Takes in another component that has been previously 'wrapped' */
const Rainbow = WrappedComponent => {
  const colors = ['red', 'orange', 'blue', 'green', 'lightgray', 'pink'];
  /* Picks random color position */
  const randomColor = colors[Math.floor(Math.random() * 5)];
  console.log(randomColor);
  /* concatenating the class */
  const className = randomColor + '-text';

  /* return the component that was wrapped */
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
export default Rainbow;
/* We are using the spread operator to pass in props  */
