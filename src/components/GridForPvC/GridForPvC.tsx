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
    if (e.target.textContent == " ") {
      console.log("test if here1");
      const newArr = [...gridValues];
      if (isXTurn) {
        console.log("test if here2");
        newArr[index] = "X";
        setGridValues(newArr);
        setIsXTurn(!isXTurn);
        const winLineIndexForC = GameService.checkIfCanWin(newArr, "O");

        console.log(winLineIndexForC);
        if (winLineIndexForC !== -1) {
          console.log("test if here3");
          const newArr2 = newArr;
          for (let i = 0; i < 3; i++) {
            if (newArr2[winLineIndexForC[i]] == " ") {
              console.log("test if here4");
              newArr2[winLineIndexForC[i]] = "O";
              setGridValues(newArr2);
              setIsXTurn(isXTurn);
            }
          }

          // GameService.cTurnWithTwoSame(gridValues, winLineIndexForC, setGridValues());
        } else {
          console.log("test if here5");

          const winLineIndexForP = GameService.checkIfCanWin(newArr, "X");
          if (winLineIndexForP !== -1) {
            console.log("test if here6");
            const newArr3 = newArr;
            for (let i = 0; i < 3; i++) {
              if (newArr3[winLineIndexForP[i]] == " ") {
                console.log("test if here7");
                newArr3[winLineIndexForP[i]] = "O";
                setGridValues(newArr3);
                setIsXTurn(isXTurn);
              }
            }
          }
        }
      } else {
        console.log("test if here8");
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
        if (isXTurn) {
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
