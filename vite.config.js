import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Reto-Patrones/', // IMPORTANTE: nombre del repo
  plugins: [react()],
})
