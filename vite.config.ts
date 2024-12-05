import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 5001,
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
  plugins: [
    vue(),
    federation({
      name: 'vue-mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue'
      },
      shared: ['vue']
    })
  ],
})
