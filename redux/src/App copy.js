import "./App.css";
import React, { useState } from "react";

// const data = [
//   { title: "node", value: 0 },
//   { title: "react", value: 1 },
// ];

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("button is clicked");
  };
  const iter = [0, 1, 2];

  return (
    <div className="App">
      <button onClick={handleClick}>Button</button>

      <div>
        {iter.map(item => <h1 key = {item} >{item}</h1>)}
      </div> 
    </div>
  );
}

export default App;
