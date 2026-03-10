// src/main.js

import { getAppLayout } from './components/layout.js';
import { renderSidebar } from './features/navigation/sidebar.js';
import { renderTutorIA, initTutorLogic } from './features/services/ai/tutor.js';
import { initRouter, navigateTo } from './utils/router.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    // Inject the core layout shell immediately
    app.innerHTML = getAppLayout();
    
    // Render static global components
    renderSidebar();
    
    // Render IA Tutor and initialize its interactive logic
    renderTutorIA(); 
    initTutorLogic(); // <-- Iniciamos la lógica del chat aquí
    
    // Initialize the router event listeners
    initRouter();

    // Load the initial view (¡AQUÍ ESTABA EL ERROR!)
    navigateTo('home'); // <-- Cambia 'dashboard' por 'home'
});

/**
 * 2. Responsive Layout Logic
 * (This can stay here or be moved to a layout.js utility later)
 */
function initMobileLayout() {
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav-container');

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isClosed = nav.classList.contains('-translate-x-full');
        
        if (isClosed) {
            nav.classList.remove('-translate-x-full');
            menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-sm"></i>';
            menuBtn.style.boxShadow = "0 0 15px rgba(70,242,22,0.3)";
        } else {
            nav.classList.add('-translate-x-full');
            menuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered text-sm"></i>';
            menuBtn.style.boxShadow = "none";
        }
    });

    // Close sidebar when clicking the main content area (Mobile only)
    const mainContent = document.getElementById('main-container');
    if (mainContent) {
        mainContent.addEventListener('click', () => {
            if (!nav.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
                nav.classList.add('-translate-x-full');
                menuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered text-sm"></i>';
                menuBtn.style.boxShadow = "none";
            }
        });
    }
}