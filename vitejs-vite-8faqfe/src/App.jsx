import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
    setTimerMinutes(inputMinutes);
    setTimerSeconds(inputSeconds);
    setInputMinutes(0);
    setInputSeconds(0);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimerMinutes(0);
    setTimerSeconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setTimerSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            setTimerMinutes((prevMinutes) => Math.max(0, prevMinutes - 1));
            return 59;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning, timerMinutes, timerSeconds]);

  return (
    <div className="timer">
      <div className="time">
        {`${String(timerMinutes).padStart(2, '0')}:${String(
          timerSeconds
        ).padStart(2, '0')}`}
      </div>
      <div className="inputs">
        <label>
          Minutes:
          <input
            type="number"
            value={inputMinutes}
            onChange={(e) =>
              setInputMinutes(Math.max(0, parseInt(e.target.value, 10)))
            }
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            value={inputSeconds}
            onChange={(e) =>
              setInputSeconds(Math.max(0, parseInt(e.target.value, 10)))
            }
          />
        </label>
      </div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={stopTimer}>Stop</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
