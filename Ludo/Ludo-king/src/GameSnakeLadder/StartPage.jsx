
import React from 'react';
import "./StartPage.css";

const StartPage = ({ setPage }) => {
  return (
    <div
      className="startpage flex flex-col items-center justify-center min-h-screen w-full bg-80% bg-center border-8 border-black rounded-4xl p-6 shadow-xl md:w-full lg:w-full relative"
      style={{ backgroundImage: "url('./images/green-background.avif')" }}
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

      <img 
        src="./images/snake&ladders.png" 
        alt="Snakes & Ladders" 
        className="w-88 mb-6 bg-transparent snake-ladder-animation" 
      />

      <button onClick={() => setPage('gameMode')} className="focus:outline-none rounded-xl w-25">
        <img src="./images/playbutton.png" alt="PLAY" className="w-30 hover:scale-110 transition-transform duration-300 rounded-xl" />
      </button>
    </div>
  );
};

export default StartPage;