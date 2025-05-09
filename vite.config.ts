import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hangman-app/', // <- asta e cheia pentru GitHub Pages
  plugins: [react()],
})
