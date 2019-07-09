import React from 'react';

const userInput = (props) => {
    //props automatically update when the state gets updated
    const {currentName, changed} = props
    const inputStyle = {
        border: '2px solid red'
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={changed} 
        value={currentName} />;
};

export default userInput;