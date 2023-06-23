import { Colors } from '../colors';
import Square from '../square';
import img from '../../assets/king-white.png';

export enum PiecesNames {
  "PIECE" = "Piece",
  "KING" = "King",
  "QUEEN" = "Queen",
  "BISHOP" = "Bishop",
  "ROOK" = "Rook",
  "KNIGHT" = "Knight",
  "PAWN" = "Pawn",
}

export default class Piece {
  color: Colors;
  img: typeof img | null;
  square: Square;
  name: PiecesNames;
  id: string;

  constructor(color: Colors, square: Square) {
    this.color = color;
    this.img = null;
    this.square = square;
    this.square.piece = this;
    this.name = PiecesNames.PIECE;
    this.id = '';
  }

  ableToMove(target: Square) : boolean {
    return true
  }

  movePiece(target: Square) {
    
  }
  
}