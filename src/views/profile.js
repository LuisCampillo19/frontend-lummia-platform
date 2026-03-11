export function renderProfile() {
  // Target al ID detectado en tu consola: main-container
  const container = document.getElementById('main-container'); 
  if (!container) return;

  container.innerHTML = /* html */`
    <style>
      /* Estilización del scrollbar para la Bio (Evita que choque con bordes redondeados) */
      .bio-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .bio-scrollbar::-webkit-scrollbar-track {
        background: transparent;
        margin: 12px; /* Margen para que no toque las curvas del contenedor */
      }
      .bio-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(217, 70, 239, 0.2);
        border-radius: 10px;
        transition: all 0.3s;
      }
      .bio-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(217, 70, 239, 0.5);
      }
    </style>

    <div id="profile-view" class="p-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      <div class="relative mb-10 rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/5 p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
         
         <div class="relative group cursor-pointer">
            <div class="absolute inset-0 bg-fuchsia-500 blur-3xl opacity-10 group-hover:opacity-25 transition-opacity"></div>
            
            <div class="relative w-40 h-40 flex-shrink-0">
               <img src="../../assets/completedCapi.png" 
                    class="w-full h-full rounded-[2rem] object-cover border-2 border-fuchsia-500/20 group-hover:border-fuchsia-500/50 transition-all shadow-2xl" 
                    alt="Avatar de Usuario">
               
               <div class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]">
                  <div class="text-center">
                     <i class="fa-solid fa-camera text-white text-xl mb-1"></i>
                     <p class="text-[8px] font-black uppercase text-white tracking-widest">Cambiar Foto</p>
                  </div>
               </div>
            </div>
            <div class="absolute -bottom-2 -right-2 bg-fuchsia-600 text-white text-[10px] font-black px-4 py-1.5 rounded-xl shadow-lg border border-fuchsia-400/30">LVL 14</div>
         </div>

         <div class="text-center md:text-left flex-1">
            <h2 class="text-4xl font-black text-white uppercase tracking-tighter">Panel de Perfil</h2>
            <p class="text-zinc-400 text-sm font-medium mt-1">Configura tu cuenta y visualiza tus logros en <span class="text-fuchsia-500 font-bold">Lummia</span></p>
            
            <div class="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
               <div class="px-4 py-1.5 bg-fuchsia-500/10 rounded-xl border border-fuchsia-500/20">
                  <span class="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest">MatiasAC110508</span>
               </div>
               <div class="px-4 py-1.5 bg-white/5 rounded-xl border border-white/10">
                  <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">ID: #8844013</span>
               </div>
            </div>
         </div>

         <button class="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(217,70,239,0.3)] active:scale-95">
            Guardar Todo
         </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         <div class="lg:col-span-2 space-y-8">
            
            <div class="bg-black/30 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
               <div class="flex items-center gap-3 pb-4 border-b border-white/5">
                  <div class="w-8 h-8 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                     <i class="fa-solid fa-id-card text-fuchsia-400"></i>
                  </div>
                  <h3 class="text-xs font-black text-white uppercase tracking-[0.2em]">Identidad Digital</h3>
               </div>

               <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                     <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Nombre de Usuario</label>
                     <input type="text" value="MATIASAC110508" class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm text-zinc-200 focus:border-fuchsia-500/50 outline-none transition-all">
                  </div>
                  <div class="space-y-2">
                     <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Tu Bio / Descripción</label>
                     <textarea rows="3" class="bio-scrollbar w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 pr-10 text-sm text-zinc-200 focus:border-fuchsia-500/50 outline-none transition-all resize-none">Mago del Backend y amante del código limpio en Lummia.</textarea>
                  </div>
               </div>
            </div>

            <div class="bg-black/30 border border-white/5 rounded-[2.5rem] p-8">
               <div class="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                  <div class="flex items-center gap-3">
                     <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <i class="fa-solid fa-trophy text-amber-500"></i>
                     </div>
                     <h3 class="text-xs font-black text-white uppercase tracking-[0.2em]">Logros Destacados</h3>
                  </div>
                  <span class="text-[10px] font-bold text-zinc-500">2 / 10 DESBLOQUEADOS</span>
               </div>

               <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div class="p-5 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center text-center group hover:bg-fuchsia-500/10 transition-all">
                     <i class="fa-solid fa-fire text-2xl text-orange-500 mb-3 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]"></i>
                     <p class="text-[9px] font-black text-white uppercase tracking-tighter">7 Días Racha</p>
                  </div>
                  <div class="p-5 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center text-center group hover:bg-fuchsia-500/10 transition-all">
                     <i class="fa-solid fa-bolt text-2xl text-yellow-400 mb-3 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]"></i>
                     <p class="text-[9px] font-black text-white uppercase tracking-tighter">Fast Learner</p>
                  </div>
                  <div class="p-5 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center text-center opacity-30 grayscale cursor-not-allowed">
                     <i class="fa-solid fa-star text-2xl text-zinc-400 mb-3"></i>
                     <p class="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">Top Clan</p>
                  </div>
                  <div class="p-5 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center text-center opacity-30 grayscale cursor-not-allowed">
                     <i class="fa-solid fa-terminal text-2xl text-zinc-400 mb-3"></i>
                     <p class="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">Bug Hunter</p>
                  </div>
               </div>
            </div>
         </div>

         <div class="bg-black/30 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
            <div class="flex items-center gap-3 pb-4 border-b border-white/5">
               <div class="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <i class="fa-solid fa-shield-halved text-red-500"></i>
               </div>
               <h3 class="text-xs font-black text-white uppercase tracking-[0.2em]">Seguridad</h3>
            </div>

            <div class="space-y-5">
               <div class="space-y-2">
                  <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Contraseña Actual</label>
                  <input type="password" placeholder="••••••••" class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm text-zinc-200 outline-none focus:border-fuchsia-500/30 transition-all">
               </div>
               <div class="space-y-2">
                  <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Nueva Contraseña</label>
                  <input type="password" placeholder="••••••••" class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm text-zinc-200 outline-none focus:border-fuchsia-500/30 transition-all">
               </div>
               
               <button class="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] transition-all">
                  Actualizar Password
               </button>
            </div>
            
            <div class="pt-6 border-t border-white/5">
               <button class="w-full py-3 text-red-500/40 hover:text-red-500 text-[9px] font-bold uppercase tracking-[0.2em] transition-all">
                  Cerrar todas las sesiones
               </button>
            </div>
         </div>

      </div>
    </div>
  `;
}