import React, { useEffect, useState } from "react";
import add from "../../images/icons8-plus-50.png";

interface InputContainerProps {
  information: string[];
  color: boolean;
  storageKey: string;
  onClear: () => void;
}

const InputContainer: React.FC<InputContainerProps> = ({
  information,  
  color,
  storageKey,
  onClear,
}) => {
  const [inputValue, setInputValue] = useState<string[]>(() => {
    const savedInput = localStorage.getItem(storageKey);
    return savedInput ? JSON.parse(savedInput) : information;
  });

  // Update inputValue when information prop changes
  useEffect(() => {
    setInputValue(information);
    localStorage.setItem(storageKey, JSON.stringify(information));
  }, [information, storageKey]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInputValues = [...inputValue];
    newInputValues[index] = event.target.value;
    setInputValue(newInputValues);
  };

  const handleBlur = (index: number) => () => {
    const newInputValues = [...inputValue];
    if (newInputValues[index] === "") {
      newInputValues[index] = information[index];
    }
    setInputValue(newInputValues);
  };

  const addInput = () => {
    setInputValue([...inputValue, ""]);
  };

  return (
    <div className="Center">
      {inputValue.map((value, index) => (
        <input
          key={index}
          className="input"
          value={value}
          style={{
            color: value === information[index] ? "lightgray" : "black",
            borderColor: color ? "green" : "red",
          }}
          onClick={() =>
            setInputValue((prev) => {
              const newInputValues = [...prev];
              newInputValues[index] = "";
              return newInputValues;
            })
          }
          onChange={(event) => handleChange(event, index)}
          onBlur={handleBlur(index)}
        />
      ))}
      <div className="AddIcon">
        <img
          src={add}
          className="addIconPicture"
          onClick={addInput}
          alt="Add input"
        />
      </div>
      <button className="clearButton" type="button" onClick={onClear}>
        clear
      </button>
    </div>
  );
};

export default InputContainer;
