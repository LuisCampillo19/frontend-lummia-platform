// src/views/pomodoro.js

export function renderPomodoro() {
  return `
    <div class="p-8 fade-in h-full flex flex-col items-center justify-center text-center relative">
      <div class="bg-black/40 border border-white/5 p-12 rounded-[3rem] shadow-2xl w-full max-w-md relative overflow-hidden">
        
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-lummia-sage/10 blur-[50px]"></div>

        <h2 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 relative z-10">Deep Work Session</h2>
        
        <div class="flex gap-2 justify-center mb-6 relative z-10">
           <button class="time-btn border border-white/10 text-gray-400 hover:text-white px-4 py-1 rounded-full text-xs font-bold transition-all" data-time="15" data-xp="300">15m</button>
           <button class="time-btn border border-lummia-sage text-lummia-sage bg-lummia-sage/10 px-4 py-1 rounded-full text-xs font-bold transition-all" data-time="25" data-xp="500">25m</button>
           <button class="time-btn border border-white/10 text-gray-400 hover:text-white px-4 py-1 rounded-full text-xs font-bold transition-all" data-time="45" data-xp="900">45m</button>
           <button class="time-btn border border-white/10 text-gray-400 hover:text-white px-4 py-1 rounded-full text-xs font-bold transition-all" data-time="60" data-xp="1200">60m</button>
        </div>
        
        <div id="pomodoro-display" class="text-8xl font-black text-white mb-8 tracking-tighter relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          25:00
        </div>
        
        <div class="flex items-center justify-center gap-4 relative z-10 mb-8">
          <button id="reset-btn" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition" title="Reset Timer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
          <button id="start-btn" class="px-8 py-4 rounded-full bg-lummia-sage text-black font-bold text-lg hover:bg-[#4a8f62] hover:scale-105 transition-all shadow-[0_0_20px_rgba(88,166,115,0.4)]">
            START FOCUS
          </button>
        </div>

        <div class="bg-white/5 rounded-2xl p-4 border border-white/5 relative z-10 text-left w-full">
           <p class="text-xs text-gray-400 mb-2">Target Reward (<span id="reward-xp-text">+500 XP</span>):</p>
           <div class="flex items-center gap-3">
              <img src="/assets/treasure.png" alt="Reward Icon" class="w-6 h-6 object-contain invert">
              <input type="text" id="reward-input" placeholder="Enter your reward..." class="bg-transparent border-b border-white/10 text-sm text-white font-medium focus:outline-none focus:border-lummia-sage w-full transition-colors pb-1" value="">
           </div>
        </div>

      </div>

      <div id="reward-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 hidden opacity-0 transition-opacity duration-300">
         <div id="reward-modal-content" class="bg-lummia-dark border border-lummia-sage/30 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(88,166,115,0.15)] text-center max-w-sm w-full transform scale-95 transition-transform duration-300">
            <div class="w-20 h-20 bg-lummia-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-lummia-sage/30">
               <img src="/assets/treasure.png" alt="Chest" class="w-10 h-10 object-contain invert">
            </div>
            <h3 class="text-2xl font-black text-white mb-2 uppercase tracking-tight">Quest Complete</h3>
            <p id="modal-xp-text" class="text-lummia-sage font-bold mb-6">+500 EXP Gained</p>
            
            <div class="bg-black/40 border border-white/5 p-4 rounded-xl mb-8">
               <p class="text-xs text-gray-500 uppercase tracking-widest mb-1">Your Reward</p>
               <p id="modal-reward-text" class="text-white font-medium text-lg"></p>
            </div>
            
            <button id="close-modal-btn" class="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold tracking-widest uppercase transition-colors">
               Claim Reward
            </button>
         </div>
      </div>

    </div>
  `;
}