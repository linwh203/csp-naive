import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  html: {
    cspNonce: '12345',
  },
  plugins: [vue()],
})
