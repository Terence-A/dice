const RollOptions = ({
  setDiceRolled,
  setDiceKept,
  setTurns,
  turns,
  currentScore,
  setCurrentScore,
}) => {
  const handleRollClick = () => {
    setDiceRolled({
      firstDie: Math.floor(Math.random() * 5),
      secondDie: Math.floor(Math.random() * 5),
      thirdDie: Math.floor(Math.random() * 5),
      forthDie: Math.floor(Math.random() * 5),
      fifthDie: Math.floor(Math.random() * 5),
    });

    setDiceKept({
      keepOne: false,
      keepTwo: false,
      keepThree: false,
      keepFour: false,
      keepFive: false,
    });
  };

  const handleTakeScore = () => {
    setTurns(turns + 1);
  };

  return (
    <section>
      <div
        className="flex
        w-[500px] 
        mx-auto 
        justify-between 
        pt-11"
      >
        <button
          className="text-3xl
         text-green-100 
         w-48 
         bg-green-900
          hover:bg-green-700
           font-bold 
           px-8 
           py-4 
           border-4
            border-stone-900
             rounded-xl
              shadow-md
               hover:shadow-lg
                hover:shadow-stone-900
                 hover:text-green-100
                  shadow-stone-900"
          onClick={handleRollClick}
        >
          Roll
        </button>

        <button
          className="text-3xl w-48  text-stone-50 bg-red-900 hover:bg-red-700 border-4 border-stone-900 font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-stone-900 shadow-stone-900"
          onClick={handleTakeScore}
        >
          Take It
        </button>
      </div>
    </section>
  );
};

export default RollOptions;
