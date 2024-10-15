import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./mainpage";
import Quant from "./quant";

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

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainPage 
              inkomsten={inkomsten} 
              uitgaven={uitgaven} 
              handleClear={handleClear} 
            />
          } 
        />
        <Route path="/quant" element={<Quant />} />
      </Routes>
    </Router>
  );
}

export default App;