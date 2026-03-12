// src/utils/router.js
import { initCoursesLogic } from '../features/services/courses/coursesLogic.js';
import { initPomodoroLogic } from '../features/services/pomodoro/pomodoroLogic.js';
import { renderClan } from '../views/clan.js';
import { renderSkills } from '../views/skills.js';
import { renderCourses } from '../views/courses.js';
import { renderHome } from '../views/home.js';
import { renderPomodoro } from '../views/pomodoro.js';
import { renderProfile } from '../views/profile.js';
import { renderLogin } from '../views/login.js'; 
import { setupFullInterface } from '../main.js';

const routes = {
  login: renderLogin,
  home: renderHome,
  pomodoro: renderPomodoro,
  clan: renderClan,
  skills: renderSkills,
  courses: renderCourses,
  profile: renderProfile,
  404: () => `<div class="p-8 text-center text-white"><h2>404 - Not Found</h2></div>`
};

/**
 * FUNCIÓN DE NAVEGACIÓN PRINCIPAL
 */
export function navigateTo(route) {
  const userSession = localStorage.getItem('user_session');
  const appContainer = document.getElementById('app');

  // --- 1. GUARDIA DE SEGURIDAD (AUTH GUARD) ---
  if (!userSession && route !== 'login') {
      console.warn("Acceso denegado: Redirigiendo a Login.");
      return navigateTo('login');
  }

  // --- 2. MANEJO ESPECIAL PARA LA VISTA DE LOGIN ---
  if (route === 'login') {
      // Limpiamos TODO el HTML del body para que no se vea el sidebar ni el dashboard
      appContainer.innerHTML = ''; 
      // Renderizamos el login directamente en el contenedor raíz
      renderLogin(); 
      return; // Detenemos la ejecución aquí para no buscar contenedores que borramos
  }

  // --- 3. CONSTRUCCIÓN DE LA INTERFAZ (Solo si hay sesión) ---
  if (userSession) {
      if (route === 'login') return navigateTo('home');
      // Inyectamos el Layout (Sidebar, Panel IA, etc.) desde main.js
      setupFullInterface(); 
  }

  // --- 4. SELECCIÓN DE CONTENEDOR DE CONTENIDO ---
  // Una vez cargado el layout por setupFullInterface, el main-container debería existir
  const main = document.getElementById('main-container');
  const ai = document.getElementById('ai-panel-container'); 
  
  if (!main) {
      console.error("Error: main-container no encontrado.");
      return;
  }

  // --- 5. LÓGICA DE VISIBILIDAD DE PANELES GLOBALES ---
  if (ai) {
      // Ocultar IA en 404
      if (route === '404' || !routes[route]) {
          ai.classList.add('hidden');
          ai.classList.remove('xl:flex');
      } else {
          ai.classList.remove('hidden');
          ai.classList.add('xl:flex');
      }
  }

  const globalTimerWidget = document.getElementById('global-pomodoro-wrapper');
  if (globalTimerWidget) {
      // Ocultar el mini-timer si ya estamos en la página completa de Pomodoro
      globalTimerWidget.classList.toggle('hidden', route === 'pomodoro');
  }

  // --- 6. RENDERIZADO DE LA VISTA ESPECÍFICA ---
  const view = routes[route] || routes['404'];
  const actualRoute = routes[route] ? route : '404';

  main.innerHTML = '';
  const content = view(main);
  
  // Si la vista devuelve un string, lo inyectamos; si manipula el DOM internamente, no hace falta
  if (typeof content === 'string') main.innerHTML = content;

  // --- 7. INICIALIZACIÓN DE LÓGICAS POST-RENDER ---
  if (actualRoute === 'pomodoro') initPomodoroLogic();
  if (actualRoute === 'courses') initCoursesLogic();

  updateActiveNav(actualRoute);
}

/**
 * ACTUALIZA LOS ESTADOS VISUALES DE LA BARRA DE NAVEGACIÓN
 */
function updateActiveNav(route) {
  document.querySelectorAll('.nav-link').forEach(btn => {
    const indicator = btn.querySelector('.nav-indicator');
    if (btn.getAttribute('data-route') === route) {
      btn.classList.add('bg-white/[0.04]');
      if (indicator) indicator.classList.replace('h-0', 'h-8');
    } else {
      btn.classList.remove('bg-white/[0.04]');
      if (indicator) indicator.classList.replace('h-8', 'h-0');
    }
  });
}

/**
 * INICIALIZA EL ESCUCHADOR DE EVENTOS DEL ROUTER
 */
export function initRouter() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.nav-link');
    if (btn) { 
        e.preventDefault(); 
        const route = btn.getAttribute('data-route');
        navigateTo(route); 
    }
  });

  // Verificación inicial de ruta al cargar la página
  const startRoute = localStorage.getItem('user_session') ? 'home' : 'login';
  navigateTo(startRoute);
}