export function renderPomodoro() {
  return /* html */`
    <div class="animate-system-boot h-full flex flex-col relative z-0 p-4 lg:p-6 lg:px-8">
      
      <div class="flex-none mb-8">
        <h1 class="text-3xl font-black text-white tracking-wide drop-shadow-md flex items-center gap-3">
          <i class="fa-solid fa-stopwatch text-fuchsia-500 animate-pulse"></i> Focus Hub
        </h1>
        <p class="text-sm text-zinc-400 font-medium mt-2">Manage your energy and track your weekly goals.</p>
      </div>

      <div class="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
         
         <div class="lg:col-span-4 flex flex-col gap-6">
            <div class="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden flex flex-col items-center group">
               <div class="absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 to-transparent opacity-50"></div>
               <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-[60px]"></div>

               <div class="relative z-10 bg-fuchsia-500/10 border border-fuchsia-500/30 px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                  <span id="status-dot" class="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
                  <span id="pomodoro-status" class="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest">Focus Phase</span>
               </div>

               <div id="pomodoro-ring" class="relative z-10 w-56 h-56 rounded-full bg-black/40 border-[4px] border-white/5 flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] mb-6 before:absolute before:inset-[-4px] before:rounded-full before:border-[4px] before:border-transparent before:border-t-fuchsia-500 before:animate-[spin_4s_linear_infinite] transition-all">
                  <div class="text-center">
                     <h2 id="time-display" class="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tabular-nums">25:00</h2>
                     <p class="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-2">Minutes</p>
                  </div>
               </div>

               <div class="relative z-10 flex gap-2 w-full justify-center mb-2">
                  <button class="mode-btn active px-4 py-2 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 text-[10px] font-bold uppercase tracking-widest transition-all" data-work="25" data-break="5" data-xp="50">25m</button>
                  <button class="mode-btn px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all" data-work="50" data-break="10" data-xp="120">50m</button>
                  <button class="mode-btn px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all" data-work="90" data-break="15" data-xp="250">90m</button>
               </div>

               <div class="relative z-10 text-center mb-6">
                  <span class="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Reward: <span id="reward-display" class="text-amber-400">+50 XP</span></span>
               </div>

               <div class="relative z-10 flex items-center gap-4 w-full justify-center">
                  <button id="reset-timer-btn" class="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all active:scale-95">
                     <i class="fa-solid fa-rotate-right text-lg"></i>
                  </button>
                  <button id="start-timer-btn" class="flex-1 py-3.5 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all transform hover:scale-[1.02] active:scale-95">
                     Start
                  </button>
               </div>
            </div>
         </div>

         <div class="lg:col-span-8 flex flex-col gap-6 h-full">
            <div class="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] p-6 lg:p-8 shadow-2xl flex-1 flex flex-col overflow-hidden">
               
               <div class="flex items-center justify-between mb-6">
                  <h3 class="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
                     <i class="fa-solid fa-list-check text-emerald-400"></i> Weekly Log
                  </h3>
                  <div class="flex gap-2">
                     <button id="add-task-btn" class="px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20 transition-colors active:scale-95">
                        <i class="fa-solid fa-plus mr-1"></i> Add
                     </button>
                     <button id="clear-all-tasks" class="px-3 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-amber-500/20 transition-colors active:scale-95">
                        <i class="fa-solid fa-eraser mr-1"></i> Clear
                     </button>
                     <button id="delete-all-tasks" class="px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-red-500/20 transition-colors active:scale-95">
                        <i class="fa-solid fa-trash-can mr-1"></i> Delete All
                     </button>
                  </div>
               </div>

               <div class="flex-1 overflow-x-auto custom-scrollbar bg-black/40 rounded-2xl border border-white/10">
                  <table class="w-full min-w-[800px] border-collapse text-left">
                     <thead>
                        <tr class="border-b border-white/10 bg-white/5">
                           <th class="py-3 px-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest w-1/3 border-r border-white/5">Weekly Objective</th>
                           <th class="py-3 px-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center border-r border-white/5 w-14">Mon</th>
                           <th class="py-3 px-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center border-r border-white/5 w-14">Tue</th>
                           <th class="py-3 px-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center border-r border-white/5 w-14">Wed</th>
                           <th class="py-3 px-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center border-r border-white/5 w-14">Thu</th>
                           <th class="py-3 px-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-center border-r border-white/5 w-14">Fri</th>
                           <th class="py-3 px-2 text-[10px] font-black text-amber-400 uppercase tracking-widest text-center border-r border-white/5 w-14">Sat</th>
                           <th class="py-3 px-2 text-[10px] font-black text-amber-400 uppercase tracking-widest text-center border-r border-white/5 w-14">Sun</th>
                           <th class="py-3 px-2 text-[10px] font-black text-red-400 uppercase tracking-widest text-center w-12">Del</th>
                        </tr>
                     </thead>
                     <tbody id="task-table-body" class="text-sm">
                        </tbody>
                  </table>
               </div>
            </div>
         </div>

      </div>
    </div>
  `;
}