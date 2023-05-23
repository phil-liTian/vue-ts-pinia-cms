<template>
  <div class="home">
    <v-header />
    <v-sidebar />
    <v-tags />
    home: {{ tags.list }}
    <el-button @click="addTag">增加</el-button>
    {{ state.name || '暂无数据' }}
    <el-date-picker></el-date-picker>
  </div>
</template>
  
<script setup lang="ts" name="home">
import { onMounted, reactive } from 'vue'
import { useTagsStore } from '../store/tags';
import vHeader from '../components/header.vue'
import vSidebar from '../components/sideBar.vue'
import vTags from '../components/tags.vue'
const tags = useTagsStore()

const state = reactive({
  name: 'phil'
})

const addTag = () => {
  tags.addTagsItem({ title: 'zs', path: '/home', name: 'zs' })
}

onMounted(() => {
  console.log('onMounted');
})
</script>
  
<style lang='less' scoped>
  
</style>