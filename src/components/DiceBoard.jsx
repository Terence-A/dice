import diceOne from "../assets/diceOne.png";
import diceTwo from "../assets/diceTwo.png";
import diceThree from "../assets/diceThree.png";
import diceFour from "../assets/diceFour.png";
import diceFive from "../assets/diceFive.png";
import diceSix from "../assets/diceSix.png";

const DiceBoard = () => {
  return (
    <section className="flex justify-center mt-28 bg-green-700 w-[500px] px-6 pb-6 pt-28  m-auto rounded-2xl border-4 border-stone-950 shadow-lg shadow-stone-900">
      <button>
        <img className="w-16 h-16 mx-2" src={diceOne} alt="Dice One" />
      </button>
      <button>
        <img className="w-16 h-16 mx-2" src={diceOne} alt="Dice One" />
      </button>
      <button>
        <img className="w-16 h-16 mx-2" src={diceOne} alt="Dice One" />
      </button>
      <button>
        <img className="w-16 h-16 mx-2" src={diceOne} alt="Dice One" />
      </button>
      <button>
        <img className="w-16 h-16 mx-2" src={diceOne} alt="Dice One" />
      </button>
    </section>
  );
};

export default DiceBoard;
