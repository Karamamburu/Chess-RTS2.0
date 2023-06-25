import React, { useState, useEffect } from 'react';
import './App.css';
import { BoardComponent } from './components/board-component';
import Board from './models/board';
import { classicChessPiecesPosition } from './models/starting-positions';
import { getStartingPositions } from './models/api';


function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])
  
  async function restart() {
    const newBoard = new Board()
    // const startingPositions = await getStartingPositions()
    getStartingPositions()
    newBoard.createSquares()
    newBoard.placePieces(classicChessPiecesPosition)
    setBoard(newBoard)
  }
  
  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
