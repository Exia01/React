import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    const {userName} = props
    console.log(props)
    console.log(userName)
    return (
        <div className="UserOutput">
            <p>Username: {userName}</p>
            <p>I hope I'll be overwritten!</p>
        </div>
    );
};

export default userOutput;