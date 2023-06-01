<template>
  <div class="editor_page">
    <div class="mgb20 tip_view">wangeditor/editor: 一个产品的价值，就在于解决用户的问题，提高效率、降低成本、增加稳定性和扩展性。</div>

    <div class="editor mgb20" ref="editorRef"></div>
    <lt-button type="primary" @click="handleSubmit">提交</lt-button>
  </div>
</template>
  
<script lang='ts' setup>
import WangEditor from 'wangeditor';
import { onBeforeUnmount, onMounted, ref } from 'vue'
const editorRef = ref(null)
let instance: any
onMounted(() => {
  instance = new WangEditor(editorRef.value)
  instance.create()
})

const handleSubmit = () => {
  console.log('instance.txt', instance.txt);
  console.log('html', instance.txt.html());
  console.log('text', instance.txt.text());
}

onBeforeUnmount(() => {
  instance.destroy()
  instance = null
}) 


</script>
  
<style lang='scss' scoped>
  .editor_page {
    height: calc(100% - 50px);
    background: #fff;
    padding: 20px;
    .tip_view {
      background-color: #f0f0f0;
      border-radius: 12px;
      padding: 20px;
    }

    .editor {

    }
  }
</style>