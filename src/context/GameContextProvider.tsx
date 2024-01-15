import { createContext, useState } from "react";

export const GameContext = createContext<any>(null);

const GameContextProvider = ({ children }: any) => {
  let arr: string[] = [];
  for (let i = 0; i < 9; i++) {
    arr[i] = i + "";
  }
  // const [grid, setGrid] = useState<string[3][3]>();
  const [gridValues, setGridValues] = useState<string[]>(arr);
  const [gameOption, setGameOption] = useState<string>();
  const [showGameOptions, setShowGameOptions] = useState<boolean>(true);
  const [showPVPGame, setShowPVPGame] = useState<boolean>(false);
  const [showPVCGame, setShowPVCGame] = useState<boolean>(false);
    const [isXTurn, setIsXTurn] = useState<boolean>(true);
    const [isXWon, setIsXWon] = useState<boolean>(false);
    const [isOWon, setIsOWon] = useState<boolean>(false);
  return (
    <GameContext.Provider
      value={{
        gridValues,
        setGridValues,
        gameOption,
        setGameOption,
        showGameOptions,
        setShowGameOptions,
        showPVPGame,
        setShowPVPGame,
        showPVCGame,
        setShowPVCGame,
        isXTurn,
        setIsXTurn,
        isXWon,
        setIsXWon,
        isOWon,
        setIsOWon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
