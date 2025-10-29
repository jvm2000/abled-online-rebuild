import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: command === 'build' ? '/v2/' : '/', // ✅ only use /v2/ in production build
  server: {
    port: 3000,
    open: true,
  },
}))