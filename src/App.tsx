import React, { useState, useEffect } from 'react';
import './App.css';
import { BoardComponent } from './components/board-component';
import Board from './models/board';
import Button from './models/button';
import { NewGameButtonComponent } from './components/new-game-button-component';
import { searchGames, PLAYER_NAMES } from './models/api';



function App() {
  const [board, setBoard] = useState<Board | null>(null);
  const [isGameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (isGameStarted) {
      restart();
    }
  }, [isGameStarted]);

  async function restart() {
    const newBoard = new Board();
    newBoard.createSquares();
  
    try {
      const response = await searchGames(PLAYER_NAMES[1]);
      if (response && response.board) {
        newBoard.placePieces(response.board);
        setBoard(newBoard);
      } else {
        console.error('Неверный формат данных:', response);
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  }

  function handleNewGameButtonClick() {
    setGameStarted(true);
  }

  return (
    <div className="app">
      {!isGameStarted && (
        <NewGameButtonComponent
          button={new Button('New Game', handleNewGameButtonClick)}
        />
      )}
      {board && isGameStarted && (
        <BoardComponent board={board} setBoard={setBoard} />
      )}
    </div>
  );
}

export default App;
