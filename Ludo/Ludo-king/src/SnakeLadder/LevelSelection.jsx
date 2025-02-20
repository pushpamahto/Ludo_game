import React from 'react';

const LevelSelection = ({ onSelectLevel }) => (
<div className="flex flex-col items-center">
<h2 className="text-2xl mb-4">Select Difficulty Level</h2>

<form onSubmit={onSelectLevel}>
<input type="radio" id="level1" name="level" value="E" defaultChecked />
<label htmlFor="level1">Easy</label>
<input type="radio" id="level2" name="level" value="M"/>
<label htmlFor="level2">Medium</label>
<input type="radio" id="level3" name="level" value="H"/>
<label htmlFor ="level3">Hard</label>

<button type ="submit"className =
"bg-blue-500 text-white p-2 rounded mt-4">Start Game</button>
</form>
</div>
);

export default LevelSelection;
