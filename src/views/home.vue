<template>
  <v-header />
  <v-side-bar />
  <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
    <v-tags />

    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="home">
import { useTagsStore } from '../store/tags'
import { useSideBarStore } from '@s/sideBar.ts'
import vHeader from '@c/header.vue'
import vTags from '@c/tags.vue'
import vSideBar from '@c/sideBar.vue'

const tags = useTagsStore()
const sidebar = useSideBarStore()
</script>

<style lang="less" scoped></style>
