import { useEffect, useState, useRef } from "react";
import MainNavigation from "./MainNavigation";

export default function Timer() {
  //   const timeInMilliSec = 1 * 24 * 60 * 60 * 1000; // 1 day in ms
  const timeInMilliSec = 10 * 1000; // 1 day in ms
  const [timerTime, setTimerTime] = useState(timeInMilliSec);
  const [started, setStarted] = useState(false);
  const intervalRef = useRef(null);
  if (timerTime === 0) {
    clearInterval(intervalRef.current);
  }
  useEffect(() => {
    if (started) {
      intervalRef.current = setInterval(() => {
        setTimerTime((prev) => prev - 1000);
      }, 1000);
    }
    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [started]);

  function handleStart() {
    setStarted(true);
  }

  function handleStop() {
    setStarted(false);
  }

  function handleReset() {
    setStarted(false);
    setTimerTime(timeInMilliSec);
  }

  function formatTime(timeInMiliSec) {
    const days = Math.floor((timeInMiliSec / (1000 * 60 * 60 * 24)) % 24);
    const hours = Math.floor((timeInMiliSec / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeInMiliSec / (1000 * 60)) % 60);
    const seconds = Math.floor((timeInMiliSec / 1000) % 60);

    return `${days} d : ${hours} h : ${minutes} m : ${seconds} s`;
  }

  return (
    <div>
      <MainNavigation />
      <div className="flex justify-center">
        <h1 className=" border-2 p-3 mb-2 mx-96 border-red-600">
          {formatTime(timerTime)}
        </h1>
      </div>
      <div className="flex justify-center">
        <button
          className="border-2 p-2 mx-4 border-neutral-700"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="border-2 p-2 mx-4 border-neutral-700"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="border-2 p-2 mx-4 border-neutral-700"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
