export function renderCourses() {
  return /* html */`
    <div class="fade-in space-y-10 h-full flex flex-col">
      
      <div class="flex justify-between items-center border-b border-white/[0.02] pb-8">
        <div>
          <h2 class="text-5xl font-black text-white tracking-tighter flex items-center gap-4">
            <span class="text-[#46F216] italic opacity-80">Lummia</span> Academy
          </h2>
          <p class="text-[#697C97] font-bold mt-1 uppercase tracking-widest text-[10px] opacity-50">Industrial Learning Protocol / v1.0</p>
        </div>
        <div class="flex items-center gap-3 bg-[#46F216]/5 border border-[#46F216]/20 px-5 py-2.5 rounded-2xl shadow-[0_0_20px_rgba(70,242,22,0.05)]">
          <span class="w-2 h-2 bg-[#46F216] rounded-full shadow-[0_0_8px_#46F216] animate-pulse"></span>
          <span class="text-[#46F216] text-[10px] font-black uppercase tracking-[0.2em]">
            +150 EXP PER MODULE
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 flex-1 min-h-0">
        
        <div class="lg:col-span-8 flex flex-col space-y-6">
          <div class="bg-[#11161E]/40 border border-white/[0.02] rounded-[3rem] overflow-hidden flex flex-col shadow-2xl group relative">
            <div class="aspect-video bg-[#080A0F] relative flex items-center justify-center border-b border-white/[0.01]">
               <div class="absolute inset-0 bg-gradient-to-t from-[#46F216]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
               
               <div class="text-center relative z-10">
                  <button class="w-24 h-24 bg-[#46F216] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(70,242,22,0.4)] hover:scale-110 active:scale-95 transition-all duration-500 group/play">
                     <svg class="w-10 h-10 ml-2 text-[#080A0F]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                  <p class="text-[#697C97] font-black uppercase tracking-[0.3em] text-[10px] mt-8 opacity-40 group-hover:opacity-100 transition-opacity">Initialize Stream</p>
               </div>
            </div>

            <div class="p-10 bg-[#11161E]/60 backdrop-blur-md">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-[#46F216] font-black text-[10px] uppercase tracking-widest border border-[#46F216]/30 px-2 py-0.5 rounded">Module 01</span>
                <div class="h-[1px] flex-1 bg-white/5"></div>
              </div>
              <h3 class="text-3xl font-black text-white tracking-tighter mb-2">The SPA Architecture Protocol</h3>
              <p class="text-[#697C97] font-medium text-sm leading-relaxed max-w-2xl">Deploy high-performance frontends with vanilla logic. Mastering routing, state synchronization, and industrial UI components.</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 bg-[#11161E]/20 border border-white/[0.01] rounded-[3rem] p-8 flex flex-col h-full overflow-hidden backdrop-blur-sm">
          <div class="flex items-center justify-between mb-8 px-2">
            <h3 class="text-[10px] font-black text-[#697C97] uppercase tracking-[0.4em] opacity-40">Module Index</h3>
            <span class="text-[9px] font-bold text-white opacity-20 italic">01 / 12</span>
          </div>

          <div class="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
            <button class="w-full text-left p-5 rounded-2xl bg-[#46F216]/10 border border-[#46F216]/20 transition-all flex items-center justify-between group/item shadow-[0_0_20px_rgba(70,242,22,0.05)]">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-[#46F216] flex items-center justify-center text-[#080A0F] font-black text-xs shadow-[0_0_10px_#46F216]">1</div>
                <span class="font-bold text-sm text-white tracking-tight">Setting up Vite & Tailwind</span>
              </div>
              <span class="text-[9px] font-black text-[#46F216] uppercase tracking-widest animate-pulse">▶ Streaming</span>
            </button>

            ${[
              { id: 2, title: 'Routing with Vanilla JS', time: '14:20' },
              { id: 3, title: 'Component Architecture', time: '22:15' },
              { id: 4, title: 'State & Local Storage', time: '18:45' },
              { id: 5, title: 'Production Deployment', time: '10:30' }
            ].map(lesson => `
              <button class="w-full text-left p-5 rounded-2xl bg-white/[0.01] border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all flex items-center justify-between group/item overflow-hidden">
                <div class="flex items-center gap-4">
                  <div class="w-8 h-8 rounded-lg bg-[#080A0F] border border-white/5 flex items-center justify-center text-[#697C97] font-black text-xs group-hover/item:text-white transition-colors">${lesson.id}</div>
                  <span class="font-bold text-sm text-[#697C97] group-hover:text-gray-300 transition-colors tracking-tight">${lesson.title}</span>
                </div>
                <span class="text-[10px] font-bold text-[#697C97]/40 group-hover:text-[#46F216] transition-colors italic">${lesson.time}</span>
              </button>
            `).join('')}
          </div>
          
          <button class="mt-8 w-full py-5 bg-white/5 hover:bg-[#46F216] hover:text-[#080A0F] border border-white/5 rounded-2xl text-white font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-xl group/next">
             Next Module Protocol
          </button>
        </div>

      </div>
    </div>
  `;
}