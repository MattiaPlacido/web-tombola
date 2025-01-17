import style from "./components.module.css";
import { useNumberContext } from "../contexts/NumbersContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { useState } from "react";

export default function ExtractionWindow() {
  //contesto numeri estratti
  const { functions, numbersData } = useNumberContext();
  const { boxesNumber, extractedNumbers } = numbersData;
  const { addToExtractedNumbers } = functions;

  //contesto partita / punteggio player
  const { playerScore } = usePlayerContext();

  const [lastExtractedNumber, setLastExtractedNumber] = useState();

  const drawRandomNumber = () => Math.floor(Math.random() * boxesNumber) + 1;

  const extractionButtonHandler = () => {
    let randomNum = drawRandomNumber();
    while (extractedNumbers.includes(randomNum)) {
      randomNum = drawRandomNumber();
    }
    addToExtractedNumbers(randomNum);
    setLastExtractedNumber(randomNum);
  };

  const endButtonHandler = () => {
    let totalPlayerScore = 0;
    playerScore.forEach((score) => (totalPlayerScore += score));

    if (totalPlayerScore >= Math.ceil(boxesNumber / 6)) {
      alert(
        `Complimenti! Hai terminato la partita!

        ${playerScore
          .map((score, index) => `Giocatore ${index + 1}: ${score} punti`)
          .join(", ")}. 

        Numeri estratti : ${extractedNumbers.join(", ")}.`
      );
      location.reload();
    } else {
      alert("Non hai abbastanza punti per terminare la partita!");
    }
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
