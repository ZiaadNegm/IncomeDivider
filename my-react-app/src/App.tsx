import "./App.css";
import InputContainer from "./input_container";

function App() {
  const Inkomsten = [
    "Inkomsten",
    "Boodschappen",
    "Dierenvoeding",
    "Activiteiten",
    "Gokken",
  ];
  const Uitgaven = [
    "Inkomsten",
    "Boodschappen",
    "Dierenvoeding",
    "Activiteiten",
    "Gokken",
  ];
  const groen = true;
  const rood = false;
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <InputContainer information={Inkomsten} color={groen} />
          <InputContainer information={Uitgaven} color={rood} />
        </div>
      </div>
      <div>
        <button className="submitButton" type="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
