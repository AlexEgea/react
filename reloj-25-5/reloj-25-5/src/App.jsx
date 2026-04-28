import React, { useEffect, useRef, useState } from 'react';

const DEFAULT_BREAK_LENGTH = 5;
const DEFAULT_SESSION_LENGTH = 25;

function App() {
  const [breakLength, setBreakLength] = useState(DEFAULT_BREAK_LENGTH);
  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION_LENGTH);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_SESSION_LENGTH * 60);
  const [timerType, setTimerType] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  const beepRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  const playBeep = () => {
    if (beepRef.current) {
      beepRef.current.currentTime = 0;
      beepRef.current.play();
    }
  };

  const stopBeep = () => {
    if (beepRef.current) {
      beepRef.current.pause();
      beepRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((previousTime) => {
          if (previousTime === 0) {
            playBeep();

            if (timerType === 'Session') {
              setTimerType('Break');
              return breakLength * 60;
            }

            setTimerType('Session');
            return sessionLength * 60;
          }

          return previousTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timerType, breakLength, sessionLength]);

  const handleBreakDecrement = () => {
    if (!isRunning && breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const handleBreakIncrement = () => {
    if (!isRunning && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleSessionDecrement = () => {
    if (!isRunning && sessionLength > 1) {
      const newSessionLength = sessionLength - 1;
      setSessionLength(newSessionLength);

      if (timerType === 'Session') {
        setTimeLeft(newSessionLength * 60);
      }
    }
  };

  const handleSessionIncrement = () => {
    if (!isRunning && sessionLength < 60) {
      const newSessionLength = sessionLength + 1;
      setSessionLength(newSessionLength);

      if (timerType === 'Session') {
        setTimeLeft(newSessionLength * 60);
      }
    }
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setBreakLength(DEFAULT_BREAK_LENGTH);
    setSessionLength(DEFAULT_SESSION_LENGTH);
    setTimeLeft(DEFAULT_SESSION_LENGTH * 60);
    setTimerType('Session');
    stopBeep();
  };

  return (
    <main className="app">
      <section className="clock-card">
        <h1>Reloj 25 + 5</h1>
        <p className="subtitle">Temporizador de concentración estilo Pomodoro</p>

        <div className="length-controls">
          <div className="control-box">
            <h2 id="break-label">Break Length</h2>

            <div className="buttons-row">
              <button id="break-decrement" onClick={handleBreakDecrement}>
                −
              </button>

              <span id="break-length">{breakLength}</span>

              <button id="break-increment" onClick={handleBreakIncrement}>
                +
              </button>
            </div>
          </div>

          <div className="control-box">
            <h2 id="session-label">Session Length</h2>

            <div className="buttons-row">
              <button id="session-decrement" onClick={handleSessionDecrement}>
                −
              </button>

              <span id="session-length">{sessionLength}</span>

              <button id="session-increment" onClick={handleSessionIncrement}>
                +
              </button>
            </div>
          </div>
        </div>

        <section className={`timer ${timerType === 'Break' ? 'break-mode' : ''}`}>
          <h2 id="timer-label">{timerType}</h2>
          <div id="time-left">{formatTime(timeLeft)}</div>
        </section>

        <div className="main-buttons">
          <button id="start_stop" onClick={handleStartStop}>
            {isRunning ? 'Pausar' : 'Iniciar'}
          </button>

          <button id="reset" onClick={handleReset}>
            Reiniciar
          </button>
        </div>

        <audio
          id="beep"
          ref={beepRef}
          preload="auto"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
        />
      </section>
    </main>
  );
}

export default App;