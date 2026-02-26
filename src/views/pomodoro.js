export function renderPomodoro() {
  return /* html */`
    <div class="p-8 fade-in h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      <div class="bg-[#11161E]/60 backdrop-blur-2xl border border-white/[0.02] p-12 rounded-[3.5rem] shadow-2xl w-full max-w-lg relative overflow-hidden group">
        
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#46F216]/5 blur-[60px] pointer-events-none"></div>

        <div class="relative z-10">
          <div class="flex items-center justify-center gap-2 mb-6">
            <span class="w-1.5 h-1.5 bg-[#46F216] rounded-full shadow-[0_0_8px_#46F216] animate-pulse"></span>
            <h2 class="text-[10px] font-black text-[#697C97] uppercase tracking-[0.4em]">Deep Work Protocol</h2>
          </div>
          
          <div class="flex gap-3 justify-center mb-10">
             ${[15, 25, 45, 60].map(time => {
               const isActive = time === 25;
               const xp = time * 20;
               return `
                <button class="time-btn px-5 py-2 rounded-xl text-[11px] font-black transition-all duration-300 border 
                  ${isActive 
                    ? 'border-[#46F216]/40 bg-[#46F216]/10 text-[#46F216] shadow-[0_0_15px_rgba(70,242,22,0.1)]' 
                    : 'border-white/5 text-[#697C97] hover:border-white/10 hover:text-white bg-black/20'}" 
                  data-time="${time}" data-xp="${xp}">
                  ${time}M
                </button>
               `;
             }).join('')}
          </div>
          
          <div id="pomodoro-display" class="text-[10rem] font-black text-white mb-10 tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            25:00
          </div>
          
          <div class="flex items-center justify-center gap-6 mb-10">
            <button id="reset-btn" class="w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center text-[#697C97] hover:text-[#46F216] hover:border-[#46F216]/30 transition-all group/btn" title="Reset System">
              <svg class="w-6 h-6 group-hover/btn:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            
            <button id="start-btn" class="px-12 py-5 rounded-[2rem] bg-[#46F216] text-[#080A0F] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(70,242,22,0.4)] tracking-tighter uppercase">
              Initialize Focus
            </button>
          </div>

          <div class="bg-black/40 rounded-3xl p-6 border border-white/5 text-left w-full group/input hover:border-[#46F216]/20 transition-all">
             <p class="text-[10px] font-black text-[#697C97] uppercase tracking-widest mb-3 opacity-60">Target Reward Status (<span id="reward-xp-text" class="text-[#46F216] font-bold">+500 XP</span>)</p>
             <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-[#080A0F] rounded-xl flex items-center justify-center border border-white/5 group-hover/input:border-[#46F216]/30 transition-all">
                    <img src="/assets/treasure.png" alt="Reward" class="w-5 h-5 object-contain invert opacity-40 group-hover/input:opacity-100 transition-all">
                </div>
                <input type="text" id="reward-input" placeholder="Enter objective..." class="bg-transparent border-b border-white/10 text-base text-white font-bold focus:outline-none focus:border-[#46F216] w-full transition-all pb-1 placeholder:text-[#697C97]/30" value="">
             </div>
          </div>
        </div>
      </div>

      <div id="reward-modal" class="fixed inset-0 bg-[#080A0F]/90 backdrop-blur-xl flex items-center justify-center z-50 hidden opacity-0 transition-opacity duration-500 p-6">
         <div id="reward-modal-content" class="bg-[#11161E] border border-[#46F216]/30 p-12 rounded-[3rem] shadow-[0_0_60px_rgba(70,242,22,0.15)] text-center max-w-md w-full transform scale-95 transition-all duration-500">
            <div class="w-24 h-24 bg-[#46F216]/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-[#46F216]/20 shadow-[0_0_20px_rgba(70,242,22,0.1)]">
               <img src="/assets/treasure.png" alt="Chest" class="w-12 h-12 object-contain invert">
            </div>
            <h3 class="text-3xl font-black text-white mb-2 uppercase tracking-tighter italic">Quest Complete</h3>
            <p id="modal-xp-text" class="text-[#46F216] font-black text-sm tracking-[0.2em] mb-8">+500 EXP SYNCHRONIZED</p>
            
            <div class="bg-black/60 border border-white/5 p-6 rounded-2xl mb-10">
               <p class="text-[10px] text-[#697C97] font-black uppercase tracking-widest mb-2 opacity-50 italic">Objective Secured</p>
               <p id="modal-reward-text" class="text-white font-black text-xl tracking-tight"></p>
            </div>
            
            <button id="close-modal-btn" class="w-full py-5 bg-[#46F216]/10 hover:bg-[#46F216]/20 border border-[#46F216]/30 rounded-2xl text-[#46F216] font-black tracking-[0.2em] uppercase transition-all active:scale-95 shadow-lg">
               Claim Reward
            </button>
         </div>
      </div>

    </div>
  `;
}