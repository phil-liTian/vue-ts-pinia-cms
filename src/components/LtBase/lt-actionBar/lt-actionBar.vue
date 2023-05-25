<template>
  <div class="lt-actionBar">
    <div class="actionItem" v-for="item in actionItem" :key="item.key">
      <component :is="`lt-${item.type}`" v-bind="item" v-model:modelValue="actionData[item.key]"></component>
    </div>
  </div>
</template>
  
<script lang='ts' setup>
  interface IActionBar {
    actionItem: any[],
    actionData: any
  }
  withDefaults(defineProps<IActionBar>(), {
    actionItem: () => [],
    actionData: () => ({})
  })
</script>
  
<style lang='scss' scoped>
  .lt-actionBar {
    display: flex;
    align-items: center;
  }
</style>