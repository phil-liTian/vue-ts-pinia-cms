import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@v/403.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.name} | vue-manage-system`
  next()
})

export default router