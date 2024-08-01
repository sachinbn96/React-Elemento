import { useEffect, useRef, useState } from "react";
import MainNavigation from "./MainNavigation";

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // in milliseconds
  const startTimeRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime(timeInMiliSec) {
    const hours = Math.floor(timeInMiliSec / (1000 * 60 * 60));
    const minutes = Math.floor((timeInMiliSec / (1000 * 60)) % 60);
    const seconds = Math.floor((timeInMiliSec / 1000) % 60);
    const milliseconds = Math.floor(timeInMiliSec % 1000);

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <>
      <MainNavigation />
      <div>
        <div className="flex justify-center  ">
          <h1 className=" border-2 p-3 mb-2 mx-96 border-red-600">
            {formatTime(elapsedTime)}
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
            className="border-2 p-2 mx-1 border-neutral-700"
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
    </>
  );
}
