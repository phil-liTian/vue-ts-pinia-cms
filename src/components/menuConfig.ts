export const items = [
  {
    icon: 'Odometer',
    index: '/dashboard',
    title: '首页',
    meta: {
      permiss: '1',
    }
  },
  {
    icon: 'Calendar',
    index: '1',
    title: '表格相关',
    meta: {
      permiss: '3'
    },
    subs: [
      {
        index: '/table',
        title: '常用表格',
        permiss: '3'
      },
      {
        index: '/import',
        title: '导入Excel',
        permiss: '4'
      },
      {
        index: '/export',
        title: '导出Excel',
        permiss: '5'
      }
    ]
  },
  {
    icon: 'DocumentCopy',
    index: '/tabs',
    title: 'tab选项卡',
    meta: {
      permiss: '2'
    }
  },
  {
    icon: 'Edit',
    index: '2',
    title: '表单相关',
    meta: {
      permiss: '6'
    },
    subs: [
      {
        index: '/form',
        title: '基本表单',
        permiss: '6',
      },
      {
        index: '/upload',
        title: '文件上传',
        permiss: '7',
      },
      {
        title: '编辑器',
        index: '8',
        subs: [
          {
            index: '/editor',
            title: '富文本编辑器',
            permiss: '8',
          },
          {
            index: '/markdown',
            title: 'markdown',
            permiss: '8',
          },
        ]
      },
    ]
  },
  {
    icon: 'Warning',
    title: '权限管理',
    index: '/management',
    meta: {
      permiss: '9'
    }
  }
]
