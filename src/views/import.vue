<template>
  <div class="importView">
    <lt-table 
      :headerList="headerList"
      :dataList="dataList">

      <template #topLeft>
        <el-upload
          action="#"
          :limit="1"
          accept=".xlsx, .xls"
          :show-file-list="false"
          :before-upload="handleBeforeUpload"
          :http-request="handleUpload">
          <lt-button size="small" icon="UploadFilled" type="primary">上传数据</lt-button>
        </el-upload>
      </template>
    </lt-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import * as XLSX from 'xlsx'
const headerList = [
  { label: 'ID', prop: 'id' , width: 60 },
  { label: '姓名', prop: 'name' , width: 100 },
  { label: '月薪', prop: 'amount' , width: 150 },
  { label: '性别', prop: 'sex', type: 'tag' },
  { label: '描述', prop: 'desc' },
]

interface ITableItem {
  id: string,
  name: string,
  amount: number,
  sex: string,
  desc: string
}

const importList = ref<any>([])
const dataList = ref<ITableItem[]>([])

const handleBeforeUpload = async (rawFile: any) => {
  console.log('rawFile', rawFile);
  importList.value = await analysisExcel(rawFile)
  return true
}

const analysisExcel = (file: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = function(e: any) {
      const data = e.currentTarget.result
      let datajson = XLSX.read(data, {
          type: 'binary',
      });
      console.log('datajson', datajson);
      const sheetName = datajson.SheetNames[0]
      const result = XLSX.utils.sheet_to_json(datajson.Sheets[sheetName])
      resolve(result)
    }

    reader.readAsBinaryString(file)
  })
}

const handleUpload = () => {
  const list = importList.value.map((item: any) => {
    return ({
      id: item['ID'],
      name: item['姓名'],
      sex: item['性别'],
      desc: item['描述'],
      amount: item['月薪']
    })
  })
  dataList.value = dataList.value.concat(list)
}

</script>

<style lang="scss" scoped>
.importView {
  height: 100%;
  background-color: #f0f0f0;
  color: #000;
}
</style>
