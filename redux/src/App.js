import "./App.css";
import React, {useState} from 'react'

const data = [
  { title: "node", value: 0 },
  { title: "react", value: 1 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data.map((item) => (
          <>
            <p key={item.value}>{item.title}, {item.value}</p>
          </>
        ))}
      </header>
    </div>
  );
}

export default App; 
