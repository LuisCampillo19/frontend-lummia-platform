import { getAppLayout } from './components/layout.js';
import { renderSidebar } from './features/navigation/sidebar.js';
import { renderTutorIA, initTutorLogic } from './features/services/ai/tutor.js';
import { initRouter, navigateTo } from './utils/router.js'; 
import { injectGlobalPomodoroUI } from './components/globalPomodoro.js';
import { initGlobalPomodoroLogic } from './features/services/pomodoro/pomodoroLogic.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    app.innerHTML = getAppLayout();
    
    initMobileLayout();
    initAILayout(); 
    initThemeSwitcher(); 
    
    renderSidebar();
    injectGlobalPomodoroUI();
    initGlobalPomodoroLogic();
    
    renderTutorIA(); 
    initTutorLogic();
    
    initRouter();
    navigateTo('home');
});

function initMobileLayout() {
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav-container');

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isClosed = nav.classList.contains('-translate-x-full');
        
        if (isClosed) {
            nav.classList.remove('-translate-x-full');
            menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-sm pointer-events-none"></i>';
            menuBtn.style.boxShadow = "0 0 15px rgba(70,242,22,0.3)";
        } else {
            nav.classList.add('-translate-x-full');
            menuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered text-sm pointer-events-none"></i>';
            menuBtn.style.boxShadow = "none";
        }
    });

    const mainContent = document.getElementById('main-container');
    if (mainContent) {
        mainContent.addEventListener('click', () => {
            if (!nav.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
                nav.classList.add('-translate-x-full');
                menuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered text-sm pointer-events-none"></i>';
                menuBtn.style.boxShadow = "none";
            }
        });
    }
}

function initAILayout() {
    const aiBtn = document.getElementById('ai-menu-toggle');
    const aiPanel = document.getElementById('ai-panel-container');

    if (!aiBtn || !aiPanel) return;

    aiBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const isClosed = aiPanel.classList.contains('translate-x-full') || aiPanel.classList.contains('hidden');
        
        if (isClosed) {
            aiPanel.classList.remove('translate-x-full', 'hidden');
            aiPanel.classList.add('translate-x-0');
            aiBtn.innerHTML = '<i class="fa-solid fa-xmark text-sm pointer-events-none"></i>';
            aiBtn.style.boxShadow = "0 0 15px rgba(217,70,239,0.3)"; 
            aiBtn.style.color = "#d946ef"; 
        } else {
            aiPanel.classList.add('translate-x-full');
            aiPanel.classList.remove('translate-x-0');
            aiBtn.innerHTML = '<i class="fa-solid fa-robot text-sm pointer-events-none"></i>';
            aiBtn.style.boxShadow = "none";
            aiBtn.style.color = ""; 
        }
    });

    const mainContent = document.getElementById('main-container');
    if (mainContent) {
        mainContent.addEventListener('click', () => {
            if (!aiPanel.classList.contains('translate-x-full') && window.innerWidth < 1280) { 
                aiPanel.classList.add('translate-x-full');
                aiBtn.innerHTML = '<i class="fa-solid fa-robot text-sm pointer-events-none"></i>';
                aiBtn.style.boxShadow = "none";
                aiBtn.style.color = "";
            }
        });
    }
}

