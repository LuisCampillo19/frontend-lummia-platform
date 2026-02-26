export function renderSidebar() {
  const container = document.getElementById('nav-container');
  if (!container) return;

  const menuItems = [
    { name: 'Dashboard', icon: 'home', route: 'home' },
    { name: 'Pomodoro', icon: 'pomodoro', route: 'pomodoro' },
    { name: 'Clan system', icon: 'clan', route: 'clan' },
    { name: 'Courses', icon: 'courses', route: 'courses' },
    { name: 'My Skills', icon: 'treasure', route: 'skills' }
  ];

  container.innerHTML = /* html */`
    <div class="p-6 md:p-8 flex items-center gap-3.5 border-b border-white/[0.02]">
      <div class="w-10 h-10 bg-[#46F216] rounded-xl flex items-center justify-center text-[#080A0F] font-black text-2xl shadow-[0_0_20px_rgba(70,242,22,0.4)]">L</div>
      <div class="flex flex-col">
        <h1 class="text-white text-xl font-bold tracking-tighter leading-none">Lummia</h1>
        <span class="text-[9px] text-[#46F216] font-black tracking-[0.2em] uppercase opacity-70">Industrial</span>
      </div>
    </div>

    <div class="flex-1 px-4 py-8 md:py-10 space-y-2.5 overflow-y-auto custom-scrollbar">
      <p class="text-[10px] font-black text-[#697C97]/40 uppercase tracking-[0.3em] px-4 mb-5">Core Systems</p>
      
      ${menuItems.map(item => `
        <a href="#" data-route="${item.route}" 
           class="nav-link group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 bg-transparent hover:bg-white/[0.02] overflow-hidden cursor-pointer">
          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#46F216] rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_#46F216]"></div>
          
          <img src="/assets/${item.icon}.png" alt="${item.name}" 
               class="invert w-6 md:w-5 h-6 md:h-5 object-contain opacity-40 group-hover:opacity-100 transition-all duration-300">
          
          <span class="font-bold text-base md:text-sm text-[#697C97] group-hover:text-white transition-colors tracking-tight">${item.name}</span>
        </a>
      `).join('')}
    </div>

    <div class="p-6 mt-auto border-t border-white/[0.02]">
      <div class="p-5 rounded-3xl bg-[#11161E] flex items-center gap-4 group cursor-pointer hover:bg-white/[0.01] transition-all shadow-xl">
        <img src="/assets/clan.png" class="invert w-8 h-8 opacity-30 group-hover:opacity-100 transition-opacity">
        <div class="flex-1">
            <p class="text-[10px] font-black text-[#46F216] uppercase tracking-widest opacity-80">NightCoders</p>
            <div class="flex items-center gap-2 mt-1">
                <div class="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div class="h-full bg-[#46F216] w-[75%] shadow-[0_0_8px_#46F216]"></div>
                </div>
                <span class="text-[9px] font-bold text-white">75%</span>
            </div>
        </div>
      </div>
    </div>
  `;
}