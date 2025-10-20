import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      cacheDir: process.env.VITE_CACHE_DIR || undefined,
      build: { sourcemap: false },
      optimizeDeps: { esbuildOptions: { sourcemap: false } },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '@models': path.resolve(__dirname, 'src/models'),
          '@services': path.resolve(__dirname, 'src/services'),
          '@views': path.resolve(__dirname, 'src/views'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@constants': path.resolve(__dirname, 'src/constants'),
          '@lib': path.resolve(__dirname, 'src/lib'),
          '@assets': path.resolve(__dirname, 'src/assets'),
        }
      }
    };
});
