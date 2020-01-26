function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  state = {
    winingNum: 0
  };

  testFun = () => {
    let test = 7;
    test === 7 ? this.setState({ winingNum: test }) : null;
  };
  render() {
    const num = getNum();
    console.log(this.state);
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>CONGRATS YOU WIN!</h2>
          <img src='https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp' />
        </div>
      );
    } else {
      msg = <p>Sorry You Lose!</p>;
    }
    return (
      <div>
        <h1>Your number is: {num} </h1>
        {msg}
      </div>
    );
  }
}
