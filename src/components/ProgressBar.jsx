import { useEffect, useState } from "react";
import MainNavigation from "./MainNavigation";

export default function ProgressBar() {
  const [started, setStarted] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  function handleClickStart() {
    setStarted((prev) => !prev);
  }

  function handleClickReset() {
    setStarted(false);
    setProgressValue(0);
  }

  useEffect(() => {
    let timer;
    if (started) {
      timer = setInterval(() => {
        setProgressValue((prev) => (prev < 100 ? prev + 1 : prev));
      }, 10);
    } else clearInterval(timer);

    return () => {
      clearInterval(timer);
    };
  }, [started]);

  return (
    <>
      <MainNavigation />
      <h1 className="mb-4">Progress Bar using progress HTML tag!!</h1>
      <progress value={progressValue} max="100" />
      {progressValue < 100 && (
        <button onClick={handleClickStart}>{started ? "Stop" : "Start"}</button>
      )}
      {progressValue >= 100 && (
        <button onClick={handleClickReset}>Reset</button>
      )}
      <h1 className="mb-4 mt-10">Progress bar from scratch</h1>
      <div class="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="bg-blue-600 text-xs font-medium w-1/2 text-blue-100 text-center p-0.5 leading-none rounded-full"
          //   style={{width: 45%}}
        >
          {" "}
          45%
        </div>
      </div>
    </>
  );
}
