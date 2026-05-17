import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inlineCss } from './vite-plugin-inline-css.js'

export default defineConfig({
  plugins: [react(), inlineCss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
        },
      },
    },
  },
})
