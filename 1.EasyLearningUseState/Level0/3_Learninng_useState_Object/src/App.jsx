// Dealing with objects with useState

import React, { useState } from "react";

function App() {
  const [vastu, SetVastu] = useState({ name: "Mayur", banned: false });
  const Change = () => {
    return SetVastu({ ...vastu, banned: !vastu.banned });
  };
  return (
    <>
      <h1>Name :{vastu.name}</h1>
      <h1>Banned : {vastu.banned.toString()}</h1>
      <button onClick={Change}>Change_Banned_BTN</button>
    </>
  );
}

export default App;
