import { useState } from "react";

import "./App.css";
import CurrentScore from "./components/CurrentScore";
import DiceBoard from "./components/DiceBoard";
import Header from "./components/Header";
import HighScores from "./components/HighScores";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [turns, setTurns] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  return (
    <main className="h-screen bg-stone-300">
      <Header />
      <h1 className="mt-8 text-center text-5xl font-bold text-stone-900">
        Status: Not in
      </h1>
      <div className="flex justify-between items-center mx-32">
        <HighScores />
        <DiceBoard
          setTurns={setTurns}
          turns={turns}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
        <CurrentScore
          turns={turns}
          currentScore={currentScore}
          totalScore={totalScore}
        />
      </div>
    </main>
  );
}

export default App;
