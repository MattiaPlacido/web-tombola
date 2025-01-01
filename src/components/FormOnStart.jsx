import { useState, useEffect } from "react";
import { usePlayerContext } from "../contexts/PlayerContext";
import { useNumberContext } from "../contexts/NumbersContext";

export default function FormOnStart({ handleLoading }) {
  const [playerNumber, setPlayerNumber] = useState(1);
  const [boxesNumber, setBoxesNumber] = useState(90);

  const { setPlayerNumber: setPlayerNumberContext } = usePlayerContext();
  const { setBoxesNumber: setBoxesNumberContext } = useNumberContext();

  const handlePlayerSelectChange = (e) => {
    setPlayerNumber(parseInt(e.target.value));
    e.target.value !== 1 ? setBoxesNumber(10) : setBoxesNumber(90);
  };

  const handleBoxesSelectChange = (e) => {
    setBoxesNumber(parseInt(e.target.value));
  };

  const handleButtonSubmit = () => {
    setPlayerNumberContext(playerNumber);
    setBoxesNumberContext(boxesNumber);
    handleLoading();
  };

  return (
    <div className="bg-dark vh-100 d-flex justify-content-center align-items-center">
      <div className="container w-25 h-50 rounded p-5 bg-white">
        <p>Numero di giocatori : </p>
        <select
          className="form-select mb-5"
          onChange={handlePlayerSelectChange}
          value={playerNumber}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className={`${playerNumber == 1 ? "d-none" : ""}`}>
          <p>Numero di caselle :</p>
          <select
            className="form-select mb-5"
            value={boxesNumber}
            onChange={handleBoxesSelectChange}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            type="button"
            className="btn fs-5 bg-success text-white"
            onClick={handleButtonSubmit}
          >
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
}
