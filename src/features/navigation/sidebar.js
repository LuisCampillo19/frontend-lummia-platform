export function renderSidebar() {
  const container = document.getElementById('nav-container');
  if (!container) return;

  const menuItems = [
    { name: 'Home', icon: 'home', route: 'home' },
    { name: 'Pomodoro', icon: 'pomodoro', route: 'pomodoro' },
    { name: 'Clan', icon: 'clan', route: 'clan' },
    { name: 'Courses', icon: 'courses', route: 'courses' },
    { name: 'Skill Tree', icon: 'skills', route: 'skills' }
  ];

  container.innerHTML = /* html */`
    <style>
      @keyframes infinite-scroll-text {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-infinite-scroll {
        animation: infinite-scroll-text 8s linear infinite;
      }
      .logo-filter {
        mix-blend-mode: screen; 
        filter: brightness(1.1);
      }
      .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }
    </style>

    <div class="p-6 flex items-center justify-between border-b border-white/[0.05] relative">
      <div class="flex items-center gap-4">
          <div class="w-10 h-10 relative flex-shrink-0 group/logo">
              <div class="absolute inset-0 bg-fuchsia-500/10 blur-2xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="../../assets/logo.png" 
                alt="Lummia Logo" 
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[75px] h-auto z-10 logo-filter transition-transform duration-300 group-hover/logo:scale-110 pointer-events-none"
              >
          </div>
         
         <div class="flex flex-col justify-center z-20">
           <h1 class="text-white text-xl font-bold tracking-tight leading-none uppercase">Lummia</h1>
           <span class="text-[9px] text-fuchsia-500 font-bold tracking-[0.2em] uppercase mt-1">Platform</span>
         </div>
      </div>
      
      <button id="hide-sidebar-btn" class="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-zinc-500 hover:text-zinc-200 transition-all flex-shrink-0 z-30 group">
         <i class="fa-solid fa-chevron-left text-xs group-hover:-translate-x-0.5 transition-transform"></i>
      </button>
    </div>

    <div class="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
      <p class="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.15em] px-4 mb-4">Core Systems</p>
      
      ${menuItems.map(item => `
        <a href="#" data-route="${item.route}" 
           class="nav-link group relative flex items-center gap-4 p-3.5 rounded-xl transition-all duration-300 border border-transparent overflow-hidden cursor-pointer hover:bg-white/[0.03]">
          <div class="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-fuchsia-500 rounded-r-full transition-all duration-300 shadow-[0_0_12px_#d946ef]"></div>
          <img src="/assets/${item.icon}.png" alt="${item.name}" 
               class="nav-icon invert w-5 h-5 object-contain opacity-50 group-hover:opacity-100 transition-opacity">
          <span class="nav-text font-medium text-sm text-zinc-400 group-hover:text-white transition-colors">${item.name}</span>
        </a>
      `).join('')}
    </div>

    <div class="mt-auto p-4 border-t border-white/[0.05]">
       <div class="relative group w-full">
          <div class="bg-black/20 backdrop-blur-md border border-white/5 rounded-2xl p-2 hover:bg-white/[0.04] transition-all duration-300 flex flex-col overflow-hidden shadow-lg">
             <div class="flex items-center gap-2 w-full cursor-pointer nav-link p-2 rounded-xl transition-colors" data-route="profile">
                <div class="w-8 h-8 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-xs font-bold">M</div>
                
                <div class="flex-1 min-w-0">
                   <h4 class="text-xs font-bold text-zinc-200 truncate">MATIASAC110508</h4>
                   <div class="flex items-center gap-1.5 overflow-hidden" style="-webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);">
                      <div class="flex w-max animate-infinite-scroll">
                         <span class="text-[9px] text-zinc-500 uppercase tracking-widest pr-8">Nightcoders <span class="text-amber-500/80 font-bold">Rank 4</span></span>
                         <span class="text-[9px] text-zinc-500 uppercase tracking-widest pr-8">Nightcoders <span class="text-amber-500/80 font-bold">Rank 4</span></span>
                      </div>
                   </div>
                </div>
                <span class="text-[9px] font-bold text-fuchsia-400/80 bg-fuchsia-500/5 border border-fuchsia-500/10 px-1.5 py-0.5 rounded">L14</span>
             </div>

              <div class="mt-auto p-6 border-t border-white/5">
                <h4 class="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-3">System Theme</h4>
                <div class="flex gap-2 bg-black/40 p-1 rounded-xl border border-white/5">
                    <button data-theme="neon" class="theme-btn flex-1 py-2 rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 hover:bg-fuchsia-500/30 transition-all group relative">
                      <i class="fa-solid fa-wand-magic-sparkles text-xs pointer-events-none"></i>
                    </button>
                    <button data-theme="black" class="theme-btn flex-1 py-2 rounded-lg bg-transparent text-zinc-500 hover:text-white hover:bg-white/5 transition-all">
                      <i class="fa-solid fa-moon text-xs pointer-events-none"></i>
                    </button>
                    <button data-theme="white" class="theme-btn flex-1 py-2 rounded-lg bg-transparent text-zinc-500 hover:text-zinc-800 hover:bg-white transition-all">
                      <i class="fa-solid fa-sun text-xs pointer-events-none"></i>
                    </button>
                </div>
              </div>

             <div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                <div class="overflow-hidden">
                   <div class="pt-2 pb-1 px-2 border-t border-white/5 mt-1 flex flex-col gap-3">
                      <div class="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <div class="h-full bg-fuchsia-500 w-[75%] shadow-[0_0_8px_#d946ef]"></div>
                      </div>
                      <div class="flex gap-2">
                         <button class="nav-link flex-1 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[9px] text-white font-black uppercase tracking-wider transition-colors" data-route="profile">
                            Profile
                         </button>
                         <button id="logout-btn" class="flex-1 py-1.5 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-[9px] text-red-400 font-bold uppercase tracking-wider transition-colors">
                          Exit
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  `;

  // --- MINIMALIST TOGGLE LOGIC ---
  setTimeout(() => {
    container.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    const hideBtn = document.getElementById('hide-sidebar-btn');
    let openBtn = document.getElementById('floating-sidebar-btn');

    if (!openBtn) {
       openBtn = document.createElement('button');
       openBtn.id = 'floating-sidebar-btn';
       
       // ULTRA-SMALL DESIGN: 32px size, subtle background
       openBtn.className = `
          fixed top-5 left-5 z-[100] 
          w-8 h-8 
          bg-white/[0.05] backdrop-blur-sm 
          border border-white/10 
          rounded-lg flex items-center justify-center 
          text-fuchsia-500
          scale-0 opacity-0 pointer-events-none 
          transition-all duration-300 hover:bg-white/10
          group
       `;
       
       // Very thin minimalist lines
       openBtn.innerHTML = `
          <div class="flex flex-col gap-1 items-start">
             <span class="w-4 h-0.5 bg-current rounded-full"></span>
             <span class="w-2 h-0.5 bg-current rounded-full"></span>
             <span class="w-3 h-0.5 bg-current rounded-full"></span>
          </div>
       `;
       document.body.appendChild(openBtn);
    }

    hideBtn.onclick = () => {
       container.style.marginLeft = `-${container.offsetWidth}px`;
       container.style.opacity = '0';
       openBtn.classList.remove('scale-0', 'opacity-0', 'pointer-events-none');
    };

    openBtn.onclick = () => {
       container.style.marginLeft = '0px';
       container.style.opacity = '1';
       openBtn.classList.add('scale-0', 'opacity-0', 'pointer-events-none');
    };
  }, 0);
}