import React, { useState, useEffect } from 'react';
import './App.css';
import { BoardComponent } from './components/board-component';
import { Board } from './models/board';

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])
  
  function restart() {
    const newBoard = new Board()
    newBoard.createSquares()
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
