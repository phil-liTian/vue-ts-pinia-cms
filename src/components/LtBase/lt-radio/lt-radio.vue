<template>
  <div class="lt-radio">
    <el-radio-group v-model="value">
      <el-radio 
        v-for="item in dataList" 
        :key="item.key" 
        :label="item.label">
      </el-radio>
    </el-radio-group>
  </div>
</template>
  
<script lang='ts' setup>
  import { computed } from 'vue';
  interface IRadioItem {
    key: string,
    label: string
  }
  type IRadio = {
    dataList: IRadioItem[],
    modelValue: string
  }
  const props = withDefaults(defineProps<IRadio>(), {
    dataList: () => [],
    modelValue: ''
  })
  const emits = defineEmits(['update:modelValue'])
  const value = computed({
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