import { defineStore } from 'pinia'

interface tagItem {
  name: string,
  path: string,
  title: string
}

export const useTagsStore = defineStore('tags', {
  state: () => {
    return {
      list: <tagItem[]>[]
    }
  },

  actions: {
    addTagsItem(item: tagItem) {
      this.list.push(item)
    },
  }
})