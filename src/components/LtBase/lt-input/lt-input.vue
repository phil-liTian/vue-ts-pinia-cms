<template>
  <div class="lt-input">
    <el-input v-bind="$attrs" v-model="value"></el-input>
  </div>
</template>
  
<script lang='ts' setup>
import { computed } from 'vue'

// 一定要指定ts类型, 否则双向绑定无法生效
interface IProps {
  modelValue: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: ''
})

const emits = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },

  set(val) {
    console.log('val', val);
    
    emits('update:modelValue', val)
  }
})

</script>
  
<style lang='scss' scoped>
  
</style>