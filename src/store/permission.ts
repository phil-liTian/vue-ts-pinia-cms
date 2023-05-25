import { defineStore } from 'pinia'

interface objectList {
  [key: string]: string[] 
}

export const usePermissionStore = defineStore('permission', {
  state: () => {
    const keys = localStorage.getItem('pl_keys')
    return {
      key: keys ? JSON.parse(keys) : <string []>[],
      defaultList: <objectList>{
        admin: ['1', '2', '3', '4'],
        user: ['1']
      }
    }
  },

  actions: {
    handleSet(val: string[]) {
      this.key = val
    }
  }
})