import { Colors } from "../colors";
import Square from "../square";
import Piece, { PiecesNames } from "./piece";
import blackRook from '../../assets/rook-black.png';
import whiteRook from '../../assets/rook-white.png';

export default class Rook extends Piece {

  constructor(color: Colors, square: Square) {
    super(color, square);
    this.img = color === Colors.BLACK ? blackRook : whiteRook;
    this.name = PiecesNames.ROOK;
  }
  
}