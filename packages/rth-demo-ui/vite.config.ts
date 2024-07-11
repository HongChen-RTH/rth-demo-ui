import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'
// import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
// import viteDts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    // tsxResolveTypes(),
    vue(),
    VueJsx(),
    // viteDts()
    // viteDts({
    //   insertTypesEntry: true,
    //   staticImport: true,
    //   copyDtsFiles: true
    // })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'rth-demo-ui',
      fileName: format => `rth-demo-ui.${format}.js`
    },
    outDir: path.resolve(__dirname, '../../lib'),
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
