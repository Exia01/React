import React, { Component } from 'react';

class Game extends Component {
		state = {
			score    : 99,
			gameOver : false
		};

	render() {
		return (
			<div>
				<h1>Your Score Is: {this.state.score}</h1>
			</div>
		);
	}
}
export default Game;
