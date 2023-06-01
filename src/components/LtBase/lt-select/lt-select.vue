<template>
  <div class="lt-select">
    <el-select v-model="value" v-bind="$attrs">
      <el-option 
        v-for="item in dataList" 
        :key="item.value"
        :label="item[filed.label]"
        :value="objFlag ? item : item[filed.value]"
        :disabled="item.disabled">
      </el-option>
    </el-select>
  </div>
</template>
  
<script lang='ts' setup>
import { computed } from "vue"

  interface IOptItem {
    label: string,
    key: string,
    value: string | number,
    disabled: boolean,
    [key: string]: any
  }
  type IOptFiled = {
    label: string,
    value: string,
    [key: string]: any
  }

  type ISelect = {
    dataList: IOptItem[],
    objFlag?: boolean, // 用于控制返回的是数据是对象还仅是value
    modelValue: any,
    filed?: IOptFiled
  }
  const emits = defineEmits(['update:modelValue'])
  const props = withDefaults(defineProps<ISelect>(), {
    dataList: () => [],
    objFlag: false,
    modelValue: '',
    filed: () => ({
      label: 'label',
      value: 'value'
    })
  })

  const value = computed({
    get() {
      return props.modelValue
    },
    set(newVal) {
      // const { objFlag, dataList } = props      
      let res = newVal
      console.log('res', res);
      // 可做返回特定字段
      emits('update:modelValue', res)
    }
  })

</script>
  
<style lang='scss' scoped>
  
</style>