// src/views/pomodoro.js
export function renderPomodoro() {
  return `
    <div class="p-8 fade-in h-full flex flex-col items-center justify-center text-center">
      <div class="bg-black/40 border border-white/5 p-12 rounded-[3rem] shadow-2xl w-full max-w-md relative overflow-hidden">
        
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-lummia-sage/10 blur-[50px]"></div>

        <h2 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-8 relative z-10">Deep Work Session</h2>
        
        <div class="text-8xl font-black text-white mb-8 tracking-tighter relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          25:00
        </div>
        
        <div class="flex items-center justify-center gap-4 relative z-10 mb-8">
          <button class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
          <button class="px-8 py-4 rounded-full bg-lummia-sage text-black font-bold text-lg hover:bg-[#4a8f62] hover:scale-105 transition-all shadow-[0_0_20px_rgba(88,166,115,0.4)]">
            START FOCUS
          </button>
        </div>

        <div class="bg-white/5 rounded-2xl p-4 border border-white/5 relative z-10 text-left">
           <p class="text-xs text-gray-400 mb-1">Upcoming Reward:</p>
           <p class="text-sm text-white font-medium flex items-center gap-2">
              <span class="text-red-500">📺</span> 1 Episode on Netflix (Long Break)
           </p>
        </div>

      </div>
    </div>
  `;
}