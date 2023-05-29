export const items = [
  {
    icon: 'Odometer',
    index: '/dashboard',
    title: '首页',
    permiss: '1'
  },
  {
    icon: 'Calendar',
    index: '1',
    permiss: '2',
    title: '表格相关',
    subs: [
      {
        index: '/table',
        title: '常用表格',
        permiss: '2'
      },
      {
        index: '/import',
        title: '导入Excel',
        permiss: '2'
      },
      {
        index: '/export',
        title: '导出Excel',
        permiss: '2'
      }
    ]
  },
  {
    icon: 'DocumentCopy',
    index: '/tabs',
    title: 'tab选项卡',
    permiss: '3'
  },
  {
    icon: 'Edit',
    title: '表单相关',
    permiss: '4',
    subs: [
      {
        index: '/form',
        title: '基本表单',
        permiss: '5',
      },
      {
        index: '/upload',
        title: '文件上传',
        permiss: '6',
      },
      {
        title: '编辑器',
        permiss: '7',
        subs: [
          {
            index: '/editor',
            title: '富文本编辑器',
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
    permiss: ''
  }
]
