import style from "./components.module.css";
import { useNumberContext } from "../contexts/NumbersContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { useState } from "react";

export default function ExtractionWindow() {
  //contesto numeri estratti
  const { functions, numbersData } = useNumberContext();
  const { nMax, extractedNumbers } = numbersData;
  const { addToExtractedNumbers } = functions;

  //contesto partita / punteggio player
  const { playerScore } = usePlayerContext();

  const [lastExtractedNumber, setLastExtractedNumber] = useState();

  const drawRandomNumber = () => Math.floor(Math.random() * nMax) + 1;

  const extractionButtonHandler = () => {
    let randomNum = drawRandomNumber();
    while (extractedNumbers.includes(randomNum)) {
      randomNum = drawRandomNumber();
    }
    addToExtractedNumbers(randomNum);
    setLastExtractedNumber(randomNum);
  };

  const endButtonHandler = () => {
    alert(
      `Complimenti! Hai terminato la partita con ${playerScore} ${
        playerScore != 1 ? "punti" : "punto"
      }`
    );
    location.reload();
  };

  return (
    <div>
      <p className="h5 mb-3 text-black">Ultimo numero estratto</p>
      <p className="bg-white h2 text-black border border-black extracted-number-container">
        {lastExtractedNumber}
      </p>
      <hr></hr>
      <div className="d-flex flex-column">
        <button
          className={`btn text-white bg-warning mb-3 border mx-auto border-dark border-2 ${style.extraction_button}`}
          onClick={() => extractionButtonHandler()}
        >
          Estrai
        </button>
        <button
          className={`btn text-white bg-danger mb-3 border mx-auto border-dark border-2 ${style.end_game_button}`}
          onClick={() => endButtonHandler()}
        >
          Termina
        </button>
      </div>
    </div>
  );
}
