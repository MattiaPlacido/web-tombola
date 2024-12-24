import { createContext, useContext } from "react";
import { useState } from "react";

const NumberContext = createContext();

export const NumbersContextProvider = ({ children }) => {
  const [extractedNumbers, setExtractedNumbers] = useState([]);

  const nMax = 90;

  const addToExtractedNumbers = (n) => {
    const newList = extractedNumbers;
    newList.push(n);
    setExtractedNumbers(newList);
    console.log(extractedNumbers);
  };

  const numbersData = {
    extractedNumbers,
    nMax,
  };

  const functions = {
    addToExtractedNumbers,
  };

  return (
    <NumberContext.Provider value={{ functions, numbersData }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumberContext = () => useContext(NumberContext);
