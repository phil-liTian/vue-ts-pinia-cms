<template>
  <div class="v-sideBar">collapse: {{ sideBar.collapse }}</div>
</template>
  
<script lang='ts' setup>
 import { useSideBarStore } from '@s/sideBar.ts'
 const sideBar = useSideBarStore()
</script>
  
<style lang='less' scoped>
  
</style>