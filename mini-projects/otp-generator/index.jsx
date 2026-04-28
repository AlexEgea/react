const { createRoot } = ReactDOM;

function App() {
  const [otp, setOtp] = React.useState("------");
  const [length, setLength] = React.useState(6);
  const [copied, setCopied] = React.useState(false);

  function generateOtp() {
    let newOtp = "";

    for (let i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      newOtp += randomDigit;
    }

    setOtp(newOtp);
    setCopied(false);
  }

  async function copyOtp() {
    if (otp === "------") return;

    try {
      await navigator.clipboard.writeText(otp);
      setCopied(true);
    } catch (error) {
      console.error("Error copying OTP:", error);
    }
  }

  return (
    <main className="app">
      <section className="card">
        <span className="tag">React Mini Project</span>

        <h1>OTP Generator</h1>

        <p className="description">
          Genera códigos OTP numéricos de forma dinámica y cópialos al
          portapapeles.
        </p>

        <div className="otp-box">{otp}</div>

        <label className="length-control">
          Longitud del código
          <select
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          >
            <option value="4">4 dígitos</option>
            <option value="6">6 dígitos</option>
            <option value="8">8 dígitos</option>
          </select>
        </label>

        <div className="buttons">
          <button onClick={generateOtp}>Generate OTP</button>
          <button className="secondary-btn" onClick={copyOtp}>
            Copy
          </button>
        </div>

        {copied && <p className="success">Código copiado correctamente ✅</p>}
      </section>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);