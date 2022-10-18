import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'platformatic-ui.css',
        chunkFileNames: 'platformatic-ui.js',
        manualChunks: undefined
      }
    }
  }
})
