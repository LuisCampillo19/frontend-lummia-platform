# Lummia Platform 🟢

> An industrial-grade, high-performance Single Page Application (SPA) for educational streaming and productivity.

Lummia is a modular, zero-latency learning environment built entirely with Vanilla JavaScript and Tailwind CSS. It features a cyberpunk/industrial aesthetic and integrates advanced productivity tools like a Pomodoro timer, gamification (Clan System), and an AI Tutor module.

## ✨ Key Features

* **Zero-Latency Vanilla Router:** Custom-built routing system for instant view switching without page reloads.
* **Feature-Sliced Architecture:** Highly scalable folder structure separating views, components, utilities, and core features.
* **Industrial UI/UX:** Heavily customized Tailwind CSS with custom smooth "System Boot" animations and neon-green accents.
* **Integrated Productivity:** Built-in Pomodoro timer and real-time skill-tracking modules.
* **AI Tutor Online:** Embedded contextual AI assistant interface ready for backend integration.
* **Lightning Fast Build:** Powered by Vite for instantaneous Hot Module Replacement (HMR) and optimized production builds.

## 🛠️ Tech Stack

* **Core:** HTML5, Vanilla JavaScript (ES6 Modules)
* **Styling:** Tailwind CSS (via PostCSS)
* **Build Tool:** Vite
* **Architecture:** Component-Based SPA

## 📂 Architecture & Project Structure

The project follows a strict modular architecture to maintain scalability and a clean separation of concerns. The DOM injection logic is completely separated from the HTML template generation.

\`\`\`text
FRONTEND-LUMMIA-PLATFORM/
├── public/
│   └── assets/             # Static assets (icons, images) served at root
├── src/
│   ├── api/                # API configurations and backend communication
│   │   └── config.js
│   ├── components/         # Reusable HTML UI elements (Stateless)
│   │   ├── badge.js
│   │   ├── button.js
│   │   └── layout.js       # Main application shell
│   ├── features/           # Self-contained feature logic (Stateful)
│   │   ├── navigation/     # Sidebar and mobile menu logic
│   │   └── services/       # Complex interactive services
│   │       ├── ai/             # Tutor logic
│   │       ├── dashboard/      # Dashboard counters and clocks
│   │       ├── gamification/   # User profile and stats
│   │       ├── pomodoro/       # Timer logic
│   │       └── video-room/     # Streaming logic
│   ├── styles/             # Global stylesheets and custom keyframe animations
│   │   └── styles.css
│   ├── utils/              # Core application utilities
│   │   ├── router.js       # SPA Traffic Controller
│   │   └── ui-effects.js   # Global DOM manipulation helpers
│   ├── views/              # Pure HTML template functions for the router
│   │   ├── clan.js
│   │   ├── courses.js
│   │   ├── dashboard.js
│   │   ├── pomodoro.js
│   │   └── skills.js
│   └── main.js             # Main application entry point & orchestrator
├── .gitignore              # Git ignored files and directories
├── index.html              # Main HTML entry point
├── package-lock.json       # Exact dependency tree footprint
├── package.json            # Project metadata, scripts, and dependencies
├── postcss.config.js       # PostCSS configuration for Tailwind integration
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS customizations, colors, and themes
└── vite.config.js          # Vite build tool and dev server configuration
\`\`\`

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
* [Node.js](https://nodejs.org/) installed on your machine.
* A package manager like npm, yarn, or pnpm.

### Installation & Setup

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/your-username/frontend-lummia-platform.git
   cd frontend-lummia-platform
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

## 🧠 Architecture Notes (For Developers)
* **Views vs. Features:** Files inside `src/views/` must only return HTML strings. The interactive JavaScript logic for those views lives inside `src/features/` (e.g., `dashboardLogic.js`, `timer.js`) and is executed by `router.js` *after* the DOM has been updated.
* **Tailwind Config:** Custom colors (like `lummia-lime` or `lummia-slate`) are strictly defined in `tailwind.config.js`. Avoid using arbitrary values (e.g., `bg-[#46F216]`) when a theme variable exists.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License
This project is licensed under the MIT License.