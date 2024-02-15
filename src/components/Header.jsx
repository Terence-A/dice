import React from "react";

const Header = () => {
  return (
    <section className="bg-stone-950 flex justify-between items-center px-10 py-4 shadow-md ">
      <h1 className="text-5xl font-bold text-stone-200">Dice to 9000</h1>
      <div className="text-stone-50 w-48 flex justify-between font-bold">
        <button className="hover:text-stone-300">Rules</button>
        <button className="hover:text-stone-300">Scoring Combos</button>
      </div>
    </section>
  );
};

export default Header;
