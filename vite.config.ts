import react from '@vitejs/plugin-react';

// import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), tsconfigPaths(), reactScopedCssPlugin(), viteCompression()],
  plugins: [react(), tsconfigPaths(), viteCompression()],
  base: '',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/variables";`,
      },
    },
  },
});
