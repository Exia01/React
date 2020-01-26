class Hello extends React.Component {
  render() {
    console.log(this.props)
    //props are READONLY cannot be 
    return <p>Hi {this.props.to} from {this.props.from}</p>;
  }
}