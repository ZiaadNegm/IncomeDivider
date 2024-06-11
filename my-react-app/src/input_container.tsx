import React, { useState } from 'react';



export default function Input_container (){ // Maak de schets na zodat je twee rows hebt, eentje met positief en negatief
  // zorg ervoor dat de code straks reusable is+

  const inputs = Array(5).fill(null);
  const information = ["Inkomsten", "Boodschappen", "Dierenvoeding", "Activiteiten",
  "Gokken"]
  const [inputValue, setInputValue] = useState(information); // array maken van states
  
  // Javascript code. Wees specifiek wat voor soort event je krijgt
  // 
function handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number) { 
    const newInputValues = [...inputValue];
    newInputValues[index] = event.target.value
    setInputValue(newInputValues);
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
            style={{color: 'lightgray'}}
            onClick={() => resetInput(index)}  // als er een click is, dan call resetInput met de input
            onChange={(event) => handleChange(event, index)} // 
          />
        ))}
    </div> )
}
