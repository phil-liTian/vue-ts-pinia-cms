<template>
  <div class="sideBar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="sideBar.collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <el-sub-menu v-permiss="item.meta.permiss" :index="item.index" :key="item.index" v-if="item.subs">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>

          <template v-for="(subItem, subIdx) in item.subs">
            <el-sub-menu v-permiss="subItem.permiss" v-if="subItem.subs" :key="subIdx" :index="subItem.index">
              <template #title>{{ subItem.title }}</template>
              <el-menu-item :index="threeItem.index" v-for="threeItem in subItem.subs" :key="threeItem">
                {{ threeItem.title }}
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else v-permiss="subItem.permiss" :index="subItem.index" :key="subItem.title">{{ subItem.title }}</el-menu-item>
          </template>
          
        </el-sub-menu>
        <template v-else>
          <el-menu-item v-permiss="item.meta.permiss" :index="item.index" :key="item.index">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { items } from './menuConfig'
import { useSideBarStore } from '@s/sideBar.ts'
const route = useRoute()
const onRoutes = computed(() => {
  return route.path
})
const sideBar = useSideBarStore()
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
