<template>
  <el-form class="lt-form" v-bind="$attrs">
    <el-form-item v-for="item in formConfig" :label="item.label" :key="item.key">
      <div v-if="item.type === 'slot'">
        <slot></slot>
      </div>
      <component v-else v-model="formData[item.key]" :is="`lt-${item.type}`"></component>
    </el-form-item>
  </el-form>
</template>
  
<script lang='ts' setup>

interface formItem {
  label?: string,
  key: string,
  type?: string
}

interface IProps {
  formConfig: formItem[],
  formData: any
}

withDefaults(defineProps<IProps>(), {
  formConfig: () => [],
  formData: {}
})
  
</script>
  
<style lang='scss' scoped>
  
</style>