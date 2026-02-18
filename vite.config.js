import { defineConfig } from 'vite'
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/static/",
  build: {
    emptyOutDir:true,
    manifest: true,
    outDir:'./dist',
    rollupOptions: {
      input: './frontend/index.js'
    }
  },
  server: {
    host: '0.0.0.0',     // Для Django dev
    port: 5173
  }
})
