import { useState } from "react";
import { useNumberContext } from "../contexts/NumbersContext";
import { usePlayerContext } from "../contexts/PlayerContext";

export default function NumberedButton(props) {
  const { number, playerId } = props;
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  //contesto numeri
  const { numbersData } = useNumberContext();
  const { extractedNumbers } = numbersData;
  //contesto punteggio
  const { playerFunctions } = usePlayerContext();
  const { incrementPlayerScore, decrementPlayerScore } = playerFunctions;

  //funzioni
  const buttonClickHandler = () => {
    if (isButtonClicked) {
      setIsButtonClicked(false);
      decrementPlayerScore(playerId);
    } else {
      if (extractedNumbers.includes(number)) {
        setIsButtonClicked(true);
        incrementPlayerScore(playerId);
      } else {
        alert(`Il ${number} non è stato ancora estratto.`);
      }
    }
  };

  return (
    <button
      key={number}
      className={`btn rounded-circle m-2 fs-3 d-flex justify-content-center align-items-center ${
        isButtonClicked ? "bg-danger text-white" : "bg-white text-black"
      }`}
      type="button"
      style={{
        //so che sto commettendo un crimine ma lo faccio per evitare di creare un modulo intero
        width: "70px",
        height: "70px",
      }}
      onClick={() => buttonClickHandler()}
    >
      <b>{number}</b>
    </button>
  );
}
