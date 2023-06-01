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
      permiss: '12'
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
      permiss: '6'
    }
  },
  {
    icon: 'Edit',
    index: '2',
    title: '表单相关',
    meta: {
      permiss: '13'
    },
    subs: [
      {
        index: '/form',
        title: '基本表单',
        permiss: '8',
      },
      {
        index: '/upload',
        title: '文件上传',
        permiss: '9',
      },
      {
        title: '编辑器',
        index: '3',
        subs: [
          {
            index: '/editor',
            title: '富文本编辑器',
            permiss: '10',
          },
          {
            index: '/markdown',
            title: 'markdown',
            permiss: '10',
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
      permiss: '11'
    }
  }
]
