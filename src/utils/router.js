// src/utils/router.js

// Import all our modular views
import { renderHome } from '../views/home.js';
import { renderCourses } from '../views/courses.js';
import { renderPomodoro } from '../views/pomodoro.js';
import { renderClan } from '../views/clan.js';

// Map routes to their corresponding functions
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

  // Find the view, and if it doesn't exist, render the 404
  const viewFunction = routes[route] || routes['404'];
  
  // Execute the function to inject the HTML
  mainContainer.innerHTML = viewFunction();
}

export function initRouter() {
  document.addEventListener('click', (event) => {
    const navBtn = event.target.closest('.nav-btn');
    
    if (navBtn) {
      event.preventDefault(); 
      const route = navBtn.getAttribute('data-route');
      
      //  ADD THIS LINE TO SEE WHAT IT'S READING 
      console.log("Attempting to navigate to route:", route); 
      
      navigateTo(route);
    }
  });

  // Initialize the app on the Home route by default
  navigateTo('home');
}