import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 设置别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: '@s',
        replacement: resolve(__dirname, 'src/store')
      },
      {
        find: '@v',
        replacement: resolve(__dirname, 'src/views')
      },
      {
        find: '@c',
        replacement: resolve(__dirname, 'src/components')
      }
    ]
  }
})
