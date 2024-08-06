//adar arr me mayur2 name ka koi hai to uski age 100 kr do

import React, { useState } from "react";

function App() {
  const [arr1, setArr1] = useState([
    { name: "mayur0", age: 20 },
    { name: "mayur1", age: 21 },
    { name: "mayur2", age: 23 },
  ]);

  const finder = () =>
    setArr1(() =>
      arr1.map((item) =>
        item.name === "mayur2" ? { name: "mayur2", age: 100 } : item
      )
    );

  return (
    <div>
      {arr1.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>
      ))}
      <button onClick={finder} className="p-3 m-2 text-xs bg-sky-900">
        btn
      </button>
    </div>
  );
}

export default App;
