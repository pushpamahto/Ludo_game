
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person'; // Import the user icon from Material-UI
import ComputerIcon from '@mui/icons-material/Computer'; // Import the computer icon from Material-UI
import './GameMode.css';

const GameMode = ({ setPage }) => {
  const backgroundImageUrl = 'url(./images/green-background.avif)'; // Replace with your actual background image path
  const [selectedPlayers, setSelectedPlayers] = useState(null); // State to track selected player count

  const handlePlayerSelect = (playerCount) => {
    setSelectedPlayers(playerCount); // Update selected player count
  };

  const handleNext = () => {
    if (selectedPlayers) {
      setPage({ page: 'playerName', playerCount: selectedPlayers }); // Pass selected player count to PlayerName
    }
  };

  const handlePrev = () => {
    setPage('startPage'); // Navigate to startPage
  };

  // Function to render the correct icons based on the player count
  const renderPlayerIcons = (playerCount) => {
    const icons = [];
    let iconSize = '16px'; // Default icon size

    // Adjust icon size for 7 and 8 players
    if (playerCount === 7 || playerCount === 8) {
      iconSize = '14px'; // Smaller size for 7 and 8 players
    }

    if (playerCount === 1) {
      // For 1 player, show a computer icon
      icons.push(<ComputerIcon key="computer" style={{ color: 'white', fontSize: iconSize }} />);
    } else {
      // For 2 or more players, show user icons
      for (let i = 0; i < playerCount; i++) {
        icons.push(<PersonIcon key={i} style={{ color: 'white', fontSize: iconSize }} />);
      }
    }
    return icons;
  };

  return (
    <div
      className=" gamemode flex flex-col items-center justify-center min-h-screen w-full bg-80% bg-center border-8 border-black rounded-4xl p-6 shadow-xl"
      style={{ backgroundImage: "url('./images/faded_image.png')" }}
    >

      {/* Information Icon */}
      <button 
        onClick={() => setPage('information')} 
        className="absolute top-4 right-4 focus:outline-none"
      >
        <img 
          src="./images/info-icon.png" 
          alt="Information" 
          className="w-8 h-8 hover:scale-110 transition-transform duration-300" 
        />
      </button>



    <div
       className="bg-green-500 bg-80% bg-center border-8 border-black rounded-4xl p-8 w-full max-w-md"
       style={{ backgroundImage: "url('./images/green-background.avif')" }}
     
      >
        <h2 className="text-4xl font-black mb-8 text-center">GAME MODE</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {/* First Row: 1, 2, 3, 4 Players */}
          {[1, 2, 3, 4].map((playerCount) => (
            <button
              key={playerCount}
              onClick={() => handlePlayerSelect(playerCount)}
              className={`flex items-center justify-center w-16 h-16 border-2 border-white rounded-full hover:bg-green-800 overflow-hidden ${
                selectedPlayers === playerCount ? 'bg-green-700' : 'bg-green-500'
              }`}
            >
              <div className="flex flex-wrap justify-center items-center gap-1 p-1">
                {renderPlayerIcons(playerCount)}
              </div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Second Row: 5, 6, 7, 8 Players */}
          {[5, 6, 7, 8].map((playerCount) => (
            <button
              key={playerCount}
              onClick={() => handlePlayerSelect(playerCount)}
              className={`flex items-center justify-center w-16 h-16 border-2 border-white rounded-full hover:bg-green-800 overflow-hidden ${
                selectedPlayers === playerCount ? 'bg-green-700' : 'bg-green-500'
              }`}
            >
              <div className="flex flex-wrap justify-center items-center gap-1 p-1">
                {renderPlayerIcons(playerCount)}
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-between gap-16">
          <button
            onClick={handlePrev}
            className="text-xl text-black font-bold  hover:text-gray-800 cursor-pointer"
          >
            PREV
          </button>
          <button
            onClick={handleNext}
            className={`text-xl text-black font-bold  ${
              selectedPlayers ? 'hover:text-gray-800 cursor-pointer' : 'text-gray-900   cursor-not-allowed'
            }`}
            disabled={!selectedPlayers}
          >
            NEXT
          </button>
        </div>
      </div>
      <div className="mt-8 flex gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <img
        src="./images/green-pig-img.png"
        alt="Cartoon Pig"
        className="w-30 h-30 absolute right-29 bottom-39"
      />
    </div>
  );
};

export default GameMode;










