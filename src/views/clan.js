export function renderClan() {
  return /* html */`
    <div class="fade-in space-y-10">
      
      <div class="h-52 w-full bg-[#11161E]/50 rounded-[2.5rem] flex items-end p-10 relative overflow-hidden border border-white/[0.02]">
        <div class="absolute inset-0 bg-[url('/assets/clan.png')] bg-no-repeat bg-right opacity-[0.03] bg-contain invert transform scale-150 translate-x-20 pointer-events-none"></div>
        
        <div class="relative z-10 flex items-center gap-10">
          <div class="w-28 h-28 bg-[#080A0F] rounded-[2rem] flex items-center justify-center p-5 border border-white/[0.03] shadow-[0_0_40px_rgba(70,242,22,0.1)]">
             <img src="/assets/clan.png" class="w-full h-full object-contain invert opacity-90" alt="Shield">
          </div>
          <div>
            <div class="flex items-center gap-4 mb-2">
                <h2 class="text-5xl font-black text-white tracking-tighter">NightCoders</h2>
                <span class="text-[10px] font-black bg-[#46F216]/10 text-[#46F216] px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-[#46F216]/20 shadow-[0_0_15px_rgba(70,242,22,0.1)]">Elite Guild</span>
            </div>
            <p class="text-[#697C97] font-bold uppercase tracking-[0.1em] text-sm">Rank #42 Global <span class="mx-3 opacity-20">|</span> <span class="text-white">12 Members Online</span></p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-7 bg-[#11161E]/40 rounded-[2.5rem] p-10 border border-white/[0.01]">
          <div class="flex items-center justify-between mb-10">
            <h3 class="text-xs font-black text-[#697C97] uppercase tracking-[0.3em] opacity-50">Live Operation Feed</h3>
            <div class="flex items-center gap-2">
                <span class="text-[9px] font-black text-[#46F216] uppercase tracking-widest">Active Sync</span>
                <div class="w-2 h-2 bg-[#46F216] rounded-full animate-pulse shadow-[0_0_10px_#46F216]"></div>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="flex gap-6 items-center p-5 rounded-2xl hover:bg-white/[0.02] transition-all group cursor-default">
              <div class="w-12 h-12 rounded-xl bg-[#080A0F] border border-white/5 flex items-center justify-center font-black text-xs text-[#46F216] group-hover:border-[#46F216]/30 transition-all">JL</div>
              <div class="flex-1">
                <p class="text-gray-400 text-sm leading-relaxed">
                    <span class="font-bold text-white group-hover:text-[#46F216] transition-colors italic">JennLopezDv</span> 
                    deployed build to <span class="text-[#F46328] font-black tracking-tight">PROD-LUMMIA</span>
                </p>
                <p class="text-[10px] font-bold text-[#697C97]/40 mt-1 uppercase tracking-widest">2 mins ago • GitHub Sync</p>
              </div>
            </div>

            <div class="flex gap-6 items-center p-5 rounded-2xl hover:bg-white/[0.02] transition-all group cursor-default">
              <div class="w-12 h-12 rounded-xl bg-[#080A0F] border border-white/5 flex items-center justify-center font-black text-xs text-[#F46328] group-hover:border-[#F46328]/30 transition-all">MA</div>
              <div class="flex-1">
                <p class="text-gray-400 text-sm leading-relaxed">
                    <span class="font-bold text-white group-hover:text-[#F46328] transition-colors italic">MatiasAC110508</span> 
                    unlocked <span class="text-[#46F216] font-black tracking-tight">Deep Focus Badge</span>
                </p>
                <p class="text-[10px] font-bold text-[#697C97]/40 mt-1 uppercase tracking-widest">15 mins ago • Pomodoro</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col gap-6">
          <div class="flex-1 bg-[#11161E]/60 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group border border-white/[0.02]">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-[#46F216]/5 blur-[60px] group-hover:bg-[#46F216]/10 transition-all"></div>
            <p class="text-[10px] text-[#697C97] font-black uppercase tracking-[0.2em] mb-4">Guild Vault (EXP)</p>
            <p class="text-6xl font-black text-white tracking-tighter">45,200 <span class="text-[#46F216] text-xl opacity-30 font-light italic">xp</span></p>
            <div class="h-1.5 w-16 bg-[#46F216] mt-6 rounded-full shadow-[0_0_15px_#46F216]"></div>
          </div>

          <div class="flex-1 bg-[#11161E]/60 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group border border-white/[0.02]">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-[#F46328]/5 blur-[60px] group-hover:bg-[#F46328]/10 transition-all"></div>
            <p class="text-[10px] text-[#697C97] font-black uppercase tracking-[0.2em] mb-4">Weekly Objectives</p>
            <p class="text-6xl font-black text-[#F46328] tracking-tighter">3<span class="text-white/10 px-3 font-thin">/</span>5</p>
            <div class="flex gap-1.5 mt-6">
                <div class="h-1.5 w-8 bg-[#F46328] rounded-full shadow-[0_0_10px_#F46328]"></div>
                <div class="h-1.5 w-8 bg-[#F46328] rounded-full shadow-[0_0_10px_#F46328]"></div>
                <div class="h-1.5 w-8 bg-[#F46328] rounded-full shadow-[0_0_10px_#F46328]"></div>
                <div class="h-1.5 w-8 bg-white/5 rounded-full"></div>
                <div class="h-1.5 w-8 bg-white/5 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}