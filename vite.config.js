import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dxev/config/
export default defineConfig({
  plugins: [react()],
  sourcemap: false
})