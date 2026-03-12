// src/views/home.js
export function renderHome() {
  const app = document.getElementById('app');
  let container = document.getElementById('main-container');

  // 1. OBTENER DATOS REALES DE LA SESIÓN
  const rawSession = localStorage.getItem('user_session');
  const session = (rawSession && rawSession !== "undefined") 
    ? JSON.parse(rawSession) 
    : { 
        username: 'Code Apprentice', 
        level: 1, 
        xp: 0,
        role: 'student'
      };

  // 2. ESTRUCTURA DE LAYOUT
  if (!container) {
    app.innerHTML = /* html */`
      <div class="flex h-screen w-full bg-[#050505] text-white overflow-hidden">
        <aside id="nav-container" class="w-80 h-full border-r border-white/[0.05] flex flex-col relative z-20"></aside>
        <main id="main-container" class="flex-1 h-full relative overflow-y-auto custom-scrollbar p-0"></main>
      </div>
    `;
    container = document.getElementById('main-container');
  }

  // 3. LÓGICA DE SCROLL Y EVENTOS
  setTimeout(() => {
    const scrollContainer = document.getElementById('video-scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
      }, { passive: false });
    }
    fetchLeaderboardData();
  }, 0);

  // 4. RENDERIZADO DEL CONTENIDO
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
                    LVL ${session.level || 1}
                </div>
           </div>
           <div class="flex-1 w-full text-center md:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-3">
                <span class="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse shadow-[0_0_8px_#e879f9]"></span>
                <span class="text-fuchsia-400 text-[9px] font-bold uppercase tracking-widest italic font-black">
                    ${session.role === 'tl' ? 'Clan Leader / Teacher' : 'Clan Thomson Member'}
                </span>
              </div>
              <h1 class="text-3xl lg:text-4xl font-bold text-white tracking-wide mb-4 truncate uppercase italic font-black">
                ${session.username}
              </h1>
              <div class="max-w-xl">
                 <div class="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                    <span class="text-amber-400 flex items-center gap-1.5 font-black"><i class="fa-solid fa-bolt"></i> ${session.xp || 0} Expbara</span>
                    <span>Next Rank: 1,000 XP</span>
                 </div>
                 <div class="h-3 w-full bg-black/80 rounded-full border border-white/10 overflow-hidden p-[1px]">
                    <div class="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-amber-400 rounded-full transition-all duration-1000" style="width: ${(session.xp % 1000) / 10}%"></div>
                 </div>
              </div>
           </div>
           <div class="hidden lg:flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-5 min-w-[130px] shadow-lg">
              <span class="text-4xl mb-2">🔥</span>
              <span class="text-2xl font-black text-white">1</span>
              <span class="text-[9px] text-amber-400 font-bold uppercase tracking-widest mt-1">Day Streak</span>
           </div>
        </div>
      </div>

      <div class="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
         <div class="lg:col-span-8 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3"><i class="fa-solid fa-fire text-amber-500"></i> Featured Videos</h3>
                <div id="video-scroll-container" class="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x cursor-grab active:cursor-grabbing">
                    
                    <div onclick="window.awardVideoXP(25, 'Tailwind Architecture')" class="min-w-[280px] bg-white/[0.02] border border-white/[0.05] rounded-[2rem] overflow-hidden hover:bg-white/[0.04] transition-all group snap-start cursor-pointer shadow-xl hover:border-fuchsia-500/50">
                        <div class="aspect-video bg-black/50 relative flex items-center justify-center border-b border-white/5">
                            <i class="fa-solid fa-play text-3xl opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:text-amber-400 transition-all"></i>
                        </div>
                        <div class="p-5">
                            <h4 class="text-sm font-bold text-white mb-1 uppercase tracking-tight">Tailwind Architecture</h4>
                            <p class="text-[9px] text-zinc-500 font-black uppercase tracking-widest">+25 Expbara</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="bg-black/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-5 shadow-inner flex gap-4 items-start focus-within:border-fuchsia-500/30 transition-all">
                <div class="w-10 h-10 rounded-xl bg-black/60 border border-fuchsia-500/20 overflow-hidden flex-shrink-0">
                    <img src="../../assets/completedCapi.png" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 flex flex-col gap-3">
                    <textarea placeholder="Share your progress, ${session.username}..." class="w-full bg-transparent border-none py-2 text-sm text-white placeholder-zinc-600 focus:outline-none resize-none h-10 focus:h-24 transition-all"></textarea>
                    <div class="flex justify-between items-center border-t border-white/5 pt-3">
                        <div class="flex gap-2">
                            <button class="px-3 py-1.5 bg-white/5 hover:bg-red-500/10 rounded-lg text-[10px] text-zinc-400 hover:text-red-400 font-bold flex items-center gap-2 border border-white/5 transition-all">
                                <i class="fa-brands fa-youtube text-red-500"></i> Video
                            </button>
                            <button class="px-3 py-1.5 bg-white/5 hover:bg-fuchsia-500/10 rounded-lg text-[10px] text-zinc-400 hover:text-fuchsia-400 font-bold flex items-center gap-2 border border-white/5 transition-all">
                                <i class="fa-solid fa-code text-fuchsia-500"></i> Snippet
                            </button>
                        </div>
                        <button class="px-6 py-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Post</button>
                    </div>
                </div>
            </div>
         </div>

         <div class="lg:col-span-4 flex flex-col gap-8">
            <div class="grid grid-cols-2 gap-4">
               <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 text-center shadow-xl group">
                  <div class="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center mx-auto mb-3 border border-fuchsia-500/20">
                     <i class="fa-solid fa-trophy text-fuchsia-400 text-xl"></i>
                  </div>
                  <p class="text-2xl font-black text-white">0</p>
                  <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Achievements</p>
               </div>
               <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 text-center shadow-xl group">
                  <div class="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3 border border-amber-500/20">
                     <i class="fa-solid fa-stopwatch text-amber-500 text-xl"></i>
                  </div>
                  <p class="text-2xl font-black text-white">0h</p>
                  <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Total Time</p>
               </div>
            </div>
            
            <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-6 flex-1 shadow-xl min-h-[450px]">
               <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6"><i class="fa-solid fa-ranking-star text-amber-500"></i> Leaderboard</h3>
               
               <div id="leaderboard-list" class="space-y-4">
                  <div class="flex flex-col items-center justify-center py-10 opacity-50">
                     <i class="fa-solid fa-circle-notch animate-spin text-fuchsia-500 text-xl mb-2"></i>
                     <span class="text-[9px] font-black uppercase tracking-widest">Cargando Clan...</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  `;

  // 5. FUNCIÓN INTERNA PARA FETCHING DEL LEADERBOARD
  async function fetchLeaderboardData() {
    try {
      const response = await fetch('http://localhost:5000/api/users/leaderboard');
      const data = await response.json();
      const listContainer = document.getElementById('leaderboard-list');

      if (data.status === 'success' && listContainer) {
        listContainer.innerHTML = data.users.map((user, index) => {
            const rankIcons = ['👑', '🥈', '🥉'];
            const isTop3 = index < 3;
            const badge = rankIcons[index] || index + 1;
            const progress = (user.xp % 1000) / 10; 

            return `
              <div class="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.02] 
                ${index === 0 ? 'bg-amber-500/10 border border-amber-500/30 shadow-[0_0_20px_rgba(251,191,36,0.1)]' : 
                  index === 1 ? 'bg-slate-400/10 border border-slate-400/20' :
                  index === 2 ? 'bg-orange-700/10 border border-orange-700/20' : 'bg-white/[0.02] border border-white/5'}">
                
                <span class="font-black text-xl ${isTop3 ? 'animate-bounce' : 'text-zinc-600'} w-8 text-center" style="animation-duration: 3s">
                  ${badge}
                </span>

                <div class="relative">
                  <div class="w-11 h-11 rounded-full bg-black/40 flex items-center justify-center border-2 
                    ${index === 0 ? 'border-amber-400' : 'border-white/10'} text-[10px] font-bold uppercase">
                    ${user.username.charAt(0)}
                  </div>
                  ${index === 0 ? '<span class="absolute -top-2 -right-1 text-xs animate-pulse">🔥</span>' : ''}
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-end mb-1">
                    <p class="text-xs font-black text-white uppercase truncate tracking-tighter">${user.username}</p>
                    <p class="text-[9px] font-black text-amber-400 uppercase">${user.xp} XP</p>
                  </div>
                  
                  <div class="h-1.5 w-full bg-black/50 rounded-full overflow-hidden p-[1px] border border-white/5">
                    <div class="h-full rounded-full transition-all duration-1000 
                      ${index === 0 ? 'bg-gradient-to-r from-amber-600 to-yellow-300' : 'bg-fuchsia-600'}" 
                      style="width: ${progress}%">
                    </div>
                  </div>
                </div>
              </div>
            `;
        }).join('');
      }
    } catch (error) {
      console.error("Error Leaderboard:", error);
      const listContainer = document.getElementById('leaderboard-list');
      if(listContainer) listContainer.innerHTML = '<p class="text-center text-[10px] text-red-400 font-black uppercase">Enlace perdido</p>';
    }
  }

  // MISIÓN 1 & 2: FUNCIÓN GLOBAL PARA XP + LEVEL UP
  window.awardVideoXP = async (amount, videoTitle) => {
    const raw = localStorage.getItem('user_session');
    if (!raw) return;
    const currentSession = JSON.parse(raw);

    try {
        const response = await fetch('http://localhost:5000/api/users/add-xp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: currentSession.id, xp: amount })
        });

        const data = await response.json();
        if (data.status === 'success') {
            // ¿HUBO LEVEL UP? (Misión 2)
            if (data.level > currentSession.level) {
                triggerLevelUpEffect(data.level);
            }

            // Actualizar sesión y re-renderizar
            currentSession.xp = data.xp;
            currentSession.level = data.level;
            localStorage.setItem('user_session', JSON.stringify(currentSession));
            
            // Re-renderizamos para actualizar la barra de arriba sin refrescar toda la web
            renderHome(); 
        }
    } catch (error) {
        console.error("Error XP Video:", error);
    }
  };

  // EFECTO VISUAL DE LEVEL UP (Misión 2)
  function triggerLevelUpEffect(newLevel) {
      const overlay = document.createElement('div');
      overlay.className = "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in";
      overlay.innerHTML = `
        <div class="text-center animate-bounce-slow">
            <h2 class="text-5xl font-black text-fuchsia-500 mb-2 uppercase italic tracking-tighter shadow-fuchsia-500/50">¡LEVEL UP!</h2>
            <p class="text-zinc-400 font-bold uppercase tracking-widest">Has alcanzado el Nivel ${newLevel}</p>
            <div class="mt-6 text-6xl">🔥🦦🔥</div>
        </div>
      `;
      document.body.appendChild(overlay);
      
      // Auto-eliminar después de 3 segundos
      setTimeout(() => {
          overlay.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
          setTimeout(() => overlay.remove(), 1000);
      }, 3000);
  }
}