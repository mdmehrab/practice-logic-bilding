import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const MAX_VALUE = 17;
  const MIN_VALUE = 0;

  const hendelIncrementCount = () => {
    if (count < MAX_VALUE) {
      setCount(count + 1);
    }
  };

  const hendeldcount = () => {
    if (count > MIN_VALUE) {
      setCount(count - 1);
    }
  };

  const hendelCCount = () => {
    setCount(0);
  };

  const getMassage = () => {
    if (count === MAX_VALUE) return "Maximum value reached";
    if (count === MIN_VALUE) return "Minimum value reached";
    return "";
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen">
        <div className="bg-slate-400 text-white p-3 m-2">
          <p className="bg-zinc-600 p-1 m-2">{`${count}`}</p>
          <p className="bg-gray-500 p-1 m-2">{getMassage()}</p>

          <div>
            <button className="bg-black p-1 m-2" onClick={hendelIncrementCount}>
              increment +
            </button>
            <button className="bg-black p-1 m-2" onClick={hendeldcount}>
              decrement -
            </button>
          </div>
          <button className="bg-red-600 p-1 m-2" onClick={hendelCCount}>
            clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Count;
