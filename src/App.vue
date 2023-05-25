<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import UK from 'element-plus/dist/locale/uk.js'
</script>
<style>
@import '@/assets/style/main.css';
</style>
