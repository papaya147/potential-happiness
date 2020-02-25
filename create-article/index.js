let count = 0;

function createParagraph() {
  const rootElement = document.getElementById("root");

  function App() {
    return (
      <div>
        <Paragraph id={count} />
      </div>
    );
  }

  ReactDOM.render(<App id={count} />, rootElement);
  count++;
}
