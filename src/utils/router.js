// src/utils/router.js

import { renderHome } from '../views/home.js';
import { renderCourses } from '../views/courses.js';
import { renderPomodoro } from '../views/pomodoro.js';
import { renderClan } from '../views/clan.js';
import { initPomodoro } from '../features/pomodoro/timer.js';

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

function updateActiveNav(currentRoute) {
  const navButtons = document.querySelectorAll('.nav-btn');
  if (!navButtons.length) return;

  // Define the style arrays
  const activeClasses = ['bg-lummia-sage/10', 'text-lummia-sage', 'border-lummia-sage/20', 'shadow-[0_0_15px_rgba(88,166,115,0.05)]'];
  const inactiveClasses = ['text-gray-400', 'border-transparent', 'hover:text-white', 'hover:bg-white/5'];
  
  const activeImg = ['opacity-100', 'drop-shadow-[0_0_5px_rgba(88,166,115,0.8)]'];
  const inactiveImg = ['opacity-70'];

  navButtons.forEach(btn => {
    const btnRoute = btn.getAttribute('data-route');
    const img = btn.querySelector('img');

    if (btnRoute === currentRoute) {
      // Apply active glow
      btn.classList.remove(...inactiveClasses);
      btn.classList.add(...activeClasses);
      if (img) {
        img.classList.remove(...inactiveImg);
        img.classList.add(...activeImg);
      }
    } else {
      // Remove glow, set inactive
      btn.classList.remove(...activeClasses);
      btn.classList.add(...inactiveClasses);
      if (img) {
        img.classList.remove(...activeImg);
        img.classList.add(...inactiveImg);
      }
    }
  });
}

export function navigateTo(route) {
  const mainContainer = document.getElementById('main-container');
  if (!mainContainer) return;

  const viewFunction = routes[route] || routes['404'];
  mainContainer.innerHTML = viewFunction();

  // Trigger the active state update
  updateActiveNav(route);

  if (route === 'pomodoro') {
    initPomodoro();
  }
}

export function initRouter() {
  document.addEventListener('click', (event) => {
    const navBtn = event.target.closest('.nav-btn');
    
    if (navBtn) {
      event.preventDefault(); 
      const route = navBtn.getAttribute('data-route');
      navigateTo(route);
    }
  });

  navigateTo('home');
}