<template>
  <el-form ref="formRef" class="lt-form" v-bind="$attrs">
    <el-form-item :class="`lt-form-item__col${col}`" v-for="item in formConfig" :label="item.label" :key="item.key" :prop="item.key">
      <div v-if="item.type === 'slot'">
        <slot></slot>
      </div>
      <component v-else v-bind="item" v-model="formData[item.key]" :is="`lt-${item.type}`"></component>
    </el-form-item>
  </el-form>
</template>
  
<script lang='ts' setup>
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
interface formItem {
  label?: string,
  key: string,
  type?: string
}

interface IProps {
  formConfig: formItem[],
  formData: any,
  col?: number
}

const formRef = ref<FormInstance>()

withDefaults(defineProps<IProps>(), {
  formConfig: () => [],
  formData: {},
  col: 1 // 默认一列就是一行
})
  
</script>
  
<style lang='scss' scoped>
  :deep.lt-form {
    color: #000;
    .lt-form-item__col1 {
      .el-form-item__content {
        width: 100%;

        > * {
          width: 100%;
        }

        .el-select {
          width: 100%;
        }
      }
    }
  }
</style>