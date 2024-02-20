import { forwardRef } from "react";
import diceData from "../diceData";

const ScoreCombosDialog = forwardRef(function ScoreCombosDialog(
  { setShowScoringCombos },
  ref
) {
  const handleClick = () => {
    setShowScoringCombos(false);
  };

  return (
    <dialog
      ref={ref}
      className="mt-48 w-96 shadow-lg shadow-stone-600 rounded-lg p-4 text-xs backdrop:bg-stone-900/90"
    >
      <h2 className="font-bold mb-6 text-lg">Scoring Combos</h2>

      <ul>
        <li className="mb-1">
          <div className="flex items-center justify-between w-1/2">
            <img
              className="w-4 h-4 mr-2"
              src={diceData[0].image}
              alt="image of die number one"
            />
            <p className="font-semibold"> 100 points</p>
          </div>
        </li>
        <li className="mb-1">
          <div className="flex items-center justify-between w-1/2">
            <img
              className="w-4 h-4 mr-2"
              src={diceData[4].image}
              alt="image of die number one"
            />
            <p className="font-semibold">50 points</p>
          </div>
        </li>
        <li className="mb-1">
          <div className="flex items-center justify-between w-1/2">
            <div className="flex">
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
            </div>
            <p className="font-semibold"> 300 points</p>
          </div>
        </li>
        <li className="mb-1">
          <div className="flex items-center justify-between w-1/2">
            <div className="flex">
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
            </div>
            <p className="font-semibold"> 600 points</p>
          </div>
        </li>
        <li className="mb-1">
          <div className="flex items-center justify-between w-1/2">
            <div className="flex">
              <img
                className="w-4 h-4 mr-1"
                src={diceData[0].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[1].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[3].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[4].image}
                alt="image of die number one"
              />
            </div>
            <p className="font-semibold"> 1000 points</p>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex items-center justify-between w-1/2">
            <div className="flex">
              <img
                className="w-4 h-4 mr-1"
                src={diceData[1].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[2].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[3].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[4].image}
                alt="image of die number one"
              />
              <img
                className="w-4 h-4 mr-1"
                src={diceData[5].image}
                alt="image of die number one"
              />
            </div>
            <p className="font-semibold"> 500 points</p>
          </div>
        </li>
      </ul>

      <form method="dialog">
        <button
          className="float-right bg-stone-800 text-stone-50 font-bold text-xl rounded-md hover:bg-stone-900 px-4 py-1"
          onClick={handleClick}
        >
          Close
        </button>
      </form>
    </dialog>
  );
});

export default ScoreCombosDialog;
