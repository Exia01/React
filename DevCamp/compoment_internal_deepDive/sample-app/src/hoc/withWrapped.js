import React from 'react';
// function that returns a functional component
//this return another function that is a functional component
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    )
}

export default withClass