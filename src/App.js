function App() {
  return (
    <div className="App">
      <form action="http://localhost:5000/uploadData" method="POST">
        <label>
          Item:
          <input type="text" name="item"/>
        </label>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
