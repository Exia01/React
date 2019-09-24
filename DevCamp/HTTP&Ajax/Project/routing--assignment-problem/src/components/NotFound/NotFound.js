import React from 'react';

const NotFound = ({location}) => {
  return (
    <div>
      <h1>Not Found</h1>
      <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
  );
};

export default NotFound;
