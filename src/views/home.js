export function renderHome() {
  return /* html */`
    <div class="animate-system-boot h-full flex flex-col relative z-0 p-4 lg:p-6 lg:px-8">
      
      <div class="flex-none bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] p-8 mb-8 relative overflow-hidden shadow-2xl group flex-shrink-0">
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[80px] group-hover:bg-fuchsia-500/30 transition-colors duration-700"></div>
        <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
           <div class="relative">
             <div class="w-24 h-24 lg:w-28 lg:h-28 rounded-[2rem] bg-black/60 border-2 border-fuchsia-500/40 shadow-[0_0_30px_rgba(217,70,239,0.2)] flex items-center justify-center text-5xl transform group-hover:scale-105 transition-all duration-300 backdrop-blur-md">🦫</div>
             <div class="absolute -bottom-3 -right-3 bg-black border border-fuchsia-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-[0_0_10px_rgba(217,70,239,0.5)]">LVL 14</div>
           </div>
           <div class="flex-1 w-full text-center md:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-3">
                <span class="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse shadow-[0_0_8px_#e879f9]"></span>
                <span class="text-fuchsia-400 text-[9px] font-bold uppercase tracking-widest">Aprendiz de Código</span>
              </div>
              <h1 class="text-3xl lg:text-4xl font-bold text-white tracking-wide mb-4 truncate drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">MATIASAC110508</h1>
              <div class="max-w-xl">
                 <div class="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                    <span class="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] flex items-center gap-1.5"><i class="fa-solid fa-bolt"></i> 2,450 Expbara</span>
                    <span>Siguiente Rango: 3,000 XP</span>
                 </div>
                 <div class="h-3.5 w-full bg-black/80 rounded-full border border-white/10 overflow-hidden shadow-inner p-[1px]">
                    <div class="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-amber-400 rounded-full w-[82%] shadow-[0_0_15px_rgba(217,70,239,0.6)] relative overflow-hidden">
                       <div class="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                 </div>
              </div>
           </div>
           <div class="hidden lg:flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-5 min-w-[130px] shadow-lg cursor-pointer">
              <span class="text-4xl mb-2 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">🔥</span>
              <span class="text-2xl font-black text-white tracking-tighter">14</span>
              <span class="text-[9px] text-amber-400 font-bold uppercase tracking-widest mt-1">Días de Racha</span>
           </div>
        </div>
      </div>

      <div class="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
         
         <div class="lg:col-span-8 flex flex-col gap-8">
            
            <div>
                <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3 mb-4"><i class="fa-solid fa-gamepad text-fuchsia-500"></i> Misión Principal</h3>
                <div class="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-[2rem] p-5 lg:p-6 flex flex-col md:flex-row gap-6 hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer group shadow-xl">
                    <div class="w-full md:w-72 aspect-video bg-black/60 rounded-[1.5rem] relative overflow-hidden border border-white/5 group-hover:border-fuchsia-500/40 transition-colors shadow-inner">
                        <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                            <div class="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center pl-1 transform scale-75 group-hover:scale-100 transition-all duration-300"><i class="fa-solid fa-play text-2xl"></i></div>
                        </div>
                        <div class="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest flex items-center gap-1 shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                            <i class="fa-solid fa-star text-[9px]"></i> +50 XP
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                        <span class="text-[10px] text-fuchsia-400 font-black uppercase tracking-widest mb-2">Módulo 04 • The DOM</span>
                        <h4 class="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors leading-tight">Manipulación del DOM Avanzada</h4>
                        <p class="text-sm text-zinc-400 font-light mb-6 line-clamp-2">Aprende a inyectar nodos y crear animaciones con Vanilla JS para vencer al jefe final de las interfaces estáticas.</p>
                        <button class="w-full md:w-auto mt-auto py-3 px-6 bg-white/10 hover:bg-white text-white hover:text-black rounded-xl text-xs font-bold uppercase tracking-widest transition-all text-center">Continuar Partida</button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3"><i class="fa-solid fa-fire text-amber-500"></i> Videos Destacados</h3>
                
                <div class="flex gap-4 overflow-x-auto pb-2 custom-scrollbar snap-x">
                    <div class="min-w-[260px] bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all cursor-pointer group snap-start">
                        <div class="aspect-video bg-black/50 relative flex items-center justify-center border-b border-white/5 group-hover:border-amber-500/30 transition-colors">
                            <i class="fa-solid fa-play text-3xl opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:text-amber-400 transition-all"></i>
                        </div>
                        <div class="p-4">
                            <h4 class="text-sm font-bold text-white mb-1">Tailwind vs CSS Puro</h4>
                            <p class="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">+25 Expbara</p>
                        </div>
                    </div>
                    <div class="min-w-[260px] bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all cursor-pointer group snap-start">
                        <div class="aspect-video bg-black/50 relative flex items-center justify-center border-b border-white/5 group-hover:border-fuchsia-500/30 transition-colors">
                            <i class="fa-solid fa-play text-3xl opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:text-fuchsia-400 transition-all"></i>
                        </div>
                        <div class="p-4">
                            <h4 class="text-sm font-bold text-white mb-1">Tu primer Servidor Node</h4>
                            <p class="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">+50 Expbara</p>
                        </div>
                    </div>
                </div>

                <div class="bg-black/40 backdrop-blur-md border border-white/5 rounded-[1.5rem] p-4 shadow-inner flex gap-4 items-start transition-all focus-within:border-emerald-500/30 focus-within:bg-black/60 mt-1">
                    <div class="w-10 h-10 rounded-xl bg-black/60 border border-fuchsia-500/30 flex items-center justify-center text-xl flex-shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
                        🦫
                    </div>
                    <div class="flex-1 relative flex flex-col gap-2">
                        <textarea placeholder="¿Qué quieres compartir con la comunidad?" 
                                  class="w-full bg-transparent border-none rounded-xl py-2 pl-2 pr-2 text-sm text-white placeholder-zinc-500 focus:outline-none resize-none h-10 focus:h-20 transition-all custom-scrollbar"></textarea>
                        
                        <div id="youtube-link-container" class="hidden w-full transition-all">
                            <div class="flex items-center gap-3 bg-black/50 rounded-xl p-2.5 border border-amber-500/30 shadow-[inset_0_0_15px_rgba(251,191,36,0.05)] mt-1 mb-2">
                                <i class="fa-brands fa-youtube text-red-500 text-lg ml-1 animate-pulse"></i>
                                <input type="url" placeholder="Pega el enlace de YouTube aquí (ej. https://youtu.be/...)" 
                                       class="w-full bg-transparent border-none text-xs text-white placeholder-zinc-500 focus:outline-none">
                                <button onclick="document.getElementById('youtube-link-container').classList.add('hidden')" class="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-500/20 text-zinc-500 hover:text-red-400 transition-colors">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>

                        <div class="flex justify-between items-center border-t border-white/5 pt-2.5 mt-1">
                            <div class="flex gap-2">
                                <button onclick="document.getElementById('youtube-link-container').classList.toggle('hidden')" class="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] text-zinc-400 hover:text-amber-400 font-bold transition-all border border-white/5 hover:border-amber-500/30 flex items-center gap-2 group" title="Adjuntar un Video">
                                    <i class="fa-solid fa-video text-amber-500 group-hover:scale-110 transition-transform"></i> Link Video
                                </button>
                                <button class="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] text-zinc-400 hover:text-fuchsia-400 font-bold transition-all border border-white/5 hover:border-fuchsia-500/30 flex items-center gap-2 group" title="Compartir Código">
                                    <i class="fa-solid fa-code text-fuchsia-400 group-hover:scale-110 transition-transform"></i> Snippet
                                </button>
                            </div>
                            <div class="flex gap-3 items-center">
                                <button class="text-[10px] text-zinc-500 hover:text-white font-bold transition-all uppercase tracking-widest hidden sm:block">
                                    + Post Avanzado
                                </button>
                                <button class="px-4 py-1.5 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:scale-105 transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)] text-[11px] font-bold uppercase tracking-widest gap-2">
                                    Publicar <i class="fa-solid fa-paper-plane text-xs"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center justify-between mb-4">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-satellite-dish text-emerald-400"></i> Actividad Reciente</span>
                </h3>
                
                <div class="flex flex-col gap-4">
                    <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 hover:border-emerald-500/30 transition-all group shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-lg border border-emerald-500/20">💡</div>
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider border border-emerald-500/30">Feedback</span>
                                    <h4 class="text-sm font-bold text-white">Sugerencia: Modo oscuro verdadero</h4>
                                </div>
                                <p class="text-xs text-zinc-400 font-medium leading-relaxed mb-3">Sería genial si la plataforma tuviera un botón para apagar completamente la Aurora del fondo cuando estamos codificando tarde en la noche. ¿Qué opinan?</p>
                                <div class="flex items-center gap-4 text-[11px] text-zinc-500 font-bold">
                                    <span class="hover:text-emerald-400 cursor-pointer transition-colors"><i class="fa-solid fa-arrow-up"></i> 42</span>
                                    <span class="hover:text-white cursor-pointer transition-colors"><i class="fa-solid fa-comment"></i> 12 Respuestas</span>
                                    <span>· Hace 2 horas por Alex_Dev</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 hover:border-fuchsia-500/30 transition-all group shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 text-lg border border-fuchsia-500/20">❓</div>
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[9px] bg-fuchsia-500/20 text-fuchsia-300 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider border border-fuchsia-500/30">Duda</span>
                                    <h4 class="text-sm font-bold text-white">Problema con Promesas en JS</h4>
                                </div>
                                <p class="text-xs text-zinc-400 font-medium leading-relaxed mb-3">Estoy atascado en el módulo 5. Cuando hago un fetch a la API, me devuelve "undefined" en lugar del JSON. ¿Alguien tiene un snippet de ejemplo?</p>
                                <div class="flex items-center gap-4 text-[11px] text-zinc-500 font-bold">
                                    <span class="hover:text-fuchsia-400 cursor-pointer transition-colors"><i class="fa-solid fa-arrow-up"></i> 15</span>
                                    <span class="hover:text-white cursor-pointer transition-colors"><i class="fa-solid fa-comment"></i> 3 Respuestas</span>
                                    <span>· Hace 5 horas por Sarah_K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         <div class="lg:col-span-4 flex flex-col gap-8">
            
            <div>
               <h3 class="text-xs font-black text-white uppercase tracking-widest mb-4 invisible">Estadísticas</h3>
               <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-5 shadow-xl flex flex-col items-center text-center">
                     <div class="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-lg text-purple-400 mb-2">⚔️</div>
                     <p class="text-2xl font-black text-white mb-1">24</p>
                     <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Misiones</p>
                  </div>
                  <div class="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-5 shadow-xl flex flex-col items-center text-center">
                     <div class="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-lg text-emerald-400 mb-2">⏱️</div>
                     <p class="text-2xl font-black text-white mb-1">12h</p>
                     <p class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">De Juego</p>
                  </div>
               </div>
            </div>

            <div class="flex-1 flex flex-col">
               <h3 class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3 mb-4">
                  <i class="fa-solid fa-ranking-star text-amber-400"></i> Leaderboard
               </h3>
               <div class="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-[2rem] p-6 flex-1 shadow-xl flex flex-col relative overflow-hidden">
                  <div class="space-y-3 flex-1 relative z-10">
                     <div class="flex items-center gap-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 shadow-[inset_0_0_20px_rgba(251,191,36,0.1)]">
                        <span class="text-xl w-6 text-center font-black text-amber-400 drop-shadow-md">1</span>
                        <div class="w-10 h-10 rounded-full bg-black/60 border border-amber-500/50 flex items-center justify-center text-lg">🦊</div>
                        <div class="flex-1">
                           <p class="text-sm font-bold text-white">Alex Dev</p>
                           <p class="text-[9px] text-amber-400 font-black uppercase tracking-widest">4,200 XP</p>
                        </div>
                     </div>
                     <div class="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                        <span class="text-xl w-6 text-center font-black text-zinc-300 drop-shadow-md">2</span>
                        <div class="w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-lg shadow-[0_0_10px_rgba(217,70,239,0.2)]">🦫</div>
                        <div class="flex-1">
                           <p class="text-sm font-bold text-white">MatiasAC <span class="text-[9px] text-fuchsia-400 ml-1">(Tú)</span></p>
                           <p class="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">2,450 XP</p>
                        </div>
                     </div>
                  </div>
                  <button class="w-full mt-6 py-3.5 bg-[#050505] border border-white/10 hover:border-fuchsia-500/50 rounded-xl text-[10px] font-black text-white hover:bg-fuchsia-500/10 transition-all uppercase tracking-widest relative z-10">
                     Ver Clasificación Global
                  </button>
               </div>
            </div>

         </div>
      </div>
    </div>
  `;
}