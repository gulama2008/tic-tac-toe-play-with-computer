import { useContext, useEffect } from "react";
import GameFinishOptions from "../../components/GameFinishOptions/GameFinishOptions";
import Grid from "../../components/Grid/Grid";
import { GameContext } from "../../context/GameContextProvider";
import styles from "./PVCGridContainer.module.scss"

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
  } = useContext(GameContext);
  let gridContainerClass = styles.grid_container;
  if (isFinish) {
    gridContainerClass += ` ${styles.is_disabled}`;
  }
  useEffect(() => { 
    if (!isXTurn) { 
      
    }
  },isXTurn)
  return (
    <div>
      <div className={styles.container}>
        <div className={gridContainerClass}>
          {gridValues.map((gridValue: string, index: number) => {
            return <Grid gridValue={gridValue} key={index} index={index} />;
          })}
        </div>

        {isXWon && <div className={styles.won}>X WON!</div>}
        {isOWon && <div className={styles.won}>O WON!</div>}
        {isFinish && <GameFinishOptions />}
      </div>
    </div>
  );
}

export default PVCGridContainer