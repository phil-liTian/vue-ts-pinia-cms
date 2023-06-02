import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import { usePermissionStore } from '@s/permission.ts'

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
          name: '首页',
          permiss: '1'
        }
      },
      {
        path: '/tabs',
        name: 'Tabs',
        component: () => import('@v/tabs.vue'),
        meta: {
          name: 'tab标签',
          permiss: '2'
        }
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import('@v/table.vue'),
        meta: {
          name: '表格',
          permiss: '3'
        }
      },
      {
        path: '/import',
        name: 'Import',
        component: () => import('@v/import.vue'),
        meta: {
          name: '导入',
          permiss: '4'
        }
      },
      {
        path: '/export',
        name: 'Export',
        component: () => import('@v/export.vue'),
        meta: {
          name: '导出',
          permiss: '5'
        }
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('@v/form.vue'),
        meta: {
          name: '基础表单',
          permiss: '6'
        }
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('@v/upload.vue'),
        meta: {
          name: '上传',
          permiss: '7'
        }
      },
      {
        path: '/editor',
        name: 'Editor',
        component: () => import('@v/editor.vue'),
        meta: {
          name: '编辑器',
          permiss: '8'
        }
      },
      {
        path: '/markdown',
        name: 'MarkDown',
        component: () => import('@v/markdown.vue'),
        meta: {
          name: 'markdown',
          permiss: '8'
        }
      },
      {
        path: '/management',
        name: 'Management',
        component: () => import('@v/management.vue'),
        meta: {
          name: '权限管理',
          permiss: '9'
        }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@v/user.vue'),
        meta: {
          name: '用户中心',
          permiss: '9'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@v/login.vue'),
    meta: {
      name: '登陆',
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@v/403.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@v/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `phil-${to.meta.name} | vue3-ts-pinia`
  const permiss = usePermissionStore()
  const role = localStorage.getItem('cms_username')
  // 没有登录的话先跳转登录
  if( !role && to.path !== '/login' ) {
    next('/login')
  } else if(to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
    next('/403')
  } else {
    next()
  }
})

export default router
