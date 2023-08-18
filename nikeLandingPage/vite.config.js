import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  build: {
    rollupOptions: {
      output: {
        format: 'es', // or 'cjs' for CommonJS
      },
    },
  },
}