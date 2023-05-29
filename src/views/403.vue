<template>
  <div class="error-page">
    <div class="error-status">4 <span>0</span> 3</div>
    <div class="error-desc">您暂无该页面访问权限</div>
    <div class="error-handles">
      <router-link to="/">
        <lt-button type="primary">返回首页</lt-button>
      </router-link>
      <lt-button class="error-btn" @click="goBack">返回上一页</lt-button>
    </div>
  </div>
</template>
  
<script lang='ts' setup name="403">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goBack = () => {
    router.go(-2)
  }
</script>
  
<style lang='scss' scoped>
  .error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    box-sizing: border-box;
    .error-status {
      line-height: 1;
      font-size: 52px;
      font-weight: bolder;
      color: #f02d2d;
      >span {
        color: #00a854;
      }
    }

    .error-desc {
      font-size: 30px;
      color: #777;
    }

    .error-handles {
      display: flex;
      margin-top: 30px;
      padding-bottom: 200px;
    }
    .error-btn {
      margin-left: 10px;
    }
  }
</style>