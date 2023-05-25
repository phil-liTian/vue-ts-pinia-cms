import { defineStore } from 'pinia'

export interface tagItem {
  name: string
  path: string
  title: string
}

export const useTagsStore = defineStore('tags', {
  state: () => {
    return {
      list: <tagItem[]>[{ name: '首页', path: '/dashboard', title: '首页' }]
    }
  },

  getters: {
    show: state => {
      return state.list.length > 0
    },
    nameList: state => {
      return state.list.map(item => item.name)
    }
  },

  actions: {
    // 添加tag
    addTagsItem(item: tagItem) {
      this.list.push(item)
    },

    // 删除tag
    removeTagItem(index: number) {
      this.list.splice(index, 1)
    },

    // 清空tag
    clearTag() {
      this.list = []
    },

    // 关闭其他
    closeOtherTags(data: tagItem[]) {
      this.list = data
    },

    // 关闭当前tag
    closeCurrentTag(data: any) {
      const { list } = this
      const len = list.length
      for (let i = 0; i < len; i++) {
        const item = list[i]
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            // 当前tag后面还有tag
            data.$router.push(list[i + 1].path)
          } else if (i > 0) {
            // 后面没有 前面有
            data.$router.push(list[i - 1].path)
          } else {
            data.$router.push('/')
          }
          this.list.splice(i, 1)
          break
        }
      }
    }
  }
})
