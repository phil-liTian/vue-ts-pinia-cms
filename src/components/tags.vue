<template>
  <div class="tags">
    <ul>
      <li
        v-for="(tag, index) in tags.list"
        :class="{ active: isActive(tag.path) }"
        :key="tag.path"
        class="tags-li"
      >
        <router-link class="tags-li-title" :to="tag.path">{{
          tag.title
        }}</router-link>

        <el-icon @click="closeTags(index)"> <Close /></el-icon>
      </li>
    </ul>
    <!-- 点击全部关闭, 或者关闭其他 -->
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button type="primary">
          标签选项
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { useTagsStore } from '@s/tags.ts'
const tags = useTagsStore()
const route = useRoute()
const router = useRouter()
type ICommandType = 'other' | 'all'
const isActive = computed(() => {
  return (path: string) => {
    return route.path === path
  }
})

//关闭tag：如果关闭的是当前的route(后面还有tag的话, 默认激活后面的tag, 没有的话, 默认激活前一个), 否则正常关闭即可
const closeTags = (index: number) => {
  const removeItem = tags.list[index]
  tags.removeTagItem(index)
  const item = tags.list[index] ? tags.list[index] : tags.list[index - 1]
  if( item ) {
    removeItem.path === route.fullPath && router.push(item.fullPath)
  } else {
    router.push('/')
  }
}

// 设置标签
const setTags = (route: any) => {
  const isExistTag = tags.list.some(item => item.path === route.fullPath)
  if( !isExistTag ) {
    // 最多只能有8个tag
    if( tags.list.length > 8 ) tags.removeTagItem(0)
    
    tags.addTagsItem({
      title: route.meta.name,
      name: route.name,
      path: route.fullPath
    })
  }
}

// 路由变化时执行 
onBeforeRouteUpdate((to) => {
  setTags(to)
})

// 全部关闭
const closeAllTags = () => {
  tags.clearTag()
  router.push('/')
}

// 关闭其他
const closeOtherTags = () => {
  const otherTagList = tags.list.filter(item => {
    return item.path !== route.path 
  })

  tags.closeOtherTags(otherTagList)
}

// 点击下拉内容
const handleTags = (command: ICommandType) => {
  command === 'all' ? closeAllTags() : closeOtherTags()
}

</script>

<style lang="scss" scoped>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  display: flex;
  align-items: center;
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  border: 1px solid #409eff;
  background-color: #409eff;
  color: #fff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
