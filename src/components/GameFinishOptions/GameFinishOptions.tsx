import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContextProvider';
import styles from "./GameFinishOptions.module.scss"
const GameFinishOptions = () => {
    const {
      gridValues,
        setGridValues,
      setIsXTurn,
      isXWon,
      setIsXWon,
      isOWon,
      setIsOWon,
      isFinish,
      setIsFinish,
      setShowPVPGame,
      setShowPVCGame,
      setShowGameOptions,
    } = useContext(GameContext);
    const handleQuit = () => { 
        setIsOWon(false);
        setIsXWon(false);
        setIsFinish(false);
        setShowPVCGame(false);
        setShowPVPGame(false);
        setShowGameOptions(true);
        setIsXTurn(true);
        let arr = new Array(9).fill(" ");
        setGridValues(arr)
    }
    const handleNewGame=() => {
        
    }
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
}

export default GameFinishOptions