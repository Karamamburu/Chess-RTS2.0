import { Colors } from './colors';
import Piece from './pieces/piece';
import { Board } from './board';

export class Square {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    piece: Piece | null;
    board: Board;
    isAvailable: boolean;
    id: string;

    constructor(board: Board, x: number, y: number, color: Colors, piece: Piece | null) {
      this.x =  x;
      this.y = y;
      this.color = color;
      this.piece = piece;
      this.board = board;
      this.isAvailable = false;
      this.id = crypto.randomUUID();
    }
}