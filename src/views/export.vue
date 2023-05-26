<template>
  <div class="export">
    <!-- <lt-actionBar :actionBtns="state.actionBtns" @click="handleActClick"></lt-actionBar> -->
    <lt-table
     :actionBtns="state.actionBtns"
     :headerList="headerList"
     :dataList="state.dataList"
     @barClick="handleActClick">
    </lt-table>
  </div>
</template>

<script lang="ts" setup>
import { reportReq } from '@/service'
import { onMounted, reactive } from 'vue';
import * as XLSX from 'xlsx'
const headerList = [
  { label: 'ID', prop: 'id' , width: 60 },
  { label: '姓名', prop: 'name' , width: 100 },
  { label: '月薪', prop: 'amount' , width: 150 },
  { label: '性别', prop: 'sex' },
  { label: '描述', prop: 'desc' },
]

const state = reactive({
  dataList: [],
  actionBtns: [
    { label: '导出', key: 'export', type: 'primary', size: 'small', icon: 'Promotion' }
  ]
})

const fetchData = async () => {
  const { code, result } = await reportReq.requestExportTable()
  if(code === 200) {
    state.dataList = result.list
  }
}

const handleActClick = (e) => {
  if( e.key === 'export' ) {
    exportXlsx()
  }
}

let list = [['ID', '姓名', '月薪', '性别', '描述']]
const exportXlsx = () => {
  state.dataList.map((item: any) => {
    let arr: any[] = []
    arr.push(...[item.id, item.name, item.amount, item.sex, item.desc])
    list.push(arr)
  })
  
  const ws = XLSX.utils.aoa_to_sheet(list)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, 'table.xlsx')
}

onMounted(() => {
  fetchData()
})

</script>

<style lang="scss" scoped>
.export {
  height: 100%;
  background-color: #fff;

  .lt-actionBar {
    box-sizing: border-box;
    padding: 30px;
  }
}
</style>
