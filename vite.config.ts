import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(
      {
        svgrOptions: {
          icon: true,
        }
      }
    )
  ],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 서버 url
        secure: true
      }
    }
  }
})
