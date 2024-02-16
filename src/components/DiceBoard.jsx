import diceData from "../diceData";
import { useState } from "react";
import RollOptions from "./RollOptions";

const DiceBoard = () => {
  const [diceKept, setDiceKept] = useState({
    keepOne: false,
    keepTwo: false,
    keepThree: false,
    keepFour: false,
    keepFive: false,
  });

  const [diceRolled, setDiceRolled] = useState({
    firstDie: Math.floor(Math.random() * 5),
    secondDie: Math.floor(Math.random() * 5),
    thirdDie: Math.floor(Math.random() * 5),
    forthDie: Math.floor(Math.random() * 5),
    fifthDie: Math.floor(Math.random() * 5),
  });

  const handleKeepDieOne = (e, rolled) => {
    console.log(e + 1);
    setDiceKept((prevState) => ({
      ...prevState,
      [rolled]: true,
    }));
  };

  return (
    <div>
      <section className="flex justify-center mt-9 bg-green-700 w-[500px] px-6 pb-6 pt-28  rounded-2xl border-4 border-stone-950 shadow-lg shadow-stone-900 ">
        <button
          onClick={() => handleKeepDieOne(diceRolled.firstDie + 1, "firstDie")}
        >
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
      <RollOptions setDiceRolled={setDiceRolled} diceKept={diceKept} />
    </div>
  );
};

export default DiceBoard;
