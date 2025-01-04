import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [playerNumber, setPlayerNumber] = useState(1);
  const [playerScore, setPlayerScore] = useState(
    new Array(playerNumber).fill(0)
  );

  const incrementPlayerScore = (id) => {
    const updatedScores = [...playerScore];
    updatedScores[id] += 1;
    setPlayerScore(updatedScores);
  };

  const decrementPlayerScore = (id) => {
    const updatedScores = [...playerScore];
    updatedScores[id] -= 1;
    setPlayerScore(updatedScores);
  };

  const playerFunctions = {
    incrementPlayerScore,
    decrementPlayerScore,
  };

  useEffect(() => {
    setPlayerScore(new Array(playerNumber).fill(0));
  }, [playerNumber]);

  useEffect(() => {
    console.log("Punteggi aggiornati:");
    for (let i = 0; i < playerNumber; i++) {
      console.log(`Giocatore ${i + 1}: ${playerScore[i]}`);
    }
  }, [playerScore]);

  return (
    <PlayerContext.Provider
      value={{ playerFunctions, playerScore, setPlayerNumber, playerNumber }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
