import { useState } from "react";

const quotes = [
  {
    text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    author: "John Lennon",
  },
  {
    text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    author: "Robert Collier",
  },
  {
    text: "No cuentes los días, haz que los días cuenten.",
    author: "Muhammad Ali",
  },
  {
    text: "La mejor forma de predecir el futuro es crearlo.",
    author: "Peter Drucker",
  },
  {
    text: "Hazlo con pasión o no lo hagas.",
    author: "Rosa Nouchette Carey",
  },
];

function App() {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    let newQuote = getRandomQuote();

    while (newQuote.text === quote.text) {
      newQuote = getRandomQuote();
    }

    setQuote(newQuote);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <main className="app">
      <section id="quote-box">
        <p id="text">"{quote.text}"</p>

        <p id="author">- {quote.author}</p>

        <div className="buttons">
          <button id="new-quote" onClick={handleNewQuote}>
            Nueva frase
          </button>

          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;