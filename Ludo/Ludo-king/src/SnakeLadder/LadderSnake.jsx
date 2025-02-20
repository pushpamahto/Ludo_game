import React, { useState } from 'react';
import { Board } from '../SnakeLadder/Board';
import { Game } from '../SnakeLadder/Game';
import GameMode from '../SnakeLadder/GameMode';
import PlayerDetails from '../SnakeLadder/PlayerDetails';
import LevelSelection from '../SnakeLadder/LevelSelection';

function LadderSnake() {
const [gameState, setGameState] = useState('mode'); // 'mode', 'player', 'level', 'game'
const [gameInstance, setGameInstance] = useState(null);

const startGameInstance= () => {
const board= new Board();
const game= new Game(board);
setGameInstance(game);
};

const handleModeSelect= (event) => {
event.preventDefault();
startGameInstance();
setGameState('player');
};

const handlePlayerSubmit= (event) => {
event.preventDefault();
const formData= new FormData(event.target);
let players= [];

for(let i=1; i<=4; i++){
if(formData.get(`player${i}`)){
players.push({
name: formData.get(`player${i}`),
color: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`,
image: `https://www.example.com/player${i}.png`, // Placeholder image URL
id: i,
});
}
}

gameInstance.createPlayers(players);
setGameState('level');
};

const handleLevelSelect= (event) => {
event.preventDefault();
setGameState('game');
};

return (
<div className='min-h-screen bg-gray-100 flex items-center justify-center'>
{gameState === 'mode' && <GameMode onSelectMode={handleModeSelect} />}
{gameState === 'player' && <PlayerDetails onSubmit={handlePlayerSubmit} />}
{gameState === 'level' && <LevelSelection onSelectLevel={handleLevelSelect} />}
{/* Add game board display when in game state */}
{gameState === 'game' && (
<div> {/* Your game board component goes here */} </div>
)}
</div>
);
}

export default LadderSnake;

