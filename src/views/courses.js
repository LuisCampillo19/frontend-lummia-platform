export function renderCourses() {
  const generateVideos = (moduleName, icon, colorClass, shadowColor, count) => {
    let html = '';
    for (let i = 1; i <= count; i++) {
      const progress = Math.floor(Math.random() * 100);
      html += `
        <div class="min-w-[300px] w-[300px] bg-black/60 border border-white/5 rounded-2xl p-3 hover:bg-white/[0.05] transition-all group cursor-pointer shrink-0 shadow-lg">
          <div class="w-full h-44 bg-black/80 rounded-xl mb-3 relative overflow-hidden border border-white/10 group-hover:border-${colorClass}-500/50 transition-colors flex items-center justify-center">
             <i class="${icon} text-${colorClass}-500/20 text-7xl absolute transition-transform group-hover:scale-110 group-hover:rotate-6"></i>
             <div class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-${colorClass}-500/10 group-hover:text-${colorClass}-400 group-hover:border-${colorClass}-500/20 transition-all z-10 shadow-2xl">
                <i class="fa-solid fa-play text-sm pl-1"></i>
             </div>
             <span class="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-black px-2 py-0.5 rounded backdrop-blur-sm z-20 tabular-nums">45:00</span>
             <div class="absolute bottom-0 left-0 w-full h-1 bg-black/50 z-20">
                <div class="h-full bg-${colorClass}-500 w-[${progress}%]" style="box-shadow: 0 0 10px ${shadowColor}"></div>
             </div>
          </div>
          <h4 class="text-sm font-black text-white group-hover:text-${colorClass}-400 transition-colors mb-1 truncate uppercase tracking-tight">${moduleName} Lesson ${i}</h4>
          <p class="text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-2">
            <span class="opacity-60">Advanced Concept</span> • Part ${i}
          </p>
        </div>`;
    }
    return html;
  };

  return /* html */`
    <style>
      .scroll-x-container {
        /* Disable native snap and smoothing to let the JS engine take over */
        scroll-snap-type: none;
        scroll-behavior: auto !important; 
        will-change: scroll-position;
        user-select: none;
        -webkit-overflow-scrolling: touch;
      }

      .scroll-mask {
        -webkit-mask-image: linear-gradient(
          to right, 
          transparent 0%, 
          rgba(0,0,0,0.2) 2%, 
          black 8%, 
          black 92%, 
          rgba(0,0,0,0.2) 98%, 
          transparent 100%
        );
        mask-image: linear-gradient(
          to right, 
          transparent 0%, 
          rgba(0,0,0,0.2) 2%, 
          black 8%, 
          black 92%, 
          rgba(0,0,0,0.2) 98%, 
          transparent 100%
        );
      }

      .scroll-x-container::-webkit-scrollbar { height: 4px; }
      .scroll-x-container::-webkit-scrollbar-track { background: transparent; margin-inline: 40px; }
      .scroll-x-container::-webkit-scrollbar-thumb { border-radius: 10px; }

      .python-scroll::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.3); }
      .html-scroll::-webkit-scrollbar-thumb { background: rgba(217, 70, 239, 0.3); }
      .js-scroll::-webkit-scrollbar-thumb { background: rgba(245, 158, 11, 0.3); }
      .db-scroll::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.3); }
    </style>

    <div class="animate-system-boot h-full flex flex-col relative z-0 p-4 lg:p-6 lg:px-8 overflow-y-auto custom-scrollbar overflow-x-hidden">
      
      <div class="flex-none mb-6 relative group">
         <div class="relative flex items-center bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] focus-within:border-fuchsia-500/50 transition-all shadow-xl px-2">
            <i class="fa-solid fa-magnifying-glass text-zinc-500 ml-4 text-lg"></i>
            <input type="text" placeholder="Search for courses, modules, or algorithms..." class="w-full bg-transparent py-5 px-4 text-white text-sm font-medium focus:outline-none placeholder-zinc-600">
         </div>
      </div>

      <div class="flex-none bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 mb-10 relative overflow-hidden shadow-2xl group shrink-0">
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[80px]"></div>
        <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
           <div class="w-24 h-24 lg:w-28 lg:h-28 rounded-[2rem] bg-black/60 border border-fuchsia-500/40 flex items-center justify-center text-4xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <i class="fa-solid fa-layer-group text-fuchsia-400"></i>
           </div>
           <div class="flex-1 text-center md:text-left">
              <h1 class="text-3xl lg:text-4xl font-black text-white tracking-wide mb-4 uppercase">Video Academy</h1>
              <div class="max-w-xl mx-auto md:mx-0">
                 <div class="flex justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">
                    <span class="text-fuchsia-400">Overall Progress</span>
                    <span>38% Mastery</span>
                 </div>
                 <div class="h-3 w-full bg-black/80 rounded-full border border-white/10 overflow-hidden p-[1px]">
                    <div class="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full w-[38%] shadow-[0_0_15px_rgba(217,70,239,0.4)]"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div class="flex flex-col gap-12 pb-24">
         <section class="flex flex-col gap-4">
            <div class="px-2 font-black text-white uppercase flex items-center gap-3 text-xl tracking-tighter">
               <i class="fa-brands fa-python text-blue-500 text-3xl"></i> Python Backend
            </div>
            <div class="scroll-x-container scroll-mask python-scroll flex overflow-x-auto gap-5 pb-6 px-10 cursor-grab active:cursor-grabbing">
               ${generateVideos('Python', 'fa-brands fa-python', 'blue', 'rgba(59,130,246,0.5)', 8)}
            </div>
         </section>

         <section class="flex flex-col gap-4">
            <div class="px-2 font-black text-white uppercase flex items-center gap-3 text-xl tracking-tighter">
               <i class="fa-brands fa-html5 text-fuchsia-500 text-3xl"></i> HTML / CSS Structure
            </div>
            <div class="scroll-x-container scroll-mask html-scroll flex overflow-x-auto gap-5 pb-6 px-10 cursor-grab active:cursor-grabbing">
               ${generateVideos('Frontend', 'fa-brands fa-css3-alt', 'fuchsia', 'rgba(217,70,239,0.5)', 8)}
            </div>
         </section>

         <section class="flex flex-col gap-4">
            <div class="px-2 font-black text-white uppercase flex items-center gap-3 text-xl tracking-tighter">
               <i class="fa-brands fa-js text-amber-500 text-3xl"></i> JavaScript Logic
            </div>
            <div class="scroll-x-container scroll-mask js-scroll flex overflow-x-auto gap-5 pb-6 px-10 cursor-grab active:cursor-grabbing">
               ${generateVideos('JavaScript', 'fa-brands fa-js', 'amber', 'rgba(245,158,11,0.5)', 8)}
            </div>
         </section>
      </div>
    </div>
  `;
}