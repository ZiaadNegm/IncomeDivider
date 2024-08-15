const handleClear = (
  setInkomsten: React.Dispatch<React.SetStateAction<any[]>>,
  setUitgaven: React.Dispatch<React.SetStateAction<any[]>>,
  initialInkomsten: any[],
  initialUitgaven: any[],
  setDummy: React.Dispatch<React.SetStateAction<number>>
) => {
  console.log("Clear button clicked");
  localStorage.clear();
  
  // Create new arrays by copying the initial values
  const newInkomsten = [...initialInkomsten];
  const newUitgaven = [...initialUitgaven];
  
  // Update state with new arrays
  setInkomsten(newInkomsten);
  setUitgaven(newUitgaven);
  
  // Set localStorage with initial values
  localStorage.setItem("Inkomsten", JSON.stringify(newInkomsten));
  localStorage.setItem("Uitgaven", JSON.stringify(newUitgaven));
  
  console.log("Local storage:", localStorage);
  // Force a re-render
  setDummy(prev => prev + 1);
};

export default handleClear;