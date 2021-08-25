import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Ordem from "./components/Ordem/Index";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <HomePage />
      <div className="formInput" id="a">
        <Ordem />
      </div>
    </div>
  );
}

export default App;
