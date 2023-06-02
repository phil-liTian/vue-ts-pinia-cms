<template>
  <el-card class="typing-card">
    <template v-if="title" #header>
      <div >{{ title }}</div>
    </template>
    <div
      :style="{display: 'none'}"
      ref='sourceEl'
      v-html="content"
    ></div>
    <div ref='outputEl'></div>
  </el-card>
</template>
  
<script lang='ts' setup>
import Typing from '@u/type.ts'
import { onMounted, ref } from 'vue'
  type ICard = {
    content: string,
    title: string
  }
  withDefaults(defineProps<ICard>(), {
    content: '',
    title: ''
  })
  const sourceEl = ref(null)
  const outputEl = ref(null)

  onMounted(() => {
    const typing = new Typing({
      source: sourceEl.value,
      output: outputEl.value
    })
    typing.start()
  })

</script>
  
<style lang='scss' scoped>
  
</style>