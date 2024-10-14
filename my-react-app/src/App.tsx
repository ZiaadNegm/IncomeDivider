import { useState } from "react";
import "./App.css";
import InputContainer from "./input_container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const initialInkomsten = [
    "Inkomsten",
    "Boodschappen",
    "Dierenvoeding",
    "Activiteiten",
    "Gokken",
  ];
  const initialUitgaven = [
    "Uitgaven",
    "Kleren",
    "Dierenvoeding",
    "Spelen",
    "Gokken",
  ];

  const [inkomsten, setInkomsten] = useState(initialInkomsten);
  const [uitgaven, setUitgaven] = useState(initialUitgaven);

  const handleClear = () => {
    localStorage.removeItem("Inkomsten");
    localStorage.removeItem("Uitgaven");
    setInkomsten([...initialInkomsten]);
    setUitgaven([...initialUitgaven]);
  };

  const groen = true;
  const rood = false;

  return (
    <Router>
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
        <button className="clearButton" type="button" onClick={handleClear}>
          Clear All
        </button>
      </div>
      <Routes>
        <Route path="/" element={<div>Welcome to the main page!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
