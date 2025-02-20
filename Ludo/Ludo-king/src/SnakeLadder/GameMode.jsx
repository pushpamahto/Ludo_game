import React from 'react';

const GameMode = ({ onSelectMode }) => (
<div className="flex flex-col items-center">
<h2 className="text-2xl mb-4 text-black">Select Game Mode</h2>

<form onSubmit={onSelectMode}>
<input type="radio" id="mode1" name="mode" value="1" defaultChecked />
<label htmlFor="mode1">Single Player</label>
<input type="radio" id="mode2" name="mode" value="2" />
<label htmlFor="mode2">Two Players</label>
<input type="radio" id="mode3" name="mode" value="3" />
<label htmlFor="mode3">Three Players</label>
<input type="radio" id="mode4" name="mode" value="4" />
<label htmlFor="mode4">Four Players</label>

<button type="submit" className="bg-blue-500 text-black p-2 rounded mt-4">Next</button>
</form>
</div>
);

export default GameMode;
