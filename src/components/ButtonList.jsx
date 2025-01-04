import { useNumberContext } from "../contexts/NumbersContext";
import NumberedButton from "../components/NumberedButton";
import { usePlayerContext } from "../contexts/PlayerContext";

export default function ButtonList() {
  const { numbersData } = useNumberContext();
  const { playerNumber } = usePlayerContext();
  const { boxesNumber } = numbersData;

  const buttons =
    playerNumber === 1
      ? Array(boxesNumber).fill(null)
      : Array(boxesNumber / playerNumber).fill(null);

  const playerList = Array(playerNumber)
    .fill(null)
    .map((_, i) => `Giocatore ${i + 1}`);

  let totalIndex = 0;

  return (
    <>
      {playerNumber === 1 ? (
        buttons.map((_, index) => (
          <NumberedButton playerId={0} key={index} number={index + 1} />
        ))
      ) : (
        <div className="container">
          <div className="row">
            {playerList.map((player, index) => {
              const playerIndex = index;
              return (
                <div className="col-6" key={player}>
                  <div className="text-center">
                    <h3 className="text-white">{player}</h3>
                    <div className="d-flex flex-wrap justify-content-center">
                      {buttons.map((_, index) => {
                        totalIndex++;
                        return (
                          <NumberedButton
                            key={player + index}
                            number={totalIndex}
                            playerId={playerIndex}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
