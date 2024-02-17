import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
import ScoreCombosDialog from "./ScoreCombosDialog";

const Header = () => {
  const [showRules, setShowRules] = useState(false);
  const [showScoringCombos, setShowScoringCombos] = useState(false);
  const rulesDialog = useRef();
  const scoresDialog = useRef();

  const handleRulesClick = () => {
    setShowRules(true);
    rulesDialog.current.showModal();
  };

  const handleScoresCombosClick = () => {
    setShowScoringCombos(true);
    scoresDialog.current.showModal();
  };

  return (
    <>
      <ResultModal ref={rulesDialog} setShowRules={setShowRules} />
      <ScoreCombosDialog
        ref={scoresDialog}
        setShowScoringCombos={setShowScoringCombos}
      />
      <section className="bg-stone-950 flex justify-between items-center px-10 py-4 shadow-md shadow-stone-600 ">
        <h1 className="text-5xl font-bold text-stone-200">Dice to 9000</h1>
        <div className="text-stone-50 w-48 flex justify-between font-bold">
          <button className="hover:text-stone-300" onClick={handleRulesClick}>
            Rules
          </button>
          <button
            className="hover:text-stone-300"
            onClick={handleScoresCombosClick}
          >
            Scoring Combos
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
