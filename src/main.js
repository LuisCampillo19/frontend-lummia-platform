// src/main.js
import './styles/main.css';
import { getAppLayout } from './components/layout.js';
import { renderSidebar } from './features/navigation/sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('app');
  
  // 1. Inyectamos la estructura base (las 3 columnas)
  appRoot.innerHTML = getAppLayout();

  // 2. Renderizamos los módulos en sus respectivos contenedores
  renderSidebar(); // Pinta el menú izquierdo

  console.log('Lummia SPA: Layout y Sidebar listos 🚀');
});