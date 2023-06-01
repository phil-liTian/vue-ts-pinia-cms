<template>
  <div class="markdown_page">
    <div class="mgb20 tip_view">Markdown Editor for Vue3, developed in jsx and typescript, support different themes、beautify content by prettier. <a href="https://imzbf.github.io/md-editor-v3/en-US/demo">md-editor-v3</a> </div>
    <MdEditor v-model="text" />
  </div>
</template>
  
<script lang='ts' setup>
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('Hello Editor!');
</script>
  
<style lang='scss' scoped>
  .markdown_page {
    height: calc(100% - 50px);
    background: #fff;
    padding: 20px;
    .tip_view {
      background-color: #f0f0f0;
      border-radius: 12px;
      padding: 20px;
    }
  }
</style>