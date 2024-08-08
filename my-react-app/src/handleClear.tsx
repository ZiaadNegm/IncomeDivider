const handleClear = (setInkomen: React.Dispatch<React.SetStateAction<any[]>>,
   setUitgaven: React.Dispatch<React.SetStateAction<any[]>>, initialInkomen: any[], initialUitgaven: any[]) => {
  console.log("Clear button clicked");
  localStorage.clear();
  setInkomen(initialInkomen);
  setUitgaven(initialUitgaven);
};

export default handleClear;