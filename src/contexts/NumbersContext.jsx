import { createContext, useContext } from "react";
import { useState } from "react";

const NumberContext = createContext();

export const NumbersContextProvider = ({ children }) => {
  const [extractedNumbers, setExtractedNumbers] = useState([]);

  const addToExtractedNumbers = (n) => {
    const newList = extractedNumbers;
    newList.push(n);
    setExtractedNumbers(newList);
  };

  const functions = {
    addToExtractedNumbers,
  };

  return (
    <NumberContext.Provider value={{ functions, extractedNumbers }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumberContext = () => useContext(NumberContext);
