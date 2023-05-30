<template>
  <div class="tabs">
    <lt-tabs 
      v-model="state.activeName" 
      :dataList="tabList" />
      
    <lt-table 
      :headerList="headerList" 
      :dataList="dataList"
      @cellClick="handleClick">
    </lt-table>
  </div>
</template>

<script lang="ts" setup>
  import { computed, reactive } from 'vue'
  
  type ITabs = {
    activeName: string,
    dataObj: any
  }
  

  const state = reactive<ITabs>({
    activeName: 'first',
    dataObj: {
      first: [
        {note: '【系统通知】系统首次升级', createDate: '2023-05-30 12:00:00'}
      ],
      second: [
        {note: '【系统通知】table、tabs组件封装完成', createDate: '2023-05-29 12:00:00'},
        {note: '【系统通知】404、403页面功能完成', createDate: '2023-05-28 12:00:00'}
      ],
      third: [
        {note: '【系统通知】menu功能完成✅', createDate: '2023-05-27 12:00:00'}
      ]
    }
  })

  const tabList = computed(() => {
    const { first, second, third } = state.dataObj
    return [
      { label: `未读信息(${first.length})`, name: 'first' },
      { label: `已读信息(${second.length})`, name: 'second' },
      { label: `回收站(${third.length})`, name: 'third' }
    ]
  })

  const dataList = computed(() => {
    return state.dataObj[state.activeName]
  })

  const headerList = computed(() => {
    const { activeName } = state
    return [
      { label: '系统通知', prop: 'note' },
      { label: '时间', prop: 'createDate' },
      { 
        label: '操作', 
        type: 'btnGroups',
        btnList: [
          activeName === 'first' && { label: '标为已读', key: 'tagReaded' },
          activeName === 'second' && { label: '删除', key: 'delete' },
          activeName === 'third' && { label: '复原', type: 'primary', key: 'recovery' },
        ].filter(Boolean)
      }
    ]
  })

  const handleClick = ({ row, item }) => {
    const { key } = item
    const { activeName } = state
    // mock
    switch(key) {
      case 'tagReaded': {
        state.dataObj.second.push(row)
        state.dataObj[activeName] = state.dataObj[activeName].filter((item: any) => item.note !== row.note)
        break
      }
      case 'delete': {
        state.dataObj[activeName] = state.dataObj[activeName].filter((item: any) => item.note !== row.note)
        state.dataObj.third.push(row)
        break
      }
      case 'recovery' : {
        state.dataObj.second.push(row)
        break
      }
    }
  }
  
</script>

<style lang="scss" scoped name="tabs">
.tabs {
  background-color: #fff;
  padding: 20px;
}
</style>
