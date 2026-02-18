# Lummia Platform - Frontend 🌿

Este es el repositorio del frontend para **Lummia Platform**, una plataforma de aprendizaje basada en RPG. Está construida utilizando una arquitectura SPA (Single Page Application) modular, garantizando alto rendimiento y escalabilidad sin depender de frameworks pesados.

## 🚀 Tecnologías Principales

* **Motor / Bundler:** [Vite](https://vitejs.dev/)
* **Lenguaje Core:** Vanilla JavaScript (ES6+)
* **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/)
* **Arquitectura:** Modular SPA basada en componentes y features.

---

## ⚙️ Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado en tu computadora:
* **Node.js** (Versión 18 o superior recomendada)
* **npm** (Viene incluido con Node.js)

---

## 🛠️ Instalación y Ejecución Local

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local:

**1. Clonar el repositorio**
(Si estás descargando el proyecto por primera vez):
\`\`\`bash
git clone https://github.com/TuUsuario/frontend-lummia-platform.git
cd frontend-lummia-platform
\`\`\`

**2. Instalar las dependencias**
Este comando leerá el `package.json` y descargará herramientas como Vite y Tailwind en la carpeta oculta `node_modules/`:
\`\`\`bash
npm install
\`\`\`

**3. Levantar el servidor de desarrollo**
Inicia el servidor local con Hot Module Replacement (HMR) para ver los cambios en tiempo real:
\`\`\`bash
npm run dev
\`\`\`
El proyecto estará disponible en tu navegador, generalmente en: `http://localhost:5173/`

---

## 🏗️ Mapa de la Arquitectura

El proyecto sigue una estructura limpia para separar la interfaz gráfica de la lógica de negocio:

\`\`\`text
frontend-lummia-platform/
├── public/                 # Assets estáticos (imágenes PNG, iconos)
├── src/                    # Código fuente principal
│   ├── api/                # Conexiones al backend (Azure SQL/Express)
│   ├── components/         # Componentes de UI reutilizables (Botones, Layouts)
│   ├── features/           # Módulos de negocio aislados (Navegación, Video, Gamificación)
│   ├── styles/             # Configuraciones globales de Tailwind (main.css)
│   └── main.js             # Orquestador principal de la SPA
├── index.html              # Punto de entrada y raíz del DOM
└── tailwind.config.js      # Design System (Colores Lummia)
\`\`\`

---

## 📦 Compilación para Producción

Cuando el proyecto esté listo para subirse a un servidor real (hosting), ejecuta:
\`\`\`bash
npm run build
\`\`\`
Esto generará una carpeta `dist/` con el código optimizado, minificado y listo para despliegue.