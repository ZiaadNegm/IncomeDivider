import './App.css';
import Input_container from './input_container';

function App() {
  const information = ["Inkomsten", "Boodschappen", "Dierenvoeding", "Activiteiten", "Gokken", "NVIDIA", "SOLONA"];

  return (
    <div className="main">
      <Input_container information={information} />
      <Input_container information={information}/>
    </div>
  );
}

export default App;