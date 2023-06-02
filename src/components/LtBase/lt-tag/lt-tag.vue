<template>
  <div class="lt-tag">
    <el-tag v-bind="$attrs">
      <slot></slot>
      
    </el-tag>
  </div>
</template>
  
<script lang='ts' setup>
</script>
  
<style lang='scss' scoped>
  .lt-tag {
    padding: 2px 4px;
  }
</style>