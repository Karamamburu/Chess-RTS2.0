import { Colors } from "../colors";
import Square from "../square";
import Piece, { PiecesNames } from "./piece";
import blackBishop from '../../assets/bishop-black.png';
import whiteBishop from '../../assets/bishop-white.png';

export default class Bishop extends Piece {

  constructor(color: Colors, square: Square) {
    super(color, square);
    this.img = color === Colors.BLACK ? blackBishop : whiteBishop;
    this.name = PiecesNames.BISHOP;
  }

}