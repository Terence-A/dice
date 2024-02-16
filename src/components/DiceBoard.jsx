import diceData from "../diceData";
import { useState } from "react";
import RollOptions from "./RollOptions";

const DiceBoard = () => {
  const [diceRolled, setDiceRolled] = useState({
    firstDie: Math.floor(Math.random() * 5),
    secondDie: Math.floor(Math.random() * 5),
    thirdDie: Math.floor(Math.random() * 5),
    forthDie: Math.floor(Math.random() * 5),
    fifthDie: Math.floor(Math.random() * 5),
  });

  const handleKeepDie = (e) => {
    console.log(e + 1);
  };

  return (
    <>
      <section className="flex justify-center mt-28 bg-green-700 w-[500px] px-6 pb-6 pt-28  m-auto rounded-2xl border-4 border-stone-950 shadow-lg shadow-stone-900">
        <button onClick={() => handleKeepDie(diceRolled.firstDie)}>
          <img
            className="w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg"
            src={diceData[diceRolled.firstDie].image}
            alt="Dice One"
          />
        </button>
        <button onClick={() => handleKeepDie(diceRolled.secondDie)}>
          <img
            className="w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg"
            src={diceData[diceRolled.secondDie].image}
            alt="Dice One"
          />
        </button>
        <button onClick={() => handleKeepDie(diceRolled.thirdDie)}>
          <img
            className="w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg"
            src={diceData[diceRolled.thirdDie].image}
            alt="Dice One"
          />
        </button>
        <button onClick={() => handleKeepDie(diceRolled.forthDie)}>
          <img
            className="w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg"
            src={diceData[diceRolled.forthDie].image}
            alt="Dice One"
          />
        </button>
        <button onClick={() => handleKeepDie(diceRolled.fifthDie)}>
          <img
            className="w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg"
            src={diceData[diceRolled.fifthDie].image}
            alt="Dice One"
          />
        </button>
      </section>
      <RollOptions setDiceRolled={setDiceRolled} />
    </>
  );
};

export default DiceBoard;
