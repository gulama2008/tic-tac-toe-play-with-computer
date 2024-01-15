import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContextProvider';

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
    <div>
      <div onClick={handleClickPVP}>PVP</div>
      <div onClick={handleClickPVC}>PVC</div>
    </div>
  );
}

export default GameOptions