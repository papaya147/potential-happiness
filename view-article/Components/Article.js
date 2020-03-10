class Article extends React.Component {
  render() {
    style = {
      backgroundImage: rgba(0, 0, 0, 0.5)
    };
    return (
      <div id={this.props.id}>
        <input
          type="image"
          src={this.props.imgURL}
          onClick={
            "window.location.href='../index.html?article='" + this.props.article
          }
        ></input>
      </div>
    );
  }
}
