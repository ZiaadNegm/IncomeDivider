import React, { useState } from 'react';
import "./App.css";
import InputContainer from "./input_container";
import handleClear from "./handleClear";

function App() {
  const initialInkomsten = [
    "Inkomsten",
    "Boodschappen",
    "Dierenvoeding",
    "Activiteiten",
    "Gokken",
  ]; 
  const initialUitgaven = [
    "Inkomsten",
    "Boodschappen",
    "Dierenvoeding",
    "Spelen",
    "Gokken",
  ];

  const [inkomsten, setInkomsten] = useState(initialInkomsten);
  const [uitgaven, setUitgaven] = useState(initialUitgaven);

  const groen = true;
  const rood = false;

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <InputContainer
            information={inkomsten}
            color={groen}
            storageKey="Inkomsten"
          />
          <InputContainer
            information={uitgaven}
            color={rood}
            storageKey="Uitkomsten"
          />
        </div>
      </div>
      <div>
        <button className="submitButton" type="button">
          Submit
        </button>
      </div>
      <div>
        <button
          className="clearButton"
          type="button"
          onClick={() => handleClear(setInkomsten, setUitgaven, initialInkomsten, initialUitgaven)}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;