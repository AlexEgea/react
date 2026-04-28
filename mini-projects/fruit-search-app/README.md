# 🍎 Fruit Search App

Aplicación desarrollada con **React** que permite buscar frutas en tiempo real consumiendo una API externa.

Este proyecto está enfocado en el uso de **useEffect, peticiones HTTP, debounce y manejo de estados asíncronos**.

---

## 🚀 Demo

Buscador interactivo donde el usuario puede:

* Escribir el nombre de una fruta
* Obtener resultados en tiempo real
* Ver estados de carga y errores

---

## 🛠️ Tecnologías

* ⚛️ React
* 🟨 JavaScript (ES6+)
* 🌐 HTML5
* 🎨 CSS3
* 🔗 Fetch API

---

## 🧠 Conceptos trabajados

* useEffect
* Fetch API (peticiones HTTP)
* async / await
* Debounce con `setTimeout`
* Cleanup con `clearTimeout`
* Manejo de estado asíncrono
* Estados de carga (loading)
* Manejo de errores
* Renderizado condicional

---

## 📂 Estructura del proyecto

```txt id="p0m2xr"
fruit-search-app/
├── index.html
├── index.jsx
└── styles.css
```

---

## ▶️ Cómo ejecutar

1. Clona el repositorio:

```bash id="a92k3x"
git clone https://github.com/TU-USUARIO/react-mini-projects.git
```

2. Accede al proyecto:

```bash id="l8q2wv"
cd react-mini-projects/fruit-search-app
```

3. Abre `index.html` en tu navegador
   (o usa Live Server en VSCode)

---

## 📸 Captura

👉 Añade aquí una imagen del buscador en funcionamiento.

---

## 📌 Descripción

Este proyecto implementa un buscador en tiempo real que consulta una API externa a medida que el usuario escribe.

Para optimizar las peticiones, se utiliza una técnica de **debounce**, evitando llamadas innecesarias a la API en cada pulsación.

Además, se gestionan correctamente los estados de carga, errores y resultados, simulando un comportamiento real de aplicaciones profesionales.

---

## 🎯 Objetivo

Practicar el consumo de APIs en React y comprender cómo manejar efectos secundarios y estados asíncronos de forma eficiente.

---

## 👨‍💻 Autor

**Alejandro Aguilera**

* GitHub: https://github.com/AlexEgea
