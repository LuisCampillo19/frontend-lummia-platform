export function renderTutorIA() {
  const container = document.getElementById('ai-panel-container');
  if (!container) return;

  container.innerHTML = /* html */`
    <div class="p-6 border-b border-white/[0.05]">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(217,70,239,0.5)]"></span>
        <p class="text-[9px] font-bold text-fuchsia-400 uppercase tracking-widest">Lummia Neural Net</p>
      </div>
      <h2 class="text-lg font-black text-white tracking-tight">Capybara Tutor 🦫</h2>
    </div>

    <div id="ai-chat-messages" class="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
      <div class="flex gap-3">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex-shrink-0 flex items-center justify-center shadow-lg border border-white/10">
          <span class="text-sm">🦫</span>
        </div>
        <div class="bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300 font-medium leading-relaxed shadow-sm">
          ¡Hola MATIASAC110508! Tu interfaz de combate está en línea. ¿En qué misión te ayudo hoy?
        </div>
      </div>
    </div>

    <div class="p-6 border-t border-white/[0.05] bg-black/40">
      <div class="relative flex items-center group">
        <input type="text" id="tutor-input" placeholder="Comando de texto..." 
               class="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500/50 focus:bg-white/[0.05] transition-all">
        <button id="tutor-send" class="absolute right-2 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-zinc-400 hover:text-fuchsia-400 hover:bg-fuchsia-500/10 transition-colors">
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </div>
    </div>
  `;
}

// Interative chat logic
export function initTutorLogic() {
  const input = document.getElementById('tutor-input');
  const sendBtn = document.getElementById('tutor-send');
  const chatBox = document.getElementById('ai-chat-messages');

  if (!input || !sendBtn || !chatBox) return;

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    // 1. User message (right alignment)
    const userMsg = `
      <div class="flex gap-3 justify-end mt-4">
        <div class="bg-fuchsia-500/10 border border-fuchsia-500/30 backdrop-blur-md rounded-2xl rounded-tr-sm p-4 text-sm text-fuchsia-50 font-medium shadow-[inset_0_0_15px_rgba(217,70,239,0.05)]">
          ${text}
        </div>
        <div class="w-8 h-8 rounded-xl bg-black/60 border border-white/10 flex-shrink-0 flex items-center justify-center shadow-lg text-xs font-bold text-white">
          MA
        </div>
      </div>
    `;
    chatBox.insertAdjacentHTML('beforeend', userMsg);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2. AI Simulation
    setTimeout(() => {
      const aiMsg = `
        <div class="flex gap-3 mt-4 animate-fade-in">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex-shrink-0 flex items-center justify-center shadow-lg border border-white/10">
            <span class="text-sm">🦫</span>
          </div>
          <div class="bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300 font-medium leading-relaxed shadow-sm">
            Recibido comandante. Integrando "${text}" en la base de datos de Lummia. ¿Algo más?
          </div>
        </div>
      `;
      chatBox.insertAdjacentHTML('beforeend', aiMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000); // Fake thinking
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}