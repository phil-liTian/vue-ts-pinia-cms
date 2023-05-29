import { defineStore } from 'pinia'

interface objectList {
  [key: string]: string[] 
}

export const usePermissionStore = defineStore('permission', {
  state: () => {
    const keys = localStorage.getItem('cms_keys')
    return {
      key: keys ? JSON.parse(keys) : <string []>[],
      defaultList: <objectList>{
        admin: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
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