import './styles/main.css';
import { getAppLayout } from './components/layout.js';
import { renderSidebar } from './features/navigation/sidebar.js';
import { initRouter } from './utils/router.js'; // IMPORTAMOS EL ROUTER

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('app');
  
  if (appRoot) {
    appRoot.innerHTML = getAppLayout();
    renderSidebar(); 
    
    //  INICIALIZAMOS EL ROUTER
    initRouter();
    
    console.log("¡Lummia cargado y Router activado!");
  }
});