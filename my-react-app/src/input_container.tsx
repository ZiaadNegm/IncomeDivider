// https://zod.dev/

import React, { useEffect, useState } from "react";
import add from "../../images/icons8-plus-50.png";

interface InputContainerProps {
  information: string[];
  color: boolean;
  storageKey: string;
}

/* 
  InputValue: Array of states responsible for the input.
  InputContainer: Main exportable function which allows input to be put in.
*/
const InputContainer: React.FC<InputContainerProps> = ({
  information,
  color,
  storageKey,
}) => {
  const [inputValue, setInputValue] = useState<string[]>(() => {
    const savedInput = localStorage.getItem(storageKey);
    return savedInput ? JSON.parse(savedInput) : information;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(inputValue));
    console.log(inputValue);
  }, [inputValue, storageKey]);

  /*
    Updates the input values displayed with the new input.
  */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInputValues = [...inputValue];
    newInputValues[index] = event.target.value;
    setInputValue(newInputValues);
  };

  /*
    Ensures that the box is properly focused and refreshes the box with 
    the new information.

    Index: The index of the box.
  */
  const handleBlur = (index: number) => () => {
    const newInputValues = [...inputValue];
    if (newInputValues[index] === "") {
      newInputValues[index] = information[index];
    }
    setInputValue(newInputValues);
  };

  /*
    Adds new boxes so that new input can be added in.
  */
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
    </div>
  );
};

export default InputContainer;
