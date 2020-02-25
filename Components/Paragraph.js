class Paragraph extends React.Component {
  render() {
    let style = {
      height: "150px"
    };

    return (
      <div className="paragraph" id={this.props.id}>
        <textarea
          className="form-control"
          name="article"
          id="textarea"
          placeholder="Put Paragraph Here"
          style={style}
          required
        ></textarea>
      </div>
    );
  }
}
