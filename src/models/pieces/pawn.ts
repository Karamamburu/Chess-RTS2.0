import { Colors } from "../colors";
import { Square } from "../square";
import { Piece, PiecesNames } from "./piece";
import blackPawn from '../../assets/pawn-black.png';
import whitePawn from '../../assets/pawn-white.png';

export class Pawn extends Piece {

  constructor(color: Colors, square: Square) {
    super(color, square);
    this.img = color === Colors.BLACK ? blackPawn : whitePawn;
    this.name = PiecesNames.PAWN;
  }
  
}