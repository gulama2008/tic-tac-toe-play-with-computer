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
  } = useContext(GameContext);
  const handleClick = () => {
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
        newArr[0] !== "test") ||
      (newArr[3] == newArr[4] &&
        newArr[4] == newArr[5] &&
        newArr[3] !== "test") ||
      (newArr[6] == newArr[7] &&
        newArr[7] == newArr[8] &&
        newArr[6] !== "test") ||
      (newArr[0] == newArr[3] &&
        newArr[3] == newArr[6] &&
        newArr[0] !== "test") ||
      (newArr[1] == newArr[4] &&
        newArr[4] == newArr[7] &&
        newArr[1] !== "test") ||
      (newArr[2] == newArr[5] &&
        newArr[5] == newArr[8] &&
        newArr[2] !== "test") ||
      (newArr[0] == newArr[4] &&
        newArr[4] == newArr[8] &&
        newArr[0] !== "test") ||
      (newArr[2] == newArr[4] && newArr[4] == newArr[6] && newArr[2] !== "test")
    ) {

      if (isXTurn) {
        setIsXWon(true);
      } else {
        setIsOWon(true);
      }
    }
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      {gridValue}
    </div>
  );
};

export default Grid;
