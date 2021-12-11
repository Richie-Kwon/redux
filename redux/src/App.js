import "./App.css";
import React, { useState } from "react";

// const data = [
//   { title: "node", value: 0 },
//   { title: "react", value: 1 },
// ];

function App() {
 const handleClick = () =>{
   console.log('button is clicked')
 }

  return (
    <div className="App">
      <button onClick={handleClick}>Button</button>
    </div>

  );
}

export default App;
