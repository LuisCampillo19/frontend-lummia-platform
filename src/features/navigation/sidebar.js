// src/features/navigation/sidebar.js

export function renderSidebar() {
  const container = document.getElementById('nav-container');
  if (!container) return;

  container.innerHTML = /* html */`
    <div class="p-6 mb-6 flex items-center gap-2">
      <div class="w-8 h-8 bg-lummia-sage rounded-lg flex items-center justify-center text-black font-bold">L</div>
      <h1 class="text-lummia-sage text-xl font-bold tracking-tighter">
        Lummia <span class="text-[10px] block text-gray-500 font-normal">PLATFORM</span>
      </h1>
    </div>

    <div class="flex-1 px-4 space-y-2">
      <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-4">Menu</p>
      
      <a href="#" data-route="home" class="nav-btn flex items-center gap-3 p-3 rounded-xl border transition-all group border-transparent text-gray-400 hover:text-white hover:bg-white/5">
        <img src="/assets/home.png" alt="Home" class="w-5 h-5 sm:w-6 sm:h-6 object-contain invert transition-transform group-hover:scale-110 opacity-70">
        <span class="font-medium">Home</span>
      </a>
      
      <a href="#" data-route="pomodoro" class="nav-btn flex items-center gap-3 p-3 rounded-xl border transition-all group border-transparent text-gray-400 hover:text-white hover:bg-white/5">
        <img src="/assets/pomodoro.png" alt="Pomodoros" class="w-5 h-5 sm:w-6 sm:h-6 object-contain invert transition-transform group-hover:scale-110 opacity-70">
        <span class="font-medium">My Pomodoros</span>
      </a>
      
      <a href="#" data-route="courses" class="nav-btn flex items-center gap-3 p-3 rounded-xl border transition-all group border-transparent text-gray-400 hover:text-white hover:bg-white/5">
        <img src="/assets/courses.png" alt="Courses" class="w-5 h-5 sm:w-6 sm:h-6 object-contain invert transition-transform group-hover:scale-110 opacity-70">
        <span class="font-medium">Courses</span>
      </a>

      <a href="#" data-route="clan" class="nav-btn flex items-center gap-3 p-3 rounded-xl border transition-all group border-transparent text-gray-400 hover:text-white hover:bg-white/5">
        <img src="/assets/clan.png" alt="Clan" class="w-5 h-5 sm:w-6 sm:h-6 object-contain invert transition-transform group-hover:scale-110 opacity-70">
        <span class="font-medium">My Clan</span>
      </a>
    </div>

    <div class="p-4 mt-auto">
      <div class="p-4 bg-white/5 rounded-2xl border border-white/5 text-center relative overflow-hidden group cursor-pointer hover:border-lummia-sage/30 transition-colors">
        <img src="/assets/shield.png" alt="Clan Shield" class="text-gray-300 w-10 h-10 mx-auto mb-2 object-contain invert group-hover:scale-110 transition-transform">
        <p class="text-xs font-bold text-white relative z-10">NightCoders</p>
        <p class="text-[9px] text-lummia-sage relative z-10">12 online</p>
      </div>
    </div>
  `;
}