// src/utils/router.js

import { renderSkills } from '../views/skills.js';
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
  skills: renderSkills,
  // Using the new Industrial Palette for the 404 view
  404: () => `
    <div class="p-8 h-full flex flex-col items-center justify-center text-center space-y-4">
      <div class="w-20 h-20 bg-lummia-lime/10 rounded-3xl flex items-center justify-center border border-lummia-lime/20 shadow-[0_0_30px_rgba(70,242,22,0.1)]">
        <i class="fa-solid fa-triangle-exclamation text-lummia-lime text-3xl"></i>
      </div>
      <div>
        <h2 class="text-6xl text-white font-black mb-2 tracking-tighter">404</h2>
        <p class="text-lummia-slate font-bold uppercase tracking-[0.2em] text-xs">Access Denied: Sector Not Found</p>
      </div>
    </div>
  `
};

function updateActiveNav(currentRoute) {
  // Select .nav-link as defined in our new sidebar.js
  const navButtons = document.querySelectorAll('.nav-link');
  if (!navButtons.length) return;

  // Unified Green Industrial Classes
  const activeClasses = ['bg-lummia-lime/10', 'text-white', 'border-lummia-lime/20', 'shadow-[inset_0_0_15px_rgba(70,242,22,0.1)]'];
  const inactiveClasses = ['text-lummia-slate', 'border-white/5', 'bg-white/[0.02]'];
  
  // Specific image glow classes
  const activeImg = ['opacity-100', 'scale-110', 'drop-shadow-[0_0_8px_rgba(70,242,22,0.6)]'];
  const inactiveImg = ['opacity-60', 'scale-100'];

  navButtons.forEach(btn => {
    const btnRoute = btn.getAttribute('data-route');
    const img = btn.querySelector('img');
    const indicator = btn.querySelector('.absolute'); // The left glow bar

    if (btnRoute === currentRoute) {
      // SET ACTIVE
      btn.classList.remove(...inactiveClasses);
      btn.classList.add(...activeClasses);
      if (indicator) indicator.classList.replace('opacity-0', 'opacity-100');
      if (img) {
        img.classList.remove(...inactiveImg);
        img.classList.add(...activeImg);
      }
    } else {
      // SET INACTIVE
      btn.classList.remove(...activeClasses);
      btn.classList.add(...inactiveClasses);
      if (indicator) indicator.classList.replace('opacity-100', 'opacity-0');
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
  
  // Clean container and render the view
  mainContainer.innerHTML = '';
  
  // Some of your views might return strings, others might inject directly
  const content = viewFunction(mainContainer);
  if (typeof content === 'string') {
    mainContainer.innerHTML = content;
  }

  // Update nav UI to reflect current route
  updateActiveNav(route);

  // Feature specific initializations
  if (route === 'pomodoro') {
    initPomodoro();
  }
}

export function initRouter() {
  document.addEventListener('click', (event) => {
    // Look for .nav-link (the class we used in sidebar.js)
    const navBtn = event.target.closest('.nav-link');
    
    if (navBtn) {
      event.preventDefault(); 
      const route = navBtn.getAttribute('data-route');
      if (route) navigateTo(route);
    }
  });

  // Default landing page
  navigateTo('home');
}