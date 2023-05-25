import { defineStore } from 'pinia'

export const useSideBarStore = defineStore('sidebar', {
  state: () => {
    return {
      collapse: false
    }
  },

  actions: {
    handleChangeCollapse () {
      this.collapse = !this.collapse
    }
  }
})
