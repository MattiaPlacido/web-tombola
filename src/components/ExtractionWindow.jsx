import style from "./components.module.css";

export default function ExtractionWindow() {
  return (
    <div>
      <p className="h5 mb-3 text-black">Ultimo numero estratto</p>
      <p className="bg-white h2 text-black border border-black extracted-number-container">
        77
      </p>
      <hr></hr>
      <div className="d-flex flex-column">
        <button
          className={`btn text-white bg-warning mb-3 border mx-auto border-dark border-2 ${style.extraction_button}`}
        >
          Estrai
        </button>
        <button
          className={`btn text-white bg-danger mb-3 border mx-auto border-dark border-2 ${style.end_game_button}`}
        >
          Termina
        </button>
      </div>
    </div>
  );
}
