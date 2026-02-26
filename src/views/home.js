// src/views/home.js

export function renderHome() {
  return `
    <div class="p-8 fade-in text-gray-300 w-full max-w-6xl mx-auto space-y-10">
       
       <section class="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-lummia-sage/10 to-transparent border border-white/5 overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-lummia-sage/5 blur-[80px] -mr-20 -mt-20"></div>
          
          <div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="flex items-center gap-6">
              <div class="relative">
                <div class="w-24 h-24 bg-lummia-dark border-4 border-lummia-sage rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(88,166,115,0.3)]">
                  🧙‍♂️
                </div>
                <div class="absolute -bottom-2 -right-2 bg-lummia-burn text-white text-xs font-black px-2 py-1 rounded-md border border-lummia-dark">
                  LVL 15
                </div>
              </div>
              
              <div>
                <h2 class="text-4xl font-black text-white tracking-tight">JennLopezDv</h2>
                <p class="text-lummia-sage font-medium tracking-wide">MASTER ARCHITECT</p>
              </div>
            </div>

            <div class="w-full md:w-72 space-y-3">
              <div class="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                <span>Experience Points</span>
                <span class="text-white">12,450 / 15,000 XP</span>
              </div>
              <div class="h-3 w-full bg-black/40 rounded-full border border-white/5 p-0.5">
                <div class="h-full bg-lummia-sage rounded-full shadow-[0_0_15px_rgba(88,166,115,0.5)]" style="width: 83%"></div>
              </div>
            </div>
          </div>
       </section>

       <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div class="lg:col-span-2 space-y-6">
             <div class="flex items-center justify-between px-2">
                <h3 class="text-xl font-bold text-white flex items-center gap-3">
                   <span class="w-2 h-8 bg-lummia-burn rounded-full"></span>
                   Active Quests
                </h3>
                <button class="text-xs font-bold text-lummia-sage hover:underline">VIEW ALL LOGS</button>
             </div>

             <div class="grid gap-4">
                <div class="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-lummia-sage/5 hover:border-lummia-sage/30 transition-all cursor-pointer">
                   <div class="flex justify-between items-start mb-4">
                      <div class="flex gap-4">
                        <div class="w-12 h-12 bg-lummia-burn/10 border border-lummia-burn/20 rounded-xl flex items-center justify-center text-2xl">🏛️</div>
                        <div>
                           <h4 class="text-white font-bold text-lg group-hover:text-lummia-sage transition-colors">Vida Sana Hospital - Relational DB</h4>
                           <p class="text-sm text-gray-500">Epic Quest: Modeling the core database architecture.</p>
                        </div>
                      </div>
                      <span class="text-lummia-burn font-bold text-xs tracking-tighter">+800 XP</span>
                   </div>
                   <div class="flex items-center gap-4">
                      <div class="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden">
                        <div class="h-full bg-lummia-burn" style="width: 75%"></div>
                      </div>
                      <span class="text-[10px] font-black text-gray-500">75%</span>
                   </div>
                </div>

                <div class="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all cursor-pointer">
                   <div class="flex justify-between items-start mb-4">
                      <div class="flex gap-4">
                        <div class="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-2xl">💻</div>
                        <div>
                           <h4 class="text-white font-bold text-lg">SPA Router Logic</h4>
                           <p class="text-sm text-gray-500">Daily Quest: Fix navigation bug in Firefox.</p>
                        </div>
                      </div>
                      <span class="text-blue-400 font-bold text-xs tracking-tighter">+150 XP</span>
                   </div>
                   <div class="flex items-center gap-4">
                      <div class="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden">
                        <div class="h-full bg-blue-500" style="width: 90%"></div>
                      </div>
                      <span class="text-[10px] font-black text-gray-500">90%</span>
                   </div>
                </div>
             </div>
          </div>

          <div class="space-y-8">
             <div class="bg-black/40 border border-white/5 p-6 rounded-[2rem] shadow-xl">
                <h3 class="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-6 text-center">Focus Music</h3>
                <div class="relative w-24 h-24 mx-auto mb-6">
                   <div class="absolute inset-0 bg-[#1DB954] blur-2xl opacity-20 animate-pulse"></div>
                   <div class="relative w-full h-full bg-[#1DB954]/10 rounded-full flex items-center justify-center border border-[#1DB954]/30">
                      <svg class="w-12 h-12 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C22 6.477 17.523 2 12 2zm0 14.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"/></svg>
                   </div>
                </div>
                <div class="text-center space-y-1">
                   <p class="text-white font-bold">Rock Essentials</p>
                   <p class="text-[10px] text-[#1DB954] font-black uppercase tracking-widest">Connected</p>
                </div>
             </div>

             <div class="bg-white/5 border border-white/5 p-6 rounded-[2rem]">
                <div class="flex items-center gap-4 mb-6">
                   <div class="p-3 bg-white/5 rounded-2xl">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </div>
                   <h3 class="text-sm font-bold text-white uppercase tracking-tighter">Forge Activity</h3>
                </div>
                <div class="flex justify-between items-center bg-black/20 p-4 rounded-2xl border border-white/5">
                   <span class="text-xs text-gray-500 font-bold">Weekly Commits</span>
                   <span class="text-lummia-sage font-black text-xl">24</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  `;
}