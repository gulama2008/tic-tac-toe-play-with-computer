import React, { useContext } from "react";
import { GameContext } from "../../context/GameContextProvider";
import styles from "./GridForPvC.module.scss";
import { GameService } from "../../services/gameService";
export interface GridProps {
  gridValue: string;
  index: number;
}
const GridForPvC = ({ gridValue, index }: GridProps) => {
  const {
    gridValues,
    setGridValues,
    isXTurn,
    setIsXTurn,
    setIsXWon,
    setIsOWon,
    isFinish,
    setIsFinish,
    isDraw,
    setIsDraw,
  } = useContext(GameContext);
  let gridClass = styles.container;
  if (gridValue == "X") {
    gridClass += ` ${styles.x}`;
  } else {
    gridClass += ` ${styles.o}`;
  }
  const handleClick = (e: any) => {
    let oTurn = false;
    if (e.target.textContent == " ") {
      const newArr = [...gridValues];
      if (isXTurn) {
        newArr[index] = "X";
        setGridValues(newArr);
        setIsXTurn(!isXTurn);
        const winLineIndexForC = GameService.checkIfCanWin(newArr, "O");
        if (winLineIndexForC !== -1) {
          const newArrForC = newArr;
          for (let i = 0; i < 3; i++) {
            if (newArrForC[winLineIndexForC[i]] == " ") {
              newArrForC[winLineIndexForC[i]] = "O";
              setGridValues(newArrForC);
              setIsXTurn(isXTurn);
              oTurn = true;
            }
          }
        } else {
          const winLineIndexForP = GameService.checkIfCanWin(newArr, "X");
          if (winLineIndexForP !== -1) {
            const newArrForC = newArr;
            for (let i = 0; i < 3; i++) {
              if (newArrForC[winLineIndexForP[i]] == " ") {
                newArrForC[winLineIndexForP[i]] = "O";
                setGridValues(newArrForC);
                setIsXTurn(isXTurn);
                oTurn = true;
              }
            }
          } else {
            if (
              (index == 0 || index == 2 || index == 6 || index == 8) &&
              newArr[4] == " "
            ) {
              newArr[4] = "O";
              setGridValues(newArr);
              setIsXTurn(isXTurn);
            } else {

            }
          }
        }
      } else {
        newArr[index] = "O";
        setGridValues(newArr);
        setIsXTurn(!isXTurn);
      }

      if (
        (newArr[0] == newArr[1] &&
          newArr[1] == newArr[2] &&
          newArr[0] !== " ") ||
        (newArr[3] == newArr[4] &&
          newArr[4] == newArr[5] &&
          newArr[3] !== " ") ||
        (newArr[6] == newArr[7] &&
          newArr[7] == newArr[8] &&
          newArr[6] !== " ") ||
        (newArr[0] == newArr[3] &&
          newArr[3] == newArr[6] &&
          newArr[0] !== " ") ||
        (newArr[1] == newArr[4] &&
          newArr[4] == newArr[7] &&
          newArr[1] !== " ") ||
        (newArr[2] == newArr[5] &&
          newArr[5] == newArr[8] &&
          newArr[2] !== " ") ||
        (newArr[0] == newArr[4] &&
          newArr[4] == newArr[8] &&
          newArr[0] !== " ") ||
        (newArr[2] == newArr[4] && newArr[4] == newArr[6] && newArr[2] !== " ")
      ) {
        if (oTurn) {
          setIsOWon(true);
        } else if (isXTurn) {
          setIsXWon(true);
        } else {
          setIsOWon(true);
        }
        setIsFinish(true);
      } else if (!newArr.includes(" ")) {
        setIsDraw(true);
        setIsFinish(true);
      }
    }
  };
  return (
    <div className={gridClass} onClick={handleClick}>
      {gridValue}
    </div>
  );
};

export default GridForPvC;
