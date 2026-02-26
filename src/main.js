import { getAppLayout } from './components/layout.js';
import { renderSidebar } from './features/navigation/sidebar.js';
import { renderHome } from './views/home.js';
import { renderClan } from './views/clan.js';
import { renderPomodoro } from './views/pomodoro.js';
import { renderCourses } from './views/courses.js';
import { renderSkills } from './views/skills.js';
import { renderTutorIA } from './features/ai/tutor.js';

/**
 * 1. Application Initialization
 * Orchestrates the initial render and system startup.
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    // Inject the core layout shell immediately
    app.innerHTML = getAppLayout();
    
    // Render static global components
    renderSidebar();
    renderTutorIA(); // Fills the right-side AI panel
    
    // Load the initial view (Dashboard)
    navigateTo('home');

    // Initialize global interaction systems
    initNavigationListeners();
    initMobileLayout();
});

/**
 * 2. SPA Navigation System
 * Handles view switching without page reloads.
 * Animations have been removed for an instantaneous feel.
 */
function navigateTo(route) {
    const container = document.getElementById('main-container');
    if (!container) return;

    // Direct content swap (Zero latency)
    container.innerHTML = '';

    // View Router Logic
    switch (route) {
        case 'home':
            container.innerHTML = renderHome();
            break;
        case 'clan':
            container.innerHTML = renderClan();
            break;
        case 'pomodoro':
            container.innerHTML = renderPomodoro();
            break;
        case 'courses':
            container.innerHTML = renderCourses();
            break;
        case 'skills':
            container.innerHTML = renderSkills();
            break;
        default:
            container.innerHTML = renderHome();
    }

    // Auto-collapse mobile navigation after selection
    const nav = document.getElementById('nav-container');
    if (window.innerWidth < 1024 && nav) {
        nav.classList.add('-translate-x-full');
        const menuBtn = document.getElementById('mobile-menu-toggle');
        if (menuBtn) {
            menuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered text-sm"></i>';
            menuBtn.style.boxShadow = "none";
        }
    }

    // Reset scroll position to top on every view change
    container.scrollTo(0, 0);
}

/**
 * 3. Navigation Event Listeners
 * Detects clicks on sidebar links.
 */
function initNavigationListeners() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const route = link.getAttribute('data-route');
            navigateTo(route);
        }
    });
}

/**
 * 4. Responsive Layout Logic
 * Manages the mobile drawer and interaction states.
 */
function initMobileLayout() {
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav-container');

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isClosed = nav.classList.contains('-translate-x-full');
        
        if (isClosed) {
            // Open Mobile Sidebar
            nav.classList.remove('-translate-x-full');
            menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-sm"></i>';
            menuBtn.style.boxShadow = "0 0 15px rgba(70,242,22,0.3)";
        } else {
            // Close Mobile Sidebar
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