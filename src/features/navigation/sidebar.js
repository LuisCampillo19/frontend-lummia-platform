export function renderSidebar() {
  const container = document.getElementById('nav-container');
  if (!container) return;

  const menuItems = [
    { name: 'Home Hub', icon: 'dashboard', route: 'home' }, // <-- Cambiado aquí
    { name: 'Pomodoro', icon: 'pomodoro', route: 'pomodoro' },
    { name: 'Clan system', icon: 'clan', route: 'clan' },
    { name: 'Skill Tree', icon: 'courses', route: 'courses' },
    { name: 'My Loot', icon: 'treasure', route: 'skills' }
  ];

  container.innerHTML = /* html */`
    <div class="p-8 flex items-center gap-4 border-b border-white/[0.05]">
      <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] animate-float border border-white/20">L</div>
      <div class="flex flex-col">
        <h1 class="text-white text-xl font-bold tracking-tight leading-none drop-shadow-md">Lummia</h1>
        <span class="text-[9px] text-fuchsia-400 font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-[0_0_8px_rgba(192,38,211,0.5)]">Platform</span>
      </div>
    </div>

    <div class="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
      <p class="text-[10px] font-medium text-zinc-500 uppercase tracking-[0.2em] px-4 mb-5">Core Systems</p>
      
      ${menuItems.map(item => `
        <a href="#" data-route="${item.route}" 
           class="nav-link group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border border-transparent overflow-hidden cursor-pointer">
          
          <div class="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-purple-500 rounded-r-full transition-all duration-300 shadow-[0_0_12px_#a855f7]"></div>
          
          <img src="/assets/${item.icon}.png" alt="${item.name}" 
               class="nav-icon invert w-5 h-5 object-contain transition-all duration-300 z-10">
          <span class="nav-text font-medium text-sm transition-colors tracking-wide z-10">${item.name}</span>
        </a>
      `).join('')}
    </div>

    <div class="p-6 mt-auto border-t border-white/[0.05]">
      <div class="p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 flex flex-col gap-3 group cursor-pointer hover:border-white/10 transition-all shadow-inner relative overflow-hidden">
        
        <div class="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div class="flex items-center gap-4 relative z-10">
            <img src="/assets/clan.png" class="invert w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            <div class="flex-1">
                <p class="text-[10px] font-bold text-white uppercase tracking-widest mb-1">NightCoders</p>
                <p class="text-[9px] font-medium text-fuchsia-400 uppercase tracking-widest">Lvl. 14 Alliance</p>
            </div>
        </div>
        
        <div class="relative z-10 mt-2">
            <div class="flex justify-between items-center mb-1.5">
                <span class="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Rank Progress</span>
                <span class="text-[9px] font-bold text-purple-400">75%</span>
            </div>
            <div class="h-1.5 w-full bg-[#050505] rounded-full overflow-hidden border border-white/5">
                <div class="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 w-[75%] shadow-[0_0_10px_rgba(192,38,211,0.6)]"></div>
            </div>
        </div>
      </div>
    </div>
  `;
}