export function renderSkills() {
  return /* html */`
    <div class="fade-in space-y-10 h-full flex flex-col">
      
      <div class="flex justify-between items-end border-b border-white/[0.02] pb-10">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <span class="w-2 h-2 bg-[#46F216] rounded-full shadow-[0_0_12px_#46F216]"></span>
            <p class="text-[10px] font-black text-[#46F216] uppercase tracking-[0.4em]">Evolution Protocol: Active</p>
          </div>
          <h2 class="text-6xl font-black text-white tracking-tighter text-shadow-glow">Skill Tree</h2>
          <p class="text-[#697C97] font-bold mt-2 uppercase tracking-widest text-xs opacity-50 italic">Core Competencies / Specialized Tracks</p>
        </div>
        
        <div class="bg-[#11161E] px-8 py-5 rounded-[2rem] border border-white/[0.03] text-center shadow-2xl">
            <p class="text-[9px] font-black text-[#697C97] uppercase mb-1">Total Mastery</p>
            <p class="text-3xl font-black text-white italic tracking-tighter">Level <span class="text-[#46F216]">42</span></p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
        
        ${[
          { name: 'Frontend Engine', tech: ['Tailwind CSS', 'Vanilla JS', 'SPA Logic'], progress: 95, icon: 'code' },
          { name: 'Backend Core', tech: ['Node.js', 'Express', 'SQL Design'], progress: 68, icon: 'server' },
          { name: 'Database MGMT', tech: ['MongoDB', 'PostgreSQL', 'Indexing'], progress: 82, icon: 'database' },
          { name: 'DevOps Ops', tech: ['Git / GitHub', 'Vite Deploy', 'CI/CD'], progress: 74, icon: 'terminal' },
          { name: 'UI / UX Design', tech: ['Carbon Style', 'Neon Gradients', 'Figma'], progress: 89, icon: 'pen-nib' },
          { name: 'Security Arch', tech: ['Auth Protocols', 'JWT', 'Encryption'], progress: 45, icon: 'shield-halved' }
        ].map(skill => `
          <div class="group bg-[#11161E]/40 p-8 rounded-[3rem] border border-white/[0.02] transition-all duration-500 hover:border-[#46F216]/30 relative overflow-hidden flex flex-col justify-between">
            
            <div class="absolute -right-8 -top-8 w-32 h-32 bg-[#46F216]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div>
                <div class="flex justify-between items-start mb-6">
                    <div class="w-12 h-12 bg-[#080A0F] rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-[#46F216]/40 transition-all duration-500">
                        <i class="fa-solid fa-${skill.icon} text-xl text-[#697C97] group-hover:text-[#46F216] transition-colors"></i>
                    </div>
                    <span class="text-[10px] font-black text-[#46F216] opacity-30 group-hover:opacity-100 transition-opacity tracking-widest italic">${skill.progress}% Mastery</span>
                </div>

                <h3 class="text-xl font-black text-white tracking-tight mb-4 group-hover:text-[#46F216] transition-colors">${skill.name}</h3>
                
                <div class="flex flex-wrap gap-2 mb-8">
                    ${skill.tech.map(t => `<span class="text-[9px] font-black text-[#697C97] bg-black/40 px-3 py-1 rounded-lg border border-white/5 uppercase tracking-wider">${t}</span>`).join('')}
                </div>
            </div>

            <div class="space-y-3">
                <div class="h-1.5 w-full bg-[#080A0F] rounded-full overflow-hidden border border-white/[0.03]">
                    <div class="h-full bg-[#46F216] shadow-[0_0_15px_#46F216] transition-all duration-1000 group-hover:scale-x-[1.02]" 
                         style="width: ${skill.progress}%"></div>
                </div>
                <div class="flex justify-between items-center px-1">
                    <span class="text-[8px] font-black text-[#697C97] uppercase tracking-[0.3em]">Status: ${skill.progress > 80 ? 'Elite' : 'Developing'}</span>
                    <div class="w-1.5 h-1.5 bg-[#46F216] rounded-full ${skill.progress > 80 ? 'animate-pulse shadow-[0_0_8px_#46F216]' : 'opacity-20'}"></div>
                </div>
            </div>
          </div>
        `).join('')}

      </div>
    </div>
  `;
}