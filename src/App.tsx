import './App.css'
import GameOptionsContainer from './containers/GameContainer/GameContainer'
import GridContainer from './containers/PVPGridsContainer/PVPGridContainer'
import GameContextProvider from './context/GameContextProvider'

function App() {

  return (
    <GameContextProvider>
      <div>Tic Tac Toe</div>
      <GameOptionsContainer/>
    </GameContextProvider>
  )
}

export default App
