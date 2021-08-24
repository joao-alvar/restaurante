import React from "react";
import Navbar from "./components/Navbar";
import Ordem from "./components/Ordem/Index";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="fromInput">
        <Ordem />
      </div>
    </div>
  );
}

export default App;
