// src/views/home.js

export function renderHome() {
  return `
    <div class="p-8 fade-in text-gray-300 w-full max-w-6xl mx-auto">
       
       <div class="flex justify-between items-end mb-10 pb-6 border-b border-white/10">
          <div>
            <h2 class="text-3xl font-bold text-white mb-2 tracking-tight">
              Welcome back, <span class="text-lummia-sage">JennLopezDv</span> ⚡
            </h2>
            <p class="text-gray-400">Ready to level up your coding skills today?</p>
          </div>
          <div class="bg-black/40 border border-white/10 px-5 py-3 rounded-2xl text-right flex items-center gap-4">
            <div class="text-right">
              <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Current Rank</p>
              <p class="text-xl text-white font-bold">Lvl 15 <span class="text-lummia-sage text-sm ml-1">Architect</span></p>
            </div>
            <div class="w-12 h-12 bg-lummia-sage/20 border-2 border-lummia-sage rounded-full flex items-center justify-center text-xl">
              🧙‍♂️
            </div>
          </div>
       </div>

       <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div class="lg:col-span-2 space-y-6">
             <div class="bg-black/20 border border-white/5 p-6 rounded-3xl shadow-lg">
                <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
                   <span class="text-yellow-500 text-xl">📜</span> Active Quests
                </h3>
                
                <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-lummia-sage/40 transition-colors mb-4 group cursor-pointer">
                   <div class="flex justify-between items-start mb-3">
                      <div>
                         <h4 class="text-white font-bold group-hover:text-lummia-sage transition-colors">Vida Sana Hospital - Relational DB</h4>
                         <p class="text-sm text-gray-400 mt-1">Design the conceptual and relational database model.</p>
                      </div>
                      <span class="bg-lummia-sage/20 text-lummia-sage text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-lummia-sage/30">In Progress</span>
                   </div>
                   <div class="w-full bg-black/60 rounded-full h-2.5 mt-4 overflow-hidden border border-white/5">
                      <div class="bg-lummia-sage h-full rounded-full relative" style="width: 75%">
                        <div class="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                      </div>
                   </div>
                   <p class="text-right text-[10px] text-gray-500 mt-2 font-bold tracking-widest">75% COMPLETE</p>
                </div>

                <div class="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-blue-400/40 transition-colors group cursor-pointer">
                   <div class="flex justify-between items-start mb-3">
                      <div>
                         <h4 class="text-white font-bold group-hover:text-blue-400 transition-colors">Frontend Lummia Platform</h4>
                         <p class="text-sm text-gray-400 mt-1">Implement SPA Routing and UI architecture.</p>
                      </div>
                      <span class="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-400/30">Review</span>
                   </div>
                   <div class="w-full bg-black/60 rounded-full h-2.5 mt-4 overflow-hidden border border-white/5">
                      <div class="bg-blue-400 h-full rounded-full" style="width: 90%"></div>
                   </div>
                   <p class="text-right text-[10px] text-gray-500 mt-2 font-bold tracking-widest">90% COMPLETE</p>
                </div>
             </div>
          </div>

          <div class="space-y-6">
             
             <div class="bg-black/20 border border-white/5 p-6 rounded-3xl text-center shadow-lg relative overflow-hidden group">
                <div class="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 relative z-10">Focus Zone</h3>
                
                <div class="w-20 h-20 bg-[#1DB954]/10 text-[#1DB954] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(29,185,84,0.15)] group-hover:scale-105 transition-transform relative z-10 cursor-pointer">
                   <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C22 6.477 17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.345-1.433-5.29-1.758-8.766-.963-.332.076-.65-.133-.727-.464-.077-.33.132-.65.463-.727 3.805-.87 7.07-.497 9.68 1.09.294.18.386.564.207.857zm1.314-2.924c-.225.367-.706.48-1.07.257-2.678-1.645-6.78-2.12-9.965-1.157-.406.123-.832-.108-.956-.514-.124-.406.108-.832.514-.956 3.633-1.098 8.16-.576 11.22 1.306.366.225.48.706.257 1.064zm.14-3.045c-3.21-1.905-8.5-2.08-11.554-1.152-.486.147-1.002-.128-1.15-.614-.147-.487.128-1.002.614-1.15 3.513-1.066 9.356-.864 13.04 1.32.435.258.577.82.32 1.254-.258.435-.82.576-1.254.32z"/></svg>
                </div>
                
                <p class="text-white font-bold text-lg relative z-10">Rock Essentials</p>
                <p class="text-xs text-gray-400 mt-1 relative z-10">Spotify Player</p>
                
                <div class="mt-6 flex justify-center gap-2 relative z-10">
                  <div class="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse"></div>
                  <div class="w-1 h-5 bg-[#1DB954] rounded-full animate-pulse delay-75"></div>
                  <div class="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
                  <div class="w-1 h-2 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
                </div>
             </div>

             <div class="bg-black/20 border border-white/5 p-6 rounded-3xl shadow-lg">
                 <h3 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 text-center">Version Control</h3>
                 <div class="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div class="flex items-center gap-3">
                       <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                       <span class="text-white font-medium">Weekly Commits</span>
                    </div>
                    <span class="text-lummia-sage font-bold text-2xl">24</span>
                 </div>
             </div>

          </div>
       </div>
    </div>
  `;
}