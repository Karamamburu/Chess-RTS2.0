import { Colors } from './colors';
import { King } from './pieces/king';
import { Queen } from './pieces/queen';
import { Pawn } from './pieces/pawn';
import { Square } from './square';
import { Bishop } from './pieces/bishop';
import { Knight } from './pieces/knight';
import { Rook } from './pieces/rook';
import { letterToNumberConverter } from '../util';
import { classicChessPiecesPosition } from '../models/starting-positions';
import { isYieldExpression } from 'typescript';

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

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.squares = this.squares;

    return newBoard;
  }

  public highlightSquare(selectedSquare: Square | null) {
    for (let i = 0; i < this.squares.length; i++) {
      const rank = this.squares[i];
      for (let j = 0; j < rank.length; j++) {
        const targetSquare = rank[j];
        targetSquare.isAvailable = !!selectedSquare?.piece?.ableToMove(targetSquare);
      }
    }
  }

  public getSquare(x: number, y: number) {
    return this.squares[y][x]
  }

  public placePieces() {
    for (const piece of classicChessPiecesPosition) {
      const { x, y } = letterToNumberConverter(piece.square);
      const color: Colors = piece.color as Colors;
  
      switch (piece.piece) {
        case 'king':
          new King(color, this.getSquare(x, y));
          break;
        case 'queen':
          new Queen(color, this.getSquare(x, y));
          break;
        case 'pawn':
          new Pawn(color, this.getSquare(x, y));
          break;
        case 'bishop':
          new Bishop(color, this.getSquare(x, y));
          break;
        case 'knight':
          new Knight(color, this.getSquare(x, y));
          break;
        case 'rook':
          new Rook(color, this.getSquare(x, y));
          break;
      }
    }
  }
  
}
