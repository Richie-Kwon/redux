import "./App.css";
import React, {useState} from 'react'

// const data = [
//   { title: "node", value: 0 },
//   { title: "react", value: 1 },
// ];



function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      
      <header >
        <button onClick={()=>setCount(count+1)}>{count}</button>
      </header>
      {/* <header className="App-header">
        {data.map((item) => (
          <>
            <p key={item.value}>{item.title}, {item.value}</p>
          </>
        ))}
      </header> */}
    </div>
  );
}

export default App; 
