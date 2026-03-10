export function getAppLayout() {
  return /* html */`
    <div class="h-screen w-full bg-[#000000] text-white flex overflow-hidden selection:bg-purple-500/30 relative z-0">

        <div class="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div class="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#6D28D9]/20 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#D946EF]/15 rounded-full blur-[120px]"></div>
        </div>

        <div id="mobile-menu-toggle" class="lg:hidden absolute top-6 left-6 z-50 p-3 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-xl cursor-pointer">
            <i class="fa-solid fa-bars-staggered text-sm text-zinc-400"></i>
        </div>

        <aside id="nav-container" class="w-64 lg:w-72 h-full flex-shrink-0 border-r border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl flex flex-col transition-transform duration-300 absolute lg:relative z-40 -translate-x-full lg:translate-x-0 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
            </aside>

        <main id="main-container" class="flex-1 h-full relative overflow-y-auto custom-scrollbar p-4 lg:p-6">
            </main>

        <aside id="ai-panel-container" class="hidden xl:flex w-80 h-full flex-shrink-0 border-l border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl flex-col relative z-30 shadow-[-4px_0_24px_rgba(0,0,0,0.5)]">
            </aside>

    </div>
  `;
}