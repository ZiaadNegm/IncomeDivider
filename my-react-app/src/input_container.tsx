import React, { useState } from 'react';



export default function Input_container (){ // Maak de schets na zodat je twee rows hebt, eentje met positief en negatief
  // zorg ervoor dat de code straks reusable is

  const inputs = Array(5).fill(null);
  const [inputValue, setInputValue] = useState("Name");
  // const information = ["Inkomsten", "Boodschappen", ""]

  function resetInput(){
    setInputValue("");
  }
    return(
      <div className="Center">
        
        {inputs.map((_, index) => (<input key={index}
         className="input" value={inputValue} style ={{color: 'lightgray'}}
         onClick={resetInput}/>
      ))}
    </div> )
}
