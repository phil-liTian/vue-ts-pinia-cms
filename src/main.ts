import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import UK from 'element-plus/dist/locale/uk.js'

const app = createApp(App)
const pinia = createPinia()
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

app.use(ElementPlus, {
  // locale: zhCn
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(router)

app.mount('#app')
