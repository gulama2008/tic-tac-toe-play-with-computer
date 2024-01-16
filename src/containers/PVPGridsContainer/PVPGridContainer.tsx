import { useContext } from "react";
import Grid from "../../components/Grid/Grid";
import { GameContext } from "../../context/GameContextProvider";
import GameFinishOptions from "../../components/GameFinishOptions/GameFinishOptions";
import styles from "./PVPGridContainer.module.scss"

const PVPGridContainer = () => {
  const {
    gridValues,
    setGridValues,
    isXWon,
    setIsXWon,
    isOWon,
    setIsOWon,
    isFinish,
    setIsFinish,
  } = useContext(GameContext);
  let gridContainerClass = styles.grid_container;
  if (isFinish) {
    gridContainerClass += ` ${styles.is_disabled}`;
  }
  return (
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
  );
};

export default PVPGridContainer;
