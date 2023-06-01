<template>
  <div class="form-page">
    <lt-form 
      label-width="100px"
      :formConfig="formConfig" 
      :formData="state.formData">
    </lt-form>
    <div class="btn-view">
      <lt-button @click="handleReset">重置</lt-button>
      <lt-button type="primary" @click="handleSave">保存</lt-button>
    </div>
  </div>
</template>
  
<script lang='ts' setup>
import { ElMessage } from "element-plus"
import { reactive, getCurrentInstance } from "vue"
 const { proxy } = getCurrentInstance()
 
 const formConfig = [
    { label: '表单名称', key: 'name', type: 'input', required: true, valueType: 'price' },
    { 
      label: '选择器', key: 'frameName', type: 'select',
      dataList: [
        { label: 'vue2->vue3', value: 'vue' },
        { label: 'react', value: 'react' }
      ]
    },
    { label: '单选框', key: 'direction', type: 'radio',
      dataList: [
        { label: 'ios', key: 'ios' },
        { label: 'android', key: 'android' },
        { label: 'hybrid', key: 'hybrid' },
      ]
    },
    { 
      label: '多选框', key: 'skills', type: 'checkbox',
      dataList: [
        { label: 'javascript', key: 'javascript' },
        { label: '抖音', key: 'tiktok' },
        { label: '微信', key: 'wechat' },
        { label: '支付宝', key: 'alipay' },
      ]
    }
 ]
 const _defaultFormData = JSON.stringify({
    name: 'phil',
    frameName: 'vue',
    direction: 'hybrid',
    skills: ['alipay']
  })
 const state = reactive({
    formData: JSON.parse(_defaultFormData)
 })

 const handleReset = () => {
  state.formData = JSON.parse(_defaultFormData)
 }

 const handleSave = () => {
    const res = proxy.$lt_formCheck(formConfig, state.formData)
    if( !res ) return
    // TODO AJAX
    ElMessage.success('保存成功')
 }
</script>
  
<style lang='scss' scoped>
  .form-page {
    background-color: #fff;
    height: calc(100vh - 200px);
    padding: 20px;
    color: #000;

    .btn-view {
      display: flex;
      .lt-button {
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
</style>