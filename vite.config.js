/// <reference types="vitest" />
import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import netlifyPlugin from '@netlify/hydrogen-platform/plugin';

export default defineConfig({
  plugins: [hydrogen(), netlifyPlugin()],
  resolve: {
    alias: [{find: /^~\/(.*)/, replacement: '/src/$1'}],
  },
  optimizeDeps: {
    include: ['@headlessui/react', 'clsx', 'react-use', 'typographic-base'],
  },
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
  },
});
