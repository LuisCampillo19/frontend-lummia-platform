// src/views/clan.js
export function renderClan() {
  return `
    <div class="p-8 fade-in h-full max-w-5xl mx-auto">
      <div class="h-40 w-full bg-gradient-to-r from-blue-900/40 to-black/40 rounded-3xl border border-white/5 flex items-end p-8 mb-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/shield.png')] bg-no-repeat bg-right opacity-5 bg-contain invert pointer-events-none transform scale-150 translate-x-10"></div>
        <div class="relative z-10 flex items-center gap-6">
          <div class="w-20 h-20 bg-blue-500/20 border-2 border-blue-400 rounded-2xl flex items-center justify-center p-3 backdrop-blur-sm">
             <img src="/assets/shield.png" class="w-full h-full object-contain invert" alt="Shield">
          </div>
          <div>
            <h2 class="text-4xl font-bold text-white tracking-tight mb-1">NightCoders Guild</h2>
            <p class="text-blue-400 font-medium">Rank #42 Global • 12 Members Online</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-black/20 border border-white/5 rounded-3xl p-6 shadow-lg">
          <h3 class="text-lg font-bold text-white mb-4">Live Activity</h3>
          <div class="space-y-4">
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-lummia-sage/20 text-lummia-sage flex items-center justify-center font-bold text-xs mt-1">JL</div>
              <div>
                <p class="text-gray-300 text-sm"><span class="font-bold text-white">JennLopezDv</span> pushed code to <span class="text-blue-400">frontend-lummia</span></p>
                <p class="text-xs text-gray-500 mt-1">2 mins ago via GitHub Sync</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs mt-1">M</div>
              <div>
                <p class="text-gray-300 text-sm"><span class="font-bold text-white">Matias</span> completed the Pomodoro goal.</p>
                <p class="text-xs text-gray-500 mt-1">15 mins ago</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col justify-center text-center hover:bg-white/10 transition cursor-pointer">
            <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Guild Vault (EXP)</p>
            <p class="text-3xl font-black text-white">45,200</p>
          </div>
          <div class="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col justify-center text-center hover:bg-white/10 transition cursor-pointer">
            <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Weekly Quests</p>
            <p class="text-3xl font-black text-lummia-sage">3/5</p>
          </div>
        </div>
      </div>
    </div>
  `;
}