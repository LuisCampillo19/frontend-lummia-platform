// Importamos todas nuestras vistas modulares
import { renderHome } from '../views/home.js';
import { renderCourses } from '../views/courses.js';
import { renderPomodoro } from '../views/pomodoro.js';
import { renderClan } from '../views/clan.js';

// Mapeamos las rutas con su función correspondiente
const routes = {
  home: renderHome,
  courses: renderCourses,
  pomodoro: renderPomodoro,
  clan: renderClan,
  404: () => `
    <div class="p-8 h-full flex items-center justify-center text-center fade-in">
      <div>
        <h2 class="text-6xl text-white font-black mb-4">404</h2>
        <p class="text-gray-400 text-xl">The dungeon you are looking for does not exist.</p>
      </div>
    </div>
  `
};

export function navigateTo(route) {
  const mainContainer = document.getElementById('main-container');
  if (!mainContainer) return;

  // Busca la vista, y si no existe, renderiza el 404
  const viewFunction = routes[route] || routes['404'];
  
  // Ejecuta la función para inyectar el HTML
  mainContainer.innerHTML = viewFunction();
}

export function initRouter() {
  document.addEventListener('click', (event) => {
    const navBtn = event.target.closest('.nav-btn');
    
    if (navBtn) {
      event.preventDefault(); 
      const route = navBtn.getAttribute('data-route');
      
      // ✨ AGREGA ESTA LÍNEA PARA VER QUÉ ESTÁ LEYENDO ✨
      console.log("Intentando ir a la ruta:", route); 
      
      navigateTo(route);
    }
  });

  // Inicializa la app en el Home por defecto
  navigateTo('home');
}