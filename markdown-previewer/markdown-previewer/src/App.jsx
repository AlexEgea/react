import React, { useState } from "react";
import { marked } from "marked";

marked.setOptions({
  breaks: true
});

const defaultMarkdown = `# Markdown Previewer

## Proyecto de freeCodeCamp

Este es un **previsualizador de Markdown** hecho con React.

Aquí tienes un enlace a [freeCodeCamp](https://www.freecodecamp.org/).

También puedes escribir código en línea como \`console.log("Hola mundo")\`.

\`\`\`javascript
function saludar(nombre) {
  return "Hola, " + nombre;
}

console.log(saludar("Alejandro"));
\`\`\`

### Lista de tareas

- Crear el textarea
- Mostrar la vista previa
- Renderizar Markdown
- Pasar todos los tests

> Esto es una cita en bloque usando Markdown.

![Logo de freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <main className="app">
      <h1 className="title">Markdown Previewer</h1>

      <div className="container">
        <section className="panel">
          <h2>Editor</h2>

          <textarea
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </section>

        <section className="panel">
          <h2>Vista previa</h2>

          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(markdown)
            }}
          />
        </section>
      </div>
    </main>
  );
}

export default App;