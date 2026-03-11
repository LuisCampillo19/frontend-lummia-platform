export function renderHome() {
  const app = document.getElementById('app');
  let container = document.getElementById('main-container');

  if (!container) {
    app.innerHTML = /* html */`
      <div class="flex h-screen w-full bg-[#050505] text-white overflow-hidden">
        <aside id="nav-container" class="w-80 h-full border-r border-white/[0.05] flex flex-col relative z-20"></aside>
        <main id="main-container" class="flex-1 h-full relative overflow-y-auto custom-scrollbar p-0"></main>
      </div>
    `;
    container = document.getElementById('main-container');
  }

  // Horizontal Scroll for the videos section
  setTimeout(() => {
    const scrollContainer = document.getElementById('video-scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
      }, { passive: false });
    }
  }, 0);

  container.innerHTML = /* html */`
    <div class="animate-system-boot h-full flex flex-col relative z-0 p-4 lg:p-6 lg:px-8">
      
      <div class="flex-none bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] p-8 mb-8 relative overflow-hidden shadow-2xl group flex-shrink-0">
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[80px] group-hover:bg-fuchsia-500/30 transition-colors duration-700"></div>
        <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
           <div class="relative">
                <div class="w-24 h-24 lg:w-28 lg:h-28 rounded-[2rem] bg-black/60 border-2 border-fuchsia-500/40 shadow-[0_0_30px_rgba(217,70,239,0.2)] flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 backdrop-blur-md overflow-hidden">
                    <img src="../../assets/completedCapi.png" alt="capybara" class="w-full h-full object-cover">
                </div>
                <div class="absolute -bottom-3 -right-3 bg-black border border-fuchsia-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg">
                    LVL 14
                </div>
           </div>
           <div class="flex-1 w-full text-center md:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-3">
                <span class="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse shadow-[0_0_8px_#e879f9]"></span>
                <span class="text-fuchsia-400 text-[9px] font-bold uppercase tracking-widest">Code Apprentice</span>
              </div>
              <h1 class="text-3xl lg:text-4xl font-bold text-white tracking-wide mb-4 truncate uppercase">MATIASAC110508</h1>
              <div class="max-w-xl">
                 <div class="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                    <span class="text-amber-400 flex items-center gap-1.5 font-black"><i class="fa-solid fa-bolt"></i> 2,450 Expbara</span>
                    <span>Next Rank: 3,000 XP</span>
                 </div>
                 <div class="h-3 w-full bg-black/80 rounded-full border border-white/10 overflow-hidden p-[1px]">
                    <div class="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-amber-400 rounded-full w-[82%] relative"></div>
                 </div>
              </div>
           </div>
           <div class="hidden lg:flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-5 min-w-[130px] shadow-lg">
              <span class="text-4xl mb-2">🔥</span>
              <span class="text-2xl font-black text-white">14</span>
              <span class="text-[9px] text-amber-400 font-bold uppercase tracking-widest mt-1">Day Streak</span>
           </div>
        </div>
      </div>

      <div class="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
         <div class="lg:col-span-8 flex flex-col gap-8">
            
            <div class="flex flex-col gap-4">
                <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3"><i class="fa-solid fa-fire text-amber-500"></i> Featured Videos</h3>
                
                <div id="video-scroll-container" class="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x cursor-grab active:cursor-grabbing">
                    <div class="min-w-[280px] bg-white/[0.02] border border-white/[0.05] rounded-[2rem] overflow-hidden hover:bg-white/[0.04] transition-all group snap-start cursor-pointer shadow-xl">
                        <div class="aspect-video bg-black/50 relative flex items-center justify-center border-b border-white/5">
                            <i class="fa-solid fa-play text-3xl opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:text-amber-400 transition-all"></i>
                        </div>
                        <div class="p-5">
                            <h4 class="text-sm font-bold text-white mb-1 uppercase tracking-tight">Tailwind Architecture</h4>
                            <p class="text-[9px] text-zinc-500 font-black uppercase tracking-widest">+25 Expbara</p>
                        </div>
                    </div>
                    <div class="min-w-[280px] bg-white/[0.02] border border-white/[0.05] rounded-[2rem] overflow-hidden hover:bg-white/[0.04] transition-all group snap-start cursor-pointer shadow-xl">
                        <div class="aspect-video bg-black/50 relative flex items-center justify-center border-b border-white/5">
                            <i class="fa-solid fa-play text-3xl opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:text-fuchsia-400 transition-all"></i>
                        </div>
                        <div class="p-5">
                            <h4 class="text-sm font-bold text-white mb-1 uppercase tracking-tight">Node.js Server 101</h4>
                            <p class="text-[9px] text-zinc-500 font-black uppercase tracking-widest">+50 Expbara</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-black/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-5 shadow-inner flex gap-4 items-start focus-within:border-fuchsia-500/30 transition-all">
                <div class="w-10 h-10 rounded-xl bg-black/60 border border-fuchsia-500/20 overflow-hidden flex-shrink-0">
                    <img src="../../assets/completedCapi.png" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 flex flex-col gap-3">
                    <textarea placeholder="Share your progress or ask a question..." class="w-full bg-transparent border-none py-2 text-sm text-white placeholder-zinc-600 focus:outline-none resize-none h-10 focus:h-24 transition-all"></textarea>
                    
                    <div id="community-video-container" class="hidden w-full overflow-hidden rounded-xl border border-red-500/20 bg-black/60 mb-2 p-4 animate-in fade-in zoom-in-95">
                         <div class="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                            <div class="flex items-center gap-2">
                               <i class="fa-brands fa-youtube text-red-500 text-lg"></i>
                               <span class="text-[10px] font-black text-red-400 uppercase tracking-widest">Share Video</span>
                            </div>
                            <button onclick="document.getElementById('community-video-container').classList.add('hidden')" class="text-zinc-500 hover:text-white"><i class="fa-solid fa-xmark text-xs"></i></button>
                         </div>
                         <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="md:col-span-2 relative">
                               <i class="fa-solid fa-link absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-xs"></i>
                               <input type="url" placeholder="YouTube URL" class="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-2 text-xs text-white outline-none focus:border-red-500/50 transition-colors">
                            </div>
                            <div class="md:col-span-2">
                               <input type="text" placeholder="Video Title" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-red-500/50 transition-colors">
                            </div>
                            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-300 outline-none focus:border-red-500/50 appearance-none">
                               <option value="" disabled selected>Select Language</option>
                               <option class="bg-zinc-900" value="js">JavaScript</option>
                               <option class="bg-zinc-900" value="py">Python</option>
                               <option class="bg-zinc-900" value="sql">SQL</option>
                            </select>
                            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-zinc-300 outline-none focus:border-red-500/50 appearance-none">
                               <option value="" disabled selected>Select Paradigm</option>
                               <option class="bg-zinc-900" value="oop">Object Oriented</option>
                               <option class="bg-zinc-900" value="func">Functional</option>
                               <option class="bg-zinc-900" value="theory">Theory / None</option>
                            </select>
                         </div>
                    </div>

                    <div id="code-snippet-container" class="hidden w-full overflow-hidden rounded-xl border border-fuchsia-500/20 bg-[#0a0a0a] mb-2 animate-in fade-in zoom-in-95">
                         <div class="bg-white/5 px-3 py-2 flex justify-between border-b border-white/5 items-center">
                            <div class="flex items-center gap-2">
                               <i class="fa-solid fa-code text-fuchsia-500"></i>
                               <span class="text-[8px] font-black text-fuchsia-400 uppercase tracking-widest">Code Editor</span>
                            </div>
                            <button onclick="document.getElementById('code-snippet-container').classList.add('hidden')" class="text-zinc-500 hover:text-white"><i class="fa-solid fa-xmark text-xs"></i></button>
                         </div>
                         <textarea class="w-full bg-transparent p-4 text-xs font-mono text-emerald-400 focus:outline-none min-h-[120px] custom-scrollbar" placeholder="// Write or paste your code here..."></textarea>
                    </div>

                    <div class="flex justify-between items-center border-t border-white/5 pt-3">
                        <div class="flex gap-2">
                            <button onclick="document.getElementById('community-video-container').classList.toggle('hidden'); document.getElementById('code-snippet-container').classList.add('hidden');" class="px-3 py-1.5 bg-white/5 hover:bg-red-500/10 rounded-lg text-[10px] text-zinc-400 hover:text-red-400 font-bold flex items-center gap-2 border border-white/5 transition-all">
                                <i class="fa-brands fa-youtube text-red-500"></i> Video
                            </button>
                            <button onclick="document.getElementById('code-snippet-container').classList.toggle('hidden'); document.getElementById('community-video-container').classList.add('hidden');" class="px-3 py-1.5 bg-white/5 hover:bg-fuchsia-500/10 rounded-lg text-[10px] text-zinc-400 hover:text-fuchsia-400 font-bold flex items-center gap-2 border border-white/5 transition-all">
                                <i class="fa-solid fa-code text-fuchsia-500"></i> Snippet
                            </button>
                        </div>
                        <button class="px-6 py-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                            Post
                        </button>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3"><i class="fa-solid fa-users text-fuchsia-500"></i> Community Feed</h3>
                
                <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-6 hover:bg-white/[0.03] transition-all shadow-lg">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-lg border border-blue-500/30">🦊</div>
                        <div class="flex-1">
                            <h4 class="text-sm font-bold text-white uppercase">Alex_Dev <span class="text-[10px] text-zinc-500 font-medium ml-2 uppercase">15m ago</span></h4>
                            <p class="text-xs text-zinc-400 mt-1 leading-relaxed">Check out this clean routing system!</p>
                        </div>
                    </div>
                    <div class="bg-black/60 rounded-2xl p-4 font-mono text-[11px] text-emerald-400 border border-white/5 mb-4 overflow-x-auto shadow-inner">
                        <pre><code>const routes = {
  '/profile': renderProfile,
  '/home': renderHome
};</code></pre>
                    </div>
                    <div class="flex items-center gap-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        <button class="hover:text-fuchsia-400 transition-colors flex items-center gap-1.5"><i class="fa-regular fa-heart"></i> 24</button>
                        <button class="hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-regular fa-comment"></i> 8 Comments</button>
                    </div>
                </div>
            </div>
         </div>

         <div class="lg:col-span-4 flex flex-col gap-8">
            <div class="grid grid-cols-2 gap-4">
               <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 text-center shadow-xl group hover:bg-fuchsia-500/5 transition-all">
                  <div class="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center mx-auto mb-3 border border-fuchsia-500/20 shadow-[0_0_15px_rgba(217,70,239,0.1)] group-hover:scale-110 transition-transform">
                     <i class="fa-solid fa-trophy text-fuchsia-400 text-xl"></i>
                  </div>
                  <p class="text-2xl font-black text-white">24</p>
                  <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Achievements</p>
               </div>
               <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 text-center shadow-xl group hover:bg-amber-500/5 transition-all">
                  <div class="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3 border border-amber-500/20 shadow-[0_0_15px_rgba(251,191,36,0.1)] group-hover:scale-110 transition-transform">
                     <i class="fa-solid fa-stopwatch text-amber-500 text-xl"></i>
                  </div>
                  <p class="text-2xl font-black text-white">12.5h</p>
                  <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Total Time</p>
               </div>
            </div>
            
            <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-6 flex-1 shadow-xl">
               <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6"><i class="fa-solid fa-ranking-star text-amber-500"></i> Leaderboard</h3>
               <div class="space-y-4">
                  <div class="flex items-center gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 shadow-[inset_0_0_20px_rgba(251,191,36,0.05)]">
                     <span class="font-black text-amber-400 text-lg">1</span>
                     <div class="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center border border-amber-500/20">🦊</div>
                     <div class="flex-1">
                        <p class="text-xs font-bold text-white uppercase">Alex_Dev</p>
                        <p class="text-[9px] font-black text-amber-400 uppercase tracking-widest">4,200 XP</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  `;
}