const { createRoot } = ReactDOM;

function App() {
  const [isVisible, setIsVisible] = React.useState(false);

  function handleToggleVisibility() {
    setIsVisible((prevValue) => !prevValue);
  }

  return (
    <main className="app">
      <section className="card">
        <span className="tag">React Mini Project</span>

        <h1>Toggle Visibility</h1>

        <p className="description">
          Proyecto para practicar eventos, estado con useState y renderizado
          condicional en React.
        </p>

        <button className="toggle-btn" onClick={handleToggleVisibility}>
          {isVisible ? "Hide" : "Show"} Message
        </button>

        {isVisible && (
          <div className="message-box">
            <h2>¡Mensaje visible!</h2>
            <p>
              Este contenido aparece y desaparece dinámicamente según el estado
              del componente.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);