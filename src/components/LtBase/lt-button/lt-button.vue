<template>
  <div class="lt-button" @click="handleClick">
    <el-button v-bind="$attrs">
      <el-icon v-if="props.icon">
        <component :is="props.icon"></component>
      </el-icon>
      <slot></slot>
    </el-button>
  </div>
</template>
  
<script lang='ts' setup>
  // defineProps、defineEmits、defineExpose、withDefaults都是编译器宏(在编译时进行处理的宏定义),无需单独引入
  const props = defineProps({
    icon: {
      type: String,
      default: ''
    }
  })
  const emits = defineEmits(['click'])

  const handleClick = () => {
    emits('click')
  }
</script>
  
<style lang='less' scoped>
  
</style>