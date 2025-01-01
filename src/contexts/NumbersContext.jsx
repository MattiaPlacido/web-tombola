import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { usePlayerContext } from "./PlayerContext";

const NumberContext = createContext();

export const NumbersContextProvider = ({ children }) => {
  const [boxesNumber, setBoxesNumber] = useState(90);
  const [extractedNumbers, setExtractedNumbers] = useState([]);
  const { playerScore } = usePlayerContext();

  useEffect(() => {
    console.log(extractedNumbers.length);
    if (extractedNumbers.length == boxesNumber) {
      alert(
        `Sono stati estratti tutti i numeri, la partita è terminata ed il tuo punteggio è ${playerScore}.`
      );
      location.reload();
    }
  }, [extractedNumbers]);

  const addToExtractedNumbers = (n) => {
    const newList = [...extractedNumbers];
    newList.push(n);
    setExtractedNumbers(newList);
    console.log(extractedNumbers);
  };

  const numbersData = {
    extractedNumbers,
    boxesNumber,
  };

  const functions = {
    addToExtractedNumbers,
  };

  return (
    <NumberContext.Provider value={{ functions, numbersData, setBoxesNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumberContext = () => useContext(NumberContext);
