<template>
  <div class="login-wrap">
    <div class="cms-login">
      <div class="cms-title">内容管理系统</div>
      <lt-form 
        :formConfig="formConfig"
        :formData="loginInfo">
      </lt-form>
      <div class="login-btn">
        <lt-button type="primary" @click="handleLogin">登录</lt-button>
      </div>
      <div class="login_tips">注: 可输入任意用户名和密码进行登录</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { authReq } from '@/service/index'
import { ElMessage } from 'element-plus'
import { usePermissionStore } from '@s/permission.ts'
const formConfig = [
  { label: '用户名', key: 'userName', type: 'input' },
  { label: '密码', key: 'password', type: 'input' }
]
interface ILoginInfo {
  userName: string
  password: string
}

const loginInfo = reactive<ILoginInfo>({
  userName: 'admin',
  password: '123456'
})
const router = useRouter()
const permission = usePermissionStore()
const handleLogin = async () => {
  const { code, result } = await authReq.requestLogin(loginInfo)
  if( code === 200 ) {
    localStorage.setItem('cms_username', result.userName)
    const keys = permission.defaultList[result.userName === 'admin' ? 'admin' : 'user']
    permission.handleSet(keys)
    router.push('/')
    ElMessage.success('登录成功')
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;

  .cms-login {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 350px;
    transform: translate(-50%, -50%);

    .cms-title {
      text-align: center;
    }

    .lt-form {
      width: 100%;
    }
  }
}
</style>
