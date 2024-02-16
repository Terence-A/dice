import "./App.css";
import CurrentScore from "./components/CurrentScore";
import DiceBoard from "./components/DiceBoard";
import Header from "./components/Header";
import HighScores from "./components/HighScores";

function App() {
  return (
    <main className="h-screen bg-stone-300">
      <Header />

      <div className="flex justify-between items-center mx-32">
        <HighScores />
        <DiceBoard />
        <CurrentScore />
      </div>
    </main>
  );
}

export default App;
