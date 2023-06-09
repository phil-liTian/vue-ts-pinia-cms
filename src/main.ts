import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 可用于更改element-plus中的样式常量信息
import '@/assets/style/theme.css'
import ltBase from '@c/LtBase/index.ts'
import ltDirectives from '@u/directives/index.ts'
import './mock/index';
import formCheck from './plugins/formCheck'
import piniaPersist from 'pinia-plugin-persist'
// 使用pinia-plugin-persist可实现pinia数据持久化
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

app.use(ElementPlus, {
  // locale: zhCn
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ltBase, {
  name: 'phil'
})
app.use(ltDirectives)
app.use(formCheck)
app.use(pinia)
import { usePermissionStore } from '@s/permission.ts'
const permissions = usePermissionStore()
const permiss = {
  mounted(el: HTMLElement, binding: any) {
    if( !permissions.key.includes(String(binding.value)) ) {
      el['hidden'] = true
    }
  }
}
app.directive('permiss', permiss)
app.use(router)
app.mount('#app')
