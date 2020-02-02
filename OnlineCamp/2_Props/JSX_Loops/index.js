class App extends React.Component {
  render() {
    const friendsList = [
      { name: 'Elton', hobbies: ['Piano', 'Singing', 'Dancing'] },
      { name: 'Brian', hobbies: ['Viola', 'Tango', 'Dancing'] }
    ];

    let friendsTags = friendsList.map(friendEl => {
      return (
        <Friend
          name={friendEl.name}
          hobbies={friendEl.hobbies}
          key={Math.random() * 100}
        />
      );
    });
    return <div>{friendsTags}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
