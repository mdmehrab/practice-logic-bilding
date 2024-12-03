import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handelAdd = () => {
    setCounter(counter + 1);
  };

  const handeldelite = () => {
    if (counter > 0) setCounter(counter - 1);
    else {
      setCounter(0);
    }
  };

  const handelReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="bg-slate-300 ">
        <div className="flex flex-wrap gap-3 items-center justify-center w-screen mt-5">
          <p>counter :</p>
          <p> {counter}</p>
        </div>
        <div className="flex items-center justify-center w-screen gap-3">
          <button className="text-white bg-black p-1 mt-3" onClick={handelAdd}>
            incrise counter
          </button>
          <button
            className="text-white bg-black p-1 mt-3"
            onClick={handeldelite}
          >
            decrise counter
          </button>
        </div>

        <div className="flex items-center justify-center w-screen ">
          <button
            className="text-red-600 bg-slate-400 p-1 m-3"
            onClick={handelReset}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
