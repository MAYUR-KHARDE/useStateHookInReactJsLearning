import React, { useState } from "react";

const App = () => {
  const [state1, Setstate1] = useState({
    name: "Manjoor_Ki_Na_Manjoor",
    fill: true,
  });

  const invertor = () => {
    Setstate1(() => {
      return { ...state1, fill: !state1.fill };
    });
  };

  return (
    <div className="p-4 m-4 leading-relaxed font-sans font-bold">
      <h1>{state1.name}</h1>
      <h2>Appka Result hai : {state1.fill.toString().toUpperCase()}</h2>
      <button
        className={`p-3 m-3 text-center ${
          state1.fill ? "bg-green-100" : "bg-red-100"
        } border-2 rounded-md`}
        onClick={invertor}
      >
        Result_batao_red_ki_green
      </button>
    </div>
  );
};

export default App;
