// src/views/courses.js
export function renderCourses() {
  return `
    <div class="p-8 fade-in h-full flex flex-col">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-white flex items-center gap-2">
          <span class="text-lummia-sage">▶</span> Lummia Academy
        </h2>
        <span class="bg-lummia-sage/20 text-lummia-sage px-3 py-1 rounded-full text-xs font-bold border border-lummia-sage/30">
          +150 EXP per lesson
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        <div class="lg:col-span-2 bg-black/40 border border-white/5 rounded-3xl overflow-hidden flex flex-col shadow-lg">
          <div class="aspect-video bg-black relative flex items-center justify-center border-b border-white/10">
             <div class="text-center">
                <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400 border border-white/10">
                   <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <p class="text-gray-500 font-medium">Video Player Placeholder</p>
             </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">Module 1: The SPA Architecture</h3>
            <p class="text-gray-400 text-sm">Learn how to build a scalable frontend without page reloads.</p>
          </div>
        </div>

        <div class="bg-black/20 border border-white/5 rounded-3xl p-6 shadow-lg h-full overflow-y-auto">
          <h3 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Course Playlist</h3>
          <div class="space-y-3">
            <button class="w-full text-left p-4 rounded-xl bg-lummia-sage/10 border border-lummia-sage/30 transition text-lummia-sage flex items-center justify-between group">
              <span class="font-medium text-sm">1. Setting up Vite & Tailwind</span>
              <span class="text-xs font-bold">▶ Playing</span>
            </button>
            <button class="w-full text-left p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition text-gray-300 flex items-center justify-between group">
              <span class="font-medium text-sm">2. Routing with Vanilla JS</span>
              <span class="text-xs text-gray-500 group-hover:text-white">14:20</span>
    `;
}