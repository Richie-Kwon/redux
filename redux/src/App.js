import "./App.css";

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
            <p>{item.title}, {item.value}</p>
          </>
        ))}
      </header>
    </div>
  );
}

export default App; 
