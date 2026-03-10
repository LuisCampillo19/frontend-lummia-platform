// src/utils/router.js
import { renderHome } from '../views/home.js';
import { renderPomodoro } from '../views/pomodoro.js';
import { initPomodoroLogic } from '../features/services/pomodoro/pomodoroLogic.js';

const routes = {
  home: renderHome,
  pomodoro: renderPomodoro,
  404: () => `<div class="p-8 text-center text-white"><h2>404 - Not Found</h2></div>`
};

export function navigateTo(route) {
  const main = document.getElementById('main-container');
  const ai = document.getElementById('ai-panel-container'); // AI Side Panel
  
  if (!main) return;

  // STRICT RULE: AI Panel only for videos. Hide it everywhere else.
  if (ai) {
    ai.classList.add('hidden');
    ai.classList.remove('xl:flex');
  }

  const view = routes[route] || routes['404'];
  main.innerHTML = '';
  const content = view(main);
  if (typeof content === 'string') main.innerHTML = content;

  if (route === 'pomodoro') initPomodoroLogic();
  
  updateActiveNav(route);
}

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

export function initRouter() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.nav-link');
    if (btn) { e.preventDefault(); navigateTo(btn.getAttribute('data-route')); }
  });
  navigateTo('home');
}