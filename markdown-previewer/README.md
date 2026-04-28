# 📝 Markdown Previewer (React)

Aplicación web desarrollada con **React** que permite escribir texto en **Markdown** y visualizarlo en tiempo real como HTML.

Este proyecto forma parte de la certificación de **Front End Development Libraries** de freeCodeCamp.

---

## 🚀 Demo

🔗 **Live App:** *(añade aquí tu enlace de Netlify)*
Ejemplo:
`https://markdown-previewer-alexegea.netlify.app`

---

## 📸 Preview

![preview](https://cdn.freecodecamp.org/testable-projects-fcc/images/markdown-previewer.png)

---

## 🎯 Características

* Editor de Markdown en tiempo real
* Renderizado instantáneo a HTML
* Soporte completo de:

  * Encabezados (`#`)
  * Listas
  * Código en línea y bloques
  * Enlaces
  * Imágenes
  * Citas
  * Negrita
* Compatible con Markdown estilo GitHub
* Diseño responsive
* Cumple todos los tests de freeCodeCamp

---

## 🛠️ Tecnologías utilizadas

* ⚛️ React 17
* ⚡ Vite
* 🧾 Marked
* 🎨 CSS3

---

## 📂 Estructura del proyecto

```txt
markdown-previewer/
├── index.html
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── styles.css
```

---

## ⚙️ Instalación y uso

1. Clona el repositorio:

```bash
git clone https://github.com/TU-USUARIO/markdown-previewer.git
cd markdown-previewer
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

4. Abre en tu navegador:

```txt
http://localhost:5173
```

---

## 🧪 Tests (freeCodeCamp)

Para verificar que todo funciona correctamente, el proyecto incluye los tests oficiales de freeCodeCamp.

✔️ Todos los requisitos cumplidos:

* `#editor` funcional
* `#preview` renderizando Markdown
* Renderizado en tiempo real
* Markdown por defecto cargado

---

## 📦 Build y despliegue

Para generar la versión de producción:

```bash
npm run build
```

Esto generará la carpeta:

```txt
dist/
```

Puedes desplegarla fácilmente en:

* Netlify
* Vercel
* GitHub Pages

---

## 👨‍💻 Autor

**Alejandro Aguilera**

* GitHub: https://github.com/AlexEgea
* Portfolio: *(puedes añadir aquí tu web)*

---

## 📌 Notas

* Se utiliza React 17 para evitar incompatibilidades con los tests de freeCodeCamp.
* Se usa `dangerouslySetInnerHTML` para renderizar HTML desde Markdown de forma controlada.

---

## ⭐ Si te gusta el proyecto

Dale una estrella ⭐ en GitHub y sígueme para más proyectos 🚀
