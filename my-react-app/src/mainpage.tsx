import React from "react";
import { Link } from "react-router-dom";
import InputContainer from "./input_container";

interface MainPageProps {
  inkomsten: string[];
  uitgaven: string[];
  handleClear: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ inkomsten, uitgaven, handleClear }) => {
  const groen = true;
  const rood = false;

  return (
    <div className="wrapper">
      <div className="text-expense">
        <div className="text">
          <p>List your expenses</p>
        </div>
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
      <Link to="/quant">
        <button className="submitButton" type="button">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default MainPage;