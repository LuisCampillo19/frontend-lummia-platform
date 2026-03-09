export function renderTutorIA() {
  const container = document.getElementById('gamify-container');
  if (!container) return;

  container.innerHTML = /* html */`
    <div class="flex flex-col h-full">
      <div class="p-8 border-b border-white/[0.02]">
        <div class="flex items-center gap-3 mb-1">
          <div class="w-2 h-2 bg-[#46F216] rounded-full shadow-[0_0_10px_#46F216] animate-pulse"></div>
          <p class="text-[10px] font-black text-[#46F216] uppercase tracking-[0.3em]">AI Tutor Online</p>
        </div>
        <h3 class="text-xl font-black text-white tracking-tight">Lummia Assistant</h3>
      </div>

      <div id="ai-chat-messages" class="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        <div class="bg-white/[0.02] border border-white/5 p-4 rounded-2xl text-[11px] text-[#697C97] leading-relaxed">
          Hello <span class="text-white font-bold">Matias</span>. I've successfully initialized the right-side module. How can I assist with your deployment today?
        </div>
      </div>

      <div class="p-6 border-t border-white/[0.02]">
        <div class="relative group">
          <input type="text" placeholder="Type a command..." 
                 class="w-full bg-[#080A0F] border border-white/5 rounded-xl py-3.5 pl-5 pr-12 text-xs text-white focus:outline-none focus:border-[#46F216]/40 transition-all placeholder:text-[#697C97]/30">
          <button class="absolute right-3 top-1/2 -translate-y-1/2 text-[#46F216] opacity-40 group-hover:opacity-100 transition-opacity">
            <i class="fa-solid fa-paper-plane text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}