import { useContext, useEffect } from "react";
import GameFinishOptions from "../../components/GameFinishOptions/GameFinishOptions";
import Grid from "../../components/Grid/Grid";
import { GameContext } from "../../context/GameContextProvider";
import styles from "./PVCGridContainer.module.scss"
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
  } = useContext(GameContext);
  let gridContainerClass = styles.grid_container;
  if (isFinish) {
    gridContainerClass += ` ${styles.is_disabled}`;
  }
  // useEffect(() => { 
  //   console.log(isXTurn);
    
    
  //   if (!isXTurn) { 
      
  //     const winLineIndexForC = GameService.checkIfCanWin(gridValues, "O");
      
  //     console.log(winLineIndexForC);
  //     if (winLineIndexForC !== -1) {
  //       const newArr = gridValues;
  //       for (let i = 0; i < 3; i++) {
  //         if (newArr[winLineIndexForC[i]] == " ") {
  //           newArr[winLineIndexForC[i]] == "O";
  //           setGridValues(newArr);
  //           return;
  //         }
  //       }
  //       // GameService.cTurnWithTwoSame(gridValues, winLineIndexForC, setGridValues());
  //     } else {
  //       const winLineIndexForP = GameService.checkIfCanWin(gridValues, "X");
  //       if (winLineIndexForP !== -1) {
  //         const newArr = gridValues;
  //         for (let i = 0; i < 3; i++) {
  //           if (newArr[winLineIndexForP[i]] == " ") {
  //             newArr[winLineIndexForP[i]] == "O";
  //             setGridValues(newArr);
  //             return;
  //           }
  //         }
  //       }
  //     }
  //   }
  // },[isXTurn])
  return (
    <div>
      <div className={styles.container}>
        <div className={gridContainerClass}>
          {gridValues.map((gridValue: string, index: number) => {
            return <GridForPvC gridValue={gridValue} key={index} index={index} />;
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