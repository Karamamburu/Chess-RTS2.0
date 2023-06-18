import { Colors } from "../colors";
import { Square } from "../square";
import { Piece, PiecesNames } from "./piece";
import blackKnight from '../../assets/knight-black.png';
import whiteKnight from '../../assets/knight-white.png';

export class Knight extends Piece {

  constructor(color: Colors, square: Square) {
    super(color, square);
    this.img = color === Colors.BLACK ? blackKnight : whiteKnight;
    this.name = PiecesNames.KNIGTH;
  }
  
}