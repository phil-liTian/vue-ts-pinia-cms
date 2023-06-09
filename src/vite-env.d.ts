/// <reference types="vite/client" />

// 定义.vue文件模块
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.ts'
declare module '*.mjs'
declare module 'mockjs'
declare module 'vue-schart'
declare module '@wangeditor/editor-for-vue'
declare module 'wangeditor'
