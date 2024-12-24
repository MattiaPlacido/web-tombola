import { createContext, useContext } from "react";
import { useState } from "react";

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [playerScore, setPlayerScore] = useState(0);

  const incrementPlayerScore = () => setPlayerScore(playerScore + 1);
  const decrementPlayerScore = () => setPlayerScore(playerScore - 1);

  const playerFunctions = {
    incrementPlayerScore,
    decrementPlayerScore,
  };

  return (
    <PlayerContext.Provider value={{ playerFunctions, playerScore }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
