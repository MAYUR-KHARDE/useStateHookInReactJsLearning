//useState start ko turant update nahi karta , wo useState state ko
//update krta hai apane hisab se function completion ke baad to fix performance issues

import React, { useState } from "react";

const App = () => {
  const [Element, SetElement] = useState({ name: "mayur", company: "tcs" });

  const addElement = () => {
    SetElement(() => {
      return { ...Element, gender: "male" };
    });
    console.log(Element); //Will not have updated value
  };

  // console.log(Element);

  return (
    <div className="p-4">
      <h1>{Element.name}</h1>
      <h1>{Element.company}</h1>
      <button
        className="px-3 py-1 text-xs bg-sky-900 font-bold text-white rounded-md"
        onClick={addElement}
      >
        AddKaroElement
      </button>
    </div>
  );
};

export default App;
