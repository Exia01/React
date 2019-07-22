import React from 'react';
// function that returns a functional component
//this return another function that is a functional component
const withClass = (WrappedComponent, className) => { 
    //spread props returns the values as new key value pair
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass