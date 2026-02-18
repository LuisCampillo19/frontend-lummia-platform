// src/components/layout.js
export function getAppLayout() {
  return /* html */`
    <div class="grid grid-cols-[260px_1fr_320px] h-screen w-full">
      <nav id="nav-container" class="border-r border-white/5 flex flex-col bg-black/10"></nav>

      <main id="main-container" class="flex flex-col overflow-y-auto border-r border-white/5"></main>

      <aside id="gamify-container" class="overflow-y-auto bg-black/20 flex flex-col"></aside>
    </div>
  `;
}