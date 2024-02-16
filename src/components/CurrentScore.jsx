const CurrentScore = () => {
  return (
    <aside className="border-4 border-stone-900 rounded-xl h-72 px-12 flex flex-col bg-yellow-100 shadow-lg shadow-stone-600">
      <h2 className="mt-6 text-center">Current Score: </h2>
      <p className=" bg-stone-400 mt-2 font-bold text-2xl text-center rounded-md">
        0
      </p>
      <h2 className="mt-2 text-center">Turns: </h2>
      <p className=" bg-stone-400 mt-2 font-bold text-2xl text-center  rounded-md">
        6
      </p>
      <h2 className="mt-2 text-center">Total Score: </h2>
      <p className=" bg-stone-400 mt-2 font-bold text-4xl text-center rounded-md">
        9000
      </p>
    </aside>
  );
};

export default CurrentScore;
