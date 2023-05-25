<template>
  <div class="table">
    <lt-table 
      :actionItem="actionItem"
      :actionData="state.actionData"
      :headerList="headerList" 
      :dataList="state.dataList"
      :pageInfo="state.pageInfo"
      @changePage="handleChangePage">
    </lt-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { reportReq } from '@/service/index'
import constant from '@u/constant.ts'
const headerList = [
  { label: 'ID', prop: 'id' , width: 60 },
  { label: '用户名', prop: 'name' , width: 100 },
  { label: '封面(查看大图)', prop: 'coverImg', type: 'image', width: 130, align: 'center' },
  { label: '地址信息', prop: 'address' },
  { label: '状态', prop: 'status', type: 'tag' },
  { label: '出生日期', prop: 'date' },
  { label: '操作', type: 'btnGroups',
    btnList: [
      { label: '删除', key: 'del' },
      { label: '编辑', key: 'edit', type: 'primary' },
    ]
  }
]
const actionItem = [
  { type: 'input', key: 'keyword', placeholder: '请输入关键字查询' }
]

const state = reactive({
  pageInfo: constant.pageInfo(),
  dataList: [],
  actionData: {
    keyword: '11'
  }
})

const requestData = async () => {
  const { total, ...res } = state.pageInfo
  const { result: { list, pageInfo } } = await reportReq.requestTable(res)
  state.dataList = list
  
  state.pageInfo.total = pageInfo.total
}

const handleChangePage = (pageInfo) => {
  state.pageInfo = pageInfo
  requestData()
}

onMounted(() => {
  requestData()
})

</script>

<style lang="scss" scoped>
.table {
  height: 100%;
  background-color: #f0f0f0;

  
}
</style>
