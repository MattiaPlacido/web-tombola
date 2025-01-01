import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//components
import ExtractionWindow from "./components/ExtractionWindow";
import ButtonList from "./components/ButtonList";
import { NumbersContextProvider } from "./contexts/NumbersContext";
import { PlayerContextProvider } from "./contexts/PlayerContext";
import FormOnStart from "./components/FormOnStart";

import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <PlayerContextProvider>
      <NumbersContextProvider>
        {isLoading ? (
          <FormOnStart handleLoading={handleLoading} />
        ) : (
          <div className={`vh-100 wrapper`}>
            <p className="text-white h1 py-3 text-center title">Tomboola</p>
            <div className="justify-content-center align-items-center d-flex">
              <div className="main-container row">
                <div className="col-9 d-flex flex-wrap justify-content-center px-5">
                  <ButtonList />
                </div>
                <div className="col-3 text-center">
                  <ExtractionWindow />
                </div>
              </div>
            </div>
          </div>
        )}
      </NumbersContextProvider>
    </PlayerContextProvider>
  );
}

export default App;
