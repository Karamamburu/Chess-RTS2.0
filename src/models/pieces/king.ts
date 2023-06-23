import { Colors } from "../colors";
import Square from "../square";
import Piece, { PiecesNames } from "./piece";
import blackKing from '../../assets/king-black.png';
import whiteKing from '../../assets/king-white.png';

export default class King extends Piece {

  constructor(color: Colors, square: Square) {
    super(color, square);
    this.img = color === Colors.BLACK ? blackKing : whiteKing;
    this.name = PiecesNames.KING;
  }
  
}