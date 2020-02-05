import React, { Component } from 'react';

class BrokenClick extends Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
		//setting the context of "this"
		this.handleClick = this.handleClick.bind(this);
		//this is clearer conceptually
	}

	//if doing arrow function it will explicitly bind to it
	handleClick(e) {
		this.setState({ clicked: true });
		//this is now referring to our component 
	}
	render() {
		return (
			<div>
				<h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
				<button onClick={this.handleClick}>Click Me!</button>
			</div>
		);
	}
}

export default BrokenClick;
