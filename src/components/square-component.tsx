import React, {FC} from 'react';
import { Square } from '../models/square';

interface SquareProps {
  square: Square;
  isSelected: boolean;
  selectPiece: (square: Square) => void;
}

const SquareComponent: FC<SquareProps> = ({square, isSelected, selectPiece}) => {
  return (
    <div 
    className={[square.color, 'square', isSelected ? "selected" : ''].join(' ')}
    onClick={() => selectPiece(square)}
    style={{background: square.isAvailable && square.piece ? 'grey' : ''}}
    >
      {!square.piece && square.isAvailable && <div className='available-to-move'/>}
      {square.piece?.img && <img src={square.piece.img} alt=''/>}
    </div>
  )
}

export { SquareComponent }
