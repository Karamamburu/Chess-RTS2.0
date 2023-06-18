import React, {FC} from 'react';
import { Square } from '../models/square';

interface SquareProps {
  square: Square
}

const SquareComponent: FC<SquareProps> = ({square}) => {
  return (
    <div 
      className={[square.color, 'square'].join(' ')}
    >
      {square.piece?.img && <img src={square.piece.img} alt=''/>}
    </div>
  )
}

export { SquareComponent }
