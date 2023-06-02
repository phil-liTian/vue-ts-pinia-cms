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
    phil
    <p>vue、react</p>
  `
</script>
  
<style lang='scss' scoped>
  
</style>