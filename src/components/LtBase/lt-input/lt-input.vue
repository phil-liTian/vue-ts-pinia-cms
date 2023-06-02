<template>
  <div class="lt-input">
    <el-input v-bind="$attrs" v-model="value"></el-input>
  </div>
</template>
  
<script lang='ts' setup>
import { computed, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any

// 一定要指定ts类型, 否则双向绑定无法生效
interface IProps {
  modelValue: string,
  valueType: 'number' | 'code' | ''
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  valueType: ''
})

const emits = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },

  set(val) {
    let res = props.valueType ? proxy.$lt_checkIptVal(val, props.valueType) : val
    emits('update:modelValue', res)
  }
})

</script>
  
<style lang='scss' scoped>
  
</style>