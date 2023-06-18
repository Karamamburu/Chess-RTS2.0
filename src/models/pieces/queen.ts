import { Colors } from "../colors";
import { Square } from "../square";
import { Piece, PiecesNames } from "./piece";
import blackQueen from '../../assets/queen-black.png';
import whiteQueen from '../../assets/queen-white.png';

export class Queen extends Piece {

  constructor(color: Colors, square: Square) {
    super(color, square);
    this.img = color === Colors.BLACK ? blackQueen : whiteQueen;
    this.name = PiecesNames.QUEEN;
  }
  
}