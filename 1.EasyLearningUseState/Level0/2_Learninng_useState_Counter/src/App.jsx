import React, { useState } from "react";

function App() {
  const [count, Setcount] = useState(0);
  const increment = () => {
    return Setcount((prev) => prev + 1);
  };
  const decrement = () => {
    return Setcount((prev) => prev - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
