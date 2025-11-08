import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Vercel automatically serves from this directory
  },
  server: {
    port: 5173, // default Vite dev server port
    open: true
  }
})
