import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={increment} style={{ marginRight: "10px" }}>
          Increment
        </button>
        <button onClick={decrement} style={{ marginRight: "10px" }}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;

