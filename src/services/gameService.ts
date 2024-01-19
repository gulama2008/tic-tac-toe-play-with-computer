export class GameService {
    public static checkIfCanWin(arr: string[], str: string) {
      console.log(arr);
      
    const arrRow1 = [arr[0], arr[1], arr[2]];
    const arrRow2 = [arr[3], arr[4], arr[5]];
    const arrRow3 = [arr[6], arr[7], arr[8]];
    const arrCol1 = [arr[0], arr[3], arr[6]];
    const arrCol2 = [arr[1], arr[4], arr[7]];
    const arrCol3 = [arr[2], arr[5], arr[8]];
    const arrDiag1 = [arr[0], arr[4], arr[8]];
    const arrDiag2 = [arr[2], arr[4], arr[6]];

    const newArr = [
      arrRow1,
      arrRow2,
      arrRow3,
      arrCol1,
      arrCol2,
      arrCol3,
      arrDiag1,
      arrDiag2,
    ];

    const indexArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winArrIndex = newArr.findIndex((e: string[]) => {
      const num = e.reduce((a: number, b: string) => {
        if (b == str) {
          return ++a;
        }
        return a;
      }, 0);
      return num == 2 && e.includes(" ");
    });
      
      
    return winArrIndex == -1 ? -1 : indexArr[winArrIndex];
  }
    
    public static cTurnWithTwoSame(gridValues: string[], winLineIndex:number[],setGridValues: (arr:string[]) => {}) { 
        const newArr = gridValues;
        for (let i = 0; i < 3; i++) {
          if (newArr[winLineIndex[i]] == " ") {
            newArr[winLineIndex[i]] == "O";
            setGridValues(newArr);
            return;
          }
        }
    }
  
  
}
