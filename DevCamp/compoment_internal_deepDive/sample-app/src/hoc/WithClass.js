import React from 'react';

//Strictly takes in the  component and wraps it around any other content
// classes are passed by the "classes" arg
const withClass = props => (
    <div className={props.classes}>{props.children}</div>
)

export default withClass


