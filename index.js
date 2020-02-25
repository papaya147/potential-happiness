const rootElement = document.getElementById("root");

function App() {
  return (
    <div>
      <ShoppingList name="Abhinav" />
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
