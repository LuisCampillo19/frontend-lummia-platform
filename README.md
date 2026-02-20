# Lummia Platform - Frontend

Lummia Platform is a gamified learning platform (RPG-style) built with a modern, ultra-lightweight frontend architecture. Instead of relying on heavy frameworks like React or Angular, this project implements an MVC (Model-View-Controller) pattern adapted for Vanilla JavaScript with a custom SPA router.

## Core Technologies

* **Engine / Bundler:** [Vite](https://vitejs.dev/) (Configured with WebSockets for HMR in Linux environments).
* **Core Language:** Vanilla JavaScript (ES6+).
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) (Integrated via PostCSS).
* **Architecture:** Modular SPA (Single Page Application) with dynamic injectable views.

---

## Architecture Map (Folder Structure)

The project follows a high-cohesion and low-coupling design. Each "View" owns its own layout and is injected into the main container without reloading the page:

```text
frontend-lummia-platform/
├── public/                 # Static assets (Served directly for better performance).
│   └── assets/             # UI Icons (home, clan, pomodoro, shield).
├── src/                    # THE HEART OF THE APP
│   ├── api/                # Future backend connections (Azure SQL/Express).
│   ├── components/         # Shared UI components (Master layout).
│   ├── features/           # Business modules (Sidebar navigation).
│   ├── styles/             # Tailwind directives (main.css).
│   ├── utils/              # System utilities.
│   │   └── router.js       # Routing Engine (Intercepts clicks and changes views).
│   ├── views/              # Modular Views (SPA Pages).
│   │   ├── clan.js         # Guild View (NightCoders).
│   │   ├── courses.js      # Study room and video player.
│   │   ├── home.js         # Main dashboard and quests.
│   │   └── pomodoro.js     # Focus timer (Focus Zone).
│   └── main.js             # Main application orchestrator.
├── index.html              # The blank canvas (<div id="app"></div>).
├── vite.config.js          # Network and WebSocket configuration for local server.
├── postcss.config.js       # Build bridge for Tailwind v3.
└── tailwind.config.js      # Design System (Custom colors: lummia-dark, lummia-sage).