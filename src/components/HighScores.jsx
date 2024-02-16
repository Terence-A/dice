const HighScores = () => {
  return (
    <aside className="border-4 border-stone-900 rounded-xl h-56 w-48 flex flex-col shadow-lg shadow-stone-600 bg-yellow-50 px-1">
      <h1 className="mt-7 text-center">Highscores:</h1>
      <ul>
        <li className=" mt-2 flex justify-around rounded-sm  bg-stone-400 py-1">
          <p className="text-sm font-bold ">Player 1</p>
          <p className="text-sm">Turns: 33</p>
        </li>
        <li className=" mt-2 flex justify-around rounded-sm  bg-stone-400 py-1">
          <p className="text-sm font-bold ">Player 2</p>
          <p className="text-sm">Turns: 36</p>
        </li>
      </ul>
    </aside>
  );
};

export default HighScores;
