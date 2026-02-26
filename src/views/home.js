export function renderHome() {
  return /* html */`
    <div class="space-y-10">
      
      <div class="flex items-end justify-between border-b border-white/[0.02] pb-10">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <span class="w-2 h-2 bg-[#46F216] rounded-full shadow-[0_0_12px_#46F216]"></span>
            <p class="text-[10px] font-black text-[#46F216] uppercase tracking-[0.3em]">System Status: Optimal</p>
          </div>
          <h2 class="text-6xl font-black text-white tracking-tighter">Control Center</h2>
          <p class="text-[#697C97] font-bold mt-2 uppercase tracking-widest text-xs opacity-50 italic">Terminal Access / MATIASAC110508</p>
        </div>
        
        <div class="flex gap-4">
            <div class="bg-[#11161E] px-6 py-4 rounded-2xl text-center shadow-lg">
                <p class="text-[9px] font-black text-[#697C97] uppercase mb-1">Current Streak</p>
                <p class="text-2xl font-black text-white italic tracking-tighter">14 <span class="text-[#46F216] text-sm opacity-50 font-bold">Days</span></p>
            </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        ${[
          { label: 'Mastered Tech', val: '24', unit: 'Modules', grow: '70%' },
          { label: 'Deep Focus Time', val: '128', unit: 'Hours', perf: '+12%' },
          { label: 'Global Contribution', val: '8.4', unit: 'k', rank: 'Top 5%' }
        ].map(item => `
          <div class="group bg-[#11161E]/50 p-8 rounded-[2.5rem] transition-all hover:bg-[#11161E]/80 relative overflow-hidden cursor-default">
            <div class="absolute -right-6 -top-6 w-24 h-24 bg-[#46F216]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p class="text-[10px] text-[#697C97] font-black uppercase tracking-[0.2em] mb-4">${item.label}</p>
            <div class="flex items-baseline gap-2">
              <p class="text-6xl font-black text-white tracking-tighter group-hover:text-[#46F216] transition-colors">
                ${item.val}${item.unit === 'k' ? `<span class="text-[#46F216] text-2xl font-light italic ml-1">k</span>` : ''}
              </p>
              ${item.unit !== 'k' ? `<span class="text-[#697C97] font-bold text-sm uppercase">${item.unit}</span>` : ''}
            </div>
            
            <div class="mt-6">
              ${item.grow ? `
                <div class="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div class="h-full bg-[#46F216] shadow-[0_0_10px_#46F216]" style="width: ${item.grow}"></div>
                </div>` : ''}
              ${item.perf ? `
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-arrow-up text-[10px] text-[#46F216]"></i>
                  <p class="text-[10px] font-bold text-[#46F216] uppercase tracking-widest opacity-80">${item.perf} Performance</p>
                </div>` : ''}
              ${item.rank ? `
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-[#46F216] rounded-full shadow-[0_0_8px_#46F216]"></div>
                  <p class="text-[10px] text-[#697C97] font-bold uppercase tracking-widest italic opacity-50">Ranked ${item.rank} Global</p>
                </div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-8 bg-[#11161E]/30 rounded-[2.5rem] p-10 backdrop-blur-sm">
          <h3 class="text-[10px] font-black text-[#697C97] uppercase tracking-[0.4em] mb-10 opacity-40 italic">Active Deployment Logs</h3>
          <div class="space-y-3">
            ${[
              { task: 'Database Schema Optimized', tag: 'SQL' },
              { task: 'Tailwind UI Refactor', tag: 'Frontend' },
              { task: 'Lummia Auth Protocol', tag: 'Security' }
            ].map(log => `
              <div class="flex items-center justify-between p-5 rounded-2xl hover:bg-white/[0.02] transition-all group cursor-default">
                <div class="flex items-center gap-6">
                    <div class="w-1.5 h-1.5 bg-[#46F216] rounded-full shadow-[0_0_8px_#46F216] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                        <p class="text-white font-bold text-sm tracking-tight group-hover:text-[#46F216] transition-colors">${log.task}</p>
                        <span class="text-[9px] font-black text-[#697C97] uppercase tracking-widest opacity-40 italic">${log.tag}</span>
                    </div>
                </div>
                <span class="text-[8px] font-black text-[#46F216] uppercase tracking-widest bg-[#46F216]/10 px-3 py-1 rounded-md">Success</span>
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
                                <div class="h-full bg-[#46F216] shadow-[0_0_12px_#46F216]" 
                                     style="width: ${skill.val}%; opacity: ${1 - (i * 0.2)}"></div>
                            </div>
                        </div>
                `).join('')}
            </div>
            <div class="mt-12 pt-8 border-t border-white/[0.03] text-center">
                <p class="text-[9px] font-bold text-[#697C97] uppercase tracking-widest opacity-40 italic">All systems operational</p>
            </div>
        </div>

      </div>
    </div>
  `;
}