function initThemeSwitcher() {
    let styleEl = document.getElementById('theme-overrides');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'theme-overrides';
        document.head.appendChild(styleEl);
    }

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.theme-btn');
        if (!btn) return;

        const theme = btn.getAttribute('data-theme');
        applyTheme(theme);
        localStorage.setItem('lummia_theme', theme);

        document.querySelectorAll('.theme-btn').forEach(b => {
            b.className = "theme-btn flex-1 py-2 rounded-lg bg-transparent text-zinc-500 hover:text-white hover:bg-white/5 transition-all";
            if (b.getAttribute('data-theme') === 'white') {
                b.classList.replace('hover:text-white', 'hover:text-zinc-800');
                b.classList.replace('hover:bg-white/5', 'hover:bg-white');
            }
        });

        if (theme === 'neon') {
            btn.className = "theme-btn flex-1 py-2 rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 transition-all";
        } else if (theme === 'black') {
            btn.className = "theme-btn flex-1 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white transition-all";
        } else if (theme === 'white') {
            btn.className = "theme-btn flex-1 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-900 shadow-sm transition-all";
        }
    });

    const savedTheme = localStorage.getItem('lummia_theme') || 'neon';
    applyTheme(savedTheme);

    function applyTheme(theme) {
        const wrapper = document.getElementById('app-wrapper');
        const glows = document.getElementById('ambient-glows');
        const nav = document.getElementById('nav-container');
        const ai = document.getElementById('ai-panel-container');

        if (!wrapper || !nav || !ai) return;

        if (theme === 'neon') {
            styleEl.innerHTML = ''; 
            wrapper.className = "h-screen w-full bg-[#000000] text-white flex overflow-hidden selection:bg-purple-500/30 relative z-0 transition-colors duration-500";
            if (glows) glows.style.opacity = "1";
            nav.className = "w-64 lg:w-72 h-full flex-shrink-0 border-r border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl flex flex-col transition-all duration-300 absolute lg:relative z-50 -translate-x-full lg:translate-x-0 shadow-[4px_0_24px_rgba(0,0,0,0.5)]";
            ai.className = "absolute right-0 top-0 w-80 lg:w-[400px] h-full flex-shrink-0 border-l border-white/[0.05] bg-[#050505]/95 backdrop-blur-3xl flex flex-col z-40 transform translate-x-full transition-all duration-300 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]";
            
        } else if (theme === 'black') {
            styleEl.innerHTML = ''; 
            wrapper.className = "h-screen w-full bg-[#050505] text-zinc-100 flex overflow-hidden selection:bg-zinc-700 relative z-0 transition-colors duration-500";
            if (glows) glows.style.opacity = "0"; 
            nav.className = "w-64 lg:w-72 h-full flex-shrink-0 border-r border-zinc-800 bg-[#050505] flex flex-col transition-all duration-300 absolute lg:relative z-50 -translate-x-full lg:translate-x-0";
            ai.className = "absolute right-0 top-0 w-80 lg:w-[400px] h-full flex-shrink-0 border-l border-zinc-800 bg-[#050505] flex flex-col z-40 transform translate-x-full transition-all duration-300 shadow-2xl";
            
        } else if (theme === 'white') {
            // CSS MEJORADO PARA LIGHT MODE (Más tonalidades, sombras y sin gradientes sucios)
            styleEl.innerHTML = `
                /* Fuerzo textos a gris oscuro puro para legibilidad */
                #app-wrapper .text-white:not(.bg-fuchsia-600):not(.bg-purple-600):not(.text-fuchsia-400):not(.text-amber-400):not(.text-emerald-400) { color: #18181b !important; }
                #app-wrapper .text-zinc-400, #app-wrapper .text-zinc-500 { color: #52525b !important; }
                #app-wrapper .text-zinc-300 { color: #3f3f46 !important; }
                
                /* Fondos de Tarjetas Principales (Blanco puro con sombra elevada) */
                #app-wrapper .bg-white\\/\\[0\\.01\\], 
                #app-wrapper .bg-white\\/\\[0\\.02\\], 
                #app-wrapper .bg-white\\/\\[0\\.05\\],
                #app-wrapper .bg-black\\/40, 
                #app-wrapper .bg-black\\/50, 
                #app-wrapper .bg-black\\/60 { 
                    background-color: #ffffff !important; 
                    background-image: none !important; /* Elimina cualquier degradado oscuro */
                    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08) !important; 
                    border-color: #f4f4f5 !important;
                }
                
                /* Fondos secundarios (Paneles internos, inputs) */
                #app-wrapper .bg-\\[\\#0a0a0a\\], 
                #app-wrapper .bg-\\[\\#050505\\], 
                #app-wrapper .bg-black,
                #app-wrapper .bg-\\[\\#130b1c\\] { 
                    background-color: #f4f4f5 !important; 
                    background-image: none !important;
                }
                
                /* Bordes muy suaves */
                #app-wrapper .border-white\\/\\[0\\.05\\], 
                #app-wrapper .border-white\\/5, 
                #app-wrapper .border-white\\/10 { 
                    border-color: #e4e4e7 !important; 
                }
                
                /* Campos de formulario legibles */
                #app-wrapper input, 
                #app-wrapper textarea, 
                #app-wrapper select { 
                    color: #18181b !important; 
                    background-color: #fafafa !important; 
                    border-color: #d4d4d8 !important; 
                }
                
                #app-wrapper input::placeholder, 
                #app-wrapper textarea::placeholder { color: #a1a1aa !important; }

                /* Ajuste de Badges para que no resalten demasiado sobre blanco */
                #app-wrapper .bg-fuchsia-500\\/10 { background-color: #fdf4ff !important; border-color: #fae8ff !important; }
                #app-wrapper .bg-amber-500\\/10 { background-color: #fffbeb !important; border-color: #fef3c7 !important; }
                #app-wrapper .bg-emerald-500\\/10 { background-color: #ecfdf5 !important; border-color: #d1fae5 !important; }
            `;
            
            wrapper.className = "h-screen w-full bg-[#f8fafc] text-zinc-900 flex overflow-hidden selection:bg-fuchsia-200 relative z-0 transition-colors duration-500";
            if (glows) glows.style.opacity = "0";
            nav.className = "w-64 lg:w-72 h-full flex-shrink-0 border-r border-zinc-200 bg-white flex flex-col transition-all duration-300 absolute lg:relative z-50 -translate-x-full lg:translate-x-0 shadow-sm";
            ai.className = "absolute right-0 top-0 w-80 lg:w-[400px] h-full flex-shrink-0 border-l border-zinc-200 bg-white/95 backdrop-blur-xl flex flex-col z-40 transform translate-x-full transition-all duration-300 shadow-[-10px_0_30px_rgba(0,0,0,0.05)]";
        }
    }
}