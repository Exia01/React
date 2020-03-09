import React from 'react';
import { withRouter } from 'react-router-dom';

const FreshSardines = props => {
    const backButtonClickHandler = () => {
        let history
        if (props.history) {
              history = props.history
        }
        console.log(props.history);
        // console.log(history)
        // if(history) history.push('/home') else  this.props.history.goBack();
        if (history !== null || history !== undefined)
            history.push('/')
        else
            window.location.href = '/soda';
    };
    return (
        <div className='sardines'>
            <div className='sardines-content-grid'>
                <p>You don't eat Sardines. The Sardines eat you!! </p>
                <div className='sardines-button-grid-item'>
                    <button onClick={backButtonClickHandler} className='sardines-back-button'>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(FreshSardines);
