import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContextProvider';
import styles from "./GameOptions.module.scss";
const GameOptions = () => {
    const {
      gameOption,
      setGameOption,
      setShowGameOptions,
      setShowPVPGame,
      setShowPVCGame,
    } = useContext(GameContext);
    const handleClickPVP = (e: any) => {
        setGameOption(e.target.textContent);
        setShowPVPGame(true);
        setShowGameOptions(false);
        setShowPVCGame(false);
    };
    const handleClickPVC = (e: any) => {
        setGameOption(e.target.textContent);
        setShowPVCGame(true);
        setShowGameOptions(false);
        setShowPVPGame(false);
    };
    console.log(gameOption);
  return (
    <div className={styles.container}>
      <button onClick={handleClickPVP} className={styles.option}>
        PVP
      </button>
      <button onClick={handleClickPVC} className={styles.option}>
        PVC
      </button>
    </div>
  );
}

export default GameOptions