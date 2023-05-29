<template>
  <div class="notFound-page">
    <div class="notFound-status">4 <span>0</span> 4</div>
    <div class="notFound-desc">您当前访问页面不存在</div>
    <div class="notFound-handles">
      <router-link to="/">
        <lt-button type="primary">返回首页</lt-button>
      </router-link>
      <lt-button class="notFound-btn" @click="goBack">返回上一页</lt-button>
    </div>
  </div>
</template>
  
<script lang='ts' setup name="403">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goBack = () => {
    router.go(-1)
  }
</script>
  
<style lang='scss' scoped>
  .notFound-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100% ;
    height: 100vh;

    .notFound-status {
      line-height: 1;
      font-size: 52px;
      font-weight: bolder;
      color: #f02d2d;
      >span {
        color: #00a854;
      }
    }

    .notFound-desc {
      font-size: 30px;
      color: #777;
    }

    .notFound-handles {
      display: flex;
      margin-top: 30px;
      padding-bottom: 200px;
    }
    .notFound-btn {
      margin-left: 10px;
    }
  }
</style>