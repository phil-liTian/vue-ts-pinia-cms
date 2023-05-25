<template>
  <div class="lt-table">
    <!-- 默认集成顶部搜索区域 -->
    <lt-actionBar 
      :actionItem="actionItem"
      :actionData="actionData">
    </lt-actionBar>
    <el-table :data="dataList">
      <el-table-column 
        v-bind="item"
        v-for="item in headerList" 
        :key="item.key">

        <template #default="scope" v-if="item.type === 'image'">
          <img :src="scope.row[item.prop]" />
        </template>

        <!-- 可自定义table元素中渲染的内容 -->
        <template v-if="item.type === 'slot'">
          <slot name="`slot-${item.key}`"></slot>
        </template>

        <template v-else-if="item.type === 'btnGroups'">
          <div class="btn-view">
            <lt-button v-bind="btnItem" v-for="btnItem in item.btnList" :key="btnItem.key">{{ btnItem.label }}</lt-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  
<script lang='ts' setup>
  type ITableProps = {
    dataList: any[],
    headerList: any[],
    actionItem: any[],
    actionData: any
  }

  withDefaults(defineProps<ITableProps>(), {
    dataList: () => [],
    headerList: () => [],
    actionItem: () => [],
    actionData: () => ({}),
  })
</script>
  
<style lang='scss' scoped>
  .lt-table {
    .btn-view {
      display: flex;
      .lt-button {
        &:not(:last-child) {
          margin-right: 6px;
        }
      }
    }
  }
</style>