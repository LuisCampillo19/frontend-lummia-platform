export function renderDashboard() {
  return /* html */`
    <div class="animate-system-boot space-y-10">
      
      <div class="flex items-end justify-between border-b border-white/[0.02] pb-10">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <span class="w-2 h-2 bg-[#46F216] rounded-full shadow-[0_0_12px_#46F216] animate-pulse"></span>
            <p id="system-clock" class="text-[10px] font-black text-[#46F216] uppercase tracking-[0.3em]">System Booting...</p>
          </div>
          <h2 class="text-6xl font-black text-white tracking-tighter">Control Center</h2>
          <p class="text-[#697C97] font-bold mt-2 uppercase tracking-widest text-xs opacity-50 italic">Terminal Access / MATIASAC110508</p>
        </div>
        
        <div class="flex gap-4">
            <div class="bg-[#11161E] px-6 py-4 rounded-2xl text-center shadow-lg">
                <p class="text-[9px] font-black text-[#697C97] uppercase mb-1">Current Streak</p>
                <p class="text-2xl font-black text-white italic tracking-tighter"><span class="stat-counter" data-target="14">0</span> <span class="text-[#46F216] text-sm opacity-50 font-bold">Days</span></p>
            </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="group bg-[#11161E]/50 p-8 rounded-[2.5rem] transition-all hover:bg-[#11161E]/80 relative overflow-hidden cursor-default">
          <p class="text-[10px] text-[#697C97] font-black uppercase tracking-[0.2em] mb-4">Mastered Tech</p>
          <div class="flex items-baseline gap-2">
            <p class="text-6xl font-black text-white tracking-tighter group-hover:text-[#46F216] transition-colors"><span class="stat-counter" data-target="24">0</span></p>
            <span class="text-[#697C97] font-bold text-sm uppercase">Modules</span>
          </div>
        </div>

        <div class="group bg-[#11161E]/50 p-8 rounded-[2.5rem] transition-all hover:bg-[#11161E]/80 relative overflow-hidden cursor-default">
          <p class="text-[10px] text-[#697C97] font-black uppercase tracking-[0.2em] mb-4">Deep Focus Time</p>
          <div class="flex items-baseline gap-2">
            <p class="text-6xl font-black text-white tracking-tighter group-hover:text-[#46F216] transition-colors"><span class="stat-counter" data-target="128">0</span></p>
            <span class="text-[#697C97] font-bold text-sm uppercase">Hours</span>
          </div>
        </div>

        <div class="group bg-[#11161E]/50 p-8 rounded-[2.5rem] transition-all hover:bg-[#11161E]/80 relative overflow-hidden cursor-default">
          <p class="text-[10px] text-[#697C97] font-black uppercase tracking-[0.2em] mb-4">Global Contribution</p>
          <div class="flex items-baseline gap-2">
            <p class="text-6xl font-black text-white tracking-tighter group-hover:text-[#46F216] transition-colors"><span class="stat-counter" data-target="8.4" data-decimals="1">0</span><span class="text-[#46F216] text-2xl font-light italic ml-1">k</span></p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-8 bg-[#11161E]/30 rounded-[2.5rem] p-10 backdrop-blur-sm">
          <h3 class="text-[10px] font-black text-[#697C97] uppercase tracking-[0.4em] mb-10 opacity-40 italic">Active Deployment Logs</h3>
          <div id="deployment-logs" class="space-y-3">
            ${[
              { task: 'Database Schema Optimized', tag: 'SQL' },
              { task: 'Tailwind UI Refactor', tag: 'Frontend' },
              { task: 'Lummia Auth Protocol', tag: 'Security' }
            ].map(log => `
              <div class="log-card flex items-center justify-between p-5 rounded-2xl hover:bg-white/[0.02] transition-all group cursor-pointer active:scale-[0.98]">
                <div class="flex items-center gap-6">
                    <div class="w-1.5 h-1.5 bg-[#46F216] rounded-full shadow-[0_0_8px_#46F216] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                        <p class="text-white font-bold text-sm tracking-tight group-hover:text-[#46F216] transition-colors">${log.task}</p>
                        <span class="text-[9px] font-black text-[#697C97] uppercase tracking-widest opacity-40 italic">${log.tag}</span>
                    </div>
                </div>
                <span class="log-status text-[8px] font-black text-[#46F216] uppercase tracking-widest bg-[#46F216]/10 px-3 py-1 rounded-md">Success</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="lg:col-span-4 bg-[#11161E]/80 p-10 rounded-[2.5rem] shadow-2xl">
            <h3 class="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-10 text-center">Skill Progress</h3>
            <div class="space-y-8">
                ${[
                  { label: 'JavaScript Core', val: 92 },
                  { label: 'UI Engineering', val: 80 },
                  { label: 'Database MGMT', val: 68 }
                ].map((skill, i) => `
                        <div class="group">
                            <div class="flex justify-between text-[10px] font-black uppercase mb-3">
                                <span class="text-[#697C97] group-hover:text-white transition-colors">${skill.label}</span>
                                <span class="text-white">${skill.val}%</span>
                            </div>
                            <div class="h-1.5 w-full bg-[#080A0F] rounded-full overflow-hidden">
                                <div class="skill-bar h-full bg-[#46F216] shadow-[0_0_12px_#46F216] w-0 transition-all duration-1000 ease-out" 
                                     data-width="${skill.val}%" style="opacity: ${1 - (i * 0.2)}"></div>
                            </div>
                        </div>
                `).join('')}
            </div>
        </div>

      </div>
    </div>
  `;
}