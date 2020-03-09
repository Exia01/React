import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class VendingMachine extends Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {
            chipBags: 0
        };
    }
    render() {
        return (
            <div className='vending-machine'>
                <div className='vending-machine-message'>
                    <p>Hello! I am a vending Machine. What would you like to eat?</p>
                </div>
                <div className='vending-machine-options'>
                    <div className='vending-machine-option-links'>
                        <Link to='/Soda'>Soda</Link>
                        <Link to='/Chips'>Chips</Link>
                        <Link to='/FreshSardines'>Sardines</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default VendingMachine;


/* <Route exact path='/dog/r' render={() => <Dog name='Biscuits' />} /> */

