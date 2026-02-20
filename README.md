# Lummia Platform - Frontend 🌿

Lummia Platform es una plataforma de aprendizaje gamificada (estilo RPG) construida con una arquitectura frontend moderna y ultraligera. En lugar de depender de frameworks pesados como React o Angular, este proyecto implementa un patrón **MVC (Model-View-Controller)** adaptado para Vanilla JavaScript con un enrutador SPA personalizado.

## 🚀 Tecnologías Principales

* **Motor / Bundler:** [Vite](https://vitejs.dev/) (Configurado con WebSockets para HMR en entornos Linux).
* **Lenguaje Core:** Vanilla JavaScript (ES6+).
* **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/) (Integrado vía PostCSS).
* **Arquitectura:** Modular SPA (Single Page Application) con vistas dinámicas inyectables.

---

## 🏗️ Mapa de la Arquitectura (Estructura de Carpetas)

El proyecto sigue un diseño de alta cohesión y bajo acoplamiento. Cada "Vista" es dueña de su propio diseño y se inyecta en el contenedor principal sin recargar la página:

```text
frontend-lummia-platform/
├── public/                 # Assets estáticos (Se sirven directamente para mayor rendimiento).
│   └── assets/             # Iconos UI (home, clan, pomodoro, shield).
├── src/                    # 🧠 EL CORAZÓN DE LA APP
│   ├── api/                # Conexiones futuras al backend (Azure SQL/Express).
│   ├── components/         # Componentes de UI compartidos (Layout maestro).
│   ├── features/           # Módulos de negocio (Navegación lateral).
│   ├── styles/             # Directivas de Tailwind (main.css).
│   ├── utils/              # Herramientas del sistema.
│   │   └── router.js       # 🚦 Motor de Enrutamiento (Intercepta clics y cambia vistas).
│   ├── views/              # 🎨 Vistas Modulares (Páginas de la SPA).
│   │   ├── clan.js         # Vista del Gremio (NightCoders).
│   │   ├── courses.js      # Sala de estudio y reproductor de video.
│   │   ├── home.js         # Dashboard principal y misiones.
│   │   └── pomodoro.js     # Temporizador de enfoque (Focus Zone).
│   └── main.js             # Orquestador principal de la aplicación.
├── index.html              # El lienzo en blanco (<div id="app"></div>).
├── vite.config.js          # Configuración de red y WebSockets para el servidor local.
├── postcss.config.js       # Puente de compilación para Tailwind v3.
└── tailwind.config.js      # Design System (Colores personalizados: lummia-dark, lummia-sage).