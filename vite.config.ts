import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      outDir: ['dist'],
      compilerOptions: {
        declarationMap: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      fileName(format, entryName) {
        return `${entryName}.${format}.js`
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      treeshake: true,
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
