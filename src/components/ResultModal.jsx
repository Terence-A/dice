import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ setShowRules }, ref) {
  const handleClick = () => {
    setShowRules(false);
  };
  return (
    <dialog
      className="mt-48 w-96 shadow-lg shadow-stone-600 rounded-lg p-4 text-xs"
      ref={ref}
    >
      <h2 className="font-bold mb-2 text-lg">Rules</h2>
      <ul>
        <li className="mb-1">
          <p className="font-semibold">- Roll all 5 dice</p>
        </li>
        <li className="mb-1">
          <p className="font-semibold">
            - After each roll, set aside any dice that score points. You must
            set aside at least one scoring die per roll to keep rolling.
          </p>
        </li>
        <li className="mb-1">
          <p className="font-semibold">
            - You can choose to end your turn and bank your points at any time,
            or continue rolling the remaining dice.
          </p>
        </li>
        <li className="mb-1">
          <p className="font-semibold">
            - If all five dice score points in a single roll, you get to roll
            all five again (this is called a "hot dice").
          </p>
        </li>
        <li className="mb-6">
          <p className="font-semibold">
            - If you ever roll and none of the dice score points you lose all
            points accumulated in that turn.
          </p>
        </li>
      </ul>
      <form method="dialog">
        <button
          className="bg-stone-800 px-4 py-1 text-stone-50 font-bold text-xl rounded-md float-right hover:bg-stone-900"
          onClick={handleClick}
        >
          Close
        </button>
      </form>
    </dialog>
  );
});

export default ResultModal;
