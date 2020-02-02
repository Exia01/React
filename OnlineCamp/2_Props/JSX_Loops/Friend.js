class Friend extends React.Component {
  render() {
    //deconstructing
    const {name, hobbies} = this.props;
    console.log(this.props)

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {/*key needed do differentiate*/}
          {hobbies.map(h => <li key={Math.random() * 10000}>{h}</li>)}
        </ul>
      </div>
    )
  }
}