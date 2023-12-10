import path from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src/app_modules/tmui/src/tmui'),
      '#tmui': path.resolve(__dirname, './src/app_modules/tmui/src/tmui'),
    },
  },
})
