import "bootstrap/dist/css/bootstrap.min.css";
import NumberedButton from "./components/NumberedButton";
import ExtractionWindow from "./components/ExtractionWindow";
import "./App.css";
import { NumbersContextProvider } from "./contexts/NumbersContext";

function App() {
  //gestione bottoni
  const nButtons = 90; //Numero di caselle estraibili
  const buttons = Array(nButtons).fill(null);

  return (
    <NumbersContextProvider>
      <div className="vh-100 wrapper">
        <p className="text-white h1 py-3 text-center title">Tomboola</p>
        <div className="justify-content-center align-items-center d-flex">
          <div className="main-container row">
            <div className="col-9 d-flex flex-wrap justify-content-center px-5">
              {buttons.map((_, index) => (
                <NumberedButton key={index} number={index + 1} />
              ))}
            </div>
            <div className="col-3 text-center">
              <ExtractionWindow />
            </div>
          </div>
        </div>
      </div>
    </NumbersContextProvider>
  );
}

export default App;
