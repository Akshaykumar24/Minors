import React, { useRef, useState } from "react";

const Timer = () => {
  const [c, setC] = useState(0);
  const [run, setRun] = useState(false);
  const ref = useRef();

  const startTimer = () => {
    console.log(ref);
    if (run === false) {
      setRun(true);
      ref.current = setInterval(() => setC((p) => p + 1), 1000);
    }
  };
  const stopTimer = () => {
    console.log(ref.current);
    setRun(false);
    clearTimeout(ref.current);
  };
  const resetTimer = () => {
    stopTimer();
    setC(0);
  };
  return (
    <div>
      <h1>Timer</h1>
      <h2>{c}</h2>
      <button
        className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-center py-2 px-4 rounded m-4"
        onClick={startTimer}
      >
        Start
      </button>
      <button
        className="bg-black hover:bg-gray-500 text-white text-center py-2 px-4 rounded-full m-4"
        onClick={stopTimer}
      >
        Stop
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-400 border-b-4 border-yellow-700 hover:border-yellow-500 text-white text-center py-2 px-4 rounded m-4"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
