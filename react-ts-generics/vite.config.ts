import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({include: '**/*.{ts,js,tsx}',})],
  base: '',
  build: {
    outDir: '../dist',
  },
  css: {
    preprocessorOptions: {
      scss: {

      }
    }
  }
})
