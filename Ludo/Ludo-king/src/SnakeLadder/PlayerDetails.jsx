import React from 'react';

const PlayerDetails = ({ onSubmit }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-2xl mb-4">Enter Player Names</h2>
    
    <form onSubmit={onSubmit}>
      {/* Input fields for player names */}
      <button type="submit" className="bg-blue-500 text-black p-2 rounded">Next</button>
    </form>
  </div>
);

export default PlayerDetails;
