import path from 'path'
import { defineConfig } from 'vite'
import windiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'

const rootDir = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    windiCSS(),
    vue(),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(rootDir, 'src'),
        },
      ],
    }),
    resolve(),
  ],
})
