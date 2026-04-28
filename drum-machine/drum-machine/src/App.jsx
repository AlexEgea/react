import React, { useEffect, useState } from "react";

const pads = [
  {
    key: "Q",
    id: "Heater-1",
    name: "Heater 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    key: "W",
    id: "Heater-2",
    name: "Heater 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    key: "E",
    id: "Heater-3",
    name: "Heater 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    key: "A",
    id: "Heater-4",
    name: "Heater 4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    key: "S",
    id: "Clap",
    name: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    key: "D",
    id: "Open-HH",
    name: "Open HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    key: "Z",
    id: "Kick-n-Hat",
    name: "Kick n Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "X",
    id: "Kick",
    name: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "C",
    id: "Closed-HH",
    name: "Closed HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

function App() {
  const [display, setDisplay] = useState("Pulsa una tecla");

  const playSound = (pad) => {
    const audio = document.getElementById(pad.key);

    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(pad.name);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key.toUpperCase();
      const pad = pads.find((item) => item.key === pressedKey);

      if (pad) {
        playSound(pad);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main id="drum-machine">
      <section className="machine-card">
        <div className="header">
          <h1>Batería Electrónica</h1>
          <p>Haz clic o usa las teclas Q W E A S D Z X C</p>
        </div>

        <div id="display">{display}</div>

        <div className="pads">
          {pads.map((pad) => (
            <button
              key={pad.key}
              id={pad.id}
              className="drum-pad"
              onClick={() => playSound(pad)}
            >
              {pad.key}
              <audio id={pad.key} className="clip" src={pad.src}></audio>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;