import { useState } from "react";
import "./App.css";
import F from "./Fahrenheit/F";
import C from "./Celsius/C";

const ctof = (c) => {
  return (c * 9) / 5 + 32;
};

const ftoc = (f) => {
  return ((f - 32) * 5) / 9;
};

function App() {
  const [c, setC] = useState(30);
  const [f, setF] = useState(ctof(c));

  function changeC(event) {
    setC((prevC) => (prevC = event.target.value));
    setF((prevF) => (prevF = ctof(event.target.value)));
    return (
      <>
        <C onChange={changeC}>{c}</C>
        <F onChange={changeF}>{f}</F>
      </>
    );
  }

  function changeF(event) {
    setF((prevF) => (prevF = event.target.value));
    setC((prevC) => (prevC = ftoc(event.target.value)));
    return (
      <>
        <C onChange={changeC}>{c}</C>
        <F onChange={changeF}>{f}</F>
      </>
    );
  }

  return (
    <>
      <h1>convertor-app</h1>
      <C name="c" onChange={changeC} c={c} />
      <F name="f" onChange={changeF} f={f} />
    </>
  );
}

export default App;
