const RollOptions = () => {
  return (
    <section>
      <div className="flex  w-[500px] mx-auto justify-between pt-11">
        <button className="text-3xl text-stone-50 w-48 bg-green-900 hover:bg-green-700 font-bold px-8 py-4 border-4 border-stone-900 rounded-xl shadow-md hover:shadow-lg hover:shadow-stone-900 shadow-stone-900">
          Roll
        </button>
        <button className="text-3xl w-48  text-stone-50 bg-red-900 hover:bg-red-700 border-4 border-stone-900 font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-stone-900 shadow-stone-900">
          Take It
        </button>
      </div>
    </section>
  );
};

export default RollOptions;
