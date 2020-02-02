
// Defining class component convention is Capital Letter
class Hello extends React.Component {
	render() {
		return (
			<div className="test">
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>

		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
