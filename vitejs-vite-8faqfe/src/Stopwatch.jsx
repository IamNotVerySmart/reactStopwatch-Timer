import React, { useState, useEffect } from 'react';
import './App.css';

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  return (
    <div className="stopwatch">
      <div className="time">
        {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(
          2,
          '0'
        )}:${String(seconds).padStart(2, '0')}`}
      </div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={startStopwatch}>Start</button>
        ) : (
          <button onClick={stopStopwatch}>Pause</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;