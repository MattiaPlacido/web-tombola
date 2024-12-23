import "bootstrap/dist/css/bootstrap.min.css";
import NumberedButton from "./components/NumberedButton";
import "./App.css";

function App() {
  //gestione bottoni
  const nButtons = 90; //Numero di caselle estraibili
  const buttons = Array(nButtons).fill(null);

  return (
    <div className="vh-100 wrapper">
      <p className="text-white h1 py-3 text-center">Tomboola</p>
      <div className="justify-content-center align-items-center d-flex">
        <div className="main-container row">
          <div className="col-9 d-flex flex-wrap justify-content-center px-5">
            {buttons.map((_, index) => (
              <NumberedButton key={index} number={index + 1} />
            ))}
          </div>
          <div className="col-3 text-center">
            <p className="h5 mb-3 text-black">Ultimo numero estratto</p>
            <p className="bg-white h2 text-black border border-black extracted-number-container">
              77
            </p>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
