const rootElement = document.getElementById("root");

class App extends React.Component {
  state = {
    paras: [],
    count: 0
  };

  addPara = (imgURL, article) => {
    this.setState({
      paras: [
        ...this.state.paras,
        <Article id={this.state.count++} imgURL={imgURL} article={article} />
      ]
    });
  };

  readDir = () => {
    let files;
    let request;

    try {
      request = new XMLHttpRequest();
    } catch (e) {
      try {
        request = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          return false;
        }
      }
    }

    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        console.log(request.responseText);
      }
    };

    request.open("GET", "php/get-articles.php", true);
    request.send(null);
  };

  render() {
    this.readDir();
    return <div>{this.state.paras}</div>;
  }
}

ReactDOM.render(<App />, rootElement);
