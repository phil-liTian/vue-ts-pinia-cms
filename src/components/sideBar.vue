<template>
  <div class="sideBar">
    <el-menu
      :default-active="onRoutes"
      :collapse="sideBar.collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      router
    >
      <template v-for="item in items" :key="item.index">
        <el-sub-menu :index="item.index" v-if="item.subs">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            :index="subItem.index"
            v-for="subItem in item.subs"
            :key="subItem.index"
          >
            {{ subItem.title }}
          </el-menu-item>
        </el-sub-menu>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
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
