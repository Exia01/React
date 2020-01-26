class Hello extends React.Component {
  //default declaration in case of no props passed
  static defaultProps = {
    from: 'Anonymous',
    bangs: 1
  };
  render() {
    let bangs = '!'.repeat(this.props.bangs);
    return (
      <div>
        <p>
          Hi {this.props.to} from {this.props.from}
          {bangs}
        </p>
      </div>
    );
  }
}
