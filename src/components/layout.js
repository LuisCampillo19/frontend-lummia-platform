export function getAppLayout() {
  return /* html */`
    <div id="app-wrapper" class="h-screen w-full bg-[#000000] text-white flex overflow-hidden selection:bg-purple-500/30 relative z-0 transition-colors duration-500">

        <div id="ambient-glows" class="absolute inset-0 pointer-events-none overflow-hidden -z-10 transition-opacity duration-500">
          <div class="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#6D28D9]/20 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#D946EF]/15 rounded-full blur-[120px]"></div>
        </div>

        <button id="mobile-menu-toggle" class="lg:hidden absolute top-6 left-6 z-[60] p-3 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
            <i class="fa-solid fa-bars-staggered text-sm text-zinc-400 pointer-events-none"></i>
        </button>

        <button id="ai-menu-toggle" class="absolute top-6 right-6 z-[60] w-11 h-11 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-zinc-400 hover:text-fuchsia-400 hover:bg-white/10 transition-all cursor-pointer shadow-lg">
            <i class="fa-solid fa-robot text-sm pointer-events-none"></i>
        </button>

        <aside id="nav-container" class="w-64 lg:w-72 h-full flex-shrink-0 border-r border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl flex flex-col transition-all duration-300 absolute lg:relative z-50 -translate-x-full lg:translate-x-0 shadow-[4px_0_24px_rgba(0,0,0,0.5)]"></aside>

        <main id="main-container" class="flex-1 h-full relative overflow-y-auto custom-scrollbar p-0 min-w-0"></main>

        <aside id="ai-panel-container" class="absolute right-0 top-0 w-80 lg:w-96 h-full flex-shrink-0 border-l border-white/[0.05] bg-[#050505]/95 backdrop-blur-3xl flex flex-col z-40 transform translate-x-full transition-all duration-300 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"></aside>

    </div>
  `;
}

export function getAppLayoutBlack() {
  return /* html */`
    <div class="h-screen w-full bg-[#050505] text-zinc-100 flex overflow-hidden selection:bg-zinc-700 relative z-0">

        <button id="mobile-menu-toggle" class="lg:hidden absolute top-6 left-6 z-50 w-10 h-10 bg-[#0a0a0a] border border-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors flex items-center justify-center">
            <i class="fa-solid fa-bars-staggered text-sm text-zinc-400 pointer-events-none"></i>
        </button>

        <button id="ai-menu-toggle" class="absolute top-6 right-6 z-50 w-10 h-10 rounded-lg bg-[#0a0a0a] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer">
            <i class="fa-solid fa-robot text-sm pointer-events-none"></i>
        </button>

        <aside id="nav-container" class="w-64 lg:w-72 h-full flex-shrink-0 border-r border-zinc-800 bg-[#050505] flex flex-col transition-transform duration-300 absolute lg:relative z-40 -translate-x-full lg:translate-x-0"></aside>

        <main id="main-container" class="flex-1 h-full relative overflow-y-auto custom-scrollbar p-4 lg:p-6 min-w-0"></main>

        <aside id="ai-panel-container" class="absolute right-0 top-0 w-80 lg:w-96 h-full flex-shrink-0 border-l border-zinc-800 bg-[#050505] flex flex-col z-40 transform translate-x-full transition-transform duration-300 shadow-2xl"></aside>

    </div>
  `;
}

export function getAppLayoutWhite() {
  return /* html */`
    <div class="h-screen w-full bg-[#F9FAFB] text-zinc-900 flex overflow-hidden selection:bg-fuchsia-200 relative z-0">

        <button id="mobile-menu-toggle" class="lg:hidden absolute top-6 left-6 z-50 w-10 h-10 bg-white border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-colors shadow-sm flex items-center justify-center">
            <i class="fa-solid fa-bars-staggered text-sm text-zinc-600 pointer-events-none"></i>
        </button>

        <button id="ai-menu-toggle" class="absolute top-6 right-6 z-50 w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-fuchsia-600 hover:bg-zinc-50 hover:border-fuchsia-200 transition-all cursor-pointer shadow-sm">
            <i class="fa-solid fa-robot text-sm pointer-events-none"></i>
        </button>

        <aside id="nav-container" class="w-64 lg:w-72 h-full flex-shrink-0 border-r border-zinc-200 bg-white flex flex-col transition-transform duration-300 absolute lg:relative z-40 -translate-x-full lg:translate-x-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]"></aside>

        <main id="main-container" class="flex-1 h-full relative overflow-y-auto custom-scrollbar p-4 lg:p-6 min-w-0"></main>

        <aside id="ai-panel-container" class="absolute right-0 top-0 w-80 lg:w-96 h-full flex-shrink-0 border-l border-zinc-200 bg-white/95 backdrop-blur-xl flex flex-col z-40 transform translate-x-full transition-transform duration-300 shadow-[-10px_0_30px_rgba(0,0,0,0.05)]"></aside>

    </div>
  `;
}