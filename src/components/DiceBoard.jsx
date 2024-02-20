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

  let diceOneClass =
    "w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg  ";
  if (diceKept.keepOne === true) {
    diceOneClass += " -translate-y-24";
  }

  let diceTwoClass =
    "w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg  ";
  if (diceKept.keepTwo === true) {
    diceTwoClass += " -translate-y-24";
  }

  let diceThreeClass =
    "w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg  ";
  if (diceKept.keepThree === true) {
    diceThreeClass += " -translate-y-24";
  }

  let diceFourClass =
    "w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg  ";
  if (diceKept.keepFour === true) {
    diceFourClass += " -translate-y-24";
  }

  let diceFiveClass =
    "w-16 h-16 mx-2 shadow-md hover:shadow-stone-800 rounded-lg  ";
  if (diceKept.keepFive === true) {
    diceFiveClass += " -translate-y-24";
  }

  const [diceRolled, setDiceRolled] = useState({
    firstDie: Math.floor(Math.random() * 5),
    secondDie: Math.floor(Math.random() * 5),
    thirdDie: Math.floor(Math.random() * 5),
    forthDie: Math.floor(Math.random() * 5),
    fifthDie: Math.floor(Math.random() * 5),
  });

  const handleKeepDieOne = (e, rolled) => {
    console.log(e);
    setDiceKept((prevState) => ({
      ...prevState,
      [rolled]: !prevState[rolled],
    }));
  };

  const handleKeepDieTwo = (e, rolled) => {
    console.log(e);
    setDiceKept((prevState) => ({
      ...prevState,
      [rolled]: !prevState[rolled],
    }));
  };

  const handleKeepDieThree = (e, rolled) => {
    console.log(e);
    setDiceKept((prevState) => ({
      ...prevState,
      [rolled]: !prevState[rolled],
    }));
  };

  const handleKeepDieFour = (e, rolled) => {
    console.log(e);
    setDiceKept((prevState) => ({
      ...prevState,
      [rolled]: !prevState[rolled],
    }));
  };

  const handleKeepDieFive = (e, rolled) => {
    console.log(e);
    setDiceKept((prevState) => ({
      ...prevState,
      [rolled]: !prevState[rolled],
    }));
  };

  return (
    <div className="relative">
      <section className="flex justify-center mt-9 bg-green-700 w-[500px] h-48 px-6 pb-6 pt-28  rounded-2xl  shadow-lg shadow-stone-900  ">
        <button
          onClick={() => handleKeepDieOne(diceRolled.firstDie + 1, "keepOne")}
        >
          <img
            className={diceOneClass}
            src={diceData[diceRolled.firstDie].image}
            alt="Dice One"
          />
        </button>

        <button
          onClick={() => handleKeepDieTwo(diceRolled.secondDie + 1, "keepTwo")}
        >
          <img
            className={diceTwoClass}
            src={diceData[diceRolled.secondDie].image}
            alt="Dice One"
          />
        </button>

        <button
          onClick={() =>
            handleKeepDieThree(diceRolled.thirdDie + 1, "keepThree")
          }
        >
          <img
            className={diceThreeClass}
            src={diceData[diceRolled.thirdDie].image}
            alt="Dice One"
          />
        </button>

        <button
          onClick={() => handleKeepDieFour(diceRolled.forthDie + 1, "keepFour")}
        >
          <img
            className={diceFourClass}
            src={diceData[diceRolled.forthDie].image}
            alt="Dice One"
          />
        </button>

        <button
          onClick={() => handleKeepDieFive(diceRolled.fifthDie + 1, "keepFive")}
        >
          <img
            className={diceFiveClass}
            src={diceData[diceRolled.fifthDie].image}
            alt="Dice One"
          />
        </button>
      </section>
      <RollOptions setDiceRolled={setDiceRolled} setDiceKept={setDiceKept} />
    </div>
  );
};

export default DiceBoard;
