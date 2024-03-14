import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  publicDir: false,
  build: {
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        'react-dom',
        'react'
      ]
    },
    lib: {
      formats: ['umd'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index'
    }
  },
  plugins: [dts({
    declarationOnly: true
  })]
});
