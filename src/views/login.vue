<template>
  <div class="login-wrap">
    <div class="cms-login">
      <div class="cms-title">内容管理系统</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
interface ILoginInfo {
  userName: string,
  password: string
}

const loginInfo = reactive<ILoginInfo> ({
  userName: 'admin',
  password: '123456'
})
</script>

<style lang="less" scoped></style>
