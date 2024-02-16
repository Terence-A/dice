import "./App.css";
import DiceBoard from "./components/DiceBoard";
import Header from "./components/Header";
import RollOptions from "./components/RollOptions";

function App() {
  return (
    <main className="h-screen bg-stone-300">
      <Header />
      <DiceBoard />
    </main>
  );
}

export default App;
