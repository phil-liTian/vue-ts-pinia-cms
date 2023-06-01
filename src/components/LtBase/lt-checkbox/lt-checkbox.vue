<template>
  <div class="lt-checkbox">
    <el-checkbox-group v-model="checkList">
      <el-checkbox 
        v-for="item in dataList" 
        :key="item.key" 
        :label="item.key">
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
  
  <script lang='ts' setup name="LtCheckbox">
  import { computed } from "vue"

  interface ICheckItem {
    key: string,
    label: string
  }
  type ICheckProps = {
    dataList: ICheckItem[],
    modelValue: string[]
  }
  const props = withDefaults(defineProps<ICheckProps>(), {
    dataList: () => [],
    modelValue: () => []
  })
  const emits = defineEmits(['update:modelValue'])

  const checkList = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emits('update:modelValue', val)
    }
  })
</script>
  
<style lang='scss' scoped>
  
</style>