<template>
  <div class="management-page">
    <lt-select 
      v-model="state.userType" 
      :dataList="idList"
      @change="handleChangeUserType">
    </lt-select>
    <div class="mgb20">
      <el-tree
        ref="manageRef"
        show-checkbox
        default-expand-all
        node-key="id"
        :data="state.data"
        :default-checked-keys="defaultCheckedKeys">
      </el-tree>
    </div>
    <lt-button type="primary" @click="handelSave">保存权限</lt-button>
  </div>
</template>
  
<script lang='ts' setup>
import { computed, reactive, ref } from 'vue'
import { usePermissionStore } from '@s/permission.ts'
import { ElTree } from 'element-plus'
const idList = [
  { label: '超级管理员', value: 'admin' },
  { label: '普通用户', value: 'user' }
]
const premiss = usePermissionStore()
const manageRef = ref<InstanceType<typeof ElTree>>()
const state = reactive({
  userType: 'user',
  data: [
    {
      id: '1',
      label: '系统首页'
    },
    {
      id: '12',
      label: '表格相关',
      children: [
        { id: '3', label: '常用表格' },
        { id: '4', label: '导入excel' },
        { id: '5', label: '导出excel' },
      ]
    },
    {
      id: '6',
      label: 'tab选项卡'
    },
    {
      id: '13',
      label: '表单相关',
      children: [
        { id: '8', label: '基本表单' },
        { id: '9', label: '文件上传' },
        { id: '10', label: '富文本编辑器' },
      ]
    },
  ]
})

const defaultCheckedKeys = computed(() => {
  return premiss.defaultList[state.userType]
})

const handelSave = () => {
  // ! 非空断言操作符，告诉编译器，该变量不会为空
  console.log('manageRef', manageRef.value!.getCheckedKeys(false));
}

const handleChangeUserType = () => {
  manageRef.value!.setCheckedNodes(premiss.defaultList[state.userType])
}

</script>
  
<style lang='scss' scoped>
  .management-page {
    background-color: #fff;
    height: calc(100vh - 200px);
    padding: 20px;
    color: #000;

    .lt-button {
      margin-top: 10px;
    }
  }
</style>