import './App.css'
import GameOptionsContainer from './containers/GameContainer/GameContainer'
import GameContextProvider from './context/GameContextProvider'

function App() {

  return (
    <GameContextProvider>
      <div className="header">
        Tic <span className='tac'>Tac</span> Toe
      </div>
      <GameOptionsContainer />
    </GameContextProvider>
  );
}

export default App
