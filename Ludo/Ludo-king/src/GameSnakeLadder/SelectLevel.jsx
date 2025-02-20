
import React, { useState } from 'react';
import './SelectLevel.css'; // Import custom CSS for specific styles

const SelectLevel = ({ setPage }) => {
  const [selectedLevel, setSelectedLevel] = useState('EASY');

  const handleLevelChange = (level) => {
    
    setSelectedLevel(level);
  };

  return (
    <div
      className=" selectlevel flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center border-8 border-black rounded-4xl p-6 shadow-xl"
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
        className="bg-green-500 bg-cover bg-center border-8 border-black rounded-4xl p-8 w-full max-w-xl"
        style={{ backgroundImage: "url('./images/green-background.avif')" }}
      >
        <h2 className="text-4xl font-black text-center mb-8 text-white" style={{ fontWeight: '1200' }}>SELECT LEVEL</h2>
        <form className="flex flex-col gap-4">
          <div className="LEVEL-container">
            <label
              className={`easy-mode ${selectedLevel === 'EASY' ? 'easy-mode-selected' : ''}`}
              
              onClick={() => handleLevelChange('EASY')}
            >
              <div className="checkbox"></div>
              <h3 className="text-black font-bold text-3xl" style={{ fontWeight: '1000' }}>EASY</h3>
            </label>
          </div>
          <div className="LEVEL-container">
            <label
              className={`medium-mode ${selectedLevel === 'MEDIUM' ? 'medium-mode-selected' : ''}`}
              onClick={() => handleLevelChange('MEDIUM')}
            >
              <div className="checkbox"></div>
              <h3 className="text-black font-bold text-3xl" style={{ fontWeight: '1000' }}>MEDIUM</h3>
            </label>
          </div>
          <div className="LEVEL-container">
            <label
              className={`hard-mode ${selectedLevel === 'HARD' ? 'hard-mode-selected' : ''}`}
              onClick={() => handleLevelChange('HARD')}
            >
              <div className="checkbox"></div>
              <h3 className="text-black font-bold text-3xl" style={{ fontWeight: '1000' }}>HARD</h3>
            </label>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setPage('playerName')} // Navigate to PlayerName page
              className="text-xl text-black font-bold hover:text-gray-800 cursor-pointer"
            >
              PREV
            </button>
            <button
              type="button"
              onClick={() => setPage('gameBoard')} // Navigate to GameBoard page
              className="text-xl text-black font-bold hover:text-gray-800 cursor-pointer"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 flex gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <img
        src="./images/green-pig-img.png"
        alt="Cartoon Pig"
        className="w-30 h-30 absolute right-15 bottom-33"
      />
    </div>
  );
};

export default SelectLevel;