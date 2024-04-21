import React, { useState } from "react";
function App() {
  const ans = useState(true);
  console.log(ans[0]);
  console.log(ans[1]);
  const invertor = () => {
    return ans[1](!ans[0]);
  };
  return (
    <>
      <div>
        <h1>{ans[0].toString()}</h1>
        <button onClick={invertor}>Invert Karo Bhai</button>
      </div>
    </>
  );
}

export default App;
