import React, { useState, useEffect } from 'react';
import './App.css';
import { BoardComponent } from './components/board-component';
import Board from './models/board';
import { classicChessPiecesPosition } from './models/starting-positions';
import Button from './models/button';
import { NewGameButtonComponent } from './components/new-game-button-component';

function App() {
  const [board, setBoard] = useState<Board | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      restart();
    }
  }, [gameStarted]);

  function restart() {
    const newBoard = new Board();
    newBoard.createSquares();
    newBoard.placePieces(classicChessPiecesPosition);
    setBoard(newBoard);
  }

  function handleNewGameClick() {
    setGameStarted(true);
  }

  return (
    <div className="app">
      {!gameStarted && (
        <NewGameButtonComponent
          button={new Button('New Game', handleNewGameClick)}
        />
      )}
      {board && gameStarted && (
        <BoardComponent board={board} setBoard={setBoard} />
      )}
    </div>
  );
}

export default App;
