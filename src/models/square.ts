import { Colors } from './colors';
import Piece from './pieces/piece';
import Board from './board';

export default class Square {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    piece: Piece | null;
    board: Board;
    isAvailable: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, piece: Piece | null) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.piece = piece;
      this.board = board;
      this.isAvailable = false;
      this.id = Math.random();
    }

    movePiece(target: Square) {
      if (this.piece && this.piece?.ableToMove(target)) {
        this.piece.movePiece(target);
        target.piece = this.piece;
        this.piece = null;
      }
    }
}