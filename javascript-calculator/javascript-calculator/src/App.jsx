import React, { useState } from "react";

const buttons = [
  { id: "clear", value: "AC", className: "btn clear" },
  { id: "divide", value: "/", className: "btn operator" },
  { id: "multiply", value: "*", className: "btn operator" },
  { id: "seven", value: "7", className: "btn" },
  { id: "eight", value: "8", className: "btn" },
  { id: "nine", value: "9", className: "btn" },
  { id: "subtract", value: "-", className: "btn operator" },
  { id: "four", value: "4", className: "btn" },
  { id: "five", value: "5", className: "btn" },
  { id: "six", value: "6", className: "btn" },
  { id: "add", value: "+", className: "btn operator" },
  { id: "one", value: "1", className: "btn" },
  { id: "two", value: "2", className: "btn" },
  { id: "three", value: "3", className: "btn" },
  { id: "equals", value: "=", className: "btn equals" },
  { id: "zero", value: "0", className: "btn zero" },
  { id: "decimal", value: ".", className: "btn" }
];

function App() {
  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  const isOperator = (value) => /[+\-*/]/.test(value);

  const clearCalculator = () => {
    setDisplay("0");
    setFormula("");
    setEvaluated(false);
  };

  const handleNumber = (number) => {
    if (evaluated) {
      setDisplay(number);
      setFormula(number);
      setEvaluated(false);
      return;
    }

    if (display === "0" && number === "0") return;

    if (display === "0" && number !== "0") {
      setDisplay(number);
      setFormula(formula === "" ? number : formula + number);
      return;
    }

    if (isOperator(display)) {
      setDisplay(number);
      setFormula(formula + number);
      return;
    }

    setDisplay(display + number);
    setFormula(formula + number);
  };

  const handleDecimal = () => {
    if (evaluated) {
      setDisplay("0.");
      setFormula("0.");
      setEvaluated(false);
      return;
    }

    if (isOperator(display)) {
      setDisplay("0.");
      setFormula(formula + "0.");
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
      setFormula(formula + ".");
    }
  };

  const handleOperator = (operator) => {
    if (evaluated) {
      setFormula(display + operator);
      setDisplay(operator);
      setEvaluated(false);
      return;
    }

    if (formula === "" && operator !== "-") return;

    const lastChar = formula.slice(-1);
    const secondLastChar = formula.slice(-2, -1);

    if (isOperator(lastChar)) {
      if (operator === "-" && lastChar !== "-") {
        setFormula(formula + operator);
      } else if (isOperator(secondLastChar)) {
        setFormula(formula.slice(0, -2) + operator);
      } else {
        setFormula(formula.slice(0, -1) + operator);
      }
    } else {
      setFormula(formula + operator);
    }

    setDisplay(operator);
  };

  const calculateResult = () => {
    let expression = formula;

    while (/[+\-*/.]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }

    if (expression === "") return;

    try {
      const result = Function(`"use strict"; return (${expression})`)();
      const roundedResult = Number.parseFloat(result.toFixed(10)).toString();

      setDisplay(roundedResult);
      setFormula(roundedResult);
      setEvaluated(true);
    } catch {
      setDisplay("Error");
      setFormula("");
      setEvaluated(true);
    }
  };

  const handleClick = (value) => {
    if (value === "AC") {
      clearCalculator();
    } else if (/[0-9]/.test(value)) {
      handleNumber(value);
    } else if (value === ".") {
      handleDecimal();
    } else if (isOperator(value)) {
      handleOperator(value);
    } else if (value === "=") {
      calculateResult();
    }
  };

  return (
    <main className="page">
      <section className="calculator">
        <div className="brand">JavaScript Calculator</div>

        <div className="formula">{formula || "0"}</div>

        <div id="display" className="display">
          {display}
        </div>

        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button.id}
              id={button.id}
              className={button.className}
              onClick={() => handleClick(button.value)}
            >
              {button.value}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;