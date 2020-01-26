class Machine extends React.Component {
  render() {
	const { s1, s2, s3 } = this.props;
	// Boolean check
    const winner = s1 === s2 && s2 === s3;
    // classes that use dashes are changed to "CamelCasing"
    const colors = { fontSize: '50px', backgroundColor: 'lavender' };

    return (
      <div className='Machine'>
        <label htmlFor='textInput'></label>
        <p style={colors}>
          {s1} {s2} {s3}
		</p>
		{/*conditional class assignment*/}
        <p className={winner ? 'win' : 'lose'}>
          {winner ? 'Winner!' : 'Loser!'}
        </p>
      </div>
    );
  }
}
