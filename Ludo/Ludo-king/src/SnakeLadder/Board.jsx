import { SnakesladdersLink } from './SnakeLaddersLink';

export class Board {
  constructor() {
    this.first = null;
    this.last = null;
    this.snakesarray = [
      [30, 7], [47, 15], [56, 19], [73, 51], [82, 42], [92, 75], [98, 55],
    ];
    this.laddersArray = [
      [4, 25], [21, 39], [29, 74], [43, 76], [63, 80], [71, 89],
    ];

    for (let i = 1; i <= 100; i++) {
      this.handleInsertSquare(i);
    }
  }

  insertSquare(Square, endSquare) {
    const newSquare = new SnakesladdersLink(Square, endSquare);
    if (!this.first) {
      this.first = newSquare;
      this.last = newSquare;
    } else {
      this.last.next = newSquare;
      newSquare.previous = this.last;
      this.last = newSquare;
    }
  }

  handleInsertSquare(index) {
    for (const snake of this.snakesarray) {
      if (index === snake[0]) {
        return this.insertSquare(index, snake[1]);
      }
    }
 
    for (const ladder of this.laddersArray) {
      if (index === ladder[0]) {
        return this.insertSquare(index, ladder[1]);
      }
    }

    this.insertSquare(index, index);
  }

  findSquare(Squareid) {
    let findlink = this.first;
    while (findlink != null) {
      if (findlink.square === Squareid) {
        return findlink;
      }
      findlink = findlink.next;
    }
    return null;
  }

  deleteNodePlayer(Squareid, currentPlayerNumber) {
    let current = this.first;
    while (current != null) {
      if (current.square === Squareid) {
        current.players = current.players.filter(
          (player) => player.id !== currentPlayerNumber
        );
        return;
      }
      current = current.next;
    }
  }

  addPlayers(player, currentPlayerNumber, previousPosition) {
    let startSquare = this.findSquare(player.position);
    if (startSquare != null) {
      startSquare.players.push(player);
    }

    if (previousPosition > 0) {
      this.deleteNodePlayer(previousPosition, currentPlayerNumber);
    }
  }
}
