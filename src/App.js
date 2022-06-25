import "./App.css";

function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <h1>convertor-app</h1>
      <input name="firstName" onChange={handleChange} />
    </>
  );
}

export default App;
