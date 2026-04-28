const { createRoot } = ReactDOM;

function App() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setErrorMessage("");
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(
          `https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`
        );

        if (!response.ok) {
          throw new Error("No se pudieron obtener los datos.");
        }

        const data = await response.json();

        setResults(data.map((fruit) => fruit.name));
      } catch (error) {
        console.error(error);
        setErrorMessage("Ha ocurrido un error al buscar frutas.");
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <main className="app">
      <section className="container">
        <span className="tag">React Mini Project</span>

        <h1>Fruit Search App</h1>

        <p className="description">
          Busca frutas en tiempo real consumiendo una API externa. Este proyecto
          practica useEffect, fetch y debounce.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Busca una fruta... Ej: apple, pear, mango"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {isLoading && <p className="status">Buscando frutas...</p>}

        {errorMessage && <p className="error">{errorMessage}</p>}

        {!isLoading && !errorMessage && results.length > 0 && (
          <ul className="results-list">
            {results.map((fruit, index) => (
              <li key={`${fruit}-${index}`}>{fruit}</li>
            ))}
          </ul>
        )}

        {!isLoading && query && results.length === 0 && !errorMessage && (
          <p className="status">No se encontraron resultados.</p>
        )}
      </section>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);