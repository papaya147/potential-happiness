const rootElement = document.getElementById("root");

class App extends React.Component {
  state = {
    paras: [],
    count: 0
  };

  addPara = () => {
    this.setState({
      paras: [
        ...this.state.paras,
        <Paragraph id={this.state.count++} remove={this.removePara} />
      ]
    });
  };

  removePara = index => {
    let array = [...this.state.paras];
    //Write loop to delete properly
    array.splice(index, 1);
    this.setState({ paras: array });
  };

  render() {
    return (
      <div>
        {this.state.paras}
        <div className="btn btn-warning" id="add" onClick={this.addPara}>
          Add Paragraph
        </div>
        <div name="count">{this.state.count}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, rootElement);
