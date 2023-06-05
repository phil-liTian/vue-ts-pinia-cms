<template>
  <div class="user-page">
    <typing-card 
      title="个人简介"
      :content="introduction">
    </typing-card>
  </div>
</template>
  
<script lang='ts' setup name="user">
  import typingCard from '@c/typingCard.vue';
  const introduction = `
    <h4>phil 前端开发工程师</h4>
    <p>4年前端工作经验</p>
  `
</script>
  
<style lang='scss' scoped>
  
</style>