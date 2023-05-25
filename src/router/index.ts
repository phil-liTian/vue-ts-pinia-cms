import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      name: 'Home'
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@v/dashboard.vue'),
        meta: {
          name: '面板'
        }
      },
      {
        path: '/tabs',
        name: 'Tabs',
        component: () => import('@v/tabs.vue'),
        meta: {
          name: '面板'
        }
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import('@v/table.vue'),
        meta: {
          name: '表格'
        }
      },
      {
        path: '/import',
        name: 'Import',
        component: () => import('@v/import.vue'),
        meta: {
          name: '导入'
        }
      },
      {
        path: '/export',
        name: 'Export',
        component: () => import('@v/export.vue'),
        meta: {
          name: '导出'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@v/login.vue'),
    meta: {
      name: '登陆'
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@v/403.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   document.title = `phil-${to.meta.name} | vue-manage-system`
//   console.log('to', to)
//   if (to.path !== '/login') {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
