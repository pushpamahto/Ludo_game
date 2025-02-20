

import React from 'react';
import "./GameBoard.css";


const GameBoard = ({ setPage }) => {
  return (
    <div
      className="gameboard flex flex-col items-center justify-center min-h-screen w-full bg-80% bg-center border-8 border-black rounded-3xl p-6 shadow-xl md:w-full lg:w-full"
      style={{ backgroundImage: "url('./images/green-background.avif')" }}
    >
      {/* Buttons at the top-right corner */}
      <div className="absolute top-4 right-4 flex flex-col space-y-4">
        <button
          onClick={() => setPage('home')}
          className="bg-blue-500 text-white font-bold  px-6 py-1 rounded-4xl hover:bg-blue-600 cursor-pointer  text-center"
        >
          HOME
        </button>
        <button
          onClick={() => setPage('restart')}
          className="bg-red-500 text-white font-bold px-6 py-1 rounded-4xl hover:bg-red-600 cursor-pointer"
        >
          RESTART
        </button>
      </div>

      {/* Main Content */}
      <div className="flex w-full h-full max-h-6xl max-w-6xl p-8">
        {/* Left Section */}
        <div className="w-1/4 flex flex-col items-center">
          <div className="p-4 rounded-lg shadow-lg mb-8">
            <img src="./images/bird-1.webp" alt="Player" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-center">Player Name</h3>
          </div>
          <div className="p-4 rounded-lg shadow-lg mb-8">
            <img src="./images/dice.png" alt="Dice" className="w-16 h-16" />
          </div>
         
        </div>

        {/* Right Section */}
        <div className="w-3/4 relative">
          <div className="absolute inset-0 rounded-lg shadow-lg ">
            <img src="./images/wall.jpg" alt="Brick Board" className="w-full h-full rounded-lg" />
          </div>
          <div className="absolute inset-0 p-4">
            <img src="./images/board.jpg" alt="Snake Ladder Board" className="w-full h-full rounded-lg" />

            
            <img src="./images/dice_16462602.png" alt="Dice" className="w-16 h-16 mt-7 absolute right-3" />        
          
          </div>


        </div>


      </div>
    </div>
  );
};

export default GameBoard;












