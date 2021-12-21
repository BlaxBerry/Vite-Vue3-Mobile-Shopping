import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  base: '',
  server:{
    proxy: {
      '/api': {
          target: 'http://kumanxuan1.f3322.net:8001/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
      }
  }
  }
})
