

import React, { useState } from 'react';
import "./PlayerName.css";

const PlayerName = ({ setPage, playerCount }) => {
  // Create an array of input fields with unique images based on the selected player count
  const [inputFields, setInputFields] = useState(
    Array.from({ length: playerCount }, (_, index) => ({
      id: index + 1,
      value: '',
      image: `./images/bird-${index + 1}.webp`, // Unique image for each input field
    }))
  );

  const handleInputChange = (id, value) => {
    const updatedFields = inputFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setInputFields(updatedFields);
  };

  return (
    <div
      className="playername flex flex-col items-center justify-center min-h-screen w-full bg-80% bg-center border-8 border-black rounded-4xl p-6 shadow-xl"
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
        <h2 className="text-4xl font-black text-center mb-8">PLAYER NAME</h2>
        <form className="flex flex-col gap-1">
          {inputFields.map((field) => (
            <div key={field.id} className="flex items-center gap-1 p-6">
              <img
                src={field.image} // Use the unique image for each input field
                alt={`Player ${field.id}`}
                className="w-15 h-15"
              />
              <input
                type="text"
                placeholder={`Player ${field.id}`}
                className="px-4 py-2 border rounded-lg text-black w-64 "
                value={field.value}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setPage('gameMode')}
              className="text-xl text-black font-bold  hover:text-gray-800 cursor-pointer"
            > PREV

             </button>
            <button
              type="button"
              onClick={() => setPage('selectLevel')}
              className="text-xl text-black font-bold  hover:text-gray-800 cursor-pointer"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 flex gap-4">
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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

export default PlayerName;








