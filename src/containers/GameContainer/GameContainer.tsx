import  { useContext } from "react";
import { GameContext } from "../../context/GameContextProvider";
import GameOptions from "../../components/GameOptions/GameOptions";
import PVPGridContainer from "../PVPGridsContainer/PVPGridContainer";
import PVCGridContainer from "../PVCGridsContainer/PVCGridContainer";

const GameContainer = () => {
  const { showGameOptions, showPVPGame, showPVCGame } = useContext(GameContext);

  return (
    <div>
      {showGameOptions && <GameOptions />}
      {showPVPGame && <PVPGridContainer />}
      {showPVCGame && <PVCGridContainer />}
    </div>
  );
};

export default GameContainer;
