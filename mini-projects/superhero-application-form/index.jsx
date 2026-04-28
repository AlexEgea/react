const { createRoot } = ReactDOM;

function App() {
  const [heroName, setHeroName] = React.useState("");
  const [realName, setRealName] = React.useState("");
  const [powerSource, setPowerSource] = React.useState("");
  const [powers, setPowers] = React.useState([]);

  function handleCheckboxChange(e) {
    const { value, checked } = e.target;

    setPowers((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((power) => power !== value)
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert(`
Hero: ${heroName}
Real Name: ${realName}
Power Source: ${powerSource}
Powers: ${powers.join(", ")}
    `);
  }

  const isDisabled =
    !heroName || !realName || !powerSource || powers.length === 0;

  return (
    <main className="app">
      <form
        className="form"
        method="post"
        action="https://superhero-application-form.freecodecamp.org"
        onSubmit={handleSubmit}
      >
        <span className="tag">React Mini Project</span>

        <h1>Superhero Application</h1>

        <p className="description">
          Completa el formulario para unirte a la liga de superhéroes.
        </p>

        <input
          type="text"
          placeholder="Hero Name"
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Real Name"
          value={realName}
          onChange={(e) => setRealName(e.target.value)}
        />

        <select
          value={powerSource}
          onChange={(e) => setPowerSource(e.target.value)}
        >
          <option value="">Select Power Source</option>
          <option value="mutation">Mutation</option>
          <option value="technology">Technology</option>
          <option value="magic">Magic</option>
        </select>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="strength"
              onChange={handleCheckboxChange}
            />
            Strength
          </label>

          <label>
            <input
              type="checkbox"
              value="flight"
              onChange={handleCheckboxChange}
            />
            Flight
          </label>

          <label>
            <input
              type="checkbox"
              value="invisibility"
              onChange={handleCheckboxChange}
            />
            Invisibility
          </label>
        </div>

        <button className="submit-btn" type="submit" disabled={isDisabled}>
          Join the League
        </button>
      </form>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);