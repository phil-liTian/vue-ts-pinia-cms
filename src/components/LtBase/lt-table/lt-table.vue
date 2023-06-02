<template>
  <div class="lt-table">
    <!-- 默认集成顶部搜索区域 -->
    <lt-actionBar 
      @click="handleBarClick"
      :actionItem="actionItem"
      :actionBtns="actionBtns"
      :actionData="actionData">
    </lt-actionBar>
    <div class="lt-table-topLeft" v-if="$slots.topLeft">
      <slot name="topLeft"></slot>
    </div>
    <el-table :data="dataList" border height="450">
      <el-table-column 
        v-bind="item"
        v-for="item in headerList" 
        :key="item.key">

        <template #default="scope" >
          <el-image 
            v-if="item.type === 'image'"
            :src="scope.row[item.prop]" 
            :z-index="10"
            preview-teleported
            :preview-src-list="srcList(scope.row[item.prop])"/>

            <!-- 可自定义table元素中渲染的内容 -->
            <template v-if="item.type === 'slot'">
              <slot name="`slot-${item.key}`"></slot>
            </template>

            <template v-else-if="item.type === 'btnGroups'">
              <div class="btn-view">
                <lt-button 
                  v-bind="btnItem" 
                  v-for="btnItem in item.btnList" 
                  :key="btnItem.key"
                  :size="btnItem.size || 'small'"
                  @click="handleCellClick(scope.row, btnItem)">
                  {{ btnItem.label }}
                </lt-button>
              </div>
            </template>

            <template v-if="item.type && !['slot', 'image', 'btnGroups'].includes(item.type)">
              <component
                :type="scope.row.status"
                v-bind="scope.row"
                :is="`lt-${item.type}`">
                {{ scope.row[item.prop] }}
              </component>
            </template>
        </template>
      </el-table-column>
    </el-table>

    <div class="lt-table-pagination" v-if="pageInfo.total">
      <el-pagination 
        layout="total, prev, pager, next" 
        background 
        :total="pageInfo.total"
        @current-change="handleChangeCurrent">
      </el-pagination>
    </div>
  </div>
</template>
  
<script lang='ts' setup>
  import { computed } from 'vue'

  interface IPageInfo {
    page?: number,
    pageSize?: number,
    total: number
  }
  type ITableProps = {
    dataList: any[],
    headerList: any[],
    actionItem?: any[],
    actionData?: any,
    actionBtns?: any[],
    pageInfo?: IPageInfo
  }

  const props = withDefaults(defineProps<ITableProps>(), {
    dataList: () => [],
    headerList: () => [],
    actionItem: () => [],
    actionBtns: () => [],
    actionData: () => ({}),
    pageInfo: () => ({ total: 0 })
  })

  const emits = defineEmits(['changePage', 'barClick', 'cellClick'])

  const srcList = computed(() => {
    return (imgUrl: string) => {
      return [imgUrl]
    }
  })

  const handleChangeCurrent = (page: number) => {
    let _pageInfo = { ...props.pageInfo, page }
    
    emits('changePage', _pageInfo)
  }

  const handleCellClick = (row: any, item: any) => {
    emits('cellClick', { row, item })
    
  }

  const handleBarClick = (e: any) => {
    emits('barClick', e)
  }
</script>
  
<style lang='scss' scoped>
  .lt-table {
    border-radius: 6px;
    overflow: hidden;
    padding: 20px;
    background-color: #fff;
    color: #000;

    &-topLeft {
      margin-bottom: 10px;
    }

    .lt-actionBar {
      margin-bottom: 10px;
    }

    .btn-view {
      display: flex;
      .lt-button {
        &:not(:last-child) {
          margin-right: 6px;
        }
      }
    }

    &-pagination {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      padding-right: 20px;
    }
  }
</style>