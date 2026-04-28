const { createRoot } = ReactDOM;

function App() {
  const [ideas, setIdeas] = React.useState([
    "Crear una app de recetas",
    "Aprender más sobre APIs",
    "Construir un portfolio profesional",
  ]);

  const [inputValue, setInputValue] = React.useState("");

  function handleAddIdea() {
    if (!inputValue.trim()) return;

    setIdeas((prevIdeas) => [...prevIdeas, inputValue]);
    setInputValue("");
  }

  function handleDeleteIdea(indexToDelete) {
    setIdeas((prevIdeas) =>
      prevIdeas.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <main className="app">
      <section className="container">
        <span className="tag">React Mini Project</span>

        <h1>Inspiration Board</h1>

        <p className="description">
          Añade y elimina ideas dinámicamente. Proyecto para practicar manejo de
          arrays en estado, eventos y renderizado con React.
        </p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Escribe una idea..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button onClick={handleAddIdea}>Añadir</button>
        </div>

        <ul className="ideas-list">
          {ideas.map((idea, index) => (
            <li key={index} className="idea-item">
              <span>{idea}</span>
              <button onClick={() => handleDeleteIdea(index)}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);