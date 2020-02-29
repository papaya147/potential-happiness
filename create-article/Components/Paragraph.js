class Paragraph extends React.Component {
  state = {
    hidden: 0
  };

  hidePara = () => {
    this.setState({ hidden: 1 });
  };

  render() {
    let style = {
      height: "150px",
      marginBottom: "10px"
    };

    return (
      <div
        className={this.state.hidden == 1 ? "d-none" : ""}
        id={this.props.id}
      >
        <div className="row">
          <div className="col-sm-11">
            <textarea
              className="form-control"
              name={"paragraph" + this.props.id + this.state.hidden}
              placeholder="Put Paragraph Here"
              style={style}
              required
            ></textarea>
          </div>
          <div className="col-sm-1">
            <div className="btn btn-danger del-rotate" onClick={this.hidePara}>
              &times;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
