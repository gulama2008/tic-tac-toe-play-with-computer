import { useContext } from "react";
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
    setIsFinish,
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
            //check if player put on corner, if middle is empty then computer put in the middle, if not empty then check if the opposite of the corner is occupied, if not then computer put there, otherwise put on the side
            if (index == 0 || index == 2 || index == 6 || index == 8) {
              if (newArr[4] == " ") {
                newArr[4] = "O";
                setGridValues(newArr);
                setIsXTurn(isXTurn);
              } else {
                if (index == 0 && newArr[8] == " ") {
                  newArr[8] = "O";
                  setGridValues(newArr);
                  setIsXTurn(isXTurn);
                } else if (index == 2 && newArr[6] == " ") {
                  newArr[6] = "O";
                  setGridValues(newArr);
                  setIsXTurn(isXTurn);
                } else if (index == 6 && newArr[2] == " ") {
                  newArr[2] = "O";
                  setGridValues(newArr);
                  setIsXTurn(isXTurn);
                } else if (index == 8 && newArr[0] == " ") {
                  newArr[0] = "O";
                  setGridValues(newArr);
                  setIsXTurn(isXTurn);
                } else if (
                  (index == 0 && newArr[8] == "X") ||
                  (index == 2 && newArr[6] == "X") ||
                  (index == 6 && newArr[2] == "X") ||
                  (index == 8 && newArr[0] == "X")
                ) {
                  for (let i = 1; i <= 7; i += 2) {
                    if (newArr[i] == " ") {
                      newArr[i] = "O";
                      setGridValues(newArr);
                      setIsXTurn(isXTurn);
                      return;
                    }
                  }
                }
              }
            } else if (index == 4) {
              //p can put in the middle means middle is empty and p never put in the corner, otherwise c will be already put in the middle if p ever put in the corner
              newArr[0] = "O";
              setGridValues(newArr);
              setIsXTurn(isXTurn);
            } else {
              console.log("check if on side");
              
              // situations when p put on the side, c consider middle first, if not empty then c should put in the corner of the same side of p
              if ((newArr[4] == " ")) {
                newArr[4] = "O";
                setGridValues(newArr);
                setIsXTurn(isXTurn);
              } else { 
                if (index == 1) {
                  if (newArr[0] == " ") {
                    newArr[0] = "O";
                    setGridValues(newArr);
                    setIsXTurn(isXTurn);
                  } else if (newArr[2] == " ") {
                    newArr[2] = "O";
                    setGridValues(newArr);
                    setIsXTurn(isXTurn);
                  }
                } else if (index == 3) {
                  if ((newArr[0] == " ")) {
                    console.log("testtesttest");
                    
                    newArr[0] = "O";
                    setGridValues(newArr);
                    setIsXTurn(isXTurn);
                  } else if ((newArr[6] == " ")) {
                    newArr[6] = "O";
                    setGridValues(newArr);
                    setIsXTurn(isXTurn);
                  }
                } else if (index == 5) {
                  if ((newArr[2] == " ")) {
                    newArr[2] = "O";
                    setGridValues(newArr);
                    setIsXTurn(isXTurn);
                  } else if ((newArr[8] == " ")) {
                    newArr[8] = "O";
                    setGridValues(newArr);
                    setIsXTurn(isXTurn);
                  }
                } else { 
                  console.log("p=7");
                  
                  if ((newArr[6] == " ")) {
                    newArr[6] = "O";
                    setGridValues(newArr);
                    setIsXTurn(isXTurn);
                  } else if ((newArr[8] == " ")) {
                    console.log("8 is empty");
                    newArr[8] = "O";
                    setGridValues(newArr);
                    setIsXTurn(isXTurn);
                  }
                }
              }
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
