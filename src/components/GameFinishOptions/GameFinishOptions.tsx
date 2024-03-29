import { useContext } from "react";
import { GameContext } from "../../context/GameContextProvider";
import styles from "./GameFinishOptions.module.scss";
const GameFinishOptions = () => {
  const {
    setGridValues,
    setIsXTurn,
    setIsXWon,
    setIsOWon,
    setIsDraw,
    setIsFinish,
    setShowPVPGame,
    setShowPVCGame,
    setShowGameOptions,
  } = useContext(GameContext);
  const handleQuit = () => {
    setIsOWon(false);
    setIsXWon(false);
    setIsDraw(false);
    setIsFinish(false);
    setShowPVCGame(false);
    setShowPVPGame(false);
    setShowGameOptions(true);
    setIsXTurn(true);
    let arr = new Array(9).fill(" ");
    setGridValues(arr);
  };
  const handleNewGame = () => {
    let arr = new Array(9).fill(" ");
    setGridValues(arr);
    setIsOWon(false);
    setIsXWon(false);
    setIsDraw(false);
    setIsFinish(false);
    setIsXTurn(true);
  };
  return (
    <div className={styles.container}>
      <button onClick={handleQuit} className={styles.btn}>
        Quit
      </button>
      <button onClick={handleNewGame} className={styles.btn}>
        New Game
      </button>
    </div>
  );
};

export default GameFinishOptions;
