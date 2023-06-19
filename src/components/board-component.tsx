import React, { FC, useState, useEffect } from 'react';
import { SquareComponent } from './square-component';
import { Board } from '../models/board';
import { Square } from '../models/square';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null)

function selectPiece(square: Square) {
  if (selectedSquare && selectedSquare !== square && selectedSquare.piece?.ableToMove(square)) {
    selectedSquare.movePiece(square);
    setSelectedSquare(null);
  } else {
    setSelectedSquare(square);
  }
}

useEffect(() => {
  highlightSquare()
}, [selectedSquare])

function highlightSquare() {
  board.highlightSquare(selectedSquare)
  updateBoard()
}

function updateBoard() {
  const newBoard = board.getCopyBoard()
  setBoard(newBoard)
}

  return (
    <div className='board'>
      {board.squares.map((rank, rankIndex) => 
        <React.Fragment key={rankIndex}>
          {rank.map((square: Square) =>
            <SquareComponent
              square={square}
              key={square.id}
              isSelected={square.x === selectedSquare?.x && square.y === selectedSquare?.y}
              selectPiece={selectPiece}
            />
            )}
        </React.Fragment>
      )}
    </div>
  )
}

export { BoardComponent }
