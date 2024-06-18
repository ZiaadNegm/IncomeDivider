//https://zod.dev/

import React, { useState } from 'react';

interface InputContainerProps {
  information: string[];
}


export default function Input_container ({information}: InputContainerProps){ // Maak de schets na zodat je twee rows hebt, eentje met positief en negatief
  // zorg ervoor dat de code straks reusable is+
  const inputs = Array(information.length).fill(null);
  const [inputValue, setInputValue] = useState(information); // array maken van states
  
  // Typescript code. Wees specifiek wat voor soort event je krijgt door het aan te geven.
  // 
function handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number) { 
    const newInputValues = [...inputValue];
    newInputValues[index] = event.target.value
    setInputValue(newInputValues);
}

// Zorgt ervoor dat na een click en geen input, en weer een defocus van de box,
// de box weer wordt bijgevuld met de originele informatie.
// Index: index van de box
function handleBlur(index: number) {
  return () => {
    const newInputValues = [...inputValue];
    if (newInputValues[index] === '') {
      newInputValues[index] = information[index];
    }
    setInputValue(newInputValues);
  };
}

  function resetInput(index: number){
    const newInputValues = [...inputValue]
    newInputValues[index] = "";
    setInputValue(newInputValues);
  }

    return(
      <div className="Center">
        {inputs.map((_, index) => (
          <input 
            key={index}
            className="input" 
            value={inputValue[index]} 
            style={{color: inputValue[index] === information[index] ? 'lightgray': 'black'}}
            onClick={() => resetInput(index)}  // als er een click is, dan call resetInput met de input
            onChange={(event) => handleChange(event, index)} // 
            onBlur={handleBlur(index)}
          />
        ))}
    </div> )
}
