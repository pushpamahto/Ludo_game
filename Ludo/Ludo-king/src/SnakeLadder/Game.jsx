import { Board } from './Board';
import { Player } from './Player';

export class Game {
  constructor(board) {
    this.board = board;
    this.players = [];
    this.mode = null; // Game mode: single-player or multiplayer
    this.level = null; // Difficulty level
  }

  createPlayers(players) {
    this.players = players.map((player) => new Player(player.name, player.color, player.image, player.id));
    
    // Initialize player positions
    for (const player of this.players) {
      player.position = 1; // Start at square one
      const startSquare = this.board.findSquare(1);
      if (startSquare) startSquare.players.push(player);
    }
    
    // Implement any additional setup needed for players...
  }

  handlePlayerMove() {
    const currentPlayerIndex = Math.floor(Math.random() * this.players.length); // Randomly select a player to move
    const currentPlayer = this.players[currentPlayerIndex];
    
    const rolledNumber = Math.floor(Math.random() * 6) + 1; // Roll a dice (1-6)
    
    currentPlayer.rolledNumber = rolledNumber;

    // Move player logic...
    
   const nextPosition = currentPlayer.position + rolledNumber;

   if (nextPosition > 100) return; // Can't move beyond the last square

   const nextSquareLink = this.board.findSquare(nextPosition);

   if (nextSquareLink) {
     currentPlayer.position = nextSquareLink.endSquare; // Move to the end square of snakes/ladders or stay on the same square
     
     // Update players on the square...
     nextSquareLink.players.push(currentPlayer);
   }
   
   // Additional logic to check win condition...
   if (currentPlayer.position === 100) {
     alert(`${currentPlayer.name} has won the game!`);
   }
   
   // Remove player from previous position...
   const previousPositionLink = this.board.findSquare(currentPlayer.position - rolledNumber);
   if (previousPositionLink) {
     previousPositionLink.players.splice(previousPositionLink.players.indexOf(currentPlayer), 1);
   }
}

restartGame() {
   // Logic to restart the game...
   alert('Game restarted!');
}

existGame() {
   // Logic to exit the game...
   alert('Exiting game...');
}
}
