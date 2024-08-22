import { useState } from "react";
import "./App.css";
import InputContainer from "./input_container";

function App() {
  const initialInkomsten = [
    "Inkomsten",
    "Boodschappen",
    "Dierenvoeding",
    "Activiteiten",
    "Gokken",
  ];
  const initialUitgaven = [
    "Uigaven",
    "Kleren",
    "Dierenvoeding",
    "Spelen",
    "Gokken",
  ];

  const [inkomsten, setInkomsten] = useState(initialInkomsten);
  const [uitgaven, setUitgaven] = useState(initialUitgaven);

  const groen = true;
  const rood = false;

  const handleClear = () => {
    localStorage.removeItem("Inkomsten");
    localStorage.removeItem("Uitgaven");
    setInkomsten([...initialInkomsten]); // Reset inkomsten to initial state
    setUitgaven([...initialUitgaven]); // Reset uitgaven to initial state
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <InputContainer
            information={inkomsten}
            color={groen}
            storageKey="Inkomsten"
            onClear={handleClear}
          />
          <InputContainer
            information={uitgaven}
            color={rood}
            storageKey="Uitgaven"
            onClear={handleClear}
          />
        </div>
      </div>
      <div>
        <a href="test.html">
          <button className="submitButton" type="button">
            Submit
          </button>
        </a>
        <button className="clearButton" type="button" onClick={handleClear}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
