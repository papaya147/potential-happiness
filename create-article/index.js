const rootElement = document.getElementById("root");

class App extends React.Component {
  state = {
    paras: []
  };

  addPara = () => {
    this.setState({
      paras: [...this.state.paras, <Paragraph id={count} remove={this.removePara} />]
    });
  };

  removePara = index => {
    let array = [...this.state.paras];
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ paras: array });
    }
  };

  render() {
    return (
      <div>
        {this.state.paras}
        <div className="btn btn-warning" id="add" onClick={this.addPara}>
          Add Paragraph
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, rootElement);
