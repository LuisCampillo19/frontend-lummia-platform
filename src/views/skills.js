export function renderSkills() {
    return /* html */`
    <div class="animate-system-boot h-full flex flex-col relative z-0 p-4 lg:p-6 lg:px-8 max-w-7xl mx-auto w-full">

        <div class="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 mb-8 relative overflow-hidden shadow-2xl flex-shrink-0">
            <div class="absolute -right-20 -top-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[80px]"></div>

            <div class="flex items-center gap-6 relative z-10">
                <div class="relative">
                    <div class="w-20 h-20 rounded-2xl bg-black/60 border-2 border-cyan-500/30 flex items-center justify-center overflow-hidden shadow-inner">
                        <img src="../../assets/completedCapi.png" alt="Path Icon" class="w-full h-full object-cover">
                    </div>
                    <div class="absolute -bottom-2 -right-2 bg-black border border-cyan-500 text-white text-[9px] font-black px-2 py-1 rounded-lg shadow-lg">LVL 14</div>
                </div>
                <div class="flex-1">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-2">
                        <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                        <span class="text-cyan-400 text-[9px] font-bold uppercase tracking-widest">Development Path</span>
                    </div>
                    <h1 class="text-3xl font-black text-white tracking-wide uppercase mb-3">Core Skill Tree</h1>
                    <div class="flex items-center justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                        <span class="flex items-center gap-2"><i class="fa-solid fa-code-branch text-cyan-500"></i> 4 Main Modules</span>
                        <span>Next Skill Point: 15,000 XP</span>
                    </div>
                    <div class="h-2 w-full bg-black/80 rounded-full border border-white/10 overflow-hidden shadow-inner">
                        <div class="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full w-[65%] shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
                    </div>
                </div>
                <div class="hidden md:flex w-12 h-12 rounded-xl bg-white/5 items-center justify-center border border-white/10 self-start">
                    <i class="fa-solid fa-robot text-zinc-400"></i>
                </div>
            </div>
        </div>

        <div class="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-0 pb-10">

            <div class="lg:col-span-8 flex flex-col min-h-0">
                <div class="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 flex-1 flex flex-col shadow-2xl overflow-hidden min-h-0">
                    <div class="flex items-center justify-between mb-8 shrink-0">
                        <h3 class="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-3">
                            <i class="fa-solid fa-sitemap text-cyan-500"></i> Module Progression
                        </h3>
                        <span class="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Hover module to see skills</span>
                    </div>

                    <div class="flex-1 overflow-y-auto custom-scrollbar pr-4 relative space-y-6">
                        <div class="absolute left-[2.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/50 via-fuchsia-500/50 via-amber-500/50 to-emerald-500/50 -z-10"></div>

                        <div class="group relative">
                            <div class="bg-black/60 border border-white/5 rounded-2xl p-5 hover:border-blue-500/30 transition-all cursor-pointer flex items-center gap-6 relative z-10 shadow-lg">
                                <div class="absolute -top-3 right-4 px-3 py-1 bg-blue-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg z-20">LVL 4</div>
                                <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                                    <i class="fa-brands fa-python text-xl text-blue-500"></i>
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-base font-bold text-white uppercase tracking-tight">Python Foundation</h4>
                                    <p class="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Backend & Data</p>
                                </div>
                                <i class="fa-solid fa-chevron-right text-zinc-600 group-hover:rotate-90 group-hover:text-blue-500 transition-all pointer-events-none"></i>
                            </div>
                            <div class="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out relative z-0">
                                <div class="p-4 ml-12 mt-2 space-y-2.5 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                        <span>Data Types & Logic</span>
                                        <span class="text-blue-400">100% Mastered</span>
                                    </div>
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                        <span>Object-Oriented Programming</span>
                                        <span class="text-zinc-600">Locked</span>
                                    </div>
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                        <span>Flask API basics</span>
                                        <span class="text-zinc-600">Locked</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group relative">
                            <div class="bg-black/60 border border-white/5 rounded-2xl p-5 hover:border-fuchsia-500/30 transition-all cursor-pointer flex items-center gap-6 relative z-10 shadow-lg">
                                <div class="absolute -top-3 right-4 px-3 py-1 bg-fuchsia-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg z-20">Mastered</div>
                                <div class="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                                    <i class="fa-brands fa-html5 text-xl text-fuchsia-500"></i>
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-base font-bold text-white uppercase tracking-tight">Frontend Structure</h4>
                                    <p class="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Layout & Styling</p>
                                </div>
                                <i class="fa-solid fa-chevron-right text-zinc-600 group-hover:rotate-90 group-hover:text-fuchsia-500 transition-all pointer-events-none"></i>
                            </div>
                            <div class="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out relative z-0">
                                <div class="p-4 ml-12 mt-2 space-y-2.5 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-fuchsia-400">
                                        <span>Semantic HTML & Accessibility</span>
                                        <span>100% Mastered</span>
                                    </div>
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-fuchsia-400">
                                        <span>Flexbox & Grid Layouts</span>
                                        <span>100% Mastered</span>
                                    </div>
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-fuchsia-400">
                                        <span>Tailwind Architecture</span>
                                        <span>100% Mastered</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group relative">
                            <div class="bg-black/60 border border-white/5 rounded-2xl p-5 hover:border-amber-500/30 transition-all cursor-pointer flex items-center gap-6 relative z-10 shadow-lg">
                                <div class="absolute -top-3 right-4 px-3 py-1 bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg z-20">Training</div>
                                <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                                    <i class="fa-brands fa-js text-xl text-amber-500"></i>
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-base font-bold text-white uppercase tracking-tight">The Logic Engine</h4>
                                    <p class="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Modern JS ES6+</p>
                                </div>
                                <i class="fa-solid fa-chevron-right text-zinc-600 group-hover:rotate-90 group-hover:text-amber-500 transition-all pointer-events-none"></i>
                            </div>
                            <div class="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out relative z-0">
                                <div class="p-4 ml-12 mt-2 space-y-2.5 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-amber-500">
                                        <span>Modern ES6+ Syntax</span>
                                        <span>80% Mastery</span>
                                    </div>
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-amber-500">
                                        <span>DOM Manipulation</span>
                                        <span>60% Mastery</span>
                                    </div>
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                        <span>Async / Await Basics</span>
                                        <span>40% Mastery</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group relative opacity-70 hover:opacity-100 transition-opacity">
                            <div class="bg-black/60 border border-white/5 rounded-2xl p-5 hover:border-emerald-500/30 transition-all cursor-pointer flex items-center gap-6 relative z-10 shadow-lg">
                                <div class="absolute -top-3 right-4 px-3 py-1 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg z-20">Locked</div>
                                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                                    <i class="fa-solid fa-database text-lg text-emerald-500"></i>
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-base font-bold text-white uppercase tracking-tight">Database Architecture</h4>
                                    <p class="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">SQL vs NoSQL</p>
                                </div>
                                <i class="fa-solid fa-chevron-right text-zinc-600 group-hover:rotate-90 group-hover:text-emerald-500 transition-all pointer-events-none"></i>
                            </div>
                            <div class="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out relative z-0">
                                <div class="p-4 ml-12 mt-2 space-y-2.5 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                                        <span>Relational DB (SQL Basics)</span>
                                        <span>100% Mastered</span>
                                    </div>
                                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                                        <span>Document DB (NoSQL basics)</span>
                                        <span>Locked</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="lg:col-span-4 flex flex-col">
                <div class="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 flex-1 flex flex-col shadow-2xl overflow-hidden">
                    <h3 class="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-3 mb-8 shrink-0">
                        <i class="fa-solid fa-medal text-amber-500"></i> Acquired Badges
                    </h3>

                    <div class="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
                        <div class="bg-black/60 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-amber-500/5 transition-colors group cursor-pointer shadow-lg">
                            <div class="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shadow-inner">
                                <i class="fa-solid fa-fire text-amber-500 text-lg"></i>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-amber-500 mb-0.5 uppercase tracking-tight">7-Day Streak</h4>
                                <p class="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">Legendary Status</p>
                            </div>
                        </div>
                        
                        <div class="bg-black/60 border border-fuchsia-500/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-fuchsia-500/5 transition-colors group cursor-pointer shadow-lg">
                            <div class="w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shadow-inner">
                                <i class="fa-solid fa-bug text-fuchsia-500 text-lg"></i>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-fuchsia-500 mb-0.5 uppercase tracking-tight">Bug Squasher</h4>
                                <p class="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">Epic Status</p>
                            </div>
                        </div>

                        <div class="bg-black/60 border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-emerald-500/5 transition-colors group cursor-pointer shadow-lg">
                            <div class="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shadow-inner">
                                <i class="fa-solid fa-stopwatch text-emerald-500 text-lg"></i>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-emerald-500 mb-0.5 uppercase tracking-tight">Pomodoro Lord</h4>
                                <p class="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">Epic Status</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `;
}