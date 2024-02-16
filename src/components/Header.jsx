import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const Header = () => {
  const [showRules, setShowRules] = useState(false);
  const dialog = useRef();

  const handleRulesClick = () => {
    setShowRules(true);
    dialog.current.showModal();
  };
  return (
    <>
      <ResultModal ref={dialog} setShowRules={setShowRules} />
      <section className="bg-stone-950 flex justify-between items-center px-10 py-4 shadow-md shadow-stone-600 ">
        <h1 className="text-5xl font-bold text-stone-200">Dice to 9000</h1>
        <div className="text-stone-50 w-48 flex justify-between font-bold">
          <button className="hover:text-stone-300" onClick={handleRulesClick}>
            Rules
          </button>
          <button className="hover:text-stone-300">Scoring Combos</button>
        </div>
      </section>
    </>
  );
};

export default Header;
