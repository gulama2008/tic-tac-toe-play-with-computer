import { useContext, useEffect } from "react";
import GameFinishOptions from "../../components/GameFinishOptions/GameFinishOptions";
import Grid from "../../components/Grid/Grid";
import { GameContext } from "../../context/GameContextProvider";
import styles from "./PVCGridContainer.module.scss";
import { GameService } from "../../services/gameService";
import GridForPvC from "../../components/GridForPvC/GridForPvC";

const PVCGridContainer = () => {
  const {
    gridValues,
    setGridValues,
    isXWon,
    setIsXWon,
    isOWon,
    setIsOWon,
    isFinish,
    setIsFinish,
    isXTurn,
    isDraw,
  } = useContext(GameContext);
  let gridContainerClass = styles.grid_container;
  if (isFinish) {
    gridContainerClass += ` ${styles.is_disabled}`;
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={gridContainerClass}>
          {gridValues.map((gridValue: string, index: number) => {
            return (
              <GridForPvC gridValue={gridValue} key={index} index={index} />
            );
          })}
        </div>
        {isXWon && <div className={styles.won}>X WON!</div>}
        {isOWon && <div className={styles.won}>O WON!</div>}
        {isDraw && <div className={styles.won}>DRAW!</div>}
        {isFinish && <GameFinishOptions />}
      </div>
    </div>
  );
};

export default PVCGridContainer;
