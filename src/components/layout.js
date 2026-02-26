// src/components/layout.js

export function getAppLayout() {
  return /* html */`
    <div id="layout-shell" class="relative min-h-screen w-full bg-[#080A0F] text-[#697C97] font-sans antialiased overflow-x-hidden lg:grid lg:grid-cols-[280px_1fr_340px] lg:h-screen">
      
      <nav id="nav-container" class="fixed inset-y-0 left-0 w-[280px] bg-[#11161E] z-50 transform -translate-x-full transition-transform duration-300 border-r border-white/[0.02] lg:relative lg:translate-x-0 lg:flex lg:flex-col lg:bg-[#11161E]/50 lg:backdrop-blur-xl"></nav>

      <main class="relative flex flex-col min-h-screen lg:h-screen overflow-hidden bg-transparent w-full">
        <button id="mobile-menu-toggle" class="fixed top-6 left-6 z-[60] w-10 h-10 bg-[#11161E] border border-white/5 rounded-xl flex items-center justify-center text-[#46F216] shadow-lg lg:hidden">
          <i class="fa-solid fa-bars-staggered text-sm"></i>
        </button>

        <div id="main-container" class="flex-1 overflow-y-auto p-6 pt-24 lg:p-10 lg:pt-10 custom-scrollbar w-full bg-[#080A0F]"></div>
      </main>

      <aside id="gamify-container" 
             class="hidden lg:flex lg:flex-col bg-[#11161E]/30 backdrop-blur-lg border-l border-white/[0.02] overflow-hidden">
      </aside>
      
    </div>
  `;
}