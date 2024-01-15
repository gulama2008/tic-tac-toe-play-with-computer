import { useContext } from "react";
import Grid from "../../components/Grid/Grid";
import { GameContext } from "../../context/GameContextProvider";

const PVPGridContainer = () => {
  const { gridValues, setGridValues, isXWon,
        setIsXWon,
        isOWon,
        setIsOWon,} =
    useContext(GameContext);
  return (
    <div>
      {gridValues.map((gridValue: string, index: number) => {
        return <Grid gridValue={gridValue} key={index} index={index} />;
      })}
      {isXWon && <div>X Won!</div>}
      {isOWon && <div>O Won!</div>}
    </div>
  );
};

export default PVPGridContainer;
