class Paragraph extends React.Component {
  render() {
    let style = {
      height: "150px",
      marginBottom: "10px"
    };



    return (
      <div className="paragraph" id={this.props.id}>
        <div className="row">
          <div className="col-sm-11">
            <textarea
              className="form-control"
              name="paragraph"
              id={this.props.id}
              placeholder="Put Paragraph Here"
              style={style}
              required
            ></textarea>
          </div>
          <div className="col-sm-1">
            <div className="btn btn-danger del-rotate" onClick={this.props.remove}>Remove</div>
          </div>
        </div>
      </div>
    );
  }
}
