import { useContext } from "react";
import styles from "./Grid.module.scss";
import { GameContext } from "../../context/GameContextProvider";

export interface GridProps {
  gridValue: string;
  index: number;
}
const Grid = ({ gridValue, index }: GridProps) => {
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
      const newArr = [...gridValues];
      if (isXTurn) {
        newArr[index] = "X";
        setGridValues(newArr);
      } else {
        newArr[index] = "O";
        setGridValues(newArr);
      }
      setIsXTurn(!isXTurn);

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

export default Grid;
