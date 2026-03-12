

export function renderTutorIA() {
  const container = document.getElementById('ai-panel-container');
  if (!container) return;

  // 1. OBTENER DATOS DE SESIÓN PARA PERSONALIZAR EL SALUDO
  const session = JSON.parse(localStorage.getItem('user_session')) || { 
    username: 'Explorador', 
    id: 'guest' 
  };
  
  const firstName = session.username.split(' ')[0].toUpperCase();

  container.innerHTML = /* html */`
    <div class="p-6 border-b border-white/[0.05]">
      <div class="flex items-center gap-2 mb-1">
        <span class="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(217,70,239,0.5)]"></span>
        <p class="text-[9px] font-bold text-fuchsia-400 uppercase tracking-widest">Lummia Neural Net</p>
      </div>
      <h2 class="text-lg font-black text-white tracking-tight">Capybara Tutor 🦦</h2>
    </div>

    <div id="ai-chat-messages" class="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
      <div id="history-loading" class="text-center py-2 opacity-50 text-[10px] uppercase font-bold tracking-widest">
        Sincronizando enlace neuronal con MongoDB...
      </div>
    </div>

    <div class="p-6 border-t border-white/[0.05] bg-black/40">
      <div class="relative flex items-center group">
        <input type="text" id="tutor-input" placeholder="Escribe tu comando, ${firstName}..." 
               class="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500/50 focus:bg-white/[0.05] transition-all">
        <button id="tutor-send" class="absolute right-2 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-zinc-400 hover:text-fuchsia-400 hover:bg-fuchsia-500/10 transition-colors">
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </div>
    </div>
  `;
}

export function initTutorLogic() {
  const input = document.getElementById('tutor-input');
  const sendBtn = document.getElementById('tutor-send');
  const chatBox = document.getElementById('ai-chat-messages');

  if (!input || !sendBtn || !chatBox) return;

  const session = JSON.parse(localStorage.getItem('user_session')) || { username: 'EX', id: null };
  const userInitials = session.username.substring(0, 2).toUpperCase();

  // --- MISIÓN 3: CARGAR HISTORIAL DESDE MONGODB ---
  async function loadChatHistory() {
    if (!session.id) return;
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat/history/${session.id}`);
      const data = await response.json();
      
      const loadingTag = document.getElementById('history-loading');
      if (loadingTag) loadingTag.remove();

      if (data.status === 'success' && data.history.length > 0) {
        data.history.forEach(chat => {
          const pastMsgs = `
            <div class="flex gap-3 justify-end mt-4 opacity-60">
              <div class="bg-fuchsia-500/5 border border-white/10 rounded-2xl p-3 text-xs text-zinc-400 font-medium">
                ${chat.mensaje_usuario}
              </div>
              <div class="w-6 h-6 rounded-lg bg-black/40 border border-white/10 flex-shrink-0 flex items-center justify-center text-[8px] font-bold">
                ${userInitials}
              </div>
            </div>
            <div class="flex gap-3 mt-4 opacity-60">
              <div class="w-6 h-6 rounded-lg bg-fuchsia-600 flex-shrink-0 flex items-center justify-center text-[10px]">🦦</div>
              <div class="bg-white/[0.02] border border-white/5 rounded-2xl p-3 text-xs text-zinc-500 font-medium italic">
                ${chat.respuesta_bot}
              </div>
            </div>
          `;
          chatBox.insertAdjacentHTML('beforeend', pastMsgs);
        });
      }

      // Saludo inicial después de cargar el historial
      const welcomeMsg = `
        <div class="flex gap-3 mt-6 animate-fade-in">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex-shrink-0 flex items-center justify-center shadow-lg border border-white/10">
            <span class="text-sm">🦦</span>
          </div>
          <div class="bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300 font-medium leading-relaxed">
            ¡Hola de nuevo, ${session.username.split(' ')[0]}! El historial ha sido recuperado. ¿En qué código trabajamos hoy?
          </div>
        </div>
      `;
      chatBox.insertAdjacentHTML('beforeend', welcomeMsg);
      chatBox.scrollTop = chatBox.scrollHeight;

    } catch (err) {
      console.error("Error al sincronizar con MongoDB:", err);
      const loadingTag = document.getElementById('history-loading');
      if (loadingTag) loadingTag.innerHTML = "Error al sincronizar historial neuronal.";
    }
  }

  // Ejecutar carga de historial al iniciar el chat
  loadChatHistory();

  // --- FUNCIÓN PARA ENVIAR NUEVOS MENSAJES ---
  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    // 1. Renderizar mensaje del usuario (Derecha)
    const userMsg = `
      <div class="flex gap-3 justify-end mt-4 animate-fade-in">
        <div class="bg-fuchsia-500/10 border border-fuchsia-500/30 backdrop-blur-md rounded-2xl rounded-tr-sm p-4 text-sm text-fuchsia-50 font-medium shadow-[inset_0_0_15px_rgba(217,70,239,0.05)]">
          ${text}
        </div>
        <div class="w-8 h-8 rounded-xl bg-black/60 border border-white/10 flex-shrink-0 flex items-center justify-center shadow-lg text-xs font-bold text-white uppercase">
          ${userInitials}
        </div>
      </div>
    `;
    chatBox.insertAdjacentHTML('beforeend', userMsg);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
      // 2. Conexión al Backend (Gemini + Guardado en Mongo)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: text, 
          username: session.username, 
          user_id: session.id 
        }) 
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Error en el servidor');

      // 3. Renderizar respuesta de la IA (Izquierda)
      const aiMsg = `
        <div class="flex gap-3 mt-4 animate-fade-in">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex-shrink-0 flex items-center justify-center shadow-lg border border-white/10">
            <span class="text-sm">🦦</span>
          </div>
          <div class="bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300 font-medium leading-relaxed">
            ${data.reply}
          </div>
        </div>
      `;
      chatBox.insertAdjacentHTML('beforeend', aiMsg);

      // --- MISIÓN 1: GANAR XP POR CHAT ---
      if (session.id) {
        await fetch(`${import.meta.env.VITE_API_URL}/api/users/add-xp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: session.id, xp: 15 }) // +15 XP por mensaje
        });
        console.log("XP Ganado por interacción con el Tutor 🦦");
      }
      
    } catch (error) {
      console.error("Error:", error);
      const errorMsg = `<div class="text-red-400 text-[10px] mt-4 uppercase font-bold text-center italic">Enlace neuronal fallido. Revisa tu conexión.</div>`;
      chatBox.insertAdjacentHTML('beforeend', errorMsg);
    } finally {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }

  // Escuchar eventos de clic y tecla Enter
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}