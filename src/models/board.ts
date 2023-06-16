import { Colors } from './colors';
import { Square } from './square';

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
  
}
