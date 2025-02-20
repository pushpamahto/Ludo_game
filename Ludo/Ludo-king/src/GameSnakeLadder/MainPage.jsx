
import React, { useState } from 'react';
import StartPage from '../GameSnakeLadder/StartPage';
import PlayerName from '../GameSnakeLadder/PlayerName';
import SelectLevel from '../GameSnakeLadder/SelectLevel';
import GameBoard from '../GameSnakeLadder/GameBoard';
import GameMode from '../GameSnakeLadder/GameMode';

function Mainpage() {
  const [page, setPage] = useState('startpage'); // Default page is 'startpage'
  const [playerCount, setPlayerCount] = useState(null); // State to store selected player count

  const handlePageChange = (newPage) => {
    if (typeof newPage === 'object' && newPage.page) {
      // If newPage is an object (e.g., { page: 'playerName', playerCount: 2 })
      setPage(newPage.page);
      setPlayerCount(newPage.playerCount); // Update playerCount state
    } else {
      // If newPage is a string (e.g., 'startPage')
      setPage(newPage);
      setPlayerCount(null); // Reset playerCount state
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'startpage':
        return <StartPage setPage={handlePageChange} />;
      case 'gameMode':
        return <GameMode setPage={handlePageChange} />;
      case 'playerName':
        return <PlayerName setPage={handlePageChange} playerCount={playerCount} />;
      case 'selectLevel':
        return <SelectLevel setPage={handlePageChange} />;
      case 'gameBoard':
        return <GameBoard setPage={handlePageChange} />;
      default:
        return <StartPage setPage={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {renderPage()}
    </div>
  );
}

export default Mainpage;