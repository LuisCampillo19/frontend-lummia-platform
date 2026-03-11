import { initCoursesLogic } from '../features/services/courses/coursesLogic.js';
import { initPomodoroLogic } from '../features/services/pomodoro/pomodoroLogic.js';
import { renderClan } from '../views/clan.js';
import { renderSkills } from '../views/skills.js';
import { renderCourses } from '../views/courses.js';
import { renderHome } from '../views/home.js';
import { renderPomodoro } from '../views/pomodoro.js';
import { renderProfile } from '../views/profile.js';

const routes = {
  home: renderHome,
  pomodoro: renderPomodoro,
  clan: renderClan,
  skills: renderSkills,
  courses: renderCourses,
  profile: renderProfile,
  404: () => `<div class="p-8 text-center text-white"><h2>404 - Not Found</h2></div>`
};

export function navigateTo(route) {
  const main = document.getElementById('main-container');
  const ai = document.getElementById('ai-panel-container'); 
  
  if (!main) return;

  // Make AI visible on all main pages, hide only on 404
  if (ai) {
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
      if (route === 'pomodoro') {
          globalTimerWidget.classList.add('hidden');
      } else {
          globalTimerWidget.classList.remove('hidden');
      }
  } // Fixed missing closing bracket here

  const view = routes[route] || routes['404'];
  const actualRoute = routes[route] ? route : '404';

  main.innerHTML = '';
  const content = view(main);
  if (typeof content === 'string') main.innerHTML = content;

  if (actualRoute === 'pomodoro') initPomodoroLogic();
  if (actualRoute === 'courses') initCoursesLogic();

  updateActiveNav(actualRoute);
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
    if (btn) { 
        e.preventDefault(); 
        navigateTo(btn.getAttribute('data-route')); 
    }
  });
}