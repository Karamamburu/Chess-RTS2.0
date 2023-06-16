import React, { FC } from 'react';
import { SquareComponent } from './square-component';
import { Board } from '../models/board';
import { Square } from '../models/square';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  return (
    <div className='board'>
      {board.squares.map((rank, rankIndex) => 
        <React.Fragment key={rankIndex}>
          {rank.map((square: Square) =>
            <SquareComponent
              square={square}
              key={square.id}
            />
            )}
        </React.Fragment>
      )}
    </div>
  )
}

export { BoardComponent }
