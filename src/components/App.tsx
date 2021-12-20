import React, { useEffect, useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
    console.log(count)
  }
  const decrement = () => {
    setCount(count -1)
  }
  const reset = () => {
    setCount(0)
  }
  // hello
  return (
    <div className="App">
      <header className="App-header">
        <p>
Like <br></br> {count}
        </p>
        <button onClick={increment}>Increment</button>
        <br></br>
        <button onClick={decrement}>Decrement</button>
        <br></br>
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
