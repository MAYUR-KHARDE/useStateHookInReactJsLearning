//True ko False karo UseState mai

import React, { useState } from "react";

function App() {
  const [state1, Setstate1] = useState(false);

  const invertor = () => {
    return Setstate1(!state1);
  };

  return (
    <>
      <h1>{state1.toString()}</h1>
      <button onClick={invertor}>Invert Karo</button>
    </>
  );
}

export default App;
