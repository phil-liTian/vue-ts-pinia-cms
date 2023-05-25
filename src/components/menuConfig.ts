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
  }
]
