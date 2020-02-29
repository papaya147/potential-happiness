const rootElement = document.getElementById("root");

class App extends React.Component {
  state = {
    paras: [],
    count: 0
  };

  addPara = () => {
    this.setState({
      paras: [...this.state.paras, <Paragraph id={this.state.count++} />]
    });
  };

  render() {
    return (
      <div>
        {this.state.paras}
        <div className="btn btn-warning" id="add" onClick={this.addPara}>
          Add Paragraph
        </div>
        <input name="count" hidden value={this.state.count}></input>
      </div>
    );
  }
}

ReactDOM.render(<App />, rootElement);
