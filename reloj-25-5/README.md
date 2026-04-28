# ⏱️ Reloj 25 + 5 (Pomodoro Clock)

Aplicación web desarrollada con **React** que implementa un temporizador tipo **Pomodoro (25 + 5)**, cumpliendo todas las historias de usuario del proyecto de freeCodeCamp.

---

## 📌 Características

* ⏳ Temporizador de sesión (25 min por defecto)
* ☕ Temporizador de descanso (5 min por defecto)
* 🔼 Ajuste de duración (1–60 minutos)
* ▶️ Iniciar / ⏸️ Pausar temporizador
* 🔁 Reinicio completo del estado
* 🔊 Sonido al finalizar cada ciclo
* 🔄 Cambio automático entre sesión y descanso
* 🧪 Compatible con los tests de freeCodeCamp

---

## 🛠️ Tecnologías utilizadas

* React 17
* JavaScript (ES6+)
* Vite
* CSS moderno (responsive + UI limpia)

---

## 📂 Estructura del proyecto

```
reloj-25-5/
├── index.html
├── package.json
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

---

## ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/TU-USUARIO/reloj-25-5.git
cd reloj-25-5
```

Instala dependencias:

```bash
npm install
```

---

## ▶️ Ejecutar en local

```bash
npm run dev
```

Abre en el navegador:

```
http://localhost:5173
```

---

## 🧪 Tests de freeCodeCamp

1. Abre la app en el navegador
2. Aparecerá el panel de tests (abajo a la izquierda)
3. Selecciona:

```
25 + 5 Clock
```

4. Pulsa:

```
Run Tests
```

---

## 🚀 Despliegue en Vercel

Configuración importante:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

⚠️ Importante: En Vite la carpeta final es **dist**, no `build`.

---

## 🎯 Requisitos cumplidos (freeCodeCamp)

✔ Break y Session configurables
✔ Temporizador en formato `mm:ss`
✔ Control Start / Stop
✔ Reset completo
✔ Cambio automático Session ↔ Break
✔ Reproducción de sonido al terminar
✔ Límites entre 1 y 60 minutos
✔ Compatible con todas las historias de usuario

---

## 📸 Captura (opcional)

Puedes añadir aquí una imagen:

```
![preview](./preview.png)
```

---

## 👨‍💻 Autor

**Alejandro Aguilera**

* GitHub: [https://github.com/AlexEgea](https://github.com/AlexEgea)

---

## 📄 Licencia

Proyecto de uso educativo dentro del programa de freeC
