<template>
  <div class="table">
    <lt-table 
      :headerList="headerList" 
      :dataList="state.dataList">
    </lt-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { reportReq } from '@/service/index'
const headerList = [
  { label: '封面', prop: 'coverImg', type: 'image' },
  { label: '描述信息', prop: 'desc' },
  { label: '操作', type: 'btnGroups',
    btnList: [
      { label: '删除', key: 'del' },
      { label: '编辑', key: 'edit', type: 'primary' },
    ]
  }
]

const state = reactive({
  dataList: []
})

const requestData = async () => {
  const res = await reportReq.requestTable()
  console.log('res', res);
  state.dataList = res.result
}

onMounted(() => {
  requestData()
})

</script>

<style lang="scss" scoped>
.table {
  height: 100%;
  background-color: #ccc;
}
</style>
