import { Colors } from './colors';
import { King } from './pieces/king';
import { Queen } from './pieces/queen';
import { Pawn } from './pieces/pawn';
import { Square } from './square';
import { Bishop } from './pieces/bishop';
import { Knight } from './pieces/knight';
import { Rook } from './pieces/rook';

export class Board {
  squares: Square[][] = []

  public createSquares() {

    for (let i = 0; i < 8; i++) {
      const rank: Square[] = []

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          rank.push(new Square(this, j, i, Colors.BLACK, null))
        } else {
          rank.push(new Square(this, j, i, Colors.WHITE, null))
        }
      }
      this.squares.push(rank)
    }
  }

  public getSquare(x: number, y: number) {
    return this.squares[x][y]
  }

  private placePawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getSquare(1, i))
      new Pawn(Colors.WHITE, this.getSquare(6, i))
    }
  }

  private placeKings() {
    new King(Colors.WHITE, this.getSquare(7, 4));
    new King(Colors.BLACK, this.getSquare(0, 4));
  }

  private placeQueens() {
    new Queen(Colors.WHITE, this.getSquare(7, 3));
    new Queen(Colors.BLACK, this.getSquare(0, 3));
  }

  private placeBishops() {
    new Bishop(Colors.WHITE, this.getSquare(7, 2));
    new Bishop(Colors.WHITE, this.getSquare(7, 5));
    new Bishop(Colors.BLACK, this.getSquare(0, 2));
    new Bishop(Colors.BLACK, this.getSquare(0, 5));
  }

  private placeKnights() {
    new Knight(Colors.WHITE, this.getSquare(7, 1));
    new Knight(Colors.WHITE, this.getSquare(7, 6));
    new Knight(Colors.BLACK, this.getSquare(0, 1));
    new Knight(Colors.BLACK, this.getSquare(0, 6));
  }

  private placeRooks() {
    new Rook(Colors.WHITE, this.getSquare(7, 0));
    new Rook(Colors.WHITE, this.getSquare(7, 7));
    new Rook(Colors.BLACK, this.getSquare(0, 0));
    new Rook(Colors.BLACK, this.getSquare(0, 7));
  }
  
  public placePieces() {
    
    this.placePawns();
    this.placeKings();
    this.placeQueens();
    this.placeBishops();
    this.placeKnights();
    this.placeRooks();    
  }
  
}
