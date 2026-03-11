// src/views/clan.js

export function renderClan() {
  return /* html */`
    <div class="animate-system-boot h-full flex flex-col relative z-0 p-4 lg:p-6 lg:px-8">
      
      <div class="flex-none bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] p-8 mb-8 relative overflow-hidden shadow-2xl group flex-shrink-0">
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[80px] group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
        <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
           <div class="relative">
             <div class="w-24 h-24 lg:w-28 lg:h-28 rounded-[2rem] bg-black/60 border-2 border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.2)] flex items-center justify-center text-5xl transform group-hover:scale-105 transition-all duration-300 backdrop-blur-md">
                🛡️
             </div>
             <div class="absolute -bottom-3 -right-3 bg-black border border-indigo-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.5)]">LVL 14</div>
           </div>
           <div class="flex-1 w-full text-center md:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-3">
                <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse shadow-[0_0_8px_#818cf8]"></span>
                <span class="text-indigo-400 text-[9px] font-bold uppercase tracking-widest">Elite Alliance</span>
              </div>
              <h1 class="text-3xl lg:text-4xl font-bold text-white tracking-wide mb-4 truncate drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">Nightcoders</h1>
              <div class="max-w-xl">
                 <div class="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                    <span class="text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] flex items-center gap-1.5"><i class="fa-solid fa-users"></i> 24/30 Members</span>
                    <span>Next Guild Perk: 15,000 XP</span>
                 </div>
                 <div class="h-3.5 w-full bg-black/80 rounded-full border border-white/10 overflow-hidden shadow-inner p-[1px]">
                    <div class="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-full w-[75%] shadow-[0_0_15px_rgba(99,102,241,0.6)] relative overflow-hidden">
                       <div class="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                 </div>
              </div>
           </div>
           <div class="hidden lg:flex gap-4">
              <div class="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-5 min-w-[100px] shadow-lg">
                 <span class="text-2xl mb-1 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">🏆</span>
                 <span class="text-xl font-black text-white tracking-tighter">Rank 4</span>
                 <span class="text-[9px] text-amber-400 font-bold uppercase tracking-widest mt-1">Global</span>
              </div>
           </div>
        </div>
      </div>

      <div class="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
         
         <div class="lg:col-span-8 flex flex-col gap-6 h-full">
            <div class="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] p-6 lg:p-8 shadow-2xl flex-1 flex flex-col overflow-hidden relative">
               
               <div class="flex items-center justify-between mb-6">
                  <h3 class="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
                     <i class="fa-solid fa-ranking-star text-amber-400"></i> Clan Ranking
                  </h3>
                  <div class="flex gap-2 bg-black/40 p-1 rounded-xl border border-white/10">
                     <button class="px-4 py-1.5 bg-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">Weekly</button>
                     <button class="px-4 py-1.5 hover:bg-white/5 text-zinc-500 hover:text-white rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">All Time</button>
                  </div>
               </div>

               <div class="flex-1 overflow-y-auto custom-scrollbar pr-2">
                  <div class="space-y-3">
                     
                     <div class="flex items-center gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 shadow-[inset_0_0_20px_rgba(251,191,36,0.1)] group hover:bg-amber-500/20 transition-all cursor-pointer">
                        <span class="text-2xl w-8 text-center font-black text-amber-400 drop-shadow-md">1</span>
                        <div class="relative">
                            <div class="w-12 h-12 rounded-full bg-black/60 border-2 border-amber-500 flex items-center justify-center text-xl">🦊</div>
                            <div class="absolute -bottom-2 -right-2 bg-amber-500 text-black text-[8px] font-black px-1.5 py-0.5 rounded shadow-lg">LDR</div>
                        </div>
                        <div class="flex-1">
                           <p class="text-sm font-bold text-white flex items-center gap-2">Alex_Dev <i class="fa-solid fa-crown text-amber-400 text-[10px]"></i></p>
                           <p class="text-[10px] text-zinc-400 font-medium">Full Stack Architect</p>
                        </div>
                        <div class="text-right">
                           <p class="text-sm font-black text-amber-400">15,200 XP</p>
                           <p class="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">+450 this week</p>
                        </div>
                     </div>

                     <div class="flex items-center gap-4 p-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/40 shadow-[inset_0_0_20px_rgba(217,70,239,0.15)] group hover:bg-fuchsia-500/20 transition-all cursor-pointer relative overflow-hidden">
                        <div class="absolute left-0 top-0 bottom-0 w-1 bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                        <span class="text-2xl w-8 text-center font-black text-zinc-300 drop-shadow-md">2</span>
                        <div class="relative">
                            <div class="w-12 h-12 rounded-full bg-black/60 border-2 border-fuchsia-500 flex items-center justify-center text-xl">🦫</div>
                            <div class="absolute -bottom-2 -right-2 bg-fuchsia-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-lg">OFC</div>
                        </div>
                        <div class="flex-1">
                           <p class="text-sm font-bold text-white flex items-center gap-2">MATIASAC110508 <span class="text-[9px] bg-fuchsia-500/20 text-fuchsia-300 px-1.5 py-0.5 rounded uppercase tracking-widest ml-1">You</span></p>
                           <p class="text-[10px] text-zinc-400 font-medium">Code Apprentice</p>
                        </div>
                        <div class="text-right">
                           <p class="text-sm font-black text-fuchsia-400">12,450 XP</p>
                           <p class="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">+320 this week</p>
                        </div>
                     </div>

                     <div class="flex items-center gap-4 p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 group transition-all cursor-pointer">
                        <span class="text-2xl w-8 text-center font-black text-orange-400 drop-shadow-md">3</span>
                        <div class="relative">
                            <div class="w-12 h-12 rounded-full bg-black/60 border border-orange-500/50 flex items-center justify-center text-xl">🦉</div>
                        </div>
                        <div class="flex-1">
                           <p class="text-sm font-bold text-white">Sarah_Scripts</p>
                           <p class="text-[10px] text-zinc-400 font-medium">UI Developer</p>
                        </div>
                        <div class="text-right">
                           <p class="text-sm font-black text-orange-400">10,100 XP</p>
                           <p class="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">+210 this week</p>
                        </div>
                     </div>

                     <div class="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer">
                        <span class="text-lg w-8 text-center font-black text-zinc-500">4</span>
                        <div class="w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-lg">🤖</div>
                        <div class="flex-1">
                           <p class="text-sm font-bold text-zinc-200">ByteNinja</p>
                        </div>
                        <div class="text-right">
                           <p class="text-sm font-bold text-zinc-300">8,300 XP</p>
                        </div>
                     </div>

                     <div class="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer">
                        <span class="text-lg w-8 text-center font-black text-zinc-500">5</span>
                        <div class="w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-lg">👾</div>
                        <div class="flex-1">
                           <p class="text-sm font-bold text-zinc-200">PixelPusher</p>
                        </div>
                        <div class="text-right">
                           <p class="text-sm font-bold text-zinc-300">6,200 XP</p>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>

         <div class="lg:col-span-4 flex flex-col gap-6">
            
            <div class="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] p-6 shadow-2xl">
               <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3 mb-4">
                  <i class="fa-solid fa-crosshairs text-emerald-400"></i> Weekly Guild Quest
               </h3>
               <div class="bg-black/40 border border-emerald-500/20 rounded-2xl p-4 relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px]"></div>
                  <h4 class="text-sm font-bold text-white mb-1 relative z-10">The Pomodoro Crusade</h4>
                  <p class="text-xs text-zinc-400 mb-4 relative z-10">Complete 100 Focus Sessions collectively as a clan to unlock the 'Time Lord' badge.</p>
                  
                  <div class="relative z-10">
                     <div class="flex justify-between text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">
                        <span>Progress</span>
                        <span>72 / 100 Sessions</span>
                     </div>
                     <div class="h-2 w-full bg-black/80 rounded-full overflow-hidden">
                        <div class="h-full bg-emerald-500 rounded-full w-[72%] shadow-[0_0_10px_rgba(16,185,129,0.8)] relative overflow-hidden">
                            <div class="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] p-6 shadow-2xl flex-1 flex flex-col min-h-[300px]">
               <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3 mb-4">
                  <i class="fa-solid fa-bolt text-indigo-400"></i> Live Activity
               </h3>
               
               <div class="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-2">
                  <div class="flex gap-3 items-start">
                     <div class="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xs flex-shrink-0">🦊</div>
                     <div>
                        <p class="text-xs text-zinc-300"><span class="font-bold text-amber-400">Alex_Dev</span> completed the module "Advanced DOM".</p>
                        <p class="text-[9px] text-zinc-600 mt-1 uppercase tracking-widest">2 mins ago</p>
                     </div>
                  </div>
                  
                  <div class="flex gap-3 items-start">
                     <div class="w-8 h-8 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-xs flex-shrink-0">🦫</div>
                     <div>
                        <p class="text-xs text-zinc-300"><span class="font-bold text-fuchsia-400">MATIASAC110508</span> finished a 90m Focus Session.</p>
                        <p class="text-[9px] text-zinc-600 mt-1 uppercase tracking-widest">15 mins ago</p>
                     </div>
                  </div>

                  <div class="flex gap-3 items-start">
                     <div class="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-xs flex-shrink-0">🦉</div>
                     <div>
                        <p class="text-xs text-zinc-300"><span class="font-bold text-orange-400">Sarah_Scripts</span> leveled up to Rank 12!</p>
                        <p class="text-[9px] text-zinc-600 mt-1 uppercase tracking-widest">1 hour ago</p>
                     </div>
                  </div>
               </div>

               <button class="w-full mt-4 py-3 bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/50 rounded-xl text-[10px] font-bold text-white uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <i class="fa-solid fa-paper-plane"></i> Send Message
               </button>
            </div>

         </div>
      </div>
    </div>
  `;
}