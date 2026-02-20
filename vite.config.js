import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Permite conexiones en redes locales/Linux
    port: 5173,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    }
  }
});