import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import type { UserConfig } from 'vite'
import vikeLite from 'vike-lite/vite'
import vikeLiteVue from 'vike-lite-vue/vite'

export default {
  root: 'src',
  cacheDir: '../.vite',
  plugins: [
    tailwindcss(),
    vikeLite({
      serverEntry: 'server/index.ts'
    }),
    vikeLiteVue()
  ],
  server: {
    port: 3000
  },
  build: {
    outDir: '../dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src')
    }
  }
} satisfies UserConfig
